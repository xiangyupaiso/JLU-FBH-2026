import { useEffect, type RefObject } from "react";
import { clamp } from "../utils";

/**
 * Drives the footer easter egg by writing `--easter-p` on the root element.
 *
 * The emblem assembles as the reader overscrolls past the contact panel: 0 when
 * the section is one viewport below the fold, 1 once it has risen to the middle
 * of the viewport. Easing the value toward its target rather than scrubbing to
 * it directly gives the emblem a little weight, so it keeps assembling for a
 * moment after the gesture stops — the "resistance" the gesture should have.
 *
 * The easing is frame-rate independent (a fixed share of the remaining distance
 * per frame, not a per-frame increment), so a 120Hz display does not assemble it
 * twice as fast as a 60Hz one.
 *
 * Deliberately not GSAP. This is one `getBoundingClientRect` per frame on one
 * element, and the footer is mounted on all 22 pages; a ScrollTrigger per route
 * would cost far more than it explains. The same passive-listener + single rAF
 * shape as `BackToTop`'s visibility test.
 *
 * Under `prefers-reduced-motion` the value is pinned to 1 and the stylesheet
 * collapses the sticky window, so the emblem is simply present.
 */
export function useFooterEasterEgg(rootRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    /** Share of the remaining distance covered per frame. Lower = heavier. */
    const EASE = 0.14;

    let frame = 0;
    let current = 0;
    let target = 0;

    const paint = () => {
      const bounds = root.getBoundingClientRect();
      // Progress tracks the section sliding up the viewport, not a sticky
      // child: there is no sticky child any more (a tall track plus a short
      // pinned window spent most of its scroll doing nothing). 0 as the
      // section's top edge is one viewport below the fold, 1 once it has risen
      // to the middle — so the emblem is fully assembled by the time the
      // reader reaches the bottom of the page.
      const raw =
        (window.innerHeight - bounds.top) / (window.innerHeight * 0.62);
      target = clamp(raw);

      if (reducedMotion.matches) {
        current = 1;
      } else {
        current += (target - current) * EASE;
        // Snap once the gap is below what a frame can show, so the value parks
        // at exactly 0 or 1 instead of asymptoting towards them.
        if (Math.abs(target - current) < 0.001) current = target;
      }
      root.style.setProperty("--easter-p", current.toFixed(4));
    };

    const step = () => {
      paint();
      // Keep easing after the gesture has stopped, until the value settles.
      if (!reducedMotion.matches && current !== target) {
        frame = window.requestAnimationFrame(step);
      } else {
        frame = 0;
      }
    };

    const requestStep = () => {
      if (!frame) frame = window.requestAnimationFrame(step);
    };

    window.addEventListener("scroll", requestStep, { passive: true });
    window.addEventListener("resize", requestStep, { passive: true });
    reducedMotion.addEventListener("change", requestStep);
    requestStep();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestStep);
      window.removeEventListener("resize", requestStep);
      reducedMotion.removeEventListener("change", requestStep);
    };
  }, [rootRef]);
}