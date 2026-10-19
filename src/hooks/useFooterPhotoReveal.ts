import { useEffect, useRef } from "react";

const clamp = (value: number) => Math.max(0, Math.min(1, value));
export const footerPhotoScale = (progress: number) =>
  1.3 - clamp(progress) * 0.3;

/** Match the reference window: p = (viewport - top) / window height. */
export function useFooterPhotoReveal(scrollRootSelector?: string) {
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const card = cardRef.current;
    if (!stage || !card) return;
    const container = scrollRootSelector
      ? stage.closest<HTMLElement>(scrollRootSelector)
      : null;
    let scrollRoot: HTMLElement | null = null;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let nearby = false;
    let height = stage.getBoundingClientRect().height;

    const paint = () => {
      frame = 0;
      const viewport = scrollRoot?.clientHeight ?? window.innerHeight;
      const origin = scrollRoot
        ? scrollRoot.getBoundingClientRect().top + scrollRoot.clientTop
        : 0;
      const top = stage.getBoundingClientRect().top - origin;
      const progress = clamp((viewport - top) / Math.max(1, height));
      card.style.transform = `scale(${reduced.matches ? 1 : footerPhotoScale(progress)})`;
    };
    const schedule = () => {
      if (nearby && !frame) frame = window.requestAnimationFrame(paint);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        nearby = entry.isIntersecting;
        // Refresh at both boundaries so a fast End/Home jump is reversible.
        paint();
      },
      { rootMargin: "100% 0px" },
    );
    const measure = () => {
      // The desktop reader can project document scroll into an overflow-hidden
      // frame. On mobile it returns to ordinary document flow.
      scrollRoot =
        container &&
        /auto|scroll|hidden/.test(getComputedStyle(container).overflowY) &&
        container.scrollHeight > container.clientHeight
          ? container
          : null;
      height = stage.getBoundingClientRect().height;
      if (scrollRoot) {
        stage.style.setProperty(
          "--photo-viewport-height",
          `${scrollRoot.clientHeight}px`,
        );
      } else {
        stage.style.removeProperty("--photo-viewport-height");
      }
      paint();
    };
    const resize = new ResizeObserver(measure);
    observer.observe(stage);
    resize.observe(stage);
    if (container) resize.observe(container);
    container?.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", measure);
    reduced.addEventListener("change", paint);
    measure();
    return () => {
      observer.disconnect();
      resize.disconnect();
      window.cancelAnimationFrame(frame);
      container?.removeEventListener("scroll", schedule);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", measure);
      reduced.removeEventListener("change", paint);
    };
  }, [scrollRootSelector]);

  return { stageRef, cardRef };
}
