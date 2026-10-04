import {
  sstqnCategories,
  type SstqnCategory,
} from "../../../../../data/engagement/sustainability/sustainabilityData";

/**
 * Figure 5 — the four Interaction Status classes as a compact key beside the
 * prose that defines them.
 */
export function SSTQNClassificationMatrix({
  categories = sstqnCategories,
  caption,
}: {
  categories?: ReadonlyArray<SstqnCategory>;
  caption: string;
}) {
  return (
    <figure className="sust-matrix-key">
      <ul className="sust-matrix-key__rows">
        {categories.map((category, index) => (
          <li
            key={category.code}
            className={`sust-matrix-key__row sust-matrix-key__row--level-${index + 1}`}
          >
            <span className="sust-matrix-key__code" aria-hidden="true">
              {category.code}
            </span>
            <span className="sust-matrix-key__label">{category.label}</span>
            <span className="sust-matrix-key__summary">{category.summary}</span>
          </li>
        ))}
      </ul>
      <figcaption className="sust-chart-caption">{caption}</figcaption>
    </figure>
  );
}
