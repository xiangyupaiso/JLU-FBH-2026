import type { CoreSdg } from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

/**
 * SDG Card for Overview matching image 11.png.
 * Static presentation without 3D flip per editorial directive:
 * colored top bar, prominent SDG number, title, and concise summary.
 */
export function SDGInteractiveCard({ sdg }: { sdg: CoreSdg }) {
  return (
    <article
      className="sust-sdg-card sust-sdg-card--static"
      style={{ "--sdg-accent": sdg.color.hex } as React.CSSProperties}
    >
      <div
        className="sust-sdg-card__accent-bar"
        style={{ backgroundColor: sdg.color.hex }}
        aria-hidden="true"
      />
      <div className="sust-sdg-card__content">
        <span
          className="sust-sdg-card__number"
          style={{ color: sdg.color.hex }}
        >
          {String(sdg.number).padStart(2, "0")}
        </span>
        <h3 className="sust-sdg-card__title">{sdg.title}</h3>
        <p className="sust-sdg-card__summary">{sdg.summary}</p>
      </div>
    </article>
  );
}
