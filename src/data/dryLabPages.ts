import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

export const modelPage: WikiPageContent = {
  route: "/model",
  category: "dry-lab",
  chapter: "Dry Lab / 01 of 03",
  eyebrow: "Model · Working manuscript",
  title: "Modeling CirCure.",
  lede: "Three proposed model modules narrow the candidate space, compare construct designs, and identify informative measurements. Each module must connect assumptions and data to validation and a recorded Wet Lab decision.",
  boundary:
    "No team dataset, fitted parameter, validated equation, model output, or experimental result was supplied. The page currently preserves a publication-ready evidence architecture.",
  visual: "model-manuscript",
  visualLabel: "Observed data, prediction, and uncertainty",
  visualSteps: ["data", "model", "validation"],
  facts: [
    { label: "Question", value: "Each model answers one design decision." },
    { label: "Input", value: "Data, assumptions, parameters, and provenance." },
    { label: "Check", value: "Independent evidence and failure cases." },
    { label: "Return", value: "A named Wet Lab change and revised prior." },
  ],
  sections: [
    {
      id: "model-architecture",
      index: "01",
      kicker: "Model architecture",
      title: "Three models, one return path.",
      summary:
        "Outputs advance only when they answer a project question and can be challenged by independent or experimental evidence.",
      layout: "steps",
      items: [
        {
          label: "Model I · Candidates",
          title: "Prioritise epitopes transparently.",
          body: "Combine relevance, presentation, coverage, safety, and redundancy while preserving score decomposition and sensitivity.",
          status: "planned",
        },
        {
          label: "Model II · Construct",
          title: "Assess sequence and structure alternatives.",
          body: "Compare variants using declared tools, versions, parameters, feature rules, and orthogonal checks.",
          status: "planned",
        },
        {
          label: "Model III · Dynamics",
          title: "Choose informative time and dose windows.",
          body: "Fit the smallest useful dynamic model, expose uncertainty and identifiability, and propose a discriminating experiment.",
          status: "open",
        },
        {
          label: "Wet–Dry return",
          title: "Let evidence revise the model.",
          body: "Failed constructs and measured trajectories update thresholds, priors, mechanisms, and the next experimental design.",
          status: "recorded",
        },
      ],
    },
    {
      id: "model-evidence",
      index: "02",
      kicker: "Repeated chapter grammar",
      title: "Question → data → method → validation → decision.",
      summary:
        "Different models can use different mathematics, but every chapter must expose the same evidence responsibilities.",
      layout: "ledger",
      items: [
        {
          label: "Question",
          title: "Define the decision",
          body: "Name the candidate, construct, parameter, time, dose, or experiment that the model is intended to change.",
          status: "recorded",
        },
        {
          label: "Inputs",
          title: "Document provenance",
          body: "Record source, version, retrieval date, license, preprocessing, exclusions, units, and assumptions.",
          status: "planned",
        },
        {
          label: "Validation",
          title: "Reserve independent evidence",
          body: "Keep training/fitting data separate from a held-out, literature-supported, orthogonal, or Wet Lab check.",
          status: "planned",
        },
        {
          label: "Decision",
          title: "Show consequence and confidence",
          body: "State the retained/rejected design, sensitivity, failure, uncertainty, and next discriminating experiment.",
          status: "open",
        },
      ],
    },
    {
      id: "model-reproducibility",
      index: "03",
      kicker: "Reproducibility",
      title: "A reusable model needs more than a source-code link.",
      summary:
        "The release should allow another team to reproduce one published figure or table before adapting the model.",
      layout: "matrix",
      items: [
        {
          label: "Data",
          title: "Raw and processed inputs",
          body: "Schemas, licenses, retrieval dates, transformations, exclusions, and example records.",
          status: "planned",
        },
        {
          label: "Code",
          title: "Tagged executable release",
          body: "Entry point, notebooks or scripts, tests, deterministic seeds, and expected output.",
          status: "planned",
        },
        {
          label: "Environment",
          title: "Versions and ownership",
          body: "Runtime, dependencies, hardware notes, external tools, student work, advisor input, and prior methods.",
          status: "planned",
        },
      ],
      note: {
        label: "Software distinction",
        body: "Code that reproduces a model belongs here. A separate Software page requires an independent user-facing tool with its own purpose, testing, documentation, and release.",
      },
    },
  ],
  links: [
    { path: "/experiments", label: "Wet Lab evidence" },
    { path: "/measurement", label: "Validation measurements" },
    { path: "/software", label: "Software tool" },
  ],
  next: {
    path: "/software",
    label: "Software",
    title: "Can another user run and inspect the tool?",
  },
};

