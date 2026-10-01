/**
 * Structured content for the Sustainability page (Engagement route).
 *
 * Source: 6.3 Sustainability wiki定稿.md
 * Scope: Overview up to the end of SDG 3 & Stakeholder Sustainability Tracker.
 * Pure data layer — zero React/JSX elements.
 */

export type { SustainabilityAssetKey } from "./sustainabilityAssets";

/* ----------------------------------------------------------------------------
 * Shared types
 * -------------------------------------------------------------------------- */

export type SustainabilityAnchorLevel = 1 | 2 | 3 | 4 | 5;

export type SectionContentStatus = "existing" | "reserved";

export interface SustainabilityAnchor {
  id: string;
  label: string;
  level: SustainabilityAnchorLevel;
  status: SectionContentStatus;
}

export interface SustainabilityColorBinding {
  token: string;
  hex: string;
  paletteName?: string;
}

/* ----------------------------------------------------------------------------
 * Epigraph
 * -------------------------------------------------------------------------- */

export interface SustainabilityEpigraph {
  quote: string;
  attribution: string;
  attributionRole: string;
  translationZh: string;
}

export const sustainabilityEpigraph: SustainabilityEpigraph = {
  quote:
    "Sustainable development is the pathway to the future we want for all. It offers a framework to generate economic growth, achieve social justice, exercise environmental stewardship and strengthen governance.",
  attribution: "Ban Ki-moon",
  attributionRole: "UN Secretary-General",
  translationZh:
    "可持续发展是通往我们所有人所期盼未来的必由之路。它提供了一个框架，以促进经济增长、实现社会公正、践行环境守护并强化良治善治。",
};

/* ----------------------------------------------------------------------------
 * Overview
 * -------------------------------------------------------------------------- */

export type CoreSdgNumber = 3 | 9 | 12;

export interface CoreSdg {
  number: CoreSdgNumber;
  title: string;
  challenge: string;
  frameworkLayer: string;
  color: SustainabilityColorBinding;
  summary: string;
}

export const overviewCoreSdgs: ReadonlyArray<CoreSdg> = [
  {
    number: 3,
    title: "Good Health and Well-being",
    challenge: "TNBC 治疗选择有限、复发风险高、长期预后不佳",
    frameworkLayer: "SET · Core Challenge",
    summary: "Addressing the health needs of patients with TNBC.",
    color: { token: "--semantic-success", hex: "#2f6f68", paletteName: "wet-teal" },
  },
  {
    number: 9,
    title: "Industry, Innovation and Infrastructure",
    challenge: "生物医学创新转化与基础设施建设",
    frameworkLayer: "SET · Core Challenge",
    summary: "Translating biomedical innovations into practice.",
    color: { token: "--accent-coral", hex: "#d95f38", paletteName: "coral" },
  },
  {
    number: 12,
    title: "Responsible Consumption and Production",
    challenge: "医疗技术负责任发展与资源可持续性",
    frameworkLayer: "SET · Core Challenge",
    summary: "Supporting the responsible development of medical technologies.",
    color: { token: "--accent-gold", hex: "#c39a55", paletteName: "gold" },
  },
];

export interface OverviewFrameworkCard {
  layer: "SET" | "DEVELOP" | "GROW";
  kicker: string;
  title: string;
  description: string;
  sdgs: ReadonlyArray<{ number: number; label: string; targetAnchor: string }>;
}

export const overviewSetDevelopGrowCards: ReadonlyArray<OverviewFrameworkCard> = [
  {
    layer: "SET",
    kicker: "SET · CONTRIBUTION-RELATED WORK",
    title: "Address the core challenges",
    description: "Focuses on CirCure's three core goals.",
    sdgs: [
      { number: 3, label: "SDG 3", targetAnchor: "#sdg3-health" },
      { number: 9, label: "SDG 9", targetAnchor: "#set-core-challenges" },
      { number: 12, label: "SDG 12", targetAnchor: "#set-core-challenges" },
    ],
  },
  {
    layer: "DEVELOP",
    kicker: "DEVELOP · EXTENDING OUR WORK",
    title: "Build knowledge and partnerships",
    description: "Extends our work to additional goals.",
    sdgs: [
      { number: 4, label: "SDG 4", targetAnchor: "#sdg-impact-framework" },
      { number: 17, label: "SDG 17", targetAnchor: "#sdg-impact-framework" },
    ],
  },
  {
    layer: "GROW",
    kicker: "GROW · POTENTIAL FUTURE IMPACT",
    title: "Assess long-term possibilities",
    description: "Explores potential long-term impacts of CirCure.",
    sdgs: [
      { number: 1, label: "SDG 1", targetAnchor: "#sdg-impact-framework" },
      { number: 5, label: "SDG 5", targetAnchor: "#sdg-impact-framework" },
      { number: 8, label: "SDG 8", targetAnchor: "#sdg-impact-framework" },
      { number: 10, label: "SDG 10", targetAnchor: "#sdg-impact-framework" },
      { number: 13, label: "SDG 13", targetAnchor: "#sdg-impact-framework" },
    ],
  },
];

export const sustainabilityOverview = {
  title: "Overview",
  intro:
    "In response to global social, economic, and environmental challenges to sustainable development, JLU-FBH identified three core sustainable development goals based on the characteristics of CirCure.",
  paragraphs: [
    "In response to global social, economic, and environmental challenges to sustainable development, JLU-FBH identified three core sustainable development goals based on the characteristics of CirCure.",
    "Building on these core goals and extending our work to additional SDGs, we developed the Set–Develop–Grow Impact Framework (SDG Impact Framework).",
    "We have continuously incorporated feedback from 94 stakeholders across seven fields into project design and evaluation, allowing real-world needs to inform project positioning, technical optimization, and sustainability decisions.",
    "In order to ground this impact framework in CirCure itself, we established the SCALE Model to identify relevant SDG stakeholders, incorporate their feedback into our work, and further evaluate the project systematically in terms of project impacts, cross-SDG relationships, reusable outcomes, and supporting evidence.",
    "To further support the assessment of cross-SDG relationships within the Alignment component of the SCALE Model, we proposed the SDG Synergy–Trade-off Quantification Network (SST-QN) to systematically analyze potential positive and negative interactions among SDGs. We structured this process as a reusable analytical workflow and assessment framework to help future iGEM teams reduce duplicated effort when designing evaluation criteria, assessing interactions, and organizing results.",
    "Beyond project evaluation, we also documented our actions, data, and impact, ultimately forming 26 reusable methods and tools that make our SDG contributions more measurable, verifiable, and reusable for future iGEM teams.",
  ],
  coreSdgs: overviewCoreSdgs,
  callout: "三项核心 SDG 分别回应 TNBC 患者健康需求、生物医学创新转化以及医疗技术负责任发展的挑战。",
  frameworks: overviewSetDevelopGrowCards,
};

/* ----------------------------------------------------------------------------
 * SST-QN (Methodology)
 * -------------------------------------------------------------------------- */

export const sstqnSection = {
  title: "SDG Synergy–Trade-off Quantification Network (SST-QN)",
  paragraphs: [
    {
      id: "motivation",
      text: "The Sustainable Development Goals are interconnected. Progress toward one goal can advance others, but it can also introduce new constraints depending on how and where it is pursued. Therefore, examining a project’s links to individual SDGs in isolation cannot fully capture the synergies and trade-offs within the broader sustainable development system.",
    },
    {
      id: "acceleration-week",
      text: "These connections became clearer during our participation in the Acceleration Week for Global Youth Development Programs in 2026. JLU-FBH was invited to this UNICEF-organized exchange event, where we joined the “Health and Well-being” thematic group. When conversations with young people working in health, technology, education, and green development, we realised that even projects sharing the goal of improving health can have different impacts depending on technological conditions, access to resources, social equity, and the implementation context. This shifted our focus beyond “Which SDGs is CirCure related to?” to a deeper set of questions: How are these goals connected? Do these connections always hold? Under what conditions might they change?",
    },
    {
      id: "status-intro",
      text: "To examine these relationships systematically, we established SST-QN as an initial screening framework covering all 17 SDGs. It starts with potential directed interactions among SDGs in a general context. Drawing on existing mechanisms and evidence, the model assigns each potential direct relationship an Interaction Status: Core (C) for direct relationships with relatively clear support; Exploratory (E) for those with plausible mechanisms but limited evidence; Conditional (±) for those whose effects depend on specific implementation conditions; and Excluded (0) for those that currently lack sufficient support.",
    },
    {
      id: "boundary-intro",
      text: "Before assigning quantitative scores, we specified which direct interactions among the 17 SDGs were eligible for analysis and the status assigned to each. This prevented relationships from being arbitrarily added or reinterpreted after the results were obtained.",
    },
    {
      id: "score-intro",
      text: "We then used the Evidence-calibrated Directed Interaction Score, ranging from −1 to 1, to characterize the direction and relative strength of interactions among SDGs. Positive values indicate a Positive Interaction (Synergy), negative values indicate a Negative Interaction (Trade-off), and 0 indicates that no direct interaction is currently supported. Interaction Status and Interaction Direction are distinct: status describes the evidence and conditions underpinning a relationship, whereas direction indicates whether the interaction is positive or negative. The score additionally expresses its relative strength.",
    },
    {
      id: "indirect-propagation",
      text: "Beyond direct interactions, SST-QN allows for the analysis of indirect propagation, feedback, time lags, and implementation conditions. Many Negative Interactions / Trade-offs arise from how an SDG is pursued—for example, through resource consumption, increased costs, or unequal distribution—rather than from the goal itself. The direction of Conditional relationships must therefore be assessed within the specific project context.",
    },
    {
      id: "alignment-screening",
      text: "SST-QN provides an initial screening in a general context, identifying potential relationships that warrant closer attention. For CirCure, we then use Alignment within the SCALE Model to calibrate this assessment against our technical design, stakeholder feedback, and actual implementation conditions. SST-QN establishes the initial boundaries of relationship analysis; Alignment assesses whether and how these relationships occur in CirCure and under what conditions.",
    },
    {
      id: "reproducibility",
      text: "To support further testing and reuse, we fully documented our relationship assessments, scoring rationales, and the evidence and conditions underpinning them. This allows the analysis to be updated as new evidence and data become available and as project contexts evolve. Beyond explaining current SDG interactions, SST-QN offers future iGEM teams a traceable, reproducible analytical framework that can be continually refined. It provides a directly reusable methodological foundation to help teams reduce duplicated effort in identifying relationships, setting analytical boundaries, and developing evaluation methods. Teams can use this foundation to identify potential synergies and trade-offs and to assess and optimize the sustainability impacts of their projects.",
    },
    {
      id: "transition",
      text: "With this SDG interaction network established, we returned to CirCure itself. We mapped our project activities, stakeholder feedback, and potential long-term impacts onto the SDGs. This mapping formed the basis of our SDG Impact Framework.",
    },
  ],
  pdf: {
    title: "SDG 模型构建与评分矩阵",
    description:
      "详细记录 SST-QN 方法论、17 项 SDG 间定向作用关系的机制依据、证据分级标准及完整的 17×17 评分矩阵。",
  },
  scoring: {
    note: "评分范围为 -1 至 +1；正值代表协同（Synergy），负值代表权衡（Trade-off），0 代表当前无直接作用支持。完整矩阵见下方 PDF 报告。",
  },
  callouts: [
    {
      id: "pathway-tradeoff",
      text: "许多负向相互作用并非源于 SDG 目标本身，而是取决于实现该目标所采取的实施路径、资源消耗与成本分配。",
    },
    {
      id: "reusable-framework",
      text: "SST-QN 建立可追溯、可复现、可更新的方法论基础，避免后续队伍在边界设定与评分规则上的重复开发。",
    },
  ],
  transition:
    "在完成宏观 SDG 相互作用网络的构建后，我们回到 CirCure 自身，将项目研发活动、利益相关者反馈与潜在影响映射至对应目标，建立 SET–Develop–Grow 影响框架。",
};

