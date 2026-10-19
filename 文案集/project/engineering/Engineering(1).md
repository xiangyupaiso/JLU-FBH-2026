# Engineering改2

# Overview

**English\.** **TIME** is the engineering system developed by JLU\-FBH to organize the evidence\-driven development of CirCure\. **TIME** represents four connected project\-level cycles: **Targeting, Integration, Measurement and Evaluation**\. The system takes the form of a mechanical stopwatch: TIME is marked on the outer scale of the central gear, Design–Build–Test–Learn runs along the inner scale, and the two hands locate the project within its current cycle and engineering stage\. Yet TIME is more than an acronym\. It reflects the urgency at the heart of CirCure: when recurrence remains a possibility, every well\-founded decision should bring the next answer closer\. Our stopwatch therefore records how evidence from antigen selection, construct design and functional testing shapes each next engineering decision, while carrying our long\-term hope that this progress can help patients at high risk of recurrence gain more time to recover, be with their families and return to everyday life\.


![image<span data-type=](图片和附件/image.png)\.png" />

> **Figure E01｜The CirCure TIME Engineering System**
>
> **English caption\.** CirCure TIME connects four project\-level cycles with recurring Design–Build–Test–Learn iterations and the coordinated engagement of the project teams\.
>

**English\.** In TIME, **Dry Lab and Wet Lab act as the primary driving gears**\. Dry Lab turns biological questions into traceable antigen and epitope decisions, structural hypotheses and quantitative predictions; Wet Lab converts these designs into physical constructs and molecular or cellular evidence\. Their alternating motion drives the central mechanism and gives rise to CircuForge, TorusFold, mathematical modelling\. **iHP, Education, Visual Design and Entrepreneurship operate as driven gears**, translating scientific progress into clinical and ethical refinements, transferable learning, coherent communication and development requirements\. Their feedback then enters the next DBTL iteration, guiding and extending the main drive\.


https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-overviewcycle\.avif


**English\.** Four connected cycles record how CirCure progressed through **TIME**\. **Cycle 1 — Targeting: From intended use to a four\-antigen strategy** defined the clinical purpose and antigen sources\. **Cycle 2 — Integration: From epitope exploration to Combined** connected prediction, structural review and experimental screening to form Combined\. **Cycle 3 — Measurement: Building the molecular and cellular evidence chain** followed circRNA from preparation and persistence to protein expression and immune\-cell function\. **Cycle 4 — Evaluation: Extending molecular and cellular evidence to in vivo evaluation** examined whether this activity translated into tumour control and associated immune responses in an animal model, alongside independent quantitative modelling\. Within each cycle, DBTL turned evidence and stakeholder feedback into concrete engineering decisions\.


# Cycle 1 — Targeting: From intended use to a four\-antigen strategy

**English\.** TIME begins with **T—Targeting**\. This cycle moved from intended use to a four\-antigen strategy\. We first located the project within the TNBC treatment pathway, then translated that purpose into an RNA\-platform decision and a multilayer antigen\-selection route\. Education and Visual Design developed a shared language for circRNA, while Dry Lab, Software and Human Practices connected the scientific question with traceable evidence and experimental preparation\. By the end of the cycle, four antigen sources had gained support at the protein, malignant\-cell and patient levels, and a common human DC–T\-cell workflow had been established\.


## Iteration 1\.1｜Defining the clinical use case

### Design

**English\.** We began with a clinical question: where could an additional immune intervention contribute most clearly in the TNBC treatment pathway? TNBC heterogeneity and recurrence after standard treatment directed our attention to patients who remain at higher risk after neoadjuvant treatment and surgery \(Garrido\-Castro et al\., 2019\)\. Runhui Tian encouraged us to explore an additional therapeutic approach for TNBC\.


