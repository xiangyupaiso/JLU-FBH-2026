import { useState } from "react";

type ExplorerStep = {
  label: string;
  question: string;
  inputLabel: string;
  input: string;
  methodLabel: string;
  method: string;
  outputLabel: string;
  output: string;
  returnLabel: string;
  return: string;
};

type ProjectExplorerProps = {
  id: string;
  title: string;
  introduction: string;
  boundary: string;
  steps: ExplorerStep[];
};

const modelSteps: ExplorerStep[] = [
  {
    label: "Candidate portfolio",
    question:
      "Which TNBC-associated epitopes deserve a place in CirCure’s limited experimental portfolio?",
    inputLabel: "Evidence entering the decision",
    input:
      "Sequence and source provenance, TNBC relevance, predicted MHC-I presentation, population coverage, safety flags, and epitope redundancy.",
    methodLabel: "Planned computation",
    method:
      "Apply hard exclusion gates before multi-criteria ranking; retain the contribution, uncertainty, and sensitivity of every criterion.",
    outputLabel: "Design consequence",
    output:
      "A versioned shortlist with retained, rejected, or unresolved candidates—and a reason for every state.",
    returnLabel: "Wet Lab return",
    return:
      "Presentation and immune-recognition evidence revise gates, weights, and the next candidate set.",
  },
  {
    label: "circRNA construct",
    question:
      "How should several retained epitopes be arranged within one testable circular RNA construct?",
    inputLabel: "Evidence entering the decision",
    input:
      "Candidate set, epitope order, linkers, translation elements, junction design, sequence constraints, and matched construct versions.",
    methodLabel: "Planned computation",
    method:
      "Compare alternatives under the same structural and sequence rules; keep tool versions, parameters, assumptions, and failure modes beside each view.",
    outputLabel: "Design consequence",
    output:
      "One construct advances, one is held as a comparator, and specific sequence risks are assigned to redesign or experiment.",
    returnLabel: "Wet Lab return",
    return:
      "Junction confirmation, RNase R response, and translation evidence determine whether the chosen design remains plausible.",
  },
  {
    label: "Expression window",
    question:
      "Which dose, time point, and observable can most clearly distinguish competing explanations?",
    inputLabel: "Evidence entering the decision",
    input:
      "Dose, time, expression, presentation, and recognition measurements with replicate, unit, and uncertainty records.",
    methodLabel: "Planned computation",
    method:
      "Use the smallest useful dynamic model, separate calibration from validation, and expose parameter identifiability and residual mismatch.",
    outputLabel: "Design consequence",
    output:
      "A pre-declared measurement window and the next discriminating experiment—not a decorative fitted curve.",
    returnLabel: "Wet Lab return",
    return:
      "The measured trajectory updates parameters, exposes model mismatch, or closes the current line of inquiry.",
  },
];

