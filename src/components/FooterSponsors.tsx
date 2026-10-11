import { FOOTER_ORGANISATIONS } from "../data/footer";

const SPONSOR_ROWS = [
  FOOTER_ORGANISATIONS.slice(0, 3),
  FOOTER_ORGANISATIONS.slice(3),
];

/** Repeated signatures keep both ribbons continuous; only originals are read. */
export function FooterSponsors() {
  return (
    <section
      className="circure-footer__acknowledgements"
      aria-labelledby="footer-acknowledgements-title"
    >
      <div className="circure-footer__section-heading">
        <h3 id="footer-acknowledgements-title">With thanks</h3>
      </div>
      <div className="circure-footer__marquee">
        {SPONSOR_ROWS.map((organisations, rowIndex) => (
          <div className="circure-footer__marquee-row" key={rowIndex}>
            <div className="circure-footer__marquee-track">
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