/* ----------------------------------------------------------------------------
 * SET–DEVELOP–GROW Impact Framework
 * -------------------------------------------------------------------------- */

export const impactFrameworkSection = {
  title: "SET-DEVELOP-GROW Impact Framework (SDG Impact Framework)",
  intro:
    "The SDG Impact Framework describes how CirCure’s sustainable development impacts evolve as the project develops—from directly addressing core challenges to broader sustainable development impacts, and ultimately to the systemic value it may generate over the long term. SET represents the core SDGs that CirCure directly addresses in response to its project objectives and stakeholder needs. DEVELOP captures the broader impacts and connections with additional SDGs that emerge as research and development, translation, and societal engagement progress. GROW represents the SDGs that CirCure could further advance through long-term research and development, clinical translation, and implementation at scale.",
  pathway:
    "The framework traces CirCure’s sustainability pathway from addressing core challenges (SET) through extending impacts across multiple dimensions (DEVELOP) to long-term sustainability value (GROW). It considers what the project can directly address today while distinguishing impacts already generated from potential contributions that depend on long-term development. This distinction helps avoid overstating CirCure’s sustainability outcomes at its current stage.",
  summary:
    "框架明确区分“当前已有证据支持的贡献”与“依赖未来转化的潜在价值”，避免对当前阶段成果的过度陈述。",
};

/* ----------------------------------------------------------------------------
 * SET Layer: Addressing Core Challenges
 * -------------------------------------------------------------------------- */

export const setCoreChallengesSection = {
  title: "SET: Addressing Core Challenges",
  intro:
    "WHO reports the following figures: In 2024, there were an estimated 2.4 million women diagnosed with breast cancer and 694,000 deaths globally. With effective targeted treatment options still limited, triple-negative breast cancer (TNBC) remains challenging to treat, with restricted therapeutic options, a high risk of recurrence, and poor long-term prognosis. In response to this unmet clinical need, CirCure focuses on developing novel immunotherapeutic strategies while also considering their long-term value for technological innovation, clinical translation, and responsible development.",
  coreSdgSelection:
    "These real-world needs informed our selection of SDG 3 (Good Health and Well-being), SDG 9 (Industry, Innovation and Infrastructure), and SDG 12 (Responsible Consumption and Production) as CirCure’s three core sustainable development goals within SET. They correspond, respectively, to patient health benefits, technological innovation and translation, and responsible resource use in research and development and future production. Guided by these goals, we sought input from patients, clinicians, researchers, industry professionals, and other relevant groups. Their perspectives on real-world needs, technical feasibility, clinical application, and resource use helped us continually assess and refine the project. SET thus provided a practical foundation for CirCure’s subsequent design, evaluation, and sustainability analysis.",
  stakeholderOverview:
    "As a single stakeholder’s feedback may relate to multiple SDGs, we categorized the feedback by its primary area of impact. We then use Alignment to examine the cross-SDG synergies, conditional relationships, and potential trade-offs reflected in that feedback.",
  crossSdgNote:
    "在实际沟通中，同一位利益相关者的反馈往往涉及多个目标。我们根据主要影响领域将其分类，并通过 Alignment 进一步考察其中的跨目标关联。",
  whoEvidence: {
    statementEn:
      "In 2024, there were an estimated 2.4 million women diagnosed with breast cancer and 694,000 deaths globally.",
    source: "World Health Organization",
    year: "2024",
  },
};

/* ----------------------------------------------------------------------------
 * SDG 3: Good Health and Well-being
 * -------------------------------------------------------------------------- */

export const sdg3Section = {
  title: "SDG 3: Good Health and Well-being",
  intro:
    "For patients with TNBC, uncertainty about recurrence can persist long after surgery, while additional treatment may bring physical, practical, and financial burdens. We chose SDG 3 to guide our exploration of a postoperative therapeutic vaccine strategy, keeping long-term benefit, quality of life, and access central to how we evaluate its potential—so that our research responds to patients’ hopes of planning their lives with greater confidence.",
  stakeholderIntro: [
    "To understand what meaningful health value would look like for CirCure, we engaged stakeholders across the patient journey. Clinicians helped us define the clinical need and target population; patients and families helped us understand treatment value and burden; Professionals in payment and healthcare access helped us consider affordability and accessibility; and other health-related stakeholders further informed communication, prevention, and long-term implementation. Together, these perspectives progressively shaped whom CirCure aims to serve, how we evaluate its potential value, and what conditions would be necessary for that value to reach patients.",
  ],
  stakeholderTransition: [],
  stakeholderOutro: [],
  coreProblemsIntro: [
    "在与临床医生、公共卫生专家和利益相关者的交流中，我们进一步梳理出当前TNBC治疗中最为突出的三类核心问题：",
  ],
  expertIntro: [
    "针对上述问题，我们进一步向多位临床与专业领域老师请教，将其建议逐步纳入CirCure的方案完善与评价中：",
  ],
};

/* ----------------------------------------------------------------------------
 * Stakeholder Profiles (12 Profiles in SDG 3)
 * -------------------------------------------------------------------------- */

export type StakeholderVariant = "interview" | "field";

export interface StakeholderFieldRow {
  label: "对象" | "原因" | "反馈" | "改变";
  paragraphs: ReadonlyArray<string>;
}

export interface DetailedArticleSection {
  heading?: string;
  paragraphs: ReadonlyArray<string>;
}

export interface DetailedArticle {
  title: string;
  subtitle?: string;
  intro?: ReadonlyArray<string>;
  sections: ReadonlyArray<DetailedArticleSection>;
}

export interface StakeholderProfile {
  id: string;
  code?: string;
  name: string;
  role: string;
  variant: StakeholderVariant;
  organization?: string;
  relevantStakeholder?: string;
  whyEngaged?: string;
  feedback?: string;
  incorporated?: string;
  improvement?: string;
  challenge?: string;
  keyInsight?: string;
  whatChanged?: string;
  currentStatus?: string;
  fieldRows?: ReadonlyArray<StakeholderFieldRow>;
  sdgAddressed: string;
  detailedInterview: ReadonlyArray<string>;
  detailedArticle?: DetailedArticle;
}

