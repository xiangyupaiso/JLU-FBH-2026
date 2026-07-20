import type { CSSProperties } from "react";
import "../../../styles/wiki-features.css";

const ringNodes = ["candidate set", "sequence logic", "topology", "response"];

export function ProjectSignature({
  variant,
}: {
  variant: "description" | "engineering" | "results" | "contribution";
}) {
  if (variant === "engineering") {
    return (
      <figure className="signature-panel signature-panel--project project-cycle-signature">
        <figcaption>
          <span>Project record</span>
          <strong>Evidence returns to the next build</strong>
        </figcaption>
        <div className="project-cycle-signature__ring" aria-hidden="true" />
        {[
          ["01", "Design"],
          ["02", "Build"],
          ["03", "Test"],
          ["04", "Learn"],
        ].map(([number, label], index) => (
          <span
            className={`project-cycle-signature__step project-cycle-signature__step--${index + 1}`}
            key={label}
          >
            <b>{number}</b>
            {label}
          </span>
        ))}
        <p>Each completed decision closes one part of the ring.</p>
      </figure>
    );
  }

  if (variant === "results") {
    return (
      <figure className="signature-panel signature-panel--project project-result-signature">
        <figcaption>
          <span>Evidence sequence</span>
          <strong>No later result repairs an earlier gap</strong>
        </figcaption>
        {["identity", "topology", "expression", "presentation", "function"].map(
          (label, index) => (
            <div key={label}>
              <span>G–0{index + 1}</span>
              <i data-state={index < 2 ? "planned" : "open"} />
              <strong>{label}</strong>
            </div>
          ),
        )}
      </figure>
    );
  }

  if (variant === "contribution") {
    return (
      <figure className="signature-panel signature-panel--project project-library-signature">
        <figcaption>
          <span>Reusable records</span>
          <strong>Files tied together by context</strong>
        </figcaption>
        {["Design", "Protocols", "Data + code", "HP field kit"].map(
          (label, index) => (
            <span key={label} style={{ "--shelf-index": index } as CSSProperties}>
              <b>0{index + 1}</b>
              <strong>{label}</strong>
              <small>version · license · limits</small>
            </span>
          ),
        )}
      </figure>
    );
  }

  return (
    <figure className="signature-panel signature-panel--project project-ring-signature">
      <figcaption>
        <span>Living ring</span>
        <strong>Conceptual multi-epitope architecture</strong>
      </figcaption>
      <svg viewBox="0 0 620 620" role="img" aria-label="A candidate portfolio closing into one traceable circular RNA architecture">
        <circle className="project-ring-signature__track" cx="310" cy="310" r="214" />
        <path
          className="project-ring-signature__active"
          pathLength={1}
          d="M310 96a214 214 0 1 1-.1 0"
        />
        <path
          className="project-ring-signature__junction"
          d="M445 146c38 18 61 52 70 92M474 126l-30 20 15 34"
        />
      </svg>
      <span className="project-ring-signature__core">CirCure</span>
      {ringNodes.map((node, index) => (
        <span
          className={`project-ring-signature__node project-ring-signature__node--${index + 1}`}
          key={node}
        >
          {node}
        </span>
      ))}
    </figure>
  );
}

export function HeterogeneityField() {
  const cells = [
    ["A", "C"],
    ["B"],
    ["A", "B"],
    ["C"],
    ["A", "C"],
    ["B", "C"],
    ["A"],
  ];
  return (
    <figure className="feature-panel project-heterogeneity">
      <header>
        <span>Problem field</span>
        <strong>One clinical name, different antigen landscapes</strong>
      </header>
      <div aria-label="Conceptual heterogeneous tumor field">
        {cells.map((markers, index) => (
          <span className={`project-cell project-cell--${index + 1}`} key={index}>
            <i />
            {markers.map((marker) => (
              <b data-marker={marker} key={marker}>
                {marker}
              </b>
            ))}
          </span>
        ))}
      </div>
      <figcaption>Conceptual illustration · not patient data</figcaption>
    </figure>
  );
}

export function MechanismRoute() {
  return (
    <figure className="feature-panel project-mechanism">
      <header>
        <span>Proposed route</span>
        <strong>Five transitions, five separate claims</strong>
      </header>
      <div>
        {["Select", "Encode", "Circularize", "Present", "Recognize"].map(
          (label, index) => (
            <article key={label}>
              <span>0{index + 1}</span>
              <i aria-hidden="true" />
              <strong>{label}</strong>
            </article>
          ),
        )}
      </div>
    </figure>
  );
}

export function DecisionLoop() {
  return (
    <div className="feature-panel project-decision-loop">
      <header>
        <span>Version trace</span>
        <strong>Build only after the previous decision is legible</strong>
      </header>
      <div>
        {[
          ["Before", "Single preferred construct"],
          ["Signal", "Ambiguous topology evidence"],
          ["Decision", "Revise geometry + purification"],
          ["Next build", "Versioned comparison set"],
        ].map(([label, text], index) => (
          <article key={label}>
            <span>{label}</span>
            <b>0{index + 1}</b>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

export function ResultGateTable() {
  return (
    <div className="feature-panel feature-table project-result-gates">
      <header>
        <span>Claim</span>
        <span>Primary proof</span>
        <span>Decision gate</span>
      </header>
      {[
        ["Identity", "Sequence + sample lineage", "Advance confirmed clone"],
        ["Topology", "Junction + RNase R + purity", "Reject ambiguous product"],
        ["Expression", "Signal + delivery + viability", "Advance balanced window"],
        ["Function", "Specific comparison + controls", "Do not infer specificity"],
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

export function ResourceShelf() {
  return (
    <div className="feature-panel project-resource-shelf">
      <header>
        <span>Release anatomy</span>
        <strong>A reusable package has more than a download link</strong>
      </header>
      {[
        ["01", "Find", "stable ID + canonical location"],
        ["02", "Run", "worked example + expected output"],
        ["03", "Adapt", "inputs + replacement rules"],
        ["04", "Limit", "known failure + inappropriate use"],
      ].map(([number, title, text]) => (
        <article key={number}>
          <span>{number}</span>
          <strong>{title}</strong>
          <p>{text}</p>
        </article>
      ))}
    </div>
  );
}
