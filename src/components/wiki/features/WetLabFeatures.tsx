import { useState } from "react";
import "../../../styles/wiki-features.css";

const gates = [
  {
    short: "Construct",
    title: "Confirm the material before testing its behavior.",
    proof: "Annotated sequence · clone identity · sample lineage",
  },
  {
    short: "Circularize",
    title: "Use an orthogonal topology evidence bundle.",
    proof: "Junction · RNase R comparison · product purity",
  },
  {
    short: "Express",
    title: "Read translation beside delivery and viability.",
    proof: "Matched input · time course · cell state",
  },
  {
    short: "Present",
    title: "Separate activation from sequence-specific display.",
    proof: "Presentation assay · irrelevant epitope control",
  },
  {
    short: "Recognize",
    title: "Reserve the final claim for selective function.",
    proof: "Target comparison · specificity · functional baseline",
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
      <div className="wet-gate-map__route" role="list">
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
      <article className="wet-gate-map__detail" aria-live="polite">
        <span>Gate {String(activeGate + 1).padStart(2, "0")}</span>
        <h3>{gates[activeGate].title}</h3>
        <p>{gates[activeGate].proof}</p>
        <b>planned evidence · not yet claimed</b>
      </article>
    </figure>
  );
}

export function WetLabSignature({
  variant,
}: {
  variant:
    | "experiments"
    | "notebook"
    | "measurement"
    | "platform"
    | "safety";
}) {
  if (variant === "experiments") return <FiveGateMap compact />;
  if (variant === "notebook") return <NotebookTrace compact />;
  if (variant === "measurement") return <MeasurementWindow compact />;
  if (variant === "platform") return <PlatformOrbit compact />;
  return <SafetyBoundary compact />;
}

export function NotebookTrace({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`signature-panel signature-panel--wet wet-notebook ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Lab record</span>
        <strong>Chronology with an evidence spine</strong>
      </figcaption>
      <div className="wet-notebook__margin" aria-hidden="true" />
      {[
        ["NB–01", "Construct acceptance"],
        ["NB–02", "Assembly + sequence review"],
        ["NB–03", "RNA production"],
        ["NB–04", "Decision returned"],
      ].map(([id, label], index) => (
        <article key={id}>
          <span>2026 / 0{index + 1}</span>
          <b>{id}</b>
          <strong>{label}</strong>
          <i data-state={index < 2 ? "recorded" : "planned"} />
        </article>
      ))}
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
        {points.map((value, index) => (
          <span
            key={`${readout}-${index}`}
            style={{ left: `${14 + index * 18}%`, bottom: `${value}%` }}
          />
        ))}
      </div>
      <p>Illustrative structure only · replace with team measurements</p>
    </figure>
  );
}

export function PlatformOrbit({ compact = false }: { compact?: boolean }) {
  const [context, setContext] = useState<"mammalian" | "cell-free">("mammalian");
  return (
    <figure className={`signature-panel signature-panel--wet wet-platform ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Host context</span>
        <strong>The platform changes the meaning of a readout</strong>
      </figcaption>
      <div className="wet-platform__orbit" data-context={context}>
        <span className="wet-platform__payload">RNA</span>
        <i className="wet-platform__path" />
        <span className="wet-platform__host">{context}</span>
      </div>
      <div className="wet-platform__switch">
        {(["mammalian", "cell-free"] as const).map((option) => (
          <button
            type="button"
            className={context === option ? "is-active" : ""}
            onClick={() => setContext(option)}
            key={option}
          >
            {option}
          </button>
        ))}
      </div>
      <p>{context === "mammalian" ? "processing · delivery · viability" : "yield · folding · transferability"}</p>
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
      <div className="wet-safety__boundary">
        <strong>NO–GO</strong>
        <span>stop · record · return</span>
      </div>
      {rows.map(([label, text], index) => (
        <article className={`wet-safety__risk wet-safety__risk--${index + 1}`} key={label}>
          <b>{label}</b>
          <span>{text}</span>
        </article>
      ))}
    </figure>
  );
}

export function ProtocolStack() {
  return (
    <div className="feature-panel wet-protocols">
      <header>
        <span>Protocol library</span>
        <strong>Methods stay readable before any accordion opens</strong>
      </header>
      {[
        ["PR–01", "Construct assembly & sequence verification"],
        ["PR–02", "RNA production & topology evidence"],
        ["PR–03", "Delivery, expression & viability"],
        ["PR–04", "Presentation & functional comparison"],
      ].map(([id, title], index) => (
        <details key={id} open={index === 0}>
          <summary>
            <span>{id}</span>
            <strong>{title}</strong>
            <b>awaiting team record</b>
          </summary>
          <div>
            <p>Record materials, conditions, controls, deviations, sample lineage, analysis, and required attachments.</p>
            <small>Annotated method · raw record · acceptance rule · known limits</small>
          </div>
        </details>
      ))}
    </div>
  );
}

export function ReadoutMatrix() {
  return (
    <div className="feature-panel feature-table wet-readout-matrix">
      <header>
        <span>Claim</span>
        <span>Readout</span>
        <span>Must remain separate</span>
      </header>
      {[
        ["Topology", "Junction + stability", "Purity"],
        ["Expression", "Encoded signal", "Delivery + viability"],
        ["Presentation", "Sequence-specific display", "General activation"],
        ["Function", "Selective response", "Non-specific stress"],
      ].map((row) => (
        <div key={row[0]}>
          {row.map((cell) => (
            <span key={cell}>{cell}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
