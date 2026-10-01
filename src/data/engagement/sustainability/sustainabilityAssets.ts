/**
 * Sustainability page asset registry.
 *
 * Semantic key / file name / path / alt mapping for every image and PDF
 * attachment. Source assets live under `src/assets/wiki/sustainability/`
 * and `public/assets/docs/`.
 */

export type SustainabilityAssetKind = "image" | "pdf";

export interface SustainabilityAssetEntry {
  kind: SustainabilityAssetKind;
  fileName: string;
  localSourcePath: string;
  targetPath: string;
  uploadUrl: string | null;
  alt: string;
  section: string;
  usageNote?: string;
  webPath?: string | null;
  pdfPages?: number;
}

export const sustainabilityAssets = {
  // --- New Visual Assets (Overview up to SD3) ---
  overviewMapOfStakeholders: {
    kind: "image",
    fileName: "sustainability-overview-map-of-stakeholders.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-map-of-stakeholders.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-overview-map-of-stakeholders.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-map-of-stakeholders.avif",
    alt: "Figure 1: Map of stakeholders",
    section: "Overview — Stakeholders Map",
  },
  overviewScaleModel: {
    kind: "image",
    fileName: "sustainability-overview-scale-model.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-scale-model.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-overview-scale-model.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-scale-model.avif",
    alt: "Figure 2: SCALE Model",
    section: "Overview — SCALE Model",
  },
  overviewSstQnNetwork: {
    kind: "image",
    fileName: "sustainability-overview-sst-qn-network.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-sst-qn-network.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-overview-sst-qn-network.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-sst-qn-network.avif",
    alt: "Figure 3: SDG Synergy–Trade-off Quantification Network",
    section: "Overview — SST-QN Overview",
  },
  overviewReusableToolkit: {
    kind: "image",
    fileName: "sustainability-overview-reusable-toolkit.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-overview-reusable-toolkit.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-overview-reusable-toolkit.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-reusable-toolkit.avif",
    alt: "Figure 4: Reusable Sustainability Toolkit",
    section: "Overview — Reusable Toolkit",
  },
  sstQnStatusClassification: {
    kind: "image",
    fileName: "sustainability-sst-qn-status-classification.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sst-qn-status-classification.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sst-qn-status-classification.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-status-classification.avif",
    alt: "Figure 4: SST-QN Interaction Status Classification",
    section: "SST-QN — Status Classification",
  },
  sstQnBoundaryMatrix: {
    kind: "image",
    fileName: "sustainability-sst-qn-boundary-matrix.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sst-qn-boundary-matrix.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sst-qn-boundary-matrix.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-boundary-matrix.avif",
    alt: "Figure 5: Pre-specified Direct-edge Boundary Matrix",
    section: "SST-QN — Boundary Matrix",
  },
  sstQnInteractionScores: {
    kind: "image",
    fileName: "sustainability-sst-qn-interaction-scores.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sst-qn-interaction-scores.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sst-qn-interaction-scores.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sst-qn-interaction-scores.avif",
    alt: "Figure 6: Direct Interaction Scores Among the 17 SDGs",
    section: "SST-QN — Direct Interaction Scores",
  },
  frameworkSetDevelopGrow: {
    kind: "image",
    fileName: "sustainability-framework-set-develop-grow.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-framework-set-develop-grow.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-framework-set-develop-grow.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-framework-set-develop-grow.avif",
    alt: "Figure 7: SET-DEVELOP-GROW Impact Framework (SDG Impact Framework)",
    section: "SET-DEVELOP-GROW Impact Framework",
  },
  sdg3StakeholdersDistribution: {
    kind: "image",
    fileName: "sustainability-sdg3-stakeholders-distribution.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-stakeholders-distribution.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sdg3-stakeholders-distribution.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg3-stakeholders-distribution.avif",
    alt: "Engaged 49 stakeholders across five groups",
    section: "SDG 3 — Evidence",
  },
  sdg3TraceableImprovements: {
    kind: "image",
    fileName: "sustainability-sdg3-traceable-improvements.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg3-traceable-improvements.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sdg3-traceable-improvements.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg3-traceable-improvements.avif",
    alt: "Eight traceable project improvements",
    section: "SDG 3 — Evidence",
  },
  sdg9TraceableExpertFeedback: {
    kind: "image",
    fileName: "sustainability-sdg9-traceable-expert-feedback.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-sdg9-traceable-expert-feedback.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-sdg9-traceable-expert-feedback.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-traceable-expert-feedback.avif",
    alt: "Documented 7 traceable expert feedback records",
    section: "SDG 9 — Evidence",
  },
  synbioClassroomPathway: {
    kind: "image",
    fileName: "sustainability-synbio-classroom-pathway.png",
    localSourcePath: "src/assets/wiki/sustainability/sustainability-synbio-classroom-pathway.png",
    targetPath: "src/assets/wiki/sustainability/sustainability-synbio-classroom-pathway.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-synbio-classroom-pathway.avif",
    alt: "SynBio Classroom research experience pathway (Know → Experiment → Analyze → Decide → Design)",
    section: "Engagement — SynBio Classroom",
  },

  // --- PDF Assets ---
  sstQnModelConstruction09: {
    kind: "pdf",
    fileName: "sustainability-sst-qn-model-construction.pdf",
    localSourcePath: "public/assets/docs/sustainability-sst-qn-model-construction.pdf",
    targetPath: "public/assets/docs/sustainability-sst-qn-model-construction.pdf",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/docs/sustainability-sst-qn-model-construction.pdf",
    alt: "SST-QN SDG 模型构建方法论与完整评分矩阵",
    section: "SST-QN 章节末尾 — 模型构建详细文档",
    webPath: "assets/docs/sustainability-sst-qn-model-construction.pdf",
    pdfPages: 53,
  },

  // --- Legacy bindings preserved for backward-compatibility ---
  overviewSstQnPreview01: {
    kind: "image",
    fileName: "sustainability-overview-sst-qn-preview-01.png",
    localSourcePath: "src/assets/wiki/sustainability-overview-sst-qn-preview-01.png",
    targetPath: "src/assets/wiki/sustainability-overview-sst-qn-preview-01.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-sst-qn-preview-01.avif",
    alt: "SST-QN SDG 协同与权衡量化网络概念示意图",
    section: "Overview",
  },
  overviewScaleFramework03: {
    kind: "image",
    fileName: "sustainability-overview-scale-framework-03.png",
    localSourcePath: "src/assets/wiki/sustainability-overview-scale-framework-03.png",
    targetPath: "src/assets/wiki/sustainability-overview-scale-framework-03.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-overview-scale-framework-03.avif",
    alt: "SCALE Framework 利益相关者动态改进机制流程图",
    section: "Overview",
  },
  frameworkSetDevelopGrow06: {
    kind: "image",
    fileName: "sustainability-framework-set-develop-grow-06.png",
    localSourcePath: "src/assets/wiki/sustainability-framework-set-develop-grow-06.png",
    targetPath: "src/assets/wiki/sustainability-framework-set-develop-grow-06.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-framework-set-develop-grow-06.avif",
    alt: "SET-DEVELOP-GROW 三层递进影响框架图",
    section: "SET-DEVELOP-GROW",
  },
  setStakeholderOverview07: {
    kind: "image",
    fileName: "sustainability-set-stakeholder-overview-07.png",
    localSourcePath: "src/assets/wiki/sustainability-set-stakeholder-overview-07.png",
    targetPath: "src/assets/wiki/sustainability-set-stakeholder-overview-07.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-set-stakeholder-overview-07.avif",
    alt: "利益相关者的参与总览",
    section: "SET",
  },
  sdg9BatchProjection: {
    kind: "image",
    fileName: "sustainability-sdg9-batch-projection.png",
    localSourcePath: "src/assets/wiki/sustainability-sdg9-batch-projection.png",
    targetPath: "src/assets/wiki/sustainability-sdg9-batch-projection.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-batch-projection.avif",
    alt: "Scenario-based Batch Failure Projection 批次失败情景预测图",
    section: "SDG 9",
  },
  sdg9Evidence: {
    kind: "image",
    fileName: "sustainability-sdg9-evidence.png",
    localSourcePath: "src/assets/wiki/sustainability-sdg9-evidence.png",
    targetPath: "src/assets/wiki/sustainability-sdg9-evidence.png",
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability-sdg9-evidence.avif",
    alt: "SDG 9 证据链统计图",
    section: "SDG 9",
  },
} as const satisfies Record<string, SustainabilityAssetEntry>;

export type SustainabilityAssetKey = keyof typeof sustainabilityAssets;

export type SustainabilityImageAssetKey = {
  [K in SustainabilityAssetKey]: (typeof sustainabilityAssets)[K]["kind"] extends "image"
    ? K
    : never;
}[SustainabilityAssetKey];

export type SustainabilityPdfAssetKey = {
  [K in SustainabilityAssetKey]: (typeof sustainabilityAssets)[K]["kind"] extends "pdf"
    ? K
    : never;
}[SustainabilityAssetKey];
