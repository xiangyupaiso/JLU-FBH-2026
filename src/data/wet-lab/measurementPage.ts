import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
export const measurementPage: WikiPageContent = {
  route: "/measurement",
  category: "wet-lab",
  chapter: "Wet Lab / 03 of 04",
  eyebrow: "Measurement · Quantify the claim",
  title: "Measurement",
  lede: "Calibration, controls, range, and uncertainty beside every result.",
  boundary:
    "The page currently defines the reporting and calibration plan. Instrument settings, standard curves, units, replicate counts, and validation results await team data.",
  visual: "measurement-field",
  visualLabel: "Measurement range and decision points",
  visualSteps: ["baseline", "linear range", "decision", "saturation"],
  facts: [
    {
      label: "Meaning",
      value: "The readout resolves a named biological question.",
    },
    {
      label: "Range",
      value: "Limits of detection and quantification are stated.",
    },
    {
      label: "Compare",
      value: "Calibration and normalization remain explicit.",
    },
    {
      label: "Uncertainty",
      value: "Replicates, error, and failed quality gates stay visible.",
    },
  ],
  sections: [
    {
      id: "measurement-chain",
      index: "01",
      kicker: "Measurement chain",
      navLabel: "Measure chain",
      title: "Connect material, instrument, number, and decision.",
      summary:
        "Each measurement should show how a biological state becomes a recorded value and how that value supports a bounded decision.",
      body: [
        "The chain begins before the instrument is switched on. The team first names the biological quantity, the competing explanation, and the useful range; calibration, acquisition, normalization, and decision rules then preserve that meaning through analysis.",
      ],
      layout: "steps",
      items: [
        {
          label: "Define",
          navLabel: "Biological quantity",
          title: "Choose the biological quantity.",
          body: "Specify whether the assay measures identity, abundance, uptake, translation, viability, presentation, or function.",
          status: "recorded",
        },
        {
          label: "Calibrate",
          navLabel: "Meaningful range",
          title: "Establish a meaningful range.",
          body: "Document standards, blanks, instrument settings, linear range, detection limits, and acceptance thresholds.",
          status: "planned",
        },
        {
          label: "Normalize",
          navLabel: "Preserve comparison",
          title: "Preserve the comparison.",
          body: "State reference samples, loading or cell-count corrections, batch handling, and transformations.",
          status: "planned",
        },
        {
          label: "Decide",
          navLabel: "Interpretation rule",
          title: "Predefine interpretation.",
          body: "Connect the measurement and uncertainty to an advance, revise, reject, or repeat rule.",
          status: "open",
        },
      ],
    },
    {
      id: "measurement-readouts",
      index: "02",
      kicker: "Readout matrix",
      navLabel: "Readout matrix",
      title: "Keep neighboring claims separate.",
      summary:
        "Delivery, expression, cell state, presentation, and response should be measured beside one another without being collapsed into one success metric.",
      body: [
        "Related readouts are aligned by sample, dose, time, and batch so that apparent improvement in one dimension cannot hide deterioration in another. A condition with higher encoded signal but unacceptable loss of viability is recorded as a trade-off, not a success.",
      ],
      layout: "matrix",
      items: [
        {
          label: "M–01",
          navLabel: "Identity & topology",
          title: "Product identity and topology",
          body: "Size, junction identity, RNase R comparison, purity, recovery, and uncertainty in topology interpretation.",
          status: "planned",
        },
        {
          label: "M–02",
          navLabel: "Expression & viability",
          title: "Delivery, expression, viability",
          body: "Matched samples, dose and time window, uptake/process control, intended output, and cell-state readout.",
          status: "planned",
        },
        {
          label: "M–03",
          navLabel: "Presentation & function",
          title: "Presentation and function",
          body: "Sequence-specific display, general activation, antigen-positive/negative targets, response, and non-specific toxicity.",
          status: "open",
        },
        {
          label: "M–04",
          navLabel: "Batch quality",
          title: "Process and batch quality",
          body: "Instrument controls, extraction or staining recovery, plate position, reagent lot, batch reference, missingness, and predefined quality exclusions.",
          status: "planned",
        },
      ],
    },
    {
      id: "measurement-publication",
      index: "03",
      kicker: "Publication gate",
      navLabel: "Publication gate",
      title: "A figure must be auditable.",
      summary:
        "The same checklist applies to positive, negative, and ambiguous results.",
      body: [
        "A figure is released only when the plotted value can be traced to its raw source and when another reader can reconstruct the units, exclusions, replicate structure, and analysis version. The caption states both the supported interpretation and the nearest unsupported claim.",
      ],
      layout: "ledger",
      items: [
        {
          label: "Source",
          navLabel: "Raw files",
          title: "Raw file and sample trace",
          body: "Link the instrument or image file to sample IDs and notebook records.",
          status: "planned",
        },
        {
          label: "Scale",
          navLabel: "Units & normalization",
          title: "Units and normalization",
          body: "Name axes, units, transformations, baselines, and any excluded observations.",
          status: "planned",
        },
        {
          label: "Structure",
          navLabel: "Replicates & analysis",
          title: "Replicates and analysis",
          body: "State biological n, technical n, error definition, statistical method, and analysis version.",
          status: "planned",
        },
        {
          label: "Boundary",
          navLabel: "Interpretation boundary",
          title: "Accessible interpretation",
          body: "Explain the result in text and state what the measurement cannot establish.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental route" },
    { path: "/results", label: "Result standard" },
    { path: "/model", label: "Model validation" },
  ],
  next: {
    path: "/alternative-platform",
    label: "Alternative Platform",
    title: "Which experimental context carries the system?",
  },
};

