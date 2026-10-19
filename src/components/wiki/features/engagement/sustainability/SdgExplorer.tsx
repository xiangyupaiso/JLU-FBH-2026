import { createElement, useEffect, useRef } from "react";
import sdgExplorerModuleUrl from "../../../../../assets/wiki/sustainability/circure-sdg.js?url";

let registration: Promise<unknown> | undefined;

export function SdgExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let disposed = false;
    let stopArtwork = () => {};
    const syncGoal = () => {
      const match = /^#grow-sdg(1|5|8|10|13)$/.exec(window.location.hash);
      if (match)
        containerRef.current
          ?.querySelector("circure-sdg-explorer")
          ?.setAttribute("default-goal", match[1]);
    };
    registration ??= import(/* @vite-ignore */ sdgExplorerModuleUrl);
    void registration.then(() => {
      if (disposed) return;
      syncGoal();
      const container = containerRef.current;
      const shadow = container?.querySelector("circure-sdg-explorer")?.shadowRoot;
      if (!container || !shadow) return;
      // The standalone widget's shadow DOM shares the outer page's queue via
      // hidden copies. Only a decoded copy may supply a real source inside it.
      const mirror = document.createElement("span");
      mirror.hidden = true;
      mirror.setAttribute("aria-hidden", "true");
      container.append(mirror);
      const copies = new Map<HTMLImageElement, HTMLImageElement>();
      const synchronize = () => {
        for (const target of shadow.querySelectorAll<HTMLImageElement>("img[data-page-src]")) {
          let image = copies.get(target);
          if (!image) {
            image = document.createElement("img");
            image.alt = "";
            image.addEventListener("load", () => {
              if (disposed || !image?.naturalWidth || target.dataset.pageSrc !== image.dataset.pageSrc) return;
              target.src = image.currentSrc || image.src;
            });
            copies.set(target, image);
            mirror.append(image);
          }
          if (image.dataset.pageSrc !== target.dataset.pageSrc) image.dataset.pageSrc = target.dataset.pageSrc;
        }
      };
      const observer = new MutationObserver(synchronize);
      observer.observe(shadow, { subtree: true, childList: true, attributes: true, attributeFilter: ["data-page-src"] });
      synchronize();
      stopArtwork = () => { observer.disconnect(); mirror.remove(); };
    });
    window.addEventListener("hashchange", syncGoal);
    return () => {
      disposed = true;
      stopArtwork();
      window.removeEventListener("hashchange", syncGoal);
    };
  }, []);

  return (
    <div className="sust-grow-explorer" ref={containerRef}>
      {[1, 5, 8, 10, 13].map((goal) => (
        <span
          className="sust-grow-anchor"
          id={`grow-sdg${goal}`}
          key={goal}
          aria-hidden="true"
        />
      ))}
      {createElement("circure-sdg-explorer")}
    </div>
  );
}
