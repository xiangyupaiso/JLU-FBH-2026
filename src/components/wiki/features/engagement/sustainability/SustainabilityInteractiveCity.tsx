import { useId, useState, type CSSProperties, type MouseEvent } from "react";
import cityWebp from "../../../../../assets/wiki/sustainability/sustainability-interactive-city.webp";
import { scrollReaderToId } from "../../../../../utils/scrollReaderToTarget";

export interface CityHotspot {
  id: string;
  name: string;
  badge: string;
  targetId: string;
  left: number;
  top: number;
  width: number;
  height: number;
}

/**
 * 15 interactive hotspots matching the official layer description specification:
 * 1. 白衣练功人 -> 01-04-Collaborative Baduanjin Video
 * 2. SST-QN 小船 -> SDG Synergy–Trade-off Quantification Network (SST-QN)
 * 3. SCALE 小船 -> "In order to ground this impact framework..."
 * 4. Impact Framework 小岛 -> SET-DEVELOP-GROW Impact Framework
 * 5. Pink Care 展棚 -> 14-Apricot Blossoms and Pink Care
 * 6. SynBio Classroom 教室 -> 12-Synbio classroom
 * 7. Partnerships for iGEM 楼 -> SDG17: Partnerships for the Goals
 * 8. Dorm Planting 种植区 -> 06-Dorm Planting Education
 * 9. Responsible Development 楼 -> SDG12: Responsible Consumption and Production
 * 10. Health for all 医疗楼 -> SDG3: Good Health and Well-being
 * 11. Innovation 科研楼 -> SDG9: Industry, Innovation and Infrastructure
 * 12. 拱桥 (数字 10) -> SDG 10 — Reduced Inequalities
 * 13. 桥后楼群 (数字 5) -> SDG 5 — Gender Equality
 * 14. 桥后楼群 (数字 1) -> SDG 1 — No Poverty
 * 15. 桥后楼群 (数字 8) -> SDG 8 — Decent Work and Economic Growth
 */
const CITY_HOTSPOTS: CityHotspot[] = [
  // 1. 广场前方穿白衣练功的人物 -> 01-04-Collaborative Baduanjin Video
  {
    id: "baduanjin-person",
    name: "01-04-Collaborative Baduanjin Video",
    badge: "Health Communication",
    targetId: "sdg17-01-04",
    left: 50.0,
    top: 52.8,
    width: 8.5,
    height: 14.5,
  },
  // 2. 左下角 SST-QN 小船 -> SDG Synergy–Trade-off Quantification Network (SST-QN)
  {
    id: "sst-qn-boat",
    name: "SDG Synergy–Trade-off Quantification Network (SST-QN)",
    badge: "Quantitative Model",
    targetId: "sst-qn",
    left: 0.0,
    top: 73.5,
    width: 25.0,
    height: 26.5,
  },
  // 3. 左下偏中的 SCALE 小船 -> 正文段落起始处
  {
    id: "scale-boat",
    name: "SCALE Model",
    badge: "Core Framework",
    targetId: "overview-scale-model",
    left: 17.5,
    top: 61.5,
    width: 22.5,
    height: 26.0,
  },
  // 4. 底部中央的 Impact Framework 小岛 -> SET-DEVELOP-GROW Impact Framework
  {
    id: "impact-framework-island",
    name: "SET-DEVELOP-GROW Impact Framework",
    badge: "Impact Framework",
    targetId: "sdg-impact-framework",
    left: 30.0,
    top: 76.0,
    width: 28.5,
    height: 24.0,
  },
  // 5. 左侧 Pink Care 粉色咨询帐篷 -> 14-Apricot Blossoms and Pink Care
  {
    id: "pink-care-tent",
    name: "14-Apricot Blossoms and Pink Care",
    badge: "Public Education",
    targetId: "sdg4-14",
    left: 0.0,
    top: 31.0,
    width: 20.0,
    height: 33.0,
  },
  // 6. 右侧 SynBio Classroom 教室 -> 12-Synbio classroom
  {
    id: "synbio-classroom",
    name: "12-Synbio classroom",
    badge: "Quality Education",
    targetId: "sdg4-12",
    left: 83.0,
    top: 34.0,
    width: 17.0,
    height: 35.0,
  },
  // 7. 右上 Partnerships for iGEM 合作伙伴楼 -> SDG17: Partnerships for the Goals
  {
    id: "sdg17-partnerships",
    name: "SDG 17: Partnerships for the Goals",
    badge: "Global Partnerships",
    targetId: "sdg17-partnerships",
    left: 82.0,
    top: 9.0,
    width: 18.0,
    height: 49.5,
  },
  // 8. 右下 Dorm Planting Education 种植活动区 -> 06-Dorm Planting Education
  {
    id: "dorm-planting",
    name: "06-Dorm Planting Education",
    badge: "Resource Reuse",
    targetId: "sdg12-06",
    left: 77.5,
    top: 65.0,
    width: 22.0,
    height: 30.5,
  },
  // 9. 右上偏中的 Responsible Development 楼 -> SDG12: Responsible Consumption and Production
  {
    id: "sdg12-building",
    name: "SDG 12: Responsible Consumption and Production",
    badge: "Responsible Development",
    targetId: "sdg12-responsible-consumption",
    left: 61.5,
    top: 3.0,
    width: 23.0,
    height: 52.0,
  },
  // 10. 左上 医疗楼 (Health for all) -> SDG3: Good Health and Well-being
  {
    id: "sdg3-building",
    name: "SDG 3: Good Health and Well-being",
    badge: "Health for All",
    targetId: "sdg3-health",
    left: 0.8,
    top: 2.5,
    width: 19.5,
    height: 49.0,
  },
  // 11. 左侧偏中的 Innovation 科研楼 -> SDG9: Industry, Innovation and Infrastructure
  {
    id: "sdg9-building",
    name: "SDG 9: Industry, Innovation and Infrastructure",
    badge: "Innovation & Research",
    targetId: "sdg9-industry",
    left: 19.0,
    top: 2.0,
    width: 21.5,
    height: 52.5,
  },
  // 12. 上方中央的拱桥 (数字 10) -> SDG 10 — Reduced Inequalities
  {
    id: "sdg10-bridge",
    name: "SDG 10 — Reduced Inequalities",
    badge: "Connecting Bridge",
    targetId: "grow-sdg10",
    left: 37.0,
    top: 16.5,
    width: 29.0,
    height: 23.0,
  },
  // 13. 桥后偏左带有数字 5 的楼群 -> SDG 5 — Gender Equality
  {
    id: "grow-sdg5",
    name: "SDG 5 — Gender Equality",
    badge: "GROW · Long-term Future",
    targetId: "grow-sdg5",
    left: 38.0,
    top: 9.5,
    width: 13.5,
    height: 18.0,
  },
  // 14. 桥后居中带有数字 1 的楼群 -> SDG 1 — No Poverty
  {
    id: "grow-sdg1",
    name: "SDG 1 — No Poverty",
    badge: "GROW · Long-term Future",
    targetId: "grow-sdg1",
    left: 50.0,
    top: 9.8,
    width: 7.5,
    height: 16.5,
  },
  // 15. 桥后偏右带有数字 8 的楼群 -> SDG 8 — Decent Work and Economic Growth
  {
    id: "grow-sdg8",
    name: "SDG 8 — Decent Work and Economic Growth",
    badge: "GROW · Long-term Future",
    targetId: "grow-sdg8",
    left: 54.5,
    top: 11.0,
    width: 10.0,
    height: 19.5,
  },
];

