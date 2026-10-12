import { FOOTER_SPONSOR_ROWS } from "../data/footer";

/** Repeated signatures keep both ribbons continuous; only originals are read. */
export function FooterSponsors() {
  return (
    <section
      className="circure-footer__acknowledgements"
      aria-labelledby="footer-acknowledgements-title"
    >
      <h2 id="footer-acknowledgements-title">With thanks</h2>
      <div className="circure-footer__marquee">
        {FOOTER_SPONSOR_ROWS.map((organisations, rowIndex) => (
          <div className="circure-footer__marquee-row" key={rowIndex}>
            {/* Duration grows with the row so both ribbons drift at one pace. */}
            <div
              className="circure-footer__marquee-track"
              style={{ animationDuration: `${organisations.length * 33}s` }}
            >
              {[false, true].map((duplicate) => (
                <ul
                  className="circure-footer__marquee-group"
                  key={String(duplicate)}
                  aria-hidden={duplicate || undefined}
                >
                  {[...organisations, ...organisations].map(
                    (organisation, index) => (
                      <li
                        className="circure-footer__sponsor"
                        data-organisation={organisation.name}
                        key={`${organisation.name}-${index}`}
                        aria-hidden={index >= organisations.length || undefined}
                      >
                        {organisation.marks.map((mark) => (
                          <img
                            key={mark.src}
                            src={mark.src}
                            alt={mark.alt}
                            width={mark.width}
                            style={{ width: mark.width }}
                            loading="lazy"
                            decoding="async"
                            draggable={false}
                          />
                        ))}
                      </li>
                    ),
                  )}
                </ul>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
