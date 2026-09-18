/**
 * Structured content for the Sustainability page (Engagement route).
 *
 * Provenance:
 * - Copy / data: 文案集/Human Practice/Sustainability.md (Feishu revision 187)
 * - Architecture / components: 文案集/Human Practice/Sustainability-优化计划书.md
 *
 * This module only exports type-safe constants. TSX components for the page
 * are delivered in later roadmap phases and must consume these constants.
 */

import type { SustainabilityAssetKey } from "./sustainabilityAssets";

/* ----------------------------------------------------------------------------
 * Shared types
 * -------------------------------------------------------------------------- */

export type SustainabilityAnchorLevel = 1 | 2 | 3 | 4 | 5;

export type SectionContentStatus = "existing" | "reserved";

export interface SustainabilityAnchor {
  id: string;
  label: string;
  level: SustainabilityAnchorLevel;
  status: SectionContentStatus;
}

/** Design-system color token binding (see circure-design-system/tokens.json) */
export interface SustainabilityColorBinding {
  /** CSS custom property name, e.g. `--brand-navy` */
  token: string;
  hex: string;
  /** Palette name in tokens.json, when documented */
  paletteName?: string;
}

/* ----------------------------------------------------------------------------
 * Epigraph
 * -------------------------------------------------------------------------- */

export interface SustainabilityEpigraph {
  quote: string;
  attribution: string;
  attributionRole: string;
  translationZh: string;
}

export const sustainabilityEpigraph = {
  quote:
    "Sustainable development — development that does not destroy or undermine the ecological, economic, or social basis on which continued development depends — is the only viable pathway to a more secure and hopeful future for rich and poor alike.",
  attribution: "Maurice Strong",
  attributionRole: "Secretary-General of the 1992 Rio Earth Summit",
  translationZh:
    "可持续发展是不破坏长期发展所依赖的生态、经济与社会根基的发展，是无论贫富群体，通往更安全、更光明未来的唯一可行之路。",
} as const satisfies SustainabilityEpigraph;

/* ----------------------------------------------------------------------------
 * Overview
 * -------------------------------------------------------------------------- */

export type CoreSdgNumber = 3 | 9 | 12;

export interface CoreSdg {
  number: CoreSdgNumber;
  title: string;
  /** 该项目回应的核心挑战 */
  challenge: string;
  /** 在 SET 框架中的角色 */
  frameworkLayer: string;
  color: SustainabilityColorBinding;
}

export const overviewCoreSdgs = [
  {
    number: 3,
    title: "Good Health and Well-being",
    challenge: "TNBC 治疗选择有限、复发风险高、长期预后不佳",
    frameworkLayer: "核心问题响应",
    color: { token: "--semantic-success", hex: "#2f6f68", paletteName: "wet-teal" },
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    challenge: "生物医学创新转化与基础设施建设",
    frameworkLayer: "核心问题响应",
    color: { token: "--brand-navy", hex: "#173f78", paletteName: "navy" },
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    challenge: "医疗技术负责任发展与资源可持续性",
    frameworkLayer: "核心问题响应",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
  },
] as const satisfies ReadonlyArray<CoreSdg>;

export const overviewCallout =
  "三项核心 SDG 分别回应 TNBC 患者健康需求、生物医学创新转化以及医疗技术负责任发展的挑战。" as const;

export type OverviewFrameworkId =
  | "sst-qn"
  | "sdg-impact-framework"
  | "scale-framework";

export interface OverviewFrameworkIntro {
  id: OverviewFrameworkId;
  shortName: string;
  fullName: string;
  paragraph: string;
  assetKey?: SustainabilityAssetKey;
}

/** 飞书版顺序：SST-QN → SDG Impact Framework → SCALE */
export const overviewFrameworkIntros: OverviewFrameworkIntro[] = [
  {
    id: "sst-qn",
    shortName: "SST-QN",
    fullName: "SDG Synergy–Trade-off Quantification Network",
    paragraph:
      "为系统评估合成生物学项目对可持续发展的多维影响，我们提出SST-QN（SDG Synergy–Trade-off Quantification Network），用于分析不同SDGs之间的协同（Synergy）与权衡（Trade-off）关系，为未来iGEM团队开展SDG影响评估提供可复用的方法框架。",
    assetKey: "overviewSstQnPreview01",
  },
  {
    id: "sdg-impact-framework",
    shortName: "SDG Impact Framework",
    fullName: "SET–Develop–Grow Impact Framework",
    paragraph:
      "基于SST-QN分析结果，我们进一步拓展CirCure与17项SDGs之间的潜在关联，识别项目产生的直接、间接及长期影响，并构建Set–Develop–Grow Impact Framework（SDG Impact Framework），形成覆盖15项SDGs的可持续发展影响体系。",
  },
  {
    id: "scale-framework",
    shortName: "SCALE Framework",
    fullName: "SCALE Framework",
    // 占位符已按 SET 章节统计数据（43 名利益相关者）补齐。
    paragraph:
      "为确保项目发展能够持续回应真实社会需求，我们构建SCALE Framework，通过利益相关者识别、反馈整合和项目优化建立动态改进机制，并将来自43名不同领域利益相关者的反馈纳入CirCure设计全过程。",
    assetKey: "overviewScaleFramework03",
  },
];

export const sustainabilityOverview = {
  anchorId: "overview",
  title: "Overview",
  intro:
    "面对全球社会、经济与环境领域的可持续发展挑战，CirCure以联合国可持续发展目标（SDGs）为基础，结合项目特点，将SDG 3（Good Health and Well-being）、SDG 9（Industry, Innovation and Infrastructure）和SDG 12（Responsible Consumption and Production）确立为项目可持续发展的核心目标，分别回应TNBC患者健康需求、生物医学创新转化以及医疗技术负责任发展的挑战。",
  coreSdgs: overviewCoreSdgs,
  callout: overviewCallout,
  frameworks: overviewFrameworkIntros,
} as const;

/* ----------------------------------------------------------------------------
 * SST-QN — SDG Synergy–Trade-off Quantification Network
 * -------------------------------------------------------------------------- */

export type SstqnCategoryKey = "core" | "exploratory" | "conditional" | "excluded";

export interface SstqnCategory {
  key: SstqnCategoryKey;
  label: string;
  code: string;
  /** 分类矩阵图中的短标注 */
  summary: string;
  /** 正文中的完整定义 */
  definition: string;
  color: SustainabilityColorBinding;
}

