/**
 * Structured content for the Sustainability page (Engagement route).
 *
 * Source: 文案集/engagement/sustainability/6.3 Sustainability wiki定稿.md
 * Scope: Overview → SDG 3 → Stakeholder Sustainability Tracker.
 * Pure data layer — zero React/JSX elements. Copy is verbatim from the source;
 * `**bold**` markers are rendered by the shared inline formatter.
 *
 * Every SDG chapter follows the same SCALE skeleton (`SdgChapter`), so SDG 9 /
 * 12 / 4 / 17 can go live by exporting another `SdgChapter` and pushing it into
 * `sustainabilityChapters` — the page builder and the feature map derive their
 * blocks and keys from the chapter, with no panel code to touch.
 */

import { pdfPair, type LegacyTool, type SdgChapter, type SustainabilityStat } from "./sdgChapterContract";
import { sdg3Chapter } from "./sustainabilitySdg3";

/* ----------------------------------------------------------------------------
 * Epigraph
 * -------------------------------------------------------------------------- */

export const sustainabilityEpigraph = {
  quote:
    "Sustainable development is the pathway to the future we want for all. It offers a framework to generate economic growth, achieve social justice, exercise environmental stewardship and strengthen governance.",
  translationZh: "",
  attribution: "Ban Ki-moon",
  attributionRole: "UN Secretary-General",
};

/* ----------------------------------------------------------------------------
 * Overview
 * -------------------------------------------------------------------------- */


/** SDG colours are applied in CSS through `data-sdg`, not carried as data. */
export interface CoreSdg {
  number: number;
  title: string;
  summary: string;
  /** Anchor the card jumps to. */
  target: string;
}

export interface ImpactTier {
  layer: "SET" | "DEVELOP" | "GROW";
  title: string;
  description: string;
  sdgs: ReadonlyArray<{ number: number; target?: string }>;
}

export const sustainabilityOverview = {
  intro:
    "In response to global **social**, **economic**, and **environmental** challenges to sustainable development, JLU-FBH identified three core sustainable development goals based on the characteristics of CirCure.",
  framework:
    "Building on these core goals and extending our work to additional SDGs, we developed the **Set–Develop–Grow Impact Framework (SDG Impact Framework)**.",
  stakeholders:
    "We have continuously **incorporated** feedback from **94 stakeholders across seven fields** into project design and evaluation, allowing real-world needs to inform project positioning, technical optimization, and sustainability decisions.",
  scaleModel:
    "In order to ground this impact framework in CirCure itself, we established the **SCALE Model** to identify **relevant SDG stakeholders, incorporate their feedback into our work,** and further evaluate the project systematically in terms of **project impacts**, **cross-SDG relationships**, **reusable outcomes**, and **supporting evidence.**",
  sstqn:
    "To further support the assessment of **cross-SDG** relationships within the **Alignment component of the SCALE Model**, we proposed the **SDG Synergy–Trade-off Quantification Network (SST-QN)** to systematically analyze potential **positive and negative interactions** among SDGs. We structured this process as a reusable analytical workflow and assessment framework to **help future iGEM teams reduce duplicated effort** when designing evaluation criteria, assessing interactions, and organizing results.",
  toolkit:
    "Beyond project evaluation, we also **documented** our actions, data, and impact, ultimately forming **26 reusable methods and tools** that make our SDG contributions more **measurable, verifiable, and reusable** for future iGEM teams.",
};

/** Three core SDGs (Overview graphic, rebuilt as cards). SDG 9 / 12 chapters
 * are not online yet, so they point to the SET section that introduces them. */
export const coreSdgs: ReadonlyArray<CoreSdg> = [
  {
    number: 3,
    title: "Good Health and Well-being",
    summary: "Addressing the health needs of patients with TNBC.",
    target: "sdg3-health",
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    summary: "Translating biomedical innovations into practice.",
    target: "set-core-challenges",
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    summary: "Supporting the responsible development of medical technologies.",
    target: "set-core-challenges",
  },
];

/** SET / DEVELOP / GROW (Overview graphic). SDGs without a `target` have no
 * section on the page yet and are not shown as jump pills. */
