/**
 * Sustainability page — structured `WikiPageContent` for the shared renderer.
 *
 * Provenance: 文案集/Human Practice/Sustainability.md, via the type-safe copy in
 * `sustainabilityData.ts`, `sustainabilitySdg9.ts`, `sustainabilitySdg12.ts` and
 * `sustainabilityGrow.ts`. No copy is authored here — this file only composes
 * the existing text into ordered content blocks (`WikiSection.blocks`) so the
 * page renders through `WikiPage` with the same shared chrome as the other
 * Engagement records.
 *
 * The bespoke visual components (SVG charts, flip cards, CountUp, PDF preview,
 * chord diagram) mount as named `features` and are referenced by
 * `{ type: "feature", key }` blocks in the order the copy requires.
 */

import type {
  WikiContentBlock,
  WikiPageContent,
  WikiSection,
} from "../../../components/wiki/wikiPageTypes";
import {
  sdg3Alignment,
  sdg3EvidenceExtra,
  sdg3EvidenceIntro,
  sdg3LegacyIntro,
  type SdgScaleContent,
} from "./sustainabilityData";
import {
  consequencesSection,
  impactFrameworkSection,
  sdg3Section,
  setCoreChallengesSection,
  sstqnSection,
  sustainabilityAnchors,
  sustainabilityEpigraph,
  sustainabilityOverview,
} from "./sustainabilityData";
import { sdg9Section } from "./sustainabilitySdg9";
import { sdg12Section } from "./sustainabilitySdg12";
import { growSection } from "./sustainabilityGrow";
import {
  sustainabilityImageAlt,
  sustainabilityImages,
} from "./sustainabilityImages";

const anchorLabel = (id: string) =>
  sustainabilityAnchors.find((anchor) => anchor.id === id)?.label ?? id;

const sstqnParagraph = (id: string) =>
  sstqnSection.paragraphs.find((paragraph) => paragraph.id === id)?.text ?? "";

/** Figure block carrying the imported asset + its registry alt as caption. */
const fig = (key: keyof typeof sustainabilityImages) => ({
  type: "figure" as const,
  src: sustainabilityImages[key],
  alt: sustainabilityImageAlt(key),
  caption: sustainabilityImageAlt(key),
});

const RESERVED_NOTE =
  "该章节标题已建立，正文内容将随项目推进持续补充。 This section heading is established; its content will be expanded as the project progresses.";

const overviewSection: WikiSection = {
  id: "overview",
  index: "01",
  kicker: "01 / Overview",
  navLabel: "Overview",
  title: sustainabilityOverview.title,
  summary:
    "以 SDG 3 / 9 / 12 为核心目标，识别 CirCure 的协同与权衡，并构建 Set–Develop–Grow 影响框架与 SCALE 动态改进机制。",
  blocks: [
    { type: "epigraph", ...sustainabilityEpigraph },
    { type: "prose", paragraphs: [sustainabilityOverview.intro] },
    { type: "feature", key: "sdg-cards" },
    {
      type: "split",
      id: "overview-sdgs",
      prose: [
        {
          type: "callout",
          tone: "neutral",
          body: sustainabilityOverview.callout,
        },
      ],
      aside: { type: "feature", key: "sdg-radar" },
    },
    { type: "feature", key: "framework-intros" },
    { type: "feature", key: "sdg-dimension-chord" },
  ],
};

const sstQnSection: WikiSection = {
  id: "sst-qn",
  index: "02",
  kicker: "02 / Methodology",
  navLabel: "Methodology",
  title: sstqnSection.title,
  summary:
    "SST-QN 从系统视角分析 17 项 SDG 之间的相互作用，区分方向、直接与间接作用、协同与权衡，并对每一条作用关系的证据质量进行校准。",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        sstqnParagraph("motivation"),
        sstqnParagraph("directed-network"),
      ],
    },
    {
      type: "split",
      id: "sstqn-classification",
      prose: [
        {
          type: "prose",
          paragraphs: [
            sstqnParagraph("classification-intro"),
          ],
        },
      ],
      aside: { type: "feature", key: "sstqn-matrix" },
    },
    { type: "feature", key: "sdg-boundary-matrix" },
    {
      type: "prose",
      paragraphs: [
        sstqnParagraph("classification-definitions"),
      ],
    },
    {
      type: "split",
      id: "sstqn-score",
      prose: [
        {
          type: "prose",
          paragraphs: [
            sstqnParagraph("score-model"),
          ],
        },
      ],
      aside: { type: "feature", key: "sstqn-score-flow" },
    },
    { type: "feature", key: "sdg-interaction-heatmap" },
    { type: "note", label: "评分说明", body: sstqnSection.scoring.note },
    {
      type: "prose",
      paragraphs: [
        sstqnParagraph("indirect-propagation"),
        sstqnParagraph("implementation-pathways"),
      ],
    },
    {
      type: "callout",
      tone: "coral",
      body:
        sstqnSection.callouts.find((callout) => callout.id === "pathway-tradeoff")
          ?.text ?? "",
    },
    { type: "prose", paragraphs: [sstqnParagraph("reproducibility")] },
    {
      type: "callout",
      tone: "navy",
      body:
        sstqnSection.callouts.find(
          (callout) => callout.id === "reusable-framework",
        )?.text ?? "",
    },
    { type: "callout", tone: "gold", body: sstqnSection.transition },
    { type: "feature", key: "pdf-sst-qn" },
  ],
};

