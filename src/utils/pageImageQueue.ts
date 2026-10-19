type ArtworkElement = HTMLImageElement | SVGImageElement | HTMLElement;
type FailureReason = "network" | "decode" | "timeout" | "cancelled";

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
  settled: Promise<void>;
  resolve: () => void;
  reject: (error: Error) => void;
}

const ROUTE_SELECTOR = "main.wiki-page--route";
const SOURCE_SELECTOR = "img[data-page-src], image[data-page-src], [data-page-background-src]";
const IMAGE_DEADLINE_MS = 120_000;
const NETWORK_RETRIES = 2;
const INTERACTION_EVENTS = ["pointermove", "pointerdown", "touchstart", "keydown", "wheel"] as const;
const decodedSources = new Map<string, DecodedSource>();
const loadedElements = new WeakMap<Element, string>();
// Home lookahead never overtakes a newly requested first screen.
const pendingDownloads: { priority: "high" | "low"; start: () => Promise<void> }[] = [];
let downloading = false;
const inFlightDownloads = new Map<
  string,
  { promise: Promise<DecodedSource>; signal: AbortSignal }
>();

function pumpDownloads() {
  if (downloading || !pendingDownloads.length) return;
  const high = pendingDownloads.findIndex((request) => request.priority === "high");
  const [request] = pendingDownloads.splice(high < 0 ? 0 : high, 1);
  downloading = true;
  void request.start().finally(() => {
    downloading = false;
    pumpDownloads();
  });
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
  if (!route.contains(element) || element.closest('nav, footer, .wiki-hero, .activities-hero, [data-page-critical="true"]')) return false;
  for (let ancestor: Element | null = element; ancestor && ancestor !== route.parentElement; ancestor = ancestor.parentElement) {
    if (ancestor.hasAttribute("inert") || ancestor.hasAttribute("hidden") || ancestor.getAttribute("aria-hidden") === "true") return false;
    if (ancestor instanceof HTMLDialogElement && !ancestor.open) return false;
    if (ancestor.getAttribute("role") === "tabpanel" &&
      (ancestor.getAttribute("data-state") === "inactive" || ancestor.getAttribute("aria-expanded") === "false")) return false;
  }
  return true;
}

function retryUrl(url: string, attempt: number) {
  const retry = new URL(url, document.baseURI);
  retry.searchParams.set("circure_image_retry", `${Date.now()}-${attempt}`);
  return retry.href;
}

/** One probe owns the network slot until load AND decoding have completed. */
function probe(source: Source, signal: AbortSignal, deadline: number): Promise<DecodedSource> {
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
    image.fetchPriority = "high";
    if (source.sizes) image.sizes = source.sizes;
    if (source.srcSet) image.srcset = source.srcSet;
    image.src = source.url;
    if (image.complete && image.naturalWidth > 0) loaded();
  });
}

async function download(source: Source, fallback: string, signal: AbortSignal) {
  const key = sourceKey(source);
  const previous = decodedSources.get(key);
  if (previous) return previous;
  const deadline = Date.now() + IMAGE_DEADLINE_MS;
  let lastError: PageImageQueueError | undefined;
  for (let attempt = 0; attempt <= NETWORK_RETRIES; ++attempt) {
    try {
      // A retry changes only an explicitly failed URL, never a slow transfer.
      const requested = attempt ? { ...source, url: retryUrl(source.url, attempt), srcSet: "" } : source;
      const decoded = await probe(requested, signal, deadline);
      decodedSources.set(key, decoded);
      return decoded;
    } catch (error) {
      lastError = error as PageImageQueueError;
      if (lastError.reason === "decode") break;
      if (lastError.reason !== "network" || signal.aborted) throw lastError;
    }
  }
  if (fallback && fallback !== source.url) {
    const decoded = await probe({ ...source, url: fallback, srcSet: "" }, signal, deadline);
    decodedSources.set(key, decoded);
    return decoded;
  }
  throw lastError ?? new PageImageQueueError(source.url, "network");
}

