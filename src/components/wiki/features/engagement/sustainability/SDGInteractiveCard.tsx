import type { MouseEvent } from "react";
import type { CoreSdg } from "../../../../../data/engagement/sustainability/sustainabilityData";

const jump = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
  event.preventDefault();
  document.getElementById(target)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

/**
 * Overview core-SDG card: SDG colour top bar, goal number and title, one-line
 * focus. Links to the goal's chapter when that chapter is on the page.
 */
export function SDGInteractiveCard({ sdg }: { sdg: CoreSdg }) {
  const body = (
    <>
      <span className="sust-sdg-card__number">SDG {sdg.number}</span>
      <h4 className="sust-sdg-card__title">{sdg.title}</h4>
      <p className="sust-sdg-card__summary">{sdg.summary}</p>
    </>
  );
  return sdg.target ? (
    <a
      className="sust-sdg-card"
      data-sdg={sdg.number}
      href={`#${sdg.target}`}
      onClick={(event) => jump(event, sdg.target!)}
    >
      {body}
    </a>
  ) : (
    <article className="sust-sdg-card" data-sdg={sdg.number}>
      {body}
    </article>
  );
}
