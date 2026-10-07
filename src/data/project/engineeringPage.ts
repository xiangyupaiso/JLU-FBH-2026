import type {
  WikiContentBlock,
  WikiDbTLStage,
  WikiPageContent,
} from "../../components/wiki/wikiPageTypes";
import { cycle2Iterations, cycle2Section } from "./engineeringRecordAdditions";

/**
 * Engineering — the CirCure TIME record.
 *
 * `TIME` is the team's own engineering system: four project-level cycles
 * (**T**argeting, **I**ntegration, **M**easurement, **E**valuation) on the outer
 * scale of a central gear, with Design–Build–Test–Learn running on the inner
 * scale. The two hands of the dial locate the project inside its current cycle
 * and its current engineering stage.
 *
 * The concentric dial that visualises this lives in
 * `components/wiki/features/project/EngineeringPanels.tsx`; the plain-data
 * arrays below are its input. Cycles 1 and 2 are transcribed from the team draft in
 * `文案集/project/engineering/Engineering改2.md`.
 */

export type EngineeringCycleLetter = "T" | "I" | "M" | "E";

export interface EngineeringCycleDatum {
  id: string;
  letter: EngineeringCycleLetter;
  title: string;
  /** `planned` cycles keep a dashed arc on the dial but publish no article section. */
  status: "recorded" | "planned";
}

export interface EngineeringTeamDatum {
  id: string;
  label: string;
}

export interface EngineeringIterationDatum {
  /** Matches the `subheading` anchor and the `dbtl` block id. */
  id: string;
  /** Owning cycle, 1-based, aligned with `TIME_CYCLES` by index. */
  cycle: number;
  cycleId: string;
  /** "1.1" … "1.10" */
  index: string;
  /** Iteration heading, e.g. "Iteration 1.1｜Defining the clinical use case". */
  label: string;
  /** Short form for the gear strip's hover list. */
  short: string;
  /** Team ids that contributed to this iteration; drives the satellite gears. */
  teams: string[];
}

export const TIME_CYCLES: EngineeringCycleDatum[] = [
  {
    id: "engineering-cycle-1",
    letter: "T",
    title: "Targeting: from intended use to a four-antigen strategy",
    status: "recorded",
  },
  {
    id: "engineering-cycle-2",
    letter: "I",
    title: "Integration: from epitope exploration to Combined",
    status: "recorded",
  },
  {
    id: "engineering-cycle-3",
    letter: "M",
    title: "Measurement: building the molecular and cellular evidence chain",
    status: "planned",
  },
  {
    id: "engineering-cycle-4",
    letter: "E",
    title: "Evaluation: extending evidence across biological scales",
    status: "planned",
  },
];

export const ENGINEERING_TEAMS: EngineeringTeamDatum[] = [
  { id: "dry-lab", label: "Dry Lab" },
  { id: "wet-lab", label: "Wet Lab" },
  { id: "ihp", label: "Integrated Human Practices" },
  { id: "education", label: "Education" },
  { id: "visual-design", label: "Visual Design" },
  { id: "entrepreneurship", label: "Entrepreneurship" },
];

/** Ordered Design–Build–Test–Learn stage order, shared by every iteration. */
export const DBTL_STAGE_KEYS = ["design", "build", "test", "learn"] as const;

const stageTitle: Record<(typeof DBTL_STAGE_KEYS)[number], string> = {
  design: "Design",
  build: "Build",
  test: "Test",
  learn: "Learn",
};

/**
 * Build one DBTL quartet from a record keyed by stage. Missing stages collapse
 * out, so a draft that has not written every stage yet still renders a valid
 * (shorter) ladder instead of an empty heading.
 */
function dbtl(
  id: string,
  record: Partial<Record<(typeof DBTL_STAGE_KEYS)[number], WikiContentBlock[]>>,
): WikiContentBlock {
  const stages: WikiDbTLStage[] = DBTL_STAGE_KEYS.filter(
    (key) => record[key]?.length,
  ).map((key) => ({
    key,
    title: stageTitle[key],
    blocks: record[key] as WikiContentBlock[],
  }));
  return { type: "dbtl", id, stages };
}

/** Shorthand for a single English paragraph. */
const p = (paragraphs: string[]): WikiContentBlock => ({
  type: "prose",
  paragraphs,
});

/** Shorthand for a figure reservation, from the draft's `［图片预留位置：…］`. */
const figure = (
  filename: string,
  instruction: string,
  caption?: string,
): WikiContentBlock => ({
  type: "image-placeholder",
  filename,
  instruction,
  caption,
});

