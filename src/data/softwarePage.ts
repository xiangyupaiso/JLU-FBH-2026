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
  title: "Make software inspectable.",
  lede: "Trace the path from input to review, export, and recovery.",
  boundary:
    "Awaiting executable code, interface captures, tests, benchmarks, and a tagged release.",
  visual: "software-console",
  visualLabel: "User task, data flow, run evidence, and release",
  visualSteps: ["need", "validate", "run", "inspect", "export", "recover"],
  facts: [
    {
      label: "User",
      value: "One named user and one costly task define the product.",
    },
    {
      label: "Run",
      value: "A worked example must reach a verifiable expected output.",
    },
    {
      label: "Trust",
      value: "Provenance, warnings, versions, and failures remain inspectable.",
    },
    {
      label: "Reuse",
      value: "Release, tests, ownership, and limits travel with the tool.",
    },
  ],
  sections: [
    {
      id: "software-user-task",
      index: "01",
      kicker: "User need & software claim",
      title: "Begin with the decision a user cannot make efficiently today.",
      summary:
        "A software contribution becomes credible when the user, trigger, current pain, desired decision, and acceptance evidence are visible before the feature list.",
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
      title: "Show what the tool does—and what it must never imply.",
      summary:
        "The final product contract should separate implemented behavior, planned capability, model responsibility, human review, and unsupported use.",
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
      title: "Let every module expose what enters, leaves, and can fail.",
      summary:
        "A system map should connect the user layer, orchestration, model logic, and data provenance without hiding external services or trust boundaries.",
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
      title: "Document the shortest successful path and every recovery path.",
      summary:
        "The final page should pair real interface captures with the exact input, validation state, run version, inspectable output, export, and correction behavior.",
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
      title: "Reliability is a matrix of evidence, not a success badge.",
      summary:
        "Tests, datasets, baselines, latency, accessibility, security, disagreement, and known failure cases must identify which claim they challenge.",
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
      title: "Connect feedback to a versioned product decision.",
      summary:
        "A useful iteration record names the user, task, observation, severity, change, retest, and measurable consequence instead of presenting an unverified testimonial.",
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
      title: "A reusable tool needs an executable release contract.",
      summary:
        "Repository, tagged release, environment, quickstart, example input, expected output, tests, documentation, license, ownership, and maintenance must agree.",
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
      title: "Show where the software must stop and ask for review.",
      summary:
        "Limitations become operational when each unsupported condition has a detection signal, user-facing warning, safe state, mitigation, and evidence needed for extension.",
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
