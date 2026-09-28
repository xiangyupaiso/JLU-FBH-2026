import html2canvas from "html2canvas-pro";

export interface LensPixels {
  displacement: ImageData;
  reflection: ImageData;
  scale: number;
}

/** Sample image-only story artwork directly, preserving its current layer order. */
function captureArtwork(box: DOMRect, guard: number, scale: number) {
  const scene = [
    ...document.querySelectorAll<HTMLElement>(".story-chapter-inner"),
  ].find((element) => {
    const bounds = element.getBoundingClientRect();
    return (
      bounds.top <= box.top &&
      bounds.bottom >= box.bottom &&
      element.querySelector(".story-backdrop")
    );
  });
  if (!scene || scene.querySelector("svg, canvas, video")) return null;
  const copy = scene.closest(".story-chapter")?.querySelector(".story-copy");
  if (copy) {
    const bounds = copy.getBoundingClientRect();
    if (
      bounds.top < box.bottom &&
      bounds.bottom > box.top &&
      getComputedStyle(copy).visibility !== "hidden"
    )
      return null;
  }
  const images = [...scene.querySelectorAll<HTMLImageElement>("img")].filter(
    (image) => image.complete && image.naturalWidth,
  );
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil((box.width + guard * 2) * scale);
  canvas.height = Math.ceil((box.height + guard * 2) * scale);
  const context = canvas.getContext("2d");
  if (!context) return null;
  context.scale(scale, scale);
  context.translate(guard - box.left, guard - box.top);
  context.fillStyle = getComputedStyle(scene).backgroundColor;
  context.fillRect(
    box.left - guard,
    box.top - guard,
    box.width + guard * 2,
    box.height + guard * 2,
  );
  for (const image of images) {
    const bounds = image.getBoundingClientRect();
    if (bounds.bottom < box.top - guard || bounds.top > box.bottom + guard)
      continue;
    let opacity = 1;
    for (
      let element: HTMLElement | null = image;
      element && element !== scene.parentElement;
      element = element.parentElement
    ) {
      const style = getComputedStyle(element);
      if (style.visibility === "hidden" || style.display === "none")
        opacity = 0;
      opacity *= Number(style.opacity);
    }
    if (!opacity) continue;
    const fit = getComputedStyle(image).objectFit;
    let width = bounds.width;
    let height = bounds.height;
    if (fit === "cover" || fit === "contain") {
      const ratio = (fit === "cover" ? Math.max : Math.min)(
        width / image.naturalWidth,
        height / image.naturalHeight,
      );
      width = image.naturalWidth * ratio;
      height = image.naturalHeight * ratio;
    }
    context.save();
    context.beginPath();
    context.rect(bounds.left, bounds.top, bounds.width, bounds.height);
    context.clip();
    context.globalAlpha = opacity;
    context.drawImage(
      image,
      bounds.left + (bounds.width - width) / 2,
      bounds.top + (bounds.height - height) / 2,
      width,
      height,
    );
    context.restore();
  }
  return canvas;
}

/** Raster fallback for engines that cannot SVG-filter the live backdrop.
 * Capture only the lens and its sampling margin, never the navigation itself.
 * One capture at a time; all work and temporary pixels belong to this instance.
 */