export const ENGINEERING_ITERATIONS: EngineeringIterationDatum[] = [
  {
    id: "eng-t-1-1",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.1",
    label: "Iteration 1.1｜Defining the clinical use case",
    short: "Defining the clinical use case",
    teams: ["ihp"],
  },
  {
    id: "eng-t-1-2",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.2",
    label: "Iteration 1.2｜Selecting a measurable circRNA platform",
    short: "Selecting a measurable circRNA platform",
    teams: ["dry-lab", "ihp"],
  },
  {
    id: "eng-t-1-3",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.3",
    label: "Iteration 1.3｜Building the first educational and visual entry",
    short: "The first educational and visual entry",
    teams: ["education", "visual-design"],
  },
  {
    id: "eng-t-1-4",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.4",
    label: "Iteration 1.4｜Building an initial antigen-discovery route",
    short: "An initial antigen-discovery route",
    teams: ["dry-lab"],
  },
  {
    id: "eng-t-1-5",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.5",
    label:
      "Iteration 1.5｜Building a four-dimensional antigen-evidence framework",
    short: "A four-dimensional evidence framework",
    teams: ["dry-lab", "ihp"],
  },
  {
    id: "eng-t-1-6",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.6",
    label:
      "Iteration 1.6｜Testing the four antigen sources with protein evidence",
    short: "Protein evidence for four antigen sources",
    teams: ["dry-lab"],
  },
  {
    id: "eng-t-1-7",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.7",
    label:
      "Iteration 1.7｜Locating antigen expression within malignant-cell diversity",
    short: "Locating antigen expression in malignant cells",
    teams: ["dry-lab"],
  },
  {
    id: "eng-t-1-8",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.8",
    label: "Iteration 1.8｜Extending antigen complementarity across patients",
    short: "Antigen complementarity across patients",
    teams: ["dry-lab", "ihp"],
  },
  {
    id: "eng-t-1-9",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.9",
    label:
      "Iteration 1.9｜Connecting the first Dry Lab workflow in CircuForge V1.0",
    short: "The first CircuForge V1.0 workflow",
    teams: ["dry-lab", "entrepreneurship"],
  },
  {
    id: "eng-t-1-10",
    cycle: 1,
    cycleId: "engineering-cycle-1",
    index: "1.10",
    label: "Iteration 1.10｜Preparing a common human DC–T-cell workflow",
    short: "A common human DC–T-cell workflow",
    teams: ["wet-lab", "ihp"],
  },
  ...cycle2Iterations,
];