export const sstqnCategories = [
  {
    key: "core",
    label: "Core",
    code: "C",
    summary: "充分机制与证据",
    definition: "Core代表具有较充分机制和证据支持的直接作用；",
    color: { token: "--brand-navy", hex: "#173f78", paletteName: "navy" },
  },
  {
    key: "exploratory",
    label: "Exploratory",
    code: "E",
    summary: "合理机制，证据有限",
    definition: "Exploratory表示具有合理机制但当前证据仍有限的关系；",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
  },
  {
    key: "conditional",
    label: "Conditional",
    code: "±",
    summary: "方向随条件变化",
    definition:
      "Conditional表示作用方向可能随着实施方式或外部条件发生变化；",
    color: { token: "--accent-pinkThread", hex: "#d784b3", paletteName: "pinkThread" },
  },
  {
    key: "excluded",
    label: "Excluded",
    code: "0",
    summary: "无直接作用，允许间接传播",
    definition:
      "Excluded则表示当前没有足够依据支持直接作用，但仍允许影响通过其他目标产生间接传播。",
    color: { token: "--surface-map", hex: "#e5d9d2", paletteName: "map" },
  },
] as const satisfies ReadonlyArray<SstqnCategory>;

export type SstqnScoringRole = "input" | "calibration" | "output";

export interface SstqnScoringStep {
  id: string;
  role: SstqnScoringRole;
  label: string;
  description: string;
}

export const sstqnScoringSteps = [
  {
    id: "mechanism-clarity",
    role: "input",
    label: "机制清晰度",
    description: "相互作用背后的机制是否清晰、可解释。",
  },
  {
    id: "cross-context-replication",
    role: "input",
    label: "跨情境重复性",
    description: "该作用关系是否在不同情境中得到重复验证。",
  },
  {
    id: "causal-evidence",
    role: "input",
    label: "因果证据",
    description: "支持该作用关系的因果证据强度。",
  },
  {
    id: "data-compatibility",
    role: "input",
    label: "数据兼容性",
    description: "现有数据与该作用关系建模方式的兼容程度。",
  },
  {
    id: "evidence-calibration",
    role: "calibration",
    label: "Evidence Calibration",
    description:
      "将相互作用类别与机制清晰度、跨情境重复性、因果证据以及数据兼容性等因素结合，对每一条作用关系的证据质量进行校准。",
  },
  {
    id: "directed-interaction-score",
    role: "output",
    label: "Directed Interaction Score [−1, 1]",
    description:
      "正值表示Synergy，负值表示Trade-off，0表示当前未预注册直接作用路径。",
  },
] as const satisfies ReadonlyArray<SstqnScoringStep>;

export interface SstqnScoreSemantics {
  sign: "positive" | "negative" | "zero";
  meaning: string;
}

export const sstqnScoreSemantics = [
  { sign: "positive", meaning: "Synergy" },
  { sign: "negative", meaning: "Trade-off" },
  { sign: "zero", meaning: "当前未预注册直接作用路径" },
] as const satisfies ReadonlyArray<SstqnScoreSemantics>;

export type SstqnCalloutTone = "coral" | "navy" | "gold";

export interface SstqnCallout {
  id: string;
  tone: SstqnCalloutTone;
  text: string;
}

export const sstqnSection = {
  anchorId: "sst-qn",
  title: "SST-QN — SDG Synergy–Trade-off Quantification Network",
  /** 正文段落按顺序排列；`classification-definitions` 亦可由 sstqnCategories 结构化渲染 */
  paragraphs: [
    {
      id: "motivation",
      text: "可持续发展目标并非彼此独立。一个目标的推进可能进一步促进其他目标，也可能在不同实施路径和发展情境下对其他目标产生限制。因此，仅分别讨论项目与单个SDG之间的联系，难以完整反映可持续发展体系中真实存在的协同与权衡关系。基于这一认识，我们提出 SST-QN（SDG Synergy–Trade-off Quantification Network），尝试从系统视角分析17项SDGs之间的相互作用，为进一步评估合成生物学项目的多维可持续影响建立统一的分析基础。",
    },
    {
      id: "directed-network",
      text: "SST-QN并不把SDG之间的联系简单视为对称的“相关关系”，而是构建具有方向性的相互作用网络。对于任意两个目标，SDGi→SDGj 与 SDGj→SDGi 被分别评价，因为二者可能具有不同的作用机制、时间尺度和证据基础。模型同时区分直接与间接作用、协同与权衡，以及在不同情境下可能发生方向变化的关系，使SDG之间复杂的相互作用能够以更加结构化的方式被描述。",
    },
    {
      id: "classification-intro",
      text: "为了避免把所有SDG联系简单解释为正向协同，我们首先依据现有机制与证据，将潜在的直接作用划分为 Core（C）、Exploratory（E）、Conditional（±）和Excluded（0）四类。这一分类使SST-QN不仅能够识别潜在的Synergy，也能够主动寻找可能被忽视的Trade-off和不确定关系。",
    },
    {
      id: "classification-definitions",
      text: "Core代表具有较充分机制和证据支持的直接作用；Exploratory表示具有合理机制但当前证据仍有限的关系；Conditional表示作用方向可能随着实施方式或外部条件发生变化；Excluded则表示当前没有足够依据支持直接作用，但仍允许影响通过其他目标产生间接传播。",
    },
    {
      id: "score-model",
      text: "在此基础上，我们进一步使用范围为 [−1,1] 的 Evidence-calibrated Directed Interaction Score 描述不同SDG之间的作用方向和相对强度。其中，正值表示Synergy，负值表示Trade-off，0表示当前未预注册直接作用路径。评分并非单纯依据主观判断，而是将相互作用类别与机制清晰度、跨情境重复性、因果证据以及数据兼容性等因素结合，对每一条作用关系的证据质量进行校准。因此，这一数值并不是一个普适的Pearson相关系数，而是用于表达方向、作用性质与证据强度的结构性评分。",
    },
    {
      id: "indirect-propagation",
      text: "SST-QN还进一步考虑了可持续影响并不会停留在两个目标之间。一个目标产生的变化可能通过中间目标继续传播，形成间接影响和反馈回路；部分作用也可能经过一定时间后才逐渐显现。因此，模型同时保留间接传播、反馈结构以及时间滞后的分析空间，从而使SDG相互作用能够从单条连接扩展到更完整的系统网络。",
    },
    {
      id: "implementation-pathways",
      text: "另一个重要考虑是，Trade-off往往并非来自SDG目标本身，而来自实现目标的具体路径。因此，SST-QN进一步将implementation pathways纳入分析，关注产业扩张、资源消耗、污染以及不平等的技术扩散等过程可能形成的长期外部性。这使模型不仅能够判断两个目标之间“是否存在联系”，还能够进一步讨论这种关系在怎样的条件下可能表现为协同，又可能在怎样的实施方式下转变为权衡。",
    },
    {
      id: "reproducibility",
      text: "为了使这一方法能够被进一步检验和复用，我们不仅保留最终的interaction matrix和network结果，也记录了作用分类、评分逻辑、证据评价和验证条件。模型采用独立证据评分和一致性检验，并保留结构化的edge registry及可重新生成评分矩阵与heatmap的分析流程。因此，SST-QN并不只用于描述一组既定的SDG关系，而是为未来iGEM团队提供一个可以根据新的证据、数据和项目背景继续更新的分析框架。",
    },
  ],
  categories: sstqnCategories,
  scoring: {
    name: "Evidence-calibrated Directed Interaction Score",
    range: "[−1, 1]",
    steps: sstqnScoringSteps,
    scoreSemantics: sstqnScoreSemantics,
    note: "这一数值并不是一个普适的Pearson相关系数，而是用于表达方向、作用性质与证据强度的结构性评分。",
  },
  callouts: [
    {
      id: "pathway-tradeoff",
      tone: "coral",
      text: "Trade-off往往并非来自SDG目标本身，而来自实现目标的具体路径。",
    },
    {
      id: "reusable-framework",
      tone: "navy",
      text: "SST-QN并不只用于描述一组既定的SDG关系，而是为未来iGEM团队提供一个可以根据新的证据、数据和项目背景继续更新的分析框架。",
    },
  ] as ReadonlyArray<SstqnCallout>,
  /** SST-QN → SDG Impact Framework 的过渡段落（正文中加粗呈现） */
  transition:
    "在建立这一SDG相互作用网络之后，我们进一步回到CirCure本身，将项目实际开展的工作、利益相关者反馈以及可能产生的直接、间接和长期影响纳入SDG体系，并据此构建我们的SDG Impact Framework。",
  pdf: {
    title: "SDG 模型构建",
    originalFileName: "SDG 模型构建.pdf",
    fileName: "sustainability-sst-qn-model-construction.pdf",
    description: "SST-QN SDG 模型构建方法论与完整评分矩阵",
    assetKey: "sstQnModelConstruction09",
  },
} as const;

