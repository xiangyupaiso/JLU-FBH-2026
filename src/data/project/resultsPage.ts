import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const resultsPage: WikiPageContent = {
  route: "/results",
  category: "project",
  chapter: "Project / 03 of 07",
  eyebrow: "Results · Evidence ledger",
  title: "Results",
  lede: "Evidence, limits, and conclusions.",
  boundary:
    "No experimental dataset was supplied to this migration. Result panels remain explicitly marked as publication slots and must not be read as completed team findings.",
  visual: "evidence-ledger",
  visualLabel: "Claim-to-evidence status ledger",
  visualSteps: [
    "identity",
    "topology",
    "expression",
    "presentation",
    "function",
  ],
  facts: [
    { label: "Organize", value: "By biological question, not by chronology." },
    { label: "Report", value: "Raw and processed evidence remain connected." },
    {
      label: "Interpret",
      value: "Activity, specificity, and safety stay separate.",
    },
    { label: "Learn", value: "Negative results still change the next build." },
  ],
  sections: [
    {
      id: "results-standard",
      index: "01",
      kicker: "Publication standard",
      title: "Lead with the conclusion.",
      summary:
        "A figure earns its place only when a reader can tell what was tested, how the comparison was made, and what remains unresolved.",
      layout: "matrix",
      items: [
        {
          label: "Purpose",
          title: "One question per result block.",
          body: "State which claim was tested and why the selected readout can answer it.",
          status: "planned",
        },
        {
          label: "Evidence",
          title: "Show samples and controls.",
          body: "Identify construct, cell system, treatment, dose, time, positive/negative/process controls, and sample lineage.",
          status: "planned",
        },
        {
          label: "Analysis",
          title: "Expose units and uncertainty.",
          body: "Report biological and technical n, normalization, error definition, statistical method, and accessible interpretation.",
          status: "planned",
        },
      ],
    },
    {
      id: "results-gates",
      index: "02",
      kicker: "Result sequence",
      title: "Do not skip an earlier gate.",
      summary:
        "A later biological signal cannot repair uncertainty about the identity or state of the material used to produce it.",
      layout: "ledger",
      items: [
        {
          label: "RES–01",
          title: "Construct identity",
          body: "Reserved for annotated sequence verification, sample IDs, and acceptance decisions.",
          status: "planned",
        },
        {
          label: "RES–02",
          title: "Circular topology",
          body: "Reserved for an orthogonal comparison of product identity, junction, RNase R response, and purity.",
          status: "planned",
        },
        {
          label: "RES–03",
          title: "Expression window",
          body: "Reserved for matched delivery, translation, viability, time, and dose evidence.",
          status: "planned",
        },
        {
          label: "RES–04",
          title: "Presentation and response",
          body: "Future evidence dependent on the earlier gates; general activation cannot substitute for specificity.",
          status: "open",
        },
      ],
    },
    {
      id: "results-reflection",
      index: "03",
      kicker: "Discussion and future work",
      title: "Failure is part of the result.",
      summary:
        "The final page should preserve failed constructs, conflicting readouts, unexplained variance, and the exact experiment that would discriminate between competing explanations.",
      body: [
        "For each result, discuss whether the outcome supports, weakens, or leaves the original claim unresolved. Avoid converting a proxy readout into a stronger biological conclusion.",
        "Future work should be a prioritized evidence plan with dependencies and stop conditions, not an unlimited list of desirable experiments.",
      ],
      note: {
        label: "Release gate",
        body: "Before publication, every figure needs a raw-data link, units, controls, replicate counts, named analysis, limitation, and notebook trace.",
      },
    },
  ],
  links: [
    { path: "/experiments", label: "Methods and protocols" },
    { path: "/measurement", label: "Measurement strategy" },
    { path: "/engineering", label: "Result-driven iteration" },
  ],
  next: {
    path: "/contribution",
    label: "Contribution",
    title: "What can another team reuse?",
  },
};
