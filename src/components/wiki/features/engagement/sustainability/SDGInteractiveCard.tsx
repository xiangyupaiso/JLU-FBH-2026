import { QueuedImage } from "../../../../common/QueuedImage";
import type { CoreSdg } from "../../../../../data/engagement/sustainability/sustainabilityData";

/**
 * Overview core-SDG card:
 * Displays official UN SDG logo image.
 * On hover, a bottom bar slides up showing the third line of text (the summary),
 * without covering the whole logo (matching the requested drawer effect).
 */
export function SDGInteractiveCard({ sdg }: { sdg: CoreSdg }) {
  return (
    <article className="sust-sdg-card sust-sdg-card--logo" data-sdg={sdg.number}>
      <div className="sust-sdg-card__media">
        {sdg.logoUrl ? (
          <QueuedImage
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
    </article>
  );
}

