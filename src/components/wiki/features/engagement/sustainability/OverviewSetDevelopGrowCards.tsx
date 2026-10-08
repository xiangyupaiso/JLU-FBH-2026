import type { ImpactTier } from "../../../../../data/engagement/sustainability/sustainabilityData";

const jump = (target: string) =>
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });

/**
 * SET / DEVELOP / GROW tiers. Each tier lists its SDGs in the data; only the
 * ones whose chapter is on the page (those with a `target`) render as jump
 * pills, so a pill appears automatically once its chapter goes live.
 */
export function OverviewSetDevelopGrowCards({ tiers }: { tiers: ReadonlyArray<ImpactTier> }) {
  return (
    <div className="sust-tier-grid">
      {tiers.map((tier) => (
        <article className="sust-tier-card" data-layer={tier.layer} key={tier.layer}>
          <div className="sust-tier-card__header">
            <span className="sust-tier-card__layer">{tier.layer}</span>
            <h4 className="sust-tier-card__title">{tier.title}</h4>
          </div>
          <p className="sust-tier-card__desc">{tier.description}</p>
          {tier.sdgs.length ? (
            <ul className="sust-tier-card__sdgs">
              {tier.sdgs.map((sdg) => (
                <li key={sdg.number}>
                  {sdg.target ? (
                    <a
                      className="sust-sdg-pill"
                      data-sdg={sdg.number}
                      href={`#${sdg.target}`}
                      onClick={(event) => {
                        event.preventDefault();
                        jump(sdg.target!);
                      }}
                    >
                      SDG {sdg.number}
                    </a>
                  ) : (
                    <span className="sust-sdg-pill" data-sdg={sdg.number}>
                      SDG {sdg.number}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : null}
        </article>
      ))}
    </div>
  );
}
