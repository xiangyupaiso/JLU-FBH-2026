import "../../../styles/sustainability-page.css";

const SDG_LABELS = [
  "No Poverty",
  "Zero Hunger",
  "Good Health",
  "Quality Education",
  "Gender Equality",
  "Clean Water",
  "Clean Energy",
  "Decent Work",
  "Industry & Innovation",
  "Reduced Inequalities",
  "Sustainable Cities",
  "Responsible Consumption",
  "Climate Action",
  "Life Below Water",
  "Life on Land",
  "Peace & Justice",
  "Partnerships",
] as const;

/**
 * Tier membership is the same data the radar used to hard-code per axis.
 * SET is the strongest signal (navy solid), then DEVELOP (55% navy),
 * INDIRECT is outline-only (14 / 15), everything else is GROW coverage.
 * SET ⊂ DEVELOP, so a tile shows its strongest tier.
 */
type TileTier = "set" | "develop" | "indirect" | "grow";

const TIER_SDGS: Record<Exclude<TileTier, "grow">, ReadonlySet<number>> = {
  set: new Set([3, 9, 12]),
  develop: new Set([2, 3, 4, 5, 8, 9, 10, 12, 17]),
  indirect: new Set([14, 15]),
};

function tierFor(sdg: number): TileTier {
  if (TIER_SDGS.set.has(sdg)) return "set";
  if (TIER_SDGS.develop.has(sdg)) return "develop";
  if (TIER_SDGS.indirect.has(sdg)) return "indirect";
  return "grow";
}

const LEGEND: ReadonlyArray<{ tier: TileTier; label: string }> = [
  { tier: "set", label: "SET · 核心目标 SDG 3 / 9 / 12" },
  { tier: "develop", label: "DEVELOP · 扩展关联" },
  { tier: "indirect", label: "间接关联 SDG 14 / 15" },
  { tier: "grow", label: "GROW · 长期覆盖" },
];

const DEFAULT_CAPTION =
  "SDG 影响范围示意：SET 层聚焦 SDG 3 / 9 / 12 三项核心目标，DEVELOP 层扩展至利益相关者反馈所关联的目标，GROW 层覆盖 15 项 SDG 的长期影响（SDG 14 / 15 仅存在间接关联，以虚线描边呈现）。";

/**
 * Replaces the 17-axis radar. A tile grid is readable at a glance: one
 * monochrome navy staircase carries the tier signal instead of three hues,
 * and every SDG's membership is legible without zooming.
 */
export function SdgImpactRadar({ caption = DEFAULT_CAPTION }: { caption?: string }) {
  return (
    <figure className="sust-sdg-tiles-wrap">
      <div className="sust-sdg-tiles">
        {SDG_LABELS.map((label, index) => {
          const sdg = index + 1;
          const tier = tierFor(sdg);
          return (
            <span
              key={sdg}
              className={`sust-sdg-tile sust-sdg-tile--${tier}`}
              title={`SDG ${sdg} ${label}`}
              aria-label={`SDG ${sdg} ${label}`}
            >
              {sdg}
            </span>
          );
        })}
      </div>
      <ul className="sust-sdg-legend">
        {LEGEND.map((item) => (
          <li key={item.tier}>
            <i
              className={`sust-sdg-legend__swatch sust-sdg-legend__swatch--${item.tier}`}
              aria-hidden="true"
            />
            {item.label}
          </li>
        ))}
      </ul>
      <figcaption className="sust-chart-caption">{caption}</figcaption>
    </figure>
  );
}
