import { installRingStudy } from "./visual-design-studies/installRingStudy";

export function installVisualDesignFigures() {
  // Number independent article figures in DOM order, including closed notes.
  // Lettered panels and archive objects retain their local group labels.
  const numberedCaptions = new Set<HTMLElement>();
  function updateFigureNumbers() {
    let index = 0;
    document
      .querySelectorAll<HTMLElement>(
        ".wiki-page--visual-design .wiki-article figure > figcaption",
      )
      .forEach((caption) => {
        if (
          caption.parentElement?.matches(".design-panel, .ms-cover__object") ||
          caption.closest(
            '[aria-hidden="true"], .ms-print-originals, .footer-reveal-study__scene',
          )
        )
          return;
        caption.dataset.designFigureLabel = `FIG. ${String(++index).padStart(2, "0")}`;
        numberedCaptions.add(caption);
      });
    for (const caption of numberedCaptions) {
      if (!caption.isConnected) {
        delete caption.dataset.designFigureLabel;
        numberedCaptions.delete(caption);
      }
    }
  }
  updateFigureNumbers();

  // One delegated viewer serves the Visual Design article, case figures and archive.
  const imageSelector =
    ".wiki-page--visual-design .wiki-article img, .design-plate img, .manuscript img, .design-archive img";
  const imageLinkSelector =
    ".design-panel__image, .archive-object__image, .design-plate__tools a, .ms-source a";
  type FigurePhoto = { src: string; alt: string; title: string };

  const dialog = document.createElement("dialog");
  dialog.className = "figure-inspector";
  dialog.setAttribute("aria-labelledby", "figure-inspector-title");
  dialog.innerHTML =
    '<header><p id="figure-inspector-title"></p><div><button type="button" data-size aria-label="View image at actual size" aria-pressed="false">1:1</button><button type="button" data-close aria-label="Close photo viewer" autofocus>×</button></div></header><div class="figure-inspector__viewport"><img alt=""></div><footer><button type="button" data-previous aria-label="Previous photo">←</button><span aria-live="polite" aria-atomic="true"></span><button type="button" data-next aria-label="Next photo">→</button></footer>';
  document.body.append(dialog);
  const image = dialog.querySelector("img")!;
  const viewport = dialog.querySelector<HTMLElement>(
    ".figure-inspector__viewport",
  )!;
  const sizeButton = dialog.querySelector<HTMLButtonElement>("[data-size]")!;
  const previousButton =
    dialog.querySelector<HTMLButtonElement>("[data-previous]")!;
  const nextButton = dialog.querySelector<HTMLButtonElement>("[data-next]")!;
  let opener: HTMLElement | null = null;
  let photos: FigurePhoto[] = [];
  let photoIndex = 0;

  function describeImage(original: HTMLImageElement): FigurePhoto {
    const heading = original
      .closest(".design-panel")
      ?.querySelector(".design-panel__heading");
    return {
      src:
        original.closest("a")?.href ??
        (original.currentSrc || original.src || original.dataset.pageSrc || ""),
      alt: original.alt,
      title: heading
        ? Array.from(heading.children, (part) => part.textContent).join(" · ")
        : original.alt,
    };
  }

  function setNativeSize(native: boolean) {
    dialog.classList.toggle("is-native-size", native);
    sizeButton.textContent = native ? "Fit" : "1:1";
    sizeButton.setAttribute("aria-pressed", String(native));
    sizeButton.setAttribute(
      "aria-label",
      native ? "Fit image to window" : "View image at actual size",
    );
    viewport.scrollTo(0, 0);
  }

  function showPhoto(index: number) {
    photoIndex = (index + photos.length) % photos.length;
    const photo = photos[photoIndex];
    image.src = photo.src;
    image.alt = photo.alt;
    dialog.querySelector("header p")!.textContent = photo.title;
    dialog.querySelector("footer span")!.textContent =
      `${photoIndex + 1} / ${photos.length}`;
    previousButton.disabled = nextButton.disabled = photos.length < 2;
    setNativeSize(false);
  }

  function openImage(original: HTMLImageElement) {
    opener = original.closest<HTMLAnchorElement>("a") ?? original;
    const group =
      original.closest(
        ".design-plate, .ms-comparison, .ms-folio, .archive-bay, .wiki-figure",
      ) ??
      original.closest("figure") ??
      original.parentElement!;
    const originals = Array.from(
      group.querySelectorAll<HTMLImageElement>("img"),
    ).filter(
      (item) =>
        item.matches(imageSelector) &&
        !item.closest('.ms-print-originals, [aria-hidden="true"]'),
    );
    const index = originals.indexOf(original);
    photos = (index < 0 ? [original] : originals).map(describeImage);
    showPhoto(Math.max(0, index));
    dialog.showModal();
  }

  const inspectFigure = (event: MouseEvent) => {
    if (
      !(event.target instanceof Element) ||
      event.ctrlKey ||
      event.metaKey ||
      event.shiftKey ||
      event.altKey
    )
      return;
    const anchor = event.target.closest<HTMLAnchorElement>(imageLinkSelector);
    const original =
      anchor?.querySelector<HTMLImageElement>("img") ??
      event.target.closest<HTMLImageElement>("img[data-figure-zoom]");
    if (original) {
      event.preventDefault();
      openImage(original);
    } else if (
      anchor &&
      /\.(?:png|jpe?g|webp|avif|gif|svg)$/i.test(new URL(anchor.href).pathname)
    ) {
      event.preventDefault();
      opener = anchor;
      const title =
        anchor.closest(".design-plate")?.querySelector(".design-plate__heading")
          ?.textContent ??
        anchor.textContent ??
        "Figure";
      photos = [{ src: anchor.href, alt: title, title }];
      showPhoto(0);
      dialog.showModal();
    }
  };
  document.addEventListener("click", inspectFigure);

  // Images arrive after route loading as well as in the static review pages.
  const enhancedImages = new WeakMap<
    HTMLImageElement,
    Map<string, string | null>
  >();
  function prepareImage(original: HTMLImageElement) {
    if (
      enhancedImages.has(original) ||
      original.closest(
        '[aria-hidden="true"], .footer-reveal-study__scene, .design-explanation__assembly',
      ) ||
      !original.alt.trim()
    )
      return;
    const attributes: Record<string, string> = { "data-figure-zoom": "" };
    if (!original.closest("a, button")) {
      Object.assign(attributes, {
        role: "button",
        tabindex: "0",
        "aria-haspopup": "dialog",
        "aria-label": `Open image: ${original.alt || "Figure"}`,
      });
    }
    const previous = new Map<string, string | null>();
    for (const [name, value] of Object.entries(attributes)) {
      previous.set(name, original.getAttribute(name));
      original.setAttribute(name, value);
    }
    enhancedImages.set(original, previous);
  }
  document
    .querySelectorAll<HTMLImageElement>(imageSelector)
    .forEach(prepareImage);
  const ringStudies = new Map<HTMLElement, () => void>();
  function prepareRingStudies() {
    for (const [root, dispose] of ringStudies) {
      if (!root.isConnected) {
        dispose();
        ringStudies.delete(root);
      }
    }
    document
      .querySelectorAll<HTMLElement>("[data-ring-study]")
      .forEach((root) => {
        if (!ringStudies.has(root))
          ringStudies.set(root, installRingStudy(root));
      });
  }
  prepareRingStudies();
  const imageObserver = new MutationObserver((records) => {
    updateFigureNumbers();
    prepareRingStudies();
    prepareStudyFrames();
    for (const record of records) {
      for (const node of record.addedNodes) {
        if (!(node instanceof Element)) continue;
        if (node instanceof HTMLImageElement && node.matches(imageSelector))
          prepareImage(node);
        node
          .querySelectorAll<HTMLImageElement>(imageSelector)
          .forEach(prepareImage);
      }
    }
  });
  // The reader mounts after artwork preparation; observe its host from entry.
  const article =
    document.querySelector(".wiki-page--visual-design") ??
    document.getElementById("root");
  if (article)
    imageObserver.observe(article, { childList: true, subtree: true });
  const inspectWithKeyboard = (event: KeyboardEvent) => {
    if (
      !(event.target instanceof HTMLImageElement) ||
      !event.target.matches('[data-figure-zoom][role="button"]')
    )
      return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openImage(event.target);
    }
  };
  document.addEventListener("keydown", inspectWithKeyboard);
  dialog
    .querySelector("[data-close]")!
    .addEventListener("click", () => dialog.close());
  sizeButton.addEventListener("click", () =>
    setNativeSize(!dialog.classList.contains("is-native-size")),
  );
  previousButton.addEventListener("click", () => showPhoto(photoIndex - 1));
  nextButton.addEventListener("click", () => showPhoto(photoIndex + 1));
  dialog.addEventListener("keydown", (event) => {
    if (dialog.classList.contains("is-native-size") || photos.length < 2)
      return;
    if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(photoIndex + (event.key === "ArrowLeft" ? -1 : 1));
    }
  });
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog || event.target === viewport) dialog.close();
  });
  dialog.addEventListener("close", () => {
    opener?.focus({ preventScroll: true });
  });
  const loadStudy = (event: Event) => {
    const target = event.target;
    if (
      !(target instanceof HTMLDetailsElement) ||
      !target.matches(".design-live-study")
    )
      return;
    const frame = target.querySelector<HTMLIFrameElement>("iframe");
    if (frame?.dataset.src && target.open) {
      frame.src = frame.dataset.src!;
      frame.removeAttribute("data-src");
    }
    if (frame) reportStudyVisibility(frame);
  };
  document.addEventListener("toggle", loadStudy, true);

  // A child's viewport cannot tell whether its iframe has left the reader.
  const visibleStudies = new WeakMap<HTMLIFrameElement, boolean>();
  function reportStudyVisibility(frame: HTMLIFrameElement, force = false) {
    const box = frame.getBoundingClientRect();
    const reader = frame
      .closest(".route-frame__scroll")
      ?.getBoundingClientRect();
    const visibleHeight = Math.max(
      0,
      Math.min(box.bottom, reader?.bottom ?? innerHeight, innerHeight) -
        Math.max(box.top, reader?.top ?? 0, 0),
    );
    const visible =
      !frame.closest("details:not([open])") &&
      box.width > 0 &&
      visibleHeight >= Math.min(100, box.height * 0.15);
    if (!force && visibleStudies.get(frame) === visible) return;
    visibleStudies.set(frame, visible);
    frame.contentWindow?.postMessage(
      {
        type: "visual-design-study-visibility",
        visible,
      },
      location.origin,
    );
  }
  const studyObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const frame = entry.target as HTMLIFrameElement;
        reportStudyVisibility(frame);
      }
    },
    { threshold: [0, 0.15] },
  );
  const studyFrames = new Map<HTMLIFrameElement, () => void>();
  function prepareStudyFrames() {
    for (const [frame, onLoad] of studyFrames) {
      if (!frame.isConnected) {
        studyObserver.unobserve(frame);
        frame.removeEventListener("load", onLoad);
        studyFrames.delete(frame);
      }
    }
    document
      .querySelectorAll<HTMLIFrameElement>(".design-live-study iframe")
      .forEach((frame) => {
        if (studyFrames.has(frame)) return;
        const onLoad = () => reportStudyVisibility(frame, true);
        studyFrames.set(frame, onLoad);
        studyObserver.observe(frame);
        frame.addEventListener("load", onLoad);
      });
  }
  prepareStudyFrames();
  // Projected desktop scrolling needs the actual clipped reading coordinates.
  let studyVisibilityFrame = 0;
  const scheduleStudyVisibility = () => {
    if (studyVisibilityFrame) return;
    studyVisibilityFrame = requestAnimationFrame(() => {
      studyVisibilityFrame = 0;
      studyFrames.forEach((_, frame) => reportStudyVisibility(frame));
    });
  };
  window.addEventListener("scroll", scheduleStudyVisibility, true);
  window.addEventListener("resize", scheduleStudyVisibility);
  const resizeStudy = (event: MessageEvent) => {
    if (
      event.origin !== location.origin ||
      event.data?.type !== "visual-design-study-size"
    )
      return;
    const frame = Array.from(studyFrames.keys()).find(
      (item) => item.contentWindow === event.source,
    );
    const height = event.data.height;
    if (!frame || typeof height !== "number" || !Number.isFinite(height))
      return;
    frame.style.height = `${Math.max(300, Math.min(1400, Math.ceil(height) + 2))}px`;
    frame.style.minHeight = "0";
  };
  window.addEventListener("message", resizeStudy);

  let disposed = false;
  function disposeViewer() {
    if (disposed) return;
    disposed = true;
    imageObserver.disconnect();
    studyObserver.disconnect();
    cancelAnimationFrame(studyVisibilityFrame);
    window.removeEventListener("scroll", scheduleStudyVisibility, true);
    window.removeEventListener("resize", scheduleStudyVisibility);
    studyFrames.forEach((onLoad, frame) =>
      frame.removeEventListener("load", onLoad),
    );
    studyFrames.clear();
    window.removeEventListener("message", resizeStudy);
    numberedCaptions.forEach((caption) => {
      delete caption.dataset.designFigureLabel;
    });
    numberedCaptions.clear();
    ringStudies.forEach((dispose) => dispose());
    ringStudies.clear();
    document
      .querySelectorAll<HTMLImageElement>(imageSelector)
      .forEach((original) => {
        const attributes = enhancedImages.get(original);
        if (!attributes) return;
        for (const [name, value] of attributes) {
          if (value === null) original.removeAttribute(name);
          else original.setAttribute(name, value);
        }
      });
    document.removeEventListener("click", inspectFigure);
    document.removeEventListener("keydown", inspectWithKeyboard);
    document.removeEventListener("toggle", loadStudy, true);
    dialog.remove();
  }

  return disposeViewer;
}