/* ----------------------------------------------------------------------------
 * SET–DEVELOP–GROW Impact Framework (SDG Impact Framework)
 * -------------------------------------------------------------------------- */

export type FrameworkLayerKey = "set" | "develop" | "grow";

export interface FrameworkLayer {
  key: FrameworkLayerKey;
  label: string;
  title: string;
  description: string;
  color: SustainabilityColorBinding;
}

export const frameworkLayers = [
  {
    key: "set",
    label: "SET",
    title: "核心问题响应",
    description: "确定项目关注的核心SDGs（SDG 3 / 9 / 12）。",
    color: { token: "--brand-navy", hex: "#173f78", paletteName: "navy" },
  },
  {
    key: "develop",
    label: "DEVELOP",
    title: "多维影响拓展",
    description: "分析项目产生的扩展影响及SDG关联。",
    color: { token: "--accent-pinkThread", hex: "#d784b3", paletteName: "pinkThread" },
  },
  {
    key: "grow",
    label: "GROW",
    title: "长期系统价值",
    description: "探索项目的长期可持续价值。",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
  },
] as const satisfies ReadonlyArray<FrameworkLayer>;

export const impactFrameworkSection = {
  anchorId: "sdg-impact-framework",
  title: "SET–Develop–Grow Impact Framework",
  subtitle: "SDG Impact Framework",
  intro:
    "SDG Impact Framework描述了CirCure可持续影响由局部问题响应向系统价值拓展的过程。其中，SET层确定项目关注的核心SDGs，DEVELOP层分析项目产生的扩展影响及SDG关联，GROW层探索项目的长期可持续价值。",
  summary:
    "通过这一框架，CirCure的可持续发展路径由核心问题响应（SET），逐步扩展至多维影响拓展（DEVELOP），最终形成长期系统价值（GROW），展示了生物医学创新项目如何从解决具体健康需求出发，进一步推动更广泛的可持续发展目标。",
  layers: frameworkLayers,
  assetKey: "frameworkSetDevelopGrow06" as SustainabilityAssetKey,
} as const;

/* ----------------------------------------------------------------------------
 * SET — Addressing Core Challenges
 * -------------------------------------------------------------------------- */

export const setCoreChallengesSection = {
  anchorId: "set-core-challenges",
  title: "SET — Addressing Core Challenges",
  whoEvidence: {
    source: "WHO",
    year: 2024,
    statementEn:
      "In 2024, there were an estimated 2.4 million women diagnosed with breast cancer and 694 000 deaths globally.",
    summaryZh: "2024 年，全球估计有 240 万女性被诊断为乳腺癌，死亡人数约 69.4 万。",
  },
  intro:
    "WHO数据显示，In 2024, there were an estimated 2.4 million women diagnosed with breast cancer and 694 000 deaths globally. 三阴性乳腺癌（TNBC）因缺乏有效靶向治疗策略，仍面临治疗选择有限、复发风险高及长期预后不佳等挑战。面对这一未满足的临床需求，CirCure不仅关注新型免疫治疗策略的开发，也关注其在技术创新、临床转化以及负责任发展方面的长期影响。",
  coreSdgSelection:
    "基于可持续发展目标（SDGs）对全球环境、社会和经济挑战的行动号召，我们选择SDG 3（Good Health and Well-being）、SDG 9（Industry, Innovation and Infrastructure）和SDG 12（Responsible Consumption and Production）作为SET框架的核心目标，分别回应健康福祉、创新转化和负责任发展的挑战。",
  stakeholderOverview:
    "为进一步明确CirCure所回应的核心可持续发展需求，我们邀请来自6个领域的43名利益相关者参与项目讨论，包括23名专家、4名患者以及16名社会公众。他们从疾病需求、技术创新、应用转化和社会影响等角度提供反馈，帮助我们识别项目与SDG3、SDG9和SDG12之间的关键联系。",
  crossSdgNote:
    "值得特别说明的是，由于不同SDGs之间存在相互关联，部分利益相关者的反馈可能同时涉及多个目标。为突出其主要贡献，我们按照其核心影响方向进行分类，并在SDG协同分析中进一步讨论其跨目标关联。",
  assetKey: "setStakeholderOverview07" as SustainabilityAssetKey,
} as const;

/* ----------------------------------------------------------------------------
 * Stakeholder statistics
 * -------------------------------------------------------------------------- */

export interface SustainabilityStat {
  id: string;
  value: number;
  labelZh: string;
  labelEn: string;
}

export const sustainabilityStats = [
  { id: "stakeholders", value: 43, labelZh: "利益相关者", labelEn: "Stakeholders" },
  { id: "fields", value: 6, labelZh: "领域", labelEn: "Fields" },
  { id: "experts", value: 23, labelZh: "专家", labelEn: "Experts" },
  { id: "patients", value: 4, labelZh: "患者", labelEn: "Patients" },
  { id: "public", value: 16, labelZh: "社会公众", labelEn: "Public Members" },
] as const satisfies ReadonlyArray<SustainabilityStat>;