export const impactTiers: ReadonlyArray<ImpactTier> = [
  {
    layer: "SET",
    title: "Address the core challenges",
    description: "Focuses on CirCure’s three core goals.",
    sdgs: [
      { number: 3, target: "sdg3-health" },
      { number: 9, target: "set-core-challenges" },
      { number: 12, target: "set-core-challenges" },
    ],
  },
  {
    layer: "DEVELOP",
    title: "Build knowledge and partnerships",
    description: "Extends our work to additional goals.",
    sdgs: [{ number: 4 }, { number: 17 }],
  },
  {
    layer: "GROW",
    title: "Assess long-term possibilities",
    description: "Explores potential long-term impacts of CirCure.",
    sdgs: [{ number: 1 }, { number: 5 }, { number: 8 }, { number: 10 }, { number: 13 }],
  },
];

export const sustainabilityStats: ReadonlyArray<SustainabilityStat> = [
  { id: "stakeholders", value: 94, label: "Stakeholders" },
  { id: "fields", value: 7, label: "Fields" },
  { id: "tools", value: 26, label: "Reusable methods and tools" },
  { id: "core-sdgs", value: 3, label: "Core SDGs" },
];

/* ----------------------------------------------------------------------------
 * SST-QN
 * -------------------------------------------------------------------------- */

export const sstqnSection = {
  title: "SDG Synergy–Trade-off Quantification Network (SST-QN)",
  motivation:
    "The Sustainable Development Goals (SDGs) are interconnected, and individual goals may span more than one dimension of sustainable development. Within our analytical framework, we mapped all **17 SDGs** across the **social, economic, and environmental dimensions** according to the **relative weights** identified for their associations with each dimension. SDGs whose associations extended across multiple dimensions were therefore allowed to appear in **more than one category**. This mapping provides the basis for the subsequent **SST-QN analysis**; it **does not imply that CirCure contributes equally to all 17 SDGs**.",
  /** The "(click to learn)" phrase links to the Global Youth stakeholder card. */
  accelerationWeekLead:
    "These connections became clearer during our participation in the **Acceleration Week for Global Youth Development Programs in 2026** ",
  accelerationWeekLink: {
    label: "(click to learn)",
    target: "sdg3-global-youth",
  },
  accelerationWeek:
    ". JLU-FBH was invited to this **UNICEF-organized** exchange event, where we joined the **“Health and Well-being”** thematic group. When conversations with young people working in health, technology, education, and green development, we realised that even projects sharing the goal of improving health can have different impacts depending on technological conditions, access to resources, social equity, and the implementation context. This shifted our focus beyond **“Which SDGs is CirCure related to?”** to a deeper set of questions: **How are these goals connected? Do these connections always hold? Under what conditions might they change?**",
  statusIntro:
    "To examine these relationships systematically, we established **SST-QN** as an initial screening framework covering all 17 SDGs. It starts with potential **directed interactions** among SDGs in a general context. Drawing on existing mechanisms and evidence, the model assigns each potential direct relationship an **Interaction Status**: **Core (C)** for direct relationships with relatively clear support; **Exploratory (E)** for those with plausible mechanisms but limited evidence; **Conditional (±)** for those whose effects depend on specific implementation conditions; and **Excluded (0)** for those that currently lack sufficient support.",
  statusCaption: "SST-QN Interaction Status Classification",
  boundaryIntro:
    "Before assigning quantitative scores, we specified **which direct interactions among the 17 SDGs were eligible for analysis and the status assigned to each**. This prevented relationships from being arbitrarily added or reinterpreted after the results were obtained.",
  boundaryCaption: "Pre-specified Direct-edge Boundary Matrix",
  scoreIntro:
    "We then used the **Evidence-calibrated Directed Interaction Score**, ranging from **−1 to 1**, to characterize the **direction and relative strength** of interactions among SDGs. Positive values indicate a **Positive Interaction (Synergy)**, negative values indicate a **Negative Interaction (Trade-off)**, and 0 indicates that **no direct interaction is currently supported**. **Interaction Status and Interaction Direction are distinct**: status describes the evidence and conditions underpinning a relationship, whereas direction indicates whether the interaction is positive or negative. The score additionally expresses its relative strength.",
  scoreCaption: "Direct Interaction Scores Among the 17 SDGs",
  indirectPropagation:
    "Beyond direct interactions, SST-QN allows for the analysis of **indirect propagation, feedback, time lags, and implementation conditions**. Many **Negative Interactions / Trade-offs** arise from how an SDG is pursued—for. For example, through resource consumption, increased costs, or unequal distribution—rather than from the goal itself. The direction of **Conditional relationships** must therefore be assessed within the specific project context.",
  alignmentScreening:
    "SST-QN provides **an initial screening in a general context**, identifying potential relationships that warrant closer attention. For CirCure, we then use **Alignment** within the SCALE Model to calibrate this assessment against our technical design, stakeholder feedback, and actual implementation conditions. SST-QN establishes the initial boundaries of relationship analysis; Alignment assesses whether and how these relationships occur in CirCure and under what conditions.",
  reproducibility:
    "To support further testing and reuse, we fully documented our relationship assessments, scoring rationales, and the evidence and conditions underpinning them. This allows the analysis to be updated as new evidence and data become available and as project contexts evolve. Beyond explaining current SDG interactions, SST-QN offers future iGEM teams a **traceable, reproducible analytical framework that can be continually refined**. It provides a directly reusable methodological foundation to help teams reduce duplicated effort in identifying relationships, setting analytical boundaries, and developing evaluation methods. Teams can use this foundation to identify potential synergies and trade-offs and to assess and optimize the sustainability impacts of their projects.",
  pdfTitle: "SDG 模型构建",
  transition:
    "With this SDG interaction network established, we returned to CirCure itself. We mapped our project activities, **stakeholder feedback**, and potential **long-term impacts** onto the SDGs. This mapping formed the basis of our SDG Impact Framework.",
};

