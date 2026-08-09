/**
 * Sustainability page — structured `WikiPageContent` for the shared renderer.
 *
 * Provenance: 文案集/Human Practice/Sustainability.md (Feishu revision 187),
 * via the type-safe copy in `sustainabilityData.ts`. No copy is authored here —
 * this file only composes the existing text into ordered content blocks
 * (`WikiSection.blocks`) so the page renders through `WikiPage` with the same
 * shared chrome as the other Engagement records.
 *
 * The bespoke visual components (SVG charts, flip cards, CountUp, PDF preview)
 * mount as named `features` and are referenced by `{ type: "feature", key }`
 * blocks in the order the copy requires.
 */

import type {
  WikiContentBlock,
  WikiPageContent,
  WikiSection,
} from "../components/wiki/wikiPageTypes";
import {
  sustainabilityImageAlt,
  sustainabilityImages,
} from "./sustainabilityImages";
import {
  consequencesSection,
  impactFrameworkSection,
  reservedScaleSections,
  sdg3Section,
  setCoreChallengesSection,
  sstqnSection,
  sustainabilityAnchors,
  sustainabilityEpigraph,
  sustainabilityOverview,
} from "./sustainabilityData";

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
      type: "split",
      id: "sstqn-classification",
      prose: [
        {
          type: "prose",
          paragraphs: [
            sstqnParagraph("motivation"),
            sstqnParagraph("directed-network"),
            sstqnParagraph("classification-intro"),
          ],
        },
      ],
      aside: { type: "feature", key: "sstqn-matrix" },
    },
    { type: "feature", key: "sdg-boundary-matrix" },
    {
      type: "split",
      id: "sstqn-score",
      prose: [
        {
          type: "prose",
          paragraphs: [
            sstqnParagraph("classification-definitions"),
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
    "以 WHO 2024 乳腺癌数据为起点，将来自 6 个领域 43 名利益相关者的反馈纳入设计全过程，识别对 SDG 3 / 9 / 12 的核心回应。",
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
    fig("sdg3StakeholderEngagement08"),
    { type: "feature", key: "stakeholders" },
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
    ...reservedScaleSections.flatMap<WikiContentBlock>((reserved, index) => [
      {
        type: "subheading",
        id: reserved.anchorId,
        index: `4.${index + 4}`,
        title: anchorLabel(reserved.anchorId),
      },
      { type: "note", label: "预留章节 Reserved", body: RESERVED_NOTE },
    ]),
  ],
};

export const sustainabilityPage: WikiPageContent = {
  route: "/sustainability",
  category: "engagement",
  chapter: "Engagement / 05 of 05",
  eyebrow: "Sustainability · Trace the tradeoffs",
  title: "Sustainability",
  lede: "以 SDG 3 / 9 / 12 为核心目标，从 SET 的问题响应出发，经 DEVELOP 的多维拓展，走向 GROW 的长期系统价值。",
  boundary:
    "本页陈述的是评估与决策框架（SST-QN 方法演示示例、SET–Develop–Grow 影响框架与 SCALE 改进机制），而非已完成的影响量化结论；图中评分为方法演示用示意示例，完整评分矩阵见《SDG 模型构建》PDF。",
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
  ],
  links: [
    { path: "/human-practices", label: "Human Practices" },
    { path: "/education", label: "Education" },
    { path: "/inclusivity", label: "Inclusivity" },
  ],
  next: {
    path: "/human-practices",
    label: "Human Practices",
    title: "继续沿着利益相关者的反馈路径，进入 Human Practices。",
  },
};