function downloadSerial(source: Source, fallback: string, signal: AbortSignal, priority: "high" | "low" = "high") {
  const key = sourceKey(source);
  if (signal.aborted) return Promise.reject(new PageImageQueueError(source.url, "cancelled"));
  const existing = inFlightDownloads.get(key);
  // A request's AbortSignal belongs to the queue that started it. Sharing it
  // with another queue lets a route teardown cancel that queue's still-needed
  // image. StrictMode's setup/cleanup replay exposed this on the Home opening.
  if (existing && existing.signal === signal && !existing.signal.aborted) return existing.promise;
  const promise = new Promise<DecodedSource>((resolve, reject) => {
    const cancelled = () => {
      const index = pendingDownloads.indexOf(request);
      if (index < 0) return; // An active probe owns its cancellation and slot.
      pendingDownloads.splice(index, 1);
      signal.removeEventListener("abort", cancelled);
      reject(new PageImageQueueError(source.url, "cancelled"));
    };
    const request = {
      priority,
      start: async () => {
        try {
          if (signal.aborted) throw new PageImageQueueError(source.url, "cancelled");
          resolve(await download(source, fallback, signal));
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

/** Home probes can share the same physical network slot and successful cache. */
export function loadPageImageSerial(
  url: string,
  options: {
    signal?: AbortSignal;
    crossOrigin?: string | null;
    srcSet?: string;
    sizes?: string;
    fallback?: string;
    priority?: "high" | "low";
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
  return downloadSerial(source, options.fallback || "", options.signal ?? new AbortController().signal, options.priority)
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
  let halted = false;
  let running = false;
  let interacted = false;
  let criticalFinished = false;
  let scanQueued = false;
  let activeJob: Job | undefined;
  let activeController: AbortController | undefined;

  const isCritical = (job: Job) => [...job.bindings].some((binding) => binding.critical && bindings.get(binding.element) === binding);
  const liveBindings = (job: Job) => [...job.bindings].filter((binding) => bindings.get(binding.element) === binding && root.contains(binding.element));
  const ordinaryOrder = (a: Job, b: Job) => {
    const aElements = liveBindings(a).map((binding) => binding.element);
    const bElements = liveBindings(b).map((binding) => binding.element);
    const route = root.querySelector(ROUTE_SELECTOR);
    const activeContent = Number(!!route && bElements.some((element) => isContentImage(element, route))) -
      Number(!!route && aElements.some((element) => isContentImage(element, route)));
    if (activeContent) return activeContent;
    if (!aElements.length || !bElements.length) return Number(!aElements.length) - Number(!bElements.length);
    const position = aElements[0].compareDocumentPosition(bElements[0]);
    return position & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : position & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0;
  };
  const removeInteractionListeners = () => {
    for (const event of INTERACTION_EVENTS) window.removeEventListener(event, interaction, true);
  };
  const failPending = (error: PageImageQueueError) => {
    for (const job of jobs.values()) {
      if (job.status !== "pending") continue;
      job.status = "failed";
      job.reject(error);
    }
  };
  const updateReady = () => {
    if (criticalFinished || disposed || halted) return;
    const critical = [...jobs.values()].filter(isCritical);
    if (critical.every((job) => job.status === "loaded")) {
      criticalFinished = true;
      ready.resolve();
    }
  };

  async function run() {
    if (running || disposed || halted) return;
    running = true;
    try {
      while (!disposed && !halted) {
        updateReady();
        const pending = [...jobs.values()].filter((job) => job.status === "pending" && (liveBindings(job).length || job.hinted));
        const job = pending.find(isCritical) ?? (criticalFinished && interacted ? pending.sort(ordinaryOrder)[0] : undefined);
        if (!job) return;
        job.status = "loading";
        for (const binding of liveBindings(job)) {
          binding.element.dataset.pageImageState = "loading";
        }
        try {
          activeJob = job;
          activeController = new AbortController();
          const fallback = liveBindings(job).find((binding) => binding.fallback)?.fallback || "";
          const decoded = await downloadSerial(job.source, fallback, activeController.signal, isCritical(job) ? "high" : "low");
          if (disposed) return;
          for (const binding of liveBindings(job)) paint(binding, decoded);
          job.status = "loaded";
          job.resolve();
        } catch (error) {
          const reason = error instanceof PageImageQueueError ? error.reason : "network";
          const failure = new PageImageQueueError(job.source.url, reason, isCritical(job));
          job.status = "failed";
          job.reject(failure);
          for (const binding of liveBindings(job)) {
            binding.element.dataset.pageLoaded = "false";
            binding.element.dataset.pageImageState = "error";
          }
          if (failure.critical && !disposed) {
            halted = true;
            ready.reject(failure);
            failPending(failure);
          }
        } finally {
          activeJob = undefined;
          activeController = undefined;
        }
      }
    } finally {
      running = false;
    }
  }

  function collect() {
    if (disposed || halted) return;
    for (const job of jobs.values()) job.hinted = false;
    const elements = [
      ...(root.matches(SOURCE_SELECTOR) ? [root] : []),
      ...root.querySelectorAll<ArtworkElement>(SOURCE_SELECTOR),
    ];
    const route = root.querySelector(ROUTE_SELECTOR);
    const contentUrls = new Set<string>();
    for (const element of elements) {
      const source = artworkSource(element);
      if (!source.url || source.url.startsWith("#")) {
        bindings.delete(element);
        continue;
      }
      const background = element.hasAttribute("data-page-background-src");
      const hero = !!element.closest(".wiki-hero, .activities-hero") || element.getAttribute("data-page-critical") === "true";
      const content = !!route && !hero && isContentImage(element, route);
      const withinFirstSix = content && (contentUrls.has(source.url) || contentUrls.size < 6);
      if (withinFirstSix) contentUrls.add(source.url);
      const critical = hero || withinFirstSix;
      const key = sourceKey(source);
      let binding = bindings.get(element);
      if (binding?.key !== key) {
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
        const settled = deferred();
        job = { key, source, bindings: new Set(), hinted: false, status: "pending", settled: settled.promise, resolve: settled.resolve, reject: settled.reject };
        jobs.set(key, job);
      }
      job.bindings.add(binding);
      const cached = decodedSources.get(key);
      if (cached && job.status !== "loading") {
        paint(binding, cached);
        job.status = "loaded";
        job.resolve();
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
          const settled = deferred();
          job = { key, source, bindings: new Set(), hinted: true, status: decodedSources.has(key) ? "loaded" : "pending", settled: settled.promise, resolve: settled.resolve, reject: settled.reject };
          jobs.set(key, job);
          if (job.status === "loaded") job.resolve();
        }
        job.hinted = true;
      }
    }
    for (const job of jobs.values()) {
      if (liveBindings(job).length || job.hinted) continue;
      if (job === activeJob) activeController?.abort();
      if (job.status === "pending") {
        job.status = "failed";
        job.resolve();
      }
    }
    // A Hero always precedes the six content resources, even if placed later in DOM.
    const ordered = [...jobs.values()].sort((a, b) =>
      Number([...b.bindings].some((binding) => binding.hero)) -
      Number([...a.bindings].some((binding) => binding.hero)),
    );
    jobs.clear();
    for (const job of ordered) jobs.set(job.key, job);
    updateReady();
    void run();
  }

  function interaction() {
    if (disposed || interacted) return;
    interacted = true;
    removeInteractionListeners();
    void run();
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
    attributeFilter: ["data-page-src", "data-page-srcset", "data-page-background-src", "data-page-background-property", "data-page-critical", "data-page-fallback-src", "data-page-image-hints", "crossorigin", "sizes", "hidden", "inert", "aria-hidden", "data-state"],
  });
  for (const event of INTERACTION_EVENTS) window.addEventListener(event, interaction, { capture: true, passive: true });
  collect();

  return {
    criticalReady: ready.promise,
    remainingReady: () => interacted
      ? Promise.allSettled([...jobs.values()].filter((job) => !isCritical(job)).map((job) => job.settled)).then(() => {})
      : Promise.resolve(),
    dispose: () => {
      if (disposed) return;
      disposed = true;
      observer.disconnect();
      removeInteractionListeners();
      activeController?.abort();
      const cancelled = new PageImageQueueError("route", "cancelled");
      ready.reject(cancelled);
      failPending(cancelled);
      bindings.clear();
    },
  };
}