export const softwarePage: WikiPageContent = {
  route: "/software",
  category: "dry-lab",
  chapter: "Dry Lab / 02 of 03",
  eyebrow: "Software · Inspect and reuse",
  title: "Make the computational work usable.",
  lede: "A CirCure software contribution should help a real user perform a defined task, understand the output, recover from failure, and inspect the assumptions behind the result.",
  boundary:
    "No standalone software release was supplied. The interface and release plan below are working copy and must be connected to an actual repository, tested build, documentation, and user feedback.",
  visual: "software-console",
  visualLabel: "Proposed inspectable software workflow",
  visualSteps: ["validate input", "expose evidence", "export decision"],
  facts: [
    { label: "Need", value: "One user and one costly problem are explicit." },
    { label: "Run", value: "Installation and a minimal example work." },
    {
      label: "Inspect",
      value: "Inputs, assumptions, and uncertainty stay visible.",
    },
    {
      label: "Extend",
      value: "License, tests, API, and architecture support reuse.",
    },
  ],
  sections: [
    {
      id: "software-purpose",
      index: "01",
      kicker: "User and purpose",
      title: "Begin with the task, not the technology.",
      summary:
        "The final page should name who uses the tool, what decision it improves, and what existing workflow it replaces or complements.",
      body: [
        "A possible CirCure tool could inspect candidate evidence, validate input schemas, reproduce ranking or structural comparisons, and export an auditable decision record. This remains a proposed scope until an implemented tool exists.",
        "Model scripts are not automatically a software contribution. The software page should only claim features that a user can run and that the team has tested.",
      ],
    },
    {
      id: "software-workflow",
      index: "02",
      kicker: "Core workflow",
      title: "Run, inspect, export.",
      summary:
        "The shortest successful path should remain clear to a non-specialist while technical details stay available for expert users.",
      layout: "steps",
      items: [
        {
          label: "01 · Input",
          title: "Validate before computation.",
          body: "Document required fields, units, accepted formats, examples, privacy constraints, and useful error messages.",
          status: "planned",
        },
        {
          label: "02 · Process",
          title: "Expose the method.",
          body: "Show version, assumptions, thresholds, model or database provenance, progress, and failure states.",
          status: "planned",
        },
        {
          label: "03 · Output",
          title: "Keep evidence beside the result.",
          body: "Export score decomposition, uncertainty, warnings, provenance, and a machine-readable decision record.",
          status: "planned",
        },
        {
          label: "04 · Review",
          title: "Let users correct and rerun.",
          body: "Preserve editable inputs, comparison history, reproducibility metadata, and clear reset or recovery paths.",
          status: "open",
        },
      ],
    },
    {
      id: "software-release",
      index: "03",
      kicker: "Open-source release",
      title: "A demo is not yet a durable tool.",
      summary:
        "Installation, tests, documentation, licensing, deployment, and maintenance determine whether the software is reusable after judging.",
      layout: "matrix",
      items: [
        {
          label: "Use",
          title: "Install and tutorial",
          body: "Supported platforms, dependencies, one-command start, worked example, screenshots, input, output, and troubleshooting.",
          status: "planned",
        },
        {
          label: "Trust",
          title: "Tests and limitations",
          body: "Unit/integration tests, validation datasets, known failure modes, performance, security, and responsible-use notes.",
          status: "planned",
        },
        {
          label: "Extend",
          title: "Architecture and license",
          body: "Module map, API or CLI contract, contribution guide, OSI-approved license, tagged GitLab release, and ownership.",
          status: "open",
        },
      ],
    },
  ],
  links: [
    { path: "/model", label: "Model evidence" },
    { path: "/contribution", label: "Reusable releases" },
    { path: "/human-practices", label: "User requirements" },
  ],
  next: {
    path: "/hardware",
    label: "Hardware",
    title: "Can the physical workflow be reproduced?",
  },
};

