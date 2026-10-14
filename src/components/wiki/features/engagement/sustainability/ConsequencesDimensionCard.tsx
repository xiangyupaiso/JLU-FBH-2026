import type { ReactNode } from "react";
import type {
  ConsequenceDimension,
  SdgChapter,
} from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { RichText } from "./RichText";

const icon = (paths: ReactNode) => (
  <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
    {paths}
  </svg>
);

const DIMENSION_ICONS: Record<ConsequenceDimension["id"], ReactNode> = {
  social: icon(
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.4 19.2c.5-3.1 2.7-5 5.6-5s5.1 1.9 5.6 5" />
      <circle cx="16.8" cy="9" r="2.6" />
      <path d="M17.4 14.2c2.1.6 3.4 2.1 3.8 4.1" />
    </>,
  ),
  economic: icon(
    <>
      <path d="M3.5 20.5h17" />
      <path d="M5.6 20.5v-6.8" />
      <path d="M10.4 20.5V7.8" />
      <path d="M15.2 20.5v-9.4" />
      <path d="M20 20.5V4.8" />
    </>,
  ),
  environmental: icon(
    <>
      <path d="M5.2 14.8c0-6 4.6-10 13.6-10 0 9.4-4 13.8-10 13.8-1.4 0-2.6-.4-3.6-1.1" />
      <path d="M4 20.4c2.6-5.6 7-9.2 12.2-11.2" />
    </>,
  ),
};

const ROWS = [
  ["benefit", "Potential Benefit"],
  ["risk", "Potential Risk"],
  ["boundary", "Evidence Boundary"],
] as const;

const Paragraphs = ({ items }: { items: ReadonlyArray<string> }) => (
  <div className="wiki-prose">
    {items.map((paragraph) => (
      <p key={paragraph}>
        <RichText text={paragraph} />
      </p>
    ))}
  </div>
);

/**
 * C — Consequences: short-term changes, then the long-term social / economic /
 * environmental dimensions, each split into benefit, risk and evidence boundary.
 */
export function ConsequencesDimensionCard({
  consequences,
  shortTermFeature,
}: {
  consequences: SdgChapter["consequences"];
  /** Optional feature rendered directly after the short-term paragraphs (SDG 4). */
  shortTermFeature?: ReactNode;
}) {
  return (
    <div className="sust-consequences">
      <h4 className="sust-minor-heading">{consequences.shortTerm.heading}</h4>
      <Paragraphs items={consequences.shortTerm.paragraphs} />
      {shortTermFeature}

      <h4 className="sust-minor-heading">{consequences.longTerm.heading}</h4>
      {consequences.longTerm.intro ? (
        <Paragraphs items={[consequences.longTerm.intro]} />
      ) : null}

      <ul className="sust-consequence-grid">
        {consequences.dimensions.map((dimension) => (
          <li className="sust-consequence-card" data-dimension={dimension.id} key={dimension.id}>
            <header className="sust-consequence-card__header">
              <span className="sust-consequence-card__icon">{DIMENSION_ICONS[dimension.id]}</span>
              <h5 className="sust-consequence-card__title">{dimension.title}</h5>
            </header>
            {dimension.intro ? (
              <p className="sust-consequence-card__intro">
                <RichText text={dimension.intro} />
              </p>
            ) : null}
            <dl className="sust-consequence-card__rows">
              {ROWS.map(([key, label]) => (
                <div className={`sust-consequence-card__row sust-consequence-card__row--${key}`} key={key}>
                  <dt>{label}</dt>
                  <dd>
                    <RichText text={dimension[key]} />
                  </dd>
                </div>
              ))}
            </dl>
          </li>
        ))}
      </ul>
    </div>
  );
}