export interface SstqnCategory {
  code: string;
  label: string;
  summary: string;
}

/** Interaction Status key (Figure 5) — wording from `statusIntro`. */
export const sstqnCategories: ReadonlyArray<SstqnCategory> = [
  { code: "C", label: "Core", summary: "Direct relationships with relatively clear support" },
  { code: "E", label: "Exploratory", summary: "Plausible mechanisms but limited evidence" },
  { code: "±", label: "Conditional", summary: "Effects depend on specific implementation conditions" },
  { code: "0", label: "Excluded", summary: "Currently lack sufficient support" },
];

export interface SstqnScoringStep {
  id: string;
  label: string;
  role: "input" | "calibration" | "output";
}

/** Score pipeline of the Evidence-calibrated Directed Interaction Score. */
export const sstqnScoringSteps: ReadonlyArray<SstqnScoringStep> = [
  { id: "mech", label: "Mechanism clarity", role: "input" },
  { id: "rep", label: "Cross-context reproducibility", role: "input" },
  { id: "causal", label: "Causal evidence", role: "input" },
  { id: "compat", label: "Data compatibility", role: "input" },
  { id: "cal", label: "Evidence calibration", role: "calibration" },
  { id: "out", label: "Directed Interaction Score", role: "output" },
];

/* ----------------------------------------------------------------------------
 * SET–DEVELOP–GROW Impact Framework
 * -------------------------------------------------------------------------- */

export const impactFrameworkSection = {
  title: "SET-DEVELOP-GROW Impact Framework (SDG Impact Framework)",
  intro:
    "The SDG Impact Framework describes how CirCure’s sustainable development impacts evolve as the project develops—from **directly addressing core challenges** to **broader sustainable development impacts**, and ultimately to the systemic value it may generate over the long term. **SET** represents the core SDGs that CirCure directly addresses in response to its project objectives and stakeholder needs. **DEVELOP** captures the broader impacts and connections with additional SDGs that emerge as research and development, translation, and societal engagement progress. **GROW** represents the SDGs that CirCure could further advance through long-term research and development, clinical translation, and implementation at scale.",
  pathway:
    "The framework traces CirCure’s sustainability pathway from **addressing core challenges (SET)** through **extending impacts across multiple dimensions (DEVELOP)** to **long-term sustainability value (GROW)**. It considers what the project can directly address today while distinguishing impacts already generated from potential contributions that depend on long-term development. This distinction helps avoid overstating CirCure’s sustainability outcomes at its current stage.",
};

