import { useEffect, useRef, useState, type CSSProperties } from "react";
import clinicalImage from "../../../assets/wiki/hp-clinical-review-v2.png";
import labImage from "../../../assets/wiki/hp-lab-review-v2.png";
import regulatoryImage from "../../../assets/wiki/hp-regulatory-review-v2.png";
import communityImage from "../../../assets/wiki/hp-community-workshop-v2.png";
import whiteboardImage from "../../../assets/wiki/hp-whiteboard-review-v2.png";
import clinicalPortrait from "../../../assets/wiki/hp-portrait-clinical.png";
import labPortrait from "../../../assets/wiki/hp-portrait-lab.png";
import regulatoryPortrait from "../../../assets/wiki/hp-portrait-regulatory.png";
import ethicsPortrait from "../../../assets/wiki/hp-portrait-ethics.png";
import advocatePortrait from "../../../assets/wiki/hp-portrait-advocate.png";
import "../../../styles/wiki-features.css";

const impactRecords = [
  {
    phase: "Purpose",
    title: "Clinical boundaries changed the public claim.",
    image: clinicalImage,
    proof: "claim language · validation gate · return review",
  },
  {
    phase: "Design",
    title: "Mechanism critique changed the construct question.",
    image: labImage,
    proof: "archived route · design record · next build",
  },
  {
    phase: "Governance",
    title: "Regulatory review turned risk notes into boundaries.",
    image: regulatoryImage,
    proof: "risk register · no-go rule · owner",
  },
  {
    phase: "Dialogue",
    title: "Public questions changed how uncertainty is explained.",
    image: communityImage,
    proof: "question cluster · revised material · evaluation",
  },
  {
    phase: "Return",
    title: "The revised artifact returned for critique.",
    image: whiteboardImage,
    proof: "before/after · disagreement · remaining gap",
  },
];

const timelineRecords = [
  {
    date: "Record 01",
    role: "Clinical reviewer",
    title: "Clinical boundary review",
    heard: "Keep a student research concept distinct from medical readiness.",
    change: "Narrow the claim and add explicit evidence gates.",
    followUp: "Return the revised page language for review.",
    portrait: clinicalPortrait,
    image: clinicalImage,
  },
  {
    date: "Record 02",
    role: "Laboratory reviewer",
    title: "Mechanism and delivery review",
    heard: "A strong expression signal cannot establish presentation or specificity.",
    change: "Separate topology, expression, presentation, and recognition.",
    followUp: "Review the revised assay dependencies.",
    portrait: labPortrait,
    image: labImage,
  },
  {
    date: "Record 03",
    role: "Regulatory reviewer",
    title: "Governance and implementation",
    heard: "Deployment assumptions need ownership and stop conditions.",
    change: "Convert risk notes into named continuation gates.",
    followUp: "Return the risk register and intended use boundary.",
    portrait: regulatoryPortrait,
    image: regulatoryImage,
  },
  {
    date: "Record 04",
    role: "Ethics reviewer",
    title: "Consent and missing voices",
    heard: "Participation and quotation are different permissions.",
    change: "Use consent tiers and keep missing voices visible.",
    followUp: "Audit every public image, quote, role, and date.",
    portrait: ethicsPortrait,
    image: whiteboardImage,
  },
  {
    date: "Record 05",
    role: "Community advocate",
    title: "Public explanation and questions",
    heard: "People need uncertainty and burden explained before mechanism detail.",
    change: "Rewrite the learning material around questions and trade-offs.",
    followUp: "Test the revised material with the same audience.",
    portrait: advocatePortrait,
    image: communityImage,
  },
];

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

export function ImpactWall() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || window.innerWidth <= 820) {
      root.style.setProperty("--impact-progress", "0");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const scrollable = Math.max(1, root.offsetHeight - innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      root.style.setProperty("--impact-progress", progress.toFixed(4));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", request, { passive: true });
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      removeEventListener("scroll", request);
      removeEventListener("resize", request);
    };
  }, []);

  return (
    <section className="hp-impact-wall" ref={rootRef} aria-label="Stakeholder impact wall">
      <div className="hp-impact-wall__sticky">
        <header>
          <span>Stakeholder impact</span>
          <h3>Five perspectives changed one design.</h3>
          <p>Scroll to follow input into a visible project consequence.</p>
        </header>
        <div className="hp-impact-wall__viewport">
          <div className="hp-impact-wall__track">
            {impactRecords.map((record, index) => (
              <article key={record.title}>
                <img src={record.image} alt="" />
                <span>{String(index + 1).padStart(2, "0")} / {record.phase}</span>
                <h4>{record.title}</h4>
                <p>{record.proof}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function CircularEvidenceTimeline() {
  const rootRef = useRef<HTMLElement>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    if (reduced.matches || innerWidth <= 820) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const rect = root.getBoundingClientRect();
      const scrollable = Math.max(1, root.offsetHeight - innerHeight);
      const progress = Math.min(1, Math.max(0, -rect.top / scrollable));
      const next = Math.min(
        timelineRecords.length - 1,
        Math.floor(progress * timelineRecords.length),
      );
      setActive(next);
      root.style.setProperty("--timeline-progress", progress.toFixed(4));
    };
    const request = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    addEventListener("scroll", request, { passive: true });
    addEventListener("resize", request, { passive: true });
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      removeEventListener("scroll", request);
      removeEventListener("resize", request);
    };
  }, []);

  const jump = (index: number) => {
    setActive(index);
    const root = rootRef.current;
    if (!root || innerWidth <= 820) return;
    const scrollable = Math.max(1, root.offsetHeight - innerHeight);
    scrollTo({
      top: root.offsetTop + (scrollable * index) / (timelineRecords.length - 1),
      behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
  };

  const record = timelineRecords[active];
  return (
    <section className="hp-circular-timeline" ref={rootRef} aria-label="Detailed Human Practices evidence timeline">
      <div className="hp-circular-timeline__sticky">
        <nav aria-label="Human Practices records">
          {timelineRecords.map((item, index) => (
            <button
              type="button"
              key={item.date}
              className={active === index ? "is-active" : ""}
              onClick={() => jump(index)}
            >
              <span>0{index + 1}</span>
              <strong>{item.date}</strong>
              <i />
            </button>
          ))}
        </nav>
        <div className="hp-circular-timeline__dial">
          <svg viewBox="0 0 700 700" aria-hidden="true">
            <circle cx="350" cy="350" r="275" />
            <path pathLength={1} d="M350 75a275 275 0 1 1-.1 0" />
          </svg>
          <article>
            <img src={record.portrait} alt="" />
            <span>{record.date} · {record.role}</span>
            <h3>{record.title}</h3>
            <p>{record.change}</p>
            <button type="button" onClick={() => dialogRef.current?.showModal()}>
              Open evidence record
            </button>
          </article>
        </div>
      </div>
      <dialog className="hp-evidence-dialog" ref={dialogRef}>
        <form method="dialog"><button aria-label="Close evidence record">×</button></form>
        <img src={record.image} alt="Representative Human Practices review scene" />
        <div>
          <span>{record.date} · {record.role}</span>
          <h3>{record.title}</h3>
          <dl>
            <div><dt>What we heard</dt><dd>{record.heard}</dd></div>
            <div><dt>What changed</dt><dd>{record.change}</dd></div>
            <div><dt>Return step</dt><dd>{record.followUp}</dd></div>
          </dl>
          <p>Replace this prototype record with consent-cleared, auditable team evidence.</p>
        </div>
      </dialog>
    </section>
  );
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
