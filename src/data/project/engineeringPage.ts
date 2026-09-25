import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const engineeringPage: WikiPageContent = {
  route: "/engineering",
  category: "project",
  chapter: "Project / 02 of 04",
  eyebrow: "Engineering · Build the ring",
  title: "Engineering",
  lede: "A traceable build–test–learn cycle.",
  boundary:
    "The cycles below provide the publication structure. Dates, construct versions, raw results, and final lessons must be replaced with team records as experiments are completed.",
  visual: "engineering-cycle",
  visualLabel: "Design–Build–Test–Learn return loop",
  visualSteps: ["Design", "Build", "Test", "Learn"],
  facts: [
    {
      label: "Input",
      value: "A versioned design question and acceptance rule.",
    },
    { label: "Build", value: "Traceable constructs, samples, and deviations." },
    {
      label: "Test",
      value: "Controls that can reject the preferred explanation.",
    },
    { label: "Output", value: "A recorded decision for the next version." },
  ],
  sections: [
    {
      id: "engineering-framework",
      index: "01",
      kicker: "Engineering standard",
      title: "A loop needs a decision, not four labels.",
      summary:
        "Every cycle should expose the original assumption, the evidence collected, the lesson, and the artifact that changed.",
      layout: "steps",
      items: [
        {
          label: "Design",
          title: "State the claim and stop/go rule.",
          body: "Name the construct, comparison, expected result, failure condition, and the evidence required before building.",
          status: "recorded",
        },
        {
          label: "Build",
          title: "Preserve sample lineage.",
          body: "Version sequences, plasmids, RNA products, cell conditions, protocols, and deviations so every result resolves to a specific build.",
          status: "planned",
        },
        {
          label: "Test",
          title: "Challenge the preferred explanation.",
          body: "Use positive, negative, process, and matched-form controls with predefined readouts and analysis.",
          status: "planned",
        },
        {
          label: "Learn",
          title: "Name what changes next.",
          body: "Advance, revise, reject, or defer the design and explain why the evidence is sufficient for that decision.",
          status: "open",
        },
      ],
    },
    {
      id: "engineering-cycles",
      index: "02",
      kicker: "Working cycles",
      title: "Close the molecular loop in the right order.",
      summary:
        "The current blueprint separates topology, expression, and presentation so later success cannot hide an earlier ambiguity.",
      layout: "timeline",
      items: [
        {
          label: "Cycle 01 · Topology",
          title: "From transcript to defensible circularization evidence.",
          body: "Compare circular and linear candidates using product identity, junction confirmation, RNase R response, and purity. Ambiguity returns the design to cassette geometry or purification.",
          status: "planned",
        },
        {
          label: "Cycle 02 · Expression",
          title: "Balance translation with delivery and cell state.",
          body: "Select conditions by signal-to-stress balance rather than maximum reporter value alone, carrying uncertainty into the next assay.",
          status: "planned",
        },
        {
          label: "Cycle 03 · Presentation",
          title: "Separate general activation from sequence-specific display.",
          body: "Pair maturation markers with a candidate-specific presentation assay before moving to functional response.",
          status: "open",
        },
      ],
      note: {
        label: "Required replacement",
        body: "At least one cycle must be rewritten with actual dates, versions, figures, failed attempts, and the next build that resulted.",
      },
    },
    {
      id: "engineering-trace",
      index: "03",
      kicker: "Cross-page trace",
      title: "The decision must remain visible after the page ends.",
      summary:
        "Engineering connects Human Practices, modeling, experiments, notebook records, and results through stable evidence identifiers.",
      layout: "ledger",
      items: [
        {
          label: "DR–xx",
          title: "Design decision",
          body: "The before/after artifact, reason, owner, and current status.",
          status: "recorded",
        },
        {
          label: "MOD–xx",
          title: "Model input",
          body: "The prediction, sensitivity, or ranking that changed a build or experiment.",
          status: "planned",
        },
        {
          label: "EXP / NB",
          title: "Experiment and notebook",
          body: "The method, sample lineage, deviation, and primary record behind the test.",
          status: "planned",
        },
        {
          label: "RES–xx",
          title: "Result and next decision",
          body: "The bounded conclusion, limitation, and version that follows.",
          status: "open",
        },
      ],
    },
  ],
  links: [
    { path: "/description", label: "Project rationale" },
    { path: "/experiments", label: "Experimental design" },
    { path: "/notebook", label: "Notebook trace" },
  ],
  next: {
    path: "/results",
    label: "Results",
    title: "Which claims survived the test?",
  },
};