/* ----------------------------------------------------------------------------
 * SDG 3 — Good Health and Well-being
 * -------------------------------------------------------------------------- */

export const sdg3Section = {
  anchorId: "sdg3-health",
  title: "SDG 3 — Good Health and Well-being",
  intro:
    "可持续发展目标3（SDG 3），健康福祉，旨在确保健康生活并促进各年龄段人群的福祉。针对三阴性乳腺癌（TNBC）患者在治疗选择和长期健康获益方面的未满足需求，CirCure旨在开发一种基于circRNA的多表位疫苗治疗方案，探索癌症免疫治疗的新策略，并为精准医疗的发展提供新的可能。",
  stakeholderIntro:
    "为了从不同角度理解TNBC治疗领域的未满足需求，我们邀请了来自临床和患者群体的利益相关者参与交流。临床方面，我们咨询了湖南省长沙市第八医院肿瘤科医生李成丽，她长期参与肿瘤患者诊疗工作，为我们提供了一线临床视角。患者方面，我们采访TNBC患者及乳腺癌患者在疾病治疗过程中的真实经历，帮助我们了解患者在治疗选择和长期健康管理中的关注点。",
  coreProblemsIntro:
    "基于来自临床实践和患者体验的反馈，我们进一步识别出当前TNBC治疗中三个亟待解决的问题：",
  expertIntro:
    "针对前期利益相关者交流中发现的TNBC治疗需求、患者获益和医疗可及性等问题，我们进一步咨询了多位医学、肿瘤学及公共健康领域的专家。老师们从疾病防治、临床治疗路径、肿瘤免疫、患者获益及医疗资源分配等角度提出了针对性建议。我们进一步将这些反馈转化为项目改进的依据，持续完善CirCure的治疗策略与临床应用设想，并将患者获益、健康公平和长期医疗价值纳入项目的可持续性评估，从而进一步分析CirCure对SDG 3的实际贡献及其与其他相关SDGs之间的协同影响。",
  stakeholderTransition: [
    "这一反馈促使我们重新调整CirCure的设计重点：相比首先强调circRNA疫苗潜在的安全性优势，我们更加关注其能否诱导有效且持久的抗肿瘤免疫反应，并进一步转化为真实的临床获益。在证明疗效的基础上，我们再进一步考虑安全性、患者接受度以及与现有治疗方式联合应用的可能性。",
  ] as ReadonlyArray<string>,
  /** 利益相关者卡片整体之后的总结段落，承接 TNBC 患者访谈反馈并过渡到 Core Problems */
  stakeholderOutro:
    "这些反馈促使我们进一步完善CirCure的项目评价维度：除了关注circRNA疫苗能否诱导有效的抗肿瘤免疫反应，我们也开始将长期临床获益、治疗可及性以及潜在经济负担纳入未来转化考量，使CirCure不仅追求“有效的治疗”，也进一步关注这种治疗能否真正被患者获得并长期受益。",
} as const;

/* ----------------------------------------------------------------------------
 * Stakeholder profiles
 * -------------------------------------------------------------------------- */

export type StakeholderProfileId = "li-chengli" | "tnbc-patients";

export type StakeholderVariant = "interview" | "field";

/** 调研走访（field）卡片的一行内容：行首词 + 一个或多个逐字保留的段落。 */
export interface StakeholderFieldRow {
  label: "对象" | "原因" | "反馈" | "改变";
  paragraphs: ReadonlyArray<string>;
}

export interface StakeholderProfile {
  id: string;
  name: string;
  role: string;
  variant: StakeholderVariant;
  organization?: string;
  /** 标准五字段形式（访谈卡片 + 部分调研卡片）。 */
  relevantStakeholder?: string;
  whyEngaged?: string;
  feedback?: string;
  incorporated?: string;
  improvement?: string;
  /** 调研卡片显式的行内容（对象 / 原因 / 反馈 / 改变）。 */
  fieldRows?: ReadonlyArray<StakeholderFieldRow>;
  sdgAddressed: string;
  /** 展开后的详细访谈 / 调研内容，按段落排列 */
  detailedInterview: ReadonlyArray<string>;
}

export const stakeholderProfiles = [
  {
    id: "li-chengli",
    name: "李成丽",
    role: "肿瘤科医生",
    variant: "interview",
    organization: "湖南省长沙市第八医院肿瘤科",
    relevantStakeholder:
      "湖南省长沙市第八医院肿瘤科医生，一线参与肿瘤患者诊疗与决策。",
    whyEngaged: "从临床视角了解TNBC未满足需求，并评估CirCure的临床价值。",
    feedback:
      "TNBC患者更需要明确的治疗获益，降低复发风险和延长生存优先于单纯减少副作用。",
    incorporated:
      "这一反馈纠正了我们过度强调副作用的倾向，使CirCure更加关注抗肿瘤疗效。",
    improvement: "将设计原则调整为“疗效优先，安全性优化”。",
    sdgAddressed:
      "SDG 3 — Good Health and Well-being：回应TNBC患者对有效治疗和长期生存获益的需求。",
    detailedInterview: [
      "临床上，我们咨询了湖南省长沙市第八医院肿瘤科医生李成丽。作为直接参与患者治疗决策的一线临床人员，她指出，不同阶段的TNBC患者面临着不同的治疗需求：术后患者更关注降低复发风险，而晚期及后线治疗患者则更需要有效控制疾病进展和新的治疗选择。相应地，临床疗效也应分阶段评价——术后重点关注复发率和无进展生存期（PFS），晚期患者则短期关注客观缓解率（ORR）及肿瘤变化，长期关注总生存期（OS）。",
      "在交流过程中，李成丽医生纠正了我们此前对于创新治疗价值的一个潜在误区。我们曾倾向于认为，降低治疗副作用是提升患者接受度的重要方向。但她强调，在肿瘤治疗中，明确的治疗效果始终是医生和患者选择治疗方案的首要依据。在疗效确切的前提下，即使存在一定副作用，只要能够降低复发风险、控制肿瘤进展或延长生存时间，患者通常仍具有较高的接受意愿。",
    ],
  },
  {
    id: "tnbc-patients",
    name: "TNBC Patients",
    role: "TNBC患者及乳腺癌患者",
    variant: "interview",
    relevantStakeholder: "TNBC患者是CirCure未来最直接的潜在受益者。",
    whyEngaged: "直接了解患者真正关注的治疗需求与现实顾虑。",
    feedback:
      "患者最关注治疗效果、复发风险和长期生存，同时也关心治疗费用。",
    incorporated:
      "我们进一步将抗肿瘤疗效、长期获益和治疗可及性纳入项目评价。",
    improvement:
      "由技术性能评价扩展为疗效、长期获益与可及性的综合评估。",
    sdgAddressed:
      "SDG 3 — Good Health and Well-being：回应患者对有效治疗和长期生存的需求。",
    detailedInterview: [
      "患者层面，我们认真听取了TNBC患者及乳腺癌患者对于疾病治疗的真实感受和未来期待。作为治疗方案最直接的接受者和受益者，她们当中有人仍在受到复发和转移的困境。因此相比单纯增加新的治疗手段，她们更期待能够获得真正有效、并带来更长期生存获益的治疗选择。",
      "在交流过程中，我们进一步了解到，患者，尤其是三阴性乳腺癌患者，首先关心的是疗效好不好，其次是术后的护理和措施能否降低复发和转移风险；与此同时，治疗费用也是患者非常现实的考虑。即使一种治疗方案具有较好的效果，如果价格过高、普通患者难以长期承担，其实际可及性和最终受益范围仍会受到限制。",
      "同时，我们受到李成丽医生的启发，询问了患者她们如何看待治疗产生副作用的问题。患者表示，她们并非不担心副作用，但相比追求‘无副作用’，更看重治疗能否真正降低复发和转移风险、延长生存时间。对于能够带来明确治疗获益的方案，只要副作用处于可接受和可管理的范围内，她们仍愿意考虑接受治疗。",
    ],
  },
] as const satisfies ReadonlyArray<StakeholderProfile>;