const softwareSteps: ExplorerStep[] = [
  {
    label: "Import",
    question:
      "Can this candidate or construct record enter the CirCure workflow without losing its scientific context?",
    inputLabel: "Required record",
    input:
      "Candidate ID, sequence, TNBC relevance source, HLA context, evidence provenance, database version, reviewer, and intended decision.",
    methodLabel: "Interface responsibility",
    method:
      "Show required fields, accepted formats, example records, privacy boundaries, and source attribution before submission.",
    outputLabel: "Observable state",
    output:
      "A draft record that is either ready for validation or visibly incomplete; no silent defaults.",
    returnLabel: "Recovery path",
    return:
      "Keep valid work editable and point directly to the missing or malformed evidence.",
  },
  {
    label: "Validate",
    question:
      "Is the record structurally valid and scientifically interpretable before any score is calculated?",
    inputLabel: "Checks",
    input:
      "Sequence alphabet and length, units, required citations, HLA notation, database versions, duplicate candidates, and missingness.",
    methodLabel: "Interface responsibility",
    method:
      "Separate blocking errors from warnings and explain the field, expected form, consequence, and correction.",
    outputLabel: "Observable state",
    output:
      "Accepted, corrected, rejected, and warning states remain part of the audit trail.",
    returnLabel: "Recovery path",
    return:
      "Return to the precise field while preserving provenance and the last valid state.",
  },
  {
    label: "Score & inspect",
    question:
      "Why did one epitope move above another, and can that order survive a reasonable change in assumptions?",
    inputLabel: "Visible evidence",
    input:
      "Relevance, presentation, population coverage, safety, redundancy, weights, thresholds, and missing values.",
    methodLabel: "Interface responsibility",
    method:
      "Show score decomposition, hard exclusions, sensitivity, uncertainty, conflicting evidence, and model applicability together.",
    outputLabel: "Observable state",
    output:
      "A reviewable ranking with reasons—not a single unexplained confidence number.",
    returnLabel: "Recovery path",
    return:
      "Revise a threshold, flag a candidate for review, or export disagreement instead of forcing approval.",
  },
  {
    label: "Build review",
    question:
      "Does the proposed multi-epitope construct preserve the evidence and risks of its component candidates?",
    inputLabel: "Required record",
    input:
      "Selected epitopes, order, linkers, translation elements, junction design, structure checks, and construct version.",
    methodLabel: "Interface responsibility",
    method:
      "Compare matched construct versions and link every change back to its candidate evidence and design rationale.",
    outputLabel: "Observable state",
    output:
      "Advance, revise, compare, or stop—with an accountable reviewer and a named experiment.",
    returnLabel: "Recovery path",
    return:
      "Create a new version without overwriting the evidence attached to the previous design.",
  },
  {
    label: "Export",
    question:
      "Can another CirCure researcher reproduce the decision without access to this interface?",
    inputLabel: "Release contents",
    input:
      "Inputs, outputs, methods, versions, warnings, reviewer decisions, timestamps, and checksums.",
    methodLabel: "Interface responsibility",
    method:
      "Produce a readable decision brief and a machine-readable record from the same source state.",
    outputLabel: "Observable state",
    output:
      "A portable evidence package with no missing context between screen and file.",
    returnLabel: "Recovery path",
    return:
      "Re-import the package, verify integrity, and identify unsupported or stale dependencies.",
  },
];

const hardwareSteps: ExplorerStep[] = [
  {
    label: "Construct identity",
    question:
      "Can a physical workflow preserve the identity of each CirCure construct and matched control?",
    inputLabel: "Experimental objects",
    input:
      "Versioned construct, matched linear RNA, negative controls, sample identifier, volume, and handling history.",
    methodLabel: "Hardware requirement",
    method:
      "Keep samples distinguishable through loading, processing, acquisition, and export; prevent swaps and undocumented manual steps.",
    outputLabel: "Acceptance evidence",
    output:
      "A traceable raw record linked to the correct construct, control, operator, and device state.",
    returnLabel: "Failure to design around",
    return:
      "Misloading, label loss, carryover, incompatible materials, or an acquisition record detached from its sample.",
  },
  {
    label: "Circular topology",
    question:
      "Can matched circRNA and linear RNA controls be processed under comparable conditions?",
    inputLabel: "Experimental objects",
    input:
      "Untreated and RNase R-treated samples, junction assay controls, time, temperature, reagent lot, and replicate identity.",
    methodLabel: "Hardware requirement",
    method:
      "Control timing, temperature, mixing, and sample recovery consistently while retaining the complete processing history.",
    outputLabel: "Acceptance evidence",
    output:
      "Matched measurements suitable for testing RNase R response and back-splice junction evidence.",
    returnLabel: "Failure to design around",
    return:
      "Unequal exposure, evaporation, dead volume, temperature drift, contamination, or missing matched controls.",
  },
  {
    label: "Expression window",
    question:
      "Can the platform acquire comparable expression evidence across the planned time course?",
    inputLabel: "Experimental objects",
    input:
      "Dose, time point, biological replicate, expression observable, reference, blank, and acquisition settings.",
    methodLabel: "Hardware requirement",
    method:
      "Standardise acquisition order and environment, retain raw signal, and expose drift, saturation, and missing references.",
    outputLabel: "Acceptance evidence",
    output:
      "A versioned time series with units, uncertainty, quality state, and the device configuration used.",
    returnLabel: "Failure to design around",
    return:
      "Photobleaching, saturation, unstable alignment, inconsistent timing, or a signal transformed without its raw record.",
  },
  {
    label: "Presentation",
    question:
      "Can an assay-specific measurement path test whether translated epitopes reach the intended presentation context?",
    inputLabel: "Experimental objects",
    input:
      "Defined cells or assay material, construct and controls, presentation readout, calibration reference, and blinded sample order.",
    methodLabel: "Hardware requirement",
    method:
      "Separate sample handling from signal acquisition and pre-declare the range, reference, and quality checks required by the assay.",
    outputLabel: "Acceptance evidence",
    output:
      "Comparable raw and processed signals whose calibration and sample provenance remain inspectable.",
    returnLabel: "Failure to design around",
    return:
      "Out-of-range signal, unblinded acquisition, batch confounding, sample loss, or an absent calibration record.",
  },
  {
    label: "Recognition",
    question:
      "Can the final measurement distinguish immune-recognition evidence from handling and instrument artefacts?",
    inputLabel: "Experimental objects",
    input:
      "Construct-treated samples, matched controls, immune-response observable, containment plan, reference, and replicate structure.",
    methodLabel: "Hardware requirement",
    method:
      "Protect biological containment, synchronise matched conditions, log operator interventions, and define a safe recovery state.",
    outputLabel: "Acceptance evidence",
    output:
      "A reviewable response record tied to controls, calibration, environment, and the exact hardware version.",
    returnLabel: "Failure to design around",
    return:
      "Containment breach, cross-contamination, timing bias, sensor drift, unsafe retry, or an untraceable intervention.",
  },
];

