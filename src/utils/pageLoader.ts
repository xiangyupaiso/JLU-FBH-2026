import { createPageImageQueue } from "./pageImageQueue";

/**
 * Runtime control for the static page loader in `index.html`.
 *
 * The loader is plain HTML/CSS so it paints before the app bundle arrives.
 * This module only decides WHEN it leaves: as soon as the current route is
 * actually presentable. Managed reader routes gate the Hero and first six
 * distinct body images through the serial image queue; after that succeeds,
 * fonts, layout and optional artwork have at most 25 seconds. Home gates its
 * opening scene separately with a two-minute ceiling. Legacy routes retain
 * the original entrance, media and first-screen scan under READY_DEADLINE_MS.
 */

const LEAVE_MS = 380; // matches `.page-loader` opacity transition
const COMPLETE_HOLD_MS = 350; // let the finished illustration register
// External apps may never send their readiness message when their service is
// unavailable. This limit applies only to explicitly opted-in embeds.
const EMBED_WAIT_MS = 12000;
// A CDN request can stall with headers sent and a body that never finishes,
// firing neither load nor error. Once the stylesheet applies, art, fonts and
// scene preparation share this budget; then the page enters and the rest
// keeps loading in place. Home waits only for its opening and may use up to
// two minutes on a slow first visit, entering sooner as soon as it is ready.
const READY_DEADLINE_MS = 15000;
const HOME_READY_DEADLINE_MS = 120000;
const READER_OPTIONAL_DEADLINE_MS = 25000;

let token = 0;
let leaveTimer = 0;
let leaving = false;
let readiness: AbortController | undefined;
let imageQueue: ReturnType<typeof createPageImageQueue> | undefined;
const leaveListeners = new Set<() => void>();
const pagePreparations = new Set<() => void | Promise<void>>();
const preparationTasks = new Set<Promise<void>>();
const settledSvgSources = new Set<string>();
const nativeSvgTasks = new Map<string, Promise<void>>();
const nativeSvgPreloads = new Set<SVGSVGElement>();

const svgSource = (image: SVGImageElement) =>
  JSON.stringify([image.href.baseVal, image.getAttribute("crossorigin")]);

// Register before React mounts. A decoded HTML Image and an SVG image have
// separate loading lifecycles, even when they point at the same artwork.
for (const type of ["load", "error"]) {
  document.addEventListener(type, (event) => {
    if (event.target instanceof SVGImageElement) {
      const source = svgSource(event.target);
      settledSvgSources.add(source);
    }
  }, true);
}

/** Register layout work that needs the route's final styles, fonts and art. */
export function registerPagePreparation(prepare: () => void | Promise<void>) {
  pagePreparations.add(prepare);
  return () => { pagePreparations.delete(prepare); };
}

/** Track work already started by a scene, including work created by a rebuild.
 * The scene owns its failure fallback. Cleanup releases snapshots waiting on
 * an unmounted scene even if its original decode promise has not settled. */
export function trackPagePreparation(task: Promise<void>) {
  let resolve!: () => void;
  const pending = new Promise<void>((done) => { resolve = done; });
  preparationTasks.add(pending);
  const finish = () => {
    preparationTasks.delete(pending);
    resolve();
  };
  void task.then(finish, finish);
  return finish;
}

async function finishPagePreparations(signal: AbortSignal) {
  while (!signal.aborted && preparationTasks.size) {
    const batch = Array.from(preparationTasks);
    await new Promise<void>((resolve) => {
      const done = () => {
        signal.removeEventListener("abort", done);
        resolve();
      };
      signal.addEventListener("abort", done, { once: true });
      void Promise.all(batch).then(done);
      if (signal.aborted) done();
    });
  }
}

function reportStatus(loader: HTMLElement, phase: string, message: string) {
  loader.dataset.phase = phase;
  loader.dataset.message = message;
  loader.dispatchEvent(new Event("loaderstatus"));
}

