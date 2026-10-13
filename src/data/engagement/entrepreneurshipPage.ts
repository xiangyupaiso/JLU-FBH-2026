import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export type EntrepreneurshipOrbitTone =
  | "peach"
  | "sage"
  | "sky"
  | "lavender"
  | "rose"
  | "yellow"
  | "lime"
  | "slate"
  | "mauve";

export interface EntrepreneurshipOrbitTopic {
  id: string;
  label: string[];
  title: string;
  body: string;
  tone: EntrepreneurshipOrbitTone;
  group?: "Direct impacts" | "Indirect impacts";
}

export const entrepreneurshipConcerns: EntrepreneurshipOrbitTopic[] = [
  {
    id: "safety",
    label: ["Safety"],
    title: "Safety Concerns",
    body: "Multi-epitope design may lead to unintended immune responses and cross-reactivity with normal tissues, while the long-term safety of circRNA and its delivery system still requires thorough validation. We will assess normal tissue expression for each candidate antigen and exclude candidates with unacceptable risks through progressively staged in vitro studies, animal studies, and subsequent safety studies conducted according to applicable standards. Where necessary, we will modify or remove the relevant epitopes.",
    tone: "peach",
  },
  {
    id: "patient-access",
    label: ["Patient", "Access"],
    title: "Patient Access Concerns",
    body: "CirCure requires patient screening based on residual disease, TAA expression, and HLA criteria. This may increase the burden of testing, return visits, and follow-up, and may also prevent some patients from qualifying because of screening criteria or limitations in healthcare resources. We will track actual patient attrition during screening along real-world care pathways and continually optimize testing and follow-up procedures, ensuring that patient burden and accessibility are considered alongside technical performance in product decisions.",
    tone: "sage",
  },
  {
    id: "data-privacy",
    label: ["Data", "Privacy"],
    title: "Privacy and Data Concerns",
    body: "Patient screening and subsequent research may involve sensitive medical information, including pathology findings, antigen expression, and HLA data. Improper use of these data could pose privacy risks. We will adhere to the principles of compliant data collection and data minimization, use only de-identified information authorized for use in external communications and industry reviews, and incorporate privacy protection into subsequent data management and collaboration processes.",
    tone: "sky",
  },
  {
    id: "manufacturing-qc",
    label: ["Manufacturing", "& QC"],
    title: "Manufacturing and Quality Control Concerns",
    body: "Although integrating multiple epitopes into a single circRNA offers design potential, it also increases complexity in construction, antigen processing and presentation, analytical methods, and batch-to-batch consistency. We will assess whether the gains in coverage justify the added complexity and engage RNA process specialists, CROs/CDMOs, and specialized laboratories to validate manufacturing, quality, and scale-up. If the complexity does not deliver corresponding value, we will simplify the candidate’s configuration.",
    tone: "lavender",
  },
  {
    id: "clinical-trust",
    label: ["Clinical", "Trust"],
    title: "Clinical Acceptance and Trust Concerns",
    body: "As a therapeutic vaccine candidate still in early development, CirCure must address clinicians’ and patients’ cautious assessments of its safety, efficacy, and relationship to existing standard treatment. We will not position it as a replacement for standard treatment. Instead, through transparent data, clearly defined patient selection criteria, and ongoing clinical dialogue, we will ensure that its future role in clinical care is grounded in evidence rather than promotion.",
    tone: "rose",
  },
];

