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
      id: "venture-discovery",
      index: "03",
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
      index: "04",
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
      index: "05",
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