export const engineeringPage: WikiPageContent = {
  route: "/engineering",
  category: "project",
  chapter: "Project / 02 of 07",
  eyebrow: "Engineering · The TIME record",
  title: "Engineering",
  lede: "Four project-level cycles on the outer scale, Design–Build–Test–Learn on the inner.",
  boundary:
    "Dates, construct versions, raw measurements and figures must be replaced with team records as experiments are completed. Figure and code slots below are reservations, not results.",
  visual: "engineering-cycle",
  visualLabel: "CirCure TIME engineering system",
  visualSteps: ["Design", "Build", "Test", "Learn"],
  facts: [
    {
      label: "T",
      value: "Targeting — intended use to a four-antigen strategy",
    },
    { label: "I", value: "Integration — epitope exploration to Combined" },
    {
      label: "M",
      value: "Measurement — the molecular and cellular evidence chain",
    },
    { label: "E", value: "Evaluation — evidence across biological scales" },
  ],
  sections: [
    {
      id: "engineering-overview",
      index: "00",
      kicker: "Overview",
      navLabel: "Overview",
      title: "TIME: a stopwatch, not an acronym",
      summary:
        "TIME marks four connected project-level cycles on the outer scale of the central gear. Design–Build–Test–Learn runs along the inner scale, and the two hands locate the project within its current cycle and engineering stage.",
      blocks: [
        p([
          "**TIME** is the engineering system JLU-FBH built to organise the evidence-driven development of CirCure. It represents four connected project-level cycles: **Targeting, Integration, Measurement and Evaluation**. The system takes the form of a mechanical stopwatch. TIME is marked on the outer scale of the central gear, Design–Build–Test–Learn runs along the inner scale, and the two hands locate the project within its current cycle and engineering stage.",
          "Yet TIME is more than an acronym. It reflects the urgency at the heart of CirCure: when recurrence remains a possibility, every well-founded decision should bring the next answer closer. Our stopwatch therefore records not only the progress of engineering, but also our effort to turn evidence into action without losing time.",
        ]),
        p([
          "The surrounding gears represent the teams that keep TIME moving. Dry Lab converts biological questions into traceable antigen and epitope decisions, structural hypotheses and quantitative predictions, supported by CircuForge, TorusFold and mathematical modelling. Wet Lab converts these designs into physical constructs and molecular, cellular and broader biological measurements, with experimental practice also giving rise to CirCore. Integrated Human Practices introduces clinical needs, ethical requirements and evidence boundaries where they can refine project decisions. Education examines the transfer of scientific concepts and procedures; Visual Design develops a coherent project language; and Entrepreneurship connects experimental progress with preparation, collaboration and further development. Their engagement varies across the four cycles, but every effective connection contributes torque to the same engineering system.",
        ]),
        {
          type: "callout",
          tone: "navy",
          label: "How to read this page",
          body: "The dial's outer ring selects a TIME cycle, and its inner ring tracks the Design–Build–Test–Learn stage you are reading. The heading identifies the current iteration. Scroll to follow the engineering story, or open a TIME letter below and click a small gear to jump directly to an iteration.",
        },
      ],
    },
    {
      id: "engineering-cycle-1",
      index: "01",
      kicker: "Cycle 1 — Targeting",
      navLabel: "Cycle 1 — Targeting",
      title: "From intended use to a four-antigen strategy",
      summary:
        "TIME begins with T—Targeting. This cycle moved from intended use to a four-antigen strategy prepared for epitope-level engineering.",
      blocks: [
        p([
          "TIME begins with **T—Targeting**. This cycle moved from intended use to a four-antigen strategy prepared for epitope-level engineering. We first located the project within the TNBC treatment pathway, then translated that purpose into an RNA-platform decision and an antigen-selection route. Education and Visual Design developed the first shared language for circRNA, while Dry Lab, Software and Human Practices connected the scientific question to traceable evidence and an experimental handoff. By the end of this cycle, four antigen sources had gained support at the protein, malignant-cell and patient levels, and a common human DC–T-cell workflow was ready to receive the epitope designs developed in Cycle 2.",
        ]),

        {
          type: "subheading",
          id: "eng-t-1-1",
          index: "1.1",
          title: "Iteration 1.1｜Defining the clinical use case",
        },
        dbtl("dbtl-1-1", {
          design: [
            p([
              "We began with a clinical question: where could an additional immune intervention contribute most clearly in the TNBC treatment pathway? TNBC heterogeneity and recurrence after standard treatment directed our attention to patients who remain at higher risk after neoadjuvant treatment and surgery (Garrido-Castro et al., 2019). Runhui Tian encouraged us to explore an additional therapeutic approach for TNBC.",
            ]),
          ],
          build: [
            p([
              "We combined this direction with literature research and clinical discussions with Lei Wang and Chengli Li, both oncology doctors, and **built an intended-use specification with three defined elements.** First, the clinical setting was the period after neoadjuvant treatment and surgery, when some patients remain at higher risk of recurrence. Second, the proposed role was an antigen-directed immune approach that could complement standard treatment. Third, later development would require a documented antigen rationale, molecular eligibility criteria and measurable molecular and immune-response evidence. Tumour-antigen expression and HLA compatibility were recorded as questions for the subsequent Dry Lab and epitope analyses.",
            ]),
          ],
          test: [
            p([
              "We mapped this specification onto the TNBC treatment pathway and reviewed three points within the clinical context: timing, population and measurable evidence. The post-neoadjuvant and postsurgical setting provided a recognisable point of use; recurrence risk defined the clinical purpose; and antigen expression, HLA compatibility, molecular preparation and immune-response measurements formed a staged evidence plan. This review retained the proposed clinical setting while leaving molecular eligibility to the antigen and epitope analyses that followed.",
            ]),
          ],
          learn: [
            p([
              "Literature and clinical consultation showed that recurrence risk may remain after surgery and systemic treatment, establishing a clear complementary position for an antigen-directed immune approach. We therefore retained the post-treatment, higher-risk TNBC setting as the project's intended use and translated it into three requirements for platform selection: the ability to encode tumour-antigen sequences, support sustained expression and remain measurable from molecular preparation to immune function. These requirements formed the Design of Iteration 1.2. Further details are provided in [Integrated Human Practices: clinical positioning](https://2026.igem.wiki/jlu-fbh/human-practices).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Garrido-Castro et al., 2019",
              text: "Garrido-Castro AC, Lin NU, Polyak K. Insights into molecular classifications of triple-negative breast cancer: improving patient selection for treatment. Cancer Discovery. 2019;9:176–198.",
              href: "https://doi.org/10.1158/2159-8290.CD-18-1177",
              hrefLabel: "doi:10.1158/2159-8290.CD-18-1177",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-2",
          index: "1.2",
          title: "Iteration 1.2｜Selecting a measurable circRNA platform",
        },
        dbtl("dbtl-1-2", {
          design: [
            p([
              "The intended-use specification from Iteration 1.1 gave us five criteria for platform selection: antigen-coding capacity, RNA stability, duration of expression, immune-stimulatory potential and compatibility with measurements available to the team. We used these criteria to compare linear mRNA with engineered circRNA, allowing stability, expression and experimental measurability to enter the same decision.",
            ]),
          ],
          build: [
            p([
              "Literature research and technical discussions with Jifan Hu and Ruohan Yang were organized into a platform-decision matrix. The same work produced a five-stage route linking the DNA template, linear transcription precursor, mature circRNA, encoded protein and immune function. Published studies supported stable translation from engineered circRNA and showed that innate sensing depends on how the RNA is generated and prepared. We therefore defined adjuvant-like stimulation as a preparation-dependent property to examine in later experiments (Chen et al., 2017; Wesselhoeft et al., 2018; Wesselhoeft et al., 2019).",
            ]),
            {
              type: "table",
              caption:
                "Table C1-01｜Platform decision matrix｜平台选择决策矩阵",
              headers: [
                "Design requirement",
                "Linear mRNA",
                "Engineered circRNA",
                "Project check",
                "Design implication",
              ],
              rows: [
                [
                  "Antigen coding",
                  "Can encode the selected antigen sequence",
                  "Can encode the selected antigen sequence",
                  "Sequence and construct feasibility",
                  "Both formats meet the basic coding requirement",
                ],
                [
                  "RNA stability",
                  "Free ends remain susceptible to exonuclease-mediated decay",
                  "Closed topology can improve nuclease resistance",
                  "Literature and technical consultation",
                  "circRNA better matches the intended persistence question",
                ],
                [
                  "Expression duration",
                  "Expression is constrained by RNA lifetime",
                  "Engineered circRNA can extend translation duration",
                  "Published expression studies",
                  "Supports staged persistence measurements",
                ],
                [
                  "Immune stimulation",
                  "Depends on sequence, modification, purity and delivery",
                  "Innate sensing is tunable through RNA design and preparation",
                  "Literature and iHP discussion",
                  "Evaluate it under defined preparation conditions",
                ],
                [
                  "Preparation",
                  "Comparatively direct production route",
                  "Requires circularization and added identity checks",
                  "Team facilities and planned Experiments",
                  "Assign a measurable checkpoint to every preparation stage",
                ],
                [
                  "Functional evaluation",
                  "Can enter protein and immune assays",
                  "Can enter the same downstream assays after circularization checks",
                  "FLAG expression, DC–T-cell culture and immune readouts",
                  "Provides a continuous molecule-to-function route",
                ],
              ],
            },
          ],
          test: [
            p([
              "We tested the selected platform against the operations required by the literature and the resources available to the team. For each molecular stage, we asked whether there was a defined way to obtain the material, an accessible measurement and an observable output that could be passed to the next stage.",
            ]),
            {
              type: "table",
              caption:
                "Table C1-02｜Stage-by-stage feasibility check for the circRNA route｜circRNA路线的逐阶段可行性检查",
              headers: [
                "Stage",
                "Material source or operation",
                "Available project check",
                "Observable output",
                "Decision",
              ],
              rows: [
                [
                  "DNA template",
                  "Recombinant plasmids assembled by a commercial service provider",
                  "Supplier plasmid map, sequence file and sample label were matched to the intended design before the delivered material entered the team's recorded template-processing and transcription route",
                  "DNA template corresponding to the intended construct",
                  "Executable",
                ],
                [
                  "Linear transcription precursor",
                  "In vitro transcription from the DNA template and the designed self-splicing precursor",
                  "RNA preparation and nucleic-acid analytical methods recorded in Experiments",
                  "Detectable linear precursor",
                  "Executable",
                ],
                [
                  "Mature circRNA",
                  "Self-splicing and circularization of the precursor",
                  "RNA purification, RNase R treatment and the corresponding nucleic-acid analysis recorded in Experiments",
                  "A circRNA preparation that can be evaluated separately from the linear precursor",
                  "Executable",
                ],
                [
                  "Encoded protein",
                  "Translation after cellular delivery",
                  "FLAG-associated protein-expression measurement",
                  "Expected FLAG-associated expression signal",
                  "Executable",
                ],
                [
                  "Immune function",
                  "circRNA-loaded DCs co-cultured with T cells",
                  "ELISpot, flow cytometry and target-cell killing assays",
                  "IFN-γ-associated, activation and effector readouts",
                  "Executable",
                ],
              ],
            },
            p([
              "All five stages therefore had a defined source or procedure, an accessible measurement and an observable output. This established the testability of the circRNA route; the resulting RNA, protein and immune-response evidence is presented in the later cycles.",
            ]),
          ],
          learn: [
            p([
              "We selected circRNA as the project's working expression platform. Its closed topology provided a clear stability rationale, published work supported prolonged expression, and its preparation-dependent innate sensing defined an additional experimental question. With the platform established, the next decision concerned its antigen payload. That content question became the scientific thread carried into antigen selection. Further details are provided in [Integrated Human Practices: platform selection](https://2026.igem.wiki/jlu-fbh/human-practices) and [Experiments: circRNA preparation and validation](https://2026.igem.wiki/jlu-fbh/experiments).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Chen et al., 2017",
              text: "Chen YG, Kim MV, Chen X, et al. Sensing self and foreign circular RNAs by intron identity. Molecular Cell. 2017;67:228–238.e5.",
              href: "https://doi.org/10.1016/j.molcel.2017.05.022",
              hrefLabel: "doi:10.1016/j.molcel.2017.05.022",
            },
            {
              label: "Wesselhoeft et al., 2018",
              text: "Wesselhoeft RA, Kowalski PS, Anderson DG. Engineering circular RNA for potent and stable translation in eukaryotic cells. Nature Communications. 2018;9:2629.",
              href: "https://doi.org/10.1038/s41467-018-05096-6",
              hrefLabel: "doi:10.1038/s41467-018-05096-6",
            },
            {
              label: "Wesselhoeft et al., 2019",
              text: "Wesselhoeft RA, Kowalski PS, Parker-Hale FC, et al. RNA circularization diminishes immunogenicity and can extend translation duration in vivo. Molecular Cell. 2019;74:508–520.e4.",
              href: "https://doi.org/10.1016/j.molcel.2019.02.015",
              hrefLabel: "doi:10.1016/j.molcel.2019.02.015",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-3",
          index: "1.3",
          title:
            "Iteration 1.3｜Building the first educational and visual entry",
        },
        dbtl("dbtl-1-3", {
          design: [
            p([
              "Once circRNA became the working platform, Education and Visual Design asked how first-time learners could encounter an unfamiliar molecular form without losing sight of its biomedical setting. The scientific core needed to remain stable, while the teaching entry and visual language had to adapt to different schools.",
            ]),
          ],
          build: [
            p([
              "We planned and delivered Winter Outreach across five schools, reaching approximately 308 students. Five school-adapted teaching decks introduced synthetic biology, linear and circular RNA and possible biomedical applications. Dream circRNA used circular cardboard and coloured segments as a participatory activity after the scientific explanation. The first sheep character and project emblem gave the materials a consistent identity.",
            ]),
          ],
          test: [
            p([
              "In an end-of-session show-of-hands check, roughly 80% of students indicated that they understood the core distinction between linear and circular RNA introduced in class. Their participation and completed Dream circRNA pieces showed that the circular form provided an accessible entry to the topic. Differences among the five classrooms also showed that a shared scientific core benefited from school-specific teaching routes.",
            ]),
            figure(
              "figure-c1-01.png",
              "Winter Outreach: real photographs from the five schools, the five teaching-deck covers, Dream circRNA pieces, and the first sheep character with the project emblem.",
              "Figure C1-01｜Winter Outreach and the first visual identity. Winter Outreach introduced circRNA through five school-adapted teaching decks and the Dream circRNA activity. The first sheep character and project emblem maintained visual continuity across the materials.",
            ),
          ],
          learn: [
            p([
              "We retained the first visual identity and adopted an **Audience × Context** approach for later Education work: the scientific core would remain consistent, while age, prior knowledge, setting and learning purpose would shape the entry point. Vaccine Classroom, Virtual Laboratory and Synbio Classroom would later return to this principle in different forms. Along the main scientific route, the content question left by Iteration 1.2 remained unchanged: which TNBC antigens should the circRNA encode? Further details are provided in [Education: Winter Outreach](https://2026.igem.wiki/jlu-fbh/education).",
            ]),
          ],
        }),

        {
          type: "subheading",
          id: "eng-t-1-4",
          index: "1.4",
          title: "Iteration 1.4｜Building an initial antigen-discovery route",
        },
        dbtl("dbtl-1-4", {
          design: [
            p([
              "The circRNA platform could only become a testable design after its encoded content was defined. We therefore needed a reproducible route from public TNBC data to an initial list of antigen candidates, while keeping the clinical purpose from Iteration 1.1 visible.",
            ]),
          ],
          build: [
            p([
              "Literature research led us to draft a bulk RNA-seq workflow from tumour-versus-normal differential expression to candidate-antigen ranking. The workflow specified data import, sample grouping, quality control, differential analysis and candidate export. Higher average RNA expression in tumour tissue defined the first discovery signal, while later evidence layers would determine antigen suitability.",
            ]),
          ],
          test: [
            p([
              "We tested the reproducibility of this initial route by defining a complete output record linking the public dataset, tumour and normal sample composition, differential model, screening threshold, candidate-ranking table and corresponding visualization. This record separated discovery from subsequent prioritization: bulk RNA-seq established a traceable pool of tissue-level expression signals, while protein abundance, malignant-cell localization and patient representation were reserved for independent evidence layers.",
            ]),
            figure(
              "figure-c1-02.png",
              "Initial bulk RNA-seq antigen-discovery output: the verified differential-expression plot, the candidate-ranking plot, and the key parameters used.",
              "Figure C1-02｜Initial bulk RNA-seq antigen-discovery output. The traceable bulk RNA-seq record connects the public dataset, sample composition, differential model and screening threshold to the ranked tissue-level discovery pool.",
            ),
          ],
          learn: [
            p([
              "The bulk route established a reproducible discovery step and produced a structured starting pool. Turning that pool into an antigen decision required four additional views: protein support, malignant-cell localization, patient representation and clinical context. These questions defined the next antigen-selection framework.",
            ]),
          ],
        }),

        {
          type: "subheading",
          id: "eng-t-1-5",
          index: "1.5",
          title:
            "Iteration 1.5｜Building a four-dimensional antigen-evidence framework",
        },
        dbtl("dbtl-1-5", {
          design: [
            p([
              "The initial bulk route produced a useful starting point but left four independent questions unanswered. In consultation with Associate Professor Qingtian Guan, we examined how those questions could be separated so that one type of evidence would not be asked to prove more than it measured.",
            ]),
          ],
          build: [
            p([
              "We built a four-dimensional framework: **protein abundance** assessed whether the candidate antigens were detected as proteins in TNBC tissue; **malignant-cell enrichment** located their expression within the cells of interest; **patient representation** measured breadth and complementarity across cases; and **clinical evidence** placed each antigen in published disease and translational research. Normal-tissue expression remained a parallel safety consideration. This structure was consistent with established tumour-antigen prioritization principles (Cheever et al., 2009).",
            ]),
          ],
          test: [
            p([
              "To test whether the framework was operational rather than conceptual, we used TROP2, B7-H4, Nectin-4 and LIV-1 as four input antigens and performed an evidence-source readiness check. For each of the four dimensions, we identified an accessible data source, the question that could be measured and the decision that the resulting evidence could support. The check showed that all four antigens could enter the same evaluation structure. Protein abundance was selected as the first evidence layer to execute.",
            ]),
          ],
          learn: [
            p([
              "The four-dimensional route separated presence, cellular origin, patient breadth and clinical relevance, giving the four antigen candidates a consistent evaluation structure while preserving the role of each evidence type. Protein abundance was the first layer to test, so quantitative proteomics became the next design. The consultation also established a long-term software requirement: every retained antigen should carry the evidence behind its selection. Further details are provided in [Integrated Human Practices: Dry Lab route](https://2026.igem.wiki/jlu-fbh/human-practices).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Cheever et al., 2009",
              text: "Cheever MA, Allison JP, Ferris AS, et al. The prioritization of cancer antigens: a National Cancer Institute pilot project for the acceleration of translational research. Clinical Cancer Research. 2009;15:5323–5337.",
              href: "https://doi.org/10.1158/1078-0432.CCR-09-0737",
              hrefLabel: "doi:10.1158/1078-0432.CCR-09-0737",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-6",
          index: "1.6",
          title:
            "Iteration 1.6｜Testing the four antigen sources with protein evidence",
        },
        dbtl("dbtl-1-6", {
          design: [
            p([
              "We first asked whether all four antigen candidates were repeatedly detected as proteins in TNBC tissue. PXD024322 and PXD028102 are ProteomeXchange accessions for two public quantitative-proteomics cohorts with complementary designs. PXD024322 provided 88 TNBC tumours and 38 normal-breast samples; PXD028102 included 82 TNBC tumours, of which 66 had matched adjacent-normal tissue (Asleh et al., 2022; Gong et al., 2022).",
            ]),
          ],
          build: [
            p([
              "We built a reproducible proteomic-analysis route that preserved sample and batch identities, separated detection from abundance and used patient pairing when available. PXD024322 was analysed with a `Batch + Condition` design; PXD028102 used a `PatientID + Condition` paired design. Both routes used limma with empirical-Bayes moderation and Benjamini–Hochberg correction across the tested proteins (Ritchie et al., 2015; Benjamini and Hochberg, 1995).",
            ]),
          ],
          test: [
            p([
              "In PXD024322, TROP2 and LIV-1 were detected in all 88 tumours, B7-H4 in 81 and Nectin-4 in 82; all four also showed higher abundance in the tumour comparison. The paired PXD028102 cohort independently supported tumour-associated increases in TROP2, B7-H4 and Nectin-4, while LIV-1 was supported by the first cohort. The two datasets therefore contributed different but compatible protein evidence.",
            ]),
            figure(
              "figure-c1-03.png",
              "Complementary protein evidence: the verified differential-abundance plots for PXD024322 and PXD028102, the detection summary, and the paired-result plot.",
              "Figure C1-03｜Complementary protein evidence. Team reanalysis of two public TNBC proteomic cohorts. PXD024322 assessed broad detection and tumour–normal abundance, while PXD028102 contributed a patient-matched comparison.",
            ),
          ],
          learn: [
            p([
              "Broad detection in PXD024322 and tumour-associated increases across the two cohorts supported retaining all four antigen sources. The protein measurements established the tissue-level evidence; determining the cellular origin of each signal required a cell-resolved analysis. This became the next design. Further details are provided in [Dry Lab: proteomic evidence](https://2026.igem.wiki/jlu-fbh/bioinformatics).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Asleh et al., 2022",
              text: "Asleh K, Negri GL, Spencer Miko SE, et al. Proteomic analysis of archival breast cancer clinical specimens identifies biological subtypes with distinct survival outcomes. Nature Communications. 2022;13:896.",
              href: "https://doi.org/10.1038/s41467-022-28524-0",
              hrefLabel: "doi:10.1038/s41467-022-28524-0",
            },
            {
              label: "Gong et al., 2022",
              text: "Gong Y, Ji P, Yang YS, et al. Metabolic-pathway-based subtyping of triple-negative breast cancer reveals potential therapeutic targets. Cell Reports. 2022;39:110460.",
              href: "https://doi.org/10.1016/j.celrep.2022.110460",
              hrefLabel: "doi:10.1016/j.celrep.2022.110460",
            },
            {
              label: "Ritchie et al., 2015",
              text: "Ritchie ME, Phipson B, Wu D, et al. limma powers differential expression analyses for RNA-sequencing and microarray studies. Nucleic Acids Research. 2015;43:e47.",
              href: "https://doi.org/10.1093/nar/gkv007",
              hrefLabel: "doi:10.1093/nar/gkv007",
            },
            {
              label: "Benjamini and Hochberg, 1995",
              text: "Benjamini Y, Hochberg Y. Controlling the false discovery rate: a practical and powerful approach to multiple testing. Journal of the Royal Statistical Society Series B. 1995;57:289–300.",
              href: "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x",
              hrefLabel: "doi:10.1111/j.2517-6161.1995.tb02031.x",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-7",
          index: "1.7",
          title:
            "Iteration 1.7｜Locating antigen expression within malignant-cell diversity",
        },
        dbtl("dbtl-1-7", {
          design: [
            p([
              "The proteomic results confirmed the presence of the four antigen sources in TNBC tissue, but tumour samples also contain immune, stromal and endothelial cells. We therefore asked whether the corresponding genes were enriched in malignant cells and whether they marked the same or complementary malignant-cell populations. GSE176078—the accession number of a public single-cell and spatial atlas of human breast cancer in the Gene Expression Omnibus—retained the patient and cell-type identities required for this analysis (Wu et al., 2021).",
            ]),
          ],
          build: [
            p([
              "We performed quality control within each patient, used SCTransform to normalize expression and stabilize technical variation, and applied Harmony to integrate cells across patients while retaining their biological identities. These steps produced a TNBC subset for visualization. For statistical comparison, we then aggregated gene counts separately for the malignant and non-malignant compartments within each patient—a pseudobulk strategy—so that patients, rather than thousands of correlated individual cells, served as the biological replicates (Hafemeister and Satija, 2019; Korsunsky et al., 2019; Robinson et al., 2010).",
            ]),
          ],
          test: [
            p([
              "The analysis retained 39,324 cells, including 9,491 malignant cells. All four genes showed malignant-cell enrichment. At least one of the four genes was detected in 81.4% of malignant cells, while 7.3% expressed all four. TROP2 and LIV-1 provided the broadest representation, whereas Nectin-4 and B7-H4 marked additional malignant-cell subsets.",
            ]),
            figure(
              "figure-c1-04.png",
              "Antigen expression across malignant-cell populations: the GSE176078 UMAP, the cell-compartment expression comparison, the patient-level pseudobulk result and the four-gene union plot.",
              "Figure C1-04｜Antigen expression across malignant-cell populations. Cell-resolved analysis of the GSE176078 TNBC subset. The four genes were enriched in malignant cells and represented partly overlapping malignant-cell populations.",
            ),
          ],
          learn: [
            p([
              "The cell-resolved analysis explained why antigen diversity mattered: the four sources covered partly overlapping but non-identical malignant-cell states. Retaining them reduced the design's dependence on any single cellular state and gave the multi-antigen strategy a cell-level rationale. We next asked whether the same complementarity extended across patients. Further details are provided in [Dry Lab: single-cell analysis](https://2026.igem.wiki/jlu-fbh/bioinformatics).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Wu et al., 2021",
              text: "Wu SZ, Al-Eryani G, Roden DL, et al. A single-cell and spatially resolved atlas of human breast cancers. Nature Genetics. 2021;53:1334–1347.",
              href: "https://doi.org/10.1038/s41588-021-00911-1",
              hrefLabel: "doi:10.1038/s41588-021-00911-1",
            },
            {
              label: "Hafemeister and Satija, 2019",
              text: "Hafemeister C, Satija R. Normalization and variance stabilization of single-cell RNA-seq data using regularized negative binomial regression. Genome Biology. 2019;20:296.",
              href: "https://doi.org/10.1186/s13059-019-1874-1",
              hrefLabel: "doi:10.1186/s13059-019-1874-1",
            },
            {
              label: "Korsunsky et al., 2019",
              text: "Korsunsky I, Millard N, Fan J, et al. Fast, sensitive and accurate integration of single-cell data with Harmony. Nature Methods. 2019;16:1289–1296.",
              href: "https://doi.org/10.1038/s41592-019-0619-0",
              hrefLabel: "doi:10.1038/s41592-019-0619-0",
            },
            {
              label: "Robinson et al., 2010",
              text: "Robinson MD, McCarthy DJ, Smyth GK. edgeR: a Bioconductor package for differential expression analysis of digital gene expression data. Bioinformatics. 2010;26:139–140.",
              href: "https://doi.org/10.1093/bioinformatics/btp616",
              hrefLabel: "doi:10.1093/bioinformatics/btp616",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-8",
          index: "1.8",
          title:
            "Iteration 1.8｜Extending antigen complementarity across patients",
        },
        dbtl("dbtl-1-8", {
          design: [
            p([
              "The four antigen sources occupied different malignant-cell populations. To turn that cellular observation into a design relevant to the intended population, we examined how broadly the four genes were distributed across TNBC cases and whether published tissue studies supported their clinical relevance.",
            ]),
          ],
          build: [
            p([
              "We evaluated 115 TCGA TNBC cases through cBioPortal using the recorded rule of an mRNA z-score of at least 0.5 or high-level amplification. To measure the breadth of the four-antigen strategy without repeated counting, each patient was counted once in the four-gene union (Cerami et al., 2012; Gao et al., 2013). Correlation analysis and published histopathological studies further described the overlap, independence and tissue distribution of the four antigens.",
            ]),
          ],
          test: [
            p([
              "Under the recorded rule, the four-gene union included 101 of 115 patients, or 88%. The individual genes were not distributed identically, and LIV-1 showed a more independent expression pattern than the other three. Together with published tissue evidence and Yishu Wang's advice on multi-epitope design, the result supported retaining all four antigen sources for downstream epitope selection. The 88% value described antigen representation under one predefined data rule; HLA eligibility remained a separate question.",
            ]),
            figure(
              "figure-c1-05.png",
              "Patient-level representation of the four antigen sources: the real OncoPrint or patient-event plot for 115 TCGA TNBC cases, the 101/115 union result and the four-gene correlation plot.",
              "Figure C1-05｜Patient-level representation of the four antigen sources. Patient-level analysis of 115 TCGA TNBC cases. The union of the four recorded gene criteria included 101 patients, while their different expression patterns explained the value of retaining multiple antigen sources.",
            ),
          ],
          learn: [
            p([
              "The four-antigen strategy now rested on three connected evidence levels: Iteration 1.6 established protein detection in TNBC tissue, Iteration 1.7 located the four genes within complementary malignant-cell populations and this iteration extended their complementarity across patients. These results supported retaining all four sources. The next task was to carry their data, literature and selection reasons into epitope design with the full context intact. Further details are provided in [Dry Lab: patient-level evidence](https://2026.igem.wiki/jlu-fbh/bioinformatics).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Cerami et al., 2012",
              text: "Cerami E, Gao J, Dogrusoz U, et al. The cBio Cancer Genomics Portal: an open platform for exploring multidimensional cancer genomics data. Cancer Discovery. 2012;2:401–404.",
              href: "https://doi.org/10.1158/2159-8290.CD-12-0095",
              hrefLabel: "doi:10.1158/2159-8290.CD-12-0095",
            },
            {
              label: "Gao et al., 2013",
              text: "Gao J, Aksoy BA, Dogrusoz U, et al. Integrative analysis of complex cancer genomics and clinical profiles using the cBioPortal. Science Signaling. 2013;6:pl1.",
              href: "https://doi.org/10.1126/scisignal.2004088",
              hrefLabel: "doi:10.1126/scisignal.2004088",
            },
          ],
        },

        {
          type: "subheading",
          id: "eng-t-1-9",
          index: "1.9",
          title:
            "Iteration 1.9｜Connecting the first Dry Lab workflow in CircuForge V1.0",
        },
        dbtl("dbtl-1-9", {
          design: [
            p([
              "During our own Dry Lab work, quantitative results first had to be reorganized for target review, and selected target names, accessions, protein sequences and supporting evidence then had to be transferred into epitope prediction. Moving between R, Python, command-line scripts and web tools repeatedly changed the required input format and made selection reasons difficult to retain. This was especially demanding for new users. We therefore designed CircuForge to connect the steps in one guided environment and preserve the context needed for the next decision.",
            ]),
          ],
          build: [
            p([
              "We built CircuForge V1.0 in R Shiny with three connected modules: data import and quality control, candidate-target screening and epitope prediction. Processed data could move into target analysis, and selected targets could continue into epitope review without rebuilding the workflow in another application. V1.0 was intended to help first-time users follow the path from evidence to an epitope candidate while keeping the main analysis stages visible.",
            ]),
          ],
          test: [
            p([
              "We presented V1.0 at an iGEM software exchange involving five teams. Participants asked for a clearer distinction between software recommendations and the entries selected by the researcher, together with more visible candidate identity and supporting information during stage-to-stage transfer. We converted this feedback into specific requirements for the next version.",
            ]),
            figure(
              "figure-c1-06.png",
              "CircuForge V1.0 at the software exchange: a real exchange photograph, the V1.0 interface, and the recorded feedback that software recommendations and researcher selections must be distinguishable.",
              "Figure C1-06｜CircuForge V1.0 at the software exchange. CircuForge V1.0 connected data import, target screening and epitope prediction. Feedback from a five-team software exchange identified the need to separate software assessment from researcher selection and to retain candidate context across stages.",
            ),
          ],
          learn: [
            p([
              "V1.0 connected the first three Dry Lab stages and gave the next software iteration three precise directions: **separate judgement, preserve evidence and clarify handoff**. Stage-specific candidate keys, Evidence Cards, visible software states and an independent confirmation step would later answer the problems identified here. Along the scientific route, the four selected antigen sources also needed a common human-cell framework before their epitopes could be compared experimentally. Further details are provided in [Software: CircuForge iterations](https://2026.igem.wiki/jlu-fbh/software).",
            ]),
          ],
        }),

        {
          type: "subheading",
          id: "eng-t-1-10",
          index: "1.10",
          title: "Iteration 1.10｜Preparing a common human DC–T-cell workflow",
        },
        dbtl("dbtl-1-10", {
          design: [
            p([
              "Before the four antigen sources could enter epitope screening, their later RNA designs needed a common human-cell context. We therefore required a defined cell source, a consistent route for preparing antigen-presenting and responder cells, and records that would keep biological inputs comparable across constructs.",
            ]),
          ],
          build: [
            p([
              "Based on the Wet Lab protocol and human-material ethics discussion with Junqi Niu, we placed procurement, cell preparation and record continuity within the experimental plan. We then built a standardized preparation and co-culture framework beginning with commercial HLA-A*02:01 PBMC material. CD14-positive monocytes were isolated for GM-CSF/IL-4-induced monocyte-derived DC culture, while CD3-positive T cells were obtained from the CD14-negative fraction. The framework specified how circRNA-loaded DCs would later enter a common DC–T-cell co-culture for ELISpot, flow-cytometry and killing readouts (Miltenyi Biotec, n.d., CD14; Miltenyi Biotec, n.d., CD3; Sallusto and Lanzavecchia, 1994).",
            ]),
          ],
          test: [
            p([
              "The first ELISpot screen was intended to compare the immune responses associated with different epitope-encoding RNA constructs. For that comparison to be interpretable, the construct being tested needed to remain the principal planned variable. We therefore checked the experimental plan group by group: the commercial PBMC batch, HLA-A*02:01 background, DC and T-cell preparation routes, RNA input, loading procedure, co-culture conditions and ELISpot procedure were kept consistent, while the RNA construct assigned to each condition changed. This design allowed differences between wells to be interpreted primarily in relation to the construct under comparison.",
            ]),
          ],
          learn: [
            p([
              "The common DC–T-cell framework made a controlled first comparison possible: different epitope designs could later enter the same cell-preparation and culture route, while cell source and construct identity remained visible during interpretation. The four antigen sources were therefore ready to move from antigen-level evidence to peptide prediction and experimental construct design. Further details are provided in [Experiments: human-cell preparation](https://2026.igem.wiki/jlu-fbh/experiments) and [Integrated Human Practices: human-material ethics](https://2026.igem.wiki/jlu-fbh/human-practices).",
            ]),
          ],
        }),
        {
          type: "references",
          items: [
            {
              label: "Miltenyi Biotec, n.d., CD14",
              text: "Miltenyi Biotec. CD14 MicroBeads, human: data sheet, 130-050-201.",
              href: "https://www.miltenyibiotec.com/upload/assets/IM0001260.PDF",
              hrefLabel: "Source",
            },
            {
              label: "Miltenyi Biotec, n.d., CD3",
              text: "Miltenyi Biotec. CD3 MicroBeads, human: data sheet, 130-050-101.",
              href: "https://www.miltenyibiotec.com/upload/assets/IM0001261.PDF",
              hrefLabel: "Source",
            },
            {
              label: "Sallusto and Lanzavecchia, 1994",
              text: "Sallusto F, Lanzavecchia A. Efficient presentation of soluble antigen by cultured human dendritic cells is maintained by granulocyte/macrophage colony-stimulating factor plus interleukin 4 and downregulated by tumor necrosis factor alpha. Journal of Experimental Medicine. 1994;179:1109–1118.",
              href: "https://doi.org/10.1084/jem.179.4.1109",
              hrefLabel: "doi:10.1084/jem.179.4.1109",
            },
          ],
        },
      ],
      note: {
        label: "Cycle 1 outcome",
        body: "Cycle 1 completed the T—Targeting stage of TIME, moving from intended use to a four-antigen strategy ready for epitope-level engineering. We selected a measurable circRNA platform, built a four-dimensional antigen-evidence framework and retained TROP2, B7-H4, Nectin-4 and LIV-1 through protein, malignant-cell and patient-level analyses. Education and Visual Design established an adaptable first language for circRNA; CircuForge V1.0 began to connect the computational handoff; and the common DC–T-cell workflow prepared a shared experimental setting. Cycle 2 can now ask a narrower engineering question: which epitopes from the four antigen sources should be encoded, built and compared?",
      },
    },
    cycle2Section,
  ],
  links: [
    { path: "/description", label: "Project rationale" },
    { path: "/experiments", label: "Experimental design" },
    { path: "/notebook", label: "Notebook trace" },
    { path: "/bioinformatics", label: "Dry Lab evidence" },
  ],
  next: {
    path: "/results",
    label: "Results",
    title: "Which claims survived the test?",
  },
};
