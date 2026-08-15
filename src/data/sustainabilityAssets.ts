/**
 * Sustainability page asset registry.
 *
 * Semantic key / file name / path / alt mapping for every image and PDF
 * attachment. Source assets live under
 * `文案集/Human Practice/sustainability/图片和附件`. The mapping below was
 * corrected against `Sustainability.md` (see the v2 optimization plan §2.1):
 *
 *   - `image 3.png`       → SST-QN overview preview
 *   - `filename 1.png`    → SDG association figure (replaced by SdgDimensionChord)
 *   - `filename 2.png`    → SCALE framework flow
 *   - `image 4.png`       → SET–DEVELOP–GROW framework
 *   - `image 5.png`       → SET stakeholder overview
 *   - `image 6.png`       → Scenario-based batch failure projection (SDG 9 C)
 *   - `ChatGPT Image …`   → SDG 9 evidence figure
 *
 * `uploadUrl` stays `null` until the iGEM Wiki uploads step is completed; the
 * bundled copies under `src/assets/wiki` are what the page renders in the
 * meantime.
 */

export type SustainabilityAssetKind = "image" | "pdf";

export interface SustainabilityAssetEntry {
  kind: SustainabilityAssetKind;
  /** Semantic file name defined by the rename list (统一前缀 `sustainability-`) */
  fileName: string;
  /** Original asset path relative to the repository root (pre-rename source) */
  localSourcePath: string;
  /** Planned bundled asset path relative to the repository root */
  targetPath: string;
  /** Official iGEM server URL; `null` until the upload is completed */
  uploadUrl: string | null;
  alt: string;
  /** Page section the asset belongs to */
  section: string;
  /** Reuse / rendering constraints, when any */
  usageNote?: string;
  /**
   * Vite-base-relative URL for assets served from `public/` (e.g. PDFs).
   * Resolve with `import.meta.env.BASE_URL + webPath`.
   */
  webPath?: string | null;
  /** PDF page count (used by the fallback toolbar of `PdfViewerModal`) */
  pdfPages?: number;
}

export const sustainabilityAssets = {
  overviewSstQnPreview01: {
    kind: "image",
    fileName: "sustainability-overview-sst-qn-preview-01.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/image 3.png",
    targetPath: "src/assets/wiki/sustainability-overview-sst-qn-preview-01.png",
    uploadUrl: null,
    alt: "SST-QN SDG 协同与权衡量化网络概念示意图",
    section: "Overview — SST-QN 简述配图",
  },
  overviewScaleFramework03: {
    kind: "image",
    fileName: "sustainability-overview-scale-framework-03.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/filename 2.png",
    targetPath: "src/assets/wiki/sustainability-overview-scale-framework-03.png",
    uploadUrl: null,
    alt: "SCALE Framework 利益相关者动态改进机制流程图",
    section: "Overview — SCALE Framework 流程图",
  },
  frameworkSetDevelopGrow06: {
    kind: "image",
    fileName: "sustainability-framework-set-develop-grow-06.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/image 4.png",
    targetPath: "src/assets/wiki/sustainability-framework-set-develop-grow-06.png",
    uploadUrl: null,
    alt: "SET-DEVELOP-GROW 三层递进影响框架图",
    section: "SET–DEVELOP–GROW Impact Framework — 三层框架图",
  },
  setStakeholderOverview07: {
    kind: "image",
    fileName: "sustainability-set-stakeholder-overview-07.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/image 5.png",
    targetPath: "src/assets/wiki/sustainability-set-stakeholder-overview-07.png",
    uploadUrl: null,
    alt: "利益相关者的参与总览",
    section: "SET → Addressing Core Challenges — 利益相关者总览图",
  },
  sdg9BatchProjection: {
    kind: "image",
    fileName: "sustainability-sdg9-batch-projection.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/image 6.png",
    targetPath: "src/assets/wiki/sustainability-sdg9-batch-projection.png",
    uploadUrl: null,
    alt: "Scenario-based Batch Failure Projection 批次失败情景预测图",
    section: "SDG 9 → C — Consequences（环境影响）",
  },
  sdg9Evidence: {
    kind: "image",
    fileName: "sustainability-sdg9-evidence.png",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/ChatGPT Image 2026年8月11日 20_33_38.png",
    targetPath: "src/assets/wiki/sustainability-sdg9-evidence.png",
    uploadUrl: null,
    alt: "SDG 9 证据链统计图",
    section: "SDG 9 → E — Evidence",
  },
  sstQnModelConstruction09: {
    kind: "pdf",
    fileName: "sustainability-sst-qn-model-construction.pdf",
    localSourcePath: "文案集/Human Practice/sustainability/图片和附件/SDG 模型构建.pdf",
    targetPath: "public/assets/docs/sustainability-sst-qn-model-construction.pdf",
    uploadUrl: null,
    alt: "SST-QN SDG 模型构建方法论与完整评分矩阵",
    section: "SST-QN 章节末尾 — 模型构建详细文档（“SDG 模型构建.pdf”）",
    usageNote:
      "作为 PdfViewerModal 内嵌预览或下载链接卡片使用，需上传至 iGEM 服务器",
    webPath: "assets/docs/sustainability-sst-qn-model-construction.pdf",
    pdfPages: 53,
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
