import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

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
      id: "venture-discovery",
      index: "01",
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
      index: "02",
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
      index: "03",
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
