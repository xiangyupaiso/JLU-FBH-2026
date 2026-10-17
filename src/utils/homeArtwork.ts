type ArtworkElement = HTMLImageElement | SVGImageElement;
export type HomeArtworkStatus = "ready" | "loading" | "error";

type Artwork = {
  source: string;
  crossOrigin: string | null;
  elements: Set<ArtworkElement>;
  status: HomeArtworkStatus;
  retries: number;
  revision: number;
  url: string;
  cancel: () => void;
};

const REQUEST_TIMEOUT = 8000;
const MAX_RETRIES = 2;
const RETRY_PARAMETER = "home-image-retry";

/** Home alone owns these requests. A shared URL gets one retry sequence,
 * including artwork reused in several cards or SVG layers. */
export function createHomeArtworkLoader(
  root: HTMLElement,
  onChange: () => void,
) {
  const artwork = new Map<string, Artwork>();
  const elements = new WeakMap<Element, Artwork>();
  let disposed = false;

  const mark = (art: Artwork, status: HomeArtworkStatus) => {
    art.status = status;
    art.elements.forEach((element) => {
      element.dataset.homeArtwork = status;
    });
  };
  const applyRetry = (art: Artwork, element: ArtworkElement) => {
    if (!art.revision) return;
    if (element instanceof HTMLImageElement) {
      // Keep successful copies and their decoded pixels in place.
      if (element.complete && element.naturalWidth > 0) return;
      if (element.src !== art.url) element.src = art.url;
    } else if (element.href.baseVal !== art.url) {
      element.setAttribute("href", art.url);
    }
  };
  const start = (art: Artwork, retry = false) => {
    art.cancel();
    if (disposed) return;
    if (retry) {
      const url = new URL(art.source, document.baseURI);
      url.searchParams.set(RETRY_PARAMETER, String(++art.revision));
      art.url = url.href;
    }
    mark(art, "loading");
    const image = new Image();
    if (art.crossOrigin !== null) image.crossOrigin = art.crossOrigin;
    let active = true;
    let timer = 0;
    const cleanup = () => {
      active = false;
      window.clearTimeout(timer);
      image.removeEventListener("load", loaded);
      image.removeEventListener("error", failed);
    };
    const finish = (success: boolean) => {
      if (!active || disposed) return;
      cleanup();
      if (!success) image.src = "";
      if (success) {
        if (
          !art.revision &&
          [...art.elements].some(
            (element) =>
              element instanceof HTMLImageElement &&
              element.complete &&
              !element.naturalWidth,
          )
        ) {
          ++art.retries;
          start(art, true);
          onChange();
          return;
        }
        art.elements.forEach((element) => applyRetry(art, element));
        mark(art, "ready");
        // A native image can stall independently of its decoded cache probe.
        const nativeTimer = window.setTimeout(() => {
          if (disposed || nativeReady()) return;
          if (art.retries < MAX_RETRIES) {
            ++art.retries;
            start(art, true);
          } else mark(art, "error");
          onChange();
        }, REQUEST_TIMEOUT);
        art.cancel = () => window.clearTimeout(nativeTimer);
      } else if (art.retries < MAX_RETRIES) {
        const delay = 750 * 2 ** art.retries++;
        const backoff = window.setTimeout(() => start(art, true), delay);
        art.cancel = () => window.clearTimeout(backoff);
      } else {
        mark(art, "error");
        art.cancel = () => {};
      }
      onChange();
    };
    const failed = () => finish(false);
    const nativeReady = () =>
      [...art.elements].every(
        (element) =>
          !root.contains(element) ||
          !(element instanceof HTMLImageElement) ||
          (element.complete && element.naturalWidth > 0),
      );
    const loaded = () => {
      if (!image.naturalWidth) {
        failed();
        return;
      }
      // Download completion alone does not mean the browser can paint it.
      void image.decode().then(() => finish(true), failed);
    };
    art.cancel = () => {
      cleanup();
      image.src = "";
    };
    image.addEventListener("load", loaded, { once: true });
    image.addEventListener("error", failed, { once: true });
    timer = window.setTimeout(failed, REQUEST_TIMEOUT);
    image.src = art.url;
  };

  const warm = (scene: Element) => {
    const added: Artwork[] = [];
    scene.querySelectorAll<ArtworkElement>("img, image").forEach((element) => {
      const raw =
        element instanceof HTMLImageElement
          ? element.currentSrc || element.src
          : element.href.baseVal;
      if (!raw || raw.startsWith("#") || raw.startsWith("data:")) return;
      const source = new URL(raw, document.baseURI);
      source.searchParams.delete(RETRY_PARAMETER);
      const crossOrigin = element.getAttribute("crossorigin");
      const key = JSON.stringify([source.href, crossOrigin]);
      let art = artwork.get(key);
      if (!art) {
        art = {
          source: source.href,
          url: source.href,
          crossOrigin,
          elements: new Set(),
          status: "loading",
          retries: 0,
          revision: 0,
          cancel: () => {},
        };
        artwork.set(key, art);
        added.push(art);
      }
      art.elements.add(element);
      elements.set(element, art);
      element.dataset.homeArtwork = art.status;
      if (element instanceof HTMLImageElement) element.loading = "eager";
      if (art.status === "ready") applyRetry(art, element);
    });
    added.forEach((art) => start(art));
  };
  const sourcesIn = (scene: Element | null | undefined) =>
    new Set(
      Array.from(scene?.querySelectorAll("img, image") ?? [], (element) =>
        elements.get(element),
      ).filter((art): art is Artwork => !!art),
    );
  const status = (scene: Element | null | undefined): HomeArtworkStatus => {
    const sources = [...sourcesIn(scene)];
    if (sources.some((art) => art.status === "error")) return "error";
    return sources.some(
      (art) =>
        art.status === "loading" ||
        [...art.elements].some(
          (element) =>
            scene?.contains(element) &&
            element instanceof HTMLImageElement &&
            (!element.complete || !element.naturalWidth),
        ),
    )
      ? "loading"
      : "ready";
  };
  const onError = (event: Event) => {
    const art =
      event.target instanceof Element ? elements.get(event.target) : undefined;
    // An actual DOM image can fail after its cached preload succeeded.
    if (art?.status === "ready") {
      if (art.retries < MAX_RETRIES) {
        ++art.retries;
        start(art, true);
      } else mark(art, "error");
      onChange();
    }
  };
  const onLoad = () => onChange();
  root.addEventListener("error", onError, true);
  root.addEventListener("load", onLoad, true);
  const observer = new MutationObserver((records) => {
    if (
      records.some((record) =>
        [...record.addedNodes].some(
          (node) =>
            node instanceof Element &&
            (node.matches("img, image") || node.querySelector("img, image")),
        ),
      )
    ) {
      // Scene rebuilds and interaction-mounted SVG layers share the same cache.
      warm(root);
      onChange();
    }
  });
  observer.observe(root, { childList: true, subtree: true });

  return {
    warm,
    status,
    retry(scene: Element | null | undefined) {
      if (!scene) return;
      for (const art of sourcesIn(scene)) {
        if (art.status !== "error") continue;
        art.retries = 0;
        start(art, true);
      }
      onChange();
    },
    dispose() {
      disposed = true;
      observer.disconnect();
      root.removeEventListener("error", onError, true);
      root.removeEventListener("load", onLoad, true);
      artwork.forEach((art) => {
        art.cancel();
        art.elements.forEach((element) => {
          delete element.dataset.homeArtwork;
        });
      });
    },
  };
}
