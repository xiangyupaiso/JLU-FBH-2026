import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import backToTopImage from "../assets/wiki/back-to-top.png";
import { clamp } from "../utils";

const MAGNET_PADDING = 80;
const MAGNET_STRENGTH = 5;
const MAX_MAGNET_OFFSET = 12;

export function BackToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Every reader route (Wet Lab / Project / Dry Lab / Engagement) scrolls the
  // document through its full article via the unified document timeline, so a
  // single threshold covers all pages: the reader hero is exactly 100dvh, and
  // the button fades in as the article takes over.
  useEffect(() => {
    let frame = 0;

    const updateVisibility = () => {
      frame = 0;
      const threshold = Math.max(420, window.innerHeight * 0.72);
      const nextVisible = window.scrollY > threshold;
      setIsVisible((current) =>
        current === nextVisible ? current : nextVisible,
      );
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    requestUpdate();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [pathname]);

  useEffect(() => {
    const button = buttonRef.current;
    if (!button || !isVisible) return;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let pointerX = 0;
    let pointerY = 0;

    const resetMagnet = () => {
      button.classList.remove("is-magnetic");
      button.style.setProperty("--magnet-x", "0px");
      button.style.setProperty("--magnet-y", "0px");
    };

    const paintMagnet = () => {
      frame = 0;
      if (!finePointer.matches || reducedMotion.matches) {
        resetMagnet();
        return;
      }

      const bounds = button.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;
      const withinX =
        Math.abs(pointerX - centerX) < bounds.width / 2 + MAGNET_PADDING;
      const withinY =
        Math.abs(pointerY - centerY) < bounds.height / 2 + MAGNET_PADDING;

      if (!withinX || !withinY) {
        resetMagnet();
        return;
      }

      const offsetX = clamp(
        (pointerX - centerX) / MAGNET_STRENGTH,
        -MAX_MAGNET_OFFSET,
        MAX_MAGNET_OFFSET,
      );
      const offsetY = clamp(
        (pointerY - centerY) / MAGNET_STRENGTH,
        -MAX_MAGNET_OFFSET,
        MAX_MAGNET_OFFSET,
      );

      button.classList.add("is-magnetic");
      button.style.setProperty("--magnet-x", `${offsetX.toFixed(2)}px`);
      button.style.setProperty("--magnet-y", `${offsetY.toFixed(2)}px`);
    };

    const trackPointer = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
      if (!frame) frame = window.requestAnimationFrame(paintMagnet);
    };

    window.addEventListener("pointermove", trackPointer, { passive: true });

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", trackPointer);
      resetMagnet();
    };
  }, [isVisible]);

  const returnToTop = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
  };

  return (
    <button
      ref={buttonRef}
      className={`circure-back-to-top${isVisible ? " is-visible" : ""}`}
      type="button"
      onClick={returnToTop}
      aria-label="Return to top"
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      title="Return to top"
    >
      <img src={backToTopImage} alt="" draggable={false} />
    </button>
  );
}