export function SustainabilityInteractiveCity() {
  const [activeHotspot, setActiveHotspot] = useState<CityHotspot | null>(null);
  const tooltipId = useId();

  const handleClick = (e: MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    scrollReaderToId(targetId, e.currentTarget, "instant");
  };

  return (
    <figure className="sust-city-figure" data-wiki-reveal>
      <div className="sust-city-container">
        <img
          src={cityWebp}
          alt="CirCure Sustainable Development City Map"
          className="sust-city-img"
          width={2560}
          height={1684}
          loading="lazy"
          decoding="async"
        />

        <div className="sust-city-hotspots" role="region" aria-label="Interactive City Hotspots">
          {CITY_HOTSPOTS.map((hotspot) => {
            const isActive = activeHotspot?.id === hotspot.id;
            return (
              <button
                key={hotspot.id}
                type="button"
                className={`sust-city-hotspot ${isActive ? "is-active" : ""}`}
                style={{
                  left: `${hotspot.left}%`,
                  top: `${hotspot.top}%`,
                  width: `${hotspot.width}%`,
                  height: `${hotspot.height}%`,
                }}
                onClick={(e) => handleClick(e, hotspot.targetId)}
                onMouseEnter={() => setActiveHotspot(hotspot)}
                onMouseLeave={() => setActiveHotspot(null)}
                onFocus={() => setActiveHotspot(hotspot)}
                onBlur={() => setActiveHotspot(null)}
                onKeyDown={(event) => {
                  if (event.key === "Escape") setActiveHotspot(null);
                }}
                aria-label={`Jump to ${hotspot.name} (${hotspot.badge})`}
                aria-describedby={isActive ? tooltipId : undefined}
              >
                <span className="sust-city-hotspot__dot" aria-hidden="true" />
              </button>
            );
          })}
        </div>

        {activeHotspot && (
          <div
            id={tooltipId}
            role="tooltip"
            className="sust-city-tooltip"
            style={
              {
                "--city-tooltip-x": `${activeHotspot.left + activeHotspot.width / 2}%`,
                "--city-tooltip-y": `${activeHotspot.top > 25 ? activeHotspot.top - 3 : activeHotspot.top + activeHotspot.height + 3}%`,
              } as CSSProperties
            }
          >
            <span className="sust-city-tooltip__badge">{activeHotspot.badge}</span>
            <span className="sust-city-tooltip__title">{activeHotspot.name}</span>
            <span className="sust-city-tooltip__hint">
              View related records
              <span className="sust-city-tooltip__arrow" aria-hidden="true">
                <svg viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h9m-4-4 4 4-4 4" />
                </svg>
              </span>
            </span>
          </div>
        )}
      </div>

      <figcaption className="sust-city-caption">
        <div className="sust-city-caption__bar">
          <span className="sust-city-caption__prompt">
            {activeHotspot ? (
              <>
                <strong>{activeHotspot.badge}</strong>: {activeHotspot.name} · <em>Click to revisit records</em>
              </>
            ) : (
              "Interactive City Scene · Click on any building, boat, or scene to revisit the records behind it"
            )}
          </span>
        </div>
      </figcaption>
    </figure>
  );
}
