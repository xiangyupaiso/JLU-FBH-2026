/**
 * Runtime control for the static page loader in `index.html`.
 *
 * The loader is plain HTML/CSS so it paints before the app bundle arrives.
 * This module only decides WHEN it leaves: as soon as the current route is
 * actually presentable and the loader's entrance has finished. Readiness
 * includes the selected route's styles, fonts, all decoded images and the
 * first renderable frame of autoplay media used by its animations.
 */

const LEAVE_MS = 380; // matches `.page-loader` opacity transition
const COMPLETE_HOLD_MS = 350; // let the finished illustration register

let token = 0;
let leaveTimer = 0;
let leaving = false;
let readiness: AbortController | undefined;
const leaveListeners = new Set<() => void>();

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
  readiness = new AbortController();
  const { signal } = readiness;
  const ready = Promise.all([
    openingComplete(loader, signal),
    pageReady(signal),
  ]);

  void ready.then(() => {
    if (current !== token || signal.aborted || !isVisible(loader)) return;
    leaving = true;
    loader.classList.add("is-leaving");
    notifyLeave();
    leaveTimer = window.setTimeout(() => {
      if (current !== token) return;
      loader.hidden = true;
      loader.classList.remove("is-leaving", "is-playing");
      leaving = false;
    }, LEAVE_MS);
  });
}

async function pageReady(signal: AbortSignal) {
  // Let the selected route's effects initialize its animation DOM first.
  await new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  );
  if (signal.aborted) return;
  await deferredStyles();
  if (signal.aborted) return;
  await Promise.all([document.fonts?.ready, pageImagesAndAnimations(signal)]);
}

/** The app stylesheet is loaded non-blocking (see vite.config.ts). */
function deferredStyles() {
  const links = Array.from(
    document.querySelectorAll<HTMLLinkElement>("link[data-deferred-css]"),
  ).filter((link) => link.media !== "all");
  return Promise.all(
    links.map(
      (link) =>
        new Promise<void>((resolve) => {
          link.addEventListener("load", () => resolve(), { once: true });
          link.addEventListener("error", () => resolve(), { once: true });
        }),
    ),
  );
}

const URL_PATTERN = /url\(["']?([^"')]+)["']?\)/g;

async function waitForImage(image: HTMLImageElement) {
  if (image.decode) return image.decode().catch(() => {});
  if (image.complete) return;
  return new Promise<void>((resolve) => {
    image.addEventListener("load", () => resolve(), { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
  });
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

async function pageImagesAndAnimations(signal: AbortSignal): Promise<void> {
  const root = document.getElementById("root");
  if (!root) return;
  const pending: Promise<void>[] = [];
  const seen = new Set<string>();
  let count = 0;
  const preload = (url: string) => {
    if (!url || seen.has(url)) return;
    seen.add(url);
    const image = new Image();
    image.src = url;
    pending.push(waitForImage(image));
  };

  // Route heroes and home scenes paint their art as CSS backgrounds.
  for (const element of root.querySelectorAll<HTMLElement>("*")) {
    if (signal.aborted) return;
    // Yield during large routes instead of blocking the loader's drawing.
    if (++count % 120 === 0) await new Promise(requestAnimationFrame);
    // Offscreen and initially transparent animation layers belong to this
    // page too. Eager loading avoids waiting forever on a lazy image's decode.
    if (element instanceof HTMLImageElement) {
      element.loading = "eager";
      pending.push(waitForImage(element));
    }
    if (element instanceof SVGImageElement) preload(element.href.baseVal);
    if (element instanceof HTMLVideoElement) {
      preload(element.poster);
      if (element.autoplay) pending.push(waitForAnimation(element, signal));
    }
    for (const pseudo of [null, "::before", "::after"]) {
      const style = getComputedStyle(element, pseudo);
      for (const value of [style.backgroundImage, style.maskImage]) {
        for (const [, url] of value.matchAll(URL_PATTERN)) preload(url);
      }
    }
  }

  await Promise.all(pending);
}
