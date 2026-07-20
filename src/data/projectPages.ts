import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

export const descriptionPage: WikiPageContent = {
  route: "/description",
  category: "project",
  chapter: "Project / 01 of 04",
  eyebrow: "Description · The Living Ring",
  title: "One ring. Many targets.",
  lede: "CirCure explores a traceable multi-epitope circular RNA strategy for triple-negative breast cancer. The project asks whether broader antigen coverage can be designed without hiding the evidence required at every biological transition.",
  boundary:
    "This page describes the project rationale and working architecture. It does not claim therapeutic efficacy, clinical readiness, or completed validation.",
  visual: "living-ring",
  visualLabel: "Conceptual multi-epitope circular RNA architecture",
  visualSteps: [
    "candidate set",
    "sequence logic",
    "circular product",
    "response gate",
  ],
  facts: [
    {
      label: "Challenge",
      value: "TNBC is clinically defined, but biologically heterogeneous.",
    },
    {
      label: "Platform",
      value: "A modular circular RNA carrying a ranked candidate set.",
    },
    {
      label: "Design",
      value: "Breadth, persistence, and traceability remain coupled.",
    },
    {
      label: "Boundary",
      value: "Architecture first; evidence must still be generated.",
    },
  ],
  sections: [
    {
      id: "description-need",
      index: "01",
      kicker: "The biological problem",
      title: "TNBC is not one thing.",
      summary:
        "A shared clinical label contains diverse molecular states, immune contexts, and routes of escape.",
      body: [
        "Triple-negative breast cancer lacks ER, PR, and HER2, yet this shared definition does not make every tumor biologically identical. CirCure therefore begins with heterogeneity as a design constraint rather than a footnote added after target selection.",
        "The working response is a candidate portfolio: several epitopes are ranked transparently, assembled in a versioned construct, and allowed to advance only when each transition can be tested independently.",
      ],
      note: {
        label: "Design record DR–01",
        body: "The archived question—Which single target can carry the project?—was replaced by: How can a portfolio of targets be built without losing molecular control?",
      },
    },
    {
      id: "description-system",
      index: "02",
      kicker: "Proposed biological route",
      title: "Every arrow is a separate claim.",
      summary:
        "Circularization, expression, presentation, recognition, and safety cannot be inferred from one successful readout.",
      layout: "steps",
      items: [
        {
          label: "Select",
          title: "Rank candidates before committing.",
          body: "Compare disease relevance, presentation potential, population coverage, redundancy, and safety flags. Computation creates a shortlist; it does not prove immunogenicity.",
          status: "planned",
        },
        {
          label: "Encode",
          title: "Make sequence logic inspectable.",
          body: "Document epitope order, linkers, translation entry, cassette length, replacement rules, and every construct version.",
          status: "planned",
        },
        {
          label: "Circularize",
          title: "Prove the topology.",
          body: "Interpret RNase R response beside junction confirmation, purity evidence, and a matched linear comparator.",
          status: "planned",
        },
        {
          label: "Read",
          title: "Connect expression to function.",
          body: "Separate uptake, translation, processing, MHC presentation, candidate-specific response, and cell state.",
          status: "open",
        },
      ],
    },
    {
      id: "description-boundaries",
      index: "03",
      kicker: "What this page can support",
      title: "Proof, not promise.",
      summary:
        "The project story remains credible only when rationale, planned validation, measured evidence, and unsupported claims look different.",
      layout: "ledger",
      items: [
        {
          label: "G–01",
          title: "The intended RNA product is circular.",
          body: "Requires product identity, junction evidence, RNase R comparison, and purity assessment.",
          status: "planned",
        },
        {
          label: "G–02",
          title: "The construct produces encoded material.",
          body: "Requires translation readouts with negative, process, and matched linear controls over a defined time course.",
          status: "planned",
        },
        {
          label: "G–03",
          title: "A candidate portfolio reduces single-target dependence.",
          body: "Currently a design rationale; candidate-level presentation and response evidence remain necessary.",
          status: "open",
        },
        {
          label: "G–04",
          title: "CirCure is safe and therapeutically effective.",
          body: "Outside the present evidence boundary and not claimed by this project overview.",
          status: "boundary",
        },
      ],
    },
  ],
  links: [
    { path: "/engineering", label: "Engineering cycles" },
    { path: "/results", label: "Project results" },
    { path: "/human-practices", label: "Human Practices" },
  ],
  next: {
    path: "/engineering",
    label: "Engineering",
    title: "How does the ring change after evidence?",
  },
};