export const stakeholderProfiles: ReadonlyArray<StakeholderProfile> = [
  {
    id: "01-li-chengli",
    code: "01",
    name: "李成丽医生 (Dr. Chengli Li)",
    role: "Clinical Oncology",
    variant: "interview",
    organization: "湖南省长沙市第八医院肿瘤科",
    relevantStakeholder:
      "长期参与肿瘤患者诊疗与治疗决策，能够从临床实践判断不同阶段 TNBC 患者真正需要解决的治疗问题。",
    challenge: "Is minimizing side effects really the primary goal of cancer treatment?",
    keyInsight:
      "对于已经完成手术的 TNBC 患者，最需要面对的是之后仍可能发生的复发和转移。因此，一种新的术后辅助治疗首先要看能否带来明确的治疗获益；安全性很重要，但应当建立在疗效基础上进一步优化。",
    whatChanged:
      "我们将 CirCure 进一步聚焦于 TNBC 术后辅助治疗场景，把降低复发和转移风险、获得更长期生存获益作为未来需要回应的核心需求，并形成“疗效优先，安全性优化”的项目原则。",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 9",
    detailedInterview: [
      "Early in the project, we described CirCure in broad terms: a potential new therapeutic approach for TNBC, with an emphasis on the possible safety advantages of circRNA vaccines. Our conversation with Dr. Chengli Li revealed a fundamental gap in this framing: patients at different stages of TNBC have different needs.",
      "Dr. Li began by emphasizing that the clinical needs of patients with TNBC vary with the stage of their disease.",
      "For patients who have undergone surgery, removal of the primary tumor does not eliminate the risk of recurrence and metastasis. The key question at this stage is whether a new adjuvant therapy can build on existing treatment to further reduce recurrence and metastasis and deliver more sustained disease control and long-term benefits, rather than whether it can shrink the tumor.",
      "When we first introduced CirCure, we emphasized the possibility that circRNA vaccines might cause 'fewer side effects.' Dr. Li's response was direct: for patients with cancer, the first question is whether a treatment works. Safety remains important, but the possibility of fewer side effects alone does not establish a treatment’s value when its efficacy is still uncertain.",
      "After this discussion, we shifted our emphasis from 'fewer side effects' to prioritizing efficacy and optimizing safety.",
    ],
    detailedArticle: {
      title: "After Surgery, What Matters Most Is Reducing Recurrence and Living Longer.",
      intro: [
        "Early in the project, we described CirCure in broad terms: a potential new therapeutic approach for TNBC, with an emphasis on the possible safety advantages of circRNA vaccines. Our conversation with Dr. Chengli Li revealed a fundamental gap in this framing: patients at different stages of TNBC have different needs.",
      ],
      sections: [
        {
          heading: "01 First, Define Whom We Aim to Help",
          paragraphs: [
            "Dr. Li began by emphasizing that the clinical needs of patients with TNBC vary with the stage of their disease.",
            "For patients who have undergone surgery, removal of the primary tumor does not eliminate the risk of recurrence and metastasis. The key question at this stage is whether a new adjuvant therapy can build on existing treatment to further reduce recurrence and metastasis and deliver more sustained disease control and long-term benefits, rather than whether it can shrink the tumor. Once cancer has recurred or metastasized, the focus shifts toward controlling disease progression and finding additional effective treatment options.",
            "This distinction led us to reconsider CirCure’s intended clinical setting. We narrowed our focus from patients with TNBC in general to those who have undergone surgery but remain at risk of recurrence and metastasis, positioning CirCure as a potential adjuvant therapeutic strategy following surgery.",
          ],
        },
        {
          heading: "02 “Fewer Side Effects” Is Not Enough",
          paragraphs: [
            "When we first introduced CirCure, we emphasized the possibility that circRNA vaccines might cause “fewer side effects.” Dr. Li’s response was direct: for patients with cancer, the first question is whether a treatment works. A new adjuvant therapy that offers clear improvements in disease control and reduces the risk of recurrence and metastasis may be worth considering despite some side effects, provided the risks are acceptable. Safety remains important, but the possibility of fewer side effects alone does not establish a treatment’s value when its efficacy is still uncertain.",
          ],
        },
        {
          heading: "03 Reordering Our Evaluation Priorities",
          paragraphs: [
            "After this discussion, we shifted our emphasis from “fewer side effects” to prioritizing efficacy and optimizing safety. Demonstrating antigen expression from circRNA and the induction of an immune response are experimental validation tasks for CirCure at its current stage. From a patient perspective, the more important question is whether these findings could ultimately support a therapeutic approach that reduces recurrence and metastasis after surgery and improves long-term outcomes. We cannot demonstrate these outcomes at this stage. They are directions for future evaluation that Dr. Li helped us define.",
            "The interview therefore prompted us to clarify two fundamental questions:",
            "Whom do we ultimately want CirCure to serve? — Patients with TNBC who remain at risk of recurrence and metastasis after surgery.",
            "What should we assess first when judging its value? — Whether it can deliver sufficient therapeutic benefit, while pursuing further improvements in safety and patient acceptability.",
            "These questions defined what we needed to learn next from patients. Before approaching patients and their families, however, we also considered how these sensitive conversations should be conducted responsibly. This led us to consult Runhui Tian on patient communication and humanistic care.",
          ],
        },
      ],
    },
  },
  {
    id: "02-tnbc-patients",
    code: "02",
    name: "TNBC Patients",
    role: "Target Patients",
    variant: "interview",
    relevantStakeholder:
      "作为 CirCure 未来最直接的潜在使用者和受益者，患者能够直接判断一种额外术后治疗是否真正值得接受。",
    challenge: "What makes an additional postoperative treatment worth accepting?",
    keyInsight:
      "降低复发和转移风险、获得长期生存获益仍是患者最核心的期待，但是否愿意接受额外治疗，还受到副作用、生活质量、治疗费用、家庭负担以及对新技术的信任程度共同影响。",
    whatChanged:
      "我们明确，疗效是患者考虑额外术后治疗的前提，但“有效”并不等于“值得接受”，患者还会判断这份获益是否值得承担相应的身体、生活和经济负担。",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 9 · SDG 10",
    detailedInterview: [
      "Dr. Chengli Li helped us clarify the clinical priorities for patients with TNBC after surgery, while Runhui Tian helped us approach these conversations with greater sensitivity and respect. We then spoke directly with four patients with TNBC or breast cancer to understand how they themselves evaluate treatment value. Beyond whether a treatment works, we asked a more patient-centered question: are its expected benefits worth the physical, psychological, and practical burdens it may bring?",
      "Across all four interviews, reducing recurrence and metastasis and achieving lasting survival benefits remained patients' central expectation. However, patients emphasized that an extra therapy must also be livable.",
    ],
    detailedArticle: {
      title: "What Makes a Treatment Worthwhile for Patients?",
      intro: [
        "Dr. Chengli Li helped us clarify the clinical priorities for patients with TNBC after surgery, while Runhui Tian helped us approach these conversations with greater sensitivity and respect. We then spoke directly with four patients with TNBC or breast cancer to understand how they themselves evaluate treatment value. Beyond whether a treatment works, we asked a more patient-centered question: are its expected benefits worth the physical, psychological, and practical burdens it may bring?",
      ],
      sections: [
        {
          heading: "01 Efficacy Remains the Central Expectation",
          paragraphs: [
            "Across all four interviews, reducing recurrence and metastasis and achieving lasting survival benefits remained the central expectation. One patient who had already experienced recurrence described this directly: 'After that, all I wanted was to keep the tumor under control and stop it from coming back again.' For these patients, who had completed surgery and standard treatment, considering another therapy made sense only if it could genuinely lower the chance of recurrence.",
            "This confirmed Dr. Li’s assessment: for postoperative TNBC, disease control and recurrence prevention are the prerequisite for evaluating any new treatment.",
          ],
        },
        {
          heading: "02 A Treatment Must Also Be Livable",
          paragraphs: [
            "At the same time, patients made it clear that 'effective' does not automatically mean 'worth accepting.' They also weigh what the treatment requires of them. Side effects were described not just as clinical symptoms, but as disruptions to daily life: fatigue, physical weakness, nausea, and frequent hospital visits make it difficult to return to work, care for family members, or regain a normal routine.",
            "Patients repeatedly expressed a desire to move on from being a patient: 'After surgery, you want to gradually return to normal life. If another treatment makes you weak all over again, you really have to consider whether you can endure it.' For an adjuvant therapy given after surgery, patients look for a balance: the benefit must be clear enough to justify the physical and practical toll of continuing treatment.",
          ],
        },
        {
          heading: "03 The Financial Burden Behind the Treatment",
          paragraphs: [
            "Financial considerations arose throughout the conversations. Most patients had already incurred significant expenses for surgery, chemotherapy, and follow-up care, which had often exhausted family savings or reduced household income. Facing another treatment, their primary concern was affordability.",
            "What mattered, however, was not simply the overall price of the medicine, but what they would actually pay out of pocket after medical insurance reimbursement: 'If insurance covers part of it and our family can manage, we would want to try it. But if it is entirely out of pocket and costs thousands or tens of thousands every month, it becomes very difficult, no matter how good it is.'",
          ],
        },
        {
          heading: "04 Trust, Routine, and Long-Term Hope",
          paragraphs: [
            "Patients also described the psychological difficulty of living with uncertainty after surgery. Even after successful procedures, the fear of recurrence remains a persistent source of anxiety. In evaluating new technologies, patients seek therapies they can understand and trust, rather than novelty alone.",
          ],
        },
        {
          heading: "05 What Changed | From “Can We Make It?” to “Can Patients Use It?”",
          paragraphs: [
            "The patient interviews clarified a central lesson: a treatment must be effective, but patients must also feel that its benefits justify the burdens they would bear. We therefore understood Dr. Chengli Li’s emphasis on “prioritizing efficacy” as a starting point, not as placing efficacy above all other considerations. The benefit must be meaningful, side effects must not unduly compromise quality of life, and financial burdens must not put treatment beyond the reach of patients who would otherwise accept it.",
          ],
        },
      ],
    },
  },
  {
    id: "1-5-runhui-tian",
    code: "1.5",
    name: "Runhui Tian",
    role: "Patient Communication & Humanistic Care",
    variant: "interview",
    relevantStakeholder:
      "Experienced in patient communication, helping us understand how to approach sensitive conversations with patients and their families.",
    challenge: "How can we engage patients without causing additional emotional distress?",
    keyInsight:
      "Sensitive topics should be discussed with respect for patients’ emotional boundaries, avoiding intrusive questions and allowing them to decline topics they do not wish to discuss.",
    whatChanged:
      "Before interviewing patients and their families, we adjusted our communication approach by using open, non-judgmental questions and incorporating humanistic care into our engagement principles.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3",
    detailedInterview: [
      "As CirCure gradually became more focused on patients with TNBC after surgery, we wanted to hear directly from patients and their families about recurrence, treatment burden, quality of life, and their expectations for a new adjuvant therapy.",
      "In our discussion with Runhui Tian, we were reminded that communication with patients should not be treated in the same way as an ordinary project interview. We therefore incorporated respect, emotional sensitivity, voluntary participation, and the right not to answer into our patient and family interviews.",
    ],
    detailedArticle: {
      title: "Before Asking Patients, We First Learned How to Listen",
      intro: [
        "As CirCure gradually became more focused on patients with TNBC after surgery, we wanted to hear directly from patients and their families about recurrence, treatment burden, quality of life, and their expectations for a new adjuvant therapy. However, these topics are closely connected to personal experiences of illness, treatment, uncertainty, and family pressure. Before beginning these conversations, we first asked an important question: how should we approach patients and their families without turning stakeholder engagement into another source of emotional burden?",
      ],
      sections: [
        {
          heading: "01 Not Every Question Needs to Be Asked",
          paragraphs: [
            "In our discussion with Runhui Tian, we were reminded that communication with patients should not be treated in the same way as an ordinary project interview. Questions about recurrence, prognosis, treatment side effects, financial pressure, and family responsibilities may bring patients back to difficult experiences. Even when such questions are relevant to our project, relevance alone does not justify repeatedly probing sensitive experiences.",
            "This prompted us to distinguish between information that would genuinely help us understand patient needs and questions that were merely interesting to us. We avoided unnecessarily detailed questions about painful experiences and did not pursue topics when interviewees showed hesitation or discomfort.",
          ],
        },
        {
          heading: "02 Give Patients Control Over the Conversation",
          paragraphs: [
            "Another important principle was to allow patients and family members to decide how much they wished to share. During later interviews, we used more open-ended and non-judgmental questions, avoided suggesting what the “right” answer should be, and made it clear that sensitive questions could be skipped.",
            "The goal was not to obtain the maximum amount of information, but to create a conversation in which participants could express what they considered important at their own pace.",
          ],
        },
        {
          heading: "03 What Changed | From “Collecting Feedback” to Respectful Engagement",
          paragraphs: [
            "This conversation changed the way we understood patient engagement. We initially focused mainly on what we wanted to learn from patients. Afterward, we also began asking how the process of asking might affect them.",
            "We therefore incorporated respect, emotional sensitivity, voluntary participation, and the right not to answer into our patient and family interviews. These principles subsequently guided our discussions about recurrence, quality of life, treatment burden, affordability, and family impact.",
            "For us, this became an important part of SDG 3: improving health and well-being is not only about designing better treatments, but also about ensuring that the people whose experiences inform our work are approached with dignity and care.",
          ],
        },
      ],
    },
  },
  {
    id: "03-family-caregivers",
    code: "03",
    name: "Family Caregivers",
    role: "Family Burden & Long-term Care",
    variant: "interview",
    relevantStakeholder:
      "作为患者治疗和康复过程中最直接的支持者，家属不仅了解患者治疗后的生活变化，也往往共同承担治疗费用、照护责任、工作调整以及疾病复发带来的长期心理压力。",
    challenge: "Who carries the hidden burdens behind a patient’s treatment?",
    keyInsight:
      "一种额外的术后治疗不仅改变患者个人的生活，也会通过照护时间、医疗支出、工作中断和家庭分工调整，直接影响整个家庭的运转与稳定。",
    whatChanged:
      "我们将对治疗负担的理解从个体患者扩展到家庭整体，把家庭经济承受能力、照护负担和心理支持纳入未来可及性与患者接受度的评价考量。",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 8 · SDG 10",
    detailedInterview: [
      "In cancer treatment, patients bear the physical burden, but the demands of long-term care and financial support fall heavily on families. For postoperative TNBC, a new adjuvant therapy would mean not just individual health considerations, but family decisions about treatment costs, time off work, and ongoing caregiving responsibilities.",
    ],
    detailedArticle: {
      title: "Caregivers Bear the Weight Behind the Patient",
      intro: [
        "In cancer care, patients bear the physical burden of disease, but family members often carry the financial, logistical, and emotional weight that surrounds it. For patients with TNBC who have completed surgery, considering an additional adjuvant therapy is not only an individual medical decision; it is a household decision that affects family finances, work schedules, and caregiving arrangements.",
      ],
      sections: [
        {
          heading: "01 The Entire Family Adjusts to the Illness",
          paragraphs: [
            "Family members described how cancer diagnosis and treatment reshape daily life for the whole household. Caregivers accompany patients to appointments, coordinate hospital visits, manage medications, and handle household responsibilities while trying to maintain emotional stability at home.",
          ],
        },
        {
          heading: "02 When Caregiving Replaces Work",
          paragraphs: [
            "Caregiving demands frequently require family members to reduce working hours, take unpaid leave, or leave employment entirely. The loss of a family caregiver’s income compounds the loss of the patient’s own earnings, creating dual economic pressure on the household.",
          ],
        },
        {
          heading: "03 The Financial Burden Is Shared by the Household",
          paragraphs: [
            "Beyond hospital bills, indirect costs such as transportation, specialized nutrition, and temporary accommodation near treatment centers deplete family reserves. When evaluating new therapeutic options, families must weigh expected survival benefits against the realistic risk of financial catastrophe.",
          ],
        },
        {
          heading: "04 Living with the Quiet Fear of Recurrence",
          paragraphs: [
            "Caregivers often internalize anxiety to avoid burdening the patient, living in continuous vigilance for signs of recurrence. An effective therapy that sustainably prevents recurrence would lift this chronic psychological distress from the entire family unit.",
          ],
        },
        {
          heading: "05 What Changed | Broadening Our View from the Patient to the Family",
          paragraphs: [
            "These interviews expanded our understanding of accessibility: evaluating a therapy’s value requires assessing family resilience and overall societal burden, directly linking SDG 3 with SDG 8 (Decent Work) and SDG 10 (Reduced Inequalities).",
          ],
        },
      ],
    },
  },
  {
    id: "04-wang-jianguo",
    code: "04",
    name: "王建国 (Jianguo Wang)",
    role: "Healthcare Payment & Reimbursement",
    variant: "interview",
    relevantStakeholder:
      "熟悉医保政策、医疗费用结算和报销机制，能够帮助我们理解治疗价格如何进一步转化为患者真实承担的费用。",
    challenge: "What treatment costs is not what patients pay: how does insurance coverage shape real access?",
    keyInsight:
      "一种新的治疗即使已经能够被使用，也不意味着能够同步获得充分医保支付。患者真正承担的费用还取决于医保覆盖范围、报销政策、支付条件以及个人自付比例。",
    whatChanged:
      "我们不再直接用“治疗价格”判断患者是否能够负担，而将重点转向医保支付后的实际自付费用。在 CirCure 的真实价格和医保覆盖情况尚不清楚之前，不能提前判断其具有良好的经济可及性。",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 10",
    detailedInterview: [
      "Treatment costs came up repeatedly in our patient interviews. Further discussion revealed that patients were often less concerned with a medicine’s listed price than with how much they would ultimately have to pay out of pocket after insurance reimbursement.",
      "The discussions clarified that a treatment can enter clinical use before it is covered by basic medical insurance. Coverage depends on further evaluation and policy processes. In the meantime, patients may have to pay a substantial share of the costs themselves.",
    ],
    detailedArticle: {
      title: "What Treatment Costs Is Not What Patients Pay",
      intro: [
        "Treatment costs came up repeatedly in our patient interviews. Further discussion revealed that patients were often less concerned with a medicine’s listed price than with how much they would ultimately have to pay out of pocket after insurance reimbursement. For patients with TNBC who have already undergone surgery and standard treatment, adding another adjuvant therapy could create expenses that directly influence whether they can take it up.",
      ],
      sections: [
        {
          heading: "01 Treatment Availability Does Not Guarantee Insurance Coverage",
          paragraphs: [
            "The discussions clarified that a treatment can enter clinical use before it is covered by basic medical insurance. Coverage depends on further evaluation and policy processes. In the meantime, patients may have to pay a substantial share of the costs themselves, even when the treatment is available.",
            "Nor does coverage result in the same financial burden for everyone: the amount patients pay depends on specific reimbursement policies, coverage conditions, and individual circumstances.",
          ],
        },
        {
          heading: "02 What Changed | Separating Price from Out-of-Pocket Burden",
          paragraphs: [
            "We therefore separated what we had broadly called “treatment costs” into two questions: How much does the treatment cost? And how much will the patient actually pay? The second is more directly relevant to whether patients can access it.",
          ],
        },
      ],
    },
  },
  {
    id: "05-jing-wen",
    code: "05",
    name: "文静 (Jing Wen)",
    role: "Commercial Health Insurance",
    variant: "interview",
    relevantStakeholder:
      "熟悉商业健康保险中的特药保障和医疗费用赔付机制，能够帮助我们了解基本医保之外，患者是否还存在其他分担治疗费用的可能。",
    challenge:
      "Who can actually benefit from commercial health insurance when coverage differs from patient to patient?",
    keyInsight:
      "商业健康保险可能通过特药保障等方式补充部分治疗费用，但这种保障具有明显的条件限制，取决于患者是否投保、产品责任范围、药物是否符合保障条件以及具体赔付规则，并不能覆盖所有患者。",
    whatChanged:
      "我们将商业保险定位为有条件的补充支付渠道，而不是普遍降低患者负担的基本方案。在可及性分析中，不能简单将“存在商业保险”视为已经解决费用问题。",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 10",
    detailedInterview: [
      "与医院医保管理人员交流后，我们已经认识到，患者真正承担的治疗费用并不等于治疗本身的价格。基本医保是否覆盖、能够报销多少，都会影响最终落到患者身上的自付负担。",
      "在此基础上，我们进一步与商业健康保险从业者文静进行了交流，了解商业健康保险中的特药保障和分担机制。",
    ],
    detailedArticle: {
      title: "保险行业访谈｜医保之外，还有哪些支付可能？",
      intro: [
        "与医院医保管理人员交流后，我们已经认识到，患者真正承担的治疗费用并不等于治疗本身的价格。基本医保是否覆盖、能够报销多少，都会影响最终落到患者身上的自付负担。在此基础上，我们进一步与商业健康保险从业者文静进行了交流，希望了解基本医保之外，商业保险能够在多大程度上为患者提供补充保障。",
      ],
      sections: [
        {
          heading: "01 商业保险可以补充，但并不是人人都有",
          paragraphs: [
            "文静提到，一些商业健康保险产品会设置特药保障等责任。在符合保险条款的情况下，部分创新药物的费用可以获得一定程度的支持。对于基本医保暂时无法充分覆盖的治疗，这类保障确实可能减轻部分患者的经济压力。但这种支持有很强的条件性。",
            "患者是否已经购买相应保险、所购买的产品是否包含相关责任、具体药物是否属于保障范围，以及最终是否符合赔付条件，都会影响实际能够获得多少支持。因此，商业保险可以作为基本医保之外的一种补充，但它并不是所有患者都能够自然获得的保障。",
          ],
        },
        {
          heading: "02 创新药落地需要更长的支付链条",
          paragraphs: [
            "对于一种处于早期研发阶段的疗法，商业保险通常无法在早期直接介入。保险产品对纳入保障的药物通常需要明确的上市许可、适应症范围、临床证据以及相对稳定的定价体系。这意味着，从实验室中的技术概念到商业保险能够分担费用，中间需要经历漫长的临床研究、监管审批和市场准入过程。",
          ],
        },
        {
          heading: "03 What Changed｜把商业保险理解为“有条件的补充”，而不是“普遍的解决办法”",
          paragraphs: [
            "这次交流帮助我们更加客观地看待商业保险在医疗可及性中的角色。我们不再把“有商业保险存在”简单等同于“费用问题可以解决”，而是认识到，商业保险是基本医保之外的一种有条件的补充支付渠道。它的覆盖范围受制于投保意愿、支付能力和产品设计，无法自动消除不同患者之间的经济差距。",
          ],
        },
      ],
    },
  },
  {
    id: "06-lei-wang",
    code: "06",
    name: "Lei Wang",
    role: "Healthcare Resources & Health Equity",
    variant: "interview",
    relevantStakeholder:
      "Experienced in healthcare services and resource allocation, helping us consider whether new treatment options can realistically reach different patients.",
    challenge: "Can a treatment truly benefit patients if access depends on available healthcare resources?",
    keyInsight:
      "Treatment access depends not only on efficacy and affordability, but also on healthcare capacity, service availability, and patients’ opportunities to receive care.",
    whatChanged:
      "We broadened our assessment of accessibility beyond pricing to include the distribution of healthcare resources, hospital capabilities, and regional disparities in patient access.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 10",
    detailedInterview: [
      "Treatment access depends not only on clinical efficacy and affordability, but also on healthcare infrastructure, delivery capacity, and regional resource distribution.",
    ],
  },
  {
    id: "07-yawen-liu",
    code: "07",
    name: "Yawen Liu",
    role: "Women’s Health & Disease Prevention",
    variant: "interview",
    relevantStakeholder:
      "Experienced in women’s health and disease prevention, offering a broader perspective beyond treatment alone.",
    challenge: "Can improving breast cancer outcomes rely on treatment alone?",
    keyInsight:
      "Long-term health outcomes are influenced not only by treatment, but also by appropriate screening and earlier disease detection.",
    whatChanged:
      "We connected our therapeutic focus with public health outreach, incorporating breast health education, routine screening, and early-stage awareness into our broader project engagement.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 4",
    detailedInterview: [
      "Long-term health outcomes are shaped not only by therapeutic intervention for advanced disease, but also by public awareness, early detection, and routine screening programs.",
    ],
  },
  {
    id: "08-lin-jia",
    code: "08",
    name: "Lin Jia",
    role: "Breast Cancer & Clinical Needs",
    variant: "interview",
    relevantStakeholder:
      "Experienced in breast cancer pathology and tumor biology, helping us examine whether our technical design addresses a clearly defined clinical need.",
    challenge: "What patient need should CirCure ultimately address?",
    keyInsight:
      "The value of a new technology should be judged by the specific clinical problem it aims to solve, rather than by novelty alone.",
    whatChanged:
      "We linked our technical choices—such as multi-epitope design and durable expression—directly to the biological characteristics and clinical needs of TNBC.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 9",
    detailedInterview: [
      "The technical design of an innovative therapy must be directly anchored in the pathological features and unmet clinical needs of the specific tumor type.",
    ],
  },
  {
    id: "09-jiuwei-cui",
    code: "09",
    name: "Jiuwei Cui",
    role: "Tumor Immunology",
    variant: "interview",
    relevantStakeholder:
      "Experienced in tumor immunology, helping us distinguish immune activation from meaningful antitumor function.",
    challenge: "Does immune activation alone demonstrate therapeutic value?",
    keyInsight:
      "An immune response is only one step; meaningful evaluation should further examine whether it produces functional antitumor effects while maintaining acceptable safety.",
    whatChanged:
      "We extended our experimental evaluation beyond initial immune markers to in vivo tumor challenge studies, while clearly identifying the evidence boundaries of current animal models.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 9",
    detailedInterview: [
      "Demonstrating initial biomarker elevation or immune activation is an essential milestone, but meaningful therapeutic evaluation requires verifying in vivo functional tumor suppression and safety boundaries.",
    ],
  },
  {
    id: "10-gang-zhao",
    code: "10",
    name: "Gang Zhao",
    role: "TNBC Clinical Management",
    variant: "interview",
    relevantStakeholder:
      "Experienced in breast cancer clinical management, providing a real-world perspective on how a new treatment would need to fit into existing care pathways.",
    challenge: "How could a new postoperative strategy fit into real TNBC clinical management?",
    keyInsight:
      "A new therapy cannot be considered in isolation; its target patients, timing, clinical purpose, and relationship with existing treatments and follow-up all need to be defined.",
    whatChanged:
      "We clarified CirCure’s proposed clinical setting as a postoperative adjuvant therapy for TNBC, positioning it as an additional strategy to reduce recurrence rather than an alternative to standard surgery.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3",
    detailedInterview: [
      "A new adjuvant therapy cannot be designed in an abstract clinical vacuum; it must integrate into established postoperative regimens, surgical timing, and surveillance protocols.",
    ],
  },
  {
    id: "11-global-youth",
    code: "11",
    name: "Global Youth in Health & Sustainable Development",
    role: "Youth in Global Health & Sustainability",
    variant: "interview",
    relevantStakeholder:
      "Young practitioners from different countries, professional backgrounds, and fields of practice. Their experiences across social contexts and sustainability issues helped us recognize broader connections between health, technology, education, equity, and social development.",
    challenge: "How can health innovation connect to broader global sustainability and equity?",
    keyInsight:
      "Health extends beyond disease treatment. Disease prevention, the application of technology, access to health services, and social equity all shape who ultimately benefits from improvements in health.",
    whatChanged:
      "The exchange broadened our view of CirCure beyond SDG 3 to include connections between health goals and technological innovation, disease prevention, access to health services, and social equity. This cross-SDG perspective helped lay the foundation for our subsequent use of SST-QN to systematically analyze synergies, trade-offs, and conditional relationships among SDGs.",
    currentStatus: "Incorporated",
    sdgAddressed: "SDG 3 · SDG 4 · SDG 9 · SDG 10 · SDG 17",
    detailedInterview: [
      "Participating in the Acceleration Week for Global Youth Development Programs in 2026 exposed our team to health and environmental practitioners worldwide.",
      "Health improvement is inseparable from education, technological fairness, and community infrastructure.",
    ],
    detailedArticle: {
      title: "Global Youth Perspectives: Connecting Health to Broader Sustainability",
      intro: [
        "During our participation in the UNICEF-organized Acceleration Week for Global Youth Development Programs in 2026, we joined the Health and Well-being thematic group. Engaging with international peers working across medicine, digital health, education, and social advocacy broadened our perspective on what healthcare technologies must achieve.",
      ],
      sections: [
        {
          heading: "01 Health Is Embedded in Social Systems",
          paragraphs: [
            "Discussions highlighted that biomedical breakthroughs can only generate lasting well-being when accompanied by education, robust public health infrastructure, and equitable delivery mechanisms.",
          ],
        },
        {
          heading: "02 What Changed | From Isolated Goals to an Interconnected System",
          paragraphs: [
            "This experience inspired our development of the SST-QN methodology to map systemic synergies and trade-offs rather than treating SDG 3 as an isolated achievement.",
          ],
        },
      ],
    },
  },
];

