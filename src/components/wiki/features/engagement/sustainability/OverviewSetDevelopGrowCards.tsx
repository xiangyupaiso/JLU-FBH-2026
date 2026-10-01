import type { OverviewFrameworkCard } from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

/**
 * 3-column Set-Develop-Grow cards matching image 4.png with clickable SDG jump pills.
 */
export function OverviewSetDevelopGrowCards({
  cards,
}: {
  cards: ReadonlyArray<OverviewFrameworkCard>;
}) {
  const handleJump = (targetAnchor: string) => {
    const id = targetAnchor.replace(/^#/, "");
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="sust-set-develop-grow-grid" data-wiki-reveal>
      {cards.map((card) => (
        <article className="sust-sdg-tier-card" key={card.layer}>
          <header className="sust-sdg-tier-card__header">
            <span className="sust-sdg-tier-card__kicker">{card.kicker}</span>
            <h3 className="sust-sdg-tier-card__title">{card.title}</h3>
            <p className="sust-sdg-tier-card__desc">{card.description}</p>
          </header>
          <div className="sust-sdg-tier-card__pills">
            {card.sdgs.map((sdg) => (
              <a
                key={sdg.number}
                href={sdg.targetAnchor}
                className="sust-sdg-pill"
                onClick={(e) => {
                  e.preventDefault();
                  handleJump(sdg.targetAnchor);
                }}
              >
                {sdg.label}
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
