/**
 * Results page — asset registry.
 *
 * Double-track contract (see WIKI_ARCHITECTURE_SPEC.md §4.2): every entry
 * carries the local source path it was prepared from, the bundled preview
 * import, and the iGEM static URL it will be served from once uploaded.
 * `uploadUrl` stays an empty string until the asset owner confirms the upload —
 * the resolver then falls back to the bundled file, so nothing here has to
 * change when the CDN copies go live. The pending batch is listed in
 * `upload-ready/results-upload-list.json`.
 *
 * Preparation (PNG/JPEG -> flattened WebP q82, long edge capped at 2200 px) is
 * recorded in `scripts/prepare-results-assets.py`.
 *
 * Keys follow the manuscript, not the file system:
 *
 * - `fig01` … `fig34` — the manuscript's own numbered figures. `caption` is the
 *   manuscript's italic caption with its `Figure N.` label removed, because the
 *   reader stamps `FIG. nn` from a CSS counter (wiki-rebuild.css). Keeping the
 *   label out of the copy is what makes the stamp and the manuscript agree.
 *   `fig18a`/`fig18b` share number 18 and `fig23a/b/c` are the three panels of
 *   Figure 23, so the counter and the manuscript stay aligned.
 * - `pxd…`, `singleCell…`, `ihc…`, `structural…` — the fourteen unnumbered
 *   supplementary charts of §1. They carry no caption and deliberately do not
 *   enter the figure counter, because the manuscript never numbered them.
 */

const fig01 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig01-round1-elispot-wells-83c1c922addf.webp";
const fig02 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig02-round1-k562-killing-ebe3e83131e7.webp";
const fig03 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig03-round1-cd8-cd69-flow-da78604c08cb.webp";
const fig04 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig04-combined-plasmid-map-2d940f4c0e33.webp";
const fig05 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig05-template-linearisation-gel-72917729b4d1.webp";
const fig06 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig06-back-splice-junction-sanger-67bc10b3c002.webp";
const fig07 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig07-dc-maturation-flow-a593789c3511.webp";
const fig08 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig08-dc-maturation-quantification-eb3442a427a1.webp";
const fig09 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig09-anti-flag-western-blot-d1ae19c681b2.webp";
const fig10 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig10-cd8-cd69-flow-3ab0b91dcd36.webp";
const fig11 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig11-cd8-cd69-quantification-d2fb1a8cf2f2.webp";
const fig12 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig12-cd8-cd28-flow-98f30913e128.webp";
const fig13 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig13-cd8-cd28-quantification-b86f5f931f87.webp";
const fig14 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig14-effector-memory-flow-36be520d3f70.webp";
const fig15 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig15-effector-memory-quantification-c65ae7edf22c.webp";
const fig16 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig16-round2-elispot-wells-eb12c20a07f3.webp";
const fig17 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig17-mda-mb-231-killing-bb31d49e2dcb.webp";
const fig18a = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig18a-stability-gel-1ec8018bad99.webp";
const fig18b = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig18b-rna-remaining-curve-ee0f8d8319e3.webp";
const fig19 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig19-off-target-cytotoxicity-45f537789549.webp";
const fig20 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig20-lnp-dose-viability-f697e90497df.webp";
const fig21 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig21-lentiviral-plasmid-map-4957638e1cd0.webp";
const fig22 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig22-gfp-transduction-microscopy-87f75a7a4539.webp";
const fig23a = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23a-sort-gate-fsc-ssc-ea1d26c3b39a.webp";
const fig23b = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23b-sort-gate-singlets-f7df73d16ac8.webp";
const fig23c = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23c-sort-gate-gfp-2cb124b0a513.webp";
const fig24 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig24-trop2-mrna-rt-pcr-629acb765595.webp";
const fig25 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig25-surface-trop2-flow-4919115ca0d1.webp";
const fig26 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig26-excised-tumours-95674e1829c8.webp";
const fig27 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig27-immunisation-scheme-672e60660c74.webp";
const fig28 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig28-tumour-growth-curves-6b91f6ac7322.webp";
const fig29 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig29-cd8-granzyme-b-immunofluorescence-c9844bdf173c.webp";
const fig30 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig30-splenic-dc-maturation-68c5fff6bf66.webp";
const fig31 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig31-splenic-cd69-activation-6fe2eefa7c6e.webp";
const fig32 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig32-splenic-central-memory-4c40089c22cf.webp";
const fig33 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig33-splenic-ifn-gamma-f3d7ee74932a.webp";
const fig34 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig34-splenic-granzyme-b-25e78a196546.webp";

