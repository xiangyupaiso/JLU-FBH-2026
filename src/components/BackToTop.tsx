import { useEffect, useRef, useState } from "react";
import { clamp } from "../utils";

const MAGNET_PADDING = 80;
const MAGNET_STRENGTH = 5;
const MAX_MAGNET_OFFSET = 12;

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

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
  }, []);

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
      <svg viewBox="0 0 20 20" aria-hidden="true">
        <path d="M10 16V4M5.5 8.5 10 4l4.5 4.5" />
      </svg>
    </button>
  );
}