export const entrepreneurshipImpacts: EntrepreneurshipOrbitTopic[] = [
  {
    id: "treatment-options",
    label: [],
    group: "Direct impacts",
    title: "Expanding Treatment Options for Patients with High-Risk TNBC",
    body: "Further treatment options remain important for patients with TNBC who have residual invasive disease after completing neoadjuvant therapy and surgery and are at high risk of recurrence. If CirCure is ultimately validated through sufficient evidence, it could offer a potential add-on treatment option alongside standard treatment for patients who meet the TAA/HLA criteria. However, we will not draw conclusions about reduced recurrence or improved survival until reliable evidence of safety and clinical efficacy is available.",
    tone: "yellow",
  },
  {
    id: "patient-matching",
    label: [],
    group: "Direct impacts",
    title: "Improving the Match Between Patients and Treatment",
    body: "Patients with TNBC differ in antigen expression and HLA profiles, so a single vaccine candidate is not inherently suitable for all patients. CirCure incorporates clinical risk, TAA expression, and HLA matching into patient screening, aiming to define more clearly which patients the vaccine candidate is suitable for. Its actual patient coverage and the value of this matching approach still require validation through further research.",
    tone: "lime",
  },
  {
    id: "vaccine-development",
    label: [],
    group: "Indirect impacts",
    title:
      "Advancing Therapeutic Vaccine Development Guided by Patient Stratification",
    body: "CirCure integrates clinical risk stratification, TAA/HLA matching, and multi-epitope circRNA design into a single development pathway, ensuring that vaccine design considers not only “what to construct” but also, at an earlier stage, “whom to construct it for.” If further validated, this framework could provide new experience to inform the development of therapeutic RNA vaccines guided by patient stratification.",
    tone: "slate",
  },
  {
    id: "collaboration",
    label: [],
    group: "Indirect impacts",
    title:
      "Promoting Collaboration Across Clinical Practice, Research, and Industry",
    body: "Bringing therapeutic vaccines from early research into practical use requires participation from clinicians, researchers, manufacturers, and industry partners. Throughout development, CirCure continually incorporates feedback from clinicians and industry partners, connecting patient needs, research design, and subsequent translation at an earlier stage. This also establishes a foundation for future collaborative validation and further development.",
    tone: "mauve",
  },
];

export interface GoldenCircleTopic {
  id: "why" | "what" | "how";
  title: string;
  subtitle?: string;
  lead: string;
  body: string;
  tone: "lavender" | "rose" | "yellow";
}

export const goldenCircleTopics: GoldenCircleTopic[] = [
  {
    id: "why",
    title: "WHY",
    lead: "TNBC lacks specific targeted therapies and often has a poor prognosis.",
    body: "Current cancer vaccines may face limited epitope coverage, tumor antigen escape, and delivery challenges.",
    tone: "lavender",
  },
  {
    id: "what",
    title: "WHAT",
    lead: "CirCure is a prototype multi-epitope circRNA therapeutic vaccine for TNBC.",
    body: "It includes an epitope-screening computational tool, a multi-epitope circRNA recombinant plasmid, in vitro validation data, preliminary mouse-study results, and a commercialization and regulatory feasibility assessment.",
    tone: "rose",
  },
  {
    id: "how",
    title: "HOW",
    lead: "We broaden tumor immune recognition by developing a multi-epitope circRNA vaccine.",
    body: "We screen HLA-matched tumor antigen epitopes, design and validate a circular RNA expression construct, evaluate immunogenicity and antitumor effects in cells and animal models, and assess regulatory, CMC, and IP feasibility for future preclinical translation.",
    tone: "yellow",
  },
];

export interface Stakeholder3DItem {
  id: number;
  name: string;
  chineseName: string;
  color: string;
  tone: EntrepreneurshipOrbitTone;
  coordinates: {
    interest: number;
    influence: number;
    impact: number;
  };
  details: {
    interest: string;
    impact: string;
    influence: string;
  };
  iconType:
    | "patient"
    | "hospital"
    | "microscope"
    | "industry"
    | "policy"
    | "finance"
    | "team";
}

