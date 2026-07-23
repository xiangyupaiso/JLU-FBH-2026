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
    input: "Documented record + user intent",
    output: "Correction, review, and export action",
    trust: "Accessibility, privacy, and human approval",
    failure: "Invalid task, unclear warning, abandoned flow",
  },
  {
    number: "02",
    short: "Service",
    title: "Orchestration",
    input: "Validated request + release configuration",
    output: "Versioned job state + audit log",
    trust: "Authentication, retries, timeout, and logging",
    failure: "Partial job, dependency outage, unsafe retry",
  },
  {
    number: "03",
    short: "Model",
    title: "Scientific logic",
    input: "Traceable features + parameters",
    output: "Result + uncertainty + warning",
    trust: "Method, database, threshold, and applicability",
    failure: "Out-of-domain input or unsupported inference",
  },
  {
    number: "04",
    short: "Data",
    title: "Evidence & provenance",
    input: "Source record + transformation history",
    output: "Versioned artifact + retention record",
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
    screen: "Input form or file intake",
    record: "Source, schema, units, privacy, and user intent",
    failure: "Unsupported type or missing required field",
  },
  {
    number: "02",
    label: "Validate",
    screen: "Field-level validation state",
    record: "Accepted, corrected, rejected, and warning states",
    failure: "Ambiguous error or silent coercion",
  },
  {
    number: "03",
    label: "Run",
    screen: "Versioned job state",
    record: "Release, configuration, dependency, progress, and run ID",
    failure: "Timeout, outage, cancellation, or partial result",
  },
  {
    number: "04",
    label: "Inspect",
    screen: "Evidence-linked output",
    record: "Decomposition, uncertainty, warning, and alternatives",
    failure: "Result shown without provenance or applicability",
  },
  {
    number: "05",
    label: "Export",
    screen: "Decision package",
    record: "Inputs, outputs, versions, warnings, timestamp, and checksum",
    failure: "Export loses context or machine-readable structure",
  },
  {
    number: "06",
    label: "Recover",
    screen: "Editable checkpoint",
    record: "Failure context, correction, retry, reset, and escalation",
    failure: "User must restart or cannot identify the last valid state",
  },
];

const schemaRows = [
  [
    "record_id",
    "string",
    "required",
    "Stable user or sample identifier",
    "proposed",
  ],
  [
    "evidence_source",
    "URI / citation",
    "required",
    "Source and retrieval record",
    "proposed",
  ],
  [
    "feature_values",
    "typed object",
    "conditional",
    "Units, missingness, transformations",
    "proposed",
  ],
  [
    "review_context",
    "enum / text",
    "required",
    "Intended task and responsible reviewer",
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
    "Schema validation",
    "Unit + property tests",
    "Valid / invalid fixtures",
    "not started",
  ],
  [
    "End-to-end task",
    "Integration + regression",
    "Worked example + expected artifact",
    "not started",
  ],
  [
    "Scientific output",
    "Reference / held-out comparison",
    "Versioned model evidence",
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
              "Identify field and reason",
              "Correct without losing valid work",
            ],
            [
              "Dependency outage",
              "Name service and retained state",
              "Retry safely or export diagnostic",
            ],
            [
              "Conflicting evidence",
              "Expose disagreement and limits",
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
          ["01", "Task", "Representative scenario + success rule"],
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
  example_input: awaiting-fixture
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
    "Unsupported schema or unit",
    "Validation",
    "Stop before run",
    "Add fixture + rule + user guidance",
  ],
  [
    "Out-of-domain scientific input",
    "Result interpretation",
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
