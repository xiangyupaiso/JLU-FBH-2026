import type { WikiPageContent } from "../components/wiki/wikiPageTypes";
import { descriptionFigures } from "./descriptionAssets";
import {
  computationalToolsData,
  educationData,
  futureData,
  introductionData,
  oncologyImpactData,
  solutionData,
} from "./descriptionData";

export const descriptionPage: WikiPageContent = {
  route: "/description",
  category: "project",
  chapter: "Project / 01 of 04",
  eyebrow: "Description · The Living Ring",
  title: "Description",
  lede: "A multi-target circular RNA strategy for triple-negative breast cancer.",
  boundary:
    "This page describes the project rationale, molecular architecture, computational evaluation, in vitro verification, and preclinical in vivo outcomes of CirCure. It establishes evidence boundaries and does not claim completed clinical translation.",
  visual: "living-ring",
  visualLabel: "Multi-antigen circular RNA platform architecture",
  visualSteps: [
    "antigen selection",
    "circrna design",
    "molecular qc",
    "invitro readout",
    "invivo efficacy",
    "clinical endpoints",
  ],
  facts: [
    {
      label: "Clinical Challenge",
      value: "TNBC lacks conventional targets and exhibits high clonal heterogeneity.",
    },
    {
      label: "Platform Format",
      value: "Covalently closed circRNA carrying multi-epitope cassette.",
    },
    {
      label: "Validation Chain",
      value: "From >90% purity & 3-day expression to ~80% killing & in vivo efficacy.",
    },
    {
      label: "Evidence Standard",
      value: "Proof of biological mechanism before claims of clinical survival.",
    },
  ],
  sections: [
    {
      id: "introduction",
      index: "01",
      kicker: "01 / Clinical Context",
      navLabel: "Introduction",
      title: introductionData.title,
      summary: introductionData.summary,
      blocks: [
        {
          type: "prose",
          paragraphs: introductionData.paragraphs.slice(0, 2),
        },
        {
          type: "split",
          id: "intro-split",
          prose: [
            {
              type: "prose",
              paragraphs: introductionData.paragraphs.slice(2, 4),
            },
          ],
          aside: {
            type: "mini-visual",
            label: "CLINICAL CONTEXT",
            title: "TNBC Challenges",
            tone: "navy",
            items: [
              "15–20% of all breast cancer cases",
              "Lacks ER, PR, and HER2 overexpression",
              "High risk of recurrence and distant metastasis",
              "Residual micrometastasis after surgery",
            ],
          },
        },
        {
          type: "figure",
          ...descriptionFigures.fig1,
        },
        {
          type: "prose",
          paragraphs: [introductionData.vaccineRationaleIntro],
        },
        {
          type: "table",
          caption: "Table 1 | Comparison of therapeutic vaccine modalities",
          headers: [
            "Modality",
            "Structural Topology",
            "Production & Delivery",
            "Durability & Immunostimulation",
          ],
          rows: [
            [
              "circRNA (CirCure)",
              "Covalently closed loop; exonuclease-resistant",
              "Cytoplasmic translation; no nuclear entry required",
              "Sustained expression (days); intrinsic adjuvant effect",
            ],
            [
              "Linear mRNA",
              "5′ cap + 3′ poly(A) linear chain",
              "Exonuclease-sensitive; requires strict cold chain",
              "Transient expression; rapid in vivo degradation",
            ],
            [
              "DNA Vaccine",
              "Plasmid double-stranded DNA",
              "Requires nuclear delivery & transcription",
              "Risk of genomic integration; delayed kinetics",
            ],
            [
              "Protein / Peptide",
              "Synthesized antigen polypeptide",
              "Requires complex ex vivo protein purification",
              "Exogenous protein delivery; short half-life",
            ],
          ],
        },
        {
          type: "prose",
          paragraphs: [
            introductionData.vaccineFormatComparison,
            introductionData.projectInception,
          ],
        },
      ],
    },
    {
      id: "project-solution",
      index: "02",
      kicker: "02 / Platform Architecture",
      navLabel: "Project Solution",
      title: solutionData.title,
      summary: solutionData.summary,
      blocks: [
        {
          type: "prose",
          paragraphs: solutionData.leadParagraphs,
        },
        {
          type: "feature",
          key: "mechanism-route-chain",
        },
        {
          type: "figure",
          ...descriptionFigures.fig2,
        },
        {
          type: "subheading",
          id: "antigen-module",
          index: "2.1",
          kicker: solutionData.antigenModule.kicker,
          title: solutionData.antigenModule.title,
        },
        {
          type: "prose",
          paragraphs: solutionData.antigenModule.paragraphs,
        },
        {
          type: "feature",
          key: "antigen-candidate-cards",
        },
        {
          type: "subheading",
          id: "circrna-design-module",
          index: "2.2",
          kicker: solutionData.circRnaDesignModule.kicker,
          title: solutionData.circRnaDesignModule.title,
        },
        {
          type: "prose",
          paragraphs: solutionData.circRnaDesignModule.paragraphs,
        },
        {
          type: "figure",
          ...descriptionFigures.fig3,
        },
        {
          type: "subheading",
          id: "production-qc-module",
          index: "2.3",
          kicker: solutionData.productionQcModule.kicker,
          title: solutionData.productionQcModule.title,
        },
        {
          type: "split",
          id: "qc-split",
          prose: [
            {
              type: "prose",
              paragraphs: solutionData.productionQcModule.paragraphs,
            },
          ],
          aside: {
            type: "mini-visual",
            label: "QUALITY CONTROL",
            title: "Molecular Characterization",
            tone: "care",
            items: [
              ">90% circularization rate & purity",
              "RNase R exonuclease digestion verification",
              "Back-splice junction (BSJ) sequencing",
              "Dual-primer RT-qPCR junction confirmation",
            ],
          },
        },
        {
          type: "subheading",
          id: "delivery-immune-module",
          index: "2.4",
          kicker: solutionData.deliveryInVitroModule.kicker,
          title: solutionData.deliveryInVitroModule.title,
        },
        {
          type: "prose",
          paragraphs: solutionData.deliveryInVitroModule.paragraphs,
        },
        {
          type: "callout",
          tone: "navy",
          label: "Functional Readout",
          body: "CirCure maintained sustained in vitro antigen expression lasting ~3 days, verified dendritic cell activation (CD80/CD86 upregulation) without cytotoxicity, and mediated up to approximately 80% TNBC cell killing via calcein-release cytotoxicity assays.",
        },
        {
          type: "subheading",
          id: "integrated-platform-outlook",
          index: "2.5",
          kicker: solutionData.designOutlook.kicker,
          title: solutionData.designOutlook.title,
        },
        {
          type: "prose",
          paragraphs: solutionData.designOutlook.paragraphs,
        },
        {
          type: "subheading",
          id: "invivo-validation-module",
          index: "2.6",
          kicker: solutionData.inVivoValidationModule.kicker,
          title: solutionData.inVivoValidationModule.title,
        },
        {
          type: "prose",
          paragraphs: solutionData.inVivoValidationModule.paragraphs,
        },
        {
          type: "figure",
          ...descriptionFigures.fig4,
        },
      ],
    },
    {
      id: "computational-tools",
      index: "03",
      kicker: "03 / In Silico Modeling",
      navLabel: "Computational Tools",
      title: computationalToolsData.title,
      summary: computationalToolsData.summary,
      blocks: [
        {
          type: "subheading",
          id: "beyond-structure-prediction",
          index: "3.1",
          kicker: computationalToolsData.beyondStructurePrediction.kicker,
          title: computationalToolsData.beyondStructurePrediction.title,
        },
        {
          type: "prose",
          paragraphs:
            computationalToolsData.beyondStructurePrediction.paragraphs,
        },
        {
          type: "callout",
          tone: "neutral",
          label: "In Silico Workflow",
          body: "circRNA sequence → circular structure → structural stability → innate immune sensing (RIG-I, TLR7/8, PKR)",
        },
        {
          type: "subheading",
          id: "modeling-before-animals",
          index: "3.2",
          kicker: computationalToolsData.modelingBeforeAnimals.kicker,
          title: computationalToolsData.modelingBeforeAnimals.title,
        },
        {
          type: "prose",
          paragraphs: computationalToolsData.modelingBeforeAnimals.paragraphs,
        },
        {
          type: "figure",
          ...descriptionFigures.fig5,
        },
      ],
    },
    {
      id: "oncology-impact-access",
      index: "04",
      kicker: "04 / Clinical Translation",
      navLabel: "Impact & Access",
      title: oncologyImpactData.title,
      summary: oncologyImpactData.summary,
      blocks: [
        {
          type: "prose",
          paragraphs: oncologyImpactData.paragraphs.slice(0, 2),
        },
        {
          type: "callout",
          tone: "coral",
          label: "Evidence Boundary: Proof, Not Premature Promise",
          body: "Boosting survival rate cannot be claimed directly from an in vitro vaccine study. CirCure establishes a measurable sequence of endpoints: circRNA quality → antigen expression and persistence → immune activation → TNBC cell killing → tumor control → recurrence and metastasis → survival.",
        },
        {
          type: "figure",
          ...descriptionFigures.fig6,
        },
        {
          type: "prose",
          paragraphs: oncologyImpactData.paragraphs.slice(2),
        },
        {
          type: "table",
          caption:
            "Table 2 | 5-Dimension evaluation for equitable oncology care",
          headers: [
            "Dimension",
            "Key Evaluation Focus",
            "CirCure Strategy & Implementation",
          ],
          rows: [
            [
              "Manufacturability",
              "Can circRNA production be performed reproducibly at scale?",
              "Self-splicing intron-mediated synthesis with standard enzymatic purification workflow",
            ],
            [
              "Storage Stability",
              "Can product quality be maintained under practical storage conditions?",
              "Lyophilization protocols and thermal stability optimization to minimize ultra-cold dependence",
            ],
            [
              "Delivery Requirements",
              "Is the delivery method clinically feasible with low procedural burden?",
              "Lipid nanoparticles (LNPs) tailored for subcutaneous lymphatic drainage and uptake",
            ],
            [
              "Companion Biomarkers",
              "How are patients stratified for multi-epitope match?",
              "Antigen profiling for Trop-2, LIV-1, Nectin-4, and B7-H4 expression prior to regimen",
            ],
            [
              "Cost & Scalability",
              "Are manufacturing costs compatible with broader patient access?",
              "Cell-free enzymatic circularization avoiding expensive ex vivo cell-culture cycles",
            ],
          ],
        },
      ],
    },
    {
      id: "education-outreach",
      index: "05",
      kicker: "05 / Science Communication",
      navLabel: "Education",
      title: educationData.title,
      summary: educationData.summary,
      blocks: [
        {
          type: "prose",
          paragraphs: educationData.paragraphs,
        },
        {
          type: "figure",
          ...descriptionFigures.fig7,
        },
      ],
    },
    {
      id: "future-directions",
      index: "06",
      kicker: "06 / Horizon",
      navLabel: "In The Future",
      title: futureData.title,
      summary: futureData.summary,
      blocks: [
        {
          type: "prose",
          paragraphs: futureData.paragraphs.slice(0, 2),
        },
        {
          type: "epigraph",
          quote: futureData.paragraphs[2],
          translationZh:
            "对我们而言，CirCure 不是终点，而是探索合成生物学如何构建更精准、更具适应性肿瘤疗法的起点。",
          attribution: "CirCure Team",
          attributionRole: "Project Manifesto",
        },
      ],
    },
    {
      id: "references",
      index: "07",
      kicker: "07 / Evidence Base",
      navLabel: "References",
      title: "References",
      summary:
        "24 peer-reviewed academic publications supporting the biological rationale, circRNA engineering principles, and clinical context of CirCure.",
      blocks: [
        {
          type: "feature",
          key: "description-references",
        },
      ],
    },
  ],
  links: [
    { path: "/engineering", label: "Engineering Success" },
    { path: "/results", label: "Results & Discussion" },
    { path: "/contribution", label: "Team Contribution" },
  ],
  next: {
    path: "/engineering",
    label: "Engineering Success",
    title: "How the design cycle refined each module into reproducible biological hardware.",
  },
};