export const stakeholders3DList: Stakeholder3DItem[] = [
  {
    id: 1,
    name: "Patients & Patient Representatives",
    chineseName: "患者与患者代表",
    color: "#ff4d6d",
    tone: "rose",
    coordinates: { interest: 9, influence: 4, impact: 10 },
    details: {
      interest: "Treatment efficacy, safety, burden, and accessibility",
      impact:
        "Limited direct decision-making power; shape design through feedback on patient needs",
      influence:
        "Short term: increased participation burden; Long term: effects on treatment choices",
    },
    iconType: "patient",
  },
  {
    id: 2,
    name: "Clinicians and the Healthcare System",
    chineseName: "临床与医疗体系",
    color: "#2563eb",
    tone: "sky",
    coordinates: { interest: 9, influence: 9, impact: 8 },
    details: {
      interest: "Clinical value, patient eligibility, and feasibility",
      impact:
        "Directly shape patient screening and clinical pathways; inform R&D through professional collaboration",
      influence:
        "Short term: additional research workload; Long term: effects on clinical workflows",
    },
    iconType: "hospital",
  },
  {
    id: 3,
    name: "Scientific and Technical Experts",
    chineseName: "科研与技术专家",
    color: "#06b6d4",
    tone: "slate",
    coordinates: { interest: 8, influence: 7, impact: 5 },
    details: {
      interest: "Scientific rationale, technical approach, and quality of evidence",
      impact:
        "Limited direct decision-making power; guide technical direction through expertise",
      influence:
        "Short term: knowledge exchange; Long term: advances in technology development",
    },
    iconType: "microscope",
  },
  {
    id: 4,
    name: "Industry and Development Partners",
    chineseName: "产业与开发合作伙伴",
    color: "#f97316",
    tone: "peach",
    coordinates: { interest: 8, influence: 9, impact: 8 },
    details: {
      interest: "Development value, CMC, quality, and collaboration potential",
      impact:
        "Directly influence resource allocation for development; shape translation pathways through industry experience",
      influence:
        "Short term: resources committed to evaluation; Long term: shared development risks and returns",
    },
    iconType: "industry",
  },
  {
    id: 5,
    name: "Regulatory, Policy, and Payer Stakeholders",
    chineseName: "监管、政策与支付体系",
    color: "#10b981",
    tone: "sage",
    coordinates: { interest: 7, influence: 10, impact: 4 },
    details: {
      interest: "Compliance, safety, reimbursement, and accessibility",
      impact:
        "Directly determine market access requirements; guide development through policies and regulations",
      influence:
        "Short term: limited effects; Long term: effects on regulatory review and resource allocation",
    },
    iconType: "policy",
  },
  {
    id: 6,
    name: "Commercialization and Resource Support Partners",
    chineseName: "商业化与资源支持方",
    color: "#ca8a04",
    tone: "yellow",
    coordinates: { interest: 7, influence: 8, impact: 6 },
    details: {
      interest:
        "Intellectual property, financing, and research commercialization",
      impact:
        "Directly influence funding and ownership rights; advance commercialization through resource networks",
      influence:
        "Short term: resources committed to evaluation; Long term: returns linked to commercialization",
    },
    iconType: "finance",
  },
  {
    id: 7,
    name: "JLU-FBH Project Team",
    chineseName: "JLU-FBH 项目团队",
    color: "#8b5cf6",
    tone: "mauve",
    coordinates: { interest: 10, influence: 10, impact: 9 },
    details: {
      interest: "Scientific value, patient value, and project progress",
      impact:
        "Directly determines the technical approach; integrates external input through stakeholder collaboration",
      influence:
        "Short term: responsibility for R&D investment; Long term: effects on project outcomes and partnerships",
    },
    iconType: "team",
  },
];

