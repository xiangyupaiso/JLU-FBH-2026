import type { ReactNode } from "react";
/* eslint-disable react-refresh/only-export-components --
   This module intentionally exports the feature map builder next to the ported
   presentational helpers; it is not a fast-refresh boundary. */
import {
  ConsequencesDimensionCard,
  CountUpStat,
  ExpertFeedbackGrid,
  ImpactFrameworkDiagram,
  PdfToolList,
  ProblemCardGroup,
  SCALEProgressChain,
  SDGInteractiveCard,
  SdgBoundaryMatrix,
  SdgDimensionChord,
  SdgImpactRadar,
  SdgInteractionHeatmap,
  SSTQNClassificationMatrix,
  SSTQNScoreProcess,
  StakeholderProfileCard,
  SustainabilityPdfPreview,
} from "../sustainability";
import type { ProtocolManual } from "../../../data/protocolPages";
import {
  sustainabilityAssets,
  type SustainabilityImageAssetKey,
} from "../../../data/sustainabilityAssets";
import { sustainabilityImages } from "../../../data/sustainabilityImages";
import {
  sdg3EvidenceStats,
  sdg3LegacyTools,
  sdg3Section,
  sstqnSection,
  stakeholderProfiles,
  sustainabilityOverview,
  sustainabilityStats,
  type StakeholderProfile,
  type StakeholderVariant,
  type SustainabilityStat,
} from "../../../data/sustainabilityData";
import { sdg9Section } from "../../../data/sustainabilitySdg9";
import { sdg12Section } from "../../../data/sustainabilitySdg12";
import { growSection } from "../../../data/sustainabilityGrow";
import { SustPanelScope } from "./SustPanelScope";
import { useRoutePageScroll } from "../WikiRoutePage";
import "../../../styles/sustainability-panels.css";

/**
 * Feature panels of the pre-revamp Sustainability record, ported verbatim.
 *
 * The Engagement reader owns the hero, sidebar, section rhythm and closing
 * prompt (shared reader-route template); the old page's own visual vocabulary —
 * SDG cards, radar, interaction heatmap, boundary matrix, dimension chord,
 * SST-QN matrix/flow, impact framework, SCALE chain, stats, stakeholder cards,
 * problem/feedback/consequence panels and the PDF tool lists — mounts as that
 * template's section "features", in the exact order the copy requires.
 *
 * Every panel is wrapped in `SustPanelScope`, which supplies the ported
 * stylesheet's token aliases (see the port note in `sustainability-panels.css`)
 * without adding a box to the article.
 *
 * Port detail: `ScaleChainWithSpy` reads the page's scroll-spy state — the
 * pre-revamp file called `useWikiPageScroll()` from the old `WikiPage` shell;
 * on the shared reader-route template the same context is published by
 * `WikiRoutePage` as `useRoutePageScroll()`, so only that call site changed.
 */

type FeatureMap = Record<string, ReactNode>;

/** 页面内所有利益相关者卡片（按 DOM 顺序），用于生成 INT-/FIELD- 序号。 */
const ALL_STAKEHOLDERS: ReadonlyArray<StakeholderProfile> = [
  ...stakeholderProfiles,
  ...(sdg9Section.stakeholders ?? []),
  ...(sdg12Section.stakeholders ?? []),
  ...(growSection.stakeholders ?? []),
];

const STAKEHOLDER_ORDINALS: ReadonlyMap<string, number> = (() => {
  const counters: Record<StakeholderVariant, number> = {
    interview: 0,
    field: 0,
  };
  const map = new Map<string, number>();
  for (const profile of ALL_STAKEHOLDERS) {
    counters[profile.variant] += 1;
    map.set(profile.id, counters[profile.variant]);
  }
  return map;
})();

const stakeholderOrdinal = (id: string) =>
  STAKEHOLDER_ORDINALS.get(id) ?? 1;

/** 工具卡（TOOL-0X）按 DOM 顺序的起始序号。 */
const SDG3_TOOL_COUNT = sdg3LegacyTools.length;
const SDG9_TOOL_COUNT = sdg9Section.legacyTools?.length ?? 0;
const SDG9_TOOL_START = SDG3_TOOL_COUNT + 1;
const SDG12_TOOL_START = SDG3_TOOL_COUNT + SDG9_TOOL_COUNT + 1;

