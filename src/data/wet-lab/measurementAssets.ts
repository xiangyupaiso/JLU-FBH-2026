/**
 * Measurement page asset registry.
 *
 * The source manuscript keeps the original AVIF files under 文案集/wetlab/Measurment.
 * The page uses the official iGEM URLs so the reader does not depend on a build-time
 * copy of the source folder. The two structural AVIFs requested by the author are
 * intentionally absent; their location mounts the Results structural chart instead.
 */
export interface MeasurementAssetEntry {
  fileName: string;
  localSourcePath: string;
  localSrc: string;
  uploadUrl: string;
  /** Intrinsic size, so the figure keeps its space before the file arrives. */
  width?: number;
  height?: number;
  alt: string;
  caption?: string;
  section?: string;
}

export const measurementAssets = {
  "dependency-relations-between-the-measurements-in-the-project": {
    fileName:
      "dependency-relations-between-the-measurements-in-the-project.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/dependency-relations-between-the-measurements-in-the-project.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/dependency-relations-between-the-measurements-in-the-project.avif",
    width: 1280,
    height: 896,
    alt: "Dependency relations between the measurements in the project",
    caption: "Dependency relations between the measurements in the project",
    section: "Measurement",
  },
  "differential-protein-abundance-of-the-four-candidates-across-two-proteomic-datasets":
    {
      fileName:
        "differential-protein-abundance-of-the-four-candidates-across-two-proteomic-datasets.avif",
      localSourcePath:
        "文案集/wetlab/Measurment/measurete图片与附件/differential-protein-abundance-of-the-four-candidates-across-two-proteomic-datasets.avif",
      localSrc: "",
      uploadUrl:
        "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/differential-protein-abundance-of-the-four-candidates-across-two-proteomic-datasets.avif",
      width: 1280,
      height: 719,
      alt: "Differential protein abundance of the four candidates across two proteomic datasets",
      caption:
        "Differential protein abundance of the four candidates across two proteomic datasets",
      section: "Measurement",
    },
  "malignant-cell-enrichment-and-compartment-detection-rates-in-gse176078": {
    fileName:
      "malignant-cell-enrichment-and-compartment-detection-rates-in-gse176078.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/malignant-cell-enrichment-and-compartment-detection-rates-in-gse176078.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/malignant-cell-enrichment-and-compartment-detection-rates-in-gse176078.avif",
    width: 1280,
    height: 1090,
    alt: "Malignant-cell enrichment and compartment detection rates in GSE176078",
    caption:
      "Malignant-cell enrichment and compartment detection rates in GSE176078",
    section: "Measurement",
  },
  "the-staged-epitope-screen-from-1-838-nine-mers-to-15-delivered-peptides": {
    fileName:
      "the-staged-epitope-screen-from-1-838-nine-mers-to-15-delivered-peptides.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/the-staged-epitope-screen-from-1-838-nine-mers-to-15-delivered-peptides.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/the-staged-epitope-screen-from-1-838-nine-mers-to-15-delivered-peptides.avif",
    width: 1135,
    height: 1280,
    alt: "The staged epitope screen, from 1,838 nine-mers to 15 delivered peptides.",
    caption:
      "The staged epitope screen, from 1,838 nine-mers to 15 delivered peptides.",
    section: "Measurement",
  },
  "alphafold-3-confidence-scores-against-position-9-fill-ratio": {
    fileName:
      "alphafold-3-confidence-scores-against-position-9-fill-ratio.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/alphafold-3-confidence-scores-against-position-9-fill-ratio.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/alphafold-3-confidence-scores-against-position-9-fill-ratio.avif",
    width: 863,
    height: 563,
    alt: "AlphaFold 3 confidence scores against position-9 fill ratio",
    caption: "AlphaFold 3 confidence scores against position-9 fill ratio",
    section: "Measurement",
  },
  "agarose-gel-verification-of-the-four-epitope-encoding-linearised-transcription-templates":
    {
      fileName:
        "agarose-gel-verification-of-the-four-epitope-encoding-linearised-transcription-templates.avif",
      localSourcePath:
        "文案集/wetlab/Measurment/measurete图片与附件/agarose-gel-verification-of-the-four-epitope-encoding-linearised-transcription-templates.avif",
      localSrc: "",
      uploadUrl:
        "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/agarose-gel-verification-of-the-four-epitope-encoding-linearised-transcription-templates.avif",
      width: 1004,
      height: 741,
      alt: "Agarose gel of the four linearised transcription templates",
      caption: "Agarose gel of the four linearised transcription templates",
      section: "Measurement",
    },
  "workflow-of-the-circularity-release-assay": {
    fileName: "workflow-of-the-circularity-release-assay.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/workflow-of-the-circularity-release-assay.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/workflow-of-the-circularity-release-assay.avif",
    width: 1280,
    height: 896,
    alt: "Workflow of the circularity release assay",
    caption: "Workflow of the circularity release assay",
    section: "Measurement",
  },
  "sanger-trace-across-the-back-splice-junction-bsj-of-the-combined-vaccine": {
    fileName:
      "sanger-trace-across-the-backsplice-junction-bsj-of-the-combined-vaccine.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/sanger-trace-across-the-backsplice-junction-bsj-of-the-combined-vaccine.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/sanger-trace-across-the-backsplice-junction-bsj-of-the-combined-vaccine.avif",
    alt: "Sanger trace across the ligation site of the Combined vaccine",
    caption: "Sanger trace across the ligation site of the Combined vaccine",
    section: "Measurement",
  },
  "in-vitro-stability-of-circrna-versus-linear-precursor-rna-at-37-c-gel": {
    fileName:
      "in-vitro-stability-of-circrna-versus-linear-precursor-rna-at-37-c-gel.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/in-vitro-stability-of-circrna-versus-linear-precursor-rna-at-37-c-gel.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/in-vitro-stability-of-circrna-versus-linear-precursor-rna-at-37-c-gel.avif",
    width: 1280,
    height: 440,
    alt: "Stability of circRNA and its linear precursor at 37 °C",
    caption: "Stability of circRNA and its linear precursor at 37 °C",
    section: "Measurement",
  },
  "rt-pcr-quantification-of-trop2-mrna-in-4t1-cells": {
    fileName: "rt-pcr-quantification-of-trop2-mrna-in-4t1-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/rt-pcr-quantification-of-trop2-mrna-in-4t1-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/rt-pcr-quantification-of-trop2-mrna-in-4t1-cells.avif",
    width: 688,
    height: 877,
    alt: "TROP2 message in wild-type and TROP2-overexpressing 4T1",
    caption: "TROP2 message in wild-type and TROP2-overexpressing 4T1",
    section: "Measurement",
  },
  "flow-cytometric-detection-of-surface-trop2-on-4t1-cells": {
    fileName: "flow-cytometric-detection-of-surface-trop2-on-4t1-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/flow-cytometric-detection-of-surface-trop2-on-4t1-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/flow-cytometric-detection-of-surface-trop2-on-4t1-cells.avif",
    width: 1280,
    height: 602,
    alt: "TROP2 message in wild-type and TROP2-overexpressing 4T1",
    caption: "TROP2 message in wild-type and TROP2-overexpressing 4T1",
    section: "Measurement",
  },
  "preparation-workflow-for-dendritic-cells-and-autologous-t-cells": {
    fileName:
      "preparation-workflow-for-dendritic-cells-and-autologous-t-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/preparation-workflow-for-dendritic-cells-and-autologous-t-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/preparation-workflow-for-dendritic-cells-and-autologous-t-cells.avif",
    width: 1280,
    height: 749,
    alt: "Preparation workflow for dendritic cells and autologous T cells",
    caption: "Preparation workflow for dendritic cells and autologous T cells",
    section: "Measurement",
  },
  "dose-viability-curve-of-empty-lnp-on-dcs-after-24-h": {
    fileName: "dose-viability-curve-of-empty-lnp-on-dcs-after-24-h.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/dose-viability-curve-of-empty-lnp-on-dcs-after-24-h.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/dose-viability-curve-of-empty-lnp-on-dcs-after-24-h.avif",
    width: 986,
    height: 675,
    alt: "Dose–viability relationship for empty LNP on dendritic cells",
    caption: "Dose–viability relationship for empty LNP on dendritic cells",
    section: "Measurement",
  },
  "western-blot-of-flag-tagged-fusion-protein-in-dcs": {
    fileName: "western-blot-of-flag-tagged-fusion-protein-in-dcs.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/western-blot-of-flag-tagged-fusion-protein-in-dcs.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/western-blot-of-flag-tagged-fusion-protein-in-dcs.avif",
    width: 1280,
    height: 622,
    alt: "Anti-FLAG Western blot of electroporated dendritic cells",
    caption: "Anti-FLAG Western blot of electroporated dendritic cells",
    section: "Measurement",
  },
  "round-1-elispot-wells-and-counts": {
    fileName: "round-1-elispot-wells-and-counts.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/round-1-elispot-wells-and-counts.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/round-1-elispot-wells-and-counts.avif",
    width: 1280,
    height: 434,
    alt: "Round 1 ELISpot wells",
    caption: "Round 1 ELISpot wells",
    section: "Measurement",
  },
  "round-2-elispot-wells-and-counts": {
    fileName: "round-2-elispot-wells-and-counts.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/round-2-elispot-wells-and-counts.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/round-2-elispot-wells-and-counts.avif",
    width: 1280,
    height: 351,
    alt: "Round 2 ELISpot wells",
    caption: "Round 2 ELISpot wells",
    section: "Measurement",
  },
  "round-1-killing-of-k562-by-t-cells-primed-with-each-construct": {
    fileName:
      "round-1-killing-of-k562-by-t-cells-primed-with-each-construct.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/round-1-killing-of-k562-by-t-cells-primed-with-each-construct.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/round-1-killing-of-k562-by-t-cells-primed-with-each-construct.avif",
    width: 1280,
    height: 1155,
    alt: "Round 1 killing of K562 by T cells primed with each construct",
    caption: "Round 1 killing of K562 by T cells primed with each construct",
    section: "Measurement",
  },
  "killing-of-mda-mb-231-by-t-cells-primed-with-each-construct-across-e-t-ratios":
    {
      fileName:
        "killing-of-mda-mb-231-by-t-cells-primed-with-each-construct-across-e-t-ratios.avif",
      localSourcePath:
        "文案集/wetlab/Measurment/measurete图片与附件/killing-of-mda-mb-231-by-t-cells-primed-with-each-construct-across-e-t-ratios.avif",
      localSrc: "",
      uploadUrl:
        "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/killing-of-mda-mb-231-by-t-cells-primed-with-each-construct-across-e-t-ratios.avif",
      width: 1280,
      height: 754,
      alt: "Killing of MDA-MB-231 across three effector-to-target ratios",
      caption: "Killing of MDA-MB-231 across three effector-to-target ratios",
      section: "Measurement",
    },
  "killing-of-four-normal-cell-lines-and-mda-mb-231-by-vaccine-primed-t-cells":
    {
      fileName:
        "killing-of-four-normal-cell-lines-and-mda-mb-231-by-vaccine-primed-t-cells.avif",
      localSourcePath:
        "文案集/wetlab/Measurment/measurete图片与附件/killing-of-four-normal-cell-lines-and-mda-mb-231-by-vaccine-primed-t-cells.avif",
      localSrc: "",
      uploadUrl:
        "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/killing-of-four-normal-cell-lines-and-mda-mb-231-by-vaccine-primed-t-cells.avif",
      alt: "Killing of four normal cell lines and MDA-MB-231",
      caption: "Killing of four normal cell lines and MDA-MB-231",
      section: "Measurement",
    },
  "three-step-gating-strategy-for-sorting-gfp-4t1-cells": {
    fileName: "three-step-gating-strategy-for-sorting-gfp-4t1-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/three-step-gating-strategy-for-sorting-gfp-4t1-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/three-step-gating-strategy-for-sorting-gfp-4t1-cells.avif",
    width: 4000,
    height: 1285,
    alt: "Gating strategy for sorting GFP-positive 4T1",
    caption: "Gating strategy for sorting GFP-positive 4T1",
    section: "Measurement",
  },
  "cd80-cd86-double-positive-dc-frequencies-for-each-group": {
    fileName: "cd80-cd86-double-positive-dc-frequencies-for-each-group.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd80-cd86-double-positive-dc-frequencies-for-each-group.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd80-cd86-double-positive-dc-frequencies-for-each-group.avif",
    width: 1280,
    height: 341,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "quantification-of-dc-maturation-across-groups": {
    fileName: "quantification-of-dc-maturation-across-groups.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/quantification-of-dc-maturation-across-groups.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/quantification-of-dc-maturation-across-groups.avif",
    width: 777,
    height: 669,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "cd8-cd69-t-cell-frequencies-after-dc-t-co-culture": {
    fileName: "cd8-cd69-t-cell-frequencies-after-dc-t-co-culture.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd8-cd69-t-cell-frequencies-after-dc-t-co-culture.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd8-cd69-t-cell-frequencies-after-dc-t-co-culture.avif",
    width: 1280,
    height: 336,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "quantification-of-cd8-cd69-frequencies-across-groups": {
    fileName: "quantification-of-cd8-cd69-frequencies-across-groups.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/quantification-of-cd8-cd69-frequencies-across-groups.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/quantification-of-cd8-cd69-frequencies-across-groups.avif",
    width: 775,
    height: 670,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "cd8-cd28-t-cell-frequencies-after-dc-t-co-culture": {
    fileName: "cd8-cd28-t-cell-frequencies-after-dc-t-co-culture.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd8-cd28-t-cell-frequencies-after-dc-t-co-culture.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd8-cd28-t-cell-frequencies-after-dc-t-co-culture.avif",
    width: 1280,
    height: 334,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "quantification-of-cd8-cd28-frequencies-across-groups": {
    fileName: "quantification-of-cd8-cd28-frequencies-across-groups.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/quantification-of-cd8-cd28-frequencies-across-groups.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/quantification-of-cd8-cd28-frequencies-across-groups.avif",
    width: 778,
    height: 679,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "cd45ro-ccr7-effector-memory-frequencies-within-cd8-t-cells": {
    fileName: "cd45ro-ccr7-effector-memory-frequencies-within-cd8-t-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd45ro-ccr7-effector-memory-frequencies-within-cd8-t-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd45ro-ccr7-effector-memory-frequencies-within-cd8-t-cells.avif",
    width: 1280,
    height: 274,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "quantification-of-cd45ro-ccr7-frequencies-across-groups": {
    fileName: "quantification-of-cd45ro-ccr7-frequencies-across-groups.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/quantification-of-cd45ro-ccr7-frequencies-across-groups.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/quantification-of-cd45ro-ccr7-frequencies-across-groups.avif",
    width: 1042,
    height: 901,
    alt: "Representative flow plots for the human immune response chain",
    caption: "Representative flow plots for the human immune response chain",
    section: "Measurement",
  },
  "splenic-dc-cd80-cd86-maturation": {
    fileName: "splenic-dc-cd80-cd86-maturation.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/splenic-dc-cd80-cd86-maturation.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/splenic-dc-cd80-cd86-maturation.avif",
    width: 1280,
    height: 395,
    alt: "Splenic immunophenotype across the immune response chain",
    caption: "Splenic immunophenotype across the immune response chain",
    section: "Measurement",
  },
  "splenic-cd8-t-cell-cd69-early-activation": {
    fileName: "splenic-cd8-t-cell-cd69-early-activation.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/splenic-cd8-t-cell-cd69-early-activation.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/splenic-cd8-t-cell-cd69-early-activation.avif",
    width: 1280,
    height: 402,
    alt: "Splenic immunophenotype across the immune response chain",
    caption: "Splenic immunophenotype across the immune response chain",
    section: "Measurement",
  },
  "cd44-cd62l-central-memory-frequencies-within-splenic-cd8-t-cells": {
    fileName:
      "cd44-cd62l-central-memory-frequencies-within-splenic-cd8-t-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd44-cd62l-central-memory-frequencies-within-splenic-cd8-t-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd44-cd62l-central-memory-frequencies-within-splenic-cd8-t-cells.avif",
    width: 1280,
    height: 376,
    alt: "Splenic immunophenotype across the immune response chain",
    caption: "Splenic immunophenotype across the immune response chain",
    section: "Measurement",
  },
  "ifn-frequencies-within-splenic-cd8-t-cells": {
    fileName: "ifn-frequencies-within-splenic-cd8-t-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/ifn-frequencies-within-splenic-cd8-t-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/ifn-frequencies-within-splenic-cd8-t-cells.avif",
    width: 1280,
    height: 393,
    alt: "Splenic immunophenotype across the immune response chain",
    caption: "Splenic immunophenotype across the immune response chain",
    section: "Measurement",
  },
  "granzyme-b-frequencies-within-splenic-cd8-t-cells": {
    fileName: "granzyme-b-frequencies-within-splenic-cd8-t-cells.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/granzyme-b-frequencies-within-splenic-cd8-t-cells.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/granzyme-b-frequencies-within-splenic-cd8-t-cells.avif",
    width: 1280,
    height: 431,
    alt: "Splenic immunophenotype across the immune response chain",
    caption: "Splenic immunophenotype across the immune response chain",
    section: "Measurement",
  },
  "gfp-fluorescence-in-4t1-cells-48-72-h-after-lentiviral-transduction": {
    fileName:
      "gfp-fluorescence-in-4t1-cells-48-72-h-after-lentiviral-transduction.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/gfp-fluorescence-in-4t1-cells-48-72-h-after-lentiviral-transduction.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/gfp-fluorescence-in-4t1-cells-48-72-h-after-lentiviral-transduction.avif",
    width: 1280,
    height: 747,
    alt: "GFP fluorescence in transduced 4T1",
    caption: "GFP fluorescence in transduced 4T1",
    section: "Measurement",
  },
  "cd8-granzyme-b-dual-immunofluorescence-of-tumour-tissue": {
    fileName: "cd8-granzyme-b-dual-immunofluorescence-of-tumour-tissue.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/cd8-granzyme-b-dual-immunofluorescence-of-tumour-tissue.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/cd8-granzyme-b-dual-immunofluorescence-of-tumour-tissue.avif",
    width: 954,
    height: 596,
    alt: "CD8 and Granzyme B dual immunofluorescence of tumour tissue",
    caption: "CD8 and Granzyme B dual immunofluorescence of tumour tissue",
    section: "Measurement",
  },
  "immunisation-and-measurement-schedule": {
    fileName: "immunisation-and-measurement-schedule.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/immunisation-and-measurement-schedule.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/immunisation-and-measurement-schedule.avif",
    width: 1280,
    height: 723,
    alt: "Immunisation and measurement schedule",
    caption: "Immunisation and measurement schedule",
    section: "Measurement",
  },
  "tumour-growth-curves-for-the-three-groups": {
    fileName: "tumour-growth-curves-for-the-three-groups.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/tumour-growth-curves-for-the-three-groups.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/tumour-growth-curves-for-the-three-groups.avif",
    width: 1065,
    height: 510,
    alt: "Tumour growth curves for the three groups",
    caption: "Tumour growth curves for the three groups",
    section: "Measurement",
  },
  "excised-tumours-at-endpoint-d35": {
    fileName: "excised-tumours-at-endpoint-d35.avif",
    localSourcePath:
      "文案集/wetlab/Measurment/measurete图片与附件/excised-tumours-at-endpoint-d35.avif",
    localSrc: "",
    uploadUrl:
      "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/excised-tumours-at-endpoint-d35.avif",
    width: 460,
    height: 336,
    alt: "Excised tumours at endpoint",
    caption: "Excised tumours at endpoint",
    section: "Measurement",
  },
} as const satisfies Record<string, MeasurementAssetEntry>;

export type MeasurementAssetKey = keyof typeof measurementAssets;

export function getMeasurementImage(key: MeasurementAssetKey): string {
  const asset: MeasurementAssetEntry = measurementAssets[key];
  return asset.uploadUrl || asset.localSrc || "";
}
