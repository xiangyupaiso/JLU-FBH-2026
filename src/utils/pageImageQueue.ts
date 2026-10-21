type ArtworkElement = HTMLImageElement | SVGImageElement | HTMLElement;
type FailureReason = "network" | "decode" | "timeout" | "cancelled";
type DownloadPriority = "high" | "low" | (() => "high" | "low");

interface Source {
  url: string;
  srcSet: string;
  sizes: string;
  crossOrigin: string | null;
}

interface DecodedSource extends Source {
  resolvedUrl: string;
  resolvedSrcSet: string;
}

interface Binding {
  element: ArtworkElement;
  key: string;
  source: Source;
  fallback: string;
  background: boolean;
  backgroundProperty: string;
  hero: boolean;
  critical: boolean;
}

interface Job {
  key: string;
  source: Source;
  bindings: Set<Binding>;
  hinted: boolean;
  status: "pending" | "loading" | "loaded" | "failed";
  rank: number;
}

const ROUTE_SELECTOR = "main.wiki-page--route";
const SOURCE_SELECTOR = "img[data-page-src], image[data-page-src], [data-page-background-src]";
// Bound transfers and decoding together. Background work leaves two slots
// available for the opening or a newly visible image, even when it stalls.
const IMAGE_DEADLINE_MS = 15_000;
const NETWORK_RETRIES = 2;
const MAX_DOWNLOADS = 3;
const MAX_BACKGROUND_DOWNLOADS = 1;
const BACKGROUND_RANK = 3;
const decodedSources = new Map<string, DecodedSource>();
const loadedElements = new WeakMap<Element, string>();
// A null rank holds optional work until that route's critical images settle.
const pendingDownloads: { rank: () => number | null; start: (priority: "high" | "low") => Promise<void> }[] = [];
let downloading = 0;
let backgroundDownloads = 0;
const inFlightDownloads = new Map<
  string,
  { promise: Promise<DecodedSource>; signal: AbortSignal }
>();

function pumpDownloads() {
  while (downloading < MAX_DOWNLOADS) {
    let next = -1;
    let best = Infinity;
    pendingDownloads.forEach((request, index) => {
      const rank = request.rank();
      if (rank === null || rank >= best) return;
      if (rank >= BACKGROUND_RANK && backgroundDownloads >= MAX_BACKGROUND_DOWNLOADS) return;
      next = index;
      best = rank;
    });
    if (next < 0) return;
    const [request] = pendingDownloads.splice(next, 1);
    const background = best >= BACKGROUND_RANK;
    downloading++;
    if (background) backgroundDownloads++;
    void request.start(background ? "low" : "high").finally(() => {
      downloading--;
      if (background) backgroundDownloads--;
      pumpDownloads();
    });
  }
}

/** Reconsider queued Home artwork when its scene becomes current. */
export function refreshPageImagePriorities() {
  queueMicrotask(pumpDownloads);
}

export class PageImageQueueError extends Error {
  readonly url: string;
  readonly reason: FailureReason;
  readonly critical: boolean;

  constructor(url: string, reason: FailureReason, critical = false) {
    super(`${critical ? "Critical image" : "Image"} ${reason}: ${url}`);
    this.name = "PageImageQueueError";
    this.url = url;
    this.reason = reason;
    this.critical = critical;
  }
}

function deferred() {
  let resolve!: () => void;
  let reject!: (error: Error) => void;
  const promise = new Promise<void>((yes, no) => {
    resolve = yes;
    reject = no;
  });
  // Callers may attach after the browser reports an immediately cached error.
  void promise.catch(() => {});
  return { promise, resolve, reject };
}

function sourceKey(source: Source) {
  return JSON.stringify([source.url, source.crossOrigin, source.srcSet, source.srcSet ? source.sizes : ""]);
}

function artworkSource(element: ArtworkElement): Source {
  const crossOrigin = element.getAttribute("crossorigin");
  const raw = element.getAttribute("data-page-background-src") || element.getAttribute("data-page-src") || "";
  return {
    url: raw ? new URL(raw, document.baseURI).href : "",
    srcSet: element.getAttribute("data-page-srcset") || "",
    sizes: element.getAttribute("sizes") || "",
    crossOrigin: crossOrigin === null ? null : crossOrigin === "use-credentials" ? crossOrigin : "anonymous",
  };
}