/* ----------------------------------------------------------------------------
 * Core problems (三个亟待解决的问题)
 * -------------------------------------------------------------------------- */

export type CoreProblemId =
  | "limited-treatment"
  | "long-term-control"
  | "accessibility";

export interface CoreProblem {
  id: CoreProblemId;
  titleZh: string;
  titleEn: string;
  description: string;
}

export const coreProblems = [
  {
    id: "limited-treatment",
    titleZh: "有效治疗选择仍然有限",
    titleEn: "Limited effective treatment options",
    description:
      "不同阶段患者面临不同治疗需求：术后患者需要进一步降低复发风险，而晚期及后线患者仍需要更有效的疾病控制和新的治疗选择。",
  },
  {
    id: "long-term-control",
    titleZh: "长期疾病控制仍面临挑战",
    titleEn: "Challenges in long-term disease control",
    description:
      "疗效不仅意味着短期肿瘤控制，更需要转化为降低复发和转移风险、延长生存时间等长期获益。",
  },
  {
    id: "accessibility",
    titleZh: "治疗可及性仍需进一步关注",
    titleEn: "Treatment accessibility remains a concern",
    description:
      "患者不仅关注疗效，也会考虑副作用是否可管理以及治疗费用是否能够承担；即使疗效明确，过高的治疗负担仍可能限制实际受益。",
  },
] as const satisfies ReadonlyArray<CoreProblem>;

/* ----------------------------------------------------------------------------
 * Expert feedbacks
 * -------------------------------------------------------------------------- */

export interface ExpertFeedback {
  id: string;
  name: string;
  title: string;
  domain: string;
  suggestion: string;
  improvement: string;
  sdgMapping: string;
  /** 正文中的完整反馈段落 */
  fullFeedback: string;
}

export const expertFeedbacks = [
  {
    id: "wei-yuhang",
    name: "魏宇航",
    title: "副院长",
    domain: "公共健康与医疗资源分配",
    suggestion:
      "新的肿瘤治疗策略不仅要关注疗效，也应考虑不同患者获得治疗的机会。",
    improvement:
      "在项目可持续性分析中加入医疗可及性和健康公平相关内容，关注CirCure未来对SDG 10的影响。",
    sdgMapping: "SDG 3 → SDG 10",
    fullFeedback:
      "魏宇航副院长从公共健康和医疗资源分配角度提出，新的肿瘤治疗策略不仅要关注疗效，也应考虑不同患者获得治疗的机会。基于这一建议，我们在项目的可持续性分析中进一步加入了医疗可及性和健康公平相关内容，并关注CirCure未来可能对SDG 10产生的影响。",
  },
  {
    id: "liu-yawen",
    name: "刘雅文",
    title: "副院长",
    domain: "女性健康与疾病防治",
    suggestion:
      "乳腺癌防治不仅依赖治疗技术，也需要提高女性主动体检、定期筛查和早期发现的意识。",
    improvement:
      "在关注TNBC治疗的同时，将乳腺健康科普和体检筛查意识纳入项目的公众教育内容。",
    sdgMapping: "SDG 3（扩展）",
    fullFeedback:
      "刘雅文副院长从女性健康和疾病防治角度提出，乳腺癌防治不仅依赖治疗技术，也需要提高女性主动体检、定期筛查和早期发现的意识。受此启发，我们在关注TNBC治疗的同时，也将乳腺健康科普和体检筛查意识纳入项目的公众教育内容，使项目对SDG 3的回应不仅停留在治疗层面。",
  },
  {
    id: "jia-lin",
    name: "贾琳",
    title: "老师",
    domain: "乳腺癌临床特点",
    suggestion:
      "项目设计应从TNBC目前真实存在的治疗需求出发，而不能只关注技术本身的创新性。",
    improvement:
      "进一步梳理TNBC现有治疗中的不足，将临床需求和患者实际获益作为CirCure治疗策略设计与评价的重要依据。",
    sdgMapping: "SDG 3",
    fullFeedback:
      "贾琳老师结合乳腺癌的临床特点指出，项目设计应从TNBC目前真实存在的治疗需求出发，而不能只关注技术本身的创新性。因此，我们进一步梳理了TNBC现有治疗中的不足，并将临床需求和患者实际获益作为CirCure治疗策略设计与评价的重要依据。",
  },
  {
    id: "cui-jiuwei",
    name: "崔久嵬",
    title: "老师",
    domain: "肿瘤免疫治疗",
    suggestion:
      "更加关注免疫治疗策略本身的有效性、安全性以及未来临床应用的可行性。",
    improvement:
      "进一步完善CirCure的免疫治疗设计思路，在项目评价中增加安全性、临床转化和负责任应用等方面的考虑。",
    sdgMapping: "SDG 3 + SDG 9",
    fullFeedback:
      "崔久嵬老师从肿瘤免疫治疗角度建议我们更加关注免疫治疗策略本身的有效性、安全性以及未来临床应用的可行性。根据这一建议，我们进一步完善了CirCure的免疫治疗设计思路，并在项目评价中增加了安全性、临床转化和负责任应用等方面的考虑。",
  },
  {
    id: "fan-zhimin",
    name: "范志民",
    title: "老师",
    domain: "乳腺癌临床治疗路径",
    suggestion:
      "新型治疗方式最终需要能够真正改善患者的治疗结果，并考虑其与现有治疗方案之间的衔接。",
    improvement:
      "进一步将患者获益和临床应用场景纳入CirCure的设计与长期价值评估中。",
    sdgMapping: "SDG 3 + SDG 9",
    fullFeedback:
      "范志民老师从乳腺癌临床治疗路径出发提出，新型治疗方式最终需要能够真正改善患者的治疗结果，并考虑其与现有治疗方案之间的衔接。基于这一建议，我们进一步将患者获益和临床应用场景纳入CirCure的设计与长期价值评估中。",
  },
] as const satisfies ReadonlyArray<ExpertFeedback>;

