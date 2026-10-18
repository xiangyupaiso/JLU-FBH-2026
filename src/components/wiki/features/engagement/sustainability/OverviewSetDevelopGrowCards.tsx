import type { MouseEvent } from "react";
import type { ImpactTier } from "../../../../../data/engagement/sustainability/sustainabilityData";
import { scrollReaderToId } from "../../../../../utils/scrollReaderToTarget";

const TIER_TARGETS: Record<string, string> = {
  SET: "set-core-challenges",
  DEVELOP: "develop-broader-impact",
  GROW: "grow-sustainable-futures",
};

/**
 * SET / DEVELOP / GROW tiers. Each tier lists its SDGs in the data;
 * clicking the tier header or an individual SDG pill jumps directly to its corresponding section.
 */
export function OverviewSetDevelopGrowCards({
  tiers,
}: {
  tiers: ReadonlyArray<ImpactTier>;
}) {
  const handleJump = (event: MouseEvent<HTMLElement>, target: string) => {
    event.preventDefault();
    scrollReaderToId(target, event.currentTarget, "instant");
  };

  return (
    <div className="sust-tier-grid">
      {tiers.map((tier) => {
        const tierTarget = TIER_TARGETS[tier.layer];
        return (
          <article
            className="sust-tier-card"
            data-layer={tier.layer}
            key={tier.layer}
          >
            <div className="sust-tier-card__header">
              {tierTarget ? (
                <a
                  className="sust-tier-card__header-link"
                  href={`#${tierTarget}`}
                  onClick={(event) => handleJump(event, tierTarget)}
                >
                  <span className="sust-tier-card__layer">{tier.layer}</span>
                  <h4 className="sust-tier-card__title">{tier.title}</h4>
                </a>
              ) : (
                <>
                  <span className="sust-tier-card__layer">{tier.layer}</span>
                  <h4 className="sust-tier-card__title">{tier.title}</h4>
                </>
              )}
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
                        onClick={(event) => handleJump(event, sdg.target!)}
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
        );
      })}
    </div>
  );
}