/* ----------------------------------------------------------------------------
 * Consequences (SDG 3)
 * -------------------------------------------------------------------------- */

export const consequencesSection = {
  leadQuestion:
    "CirCure remains a research-stage project. We therefore distinguish laboratory exploration from demonstrated clinical health outcomes.",
  overview:
    "For SDG 3, our analysis separates short-term changes already informed by stakeholder feedback from the potential long-term social, economic, and environmental impacts that could arise if the technology progresses toward use as an adjuvant therapy following surgery for TNBC.",
  shortTerm: {
    heading: "Short-Term Impacts",
    paragraphs: [
      "At this stage, the clearest impact of CirCure has been shaping how we define the patients we aim to serve, the outcomes that matter, and the way we engage with people affected by the disease—not demonstrating improved patient health outcomes.",
      "Clinicians helped us focus on patients with TNBC who have undergone surgery but remain at risk of recurrence or metastasis, and adopt the principle of prioritizing efficacy while optimizing safety. Patients and their families broadened our understanding of treatment value to include quality of life, treatment burden, and real-world access. Before speaking with patients, we also adapted our interview approach in response to communication guidance, with an emphasis on respecting personal boundaries and showing compassion.",
      "This input has shaped both our therapeutic priorities and our approach to stakeholder engagement.",
    ],
  },
  longTermIntro:
    "If CirCure progresses through further efficacy and safety testing and clinical validation toward use as an adjuvant therapy following surgery for TNBC, its impacts could extend beyond patient health. We examine these potential long-term impacts across social, economic, and environmental dimensions, distinguishing changes supported by current project evidence from outcomes that remain to be validated.",
  social: {
    title: "Social Impacts",
    benefit:
      "If CirCure effectively reduces recurrence and metastasis after surgery for TNBC, it could provide an additional adjuvant treatment option and improve long-term disease control and quality of life. Greater disease stability could help patients return to work and everyday activities, while reducing the disruption that uncertainty about recurrence brings to their own and their families’ long-term plans.",
    risk:
      "Additional adjuvant therapy may also involve ongoing treatment, side effects, and caregiving needs. If patients require prolonged family care or experience substantial disruption to work and daily life, these burdens could extend to family members. Regional differences in healthcare resources, ability to pay, and treatment opportunities could also lead to unequal access to potential benefits.",
    boundary:
      "Currently, no clinical evidence shows that CirCure reduces recurrence rates or improves disease-free survival, long-term survival, or patient quality of life. We also have no data demonstrating reduced family caregiving burdens or recurrence-related psychological stress. These remain potential long-term outcomes identified through patient and family needs; they cannot be inferred directly from our current in vitro experiments.",
  },
  economic: {
    title: "Economic Impacts",
    benefit:
      "If CirCure reduces recurrence and the need for further treatment, it could lower some patients’ medical expenses associated with repeat hospitalizations, subsequent treatment, and long-term disease management. It could also ease indirect family burdens arising from ongoing care and interruptions to work.",
    risk:
      "Adding CirCure to postoperative treatment would incur additional costs. Patients’ eventual out-of-pocket costs would depend on pricing, basic medical insurance coverage, supplementary coverage, and their ability to pay out of pocket. Prolonged treatment, inability to work, or a need for ongoing family care could also increase indirect burdens through lost income, caregiving, and time commitments.",
    boundary:
      "There is currently no clinical or pharmacoeconomic evidence that any reduction in recurrence achieved with CirCure would offset the additional treatment and family burdens. Its long-term economic impacts require validation of future real-world data.",
  },
  environmental: {
    title: "Environmental Impacts",
    benefit:
      "More stable production processes and fewer unnecessary repeat production runs could reduce some resource waste in the future.",
    risk:
      "Large-scale RNA preparation, production consumables, storage, transport, and subsequent use could create additional resource and energy demands.",
    boundary:
      "CirCure has not entered large-scale production, and we do not yet have actual production or life cycle data to assess its overall environmental impact. To explore this question, we consulted companies working in carbon emissions management and accounting. These discussions highlighted the need to look beyond direct laboratory consumption to raw materials, large-scale production, packaging, storage, transport, and waste management. This broader life cycle perspective helps identify potential sources of resource consumption and carbon emissions. We examine resource responsibility and the environmental impacts of production in detail under SDG 12, rather than duplicating that analysis under SDG 3.",
  },
};