/* ----------------------------------------------------------------------------
 * C — Consequences
 * -------------------------------------------------------------------------- */

export type ConsequenceDimensionId = "social" | "economic" | "environmental";

export type ConsequenceDimensionIcon = "community" | "economy" | "leaf";

export interface ConsequenceDimension {
  id: ConsequenceDimensionId;
  title: string;
  icon: ConsequenceDimensionIcon;
  color: SustainabilityColorBinding;
  description: string;
}

export const consequencesDimensions = [
  {
    id: "social",
    title: "社会维度",
    icon: "community",
    color: { token: "--care", hex: "#d784b3", paletteName: "pinkThread" },
    description: "治疗能否改善患者长期健康，并被不同群体公平获得。",
  },
  {
    id: "economic",
    title: "经济维度",
    icon: "economy",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
    description:
      "治疗可及性、费用承担与转化过程中的潜在经济负担对患者与医疗体系的长期影响。",
  },
  {
    id: "environmental",
    title: "环境维度",
    icon: "leaf",
    color: { token: "--semantic-success", hex: "#2f6f68", paletteName: "wet-teal" },
    description: "未来研发与生产过程中可能产生的资源与环境负担。",
  },
] as const satisfies ReadonlyArray<ConsequenceDimension>;

export const consequencesSection = {
  anchorId: "sdg3-consequences",
  title: "C — Consequences",
  leadQuestion:
    "在利益相关者交流的基础上，我们进一步思考了一个更长期的问题：如果 CirCure 未来真正走向临床转化，它可能为患者、医疗体系以及社会带来怎样的影响？",
  overview:
    "我们认识到，一项面向健康福祉的技术，其价值不能仅由实验室中的技术性能决定。治疗能否改善患者长期健康、能否被不同群体公平获得，以及未来研发和生产过程中可能产生怎样的资源与环境负担，都会影响其对 SDG 3 的实际贡献。因此，我们从社会、经济和环境三个维度评估 CirCure 可能产生的长期影响，同时关注其中潜在的积极作用与可能出现的权衡。",
  dimensions: consequencesDimensions,
} as const;

/* ----------------------------------------------------------------------------
 * Legacy tool (PDF 下载链接) 与 SCALE 章节通用结构
 * -------------------------------------------------------------------------- */

export interface LegacyToolPdf {
  label: string;
  fileName: string;
}

export interface LegacyTool {
  title: string;
  description: string;
  pdfs: ReadonlyArray<LegacyToolPdf>;
}

/** 一个 SDG 章（S/C/A/L/E）的内容，供 sustainabilityPage.ts 统一组装为 WikiSection。 */
export interface SdgScaleContent {
  sectionId: string;
  index: string;
  kicker: string;
  navLabel: string;
  title: string;
  summary: string;
  intro: ReadonlyArray<string>;
  stakeholderIntro?: ReadonlyArray<string>;
  stakeholders?: ReadonlyArray<StakeholderProfile>;
  /** 利益相关者卡片之后的补充段落（如 SDG9 的杨巍/张海红/胡老师、患者与公众）。 */
  stakeholderOutro?: ReadonlyArray<string>;
  expertIntro?: ReadonlyArray<string>;
  experts?: ReadonlyArray<ExpertFeedback>;
  consequencesLead?: ReadonlyArray<string>;
  consequences?: ReadonlyArray<ConsequenceDimension>;
  consequencesExtra?: ReadonlyArray<string>;
  /** C 段末尾配图的 sustainabilityImages key（如 SDG9 的批次失败投影图）。 */
  consequencesFigureKey?: string;
  alignment?: ReadonlyArray<string>;
  legacyIntro?: ReadonlyArray<string>;
  legacyTools?: ReadonlyArray<LegacyTool>;
  evidenceIntro?: ReadonlyArray<string>;
  evidenceStats?: ReadonlyArray<SustainabilityStat>;
  evidenceExtra?: ReadonlyArray<string>;
  /** E 段末尾配图的 sustainabilityImages key（如 SDG9 的证据图）。 */
  evidenceFigureKey?: string;
}

/* ----------------------------------------------------------------------------
 * SDG 3 — A / L / E（Alignment / Legacy / Evidence）
 * -------------------------------------------------------------------------- */

export const sdg3Alignment: ReadonlyArray<string> = [
  "对 Consequences 的分析使我们进一步认识到，CirCure 对 SDG 3 的回应会同时牵动技术创新、健康教育、医疗可及性、资源利用和多方合作等更广泛的问题。因此，我们从项目早期便基于 SST-QN 识别这些跨 SDG 联系，并随着 CirCure 的推进，持续关注其中可能出现的协同、权衡及实施条件，将这些问题逐步纳入后续的项目设计、评价与转化考虑中。",
  "SDG 3 与 SDG 9 构成当前最明确的 Core Synergy。CirCure 的技术开发直接来源于 TNBC 治疗选择有限、复发风险和长期疾病控制等健康需求，而 circRNA 疫苗设计、技术优化及未来临床转化又决定这些需求能否真正得到回应，形成清晰的双向路径：Health need → Biomedical innovation → Therapeutic feasibility → Potential health benefit。这一作用路径明确、方向稳定，并已经体现在 CirCure 当前的项目设计中，因此构成 SST-QN 中较为稳定的核心关系。",
  "SDG 3 与 SDG 4 同样形成了具有直接证据支持的 Core Synergy。通过融入相关利益者的反馈，Circure 将乳腺健康、筛查和早期发现等内容纳入公众教育，并通过量化评估观察到参与者在相关健康知识理解和掌握方面的实际提升，使这一关系由单纯的“健康信息传播”进一步形成了可观察的“知识获取—教育成效”路径。现有证据支持其在项目周期内产生明确教育效果，因此归为 Core。但受限于项目周期，目前尚未追踪长期知识保持或行为改变，因此结论仅限于短期教育成效。",
  "相比之下，SDG 3 与 SDG 10、SDG 12 体现了两类典型的 Conditional relationships。对 SDG 10 而言，决定作用方向的关键是价格、支付和医疗可及性；对 SDG 12 而言，则更多取决于生产方式、资源效率和环境管理。同一项健康创新在不同实施条件下，既可能产生协同，也可能形成新的社会或环境权衡。",
  "与碳排放管理平台相关企业的交流也使我们进一步意识到，未来规模化生产可能继续向碳排放和气候影响延伸。但目前这一作用链条仍主要通过生产与资源利用过程间接传递，因此我们暂不建立 SDG 3 与 SDG 13 的直接作用边，而将其作为经由 SDG 12 进一步传导的潜在影响。",
  "对于 SDG 17，我们仍将其保留为 Exploratory。多方利益相关者的参与确实影响了项目的问题识别与设计优化，说明跨领域合作对项目过程具有积极作用。但目前证据仅支持“促进项目改进”，尚不足以证明其能够独立转化为稳定、可量化的长期健康结果，因此暂不纳入 Core 关系。",
  "对于 SDG 5，我们选择将其归为 Excluded。尽管 CirCure 直接回应女性患者的健康需求，但我们认为“改善女性健康”并不等同于“促进性别平等”。在缺乏直接证据的情况下，我们不因疾病人群特征而人为建立正向关系。",
  "SST-QN 的分析表明，SDG 3 并不是 CirCure 可持续影响的终点，而是整个影响网络的起点。其中，部分关系已经表现出较明确的协同作用，部分则受到成本、资源利用和实施方式等现实条件影响，也有一些关系目前仍缺乏直接证据支持。这样的分析帮助我们更清楚地界定了 SDG 3 与其他 SDGs 之间关系的强弱、方向与边界，也为后续整合 SDG 9 和 SDG 12 的跨目标影响提供了依据。",
];

