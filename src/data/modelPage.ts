import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

/**
 * Model-only content contract.
 *
 * The team has not supplied validated model outputs yet, so every claim below
 * describes the evidence architecture rather than a completed result. Keeping
 * this separate from dryLabPages.ts prevents the migration from changing the
 * Software or Hardware records.
 */
export const modelEvidencePage: WikiPageContent = {
  route: "/model",
  category: "dry-lab",
  chapter: "Dry Lab / 01 of 04",
  eyebrow: "Model · Evidence manuscript",
  title: "Model",
  lede: "Predictions return to evidence and Wet Lab decisions.",
  boundary:
    "The framework is project-specific; numerical results remain provisional until team data, validated equations, and experimental comparisons are supplied.",
  visual: "model-manuscript",
  visualLabel: "Question, prediction, validation, and decision",
  visualSteps: ["question", "model", "validation", "decision"],
  facts: [
    {
      label: "Question",
      value:
        "Which epitopes, construct, and measurement window should CirCure advance?",
    },
    {
      label: "Evidence",
      value:
        "TNBC relevance, presentation, coverage, structure, and kinetics remain traceable.",
    },
    {
      label: "Check",
      value:
        "Every prediction is paired with an independent computational or Wet Lab check.",
    },
    {
      label: "Return",
      value:
        "Each conclusion returns a specific construct or experiment decision.",
    },
  ],
  sections: [
    {
      id: "model-structural-confirmation",
      index: "01",
      kicker: "Model 0 · Structural Confirmation",
      navLabel: "3D Structure",
      title: "Structural Confirmation of Trop2-CTL1 (SVCWCVNSV) in HLA-A*02:01 / B2M",
      summary:
        "AlphaFold/docking-derived all-atom conformation and polar contact network of the Trop2-CTL1 epitope complexed with human MHC-I (HLA-A*02:01) and β2-microglobulin, reconstituted directly from the high-resolution PyMOL session.",
      body: [
        "To characterize the immunogenic presentation and binding stability of our engineered Trop2 target candidates, we performed high-resolution structural modeling of the Trop2-CTL1 core epitope (SVCWCVNSV) complexed with the human leukocyte antigen HLA-A*02:01 and β2-microglobulin (B2M). All-atom spatial coordinates, anchoring residues within the MHC peptide-binding cleft, and key polar interaction networks were resolved and validated.",
      ],
      layout: "editorial",
    },
    {
      id: "model-judge-brief",
      index: "02",
      kicker: "30-second evidence path",
      navLabel: "Evidence path",
      title: "Computational framework and decision scope.",
      summary:
        "The CirCure model connects candidate selection, construct assessment, and expression dynamics to explicit design decisions rather than presenting three unrelated analyses.",
      layout: "matrix",
      items: [
        {
          label: "Method",
          title: "Three connected modules",
          body: "Candidate evidence, construct properties, and expression dynamics are treated as one decision system rather than unrelated analyses.",
          status: "planned",
        },
        {
          label: "Design impact",
          title: "A named choice changes",
          body: "Each output must retain, reject, revise, or schedule a candidate, construct, parameter, dose, time point, or experiment.",
          status: "open",
        },
        {
          label: "Validation",
          title: "Independent evidence is reserved",
          body: "Held-out data, orthogonal tools, literature constraints, or Wet Lab measurements must challenge the prediction.",
          status: "planned",
        },
        {
          label: "Reuse",
          title: "One figure can be reproduced",
          body: "Data, code, environment, seeds, ownership, and an expected output form the minimum release contract.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-architecture",
      index: "02",
      kicker: "Model architecture",
      navLabel: "Architecture",
      title: "An integrated Wet–Dry architecture.",
      summary:
        "Three computational modules share versioned inputs and return their uncertainty to the same experimental programme: select candidates, compare constructs, then choose informative measurements.",
      layout: "steps",
      items: [
        {
          label: "Model I · Candidates",
          title: "Prioritise epitopes transparently.",
          body: "Combine biological relevance, presentation, coverage, safety, and redundancy while preserving score decomposition and sensitivity.",
          status: "planned",
        },
        {
          label: "Model II · Construct",
          title: "Compare sequence and structure alternatives.",
          body: "Record tool versions, parameters, feature rules, structural checks, and the reason one construct advances.",
          status: "planned",
        },
        {
          label: "Model III · Dynamics",
          title: "Choose informative measurement windows.",
          body: "Use the smallest useful dynamic model, expose uncertainty and identifiability, and propose a discriminating experiment.",
          status: "open",
        },
        {
          label: "Wet–Dry return",
          title: "Let measurements revise the model.",
          body: "Failed constructs and measured trajectories update thresholds, assumptions, parameters, and the next experiment.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-epitope",
      index: "03",
      kicker: "Model I · Epitope prioritisation",
      navLabel: "Epitope ranking",
      title: "Multi-criteria epitope prioritisation.",
      summary:
        "Candidate TNBC epitopes are assessed through disease relevance, presentation potential, population coverage, redundancy, and safety while preserving every source, weight, exclusion, and sensitivity-driven change.",
      layout: "ledger",
      items: [
        {
          label: "Question",
          title: "Which candidates deserve scarce experiments?",
          body: "Define the decision unit, eligible population, hard exclusion gates, and the cost of false inclusion or exclusion.",
          status: "recorded",
        },
        {
          label: "Inputs",
          title: "Preserve provenance before scoring.",
          body: "Record source, version, retrieval date, license, preprocessing, missingness, units, and transformations for every feature.",
          status: "planned",
        },
        {
          label: "Output",
          title: "Show total rank and score decomposition.",
          body: "Place component scores, thresholds, exclusions, uncertainty, and the retained/rejected decision in one comparison view.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-structure",
      index: "04",
      kicker: "Model II · circRNA structure",
      navLabel: "circRNA structure",
      title: "Comparative assessment of circRNA constructs.",
      summary:
        "Alternative epitope orders, linkers, translation elements, and structural predictions are compared with matched views and shared metrics so that one versioned CirCure construct can advance.",
      layout: "matrix",
      items: [
        {
          label: "Method",
          title: "Declare the complete tool record.",
          body: "Tool, version, database, parameters, seed, input preparation, output feature, and known failure mode belong beside the result.",
          status: "planned",
        },
        {
          label: "Comparison",
          title: "Use matched views and shared metrics.",
          body: "Display variants with consistent orientation, scale, annotations, thresholds, and a compact decision table.",
          status: "planned",
        },
        {
          label: "Check",
          title: "Reserve an orthogonal assessment.",
          body: "A second method, literature constraint, perturbation, or experimental measurement should test the chosen structural signal.",
          status: "open",
        },
      ],
    },
    {
      id: "model-dynamics",
      index: "05",
      kicker: "Model III · Expression dynamics",
      navLabel: "Expression dynamics",
      title: "Expression dynamics and experimental windows.",
      summary:
        "The smallest useful dynamic model links dose, time, expression, and observable Wet Lab readouts; fitted trajectories, uncertainty, residuals, and the next measurement remain one evidence unit.",
      layout: "steps",
      items: [
        {
          label: "System",
          title: "Start with the smallest useful mechanism.",
          body: "States, interactions, assumptions, initial conditions, units, and observables should answer a specific time- or dose-window question.",
          status: "planned",
        },
        {
          label: "Fit",
          title: "Separate calibration from validation.",
          body: "Document the objective function, bounds, identifiability, repeated measurements, held-out evidence, and failure cases.",
          status: "open",
        },
        {
          label: "Decision",
          title: "Propose a discriminating experiment.",
          body: "Select the time, dose, observable, or perturbation that most clearly distinguishes competing explanations.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-validation",
      index: "06",
      kicker: "Cross-model validation",
      navLabel: "Validation",
      title: "Validation and sensitivity analysis.",
      summary:
        "Independent evidence, disagreement, threshold sensitivity, and uncertainty are reported against the CirCure decision they can reverse.",
      layout: "matrix",
      items: [
        {
          label: "Predictive check",
          title: "Compare like with like.",
          body: "Place observed and predicted quantities on the same scale with uncertainty, residuals, sample definition, and evaluation metric.",
          status: "planned",
        },
        {
          label: "Sensitivity",
          title: "Challenge thresholds and assumptions.",
          body: "Show which parameters or weights can reverse the ranking, selected construct, or experimental window.",
          status: "planned",
        },
        {
          label: "Failure",
          title: "Keep disagreement visible.",
          body: "Record negative results, out-of-domain cases, missing evidence, model mismatch, and the corrective action.",
          status: "open",
        },
      ],
    },
    {
      id: "model-wet-dry",
      index: "07",
      kicker: "Wet–Dry iteration",
      navLabel: "Wet–Dry loop",
      title: "Wet–Dry feedback and design revision.",
      summary:
        "Each iteration connects a measured CirCure input to a revised assumption, candidate or construct decision, and the experiment that tests the revision.",
      layout: "timeline",
      items: [
        {
          label: "Round 01 · Define",
          title: "Name the claim and measurement.",
          body: "Reserve space for the initial evidence, assumption, model question, experimental constraint, and planned success criterion.",
          status: "planned",
        },
        {
          label: "Round 02 · Challenge",
          title: "Use the Wet Lab result to update—not decorate—the model.",
          body: "Record the observed mismatch, parameter or mechanism revision, and the resulting candidate or experiment change.",
          status: "open",
        },
        {
          label: "Round 03 · Decide",
          title: "Close the loop with confidence and limits.",
          body: "State the retained decision, remaining uncertainty, stop condition, and next discriminating measurement.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-limitations",
      index: "08",
      kicker: "Applicability and limits",
      navLabel: "Scope & limits",
      title: "Applicability, uncertainty, and limitations.",
      summary:
        "The supported sequence space, TNBC context, evidence sources, dose and time ranges, and failure conditions define where the model may inform—but not replace—scientific review.",
      layout: "ledger",
      items: [
        {
          label: "Applicability",
          title: "Define the valid population and conditions.",
          body: "Specify sequence space, biological context, dose/time range, platform, and measurement conditions represented by the evidence.",
          status: "open",
        },
        {
          label: "Uncertainty",
          title: "Distinguish data, parameter, and structural uncertainty.",
          body: "Report what can be quantified, what remains qualitative, and which uncertainty can change the decision.",
          status: "planned",
        },
        {
          label: "Responsible use",
          title: "Require review outside the supported domain.",
          body: "Define warnings, human review, failure recovery, and the evidence required before extending the model to new cases.",
          status: "planned",
        },
      ],
    },
    {
      id: "model-reproducibility",
      index: "09",
      kicker: "Reproducibility",
      navLabel: "Reproducibility",
      title: "Reproducibility and computational release.",
      summary:
        "A durable CirCure release joins raw and processed candidate records, executable code, environments, expected outputs, tests, ownership, and cited methods.",
      layout: "matrix",
      items: [
        {
          label: "Data",
          title: "Raw and processed inputs",
          body: "Schemas, licenses, retrieval dates, transformations, exclusions, example records, and checksums.",
          status: "planned",
        },
        {
          label: "Code",
          title: "Tagged executable release",
          body: "Entry point, notebooks or scripts, tests, deterministic seeds, expected output, and a minimal reproduction command.",
          status: "planned",
        },
        {
          label: "Environment",
          title: "Versions and ownership",
          body: "Runtime, dependencies, hardware notes, external tools, student work, advisor input, prior methods, and license.",
          status: "planned",
        },
      ],
      note: {
        label: "Current evidence boundary",
        body: "These records are deliberate publication slots. Replace them only with team-owned, cited, and reproducible materials; do not convert proposed examples into claims by removing the status labels.",
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
