import "../../../styles/wiki-features.css";

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