function renderFrames() {
  return new Promise<void>((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
  );
}

function loaderElement() {
  return document.getElementById("page-loader");
}

function isVisible(loader: HTMLElement) {
  return !loader.hidden && !leaving;
}

function notifyLeave() {
  leaveListeners.forEach((listener) => listener());
  leaveListeners.clear();
}

/** Resolves when the loader starts leaving (immediately if already gone). */
export function whenPageLoaderLeaves(): Promise<void> {
  const loader = loaderElement();
  if (!loader || !isVisible(loader)) return Promise.resolve();
  return new Promise((resolve) => leaveListeners.add(resolve));
}

/** Cover the page for an in-app route change. */
export function showPageLoader() {
  const loader = loaderElement();
  if (!loader) return;
  ++token;
  readiness?.abort();
  imageQueue?.dispose();
  imageQueue = undefined;
  nativeSvgPreloads.forEach((svg) => svg.remove());
  nativeSvgPreloads.clear();
  nativeSvgTasks.clear();
  settledSvgSources.clear();
  window.clearTimeout(leaveTimer);
  if (isVisible(loader)) return; // first load or an overlapping navigation

  leaving = false;
  loader.hidden = false;
  loader.classList.remove("is-leaving", "is-playing");
  void loader.offsetWidth; // restart the CSS stage timeline
  // index.html owns the entrance clock for initial loads and route replays.
  loader.dispatchEvent(new Event("loaderstart"));
}

/** Wait for the real CSS entrance, excluding the infinite breathing loops. */
async function openingComplete(loader: HTMLElement, signal: AbortSignal) {
  if (!loader.classList.contains("is-playing")) {
    await new Promise<void>((resolve) => {
      const done = () => {
        loader.removeEventListener("loaderplay", done);
        signal.removeEventListener("abort", done);
        resolve();
      };
      loader.addEventListener("loaderplay", done, { once: true });
      signal.addEventListener("abort", done, { once: true });
    });
  }
  if (signal.aborted) return;
  const animations = loader
    .getAnimations({ subtree: true })
    .filter(
      (animation) => animation.effect?.getTiming().iterations !== Infinity,
    );
  await Promise.allSettled(animations.map((animation) => animation.finished));
  if (
    signal.aborted ||
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
  )
    return;
  await new Promise<void>((resolve) =>
    window.setTimeout(resolve, COMPLETE_HOLD_MS),
  );
}

/** Hide the loader once the page that is mounted now is presentable. */
export function hidePageLoaderWhenReady() {
  const loader = loaderElement();
  if (!loader) return;
  const current = ++token;
  readiness?.abort();
  imageQueue?.dispose();
  imageQueue = undefined;
  delete loader.dataset.retryable;
  readiness = new AbortController();
  const { signal } = readiness;
  // Inspect the mounted route, rather than the URL: a navigation can update
  // its address before React has replaced the previous page.
  const opening = document.getElementById("root")
    ?.querySelector<HTMLElement>(".home-scene01") ?? null;
  const ready = Promise.all([
    opening ? Promise.resolve() : openingComplete(loader, signal),
    pageReady(loader, signal, opening),
  ]);

  void ready.then(() => {
    if (current !== token || signal.aborted || !isVisible(loader)) return;
    reportStatus(loader, "ready", "Ready");
    loader.dispatchEvent(new Event("loaderready"));
    leaving = true;
    loader.classList.add("is-leaving");
    notifyLeave();
    leaveTimer = window.setTimeout(() => {
      if (current !== token) return;
      loader.hidden = true;
      loader.classList.remove("is-leaving", "is-playing");
      leaving = false;
    }, LEAVE_MS);
  }).catch(() => {
    if (current !== token || signal.aborted || !isVisible(loader)) return;
    reportStatus(loader, "error", "The page could not load. Please try again.");
    loader.dispatchEvent(new Event("loadererror"));
  });
}

async function pageReady(
  loader: HTMLElement,
  signal: AbortSignal,
  opening: HTMLElement | null,
) {
  // Let the selected route's effects initialize its animation DOM first.
  await renderFrames();
  if (signal.aborted) return;
  reportStatus(loader, "styles", "Preparing the page…");
  await deferredStyles(signal);
  if (signal.aborted) return;
  const managed = document.getElementById("root")
    ?.querySelector("[data-page-src], [data-page-background-src]");
  const reader = document.getElementById("root")
    ?.querySelector("main.wiki-page--route");
  if (managed && reader && !opening && document.body) {
    await readerPageReady(loader, signal);
    return;
  }
  if (managed && document.body) {
    // Shared artwork also uses the queue outside reader routes. Home story
    // images remain under its own chapter activation controller.
    imageQueue = createPageImageQueue(document.body);
    void imageQueue.criticalReady.catch(() => {});
  }
  if (opening?.querySelector("[data-home-src]")) {
    reportStatus(loader, "assets", "Preparing the opening artwork…");
    const artwork = new AbortController();
    const cancel = () => artwork.abort();
    signal.addEventListener("abort", cancel, { once: true });
    try {
      await criticalArtworkReady(
        Promise.all(Array.from(opening.querySelectorAll<HTMLImageElement | SVGImageElement>("img, image"),
          (image) => requiredHomeArtwork(image, artwork.signal))).then(() => {}),
        loader,
        signal,
      );
    } finally {
      cancel();
      signal.removeEventListener("abort", cancel);
    }
    if (signal.aborted) return;
  }
  // Without its stylesheet the page is not presentable, so only the remaining
  // stages run under the deadline. Its abort settles every wait below.
  const budget = new AbortController();
  const expire = () => budget.abort();
  signal.addEventListener("abort", expire, { once: true });
  if (opening) loader.addEventListener("loaderdeadline", expire, { once: true });
  const elapsed = opening && loader.dataset.waitStart
    ? Math.max(0, Date.now() - Number(loader.dataset.waitStart)) : 0;
  const timer = window.setTimeout(
    expire,
    opening ? Math.max(0, HOME_READY_DEADLINE_MS - elapsed) : READY_DEADLINE_MS,
  );
  if (opening && loader.dataset.deadline === "true") expire();
  try {
    await styledPageReady(loader, budget.signal, opening);
  } finally {
    window.clearTimeout(timer);
    signal.removeEventListener("abort", expire);
    loader.removeEventListener("loaderdeadline", expire);
  }
}

async function readerPageReady(loader: HTMLElement, signal: AbortSignal) {
  const queue = createPageImageQueue(document.body);
  imageQueue = queue;
  reportStatus(loader, "assets", "Preparing the opening artwork…");
  try {
    // The hero and first six distinct body images must really decode. Neither
    // the optional budget nor the static loader watchdog can release this gate.
    await criticalArtworkReady(queue.criticalReady, loader, signal);
  } catch (error) {
    if (imageQueue === queue) {
      queue.dispose();
      imageQueue = undefined;
    }
    throw error;
  }
  if (signal.aborted) return;

  const budget = new AbortController();
  const expire = () => budget.abort();
  signal.addEventListener("abort", expire, { once: true });
  const timer = window.setTimeout(expire, READER_OPTIONAL_DEADLINE_MS);
  loader.addEventListener("loaderdeadline", expire, { once: true });
  if (loader.dataset.deadline === "true") expire();
  try {
    await renderFrames();
    if (budget.signal.aborted) return;
    reportStatus(loader, "fonts", "Preparing the text…");
    await untilAborted(document.fonts?.ready, budget.signal);
    if (budget.signal.aborted) return;
    reportStatus(loader, "layout", "Preparing the page…");
    await untilAborted(Promise.all(Array.from(pagePreparations, (prepare) => prepare())), budget.signal);
    if (budget.signal.aborted) return;
    await renderFrames();
    await untilAborted(queue.remainingReady(), budget.signal);
    if (budget.signal.aborted) return;
    await finishPagePreparations(budget.signal);
    if (budget.signal.aborted) return;
    await renderFrames();
  } finally {
    window.clearTimeout(timer);
    signal.removeEventListener("abort", expire);
    loader.removeEventListener("loaderdeadline", expire);
  }
}

async function criticalArtworkReady(task: Promise<void>, loader: HTMLElement, signal: AbortSignal) {
  let rejectDeadline!: (error: Error) => void;
  const deadline = new Promise<void>((_resolve, reject) => { rejectDeadline = reject; });
  const fail = () => rejectDeadline(new Error("Opening artwork did not finish within two minutes"));
  const elapsed = loader.dataset.waitStart
    ? Math.max(0, Date.now() - Number(loader.dataset.waitStart)) : 0;
  const timer = window.setTimeout(fail, Math.max(0, HOME_READY_DEADLINE_MS - elapsed));
  loader.addEventListener("loaderdeadline", fail, { once: true });
  if (loader.dataset.deadline === "true") fail();
  try {
    await untilAborted(Promise.race([task, deadline]), signal);
  } catch (error) {
    if (!signal.aborted) loader.dataset.retryable = "images";
    throw error;
  } finally {
    window.clearTimeout(timer);
    loader.removeEventListener("loaderdeadline", fail);
  }
}

function requiredHomeArtwork(image: HTMLImageElement | SVGImageElement, signal: AbortSignal) {
  return new Promise<void>((resolve, reject) => {
    let decoding = false;
    let finished = false;
    const finish = (error?: Error) => {
      if (finished) return;
      finished = true;
      observer.disconnect();
      image.removeEventListener("load", check);
      image.removeEventListener("error", failed);
      signal.removeEventListener("abort", cancelled);
      if (error) reject(error);
      else resolve();
    };
    const failed = () => finish(new Error("Opening artwork could not decode"));
    const cancelled = () => finish();
    const check = () => {
      if (finished || decoding) return;
      if (image instanceof HTMLImageElement && image.complete && image.naturalWidth > 0) {
        decoding = true;
        void image.decode().then(() => finish(), failed);
      } else if (!(image instanceof HTMLImageElement) && image.href.baseVal && image.dataset.homeArtwork === "ready") {
        finish();
      } else if (image.dataset.homeArtwork === "error") failed();
    };
    const observer = new MutationObserver(check);
    observer.observe(image, { attributes: true, attributeFilter: ["src", "href", "data-home-artwork"] });
    image.addEventListener("load", check);
    image.addEventListener("error", failed);
    signal.addEventListener("abort", cancelled, { once: true });
    if (signal.aborted) cancelled();
    else check();
  });
}

async function styledPageReady(
  loader: HTMLElement,
  signal: AbortSignal,
  opening: HTMLElement | null,
) {
  // Applying the non-blocking stylesheet can start new font requests. Do not
  // capture fonts.ready before the browser has laid out its styled content.
  await renderFrames();
  if (signal.aborted) return;
  const seenArt = new Set<string>();
  const preparedElements = new WeakMap<Element, string>();
  const prepareArt = () => {
    const task = pageImagesAndAnimations(signal, (complete, total) => {
      reportStatus(loader, "assets", `Preparing artwork · ${complete} of ${total} ready`);
    }, seenArt, preparedElements, opening);
    // A decode promise can remain pending after its download has completed.
    // The opening budget also releases that wait without cancelling the art.
    return opening ? untilAborted(task, signal) : task;
  };
  reportStatus(loader, "assets", "Preparing the artwork…");
  await prepareArt();
  if (signal.aborted) return;
  reportStatus(loader, "fonts", "Preparing the text…");
  await untilAborted(document.fonts?.ready, signal);
  if (signal.aborted) return;
  reportStatus(loader, "layout", "Preparing the scene…");
  await untilAborted(Promise.all(Array.from(pagePreparations, (prepare) => prepare())), signal);
  if (signal.aborted) return;
  // Font-dependent animation geometry and refreshed pins must paint before
  // HomeIntro is allowed to play, rather than settling during the reveal.
  await renderFrames();
  if (signal.aborted) return;
  // Preparation can mount new transfer layers or replace image clones. Their
  // own requests and decode must finish too, even when the source art is cached.
  await prepareArt();
  if (signal.aborted) return;
  await untilAborted(document.fonts?.ready, signal);
  if (signal.aborted) return;
  if (opening) {
    // Later Home scenes prepare their own effects while the visitor reads.
    // Only the layout rebuilds above belong to the opening cover.
    await renderFrames();
    return;
  }
  reportStatus(loader, "layout", "Preparing the scene…");
  // Rebuilds can start new decode -> RAF -> pixel-sampling work. Drain the
  // current tasks, including tasks added while waiting or during final paint.
  do {
    await finishPagePreparations(signal);
    if (signal.aborted) return;
    await renderFrames();
  } while (!signal.aborted && preparationTasks.size);
}

/** Settle with `task`, or quietly on abort. Rejections still pass through:
 * a failed page preparation must surface as an error. */
function untilAborted(task: Promise<unknown> | undefined, signal: AbortSignal) {
  if (!task || signal.aborted) return Promise.resolve();
  let stop = () => {};
  return Promise.race([
    task.then(() => {}),
    new Promise<void>((resolve) => {
      stop = resolve;
      signal.addEventListener("abort", stop, { once: true });
    }),
  ]).finally(() => signal.removeEventListener("abort", stop));
}

/** The app stylesheet is loaded non-blocking (see vite.config.ts). */
function deferredStyles(signal: AbortSignal) {
  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>("link[data-deferred-css]"),
  );
  return Promise.all(
    links.map(
      (link) =>
        new Promise<void>((resolve, reject) => {
          const cleanup = () => {
            link.removeEventListener("load", done);
            link.removeEventListener("error", failed);
            signal.removeEventListener("abort", done);
          };
          const done = () => {
            cleanup();
            resolve();
          };
          const failed = () => {
            cleanup();
            // A stylesheet failure cannot produce a presentable page.
            reject(new Error("Page stylesheet could not load"));
          };
          link.addEventListener("load", done, { once: true });
          link.addEventListener("error", failed, { once: true });
          signal.addEventListener("abort", done, { once: true });
          if (signal.aborted) done();
          else if (link.dataset.styleState === "error") failed();
          // Chromium can retain a sheet object after a failed request. Only
          // the successful print -> all swap proves this CSS has applied.
          else if (link.media === "all") done();
        }),
    ),
  );
}

