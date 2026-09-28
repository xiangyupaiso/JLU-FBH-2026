/**
 * Runtime control for the static page loader in `index.html`.
 *
 * The loader is plain HTML/CSS so it paints before the app bundle arrives.
 * This module only decides WHEN it leaves: as soon as the current route is
 * actually presentable — deferred stylesheet applied, fonts ready, and every
 * image (or CSS background) inside the first viewport loaded — never on a
 * fixed timer, so a ready page is not held back and a slow page is not
 * revealed half-painted.
 */

const LEAVE_MS = 380; // matches `.page-loader` opacity transition
const MIN_VISIBLE_MS = 600; // avoids a one-frame flash on cached pages
const MAX_WAIT_MS = 8000; // a stalled image must never trap the reader
// In-app navigations replay the stage from here so the ribbon closes and
// the lamb pops within ~0.4s instead of re-running the full 1.5s opening.
const IN_APP_SKIP_S = 1.1;

let token = 0;
let shownAt = performance.now();
let leaveTimer = 0;
let leaving = false;
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
  window.clearTimeout(leaveTimer);
  if (isVisible(loader)) return; // first load or an overlapping navigation

  leaving = false;
  loader.hidden = false;
  loader.classList.remove("is-leaving", "is-playing");
  loader.style.setProperty("--pl-skip", `${IN_APP_SKIP_S}s`);
  void loader.offsetWidth; // restart the CSS stage timeline
  loader.classList.add("is-playing");
  shownAt = performance.now();
}

/** Hide the loader once the page that is mounted now is presentable. */
export function hidePageLoaderWhenReady() {
  const loader = loaderElement();
  if (!loader) return;
  const current = ++token;

  const ready = Promise.race([
    pageReady(),
    new Promise<void>((resolve) => window.setTimeout(resolve, MAX_WAIT_MS)),
  ]);

  void ready.then(() => {
    if (current !== token) return; // superseded by a newer navigation
    const wait = Math.max(0, MIN_VISIBLE_MS - (performance.now() - shownAt));
    window.setTimeout(() => {
      if (current !== token || !isVisible(loader)) return;
      leaving = true;
      loader.classList.add("is-leaving");
      notifyLeave();
      leaveTimer = window.setTimeout(() => {
        if (current !== token) return;
        loader.hidden = true;
        loader.classList.remove("is-leaving", "is-playing");
        leaving = false;
      }, LEAVE_MS);
    }, wait);
  });
}

async function pageReady() {
  // Let the new route commit and lay out before measuring the first viewport.
  await new Promise((resolve) =>
    requestAnimationFrame(() => requestAnimationFrame(resolve)),
  );
  await deferredStyles();
  await Promise.all([document.fonts?.ready, ...firstViewportImages()]);
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

/**
 * Art that is fully transparent right now (scroll-revealed Home orbits, the
 * portrait behind the intro darkness) keeps loading in the background but
 * must not hold the loader.
 */
function isShown(element: Element) {
  for (let node: Element | null = element; node; node = node.parentElement) {
    const style = getComputedStyle(node);
    if (style.opacity === "0" || style.visibility === "hidden") return false;
  }
  return true;
}

function inFirstViewport(element: Element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < window.innerHeight &&
    rect.left < window.innerWidth &&
    isShown(element)
  );
}

function waitForImage(image: HTMLImageElement) {
  if (image.complete) return Promise.resolve();
  return new Promise<void>((resolve) => {
    image.addEventListener("load", () => resolve(), { once: true });
    image.addEventListener("error", () => resolve(), { once: true });
  });
}

function firstViewportImages(): Promise<void>[] {
  const root = document.getElementById("root");
  if (!root) return [];
  const pending: Promise<void>[] = [];
  const seen = new Set<string>();

  root.querySelectorAll("img").forEach((image) => {
    if (inFirstViewport(image)) pending.push(waitForImage(image));
  });

  // Route heroes and home scenes paint their art as CSS backgrounds.
  root.querySelectorAll<HTMLElement>("*").forEach((element) => {
    const background = getComputedStyle(element).backgroundImage;
    if (!background.includes("url(") || !inFirstViewport(element)) return;
    for (const [, url] of background.matchAll(URL_PATTERN)) {
      if (seen.has(url)) continue;
      seen.add(url);
      const image = new Image();
      image.src = url;
      pending.push(waitForImage(image));
    }
  });

  return pending;
}
