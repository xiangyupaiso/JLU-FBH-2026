import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import type { ModelPanel } from "./modelPanelTypes";
import type { CitationReference } from "../citations/citationTypes";
import { getModelImage } from "./modelAssets";

const manuscriptSections: WikiPageContent["sections"] = [
  {
    "id": "model-overview",
    "index": "02",
    "kicker": "Overview",
    "navLabel": "Overview",
    "title": "Overview",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "We built three models: AEIP for antigen and epitope selection, Cell2Dose for dose prediction, and SST-QN to evaluate sustainability. The first two guide experimental design. The third evaluates how SDGs interact in a general context, then assesses how CirCure might shift those interactions."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**AEIP (Antigen–Epitope Integration Pipeline)** combines proteomics, single-cell RNA sequencing, genomic profiling, and structural modeling to pick vaccine targets. We started with the TNBC proteome, selected four antigens, and screened 1,838 candidate peptides down to 15 epitopes restricted to HLA-A*02:01. The pipeline confirmed that these antigens appear as proteins in TNBC tissue, concentrate in malignant cells rather than stroma, cover 88% of patients when used together, and form stable complexes with MHC molecules. That gives the wet lab a defined set to test instead of the full proteome."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Cell2Dose (A Cell-Informed Mechanistic Model for Tumor Vaccine Dose Exploration)** bridges in-vitro readouts to in-vivo tumor dynamics through three computational layers: calibrating immune kinetics from cell assays, simulating the vaccine mechanism from injection to tumor killing, and quantifying uncertainty across parameters to rank dose candidates. That helps the team decide which doses are worth testing in animals before the experiment begins and diagnose which process step limits efficacy if a dose fails, reducing the number of animals needed and aligning dose selection with animal welfare principles."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**SST-QN (SDG Synergy–Trade-off Quantification Network)** maps how the 17 SDGs interact without project influence, classifying relationships and scoring synergies and trade-offs across the system. We then applied CirCure's actions at each stage, from early research through manufacturing scale-up, to the baseline network. The model projects how the project affects economic, social, and environmental outcomes and identifies where CirCure supports sustainability goals or creates conflicts."
        ]
      }
    ]
  },
  {
    "id": "model-aeip",
    "index": "03",
    "kicker": "AEIP",
    "navLabel": "AEIP",
    "title": "AEIP",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "For patients with triple-negative breast cancer (TNBC), three missing receptors mean fewer treatment options, while tumor diversity makes effective targeting even harder—behind this treatment gap are lives that cannot wait. We are therefore developing a multi-antigen circRNA vaccine designed to activate the body’s own antitumor immune response and help immune cells recognize and kill tumor cells."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "To translate this strategy into a testable vaccine design, we developed the Antigen–Epitope Integration Pipeline (AEIP). This computational workflow integrates proteomic evidence, single-cell transcriptomics, patient-level genomic profiling, and immunohistochemistry to prioritize antigens, followed by binding-affinity prediction, immunogenicity scoring, and structural compatibility assessment to select HLA-restricted epitopes."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "AEIP prioritized a four-antigen panel—TROP2, B7-H4, Nectin-4, and LIV-1—that collectively covered 88% of TNBC patients under a predefined genomic criterion and showed preferential expression in malignant cells relative to stromal and immune cells. It narrowed 1,838 candidate peptides to 15 HLA-A*02:01-restricted epitope candidates, which were delivered to the wet lab for T-cell activation assays and circRNA construct design."
        ]
      }
    ]
  },
  {
    "id": "model-antigen-selection",
    "index": "04",
    "kicker": "Antigen Selection",
    "navLabel": "Antigen Selection",
    "title": "Antigen Selection",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "Selecting antigens for a cancer vaccine requires evidence from multiple angles, as cancer data comes in layers that don't always agree. A gene may be highly transcribed but produce little protein, a protein may be abundant but expressed mainly in stromal rather than tumor cells, and an antigen may be present in one patient's tumor but absent in another's. Each of these gaps can mislead antigen selection if evidence from only one source is used."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We applied a systematic scoring framework adapted from Zahraei et al. (2025) to evaluate candidates across subcellular localization, tumor specificity, prognostic association, and therapeutic validation in TNBC, selecting the top four—TROP2, B7-H4, Nectin-4, and LIV-1—for multi-evidence validation. Quantitative proteomics confirmed tumor-enriched protein abundance for all four, single-cell analysis showed preferential expression in malignant cells with over 80% coverage, genomic profiling demonstrated that the panel collectively covered 88% of TCGA patients, and immunohistochemistry documented clinical tissue staining patterns. These converging lines established that the antigens were present as proteins, localized to malignant cells, reached most patients as a panel, and matched clinical observations."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-1",
        "index": "4.1",
        "title": "Systematic antigen prioritization"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Designing a multi-epitope vaccine for TNBC requires selecting target antigens, but the criteria for prioritizing candidates are not immediately obvious. Should we focus on antigens with the highest tumor-to-normal expression ratios, or those already validated in clinical trials? Should intracellular proteins be excluded because they require MHC processing, or included because vaccines can engage T cells? How much weight should be given to prognostic associations versus therapeutic precedent? These questions do not have universal answers, and different vaccine projects make different trade-offs."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We turned to the recent literature on computational vaccine design for TNBC and found that Zahraei et al. (2025) had proposed a systematic scoring framework for antigen selection. Their approach evaluated candidates across four dimensions: subcellular localization, tumor specificity, prognostic association, and evidence of prior therapeutic targeting. We adopted this framework as our starting point and refined the therapeutic-targeting dimension to distinguish between exploratory trials and replicated clinical evidence in TNBC specifically, rather than treating all prior targeting equally. The framework assigns each candidate a score from 0 to 10 based on localization (L, 0–5 points), tumor specificity (S, 0–2 points), prognostic association (P, 0–1 point), and TNBC therapeutic validation depth (T, 0–2 points)."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-1"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We applied this framework to a list of tumor-associated antigens compiled from TNBC-focused reviews, clinical trial databases, antibody-drug conjugate development pipelines, and input from clinicians and industry partners through our Integrated Human Practices activities. Each candidate was scored independently by reviewing primary literature for localization, expression patterns, survival associations, and therapeutic outcomes. The top four scoring candidates were selected for multi-evidence validation."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 1. Top four antigens selected for vaccine development"
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The four selected antigens—tumor-associated calcium signal transducer 2 (TROP2), B7 homolog 4 (B7-H4), nectin cell adhesion molecule 4 (Nectin-4), and zinc transporter ZIP6 (LIV-1)—are all membrane proteins with favorable tumor-to-normal expression ratios and replicated clinical validation in TNBC. TROP2 ranked first with two FDA-approved antibody-drug conjugates for metastatic TNBC. B7-H4, LIV-1, and Nectin-4 each demonstrated reproducible anti-tumor activity across independent clinical studies or different therapeutic agents targeting the same antigen."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Published TNBC survival studies provided the clinical starting point for prognostic validation. Higher expression of the four candidates was associated with shorter survival in the respective cohorts or subgroups reported by [Li et al.](https://doi.org/10.1002/advs.202409835), [Wang et al.](https://doi.org/10.1186/s12935-018-0597-9), [Xu et al.](https://doi.org/10.1097/CM9.0000000000002930), [Son et al.](https://doi.org/10.53941/jiim.2025.100013), and [Saravanan et al.](https://doi.org/10.1002/jcp.31203).  The survival data for each antigen are presented below."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-2"
      },
      {
        "type": "subheading",
        "id": "model-heading-2",
        "index": "4.2",
        "title": "Abbreviations and nomenclature"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Abbreviations are expanded at first use throughout this page. Human gene symbols are italicized, whereas protein names, database names, software names, and dataset accessions are written in roman type. Peptide sequences are shown in monospace. HLA-A*02:01 follows the official HLA allele nomenclature and is also written in roman type."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Term**",
          "**Meaning used on this page**"
        ],
        "rows": [
          [
            "TNBC",
            "Triple-negative breast cancer"
          ],
          [
            "ER",
            "Estrogen receptor"
          ],
          [
            "PR",
            "Progesterone receptor"
          ],
          [
            "HER2",
            "Human epidermal growth factor receptor 2"
          ],
          [
            "PARP",
            "Poly(ADP-ribose) polymerase"
          ],
          [
            "circRNA",
            "Circular RNA"
          ],
          [
            "LNP",
            "Lipid nanoparticle"
          ],
          [
            "TROP2",
            "Tumor-associated calcium signal transducer 2, encoded by *TACSTD2*"
          ],
          [
            "B7-H4",
            "B7 homolog 4, encoded by *VTCN1*"
          ],
          [
            "Nectin-4",
            "Nectin cell adhesion molecule 4, encoded by *NECTIN4*"
          ],
          [
            "LIV-1",
            "Estrogen-regulated protein LIV-1, also known as zinc transporter ZIP6, encoded by *SLC39A6*"
          ],
          [
            "HLA-I",
            "Human leukocyte antigen class I"
          ],
          [
            "HLA-A*02:01",
            "The HLA class I allele used for epitope prediction in this project"
          ],
          [
            "IEDB",
            "Immune Epitope Database and Analysis Resource"
          ],
          [
            "FDR",
            "False discovery rate"
          ],
          [
            "TCGA",
            "The Cancer Genome Atlas"
          ],
          [
            "TMT",
            "Tandem mass tag"
          ],
          [
            "UMI",
            "Unique molecular identifier"
          ],
          [
            "UMAP",
            "Uniform manifold approximation and projection"
          ],
          [
            "mRNA",
            "Messenger RNA"
          ],
          [
            "TAP",
            "Transporter associated with antigen processing"
          ],
          [
            "pMHC",
            "Peptide–major histocompatibility complex"
          ],
          [
            "BA",
            "Binding affinity"
          ],
          [
            "EL",
            "Eluted ligand"
          ],
          [
            "IC₅₀",
            "Half-maximal inhibitory concentration"
          ],
          [
            "IFN",
            "Interferon"
          ],
          [
            "ipTM",
            "Interface predicted template modeling score"
          ],
          [
            "pTM",
            "Predicted template modeling score"
          ]
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-3",
        "index": "4.3",
        "title": "Proteomic evidence for antigen prioritization"
      },
      {
        "type": "subheading",
        "id": "model-heading-4",
        "index": "4.3.1",
        "title": "Why protein-level evidence came first"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The first requirement for an antigen source is evidence that its protein is present in the tumor population the vaccine is meant to address, a principle shared by established tumor-antigen prioritization frameworks (**Cheever et al., 2009**). Because transcript abundance does not always predict protein abundance, we began with quantitative proteomics to measure TROP2, B7-H4, Nectin-4, and LIV-1 directly in TNBC tissue."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "PXD024322 contains 88 TNBC tumors and 38 normal-breast samples, providing quantitative protein measurements across a broad cohort (**Asleh et al., 2022**). PXD028102 contains 66 matched tumor and adjacent-normal pairs within a larger TNBC cohort, allowing tumor-to-normal differences to be estimated within the same patients (**Gong et al., 2022**)."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-5",
        "index": "4.3.2",
        "title": "PXD024322 provided protein-level evidence for all four candidates"
      },
      {
        "type": "prose",
        "paragraphs": [
          "All four proteins were quantified in the PXD024322 cohort. Each candidate showed higher average abundance in tumor tissue. Nectin-4 and LIV-1 had the largest changes in this dataset, with fold changes of 1.35 and 1.34, followed by B7-H4 at 1.20 and TROP2 at 1.14. All four comparisons had a false discovery rate (FDR) below 0.05."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-3"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 5.** Differential protein abundance in PXD024322. Candidate antigens are highlighted against the complete quantified proteome."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("02_PXD024322_four_target_batch_adjusted_boxplots.png"),
        "alt": "Figure 6. Abundance distributions of TROP2, B7-H4, Nectin-4, and LIV-1 in the PXD024322 TNBC and normal-breast samples."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 6.** Abundance distributions of TROP2, B7-H4, Nectin-4, and LIV-1 in the PXD024322 TNBC and normal-breast samples."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**Gene**",
          "**log2 fold change**",
          "**Fold change**",
          "**FDR**"
        ],
        "rows": [
          [
            "TROP2",
            "*TACSTD2*",
            "0.185",
            "1.14",
            "0.0370"
          ],
          [
            "B7-H4",
            "*VTCN1*",
            "0.268",
            "1.20",
            "0.0446"
          ],
          [
            "Nectin-4",
            "*NECTIN4*",
            "0.435",
            "1.35",
            "7.14 × 10−9"
          ],
          [
            "LIV-1",
            "*SLC39A6*",
            "0.419",
            "1.34",
            "1.88 × 10−5"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "In PXD024322, the quantitative measurements supported all four candidates as protein-level inputs for the next stage."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-6",
        "index": "4.3.3",
        "title": "PXD028102 revealed larger tumor-to-normal differences"
      },
      {
        "type": "prose",
        "paragraphs": [
          "In PXD028102, TROP2, B7-H4, and Nectin-4 were more abundant in tumors than in matched adjacent tissue, with estimated fold changes of 18.25, 3.72, and 7.12, respectively. Together with the PXD024322 measurements for LIV-1, these paired results supported carrying the four-antigen panel forward."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-4"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 7.** Paired differential abundance analysis in PXD028102. The paired design highlights tumor-associated changes within the same patients."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 14.png"),
        "alt": "Figure 8. Paired tumor and adjacent-normal abundance patterns for the three candidates quantified in PXD028102."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 8.** Paired tumor and adjacent-normal abundance patterns for the three candidates quantified in PXD028102."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**log2 fold change**",
          "**Fold change**",
          "**FDR**"
        ],
        "rows": [
          [
            "TROP2",
            "4.190",
            "18.25",
            "2.14 × 10−15"
          ],
          [
            "B7-H4",
            "1.894",
            "3.72",
            "7.15 × 10−6"
          ],
          [
            "Nectin-4",
            "2.831",
            "7.12",
            "2.13 × 10−11"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The two proteomic cohorts supported the same panel from different directions. PXD024322 provided quantitative protein evidence for all four candidates, while PXD028102 revealed larger tumor-associated differences for TROP2, Nectin-4, and B7-H4 in matched tissue. This combination of broad protein evidence and tumor-to-normal contrast provided the basis for carrying all four antigens forward."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-7",
        "index": "4.3.4",
        "title": "What we learned from the proteomic data"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Together, the two proteomic cohorts supported a four-antigen panel from complementary evidence. PXD024322 provided quantitative protein measurements for all four candidates across TNBC tumors, while PXD028102 provided paired tumor-to-adjacent-normal increases for TROP2, Nectin-4, and B7-H4. TROP2 showed the largest paired increase at 18.25-fold, Nectin-4 increased 7.12-fold, and LIV-1 showed higher average abundance in tumor tissue in PXD024322. This combination gave each antigen a distinct evidence profile in the panel."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "To place these tissue-level protein signals within specific cell types, we next examined the four genes in single-cell RNA-sequencing data."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-5"
      },
      {
        "type": "subheading",
        "id": "model-heading-11",
        "index": "4.3.8",
        "title": "Single-cell transcriptomic evidence for malignant-cell localization"
      },
      {
        "type": "subheading",
        "id": "model-heading-12",
        "index": "4.3.8.1",
        "title": "From whole tissue to individual cells"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Proteomics measured the abundance of the candidate proteins in TNBC tissue, which contains malignant cells alongside immune and stromal cells. For antigen selection, we also wanted to know which cell populations expressed the genes encoding those proteins. High expression of a candidate gene in immune, stromal, or normal epithelial cells would weaken the case for prioritizing it as a tumor-directed antigen. We therefore analyzed GSE176078 as a separate, cell-resolved source of evidence (**Wu et al., 2021**). This breast-cancer atlas provides patient identities, author-assigned cell lineages, and raw unique molecular identifier (UMI) counts, allowing us to examine malignant epithelial, immune, stromal, and normal epithelial cells within the same study, with cancer-associated fibroblasts (CAFs) examined separately as a subset of stromal cells. We selected the samples labelled TNBC in the authors' integration configuration, reprocessed their counts with SCTransform and patient-corrected Harmony, and compared the four candidate genes across these compartments. We then measured the proportion of malignant cells in which at least one candidate gene was detected. Together, the two analyses described both candidate protein abundance in tumor tissue and the distribution of the corresponding transcripts among its cell populations."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-13",
        "index": "4.3.8.2",
        "title": "Malignant cells formed a broad region with internal substructure"
      },
      {
        "type": "prose",
        "paragraphs": [
          "After quality control, the TNBC subset contained 39,324 cells, including 24,411 immune cells, 9,491 malignant cells, 4,786 stromal cells, and 636 normal epithelial cells. Most malignant cells occupied a broad, continuous region in the lower part of the uniform manifold approximation and projection (UMAP). Leiden clustering resolved five malignant-cell-dominated clusters within this region, together with a smaller malignant population in a mixed stromal cluster. The map preserved visible structure within the malignant compartment, supporting comparisons across the malignant states represented in the atlas."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("12_harmony_umap_major_lineage_no_panel_letter.png"),
        "alt": "Figure 9. Patient-corrected Harmony UMAP of the GSE176078 TNBC subset after SCTransform normalization. Colors identify the deposited major lineages, and labels mark their principal regions. The analysis included 39,324 quality-controlled cells."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 9.** Patient-corrected Harmony UMAP of the GSE176078 TNBC subset after SCTransform normalization. Colors identify the deposited major lineages, and labels mark their principal regions. The analysis included 39,324 quality-controlled cells."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We therefore calculated candidate-gene detection across the full malignant compartment, capturing all malignant states represented in the atlas."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-14",
        "index": "4.3.8.3",
        "title": "All four genes were preferentially expressed in malignant cells"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Patient-aware pseudobulk analysis compared malignant cells with the combined immune and stromal compartments. All four candidates were enriched in malignant cells. *VTCN1* and *NECTIN4* showed the largest differences, followed by *TACSTD2*, while *SLC39A6* retained a positive malignant-cell preference across patients."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Gene**",
          "**Antigen**",
          "**Malignant versus non-malignant log2 fold change**",
          "**FDR**",
          "**Malignant-cell detection rate**",
          "**Immune-cell detection rate**",
          "**CAF detection rate**"
        ],
        "rows": [
          [
            "*TACSTD2*",
            "TROP2",
            "4.074",
            "8.37 × 10−5",
            "70.4%",
            "4.0%",
            "5.4%"
          ],
          [
            "*SLC39A6*",
            "LIV-1",
            "0.853",
            "0.0196",
            "39.4%",
            "8.5%",
            "20.7%"
          ],
          [
            "*NECTIN4*",
            "Nectin-4",
            "4.755",
            "3.70 × 10−6",
            "37.8%",
            "1.0%",
            "0.6%"
          ],
          [
            "*VTCN1*",
            "B7-H4",
            "5.393",
            "2.52 × 10−5",
            "19.8%",
            "0.3%",
            "0.4%"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Detection rates are the fractions of cells with at least one raw count for the gene after pooling cells from the 10 TNBC patients within each group. These pooled rates are descriptive. The log2 fold changes and FDR values retain their patient-aware malignant-versus-combined-immune-and-stromal comparison."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("11_candidate_umap_violin_broken_axis_clean.png"),
        "alt": "Figure 10. Candidate-gene expression in the GSE176078 TNBC single-cell dataset. From top to bottom, the left panels show TROP2 (*TACSTD2*), B7-H4 (*VTCN1*), LIV-1 (*SLC39A6*), and Nectin-4 (*NECTIN4*, formerly *PVRL4*) on a Harmony UMAP generated after SCTransform normalization and patient correction. The right panels compare raw-count-derived ln(CP10K + 1) expression in immune, malignant, stromal, and cancer-associated fibroblast (CAF) cells. CAFs are also included in the broader stromal group, so those two distributions overlap by design. *TACSTD2* had the broadest malignant-cell expression. *NECTIN4* and *VTCN1* were detected in smaller malignant-cell populations. *SLC39A6* was detected in CAFs as well as malignant cells."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 10.** Candidate-gene expression in the GSE176078 TNBC single-cell dataset. From top to bottom, the left panels show TROP2 (*TACSTD2*), B7-H4 (*VTCN1*), LIV-1 (*SLC39A6*), and Nectin-4 (*NECTIN4*, formerly *PVRL4*) on a Harmony UMAP generated after SCTransform normalization and patient correction. The right panels compare raw-count-derived ln(CP10K + 1) expression in immune, malignant, stromal, and cancer-associated fibroblast (CAF) cells. CAFs are also included in the broader stromal group, so those two distributions overlap by design. *TACSTD2* had the broadest malignant-cell expression. *NECTIN4* and *VTCN1* were detected in smaller malignant-cell populations. *SLC39A6* was detected in CAFs as well as malignant cells."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Across patients, all four transcripts were more abundant in the malignant compartment than in the combined immune and stromal compartments. The single-cell data therefore placed the candidate-gene signal mainly in malignant cells. All four genes were also detected among the pooled CAFs. *SLC39A6* had the highest CAF detection rate, at 20.7% (508 of 2,458 CAFs). In a breast-cancer mouse model, depletion of FAP-positive fibroblasts reduced tumor growth and enhanced the effect of paclitaxel, supporting further study of CAF targeting to improve the tumor microenvironment (**Fang et al., 2016**)."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-15",
        "index": "4.3.8.4",
        "title": "At least one candidate gene was detected in 81.4% of malignant cells"
      },
      {
        "type": "prose",
        "paragraphs": [
          "*TACSTD2* and *SLC39A6* were detected in the largest fractions of malignant cells, while *NECTIN4* and *VTCN1* marked additional malignant-cell groups. Across the dataset, 81.4% of malignant cells expressed at least one candidate gene, with patient-level values ranging from 52.5% to 97.8%."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Pairwise Jaccard indices among gene-positive malignant cells ranged from 0.221 to 0.438. The four-gene pattern occurred in 7.3% of malignant cells, while the remaining gene-positive cells showed one-, two-, or three-gene patterns. Together, these patterns reveal complementary coverage across malignant cells."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The single-cell result described variation among cells within tumors. We then used cBioPortal to ask how often the four candidates occurred across different patients."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-6"
      },
      {
        "type": "subheading",
        "id": "model-heading-16",
        "index": "4.3.9",
        "title": "Patient coverage and clinical relevance of the multi-antigen panel"
      },
      {
        "type": "subheading",
        "id": "model-heading-17",
        "index": "4.3.9.1",
        "title": "At least one candidate met the gene-level rule in 88% of TNBC cases"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We queried 115 TNBC cases from the TCGA Breast Invasive Carcinoma PanCancer Atlas in cBioPortal (**Cerami et al., 2012**, **Gao et al., 2013**). Under a predefined Onco Query Language rule, a case met the criterion for a gene if its messenger RNA (mRNA) z-score was at least 0.5 or it had a high-level copy-number amplification (**cBioPortal, n.d.**). The corresponding genes for TROP2, B7-H4, Nectin-4, and LIV-1 met this rule in 38%, 31%, 79%, and 4% of cases, respectively. At least one gene met the rule in 101 of 115 cases, or 88%."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("Screenshot 2026-08-31 174114.png"),
        "alt": "At least one candidate met the gene-level rule in 88% of TNBC cases"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The 38% for TROP2 and the higher protein-positivity rates reported in clinical TNBC tissue studies come from different cohorts and different measurements. Our cBioPortal analysis counts cases with relatively elevated *TACSTD2* mRNA or high-level amplification under a fixed rule (**cBioPortal, n.d.**), whereas immunohistochemistry detects TROP2 protein in tumor cells. This distinction matters because mRNA abundance does not fully predict protein abundance in breast tumors (**Tang et al., 2018**). Applying the same gene-level rule to all four candidates let us compare their distribution across patients and see how many additional cases met the rule when the genes were combined. Immunohistochemical protein-positivity rates in clinical tissue are presented below in *Histopathological validation of candidate antigens*."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**Gene**",
          "**Patients meeting the predefined rule**"
        ],
        "rows": [
          [
            "TROP2",
            "*TACSTD2*",
            "38%"
          ],
          [
            "B7-H4",
            "*VTCN1*",
            "31%"
          ],
          [
            "Nectin-4",
            "*NECTIN4*",
            "79%"
          ],
          [
            "LIV-1",
            "*SLC39A6*",
            "4%"
          ],
          [
            "At least one of the four",
            "—",
            "101/115, 88%"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Nectin-4 alone met the rule in 79% of patients. Adding the other three genes increased the union to 88%, covering ten additional patients under the same rule. This increase, together with the partly overlapping single-cell detection patterns, was the reason we retained all four antigen sources."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-18",
        "index": "4.3.10",
        "title": "Patient-coverage analysis methods"
      },
      {
        "type": "subheading",
        "id": "model-heading-19",
        "index": "4.3.10.1",
        "title": "TCGA patient-coverage analysis"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We opened the Breast Invasive Carcinoma PanCancer Atlas study in cBioPortal and selected the cases classified as TNBC, producing a cohort of 115 patients (**Cerami et al., 2012**, **Gao et al., 2013**). The four genes were queried together with the cBioPortal Onco Query Language shown below (**cBioPortal, n.d.**). `AMP` denotes a high-level amplification called by Genomic Identification of Significant Targets in Cancer (GISTIC). `EXP>=0.5` denotes an mRNA z-score at least 0.5 above the mean of the expression reference population selected by the portal."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "A patient met the rule for a gene when either `AMP` or `EXP>=0.5` was present. Individual reach was calculated by dividing the number of patients meeting the rule for that gene by 115. Panel reach was calculated once for the union of the four gene-positive sets, so a patient meeting several gene rules was counted only once. The resulting union contained 101 patients. The OncoPrint and patient-level event table were retained as the source for the four individual percentages and the 88% combined value. This calculation measured the distribution of the four candidates across TNBC patients. Tumor-to-normal abundance was assessed separately in the proteomic cohorts."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-20",
        "index": "4.3.11",
        "title": "Histopathological validation of candidate antigens"
      },
      {
        "type": "subheading",
        "id": "model-heading-21",
        "index": "4.3.11.1",
        "title": "Returning the candidates to tissue architecture"
      },
      {
        "type": "prose",
        "paragraphs": [
          "To add tissue architecture to the model, we assembled representative immunohistochemistry panels for all four candidates from open-access publications and cite each source alongside the image. These panels place the proteomic and single-cell findings in the context of intact breast-cancer tissue."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Proteomics measured abundance across tissue samples, while single-cell RNA sequencing resolved expression by cell type. Immunohistochemistry added tissue-level protein-expression evidence through staining intensity, the proportion of positive tumor cells, and tumor-to-normal comparisons. This was especially informative for TROP2, B7-H4, Nectin-4, and LIV-1 because each is membrane associated and has been investigated as a therapeutic target."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We therefore reviewed TNBC studies that reported staining intensity, scoring method, cellular staining pattern, and tumor-to-normal comparisons. These tissue measurements allowed us to compare protein-expression patterns for each antigen with the evidence already obtained from proteomics, single-cell data, and patient-level analysis."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-22",
        "index": "4.3.11.2",
        "title": "Four tissue patterns supported one complementary panel"
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**Histopathological evidence in TNBC**",
          "**Interpretation for our design**"
        ],
        "rows": [
          [
            "TROP2",
            "Izci and colleagues described broad but heterogeneous membrane and cytoplasmic staining in stage I–III TNBC (**Izci et al., 2022**). Jeon and colleagues observed membranous TROP2 staining in more than 10% of tumor cells in 97.1% of 715 primary TNBC cases without neoadjuvant chemotherapy (**Jeon et al., 2022**).",
            "TROP2 provides a broadly represented protein signal, while its intratumoral variation supports combining it with other targets."
          ],
          [
            "B7-H4",
            "Wang and colleagues reported frequent B7-H4 staining in TNBC tissue (**Wang et al., 2018**). Spatial analyses further associated B7-H4 expression with tumor epithelial regions and distinct immune microenvironments (**Gruosso et al., 2019**, **Wescott et al., 2024**).",
            "B7-H4 adds a tumor-epithelial protein signal with a pattern that differs from TROP2."
          ],
          [
            "Nectin-4",
            "M-Rabet and colleagues reported membranous Nectin-4 staining in TNBC tissue. Zeindler and colleagues also identified a high-expression TNBC subgroup (**M-Rabet et al., 2017**, **Zeindler et al., 2019**).",
            "Nectin-4 contributes clear membrane-associated expression evidence in TNBC tissue."
          ],
          [
            "LIV-1",
            "Sussman and colleagues reported LIV-1 staining in primary TNBC tissue (**Sussman et al., 2014**). Saravanan and colleagues subsequently reported stronger LIV-1 staining in TNBC than in normal tissue and linked higher staining with aggressive clinicopathological features (**Saravanan et al., 2024**). An independent open-access tissue-microarray study of early-stage breast cancer documented SLC39A6 immunoreactivity in invasive epithelial tumour cells and provided positive and negative IHC examples (**Althobiti et al., 2021**). These findings add tissue-level protein-expression evidence to the TNBC-focused measurements in (**Sussman et al., 2014**, **Saravanan et al., 2024**).",
            "LIV-1 contributes an additional tissue-level protein-expression pattern to the TNBC-focused evidence from (**Sussman et al., 2014**, **Saravanan et al., 2024**)."
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The tissue studies provided tissue-level protein-expression evidence for all four candidates. They also showed that staining intensity and cellular patterns varied across tumor contexts. TROP2 showed broad but heterogeneous staining, B7-H4 was associated with tumor epithelial regions, Nectin-4 showed clear membrane staining, and LIV-1 was associated with stronger staining in high-grade and residual disease."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "After this review, we retained the four proteins and used their canonical sequences as inputs for HLA-I epitope prediction."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-23",
        "index": "4.3.11.3",
        "title": "Representative published tissue images"
      },
      {
        "type": "figure",
        "src": getModelImage("image 3.png"),
        "alt": "Figure 11. Published TROP2 immunohistochemistry in TNBC. The original figure shows intermediate and high TROP2 staining, with cytoplasmic, membranous, or combined localization and heterogeneity across tumor tissue. Reproduced from Izci et al. (Izci et al., 2022) under the article's Creative Commons Attribution 4.0 license."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 11.** Published TROP2 immunohistochemistry in TNBC. The original figure shows intermediate and high TROP2 staining, with cytoplasmic, membranous, or combined localization and heterogeneity across tumor tissue. Reproduced from Izci et al. (**Izci et al., 2022**) under the article's Creative Commons Attribution 4.0 license."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 5.png"),
        "alt": "Figure 12. Published B7-H4 immunohistochemistry in TNBC and normal breast tissue. Panel 1d of the original figure compares B7-H4 staining in TNBC tissue with normal breast tissue at 200× magnification. Reproduced from Wang et al. (Wang et al., 2018) under the article's Creative Commons Attribution 4.0 license."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 12.** Published B7-H4 immunohistochemistry in TNBC and normal breast tissue. Panel 1d of the original figure compares B7-H4 staining in TNBC tissue with normal breast tissue at 200× magnification. Reproduced from Wang et al. (**Wang et al., 2018**) under the article's Creative Commons Attribution 4.0 license."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 2.png"),
        "alt": "Figure 13. Published Nectin-4 immunohistochemistry in TNBC. The three panels show strong, moderate, and negative Nectin-4 staining in TNBC tissue at 200× magnification. Reproduced from Zeindler et al. (Zeindler et al., 2019) under the article's Creative Commons Attribution license."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 13.** Published Nectin-4 immunohistochemistry in TNBC. The three panels show strong, moderate, and negative Nectin-4 staining in TNBC tissue at 200× magnification. Reproduced from Zeindler et al. (**Zeindler et al., 2019**) under the article's Creative Commons Attribution license."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The open-access study by Althobiti et al. (**Althobiti et al., 2021**) provides a directly reusable tissue panel. Figure 1 shows positive and negative SLC39A6 immunohistochemical staining in invasive breast-cancer epithelial cells. We use this licensed image to illustrate tissue localization, complementing the TNBC prevalence measurements reported in (**Sussman et al., 2014**, **Saravanan et al., 2024**)."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 11.png"),
        "alt": "Figure 14. Open-access SLC39A6 immunohistochemistry. Panel A shows positive staining in the cytoplasm and nuclei of invasive breast-cancer epithelial cells, and panel B shows negative staining. Reproduced from source Figure 1 of Althobiti et al. (Althobiti et al., 2021), *Oestrogen-regulated protein SLC39A6: a biomarker of good prognosis in luminal breast cancer*, under the Creative Commons Attribution 4.0 license (https://creativecommons.org/licenses/by/4.0/). The image was resized for this Wiki; no other changes were made."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 14.** Open-access SLC39A6 immunohistochemistry. Panel A shows positive staining in the cytoplasm and nuclei of invasive breast-cancer epithelial cells, and panel B shows negative staining. Reproduced from source Figure 1 of Althobiti et al. (**Althobiti et al., 2021**), *Oestrogen-regulated protein SLC39A6: a biomarker of good prognosis in luminal breast cancer*, under the Creative Commons Attribution 4.0 license (https://creativecommons.org/licenses/by/4.0/). The image was resized for this Wiki; no other changes were made."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The four validation layers established that TROP2, B7-H4, Nectin-4, and LIV-1 were present as proteins in TNBC tissue, preferentially expressed in malignant cells, detectable across 88% of patients when combined as a panel, and confirmed by immunohistochemistry in clinical specimens. Quantitative proteomics demonstrated tumor-enriched abundance with fold changes ranging from 1.14 to 18.25 depending on the cohort and candidate. Single-cell analysis showed that at least one of the four genes was detected in over 80% of malignant cells, with complementary expression patterns that reduced the fraction of antigen-negative tumor cells. Patient-level genomic profiling confirmed that the four-gene combination covered substantially more cases than any single antigen alone, addressing the heterogeneity observed both within tumors and across the patient population. Together, these results supported advancing all four antigens to epitope-level design."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "However, full-length antigens cannot be used directly in circRNA vaccines due to technical limitations. Long coding sequences reduce circularization efficiency because the splice donor and acceptor must be brought into close proximity for backsplicing. Translation from circRNA is less efficient than from capped linear mRNA and becomes more so with longer open reading frames. Full-length membrane proteins with signal peptides or transmembrane domains may be mistargeted within the cell, reducing their availability for MHC class I presentation (**Chen et al., 2021**; **Qu et al., 2022**). We therefore identified short HLA-A*02:01-restricted epitopes from the four antigens for concatenation into a compact circRNA coding sequence."
        ]
      }
    ]
  },
  {
    "id": "model-epitope-screening",
    "index": "05",
    "kicker": "Epitope Screening",
    "navLabel": "Epitope Screening",
    "title": "Epitope Screening",
    "summary": "",
    "blocks": [
      {
        "type": "subheading",
        "id": "model-heading-24",
        "index": "5.1",
        "title": "HLA-I-restricted candidate epitope prediction"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We extracted the canonical protein sequences of TROP2, B7-H4, Nectin-4, and LIV-1, submitted them to the IEDB MHC-I binding prediction tool, and specified HLA-A*02:01 as the restriction allele, which generated 1,838 overlapping 9-mer peptides for evaluation. A two-stage screening strategy then filtered these candidates: IEDB-based computational prediction assessed binding affinity (IC₅₀ < 500 nM), immunogenicity score, and source-protein topology, reducing the set to 17 peptides, followed by AlphaFold3 structural modeling of peptide-MHC complexes to confirm stable presentation geometry, which yielded 15 final epitopes for experimental validation. The sections below describe the filtering criteria, structural assessments, and the rationale that defined this testable set."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-25",
        "index": "5.1.1",
        "title": "IEDB T Cell Epitope Prediction: MHC Class I Tools Suite"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We chose the Immune Epitope Database and Analysis Resource (IEDB) for this first-pass screen because it is a widely used reference platform for T-cell epitope prediction and a practical gold-standard framework in the field, with curated methods, published benchmarks, and explicit prediction settings (**Yan et al., 2024**). Scanning the canonical protein sequences of TROP2, B7-H4, Nectin-4, and LIV-1 yielded 1,838 overlapping 9-mer peptides. We submitted the four sequences to the IEDB T Cell Epitope Prediction platform under the MHC Class I Tools Suite, using HLA-A*02:01 as the restricting allele. The task combined three complementary readouts. NetMHCpan 4.1 EL evaluated how closely each peptide resembled naturally eluted HLA ligands (**Reynisson et al., 2020**). The Basic Processing Predictions module combined NetMHCpan 4.1 BA with immunoproteasome cleavage and transporter associated with antigen processing (TAP) transport. We used the immunoproteasome setting, a maximum precursor extension of 1, and an alpha factor of 0.2 (**Peters et al., 2003**, **Tenzer et al., 2005**). The Class I pMHC Immunogenicity model assessed peptide-intrinsic sequence features after masking positions 1, 2, and the C-terminal residue, reducing the direct influence of the principal HLA anchor positions (**Calis et al., 2013**). Together, these outputs allowed us to compare HLA-A*02:01 binding, resemblance to naturally presented ligands, antigen-processing conditions, and peptide features associated with T-cell recognition."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We began with HLA-A*02:01 because it is common in several studied populations and has a substantial experimental base for peptide prediction. In a high-resolution cohort spanning 12 populations, HLA-A*02:01:01:01 was the most frequent allele overall, although its frequency differed among populations (**Creary et al., 2021**). A separate survey of 74 SARS-CoV-2 T-cell studies found that HLA-A*02:01 was examined in 55, more than any other allele (**Slieker et al., 2024**). These data made it a practical starting point for building and testing a reproducible screening workflow. We discuss its extension to other alleles below."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-26",
        "index": "5.1.2",
        "title": "A staged screen reduced 1,838 peptides to 17 candidates"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The NetMHCpan 4.1 binding-affinity (BA) model reduced the 1,838 overlapping 9-mers to 83 peptides with a predicted half-maximal inhibitory concentration (IC₅₀) below 500 nM. IEDB lists 500 nM as an established affinity cutoff for selecting HLA-I binders, so this first step prioritized peptides with plausible HLA-A*02:01 binding (**IEDB, 2024**). We then retained peptides with an IEDB HLA-I immunogenicity score above zero, leaving 51. This score weighs amino acids outside the main HLA anchor positions; a positive value favored sequences with features associated with T-cell recognition after binding (**Calis et al., 2013**, **IEDB, 2024**). Finally, we reviewed where each peptide came from in its source protein and selected 17 candidates for experimental testing."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The 83 affinity-filtered peptides included 17 from TROP2, 13 from B7-H4, 15 from Nectin-4, and 38 from LIV-1. The immunogenicity threshold retained 9, 10, 10, and 22 peptides, respectively. A subsequent review of source-protein coordinates and UniProt topology annotations was used to assemble the experimental panel, which contained 4 TROP2, 2 B7-H4, 6 Nectin-4, and 5 LIV-1 peptides, giving 17 candidates in total."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Screening stage**",
          "**TROP2**",
          "**B7-H4**",
          "**Nectin-4**",
          "**LIV-1**",
          "**Total**"
        ],
        "rows": [
          [
            "All overlapping 9-mers",
            "315",
            "274",
            "502",
            "747",
            "1,838"
          ],
          [
            "Predicted IC₅₀ < 500 nM",
            "17",
            "13",
            "15",
            "38",
            "83"
          ],
          [
            "IEDB immunogenicity score > 0",
            "9",
            "10",
            "10",
            "22",
            "51"
          ],
          [
            "Final candidates after topology review",
            "4",
            "2",
            "6",
            "5",
            "17"
          ]
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-27",
        "index": "5.1.3",
        "title": "Protein-context review of the 51 numerically filtered peptides"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Applying both numerical thresholds retained 51 peptides: nine from TROP2, ten from B7-H4, ten from Nectin-4, and twenty-two from LIV-1. Our circRNA encodes the selected epitopes in one polypeptide, from which the target peptides must be released by intracellular processing. The hydrophobic cores of full signal peptides and membrane anchors can direct nascent proteins to the endoplasmic reticulum (**Rapoport, 2007**). If a similar targeting signal formed in the tandem product, it could redirect the entire polypeptide and alter the release of its intended epitopes. We therefore checked each candidate's source region against UniProt annotations (**UniProt Consortium, 2025**) and reviewed its amino-acid composition. This review excluded 34 peptides and reduced the amount of hydrophobic sequence from these regions in the tandem product. The remaining 17 formed the experimental panel."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The table places the numerical evidence beside the decision made for every peptide. Predicted IC₅₀ from NetMHCpan 4.1 BA estimates peptide–HLA binding affinity, the eluted-ligand (EL) percentile rank measures similarity to naturally eluted HLA ligands relative to other peptides, and the immunogenicity score evaluates sequence features after the principal HLA anchor positions are masked. Only the BA-derived IC₅₀ and the pMHC immunogenicity score defined the numerical gates. EL and processing outputs were retained as supporting records rather than additional pass-or-fail criteria."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**Peptide**",
          "**Protein position**",
          "**Predicted IC₅₀, nM**",
          "**NetMHCpan EL percentile rank**",
          "**IEDB immunogenicity score**",
          "**Topology annotation and decision**"
        ],
        "rows": [
          [
            "TROP2",
            "`GLAPPPLRL`",
            "6–14",
            "203.99",
            "0.03",
            "0.00118",
            "Signal peptide"
          ],
          [
            "TROP2",
            "`LLLLVLAAV`",
            "16–24",
            "24.52",
            "0.80",
            "0.07088",
            "Signal peptide"
          ],
          [
            "TROP2",
            "`SVCWCVNSV`",
            "123–131",
            "222.32",
            "3.10",
            "0.08963",
            "Retained"
          ],
          [
            "TROP2",
            "`RLFRERYRL`",
            "178–186",
            "61.63",
            "0.28",
            "0.26342",
            "Retained"
          ],
          [
            "TROP2",
            "`TLIYYLDEI`",
            "256–264",
            "12.55",
            "0.34",
            "0.10266",
            "Retained"
          ],
          [
            "TROP2",
            "`YLDEIPPKF`",
            "260–268",
            "79.58",
            "0.02",
            "0.09175",
            "Retained"
          ],
          [
            "TROP2",
            "`RLTAGLIAV`",
            "272–280",
            "10.02",
            "0.07",
            "0.20971",
            "Transmembrane"
          ],
          [
            "TROP2",
            "`GLIAVIVVV`",
            "276–284",
            "41.76",
            "0.19",
            "0.30701",
            "Transmembrane"
          ],
          [
            "TROP2",
            "`IVVVVVALV`",
            "281–289",
            "426.36",
            "2.50",
            "0.16054",
            "Transmembrane"
          ],
          [
            "B7-H4",
            "`SLGQILFWS`",
            "3–11",
            "328.57",
            "3.30",
            "0.24182",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`ILFWSIISI`",
            "7–15",
            "10.72",
            "0.19",
            "0.24073",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`SIISIIIIL`",
            "11–19",
            "332.68",
            "0.51",
            "0.32169",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`SIIIILAGA`",
            "14–22",
            "229.25",
            "2.00",
            "0.34910",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`IILAGAIAL`",
            "17–25",
            "128.04",
            "0.62",
            "0.24078",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`ILAGAIALI`",
            "18–26",
            "12.11",
            "0.19",
            "0.23672",
            "Signal peptide"
          ],
          [
            "B7-H4",
            "`WLKEGVLGL`",
            "71–79",
            "31.58",
            "0.11",
            "0.11305",
            "Retained"
          ],
          [
            "B7-H4",
            "`AVFADQVIV`",
            "102–110",
            "329.27",
            "0.54",
            "0.10253",
            "Retained"
          ],
          [
            "B7-H4",
            "`SFFAISWAL`",
            "264–272",
            "331.79",
            "2.20",
            "0.26104",
            "Transmembrane"
          ],
          [
            "B7-H4",
            "`AISWALLPL`",
            "267–275",
            "122.80",
            "2.10",
            "0.18101",
            "Transmembrane"
          ],
          [
            "Nectin-4",
            "`FQARLRLRV`",
            "137–145",
            "439.99",
            "1.30",
            "0.12358",
            "Retained"
          ],
          [
            "Nectin-4",
            "`RLRVLVPPL`",
            "142–150",
            "193.10",
            "1.50",
            "0.07056",
            "Retained"
          ],
          [
            "Nectin-4",
            "`AVTSEFHLV`",
            "203–211",
            "357.45",
            "0.44",
            "0.07465",
            "Retained"
          ],
          [
            "Nectin-4",
            "`HILHVSFLA`",
            "238–246",
            "190.78",
            "1.90",
            "0.00574",
            "Retained"
          ],
          [
            "Nectin-4",
            "`FLAEASVRG`",
            "244–252",
            "460.73",
            "1.90",
            "0.06090",
            "Retained"
          ],
          [
            "Nectin-4",
            "`VVVGVIAAL`",
            "351–359",
            "261.34",
            "0.68",
            "0.26886",
            "Transmembrane"
          ],
          [
            "Nectin-4",
            "`VIAALLFCL`",
            "355–363",
            "64.24",
            "1.50",
            "0.09813",
            "Transmembrane"
          ],
          [
            "Nectin-4",
            "`ALLFCLLVV`",
            "358–366",
            "46.65",
            "1.30",
            "0.06602",
            "Transmembrane"
          ],
          [
            "Nectin-4",
            "`LLFCLLVVV`",
            "359–367",
            "37.44",
            "1.50",
            "0.02147",
            "Transmembrane"
          ],
          [
            "Nectin-4",
            "`YINGRGHLV`",
            "502–510",
            "255.92",
            "0.41",
            "0.13512",
            "Retained"
          ],
          [
            "LIV-1",
            "`KLSVILILT`",
            "4–12",
            "279.90",
            "1.40",
            "0.21284",
            "Signal peptide"
          ],
          [
            "LIV-1",
            "`SVILILTFA`",
            "6–14",
            "358.45",
            "1.60",
            "0.25236",
            "Signal peptide"
          ],
          [
            "LIV-1",
            "`VILILTFAL`",
            "7–15",
            "253.64",
            "2.60",
            "0.27772",
            "Signal peptide"
          ],
          [
            "LIV-1",
            "`LILTFALSV`",
            "9–17",
            "20.75",
            "0.58",
            "0.08027",
            "Signal peptide"
          ],
          [
            "LIV-1",
            "`TVSEGTHFL`",
            "194–202",
            "340.45",
            "0.25",
            "0.21229",
            "Retained"
          ],
          [
            "LIV-1",
            "`FLSLLGVIL`",
            "337–345",
            "102.46",
            "0.64",
            "0.06884",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`LLGVILVPL`",
            "340–348",
            "53.25",
            "1.50",
            "0.20006",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`LLSFLVALA`",
            "357–365",
            "33.42",
            "1.60",
            "0.11870",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`FLVALAVGT`",
            "360–368",
            "120.26",
            "2.40",
            "0.13344",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`YFMFLVEHV`",
            "432–440",
            "136.19",
            "1.80",
            "0.19226",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`FMFLVEHVL`",
            "433–441",
            "7.50",
            "0.14",
            "0.21271",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`FLVEHVLTL`",
            "435–443",
            "3.38",
            "0.01",
            "0.19783",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`GVATLAWMV`",
            "591–599",
            "54.75",
            "0.67",
            "0.16213",
            "Retained"
          ],
          [
            "LIV-1",
            "`GLHNFSDGL`",
            "604–612",
            "110.36",
            "0.47",
            "0.00078",
            "Retained"
          ],
          [
            "LIV-1",
            "`SVAVFCHEL`",
            "629–637",
            "436.04",
            "1.20",
            "0.20329",
            "Retained"
          ],
          [
            "LIV-1",
            "`FIGHYAENV`",
            "677–685",
            "35.71",
            "0.50",
            "0.15750",
            "Retained"
          ],
          [
            "LIV-1",
            "`NVSMWIFAL`",
            "684–692",
            "130.10",
            "1.90",
            "0.23224",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`SMWIFALTA`",
            "686–694",
            "48.04",
            "0.95",
            "0.36997",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`WIFALTAGL`",
            "688–696",
            "27.42",
            "1.50",
            "0.15593",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`FMYVALVDM`",
            "697–705",
            "63.80",
            "1.60",
            "0.11580",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`MLLGFGIML`",
            "732–740",
            "18.06",
            "0.23",
            "0.18612",
            "Transmembrane"
          ],
          [
            "LIV-1",
            "`LLGFGIMLL`",
            "733–741",
            "33.39",
            "0.41",
            "0.13240",
            "Transmembrane"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The final panel contained 17 peptides: four from TROP2, two from B7-H4, six from Nectin-4, and five from LIV-1. The table records the topology annotation and the final panel decision for each of the 51 numerically filtered peptides."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The complete IEDB outputs remain available in the full screening dataset."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-7"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The final panel contained 17 peptides: four from TROP2, two from B7-H4, six from Nectin-4, and five from LIV-1. The table records the topology annotation and the final panel decision for each of the 51 numerically filtered peptides. These 17 candidates were selected on sequence-based evidence alone—binding affinity, immunogenicity features, and exclusion of problematic topological regions. However, computational predictions of binding and immunogenicity do not guarantee that a peptide will form a stable, well-presented complex with HLA-A*02:01, or that the resulting peptide-MHC structure will adopt a geometry compatible with T-cell receptor engagement. We therefore subjected all 17 candidates to structural validation using AlphaFold3, which models the three-dimensional structure of peptide-MHC complexes and allows us to assess presentation quality before committing peptides to experimental testing. The structural analysis is described in the following section."
        ]
      }
    ]
  },
  {
    "id": "model-structural-validation",
    "index": "06",
    "kicker": "Structural validation of the 17 candidates",
    "navLabel": "Structural validation of the 17 candidates",
    "title": "Structural validation of the 17 candidates",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "The 17 IEDB-selected peptides met sequence-based criteria for HLA-A*02:01 binding and immunogenicity, but computational predictions cannot confirm whether a peptide will form a stable, well-presented complex in three dimensions or adopt a geometry suitable for T-cell receptor recognition. We used AlphaFold3 to model the structure of each peptide bound to HLA-A*02:01 and assessed complex stability, peptide conformation within the binding groove, and the predicted interface quality for TCR engagement **(Abramson et al., 2024).** This step sits between epitope prediction and experimental testing, asking whether each predicted binder can adopt a plausible loading geometry."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-28",
        "index": "6.1",
        "title": "Models generation"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We submitted each of the 17 candidates once to AlphaFold 3 (Abramson et al., 2024). Each submission returned five sampled models, for 85 in total. We included all five in the measurements. Variation across the five models was used to assess which structural features were consistent across samples."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Confidence scores were high across all 85 models, with peptide-heavy-chain interface pTM values ranging from 0.932 to 0.970 (median 0.956), but they did not distinguish candidates that passed structural review from those that failed (Figure 15). The two rejected peptides had pTM scores of 0.933 and 0.960, both within the range of accepted candidates. AlphaFold3's own confidence metric reports whether a model is self-consistent, not whether the peptide fits the groove correctly. We therefore assessed binding geometry separately using structural measurements derived from the predicted coordinates."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 1.png"),
        "alt": "Figure 15. AlphaFold 3 confidence scores and position-9 fill ratio for the 17 candidate peptides. Each point represents the mean across five models; diamonds mark the two candidates below the fill-ratio criterion. ipTM ranged from 0.932 to 0.970, with a rank correlation of +0.02 between ipTM and fill ratio. HILHVSFLA had an ipTM of 0.960 and an F-pocket fill ratio of 43%."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 15. **AlphaFold 3 confidence scores and position-9 fill ratio for the 17 candidate peptides. Each point represents the mean across five models; diamonds mark the two candidates below the fill-ratio criterion. ipTM ranged from 0.932 to 0.970, with a rank correlation of +0.02 between ipTM and fill ratio. HILHVSFLA had an ipTM of 0.960 and an F-pocket fill ratio of 43%."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-29",
        "index": "6.2",
        "title": "Evaluation criteria"
      },
      {
        "type": "subheading",
        "id": "model-heading-30",
        "index": "6.2.1",
        "title": "What correct loading looks like"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The MHC class I groove is closed at both ends, and two types of interaction hold the peptide in place. First, side chains at positions 2 and 9 (the C-terminus) insert into the B and F pockets, respectively; this anchoring depends on the peptide sequence. Second, heavy-chain residues form a conserved hydrogen-bond network with the peptide backbone** (Saper et al., 1991, Madden, 1995).** Eleven of these bonds recur in HLA-A*02:01 complexes. Because they contact the backbone rather than side chains, we used them as the expected pattern for a correctly loaded 9-mer, regardless of sequence. This provides a countable criterion and an internal positive control."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-31",
        "index": "6.2.2",
        "title": "The conserved network is complete in all seventeen candidates"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Across 85 models and 935 bond determinations, 3 bonds were missing. No bond was absent from all five models of any candidate. This pattern supports the expected loading geometry across the 17 candidates."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "A peptide placed too shallowly, shifted by one residue, or reversed in the groove would be expected to lose several of these contacts. The observed pattern is consistent with the intended chain assignment and peptide orientation, but does not by itself verify every preprocessing step."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "All three missing determinations involved the same bond, between Lys146 and the C-terminal carboxylate. Each occurred in one model only, in GVATLAWMV, GLHNFSDGL or FLAEASVRG. These isolated model-level absences did not change the candidate-level verdicts."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-32",
        "index": "6.2.3",
        "title": "Both ends are anchored, while central side chains remain more exposed"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Figure 16 summarizes side-chain burial by position across the 17 candidates. The anchor positions are most buried, while several central side chains remain more exposed toward the T-cell receptor."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Positions 2 and 9 were highly buried across the 17 candidates: 99.0%–99.9% and 99.4%–100.0%, with medians of 99.8% and 100.0%, respectively. These values confirm the two-anchor pattern but do not distinguish candidates in this dataset. Positions 4 and 8 were more exposed, with median burial of 22.6% and 44.1%; positions 5 and 6 varied most, ranging from 17.8% to 95.3% and from 10.8% to 98.1%, respectively."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The total TCR-facing surface area varied across candidates, from a mean of 147 Å² for WLKEGVLGL to 424 Å² for FQARLRLRV, a nearly threefold range. Burial measures anchor fit; the TCR-facing area measures how much peptide surface remains exposed after loading."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-8"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Figure 16. Per-position side-chain burial for the 17 candidate epitopes, averaged over five models. Grey hatched cells denote glycine, a residue that has no side chain and for which a burial fraction is undefined."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-33",
        "index": "6.2.4",
        "title": "Measurements at the two ends converge across models; those in the middle do not"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We assessed variation across models before interpreting the means. The median standard deviation was 0.0 percentage points at both positions 2 and 9, with maxima of 0.1 and 0.6, respectively. At positions 5 and 6, the medians were 5.5 and 4.8 percentage points, with greater variation in some candidates (Figure 17). We therefore use anchor-position measurements as criteria and report central-segment values as observations."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "This pattern was observed across all 17 candidates."
        ]
      },
      {
        "type": "figure",
        "src": getModelImage("image 6.png"),
        "alt": "Figure 17. Across-model standard deviation of per-position side-chain burial. Each point corresponds to one candidate epitope and the horizontal line is the median. Glycine is excluded from the plot, so some positions have fewer than 17 points."
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Figure 17.** Across-model standard deviation of per-position side-chain burial. Each point corresponds to one candidate epitope and the horizontal line is the median. Glycine is excluded from the plot, so some positions have fewer than 17 points."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-34",
        "index": "6.2.5",
        "title": "A percentage does not reveal whether the F pocket is full"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Burial fraction is normalized by the side chain's own surface area, so it does not show how much absolute area fills the pocket. In this dataset, three candidates had the same position-9 burial of 99.4%, but their absolute buried areas were 60.1, 143.8 and 173.3 Å²."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "We therefore used absolute buried area for position 9 and expressed it relative to a leucine anchor side chain: fill ratio = absolute buried area of the position-9 side chain ÷ 140 Å². Two candidates fell below the criterion: FLAEASVRG at 0.0% and HILHVSFLA at 42.9% (Figure 18). Both were rejected at this tier."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-9"
      },
      {
        "type": "feature",
        "key": "model-panel-10"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Figure 18. Absolute buried area of the position-9 side chain for the 17 systems; error bars are the standard deviation across the five models. The dashed line is the 84 Å² lower bound of the criterion, i.e. 60% of the fill volume of a leucine anchor side chain; the shaded band is the passing range."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-35",
        "index": "6.2.6",
        "title": "Results for all seventeen systems"
      },
      {
        "type": "table",
        "headers": [
          "**Criterion**",
          "**Threshold**",
          "**Basis**"
        ],
        "rows": [
          [
            "Position-2 side-chain burial",
            "≥ 90% in every model",
            "B-pocket filling"
          ],
          [
            "Position-9 side-chain burial",
            "≥ 90% in every model",
            "F-pocket filling"
          ],
          [
            "Conserved hydrogen-bond   network",
            "≥ 10 of 11 in every model",
            "Loading geometry"
          ],
          [
            "Interface steric clash",
            "no < 2.2 Å contact   recurring in all models",
            "Geometric plausibility"
          ],
          [
            "Across-model consistency",
            "identical verdict in all five   models",
            "Excludes single-model noise"
          ],
          [
            "Position-9 side-chain fill   ratio",
            "≥ 60%, i.e. ≥ 84 Å²",
            "F-pocket fill volume"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 12. Acceptance criteria of the structural tier."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Under these criteria, 2 of the 17 candidates failed. FLAEASVRG has glycine at position 9 and therefore no side chain to fill the F pocket; all five models failed this criterion. HILHVSFLA has alanine at position 9 and a fill ratio of 42.9%, below the lower bound. The other 15 candidates passed all six criteria."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Antigen**",
          "**Peptide**",
          "**P2 (%)**",
          "**Position 9 (%)**",
          "**Position-9 fill (Å² / %)**",
          "**Conserved network**",
          "**TCR face (Å²)**",
          "**Verdict**"
        ],
        "rows": [
          [
            "TROP2",
            "RLFRERYRL",
            "99.8",
            "99.7",
            "143.8 / 103",
            "11/11",
            "374",
            "Pass"
          ],
          [
            "TROP2",
            "SVCWCVNSV",
            "99.8",
            "100.0",
            "114.4 / 82",
            "11/11",
            "245",
            "Pass"
          ],
          [
            "TROP2",
            "TLIYYLDEI",
            "99.8",
            "100.0",
            "140.0 / 100",
            "11/11",
            "361",
            "Pass"
          ],
          [
            "TROP2",
            "YLDEIPPKF",
            "99.8",
            "99.4",
            "173.3 / 124",
            "11/11",
            "270",
            "Pass"
          ],
          [
            "B7-H4",
            "AVFADQVIV",
            "99.8",
            "100.0",
            "115.1 / 82",
            "11/11",
            "252",
            "Pass"
          ],
          [
            "B7-H4",
            "WLKEGVLGL",
            "99.8",
            "99.9",
            "140.2 / 100",
            "11/11",
            "147",
            "Pass"
          ],
          [
            "Nectin-4",
            "AVTSEFHLV",
            "99.9",
            "100.0",
            "114.3 / 82",
            "11/11",
            "240",
            "Pass"
          ],
          [
            "Nectin-4",
            "FLAEASVRG",
            "99.8",
            "undefined",
            "0.0 / 0",
            "10/11",
            "293",
            "Rejected"
          ],
          [
            "Nectin-4",
            "FQARLRLRV",
            "99.0",
            "100.0",
            "113.7 / 81",
            "11/11",
            "424",
            "Pass"
          ],
          [
            "Nectin-4",
            "HILHVSFLA",
            "99.9",
            "99.4",
            "60.1 / 43",
            "11/11",
            "269",
            "Rejected"
          ],
          [
            "Nectin-4",
            "RLRVLVPPL",
            "99.8",
            "100.0",
            "139.6 / 100",
            "11/11",
            "259",
            "Pass"
          ],
          [
            "Nectin-4",
            "YINGRGHLV",
            "99.9",
            "100.0",
            "113.5 / 81",
            "11/11",
            "226",
            "Pass"
          ],
          [
            "LIV-1",
            "FIGHYAENV",
            "99.9",
            "100.0",
            "113.9 / 81",
            "11/11",
            "249",
            "Pass"
          ],
          [
            "LIV-1",
            "GLHNFSDGL",
            "99.7",
            "99.7",
            "139.8 / 100",
            "10/11",
            "222",
            "Pass"
          ],
          [
            "LIV-1",
            "GVATLAWMV",
            "99.8",
            "100.0",
            "113.3 / 81",
            "10/11",
            "280",
            "Pass"
          ],
          [
            "LIV-1",
            "SVAVFCHEL",
            "99.8",
            "99.7",
            "139.8 / 100",
            "11/11",
            "277",
            "Pass"
          ],
          [
            "LIV-1",
            "TVSEGTHFL",
            "99.8",
            "99.7",
            "139.5 / 100",
            "11/11",
            "234",
            "Pass"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 13. Structural QC results for the 17 systems; all values are means over five models. The conserved-network column gives the number of bonds present in all five models."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-36",
        "index": "6.2.7",
        "title": "Co-folding setup"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We submitted each peptide with the HLA-A*02:01 heavy chain and β2-microglobulin, using the heavy-chain sequence from Protein Data Bank entry 3UTQ. We included β2-microglobulin because MHC class I is a ternary complex of heavy chain, β2-microglobulin and peptide. Although β2-microglobulin does not contact the peptide, it supports the α1/α2 platform that forms the groove. Structural templates were enabled. The ModelCIF and confidence JSON files for all 85 models are included in the archive described at the end of this section."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "AlphaFold 3 returns ModelCIF files, which require preprocessing before hydrogen bonds can be counted. We applied the same seven steps to all 17 candidates. The workflow below uses TROP2 peptide SVCWCVNSV as an example and reports the result at each step."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-11"
      },
      {
        "type": "prose",
        "paragraphs": [
          "In SVCWCVNSV, the two ends varied little across models: the largest Cα displacement between any pair of models was 0.12 Å at position 1 and 0.25 Å at position 9, within the coordinate uncertainty of crystal structures at comparable resolution. The central segment varied more. At position 6, the valine Cα displacement reached 2.04 Å, while side-chain burial ranged from 28.6% to 93.6% (SD 27.1 percentage points). This variation in burial may reflect differences in side-chain rotamers across models."
        ]
      },
      {
        "type": "feature",
        "key": "model-panel-12"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 10. Item-by-item measurements for SVCWCVNSV across the five models. The tryptophan at position 4 is the largest single contributor to the TCR-facing surface in all five models, contributing 139 to 148 Å², more than half of the 237 to 270 Å² total."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Across all five models, SVCWCVNSV had the required loading geometry and passed to downstream experiments. Trp4 contributed 139–148 Å², more than half of the TCR-facing surface in each model. This identifies Trp4 as the largest single contributor to that exposed surface."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-37",
        "index": "6.2.8",
        "title": "Applying the workflow to the remaining sixteen"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We applied the same seven steps and parameters to the remaining 16 candidates, bringing the analysis to 85 models in total. Across these models, 69 were classified as Pass, 11 as Warning (9 with an amide or histidine flip candidate awaiting correction, and 2 with one interface contact shorter than 2.2 Å), and 5 as Fail. All five Fail models came from Nectin-4 peptide FLAEASVRG, whose position-9 glycine has no side chain to bury in the F pocket."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-38",
        "index": "6.2.9",
        "title": "Data and code availability"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The public archive contains the raw and processed data for this section: AlphaFold 3 job requests and returned ModelCIF and confidence files for all 85 models; cleaned and preprocessed PDB files; per-model and per-system result tables; the data and scripts for Figures 15–18; and the analysis pipeline. These files and scripts are provided to support reproduction of the reported measurements."
        ]
      }
    ]
  },
  {
    "id": "model-discussion",
    "index": "07",
    "kicker": "Discussion",
    "navLabel": "Discussion",
    "title": "Discussion",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "The antigen and epitope selection process combined evidence from multiple biological scales to define a compact, validated input set for circRNA vaccine design. Four tumor-associated antigens—TROP2, B7-H4, Nectin-4, and LIV-1—were evaluated through quantitative proteomics in two TNBC cohorts, single-cell transcriptomics across ten patients, patient-level genomic profiling in TCGA, and published immunohistochemistry studies. All four proteins showed tumor-enriched abundance, preferential expression in malignant cells, and collective coverage of 88% of TNBC cases. From the canonical sequences of these four antigens, we generated 1,838 overlapping 9-mer peptides and applied a two-stage screening strategy: IEDB computational prediction filtered candidates by HLA-A*02:01 binding affinity, immunogenicity score, and source-protein topology, reducing the set to 17 peptides, followed by AlphaFold3 structural modeling to assess peptide-MHC complex stability and geometry, which yielded 15 final epitopes. This progression—from tissue-level protein validation to cell-type localization, patient coverage assessment, sequence-based epitope prediction, and structural confirmation—addressed the key feasibility questions at each stage and produced a defined set of targets for experimental testing."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Several aspects of the pipeline were not pursued due to resource and timeline constraints. Immunopeptidomics—mass spectrometry of peptides eluted from tumor-cell MHC—would directly confirm that our predicted epitopes are naturally presented, but this requires fresh or frozen primary TNBC tissue and specialized HLA immunoprecipitation protocols that were not accessible within the project scope. Molecular dynamics simulations would assess whether the predicted peptide-MHC conformations remain stable over time, but running microsecond-scale simulations with adequate replicates for 15 candidates exceeded available computational resources and would have delayed delivery. We also restricted epitope selection to HLA-A*02:01 to establish the workflow within a manageable timeframe; expanding to additional alleles such as A*24:02 or A*03:01 would increase patient coverage but requires repeating the prediction and validation pipeline for each new restriction element."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Through this integrated workflow—AEIPV (Antigen-Epitope Integration Pipeline for Vaccination)—we completed the selection of four antigens and the screening of 15 HLA-A*02:01-restricted epitopes from an initial pool of 1,838 candidates. These outputs were forwarded to the wet lab for experimental T-cell activation assays. Based on the experimental results, a subset of these epitopes will be selected to construct the final circRNA vaccine, which will encode concatenated epitopes from the four validated antigens. This computational framework provides a systematic, evidence-based approach to antigen and epitope selection that can be adapted to other tumor types, expanded to additional HLA alleles, and refined as new validation data become available."
        ]
      }
    ]
  },
  {
    "id": "model-downloads",
    "index": "08",
    "kicker": "Reproducibility and downloads",
    "navLabel": "Reproducibility and downloads",
    "title": "Reproducibility and downloads",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "The following inventory defines the reproducibility package for this page and keeps each conclusion connected to its input, parameter set, and output."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Component**",
          "**Public input**",
          "**Key recorded parameters**",
          "**Team output**"
        ],
        "rows": [
          [
            "Proteomics",
            "PXD024322 and PXD028102",
            "Cohort definition, pairing, TMT batch, differential model, FDR method",
            "Differential-abundance tables and candidate plots"
          ],
          [
            "Single-cell analysis",
            "GSE176078",
            "TNBC sample list, quality control, SCTransform v2, 3,000 variable genes, Harmony components, Leiden resolution, pseudobulk design",
            "Cell metadata, UMAPs, detection table, differential-expression table, CID3963 sensitivity analysis"
          ],
          [
            "Patient coverage",
            "TCGA Breast Invasive Carcinoma PanCancer Atlas",
            "115 TNBC cases, `AMP EXP>=0.5`, union across four genes",
            "Patient-level coverage table and OncoPrint"
          ],
          [
            "Histopathology",
            "Peer-reviewed human tissue studies, with TNBC-specific studies for prevalence",
            "Sample size, tissue setting, localization, scoring rule",
            "Evidence table with source-level citations"
          ],
          [
            "Epitope prediction",
            "UniProt canonical sequences and IEDB Class I workflow",
            "HLA-A*02:01, 9-mers, NetMHCpan 4.1 EL and BA, immunoproteasome, TAP extension 1, alpha 0.2, masked positions 1, 2, and C terminus",
            "Complete prediction exports, the 51-candidate topology table, and the final 17-peptide set"
          ],
          [
            "AlphaFold 3 structure prediction",
            "Cleaned and preprocessed PDB files",
            "85 models total, AlphaFold 3 job requests, ModelCIF format, confidence scoring method",
            "ModelCIF and confidence files for all 85 models, per-model and per-system result tables, data and scripts for Figures 15–18, analysis pipeline"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 15"
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The GSE176078 analysis package indexes the single-cell workflow, execution order, input checksums, scripts, processed objects, result tables and figures. For the representative structural run, it includes the AlphaFold 3 job request, selected model and confidence summary file."
        ]
      },
      {
        "type": "feature",
        "key": "model-downloads"
      }
    ]
  },
  {
    "id": "model-references",
    "index": "09",
    "kicker": "References",
    "navLabel": "References",
    "title": "References",
    "summary": "",
    "blocks": [
      {
        "type": "feature",
        "key": "model-references"
      }
    ]
  },
  {
    "id": "model-cell2dose",
    "index": "10",
    "kicker": "Cell2Dose",
    "navLabel": "Cell2Dose",
    "title": "Cell2Dose",
    "summary": "",
    "blocks": []
  },
  {
    "id": "model-sst-qn",
    "index": "11",
    "kicker": "SST-QN",
    "navLabel": "SST-QN",
    "title": "SST-QN",
    "summary": "",
    "blocks": []
  }
];

export const modelPanels: Record<string, ModelPanel> = {
  "model-panel-1": {
    "kind": "fold",
    "title": "Detailed scoring criteria",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "**Localization (L, 0–5 points)** distinguishes membrane proteins from intracellular targets. Membrane-localized antigens (5 points) are accessible to antibody-based therapies and can be targeted by both arms of the adaptive immune system. Intracellular proteins (3 points) require processing and MHC presentation for T-cell recognition, making them suitable for vaccines but not for antibodies alone. Antigens with uncertain or unfavorable localization receive 0 points."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Tumor specificity (S, 0–2 points)** reflects how selectively the antigen is expressed in tumor versus normal tissue. Tumor-specific antigens such as neoantigens or cancer-testis antigens (2 points) minimize the risk of autoimmunity. Tumor-associated antigens that are overexpressed in cancer but also present in normal tissues (1 point) are acceptable if the normal expression is low or restricted to expendable compartments. Antigens broadly expressed across essential normal tissues receive 0 points."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**Prognostic association (P, 0–1 point)** captures whether high antigen expression correlates with worse survival in TNBC patient cohorts. A candidate receives 1 point if published studies report a statistically significant association between elevated expression and at least one adverse survival endpoint—overall survival (OS), disease-free survival (DFS), relapse-free survival (RFS), metastasis-free survival (MFS), or distant metastasis-free survival (DMFS)—in human TNBC cohorts. Antigens without such evidence receive 0 points. This criterion identifies targets whose elimination may confer clinical benefit."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "**TNBC therapeutic validation depth (T, 0–2 points)** assesses the strength of clinical evidence that targeting the antigen can elicit anti-tumor effects specifically in TNBC. We refined this dimension from the original framework to distinguish between regulatory approval, replicated clinical signals, and exploratory trials. A candidate receives 2 points if an antigen-directed therapy has obtained regulatory approval for a TNBC indication, supported by randomized trial data showing survival benefit. One point is awarded if there is replicated clinical evidence of anti-tumor activity in TNBC—such as objective responses observed across independent cohorts, different drugs targeting the same antigen, or single-agent plus combination signals. Zero points are given when clinical exploration has been initiated but no efficacy signal has emerged, when trials have failed, or when the only evidence comes from other cancer types. This distinction is critical: many antigens have been \"targeted\" in early-phase trials without demonstrating benefit, and efficacy in other cancers does not guarantee relevance in TNBC."
        ]
      }
    ]
  },
  "model-panel-2": {
    "kind": "tabs",
    "title": "Survival evidence",
    "entries": [
      {
        "title": "TROP2",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Li et al. (2025) analyzed 80 TNBC patients and stratified them by TROP2 expression level measured by immunohistochemistry. The high-expression group showed significantly poorer overall survival compared to the low-expression group (P < 0.05). TROP2 expression was also associated with a higher tumor grade and more advanced stage. The median follow-up time was 60 months. This study provided direct evidence that TROP2 is not only a therapeutic target but also a prognostic marker in TNBC."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Figure 1.** Overall survival among 80 patients with TNBC, grouped by high or low TROP2 expression. High TROP2 expression was associated with significantly shorter overall survival (Li et al., 2025)."
            ]
          },
          {
            "type": "figure",
            "src": getModelImage("image 8.png"),
            "alt": "Figure 1. Overall survival among 80 patients with TNBC, grouped by high or low TROP2 expression. High TROP2 expression was associated with significantly shorter overall survival (Li et al., 2025)."
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Reference:** Li M, Zhang Y, Wang X, et al. TROP2 is a prognostic biomarker and correlates with immune infiltration in triple-negative breast cancer. *Adv Sci.* 2025;12(3):2409835. [https://doi.org/10.1002/advs.202409835](https://doi.org/10.1002/advs.202409835)"
            ]
          }
        ]
      },
      {
        "title": "B7-H4",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Wang et al. (2018) evaluated B7-H4 expression in 65 TNBC patients and found that high B7-H4 expression was significantly associated with shorter overall survival (P = 0.002) and earlier recurrence. B7-H4 staining intensity remained associated with overall survival in multivariate analysis, indicating it is an independent prognostic factor. The study also observed that B7-H4 expression on tumor cells was higher than on tumor-infiltrating lymphocytes, suggesting a tumor-intrinsic role. The median follow-up was 42 months."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Figure 2.** Overall survival of patients with high or low B7-H4 expression in a 65-patient TNBC cohort. High B7-H4 was associated with shorter survival and earlier recurrence (Wang et al., 2018)."
            ]
          },
          {
            "type": "figure",
            "src": getModelImage("image.png"),
            "alt": "Figure 2. Overall survival of patients with high or low B7-H4 expression in a 65-patient TNBC cohort. High B7-H4 was associated with shorter survival and earlier recurrence (Wang et al., 2018)."
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Reference:** Wang L, Yang C, Wang X, et al. B7-H4 expression in triple-negative breast cancer is associated with tumor-infiltrating lymphocytes and predicts poor prognosis. *Cancer Cell Int.* 2018;18:92. [https://doi.org/10.1186/s12935-018-0597-9](https://doi.org/10.1186/s12935-018-0597-9)"
            ]
          }
        ]
      },
      {
        "title": "Nectin-4",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Son et al. (2025) analyzed gene expression data from 103 basal-like 1 (BL1) TNBC patients and stratified them by Nectin-4 (*PVRL4*) expression. High Nectin-4 expression was associated with worse overall survival in this molecularly defined TNBC subtype. The BL1 subtype represents a distinct group within TNBC characterized by elevated cell-cycle and DNA-damage-response signatures. An earlier study by Siddharth et al. (2017) also reported that high *PVRL4* expression was associated with reduced metastasis-free survival in TNBC and served as an independent poor-prognostic factor in multivariate analysis."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Figure 3.** Overall survival in 103 patients classified as basal-like 1 TNBC, grouped by Nectin-4 (*PVRL4*) expression. High Nectin-4 was associated with worse outcomes in this subtype (Son et al., 2025)."
            ]
          },
          {
            "type": "figure",
            "src": getModelImage("image 15.png"),
            "alt": "Figure 3. Overall survival in 103 patients classified as basal-like 1 TNBC, grouped by Nectin-4 (*PVRL4*) expression. High Nectin-4 was associated with worse outcomes in this subtype (Son et al., 2025)."
          },
          {
            "type": "prose",
            "paragraphs": [
              "Son JY, Kim S, Park J, et al. Nectin-4 as a prognostic biomarker in basal-like 1 triple-negative breast cancer. *J Int Immunopharmacol Med.* 2025;1:100013. [https://doi.org/10.53941/jiim.2025.100013](https://doi.org/10.53941/jiim.2025.100013)"
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Siddharth S, Goutam K, Das S, et al. Nectin-4 is a breast cancer stem cell marker that induces WNT/β-catenin signaling via Pi3k/Akt axis. *Int J Biochem Cell Biol.* 2017;89:85-94. [https://doi.org/10.1016/j.biocel.2017.06.007](https://doi.org/10.1016/j.biocel.2017.06.007)"
            ]
          }
        ]
      },
      {
        "title": "LIV-1",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Xu et al. (2024) performed immunohistochemical analysis of LIV-1 (ZIP6) in TNBC tissue specimens and stratified patients by staining intensity (0 to 3+). Patients with 3+ LIV-1 intensity had a median survival of approximately 4.44 years, compared to 5.47 years for those with 2+ intensity. LIV-1 expression was higher in tumor tissue compared to adjacent normal tissue and was further elevated in high-grade tumors and after chemotherapy. The study defined LIV-1 as a poor prognostic factor in TNBC. Another study by Saravanan et al. (2024) corroborated these findings using transcriptomic data, showing that high *SLC39A6* expression was associated with worse disease-free survival and overall survival in TNBC cohorts."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "**Figure 4.** Survival of patients with TNBC stratified by LIV-1 staining intensity. Higher intensity (3+) was associated with shorter survival compared to moderate intensity (2+) (Xu et al., 2024)."
            ]
          },
          {
            "type": "figure",
            "src": getModelImage("image 7.png"),
            "alt": "Figure 4. Survival of patients with TNBC stratified by LIV-1 staining intensity. Higher intensity (3+) was associated with shorter survival compared to moderate intensity (2+) (Xu et al., 2024)."
          },
          {
            "type": "prose",
            "paragraphs": [
              "**References:** Xu Y, Chen L, Wang T, et al. LIV-1 is a prognostic marker and therapeutic target in triple-negative breast cancer. *Chin Med J.* 2024;137(3):324-334. [https://doi.org/10.1097/CM9.0000000000002930](https://doi.org/10.1097/CM9.0000000000002930)"
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Saravanan S, Vimala Devi M, Krishnan R. Prognostic significance of LIV-1/SLC39A6 in triple-negative breast cancer. *J Cell Physiol.* 2024;239(3):e31203. [https://doi.org/10.1002/jcp.31203](https://doi.org/10.1002/jcp.31203)"
            ]
          }
        ]
      }
    ]
  },
  "model-panel-3": {
    "kind": "chart",
    "chart": "volcano-024322"
  },
  "model-panel-4": {
    "kind": "chart",
    "chart": "volcano-028102"
  },
  "model-panel-5": {
    "kind": "fold",
    "title": "Proteomic datasets and statistical methods",
    "blocks": [
      {
        "type": "subheading",
        "id": "model-heading-8",
        "index": "4.3.5",
        "title": "PXD024322 cohort construction"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We downloaded the authors' supplementary quantitative-proteomics workbook and its accompanying clinical tables for PXD024322 (**Asleh et al., 2022**). The abundance matrix contained 9,088 protein groups measured by tandem mass tag proteomics across 38 experimental batches. We matched the quantitative columns to the sample identifiers and batch labels in the supplementary metadata. Tumors were included when the clinical annotation identified them as TNBC, and normal samples were included when the tissue annotation indicated normal breast. This produced 88 TNBC tumors and 38 normal-breast samples. The values supplied by the authors were already on a log2 relative-abundance scale, so we used them directly in the analysis."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "For every protein, we required at least two non-missing abundance values in both the TNBC and normal groups before fitting a differential-abundance model. Of the 9,088 protein groups, 8,734 met this requirement. The design matrix was `~ Batch + Condition`, with normal breast as the reference group. We fitted the model with `limma`, applied empirical Bayes moderation with `trend = TRUE` and `robust = TRUE`, and extracted the `ConditionTNBC` coefficient (**Ritchie et al., 2015**). This coefficient is the reported log2 fold change after accounting for the TMT batch structure. The Benjamini-Hochberg method was applied across all tested proteins to control the false discovery rate (**Benjamini and Hochberg, 1995**)."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-9",
        "index": "4.3.6",
        "title": "PXD028102 paired analysis"
      },
      {
        "type": "prose",
        "paragraphs": [
          "For PXD028102, we extracted the protein-abundance matrix from sheet `B. Profiling abundance` in the authors' Supplementary Table S2 (**Gong et al., 2022**). The matrix contained 7,531 gene products measured on an author-provided log2 scale. The cohort included 82 TNBC tumors and 66 normal-adjacent tissue samples. Sixty-six patients had both specimen types and were retained for the primary paired analysis, while the 16 tumor-only cases were retained in the cohort description but were not included in the paired model."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "For the paired abundance model, low-abundance entries were imputed within each sample at one log2 unit below that sample's first percentile of observed values. We then fitted `~ PatientID + Condition` with `limma`, using normal-adjacent tissue as the reference and the 66 patient identifiers as blocking terms (**Ritchie et al., 2015**). Empirical Bayes moderation used `trend = TRUE` and `robust = TRUE`, and *P* values were adjusted across 7,531 proteins with the Benjamini-Hochberg procedure (**Benjamini and Hochberg, 1995**). We repeated the model with three additional low-abundance settings, and the target-level directions remained consistent across these runs."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The primary comparison in PXD028102 was the paired tumor-to-adjacent-normal abundance model. This model provided the quantitative evidence used for TROP2, B7-H4, and Nectin-4, while LIV-1 was evaluated with the PXD024322 abundance model."
        ]
      },
      {
        "type": "subheading",
        "id": "model-heading-10",
        "index": "4.3.7",
        "title": "Reporting and reproducibility"
      },
      {
        "type": "prose",
        "paragraphs": [
          "For both datasets, differential abundance was analyzed with the model appropriate to the study design. The volcano plots show the fitted log2 fold changes and adjusted *P* values across the full tested proteome. The candidate panels show the source measurements used for TROP2, B7-H4, Nectin-4, and LIV-1. The analysis package retains the extracted abundance matrices, sample metadata, cohort assignments, model outputs, target summaries, and plot-ready tables, so every value in Figures 5–8 can be traced to its source sample and statistical model. The PXD028102 paired model handles the original observation pattern explicitly (**Lazar et al., 2016**)."
        ]
      }
    ]
  },
  "model-panel-6": {
    "kind": "tabs",
    "title": "Single-cell dataset, processing, and statistical methods",
    "entries": [
      {
        "title": "Source object and TNBC sample selection",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We used the processed GSE176078 breast-cancer atlas distributed through CELLxGENE under dataset identifier `36ab5d3d-158e-4988-9700-e14fc7102fe4` (**Wu et al., 2021**). The downloaded H5AD-formatted AnnData object contained 100,064 cells, 29,067 genes, the deposited raw unique molecular identifier (UMI) count matrix, patient identifiers, breast-cancer subtype labels, and the authors' cell annotations. The archived input file is 839,092,106 bytes and has Secure Hash Algorithm 256-bit (SHA-256) checksum `b667e420b2584e389c6c8fd9e0063cb395bb270a51c8979e6c978a0d06038db5`."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "We selected the ten samples labelled as TNBC in the authors' integration configuration: CID3946, CID3963, CID44041, CID4465, CID4495, CID44971, CID44991, CID4513, CID4515, and CID4523. The deposited major lineages were then mapped to four compartments. Cancer Epithelial cells were assigned to the malignant compartment. T cells, B cells, plasmablasts, and myeloid cells were assigned to the immune compartment. Cancer-associated fibroblasts, endothelial cells, and perivascular-like cells were assigned to the stromal compartment. Normal Epithelial cells were retained as a separate contextual group."
            ]
          }
        ]
      },
      {
        "title": "Patient-adaptive quality control",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Quality-control values were recalculated from the raw UMI matrix. For every cell, we calculated total UMI count, number of detected genes, and the percentage of counts assigned to mitochondrial genes. The recalculated values agreed closely with the deposited metrics, with correlations above 0.9999. Because library distributions differed among patients, thresholds were calculated separately for each donor. Cells below the patient-specific lower thresholds or above the mitochondrial threshold were excluded from downstream analysis. The resulting TNBC subset contained 39,324 cells, providing the input for integration and state-resolved expression analysis."
            ]
          }
        ]
      },
      {
        "title": "Normalization, integration, clustering, and annotation audit",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "The filtered count matrix was imported into Seurat. Genes detected in fewer than three cells were omitted when the object was created. Counts were normalized with SCTransform v2 using 3,000 variable genes, after which 50 principal components were calculated (**Hafemeister and Satija, 2019**). Harmony was run on the principal-component space with `donor_id` as the grouping variable, dimensions 1–30, and a maximum of 20 iterations (**Korsunsky et al., 2019**). The same 30 Harmony dimensions were used to build a 20-nearest-neighbor graph. Leiden clustering used algorithm 4 and resolution 0.6, producing 19 clusters. UMAP used 30 neighbors, a minimum distance of 0.3, and the same random seed."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The four broad compartments summarized in Figure 9 came from the deposited lineage annotations, while marker expression was used as an independent check on their biological identity. *EPCAM*, *KRT8*, *KRT18*, and *KRT19* supported the epithelial and malignant annotations. *PTPRC* marked immune cells. *COL1A1*, *COL1A2*, and *DCN* supported fibroblast-rich stromal clusters, while *PECAM1*, *VWF*, and *KDR* supported endothelial clusters. Five clusters were dominated by malignant cells: cluster 4 contained 3,512 malignant cells among 3,523 cells, cluster 7 contained 1,817 of 2,086, cluster 11 contained 1,706 of 1,780, cluster 14 contained 1,051 of 1,259, and cluster 17 contained 794 of 808. A further 417 malignant cells occurred in cluster 5, which also contained 2,472 stromal cells. These counts are the basis for the UMAP description in the main text."
            ]
          }
        ]
      },
      {
        "title": "Candidate-gene detection and malignant-cell coverage",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Detection was defined directly from the raw count matrix. A cell was positive for a candidate gene when its UMI count for that gene was greater than zero. Detection rates were first calculated for each patient and compartment, and the table in the main text reports the median across patients. Malignant-cell coverage was the fraction of malignant cells with at least one of *TACSTD2*, *VTCN1*, *NECTIN4*, or *SLC39A6* detected. Pairwise overlap was summarized with the Jaccard index, calculated as the number of malignant cells positive for both genes divided by the number positive for either gene. We also counted every one-gene, multi-gene, four-gene, and no-gene detection pattern. This yielded 81.4% overall malignant-cell coverage, a patient range of 52.5% to 97.8%, pairwise Jaccard indices of 0.221 to 0.438, 7.3% of malignant cells with all four genes detected, and 18.6% with none detected."
            ]
          }
        ]
      },
      {
        "title": "Patient-level pseudobulk analysis",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Raw UMI counts were summed within each patient and compartment before differential testing. Immune and stromal counts were combined to form the non-malignant comparison, while normal epithelial cells remained outside the primary contrast. The paired design included the eight patients with matched malignant and non-malignant pseudobulk libraries after quality control."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The pseudobulk matrix was analyzed with edgeR (**Robinson et al., 2010**). We created a `DGEList`, removed low-information genes with `filterByExpr`, applied trimmed mean of M-values normalization, and fitted the design `~ donor_id + compartment`. Dispersion estimation and quasi-likelihood fitting used robust settings. The malignant effect was tested with `glmQLFTest` for the `compartmentmalignant` coefficient, and the Benjamini-Hochberg method controlled the FDR. Patient-level median counts per million were calculated separately for malignant and non-malignant pseudobulk samples. This patient-aware design treats patients, rather than individual cells, as biological replicates (**Crowell et al., 2020**)."
            ]
          }
        ]
      },
      {
        "title": "Sample-label and treatment sensitivity analyses",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We repeated the pseudobulk analysis under an alternative sample-label specification and a treatment-aware subset. All four genes retained the same direction of malignant-cell enrichment across these analyses, supporting the consistency of the cell-localization result across cohort definitions."
            ]
          }
        ]
      }
    ]
  },
  "model-panel-7": {
    "kind": "tabs",
    "title": "IEDB inputs, parameters, and filtering rules",
    "entries": [
      {
        "title": "Protein inputs and peptide enumeration",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "Reviewed canonical human protein sequences were downloaded from UniProtKB for TROP2, B7-H4, Nectin-4, and LIV-1 (**UniProt Consortium, 2025**). The accessions were P09758, Q7Z7D3, Q96NY8, and Q13433, respectively. Each FASTA sequence was submitted separately to the IEDB T Cell Prediction Class I workflow (**Yan et al., 2024**). Peptide length was fixed at nine amino acids and the restricting allele was HLA-A*02:01. IEDB scanned every overlapping 9-mer, retaining the 1-based start and end position within the canonical protein. The four inputs produced 315 TROP2 peptides, 274 B7-H4 peptides, 502 Nectin-4 peptides, and 747 LIV-1 peptides, for a total of 1,838."
            ]
          }
        ]
      },
      {
        "title": "IEDB model configuration",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "The following settings were entered in the IEDB prediction page for each protein:"
            ]
          },
          {
            "type": "table",
            "headers": [
              "**IEDB component**",
              "**Setting**",
              "**Purpose in this workflow**"
            ],
            "rows": [
              [
                "Peptide length",
                "9 amino acids",
                "Matches the canonical length preference used for the initial HLA-A*02:01 screen"
              ],
              [
                "HLA allele",
                "HLA-A*02:01",
                "Defines the first population-relevant allele for method development"
              ],
              [
                "HLA-I binding and elution",
                "NetMHCpan 4.1 EL",
                "Provides a ligand-related supporting output and was not used as a numerical gate (**Reynisson et al., 2020**)"
              ],
              [
                "HLA-I processing",
                "Basic Processing Predictions",
                "Provides proteasomal-cleavage and TAP-transport supporting outputs; no separate pass-or-fail rule was applied (**Peters et al., 2003**, **Tenzer et al., 2005**)"
              ],
              [
                "Binding model inside processing",
                "NetMHCpan 4.1 BA",
                "Supplies the predicted IC₅₀ used for the first numerical gate"
              ],
              [
                "Proteasome cleavage",
                "Immunoproteasome",
                "Represents the interferon (IFN)-responsive proteasome context expected in antigen-presenting and inflamed tumor settings"
              ],
              [
                "Maximum precursor extension",
                "1",
                "Uses the configured N-terminal precursor extension in the TAP component"
              ],
              [
                "TAP alpha factor",
                "0.2",
                "Uses the selected weighting parameter in the IEDB processing model"
              ],
              [
                "HLA-I pMHC immunogenicity",
                "Positions 1, 2, and C terminus masked",
                "Supplies the second numerical gate after masking the principal HLA anchor positions (**Calis et al., 2013**)"
              ]
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "NetMHCpan 4.1 EL, Basic Processing Predictions, and the IEDB pMHC immunogenicity model were run together so that every peptide received the corresponding outputs in the same export. For the actual numerical screen, only the NetMHCpan 4.1 BA predicted IC₅₀ and the IEDB pMHC immunogenicity score were used as pass-or-fail criteria. The EL percentile rank and the processing scores were retained as supporting outputs for comparative candidate assessment. The Basic Processing module combined an immunoproteasome cleavage model, transporter associated with antigen processing transport, and NetMHCpan 4.1 BA."
            ]
          }
        ]
      },
      {
        "title": "Sequential filtering and topology review",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "The first numerical filter retained peptides with a NetMHCpan 4.1 BA predicted IC₅₀ below 500 nM. This produced 83 peptides, comprising 17 from TROP2, 13 from B7-H4, 15 from Nectin-4, and 38 from LIV-1. The second filter required an IEDB immunogenicity score above zero. It retained 51 peptides, comprising 9 from TROP2, 10 from B7-H4, 10 from Nectin-4, and 22 from LIV-1. EL percentile rank and the processing total score were retained as supporting fields for every candidate record."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "The 51 sequences were matched to the UniProt topology intervals listed in the main text. Source-region annotation and sequence composition were used to exclude 34 candidates, as recorded in the candidate table. The final panel contained four TROP2 peptides, two B7-H4 peptides, six Nectin-4 peptides, and five LIV-1 peptides. These 17 sequences are the final output of this module."
            ]
          }
        ]
      },
      {
        "title": "Output audit",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "All screening counts were calculated from the four complete IEDB result exports. For each candidate, the audited record retains the source protein and accession, exact 9-mer sequence, 1-based canonical coordinates, NetMHCpan 4.1 BA predicted IC₅₀, NetMHCpan 4.1 EL percentile rank, IEDB processing outputs, IEDB immunogenicity score, and topology-review decision. The main table presents the fields used to explain the numerical screen and topology decision, while the complete export preserves the additional processing scores. Duplicate peptide strings from different protein positions remain separate records because their source coordinates are part of the evidence."
            ]
          }
        ]
      }
    ]
  },
  "model-panel-8": {
    "kind": "chart",
    "chart": "burial-heatmap"
  },
  "model-panel-9": {
    "kind": "fold",
    "title": "How the 60% bound was derived",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "The C-terminal anchor motif of HLA-A*02:01 is valine or leucine, with isoleucine and methionine within tolerance (Falk et al., 1991); the measured fill volume of leucine and isoleucine in this dataset is 139.5 to 143.8 Å², and 140 Å² is taken as the reference."
        ]
      },
      {
        "type": "table",
        "headers": [
          "**Position-9 residue**",
          "**Systems**",
          "**Burial (%)**",
          "**Absolute buried area (Å²)**",
          "**Fill ratio (%)**"
        ],
        "rows": [
          [
            "Gly",
            "1",
            "undefined",
            "0.0",
            "0.0"
          ],
          [
            "Ala",
            "1",
            "99.4",
            "60.1 ± 0.4",
            "42.9"
          ],
          [
            "Val",
            "7",
            "100.0",
            "113.3 – 115.1",
            "80.9 – 82.2"
          ],
          [
            "Leu / Ile",
            "7",
            "99.7 – 100.0",
            "139.5 – 143.8",
            "99.7 – 102.7"
          ],
          [
            "Phe",
            "1",
            "99.4",
            "173.3 ± 0.5",
            "123.8"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Table 11. Fill volume summarized by the type of anchor residue at position 9. Apart from glycine, the burial column shows almost no difference, whereas the fill-ratio column separates the residues according to size."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Abualrous et al. compared H-2Kb/SIINFEKL peptides with leucine, alanine or glycine at the C-terminus. The leucine peptide was most stable, alanine gave intermediate stabilization, and glycine was markedly destabilizing. Umbrella sampling estimated a dissociation free-energy barrier about 11 kcal/mol higher for leucine than alanine (**Abualrous et al., 2015**). These findings are consistent with studies linking the C-terminal anchor to MHC class I complex stability and reporting that stability predicts immunogenicity better than affinity (**Bouvier and Wiley, 1994**, **Harndahl et al., 2012**)."
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "Across the five models, alanine candidates had fill ratios up to 43.3%; the lowest passing candidate was 80.4%. We set the lower bound at 60% (84 Å²), within this observed gap. Any cutoff between 44% and 80% gives the same classification for all 17 systems. Two candidates fall below the bound: FLAEASVRG at 0.0% and HILHVSFLA at 42.9%."
        ]
      }
    ]
  },
  "model-panel-10": {
    "kind": "chart",
    "chart": "p9-volume"
  },
  "model-panel-11": {
    "kind": "tabs",
    "title": "Structural processing",
    "entries": [
      {
        "title": "Step 1 · Cleaning the structure and standardizing nomenclature",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "The raw output contains non-polymer atoms and alternate conformations, and chain identifiers vary across jobs. In PyMOL (Schrödinger, n.d.) we removed these atoms and conformations, renamed the chains A (heavy chain), B (β2-microglobulin) and C (peptide), and renumbered peptide residues 1–9. Coordinates were unchanged; consistent chain IDs and numbering allow the same selections to be applied across all 85 models."
            ]
          }
        ]
      },
      {
        "title": "Step 2 · Rebuilding hydrogens and assigning protonation states",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "AlphaFold output contains no hydrogen atoms. Without them, the terminal N and O atoms of Asn and Gln side chains can be difficult to distinguish, and His side-chain orientation may also be uncertain. A wrongly assigned amide may create a close acceptor–acceptor contact that a distance-only method could count as a hydrogen bond. We therefore processed each model with PDB2PQR (Dolinsky et al., 2007) and PROPKA (Olsson et al., 2011) at pH 7.4 with the AMBER force field to add hydrogens, correct side-chain orientations and assign histidine tautomeric states."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "For SVCWCVNSV, preprocessing changed three hydrogen-bond calls. Flipping the Asn7 amide enabled a hydrogen bond with heavy-chain Gln155. The distance between the Cys3 backbone oxygen and His70 decreased from 3.58 Å to 2.91 Å, supporting an unambiguous hydrogen-bond assignment. A Cys5–His70 contact was excluded because both atoms are acceptors."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "All hydrogen-bond measurements in this section used preprocessed structures."
            ]
          }
        ]
      },
      {
        "title": "Step 3 · Per-residue side-chain burial",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We calculated the solvent-accessible surface area (SASA) (Lee and Richards, 1971) of each peptide side chain in both the complex and the free peptide. For the free-peptide measurement, we removed the heavy chain and β2-microglobulin while keeping peptide coordinates fixed. The decrease in SASA upon complex formation is the area buried during binding."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "SVCWCVNSV showed the expected two-anchor pattern: V2 and V9 were 99.8% and 100.0% buried, respectively, and the absolute buried area at V9 was 114.4 ± 1.1 Å². W4 was 32.7% buried, leaving 139–148 Å² of its side-chain surface exposed. Burial at positions 3, 5, 6 and 7 fell between these values."
            ]
          }
        ]
      },
      {
        "title": "Step 4 · Typing hydrogen bonds before counting them",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We screened each candidate atom pair for distance and donor–acceptor compatibility. Nitrogen, oxygen or sulfur heavy atoms had to be within 3.6 Å; contacts shorter than 2.2 Å were classified as clashes. Backbone N was treated as a donor and backbone O as an acceptor. Side-chain roles were assigned by residue type and protonation state. Only donor–acceptor pairs were counted, excluding close acceptor–acceptor contacts. We recorded backbone and side-chain hydrogen bonds separately."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "Across the five models, SVCWCVNSV formed 16–19 hydrogen bonds with the heavy chain. Of these, 12–14 involved the peptide backbone and 3–5 involved side chains. Because the conserved backbone network is expected in correctly loaded 9-mers, the total count is not useful for ranking epitopes. Most peptide side chains remained exposed toward the T-cell receptor."
            ]
          }
        ]
      },
      {
        "title": "Step 5 · Measuring the eleven conserved bonds individually",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We defined the 11 conserved bonds as specific atom pairs: three contact the peptide backbone near its N-terminus (Tyr7, Tyr159, Tyr171); two connect Glu63 and Lys66 to position 2 in the B pocket; one connects Tyr99 to position 3 at the groove floor; and five involve Trp147, Asp77, Tyr84, Thr143 and Lys146 near the F pocket. We checked each heavy-atom pair against the 3.6 Å cutoff and recorded the number present and the identity of any missing bond."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "All five SVCWCVNSV models retained all 11 bonds."
            ]
          }
        ]
      },
      {
        "title": "Step 6 · Geometric plausibility check",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "At each interface, we checked for heavy-atom contacts shorter than 2.2 Å and for amide or histidine flip candidates remaining after preprocessing. Short contacts can indicate overly compressed local geometry and may affect measurements involving those atoms. Remaining flip candidates require manual review of side-chain orientation. We recorded both as warnings; neither changed the system-level classification."
            ]
          },
          {
            "type": "prose",
            "paragraphs": [
              "None of the five SVCWCVNSV models had a steric clash or a remaining flip candidate."
            ]
          }
        ]
      },
      {
        "title": "Step 7 · Aggregating the five models into a single row",
        "blocks": [
          {
            "type": "prose",
            "paragraphs": [
              "We applied steps 1–6 separately to each of the five models, then summarized the results across models. We report each measurement as a mean and its between-model dispersion, and retain the raw value for each model. Conclusions are limited to findings consistent across the five models."
            ]
          }
        ]
      }
    ]
  },
  "model-panel-12": {
    "kind": "transpose",
    "table": {
      "type": "table",
      "headers": [
        "**Measurement**",
        "**model 0**",
        "**model 1**",
        "**model 2**",
        "**model 3**",
        "**model 4**"
      ],
      "rows": [
        [
          "Position-2 side-chain burial   (%)",
          "99.9",
          "99.8",
          "99.7",
          "99.7",
          "99.9"
        ],
        [
          "Position-9 side-chain burial   (%)",
          "100.0",
          "100.0",
          "100.0",
          "100.0",
          "100.0"
        ],
        [
          "Conserved hydrogen-bond   network",
          "11/11",
          "11/11",
          "11/11",
          "11/11",
          "11/11"
        ],
        [
          "Total hydrogen bonds",
          "16",
          "19",
          "16",
          "16",
          "16"
        ],
        [
          "of which backbone / side chain",
          "12 / 4",
          "14 / 5",
          "13 / 3",
          "13 / 3",
          "13 / 3"
        ],
        [
          "TCR-facing surface (Å²)",
          "237",
          "270",
          "239",
          "241",
          "238"
        ],
        [
          "Steric clashes / flip   candidates",
          "0 / 0",
          "0 / 0",
          "0 / 0",
          "0 / 0",
          "0 / 0"
        ],
        [
          "Verdict",
          "Pass",
          "Pass",
          "Pass",
          "Pass",
          "Pass"
        ]
      ]
    }
  }
};