/* ----------------------------------------------------------------------------
 * Alignment (SDG 3)
 * -------------------------------------------------------------------------- */

export const sdg3Alignment: ReadonlyArray<string> = [
  "Using the potential relationships identified through SST-QN as a starting point, we examined CirCure’s project design, stakeholder feedback, experimental results, and actions undertaken to assess whether these relationships occur within the project and the extent to which they are supported by current evidence.",
  "SDG 3 ↔ SDG 9 and SDG 3 → SDG 4 currently have the clearest evidence supporting their classification as Positive Core Interactions. The former is reflected in our project positioning, technical design, and functional experimental validation to date. The latter is supported by educational activities on breast health, screening, and early detection developed directly in response to women’s health needs.",
  "The directions of SDG 3 ↔ SDG 10 and SDG 3 ↔ SDG 12 depend on future implementation conditions. For SDG 10, the relationship hinges on whether pricing, insurance coverage, and healthcare resources allow different patients to access treatment. For SDG 12, the analysis must consider both expanded access to healthcare and the additional resources required for production. Both relationships therefore remain Conditional (±); we do not assume in advance that either will result in synergy or a trade-off.",
  "For SDG 17 → SDG 3, current evidence supports the role of participation by multiple stakeholders in improving problem identification and project decisions. These process improvements, however, do not yet establish benefits for patient health outcomes. We therefore retain the Exploratory (E) classification.",
  "For SDG 3 → SDG 5, we retain Excluded (0). CirCure addresses women’s health, but we currently lack direct evidence of an impact on gender equality at a structural level. Our focus on women’s health alone does not establish such an impact.",
];

