import { useState } from "react";

const judgeBrief = [
  [
    "User",
    "Who has the problem?",
    "Named operator, context, and task evidence",
  ],
  [
    "Utility",
    "What decision changes?",
    "Before/after workflow and acceptance rule",
  ],
  [
    "Trust",
    "Why should the output be believed?",
    "Tests, provenance, warnings, and failure record",
  ],
  [
    "Reuse",
    "Can another team run it?",
    "Release, quickstart, expected output, and ownership",
  ],
];

export function SoftwareUserTaskBrief() {
  return (
    <div className="software-user-brief" data-software-placeholder>
      <header className="software-feature-heading">
        <div>
          <span>Judge brief / user-task contract</span>
          <strong>
            Four questions define whether this is software or only a concept.
          </strong>
        </div>
        <p>Evidence architecture · awaiting product records</p>
      </header>

      <div className="software-user-brief__grid">
        {judgeBrief.map(([label, question, evidence], index) => (
          <article key={label}>
            <span>
              0{index + 1} / {label}
            </span>
            <h3>{question}</h3>
            <p>{evidence}</p>
            <small>Evidence slot · planned</small>
          </article>
        ))}
      </div>

      <article className="software-job-story">
        <span>Proposed job story</span>
        <p>
          <strong>When</strong> a defined CirCure evidence record needs review,
          <strong> I need to</strong> validate, run, inspect, and export it,
          <strong> so I can</strong> make one traceable project decision and
          recover from an invalid state.
        </p>
        <b>Illustrative structure · user and task not yet validated</b>
      </article>

      <div
        className="software-table-scroll"
        role="region"
        aria-label="User task acceptance contract"
      >
        <table>
          <caption>Table S-01. User-task evidence contract</caption>
          <thead>
            <tr>
              <th scope="col">Evidence</th>
              <th scope="col">Required record</th>
              <th scope="col">Acceptance signal</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">User need</th>
              <td>Interview / observation / workflow evidence</td>
              <td>Named pain and desired decision</td>
              <td>
                <span className="software-data-state">awaiting evidence</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Task completion</th>
              <td>Representative scenario + observable outcome</td>
              <td>Success, time, errors, recovery</td>
              <td>
                <span className="software-data-state">not tested</span>
              </td>
            </tr>
            <tr>
              <th scope="row">Project consequence</th>
              <td>Exported decision record + owner review</td>
              <td>Retain, revise, reject, or escalate</td>
              <td>
                <span className="software-data-state">not claimed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

const scopeRows = [
  [
    "Input validation",
    "Observable schema result",
    "No implementation supplied",
  ],
  ["Versioned computation", "Run ID + method record", "No executable supplied"],
  [
    "Evidence inspection",
    "Output + provenance + warning",
    "No interface supplied",
  ],
  ["Decision export", "Human + machine-readable record", "No export supplied"],
];

export function SoftwareScopeContract() {
  return (
    <figure className="software-scope-contract" data-software-placeholder>
      <figcaption className="software-feature-heading">
        <div>
          <span>Fig. S-01 / Product boundary</span>
          <strong>
            Keep supported behavior and prohibited inference in the same view.
          </strong>
        </div>
        <p>Claim boundary · no feature is marked complete</p>
      </figcaption>

      <div className="software-scope-contract__split">
        <article>
          <span>Proposed responsibility</span>
          <h3>The tool may support a traceable task.</h3>
          <ul>
            <li>Validate documented fields and formats</li>
            <li>Run a named, versioned method</li>
            <li>Expose evidence, warning, and provenance</li>
            <li>Export a reviewable decision record</li>
          </ul>
        </article>
        <article>
          <span>Explicit non-claim</span>
          <h3>The tool cannot create scientific authority.</h3>
          <ul>
            <li>Do not infer correctness from a completed job</li>
            <li>Do not hide missing or out-of-domain input</li>
            <li>Do not replace model validation or Wet Lab evidence</li>
            <li>Do not bypass accountable human review</li>
          </ul>
        </article>
      </div>

      <div className="software-table-scroll">
        <table>
          <caption>Table S-02. Claim state register</caption>
          <thead>
            <tr>
              <th scope="col">Proposed behavior</th>
              <th scope="col">Evidence required</th>
              <th scope="col">Current boundary</th>
            </tr>
          </thead>
          <tbody>
            {scopeRows.map((row) => (
              <tr key={row[0]}>
                <th scope="row">{row[0]}</th>
                <td>{row[1]}</td>
                <td>
                  <span className="software-data-state">{row[2]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </figure>
  );
}

const architectureLayers = [
  {
    number: "01",
    short: "User",
    title: "Task & review",
    input: "CirCure candidate or construct record + intended decision",
    output: "Correction, shortlist review, construct review, or export action",
    trust: "Accessibility, privacy, and human approval",
    failure: "Invalid task, unclear warning, abandoned flow",
  },
  {
    number: "02",
    short: "Service",
    title: "Orchestration",
    input: "Validated sequence record + scoring configuration",
    output: "Versioned CirCure analysis state + audit log",
    trust: "Authentication, retries, timeout, and logging",
    failure: "Partial job, dependency outage, unsafe retry",
  },
  {
    number: "03",
    short: "Model",
    title: "Scientific logic",
    input: "TNBC relevance, presentation, coverage, safety, and redundancy",
    output: "Score decomposition + sensitivity + applicability warning",
    trust: "Method, database, threshold, and applicability",
    failure: "Out-of-domain input or unsupported inference",
  },
  {
    number: "04",
    short: "Data",
    title: "Evidence & provenance",
    input: "Epitope source, database version, construct history, and review",
    output: "Portable candidate or construct evidence package",
    trust: "License, privacy, lineage, and checksum",
    failure: "Missing source, stale version, or policy breach",
  },
];

export function SoftwareArchitectureFlow() {
  const [active, setActive] = useState(0);
  const selected = architectureLayers[active];

  return (
    <figure className="software-architecture-flow" data-software-placeholder>
      <figcaption className="software-feature-heading">
        <div>
          <span>Fig. S-02 / Architecture and data flow</span>
          <strong>
            The complete chain stays visible; selection reveals one trust
            boundary.
          </strong>
        </div>
        <p>Interactive focus · keyboard and touch accessible</p>
      </figcaption>

      <div
        className="software-architecture-flow__route"
        aria-label="Select a software architecture layer"
      >
        {architectureLayers.map((layer, index) => (
          <button
            type="button"
            key={layer.number}
            aria-pressed={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{layer.number}</span>
            <strong>{layer.short}</strong>
            <small>{layer.title}</small>
          </button>
        ))}
        <i aria-hidden="true" />
      </div>

      <article className="software-architecture-flow__focus" aria-live="polite">
        <header>
          <span>Selected boundary</span>
          <strong>
            {selected.short} / {selected.title}
          </strong>
        </header>
        <dl>
          <div>
            <dt>Input</dt>
            <dd>{selected.input}</dd>
          </div>
          <div>
            <dt>Output</dt>
            <dd>{selected.output}</dd>
          </div>
          <div>
            <dt>Trust record</dt>
            <dd>{selected.trust}</dd>
          </div>
          <div>
            <dt>Failure point</dt>
            <dd>{selected.failure}</dd>
          </div>
        </dl>
      </article>

      <div className="software-architecture-flow__provenance">
        <span>Source and version metadata travel with every transition</span>
        <i aria-hidden="true" />
        <b>provenance</b>
      </div>
    </figure>
  );
}

const runSteps = [
  {
    number: "01",
    label: "Input",
    screen: "CirCure candidate record intake",
    record:
      "Candidate ID, sequence, TNBC source, HLA context, provenance, and review intent",
    failure: "Invalid sequence, missing citation, or undefined HLA context",
  },
  {
    number: "02",
    label: "Validate",
    screen: "Epitope evidence validation",
    record:
      "Sequence alphabet, required sources, database versions, duplicates, and missingness",
    failure: "Ambiguous evidence or a field silently coerced",
  },
  {
    number: "03",
    label: "Run",
    screen: "Versioned CirCure scoring run",
    record:
      "Model release, weights, gates, database versions, progress, and run ID",
    failure: "External predictor outage, cancellation, or partial candidate set",
  },
  {
    number: "04",
    label: "Inspect",
    screen: "Candidate and construct evidence review",
    record:
      "Score decomposition, hard exclusions, sensitivity, provenance, and alternatives",
    failure: "Ranking shown without evidence or applicability boundary",
  },
  {
    number: "05",
    label: "Export",
    screen: "CirCure decision package",
    record:
      "Candidates, construct version, methods, warnings, reviewer, timestamp, and checksum",
    failure: "Export loses a candidate source or construct relationship",
  },
  {
    number: "06",
    label: "Recover",
    screen: "Editable evidence checkpoint",
    record:
      "Last valid record, failed dependency, correction, safe retry, and escalation",
    failure: "Researcher must rebuild a reviewed candidate set from scratch",
  },
];

const schemaRows = [
  [
    "candidate_id",
    "string",
    "required",
    "Stable CirCure epitope candidate identifier",
    "proposed",
  ],
  [
    "epitope_sequence",
    "amino-acid string",
    "required",
    "Validated alphabet, length, and sequence version",
    "proposed",
  ],
  [
    "tnbc_evidence",
    "citation object",
    "required",
    "Disease relevance, source, retrieval date, and version",
    "proposed",
  ],
  [
    "presentation_record",
    "typed object",
    "required",
    "HLA context, method version, score, threshold, and warning",
    "proposed",
  ],
  [
    "construct_version",
    "string / null",
    "conditional",
    "Links retained candidates to a reviewed multi-epitope design",
    "proposed",
  ],
  [
    "decision_record",
    "enum + text",
    "required",
    "Retain, reject, revise, or escalate with accountable reviewer",
    "proposed",
  ],
];

export function SoftwareRunEvidence() {
  const [active, setActive] = useState(0);
  const selected = runSteps[active];

  return (
    <div className="software-run-evidence" data-software-placeholder>
      <section className="software-run-stepper">
        <header className="software-feature-heading">
          <div>
            <span>Fig. S-03 / End-to-end run evidence</span>
            <strong>
              A real capture belongs at every state, including failure.
            </strong>
          </div>
          <p>Interface sequence · captures not supplied</p>
        </header>

        <div
          className="software-run-stepper__controls"
          aria-label="Select a run state"
        >
          {runSteps.map((step, index) => (
            <button
              type="button"
              key={step.number}
              aria-pressed={active === index}
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
            >
              <span>{step.number}</span>
              <strong>{step.label}</strong>
            </button>
          ))}
        </div>

        <article className="software-run-stepper__stage" aria-live="polite">
          <div
            className="software-run-stepper__screen"
            role="img"
            aria-label={`${selected.label} interface capture placeholder`}
          >
            <span>Screenshot slot / {selected.number}</span>
            <strong>{selected.screen}</strong>
            <i>Awaiting real interface capture</i>
          </div>
          <dl>
            <div>
              <dt>Evidence record</dt>
              <dd>{selected.record}</dd>
            </div>
            <div>
              <dt>Failure to show</dt>
              <dd>{selected.failure}</dd>
            </div>
            <div>
              <dt>Current state</dt>
              <dd>
                <span className="software-data-state">illustrative only</span>
              </dd>
            </div>
          </dl>
        </article>
      </section>

      <div className="software-run-evidence__records">
        <section
          className="software-schema-panel"
          aria-labelledby="software-schema-title"
        >
          <header className="software-feature-heading">
            <div>
              <span>Table S-03 / Input schema</span>
              <strong id="software-schema-title">
                Validation begins with a field-level contract.
              </strong>
            </div>
          </header>
          <div className="software-table-scroll">
            <table>
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  <th scope="col">Type</th>
                  <th scope="col">Rule</th>
                  <th scope="col">Evidence responsibility</th>
                  <th scope="col">State</th>
                </tr>
              </thead>
              <tbody>
                {schemaRows.map((row) => (
                  <tr key={row[0]}>
                    <th scope="row">
                      <code>{row[0]}</code>
                    </th>
                    <td>{row[1]}</td>
                    <td>{row[2]}</td>
                    <td>{row[3]}</td>
                    <td>
                      <span className="software-data-state">{row[4]}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="software-placeholder-note">
            Proposed schema vocabulary · replace with the implemented contract.
          </p>
        </section>

        <figure className="software-output-anatomy">
          <figcaption className="software-feature-heading">
            <div>
              <span>Fig. S-04 / Annotated output</span>
              <strong>
                Result, warning, provenance, and next action remain adjacent.
              </strong>
            </div>
          </figcaption>
          <div className="software-output-anatomy__canvas">
            <span data-slot="result">
              Result slot
              <br />
              <small>not claimed</small>
            </span>
            <span data-slot="evidence">
              Evidence decomposition
              <br />
              <small>awaiting output</small>
            </span>
            <span data-slot="uncertainty">
              Uncertainty / warning
              <br />
              <small>rule required</small>
            </span>
            <span data-slot="provenance">
              Release + data lineage
              <br />
              <small>record required</small>
            </span>
            <span data-slot="action">
              Review / export action
              <br />
              <small>decision required</small>
            </span>
          </div>
          <p className="software-placeholder-note">
            Layout preview only · no software result is represented.
          </p>
        </figure>
      </div>
    </div>
  );
}

const testRows = [
  [
    "Candidate schema validation",
    "Unit + property tests",
    "Valid epitope, invalid alphabet, missing source, duplicate ID",
    "not started",
  ],
  [
    "Epitope-to-decision workflow",
    "Integration + regression",
    "CirCure example record + expected evidence package",
    "not started",
  ],
  [
    "Ranking decomposition",
    "Reference / held-out comparison",
    "Versioned score, sensitivity, and model evidence",
    "not started",
  ],
  [
    "Accessibility",
    "Keyboard + screen reader + contrast",
    "Representative task",
    "not started",
  ],
  [
    "Security & privacy",
    "Threat / retention review",
    "Supported deployment",
    "not started",
  ],
];

export function SoftwareValidationPanel() {
  return (
    <div className="software-validation-panel" data-software-placeholder>
      <section className="software-test-matrix">
        <header className="software-feature-heading">
          <div>
            <span>Table S-04 / Test and benchmark matrix</span>
            <strong>
              Each claim needs a test family, fixture, environment, and failure
              record.
            </strong>
          </div>
        </header>
        <div className="software-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Claim</th>
                <th scope="col">Test</th>
                <th scope="col">Evidence</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {testRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>
                    <span className="software-data-state">{row[3]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <figure className="software-benchmark-placeholder">
        <figcaption className="software-feature-heading">
          <div>
            <span>Fig. S-05 / Benchmark evidence</span>
            <strong>
              Distribution, baseline, environment, and practical budget belong
              together.
            </strong>
          </div>
        </figcaption>
        <div
          className="software-benchmark-placeholder__plot"
          role="img"
          aria-label="Empty benchmark plot awaiting measured runs"
        >
          {["Current workflow", "Proposed tool", "Practical budget"].map(
            (label) => (
              <div key={label}>
                <span>{label}</span>
                <i>
                  <b />
                </i>
                <small>measurement required</small>
              </div>
            ),
          )}
          <strong>Awaiting benchmark data</strong>
        </div>
        <p className="software-placeholder-note">
          No latency, memory, throughput, or accuracy value is claimed.
        </p>
      </figure>

      <section className="software-failure-recovery">
        <header className="software-feature-heading">
          <div>
            <span>Failure recovery contract</span>
            <strong>
              A failed state should preserve context and offer one safe next
              action.
            </strong>
          </div>
        </header>
        <div>
          {[
            [
              "Invalid input",
              "Identify the CirCure field and scientific consequence",
              "Correct without losing valid work",
            ],
            [
              "Prediction dependency outage",
              "Name the service, candidate subset, and retained state",
              "Retry safely or export diagnostic",
            ],
            [
              "Conflicting evidence",
              "Expose disagreement between TNBC relevance and model evidence",
              "Escalate to accountable review",
            ],
          ].map(([failure, response, recovery], index) => (
            <article key={failure}>
              <span>0{index + 1}</span>
              <h3>{failure}</h3>
              <p>{response}</p>
              <strong>{recovery}</strong>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export function SoftwareIterationTimeline() {
  return (
    <figure className="software-iteration-timeline" data-software-placeholder>
      <figcaption className="software-feature-heading">
        <div>
          <span>Fig. S-06 / Feedback-to-release ledger</span>
          <strong>
            A testimonial becomes evidence only when it changes and retests the
            product.
          </strong>
        </div>
        <p>User-test record · no participants supplied</p>
      </figcaption>

      <div className="software-iteration-timeline__route">
        {[
          [
            "01",
            "Task",
            "Review a CirCure candidate set and justify one advance decision",
          ],
          ["02", "Observe", "Error, hesitation, access barrier, or workaround"],
          ["03", "Change", "Versioned design or code response"],
          ["04", "Retest", "Measured consequence and new failure check"],
        ].map(([number, title, detail]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <p>{detail}</p>
            <small>awaiting record</small>
          </article>
        ))}
      </div>

      <div className="software-iteration-timeline__ledger">
        <div>
          <span>Participant / context</span>
          <strong>awaiting representative user</strong>
        </div>
        <div>
          <span>Observed evidence</span>
          <strong>awaiting task record</strong>
        </div>
        <div>
          <span>Version consequence</span>
          <strong>not claimed</strong>
        </div>
        <div>
          <span>Retest result</span>
          <strong>not tested</strong>
        </div>
      </div>
    </figure>
  );
}

const releaseTemplate = `release:
  repository: awaiting-url
  tag: awaiting-tag
  environment: awaiting-lockfile
  command: awaiting-entry-point
  example_input: circure-candidate-record.json
  expected_output: awaiting-checksum`;

const releaseRecords = [
  ["Repository", "Canonical source + stable URL", "awaiting"],
  ["Release", "Tag + changelog + source archive", "awaiting"],
  ["Environment", "Runtime + lockfile + supported platform", "awaiting"],
  ["Example", "Input + command + expected output", "awaiting"],
  ["Quality", "Tests + coverage + benchmark + security", "awaiting"],
  ["Reuse", "License + docs + issues + maintainers", "awaiting"],
];

export function SoftwareReleasePackage() {
  const [copyState, setCopyState] = useState("Copy release template");

  const copyTemplate = async () => {
    try {
      await navigator.clipboard.writeText(releaseTemplate);
      setCopyState("Template copied");
    } catch {
      setCopyState("Copy unavailable");
    }
  };

  return (
    <div className="software-release-package" data-software-placeholder>
      <section className="software-quickstart-template">
        <header className="software-feature-heading">
          <div>
            <span>Code S-01 / Release documentation template</span>
            <strong>
              Quickstart remains unavailable until every placeholder has
              evidence.
            </strong>
          </div>
          <p>Documentation template · not executable</p>
        </header>
        <div className="software-code-block">
          <header>
            <span>release-contract.yaml</span>
            <button type="button" onClick={copyTemplate}>
              {copyState}
            </button>
          </header>
          <pre>
            <code>{releaseTemplate}</code>
          </pre>
        </div>
        <p className="software-placeholder-note">
          This copies a record template, not a runnable command.
        </p>
      </section>

      <section className="software-release-checklist">
        <header className="software-feature-heading">
          <div>
            <span>Release contract / minimum viable reuse</span>
            <strong>
              Another team should verify one output before adapting the tool.
            </strong>
          </div>
        </header>
        <div>
          {releaseRecords.map(([title, record, state], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{record}</p>
              <i aria-label={state} />
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const limitationRows = [
  [
    "Invalid epitope sequence or missing provenance",
    "Validation",
    "Stop before run",
    "Add CirCure fixture + rule + correction guidance",
  ],
  [
    "Unsupported HLA context or TNBC evidence source",
    "Candidate interpretation",
    "Warn and require review",
    "New validation evidence",
  ],
  [
    "External service unavailable",
    "Completeness / latency",
    "Preserve state; safe retry",
    "Fallback and outage test",
  ],
  [
    "Sensitive or restricted data",
    "Storage / export",
    "Reject or minimise",
    "Privacy and security review",
  ],
  [
    "Unverified release environment",
    "Reproducibility",
    "Do not claim support",
    "Independent installation record",
  ],
];

export function SoftwareLimitationsAndAppendices() {
  return (
    <div className="software-limitations-release" data-software-placeholder>
      <section className="software-responsible-matrix">
        <header className="software-feature-heading">
          <div>
            <span>Table S-05 / Responsible-use boundary</span>
            <strong>
              Every unsupported condition names a safe state and extension
              evidence.
            </strong>
          </div>
        </header>
        <div className="software-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Condition</th>
                <th scope="col">Affected claim</th>
                <th scope="col">Safe response</th>
                <th scope="col">Evidence before extension</th>
              </tr>
            </thead>
            <tbody>
              {limitationRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="software-ownership-register">
        <header className="software-feature-heading">
          <div>
            <span>Ownership and attribution register</span>
            <strong>
              Code, data, design, generated assets, and prior methods need
              separate credit.
            </strong>
          </div>
        </header>
        <div>
          {[
            ["Student implementation", "contributors + commits + review"],
            ["Scientific method", "Model section + cited prior work"],
            ["Data and databases", "source + license + retrieval version"],
            ["Libraries and services", "dependency + license + role"],
            [
              "Design and generated assets",
              "creator + tool + modification record",
            ],
          ].map(([title, record], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{record}</p>
              <small>awaiting record</small>
            </article>
          ))}
        </div>
      </section>

      <section
        className="software-technical-appendices"
        aria-labelledby="software-appendix-title"
      >
        <header>
          <span>Progressive disclosure</span>
          <h3 id="software-appendix-title">Technical appendices</h3>
          <p>
            Core task, run, validation, and limitations remain open.
            Machine-level records may fold.
          </p>
        </header>
        <details>
          <summary>
            <span>Appendix A</span> Complete schemas and error catalogue{" "}
            <b>＋</b>
          </summary>
          <p>
            Reserved for implemented request/response schemas, constraints,
            units, examples, validation codes, and migration rules.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix B</span> API, CLI, environment, and deployment{" "}
            <b>＋</b>
          </summary>
          <p>
            Reserved for tagged interfaces, environment locks, platform support,
            deployment topology, configuration, and security notes.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix C</span> Test logs, benchmarks, changelog, and
            references <b>＋</b>
          </summary>
          <p>
            Reserved for machine-readable results, retained failures, benchmark
            protocols, release history, and cited methods.
          </p>
        </details>
      </section>
    </div>
  );
}