export const modelReferences: CitationReference[] = [
  {
    "id": 1,
    "authors": "Bray et al., 2024.",
    "title": "Bray F, Laversanne M, Sung H, et al. Global cancer statistics 2022: GLOBOCAN estimates of incidence and mortality worldwide for 36 cancers in 185 countries. *CA: A Cancer Journal for Clinicians*. 2024;74:229–263.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.3322/caac.21834",
        "href": "https://doi.org/10.3322/caac.21834"
      }
    ]
  },
  {
    "id": 2,
    "authors": "Bianchini et al., 2022.",
    "title": "Bianchini G, De Angelis C, Licata L, Gianni L. Treatment landscape of triple-negative breast cancer: expanded options, evolving needs. *Nature Reviews Clinical Oncology*. 2022;19:91–113.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41571-021-00565-2",
        "href": "https://doi.org/10.1038/s41571-021-00565-2"
      }
    ]
  },
  {
    "id": 3,
    "authors": "Garrido-Castro et al., 2019.",
    "title": "Garrido-Castro AC, Lin NU, Polyak K. Insights into molecular classifications of triple-negative breast cancer: improving patient selection for treatment. *Cancer Discovery*. 2019;9:176–198.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1158/2159-8290.CD-18-1177",
        "href": "https://doi.org/10.1158/2159-8290.CD-18-1177"
      }
    ]
  },
  {
    "id": 4,
    "authors": "Karaayvaz et al., 2018.",
    "title": "Karaayvaz M, Cristea S, Gillespie SM, et al. Unravelling subclonal heterogeneity and aggressive disease states in TNBC through single-cell RNA-seq. *Nature Communications*. 2018;9:3588.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41467-018-06052-0",
        "href": "https://doi.org/10.1038/s41467-018-06052-0"
      }
    ]
  },
  {
    "id": 5,
    "authors": "Keren et al., 2018.",
    "title": "Keren L, Bosse M, Marquez D, et al. A structured tumor-immune microenvironment in triple negative breast cancer revealed by multiplexed ion beam imaging. *Cell*. 2018;174:1373–1387.e19.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/j.cell.2018.08.039",
        "href": "https://doi.org/10.1016/j.cell.2018.08.039"
      }
    ]
  },
  {
    "id": 6,
    "authors": "Wesselhoeft et al., 2019.",
    "title": "Wesselhoeft RA, Kowalski PS, Parker-Hale FC, Huang Y, Bisaria N, Anderson DG. RNA circularization diminishes immunogenicity and can extend translation duration in vivo. *Molecular Cell*. 2019;74:508–520.e4.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/j.molcel.2019.02.015",
        "href": "https://doi.org/10.1016/j.molcel.2019.02.015"
      }
    ]
  },
  {
    "id": 7,
    "authors": "Cheever et al., 2009.",
    "title": "Cheever MA, Allison JP, Ferris AS, et al. The prioritization of cancer antigens: a National Cancer Institute pilot project for the acceleration of translational research. *Clinical Cancer Research*. 2009;15:5323–5337.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1158/1078-0432.CCR-09-0737",
        "href": "https://doi.org/10.1158/1078-0432.CCR-09-0737"
      }
    ]
  },
  {
    "id": 8,
    "authors": "Asleh et al., 2022.",
    "title": "Asleh K, Negri GL, Spencer Miko SE, et al. Proteomic analysis of archival breast cancer clinical specimens identifies biological subtypes with distinct survival outcomes. *Nature Communications*. 2022;13:896.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41467-022-28524-0",
        "href": "https://doi.org/10.1038/s41467-022-28524-0"
      }
    ]
  },
  {
    "id": 9,
    "authors": "Gong et al., 2022.",
    "title": "Gong Y, Ji P, Yang YS, et al. Metabolic-pathway-based subtyping of triple-negative breast cancer reveals potential therapeutic targets. *Cell Reports*. 2022;39:110460.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/j.celrep.2022.110460",
        "href": "https://doi.org/10.1016/j.celrep.2022.110460"
      }
    ]
  },
  {
    "id": 10,
    "authors": "Ritchie et al., 2015.",
    "title": "Ritchie ME, Phipson B, Wu D, et al. limma powers differential expression analyses for RNA-sequencing and microarray studies. *Nucleic Acids Research*. 2015;43:e47.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/nar/gkv007",
        "href": "https://doi.org/10.1093/nar/gkv007"
      }
    ]
  },
  {
    "id": 11,
    "authors": "Benjamini and Hochberg, 1995.",
    "title": "Benjamini Y, Hochberg Y. Controlling the false discovery rate: a practical and powerful approach to multiple testing. *Journal of the Royal Statistical Society Series B*. 1995;57:289–300.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x",
        "href": "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x"
      }
    ]
  },
  {
    "id": 12,
    "authors": "Lazar et al., 2016.",
    "title": "Lazar C, Gatto L, Ferro M, Bruley C, Burger T. Accounting for the multiple natures of missing values in label-free quantitative proteomics data sets to compare imputation strategies. *Journal of Proteome Research*. 2016;15:1116–1125.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1021/acs.jproteome.5b00981",
        "href": "https://doi.org/10.1021/acs.jproteome.5b00981"
      }
    ]
  },
  {
    "id": 13,
    "authors": "Wu et al., 2021.",
    "title": "Wu SZ, Al-Eryani G, Roden DL, et al. A single-cell and spatially resolved atlas of human breast cancers. *Nature Genetics*. 2021;53:1334–1347.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41588-021-00911-1",
        "href": "https://doi.org/10.1038/s41588-021-00911-1"
      }
    ]
  },
  {
    "id": 14,
    "authors": "Hafemeister and Satija, 2019.",
    "title": "Hafemeister C, Satija R. Normalization and variance stabilization of single-cell RNA-seq data using regularized negative binomial regression. *Genome Biology*. 2019;20:296.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1186/s13059-019-1874-1",
        "href": "https://doi.org/10.1186/s13059-019-1874-1"
      }
    ]
  },
  {
    "id": 15,
    "authors": "Korsunsky et al., 2019.",
    "title": "Korsunsky I, Millard N, Fan J, et al. Fast, sensitive and accurate integration of single-cell data with Harmony. *Nature Methods*. 2019;16:1289–1296.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41592-019-0619-0",
        "href": "https://doi.org/10.1038/s41592-019-0619-0"
      }
    ]
  },
  {
    "id": 16,
    "authors": "Robinson et al., 2010.",
    "title": "Robinson MD, McCarthy DJ, Smyth GK. edgeR: a Bioconductor package for differential expression analysis of digital gene expression data. *Bioinformatics*. 2010;26:139–140.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/bioinformatics/btp616",
        "href": "https://doi.org/10.1093/bioinformatics/btp616"
      }
    ]
  },
  {
    "id": 17,
    "authors": "Crowell et al., 2020.",
    "title": "Crowell HL, Soneson C, Germain PL, et al. muscat detects subpopulation-specific state transitions from multi-sample multi-condition single-cell transcriptomics data. *Nature Communications*. 2020;11:6077.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41467-020-19894-4",
        "href": "https://doi.org/10.1038/s41467-020-19894-4"
      }
    ]
  },
  {
    "id": 18,
    "authors": "Cerami et al., 2012.",
    "title": "Cerami E, Gao J, Dogrusoz U, et al. The cBio Cancer Genomics Portal: an open platform for exploring multidimensional cancer genomics data. *Cancer Discovery*. 2012;2:401–404.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1158/2159-8290.CD-12-0095",
        "href": "https://doi.org/10.1158/2159-8290.CD-12-0095"
      }
    ]
  },
  {
    "id": 19,
    "authors": "Gao et al., 2013.",
    "title": "Gao J, Aksoy BA, Dogrusoz U, et al. Integrative analysis of complex cancer genomics and clinical profiles using the cBioPortal. *Science Signaling*. 2013;6:pl1.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1126/scisignal.2004088",
        "href": "https://doi.org/10.1126/scisignal.2004088"
      }
    ]
  },
  {
    "id": 20,
    "authors": "cBioPortal, n.d..",
    "title": "cBioPortal. Onco Query Language.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://docs.cbioportal.org/user-guide/oql/",
        "href": "https://docs.cbioportal.org/user-guide/oql/"
      }
    ]
  },
  {
    "id": 21,
    "authors": "Tang et al., 2018.",
    "title": "Tang W, Zhou M, Dorsey TH, et al. Integrated proteotranscriptomics of breast cancer reveals globally increased protein-mRNA concordance associated with subtypes and survival. *Genome Medicine*. 2018;10:94.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1186/s13073-018-0602-x",
        "href": "https://doi.org/10.1186/s13073-018-0602-x"
      }
    ]
  },
  {
    "id": 22,
    "authors": "Izci et al., 2022.",
    "title": "Izci H, Punie K, Waumans L, et al. Correlation of TROP-2 expression with clinical-pathological characteristics and outcome in triple-negative breast cancer. *Scientific Reports*. 2022;12:22498.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41598-022-27093-y",
        "href": "https://doi.org/10.1038/s41598-022-27093-y"
      }
    ]
  },
  {
    "id": 23,
    "authors": "Jeon et al., 2022.",
    "title": "Jeon Y, Jo U, Hong J, Gong G, Lee HJ. Trophoblast cell-surface antigen 2 (TROP2) expression in triple-negative breast cancer. *BMC Cancer*. 2022;22:1014.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1186/s12885-022-10076-7",
        "href": "https://doi.org/10.1186/s12885-022-10076-7"
      }
    ]
  },
  {
    "id": 24,
    "authors": "Wang et al., 2018.",
    "title": "Wang L, Yang C, Liu XB, Wang L, Kang FB. B7-H4 overexpression contributes to poor prognosis and drug-resistance in triple-negative breast cancer. *Cancer Cell International*. 2018;18:100.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1186/s12935-018-0597-9",
        "href": "https://doi.org/10.1186/s12935-018-0597-9"
      }
    ]
  },
  {
    "id": 25,
    "authors": "Gruosso et al., 2019.",
    "title": "Gruosso T, Gigoux M, Manem VSK, et al. Spatially distinct tumor immune microenvironments stratify triple-negative breast cancers. *Journal of Clinical Investigation*. 2019;129:1785–1800.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1172/JCI96313",
        "href": "https://doi.org/10.1172/JCI96313"
      }
    ]
  },
  {
    "id": 26,
    "authors": "Wescott et al., 2024.",
    "title": "Wescott EC, Sun X, Gonzalez-Ericsson P, et al. Epithelial expressed B7-H4 drives differential immunotherapy response in murine and human breast cancer. *Cancer Research Communications*. 2024;4:1120–1134.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1158/2767-9764.CRC-23-0468",
        "href": "https://doi.org/10.1158/2767-9764.CRC-23-0468"
      }
    ]
  },
  {
    "id": 27,
    "authors": "M-Rabet et al., 2017.",
    "title": "M-Rabet M, Cabaud O, Josselin E, et al. Nectin-4: a new prognostic biomarker for efficient therapeutic targeting of primary and metastatic triple-negative breast cancer. *Annals of Oncology*. 2017;28:769–776.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/annonc/mdw678",
        "href": "https://doi.org/10.1093/annonc/mdw678"
      }
    ]
  },
  {
    "id": 28,
    "authors": "Zeindler et al., 2019.",
    "title": "Zeindler J, Soysal SD, Piscuoglio S, et al. Nectin-4 expression is an independent prognostic biomarker and associated with better survival in triple-negative breast cancer. *Frontiers in Medicine*. 2019;6:200.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.3389/fmed.2019.00200",
        "href": "https://doi.org/10.3389/fmed.2019.00200"
      }
    ]
  },
  {
    "id": 29,
    "authors": "Sussman et al., 2014.",
    "title": "Sussman D, Smith LM, Anderson ME, et al. SGN-LIV1A: a novel antibody-drug conjugate targeting LIV-1 for the treatment of metastatic breast cancer. *Molecular Cancer Therapeutics*. 2014;13:2991–3000.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1158/1535-7163.MCT-13-0896",
        "href": "https://doi.org/10.1158/1535-7163.MCT-13-0896"
      }
    ]
  },
  {
    "id": 30,
    "authors": "Saravanan et al., 2024.",
    "title": "Saravanan R, Balasubramanian V, Sundaram S, et al. Expression of cell surface zinc transporter LIV1 in triple negative breast cancer is an indicator of poor prognosis and therapy failure. *Journal of Cellular Physiology*. 2024;239.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1002/jcp.31203",
        "href": "https://doi.org/10.1002/jcp.31203"
      }
    ]
  },
  {
    "id": 31,
    "authors": "Creary et al., 2021.",
    "title": "Creary LE, Sacchi N, Mazzocco M, et al. High-resolution HLA allele and haplotype frequencies in several unrelated populations determined by next generation sequencing: 17th International HLA and Immunogenetics Workshop joint report. *Human Immunology*. 2021;82:505–522.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/j.humimm.2021.04.007",
        "href": "https://doi.org/10.1016/j.humimm.2021.04.007"
      }
    ]
  },
  {
    "id": 32,
    "authors": "Yan et al., 2024.",
    "title": "Yan Z, Dhanda SK, Paul S, et al. Next-generation IEDB tools: a platform for epitope prediction and analysis. *Nucleic Acids Research*. 2024;52:W526–W532.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/nar/gkae407",
        "href": "https://doi.org/10.1093/nar/gkae407"
      }
    ]
  },
  {
    "id": 33,
    "authors": "Reynisson et al., 2020.",
    "title": "Reynisson B, Alvarez B, Paul S, Peters B, Nielsen M. NetMHCpan-4.1 and NetMHCIIpan-4.0: improved predictions of MHC antigen presentation by concurrent motif deconvolution and integration of MS MHC eluted ligand data. *Nucleic Acids Research*. 2020;48:W449–W454.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/nar/gkaa379",
        "href": "https://doi.org/10.1093/nar/gkaa379"
      }
    ]
  },
  {
    "id": 34,
    "authors": "Peters et al., 2003.",
    "title": "Peters B, Bulik S, Tampé R, Van Endert PM, Holzhütter HG. Identifying MHC class I epitopes by predicting the TAP transport efficiency of epitope precursors. *Journal of Immunology*. 2003;171:1741–1749.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.4049/jimmunol.171.4.1741",
        "href": "https://doi.org/10.4049/jimmunol.171.4.1741"
      }
    ]
  },
  {
    "id": 35,
    "authors": "Tenzer et al., 2005.",
    "title": "Tenzer S, Peters B, Bulik S, et al. Modeling the MHC class I pathway by combining predictions of proteasomal cleavage, TAP transport and MHC class I binding. *Cellular and Molecular Life Sciences*. 2005;62:1025–1037.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1007/s00018-005-4528-2",
        "href": "https://doi.org/10.1007/s00018-005-4528-2"
      }
    ]
  },
  {
    "id": 36,
    "authors": "Calis et al., 2013.",
    "title": "Calis JJA, Maybeno M, Greenbaum JA, et al. Properties of MHC class I presented peptides that enhance immunogenicity. *PLoS Computational Biology*. 2013;9:e1003266.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1371/journal.pcbi.1003266",
        "href": "https://doi.org/10.1371/journal.pcbi.1003266"
      }
    ]
  },
  {
    "id": 37,
    "authors": "UniProt Consortium, 2025.",
    "title": "The UniProt Consortium. UniProt: the Universal Protein Knowledgebase in 2025. *Nucleic Acids Research*. 2025;53:D609–D617.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://www.uniprot.org/help/publications",
        "href": "https://www.uniprot.org/help/publications"
      }
    ]
  },
  {
    "id": 38,
    "authors": "Abramson et al., 2024.",
    "title": "Abramson J, Adler J, Dunger J, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. *Nature*. 2024;630:493–500.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41586-024-07487-w",
        "href": "https://doi.org/10.1038/s41586-024-07487-w"
      }
    ]
  },
  {
    "id": 39,
    "authors": "Saper et al., 1991.",
    "title": "Saper MA, Bjorkman PJ, Wiley DC. Refined structure of the human histocompatibility antigen HLA-A2 at 2.6 Å resolution. *Journal of Molecular Biology*. 1991;219:277–319. 90567-P)",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/0022-2836(91)90567-P",
        "href": "https://doi.org/10.1016/0022-2836(91"
      }
    ]
  },
  {
    "id": 40,
    "authors": "Schrödinger, n.d..",
    "title": "Schrödinger, LLC. The PyMOL Molecular Graphics System.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://pymol.org/",
        "href": "https://pymol.org/"
      }
    ]
  },
  {
    "id": 41,
    "authors": "iGEM Foundation, 2026.",
    "title": "iGEM Foundation. 2026 Judge Handbook.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://competition.igem.org/judging/handbook",
        "href": "https://competition.igem.org/judging/handbook"
      }
    ]
  },
  {
    "id": 42,
    "authors": "Saravanan et al., 2022.",
    "title": "Saravanan R, Balasubramanian V, Swaroop Balamurugan SS, et al. Zinc transporter LIV1: A promising cell surface target for triple negative breast cancer. *Journal of Cellular Physiology*. 2022;237:4132–4156.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1002/jcp.30880",
        "href": "https://doi.org/10.1002/jcp.30880"
      }
    ]
  },
  {
    "id": 43,
    "authors": "Althobiti et al., 2021.",
    "title": "Althobiti M, El-sharawy KA, Joseph C, et al. Oestrogen-regulated protein SLC39A6: a biomarker of good prognosis in luminal breast cancer. *Breast Cancer Research and Treatment*. 2021;189:621–630. . Open access under the Creative Commons Attribution 4.0 International License:",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1007/s10549-021-06336-y",
        "href": "https://doi.org/10.1007/s10549-021-06336-y"
      },
      {
        "label": "https://creativecommons.org/licenses/by/4.0/",
        "href": "https://creativecommons.org/licenses/by/4.0/"
      }
    ]
  },
  {
    "id": 44,
    "authors": "Fang et al., 2016.",
    "title": "Fang J, Xiao L, Joo KI, et al. A potent immunotoxin targeting fibroblast activation protein for treatment of breast cancer in mice. *International Journal of Cancer*. 2016;138:1013–1023.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1002/ijc.29831",
        "href": "https://doi.org/10.1002/ijc.29831"
      }
    ]
  },
  {
    "id": 45,
    "authors": "Slieker et al., 2024.",
    "title": "Slieker RC, Warmerdam DO, Vermeer MH, et al. Reassessing human MHC-I genetic diversity in T cell studies. *Scientific Reports*. 2024;14:7966.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/s41598-024-58777-2",
        "href": "https://doi.org/10.1038/s41598-024-58777-2"
      }
    ]
  },
  {
    "id": 46,
    "authors": "IEDB, 2024.",
    "title": "Immune Epitope Database and Analysis Resource. IEDB Next-Generation Tools: 2024 User Workshop presentation.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://discuss.iedb.org/uploads/short-url/58CtFaZudVrj2LEucIhMSRl41mZ.pdf",
        "href": "https://discuss.iedb.org/uploads/short-url/58CtFaZudVrj2LEucIhMSRl41mZ.pdf"
      }
    ]
  },
  {
    "id": 47,
    "authors": "Rapoport, 2007.",
    "title": "Rapoport TA. Protein translocation across the eukaryotic endoplasmic reticulum and bacterial plasma membranes. *Nature*. 2007;450:663–669.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/nature06384",
        "href": "https://doi.org/10.1038/nature06384"
      }
    ]
  },
  {
    "id": 48,
    "authors": "Madden, 1995.",
    "title": "Madden DR. The three-dimensional structure of peptide--MHC complexes. Annual Review of Immunology. 1995;13:587--622.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1146/annurev.iy.13.040195.003103",
        "href": "https://doi.org/10.1146/annurev.iy.13.040195.003103"
      }
    ]
  },
  {
    "id": 49,
    "authors": "Bouvier and Wiley, 1994.",
    "title": "Bouvier M, Wiley DC. Importance of peptide amino and carboxyl termini to the stability of MHC class I molecules. Science. 1994;265:398--402.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1126/science.8023162",
        "href": "https://doi.org/10.1126/science.8023162"
      }
    ]
  },
  {
    "id": 50,
    "authors": "Falk et al., 1991.",
    "title": "Falk K, Rötzschke O, Stevanović S, Jung G, Rammensee HG. Allele-specific motifs revealed by sequence analysis of self-peptides eluted from MHC molecules. Nature. 1991;351:290--296.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1038/351290a0",
        "href": "https://doi.org/10.1038/351290a0"
      }
    ]
  },
  {
    "id": 51,
    "authors": "Lee and Richards, 1971.",
    "title": "Lee B, Richards FM. The interpretation of protein structures: estimation of static accessibility. Journal of Molecular Biology. 1971;55:379--400. 90324-X)",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1016/0022-2836(71)90324-X",
        "href": "https://doi.org/10.1016/0022-2836(71"
      }
    ]
  },
  {
    "id": 52,
    "authors": "Dolinsky et al., 2007.",
    "title": "Dolinsky TJ, Czodrowski P, Li H, et al. PDB2PQR: expanding and upgrading automated preparation of biomolecular structures for molecular simulations. Nucleic Acids Research. 2007;35:W522--W525.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1093/nar/gkm276",
        "href": "https://doi.org/10.1093/nar/gkm276"
      }
    ]
  },
  {
    "id": 53,
    "authors": "Olsson et al., 2011.",
    "title": "Olsson MHM, Søndergaard CR, Rostkowski M, Jensen JH. PROPKA3: consistent treatment of internal and surface residues in empirical pKa predictions. Journal of Chemical Theory and Computation. 2011;7:525--537.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1021/ct100578z",
        "href": "https://doi.org/10.1021/ct100578z"
      }
    ]
  },
  {
    "id": 54,
    "authors": "Motmaen et al., 2023.",
    "title": "Motmaen A, Dauparas J, Baek M, et al. Peptide-binding specificity prediction using fine-tuned protein structure prediction networks. Proceedings of the National Academy of Sciences. 2023;120:e2216697120.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1073/pnas.2216697120",
        "href": "https://doi.org/10.1073/pnas.2216697120"
      }
    ]
  },
  {
    "id": 55,
    "authors": "Abualrous et al., 2015.",
    "title": "Abualrous ET, Saini SK, Ramnarayan VR, Ilca FT, Zacharias M, Springer S. The carboxy terminus of the ligand peptide determines the stability of the MHC class I molecule H-2Kb: a combined molecular dynamics and experimental study. PLoS ONE. 2015;10:e0135421.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1371/journal.pone.0135421",
        "href": "https://doi.org/10.1371/journal.pone.0135421"
      }
    ]
  },
  {
    "id": 56,
    "authors": "Harndahl et al., 2012.",
    "title": "Harndahl M, Rasmussen M, Roder G, et al. Peptide-MHC class I stability is a better predictor than peptide affinity of CTL immunogenicity. European Journal of Immunology. 2012;42:1405--1416.",
    "journal": "",
    "volumeYear": "",
    "links": [
      {
        "label": "https://doi.org/10.1002/eji.201141774",
        "href": "https://doi.org/10.1002/eji.201141774"
      }
    ]
  }
];