export function mountNavGlassCanvas(
  surface: HTMLElement,
  getLens: () => LensPixels | null,
  enabled: () => boolean,
) {
  const canvas = document.createElement("canvas");
  canvas.className = "nav-glass-canvas";
  canvas.setAttribute("aria-hidden", "true");
  const context = canvas.getContext("2d");
  if (!context) return () => {};
  surface.append(canvas);
  let disposed = false;
  let timer = 0;
  let failed = false;
  let dirty = true;
  let busy = false;
  let delay = 180;
  const invalidate = () => {
    dirty = true;
    if (!busy && !disposed) {
      window.clearTimeout(timer);
      timer = window.setTimeout(render, delay);
    }
  };
  const onScroll = () => {
    // Keep the live translucent backdrop while moving; stale pixels would lag.
    delete surface.dataset.canvasReady;
    invalidate();
  };
  const onLoad = (event: Event) => {
    if (event.target instanceof HTMLImageElement) invalidate();
  };
  const resizeObserver = new ResizeObserver(() => {
    delete surface.dataset.canvasReady;
    invalidate();
  });
  resizeObserver.observe(surface);
  const contentObserver = new MutationObserver((records) => {
    if (
      records.some(
        ({ target }) =>
          target instanceof Element &&
          !target.closest(".site-header, .sheep-cursor, .circure-cursor") &&
          !(
            target === document.body &&
            records.every((record) =>
              [...record.addedNodes, ...record.removedNodes].every(
                (node) => node instanceof HTMLIFrameElement,
              ),
            )
          ),
      )
    )
      invalidate();
  });
  contentObserver.observe(document.querySelector("#root") ?? document.body, {
    subtree: true,
    childList: true,
    attributes: true,
    attributeFilter: ["style", "class", "src"],
  });
  surface.addEventListener("nav-glass-update", invalidate);
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", invalidate, { passive: true });
  document.addEventListener("visibilitychange", invalidate);
  document.addEventListener("load", onLoad, true);

  const render = async () => {
    if (disposed || busy) return;
    const start = performance.now();
    const lens = getLens();
    const animating =
      surface.closest("header")?.dataset.navAnimating === "true";
    if (dirty && !document.hidden && enabled() && lens && !animating) {
      dirty = false;
      busy = true;
      const box = surface.getBoundingClientRect();
      const guard = 80;
      const scale = Math.min(
        devicePixelRatio || 1,
        1,
        Math.sqrt(
          600_000 / ((box.width + guard * 2) * (box.height + guard * 2)),
        ),
      );
      const sx = window.scrollX;
      const sy = window.scrollY;
      try {
        const capture =
          captureArtwork(box, guard, scale) ??
          (await html2canvas(document.body, {
            x: box.left + sx - guard,
            y: box.top + sy - guard,
            width: box.width + guard * 2,
            height: box.height + guard * 2,
            scrollX: sx,
            scrollY: sy,
            scale,
            backgroundColor: null,
            logging: false,
            onclone: (document) => {
              // A cloned smooth-scroll rule must not animate the capture viewport.
              document.documentElement.style.setProperty(
                "scroll-behavior",
                "auto",
                "important",
              );
              document.body.style.setProperty(
                "scroll-behavior",
                "auto",
                "important",
              );
              document.defaultView?.scrollTo({
                left: sx,
                top: sy,
                behavior: "instant",
              });
              // Keep layout spacers but skip painting distant full-screen scenes.
              // Removing them would change sticky positions and scroll alignment.
              document
                .querySelectorAll<HTMLElement>(".story-chapter")
                .forEach((scene) => {
                  const rect = scene.getBoundingClientRect();
                  if (rect.bottom < -guard || rect.top > box.bottom + guard)
                    scene.style.visibility = "hidden";
                });
            },
            imageTimeout: 1500,
            ignoreElements: (element) => {
              if (
                element.closest(
                  ".site-header, .sheep-cursor, .circure-cursor, #page-loader",
                ) ||
                ["SCRIPT", "IFRAME"].includes(element.tagName)
              )
                return true;
              // Preserve normal-flow nodes: removing preceding chapters would
              // move the sampled scene. The output bitmap itself is cropped.
              return false;
            },
          }));
        if (disposed) return;
        const current = surface.getBoundingClientRect();
        // Never stretch an old closed-bar capture over a newly opened menu.
        if (
          Math.abs(current.height - box.height) < 1 &&
          Math.abs(current.width - box.width) < 1 &&
          Math.abs(window.scrollY - sy) < 2 &&
          Math.abs(window.scrollX - sx) < 2 &&
          surface.closest("header")?.dataset.navAnimating !== "true" &&
          enabled()
        ) {
          const source = capture.getContext("2d", { willReadFrequently: true });
          if (!source) throw new Error("Cannot read the navigation backdrop");
          const input = source.getImageData(
            0,
            0,
            capture.width,
            capture.height,
          );
          const width = Math.max(1, Math.round(box.width * scale));
          const height = Math.max(1, Math.round(box.height * scale));
          canvas.width = width;
          canvas.height = height;
          const output = context.createImageData(width, height);
          const field = lens.displacement;
          for (let y = 0; y < height; y++) {
            for (let x = 0; x < width; x++) {
              const mx = Math.min(
                field.width - 1,
                Math.floor((x / width) * field.width),
              );
              const my = Math.min(
                field.height - 1,
                Math.floor((y / height) * field.height),
              );
              const mi = (my * field.width + mx) * 4;
              const dx = ((field.data[mi] - 128) / 255) * lens.scale * scale;
              const dy =
                ((field.data[mi + 1] - 128) / 255) * lens.scale * scale;
              const ix = Math.max(
                0,
                Math.min(input.width - 1, Math.round(x + guard * scale + dx)),
              );
              const iy = Math.max(
                0,
                Math.min(input.height - 1, Math.round(y + guard * scale + dy)),
              );
              const ii = (iy * input.width + ix) * 4;
              const oi = (y * width + x) * 4;
              const light = (lens.reflection.data[mi + 3] / 255) * 0.5;
              for (let channel = 0; channel < 3; channel++)
                output.data[oi + channel] =
                  input.data[ii + channel] * (1 - light) + 255 * light;
              output.data[oi + 3] = input.data[ii + 3];
            }
          }
          context.putImageData(output, 0, 0);
          surface.dataset.canvasReady = "true";
          failed = false;
        } else {
          dirty = true;
        }
      } catch (error) {
        delete surface.dataset.canvasReady;
        if (!failed)
          console.warn("Navigation canvas refraction unavailable", error);
        failed = true;
      }
    } else if (!enabled()) {
      delete surface.dataset.canvasReady;
    }
    busy = false;
    delay = Math.max(180, Math.min(1200, (performance.now() - start) * 2));
    // No idle capture loop: only content, size, or scroll changes request work.
    if (dirty && !document.hidden && enabled()) invalidate();
  };
  invalidate();
  return () => {
    disposed = true;
    window.clearTimeout(timer);
    resizeObserver.disconnect();
    contentObserver.disconnect();
    surface.removeEventListener("nav-glass-update", invalidate);
    window.removeEventListener("scroll", onScroll);
    window.removeEventListener("resize", invalidate);
    document.removeEventListener("visibilitychange", invalidate);
    document.removeEventListener("load", onLoad, true);
    delete surface.dataset.canvasReady;
    canvas.remove();
  };
}
