/**
 * Sustainability page — structured `WikiPageContent` for the shared renderer.
 *
 * Source: 6.3 Sustainability wiki定稿.md
 * Scope: Overview up to the end of SDG 3 & Stakeholder Sustainability Tracker.
 * Pure data layer — zero React/JSX elements.
 */

import type {
  WikiPageContent,
  WikiSection,
} from "../../../components/wiki/wikiPageTypes";
import {
  consequencesSection,
  impactFrameworkSection,
  sdg3Alignment,
  sdg3EvidenceExtra,
  sdg3EvidenceIntro,
  sdg3LegacyIntro,
  sdg3Section,
  setCoreChallengesSection,
  sstqnSection,
  stakeholderSustainabilityTracker,
  sustainabilityAnchors,
  sustainabilityEpigraph,
  sustainabilityOverview,
} from "./sustainabilityData";
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

/* ----------------------------------------------------------------------------
 * 01 / Overview
 * -------------------------------------------------------------------------- */
const overviewSection: WikiSection = {
  id: "overview",
  index: "01",
  kicker: "01 / Overview",
  navLabel: "Overview",
  title: sustainabilityOverview.title,
  summary:
    "以 SDG 3 / 9 / 12 为核心目标，从 SET 核心挑战出发，经 DEVELOP 多维拓展，走向 GROW 长期系统价值。",
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
    { type: "feature", key: "overview-set-develop-grow" },
    { type: "feature", key: "sdg-dimension-chord" },
    { type: "prose", paragraphs: [sustainabilityOverview.paragraphs[2]] },
    fig("overviewMapOfStakeholders"),
    { type: "prose", paragraphs: [sustainabilityOverview.paragraphs[3]] },
    fig("overviewScaleModel"),
    { type: "prose", paragraphs: [sustainabilityOverview.paragraphs[4]] },
    fig("overviewSstQnNetwork"),
    { type: "prose", paragraphs: [sustainabilityOverview.paragraphs[5]] },
    fig("overviewReusableToolkit"),
  ],
};

/* ----------------------------------------------------------------------------
 * 02 / Methodology (SST-QN)
 * -------------------------------------------------------------------------- */
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
        sstqnParagraph("acceleration-week"),
      ],
    },
    {
      type: "split",
      id: "sstqn-classification",
      prose: [
        {
          type: "prose",
          paragraphs: [sstqnParagraph("status-intro")],
        },
      ],
      aside: { type: "feature", key: "sstqn-matrix" },
    },
    { type: "feature", key: "sdg-boundary-matrix" },
    {
      type: "prose",
      paragraphs: [sstqnParagraph("boundary-intro")],
    },
    {
      type: "split",
      id: "sstqn-score",
      prose: [
        {
          type: "prose",
          paragraphs: [sstqnParagraph("score-intro")],
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
        sstqnParagraph("alignment-screening"),
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

/* ----------------------------------------------------------------------------
 * 03 / SDG Impact Framework
 * -------------------------------------------------------------------------- */
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
    fig("frameworkSetDevelopGrow"),
    {
      type: "prose",
      paragraphs: [impactFrameworkSection.pathway],
    },
    { type: "callout", tone: "navy", body: impactFrameworkSection.summary },
  ],
};

/* ----------------------------------------------------------------------------
 * 04 / SET Layer: Addressing Core Challenges (SDG 3 & Tracker)
 * -------------------------------------------------------------------------- */
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
      label: "WHO 2024 · Global Health Burden",
      body: `${setCoreChallengesSection.whoEvidence.statementEn} (${setCoreChallengesSection.whoEvidence.source}, ${setCoreChallengesSection.whoEvidence.year})`,
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

    // S — Stakeholder Insights
    {
      type: "subheading",
      id: "sdg3-stakeholder",
      index: "4.2",
      title: anchorLabel("sdg3-stakeholder"),
    },
    { type: "prose", paragraphs: [...sdg3Section.stakeholderIntro] },
    fig("sdg3StakeholdersDistribution"),
    { type: "feature", key: "stakeholders" },
    { type: "prose", paragraphs: [...sdg3Section.coreProblemsIntro] },
    { type: "feature", key: "problems" },
    { type: "prose", paragraphs: [...sdg3Section.expertIntro] },
    { type: "feature", key: "experts" },

    // C — Core Actions / Consequences
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
    fig("sdg3TraceableImprovements"),
    { type: "feature", key: "consequences" },

    // A — Alignment
    {
      type: "subheading",
      id: "sdg3-alignment",
      index: "4.4",
      title: anchorLabel("sdg3-alignment"),
    },
    { type: "prose", paragraphs: [...sdg3Alignment] },

    // L — Legacy
    {
      type: "subheading",
      id: "sdg3-legacy",
      index: "4.5",
      title: anchorLabel("sdg3-legacy"),
    },
    { type: "prose", paragraphs: [...sdg3LegacyIntro] },
    { type: "feature", key: "pdf-tools-sdg3" },

    // E — Evidence
    {
      type: "subheading",
      id: "sdg3-evidence",
      index: "4.6",
      title: anchorLabel("sdg3-evidence"),
    },
    { type: "prose", paragraphs: [...sdg3EvidenceIntro] },
    { type: "feature", key: "stats-sdg3" },
    { type: "prose", paragraphs: [...sdg3EvidenceExtra] },

    // Stakeholder Sustainability Tracker
    {
      type: "subheading",
      id: "stakeholder-sustainability-tracker",
      index: "4.7",
      title: anchorLabel("stakeholder-sustainability-tracker"),
    },
    {
      type: "prose",
      paragraphs: [...stakeholderSustainabilityTracker.paragraphs],
    },
    { type: "feature", key: "stakeholder-tracker-tools" },
  ],
};

/* ----------------------------------------------------------------------------
 * Page Export
 * -------------------------------------------------------------------------- */
export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 05 of 05",
  eyebrow: "Sustainability · Trace the tradeoffs",
  title: "Sustainability",
  lede: "以 SDG 3 / 9 / 12 为核心目标，从 SET 的问题响应出发，经 DEVELOP 的多维拓展，走向 GROW 的长期系统价值。",
  boundary:
    "本页陈述的是评估与决策框架（SST-QN 方法、SET–Develop–Grow 影响框架与 SCALE 改进机制），而非已完成的影响量化结论；完整评分矩阵见《SDG 模型构建》PDF 报告。",
  visual: "sustainability-radar",
  visualLabel: "Sustainability",
  visualSteps: ["environment", "access", "economy", "governance"],
  facts: [
    { label: "Stakeholders", value: "49" },
    { label: "Core SDGs", value: "SDG 3 / 9 / 12" },
    { label: "Framework", value: "SET · DEVELOP · GROW" },
    { label: "Reusable Tools", value: "26" },
  ],
  sections: [
    overviewSection,
    sstQnSection,
    impactFrameworkBlocks,
    setCoreChallengesBlocks,
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