export const modelDownloads = [
  {
    "label": "00_batch.log",
    "path": "assets/docs/model/00_batch.log"
  },
  {
    "label": "00_MODELS.csv",
    "path": "assets/docs/model/00_models.csv"
  },
  {
    "label": "00_NETWORK.csv",
    "path": "assets/docs/model/00_network.csv"
  },
  {
    "label": "00_NETWORK_PIVOT.csv",
    "path": "assets/docs/model/00_network_pivot.csv"
  },
  {
    "label": "00_SASA.csv",
    "path": "assets/docs/model/00_sasa.csv"
  },
  {
    "label": "00_SASA_PIVOT.csv",
    "path": "assets/docs/model/00_sasa_pivot.csv"
  },
  {
    "label": "00_SYSTEMS.csv",
    "path": "assets/docs/model/00_systems.csv"
  },
  {
    "label": "PXD024322_TNBC_vs_Normal_limma_ALL_9088_proteins(1).csv",
    "path": "assets/docs/model/pxd024322_tnbc_vs_normal_limma_all_9088_proteins-1.csv"
  },
  {
    "label": "PXD028102_paired_limma_imputed_ALL.csv",
    "path": "assets/docs/model/pxd028102_paired_limma_imputed_all.csv"
  }
];

export const modelPage: WikiPageContent = {
 route: "/model", category: "dry-lab", chapter: "Dry Lab / 01 of 04", eyebrow: "Model", title: "Model", lede: "", boundary: "", visual: "model-manuscript", visualLabel: "Model", visualSteps: [], facts: [],
 sections: [
    {
      id: "model-structural-confirmation",
      index: "01",
      kicker: "Model 0 · Structural Confirmation",
      navLabel: "3D Structure",
      title: "Structural Confirmation of Trop2-CTL1 (SVCWCVNSV) in HLA-A*02:01 / B2M",
      summary:
        "AlphaFold/docking-derived all-atom conformation and polar contact network of the Trop2-CTL1 epitope complexed with human MHC-I (HLA-A*02:01) and β2-microglobulin, reconstituted directly from the high-resolution PyMOL session.",
      body: [
        "To characterize the immunogenic presentation and binding stability of our engineered Trop2 target candidates, we performed high-resolution structural modeling of the Trop2-CTL1 core epitope (SVCWCVNSV) complexed with the human leukocyte antigen HLA-A*02:01 and β2-microglobulin (B2M). All-atom spatial coordinates, anchoring residues within the MHC peptide-binding cleft, and key polar interaction networks were resolved and validated.",
      ],
      layout: "editorial",
    },
    ...manuscriptSections
 ],
 links: [{ path: "/software", label: "Software" }, { path: "/hardware", label: "Hardware" }, { path: "/games", label: "Games" }], next: { path: "/software", label: "Software", title: "Software" }
};
