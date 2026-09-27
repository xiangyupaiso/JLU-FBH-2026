import { useEffect, useRef, type RefObject } from "react";
import { Link } from "react-router-dom";
import closingImageUrl from "../assets/footer/igem-closing-v2.webp";
import closingLogoUrl from "../assets/footer/circure-logo-white-v1.webp";
import { stringToSlug } from "../utils";

const FOOTER_MENU: Array<[string, string, string]> = [
  ["01", "/description", "Project"],
  ["02", "/experiments", "Wet Lab"],
  ["03", "/model", "Dry Lab"],
  ["04", "/human-practices", "Engagement"],
  ["05", "/team", "Team"],
];

function useClosingReveal(windowRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const finalWindow = windowRef.current;
    if (!finalWindow) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const paint = () => {
      frame = 0;
      const windowRect = finalWindow.getBoundingClientRect();
      const rawProgress =
        (window.innerHeight * 0.88 - windowRect.top) /
        (window.innerHeight * 0.68);
      const progress = reducedMotion.matches
        ? 1
        : Math.min(1, Math.max(0, rawProgress));
      finalWindow.style.setProperty("--final-progress", progress.toFixed(4));
    };

    const requestPaint = () => {
      if (!frame) frame = window.requestAnimationFrame(paint);
    };

    window.addEventListener("scroll", requestPaint, { passive: true });
    window.addEventListener("resize", requestPaint, { passive: true });
    reducedMotion.addEventListener("change", requestPaint);
    requestPaint();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestPaint);
      window.removeEventListener("resize", requestPaint);
      reducedMotion.removeEventListener("change", requestPaint);
    };
  }, [windowRef]);
}

export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);
  const footerRef = useRef<HTMLElement>(null);
  const finalWindowRef = useRef<HTMLElement>(null);

  useClosingReveal(finalWindowRef);

  return (
    <footer
      className="circure-footer"
      data-surface="navy"
      ref={footerRef}
      aria-label="CirCure closing footer"
    >
      <div className="circure-footer-panel">
        <div className="circure-footer-brand-row">
          <div className="circure-footer-identity">
            <Link
              className="circure-footer-logo"
              to="/"
              aria-label="CirCure home"
            >
              <img
                src={closingLogoUrl}
                alt=""
                loading="lazy"
                decoding="async"
              />
            </Link>
            <p className="circure-footer-statement">
              <svg
                className="ribbon-mark"
                viewBox="0 0 32 46"
                aria-hidden="true"
              >
                <use href="#circure-ribbon-knot" />
              </svg>
              <span>
                Recognition is a molecular question—and a human responsibility.
              </span>
            </p>
          </div>

          <nav className="circure-footer-menu" aria-label="Footer navigation">
            {FOOTER_MENU.map(([folio, to, label]) => (
              <Link key={to} to={to}>
                <span className="circure-footer-menu__folio" aria-hidden="true">
                  {folio}
                </span>
                <span className="circure-footer-menu__label">{label}</span>
                <span
                  className="circure-footer-menu__arrow"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 12 12">
                    <path d="M3 9 9 3 M5 3h4v4" />
                  </svg>
                </span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="circure-footer-copy-row">
          <p>
            Evidence in.
            <br />
            <em>Care stays visible.</em>
          </p>
          <div className="circure-footer-meta">
            <span>CirCure × Neo-TNBsee</span>
            <span>TNBC vaccine target discovery</span>
            <span>Recognition · Evidence · Care</span>
            <span>iGEM {teamYear}</span>
          </div>
        </div>

        <div className="circure-footer-colophon">
          <small>
            © {teamYear} — Content on this site is licensed under a{" "}
            <a
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="license"
            >
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </small>
          <small>
            Repository:{" "}
            <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
              gitlab.igem.org/{teamYear}/{teamSlug}
            </a>
          </small>
          <span className="circure-footer-colophon__end" aria-hidden="true">
            END OF DOCUMENT
          </span>
        </div>
      </div>

      <section
        className="circure-final-window"
        ref={finalWindowRef}
        aria-labelledby="circure-final-title"
      >
        <div className="circure-final-track">
          <div className="circure-final-sticky">
            <img
              src={closingImageUrl}
              alt="Student researchers walking through a modern research institute"
              loading="lazy"
              decoding="async"
            />
            <div className="circure-final-shade" aria-hidden="true" />
            <div className="circure-final-lockup">
              <img src={closingLogoUrl} alt="" aria-hidden="true" />
              <strong id="circure-final-title">CIRCURE</strong>
              <span>NEO-TNBSEE</span>
            </div>
            <p className="circure-final-note">
              The people behind the evidence
              <span aria-hidden="true">01 / TEAM</span>
            </p>
          </div>
        </div>
      </section>
    </footer>
  );
}
