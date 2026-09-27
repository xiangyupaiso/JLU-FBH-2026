import { useState, type CSSProperties } from "react";
import communityImage from "../../../assets/wiki/hp-community-workshop-v2.png";
import "../../../styles/wiki-features.css";

export function EngagementSignature({
  variant,
}: {
  variant:
    | "entrepreneurship"
    | "human-practices"
    | "education"
    | "inclusivity"
    | "sustainability";
}) {
  if (variant === "human-practices") {
    return (
      <figure className="signature-panel signature-panel--engagement engagement-thread-signature">
        <figcaption><span>Decision thread</span><strong>Ask → listen → change → return</strong></figcaption>
        <svg viewBox="0 0 620 410" aria-hidden="true">
          <path pathLength={1} d="M54 317C127 130 218 317 298 135S457 188 566 62" />
        </svg>
        {["ask", "listen", "change", "return"].map((label, index) => (
          <span className={`engagement-thread-signature__node engagement-thread-signature__node--${index + 1}`} key={label}>
            <i />{label}
          </span>
        ))}
      </figure>
    );
  }
  if (variant === "education") return <DialogueLoop compact />;
  if (variant === "inclusivity") return <BarrierMap compact />;
  if (variant === "sustainability") return <TradeoffOrbit compact />;
  return <AssumptionFunnel compact />;
}

export function DecisionProofTable() {
  const rows = [
    ["Purpose", "single target story", "clinical heterogeneity signal", "portfolio question", "DR–01"],
    ["Design", "risk as prose", "delivery and specificity concern", "hard continuation gates", "SAFE–01"],
    ["Execution", "one attractive readout", "mechanism critique", "separate assay dependencies", "EXP–03"],
    ["Governance", "publication by default", "consent and missing voices", "tiered publication gate", "HP–04"],
    ["Implementation", "ideal user", "workflow constraint", "adoption boundary", "IMP–02"],
  ];
  return (
    <div className="feature-panel hp-decision-proof">
      <header>
        {['Layer', 'Before', 'Stakeholder signal', 'Decision', 'Primary proof'].map((label) => <span key={label}>{label}</span>)}
      </header>
      {rows.map((row) => (
        <div key={row[0]}>{row.map((cell, index) => <span className={index === 4 ? "proof" : ""} key={cell}>{cell}</span>)}</div>
      ))}
    </div>
  );
}

export function AssumptionFunnel({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`signature-panel signature-panel--engagement engagement-funnel ${compact ? "is-compact" : ""}`}>
      <figcaption><span>Assumption funnel</span><strong>Test the riskiest assumption first</strong></figcaption>
      {[
        ["Need", "Does the use case matter?"],
        ["Workflow", "Can the system absorb it?"],
        ["Evidence", "What would change the decision?"],
        ["Next", "Advance, revise, or stop"],
      ].map(([label, text], index) => (
        <article key={label} style={{ "--funnel-index": index } as CSSProperties}>
          <span>0{index + 1}</span><strong>{label}</strong><p>{text}</p>
        </article>
      ))}
    </figure>
  );
}

export function DialogueLoop({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`signature-panel signature-panel--engagement engagement-dialogue ${compact ? "is-compact" : ""}`}>
      <figcaption><span>Learning dialogue</span><strong>Explain → listen → revise</strong></figcaption>
      <img src={communityImage} alt="Community workshop scene" />
      <div>
        <article><span>Before</span><strong>Mechanism-first explanation</strong></article>
        <article><span>Question</span><strong>What does uncertainty mean?</strong></article>
        <article><span>After</span><strong>Burden, boundary, then mechanism</strong></article>
      </div>
    </figure>
  );
}

export function BarrierMap({ compact = false }: { compact?: boolean }) {
  return (
    <figure className={`signature-panel signature-panel--engagement engagement-barrier-map ${compact ? "is-compact" : ""}`}>
      <figcaption><span>Barrier map</span><strong>Access remains incomplete when a node is missing</strong></figcaption>
      <svg viewBox="0 0 620 390" aria-hidden="true"><path d="M90 72L310 194L528 67M310 194L103 326M310 194L516 324" /></svg>
      {[
        ["language", "1"], ["cost", "2"], ["location", "3"], ["digital", "4"],
      ].map(([label, pos]) => <span className={`node node--${pos}`} key={label}>{label}</span>)}
      <span className="center">access</span>
      <span className="missing">missing voice</span>
    </figure>
  );
}

export function TradeoffOrbit({ compact = false }: { compact?: boolean }) {
  const [focus, setFocus] = useState(0);
  const dimensions = ["environment", "society", "access", "economy"];
  return (
    <figure className={`signature-panel signature-panel--engagement engagement-tradeoff ${compact ? "is-compact" : ""}`}>
      <figcaption><span>Lifecycle trade-off</span><strong>A closed ring still keeps unresolved gaps</strong></figcaption>
      <div className="engagement-tradeoff__orbit">
        <i /><i />
        <strong>{dimensions[focus]}</strong>
        {dimensions.map((label, index) => (
          <button type="button" className={`point point--${index + 1} ${focus === index ? "is-active" : ""}`} onClick={() => setFocus(index)} key={label}>{label}</button>
        ))}
      </div>
      <p>positive impact · negative impact · evidence status · next measure</p>
    </figure>
  );
}

export function ConsentMatrix() {
  return (
    <div className="feature-panel feature-table engagement-consent-matrix">
      <header><span>Participation</span><span>Publication</span><span>Required record</span></header>
      {[
        ["Conversation", "No quotation", "purpose + notes + retention"],
        ["Attributed insight", "Role only", "explicit wording approval"],
        ["Image / recording", "Named media", "separate media consent"],
        ["Restricted evidence", "Not public", "access owner + reason"],
      ].map((row) => <div key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>)}
    </div>
  );
}