/** SDG 3 章节内的子锚点；SCALE 链随滚动高亮当前所在要素。 */
const SCALE_ANCHOR_IDS = [
  "sdg3-stakeholder",
  "sdg3-consequences",
  "sdg3-alignment",
  "sdg3-legacy",
  "sdg3-evidence",
];

const scaleAnchorIds = (prefix: string) =>
  [
    `${prefix}-stakeholder`,
    `${prefix}-consequences`,
    `${prefix}-alignment`,
    `${prefix}-legacy`,
    `${prefix}-evidence`,
  ] as const;

const FRAMEWORK_INTRO_LINKS: Record<string, string> = {
  "sst-qn": "#sst-qn",
  "sdg-impact-framework": "#sdg-impact-framework",
  // SCALE Framework 落地于 SET 章节内的 SDG 3 → S/C/A/L/E 五要素
  "scale-framework": "#set-core-challenges",
};

const pdfAsset = sustainabilityAssets.sstQnModelConstruction09;

const sstqnPdfManual: ProtocolManual = {
  id: "SST-QN",
  title: sstqnSection.pdf.title,
  category: "report",
  description: sstqnSection.pdf.description,
  pdfUrl: `${import.meta.env.BASE_URL}${pdfAsset.webPath ?? ""}`,
  assetName: pdfAsset.fileName,
  documentType: "Report",
  addedAt: "2026-08-08",
  pages: pdfAsset.pdfPages ?? 1,
};

