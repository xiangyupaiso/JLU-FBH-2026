import { useState } from "react";
import "../../../../styles/wiki-features.css";

export function PlatformOrbit({ compact = false }: { compact?: boolean }) {
  const [context, setContext] = useState<"mammalian" | "cell-free">("mammalian");
  const comparison = {
    mammalian: {
      fit: "Relevant processing, presentation, delivery, and cell-state context.",
      limit: "Higher variability, slower iteration, and stricter handling requirements.",
    },
    "cell-free": {
      fit: "Fast construct screening with direct control over reaction inputs.",
      limit: "Yield and folding do not automatically transfer to a cellular context.",
    },
  }[context];
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
      <div className="wet-platform__comparison" key={context}>
        <p>
          <span>Why it fits</span>
          {comparison.fit}
        </p>
        <p>
          <span>What cannot transfer</span>
          {comparison.limit}
        </p>
      </div>
    </figure>
  );
}


export function PlatformWorkflow() {
  const steps = [
    ["Source", "Provenance, batch, and quality gate"],
    ["Adapt", "Construct, delivery, and handling"],
    ["Compare", "Matched payload and process controls"],
    ["Release", "Troubleshooting and transfer limits"],
  ];

  return (
    <div className="feature-panel wet-platform-workflow">
      <header>
        <span>Adaptation path</span>
        <strong>The host changes every downstream method.</strong>
      </header>
      <div>
        {steps.map(([title, body], index) => (
          <article key={title}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <strong>{title}</strong>
            <p>{body}</p>
            {index < steps.length - 1 ? <i aria-hidden="true">→</i> : null}
          </article>
        ))}
      </div>
    </div>
  );
}


export function PlatformEvidenceMatrix() {
  const rows = [
    ["Question", "Processing + presentation", "Rapid expression screen", "Choose by need"],
    ["Control", "Delivery + viability", "Reaction input + blank", "Keep process visible"],
    ["Strength", "Biological relevance", "Speed + input control", "Test the claimed advantage"],
    ["Limit", "Variability + handling", "Transferability", "Bound the conclusion"],
  ];

  return (
    <div className="feature-panel feature-table wet-platform-evidence">
      <header>
        <span>Criterion</span>
        <span>Mammalian</span>
        <span>Cell-free</span>
        <span>Decision rule</span>
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

