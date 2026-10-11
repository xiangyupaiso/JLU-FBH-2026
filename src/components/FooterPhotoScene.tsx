import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import teamPhotoUrl from "../assets/footer/team-keepsake.webp";
import { FooterPhotoGlass } from "./FooterPhotoGlass";
import "../styles/footer-photo-scene.css";

/** The old closing window's layered scroll reveal, now using the team's photograph. */
export default function FooterPhotoScene({ onClose }: { onClose: () => void }) {
  const windowRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const windowElement = windowRef.current;
    if (!windowElement) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const paint = () => {
      frame = 0;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      const progress = reducedMotion.matches
        ? 1
        : Math.max(
            0,
            Math.min(
              1,
              (headerHeight - windowElement.getBoundingClientRect().top) /
                Math.max(280, window.innerHeight * 0.72),
            ),
          );
      windowElement.style.setProperty("--photo-reveal", progress.toFixed(4));
    };
    const schedulePaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };
    window.addEventListener("scroll", schedulePaint, { passive: true });
    window.addEventListener("resize", schedulePaint);
    reducedMotion.addEventListener("change", schedulePaint);
    paint();
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedulePaint);
      window.removeEventListener("resize", schedulePaint);
      reducedMotion.removeEventListener("change", schedulePaint);
    };
  }, []);

  return (
    <section
      ref={windowRef}
      className="finale-photo-window"
      aria-labelledby="finale-photo-title"
    >
      <div className="finale-photo-track">
        <div className="finale-photo-sticky">
          <button
            className="finale-photo-close"
            type="button"
            onClick={onClose}
            aria-label="Return to footer"
          >
            <X aria-hidden="true" size={20} strokeWidth={1.6} />
          </button>
          <div className="finale-photo-content">
            <div className="finale-photo-heading">
              <p>JLU-FBH · iGEM 2026</p>
              <h2 id="finale-photo-title">The people who made it real.</h2>
            </div>
            <figure className="finale-photo-figure">
              <div className="finale-photo-frame">
                <img
                  src={teamPhotoUrl}
                  width="2600"
                  height="1734"
                  alt="JLU-FBH iGEM team and mentors gathered for a group photograph at the First Bethune Hospital"
                  decoding="async"
                  draggable={false}
                />
                <FooterPhotoGlass src={teamPhotoUrl} />
              </div>
              <figcaption>
                <span>Our team, together at First Bethune Hospital.</span>
                <a
                  href={teamPhotoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the full photograph <span aria-hidden="true">↗</span>
                </a>
              </figcaption>
            </figure>
          </div>
          <div className="finale-photo-cover" aria-hidden="true">
            <span className="finale-photo-cover__eyebrow">
              JLU-FBH · iGEM 2026
            </span>
            <span className="finale-photo-cover__title">
              There is one more page.
            </span>
            <span className="finale-photo-cover__action">
              Scroll to lift it <span aria-hidden="true">↑</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