/* ----------------------------------------------------------------------------
 * Legacy (SDG 3)
 * -------------------------------------------------------------------------- */

export const sdg3LegacyIntro: ReadonlyArray<string> = [
  "Through our work on SDG 3, we developed both a record of stakeholder interviews and a practical process for identifying real-world health needs, engaging stakeholders in discussions, translating their feedback into project decisions, and incorporating those decisions into SDG analysis. To help future iGEM teams build on this experience, we distilled the broadly applicable practices into reusable guides, recording forms, and analysis templates.",
];

export interface LegacyToolPdf {
  label: string;
  fileName: string;
}

export interface LegacyTool {
  title: string;
  description: string;
  why?: string;
  whatItHelpsWith?: string;
  bestFor?: string;
  pdfs: ReadonlyArray<LegacyToolPdf>;
}

export const sdg3LegacyTools: ReadonlyArray<LegacyTool> = [
  {
    title: "Stakeholder Interview Guide",
    description: "不同利益相关者能够回答的问题并不相同，访谈需要根据其角色进行调整。",
    why: "不同利益相关者能够回答的问题并不相同，访谈需要根据其角色进行调整。",
    whatItHelpsWith: "帮助团队确定问谁、问什么、如何追问，以及哪些判断需要进一步交叉验证。",
    bestFor:
      "Interviews involving patients, clinicians, public-health professionals, payment-related stakeholders, and other groups where role-specific or sensitive communication is important.",
    pdfs: [
      { label: "中文", fileName: "sustainability-stakeholder-interview-guide-cn.pdf" },
      { label: "English", fileName: "sustainability-stakeholder-interview-guide-en.pdf" },
    ],
  },
  {
    title: "Stakeholder–SDG Mapping Guide",
    description: "同一条反馈往往可能同时涉及多个 SDGs，单纯按照 stakeholder 身份分类容易造成重复或错配。",
    why: "同一条反馈往往可能同时涉及多个 SDGs，单纯按照 stakeholder 身份分类容易造成重复或错配。",
    whatItHelpsWith: "识别每条反馈的 Primary SDG、Related SDGs 和关联依据。",
    bestFor: "整理大量 stakeholder feedback，并为后续 Alignment 和跨 SDG 分析建立清晰基础。",
    pdfs: [
      { label: "中文", fileName: "sustainability-stakeholder-sdg-mapping-guide-cn.pdf" },
      { label: "English", fileName: "sustainability-stakeholder-sdg-mapping-guide-en.pdf" },
    ],
  },
  {
    title: "Feedback-to-Action Record",
    description: "“采访了谁”并不能证明 stakeholder engagement 真正影响了项目。",
    why: "“采访了谁”并不能证明 stakeholder engagement 真正影响了项目。",
    whatItHelpsWith: "记录每条重要反馈的处理结果、What Changed 和最终决策依据。",
    bestFor: "展示 stakeholder feedback 如何真正转化为项目设计、评价或传播中的改变。",
    pdfs: [
      { label: "中文", fileName: "sustainability-feedback-to-action-record-cn.pdf" },
      { label: "English", fileName: "sustainability-feedback-to-action-record-en.pdf" },
    ],
  },
  {
    title: "SDG Impact Documentation Template",
    description: "研发阶段的项目容易把“未来可能发生的影响”写成“已经实现的成果”。",
    why: "研发阶段的项目容易把“未来可能发生的影响”写成“已经实现的成果”。",
    whatItHelpsWith: "区分当前已有证据支持的改变、条件性影响和仍需未来验证的结果。",
    bestFor: "整理 Consequences、Evidence 和 Sustainability 总结，并控制表述边界。",
    pdfs: [
      { label: "中文", fileName: "sustainability-sdg-impact-documentation-template-cn.pdf" },
      { label: "English", fileName: "sustainability-sdg-impact-documentation-template-en.pdf" },
    ],
  },
];

/* ----------------------------------------------------------------------------
 * Evidence (SDG 3)
 * -------------------------------------------------------------------------- */

export interface SustainabilityStat {
  id: string;
  value: number;
  labelZh: string;
  labelEn: string;
  unit?: string;
  color?: SustainabilityColorBinding;
  kicker?: string;
}

export const sdg3EvidenceIntro: ReadonlyArray<string> = [
  "CirCure 对 SDG 3 的回应主要体现在患者需求、项目改进、实验验证和经验留存四个方面。",
];

export const sdg3EvidenceStats: ReadonlyArray<SustainabilityStat> = [
  { id: "stakeholders", value: 49, labelZh: "5大类利益相关者", labelEn: "Stakeholders across 5 groups" },
  { id: "improvements", value: 8, labelZh: "项可追溯改进", labelEn: "Traceable Project Improvements" },
  { id: "dc-maturation", value: 22, unit: "%", labelZh: "树突细胞成熟率", labelEn: "DC Maturation (CD80+CD86+)" },
  { id: "tumor-suppression", value: 89, unit: "%", labelZh: "终点肿瘤体积缩减", labelEn: "Endpoint Tumor Volume Reduction" },
];