function isContentImage(element: Element, route: Element) {
  // The frame owns a decorative background, but its descendants are the article.
  if (!route.contains(element) || element.matches(".route-frame") ||
    element.closest('nav, footer, .wiki-hero, .activities-hero, [data-page-critical="true"]')) return false;
  for (let ancestor: Element | null = element; ancestor && ancestor !== route.parentElement; ancestor = ancestor.parentElement) {
    if (ancestor.hasAttribute("inert") || ancestor.hasAttribute("hidden") || ancestor.getAttribute("aria-hidden") === "true") return false;
    if (ancestor instanceof HTMLDialogElement && !ancestor.open) return false;
    if (ancestor.getAttribute("role") === "tabpanel" &&
      (ancestor.getAttribute("data-state") === "inactive" || ancestor.getAttribute("aria-expanded") === "false")) return false;
  }
  return element.getClientRects().length > 0 && getComputedStyle(element).visibility !== "hidden";
}

/** Respect both the window and the reader's clipped/projected viewport. */
function viewportDistance(element: Element) {
  if (!element.getClientRects().length || element.closest("[hidden], [inert]")) return Infinity;
  const style = getComputedStyle(element);
  if (style.display === "none" || style.visibility === "hidden") return Infinity;
  const rect = element.getBoundingClientRect();
  if (!rect.width || !rect.height) return Infinity;
  let top = 0, bottom = window.innerHeight, left = 0, right = window.innerWidth;
  const reader = element.closest(".route-frame__scroll");
  if (reader && /^(auto|scroll|hidden|clip)$/.test(getComputedStyle(reader).overflowY)) {
    const bounds = reader.getBoundingClientRect();
    top = Math.max(top, bounds.top);
    bottom = Math.min(bottom, bounds.bottom);
    left = Math.max(left, bounds.left);
    right = Math.min(right, bounds.right);
  }
  if (bottom <= top || right <= left) return Infinity;
  return Math.max(top - rect.bottom, rect.top - bottom, left - rect.right, rect.left - right, 0);
}

function retryUrl(url: string, attempt: number) {
  const retry = new URL(url, document.baseURI);
  retry.searchParams.set("circure_image_retry", `${Date.now()}-${attempt}`);
  return retry.href;
}

/** One probe owns the network slot until load AND decoding have completed. */
function probe(source: Source, signal: AbortSignal, deadline: number, priority: "high" | "low"): Promise<DecodedSource> {
  if (signal.aborted) return Promise.reject(new PageImageQueueError(source.url, "cancelled"));
  if (Date.now() >= deadline) return Promise.reject(new PageImageQueueError(source.url, "timeout"));
  return new Promise((resolve, reject) => {
    const image = new Image();
    let settled = false;
    let decoding = false;
    const finish = (error?: PageImageQueueError) => {
      if (settled) return;
      settled = true;
      window.clearTimeout(timeout);
      image.removeEventListener("load", loaded);
      image.removeEventListener("error", failed);
      signal.removeEventListener("abort", cancelled);
      if (error) {
        // Removing every source cancels an unfinished transfer before the next slot.
        image.removeAttribute("srcset");
        image.removeAttribute("src");
        reject(error);
      } else {
        resolve({ ...source, resolvedUrl: source.url, resolvedSrcSet: source.srcSet });
      }
    };
    const loaded = () => {
      if (decoding || settled) return;
      decoding = true;
      if (!image.naturalWidth) {
        finish(new PageImageQueueError(source.url, "network"));
        return;
      }
      Promise.resolve(image.decode?.()).then(
        () => finish(),
        () => finish(new PageImageQueueError(source.url, "decode")),
      );
    };
    const failed = () => finish(new PageImageQueueError(source.url, "network"));
    const cancelled = () => finish(new PageImageQueueError(source.url, "cancelled"));
    const timeout = window.setTimeout(
      () => finish(new PageImageQueueError(source.url, "timeout")),
      Math.max(0, deadline - Date.now()),
    );
    image.addEventListener("load", loaded, { once: true });
    image.addEventListener("error", failed, { once: true });
    signal.addEventListener("abort", cancelled, { once: true });
    if (signal.aborted) {
      cancelled();
      return;
    }
    if (source.crossOrigin !== null) image.crossOrigin = source.crossOrigin;
    image.loading = "eager";
    image.fetchPriority = priority;
    if (source.sizes) image.sizes = source.sizes;
    if (source.srcSet) image.srcset = source.srcSet;
    image.src = source.url;
    if (image.complete && image.naturalWidth > 0) loaded();
  });
}