export const hardwarePage: WikiPageContent = {
  route: "/hardware",
  category: "dry-lab",
  chapter: "Dry Lab / 03 of 03",
  eyebrow: "Hardware · Build record",
  title: "A device is evidence in physical form.",
  lede: "A CirCure hardware page should connect a laboratory need to design requirements, versions, calibration, performance, safety, cost, and an open reproduction package.",
  boundary:
    "The current repository contains an illustrative apparatus image but no verified device record, BOM, CAD, firmware, calibration, or performance data. The page remains a responsible scaffold.",
  visual: "hardware-schematic",
  visualLabel: "Proposed apparatus and calibration points",
  visualSteps: ["sample path", "measurement", "control"],
  facts: [
    {
      label: "Need",
      value: "A real experimental bottleneck defines the device.",
    },
    {
      label: "Build",
      value: "Versions, components, and assembly are traceable.",
    },
    {
      label: "Test",
      value: "Calibration and performance use relevant standards.",
    },
    {
      label: "Share",
      value: "BOM, CAD, code, cost, safety, and license are open.",
    },
  ],
  sections: [
    {
      id: "hardware-requirements",
      index: "01",
      kicker: "Design brief",
      title: "Translate the laboratory need into requirements.",
      summary:
        "Utility should be defined by users, samples, throughput, accuracy, environment, maintenance, and safety rather than by visual novelty.",
      layout: "matrix",
      items: [
        {
          label: "User",
          title: "Who operates it?",
          body: "Record experience, training, workflow, access needs, failure recovery, cleaning, and maintenance constraints.",
          status: "planned",
        },
        {
          label: "Sample",
          title: "What passes through it?",
          body: "Define volumes, materials, contamination boundaries, compatibility, containment, and disposal.",
          status: "planned",
        },
        {
          label: "Performance",
          title: "What must it achieve?",
          body: "Set measurable range, accuracy, repeatability, throughput, cost, footprint, and acceptance criteria.",
          status: "open",
        },
      ],
    },
    {
      id: "hardware-iterations",
      index: "02",
      kicker: "Design–Build–Test–Learn",
      title: "Show the versions that did not work.",
      summary:
        "A credible build record connects each physical change to a measured problem and a revised requirement.",
      layout: "timeline",
      items: [
        {
          label: "Version 0.1 · concept",
          title: "Define flow and measurement principle.",
          body: "Reserved for the first schematic, assumptions, component choice, predicted failure modes, and user review.",
          status: "planned",
        },
        {
          label: "Version 0.2 · prototype",
          title: "Test leakage, alignment, and repeatability.",
          body: "Reserved for assembly photos, deviations, calibration runs, failed components, and the next mechanical or electronic change.",
          status: "planned",
        },
        {
          label: "Version 1.0 · release",
          title: "Verify reproducible operation.",
          body: "Reserved for independent assembly, performance comparison, user testing, cost, safety review, and final source files.",
          status: "open",
        },
      ],
    },
    {
      id: "hardware-release",
      index: "03",
      kicker: "Reproduction package",
      title: "A picture is not a build guide.",
      summary:
        "The final release should allow another team to source, assemble, calibrate, operate, and troubleshoot the device safely.",
      layout: "ledger",
      items: [
        {
          label: "Source",
          title: "CAD, circuit, firmware",
          body: "Editable source, export formats, versions, dimensions, tolerances, wiring, and code.",
          status: "planned",
        },
        {
          label: "Build",
          title: "BOM and assembly",
          body: "Suppliers, alternatives, cost, tools, steps, photos, alignment, and quality checks.",
          status: "planned",
        },
        {
          label: "Operate",
          title: "Calibration and safety",
          body: "Standards, procedure, expected output, maintenance, failure modes, cleaning, containment, and disposal.",
          status: "open",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental need" },
    { path: "/measurement", label: "Calibration standard" },
    { path: "/contribution", label: "Open release" },
  ],
  next: {
    path: "/entrepreneurship",
    label: "Entrepreneurship",
    title: "How would the project fit a real workflow?",
  },
};