const URL_PATTERN = /url\(["']?([^"')]+)["']?\)/g;

function waitForSvgImage(image: SVGImageElement, signal: AbortSignal) {
  const source = svgSource(image);
  if (signal.aborted || settledSvgSources.has(source)) return Promise.resolve();
  const existing = nativeSvgTasks.get(source);
  if (existing) return existing;
  let cancelled = false;
  const pending = new Promise<void>((resolve) => {
    const namespace = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(namespace, "svg");
    const art = document.createElementNS(namespace, "image");
    svg.setAttribute("viewBox", "0 0 1 1");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("data-page-asset-preload", "");
    svg.style.cssText = "position:fixed;left:0;top:0;width:1px;height:1px;opacity:.01;pointer-events:none";
    art.setAttribute("width", "1");
    art.setAttribute("height", "1");
    const crossOrigin = image.getAttribute("crossorigin");
    if (crossOrigin !== null) art.setAttribute("crossorigin", crossOrigin);
    const done = () => {
      art.removeEventListener("load", done);
      art.removeEventListener("error", done);
      signal.removeEventListener("abort", done);
      if (signal.aborted) {
        cancelled = true;
        svg.remove();
        nativeSvgPreloads.delete(svg);
        if (nativeSvgTasks.get(source) === pending) nativeSvgTasks.delete(source);
      } else {
        settledSvgSources.add(source);
      }
      resolve();
    };
    art.addEventListener("load", done, { once: true });
    art.addEventListener("error", done, { once: true });
    signal.addEventListener("abort", done, { once: true });
    // An independent native SVG client loads even while the story keeps its
    // image transparent. Retain it for this route so SVG resources stay warm.
    svg.append(art);
    nativeSvgPreloads.add(svg);
    document.body.append(svg);
    art.setAttribute("href", image.href.baseVal);
    if (signal.aborted) done();
  });
  if (!cancelled) nativeSvgTasks.set(source, pending);
  return pending;
}