const proteomicsPxd024322Volcano = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd024322-volcano-be7308c0c5df.webp";
const proteomicsPxd024322Abundance = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd024322-abundance-71daf7a2517e.webp";
const proteomicsPxd028102Volcano = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd028102-volcano-4393b47cfd33.webp";
const proteomicsPxd028102Abundance = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd028102-abundance-822dc2fb198a.webp";

const singleCellUmap = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-singlecell-celltype-umap-e331296d36c5.webp";
const singleCellDetection = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-singlecell-malignant-detection-6b4a0e1bbcee.webp";

const ihcPanel1 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-1-ecff9d465696.webp";
const ihcPanel2 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-2-8df2da9033bf.webp";
const ihcPanel3 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-3-072359efd635.webp";
const ihcPanel4 = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-4-226cc07ccd8e.webp";

const structuralBurialVsFill = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-burial-vs-fill-scatter-752578260b0e.webp";
const structuralBurialHeatmap = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-p2-p9-burial-heatmap-8419592e0f01.webp";
const structuralAnchorBurial = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-anchor-burial-by-peptide-550960558323.webp";
const structuralBurialFill = "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-burial-fill-by-peptide-4f8aab0149c6.webp";

export interface ResultsAssetEntry {
  kind: "image";
  fileName: string;
  localSourcePath: string;
  localSrc: string;
  uploadUrl: string;
  alt: string;
  caption?: string;
  section: string;
}