function ProjectExplorer({
  id,
  title,
  introduction,
  boundary,
  steps,
}: ProjectExplorerProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeStep = steps[activeIndex];
  const panelId = `${id}-panel`;

  return (
    <section className="dry-project-explorer" aria-labelledby={`${id}-title`}>
      <div className="dry-project-explorer__intro">
        <p>{introduction}</p>
        <h3 id={`${id}-title`}>{title}</h3>
      </div>

      <div
        className="dry-project-explorer__route"
        aria-label={`Explore ${title}`}
      >
        {steps.map((step, index) => (
          <button
            type="button"
            key={step.label}
            className={activeIndex === index ? "is-active" : undefined}
            aria-controls={panelId}
            aria-pressed={activeIndex === index}
            onClick={() => setActiveIndex(index)}
          >
            <b>{String(index + 1).padStart(2, "0")}</b>
            <strong>{step.label}</strong>
          </button>
        ))}
      </div>

      <article
        className="dry-project-explorer__panel"
        id={panelId}
        aria-live="polite"
      >
        <p className="dry-project-explorer__selected">
          {String(activeIndex + 1).padStart(2, "0")} / {activeStep.label}
        </p>
        <h4>{activeStep.question}</h4>

        <dl>
          <div>
            <dt>{activeStep.inputLabel}</dt>
            <dd>{activeStep.input}</dd>
          </div>
          <div>
            <dt>{activeStep.methodLabel}</dt>
            <dd>{activeStep.method}</dd>
          </div>
          <div>
            <dt>{activeStep.outputLabel}</dt>
            <dd>{activeStep.output}</dd>
          </div>
        </dl>

        <div className="dry-project-explorer__return">
          <strong>{activeStep.returnLabel}</strong>
          <p>{activeStep.return}</p>
        </div>
      </article>

      <p className="dry-project-explorer__boundary">{boundary}</p>
    </section>
  );
}

export function CirCureModelDecisionExplorer() {
  return (
    <ProjectExplorer
      id="circure-model-decision"
      title="One model, three decisions, one Wet–Dry return."
      introduction="CirCure decision path"
      boundary="Framework state · project-specific questions are defined; numerical rankings, fitted parameters, and validated conclusions are not yet claimed."
      steps={modelSteps}
    />
  );
}

export function CirCureSoftwareWorkflowExplorer() {
  return (
    <ProjectExplorer
      id="circure-software-workflow"
      title="The interface carries evidence, not just scores."
      introduction="CirCure evidence workflow"
      boundary="Product state · the workflow and record contract are proposed; executable software, interface captures, user tests, and a tagged release are not yet claimed."
      steps={softwareSteps}
    />
  );
}

export function CirCureHardwareEvidenceExplorer() {
  return (
    <ProjectExplorer
      id="circure-hardware-evidence"
      title="Begin with the evidence gate, then design the device."
      introduction="CirCure measurement targets"
      boundary="Build state · these are project-specific design requirements, not a completed apparatus; one measurement bottleneck, quantitative thresholds, and a verified build must still be selected."
      steps={hardwareSteps}
    />
  );
}
