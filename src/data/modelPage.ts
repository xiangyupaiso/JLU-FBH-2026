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
  chapter: "Dry Lab / 01 of 03",
  eyebrow: "Model · Evidence manuscript",
  title: "Model the evidence.",
  lede: "Trace assumptions, parameters, predictions, and Wet Lab checks in one decision record.",
  boundary:
    "Awaiting team data, validated equations, model outputs, and experimental comparison.",
  visual: "model-manuscript",
  visualLabel: "Question, prediction, validation, and decision",
  visualSteps: ["question", "model", "validation", "decision"],
  facts: [
    {
      label: "Question",
      value: "Each model must change one named project decision.",
    },
    {
      label: "Evidence",
      value:
        "Inputs, assumptions, parameters, and provenance stay inspectable.",
    },
    {
      label: "Check",
      value: "Prediction and independent evidence remain in the same view.",
    },
    {
      label: "Return",
      value: "Every conclusion names the next Wet Lab action and confidence.",
    },
  ],
  sections: [
    {
      id: "model-judge-brief",
      index: "01",
      kicker: "30-second evidence path",
      title: "Let the contribution appear before the derivation.",
      summary:
        "The final page should answer the Best Model questions immediately: what the method does, what it changes, how it is checked, and what another team can reuse.",
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
      title: "Three models, one return path.",
      summary:
        "The architecture map exposes the interface between modules and keeps the Wet–Dry feedback path visible at every scale.",
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
      title: "Keep the ranking decomposable and contestable.",
      summary:
        "A final ranking is only useful when readers can trace every feature, source, weight, exclusion, uncertainty, and sensitivity-driven change.",
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
      title: "Compare constructs at the same scale.",
      summary:
        "Structure figures should support a choice between variants, not operate as isolated decorative predictions.",
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
      title: "Fit, validate, then interpret.",
      summary:
        "Observed points, model prediction, uncertainty, residuals, and the experimental consequence should appear as one evidence unit.",
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
      title: "Confidence is a record, not a badge.",
      summary:
        "Validation must identify what evidence was independent, what disagreed, how uncertainty changed, and whether the project decision survived.",
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
      title: "A prediction matters when the next experiment changes.",
      summary:
        "Each round should connect measured input to a model revision, a decision, a Wet Lab response, and the evidence that starts the next round.",
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
      title: "Show exactly where the model should not decide.",
      summary:
        "Limitations become useful when they connect an assumption or data gap to an affected output, warning sign, and mitigation.",
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
      title: "Let another team reproduce one published output.",
      summary:
        "A durable model release joins raw and processed data, executable code, environment, expected output, tests, ownership, and references.",
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
