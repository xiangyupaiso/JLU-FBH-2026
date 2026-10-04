import { useRef, type CSSProperties } from "react";
import emblemUrl from "../assets/story-nav/circure-emblem.png";
import ribbonUrl from "../assets/story-nav/circure-ribbon.png";
import {
  FOOTER_EMAIL,
  FOOTER_EMAIL_DOMAIN,
  FOOTER_EMAIL_LOCAL,
  FOOTER_INSTITUTION_LINES,
  FOOTER_LICENSE_LABEL,
  FOOTER_LICENSE_URL,
  FOOTER_MARK_CLINICAL,
  FOOTER_MARK_UNIVERSITY,
  FOOTER_PARTNER_PRIMARY,
  FOOTER_PARTNER_SUPPORT,
  FOOTER_PARTNERS_LABEL,
  FOOTER_WORDMARK_RATIO,
  type FooterMark,
} from "../data/footer";
import { useFooterEasterEgg } from "../hooks/useFooterEasterEgg";
import { useRouteModule } from "../hooks/useRouteModule";
import { stringToSlug } from "../utils";

/** One crest/seal and the wordmark it belongs to. */
function MarkRow({
  marks,
  modifier,
}: {
  marks: ReadonlyArray<FooterMark>;
  /** Aligns the round seal's centre with the crest's — see the CSS note. */
  modifier?: string;
}) {
  return (
    <div className={`circure-footer__mark-row${modifier ?? ""}`}>
      {marks.map((mark, index) => (
        <img
          key={mark.src}
          /* Index 0 is always the round seal, 1 the wordmark. The wordmark is
             sized by height in CSS; the seal by width. */
          className={
              index === 0
                ? "circure-footer__mark"
                : "circure-footer__mark circure-footer__mark--word"
            }
          src={mark.src}
          alt={mark.alt}
          width={mark.width}
          height={index === 0 ? mark.width : undefined}
          style={index === 0 ? { width: `${mark.width}px` } : undefined}
          /* `eager`, not `lazy`: these sit below the fold but every reader
             reaches them, and a lazy mark pops in one frame after the footer
             does — a visible blank flash exactly where the page is meant to
             feel finished. */
          loading="eager"
          decoding="async"
          draggable={false}
        />
      ))}
    </div>
  );
}

/**
 * The closing panel plus the emblem easter egg.
 *
 * The panel carries the reader-route module class (`is-<module>-page`) so the
 * module palette can reach it: it is rendered outside `<Routes>` and therefore
 * inherits nothing from `.wiki-page--*`. See `circure-footer.css`.
 */
export function Footer() {
  const teamYear = import.meta.env.VITE_TEAM_YEAR;
  const teamName = import.meta.env.VITE_TEAM_NAME;
  const teamSlug = stringToSlug(teamName);

  const easterRef = useRef<HTMLElement>(null);
  const module = useRouteModule();
  useFooterEasterEgg(easterRef);

  return (
    <footer
      className={`circure-footer ${module.className}`.trim()}
      aria-label="Site footer"
    >
      <div className="circure-footer__panel">
        <div className="circure-footer__inner">
          {/* The seal sizes and the wordmark ratio are the layout's inputs; they are
              written onto the container so the CSS offsets that align the two
              rows are derived from the same numbers the data layer declares. */}
          <div
            className="circure-footer__marks"
            style={
              {
                "--crest-size": `${FOOTER_MARK_UNIVERSITY[0].width}px`,
                "--seal-size": `${FOOTER_MARK_CLINICAL[0].width}px`,
                "--seal-ratio": FOOTER_WORDMARK_RATIO,
              } as CSSProperties
            }
          >
            <MarkRow marks={FOOTER_MARK_UNIVERSITY} />
            <MarkRow
              marks={FOOTER_MARK_CLINICAL}
              modifier=" circure-footer__mark-row--seal"
            />
          </div>

          <div className="circure-footer__contact">
            <h2 className="circure-footer__contact-title">
              Contact us<em>.</em>
            </h2>
            <p className="circure-footer__address">
              {FOOTER_INSTITUTION_LINES.map((line) => (
                <span key={line}>{line}</span>
              ))}
            </p>
            <a className="circure-footer__email" href={`mailto:${FOOTER_EMAIL}`}>
              <span>{FOOTER_EMAIL_LOCAL}</span>@{FOOTER_EMAIL_DOMAIN}
            </a>
          </div>

          <div className="circure-footer__partners">
            <p className="circure-footer__partners-label">
              {FOOTER_PARTNERS_LABEL}
            </p>
            <div className="circure-footer__partners-body">
              <img
                className="circure-footer__partners-primary"
                src={FOOTER_PARTNER_PRIMARY.src}
                alt={FOOTER_PARTNER_PRIMARY.alt}
                width={FOOTER_PARTNER_PRIMARY.width}
                height="auto"
                loading="lazy"
                decoding="async"
                draggable={false}
              />
              <div className="circure-footer__partners-support">
                {FOOTER_PARTNER_SUPPORT.map((row) => (
                  <div className="circure-footer__partners-row" key={row[0].src}>
                    {row.map((mark) => (
                      <img
                        key={mark.src}
                        className="circure-footer__partners-mark"
                        src={mark.src}
                        alt={mark.alt}
                        width={mark.width}
                        height="auto"
                        loading="lazy"
                        decoding="async"
                        draggable={false}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* The following MUST be on every page: license information and the
              link to the team's repository on gitlab.igem.org. */}
          <div className="circure-footer__colophon">
            <span>
              © {teamYear} — Content on this site is licensed under a{" "}
              <a href={FOOTER_LICENSE_URL} rel="license">
                {FOOTER_LICENSE_LABEL}
              </a>
              .
            </span>
            <span>
              The repository used to create this website is available at{" "}
              <a href={`https://gitlab.igem.org/${teamYear}/${teamSlug}`}>
                gitlab.igem.org/{teamYear}/{teamSlug}
              </a>
              .
            </span>
          </div>
        </div>
      </div>

      {/* The emblem assembles as the reader keeps scrolling past the panel. */}
      <section
        ref={easterRef}
        className="circure-footer__easter"
        aria-label="Let therapy evolve with the tumor"
      >
        <div className="circure-footer__easter-sticky">
          <div className="brand-emblem" aria-hidden="true">
            <div className="brand-emblem-disc">
              <img className="brand-emblem-base" src={emblemUrl} alt="" />
              <img className="brand-emblem-ribbon" src={ribbonUrl} alt="" />
            </div>
            <svg
              className="brand-emblem-orbit"
              viewBox="0 0 640 640"
              role="presentation"
            >
              <circle className="brand-orbit-track" cx="320" cy="320" r="300" />
              <path
                className="brand-orbit-active"
                pathLength={1}
                d="M320 20a300 300 0 1 1-.1 0"
              />
              <circle className="brand-orbit-node" cx="116" cy="100" r="5" />
              <circle className="brand-orbit-node" cx="570" cy="486" r="5" />
            </svg>
          </div>
        </div>

        <p className="circure-footer__easter-note">
          <span>Let therapy evolve with the tumor.</span>
          <span aria-hidden="true">CirCure</span>
        </p>
      </section>
    </footer>
  );
}
