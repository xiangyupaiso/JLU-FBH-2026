import type { MouseEvent } from "react";
import type { CoreSdg } from "../../../../../data/engagement/sustainability/sustainabilityData";
import { scrollReaderToId } from "../../../../../utils/scrollReaderToTarget";

const jump = (event: MouseEvent<HTMLAnchorElement>, target: string) => {
  event.preventDefault();
  scrollReaderToId(target, event.currentTarget, "instant");
};

/**
 * Overview core-SDG card:
 * Displays official UN SDG logo image.
 * On hover, a bottom bar slides up showing the third line of text (the summary),
 * without covering the whole logo (matching the requested drawer effect).
 * Clicking scrolls smoothly to the goal's chapter.
 */
export function SDGInteractiveCard({ sdg }: { sdg: CoreSdg }) {
  const content = (
    <div className="sust-sdg-card__media">
      {sdg.logoUrl ? (
        <img
          src={sdg.logoUrl}
          alt={`SDG ${sdg.number}: ${sdg.title}`}
          className="sust-sdg-card__logo"
          loading="lazy"
          decoding="async"
          width={600}
          height={600}
        />
      ) : (
        <div className="sust-sdg-card__fallback">
          <span className="sust-sdg-card__number">SDG {sdg.number}</span>
          <h4 className="sust-sdg-card__title">{sdg.title}</h4>
        </div>
      )}
      <div className="sust-sdg-card__drawer">
        <p className="sust-sdg-card__summary">{sdg.summary}</p>
      </div>
    </div>
  );

  return sdg.target ? (
    <a
      className="sust-sdg-card sust-sdg-card--logo"
      data-sdg={sdg.number}
      href={`#${sdg.target}`}
      onClick={(event) => jump(event, sdg.target!)}
      aria-label={`SDG ${sdg.number}: ${sdg.title} - ${sdg.summary}`}
    >
      {content}
    </a>
  ) : (
    <article className="sust-sdg-card sust-sdg-card--logo" data-sdg={sdg.number}>
      {content}
    </article>
  );
}
