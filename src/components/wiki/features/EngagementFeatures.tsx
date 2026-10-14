import { useState, type CSSProperties } from "react";
const communityImage = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared/hp-community-workshop-v2.avif";
import "../../../styles/wiki-features.css";

export function EngagementSignature({
  variant,
}: {
  variant:
    | "entrepreneurship"
    | "human-practices"
    | "education"
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
  if (variant === "sustainability") return <TradeoffOrbit compact />;
  return <AssumptionFunnel compact />;
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
