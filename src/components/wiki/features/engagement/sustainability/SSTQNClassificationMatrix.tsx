import {
  sstqnCategories,
  type SstqnCategory,
} from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

const DEFAULT_CAPTION =
  "SST-QN 分类键：依据机制清晰度与证据强度，将潜在的直接作用划分为 Core / Exploratory / Conditional / Excluded 四类（自 Core 至 Excluded 为证据充分度递减），使模型既能识别 Synergy，也能主动寻找可能被忽视的 Trade-off。";

/**
 * Compact prose-anchored key. The four categories are a certainty gradient,
 * so the whole figure uses a single navy staircase instead of four hues — the
 * full definitions live in the surrounding prose, this key only labels them.
 */
export function SSTQNClassificationMatrix({
  categories = sstqnCategories,
  caption = DEFAULT_CAPTION,
}: {
  categories?: ReadonlyArray<SstqnCategory>;
  caption?: string;
}) {
  return (
    <figure className="sust-matrix-key">
      <p className="sust-matrix-key__axis">机制清晰度 · 证据强度</p>
      <ul className="sust-matrix-key__rows">
        {categories.map((category, index) => (
          <li
            key={category.key}
            className={`sust-matrix-key__row sust-matrix-key__row--level-${
              index + 1
            }`}
          >
            <span className="sust-matrix-key__code" aria-hidden="true">
              {category.code}
            </span>
            <span className="sust-matrix-key__label">{category.label}</span>
            <span className="sust-matrix-key__summary">
              {category.summary}
            </span>
          </li>
        ))}
      </ul>
      <figcaption className="sust-chart-caption">{caption}</figcaption>
    </figure>
  );
}


