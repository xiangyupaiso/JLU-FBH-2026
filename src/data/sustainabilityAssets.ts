/**
 * Sustainability page asset registry.
 *
 * Semantic key / file name / path / alt mapping for every image and PDF
 * attachment listed in section 4 of
 * 文案集/Human Practice/Sustainability-优化计划书.md.
 *
 * The original Feishu-exported assets live under
 * `文案集/Human Practice/图片和附件`. Phase 1 renames them according to the
 * semantic naming list, moves them into `src/assets/wiki`, and uploads them
 * through the iGEM Wiki uploads tool (iGEM forbids external CDNs), after
 * which `uploadUrl` is back-filled with the iGEM server URL.
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
  /** Official iGEM server URL; `null` until the Phase 1 upload is completed */
  uploadUrl: string | null;
  alt: string;
  /** Page section the asset belongs to */
  section: string;
  /** Reuse / rendering constraints, when any */
  usageNote?: string;
  /**
   * Vite-base-relative URL for assets served from `public/` (e.g. PDFs).
   * Resolve with `import.meta.env.BASE_URL + webPath`; `null` until the
   * asset exists under `public/`.
   */
  webPath?: string | null;
  /** PDF page count (used by the fallback toolbar of `PdfViewerModal`) */
  pdfPages?: number;
}

export const sustainabilityAssets = {
  overviewScaleFramework03: {
    kind: "image",
    fileName: "sustainability-overview-scale-framework-03.png",
    localSourcePath: "文案集/Human Practice/图片和附件/filename 1.png",
    targetPath:
      "src/assets/wiki/sustainability-overview-scale-framework-03.png",
    uploadUrl: null,
    alt: "SCALE Framework 利益相关者动态改进机制流程图",
    section: "Overview — SCALE Framework 流程图",
  },
  frameworkSetDevelopGrow06: {
    kind: "image",
    fileName: "sustainability-framework-set-develop-grow-06.png",
    localSourcePath: "文案集/Human Practice/图片和附件/image.png",
    targetPath:
      "src/assets/wiki/sustainability-framework-set-develop-grow-06.png",
    uploadUrl: null,
    alt: "SET-DEVELOP-GROW 三层递进影响框架图",
    section: "SET–DEVELOP–GROW Impact Framework — 三层框架图",
  },
  setStakeholderOverview07: {
    kind: "image",
    fileName: "sustainability-set-stakeholder-overview-07.png",
    localSourcePath: "文案集/Human Practice/图片和附件/image 2.png",
    targetPath:
      "src/assets/wiki/sustainability-set-stakeholder-overview-07.png",
    uploadUrl: null,
    alt: "6 个领域 43 名利益相关者的参与总览",
    section: "SET → Addressing Core Challenges — 利益相关者总览图",
  },
  sstQnModelConstruction09: {
    kind: "pdf",
    fileName: "sustainability-sst-qn-model-construction.pdf",
    localSourcePath: "文案集/Human Practice/图片和附件/SDG 模型构建.pdf",
    targetPath:
      "public/assets/docs/sustainability-sst-qn-model-construction.pdf",
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