const impactFrameworkBlocks: WikiSection = {
  id: "sdg-impact-framework",
  index: "03",
  kicker: "03 / SDG Impact Framework",
  navLabel: "SDG Impact Framework",
  title: impactFrameworkSection.title,
  summary:
    "SET 层确定项目关注的核心 SDGs，DEVELOP 层分析扩展影响及 SDG 关联，GROW 层探索项目的长期可持续价值。",
  blocks: [
    {
      type: "split",
      id: "framework-layers",
      prose: [
        { type: "prose", paragraphs: [impactFrameworkSection.intro] },
      ],
      aside: { type: "feature", key: "framework-diagram" },
    },
    {
      type: "subheading",
      id: "framework-architecture",
      index: "3.1",
      kicker: "三层递进结构",
      title: anchorLabel("framework-architecture"),
    },
    fig("frameworkSetDevelopGrow06"),
    { type: "callout", tone: "navy", body: impactFrameworkSection.summary },
  ],
};

const setCoreChallengesBlocks: WikiSection = {
  id: "set-core-challenges",
  index: "04",
  kicker: "04 / SET Layer",
  navLabel: "SET Layer",
  title: setCoreChallengesSection.title,
  summary:
    "以 WHO 2024 乳腺癌数据为起点，将利益相关者的反馈纳入设计全过程，识别对 SDG 3 / 9 / 12 的核心回应。",
  blocks: [
    {
      type: "callout",
      tone: "coral",
      label: "2.4 million diagnosed · 694 000 deaths",
      body: `${setCoreChallengesSection.whoEvidence.statementEn}（${setCoreChallengesSection.whoEvidence.source} · ${setCoreChallengesSection.whoEvidence.year}）`,
    },
    {
      type: "prose",
      paragraphs: [
        setCoreChallengesSection.intro,
        setCoreChallengesSection.coreSdgSelection,
        setCoreChallengesSection.stakeholderOverview,
      ],
    },
    { type: "feature", key: "stats" },
    fig("setStakeholderOverview07"),
    {
      type: "callout",
      tone: "neutral",
      body: setCoreChallengesSection.crossSdgNote,
    },
    {
      type: "subheading",
      id: "sdg3-health",
      index: "4.1",
      title: anchorLabel("sdg3-health"),
    },
    { type: "prose", paragraphs: [sdg3Section.intro] },
    { type: "feature", key: "scale-chain" },
    {
      type: "subheading",
      id: "sdg3-stakeholder",
      index: "4.2",
      title: anchorLabel("sdg3-stakeholder"),
    },
    { type: "prose", paragraphs: [sdg3Section.stakeholderIntro] },
    { type: "feature", key: "stakeholders" },
    { type: "prose", paragraphs: [sdg3Section.stakeholderOutro] },
    { type: "prose", paragraphs: [sdg3Section.coreProblemsIntro] },
    { type: "feature", key: "problems" },
    { type: "prose", paragraphs: [sdg3Section.expertIntro] },
    { type: "feature", key: "experts" },
    {
      type: "subheading",
      id: "sdg3-consequences",
      index: "4.3",
      title: anchorLabel("sdg3-consequences"),
    },
    {
      type: "prose",
      paragraphs: [
        consequencesSection.leadQuestion,
        consequencesSection.overview,
      ],
    },
    { type: "feature", key: "consequences" },
    {
      type: "subheading",
      id: "sdg3-alignment",
      index: "4.4",
      title: anchorLabel("sdg3-alignment"),
    },
    { type: "prose", paragraphs: [...sdg3Alignment] },
    {
      type: "subheading",
      id: "sdg3-legacy",
      index: "4.5",
      title: anchorLabel("sdg3-legacy"),
    },
    { type: "prose", paragraphs: [...sdg3LegacyIntro] },
    { type: "feature", key: "pdf-tools-sdg3" },
    {
      type: "subheading",
      id: "sdg3-evidence",
      index: "4.6",
      title: anchorLabel("sdg3-evidence"),
    },
    { type: "prose", paragraphs: [...sdg3EvidenceIntro] },
    { type: "feature", key: "stats-sdg3" },
    { type: "prose", paragraphs: [...sdg3EvidenceExtra] },
  ],
};

