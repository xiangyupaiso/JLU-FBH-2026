import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FooterEasterEgg } from "./FooterEasterEgg";
import { FooterSponsors } from "./FooterSponsors";
import {
  FOOTER_CLINICAL_COLLEGE_NAME,
  FOOTER_CLINICAL_HOSPITAL_NAME,
  FOOTER_EMAIL,
  FOOTER_EMAIL_DOMAIN,
  FOOTER_EMAIL_LOCAL,
  FOOTER_INSTITUTION_LINES,
  FOOTER_LICENSE_LABEL,
  FOOTER_LICENSE_URL,
  FOOTER_MARK_CANCER_CENTER,
  FOOTER_MARK_CLINICAL,
  FOOTER_MARK_UNIVERSITY,
  type FooterMark,
} from "../data/footer";
import { useRouteModule } from "../hooks/useRouteModule";
import { stringToSlug } from "../utils";

/** Institution names are written beside these decorative signatures. */
function MarkRow({ marks }: { marks: ReadonlyArray<FooterMark> }) {
  return (
    <div className="circure-footer__mark-row">
      {marks.map((mark) => (
        <img
          key={mark.src}
          src={mark.src}
          alt=""
          width={mark.width}
          loading="lazy"
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  );
}

/** Shared closing chapter; only its colour follows the active route palette. */
export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);
  const { pathname } = useLocation();
  const module = useRouteModule();
  const footerRef = useRef<HTMLElement>(null);

  // Fixed story and reader controls should not cover the closing content.
  useEffect(() => {
    const footer = footerRef.current;
    if (!footer) return;
    let frame = 0;
    const syncVisibility = () => {
      frame = 0;
      const rect = footer.getBoundingClientRect();
      document.documentElement.toggleAttribute(
        "data-footer-visible",
        rect.top < window.innerHeight && rect.bottom > 0,
      );
    };
    const scheduleSync = () => {
      if (!frame) frame = window.requestAnimationFrame(syncVisibility);
    };
    const observer = new IntersectionObserver(scheduleSync);
    observer.observe(footer);
    window.addEventListener("scroll", scheduleSync, { passive: true });
    window.addEventListener("resize", scheduleSync);
    syncVisibility();
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", scheduleSync);
      window.removeEventListener("resize", scheduleSync);
      window.cancelAnimationFrame(frame);
      document.documentElement.removeAttribute("data-footer-visible");
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={[
        "circure-footer",
        module.home ? "is-home-page" : module.className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label="Site footer"
    >
      <div className="circure-footer__panel">
        <div className="circure-footer__paper">
          <div className="circure-footer__inner">
            <div className="circure-footer__opening">
              <p className="circure-footer__eyebrow">
                JLU-FBH <span aria-hidden="true">·</span> iGEM {teamYear}
              </p>
              <h2>
                <span className="circure-footer__opening-lead">
                  Behind every step,
                </span>{" "}
                <em className="circure-footer__opening-statement">
                  many hands.
                </em>
              </h2>
              <p className="circure-footer__opening-note">
                CirCure grows through the care, knowledge and support of a wider
                community. We are grateful to the people and organisations who
                have stood alongside our team.
              </p>
            </div>

            <section
              className="circure-footer__institutions"
              aria-labelledby="footer-institutions-title"
            >
              <div className="circure-footer__section-heading">
                <h3 id="footer-institutions-title">Our institutional home</h3>
              </div>
              <div className="circure-footer__institution-grid">
                <div className="circure-footer__institution circure-footer__institution--academic">
                  <p className="circure-footer__credit-type">Academic home</p>
                  <MarkRow marks={FOOTER_MARK_UNIVERSITY} />
                  <p className="circure-footer__credit-name">Jilin University</p>
                </div>
                <div className="circure-footer__institution">
                  <p className="circure-footer__credit-type">Clinical home</p>
                  <MarkRow marks={FOOTER_MARK_CLINICAL} />
                  <p className="circure-footer__credit-name">
                    {FOOTER_CLINICAL_HOSPITAL_NAME}
                  </p>
                  <p className="circure-footer__clinical-college">
                    {FOOTER_CLINICAL_COLLEGE_NAME}
                  </p>
                  <div className="circure-footer__clinical-team">
                    <img
                      src={FOOTER_MARK_CANCER_CENTER.src}
                      alt=""
                      width={FOOTER_MARK_CANCER_CENTER.width}
                      loading="lazy"
                      decoding="async"
                      draggable={false}
                    />
                    <p>
                      <span>Within the hospital</span>
                      {FOOTER_MARK_CANCER_CENTER.alt}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <FooterSponsors />
          </div>
        </div>

        <div className="circure-footer__closing">
          <div className="circure-footer__inner">
            <div className="circure-footer__contact">
              <div>
                <p className="circure-footer__eyebrow">Keep in touch</p>
                <h3>Let the conversation continue.</h3>
              </div>
              <div className="circure-footer__contact-details">
                <a
                  className="circure-footer__email"
                  href={"mailto:" + FOOTER_EMAIL}
                >
                  <span>
                    {FOOTER_EMAIL_LOCAL}@{FOOTER_EMAIL_DOMAIN}
                  </span>
                  <span aria-hidden="true">↗</span>
                </a>
                <p className="circure-footer__address">
                  {FOOTER_INSTITUTION_LINES.map((line) => (
                    <span key={line}>{line}</span>
                  ))}
                </p>
              </div>
            </div>
            <nav
              className="circure-footer__navigation"
              aria-label="Footer navigation"
            >
              <Link to="/description">Project</Link>
              <Link to="/roster">Team</Link>
              <Link to="/attributions">Attributions</Link>
            </nav>
            <div className="circure-footer__colophon">
              <p>
                © {teamYear} — Content on this site is licensed under a{" "}
                <a href={FOOTER_LICENSE_URL} rel="license">
                  {FOOTER_LICENSE_LABEL}
                </a>
                .
              </p>
              <p>
                The repository used to create this website is available at{" "}
                <a
                  href={"https://gitlab.igem.org/" + teamYear + "/" + teamSlug}
                >
                  gitlab.igem.org/{teamYear}/{teamSlug}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
      <FooterEasterEgg key={pathname} />
    </footer>
  );
}