export const entrepreneurshipPage: WikiPageContent = {
  route: "/entrepreneurship",
  category: "engagement",
  chapter: "Engagement / 01 of 05",
  eyebrow: "Entrepreneurship · Validate the path",
  title: "Entrepreneurship",
  lede: "Test the path from need to adoption.",
  boundary:
    "No incorporated venture, priced product, regulatory decision, or validated market dataset was supplied. The page is a structured business-case working draft.",
  visual: "venture-path",
  visualLabel: "Need-to-implementation assumption path",
  visualSteps: ["need", "user", "minimum proof", "adoption"],
  facts: [
    {
      label: "Problem",
      value: "A costly unmet need is defined by affected users.",
    },
    {
      label: "Alternative",
      value: "Current workflows and competing approaches are explicit.",
    },
    {
      label: "MVP",
      value: "The smallest testable value proposition is named.",
    },
    {
      label: "Risk",
      value: "Science, regulation, access, and adoption remain coupled.",
    },
  ],
  sections: [
    {
      id: "potential-problems-and-solutions",
      index: "01",
      kicker: "",
      title: "Potential Problems and Solutions",
      summary: "",
      blocks: [{ type: "feature", key: "potential-problems-and-solutions" }],
    },
    {
      id: "positive-long-term-impacts",
      index: "02",
      kicker: "",
      title: "Positive Long-Term Impacts",
      summary: "",
      blocks: [{ type: "feature", key: "positive-long-term-impacts" }],
    },
    {
      id: "circure-golden-circle",
      index: "03",
      kicker: "Strategic Value",
      title: "CirCure Value Proposition: Golden Circle",
      summary:
        "Aligning why TNBC calls for targeted intervention, what CirCure delivers as a multi-epitope circular RNA vaccine, and how our systematic engineering translates.",
      blocks: [{ type: "feature", key: "circure-golden-circle" }],
    },
    {
      id: "stakeholder-matrix-3d",
      index: "04",
      kicker: "Stakeholder Ecosystem",
      title: "Multi-Dimensional Stakeholder Analysis",
      summary:
        "Evaluating key stakeholder groups across Interest, Influence, and Impact to formulate balanced translation pathways and clinical adoption frameworks.",
      blocks: [{ type: "feature", key: "stakeholder-matrix-3d" }],
    },
    {
      id: "venture-discovery",
      index: "05",
      kicker: "Problem discovery",
      title: "Do not confuse a disease burden with a customer need.",
      summary:
        "The business case should identify who experiences the problem, who decides, who pays, who operates the workflow, and who bears risk.",
      layout: "matrix",
      items: [
        {
          label: "Affected",
          title: "Patients and caregivers",
          body: "Explore outcomes, burden, uncertainty, access, privacy, and what a future intervention must never promise prematurely.",
          status: "planned",
        },
        {
          label: "Operational",
          title: "Clinical and laboratory users",
          body: "Map labor, training, turnaround, storage, equipment, reliability, and fit with existing care or research pathways.",
          status: "planned",
        },
        {
          label: "System",
          title: "Payers, regulators, manufacturers",
          body: "Test reimbursement, evidence thresholds, quality, scale, logistics, procurement, and institutional adoption.",
          status: "open",
        },
      ],
    },
    {
      id: "venture-hypotheses",
      index: "06",
      kicker: "Assumption ledger",
      title: "Test the riskiest assumption first.",
      summary:
        "Each hypothesis needs a method, evidence threshold, result, decision, and next test.",
      layout: "ledger",
      items: [
        {
          label: "V–01",
          title: "The selected use case matters",
          body: "Compare the proposed benefit with current alternatives and confirm the burden with relevant stakeholders.",
          status: "planned",
        },
        {
          label: "V–02",
          title: "The workflow can absorb the solution",
          body: "Test training, labor, timing, infrastructure, storage, quality, and failure recovery assumptions.",
          status: "planned",
        },
        {
          label: "V–03",
          title: "A minimum viable product can be defined",
          body: "Name the smallest artifact that tests value without implying therapeutic readiness.",
          status: "open",
        },
        {
          label: "V–04",
          title: "Access is compatible with the model",
          body: "Estimate cost drivers, distribution, underserved users, and tradeoffs before optimizing a revenue story.",
          status: "open",
        },
      ],
    },
    {
      id: "venture-roadmap",
      index: "07",
      kicker: "Responsible roadmap",
      title: "Separate the next year from the final vision.",
      summary:
        "The roadmap should show scientific, regulatory, manufacturing, market, and governance dependencies with explicit go/no-go gates.",
      layout: "timeline",
      items: [
        {
          label: "Now · student project",
          title: "Validate the evidence framework.",
          body: "Deliver transparent candidate, construct, model, experimental, safety, and stakeholder records.",
          status: "recorded",
        },
        {
          label: "Next · research translation",
          title: "Validate feasibility and user requirements.",
          body: "Repeat key evidence, engage relevant experts, refine workflow, and establish quality and regulatory assumptions.",
          status: "planned",
        },
        {
          label: "Later · conditional pathway",
          title: "Advance only after independent evidence.",
          body: "Preclinical, manufacturing, safety, access, and clinical pathways remain outside the present project claim.",
          status: "boundary",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "Stakeholder decisions" },
    { path: "/sustainability", label: "Access and impact" },
    { path: "/safety-and-security", label: "Responsible limits" },
  ],
  next: {
    path: "/human-practices",
    label: "Human Practices",
    title: "Who changed the project—and how?",
  },
};
