import { loadPageImageSerial, refreshPageImagePriorities } from "./pageImageQueue";

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
  priority: "high" | "low";
  cancel: () => void;
};

const MAX_NATIVE_RETRIES = 2;
const RETRY_PARAMETER = "home-image-retry";

/** Home shares the site's one transfer slot while keeping scene-local recovery. */
export function createHomeArtworkLoader(root: HTMLElement, onChange: () => void) {
  const artwork = new Map<string, Artwork>();
  const elements = new WeakMap<Element, Artwork>();
  const scenes = new Map<Element, "high" | "low">();
  let disposed = false;

  const mark = (art: Artwork, status: HomeArtworkStatus) => {
    art.status = status;
    art.elements.forEach((element) => {
      // Retain already decoded pixels if a different copy needs recovery.
      element.dataset.homeArtwork =
        element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0
          ? "ready" : element instanceof SVGImageElement && element.dataset.homeArtwork === "ready" && element.href.baseVal
            ? "ready" : status;
    });
  };
  const apply = (art: Artwork, element: ArtworkElement) => {
    if (element instanceof HTMLImageElement) {
      if (element.complete && element.naturalWidth > 0) return;
      element.loading = "eager";
      element.fetchPriority = art.priority;
      if (element.getAttribute("src") !== art.url) element.src = art.url;
    } else {
      if (element.dataset.homeArtwork === "ready" && element.href.baseVal) return;
      if (element.href.baseVal !== art.url) element.setAttribute("href", art.url);
    }
  };
  const sourcesIn = (scene: Element | null | undefined) => new Set(
    Array.from(scene?.querySelectorAll("img, image") ?? [], (element) => elements.get(element))
      .filter((art): art is Artwork => !!art),
  );
  const activateScenes = () => {
    for (const scene of scenes.keys()) {
      if (!(scene instanceof HTMLElement) || !root.contains(scene) || scene.dataset.homeArtworkActive === "true") continue;
      const images = [...scene.querySelectorAll<ArtworkElement>("img, image")];
      if (images.some((element) => element.dataset.homeSrc && !elements.has(element))) continue;
      if ([...sourcesIn(scene)].some((art) => art.status !== "ready")) continue;
      // Pixel-reading helpers and transfer clones may now safely reuse these URLs.
      scene.dataset.homeArtworkActive = "true";
      scene.dispatchEvent(new Event("circure:home-artwork-activate"));
    }
  };
  const start = (art: Artwork, nativeRetry = false) => {
    art.cancel();
    if (disposed) return;
    if (nativeRetry) {
      const retry = new URL(art.source, document.baseURI);
      retry.searchParams.set(RETRY_PARAMETER, String(++art.revision));
      art.url = retry.href;
    }
    const request = new AbortController();
    art.cancel = () => request.abort();
    mark(art, "loading");
    void loadPageImageSerial(art.url, {
      crossOrigin: art.crossOrigin,
      signal: request.signal,
      priority: () => art.priority,
    }).then((url) => {
      if (disposed || request.signal.aborted) return;
      art.url = url;
      art.elements.forEach((element) => apply(art, element));
      mark(art, "ready");
      activateScenes();
      onChange();
    }, () => {
      if (disposed || request.signal.aborted) return;
      mark(art, "error");
      onChange();
    });
  };

  const warm = (scene: Element, priority: "high" | "low" = "high") => {
    if (scenes.get(scene) === "high") priority = "high";
    scenes.set(scene, priority);
    const added: Artwork[] = [];
    scene.querySelectorAll<ArtworkElement>("img, image").forEach((element) => {
      const raw = element.dataset.homeSrc || element.getAttribute(element instanceof HTMLImageElement ? "src" : "href") || "";
      if (!raw || raw.startsWith("#") || raw.startsWith("data:")) return;
      const source = new URL(raw, document.baseURI);
      source.searchParams.delete(RETRY_PARAMETER);
      source.searchParams.delete("circure_image_retry");
      const crossOrigin = element.getAttribute("crossorigin");
      const key = JSON.stringify([source.href, crossOrigin]);
      let art = artwork.get(key);
      if (!art) {
        art = { source: source.href, url: source.href, priority, crossOrigin, elements: new Set(), status: "loading", retries: 0, revision: 0, cancel: () => {} };
        artwork.set(key, art);
        added.push(art);
      }
      art.elements.add(element);
      elements.set(element, art);
      if (priority === "high") art.priority = "high";
      if (art.status === "ready") apply(art, element);
      element.dataset.homeArtwork = element instanceof HTMLImageElement && element.complete && element.naturalWidth > 0
        ? "ready" : art.status;
    });
    // Assigning native sources before these probes finished would bypass serialization.
    added.forEach((art) => start(art));
    refreshPageImagePriorities();
    activateScenes();
  };
  const status = (scene: Element | null | undefined): HomeArtworkStatus => {
    const sources = [...sourcesIn(scene)];
    const missing = (art: Artwork) => [...art.elements].some((element) =>
      scene?.contains(element) && (!(element instanceof HTMLImageElement) || !element.complete || !element.naturalWidth));
    if (sources.some((art) => art.status === "error" && missing(art))) return "error";
    if (Array.from(scene?.querySelectorAll<ArtworkElement>("img, image") ?? [])
      .some((element) => element.dataset.homeSrc && !elements.has(element))) return "loading";
    return sources.some((art) =>
      (art.status === "loading" && missing(art)) || [...art.elements].some((element) =>
        scene?.contains(element) && element instanceof HTMLImageElement && (!element.complete || !element.naturalWidth)))
      ? "loading" : "ready";
  };
  const retry = (scene: Element | null | undefined) => {
    if (!scene) return;
    for (const art of sourcesIn(scene)) {
      if (art.status !== "error") continue;
      art.retries = 0;
      start(art, true);
    }
    onChange();
  };
  const onError = (event: Event) => {
    const art = event.target instanceof Element ? elements.get(event.target) : undefined;
    if (art?.status !== "ready") return;
    if (art.retries++ < MAX_NATIVE_RETRIES) start(art, true);
    else mark(art, "error");
    onChange();
  };
  const onLoad = (event: Event) => {
    if (event.target instanceof HTMLImageElement && event.target.naturalWidth > 0)
      event.target.dataset.homeArtwork = "ready";
    onChange();
  };
  const loader = document.getElementById("page-loader");
  const retryOpening = () => retry(root.querySelector(".home-scene01"));
  const stopOpening = () => {
    for (const art of sourcesIn(root.querySelector(".home-scene01"))) {
      if (art.status !== "loading") continue;
      art.cancel();
      mark(art, "error");
    }
    onChange();
  };
  loader?.addEventListener("loaderretry", retryOpening);
  loader?.addEventListener("loadererror", stopOpening);
  root.addEventListener("error", onError, true);
  root.addEventListener("load", onLoad, true);
  const observer = new MutationObserver((records) => {
    if (!records.some((record) => [...record.addedNodes].some((node) =>
      node instanceof Element && (node.matches("img, image") || node.querySelector("img, image"))))) return;
    for (const [scene, priority] of scenes) if (root.contains(scene)) warm(scene, priority);
    onChange();
  });
  observer.observe(root, { childList: true, subtree: true });

  return {
    warm, status, retry,
    dispose() {
      disposed = true;
      observer.disconnect();
      loader?.removeEventListener("loaderretry", retryOpening);
      loader?.removeEventListener("loadererror", stopOpening);
      root.removeEventListener("error", onError, true);
      root.removeEventListener("load", onLoad, true);
      artwork.forEach((art) => {
        art.cancel();
        art.elements.forEach((element) => { delete element.dataset.homeArtwork; });
      });
      scenes.forEach((_, scene) => { if (scene instanceof HTMLElement) delete scene.dataset.homeArtworkActive; });
      scenes.clear();
    },
  };
}