> **References**
>
> Garrido\-Castro AC, Lin NU, Polyak K\. Insights into molecular classifications of triple\-negative breast cancer: improving patient selection for treatment\. *Cancer Discovery*\. 2019;9:176–198\. [doi:10\.1158/2159\-8290\.CD\-18\-1177](https://doi.org/10.1158/2159-8290.CD-18-1177)

### Build

**English\. **We combined this direction with literature research and clinical discussions with Lei Wang and Chengli Li, both oncology doctors, and **built an intended\-use specification with three defined elements\.** First, the clinical setting was the period after neoadjuvant treatment and surgery, when some patients remain at higher risk of recurrence\. Second, the proposed role was an antigen\-directed immune approach that could complement standard treatment\. Third, later development would require a documented antigen rationale, molecular eligibility criteria and measurable molecular and immune\-response evidence\. Tumour\-antigen expression and HLA compatibility were recorded as questions for the subsequent Dry Lab and epitope analyses\.


### Test

**English\.** We placed the intended use after neoadjuvant treatment and surgery, focusing on TNBC patients with residual invasive disease and a high risk of recurrence\. This clinical setting defined four questions for subsequent evaluation: whether the selected antigens were expressed in the tumour, whether their epitopes matched the patient’s HLA type, whether the circRNA preparation could be reliably identified and whether it could induce measurable responses in the DC–T\-cell system\. The review therefore fixed the timing and initial patient population, while leaving the antigen\- and HLA\-based eligibility criteria to later analysis\.


### Learn

**English\.** Literature and clinical consultation showed that recurrence risk may remain after surgery and systemic treatment, establishing a clear complementary position for an antigen\-directed immune approach\. We therefore retained the post\-treatment, higher\-risk TNBC setting as the project's intended use and translated it into three requirements for platform selection: the ability to encode tumour\-antigen sequences, support sustained expression and remain measurable from molecular preparation to immune function\. These requirements formed the Design of Iteration 1\.2\. Further details are provided in [Integrated Human Practices: clinical positioning](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 1\.2｜Selecting a measurable circRNA platform

### Design

**English\.** The intended\-use specification from Iteration 1\.1 gave us five criteria for platform selection: antigen\-coding capacity, RNA stability, duration of expression, immune\-stimulatory potential and compatibility with measurements available to the team\. We used these criteria to compare linear mRNA with engineered circRNA, allowing stability, expression and experimental measurability to enter the same decision\.


### Build

**English\.** Literature research and technical discussions with Jifan Hu and Ruohan Yang were organized into a platform\-decision matrix\. The same work produced a five\-stage route linking the DNA template, linear transcription precursor, mature circRNA, encoded protein and immune function\. Published studies supported stable translation from engineered circRNA and showed that innate sensing depends on how the RNA is generated and prepared\. We therefore defined adjuvant\-like stimulation as a preparation\-dependent property to examine in later experiments \(Chen et al\., 2017; Wesselhoeft et al\., 2018; Wesselhoeft et al\., 2019\)\.


> **References**
>
> Chen YG, Kim MV, Chen X, et al\. Sensing self and foreign circular RNAs by intron identity\. *Molecular Cell*\. 2017;67:228–238\.e5\. [doi:10\.1016/j\.molcel\.2017\.05\.022](https://doi.org/10.1016/j.molcel.2017.05.022)
>
> Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. *Nature Communications*\. 2018;9:2629\. [doi:10\.1038/s41467\-018\-05096\-6](https://doi.org/10.1038/s41467-018-05096-6)
>
> Wesselhoeft RA, Kowalski PS, Parker\-Hale FC, et al\. RNA circularization diminishes immunogenicity and can extend translation duration in vivo\. *Molecular Cell*\. 2019;74:508–520\.e4\. [doi:10\.1016/j\.molcel\.2019\.02\.015](https://doi.org/10.1016/j.molcel.2019.02.015)

**Table C1\-01｜Platform decision matrix**

| Design requirement    | Linear mRNA                                                | Engineered circRNA                                                | Project check                                           | Design implication                                        |
| --------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------- | ------------------------------------------------------- | --------------------------------------------------------- |
| Antigen coding        | Can encode the selected antigen sequence                   | Can encode the selected antigen sequence                          | Sequence and construct feasibility                      | Both formats meet the basic coding requirement            |
| RNA stability         | Free ends remain susceptible to exonuclease-mediated decay | Closed topology can improve nuclease resistance                   | Literature and technical consultation                   | circRNA better matches the intended persistence question  |
| Expression duration   | Expression is constrained by RNA lifetime                  | Engineered circRNA can extend translation duration                | Published expression studies                            | Supports staged persistence measurements                  |
| Immune stimulation    | Depends on sequence, modification, purity and delivery     | Innate sensing is tunable through RNA design and preparation      | Literature and iHP discussion                           | Evaluate it under defined preparation conditions          |
| Preparation           | Comparatively direct production route                      | Requires circularization and added identity checks                | Team facilities and planned Experiments                 | Assign a measurable checkpoint to every preparation stage |
| Functional evaluation | Can enter protein and immune assays                        | Can enter the same downstream assays after circularization checks | FLAG expression, DC–T-cell culture and immune readouts | Provides a continuous molecule-to-function route          |

### Test

**English\.** We tested the selected platform against the operations required by the literature and the resources available to the team\. For each molecular stage, we asked whether there was a defined way to obtain the material, an accessible measurement and an observable output that could be passed to the next stage\.


**Table C1\-02｜Stage\-by\-stage feasibility check for the circRNA route**

| Stage                          | Material source or operation                                                          | Available project check                                                                                                                                                                         | Observable output                                                                | Decision   |
| ------------------------------ | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------- |
| DNA template                   | Recombinant plasmids assembled by a commercial service provider                       | Supplier plasmid map, sequence file and sample label were matched to the intended design before the delivered material entered the team’s recorded template-processing and transcription route | DNA template corresponding to the intended construct                             | Executable |
| Linear transcription precursor | In vitro transcription from the DNA template and the designed self-splicing precursor | RNA preparation and nucleic-acid analytical methods recorded in Experiments                                                                                                                     | Detectable linear precursor                                                      | Executable |
| Mature circRNA                 | Self-splicing and circularization of the precursor                                    | RNA purification, RNase R treatment and the corresponding nucleic-acid analysis recorded in Experiments                                                                                         | A circRNA preparation that can be evaluated separately from the linear precursor | Executable |
| Encoded protein                | Translation after cellular delivery                                                   | FLAG-associated protein-expression measurement                                                                                                                                                  | Expected FLAG-associated expression signal                                       | Executable |
| Immune function                | circRNA-loaded DCs co-cultured with T cells                                           | ELISpot, flow cytometry and target-cell killing assays                                                                                                                                          | IFN-γ-associated, activation and effector readouts                              | Executable |

**English\.** All five stages therefore had a defined source or procedure, an accessible measurement and an observable output\. This established the testability of the circRNA route; the resulting RNA, protein and immune\-response evidence is presented in the later cycles\.


### Learn

**English\.** We selected circRNA as the project's working expression platform\. Its closed topology provided a clear stability rationale, published work supported prolonged expression, and its preparation\-dependent innate sensing defined an additional experimental question\. With the platform established, the next decision concerned its antigen payload\. That content question became the scientific thread carried into antigen selection\. Further details are provided in [Integrated Human Practices: platform selection](https://2026.igem.wiki/jlu-fbh/human-practices) and [Experiments: circRNA preparation and validation](https://2026.igem.wiki/jlu-fbh/experiments)\.


## Iteration 1\.3｜Building the first educational and visual entry

### Design

**English\.** Once circRNA became the working platform, Education and Visual Design asked how first\-time learners could encounter an unfamiliar molecular form without losing sight of its biomedical setting\. The scientific core needed to remain stable, while the teaching entry and visual language had to adapt to different schools\.


### Build

**English\.** We planned and delivered Winter Outreach across five schools, reaching approximately 308 students\. Five school\-adapted teaching decks introduced synthetic biology, linear and circular RNA and possible biomedical applications\. Dream circRNA used circular cardboard and coloured segments as a participatory activity after the scientific explanation\. The first sheep character and project emblem gave the materials a consistent identity\.


### Test

**English\.** In an end\-of\-session show\-of\-hands check, roughly 80% of students indicated that they understood the core distinction between linear and circular RNA introduced in class\. Their participation and completed Dream circRNA pieces showed that the circular form provided an accessible entry to the topic\. Differences among the five classrooms also showed that a shared scientific core benefited from school\-specific teaching routes\.


> **Figure C1\-01｜Winter Outreach and the first visual identity**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-1\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-2\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-3\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-4\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-5\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-6\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-7\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-8\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-9\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-10\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-11\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-12\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-01\-13\.avif
>
> **English caption\.** Winter Outreach introduced circRNA through five school\-adapted teaching decks and the Dream circRNA activity\. The first sheep character and project emblem maintained visual continuity across the materials\.
>

### Learn

**English\.** We retained the first visual identity and adopted a **layered education approach** for later activities\. The scientific core remained consistent, while the depth of content, language, interaction and teaching materials were adjusted to learners’ ages, prior knowledge, learning settings and educational goals\. Vaccine Classroom, Virtual Laboratory and Synbio Classroom later applied this principle to different audiences and forms of learning\. Along the main scientific route, Iteration 1\.2 had also defined the next content question: which TNBC antigens should the circRNA encode? Further details are provided in [Education: Winter Outreach](https://2026.igem.wiki/jlu-fbh/education)\.


## Iteration 1\.4｜Defining a clinically grounded four\-antigen starting set

### Design

**English\.** Iteration 1\.2 established circRNA as the molecular platform, leaving a central content question: which TNBC antigens should it encode? We therefore needed to identify a clinically relevant starting set before applying quantitative selection\. At this stage, an antigen needed documented relevance to human TNBC tissue and a connection to disease outcome or translational research; final retention would depend on the common evidence framework developed later\.


### Build

**English\.** We combined preliminary clinical\-data review, iHP discussions and literature research to build an initial four\-antigen evidence record\. This process identified TROP2 \(*TACSTD2*\), B7\-H4 \(*VTCN1*\), Nectin\-4 \(*NECTIN4*\) and LIV\-1 \(*SLC39A6*\) as the starting set\. For each antigen, we recorded its molecular identity, the TNBC population or tissue context in which it had been studied, the reported clinical or pathological observation and the question that remained for quantitative evaluation \(Izci et al\., 2022; Wang et al\., 2018; M\-Rabet et al\., 2017; Saravanan et al\., 2024\)\.


> **References**
>
> Izci H, Punie K, Waumans L, et al\. Correlation of TROP\-2 expression with clinical\-pathological characteristics and outcome in triple\-negative breast cancer\. *Scientific Reports*\. 2022;12:22498\. [doi:10\.1038/s41598\-022\-27093\-y](https://doi.org/10.1038/s41598-022-27093-y)
>
> Wang L, Yang C, Liu XB, Wang L, Kang FB\. B7\-H4 overexpression contributes to poor prognosis and drug\-resistance in triple\-negative breast cancer\. *Cancer Cell International*\. 2018;18:100\. [doi:10\.1186/s12935\-018\-0597\-9](https://doi.org/10.1186/s12935-018-0597-9)
>
> M\-Rabet M, Cabaud O, Josselin E, et al\. Nectin\-4: a new prognostic biomarker for efficient therapeutic targeting of primary and metastatic triple\-negative breast cancer\. *Annals of Oncology*\. 2017;28:769–776\. [doi:10\.1093/annonc/mdw678](https://doi.org/10.1093/annonc/mdw678)
>
> Saravanan R, Balasubramanian V, Sundaram S, et al\. Expression of cell surface zinc transporter LIV1 in triple negative breast cancer is an indicator of poor prognosis and therapy failure\. *Journal of Cellular Physiology*\. 2024;239\. [doi:10\.1002/jcp\.31203](https://doi.org/10.1002/jcp.31203)

### Test

**English\.** We reviewed each antigen against three starting questions: whether it had been studied in human TNBC samples, whether tumour\-associated expression had been reported and what clinical relevance the published evidence supported\. Studies documented TROP2 expression in TNBC tissue and its association with selected clinicopathological features; B7\-H4 expression associated with poor prognosis and drug resistance; Nectin\-4 expression in primary and metastatic TNBC with prognostic relevance; and LIV\-1 expression associated with aggressive features and therapy failure\. These findings provided a clinical basis for retaining all four antigen sources for systematic quantitative evaluation\. The following published tissue images illustrate their protein\-expression patterns, with the study population and source identified in each caption\.


> **Figure C1\-02A｜Published TROP2 staining in TNBC tissue**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-02a\.avif
>
> **English caption\.** Representative TROP2 immunohistochemistry in TNBC tissue, showing intermediate staining in the left and middle fields and high staining in the right field\. Reproduced from Figure 2 of Izci et al\. \(2022\), under CC BY 4\.0; the tissue fields are retained and an external panel label has been added\.
>
>
> **Figure C1\-02B｜Published B7\-H4 tissue\-staining patterns**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-02b\.avif
>
> **English caption\.** Representative B7\-H4 immunostaining showing strong, moderate, weak and negative staining, as labelled in the source image\. Cropped from Figure 1d of Wang et al\. \(2018\), under CC BY 4\.0; source labels and scale bars are retained, with an external panel label added\.
>
>
> **Figure C1\-02C｜Published Nectin\-4 staining in TNBC tissue**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-02c\.avif
>
> **English caption\.** Representative TNBC tissue showing strong, moderate and negative Nectin\-4 staining in the original panels A, B and C, respectively \(200× magnification\)\. Reproduced from Figure 1 of Zeindler et al\. \(2019\), under CC BY; original panel labels and scale bars are retained, with an external panel label added\.
>
>
> **Figure C1\-02D｜Published SLC39A6/LIV\-1 staining in breast\-cancer tissue**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-02d\.avif
>
> **English caption\.** Representative positive and negative SLC39A6/LIV\-1 immunostaining in breast\-cancer tissue, corresponding to the original panels A and B\. Reproduced from Figure 1 of Althobiti et al\. \(2021\), under CC BY 4\.0; an external panel label has been added\. These images illustrate breast\-cancer tissue staining rather than TNBC\-specific prevalence\.
>

### Learn

**English\.** The four\-antigen starting set answered what the project should evaluate, while also clarifying that literature findings obtained from different cohorts and measurements could not by themselves determine final retention\. We therefore needed a common framework that examined protein abundance, malignant\-cell localization, patient representation and clinical evidence as distinct but connected dimensions\. Building that framework became the next design\. Further details are provided in [Bioinformatics: clinical starting evidence](https://2026.igem.wiki/jlu-fbh/bioinformatics) and [Integrated Human Practices: antigen\-selection route](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 1\.5｜Building a four\-dimensional antigen\-evidence framework

### Design

**English\.** Iteration 1\.4 established TROP2, B7\-H4, Nectin\-4 and LIV\-1 as a clinically grounded starting set\. To determine how these antigens should be evaluated under a common standard, we translated antigen selection into four measurable questions: whether each antigen was supported at the protein level in TNBC tissue; whether its expression was enriched in malignant cells; how broadly and complementarily it represented different patients; and how strongly tissue, disease and translational studies supported its clinical relevance\. In consultation with Associate Professor Qingtian Guan, we separated these questions so that each type of evidence would support a defined decision\.


### Build

**English\.** We built a four\-dimensional antigen\-evidence framework\. **Protein abundance** evaluated whether each antigen was present and increased at the protein level in TNBC tissue\. **Malignant\-cell enrichment** located the corresponding expression signal within malignant and non\-malignant cellular compartments\. **Patient representation** measured the individual and combined reach of the four genes across TNBC cases\. **Clinical evidence** integrated published histopathological, prognostic and translational findings\. Normal\-tissue expression was retained as a parallel safety consideration\. This structure followed established principles for tumour\-antigen prioritization \(Cheever et al\., 2009\)\.


> **References**
>
> Cheever MA, Allison JP, Ferris AS, et al\. The prioritization of cancer antigens: a National Cancer Institute pilot project for the acceleration of translational research\. *Clinical Cancer Research*\. 2009;15:5323–5337\. [doi:10\.1158/1078\-0432\.CCR\-09\-0737](https://doi.org/10.1158/1078-0432.CCR-09-0737)

### Test

**English\.** We tested whether the framework could be executed by assigning an accessible evidence source, measurable output and engineering decision to every dimension\. Public TNBC quantitative\-proteomics cohorts could measure protein abundance; a cell\-resolved breast\-cancer atlas could locate expression among malignant and non\-malignant compartments; patient\-level cancer\-genomics records could quantify individual and combined antigen representation; and published tissue and translational studies could provide clinical context\. This source\-readiness check confirmed that all four antigens could enter the same evidence structure and established the order in which the four dimensions would be examined\.


### Learn

**English\.** The framework converted the four\-antigen starting set into an executable evidence sequence\. We would first test protein\-level support, then locate the expression signal at cellular resolution, extend the comparison across patients and finally integrate the quantitative results with clinical evidence\. Quantitative proteomics therefore became the next design\.

The finalized evidence map is shown below\. Further details are provided in [Bioinformatics: antigen\-selection framework](https://2026.igem.wiki/jlu-fbh/bioinformatics) and [Integrated Human Practices: Dry Lab route](https://2026.igem.wiki/jlu-fbh/human-practices)\.



**Table C1\-03｜Four\-dimensional antigen\-evidence map**

| Evidence dimension        | Question                                                                           | Primary source                                             | Decision produced                                                  |
| ------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------------------ |
| Protein abundance         | Is each antigen supported by protein-level measurements in TNBC tissue?            | Public TNBC quantitative-proteomics cohorts                | Retain or reconsider each antigen source                           |
| Malignant-cell enrichment | Is the corresponding expression signal enriched in malignant cells?                | A public cell-resolved breast-cancer atlas                 | Establish tumour-cell relevance and cellular complementarity       |
| Patient representation    | How broadly do individual antigens and their union represent TNBC cases?           | Patient-level cancer-genomics records                      | Evaluate the patient-level value of retaining four antigen sources |
| Clinical evidence         | How do tissue, prognostic and translational studies support continued development? | Published TNBC histopathological and translational studies | Integrate quantitative results with clinical context               |

## Iteration 1\.6｜Testing the four antigen sources with protein evidence

### Design

**English\.** Following the evidence order established in Iteration 1\.5, we first asked whether the four antigen candidates were supported by quantitative protein measurements in TNBC tissue and whether their abundance was higher in tumours than in normal or adjacent\-normal tissue\. PXD024322 and PXD028102 are ProteomeXchange accessions for two public quantitative\-proteomics cohorts with complementary designs\. PXD024322 provided 88 TNBC tumours and 38 normal\-breast samples; PXD028102 included 82 TNBC tumours, of which 66 had matched adjacent\-normal tissue \(Asleh et al\., 2022; Gong et al\., 2022\)\.


> **References**
>
> Asleh K, Negri GL, Spencer Miko SE, et al\. Proteomic analysis of archival breast cancer clinical specimens identifies biological subtypes with distinct survival outcomes\. *Nature Communications*\. 2022;13:896\. [doi:10\.1038/s41467\-022\-28524\-0](https://doi.org/10.1038/s41467-022-28524-0)
>
> Gong Y, Ji P, Yang YS, et al\. Metabolic\-pathway\-based subtyping of triple\-negative breast cancer reveals potential therapeutic targets\. *Cell Reports*\. 2022;39:110460\. [doi:10\.1016/j\.celrep\.2022\.110460](https://doi.org/10.1016/j.celrep.2022.110460)

### Build

**English\.** We built a reproducible proteomic\-analysis workflow that retained sample, batch and patient identities\. PXD024322 used a `Batch + Condition` model to compare TNBC tumours with normal\-breast samples while accounting for TMT batches; proteins required at least two non\-missing measurements in each group to enter statistical testing\. PXD028102 used a paired `subject + condition` model, with `subject` identifying the 66 tumour–adjacent\-normal patient pairs\. Four left\-censored imputation settings assessed sensitivity to missing\-value handling\. Both analyses used limma empirical\-Bayes moderation and Benjamini–Hochberg correction across the proteins entering each analysis \(Ritchie et al\., 2015; Benjamini and Hochberg, 1995\)\.


> **References**
>
> Ritchie ME, Phipson B, Wu D, et al\. limma powers differential expression analyses for RNA\-sequencing and microarray studies\. *Nucleic Acids Research*\. 2015;43:e47\. [doi:10\.1093/nar/gkv007](https://doi.org/10.1093/nar/gkv007)
>
> Benjamini Y, Hochberg Y\. Controlling the false discovery rate: a practical and powerful approach to multiple testing\. *Journal of the Royal Statistical Society Series B*\. 1995;57:289–300\. [doi:10\.1111/j\.2517\-6161\.1995\.tb02031\.x](https://doi.org/10.1111/j.2517-6161.1995.tb02031.x)

**Code C1\-01｜Proteomic\-analysis script excerpts**

**English note\.** The excerpts retain the original model specifications, filtering rules, imputation settings and output filenames\. Data loading, function definitions and complete result\-table assembly are provided in the full script\.


**PXD024322｜Batch\-adjusted comparison**

```Plain
# Original script: 08_pxd024322_limma_tnbc_vs_normal.R

normal_columns <- metadata$Condition == "Normal"
tnbc_columns <- metadata$Condition == "TNBC"

normal_n <- rowSums(!is.na(expression[, normal_columns, drop = FALSE]))
tnbc_n <- rowSums(!is.na(expression[, tnbc_columns, drop = FALSE]))
total_n <- normal_n + tnbc_n

# Test proteins with at least 2 nonmissing values in each group.
# Retain all proteins in the complete results table.
testable <- normal_n >= 2 & tnbc_n >= 2

design <- model.matrix(~ Batch + Condition, data = metadata)
if (qr(design)$rank != ncol(design)) {
  stop("Design matrix is not full rank: batch and condition are confounded.")
}

fit <- lmFit(expression[testable, , drop = FALSE], design)
fit <- eBayes(fit, trend = TRUE, robust = TRUE)
tested_results <- topTable(
  fit,
  coef = "ConditionTNBC",
  number = Inf,
  sort.by = "none"
)

# After complete result-table assembly:
full_results$TNBC_coverage <- full_results$TNBC_n / full_results$TNBC_total
full_results$Normal_coverage <- full_results$Normal_n / full_results$Normal_total
full_results$Primary_high_coverage <- (
  full_results$TNBC_coverage >= 0.70 &
    full_results$Normal_coverage >= 0.70
)
full_results$Meets_conservative_screen <- (
  !is.na(full_results$adj.P.Val) &
    full_results$adj.P.Val < 0.05 &
    full_results$log2FC_TNBC_minus_Normal >= 0.5
)

write.csv(
  full_results,
  file.path(result_dir, "PXD024322_TNBC_vs_Normal_limma_ALL_9088_proteins.csv"),
  row.names = FALSE,
  na = ""
)

primary_results <- subset(full_results, Primary_high_coverage & Testable)
write.csv(
  primary_results,
  file.path(result_dir, "PXD024322_TNBC_vs_Normal_limma_primary_high_coverage.csv"),
  row.names = FALSE,
  na = ""
)
```

**PXD028102｜Patient\-paired comparison and missingness sensitivity**

```Plain
# Original script: 12_pxd028102_missingness_sensitive_limma.R
# subject represents the patient identifier (PatientID).

tumor_columns <- grep("T_Prot$", names(abundance), value = TRUE)
nat_columns <- grep("P_Prot$", names(abundance), value = TRUE)
tumor_ids <- sub("T_Prot$", "", tumor_columns)
nat_ids <- sub("P_Prot$", "", nat_columns)
paired_ids <- intersect(tumor_ids, nat_ids)

if (length(paired_ids) != 66L) {
  stop("Expected 66 tumor-NAT patient pairs; found ", length(paired_ids))
}

sample_columns <- c(
  paste0(paired_ids, "P_Prot"),
  paste0(paired_ids, "T_Prot")
)
condition <- factor(
  c(rep("NAT", length(paired_ids)), rep("TNBC", length(paired_ids))),
  levels = c("NAT", "TNBC")
)
subject <- factor(rep(paired_ids, 2))
design <- model.matrix(~ subject + condition)
coefficient_name <- "conditionTNBC"

# run_limma() performs left-censored imputation and then:
# lmFit(imputed, design)
# eBayes(fit, trend = TRUE, robust = TRUE)
# topTable(fit, coef = coefficient_name, number = Inf, sort.by = "none")

sensitivity_settings <- data.frame(
  quantile_probability = c(0.005, 0.01, 0.01, 0.05),
  offset = c(1.0, 0.5, 1.0, 1.0),
  method = c(
    "q0.5pct_minus1.0",
    "q1pct_minus0.5",
    "q1pct_minus1.0_primary",
    "q5pct_minus1.0"
  ),
  stringsAsFactors = FALSE
)

all_results <- vector("list", nrow(sensitivity_settings))
for (index in seq_len(nrow(sensitivity_settings))) {
  setting <- sensitivity_settings[index, ]
  all_results[[index]] <- run_limma(
    quantile_probability = setting$quantile_probability,
    offset = setting$offset,
    method_name = setting$method
  )
}

primary <- all_results[[3]]
write.csv(
  primary,
  file.path(result_dir, "PXD028102_paired_limma_imputed_ALL.csv"),
  row.names = FALSE,
  fileEncoding = "UTF-8"
)
```

### Test

**English\.** PXD024322 provided quantitative protein evidence for all four candidates\. Compared with normal\-breast samples, average abundance was higher in TNBC tumours for TROP2 \(1\.14\-fold, FDR = 0\.0370\), B7\-H4 \(1\.20\-fold, FDR = 0\.0446\), Nectin\-4 \(1\.35\-fold, FDR = 7\.14 × 10⁻⁹\) and LIV\-1 \(1\.34\-fold, FDR = 1\.88 × 10⁻⁵\)\. In the paired PXD028102 analysis, TROP2, B7\-H4 and Nectin\-4 were respectively 18\.25\-, 3\.72\- and 7\.12\-fold more abundant in tumours than in matched adjacent\-normal tissue, with FDR values of 2\.14 × 10⁻¹⁵, 7\.15 × 10⁻⁶ and 2\.13 × 10⁻¹¹\. LIV\-1 was not quantified in this cohort and retained its protein\-level support from PXD024322\. Together, the two cohorts supported carrying all four antigen sources forward\.


> **Figure C1\-03A｜Differential protein abundance in PXD024322**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-03a\.avif
>
> **English caption\.** Volcano plot comparing TNBC tumours with normal\-breast samples in PXD024322 using a batch\-adjusted limma model\. Axes show the fitted log₂ fold change and −log₁₀ Benjamini–Hochberg\-adjusted P value\. TROP2, B7\-H4, LIV\-1 and Nectin\-4 are highlighted against the quantified proteome\.
>
>
> **Figure C1\-03B｜Candidate\-protein abundance in PXD024322**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-03b\.avif
>
> **English caption\.** Batch\-adjusted log₂ protein\-abundance distributions for TROP2, B7\-H4, LIV\-1 and Nectin\-4 in PXD024322\. Grey and orange points represent normal\-breast and TNBC samples, respectively\. Each panel reports the fitted log₂ fold change and Benjamini–Hochberg\-adjusted P value\.
>
>
> **Figure C1\-03C｜Paired differential protein abundance in PXD028102**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-03c\.avif
>
> **English caption\.** Volcano plot from the patient\-paired limma comparison of TNBC tumours and matched normal\-adjacent tissue in PXD028102\. Axes show the fitted log₂ fold change and −log₁₀ Benjamini–Hochberg\-adjusted P value\. TROP2, B7\-H4 and Nectin\-4 are highlighted\.
>
>
> **Figure C1\-03D｜Candidate\-protein abundance in PXD028102**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-03d\.avif
>
> **English caption\.** Target\-centred log₂ abundance distributions for TROP2, B7\-H4 and Nectin\-4 in PXD028102\. Grey and orange points represent normal\-adjacent tissue \(NAT\) and TNBC samples, respectively\. Diamonds and connecting lines indicate group means, while statistical estimates derive from the patient\-paired model; the lines do not connect individual patient pairs\.
>

### Learn

**English\.** Quantitative proteomics established protein\-level support for all four antigen sources: PXD024322 measured all four candidates, while the matched design of PXD028102 independently reinforced TROP2, B7\-H4 and Nectin\-4\. We therefore retained the complete four\-antigen starting set\. The next question concerned cellular origin: tumour tissue contains malignant, immune and stromal compartments, so a cell\-resolved analysis was required to determine where the corresponding expression signals arose\. This became the next design\. Further details are provided in [Bioinformatics: proteomic evidence](https://2026.igem.wiki/jlu-fbh/bioinformatics)\.


## Iteration 1\.7｜Locating antigen expression within malignant\-cell diversity

### Design

**English\.**  The proteomic results supported all four antigen sources in TNBC tissue, but tumour samples also contain immune, stromal and endothelial cells\.We therefore asked whether the corresponding genes were enriched in malignant cells and whether they marked the same or complementary malignant\-cell populations\. GSE176078—the accession number of a public single\-cell and spatial atlas of human breast cancer in the Gene Expression Omnibus—retained the patient and cell\-type identities required for this analysis \(Wu et al\., 2021\)\.


> **References**
>
> Wu SZ, Al\-Eryani G, Roden DL, et al\. A single\-cell and spatially resolved atlas of human breast cancers\. \*Nature Genetics\*\. 2021;53:1334–1347\. [doi:10\.1038/s41588\-021\-00911\-1](https://doi.org/10.1038/s41588-021-00911-1)

### Build

**English\.** We established a unified workflow for the ten TNBC\-derived samples selected from GSE176078\. Quality control was performed within each sample, followed by SCTransform normalization and Harmony integration for cell\-level visualization\. To assess malignant\-cell enrichment, raw gene counts were aggregated by patient and cell compartment for pseudobulk analysis\. The eight patients with paired malignant and non\-malignant compartments served as biological replicates \(Hafemeister and Satija, 2019; Korsunsky et al\., 2019; Robinson et al\., 2010\)\. For the eight cases containing retained malignant cells, we also calculated the four\-gene detection union: a cell was counted as positive when at least one candidate gene had a raw UMI count above zero\. The positive fraction within each case, together with its malignant\-cell count, supplied the case\-wise pie\-chart summary\.


> **References**
>
> Hafemeister C, Satija R\. Normalization and variance stabilization of single\-cell RNA\-seq data using regularized negative binomial regression\. *Genome Biology*\. 2019;20:296\. [doi:10\.1186/s13059\-019\-1874\-1](https://doi.org/10.1186/s13059-019-1874-1)
>
> Korsunsky I, Millard N, Fan J, et al\. Fast, sensitive and accurate integration of single\-cell data with Harmony\. *Nature Methods*\. 2019;16:1289–1296\. [doi:10\.1038/s41592\-019\-0619\-0](https://doi.org/10.1038/s41592-019-0619-0)
>
> Robinson MD, McCarthy DJ, Smyth GK\. edgeR: a Bioconductor package for differential expression analysis of digital gene expression data\. *Bioinformatics*\. 2010;26:139–140\. [doi:10\.1093/bioinformatics/btp616](https://doi.org/10.1093/bioinformatics/btp616)

### Test

**English\.** The analysis retained 39,324 cells, including 9,491 malignant cells\. All four candidate genes were enriched in the malignant compartment, with lower detection rates in immune cells and cancer\-associated fibroblasts\. TROP2 had the highest individual malignant\-cell detection rate at 70\.4%; combining the four genes increased this fraction to 81\.4% \(7,727/9,491\), while 7\.3% had all four detected\. Across the eight cases shown, the union fractions ranged from 52\.5% to 97\.8%\. These results supported retaining complementary antigen sources rather than relying on a single gene\.


**Table C1\-04｜Malignant\-cell enrichment and compartment\-specific detection of candidate genes**

| Gene    | Antigen  | Malignant vs non-malignant log₂ fold change | FDR            | Malignant-cell detection | Immune-cell detection | CAF detection |
| ------- | -------- | -------------------------------------------- | -------------- | ------------------------ | --------------------- | ------------- |
| TACSTD2 | TROP2    | 4.074                                        | 8.37 × 10⁻⁵ | 70.40%                   | 4.00%                 | 5.40%         |
| SLC39A6 | LIV-1    | 0.853                                        | 0.0196         | 39.40%                   | 8.50%                 | 20.70%        |
| NECTIN4 | Nectin-4 | 4.755                                        | 3.70 × 10⁻⁶ | 37.80%                   | 1.00%                 | 0.60%         |
| VTCN1   | B7-H4    | 5.393                                        | 2.52 × 10⁻⁵ | 19.80%                   | 0.30%                 | 0.40%         |

**English note\.** Log₂ fold changes and FDR values describe the patient\-paired pseudobulk comparison between malignant and non\-malignant compartments\. Detection rates indicate the fraction of cells within each compartment with a raw UMI count greater than zero for the corresponding gene\. CAF, cancer\-associated fibroblast\.


> **Figure C1\-04A｜Cell\-lineage distribution in the TNBC single\-cell subset**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-04a\.avif
>
> **English caption\.** Harmony\-integrated UMAP of the 39,324 quality\-controlled cells in the GSE176078 TNBC subset\. Each point represents a cell, coloured by its annotated major lineage\. The map locates malignant cells alongside epithelial, immune, stromal and endothelial populations\.
>
>
> **Figure C1\-04B｜Candidate\-gene expression across cell populations**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-04b\.avif
>
> **English caption\.** Candidate\-gene expression on the Harmony UMAP \(left\) and expression distributions across cell compartments \(right\)\. Rows show TROP2/*TACSTD2*, B7\-H4/*VTCN1*, LIV\-1/*SLC39A6* and Nectin\-4/*NECTIN4* \(also labelled PVRL4\)\. Expression is displayed as ln\(CP10K \+ 1\), calculated from raw counts\. Cancer\-associated fibroblasts \(CAFs\) are included in the stromal compartment and also shown separately\.
>
>
> **Figure C1\-04C｜Case\-wise detection of the four\-gene panel in malignant cells**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-04c\.avif
>
> **English caption\.** The pie chart represents 9,491 malignant cells from eight cases in the GSE176078 TNBC subset\. Each case contributes a sector proportional to its malignant\-cell count, divided into coloured portions with at least one candidate gene detected and grey portions with none detected\. Labels report the case\-specific detection fraction and malignant\-cell number\. The pooled detection fraction was 81\.4% \(7,727/9,491\)\.
>

### Learn

**English\.** The cell\-resolved analysis gave the multi\-antigen strategy a cellular rationale: the four sources represented partly overlapping but non\-identical malignant\-cell populations, while the case\-wise summaries showed their combined detection within individual tumours\. We retained all four sources to broaden the cellular expression patterns represented in the design\. The next iteration used an independent TCGA TNBC cohort to evaluate representation at the patient level\. Further details are provided in [Bioinformatics: single\-cell analysis](https://2026.igem.wiki/jlu-fbh/bioinformatics)\.


## Iteration 1\.8｜Extending antigen representation across patients

### Design

**English\.** Iteration 1\.7 showed that the four antigen sources marked partly overlapping but non\-identical malignant\-cell populations\. We next asked whether combining these sources also increased representation across TNBC patients\. To answer this question, we needed a patient\-level rule that could be applied consistently to all four genes and a union calculation that counted each patient only once\.


### Build

**English\.** We examined 115 TNBC cases from the TCGA Breast Invasive Carcinoma PanCancer Atlas through cBioPortal, a public cancer\-genomics platform\. A patient met the criterion for a gene when its mRNA z\-score was at least 0\.5 or when high\-level copy\-number amplification was recorded\. We calculated the proportion of patients meeting the rule for each gene and then formed the union of the four gene\-positive sets, counting patients who met several criteria only once \(Cerami et al\., 2012; Gao et al\., 2013; cBioPortal, n\.d\.\)\. Published tissue evidence reviewed earlier in the cycle provided the clinical context for interpreting these patient\-level molecular records\.


> **References**
>
> Cerami E, Gao J, Dogrusoz U, et al\. The cBio Cancer Genomics Portal: an open platform for exploring multidimensional cancer genomics data\. *Cancer Discovery*\. 2012;2:401–404\. [doi:10\.1158/2159\-8290\.CD\-12\-0095](https://doi.org/10.1158/2159-8290.CD-12-0095)
>
> Gao J, Aksoy BA, Dogrusoz U, et al\. Integrative analysis of complex cancer genomics and clinical profiles using the cBioPortal\. *Science Signaling*\. 2013;6:pl1\. [doi:10\.1126/scisignal\.2004088](https://doi.org/10.1126/scisignal.2004088)
>
> cBioPortal\(n\.d\.\)\. Onco Query Language\. [Documentation](https://docs.cbioportal.org/user-guide/oql/)

### Test

**English\.** Under the predefined rule, TROP2, B7\-H4, Nectin\-4 and LIV\-1 individually met the criterion in 38%, 31%, 79% and 4% of the 115 cases, respectively\. Nectin\-4 provided the broadest individual representation, while the union of all four genes included 101 patients, or 88%\. The combined set therefore represented ten additional patients beyond Nectin\-4 alone\. Together with the partly overlapping malignant\-cell patterns observed in Iteration 1\.7 and Yishu Wang’s advice on multi\-epitope design, this increase supported retaining all four antigen sources for epitope selection\. The 88% value described antigen representation under the predefined molecular rule; HLA matching was carried forward as an independent eligibility layer\.


> **Figure C1\-05｜Patient\-level representation of the four antigen\-source genes**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-05\.avif
>
> **English caption\.** cBioPortal OncoPrint of 115 selected TCGA TNBC cases using the query `AMP EXP >= 0.5`, which identifies copy\-number amplification or an mRNA expression Z\-score of at least 0\.5\. The proportions meeting this rule were 38% for *TACSTD2*, 31% for *VTCN1*, 79% for *NECTIN4* and 4% for *SLC39A6*\. At least one of the four genes met the rule in 101 of 115 cases \(88%\)\.
>

### Learn

**English\.** The four\-antigen strategy now had three connected quantitative evidence levels\. Iteration 1\.6 established protein\-level support in TNBC tissue; Iteration 1\.7 located the four genes within partly overlapping malignant\-cell populations; and this iteration showed that combining the four sources increased patient representation beyond the broadest individual antigen\. Together with the clinical starting evidence from Iteration 1\.4, these results supported retaining TROP2, B7\-H4, Nectin\-4 and LIV\-1\. The next task was to preserve their data, literature and selection reasons as the four antigen sources moved into epitope design\. Further details are provided in [Bioinformatics: patient\-level evidence](https://2026.igem.wiki/jlu-fbh/bioinformatics)\.


## Iteration 1\.9｜Connecting the first Dry Lab workflow in CircuForge V1\.0

### Design

**English\.** During our own Dry Lab work, quantitative results first had to be reorganized for target review, and selected target names, accessions, protein sequences and supporting evidence then had to be transferred into epitope prediction\. Moving between R, Python, command\-line scripts and web tools repeatedly changed the required input format and made selection reasons difficult to retain\. This was especially demanding for new users\. We therefore designed CircuForge to connect the steps in one guided environment and preserve the context needed for the next decision\.


### Build

**English\.** We built CircuForge V1\.0 in R Shiny with three connected modules: data import and quality control, candidate\-target screening and epitope prediction\. Processed data could move into target analysis, and selected targets could continue into epitope review without rebuilding the workflow in another application\. V1\.0 was intended to help first\-time users follow the path from evidence to an epitope candidate while keeping the main analysis stages visible\.


> **Figure C1\-06｜CircuForge V1\.0 module interfaces**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-06a\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-06b\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-06c\.avif
>
> **English caption\.** CircuForge V1\.0 module interfaces\. **\(A\)** Data import and quality control, showing quantitative\-data and sample\-metadata upload, preprocessing controls and quality\-control plots\. **\(B\)** Candidate\-target screening, showing Limma analysis settings and a volcano plot\. **\(C\)** Epitope prediction, showing protein\-sequence input, prediction\-mode and HLA settings, and a candidate\-peptide results table\.
>

### Test

**English\.** We presented V1\.0 at an iGEM software exchange involving five teams\. Participants asked for a clearer distinction between software recommendations and the entries selected by the researcher, together with more visible candidate identity and supporting information during stage\-to\-stage transfer\. We converted this feedback into specific requirements for the next version\.


> **Figure C1\-07｜Five\-team online iGEM software exchange**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c1\-07\.avif
>
> **English caption\.** Group screenshot from a five\-team online iGEM software exchange involving JLU\-FBH, HUBU\-WUHAN, AFMU\-China, JLU\-SPH and LZU\-GANSU\.
>

### Learn

**English\.** V1\.0 connected the first three Dry Lab stages and gave the next software iteration three precise directions: **separate judgement, preserve evidence and clarify handoff**\. Stage\-specific candidate keys, Evidence Cards, visible software states and an independent confirmation step would later answer the problems identified here\. Along the scientific route, the four selected antigen sources also needed a common human\-cell framework before their epitopes could be compared experimentally\.  [See Software: CircuForge iterations](https://2026.igem.wiki/jlu-fbh/software)\.


## Iteration 1\.10｜Preparing a common human DC–T\-cell workflow

### Design

**English\.** Before the four antigen sources could enter epitope screening, their later RNA designs needed a common human\-cell context\. We therefore required a defined cell source, a consistent route for preparing antigen\-presenting and responder cells, and records that would keep biological inputs comparable across constructs\.


### Build

**English\.** Based on the Wet Lab protocol and human\-material ethics discussion with Junqi Niu, we placed procurement, cell preparation and record continuity within the experimental plan\. We then built a standardized preparation and co\-culture framework beginning with commercial HLA\-A\*02:01 PBMC material\. CD14\-positive monocytes were isolated for GM\-CSF/IL\-4\-induced monocyte\-derived DC culture, while CD3\-positive T cells were obtained from the CD14\-negative fraction\. The framework specified how circRNA\-loaded DCs would later enter a common DC–T\-cell co\-culture for ELISpot, flow\-cytometry and killing readouts \(Miltenyi Biotec, n\.d\.\-a; Miltenyi Biotec, n\.d\.\-b; Sallusto and Lanzavecchia, 1994\)\.


> **References**
>
> Miltenyi Biotec\(n\.d\.\-a\)\. CD14 MicroBeads, human: data sheet, 130\-050\-201\. [Source](https://www.miltenyibiotec.com/upload/assets/IM0001260.PDF)
>
> Miltenyi Biotec\(n\.d\.\-b\)\. CD3 MicroBeads, human: data sheet, 130\-050\-101\. [Source](https://www.miltenyibiotec.com/upload/assets/IM0001261.PDF)
>
> Sallusto F, Lanzavecchia A\. Efficient presentation of soluble antigen by cultured human dendritic cells is maintained by granulocyte/macrophage colony\-stimulating factor plus interleukin 4 and downregulated by tumor necrosis factor alpha\. *Journal of Experimental Medicine*\. 1994;179:1109–1118\. [doi:10\.1084/jem\.179\.4\.1109](https://doi.org/10.1084/jem.179.4.1109)

### Test

**English\.** The first ELISpot screen was intended to compare the immune responses associated with different epitope\-encoding RNA constructs\. For that comparison to be interpretable, the construct being tested needed to remain the principal planned variable\. We therefore checked the experimental plan group by group: the commercial PBMC batch, HLA\-A\*02:01 background, DC and T\-cell preparation routes, RNA input, loading procedure, co\-culture conditions and ELISpot procedure were kept consistent, while the RNA construct assigned to each condition changed\. This design allowed differences between wells to be interpreted primarily in relation to the construct under comparison\.


### Learn

**English\.** The common DC–T\-cell framework made a controlled first comparison possible: different epitope designs could later enter the same cell\-preparation and culture route, while cell source and construct identity remained visible during interpretation\. The four antigen sources were therefore ready to move from antigen\-level evidence to peptide prediction and experimental construct design\. Further details are provided in [Experiments: human\-cell preparation](https://2026.igem.wiki/jlu-fbh/experiments) and [Integrated Human Practices: human\-material ethics](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Cycle 1 Summary

**English\.** Cycle 1 completed the **T—Targeting** stage of TIME, moving from intended use to a four\-antigen strategy ready for epitope\-level engineering\. We selected a measurable circRNA platform, established a clinically grounded four\-antigen starting set and retained TROP2, B7\-H4, Nectin\-4 and LIV\-1 through clinical, protein\-level, malignant\-cell and patient\-level evidence\.Education and Visual Design established an adaptable first language for circRNA; CircuForge V1\.0 began to connect the computational handoff; and the common DC–T\-cell workflow prepared a shared experimental setting\. Cycle 2 could now ask a narrower engineering question: which epitopes from the four antigen sources should be encoded, built and compared?


# Cycle 2 — Integration: From epitope exploration to Combined

**English\.** TIME continues with **I—Integration**\. Cycle 1 defined four antigen sources and a common human DC–T\-cell context; this cycle connected those starting points to an experimentally selected multi\-antigen design\. Dry Lab first reduced the peptide search through sequence prediction and structural review\. Wet Lab then converted retained epitope sequences into traceable coding designs, corresponding circRNA preparations and a shared first\-round screen\. ELISpot, cellular activation and overall effector\-activity measurements supplied complementary evidence for selecting modules and building Combined\. Education and Visual Design translated recognition and experimental continuity into accessible learning experiences, while CircuForge developed the record structure needed to preserve decisions across a longer design workflow\.


Iteration 2\.1｜Defining a traceable epitope\-prediction route

## Iteration 2\.1｜Defining a traceable epitope\-prioritisation route

### Design

**English\.** The four antigen sources retained in Cycle 1 established the protein space for epitope exploration\. We next moved from source proteins to experimentally comparable short sequences under a defined HLA context\. The Dry Lab consultation with Associate Professor Qingtian Guan that shaped Iteration 1\.5 helped us distinguish two connected decisions: antigen selection identified the proteins to examine, while epitope prediction prioritised peptide sequences within those proteins\. We selected HLA\-A\*02:01 as a well\-characterised starting allele and required every predicted peptide to retain its source antigen, protein coordinates, HLA context, prediction outputs and selection status\. Canonical UniProt sequences provided a common protein reference, while the IEDB environment supplied the prediction tools \(The UniProt Consortium, 2025; Yan et al\., 2024\)\.


> **References**
>
> The UniProt Consortium\. UniProt: the Universal Protein Knowledgebase in 2025\. *Nucleic Acids Research*\. 2025;53–D617\. [doi:10\.1093/nar/gkae1010](https://doi.org/10.1093/nar/gkae1010)
>
> Yan Z, Kim K, Kim H, et al\. Next\-generation IEDB tools: a platform for epitope prediction and analysis\. *Nucleic Acids Research*\. 2024;52–W532\. [doi:10\.1093/nar/gkae407](https://doi.org/10.1093/nar/gkae407)

### Build

**English\.** We built a staged prioritisation route using all overlapping nine\-amino\-acid windows from the four canonical protein sequences\. Each peptide record linked its sequence and source coordinates to predicted HLA\-A\*02:01 binding affinity, sequence\-based immunogenicity and processing\-related outputs\. The numerical screen applied two predefined criteria in sequence:

1. **Binding\-affinity criterion:** Peptides with a predicted HLA\-A\*02:01 binding IC50 below 500 nM were retained, identifying sequences with stronger predicted binding\.
2. **Immunogenicity criterion:** The retained peptides were further required to have an IEDB immunogenicity score above zero, prioritising sequences with favourable immunogenicity predictions\.

Processing\- and eluted\-ligand\-related outputs were retained as supporting fields for subsequent review rather than applied as additional independent cutoffs \(Reynisson et al\., 2020; Calis et al\., 2013; Peters et al\., 2003; Tenzer et al\., 2005\)\.

Peptides satisfying both criteria then entered a source\-protein context review\. Their start and end coordinates were mapped onto the corresponding UniProt canonical sequences and compared individually with signal\-peptide and transmembrane\-region annotations\. We also recorded sequence overlaps and the representation of all four antigen sources to support later coding design\. This route connected each peptide’s numerical prediction results with its biological position in the source protein and preserved the basis for every subsequent selection decision\.





> **References**
>
> Reynisson B, Alvarez B, Paul S, Peters B, Nielsen M\. NetMHCpan\-4\.1 and NetMHCIIpan\-4\.0: improved predictions of MHC antigen presentation by concurrent motif deconvolution and integration of MS MHC eluted ligand data\. *Nucleic Acids Research*\. 2020;48–W454\. [doi:10\.1093/nar/gkaa379](https://doi.org/10.1093/nar/gkaa379)
>
> Calis JJA, Maybeno M, Greenbaum JA, et al\. Properties of MHC class I presented peptides that enhance immunogenicity\. *PLoS Computational Biology*\. 2013;9\. [doi:10\.1371/journal\.pcbi\.1003266](https://doi.org/10.1371/journal.pcbi.1003266)
>
> Peters B, Bulik S, Tampé R, Van Endert PM, Holzhütter HG\. Identifying MHC class I epitopes by predicting the TAP transport efficiency of epitope precursors\. *Journal of Immunology*\. 2003;171:1741–1749\. [doi:10\.4049/jimmunol\.171\.4\.1741](https://doi.org/10.4049/jimmunol.171.4.1741)
>
> Tenzer S, Peters B, Bulik S, et al\. Modeling the MHC class I pathway by combining predictions of proteasomal cleavage, TAP transport and MHC class I binding\. *Cellular and Molecular Life Sciences*\. 2005;62:1025–1037\. [doi:10\.1007/s00018\-005\-4528\-2](https://doi.org/10.1007/s00018-005-4528-2)

### Test

**English\.** The four canonical proteins generated 1,838 overlapping nine\-amino\-acid peptides: 315 from TROP2, 274 from B7\-H4, 502 from Nectin\-4 and 747 from LIV\-1\. The binding\-affinity threshold retained 83 peptides—17, 13, 15 and 38 from the four respective sources\. Applying the positive immunogenicity\-score requirement retained 51 peptides: nine from TROP2, ten from B7\-H4, ten from Nectin\-4 and twenty\-two from LIV\-1\.

We then mapped these 51 peptides back to their source proteins and compared their coordinates with UniProt signal\-peptide and transmembrane annotations\. The source\-protein review formed a 17\-epitope shortlist comprising four TROP2, two B7\-H4, six Nectin\-4 and five LIV\-1 sequences\. Each shortlisted epitope retained its binding\-affinity result, immunogenicity score, source coordinates and protein\-context record, providing a traceable input for structural review\.



> **Figure C2\-01｜From overlapping peptides to a 17\-epitope shortlist**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-01\.avif
>
> **English caption\.** Binding\-affinity and immunogenicity thresholds followed by source\-protein context review reduced 1,838 overlapping nine\-amino\-acid peptides to 17 traceable candidate epitopes\.
>

### Learn

**English\.** The staged route connected numerical prediction with source\-protein context and produced 17 candidate epitopes carrying explicit selection records\. The next decision concerned their predicted peptide–HLA arrangements, so the 17\-sequence shortlist entered a shared structural\-review route before the experimental handoff\. Natural presentation was assigned to a dedicated subsequent evidence layer\. Further details are provided in [Bioinformatics: epitope prediction](https://2026.igem.wiki/jlu-fbh/bioinformatics) and [Integrated Human Practices: Dry Lab route](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 2\.2｜Using structural review to define the Wet Lab handoff

### Design

**English\.** Iteration 2\.1 produced 17 traceable candidate epitopes through sequence prediction and source\-protein context review\. Dry Lab then introduced a unified structural assessment to support the Wet Lab handoff\. We examined peptide placement within the HLA\-A\*02:01 binding groove, P2/P9 anchoring, interface contacts, consistency across sampled models and structural conflicts\. These observations supported computational prioritisation, while subsequent cell\-based experiments would evaluate immune responses \(Bouvier and Wiley, 1994; Saper et al\., 1991\)\.


> **References**
>
> Bouvier M, Wiley DC\. Importance of peptide amino and carboxyl termini to the stability of MHC class I molecules\. *Science*\. 1994;265:398–402\. [doi:10\.1126/science\.8023162](https://doi.org/10.1126/science.8023162)
>
> Saper MA, Bjorkman PJ, Wiley DC\. Refined structure of the human histocompatibility antigen HLA\-A2 at 2\.6 Å resolution\. *Journal of Molecular Biology*\. 1991;219:277–319\. [doi:10\.1016/0022\-2836\(91\)90567\-P](https://doi.org/10.1016/0022-2836%2891%2990567-P)

### Build

**English\.** We established a unified AlphaFold 3 structural\-review workflow for all 17 candidates\. Each peptide was submitted with the HLA\-A\*02:01 heavy chain and β2\-microglobulin, with structural templates enabled\. Each task returned five sampled models; all 85 models and their confidence files were retained, and all five models per candidate were included in the structural measurements \(Abramson et al\., 2024\)\.

The review was organised into five dimensions:

1. **Groove placement:** the peptide’s position and orientation within the HLA binding groove\.
2. **P2/P9 anchoring:** side\-chain burial at positions 2 and 9 and their accommodation within the B and F pockets, respectively\.
3. **Interface contacts:** peptide–HLA contacts and the conserved backbone hydrogen\-bond network\.
4. **Model consistency:** agreement in structural measurements and review outcomes across the five sampled models\.
5. **Structural conflicts:** recurring steric clashes, distortion or displacement\.

Each record remained linked to the source antigen, protein coordinates and IEDB prediction history\. The representative TROP2 peptide `SVCWCVNSV` documented the PyMOL workflow for examining peptide placement, interface residues and predicted hydrogen bonds \(Saper et al\., 1991\)\.





> **Figure C2\-02A｜Unified AlphaFold 3 structural\-review workflow**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-02a\.avif
>
> **English caption\.** Each candidate peptide was modelled with the HLA\-A\*02:01 heavy chain and β2\-microglobulin\. All five returned models were retained and assessed across five structural\-review dimensions\. `SVCWCVNSV` illustrated the PyMOL measurement and visualization workflow\.
>
>
> **References**
>
> Abramson J, Adler J, Dunger J, et al\. Accurate structure prediction of biomolecular interactions with AlphaFold 3\. *Nature*\. 2024;630:493–500\. [doi:10\.1038/s41586\-024\-07487\-w](https://doi.org/10.1038/s41586-024-07487-w)
>
> Saper MA, Bjorkman PJ, Wiley DC\. Refined structure of the human histocompatibility antigen HLA\-A2 at 2\.6 Å resolution\. *Journal of Molecular Biology*\. 1991;219:277–319\. [doi:10\.1016/0022\-2836\(91\)90567\-P](https://doi.org/10.1016/0022-2836%2891%2990567-P)

### Test

**English\.** The first\-round handoff retained 15 of the 17 candidate epitopes: four TROP2, two B7\-H4, four Nectin\-4 and five LIV\-1 sequences\. `HILHVSFLA` and `FLAEASVRG` were not included in the first\-round coding set\. The table summarises structural measurements alongside coding status, while the retained sequences remained linked to their IEDB results and source\-protein coordinates for Wet Lab preparation\.


**Table C2\-02B｜Structural measurements and first\-round coding status of 17 candidate epitopes**

| Antigen  | Peptide   | P2 side-chain burial (%) | P9 side-chain burial (%) | P9 buried area / reference ratio (Å² / %) | Conserved hydrogen-bond network | TCR-facing exposed area (Å²) | First-round coding status |
| -------- | --------- | ------------------------ | ------------------------ | ------------------------------------------- | ------------------------------- | ------------------------------ | ------------------------- |
| TROP2    | RLFRERYRL | 99.8                     | 99.7                     | 143.8 / 103                                 | 11.11                           | 374                            | Included                  |
| TROP2    | SVCWCVNSV | 99.8                     | 100                      | 114.4 / 82                                  | 11.11                           | 245                            | Included                  |
| TROP2    | TLIYYLDEI | 99.8                     | 100                      | 140.0 / 100                                 | 11.11                           | 361                            | Included                  |
| TROP2    | YLDEIPPKF | 99.8                     | 99.4                     | 173.3 / 124                                 | 11.11                           | 270                            | Included                  |
| B7-H4    | AVFADQVIV | 99.8                     | 100                      | 115.1 / 82                                  | 11.11                           | 252                            | Included                  |
| B7-H4    | WLKEGVLGL | 99.8                     | 99.9                     | 140.2 / 100                                 | 11.11                           | 147                            | Included                  |
| Nectin-4 | AVTSEFHLV | 99.9                     | 100                      | 114.3 / 82                                  | 11.11                           | 240                            | Included                  |
| Nectin-4 | FLAEASVRG | 99.8                     | Undefined                | 0.0 / 0                                     | 11.11                           | 293                            | Not included              |
| Nectin-4 | FQARLRLRV | 99                       | 100                      | 113.7 / 81                                  | 11.11                           | 424                            | Included                  |
| Nectin-4 | HILHVSFLA | 99.9                     | 99.4                     | 60.1 / 43                                   | 11.11                           | 269                            | Not included              |
| Nectin-4 | RLRVLVPPL | 99.8                     | 100                      | 139.6 / 100                                 | 11.11                           | 259                            | Included                  |
| Nectin-4 | YINGRGHLV | 99.9                     | 100                      | 113.5 / 81                                  | 11.11                           | 226                            | Included                  |
| LIV-1    | FIGHYAENV | 99.9                     | 100                      | 113.9 / 81                                  | 11.11                           | 249                            | Included                  |
| LIV-1    | GLHNFSDGL | 99.7                     | 99.7                     | 139.8 / 100                                 | 11.11                           | 222                            | Included                  |
| LIV-1    | GVATLAWMV | 99.8                     | 100                      | 113.3 / 81                                  | 11.11                           | 280                            | Included                  |
| LIV-1    | SVAVFCHEL | 99.8                     | 99.7                     | 139.8 / 100                                 | 11.11                           | 277                            | Included                  |
| LIV-1    | TVSEGTHFL | 99.8                     | 99.7                     | 139.5 / 100                                 | 11.11                           | 234                            | Included                  |

**English note\.** Coding status records inclusion in the first\-round experimental design; structural measurements provide accompanying computational descriptions\. Numerical measurements are means across five models, while the conserved\-network column counts hydrogen bonds present in all five\. The P9 reference ratio uses 140 Å² as its denominator and may exceed 100%\. “Undefined” denotes an undefined side\-chain burial percentage\.


**English\.** Across the five models of the representative TROP2 peptide `SVCWCVNSV`, the P2 and P9 side chains were highly buried, the conserved hydrogen\-bond network was maintained and no interface steric clashes were recorded\. PyMOL views illustrated peptide placement within the HLA binding groove, surrounding interface residues and predicted hydrogen bonds\. The archived models, measurement records and PyMOL session preserved these observations for subsequent review\.


> **Figure C2\-02C｜Representative peptide–HLA structural visualization**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-02c\.avif
>
> **English caption\.** A representative PyMOL view illustrates the predicted placement of `SVCWCVNSV` within the HLA\-A\*02:01 binding groove, together with surrounding interface residues and predicted hydrogen bonds\. Structural measurements included all five sampled models\.
>

### Learn

**English\.** Structural review accompanied a defined 15\-sequence Dry Lab handoff, with prediction and structural records retained for each candidate\. The source\-protein coordinates also allowed Wet Lab to identify two overlapping pairs: `TLIYYLDEI` with `YLDEIPPKF` in TROP2, and `FQARLRLRV` with `RLRVLVPPL` in Nectin\-4\. This defined the next engineering decision: encode each pair as one continuous segment while preserving both source epitopes\. Further details are provided in [Bioinformatics: AlphaFold structural review](https://2026.igem.wiki/jlu-fbh/bioinformatics)\.


## Iteration 2\.3｜Converting overlapping epitopes into continuous coding designs

### Design

**English\.** Wet Lab compared the source coordinates of the 15 retained candidate epitopes\. Two pairs overlapped within their native proteins: `TLIYYLDEI` with `YLDEIPPKF` in TROP2, and `FQARLRLRV` with `RLRVLVPPL` in Nectin\-4\. Representing each overlapping pair as one continuous segment allowed the shared residues to be encoded once while preserving the complete native sequence of both source epitopes\. We therefore designed one continuous coding segment for each pair\.


### Build

**English\.** Wet Lab produced three TROP2, two B7\-H4, three Nectin\-4 and five LIV\-1 coding designs for the first experimental comparison\. To preserve the complete information of the overlapping epitopes without repeatedly encoding their shared residues, two sequence pairs were merged into continuous segments: `TLIYYLDEI` and `YLDEIPPKF` formed TROP2 CTL3 \(`TLIYYLDEIPPKF`\), while `FQARLRLRV` and `RLRVLVPPL` formed NECTIN4 CTL1 \(`FQARLRLRVLVPPL`\)\. The other retained candidate epitopes remained separately encoded\.


### Test

**English\.** Sequence mapping confirmed that the 13 first\-round coding designs contained all 15 retained candidate epitopes\. The TROP2 epitopes `TLIYYLDEI` and `YLDEIPPKF` shared `YLDEI` and formed the continuous segment `TLIYYLDEIPPKF`, designated TROP2 CTL3\. The Nectin\-4 epitopes `FQARLRLRV` and `RLRVLVPPL` shared `RLRV` and formed `FQARLRLRVLVPPL`, designated NECTIN4 CTL1\. Each merged segment preserved both source epitopes in their native order, with the shared residues encoded once\.


### Learn

**English\.** The overlap decision established 13 first\-round coding designs representing all 15 retained candidate epitopes\. The next requirement was to connect these sequence\-level designs to identifiable DNA materials while preserving the correspondence among insert sequence, supplier\-assembled recombinant plasmid and Wet Lab sample label\. This requirement led the engineering route from coding design to the DNA\-template handoff used for transcription\. Further details are provided in [Experiments: first\-round coding designs](https://2026.igem.wiki/jlu-fbh/experiments) and [Parts: epitope\-encoding sequences](https://2026.igem.wiki/jlu-fbh/parts)\.


## Iteration 2\.4｜Connecting coding designs to transcribable DNA templates

### Design

**English\.** The 13 coding designs needed corresponding DNA material that could enter one common transcription route\. This handoff required three identities to remain aligned: the intended insert sequence, the recombinant plasmid supplied for that design and the Wet Lab sample label used during template processing\. Establishing this correspondence was the purpose of the iteration\.


### Build

**English\.** Wet Lab and the commercial service provider translated the 13 coding designs into identifiable plasmid materials\. Wet Lab finalised the insert sequences and construct identities, while the provider completed plasmid synthesis and assembly\. On delivery, we matched the plasmid maps, sequence files and sample labels to the design records\. The verified plasmids then entered transcription\-template preparation, maintaining the connection between each coding design and the DNA material used for circRNA production\.


### Test

**English\.** The document\-to\-sample check confirmed the correspondence between the 13 delivered plasmids, their intended coding designs and sample labels\. Construct identifiers were retained during DNA\-template preparation and T7 transcription, allowing each first\-round design to remain linked to the material used for circRNA production\. This established an identifiable set of plasmid inputs for the shared preparation workflow\.


### Learn

**English\.** The 13 coding designs were now connected to identifiable plasmid materials and a common transcription route\. The next engineering question shifted from DNA identity to preparation comparability: could all 13 designs be converted into circRNA inputs under shared conditions and introduced into the same DC–T\-cell system?


## Iteration 2\.5｜Producing comparable circRNA inputs for the first screen

### Design

**English\.** A meaningful first\-round comparison required the encoded epitope segment to be the principal difference among the 13 inputs\. We therefore fixed a shared route from DNA template to circRNA preparation, DC electroporation and DC–T\-cell co\-culture\. The RNA measurements were reported at their actual scale, with RNase R\-related and primer\-based results describing preparation composition and consistency\.


### Build

**English\.** Wet Lab established a unified plasmid\-to\-circRNA\-to\-DC–T\-cell workflow for the 13 coding designs, allowing each preparation to enter the first experimental comparison under consistent conditions\. Starting from the delivered plasmids, we prepared transcription templates, generated precursor RNA by T7 in vitro transcription, removed the DNA templates and purified the RNA \(New England Biolabs, n\.d\.\)\. The precursors then underwent self\-splicing and circularisation \(Wesselhoeft et al\., 2018\), followed by RNA purification and the recorded RNase R\-related check \(LGC Biosearch Technologies, n\.d\.\)\. Discussion with Ruohan Yang helped standardise the preparation sequence and the terminology used for the RNA readouts\. Finally, each circRNA preparation was introduced into immature DCs using the same Nucleofector II programme and RNA input \(Lonza, n\.d\.\), after which the DCs were co\-cultured with autologous T cells at the common ratio established in Cycle 1\.


> **References**
>
> New England Biolabs \(n\.d\.\) *Standard RNA synthesis with HiScribe T7 Quick High Yield RNA Synthesis Kit, E2050*\. [Source](https://www.neb.com/en/protocols/standard-rna-synthesis-with-hiscribe-t7-quick-high-yield-rna-synthesis-kit-neb-e2050)
>
> Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. *Nature Communications*\. 2018;9:2629\. [doi:10\.1038/s41467\-018\-05096\-6](https://doi.org/10.1038/s41467-018-05096-6)
>
> LGC Biosearch Technologies \(n\.d\.\) *Ribonuclease R Manual*\. Cat\. RNR07250\. [Source](https://biosearchtech.a.bigcontent.io/v1/static/manual_RNR07250_RNase-R)
>
> Lonza \(n\.d\.\) *Human Dendritic Cell Nucleofector Kit*\. VPA\-1004, Optimized Protocol U\-002\. [Source](https://bioscience.lonza.com/lonza_bs/US/en/Transfection/p/000000000000191773/Human-Dendritic-Cell-Nucleofector-Kit)

### Test

**English\.** RT\-qPCR assessment of the RNase R\-purified TROP2\-CTL1 preparation supported 4 µL as the working input\. Divergent primers targeted the circularisation junction, while convergent primers supplied the comparison signal used in the recorded calculation\. At 4 µL, the recorded circular\-to\-linear signal ratio was 32\.5:1, with an estimated circular fraction of 96\.96±0\.70% across three technical wells, consistent with the 6 µL result\. These measurements supported a circRNA\-rich representative preparation\. The 13 preparations produced through the shared route subsequently entered the first DC–T\-cell screen under matched electroporation and culture conditions\.


| Input volume | Recorded circular-to-linear signal ratio | Estimated circular fraction |
| ------------ | ---------------------------------------- | --------------------------- |
| 2 µL        | 13.0:1                                   | 92.85±0.08%                |
| 4 µL        | 32.5:1                                   | 96.96±0.70%                |
| 6 µL        | 26.4:1                                   | 96.25±1.14%                |

> **Table C2\-01｜RT\-qPCR assessment of the representative first\-round preparation**
>
> **English note\.** TROP2\-CTL1 served as the representative first\-round preparation\. Each input volume included three technical replicate wells; estimated fractions are reported as mean±SD using the source calculation\. The 4 µL input was selected for subsequent measurements\.
>

### Learn

**English\.** The shared preparation route produced 13 traceable circRNA inputs under matched molecular and cellular conditions\. This made a within\-run immune\-response comparison possible\. The next Design therefore fixed the selection rule before examining the ELISpot results: retain two responsive modules from each antigen source so that the four\-antigen strategy established in Cycle 1 remained represented in Combined\. Further details are provided in [Experiments: circRNA preparation and DC–T\-cell culture](https://2026.igem.wiki/jlu-fbh/experiments) and [Integrated Human Practices: circRNA preparation](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 2\.6｜Selecting two responsive modules from each antigen source

### Design

**English\.** Iteration 1\.6 established protein\-level support for the four antigen sources, Iteration 1\.7 located them within complementary malignant\-cell populations and Iteration 1\.8 extended this complementarity across patients\. Together, these results supported retaining all four sources during epitope selection\. Before examining the ELISpot spot counts, we therefore established an antigen\-source\-stratified rule: rank the circRNA preparations within each source and select two responsive modules from every source\. This preserved more than one experimentally responsive sequence from each antigen, maintained equal representation despite different numbers of first\-round constructs and produced a balanced eight\-module composition for Combined\.


### Build

**English\.** The 13 epitope\-encoding circRNA preparations were compared through the same human DC–T\-cell route and IFN\-γ ELISpot procedure\. Equalised cell inputs, the shared culture route and consistent plate handling allowed the spot counts to serve as a within\-run ranking measure\. A methods consultation with Teacher Lin Jia addressed whether ELISpot alone was sufficient for the next design decision and established the need for complementary activation and effector\-activity measurements \(Dakewe Biotech, n\.d\.\)\.


> **References**
>
> Dakewe Biotech \(n\.d\.\) *Human IFN\-γ Precoated ELISPOT Kit \(strips\): instruction manual*\. Cat\. 2110005, Rev\. C/2\. [Instruction manual](https://files.dakewe.cn/crm/instruction/dy/2110005.pdf)

### Test

**English\.** The spot\-count comparison identified two modules from each antigen source and refined the 13 first\-round circRNA inputs into eight selected modules\. TROP2 CTL1 and TROP2 CTL2 produced the two highest counts within the TROP2 group\. Both B7\-H4 modules were retained, together with the two leading Nectin\-4 modules and LIV\-1 CTL2 and CTL3\. Because all 13 inputs were compared within the same experimental run, their spot counts provided the relative selection evidence required to define Combined’s eight\-module composition\.


> **Figure C2\-03｜First\-round ELISpot selection of eight modules**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-03\.avif
>
> **English caption\.** First\-round IFN\-γ ELISpot compared 13 epitope\-encoding circRNA preparations and selected two responsive modules from each of the four antigen sources\.
>

### Learn

**English\.** ELISpot supplied the eight modules required for Combined and also clarified the next evidence step\. IFN\-γ secretion recorded a recognition\-associated cellular response; the project still needed to observe early CD8 T\-cell activation and overall effector activity before assembling the first\-round evidence\. We retained that scientific requirement and first translated the idea of recognition into an age\-appropriate educational experience\. Further details are provided in [Results: first\-round ELISpot](https://2026.igem.wiki/jlu-fbh/results) and [Integrated Human Practices: extending the ELISpot evidence](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 2\.7｜Translating recognition into Vaccine Classroom

### Design

**English\.** The ELISpot screen gave the project a concrete example of how biological information can guide recognition\. For primary\-school learners, we began with experiences already familiar to them: receiving an injection, feeling pain or fever and hearing that vaccination helps the body prepare\. These everyday memories became a bridge to the idea of advance recognition, allowing immunological concepts to unfold through situations that children could readily understand\.


### Build

**English\.** Education and Visual Design developed an interactive vaccine\-science lesson for approximately 50 students at the Primary School Affiliated to Jilin University\. Beginning with the students’ own vaccination experiences, the lesson introduced the basic idea that the immune system recognises targets through biological information\. Students then completed two rounds of a “wanted\-poster” game: the first provided only limited information, while the second added clear identifying clues\. By comparing their group decisions across the two rounds, students could experience how more specific information improves recognition before returning to the scientific explanation of immune recognition\.


### Test

**English\.** A rough classroom tally showed that recognition accuracy increased from approximately **40%** in the limited\-clue round to approximately **87%** after clear identifying clues were provided—an improvement of about **47 percentage points**\. In the second round, students also explained which clues supported their choices more actively during group discussion\. The class then connected this experience to how biological information supports immune recognition and how vaccination prepares the immune system to respond\.


> **Figure C2\-04｜Two\-round recognition activity in Vaccine Classroom**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-04a\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-04b\.avif
>
> **English caption\.** **\(A\)** Approximate classroom recognition accuracy in the limited\-clue and clear\-clue rounds\. **\(B\)** Classroom scene from the Vaccine Classroom activity at the Primary School Affiliated to Jilin University\.
>

### Learn

**English\.** We retained the four\-part structure, two\-round game and scientific return in a reusable Teaching Pack\. The classroom also gave us a transferable design principle: understanding improved when learners could see what information entered a decision and how that information changed the next action\. We next applied this principle to a longer educational problem—making a multi\-step experimental workflow visible and repeatable in the Virtual Laboratory\. Further details are provided in [Education: Vaccine Classroom](https://2026.igem.wiki/jlu-fbh/education)\.


## Iteration 2\.8｜From team\-guided use to independent classroom teaching

### Design

**English\.** Iteration 2\.7 showed that learners understood a decision more clearly when they could see what information guided it and how it changed the next action\. We next asked whether this principle could be extended from a short recognition activity to a complete molecular\-biology workflow\. This was particularly relevant for schools that could teach experimental concepts but could not continuously provide the instruments, consumables, safety conditions and supervision required for a full cloning course\. Building on our Winter Outreach connection, we introduced the initial Virtual Laboratory at Hailun No\. 1 High School in Heilongjiang Province, China\. The first team\-guided activity showed that learners needed clearer explanations of each experiment’s purpose and more visible links between consecutive steps, defining the focus of the subsequent revision\.


> **Figure C2\-05A｜First teacher\-guided use of the Virtual Laboratory**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-05a\.avif
>
> **English caption\.** During the first activity at Hailun No\. 1 High School, the teacher used the initial Virtual Laboratory with support from the development team\. This activity revealed the need for clearer experimental purposes and more visible connections between consecutive steps\.
>

### Build

**English\.** Education and the Wiki team reorganised the Virtual Laboratory into a continuous nine\-experiment GFP cloning and verification route\. Approximately 160 experimental illustrations supported direct mouse\-based operation\. Step navigation displayed the learner’s current position, yellow prompts identified the next action and the Theory, Safety, Instruments and Reagents modules remained accessible throughout the procedure\. Together, these changes allowed the programme itself to explain where the learner was, what should be done and how the result connected to the next experiment\.


### Test

**English\.** We returned to Hailun No\. 1 High School with the revised programme and invited the same teacher to organise a second activity\. The teacher introduced the workflow through the classroom display and later continued using it during self\-study periods without the development team present\. Her feedback highlighted two improvements: the visible route made the experimental sequence easier to organise, and the supporting modules allowed key explanations to be revisited whenever students encountered difficulty\. The second activity therefore demonstrated a transition from team\-guided presentation to continued teacher\-led use\.


> **Figure C2\-05B｜Teacher\-led use of the revised Virtual Laboratory**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-05b\.avif
>
> **English caption\.** After revision, the same teacher independently organised the Virtual Laboratory and continued using it after the development team had left\.
>

### Learn

**English\.** The two activities showed that digital access alone was not sufficient; a transferable learning resource also needed to explain its sequence and retain its supporting information after handoff\. Hailun No\. 1 High School therefore became not only a user of the Virtual Laboratory but also a contributor to its refinement\. This experience encouraged us to introduce the resource to more schools with different equipment conditions, teaching schedules and learner backgrounds\. With this Education branch completed, the scientific route returned to the first\-round screen from Iteration 2\.6 and extended IFN\-γ secretion evidence to cellular activation and effector activity\. Further details are provided in [Education: Virtual Laboratory](https://2026.igem.wiki/jlu-fbh/education)\.


## Iteration 2\.9｜Extending the first\-round evidence from secretion to cellular action

### Design

**English\.** Iteration 2\.6 identified eight modules through IFN\-γ\-associated responses\. To complete the planned first\-round evidence, we added two complementary questions: whether TROP2 CTL1 and CTL2 initiated early activation of CD8\-positive T cells, and whether the first\-round effector preparations displayed measurable overall cytotoxic activity\. Consultation with Jia Lin helped us place the K562 result at the correct level: it could inform overall effector activity, while a TNBC target carrying the relevant antigen and HLA context would be required later for target\-specific interpretation \(Cibrián and Sánchez\-Madrid, 2017; Lichtenfels et al\., 1994; Neri et al\., 2001\)\.


> **References**
>
> Cibrián D, Sánchez\-Madrid F\. CD69: from activation marker to metabolic gatekeeper\. *European Journal of Immunology*\. 2017;47:946–953\. [doi:10\.1002/eji\.201646837](https://doi.org/10.1002/eji.201646837)
>
> Lichtenfels R, Biddison WE, Schulz H, Vogt AB, Martin R\. CARE\-LASS \(calcein\-release\-assay\), an improved fluorescence\-based test system to measure cytotoxic T lymphocyte activity\. *Journal of Immunological Methods*\. 1994;172:227–239\. [PubMed](https://pubmed.ncbi.nlm.nih.gov/7518485/)
>
> Neri S, Mariani E, Meneghetti A, Cattini L, Facchini A\. Calcein\-acetoxymethyl cytotoxicity assay: standardization of a method allowing additional analyses on recovered effector cells and supernatants\. *Clinical and Diagnostic Laboratory Immunology*\. 2001;8:1131–1135\. [PubMed](https://pubmed.ncbi.nlm.nih.gov/11687452/)

### Build

**English\.** We built two parallel functional assays to complement the IFN\-γ secretion measured by ELISpot\. The first used flow cytometry to quantify the CD8⁺CD69⁺ cell fraction under the TROP2 CTL1 and CTL2 conditions, providing an early T\-cell activation readout\. The second used Calcein\-AM\-labelled K562 targets to measure the overall cytotoxic activity of the first\-round effector preparations at an effector\-to\-target ratio of 80:1\. Spontaneous\- and maximum\-release controls provided the fluorescence references for calculating normalised cytotoxicity\. Together, these assays supplemented the secretion measurement with complementary evidence of early activation and effector\-cell killing activity\.


> **Figure C2\-06｜Complementary first\-round functional\-assessment workflow**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-06\.avif
>
> **English caption\.** **\(A\)** CD8/CD69 staining and flow cytometry assessed early T\-cell activation under the TROP2 CTL1 and CTL2 conditions\. **\(B\)** Calcein\-AM release from K562 targets measured overall effector\-cell cytotoxicity at an effector\-to\-target ratio of 80:1, with spontaneous\- and maximum\-release controls supporting normalisation\.
>

### Test

**English\.** The CD8/CD69 comparison recorded early activation under both leading TROP2 conditions, while the K562 assay detected effector activity across the first\-round preparations\. These results complemented the ELISpot ranking through distinct cellular readouts\. K562 therefore supplied overall effector\-activity evidence; the later TNBC target\-cell assay would add the corresponding antigen–HLA context\.


> **Figure C2\-07A｜First\-round CD8/CD69 flow cytometry**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-07a\.avif
>
> **English caption\.** CD8/CD69 flow cytometry following TROP2 CTL1 or CTL2 stimulation\. Red ellipses identify the lymphocyte gate; green boxes identify CD8⁺CD69⁺ cells within that gate\.
>
>
> **Figure C2\-07B｜First\-round K562 killing**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-07b\.avif
>
> **English caption\.** K562 killing was measured by Calcein\-AM release at an effector\-to\-target ratio of 80:1 across the first\-round constructs\.
>

### Learn

**English\.** ELISpot established the eight selected modules, while CD8/CD69 and K562 extended the evidence from cytokine secretion to cellular activation and overall effector action\. The four antigen sources remained represented, and TROP2 CTL1 and CTL2 supplied the strongest single\-antigen reference pair\. These decisions defined the next Build: assemble the eight selected modules into Combined and create a five\-group comparison that could distinguish vector background, single TROP2 modules, their within\-antigen combination and the complete multi\-antigen design\. Further details are provided in [Results: first\-round flow cytometry and K562 assay](https://2026.igem.wiki/jlu-fbh/results) and [Integrated Human Practices: defining the K562 evidence boundary](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Iteration 2\.10｜Integrating eight selected modules into Combined

### Design

**English\.** The eight\-module endpoint was predetermined by the stratified ELISpot rule: two modules from each of the four antigen sources\. Wet Lab now designed their order and linker arrangement within one multi\-antigen coding sequence\. To evaluate what the complete design added, the second\-round comparison was organised as Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 and Combined\. This hierarchy separated vector background, the two strongest TROP2 modules, their within\-antigen combination and the complete four\-antigen design\.


### Build

**English\.** Wet Lab built a five\-group comparison centred on Combined\. The eight selected modules from four antigen sources were arranged with defined linkers to form the Combined coding sequence\. Blank, TROP2 CTL1, TROP2 CTL2 and TROP2 CTL1\+2 provided stepwise references for the shared background, individual modules and their within\-antigen combination\. A commercial service provider assembled the corresponding recombinant plasmids, and the delivered DNA templates entered the same transcription, circularisation and purification workflow to produce comparable circRNA preparations for the second\-round experiments\.


### Test

**English\.** Wet Lab compared the supplier\-provided sequence records and sample labels with the intended five\-group design, focusing on the order of the eight selected modules and the linker boundaries in Combined\. This check linked the first\-round selection records to the second\-round construct materials, providing a traceable starting point for subsequent circRNA preparation and comparison\.


> **Figure C2\-08｜Combined construct plasmid map**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-08\.avif
>
> **English caption\.** Plasmid map of the Combined construct, designed to incorporate eight modules selected through the first\-round ELISpot screen\.
>

### Learn

**English\.** Integration now had a physical endpoint: Combined and four comparison preparations whose roles were defined before testing\. The next cycle could therefore measure the molecules that had actually been prepared, beginning with their RNA\-level properties and continuing through translation, DC activation, T\-cell phenotype, cytokine secretion and TNBC target\-cell activity\. Before entering that Measurement cycle, we used the completed integration route to refine how such decisions could be recorded and handed to another researcher\. Further details are provided in [Experiments: Combined construction](https://2026.igem.wiki/jlu-fbh/experiments) and [Parts: Combined design](https://2026.igem.wiki/jlu-fbh/parts)\.


## Iteration 2\.11｜Turning the integration route into a traceable CircuForge workflow

### Design

**English\.** Across Cycle 2, epitopes moved through prediction, review, coding and experimental preparation, but their sources, evidence and selection decisions remained scattered across different files\. We therefore aimed to turn this one\-project route into a reusable evidence chain, allowing another researcher to trace why each candidate was retained and continue the design without reconstructing its history\. Feedback from the five\-team software exchange, Associate Professor Qingtian Guan and Professor Xiangyu Meng defined three requirements for CircuForge: separate software recommendations from researcher decisions through a Design Cart, display task states and preserve a reproducible workflow\.


### Build

**English\.** CircuForge V2\.0 reorganised these requirements into a guided browser workflow\. Stage\-specific identifiers and Evidence Cards preserved source information; KEEP, REVIEW and REJECT represented software review states, while researcher confirmation determined whether an entry entered the Design Cart\. Stable Cart IDs, deduplication and retained order supported later assembly\. External resources were connected through adapters, longer tasks displayed visible progress states, and reviewed designs could be exported together with their sequences and evidence records\. In this way, decisions about sequence overlap, module selection and Combined arrangement remained traceable as confirmed researcher choices throughout the workflow\.


### Test

**English\.** Automated tests examined identifiers, review states, Cart behaviour, task progression, external\-response parsing and export readback\. Task\-based user testing then followed the workflow from data import and target or epitope review to junction inspection and export\. Early sessions identified unclear task\-status messages and export guidance\. After these elements were revised, participants completed the workflow more independently and efficiently, supporting the usability and transferability of CircuForge V2\.0\.


> **Figure C2\-09｜CircuForge V2\.0 review, confirmation and export interfaces**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-09a\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-09b\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-09c\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c2\-09d\.avif
>
> **English caption\.** CircuForge V2\.0 interfaces illustrated using a hepatocellular carcinoma proteomics demo project\. **\(A\)** The Design Cart, labelled “Design list”, displays saved targets and epitopes, project identifiers and project\-saving controls\. **\(B\)** The construct interface provides researcher review controls for the inferred mature circRNA boundary and backbone design, alongside a confirmation\-record field\. **\(C\)** The export interface displays construct\-generation status, review guidance and file\-download options\. **\(D\)** The Evidence Card summarises candidate\-target evidence while retaining the requirement for user confirmation\.
>

### Learn

**English\.** CircuForge converted the lessons of Integration into a reusable design workflow: later users could preserve source evidence, review state and researcher decisions without rebuilding the process across separate scripts\. The software retained and transferred the biological decisions made by Dry Lab and Wet Lab\. With Combined and its four comparison preparations already defined experimentally, the engineering story could now enter **M—Measurement** and test their molecular and cellular performance\. Further details are provided in [Software: CircuForge](https://2026.igem.wiki/jlu-fbh/software) and [Integrated Human Practices: software workflow reviews](https://2026.igem.wiki/jlu-fbh/human-practices)\.


## Cycle 2 Summary

**English\.** Integration began with four antigen sources and ended with one defined multi\-antigen design\. Sequence prediction established a traceable epitope shortlist; structural review refined it; Wet Lab converted overlapping sequences into continuous coding designs and connected the resulting materials to a common circRNA and DC–T\-cell route\. First\-round ELISpot retained two modules from every antigen source, while CD8/CD69 and K562 supplied complementary activation and overall effector\-activity evidence\. These decisions produced Combined and four comparison preparations for the next cycle\. Vaccine Classroom and the Virtual Laboratory extended the same ideas of recognition and continuity into Education, and CircuForge turned the completed handoff logic into a reusable Dry Lab workflow\.


**English\.** With Combined and the four comparison preparations established, the next step was to move from sequence selection to experimental measurement\. Under matched preparation and comparison conditions, we would follow the five second\-round preparations from RNA characterisation through translation and immune\-cell responses to their functional effects on TNBC target cells\.


# Cycle 3 — Measurement: Building the molecular and cellular evidence chain

**English\.** TIME enters **M—Measurement**\. Cycle 2 answered **what should be integrated** by establishing Combined and three TROP2 comparison constructs\. Cycle 3 then asked **what evidence the integrated design could produce**\. Four antigen\-encoding circRNA preparations and an equal\-input Blank control were examined in sequence from RNA preparation and persistence to protein translation, dendritic\-cell activation, T\-cell responses, IFN\-γ secretion and target\-cell killing\. Once this molecule\-to\-function chain was established, its value was extended through three further levels: CircuForge turned experimental records into a transferable workflow, Education translated that workflow into procedures learners could follow, and Visual Design transformed the project’s specialised content into a shared visual language\. Measurement therefore progressed from the molecule, to the cell, to the transfer of the knowledge produced\.


## Iteration 3\.1｜Preparing circRNA inputs for the second\-round comparison

### Design

**English\.** The first\-round ELISpot selected eight modules from 13 circRNA groups, leading to the Combined design\. The second round compared Combined with TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 and the empty\-vector Blank\. We established a shared preparation route for these five inputs and selected Combined as the representative preparation for quantitative circularity assessment and junction\-sequence verification before DC electroporation\. Blank retained the same circRNA backbone and adjuvant elements while omitting the epitope\-coding sequence\.


### Build

**English\.** Wet Lab prepared all five circRNA inputs through a shared DNA-to-RNA workflow. PCR and agarose-gel electrophoresis were used to verify the plasmid target regions. The corresponding plasmids were separately linearised and purified as templates for T7 in vitro transcription, followed by DNA-template removal, RNA purification, self-splicing circularisation and RNase R treatment.

For the purified Combined preparation, divergent\- and convergent\-primer RT\-qPCR used the 4 µL working input established in Iteration 2\.5, with three technical wells\. The recorded calculation estimated the circular fraction against the predefined ≥90% release criterion\. Sanger sequencing of a junction\-spanning amplification product then checked the expected head\-to\-tail connection\. Group identifiers were retained throughout preparation and subsequent DC electroporation \(Wesselhoeft et al\., 2018; LGC Biosearch Technologies, n\.d\.\)\.



> **References**
>
> Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. *Nature Communications*\. 2018;9:2629\. [doi:10\.1038/s41467\-018\-05096\-6](https://doi.org/10.1038/s41467-018-05096-6)
>
> LGC Biosearch Technologies \(n\.d\.\) *Ribonuclease R Manual*\. Cat\. RNR07250\. [Official manual](https://biosearchtech.a.bigcontent.io/v1/static/manual_RNR07250_RNase-R)

### Test

**English\.** The gel documented target-region PCR products from the four antigen-encoding plasmids, supporting the plasmid-verification step. At the RNA stage, the purified Combined preparation gave a recorded circular\-to\-linear signal ratio of 145\.7:1 and an estimated circular fraction of 99\.30±0\.17%, exceeding the ≥90% release criterion\. This measurement described the composition after RNase R purification\.

Junction sequencing recovered the expected connection between the precursor’s 3′ and 5′ sequences\. Together, the quantitative readout and junction sequence supported the preparation of circRNA\-rich Combined material for the second\-round comparison\.



> **Figure C3\-01A｜Plasmid verification by PCR｜质粒PCR核验**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-01a\.avif
>
> **English caption\.** Agarose-gel electrophoresis of target-region PCR products used to verify the four antigen-encoding plasmids.
>

**Table C3\-01｜RT\-qPCR assessment of purified Combined**

| Measure                                  | Recorded result |
| ---------------------------------------- | --------------- |
| Working input                            | 4 µL           |
| Technical wells                          | 3               |
| ΔCq: convergent−divergent              | 7.19±0.39      |
| Recorded circular-to-linear signal ratio | 145.7:1         |
| Estimated circular fraction              | 99.30±0.17%    |
| Release criterion                        | ≥90%           |

> **English note\.** Results describe the RNase R\-purified Combined preparation\. ΔCq and estimated circular fraction are reported as mean±SD across three technical wells; the ratio and fraction follow the recorded calculation\.
>
>
> **Figure C3\-01B｜Junction\-sequence verification of Combined circRNA**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-01b\.avif
>
> **English caption\.** Sanger sequencing of the junction\-spanning amplification product identified the expected head\-to\-tail connection in Combined\.
>

### Learn

**English\.** The shared preparation route supplied the five second\-round inputs, while Combined’s quantitative assessment and junction sequence established the molecular evidence for the complete multi\-antigen design\. We next compared Combined circRNA with its corresponding linear precursor over time to examine whether circularisation improved RNA persistence\.


[Further details: Experiments — circRNA preparation and characterisation](https://2026.igem.wiki/jlu-fbh/experiments)

## Iteration 3\.2｜Measuring the persistence of Combined RNA

### Design

**English\.** After confirming the identity of the Combined circRNA preparation, we next asked whether its circular structure provided greater persistence than the corresponding linear precursor—an important reason for selecting circRNA as the project platform\. We therefore established a matched time\-course comparison using equal masses of both RNA forms from the same preparation batch, incubated at 37 °C and sampled at 0, 24, 48 and 72 h\. By aligning their sequence background, starting mass and incubation conditions, the experiment focused on the effect of RNA topology on persistence \(Wesselhoeft et al\., 2018\)\.


> **References**
>
> Wesselhoeft RA, Kowalski PS, Anderson DG\. Engineering circular RNA for potent and stable translation in eukaryotic cells\. *Nature Communications*\. 2018;9:2629\. [doi:10\.1038/s41467\-018\-05096\-6](https://doi.org/10.1038/s41467-018-05096-6)

### Build

**English\.** Wet Lab established a four\-point electrophoretic persistence assay\. Equal\-mass aliquots were incubated in parallel, frozen after collection and later loaded together on the same 1% agarose gel\. Band intensity was normalised within the same image and then to each RNA form's own 0 h lane, producing a relative residual\-signal record\. With one lane representing each time point, relative band retention served as the defined descriptive endpoint\.


### Test

**English\.** The time course showed greater retention of Combined circRNA than its linear precursor\. At 24 h, their relative band intensities were 71\.9% and 5\.9% of their respective 0 h values; at 72 h, they were 39\.5% and 2\.7%\. The electrophoretic and densitometric results therefore supported greater persistence of Combined circRNA under the tested 37 °C in vitro conditions, providing experimental support for the stability advantage sought when selecting the circRNA platform\.


> **Figure C3\-02A｜RNA electrophoresis over time**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-02a\.avif
>
> **English caption\.** Combined circRNA and its linear precursor were compared by electrophoresis after incubation at 37 °C for 0, 24, 48 and 72 h\.
>
>
> **Figure C3\-02B｜Relative RNA band intensity**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-02b\.avif
>
> **English caption\.** Relative band intensities were normalised to each RNA’s own 0 h value\. Lines connect the measured time points\.
>

### Learn

**English\.** The time course provided the first direct comparison of Combined circRNA with its linear counterpart\. The mature Combined RNA is 2013 nt long and contains the complete sequence used in the experiment, including its annotated IRES region\. Its length made direct three\-dimensional prediction impractical, so the next iteration addressed how the real sequence could enter a reproducible structural\-computation route\.


[Further details: Results — RNA persistence](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.3｜Exploring the full\-length structure of Combined RNA with TorusFold

### Design

**English\.** To add a spatial perspective to the molecular measurements, we sought to explore the complete mature Combined RNA sequence\. Its length exceeded the range suitable for direct processing by the selected three\-dimensional prediction tool and available computing resources\. We therefore developed **TorusFold**, a workflow that preserves the original sequence, predicts overlapping fragments locally and uses their shared nucleotides to assemble a full\-length structural hypothesis \(Hofacker, 2003; Shen et al\., 2024\)\.


> **References**
>
> Hofacker IL\. Vienna RNA secondary structure server\. *Nucleic Acids Research*\. 2003;31:3429–3431\. [doi:10\.1093/nar/gkg599](https://doi.org/10.1093/nar/gkg599)
>
> Shen T, Hu Z, Sun S, et al\. Accurate RNA 3D structure prediction using a language model\-based deep learning approach\. *Nature Methods*\. 2024\. [doi:10\.1038/s41592\-024\-02487\-0](https://doi.org/10.1038/s41592-024-02487-0)

### Build

**English\.** We organised TorusFold into four steps: **\(1\)** use predicted base\-pairing information to guide segment boundaries; **\(2\)** divide the 2,013 nt sequence into overlapping fragments with a target length of approximately 200 nt; **\(3\)** retain each fragment’s original coordinates during local three\-dimensional prediction; and **\(4\)** align neighbouring models through their shared nucleotides, using prediction confidence to weight their contribution to the assembly\.


> **Figure C3\-03｜Segmentation and overlap scheme for Combined RNA**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-03\.avif
>
> **English caption\.** The 2,013 nt Combined sequence was divided into ten overlapping fragments\. Hatched regions indicate shared sequence between neighbouring fragments\. The diagram uses 0\-based half\-open coordinates; Table C3\-02 lists the corresponding 1\-based inclusive positions\.
>

### Test

**English\.** The segmentation record contained ten fragments of 195–249 nt whose combined coverage preserved the complete 2,013 nt sequence\. Eight neighbouring pairs shared 30 nt, and the final pair shared 50 nt\. Recording every fragment’s position, length and overlap established the sequence correspondence needed for local prediction and subsequent assembly\.


**Table C3\-02｜Fragment coordinates and overlaps for Combined RNA**

| Fragment | Sequence positions | Length (nt) | Overlap with previous fragment (nt) |
| -------- | ------------------ | ----------- | ----------------------------------- |
| C1       | 1–195             | 195         | —                                  |
| C2       | 166–396           | 231         | 30                                  |
| C3       | 367–588           | 222         | 30                                  |
| C4       | 559–781           | 223         | 30                                  |
| C5       | 752–982           | 231         | 30                                  |
| C6       | 953–1201          | 249         | 30                                  |
| C7       | 1172–1406         | 235         | 30                                  |
| C8       | 1377–1619         | 243         | 30                                  |
| C9       | 1590–1818         | 229         | 30                                  |
| C10      | 1769–2013         | 245         | 50                                  |

> **English note\.** Coordinates are 1\-based and inclusive\. C1 and C10 flank the back\-splice junction and share no residues with each other in this segmentation record\.
>

### Learn

**English\.** The segmentation scheme defined how the full\-length sequence could enter local prediction and assembly\. The next task was to examine the geometry produced during refinement: **\(1\)** whether excessively close backbone contacts decreased and **\(2\)** how fragment terminal distance changed\. We tested these quantities in a 200 nt fragment before presenting the separately retained full\-length model\.


## Iteration 3\.4｜Testing structural refinement in TorusFold

### Design

**English\.** Following the segmentation scheme in Iteration 3\.3, we examined whether TorusFold refinement improved structural geometry\. A 200 nt fragment corresponding to Combined residues 1–200 provided a manageable test case\. We compared backbone close contacts and terminal distance across successive stages, while presenting the existing 2,013 nt model separately as a full\-length structural hypothesis\.


### Build

**English\.** The assembly workflow combined boundary alignment and relaxation with hydrogen\-bond repair and final all\-atom refinement\. For the 200 nt test, we retained the initial reconstruction, PPR\-stage model and final Amber\-stage model from the same run\. Each stage was evaluated using the same definitions of non\-adjacent P\-atom close contacts and fragment terminal P–P distance\. Before\-and\-after views displayed the P atoms extracted from the all\-atom models \(Eastman et al\., 2024\)\.


> **References**
>
> Eastman P, Galvelis R, Peláez RP, et al\. OpenMM 8: molecular dynamics simulation with machine learning potentials\. *Journal of Physical Chemistry B*\. 2024;128:109–116\. [doi:10\.1021/acs\.jpcb\.3c06662](https://doi.org/10.1021/acs.jpcb.3c06662)

### Test

**English\.** In the 200 nt test, non\-adjacent P\-atom close\-contact pairs decreased from 8 in the initial reconstruction to 4 after PPR and 3 after Amber refinement\. The fragment terminal P–P distance decreased from 6\.751 Å to 5\.899 Å and then 5\.673 Å\. These measurements showed fewer excessively close backbone contacts and a shorter terminal separation during refinement of the tested fragment\.


> **Figure C3\-04A｜Structural views before and after fragment refinement**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-04a\.avif
>
> **English caption\.** P\-atom views of the same 200 nt Combined fragment before refinement \(left\) and after final Amber refinement \(right\)\. Both views originate from all\-atom models of the same run\.
>

**Table C3\-03｜Geometric diagnostics during refinement of the 200 nt fragment**

| Stage              | Non-adjacent P-atom close-contact pairs | Fragment terminal P–P distance (Å) |
| ------------------ | --------------------------------------- | ------------------------------------ |
| Raw reconstruction | 8                                       | 6.751                                |
| PPR refinement     | 4                                       | 5.899                                |
| Amber refinement   | 3                                       | 5.673                                |

> **English note\.** Close contacts count P\-atom pairs separated by at least three sequence positions and less than 3 Å in space\. Terminal distance is measured between the first and last P atoms of the 200 nt fragment\.
>

**English\.** Alongside this fragment\-level test, the retained full\-length model represented all 2,013 nt of Combined and contained 42,831 atoms\. It provided a computational view of the complete sequence’s spatial organisation\. The quantitative refinement measurements above refer specifically to the 200 nt fragment\.


> **Figure C3\-04B｜Full\-length structural hypothesis for Combined RNA**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-04b\-new\.avif
>
> **English caption\.** The separately retained full\-length Combined model represents 2,013 nt and contains 42,831 atoms\. It is presented as a sequence\-specific structural hypothesis\.
>

### Learn

**English\.** TorusFold established a segmentation scheme for the experimental Combined sequence, demonstrated geometric refinement in a fragment\-level test and supplied a full\-length structural hypothesis\. Together, these outputs added a computational perspective to the molecular measurements\. We then returned to the prepared circRNA to examine whether it produced an encoded protein and elicited a maturation\-associated response in dendritic cells\.


[Further details: Software — TorusFold outputs](https://2026.igem.wiki/jlu-fbh/software)

## Iteration 3\.5｜Verifying circRNA translation and comparing dendritic\-cell maturation

### Design

**English\.** Iteration 3\.4 produced a refined structural model of Combined\. We then returned to the cellular experiments to examine two connected steps in vaccine function: **\(1\)** translation of the delivered circRNA into protein and **\(2\)** maturation of the receiving dendritic cells, which supports subsequent T\-cell activation\. The five\-group comparison assessed the DC response to Combined alongside its TROP2 components and the empty\-vector background\.


### Build

**English\.** Wet Lab established protein\-expression and DC\-maturation measurements\. Anti\-FLAG Western blotting compared circRNA\-electroporated DCs with the negative control, using β\-actin as the loading reference \(Towbin et al\., 1979\)\.

For the five\-group maturation comparison, Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 and Combined each delivered 5 µg of circRNA to 1×10⁶ DCs in 100 µL using programme U\-002\. Blank received equal\-input empty\-vector circRNA\. Flow cytometry measured DCs expressing both CD80 and CD86, two co\-stimulatory molecules associated with their ability to activate T cells \(Banchereau and Steinman, 1998\)\.



> **References**
>
> Banchereau J, Steinman RM\. Dendritic cells and the control of immunity\. *Nature*\. 1998;392:245–252\. [doi:10\.1038/32588](https://doi.org/10.1038/32588)
>
> Towbin H, Staehelin T, Gordon J\. Electrophoretic transfer of proteins from polyacrylamide gels to nitrocellulose sheets\. *Proceedings of the National Academy of Sciences USA*\. 1979;76:4350–4354\. [doi:10\.1073/pnas\.76\.9\.4350](https://doi.org/10.1073/pnas.76.9.4350)

### Test

**English\.** Anti\-FLAG blotting detected a distinct band near 50 kDa in the circRNA\-electroporated lane, with little corresponding signal in the negative control and comparable β\-actin signals\. This supported translation of the circRNA\-encoded protein in DCs\.

The maturation comparison showed a stronger response with Combined\. CD80⁺CD86⁺ DCs increased from 10\.33±0\.55% in Blank to 15\.57±0\.35% and 15\.80±0\.36% in the two individual TROP2 groups, 17\.50±0\.30% in TROP2 CTL1\+2 and 22\.37±0\.31% in Combined\. Combined reached 2\.16 times the Blank level and exceeded both Blank and the dual\-module construct after Holm correction\. These results connected protein expression with a measurable DC response and supported following the immune response into T cells\.



> **Figure C3\-05A｜Anti\-FLAG Western blot**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-05a\.avif
>
> **English caption\.** Anti\-FLAG Western blot with β\-actin as the loading reference\. The original circRNA and Blank lane labels are retained\.
>
>
> **Figure C3\-05B｜Representative DC CD80/CD86 flow cytometry**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-05b\.avif
>
> **English caption\.** Representative flow\-cytometry plots show CD80⁺CD86⁺ DCs across the five circRNA groups\.
>
>
> **Figure C3\-05C｜Quantification of DC maturation**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-05c\.avif
>
> **English caption\.** CD80⁺CD86⁺ DC frequencies are shown as mean ± SD; \*\*\* denotes P \< 0\.001 for Blank versus Combined\.
>

### Learn

**English\.** The protein\-expression measurement supported circRNA translation in DCs, while the five\-group comparison identified Combined as the strongest DC\-maturation condition\. We therefore retained the same comparison groups and next examined T\-cell activation, co\-stimulation and effector\-memory\-associated phenotypes after DC–T\-cell co\-culture\.


[Further details: Results — translation and DC maturation](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.6｜Following the response across complementary T\-cell phenotypes

### Design

**English\.** After examining whether circRNA\-loaded DCs entered a maturation\-associated state, we next asked how the T cells receiving their signals responded\. Three complementary phenotype axes were selected to describe different parts of this response: **\(1\) CD8⁺CD69⁺** captured early T\-cell activation, **\(2\) CD8⁺CD28⁺** indicated retention of the co\-stimulatory receptor associated with continued responsiveness and **\(3\) CD45RO⁺CCR7⁻** identified the effector\-memory\-associated population used in our analysis\. Together, these measurements followed the response from initial activation to continued responsiveness and memory\-associated differentiation, while each axis was analysed separately to preserve its distinct biological meaning \(Cibrián and Sánchez\-Madrid, 2017; Lenschow et al\., 1996; Sallusto et al\., 1999\)\.


> **References**
>
> Cibrián D, Sánchez\-Madrid F\. CD69: from activation marker to metabolic gatekeeper\. *European Journal of Immunology*\. 2017;47:946–953\. [doi:10\.1002/eji\.201646837](https://doi.org/10.1002/eji.201646837)
>
> Lenschow DJ, Walunas TL, Bluestone JA\. CD28/B7 system of T cell costimulation\. *Annual Review of Immunology*\. 1996;14:233–258\. [doi:10\.1146/annurev\.immunol\.14\.1\.233](https://doi.org/10.1146/annurev.immunol.14.1.233)
>
> Sallusto F, Lenig D, Förster R, Lipp M, Lanzavecchia A\. Two subsets of memory T lymphocytes with distinct homing potentials and effector functions\. *Nature*\. 1999;401:708–712\. [doi:10\.1038/44385](https://doi.org/10.1038/44385)

### Build

**English\.** Wet Lab established three independent flow\-cytometry panels for T cells generated through the common DC–T\-cell route\. Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 and Combined entered the same viability, staining and gating framework for CD8/CD69, CD8/CD28 and CD8/CD45RO/CCR7\. Each group was represented by three independently electroporated and co\-cultured wells, while unstained, single\-stain and isotype controls supported panel interpretation\.


### Test

**English\.** Across the recorded CD8/CD69, CD8/CD28 and CD45RO/CCR7 comparisons, Combined remained at the leading end of the five\-group response and showed increases relative to Blank\. The three panels approached the T\-cell response from different phenotypic directions and converged on Combined as the preparation to carry into direct cytokine\-secretion measurement\.


> **Figure C3\-06A｜T\-cell activation\-associated phenotype**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-06a\.avif
>
> **English caption\.** Representative flow\-cytometry plots \(top\) and quantitative comparison \(bottom\) of CD8⁺CD69⁺ cells across the five circRNA groups, assessing the activation\-associated T\-cell response\.
>
>
> **Figure C3\-06B｜Co\-stimulation\-associated T\-cell phenotype**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-06b\.avif
>
> **English caption\.** Representative flow\-cytometry plots \(top\) and quantitative comparison \(bottom\) of CD8⁺CD28⁺ cells across the five circRNA groups, assessing the co\-stimulation\-associated phenotype\.
>
>
> **Figure C3\-06C｜Effector\-memory\-associated T\-cell phenotype**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-06c\.avif
>
> **English caption\.** Representative flow\-cytometry plots \(top\) and quantitative comparison \(bottom\) of the CD45RO⁺CCR7⁻ population across the five circRNA groups, assessing the effector\-memory\-associated phenotype\.
>

### Learn

**English\.** The phenotype panels supported Combined across three complementary views of the T\-cell response\. The next iteration retained the same five groups and used IFN\-γ ELISpot to compare their cytokine\-secretion\-associated responses under one second\-round assay\.


[Further details: Results — T\-cell phenotypes](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.7｜Comparing the five second\-round preparations by ELISpot

### Design

**English\.** Iteration 2\.6 used the first\-round ELISpot screen to retain two responsive modules from each antigen source, with TROP2 CTL1 and TROP2 CTL2 forming the leading same\-antigen pair\. The second\-round ELISpot therefore compared five circRNA preparations within one assay: Blank represented the vector background, TROP2 CTL1 and CTL2 represented the individual modules, TROP2 CTL1\+2 tested their combined response and Combined represented the complete four\-antigen design\. This arrangement allowed IFN\-γ\-associated responses to be compared across progressively integrated designs \(Dakewe Biotech, n\.d\.\)\.


> **References**
>
> Dakewe Biotech \(n\.d\.\) *Human IFN\-γ Precoated ELISPOT Kit \(strips\): instruction manual*\. Cat\. 2110005, Rev\. C/2\. [Instruction manual](https://files.dakewe.cn/crm/instruction/dy/2110005.pdf)

### Build

**English\.** Wet Lab established a five\-group second\-round IFN\-γ ELISpot\. DCs carrying Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 or Combined were co\-cultured with autologous T cells at a DC:T ratio of 1:20, with 1×10⁵ cells placed in each well for 20 h\. Plate handling, washing, colour development and spot counting followed one procedure across all five conditions\.


### Test

**English\.** The recorded spot counts were 32 for Blank, 198 for TROP2 CTL1, 227 for TROP2 CTL2, 298 for TROP2 CTL1\+2 and 367 for Combined\. The response increased from the vector background through the individual TROP2 modules and their paired design, with Combined producing the highest IFN\-γ\-associated readout\. This ordering supported the value of integrating the selected modules and retained Combined as the leading design for subsequent functional evaluation\.


> **Figure C3\-07｜Second\-round IFN\-γ ELISpot**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-07\.avif
>
> **English caption\.** IFN\-γ ELISpot comparison across the five second\-round circRNA groups\. Combined produced the highest recorded spot count, followed by the paired TROP2 CTL1\+2 design\.
>

### Learn

**English\.** ELISpot added a direct IFN\-γ\-associated readout and placed Combined at the top of this recorded five\-group run\. This result supported carrying all five effector preparations into a functional comparison against the HLA\-A\*02:01\-positive, TROP2\-positive TNBC cell line MDA\-MB\-231\.


[Further details: Results — second\-round ELISpot](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.8｜Testing cytotoxic activity in a TNBC target\-cell context

### Design

**English\.** We extended the cellular evidence chain from IFN\-γ secretion to target\-cell function\. Blank\-, TROP2 CTL1\-, TROP2 CTL2\-, TROP2 CTL1\+2\- and Combined\-derived effector preparations were compared against MDA\-MB\-231 at increasing effector\-to\-target ratios\. Calcein\-AM release retained spontaneous\- and maximum\-release controls, allowing every condition to be normalised to its own target\-cell background \(Lichtenfels et al\., 1994; Neri et al\., 2001\)\.


> **References**
>
> Lichtenfels R, Biddison WE, Schulz H, Vogt AB, Martin R\. CARE\-LASS \(calcein\-release\-assay\), an improved fluorescence\-based test system to measure cytotoxic T lymphocyte activity\. *Journal of Immunological Methods*\. 1994;172:227–239\. [PMID: 7518485](https://pubmed.ncbi.nlm.nih.gov/7518485/)
>
> Neri S, Mariani E, Meneghetti A, Cattini L, Facchini A\. Calcein\-acetoxymethyl cytotoxicity assay: standardization of a method allowing additional analyses on recovered effector cells and supernatants\. *Clinical and Diagnostic Laboratory Immunology*\. 2001;8:1131–1135\. [PMID: 11687452](https://pubmed.ncbi.nlm.nih.gov/11687452/)

### Build

**English\.** Wet Lab established a three\-ratio target\-cell assay\. Calcein\-AM\-labelled MDA\-MB\-231 cells were combined with the five effector preparations at 20:1, 40:1 and 80:1 and co\-incubated for 4–6 h\. Every condition included three replicate wells together with spontaneous\-, maximum\- and medium\-background controls\. Target\-cell input and release calculations were kept consistent, leaving the priming circRNA and effector\-to\-target ratio as the comparison variables\.


### Test

**English\.** Cytotoxicity increased with the effector\-to\-target ratio, and Combined produced the highest recorded killing across the three tested ratios\. This result extended the evidence chain from translation, activation and IFN\-γ secretion to direct function against an HLA\- and target\-matched TNBC cell line\. MDA\-MB\-231 then served as the tumour reference for a broader target\-cell comparison\.


> **Figure C3\-08｜MDA\-MB\-231 killing across three effector\-to\-target ratios**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-08\.avif
>
> **English caption\.** Killing of MDA\-MB\-231 TNBC cells by T cells stimulated through DCs receiving Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1\+2 or Combined circRNA, at effector\-to\-target ratios of 20:1, 40:1 and 80:1\. Killing increased with the effector\-to\-target ratio, with Combined showing the highest recorded activity at all three ratios\.
>

### Learn

**English\.** Combined led the five\-group comparison in the MDA\-MB\-231 context\. An iHP safety review then refined the next question from efficacy ranking to target context: how would the same Combined\-derived effectors behave against HLA\-A\*02:01\-positive non\-tumour cell lines? We fixed the effector preparation and varied the target cells in the next assay\.


[Further details: Results — MDA\-MB\-231 cytotoxicity](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.9｜Comparing killing of tumour and non\-tumour target cells

### Design

**English\.** Iteration 3\.8 established Combined\-associated killing of TNBC target cells\. We next examined whether these effectors also damaged non\-tumour cells\. Using the same Combined\-primed T\-cell preparation, we compared MDA\-MB\-231 with four HLA\-A\*02:01\-positive non\-tumour cell lines from different tissues\. This matched\-HLA comparison assessed tumour\-target preference alongside potential effects on non\-tumour cells\.


### Build

**English\.** Wet Lab used the Calcein\-AM release assay at effector\-to\-target ratios of 80:1 and 100:1\. Targets included MDA\-MB\-231 and four non\-tumour cell lines: HCAEC from coronary artery endothelium, LX\-2 from hepatic stellate cells, BEAS\-2B from bronchial epithelium and MCF12A from mammary epithelium\. Each target had its own spontaneous\- and maximum\-release controls\. Experimental and control conditions each contained three technical replicate wells on the same plate\.


### Test

**English\.** At 80:1, mean killing of the four non\-tumour cell lines ranged from 0\.78% to 2\.77%, compared with 59\.24±2\.10% for MDA\-MB\-231\. At 100:1, the corresponding range was 1\.31–3\.47%, while tumour\-cell killing reached 62\.07±3\.58%\. MCF12A, which shared a mammary epithelial origin with the tumour target, showed only 1\.86% and 2\.26% killing at the two ratios\. The consistent separation supported preferential activity against the tumour target while retaining low non\-tumour\-cell killing within the tested panel\.


> **Figure C3\-09｜Tumour and non\-tumour target\-cell killing**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-09\.avif
>
> **English caption\.** Combined\-primed T cells showed substantially higher killing of MDA\-MB\-231 than of four HLA\-A\*02:01\-positive non\-tumour cell lines at both tested ratios\. Values are mean±SD across three technical replicate wells per condition\.
>

### Learn

**English\.** The comparison supported tumour\-target preference within the tested cell panel\. We then extended the assessment from effector\-cell killing to the delivery material itself, using a separate CCK\-8 assay to measure how increasing amounts of empty LNP affected DC viability\.


[Further details: Experiments — target\-cell comparison](https://2026.igem.wiki/jlu-fbh/experiments)

## Iteration 3\.10｜Assessing the effect of empty LNP on dendritic\-cell viability

### Design

**English\.** After examining non\-tumour\-cell killing in Iteration 3\.9, we turned to the delivery carrier itself\. To isolate its effect on DC viability, we tested empty LNP without circRNA cargo\. A five\-level input series and a common 24 h CCK\-8 readout assessed how increasing carrier amounts affected cell viability \(Dojindo Laboratories, 2026\)\.


> **References**
>
> Dojindo Laboratories\. *Cell Counting Kit\-8 \(CCK\-8\) Product Manual*, Code CK04\. Revised April 14, 2026\. [Official manual](https://www.dojindo.com/manual/CK04/)

### Build

**English\.** Wet Lab seeded 1×10⁴ immature monocyte\-derived DCs per well and added empty LNP at 0, 50, 100, 200 or 400 ng per well\. Each level contained four replicate wells\. After 24 h, CCK\-8 absorbance was corrected using cell\-free reagent wells and normalised to the 0 ng control, producing a comparable relative\-viability series\.


### Test

**English\.** DC viability remained near the untreated level at 50–200 ng per well, with relative values of 101\.7±3\.7%, 106\.3±4\.7% and 103\.0±1\.6%; none differed significantly from the control\. At 400 ng, viability fell to 57\.2±5\.8% \(Holm\-corrected P=7\.6×10⁻⁵\)\. The series identified a clear change between 200 and 400 ng, supporting carrier inputs up to 200 ng per well as compatible with maintained DC viability under the tested conditions\.


> **Figure C3\-10｜DC viability across empty\-LNP input levels**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-10\.avif
>
> **English caption\.** Immature monocyte\-derived DCs received empty LNP without circRNA cargo for 24 h\. Relative viability remained near baseline at 50–200 ng per well and decreased at 400 ng\. Values are mean±SD across four replicate wells, normalised to the 0 ng control\.
>

### Learn

**English\.** The assay added a carrier\-specific viability measurement to the molecular and cellular evidence assembled for Combined\. As these records accumulated, their transfer required more than a list of results: another user needed to identify the tested material, follow the comparison and recover the reasoning behind each decision\. The next iteration therefore tested how CircuForge preserved and transferred this information\.


[Further details: Results — empty\-LNP viability](https://2026.igem.wiki/jlu-fbh/results)

## Iteration 3\.11｜Testing CircuForge as a transferable design workflow

### Design

**English\.** Iteration 2\.11 established CircuForge V2\.0 as a guided workflow that retained candidate identity, review decisions and supporting evidence across modules\. As the project accumulated source data, sequence records and exported designs, we used this more complete evidence chain to test whether the workflow remained understandable after handoff to another user\. Software\-architecture consultation focused the evaluation on three requirements: candidate identity should persist between modules, long\-running external tasks should display their progress and returned evidence should pass through an explicit researcher\-confirmation step\.


### Build

**English\.** Building on CircuForge V2\.0, we refined the transfer workflow around stable identifiers, Evidence Cards, the Design Cart, visible task states, run manifests and reloadable Project Bundles\. External services remained connected through adapters, while PENDING, RUNNING, COMPLETED and FAILED made task progress visible\. KEEP, REVIEW and REJECT recorded the review state, and a separate confirmation action determined whether an entry entered the Design Cart\. Together, these functions kept researcher judgement and supporting evidence connected throughout the handoff\.


### Test

**English\.** Automated tests covered identifier stability, review\-state assignment, Cart deduplication, task creation and status changes, and export readback\. Task walkthroughs highlighted the BLASTP transition as a priority for workflow refinement\. Users needed a clearer connection between task submission, returned alignment evidence and researcher confirmation\. We translated this finding into a three\-stage interface requirement—submit, monitor and review—with emphasis on visible task progress, accessible evidence and an explicit confirmation step\.


### Learn

**English\.** The revision established three practical rules for transferable workflows: orientation should precede unfamiliar actions, intermediate states should remain visible and final acceptance should stay with the user\. We carried these interaction rules into another project resource that also needed to work after handoff—the Virtual Laboratory\.


[Further details: Software — CircuForge](https://2026.igem.wiki/jlu-fbh/software)

## Iteration 3\.12｜Moving orientation before the first virtual operation

### Design

**English\.** Iteration 1\.3 established layered education as a principle for adapting scientific content to learners with different ages and prior knowledge\. Iteration 2\.8 then showed at Hailun No\. 1 High School that the revised Virtual Laboratory could continue to be used by a teacher after handoff\. However, children in some economically disadvantaged and resource\-limited communities still have few opportunities to enter a laboratory because their schools lack specialised instruments, consumables and trained experimental support\. We hoped that the Virtual Laboratory could help narrow this gap, so that a child’s opportunity to experience experimental science would not be determined solely by geography or school resources\.

With this purpose, we brought the programme to Pilu Town and organised a Gram\-staining activity for second\- and fourth\-grade pupils\. Younger learners mainly followed colour and touch cues, while older pupils more often paused to ask about the experimental purpose and materials\. Together with the handoff rules established in Iteration 3\.11, these observations defined the next design target: provide essential orientation before the first virtual action and keep supporting information accessible throughout the procedure\.



### Build

**English\.** Education and the development team reorganised the learning entry into four concise orientation cards: Theory introduced the purpose and principle of Gram staining, Safety highlighted operational precautions, Instruments identified the required equipment and Reagents explained the materials used in the procedure\. All four cards appeared before the first operation and remained accessible from the procedure screen, providing different levels of support within one continuous activity route\.


### Test

**English\.** During first use in Pilu Town, Sichuan Province, China, second\-grade learners tended to follow colour and touch cues, while fourth\-grade learners more often paused to ask about the purpose, instruments and reagents involved in Gram staining\. These behaviours defined two requirements for the revised interface: establish the experimental context before action and keep supporting information accessible during operation\. A complete walkthrough confirmed that Safety, Theory, Instruments and Reagents all appeared before the first operation and could be reopened from the procedure screen\.


> **Figure C3\-11｜Gram\-staining learning activity in Pilu Town**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-11a\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-11b\.avif
>
> **English caption\.** During the Gram\-staining learning activity in Pilu Town, team members used illustrated teaching materials to introduce crystal violet and iodine, explaining their roles in the staining procedure to primary\-school learners\.
>

### Learn

**English\.** The Pilu Town observation and interface walkthrough showed that first\-time learners benefited from receiving the experimental purpose, safety information, instruments and reagents before beginning an unfamiliar virtual procedure, with the same information remaining available during operation\. We therefore retained the four\-card entry as the standard orientation structure for the Virtual Laboratory\. This decision also extended layered education from a single interface to a complete teaching route: the next iteration would connect virtual orientation, physical experimentation, result interpretation and molecular design for high\-school learners in Synbio Classroom\.


[Further details: Education — Virtual Laboratory and the Pilu Town activity](https://2026.igem.wiki/jlu-fbh/education)

## Iteration 3\.13｜Connecting orientation, physical experiments and molecular design

### Design

**English\.** Iteration 3\.12 established how orientation could support learners entering a single unfamiliar virtual procedure\. For students about to enter Grade 11, the next educational need was to connect procedures that they had previously encountered as separate concepts\. Many already recognised terms such as DNA, PCR and plasmids, but had limited opportunities to follow how preparation, operation, verification, interpretation and design form one research process\. We therefore designed Synbio Classroom for 16 rising Grade 11 students as a connected learning route, extending layered education from interface guidance to research\-process understanding\.


### Build

**English\.** Education, Wet Lab members and instructors built a course containing laboratory safety, pipetting, DNA extraction, PCR, gel electrophoresis, a process game and plasmid\-component design\. The activity order followed the movement of biological information: learners first prepared and handled material, then interpreted experimental outputs and finally used functional elements to assemble a design\. Virtual resources supplied procedural orientation and review where they matched the course sequence\.


### Test

**English\.** Activity records documented 16 learners participating in physical operations, the process game and plasmid\-component design\. Their clearest qualitative feedback emerged after the design activity, when they continued asking how a plasmid design would proceed through amplification, digestion, ligation, transformation and verification\. The originally planned Virtual Laboratory component covered one PCR\- and electrophoresis\-related exercise\. In response to these questions, the teaching team expanded it during the session into a guided walkthrough of the platform’s existing nine\-experiment route\. The change from one virtual exercise to a nine\-experiment walkthrough provided a measurable revision of the teaching scope, while the learners’ questions identified the need for stronger continuity between design and verification\.


> **Figure C3\-12｜Synbio Classroom practical learning and discussion**
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-12a\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-12b\.avif
>
> https://static\.igem\.wiki/teams/6056/wiki/files/pages/project/engineering/engineering\-c3\-12c\.avif
>
> **English caption\.** Photographs from Synbio Classroom document guided pipetting practice, a classroom discussion of gel electrophoresis results, and a group photograph of learners and JLU\-FBH team members\.
>

### Learn

**English\.** The layered Virtual Laboratory route produced three progressive outcomes: **\(1\)** at Hailun No\. 1 High School, it became a resource that a teacher could continue using independently; **\(2\)** in Pilu Town, it gained a four\-module orientation structure adapted to younger learners; and **\(3\)** in Synbio Classroom, it connected virtual preparation, physical experiments, result interpretation and molecular design for 16 high\-school learners\. These outcomes showed that the same scientific workflow could retain its core while changing its entry point and depth for different audiences\. As Wet Lab, Education, software and communication roles increasingly appeared together in these materials, a new visual requirement emerged: the shared project character needed to preserve one identity while making each contribution recognisable\.


[Further details: Education — Synbio Classroom](https://2026.igem.wiki/jlu-fbh/education)

## Iteration 3\.14｜Iterating the sheep character family through exchange feedback

### Design

**English\.** Iteration 1\.3 established CirCure’s first sheep\-based visual identity, which later appeared in presentation materials, keychains and fridge magnets at China iGEM exchanges\. Participants recognised the shared character and suggested that it could also represent the different work behind the project, including Dry Lab, Wet Lab and Engineering\. We therefore asked how the original sheep could evolve into distinct project roles while remaining recognisably part of CirCure\.