export const engineeringPage: WikiPageContent = {
  route: "/engineering",
  category: "project",
  chapter: "Project / 02 of 04",
  eyebrow: "Engineering · Build the ring",
  title: "A result matters when it changes the next build.",
  lede: "CirCure uses Design–Build–Test–Learn as a decision record, not a decorative loop. Each cycle begins with a bounded question and ends with a named change, rejection, or next experiment.",
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

export const resultsPage: WikiPageContent = {
  route: "/results",
  category: "project",
  chapter: "Project / 03 of 04",
  eyebrow: "Results · Evidence ledger",
  title: "Keep the evidence beside the claim.",
  lede: "The Results page is the canonical home for measured outcomes. Each block begins with a bounded conclusion, then exposes the figure, samples, controls, replicates, analysis, limitations, and next decision.",
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

export const contributionPage: WikiPageContent = {
  route: "/contribution",
  category: "project",
  chapter: "Project / 04 of 04",
  eyebrow: "Contribution · Open records",
  title: "Leave the next team a working starting point.",
  lede: "A contribution is useful when another team can find it, understand the context in which it works, reproduce it, and see its limits. CirCure will package reusable records rather than presenting a list of good intentions.",
  boundary:
    "The resources below are planned contribution packages. Final claims require versioned releases, working links, licenses, examples, and evidence that the package can be reused.",
  visual: "resource-library",
  visualLabel: "CirCure reusable resource library",
  visualSteps: ["design records", "protocols", "data and code", "HP field kit"],
  facts: [
    { label: "Find", value: "Stable identifiers and one canonical location." },
    { label: "Run", value: "A minimal example with expected output." },
    { label: "Adapt", value: "Inputs, assumptions, and replacement rules." },
    { label: "Limit", value: "Known failures and inappropriate uses." },
  ],
  sections: [
    {
      id: "contribution-packages",
      index: "01",
      kicker: "Planned releases",
      title: "Package the decision, not only the file.",
      summary:
        "Each resource should explain what problem it solves, the evidence behind it, how to use it, and when not to use it.",
      layout: "steps",
      items: [
        {
          label: "CON–01",
          title: "Multi-epitope design record",
          body: "Candidate ranking fields, sequence versioning, design gates, replacement logic, and a worked example.",
          status: "planned",
        },
        {
          label: "CON–02",
          title: "circRNA validation bundle",
          body: "Protocol set, comparison matrix, acceptance rules, troubleshooting record, and accessible result template.",
          status: "planned",
        },
        {
          label: "CON–03",
          title: "Model reproducibility package",
          body: "Versioned data schema, environment, one-command example, tests, expected outputs, and ownership statement.",
          status: "planned",
        },
        {
          label: "CON–04",
          title: "Human Practices field kit",
          body: "Stakeholder map, consent tiers, decision ledger, conflict rule, return-loop checklist, and publication gate.",
          status: "recorded",
        },
      ],
    },
    {
      id: "contribution-reuse",
      index: "02",
      kicker: "Reuse path",
      title: "Make the first successful use small.",
      summary:
        "A future team should be able to reproduce one figure, protocol decision, or engagement record before adopting the entire framework.",
      layout: "timeline",
      items: [
        {
          label: "Step 01",
          title: "Choose the smallest relevant package.",
          body: "Start from a clearly scoped question rather than downloading an undifferentiated archive.",
          status: "recorded",
        },
        {
          label: "Step 02",
          title: "Run the worked example.",
          body: "Compare the generated output with the documented expected output and environment.",
          status: "planned",
        },
        {
          label: "Step 03",
          title: "Replace inputs with local context.",
          body: "Revisit assumptions, safety, consent, and platform constraints before adapting the method.",
          status: "open",
        },
      ],
    },
    {
      id: "contribution-release",
      index: "03",
      kicker: "Release checklist",
      title: "A link is not yet a contribution.",
      summary:
        "Every release should remain usable after the competition and make provenance, ownership, licensing, and limitations visible.",
      layout: "ledger",
      items: [
        {
          label: "Version",
          title: "Tagged and dated",
          body: "Release notes identify the exact files and changes included.",
          status: "planned",
        },
        {
          label: "License",
          title: "Permission is explicit",
          body: "Code, data, documents, and media use appropriate open licenses.",
          status: "planned",
        },
        {
          label: "Evidence",
          title: "The package has been exercised",
          body: "A worked example or external test shows the resource can be followed.",
          status: "open",
        },
        {
          label: "Limits",
          title: "Failure conditions remain visible",
          body: "Known constraints and unsupported applications are documented beside the release.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/software", label: "Software release" },
    { path: "/experiments", label: "Protocol records" },
    { path: "/human-practices", label: "HP method" },
  ],
  next: {
    path: "/experiments",
    label: "Experiments",
    title: "Follow the evidence into the lab.",
  },
};
