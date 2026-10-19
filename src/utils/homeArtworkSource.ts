import { loadPageImageSerial } from "./pageImageQueue";

type HomeArtworkElement = HTMLImageElement | SVGImageElement;

const CHAPTER_SELECTOR = ".home-scene01, .story-chapter, .home-molecule-gallery, .story-finale";
const ACTIVATE_EVENT = "circure:home-artwork-activate";

const artworkIn = (root: Element) => [
  ...(root.matches("img, image") ? [root] : []),
  ...root.querySelectorAll("img, image"),
];

/** Deferred artwork keeps its original URL available to geometry and clones. */
export function homeArtworkSource(element: Element | null | undefined) {
  if (!element) return "";
  return element.getAttribute("data-home-src") ||
    element.getAttribute(element instanceof SVGImageElement ? "href" : "src") || "";
}

/** Activate only an explicitly requested scene or its transfer copy. */
export function activateHomeArtwork(root: Element, signal?: AbortSignal) {
  for (const element of artworkIn(root)) {
    const source = homeArtworkSource(element);
    if (!source) continue;
    if (element instanceof HTMLImageElement) {
      element.loading = "eager";
      if (!element.getAttribute("src")) {
        void loadPageImageSerial(source, { signal, crossOrigin: element.getAttribute("crossorigin"), priority: "low" })
          .then((url) => { if (!signal?.aborted && !element.getAttribute("src")) element.src = url; }, () => {});
      }
    } else if (element instanceof SVGImageElement && !element.getAttribute("href")) {
      void loadPageImageSerial(source, { signal, crossOrigin: element.getAttribute("crossorigin"), priority: "low" })
        .then((url) => { if (!signal?.aborted && !element.getAttribute("href")) element.setAttribute("href", url); }, () => {});
    }
  }
}

/** Geometry is initialized immediately; image work waits for its source chapter. */
export function onHomeArtworkActive(element: Element, callback: () => void) {
  const scene = element.closest<HTMLElement>(CHAPTER_SELECTOR);
  if (scene?.dataset.homeArtworkActive === "true") {
    callback();
    return () => {};
  }
  if (!scene) return () => {};
  const active = () => {
    scene.removeEventListener(ACTIVATE_EVENT, active);
    callback();
  };
  scene.addEventListener(ACTIVATE_EVENT, active, { once: true });
  return () => scene.removeEventListener(ACTIVATE_EVENT, active);
}

/** A portal/transition clone follows its source chapter, even outside Home. */
export function bindHomeArtwork(source: Element, copy: Element) {
  [copy, ...copy.querySelectorAll("[data-home-artwork]")].forEach((element) => {
    element.removeAttribute("data-home-artwork");
  });
  const loadedCopies = new WeakSet<Element>();
  const failedCopies = new WeakSet<Element>();
  const pendingCopies = new WeakMap<Element, string>();
  const controller = new AbortController();
  let activated = !source.closest(CHAPTER_SELECTOR);
  const copied = (event: Event) => {
    if (event.target instanceof Element) {
      loadedCopies.add(event.target);
      failedCopies.delete(event.target);
    }
  };
  const failed = (event: Event) => {
    if (event.target instanceof Element) failedCopies.add(event.target);
  };
  const synchronize = (event?: Event) => {
    if (!activated) return;
    const originals = new Map(artworkIn(source).map((image) => [
      homeArtworkSource(image),
      image instanceof HTMLImageElement
        ? image.currentSrc || image.getAttribute("src") || ""
        : image.getAttribute("href") || "",
    ]));
    if (event?.target instanceof Element) {
      const image = event.target;
      originals.set(homeArtworkSource(image), image instanceof HTMLImageElement
        ? image.currentSrc || image.getAttribute("src") || ""
        : image.getAttribute("href") || "");
    }
    for (const image of artworkIn(copy)) {
      const url = originals.get(homeArtworkSource(image)) || homeArtworkSource(image);
      if (!url || loadedCopies.has(image)) continue;
      if (image instanceof HTMLImageElement) {
        if (image.complete && image.naturalWidth > 0) continue;
        image.loading = "eager";
      }
      const attribute = image instanceof HTMLImageElement ? "src" : "href";
      const failedRequest = failedCopies.has(image) || (image instanceof HTMLImageElement && image.complete && !image.naturalWidth);
      if (image.getAttribute(attribute) === url && !(event && failedRequest)) continue;
      if (pendingCopies.get(image) === url) continue;
      pendingCopies.set(image, url);
      // Detached canvas readers can require CORS even when their visible source
      // did not. Give that distinct request the same single network slot.
      void loadPageImageSerial(url, {
        signal: controller.signal,
        crossOrigin: image.getAttribute("crossorigin"),
        priority: "low",
      }).then((loadedUrl) => {
        if (controller.signal.aborted || pendingCopies.get(image) !== url || loadedCopies.has(image)) return;
        pendingCopies.delete(image);
        if (image instanceof HTMLImageElement) {
          if (!image.complete || !image.naturalWidth) image.src = loadedUrl;
        } else {
          image.setAttribute("href", loadedUrl);
        }
      }, () => {
        if (pendingCopies.get(image) === url) pendingCopies.delete(image);
      });
    }
  };
  // Successful source retries supply their actual URL to failed portal copies.
  // Successful copies retain their decoded pixels through later source retries.
  source.addEventListener("load", synchronize, true);
  copy.addEventListener("load", copied, true);
  copy.addEventListener("error", failed, true);
  const stopActivation = onHomeArtworkActive(source, () => {
    activated = true;
    synchronize();
  });
  return () => {
    controller.abort();
    stopActivation();
    source.removeEventListener("load", synchronize, true);
    copy.removeEventListener("load", copied, true);
    copy.removeEventListener("error", failed, true);
  };
}

/** Native lazy images must start loading before decode, and deferred ones must
 * wait for a real load instead of permanently failing an early decode(). */
export function decodeHomeArtwork(image: HTMLImageElement, signal?: AbortSignal): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    let settled = false;
    let stopActivation = () => {};
    const cleanup = () => {
      image.removeEventListener("load", loaded);
      signal?.removeEventListener("abort", aborted);
      stopActivation();
    };
    const finish = (error?: Error) => {
      if (settled) return;
      settled = true;
      cleanup();
      if (error) reject(error);
      else resolve();
    };
    const aborted = () => finish(new Error("Home artwork preparation was cancelled"));
    const loaded = () => {
      if (!image.naturalWidth || settled) return;
      if (!image.decode) return finish();
      // A failed request/decode may later be retried by the scene loader.
      // Keep waiting for that successful load instead of freezing a fallback.
      void image.decode().then(() => finish(), () => {});
    };
    image.addEventListener("load", loaded);
    signal?.addEventListener("abort", aborted, { once: true });
    if (signal?.aborted) {
      aborted();
      return;
    }
    const begin = () => {
      activateHomeArtwork(image, signal);
      if (image.complete && image.getAttribute("src")) {
        if (image.naturalWidth) loaded();
      }
    };
    const scene = image.closest(CHAPTER_SELECTOR);
    if (scene) stopActivation = onHomeArtworkActive(image, begin);
    else if (image.getAttribute("src")) begin();
    // Detached transfer copies without a URL wait for bindHomeArtwork's load.
  });
}

export type { HomeArtworkElement };
