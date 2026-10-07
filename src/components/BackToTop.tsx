import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { HOME_INTRO_REPLAY_EVENT } from "../utils/homeIntro";
const backToTopImage = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/back-to-top.avif";

export function BackToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);
  const topLabel = pathname === "/" ? "Return to CirCure title" : "Return to top";

  useEffect(() => {
    setIsLaunching(false);
  }, [pathname]);

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
    if (!isLaunching) return;

    const position = { y: window.scrollY };
    const tween = gsap.to(position, {
      y: 0,
      duration: 0.72,
      ease: "power2.inOut",
      onUpdate: () => {
        window.scrollTo({ top: position.y, behavior: "instant" });
      },
      onComplete: () => {
        window.scrollTo({ top: 0, behavior: "instant" });
        if (pathname === "/") {
          window.dispatchEvent(new Event(HOME_INTRO_REPLAY_EVENT));
        }
        setIsLaunching(false);
      },
    });

    return () => {
      tween.kill();
    };
  }, [isLaunching, pathname]);

  const returnToTop = () => {
    if (isLaunching) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reducedMotion) {
      window.scrollTo({ top: 0, behavior: "instant" });
      if (pathname === "/") {
        window.dispatchEvent(new Event(HOME_INTRO_REPLAY_EVENT));
      }
    } else {
      setIsLaunching(true);
    }
  };

  return (
    <button
      className={`circure-back-to-top${isVisible || isLaunching ? " is-visible" : ""}${isLaunching ? " is-launching" : ""}`}
      type="button"
      onClick={returnToTop}
      disabled={isLaunching}
      aria-label={topLabel}
      aria-hidden={!isVisible && !isLaunching}
      tabIndex={isVisible && !isLaunching ? 0 : -1}
      title={topLabel}
    >
      <span
        className="circure-back-to-top__artwork"
        aria-hidden="true"
      >
        <img src={backToTopImage} alt="" draggable={false} />
      </span>
    </button>
  );
}