export const resultsAssets = {
  /* ---------------------------------------- §1.1.1 proteomic evidence */
  proteomicsPxd024322Volcano: {
    kind: "image",
    fileName: "results-proteomics-pxd024322-volcano.webp",
    localSourcePath:
      "src/assets/wiki/results/results-proteomics-pxd024322-volcano.webp",
    localSrc: proteomicsPxd024322Volcano,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd024322-volcano-be7308c0c5df.webp",
    alt: "Volcano plot of differential protein abundance in the PXD024322 triple-negative breast cancer versus normal breast cohort, with the four candidate antigens highlighted",
    section: "Antigen selection",
  },
  proteomicsPxd024322Abundance: {
    kind: "image",
    fileName: "results-proteomics-pxd024322-abundance.webp",
    localSourcePath:
      "src/assets/wiki/results/results-proteomics-pxd024322-abundance.webp",
    localSrc: proteomicsPxd024322Abundance,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd024322-abundance-71daf7a2517e.webp",
    alt: "Box plots of TROP2, B7-H4, Nectin-4 and LIV-1 protein abundance in the unpaired PXD024322 cohort comparison",
    section: "Antigen selection",
  },
  proteomicsPxd028102Volcano: {
    kind: "image",
    fileName: "results-proteomics-pxd028102-volcano.webp",
    localSourcePath:
      "src/assets/wiki/results/results-proteomics-pxd028102-volcano.webp",
    localSrc: proteomicsPxd028102Volcano,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd028102-volcano-4393b47cfd33.webp",
    alt: "Volcano plot of differential protein abundance in the paired tumour versus adjacent-normal PXD028102 design, with the analysed candidates highlighted",
    section: "Antigen selection",
  },
  proteomicsPxd028102Abundance: {
    kind: "image",
    fileName: "results-proteomics-pxd028102-abundance.webp",
    localSourcePath:
      "src/assets/wiki/results/results-proteomics-pxd028102-abundance.webp",
    localSrc: proteomicsPxd028102Abundance,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-proteomics-pxd028102-abundance-822dc2fb198a.webp",
    alt: "Box plots of candidate protein abundance in the paired tumour versus adjacent-normal PXD028102 design",
    section: "Antigen selection",
  },

  /* -------------------------------- §1.1.2 single-cell transcriptomics */
  singleCellUmap: {
    kind: "image",
    fileName: "results-singlecell-celltype-umap.webp",
    localSourcePath:
      "src/assets/wiki/results/results-singlecell-celltype-umap.webp",
    localSrc: singleCellUmap,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-singlecell-celltype-umap-e331296d36c5.webp",
    alt: "UMAP embedding of the 39,324 quality-passed cells of the GSE176078 triple-negative breast cancer subset, coloured by annotated cell type",
    section: "Antigen selection",
  },
  singleCellDetection: {
    kind: "image",
    fileName: "results-singlecell-malignant-detection.webp",
    localSourcePath:
      "src/assets/wiki/results/results-singlecell-malignant-detection.webp",
    localSrc: singleCellDetection,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-singlecell-malignant-detection-6b4a0e1bbcee.webp",
    alt: "Per-cell-type expression of TACSTD2, NECTIN4, VTCN1 and SLC39A6 across the malignant, immune and stromal compartments, showing malignant-cell enrichment for the four candidate genes",
    section: "Antigen selection",
  },

  /* ----------------------------- §1.1.4 immunohistochemistry panels */
  ihcPanel1: {
    kind: "image",
    fileName: "results-ihc-panel-1.webp",
    localSourcePath: "src/assets/wiki/results/results-ihc-panel-1.webp",
    localSrc: ihcPanel1,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-1-ecff9d465696.webp",
    alt: "Published immunohistochemistry panels of candidate antigen staining in triple-negative breast cancer tissue, first of four reviewed antigens",
    section: "Antigen selection",
  },
  ihcPanel2: {
    kind: "image",
    fileName: "results-ihc-panel-2.webp",
    localSourcePath: "src/assets/wiki/results/results-ihc-panel-2.webp",
    localSrc: ihcPanel2,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-2-8df2da9033bf.webp",
    alt: "Published immunohistochemistry staining panels and their quantification for a candidate antigen in triple-negative breast cancer tissue, second of four reviewed antigens",
    section: "Antigen selection",
  },
  ihcPanel3: {
    kind: "image",
    fileName: "results-ihc-panel-3.webp",
    localSourcePath: "src/assets/wiki/results/results-ihc-panel-3.webp",
    localSrc: ihcPanel3,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-3-072359efd635.webp",
    alt: "Published immunohistochemistry tissue cores of candidate antigen staining in triple-negative breast cancer, third of four reviewed antigens",
    section: "Antigen selection",
  },
  ihcPanel4: {
    kind: "image",
    fileName: "results-ihc-panel-4.webp",
    localSourcePath: "src/assets/wiki/results/results-ihc-panel-4.webp",
    localSrc: ihcPanel4,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-ihc-panel-4-226cc07ccd8e.webp",
    alt: "Published immunohistochemistry tissue sections of candidate antigen staining in triple-negative breast cancer, fourth of four reviewed antigens",
    section: "Antigen selection",
  },

  /* ---------------------------- §1.2.2 structural validation charts */
  structuralBurialVsFill: {
    kind: "image",
    fileName: "results-structural-burial-vs-fill-scatter.webp",
    localSourcePath:
      "src/assets/wiki/results/results-structural-burial-vs-fill-scatter.webp",
    localSrc: structuralBurialVsFill,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-burial-vs-fill-scatter-752578260b0e.webp",
    alt: "Scatter plot of position-9 side-chain burial against position-9 fill ratio for the seventeen candidate peptides, showing that burial alone does not separate the geometry classes",
    section: "Epitope screening",
  },
  structuralBurialHeatmap: {
    kind: "image",
    fileName: "results-structural-p2-p9-burial-heatmap.webp",
    localSourcePath:
      "src/assets/wiki/results/results-structural-p2-p9-burial-heatmap.webp",
    localSrc: structuralBurialHeatmap,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-p2-p9-burial-heatmap-8419592e0f01.webp",
    alt: "Heat map of position-2 and position-9 side-chain burial across the seventeen candidate peptides, showing that both anchor residues read near-complete burial in most models",
    section: "Epitope screening",
  },
  structuralAnchorBurial: {
    kind: "image",
    fileName: "results-structural-anchor-burial-by-peptide.webp",
    localSourcePath:
      "src/assets/wiki/results/results-structural-anchor-burial-by-peptide.webp",
    localSrc: structuralAnchorBurial,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-anchor-burial-by-peptide-550960558323.webp",
    alt: "Position-2 anchor burial of each candidate peptide across the five folded models, with the two rejected peptides annotated",
    section: "Epitope screening",
  },
  structuralBurialFill: {
    kind: "image",
    fileName: "results-structural-burial-fill-by-peptide.webp",
    localSourcePath:
      "src/assets/wiki/results/results-structural-burial-fill-by-peptide.webp",
    localSrc: structuralBurialFill,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-structural-burial-fill-by-peptide-4f8aab0149c6.webp",
    alt: "Position-9 buried side-chain volume of each candidate peptide against the 60 per cent fill-ratio threshold, showing the two peptides that fail the criterion",
    section: "Epitope screening",
  },

  /* -------------------------------------------- manuscript figures */
  fig01: {
    kind: "image",
    fileName: "results-fig01-round1-elispot-wells.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig01-round1-elispot-wells.webp",
    localSrc: fig01,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig01-round1-elispot-wells-83c1c922addf.webp",
    alt: "Photograph of the Round 1 IFN-γ ELISpot membrane with the raw spot-forming-cell count printed above each well for all thirteen single-epitope constructs",
    caption: "Round 1 ELISpot wells and counts.",
    section: "Round 1",
  },
  fig02: {
    kind: "image",
    fileName: "results-fig02-round1-k562-killing.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig02-round1-k562-killing.webp",
    localSrc: fig02,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig02-round1-k562-killing-ebe3e83131e7.webp",
    alt: "Bar chart of Calcein-AM release from K562 targets at an effector-to-target ratio of 80 to 1 for all thirteen Round 1 constructs",
    caption: "Round 1 killing of K562 by T cells primed with each construct.",
    section: "Round 1",
  },
  fig03: {
    kind: "image",
    fileName: "results-fig03-round1-cd8-cd69-flow.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig03-round1-cd8-cd69-flow.webp",
    localSrc: fig03,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig03-round1-cd8-cd69-flow-da78604c08cb.webp",
    alt: "Two-level nested gating for CD8 and CD69 flow cytometry of T cells primed with TROP2-CTL1 and TROP2-CTL2, showing the lymphocyte gate and the double-positive population within it",
    caption:
      "CD8/CD69 flow cytometry of T cells primed with TROP2-CTL1 and CTL2.",
    section: "Round 1",
  },
  fig04: {
    kind: "image",
    fileName: "results-fig04-combined-plasmid-map.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig04-combined-plasmid-map.webp",
    localSrc: fig04,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig04-combined-plasmid-map-2d940f4c0e33.webp",
    alt: "Circular map of the Combined multi-epitope vaccine plasmid pCirCure-circMEV at 5267 bp, annotating the BamHI-XhoI epitope cassette, the tPA signal sequence, the human rhinovirus IRES, the 4xmC3dP28 adjuvant, the MITD membrane-targeting signal, the FLAG tag, the HBA1 3-prime UTR, the polyA25 spacer and the T4 td permuted intron",
    caption: "Map of the Combined vaccine plasmid pCirCure-circMEV (5267 bp).",
    section: "Round 1 to Round 2",
  },
  fig05: {
    kind: "image",
    fileName: "results-fig05-template-linearisation-gel.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig05-template-linearisation-gel.webp",
    localSrc: fig05,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig05-template-linearisation-gel-72917729b4d1.webp",
    alt: "Agarose gel of the four linearised epitope-encoding transcription templates with a size marker, showing a single major species in each lane",
    caption:
      "Agarose gel verification of the four epitope-encoding linearised transcription templates.",
    section: "Combined batch release",
  },
  fig06: {
    kind: "image",
    fileName: "results-fig06-back-splice-junction-sanger.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig06-back-splice-junction-sanger.webp",
    localSrc: fig06,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig06-back-splice-junction-sanger-67bc10b3c002.webp",
    alt: "Sanger sequencing chromatogram across the back-splice junction of the Combined vaccine, showing single sharp peaks on a flat baseline across the ligation site",
    caption:
      "Sanger trace across the back-splice junction (BSJ) of the Combined vaccine.",
    section: "Combined batch release",
  },
  fig07: {
    kind: "image",
    fileName: "results-fig07-dc-maturation-flow.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig07-dc-maturation-flow.webp",
    localSrc: fig07,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig07-dc-maturation-flow-a593789c3511.webp",
    alt: "Representative CD80 against CD86 flow cytometry plots for the Blank, TROP2-1, TROP2-2, TROP2-1+2 and Combined groups, with the double-positive percentage boxed in each panel",
    caption: "CD80⁺CD86⁺ double-positive DC frequencies for each group.",
    section: "Round 2",
  },
  fig08: {
    kind: "image",
    fileName: "results-fig08-dc-maturation-quantification.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig08-dc-maturation-quantification.webp",
    localSrc: fig08,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig08-dc-maturation-quantification-eb3442a427a1.webp",
    alt: "Bar chart quantifying CD80⁺CD86⁺ dendritic-cell frequencies across the five groups with SD error bars and significance markers",
    caption: "Quantification of DC maturation across groups.",
    section: "Round 2",
  },
  fig09: {
    kind: "image",
    fileName: "results-fig09-anti-flag-western-blot.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig09-anti-flag-western-blot.webp",
    localSrc: fig09,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig09-anti-flag-western-blot-d1ae19c681b2.webp",
    alt: "Anti-FLAG Western blot of electroporated dendritic cells with a beta-actin loading control, showing a FLAG-specific band at approximately 50 kDa",
    caption: "Western blot of FLAG-tagged fusion protein in DCs.",
    section: "Round 2",
  },
  fig10: {
    kind: "image",
    fileName: "results-fig10-cd8-cd69-flow.webp",
    localSourcePath: "src/assets/wiki/results/results-fig10-cd8-cd69-flow.webp",
    localSrc: fig10,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig10-cd8-cd69-flow-3ab0b91dcd36.webp",
    alt: "Representative CD8 against CD69 flow cytometry plots after dendritic-cell and T-cell co-culture for the five groups",
    caption: "CD8⁺CD69⁺ T-cell frequencies after DC–T co-culture.",
    section: "Round 2",
  },
  fig11: {
    kind: "image",
    fileName: "results-fig11-cd8-cd69-quantification.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig11-cd8-cd69-quantification.webp",
    localSrc: fig11,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig11-cd8-cd69-quantification-d2fb1a8cf2f2.webp",
    alt: "Bar chart quantifying CD8⁺CD69⁺ T-cell frequencies across the five groups with SD error bars",
    caption: "Quantification of CD8⁺CD69⁺ frequencies across groups.",
    section: "Round 2",
  },
  fig12: {
    kind: "image",
    fileName: "results-fig12-cd8-cd28-flow.webp",
    localSourcePath: "src/assets/wiki/results/results-fig12-cd8-cd28-flow.webp",
    localSrc: fig12,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig12-cd8-cd28-flow-98f30913e128.webp",
    alt: "Representative CD8 against CD28 flow cytometry plots after dendritic-cell and T-cell co-culture for the five groups",
    caption: "CD8⁺CD28⁺ T-cell frequencies after DC–T co-culture.",
    section: "Round 2",
  },
  fig13: {
    kind: "image",
    fileName: "results-fig13-cd8-cd28-quantification.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig13-cd8-cd28-quantification.webp",
    localSrc: fig13,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig13-cd8-cd28-quantification-b86f5f931f87.webp",
    alt: "Bar chart quantifying CD8⁺CD28⁺ T-cell frequencies across the five groups with SD error bars and significance markers",
    caption: "Quantification of CD8⁺CD28⁺ frequencies across groups.",
    section: "Round 2",
  },
  fig14: {
    kind: "image",
    fileName: "results-fig14-effector-memory-flow.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig14-effector-memory-flow.webp",
    localSrc: fig14,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig14-effector-memory-flow-36be520d3f70.webp",
    alt: "Representative CD45RO against CCR7 flow cytometry plots within the CD8⁺ gate for Blank, TROP2-1, TROP2-2, TROP2-1+2 and Combined",
    caption: "CD45RO⁺CCR7⁻ effector-memory frequencies within CD8⁺ T cells.",
    section: "Round 2",
  },
  fig15: {
    kind: "image",
    fileName: "results-fig15-effector-memory-quantification.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig15-effector-memory-quantification.webp",
    localSrc: fig15,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig15-effector-memory-quantification-c65ae7edf22c.webp",
    alt: "Bar chart quantifying CD45RO⁺CCR7⁻ effector-memory frequencies across the five groups with SD error bars",
    caption: "Quantification of CD45RO⁺CCR7⁻ frequencies across groups.",
    section: "Round 2",
  },
  fig16: {
    kind: "image",
    fileName: "results-fig16-round2-elispot-wells.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig16-round2-elispot-wells.webp",
    localSrc: fig16,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig16-round2-elispot-wells-eb12c20a07f3.webp",
    alt: "Photograph of the Round 2 IFN-γ ELISpot membrane with the spot-forming-cell count printed above each well for the five groups",
    caption: "Round 2 ELISpot wells and counts.",
    section: "Round 2",
  },
  fig17: {
    kind: "image",
    fileName: "results-fig17-mda-mb-231-killing.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig17-mda-mb-231-killing.webp",
    localSrc: fig17,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig17-mda-mb-231-killing-bb31d49e2dcb.webp",
    alt: "Line plot of Calcein-AM killing of MDA-MB-231 at effector-to-target ratios of 20 to 1, 40 to 1 and 80 to 1 for the five groups, with each point one replicate well",
    caption:
      "Killing of MDA-MB-231 by T cells primed with each construct, across E:T ratios.",
    section: "Round 2",
  },
  fig18a: {
    kind: "image",
    fileName: "results-fig18a-stability-gel.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig18a-stability-gel.webp",
    localSrc: fig18a,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig18a-stability-gel-1ec8018bad99.webp",
    alt: "Agarose gel of circRNA and its linear precursor incubated at 37 degrees Celsius and sampled at 0, 24, 48 and 72 hours, with the 2000 nucleotide marker position indicated",
    caption:
      "In vitro stability of circRNA versus linear precursor RNA at 37 °C — gel.",
    section: "Safety",
  },
  fig18b: {
    kind: "image",
    fileName: "results-fig18b-rna-remaining-curve.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig18b-rna-remaining-curve.webp",
    localSrc: fig18b,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig18b-rna-remaining-curve-ee0f8d8319e3.webp",
    alt: "Line chart of the fraction of circRNA and linear RNA remaining against incubation time, each normalised to its own zero-hour lane",
    caption: "Relative remaining RNA over time.",
    section: "Safety",
  },
  fig19: {
    kind: "image",
    fileName: "results-fig19-off-target-cytotoxicity.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig19-off-target-cytotoxicity.webp",
    localSrc: fig19,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig19-off-target-cytotoxicity-45f537789549.webp",
    alt: "Bar chart of vaccine-primed T-cell killing of four normal human cell lines against the MDA-MB-231 positive control, at effector-to-target ratios of 80 to 1 and 100 to 1, drawn on a broken y-axis",
    caption:
      "Killing of four normal cell lines and MDA-MB-231 by vaccine-primed T cells.",
    section: "Safety",
  },
  fig20: {
    kind: "image",
    fileName: "results-fig20-lnp-dose-viability.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig20-lnp-dose-viability.webp",
    localSrc: fig20,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig20-lnp-dose-viability-f697e90497df.webp",
    alt: "Dose-viability curve of empty lipid nanoparticles on dendritic cells after 24 hours, showing a plateau from 0 to 200 nanograms and a sharp fall at 400 nanograms",
    caption: "Dose–viability curve of empty LNP on DCs after 24 h.",
    section: "Safety",
  },
  fig21: {
    kind: "image",
    fileName: "results-fig21-lentiviral-plasmid-map.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig21-lentiviral-plasmid-map.webp",
    localSrc: fig21,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig21-lentiviral-plasmid-map-4957638e1cd0.webp",
    alt: "Circular map of the TROP2 overexpression lentiviral transfer plasmid pLV3-CMV-TACSTD2-3xFLAG-CopGFP-Puro at 9259 bp",
    caption:
      "Map of the TROP2 overexpression lentiviral transfer plasmid (pLV3-CMV-TACSTD2-3×FLAG-CopGFP-Puro, 9259 bp).",
    section: "In vivo",
  },
  fig22: {
    kind: "image",
    fileName: "results-fig22-gfp-transduction-microscopy.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig22-gfp-transduction-microscopy.webp",
    localSrc: fig22,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig22-gfp-transduction-microscopy-87f75a7a4539.webp",
    alt: "Bright-field, GFP-channel and merged fluorescence microscopy of 4T1 cells 48 to 72 hours after lentiviral transduction, with untransduced cells imaged under identical settings",
    caption:
      "GFP fluorescence in 4T1 cells 48–72 h after lentiviral transduction.",
    section: "In vivo",
  },
  fig23a: {
    kind: "image",
    fileName: "results-fig23a-sort-gate-fsc-ssc.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig23a-sort-gate-fsc-ssc.webp",
    localSrc: fig23a,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23a-sort-gate-fsc-ssc-ea1d26c3b39a.webp",
    alt: "First sorting gate: forward scatter against side scatter, excluding debris and retaining 68.8 per cent of acquired events",
    caption: "Three-step gating strategy for sorting GFP⁺ 4T1 cells.",
    section: "In vivo",
  },
  fig23b: {
    kind: "image",
    fileName: "results-fig23b-sort-gate-singlets.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig23b-sort-gate-singlets.webp",
    localSrc: fig23b,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23b-sort-gate-singlets-f7df73d16ac8.webp",
    alt: "Second sorting gate: forward scatter area against height, excluding doublets and retaining 89.3 per cent of the debris-excluded events",
    section: "In vivo",
  },
  fig23c: {
    kind: "image",
    fileName: "results-fig23c-sort-gate-gfp.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig23c-sort-gate-gfp.webp",
    localSrc: fig23c,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig23c-sort-gate-gfp-2cb124b0a513.webp",
    alt: "Third sorting gate: GFP fluorescence against a threshold set on untransduced 4T1, capturing 84.1 per cent of the singlets as GFP-positive",
    section: "In vivo",
  },
  fig24: {
    kind: "image",
    fileName: "results-fig24-trop2-mrna-rt-pcr.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig24-trop2-mrna-rt-pcr.webp",
    localSrc: fig24,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig24-trop2-mrna-rt-pcr-629acb765595.webp",
    alt: "Bar chart of relative TROP2 mRNA expression by RT-PCR in wild-type 4T1 and the TROP2-overexpressing line, with SD error bars",
    caption: "RT-PCR quantification of TROP2 mRNA in 4T1 cells.",
    section: "In vivo",
  },
  fig25: {
    kind: "image",
    fileName: "results-fig25-surface-trop2-flow.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig25-surface-trop2-flow.webp",
    localSrc: fig25,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig25-surface-trop2-flow-4919115ca0d1.webp",
    alt: "Flow cytometric surface TROP2 detection in wild-type 4T1 on the left and the TROP2-overexpressing line on the right",
    caption: "Flow cytometric detection of surface TROP2 on 4T1 cells.",
    section: "In vivo",
  },
  fig26: {
    kind: "image",
    fileName: "results-fig26-excised-tumours.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig26-excised-tumours.webp",
    localSrc: fig26,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig26-excised-tumours-95674e1829c8.webp",
    alt: "Photograph of excised endpoint tumours from the PBS, empty-vector and vaccine groups on a one-centimetre background grid",
    caption: "Excised tumours at endpoint (D35).",
    section: "In vivo",
  },
  fig27: {
    kind: "image",
    fileName: "results-fig27-immunisation-scheme.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig27-immunisation-scheme.webp",
    localSrc: fig27,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig27-immunisation-scheme-672e60660c74.webp",
    alt: "Immunisation scheme for the PBS control, empty-vector control and Combined circRNA vaccine groups, showing tumour inoculation on day 0, five weekly doses and the day 35 endpoint",
    caption: "Immunisation scheme for the three groups.",
    section: "In vivo",
  },
  fig28: {
    kind: "image",
    fileName: "results-fig28-tumour-growth-curves.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig28-tumour-growth-curves.webp",
    localSrc: fig28,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig28-tumour-growth-curves-6b91f6ac7322.webp",
    alt: "Tumour growth curves in cubic millimetres against study week for the PBS, empty-vector and vaccine groups, each trace one mouse",
    caption: "Tumour growth curves for the three groups.",
    section: "In vivo",
  },
  fig29: {
    kind: "image",
    fileName: "results-fig29-cd8-granzyme-b-immunofluorescence.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig29-cd8-granzyme-b-immunofluorescence.webp",
    localSrc: fig29,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig29-cd8-granzyme-b-immunofluorescence-c9844bdf173c.webp",
    alt: "CD8 and Granzyme B dual immunofluorescence of tumour sections from the PBS, empty-vector and vaccine groups, with CD8 in green, Granzyme B in red and merged panels with DAPI",
    caption: "CD8 / Granzyme B dual immunofluorescence of tumour tissue.",
    section: "In vivo",
  },
  fig30: {
    kind: "image",
    fileName: "results-fig30-splenic-dc-maturation.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig30-splenic-dc-maturation.webp",
    localSrc: fig30,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig30-splenic-dc-maturation-68c5fff6bf66.webp",
    alt: "Representative splenic dendritic-cell CD80 and CD86 flow plots for the three groups beside the corresponding quantification bar chart",
    caption: "Splenic DC CD80⁺CD86⁺ maturation.",
    section: "In vivo",
  },
  fig31: {
    kind: "image",
    fileName: "results-fig31-splenic-cd69-activation.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig31-splenic-cd69-activation.webp",
    localSrc: fig31,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig31-splenic-cd69-activation-6fe2eefa7c6e.webp",
    alt: "Representative splenic CD8⁺ T-cell CD69 flow plots for the three groups beside the corresponding quantification bar chart",
    caption: "Splenic CD8⁺ T-cell CD69⁺ early activation.",
    section: "In vivo",
  },
  fig32: {
    kind: "image",
    fileName: "results-fig32-splenic-central-memory.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig32-splenic-central-memory.webp",
    localSrc: fig32,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig32-splenic-central-memory-4c40089c22cf.webp",
    alt: "Representative splenic CD44⁺CD62L⁺ central-memory flow plots within the CD8⁺ gate for the three groups beside the corresponding quantification bar chart",
    caption:
      "CD44⁺CD62L⁺ central-memory frequencies within splenic CD8⁺ T cells.",
    section: "In vivo",
  },
  fig33: {
    kind: "image",
    fileName: "results-fig33-splenic-ifn-gamma.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig33-splenic-ifn-gamma.webp",
    localSrc: fig33,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig33-splenic-ifn-gamma-f3d7ee74932a.webp",
    alt: "Representative splenic IFN-γ⁺ flow plots within the CD8⁺ gate for the three groups beside the corresponding quantification bar chart",
    caption: "IFN-γ⁺ frequencies within splenic CD8⁺ T cells.",
    section: "In vivo",
  },
  fig34: {
    kind: "image",
    fileName: "results-fig34-splenic-granzyme-b.webp",
    localSourcePath:
      "src/assets/wiki/results/results-fig34-splenic-granzyme-b.webp",
    localSrc: fig34,
    uploadUrl: "https://static.igem.wiki/teams/6056/wiki/files/pages/project/results/results-fig34-splenic-granzyme-b-25e78a196546.webp",
    alt: "Representative splenic Granzyme B⁺ flow plots within the CD8⁺ gate for the three groups beside the corresponding quantification bar chart",
    caption: "Granzyme B⁺ frequencies within splenic CD8⁺ T cells.",
    section: "In vivo",
  },
} as const satisfies Record<string, ResultsAssetEntry>;

export type ResultsAssetKey = keyof typeof resultsAssets;

/** Registered image URL: iGEM CDN once uploaded, bundled preview until then. */
export const getResultsImage = (key: ResultsAssetKey): string => {
  const entry: ResultsAssetEntry = resultsAssets[key];
  return entry?.uploadUrl || entry?.localSrc || "";
};