async function download(source: Source, fallback: string, signal: AbortSignal, priority: "high" | "low") {
  const key = sourceKey(source);
  const previous = decodedSources.get(key);
  if (previous) return previous;
  const deadline = Date.now() + IMAGE_DEADLINE_MS;
  let lastError: PageImageQueueError | undefined;
  for (let attempt = 0; attempt <= NETWORK_RETRIES; ++attempt) {
    try {
      // A retry changes only an explicitly failed URL, never a slow transfer.
      const requested = attempt ? { ...source, url: retryUrl(source.url, attempt), srcSet: "" } : source;
      const decoded = await probe(requested, signal, deadline, priority);
      decodedSources.set(key, decoded);
      return decoded;
    } catch (error) {
      lastError = error as PageImageQueueError;
      if (lastError.reason === "decode") break;
      if (lastError.reason !== "network" || signal.aborted) throw lastError;
    }
  }
  if (fallback && fallback !== source.url) {
    const decoded = await probe({ ...source, url: fallback, srcSet: "" }, signal, deadline, priority);
    decodedSources.set(key, decoded);
    return decoded;
  }
  throw lastError ?? new PageImageQueueError(source.url, "network");
}

function downloadQueued(
  source: Source,
  fallback: string,
  signal: AbortSignal,
  rank: () => number | null,
  onStart?: () => void,
) {
  const key = sourceKey(source);
  if (signal.aborted) return Promise.reject(new PageImageQueueError(source.url, "cancelled"));
  const existing = inFlightDownloads.get(key);
  // A request's AbortSignal belongs to the queue that started it. Sharing it
  // with another queue lets a route teardown cancel that queue's still-needed
  // image. StrictMode's setup/cleanup replay exposed this on the Home opening.
  if (existing && existing.signal === signal && !existing.signal.aborted) return existing.promise;
  const enqueue = () => new Promise<DecodedSource>((resolve, reject) => {
    const cancelled = () => {
      const index = pendingDownloads.indexOf(request);
      if (index < 0) return; // An active probe owns its cancellation and slot.
      pendingDownloads.splice(index, 1);
      signal.removeEventListener("abort", cancelled);
      reject(new PageImageQueueError(source.url, "cancelled"));
      queueMicrotask(pumpDownloads);
    };
    const request = {
      rank,
      start: async (priority: "high" | "low") => {
        try {
          if (signal.aborted) throw new PageImageQueueError(source.url, "cancelled");
          onStart?.();
          resolve(await download(source, fallback, signal, priority));
        } catch (error) {
          reject(error);
        } finally {
          signal.removeEventListener("abort", cancelled);
        }
      },
    };
    pendingDownloads.push(request);
    signal.addEventListener("abort", cancelled, { once: true });
    if (signal.aborted) cancelled();
    queueMicrotask(pumpDownloads);
  });
  // Page artwork can start alongside the loader illustration. The shared
  // pool still bounds transfers; decorative loader layers have their own
  // single low-priority request in index.html.
  const promise = enqueue();
  inFlightDownloads.set(key, { promise, signal });
  const forget = () => {
    if (inFlightDownloads.get(key)?.promise === promise) inFlightDownloads.delete(key);
  };
  void promise.then(
    forget,
    forget,
  );
  return promise;
}

/** Retain the caller API; Home and readers share the bounded pool and cache. */
export function loadPageImageSerial(
  url: string,
  options: {
    signal?: AbortSignal;
    crossOrigin?: string | null;
    srcSet?: string;
    sizes?: string;
    fallback?: string;
    priority?: DownloadPriority;
  } = {},
): Promise<string> {
  if (!url) return Promise.resolve("");
  url = new URL(url, document.baseURI).href;
  const source: Source = {
    url,
    crossOrigin: options.crossOrigin === undefined || options.crossOrigin === null ? null : options.crossOrigin === "use-credentials" ? "use-credentials" : "anonymous",
    srcSet: options.srcSet || "",
    sizes: options.sizes || "",
  };
  return downloadQueued(source, options.fallback || "", options.signal ?? new AbortController().signal,
    () => (typeof options.priority === "function" ? options.priority() : options.priority) === "low" ? BACKGROUND_RANK : 0)
    .then((decoded) => decoded.resolvedUrl);
}

function paint(binding: Binding, source: DecodedSource) {
  const element = binding.element;
  if (loadedElements.get(element) === binding.key && element.dataset.pageLoaded === "true") return;
  if (binding.background) {
    element.style.setProperty(binding.backgroundProperty, `url(${JSON.stringify(source.resolvedUrl)})`);
  } else if (element instanceof HTMLImageElement) {
    element.loading = "eager";
    if (source.resolvedSrcSet) element.srcset = source.resolvedSrcSet;
    else element.removeAttribute("srcset");
    element.src = source.resolvedUrl;
  } else {
    element.setAttribute("href", source.resolvedUrl);
  }
  loadedElements.set(element, binding.key);
  element.dataset.pageLoaded = "true";
  element.dataset.pageImageState = "loaded";
}