export const sdg3EvidenceExtra: ReadonlyArray<string> = [
  "Measurable Outcomes:",
  "1. Engaged 49 stakeholders across five groups: patients, family caregivers, clinical and medical professionals, healthcare payer representatives, and sustainability practitioners.",
  "2. Translated stakeholder feedback into eight traceable project improvements, linking stakeholder input to documented changes.",
  "3. In vitro flow cytometry showed that CirCure increased the proportion of mature dendritic cells (CD80⁺CD86⁺) from 10.33 ± 0.55% in the empty circRNA-electroporated DC control to 22.37 ± 0.31%, alongside increases in the proportions of activated and effector memory CD8⁺ T cells.",
  "4. In vivo flow cytometry showed higher proportions of IFN-γ⁺CD8⁺ and GzmB⁺CD8⁺ cells in splenocytes from the vaccine group than in the PBS and empty-vector control groups. Because the epitopes are HLA-A*02:01-restricted, whereas the experiments used wild-type BALB/c mice, these findings serve as platform proof of concept.",
  "5. In the tumor growth study, endpoint tumor volume in the CirCure group was 89.6% lower than in the PBS group and 73.2% lower than in the empty circRNA-LNP group (n = 5 per group; Holm correction for multiple comparisons).",
  "6. Developed four reusable tools, each available in Chinese and English, totaling eight files, covering stakeholder interviews, SDG mapping, feedback-to-action tracking, and impact documentation to support reuse by other teams.",
  "Significant Contributions:",
  "CirCure’s contribution to SDG 3 is meaningful because the needs of patients and families have shaped both our research direction and how we assess therapeutic value. Stakeholder feedback led to eight traceable project improvements, bringing those needs into concrete research decisions.",
  "Clinical input focused the project on postoperative adjuvant therapy for TNBC, with reducing recurrence and metastasis and achieving lasting benefit as goals for future investigation. Patients and caregivers also highlighted how additional treatment could affect work, caregiving, and household finances. We therefore incorporated quality of life and access into our assessment, asking whether a potential treatment could help patients plan their lives again—and whether its benefits would justify the burdens they and their families would bear.",
  "Our experimental findings provide an initial basis for pursuing this strategy. Dendritic-cell maturation, CD8⁺ T-cell responses, and reduced tumor growth in the tested model support further investigation at different levels. However, the mismatch between HLA-restricted epitopes and wild-type mice limits interpretation. These findings do not yet demonstrate reduced postoperative recurrence or improved survival in patients.",
  "Finally, four bilingual tools make our approach to patient interviews, needs mapping, feedback integration, and impact documentation available for reuse, helping other teams keep patients’ voices central to their research. CirCure’s current contribution is a patient-informed research foundation, supported by preliminary experiments and methods others can build upon. Whether this foundation can lead to affordable, accessible health benefits remains to be established.",
];

/* ----------------------------------------------------------------------------
 * Stakeholder Sustainability Tracker
 * -------------------------------------------------------------------------- */

export const stakeholderSustainabilityTracker = {
  title: "Stakeholder Sustainability Tracker",
  paragraphs: [
    "As CirCure progressed, we accumulated stakeholder feedback, team responses, implementation outcomes, and supporting evidence. We developed the Stakeholder Sustainability Tracker to organize this information in one place and make stakeholder engagement easier to update and review over time. The tool records stakeholder information, key feedback, project responses, implementation status, relevant SDGs, and supporting evidence. To help other iGEM teams use it directly, we provide a blank version containing no CirCure project data. Click here to view and download the template, then build and maintain stakeholder records tailored to your project.",
    "We also share the actual records compiled throughout CirCure’s development to demonstrate the tool’s use in practice. These records show how we documented stakeholder feedback, our responses, and implementation outcomes over time. The Tracker’s Chinese–English language switch changes the interface only; it does not automatically translate user-entered content. We therefore provide corresponding Chinese and English versions of the records so readers can review the full content in either language. An accompanying User Manual, also available in Chinese and English, explains the basic functions, field completion, and use of the tool to help other teams get started.",
    "To assess the Tracker’s usability and analytical value in real projects, we invited an iGEM team and a teacher experienced in project sustainability analysis to try the tool and provide feedback.",
  ],
};

/* ----------------------------------------------------------------------------
 * Backward-compatibility helpers & types
 * -------------------------------------------------------------------------- */

export interface SdgScaleContent {
  sectionId: string;
  index: string;
  kicker: string;
  navLabel: string;
  title: string;
  summary: string;
  intro: ReadonlyArray<string>;
  stakeholderIntro?: ReadonlyArray<string>;
  stakeholders?: ReadonlyArray<StakeholderProfile>;
  stakeholderOutro?: ReadonlyArray<string>;
  expertIntro?: ReadonlyArray<string>;
  experts?: ReadonlyArray<ExpertFeedback>;
  consequencesLead?: ReadonlyArray<string>;
  consequences?: ReadonlyArray<ConsequenceDimension>;
  consequencesExtra?: ReadonlyArray<string>;
  consequencesFigureKey?: string;
  alignment?: ReadonlyArray<string>;
  legacyIntro?: ReadonlyArray<string>;
  legacyTools?: ReadonlyArray<LegacyTool>;
  evidenceIntro?: ReadonlyArray<string>;
  evidenceStats?: ReadonlyArray<SustainabilityStat>;
  evidenceExtra?: ReadonlyArray<string>;
  evidenceFigureKey?: string;
}

export type ConsequenceDimensionId = "social" | "economic" | "environmental";

export interface ConsequenceDimension {
  id: ConsequenceDimensionId;
  title: string;
  description: string;
  color: SustainabilityColorBinding;
  icon?: string;
}

export const consequencesDimensions: ReadonlyArray<ConsequenceDimension> = [
  {
    id: "social",
    title: "社会维度 · Social",
    description:
      "如果能有效降低复发和转移风险，将为患者带来更长期的生存获益与生活质量改善；但需防范医疗资源分布不均带来的健康不平等。",
    color: { token: "--semantic-success", hex: "#2f6f68" },
  },
  {
    id: "economic",
    title: "经济维度 · Economic",
    description:
      "避免复发可显著减少后续高昂医疗支出与家庭间接负担；但需权衡额外治疗费用对患者经济承受能力的现实压力。",
    color: { token: "--accent-coral", hex: "#d95f38" },
  },
  {
    id: "environmental",
    title: "环境维度 · Environmental",
    description:
      "实验室试剂消耗与医疗废弃物需严格合规处理；未来规模化生产需进一步通过生命周期评估（LCA）追踪环境足迹。",
    color: { token: "--accent-gold", hex: "#c39a55" },
  },
];

export interface ExpertFeedback {
  id: string;
  expertName?: string;
  expertTitle?: string;
  name?: string;
  title?: string;
  domain?: string;
  suggestion?: string;
  improvement?: string;
  sdgMapping?: string;
  quote?: string;
  response?: string;
}

export const expertFeedbacks: ReadonlyArray<ExpertFeedback> = [
  {
    id: "wei-yuhang",
    name: "魏宇航",
    title: "副院长",
    domain: "公共健康与医疗资源分配",
    suggestion:
      "新的肿瘤治疗策略不仅要关注疗效，也应考虑不同患者获得治疗的机会。",
    improvement:
      "在项目可持续性分析中加入医疗可及性和健康公平相关内容，关注CirCure未来对SDG 10的影响。",
    sdgMapping: "SDG 3 → SDG 10",
  },
  {
    id: "liu-yawen",
    name: "刘雅文",
    title: "副院长",
    domain: "女性健康与疾病防治",
    suggestion:
      "乳腺癌防治不仅依赖治疗技术，也需要提高女性主动体检、定期筛查和早期发现的意识。",
    improvement:
      "在关注TNBC治疗的同时，将乳腺健康科普和体检筛查意识纳入项目的公众教育内容。",
    sdgMapping: "SDG 3（扩展）",
  },
  {
    id: "jia-lin",
    name: "贾琳",
    title: "老师",
    domain: "乳腺癌临床特点",
    suggestion:
      "项目设计应从TNBC目前真实存在的治疗需求出发，而不能只关注技术本身的创新性。",
    improvement:
      "进一步梳理TNBC现有治疗中的不足，将临床需求和患者实际获益作为CirCure治疗策略设计与评价的重要依据。",
    sdgMapping: "SDG 3",
  },
  {
    id: "cui-jiuwei",
    name: "崔久嵬",
    title: "老师",
    domain: "肿瘤免疫治疗",
    suggestion:
      "更加关注免疫治疗策略本身的有效性、安全性以及未来临床应用的可行性。",
    improvement:
      "进一步完善CirCure的免疫治疗设计思路，在项目评价中增加安全性、临床转化和负责任应用等方面的考虑。",
    sdgMapping: "SDG 3 + SDG 9",
  },
  {
    id: "fan-zhimin",
    name: "范志民",
    title: "老师",
    domain: "乳腺癌临床治疗路径",
    suggestion:
      "新型治疗方式最终需要能够真正改善患者的治疗结果，并考虑其与现有治疗方案之间的衔接。",
    improvement:
      "进一步将患者获益和临床应用场景纳入CirCure的设计与长期价值评估中。",
    sdgMapping: "SDG 3 + SDG 9",
  },
];

export interface FrameworkLayer {
  key: string;
  label: string;
  title: string;
  description: string;
}

export const frameworkLayers: ReadonlyArray<FrameworkLayer> = [
  {
    key: "set",
    label: "SET",
    title: "Addressing Core Challenges",
    description: "Focuses on core SDGs (SDG 3, SDG 9, SDG 12) directly addressed by CirCure.",
  },
  {
    key: "develop",
    label: "DEVELOP",
    title: "Extending Multidimensional Impact",
    description: "Broader impacts and connections with additional SDGs as R&D, translation, and societal engagement progress.",
  },
  {
    key: "grow",
    label: "GROW",
    title: "Long-term Systemic Value",
    description: "SDGs that CirCure could further advance through long-term clinical translation and scale.",
  },
];

export interface SstqnCategory {
  key: string;
  code: string;
  label: string;
  summary: string;
}