export const sdg3LegacyIntro: ReadonlyArray<string> = [
  "为了让后续 iGEM 团队能够在 CirCure 的 SDG 3 实践基础上继续开展自己的工作，我们不仅记录了项目的分析结果，也将实践过程中形成的利益相关者访谈、反馈转化、SDG 关联分析和影响记录方法整理为可复用的指南、记录表与模板。",
];

export const sdg3LegacyTools: ReadonlyArray<LegacyTool> = [
  {
    title: "Stakeholder Interview Guide",
    description:
      "在实际交流过程中，我们发现不同利益相关者能够提供的信息并不相同，因此访谈不应采用完全相同的问题框架。基于这些实践，我们保留了不同利益相关者的访谈问题、核心问题与追问方式，并记录了如何通过交叉询问进一步验证关键需求。",
    pdfs: [
      { label: "中文", fileName: "sustainability-stakeholder-interview-guide-cn.pdf" },
      { label: "English", fileName: "sustainability-stakeholder-interview-guide-en.pdf" },
    ],
  },
  {
    title: "Stakeholder–SDG Mapping Guide",
    description:
      "根据利益相关者的实际反馈识别其 Primary SDG 与 Related SDGs，并记录相应的关联依据，用于更清晰地梳理不同反馈与 SDGs 之间的关系，避免重复分类，并为后续跨 SDG 协同与权衡分析提供基础。",
    pdfs: [
      { label: "中文", fileName: "sustainability-stakeholder-sdg-mapping-guide-cn.pdf" },
      { label: "English", fileName: "sustainability-stakeholder-sdg-mapping-guide-en.pdf" },
    ],
  },
  {
    title: "Feedback-to-Action Record",
    description:
      "将项目中的经验整理为一套完整的工具体系，覆盖利益相关者访谈、反馈转化、SDG 关联分析和影响记录，记录反馈如何转化为具体的项目改进。",
    pdfs: [
      { label: "中文", fileName: "sustainability-feedback-to-action-record-cn.pdf" },
      { label: "English", fileName: "sustainability-feedback-to-action-record-en.pdf" },
    ],
  },
  {
    title: "SDG Impact Documentation Template",
    description:
      "用于记录利益相关者参与、反馈转化及 SDG 影响分析过程，使这些工具不仅记录我们的实践过程，也为其他团队提供可直接参考和使用的方法框架。",
    pdfs: [
      { label: "中文", fileName: "sustainability-sdg-impact-documentation-template-cn.pdf" },
      { label: "English", fileName: "sustainability-sdg-impact-documentation-template-en.pdf" },
    ],
  },
];

export const sdg3EvidenceIntro: ReadonlyArray<string> = [
  "我们以可量化、可追踪的结果检验 CirCure 对 SDG 3 的实际回应。截至目前，SDG 3 相关工作共纳入 30 名利益相关者，覆盖 5 类利益相关者群体。来自不同视角的反馈被系统记录并持续纳入项目迭代，目前已推动 8 类关键项目改进。同时，我们将实践过程中形成的方法整理为 4 项可复用工具，进一步记录利益相关者参与、反馈转化及 SDG 影响分析过程。",
];

export const sdg3EvidenceStats: ReadonlyArray<SustainabilityStat> = [
  { id: "sdg3-stakeholders", value: 30, labelZh: "利益相关者", labelEn: "Stakeholders in 5 groups" },
  { id: "sdg3-priorities", value: 4, labelZh: "患者优先项", labelEn: "Patient-informed Priorities" },
  { id: "sdg3-tools", value: 4, labelZh: "可复用工具", labelEn: "Documented & Reusable Tools" },
  { id: "sdg3-improvements", value: 8, labelZh: "项目改进", labelEn: "Traceable Project Improvements" },
];

export const sdg3EvidenceExtra: ReadonlyArray<string> = [
  "30 名利益相关者覆盖 5 类群体，从患者真实需求、临床实践、公共健康及更广泛的可持续发展视角参与 CirCure 的项目评估，相关反馈进一步推动了项目设计、评价体系与未来应用考虑的具体调整。除专业意见外，我们也记录了患者家属基于真实照护经历所表达的担忧、期待与现实考量。",
  "“只要真的有效，我们肯定愿意想办法治，但现实里也必须考虑费用。如果一种治疗需要长期用，而且价格特别高，对普通家庭来说可能不是想不想治的问题，而是真的能不能承担。”",
  "“我们最希望的当然还是治疗有效，能少复发、让她活得更久。但作为家属，我们也会考虑治疗以后她还能不能正常生活。如果副作用特别严重，需要家里长期照顾，对整个家庭来说压力都会很大。”",
  "“治疗结束以后其实家里人也一直会担心复发。每次复查前都会很紧张。如果有新的治疗能够真正把复发和转移的风险降下来，即使治疗过程麻烦一点，我们可能也愿意接受。”",
  "“她生病以后，影响的不只是她自己，我们整个家庭的生活也会跟着改变。我们当然最希望治疗有效、少复发，但也会担心副作用会不会影响她正常生活和工作。对家属来说，能把病控制住，也能让她尽量回到原来的生活，同样很重要。”",
  "我们纳入 4 名患者的真实治疗体验与需求，重点了解她们对疗效、复发与转移、长期生存、副作用、生活质量、治疗费用和可及性的看法。访谈显示，不同患者对于疗效、安全性和现实负担的权衡并不完全一致，这使我们认识到，患者需求并不存在单一答案。因此，我们没有将“疗效优先”简单等同于忽视安全性，而是将明确治疗获益与可接受的副作用、生活质量和经济负担共同纳入 CirCure 的患者获益评价，推动项目从单纯关注技术性能进一步转向患者实际获益与现实可接受性。",
  "我们形成了 4 项可供后续 iGEM 团队直接使用的工具：Stakeholder Interview Guide、Stakeholder–SDG Mapping Guide、Feedback-to-Action Record、SDG Impact Documentation Template。",
  "目前，根据已经记录的利益相关者反馈，可以归纳出 8 类关键项目改进：将项目原则调整为“疗效优先，安全性优化”；增加复发、长期生存及阶段性临床获益的评价视角；将治疗费用和医疗可及性纳入项目评价；将乳腺健康、筛查和早期发现纳入公众教育；加入健康公平与医疗资源分配的考虑；将环境评价由实验室耗材拓展到生产、储运和废弃物等生命周期环节。",
];

