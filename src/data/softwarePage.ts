import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

/**
 * Software-only evidence contract.
 *
 * No executable product, repository, command, benchmark, user-test record, or
 * release artifact has been supplied. The page therefore describes the
 * publication structure and labels every unverified area explicitly.
 */
export const softwareEvidencePage: WikiPageContent = {
  route: "/software",
  category: "dry-lab",
  chapter: "Dry Lab / 02 of 03",
  eyebrow: "Software · User-facing evidence",
  title: "Software",
  lede: "One reproducible workflow from validation to export.",
  boundary:
    "The workflow is defined around CirCure, but executable code, interface captures, tests, benchmarks, and a tagged team release are still required.",
  visual: "software-console",
  visualLabel: "User task, data flow, run evidence, and release",
  visualSteps: ["need", "validate", "run", "inspect", "export", "recover"],
  facts: [
    {
      label: "User",
      value:
        "A CirCure researcher reviews candidates and construct evidence in one workflow.",
    },
    {
      label: "Run",
      value:
        "One versioned input must produce a verifiable candidate or construct record.",
    },
    {
      label: "Trust",
      value:
        "Scores retain provenance, uncertainty, warnings, versions, and failures.",
    },
    {
      label: "Reuse",
      value:
        "Release, tests, ownership, and scientific limits travel with every export.",
    },
  ],
  sections: [
    {
      id: "software-user-task",
      index: "01",
      kicker: "User need & software claim",
      navLabel: "User task",
      title: "User task and scientific decision.",
      summary:
        "The primary task is not to generate another score table: it is to help a CirCure researcher decide which candidate, construct revision, or experiment should advance and why.",
      layout: "matrix",
      items: [
        {
          label: "User",
          title: "Name the operator and context.",
          body: "Record expertise, platform, access needs, data responsibility, frequency of use, and the workflow that surrounds the tool.",
          status: "open",
        },
        {
          label: "Trigger",
          title: "Identify the costly moment.",
          body: "State what initiates the task, what is slow or error-prone now, and what existing method the software replaces or complements.",
          status: "planned",
        },
        {
          label: "Decision",
          title: "Define a verifiable outcome.",
          body: "A successful run should change a named candidate, review, experiment, export, or escalation decision—not merely produce a screen.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-scope",
      index: "02",
      kicker: "Claim and product boundary",
      navLabel: "Product scope",
      title: "Scope, claims, and review boundary.",
      summary:
        "Implemented workflow, planned capability, model responsibility, human review, and unsupported biological inference are separated before any interface feature is described.",
      layout: "ledger",
      items: [
        {
          label: "Does",
          title: "A bounded user task",
          body: "Reserve claims for actions that can be run, observed, tested, documented, and reproduced with a named release.",
          status: "planned",
        },
        {
          label: "Does not",
          title: "No automatic scientific authority",
          body: "The interface must not convert a model score, missing input, or external service response into an unsupported biological conclusion.",
          status: "recorded",
        },
        {
          label: "Escalates",
          title: "Human review remains explicit",
          body: "Warnings, out-of-domain inputs, conflicting evidence, and failed services should stop or redirect the workflow instead of silently continuing.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-architecture",
      index: "03",
      kicker: "Architecture & data flow",
      navLabel: "Architecture",
      title: "System architecture and data provenance.",
      summary:
        "The system connects CirCure candidate data, orchestration, model logic, construct records, and exported evidence without hiding external tools, transformations, or trust boundaries.",
      layout: "steps",
      items: [
        {
          label: "User layer",
          title: "Task and review interface",
          body: "Input guidance, validation feedback, progress, evidence inspection, warnings, correction, and export belong to the user-facing contract.",
          status: "planned",
        },
        {
          label: "Service layer",
          title: "Versioned orchestration",
          body: "Schema checks, job state, authentication, retries, logging, and deterministic configuration should be separable from scientific logic.",
          status: "planned",
        },
        {
          label: "Model layer",
          title: "Traceable computation",
          body: "Algorithms, parameters, thresholds, databases, assumptions, and uncertainty link back to the Model record.",
          status: "open",
        },
        {
          label: "Data layer",
          title: "Provenance and retention",
          body: "Sources, versions, transformations, privacy, storage, deletion, and exported audit records define the evidence boundary.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-workflow",
      index: "04",
      kicker: "Input → run → inspect → export",
      navLabel: "Run workflow",
      title: "A reproducible CirCure analysis workflow.",
      summary:
        "The shortest path runs from a documented epitope or construct record to a reviewed, versioned decision export; every invalid input, failed dependency, and correction path remains visible.",
      layout: "timeline",
      items: [
        {
          label: "01 · Input",
          title: "Accept a documented record.",
          body: "Declare required fields, units, formats, examples, provenance, consent or privacy constraints, and file-size limits.",
          status: "planned",
        },
        {
          label: "02 · Validate",
          title: "Reject usefully before computation.",
          body: "Errors should identify the field, reason, expected form, consequence, and correction without discarding valid work.",
          status: "planned",
        },
        {
          label: "03 · Run",
          title: "Expose job and method state.",
          body: "Show release, configuration, external dependencies, progress, cancellation, timeout, and deterministic identifiers.",
          status: "open",
        },
        {
          label: "04 · Inspect",
          title: "Keep evidence beside the output.",
          body: "Decomposition, uncertainty, warnings, provenance, alternatives, and unsupported inferences should remain visible together.",
          status: "planned",
        },
        {
          label: "05 · Export",
          title: "Package the decision record.",
          body: "Human-readable and machine-readable outputs should retain inputs, versions, evidence, warnings, timestamps, and checksums.",
          status: "planned",
        },
        {
          label: "06 · Recover",
          title: "Let users correct and rerun.",
          body: "Preserve editable state, failure context, safe retry, history, reset, escalation, and a route back to the last valid checkpoint.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-validation",
      index: "05",
      kicker: "Validation, benchmark & failure",
      navLabel: "Validation",
      title: "Validation, benchmarking, and failure handling.",
      summary:
        "Tests, reference datasets, relevant baselines, latency, accessibility, disagreement, and known failures are tied to the CirCure decision or software claim they challenge.",
      layout: "matrix",
      items: [
        {
          label: "Correctness",
          title: "Unit, integration, and regression evidence",
          body: "Tie every test family to an expected behavior, fixture, environment, release, pass condition, and retained failure record.",
          status: "planned",
        },
        {
          label: "Performance",
          title: "Compare a relevant baseline",
          body: "Report representative data, hardware, warm/cold state, latency distribution, memory, throughput, and practical budget.",
          status: "open",
        },
        {
          label: "Failure",
          title: "Make degraded states visible",
          body: "Invalid data, external-service outage, timeout, partial output, conflicting evidence, and unsafe retry need designed responses.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-iteration",
      index: "06",
      kicker: "User testing & iteration",
      navLabel: "Iteration",
      title: "User testing and versioned iteration.",
      summary:
        "Each iteration names the CirCure task, observed friction or error, severity, code or interface change, retest, and measurable consequence.",
      layout: "timeline",
      items: [
        {
          label: "Round 01 · Observe",
          title: "Test a representative task.",
          body: "Reserve the participant profile, scenario, success criterion, completion evidence, hesitation, error, and accessibility observation.",
          status: "planned",
        },
        {
          label: "Round 02 · Change",
          title: "Trace the product response.",
          body: "Record issue severity, affected claim, design or code change, owner, release, and why the change addresses the observed problem.",
          status: "open",
        },
        {
          label: "Round 03 · Retest",
          title: "Measure whether the task improved.",
          body: "Compare task success, time, errors, confidence, accessibility, and any new failure introduced by the revision.",
          status: "planned",
        },
      ],
    },
    {
      id: "software-release",
      index: "07",
      kicker: "Installation, release & reuse",
      navLabel: "Release & reuse",
      title: "Installation, release, and reuse.",
      summary:
        "Repository, tagged release, supported environment, CirCure example input, expected output, tests, documentation, license, ownership, and maintenance form one executable contract.",
      layout: "matrix",
      items: [
        {
          label: "Run",
          title: "Quickstart and expected output",
          body: "One supported environment, one command, one example, one expected artifact, one checksum or verification rule, and troubleshooting.",
          status: "planned",
        },
        {
          label: "Inspect",
          title: "Documentation and interface contract",
          body: "User guide, schemas, CLI/API reference, screenshots, architecture, changelog, issues, security notes, and deprecation policy.",
          status: "planned",
        },
        {
          label: "Extend",
          title: "License and contribution path",
          body: "OSI-approved license, code ownership, third-party notices, tests, contribution guide, maintainers, and stable identifiers.",
          status: "open",
        },
      ],
    },
    {
      id: "software-limitations",
      index: "08",
      kicker: "Responsible use, ownership & references",
      navLabel: "Limits & ownership",
      title: "Limitations, governance, and attribution.",
      summary:
        "Unsupported inputs and out-of-domain use must trigger a detectable warning, safe state, scientific review, and a record of the evidence required before the tool is extended.",
      layout: "ledger",
      items: [
        {
          label: "Applicability",
          title: "Define supported users, data, and conditions.",
          body: "Separate validated inputs and environments from plausible but untested cases, external dependencies, and out-of-domain use.",
          status: "open",
        },
        {
          label: "Responsibility",
          title: "Keep scientific and human review visible.",
          body: "Warnings, uncertainty, data quality, privacy, security, misuse, and escalation should remain part of the exported record.",
          status: "planned",
        },
        {
          label: "Ownership",
          title: "Credit code, data, design, and prior work.",
          body: "Distinguish student implementation, advisors, external contributors, reused libraries, generated assets, datasets, and cited methods.",
          status: "planned",
        },
      ],
      note: {
        label: "Current evidence boundary",
        body: "Every interface, command, status, and release slot on this page is illustrative until replaced with a tested team-owned artifact and a stable citation. Do not remove boundary labels to create the appearance of completion.",
      },
    },
  ],
  links: [
    { path: "/model", label: "Model evidence" },
    { path: "/human-practices", label: "User requirements" },
    { path: "/contribution", label: "Reusable releases" },
  ],
  next: {
    path: "/hardware",
    label: "Hardware",
    title: "Can the physical workflow be reproduced?",
  },
};