/* ----------------------------------------------------------------------------
 * SET: Addressing Core Challenges
 * -------------------------------------------------------------------------- */

export const setCoreChallengesSection = {
  title: "SET: Addressing Core Challenges",
  paragraphs: [
    "WHO reports the following figures: In 2024, there were an estimated 2.4 million women diagnosed with breast cancer and 694,000 deaths globally. With effective targeted treatment options still limited, triple-negative breast cancer (TNBC) remains challenging to treat, with restricted therapeutic options, a high risk of recurrence, and poor long-term prognosis. In response to this unmet clinical need, CirCure focuses on developing novel immunotherapeutic strategies while also considering their long-term value for technological innovation, clinical translation, and responsible development.",
    "These real-world needs informed our selection of **SDG 3 (Good Health and Well-being)**, **SDG 9 (Industry, Innovation and Infrastructure)**, and **SDG 12 (Responsible Consumption and Production)** as CirCure’s three core sustainable development goals within **SET**. They correspond, respectively, to **patient health benefits, technological innovation and translation, and responsible resource use in research and development and future production**. Guided by these goals, we sought input from patients, clinicians, researchers, industry professionals, and other relevant groups. Their perspectives on real-world needs, technical feasibility, clinical application, and resource use helped us continually assess and refine the project. SET thus provided a practical foundation for CirCure’s subsequent design, evaluation, and sustainability analysis.",
    "As a single stakeholder’s feedback may relate to multiple SDGs, we categorized the feedback by its **primary area of impact**. We then use Alignment to examine the cross-SDG synergies, conditional relationships, and potential trade-offs reflected in that feedback.",
  ],
};


/** SDG chapters live on the page, in reading order. */
export const sustainabilityChapters: ReadonlyArray<SdgChapter> = [sdg3Chapter];

/* ----------------------------------------------------------------------------
 * Stakeholder Sustainability Tracker
 * -------------------------------------------------------------------------- */

export const stakeholderTracker = {
  id: "stakeholder-tracker",
  index: "4.2",
  title: "Stakeholder Sustainability Tracker",
  paragraphs: [
    "As CirCure progressed, we accumulated stakeholder feedback, team responses, implementation outcomes, and supporting evidence. We developed the **Stakeholder Sustainability Tracker** to organize this information in one place and make stakeholder engagement easier to update and review over time. The tool records stakeholder information, key feedback, project responses, implementation status, relevant SDGs, and supporting evidence. To help other iGEM teams use it directly, we provide a **blank version containing no CirCure project data**. Click here to view and download the template, then build and maintain stakeholder records tailored to your project.",
    "We also share **the actual records compiled throughout CirCure’s development** to demonstrate the tool’s use in practice. These records show how we documented stakeholder feedback, our responses, and implementation outcomes over time. The Tracker’s Chinese–English language switch changes the interface only; it does not automatically translate user-entered content. We therefore provide corresponding **Chinese and English versions of the records** so readers can review the full content in either language. An accompanying **User Manual**, also available in Chinese and English, explains the basic functions, field completion, and use of the tool to help other teams get started.",
    "To assess the Tracker’s usability and analytical value in real projects, we invited an iGEM team and a teacher experienced in project sustainability analysis to try the tool and provide feedback.",
  ],
  /** Download cards; files are hosted on iGEM docs under these names. */
  files: [
    {
      title: "Stakeholder Sustainability Tracker — Blank Template",
      pdfs: [{ label: "Template", fileName: "sustainability-stakeholder-tracker-template.pdf" }],
    },
    {
      title: "CirCure Tracker Records",
      pdfs: pdfPair("stakeholder-tracker-records"),
    },
    {
      title: "User Manual",
      pdfs: pdfPair("stakeholder-tracker-user-manual"),
    },
  ] satisfies ReadonlyArray<Pick<LegacyTool, "title" | "pdfs">>,
};