async function waitForImage(image: HTMLImageElement, signal: AbortSignal) {
  if (signal.aborted || (!image.src && !image.srcset)) return;
  // Switching lazy -> eager starts a new request. decode() called before that
  // request is ready can reject, which must not be mistaken for a loaded image.
  image.loading = "eager";
  if (!image.complete) {
    await new Promise<void>((resolve) => {
      const done = () => {
        image.removeEventListener("load", done);
        image.removeEventListener("error", done);
        signal.removeEventListener("abort", done);
        resolve();
      };
      image.addEventListener("load", done, { once: true });
      image.addEventListener("error", done, { once: true });
      signal.addEventListener("abort", done, { once: true });
      if (image.complete || signal.aborted) done();
    });
  }
  // A failed URL settles through error; it must not trap the loader forever.
  if (!signal.aborted && image.naturalWidth > 0 && image.decode) {
    await image.decode().catch(() => {});
  }
}

async function waitForAnimation(video: HTMLVideoElement, signal: AbortSignal) {
  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA || video.error)
    return;
  if (!video.currentSrc && !video.src && !video.querySelector("source[src]"))
    return;
  await new Promise<void>((resolve) => {
    const done = () => {
      video.removeEventListener("loadeddata", done);
      video.removeEventListener("error", done);
      signal.removeEventListener("abort", done);
      resolve();
    };
    video.addEventListener("loadeddata", done, { once: true });
    video.addEventListener("error", done, { once: true });
    signal.addEventListener("abort", done, { once: true });
    video.preload = "auto";
  });
}