/** Overview 内三篇框架导读（SST-QN / SDG Impact Framework / SCALE）。 */
function FrameworkIntroGrid() {
  return (
    <div className="sust-framework-intros">
      {sustainabilityOverview.frameworks.map((framework, index) => {
        const link = FRAMEWORK_INTRO_LINKS[framework.id];
        return (
          <article
            className="sust-framework-intro"
            key={framework.id}
            data-wiki-reveal
          >
            <span
              className="sust-framework-intro__index"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <div className="sust-framework-intro__body">
              <p className="sust-framework-intro__kicker">
                {framework.shortName}
              </p>
              <h3 className="sust-framework-intro__name">
                {framework.fullName}
              </h3>
              <p className="sust-framework-intro__copy">
                {framework.paragraph}
              </p>
              {framework.assetKey && (
                <figure className="sust-framework-intro__figure">
                  <img
                    src={
                      sustainabilityImages[
                        framework.assetKey as SustainabilityImageAssetKey
                      ]
                    }
                    alt={
                      sustainabilityAssets[
                        framework.assetKey as SustainabilityImageAssetKey
                      ].alt
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              )}
              {link ? (
                <a
                  className="sust-framework-intro__link"
                  href={link}
                  onClick={(event) => {
                    event.preventDefault();
                    document
                      .getElementById(link.slice(1))
                      ?.scrollIntoView({
                        behavior: window.matchMedia(
                          "(prefers-reduced-motion: reduce)",
                        ).matches
                          ? "auto"
                          : "smooth",
                        block: "start",
                      });
                  }}
                >
                  进入章节 <span aria-hidden="true">↘</span>
                </a>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}

/** SCALE 链：随侧边栏滚动间谍高亮当前所在 SDG 要素。 */
function ScaleChainWithSpy({ anchorIds }: { anchorIds: ReadonlyArray<string> }) {
  const { activeSubsection } = useRoutePageScroll();
  const activeId = anchorIds.includes(activeSubsection)
    ? activeSubsection
    : anchorIds[0];
  return <SCALEProgressChain activeId={activeId} anchorIds={anchorIds} />;
}

function StatsGrid({ stats }: { stats: ReadonlyArray<SustainabilityStat> }) {
  return (
    <div className="sust-stats-grid">
      {stats.map((stat, index) => (
        <CountUpStat key={stat.id} stat={stat} delay={index * 80} />
      ))}
    </div>
  );
}

function StakeholderGrid({
  profiles,
}: {
  profiles: ReadonlyArray<StakeholderProfile>;
}) {
  return (
    <div className="sust-stake-grid">
      {profiles.map((profile) => (
        <StakeholderProfileCard
          key={profile.id}
          profile={profile}
          ordinal={stakeholderOrdinal(profile.id)}
        />
      ))}
    </div>
  );
}

export function sustainabilityFeatures(): FeatureMap {
  const map: FeatureMap = {
          "sdg-cards": (
            <div className="sust-sdg-grid">
              {sustainabilityOverview.coreSdgs.map((sdg) => (
                <SDGInteractiveCard key={sdg.number} sdg={sdg} />
              ))}
            </div>
          ),
          "sdg-radar": <SdgImpactRadar />,
          "sdg-interaction-heatmap": <SdgInteractionHeatmap />,
          "sdg-boundary-matrix": <SdgBoundaryMatrix />,
          "framework-intros": <FrameworkIntroGrid />,
          "sdg-dimension-chord": <SdgDimensionChord />,
          "sstqn-matrix": <SSTQNClassificationMatrix />,
          "sstqn-score-flow": <SSTQNScoreProcess />,
          "pdf-sst-qn": <SustainabilityPdfPreview manual={sstqnPdfManual} />,
          "framework-diagram": <ImpactFrameworkDiagram />,
          "scale-chain": <ScaleChainWithSpy anchorIds={SCALE_ANCHOR_IDS} />,
          stats: <StatsGrid stats={sustainabilityStats} />,
          stakeholders: (
            <div className="sust-stake-grid">
              {stakeholderProfiles
                .map((profile) => (
                  <StakeholderProfileCard
                    key={profile.id}
                    profile={profile}
                    ordinal={stakeholderOrdinal(profile.id)}
                  />
                ))
                .flatMap((el, index) =>
                  index === 0 && sdg3Section.stakeholderTransition.length > 0
                    ? [
                        el,
                        <div
                          key="stakeholder-transition"
                          className="wiki-prose"
                          data-wiki-reveal
                        >
                          {sdg3Section.stakeholderTransition.map((p) => (
                            <p key={p}>{p}</p>
                          ))}
                        </div>,
                      ]
                    : [el],
                )}
            </div>
          ),
          problems: <ProblemCardGroup />,
          experts: <ExpertFeedbackGrid />,
          consequences: <ConsequencesDimensionCard />,
          // SDG 3 — A / L / E
          "pdf-tools-sdg3": <PdfToolList tools={sdg3LegacyTools} startIndex={1} />,
          "stats-sdg3": <StatsGrid stats={sdg3EvidenceStats} />,
          // SDG 9
          "scale-chain-sdg9": (
            <ScaleChainWithSpy anchorIds={scaleAnchorIds("sdg9")} />
          ),
          "stakeholders-sdg9": (
            <StakeholderGrid profiles={sdg9Section.stakeholders ?? []} />
          ),
          "consequences-sdg9": (
            <ConsequencesDimensionCard dimensions={sdg9Section.consequences ?? []} />
          ),
          "pdf-tools-sdg9": (
            <PdfToolList
              tools={sdg9Section.legacyTools ?? []}
              startIndex={SDG9_TOOL_START}
            />
          ),
          "stats-sdg9": <StatsGrid stats={sdg9Section.evidenceStats ?? []} />,
          // SDG 12
          "scale-chain-sdg12": (
            <ScaleChainWithSpy anchorIds={scaleAnchorIds("sdg12")} />
          ),
          "stakeholders-sdg12": (
            <StakeholderGrid profiles={sdg12Section.stakeholders ?? []} />
          ),
          "consequences-sdg12": (
            <ConsequencesDimensionCard dimensions={sdg12Section.consequences ?? []} />
          ),
          "pdf-tools-sdg12": (
            <PdfToolList
              tools={sdg12Section.legacyTools ?? []}
              startIndex={SDG12_TOOL_START}
            />
          ),
          "stats-sdg12": <StatsGrid stats={sdg12Section.evidenceStats ?? []} />,
          // GROW / SDG 4
          "scale-chain-grow": (
            <ScaleChainWithSpy anchorIds={scaleAnchorIds("grow")} />
          ),
          "stakeholders-grow": (
            <StakeholderGrid profiles={growSection.stakeholders ?? []} />
          ),
          "consequences-grow": (
            <ConsequencesDimensionCard dimensions={growSection.consequences ?? []} />
          ),
  };

  // Each panel carries the ported stylesheet's scope container.
  return Object.fromEntries(
    Object.entries(map).map(([key, node]) => [
      key,
      <SustPanelScope key={key}>{node}</SustPanelScope>,
    ]),
  );
}