/* ----------------------------------------------------------------------------
 * Patient chat dialog — TNBC patient voices (used in tnbc-patients profile)
 * -------------------------------------------------------------------------- */

export type PatientChatSide = "left" | "right";
export type PatientChatId = "A" | "B" | "C" | "D";

export interface PatientChatMessage {
  patientId: PatientChatId;
  side: PatientChatSide;
  text: string;
}

export const patientChatMessages: ReadonlyArray<PatientChatMessage> = [
  {
    patientId: "A",
    side: "left",
    text: "副作用我肯定会担心，但我更怕的是复发。如果一种治疗真的能降低复发风险、让我活得更久，只要副作用在能承受的范围内，我愿意接受。",
  },
  {
    patientId: "A",
    side: "left",
    text: "如果是比较新的疫苗或者治疗方式，我会想知道它有没有经过充分验证。效果当然重要，但我也会担心有没有还没发现的长期副作用。",
  },
  {
    patientId: "B",
    side: "right",
    text: "我不觉得只要能延长生存时间就什么副作用都可以接受。如果治疗让我长期非常虚弱、疼痛，或者生活完全不能自理，我也会考虑这样的治疗到底值不值得。",
  },
  {
    patientId: "B",
    side: "right",
    text: "我希望效果好，但副作用也不能太严重。对我来说不是简单选‘疗效’还是‘安全’，而是想知道到底能获得多大收益、又要承担多少风险。",
  },
  {
    patientId: "C",
    side: "left",
    text: "治疗结束以后最担心的就是不知道什么时候会会不会再复发。如果新的治疗能明显降低复发和转移的可能，我对短期的一些副作用可能会更能接受。",
  },
  {
    patientId: "C",
    side: "left",
    text: "除了副作用，我还会考虑这个药贵不贵。如果治疗效果很好，但费用高到家里承担不起，我也会放弃这种治疗方式。",
  },
  {
    patientId: "D",
    side: "right",
    text: "如果副作用只是短期不舒服，我可能可以接受，但如果会让我长期不能工作、不能照顾孩子和家人，我就会特别在意。",
  },
  {
    patientId: "D",
    side: "right",
    text: "如果本身能选的治疗就不多，只要新的治疗确实有效，我觉得很多和我一样的人都会愿意多承担一点风险。",
  },
];

/* ----------------------------------------------------------------------------
 * Sidebar anchors (matches Heading 架构表 in the optimization plan)
 * -------------------------------------------------------------------------- */

export const sustainabilityAnchors = [
  { id: "sustainability", label: "Sustainability", level: 1, status: "existing" },
  { id: "overview", label: "Overview", level: 2, status: "existing" },
  {
    id: "sst-qn",
    label: "SST-QN — SDG Synergy–Trade-off Quantification Network",
    level: 2,
    status: "existing",
  },
  {
    id: "sdg-impact-framework",
    label: "SET–Develop–Grow Impact Framework",
    level: 2,
    status: "existing",
  },
  {
    id: "framework-architecture",
    label: "Framework Architecture",
    level: 3,
    status: "existing",
  },
  {
    id: "set-core-challenges",
    label: "SET — Addressing Core Challenges",
    level: 3,
    status: "existing",
  },
  {
    id: "sdg3-health",
    label: "SDG 3 — Good Health and Well-being",
    level: 4,
    status: "existing",
  },
  { id: "sdg3-stakeholder", label: "S — Stakeholder Insights", level: 5, status: "existing" },
  { id: "sdg3-consequences", label: "C — Consequences", level: 5, status: "existing" },
  { id: "sdg3-alignment", label: "A — Alignment", level: 5, status: "existing" },
  { id: "sdg3-legacy", label: "L — Legacy", level: 5, status: "existing" },
  { id: "sdg3-evidence", label: "E — Evidence", level: 5, status: "existing" },
  {
    id: "sdg9-health",
    label: "SDG 9 — Industry, Innovation and Infrastructure",
    level: 4,
    status: "existing",
  },
  { id: "sdg9-stakeholder", label: "S — Stakeholder Insights", level: 5, status: "existing" },
  { id: "sdg9-consequences", label: "C — Consequences", level: 5, status: "existing" },
  { id: "sdg9-alignment", label: "A — Alignment", level: 5, status: "existing" },
  { id: "sdg9-legacy", label: "L — Legacy", level: 5, status: "existing" },
  { id: "sdg9-evidence", label: "E — Evidence", level: 5, status: "existing" },
  {
    id: "sdg12-health",
    label: "SDG 12 — Responsible Consumption and Production",
    level: 4,
    status: "existing",
  },
  { id: "sdg12-stakeholder", label: "S — Stakeholder Insights", level: 5, status: "existing" },
  { id: "sdg12-consequences", label: "C — Consequences", level: 5, status: "existing" },
  { id: "sdg12-alignment", label: "A — Alignment", level: 5, status: "existing" },
  { id: "sdg12-legacy", label: "L — Legacy", level: 5, status: "existing" },
  { id: "sdg12-evidence", label: "E — Evidence", level: 5, status: "existing" },
  {
    id: "grow",
    label: "GROW — Quality Education (SDG 4)",
    level: 3,
    status: "existing",
  },
  { id: "grow-stakeholder", label: "S — Stakeholder Insights", level: 5, status: "existing" },
  { id: "grow-consequences", label: "C — Consequences", level: 5, status: "existing" },
  { id: "grow-alignment", label: "A — Alignment", level: 5, status: "existing" },
  { id: "grow-legacy", label: "L — Legacy", level: 5, status: "reserved" },
  { id: "grow-evidence", label: "E — Evidence", level: 5, status: "reserved" },
] as const satisfies ReadonlyArray<SustainabilityAnchor>;
