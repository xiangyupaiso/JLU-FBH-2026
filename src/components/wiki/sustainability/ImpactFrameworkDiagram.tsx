import {
  frameworkLayers,
  type FrameworkLayer,
} from "../../../data/sustainabilityData";
import "../../../styles/sustainability-page.css";

const DEFAULT_CAPTION =
  "SET–DEVELOP–GROW 三层递进影响框架：由核心问题响应（SET）出发，逐步扩展至多维影响拓展（DEVELOP），最终探索长期系统价值（GROW）。";

/**
 * Compact prose-anchored staircase replacing the trapezoid SVG. The tiers
 * are a progression, so a single navy opacity staircase (solid → 55% → 25%)
 * carries the hierarchy instead of three hues; each row is a wider step to
 * suggest outward expansion.
 */
export function ImpactFrameworkDiagram({
  caption = DEFAULT_CAPTION,
}: {
  caption?: string;
}) {
  return (
    <figure className="sust-tier-stairs">
      <div className="sust-tier-stairs__rows">
        {frameworkLayers.map((layer, index) => (
          <div
            key={layer.key}
            className={`sust-tier-stair sust-tier-stair--level-${index + 1}`}
          >
            <span className="sust-tier-stair__label">{layer.label}</span>
            <span className="sust-tier-stair__title">{layer.title}</span>
            <span className="sust-tier-stair__desc">{layer.description}</span>
          </div>
        ))}
      </div>
      <figcaption className="sust-chart-caption">{caption}</figcaption>
    </figure>
  );
}

/** Re-exported so consumers that import the FrameworkLayer type still work. */
export type { FrameworkLayer };