export function createPageImageQueue(root: HTMLElement) {
  const ready = deferred();
  const bindings = new Map<Element, Binding>();
  const jobs = new Map<string, Job>();
  let disposed = false;
  let criticalFinished = false;
  let scanQueued = false;
  let viewportFrame = 0;
  const controllers = new Map<Job, AbortController>();

  const isCritical = (job: Job) => [...job.bindings].some((binding) => binding.critical && bindings.get(binding.element) === binding);
  const liveBindings = (job: Job) => [...job.bindings].filter((binding) => bindings.get(binding.element) === binding && root.contains(binding.element));
  const updateReady = () => {
    if (criticalFinished || disposed) return;
    const critical = [...jobs.values()].filter(isCritical);
    // Critical means "attempt before entry", not "must succeed or block the
    // page". A failed image keeps its reserved space and must not prevent the
    // remaining first-screen images from getting their turn.
    if (critical.every((job) => job.status === "loaded" || job.status === "failed")) {
      criticalFinished = true;
      ready.resolve();
    }
  };

  // Measure once per collection/scroll frame, not for every scheduler comparison.
  function updateRanks() {
    const route = root.querySelector(ROUTE_SELECTOR);
    for (const job of jobs.values()) {
      if (job.status !== "pending") continue;
      const live = liveBindings(job);
      job.rank = 6;
      for (const binding of live) {
        if (binding.hero) { job.rank = 0; break; }
        if (binding.critical) { job.rank = Math.min(job.rank, 1); continue; }
        const element = binding.element;
        const content = !!route && isContentImage(element, route);
        if (content) job.rank = Math.min(job.rank, 4);
        const distance = viewportDistance(element);
        if (!Number.isFinite(distance)) continue;
        const rank = distance === 0 ? 2 : content && distance < window.innerHeight ? 3 : content ? 4 : 5;
        job.rank = Math.min(job.rank, rank);
      }
    }
  }

  function run() {
    if (disposed) return;
    updateReady();
    updateRanks();
    for (const job of jobs.values()) {
      if (job.status !== "pending" || controllers.has(job)) continue;
      if (!liveBindings(job).length && !job.hinted) continue;
      const controller = new AbortController();
      controllers.set(job, controller);
      const fallback = liveBindings(job).find((binding) => binding.fallback)?.fallback || "";
      void downloadQueued(job.source, fallback, controller.signal,
        () => !criticalFinished && !isCritical(job) ? null : job.rank,
        () => {
          job.status = "loading";
          for (const binding of liveBindings(job)) binding.element.dataset.pageImageState = "loading";
        },
      ).then((decoded) => {
        if (disposed || controller.signal.aborted) return;
        for (const binding of liveBindings(job)) paint(binding, decoded);
        job.status = "loaded";
      }, () => {
        if (disposed || controller.signal.aborted) return;
        job.status = "failed";
        for (const binding of liveBindings(job)) {
          binding.element.dataset.pageLoaded = "false";
          binding.element.dataset.pageImageState = "error";
        }
      }).finally(() => {
        controllers.delete(job);
        updateReady();
        // Starting background work does not require a pointer or scroll event.
        queueMicrotask(pumpDownloads);
      });
    }
    queueMicrotask(pumpDownloads);
  }

  function collect() {
    if (disposed) return;
    for (const [element, binding] of bindings) {
      if (root.contains(element) && element.matches(SOURCE_SELECTOR)) continue;
      bindings.delete(element);
      jobs.get(binding.key)?.bindings.delete(binding);
    }
    for (const job of jobs.values()) job.hinted = false;
    const elements = [
      ...(root.matches(SOURCE_SELECTOR) ? [root] : []),
      ...root.querySelectorAll<ArtworkElement>(SOURCE_SELECTOR),
    ];
    const route = root.querySelector(ROUTE_SELECTOR);
    let firstContentUrl = "";
    for (const element of elements) {
      const source = artworkSource(element);
      if (!source.url || source.url.startsWith("#")) {
        bindings.delete(element);
        continue;
      }
      const background = element.hasAttribute("data-page-background-src");
      const hero = !!element.closest(".wiki-hero, .activities-hero") ||
        element.getAttribute("data-page-critical") === "true" ||
        element.getAttribute("data-page-priority") === "critical";
      const content = !!route && !hero && isContentImage(element, route);
      // Keep the first article figure ready even when a tall Hero places it
      // below the fold. Other visible figures join the gate; distant figures
      // no longer hold the cover just because they appear early in DOM order.
      if (content && !firstContentUrl) firstContentUrl = source.url;
      const critical = hero || (content && (source.url === firstContentUrl || viewportDistance(element) === 0));
      const key = sourceKey(source);
      let binding = bindings.get(element);
      if (binding?.key !== key) {
        if (binding) jobs.get(binding.key)?.bindings.delete(binding);
        binding = { element, source, key, background, hero, backgroundProperty: element.getAttribute("data-page-background-property") || "--route-hero-image", critical, fallback: element.getAttribute("data-page-fallback-src") || "" };
        bindings.set(element, binding);
        element.dataset.pageLoaded = loadedElements.get(element) === key ? "true" : "false";
        if (loadedElements.get(element) !== key) element.dataset.pageImageState = "pending";
      } else {
        binding.critical = critical;
        binding.hero = hero;
        binding.backgroundProperty = element.getAttribute("data-page-background-property") || "--route-hero-image";
        binding.fallback = element.getAttribute("data-page-fallback-src") || "";
      }
      let job = jobs.get(key);
      if (!job) {
        job = { key, source, bindings: new Set(), hinted: false, status: "pending", rank: 6 };
        jobs.set(key, job);
      }
      job.bindings.add(binding);
      const cached = decodedSources.get(key);
      if (cached && !controllers.has(job)) {
        paint(binding, cached);
        job.status = "loaded";
      }
    }
    for (const hint of root.querySelectorAll<HTMLElement>("[data-page-image-hints]")) {
      let sources: unknown;
      try {
        sources = JSON.parse(hint.getAttribute("data-page-image-hints") || "[]");
      } catch {
        continue;
      }
      if (!Array.isArray(sources)) continue;
      for (const url of sources) {
        if (typeof url !== "string" || !url) continue;
        const source: Source = { url: new URL(url, document.baseURI).href, srcSet: "", sizes: "", crossOrigin: null };
        const key = sourceKey(source);
        let job = jobs.get(key);
        if (!job) {
          job = { key, source, bindings: new Set(), hinted: true, status: decodedSources.has(key) ? "loaded" : "pending", rank: 6 };
          jobs.set(key, job);
        }
        job.hinted = true;
      }
    }
    for (const job of jobs.values()) {
      if (liveBindings(job).length || job.hinted) continue;
      controllers.get(job)?.abort();
      jobs.delete(job.key);
    }
    // A Hero always precedes content resources, even if placed later in DOM.
    const ordered = [...jobs.values()].sort((a, b) =>
      Number([...b.bindings].some((binding) => binding.hero)) -
      Number([...a.bindings].some((binding) => binding.hero)),
    );
    jobs.clear();
    for (const job of ordered) jobs.set(job.key, job);
    run();
  }

  function viewportChanged() {
    if (disposed || viewportFrame) return;
    viewportFrame = requestAnimationFrame(() => {
      viewportFrame = 0;
      if (disposed) return;
      updateRanks();
      pumpDownloads();
    });
  }

  const observer = new MutationObserver(() => {
    if (scanQueued || disposed) return;
    scanQueued = true;
    queueMicrotask(() => {
      scanQueued = false;
      collect();
    });
  });
  observer.observe(root, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["data-page-src", "data-page-srcset", "data-page-background-src", "data-page-background-property", "data-page-critical", "data-page-priority", "data-page-fallback-src", "data-page-image-hints", "crossorigin", "sizes", "hidden", "inert", "aria-hidden", "data-state"],
  });
  window.addEventListener("scroll", viewportChanged, { capture: true, passive: true });
  window.addEventListener("resize", viewportChanged, { passive: true });
  collect();

  return {
    criticalReady: ready.promise,
    dispose: () => {
      if (disposed) return;
      disposed = true;
      observer.disconnect();
      window.removeEventListener("scroll", viewportChanged, true);
      window.removeEventListener("resize", viewportChanged);
      cancelAnimationFrame(viewportFrame);
      for (const controller of controllers.values()) controller.abort();
      controllers.clear();
      const cancelled = new PageImageQueueError("route", "cancelled");
      ready.reject(cancelled);
      bindings.clear();
      jobs.clear();
    },
  };
}