async function waitForEmbed(frame: HTMLIFrameElement, signal: AbortSignal) {
  if (signal.aborted || frame.dataset.pageEmbedReady === "true") return;
  await new Promise<void>((resolve) => {
    const done = () => {
      window.clearTimeout(timeout);
      frame.removeEventListener("wiki-embed-ready", done);
      frame.removeEventListener("error", done);
      signal.removeEventListener("abort", done);
      resolve();
    };
    const timeout = window.setTimeout(done, EMBED_WAIT_MS);
    frame.addEventListener("wiki-embed-ready", done, { once: true });
    frame.addEventListener("error", done, { once: true });
    signal.addEventListener("abort", done, { once: true });
    if (signal.aborted || frame.dataset.pageEmbedReady === "true") done();
  });
}

async function pageImagesAndAnimations(
  signal: AbortSignal,
  onProgress: (complete: number, total: number) => void,
  seen: Set<string>,
  preparedElements: WeakMap<Element, string>,
  opening: HTMLElement | null = null,
): Promise<void> {
  // Home transfer layers and other React portals mount alongside #root.
  const root = opening ?? document.body;
  if (!root) return;
  const loader = loaderElement();
  // Article text is usable before its figures arrive. Only figures around the
  // first screen gate the loader; the rest stay lazy and load while reading.
  const article = root.querySelector(".wiki-article");
  const viewport = window.innerHeight;
  const deferred = (element: Element) => {
    if (!article?.contains(element)) return false;
    const rect = element.getBoundingClientRect();
    // Hidden tabs and closed drawers have no boxes.
    if (!element.getClientRects().length) return true;
    return rect.bottom < -viewport * 0.5 || rect.top > viewport * 1.5;
  };
  const pending: Promise<void>[] = [];
  let complete = 0;
  let scanned = false;
  let count = 0;
  const track = (task: Promise<void>) => {
    pending.push(task.then(() => {
      ++complete;
      if (scanned && !signal.aborted) onProgress(complete, pending.length);
    }));
  };
  const preload = (
    url: string,
    crossOrigin: string | null = null,
    element?: SVGImageElement,
  ) => {
    if (!url || url.startsWith("#")) return;
    const key = JSON.stringify([url, crossOrigin]);
    // A new SVG clone can start its own request even when an earlier node
    // used this URL. It needs its own load/decode probe, not the old URL gate.
    if (element
      ? preparedElements.get(element) === key && settledSvgSources.has(key)
      : seen.has(key)) return;
    seen.add(key);
    const image = new Image();
    if (crossOrigin !== null) image.crossOrigin = crossOrigin;
    image.src = url;
    track(Promise.all([
      waitForImage(image, signal),
      ...(element ? [waitForSvgImage(element, signal)] : []),
    ]).then(() => {
      if (element) preparedElements.set(element, key);
    }));
  };

  // React hoists these resource hints into <head>. They include figures in
  // closed drawers, inactive tabs and dialogs that are not in the route DOM.
  if (!opening) {
    for (const link of document.querySelectorAll<HTMLLinkElement>(
      'link[rel="preload"][as="image"]',
    )) {
      preload(link.href, link.crossOrigin);
    }
  }

  // Route heroes and home scenes paint their art as CSS backgrounds.
  const selector = opening
    ? "img, image"
    : "*:not([data-page-asset-preload], [data-page-asset-preload] *)";
  for (const element of root.querySelectorAll<HTMLElement>(selector)) {
    if (signal.aborted) return;
    if (element === loader || loader?.contains(element)) continue;
    if (deferred(element)) continue;
    // Yield during large routes instead of blocking the loader's drawing.
    if (++count % 120 === 0) await new Promise(requestAnimationFrame);
    // Offscreen and initially transparent animation layers belong to this
    // page too. Eager loading avoids waiting forever on a lazy image's decode.
    if (element instanceof HTMLImageElement) {
      const source = () => JSON.stringify([
        element.currentSrc || element.src, element.srcset, element.crossOrigin,
      ]);
      if (!element.complete || preparedElements.get(element) !== source()) {
        track(waitForImage(element, signal).then(() => {
          preparedElements.set(element, source());
        }));
      }
    }
    if (element instanceof SVGImageElement) {
      preload(element.href.baseVal, element.getAttribute("crossorigin"), element);
    }
    if (opening) continue;
    if (element instanceof HTMLVideoElement) {
      preload(element.poster);
      if (element.autoplay) track(waitForAnimation(element, signal));
    }
    if (
      element instanceof HTMLIFrameElement &&
      element.hasAttribute("data-page-embed-ready") &&
      !preparedElements.has(element)
    ) {
      preparedElements.set(element, "embed");
      track(waitForEmbed(element, signal));
    }
    for (const pseudo of [null, "::before", "::after"]) {
      const style = getComputedStyle(element, pseudo);
      for (const value of [
        style.backgroundImage,
        style.maskImage,
        style.borderImageSource,
        style.listStyleImage,
        style.content,
      ]) {
        for (const [, url] of value.matchAll(URL_PATTERN)) preload(url);
      }
    }
  }

  scanned = true;
  if (!signal.aborted && pending.length) onProgress(complete, pending.length);
  await Promise.all(pending);
}

// The static loader dispatches this for recoverable image failures. Rebuild
// the route queue while its module cache preserves images already decoded.
loaderElement()?.addEventListener("loaderretry", hidePageLoaderWhenReady);