/** 从一个 SdgScaleContent 组装出标准 S/C/A/L/E 章节。 */
function buildScaleSection(content: SdgScaleContent): WikiSection {
  const prefix =
    content.sectionId === "grow"
      ? "grow"
      : content.sectionId.replace("-health", "");
  const anchor = (suffix: string) => `${prefix}-${suffix}`;
  const subheading = (suffix: string, step: number): WikiContentBlock => ({
    type: "subheading",
    id: anchor(suffix),
    index: `${content.index}.${step}`,
    title: anchorLabel(anchor(suffix)),
  });

  const blocks: WikiContentBlock[] = [
    { type: "prose", paragraphs: [...content.intro] },
    { type: "feature", key: `scale-chain-${prefix}` },
  ];

  // S — Stakeholder Insights
  blocks.push(subheading("stakeholder", 1));
  if (content.stakeholderIntro?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.stakeholderIntro] });
  }
  if (content.stakeholders?.length) {
    blocks.push({ type: "feature", key: `stakeholders-${prefix}` });
  }
  if (content.stakeholderOutro?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.stakeholderOutro] });
  }
  if (content.expertIntro?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.expertIntro] });
  }
  if (content.experts?.length) {
    blocks.push({ type: "feature", key: `experts-${prefix}` });
  }

  // C — Consequences
  blocks.push(subheading("consequences", 2));
  if (content.consequencesLead?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.consequencesLead] });
  }
  if (content.consequences?.length) {
    blocks.push({ type: "feature", key: `consequences-${prefix}` });
  }
  if (content.consequencesExtra?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.consequencesExtra] });
  }
  if (content.consequencesFigureKey) {
    blocks.push(fig(content.consequencesFigureKey as keyof typeof sustainabilityImages));
  }

  // A — Alignment
  blocks.push(subheading("alignment", 3));
  if (content.alignment?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.alignment] });
  }

  // L — Legacy
  blocks.push(subheading("legacy", 4));
  if (content.legacyIntro?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.legacyIntro] });
  }
  if (content.legacyTools?.length) {
    blocks.push({ type: "feature", key: `pdf-tools-${prefix}` });
  }
  if (!content.legacyIntro?.length && !content.legacyTools?.length) {
    blocks.push({ type: "note", label: "预留章节 Reserved", body: RESERVED_NOTE });
  }

  // E — Evidence
  blocks.push(subheading("evidence", 5));
  if (content.evidenceIntro?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.evidenceIntro] });
  }
  if (content.evidenceStats?.length) {
    blocks.push({ type: "feature", key: `stats-${prefix}` });
  }
  if (content.evidenceExtra?.length) {
    blocks.push({ type: "prose", paragraphs: [...content.evidenceExtra] });
  }
  if (content.evidenceFigureKey) {
    blocks.push(fig(content.evidenceFigureKey as keyof typeof sustainabilityImages));
  }
  if (
    !content.evidenceIntro?.length &&
    !content.evidenceStats?.length &&
    !content.evidenceExtra?.length
  ) {
    blocks.push({ type: "note", label: "预留章节 Reserved", body: RESERVED_NOTE });
  }

  return {
    id: content.sectionId,
    index: content.index,
    kicker: content.kicker,
    navLabel: content.navLabel,
    title: content.title,
    summary: content.summary,
    blocks,
  };
}

export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 05 of 05",
  eyebrow: "Sustainability · Trace the tradeoffs",
  title: "Sustainability",
  lede: "以 SDG 3 / 9 / 12 为核心目标，从 SET 的问题响应出发，经 DEVELOP 的多维拓展，走向 GROW 的长期系统价值。",
  boundary:
    "本页陈述的是评估与决策框架（SST-QN 方法、SET–Develop–Grow 影响框架与 SCALE 改进机制），而非已完成的影响量化结论；图中评分为结构化的证据校准评分，完整评分矩阵见《SDG 模型构建》PDF。",
  visual: "sustainability-radar",
  visualLabel: "Sustainability",
  visualSteps: ["environment", "access", "economy", "governance"],
  facts: [
    { label: "Stakeholders", value: "43" },
    { label: "Fields", value: "6" },
    { label: "Core SDGs", value: "SDG 3 / 9 / 12" },
    { label: "Framework layers", value: "SET · DEVELOP · GROW" },
  ],
  sections: [
    overviewSection,
    sstQnSection,
    impactFrameworkBlocks,
    setCoreChallengesBlocks,
    buildScaleSection(sdg9Section),
    buildScaleSection(sdg12Section),
    buildScaleSection(growSection),
  ],
  links: [
    { path: "/human-practices", label: "Human Practices" },
    { path: "/education", label: "Education" },
    { path: "/inclusivity", label: "Inclusivity" },
  ],
  next: {
    path: "/roster",
    label: "Roster",
    title: "Unite around a shared vision to turn the impossible.",
  },
};


