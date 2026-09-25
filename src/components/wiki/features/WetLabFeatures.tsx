import { useState, type CSSProperties } from "react";
import "../../../styles/wiki-features.css";

const gates = [
  {
    short: "Construct",
    title: "Confirm the material before testing its behavior.",
    proof: "Annotated sequence · clone identity · sample lineage",
    decision: "Advance only after identity and critical junctions resolve.",
  },
  {
    short: "Circularize",
    title: "Use an orthogonal topology evidence bundle.",
    proof: "Junction · RNase R comparison · product purity",
    decision: "Repeat or purify when topology remains ambiguous.",
  },
  {
    short: "Express",
    title: "Read translation beside delivery and viability.",
    proof: "Matched input · time course · cell state",
    decision: "Reject conditions where signal tracks unacceptable stress.",
  },
  {
    short: "Present",
    title: "Separate activation from sequence-specific display.",
    proof: "Presentation assay · irrelevant epitope control",
    decision: "Do not infer presentation from expression alone.",
  },
  {
    short: "Recognize",
    title: "Reserve the final claim for selective function.",
    proof: "Target comparison · specificity · functional baseline",
    decision: "Bound the claim to the tested target and assay window.",
  },
];

export function FiveGateMap({ compact = false }: { compact?: boolean }) {
  const [activeGate, setActiveGate] = useState(0);
  return (
    <figure className={`wet-gate-map ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Experimental evidence map</span>
        <strong>Five gates. No skipped claims.</strong>
      </figcaption>
      <div
        className="wet-gate-map__route"
        role="list"
        style={
          {
            "--wet-gate-progress": activeGate / (gates.length - 1),
          } as CSSProperties
        }
      >
        {gates.map((gate, index) => (
          <button
            type="button"
            className={activeGate === index ? "is-active" : ""}
            onClick={() => setActiveGate(index)}
            aria-pressed={activeGate === index}
            key={gate.short}
          >
            <span>0{index + 1}</span>
            <i aria-hidden="true" />
            <strong>{gate.short}</strong>
          </button>
        ))}
      </div>
      <article
        className="wet-gate-map__detail"
        aria-live="polite"
        key={activeGate}
      >
        <div className="wet-gate-map__detail-head">
          <span>Gate {String(activeGate + 1).padStart(2, "0")}</span>
          <b>planned evidence · not yet claimed</b>
        </div>
        <h3>{gates[activeGate].title}</h3>
        <div className="wet-gate-map__brief">
          <p>
            <span>Evidence bundle</span>
            {gates[activeGate].proof}
          </p>
          <p>
            <span>Decision boundary</span>
            {gates[activeGate].decision}
          </p>
        </div>
      </article>
    </figure>
  );
}

export function NotebookTrace({ compact = false }: { compact?: boolean }) {
  const records = [
    ["12 Mar", "NB–01", "Construct acceptance", "design", "recorded"],
    ["18 Mar", "NB–02", "Assembly + sequence review", "build", "recorded"],
    ["02 Apr", "NB–03", "RNA production", "test", "planned"],
    ["08 Apr", "NB–04", "Decision returned", "learn", "planned"],
  ] as const;

  return (
    <figure className={`signature-panel signature-panel--wet wet-notebook ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Lab record</span>
        <strong>Chronology with an evidence spine</strong>
      </figcaption>
      <div className="wet-notebook__margin" aria-hidden="true" />
      <div className="wet-notebook__entries">
        {records.map(([date, id, label, phase, state]) => (
          <article key={id}>
            <span>{date}</span>
            <b>{id}</b>
            <div>
              <strong>{label}</strong>
              <small>{phase} · sample trace attached</small>
            </div>
            <i data-state={state} aria-label={state} />
          </article>
        ))}
      </div>
      <footer className="wet-notebook__footer">
        <span>Record → sample → raw file → decision</span>
        <b>4 linked entries</b>
      </footer>
    </figure>
  );
}

export function MeasurementWindow({ compact = false }: { compact?: boolean }) {
  const [readout, setReadout] = useState<"topology" | "expression" | "function">(
    "topology",
  );
  const points = {
    topology: [62, 46, 37, 28, 23],
    expression: [76, 57, 44, 54, 69],
    function: [30, 34, 42, 55, 61],
  }[readout];
  const readoutMeta = {
    topology: ["Junction + stability", "Matched linear RNA", "Advance / purify"],
    expression: ["Encoded signal", "Delivery + viability", "Advance / retune"],
    function: ["Selective response", "Non-specific stress", "Claim / reject"],
  }[readout];
  const polyline = points
    .map((value, index) => `${14 + index * 18},${100 - value}`)
    .join(" ");

  return (
    <figure className={`signature-panel signature-panel--wet wet-measurement ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Measurement window</span>
        <strong>Material → instrument → number → decision</strong>
      </figcaption>
      <div className="wet-measurement__tabs" aria-label="Select a measurement claim">
        {(["topology", "expression", "function"] as const).map((option) => (
          <button
            type="button"
            key={option}
            className={readout === option ? "is-active" : ""}
            onClick={() => setReadout(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <div className="wet-measurement__plot" aria-label={`${readout} illustrative measurement structure`}>
        <i className="axis axis--x" />
        <i className="axis axis--y" />
        <svg
          key={readout}
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <polyline points={polyline} />
        </svg>
        {points.map((value, index) => (
          <span
            key={`${readout}-${index}`}
            style={{ left: `${14 + index * 18}%`, bottom: `${value}%` }}
          />
        ))}
        <small className="wet-measurement__axis-label wet-measurement__axis-label--y">
          normalized signal
        </small>
        <small className="wet-measurement__axis-label wet-measurement__axis-label--x">
          matched condition
        </small>
      </div>
      <div className="wet-measurement__legend" key={readout}>
        {[
          ["Readout", readoutMeta[0]],
          ["Keep separate", readoutMeta[1]],
          ["Decision", readoutMeta[2]],
        ].map(([label, value]) => (
          <span key={label}>
            <small>{label}</small>
            <strong>{value}</strong>
          </span>
        ))}
      </div>
      <p>Illustrative structure only · replace with calibrated team measurements</p>
    </figure>
  );
}

export function SafetyBoundary({ compact = false }: { compact?: boolean }) {
  const rows = [
    ["Material", "unresolved identity"],
    ["Cell state", "signal coupled to stress"],
    ["Claim", "evidence exceeds scope"],
    ["Governance", "consent or access unclear"],
  ];
  return (
    <figure className={`signature-panel signature-panel--wet wet-safety ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Continuation gate</span>
        <strong>A no-go condition is an engineering result</strong>
      </figcaption>
      <div className="wet-safety__map">
        <div className="wet-safety__boundary">
          <small>Continuation decision</small>
          <strong>NO–GO</strong>
          <span>stop · record · return</span>
        </div>
        <div className="wet-safety__risks">
          {rows.map(([label, text], index) => (
            <article className={`wet-safety__risk wet-safety__risk--${index + 1}`} key={label}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <b>{label}</b>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </div>
    </figure>
  );
}

export function ProtocolStack() {
  const protocols = [
    "Construct assembly & sequence verification",
    "RNA production & topology evidence",
    "Delivery, expression & viability",
    "Presentation & functional comparison",
  ] as const;

  return (
    <div className="feature-panel wet-protocols">
      <header>
        <strong>Methods stay readable before any record opens.</strong>
      </header>
      {protocols.map((title, index) => (
        <details key={title} open={index === 0}>
          <summary>
            <strong>{title}</strong>
            <i aria-hidden="true">+</i>
          </summary>
          <div>
            <p>
              State the biological question and the competing explanation this method tests.
            </p>
            <p>
              Materials, conditions, controls, deviations, sample lineage, analysis, and attachments.
            </p>
            <p>
              Define the evidence threshold, failure state, and next decision before reading the result.
            </p>
          </div>
        </details>
      ))}
    </div>
  );
}

export function ReadoutMatrix() {
  const rows = [
    ["Topology", "Junction + stability", "Purity", "Advance / purify"],
    ["Expression", "Encoded signal", "Delivery + viability", "Advance / retune"],
    ["Presentation", "Sequence-specific display", "General activation", "Advance / redesign"],
    ["Function", "Selective response", "Non-specific stress", "Claim / reject"],
  ];

  return (
    <div className="feature-panel feature-table wet-readout-matrix">
      <header>
        <span>Claim</span>
        <span>Readout</span>
        <span>Must remain separate</span>
        <span>Decision supported</span>
      </header>
      {rows.map((row) => (
        <div key={row[0]}>
          {row.map((cell) => (
            <span key={cell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function NotebookRecordSchema() {
  const fields = [
    ["01", "Context", "Question · owner · protocol version"],
    ["02", "Execution", "Sample lineage · parameters · deviations"],
    ["03", "Observation", "Raw files · visible outcome · uncertainty"],
    ["04", "Decision", "Interpretation · next action · responsible person"],
  ];

  return (
    <div className="feature-panel wet-record-schema">
      <header>
        <span>Entry anatomy</span>
        <strong>One record should survive a handoff.</strong>
      </header>
      <div>
        {fields.map(([number, title, body]) => (
          <article key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function NotebookTraceability() {
  const rows = [
    ["NB–xx", "Dated execution", "Protocol + samples", "What happened"],
    ["EXP–xx", "Controlled method", "Notebook records", "How to repeat"],
    ["RES–xx", "Bounded result", "Raw files + analysis", "What it supports"],
    ["DR–xx", "Project decision", "Result + rationale", "What changed"],
  ];

  return (
    <div className="feature-panel feature-table wet-traceability">
      <header>
        <span>Record</span>
        <span>Primary role</span>
        <span>Must link to</span>
        <span>Reader learns</span>
      </header>
      {rows.map((row) => (
        <div key={row[0]}>
          {row.map((cell) => (
            <span key={cell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}

export function MeasurementPublicationGate() {
  const checks = [
    ["Source", "Raw file and sample IDs resolve."],
    ["Scale", "Axes, units, transforms, and baselines are named."],
    ["Structure", "Replicates, error, exclusions, and analysis are explicit."],
    ["Boundary", "Caption states what the figure cannot establish."],
  ];

  return (
    <div className="feature-panel wet-publication-gate">
      <header>
        <span>Figure release gate</span>
        <strong>A visible result is not yet an auditable result.</strong>
      </header>
      <div>
        {checks.map(([label, body], index) => (
          <article key={label}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{label}</strong>
            <p>{body}</p>
            <i aria-hidden="true" />
          </article>
        ))}
      </div>
    </div>
  );
}

export function SafetyControlHierarchy() {
  const controls = [
    ["01", "Eliminate", "Remove unnecessary hazards and claims."],
    ["02", "Engineer", "Build containment and failure visibility into the system."],
    ["03", "Administer", "Assign training, inventory, review, and escalation."],
    ["04", "Protect", "Use task-specific PPE as the final layer."],
  ];

  return (
    <div className="feature-panel wet-control-hierarchy">
      <header>
        <span>Control hierarchy</span>
        <strong>Prefer design changes over procedural reminders.</strong>
      </header>
      <div>
        {controls.map(([number, title, body], index) => (
          <article className={`level-${index + 1}`} key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function SafetyNoGoLedger() {
  const rows = [
    ["SAFE–01", "Identity or topology unresolved", "Stop interpretation · return to material"],
    ["SAFE–02", "Signal tracks unacceptable stress", "Reject condition · revise dose or design"],
    ["SAFE–03", "Evidence exceeds medical claim", "Restrict conclusion · publish the boundary"],
    ["SAFE–04", "Consent or access is unclear", "Do not release · escalate review"],
  ];

  return (
    <div className="feature-panel wet-no-go-ledger">
      <header>
        <span>Continuation ledger</span>
        <strong>A stop decision remains a documented result.</strong>
      </header>
      {rows.map(([id, trigger, action]) => (
        <article key={id}>
          <span>{id}</span>
          <strong>{trigger}</strong>
          <p>{action}</p>
          <b>NO–GO</b>
        </article>
      ))}
    </div>
  );
}

export { PlatformOrbit, PlatformWorkflow, PlatformEvidenceMatrix } from "./wet-lab/AlternativePlatformPanels";