export const sstqnCategories: ReadonlyArray<SstqnCategory> = [
  { key: "core", code: "C", label: "Core", summary: "Direct relationships with relatively clear support" },
  { key: "exploratory", code: "E", label: "Exploratory", summary: "Plausible mechanisms but limited evidence" },
  { key: "conditional", code: "±", label: "Conditional", summary: "Effects depend on specific implementation conditions" },
  { key: "excluded", code: "0", label: "Excluded", summary: "Currently lack sufficient support" },
];

export interface SstqnScoringStep {
  id: string;
  label: string;
  description: string;
  role: "input" | "calibration" | "output";
}

export const sstqnScoringSteps: ReadonlyArray<SstqnScoringStep> = [
  { id: "mech", label: "机制清晰度", description: "作用通路与因果机制的清晰程度", role: "input" },
  { id: "rep", label: "跨情境重复性", description: "在不同人群、环境或研究中的可重复性", role: "input" },
  { id: "causal", label: "因果证据", description: "前瞻性队列或实验验证的因果支撑强度", role: "input" },
  { id: "compat", label: "数据兼容性", description: "多源数据与指标体系的标准兼容程度", role: "input" },
  { id: "cal", label: "证据校准层", description: "综合多维输入进行加权评分与不确定性调整", role: "calibration" },
  { id: "out", label: "定向相互作用评分 [−1, 1]", description: "正值表示协同，负值表示权衡", role: "output" },
];

export type CoreProblemId = "limited-treatment" | "long-term-control" | "accessibility";

export interface CoreProblem {
  id: CoreProblemId;
  titleZh: string;
  titleEn: string;
  description: string;
}

export const coreProblems: ReadonlyArray<CoreProblem> = [
  {
    id: "limited-treatment",
    titleZh: "有效治疗选择仍然有限",
    titleEn: "Limited effective treatment options",
    description:
      "不同阶段患者面临不同治疗需求：术后患者需要进一步降低复发风险，而晚期及后线患者仍需要更有效的疾病控制和新的治疗选择。",
  },
  {
    id: "long-term-control",
    titleZh: "长期疾病控制仍面临挑战",
    titleEn: "Challenges in long-term disease control",
    description:
      "疗效不仅意味着短期肿瘤控制，更需要转化为降低复发和转移风险、延长生存时间等长期获益。",
  },
  {
    id: "accessibility",
    titleZh: "治疗负担与可及性制约获益范围",
    titleEn: "Treatment burden and accessibility limits",
    description:
      "治疗费用、身体耐受性以及对新技术的信任程度，共同决定了创新方案能否真正被患者接受并长期获益。",
  },
];

export type PatientChatId = "A" | "B" | "C" | "D";
export type PatientChatSide = "left" | "right";

export interface PatientChatMessage {
  patientId: PatientChatId;
  side: PatientChatSide;
  text: string;
}

export const patientChatMessages: ReadonlyArray<PatientChatMessage> = [
  { patientId: "A", side: "left", text: "听到复发这两个字，心里还是会咯噔一下。" },
  { patientId: "A", side: "left", text: "做完手术以后，就总担心它会不会再长出来。" },
  { patientId: "B", side: "right", text: "只要能有效预防复发，多吃点苦我也愿意。" },
  { patientId: "B", side: "right", text: "关键是要能让人放心地活下去，副作用稍微大一点也能忍受。" },
  { patientId: "C", side: "left", text: "现在这个治疗太贵了，家里已经花了不少钱。" },
  { patientId: "C", side: "left", text: "要是以后有新药，希望医保能报销一部分，普通老百姓才能用得起。" },
  { patientId: "D", side: "right", text: "除了效果好不好，还希望能少往医院跑，多陪陪家里人。" },
  { patientId: "D", side: "right", text: "身体好一点，生活恢复正常，比什么都强。" },
];

export type ScaleElementKey = "S" | "C" | "A" | "L" | "E";

export interface ScaleElement {
  key: ScaleElementKey;
  word: string;
  fullTitleEn: string;
  fullTitleZh: string;
  leadEn: string;
  leadZh: string;
}

export const scaleElements: ReadonlyArray<ScaleElement> = [
  {
    key: "S",
    word: "Stakeholder-driven Insights",
    fullTitleEn: "Stakeholder-driven Insights",
    fullTitleZh: "利益相关者驱动的问题识别",
    leadEn: "Identify Challenges and incorporate feedback from stakeholders.",
    leadZh: "广泛听取利益相关者反馈，明确需要回应的核心问题。",
  },
  {
    key: "C",
    word: "Consequences",
    fullTitleEn: "Consequences",
    fullTitleZh: "多维影响与权衡分析",
    leadEn: "Assess long-term social, economic, and environmental impacts.",
    leadZh: "全面审视研发、转化与应用过程中的潜在社会、经济与环境影响。",
  },
  {
    key: "A",
    word: "Alignment",
    fullTitleEn: "Alignment",
    fullTitleZh: "跨目标协同与证据校准",
    leadEn: "Analyze synergies and trade-offs with other SDGs.",
    leadZh: "结合项目实践与 SST-QN，分析跨 SDG 协同、权衡及实现条件。",
  },
  {
    key: "L",
    word: "Legacy",
    fullTitleEn: "Legacy",
    fullTitleZh: "可复用方法与工具沉淀",
    leadEn: "Leave reusable methods and documentation.",
    leadZh: "沉淀可供后续 iGEM 团队直接借鉴的方法、指南与规范。",
  },
  {
    key: "E",
    word: "Evidence",
    fullTitleEn: "Evidence",
    fullTitleZh: "证据闭环与影响归因",
    leadEn: "Use data to demonstrate SDG impact.",
    leadZh: "以客观实验数据、定量指标与真实反馈，对项目贡献进行合理归因。",
  },
];

export interface SSTQNClassificationCard {
  status: "C" | "E" | "±" | "0";
  titleEn: string;
  titleZh: string;
  definition: string;
  example: string;
}

export const sstqnClassificationCards: ReadonlyArray<SSTQNClassificationCard> = [
  {
    status: "C",
    titleEn: "Core direct edge",
    titleZh: "核心直接作用",
    definition: "具有明确的直接因果或功能传导机制，且已有强有力学术文献或统计证据支持。",
    example: "例如 SDG 3 (健康) 与 SDG 9 (创新) 之间的直接协同。",
  },
  {
    status: "E",
    titleEn: "Exploratory direct edge",
    titleZh: "探索性直接作用",
    definition: "存在合理的作用机制推论，但目前仅有有限、小样本或间接证据支持。",
    example: "例如早期转化研发对宏观产业基础设施的初步拉动。",
  },
  {
    status: "±",
    titleEn: "Conditional sign-switching edge",
    titleZh: "条件敏感型作用",
    definition: "作用方向或强度高度依赖于实施路径、制度安排或环境约束，可能表现为协同或权衡。",
    example: "例如技术升级在不同定价与医保政策下可能改善或加剧健康不平等。",
  },
  {
    status: "0",
    titleEn: "Excluded direct edge",
    titleZh: "排除直接作用",
    definition: "当前机制推论与证据基础均不足以支持直接作用，仅可能存在弱间接影响。",
    example: "例如无直接关联的环境目标与特定疾病治疗之间的直接连接。",
  },
];

export interface SSTQNScoreStep {
  step: number;
  label: string;
  description: string;
}

export const sstqnScoreSteps: ReadonlyArray<SSTQNScoreStep> = [
  { step: 1, label: "确定关系状态 (Status)", description: "基于机制与证据，将每条直接边归入 C / E / ± / 0 四类之一。" },
  { step: 2, label: "计算证据校准得分 (Score)", description: "综合基础得分、证据强度系数与可靠性校准，得到 -1 至 +1 的定向影响得分。" },
  { step: 3, label: "追踪传播与间接效应", description: "在矩阵基础上分析间接传导、时间滞后及反馈循环，识别隐性权衡。" },
];

export const sustainabilityStats: ReadonlyArray<SustainabilityStat> = [
  { id: "stakeholders", value: 94, labelZh: "利益相关者", labelEn: "Stakeholders Engaged" },
  { id: "fields", value: 7, labelZh: "涉及领域", labelEn: "Professional Fields" },
  { id: "tools", value: 26, labelZh: "可复用方法与工具", labelEn: "Reusable Tools Formed" },
  { id: "core-sdgs", value: 3, labelZh: "核心关注目标", labelEn: "Core SET Goals" },
];

/* ----------------------------------------------------------------------------
 * Table of Contents Anchors (Overview up to SD3)
 * -------------------------------------------------------------------------- */

export const sustainabilityAnchors: ReadonlyArray<SustainabilityAnchor> = [
  { id: "overview", label: "Overview", level: 2, status: "existing" },
  {
    id: "sst-qn",
    label: "SST-QN — SDG Synergy–Trade-off Quantification Network",
    level: 2,
    status: "existing",
  },
  {
    id: "sdg-impact-framework",
    label: "SET–Develop–Grow Impact Framework",
    level: 2,
    status: "existing",
  },
  {
    id: "set-core-challenges",
    label: "SET — Addressing Core Challenges",
    level: 2,
    status: "existing",
  },
  {
    id: "sdg3-health",
    label: "SDG 3 — Good Health and Well-being",
    level: 3,
    status: "existing",
  },
  { id: "sdg3-stakeholder", label: "S — Stakeholder Insights", level: 4, status: "existing" },
  { id: "sdg3-consequences", label: "C — Consequences", level: 4, status: "existing" },
  { id: "sdg3-alignment", label: "A — Alignment", level: 4, status: "existing" },
  { id: "sdg3-legacy", label: "L — Legacy", level: 4, status: "existing" },
  { id: "sdg3-evidence", label: "E — Evidence", level: 4, status: "existing" },
  {
    id: "stakeholder-sustainability-tracker",
    label: "Stakeholder Sustainability Tracker",
    level: 3,
    status: "existing",
  },
];
