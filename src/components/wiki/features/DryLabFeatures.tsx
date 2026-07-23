import { useState } from "react";
import apparatusUrl from "../../../assets/wiki/hardware-circure-apparatus.png";
import "../../../styles/wiki-features.css";

export function DryLabSignature({
  variant,
}: {
  variant: "model" | "software" | "hardware";
}) {
  if (variant === "software") return <SoftwareRun compact />;
  if (variant === "hardware") return <HardwareApparatus compact />;
  return <ModelPipeline compact />;
}

export function ModelPipeline({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const models = [
    ["Model I", "Epitope prioritisation", "ranked candidate set"],
    ["Model II", "circRNA structure", "geometry decision"],
    ["Model III", "Expression dynamics", "experimental window"],
  ];
  return (
    <figure className={`dry-manuscript dry-model-pipeline ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Model architecture</span>
        <strong>Question → data → method → validation → decision</strong>
      </figcaption>
      <div className="dry-model-pipeline__route">
        {models.map(([label, title], index) => (
          <button
            type="button"
            key={label}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{label}</span>
            <strong>{title}</strong>
          </button>
        ))}
      </div>
      <article aria-live="polite">
        <span>{models[active][0]}</span>
        <h3>{models[active][1]}</h3>
        <p>Output · {models[active][2]}</p>
        <b>validation and confidence remain beside the decision</b>
      </article>
      <svg viewBox="0 0 620 180" aria-hidden="true">
        <path d="M24 136C126 134 143 45 244 76S379 131 458 64S548 46 598 26" />
        <path className="uncertainty" d="M24 153C126 151 146 63 244 93S381 149 458 82S548 62 598 43" />
      </svg>
    </figure>
  );
}

export function ModelEquationPanel() {
  return (
    <div className="feature-panel dry-equation-panel">
      <header>
        <span>Equation record</span>
        <strong>Every symbol keeps its unit, source, and biological meaning</strong>
      </header>
      <div className="dry-equation-panel__formula" aria-label="Illustrative model equation">
        <span>dP</span>
        <i>/</i>
        <span>dt</span>
        <b>=</b>
        <strong>k<sub>tl</sub> · R − δ<sub>p</sub> · P</strong>
      </div>
      <dl>
        <div><dt>R</dt><dd>available circular RNA · measured input</dd></div>
        <div><dt>k<sub>tl</sub></dt><dd>translation rate · literature / fit</dd></div>
        <div><dt>δ<sub>p</sub></dt><dd>protein loss · sensitivity range</dd></div>
      </dl>
      <p>Illustrative structure · replace with the team's equations and parameters.</p>
    </div>
  );
}

export function WetDryReturn() {
  return (
    <figure className="feature-panel dry-wet-return">
      <header>
        <span>Wet–Dry return</span>
        <strong>A prediction matters when the next experiment changes</strong>
      </header>
      <div>
        {[
          ["01", "Wet input", "measured constraint"],
          ["02", "Model", "prediction + uncertainty"],
          ["03", "Decision", "candidate or condition"],
          ["04", "Wet return", "test + calibration"],
        ].map(([number, title, text]) => (
          <article key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{text}</p>
          </article>
        ))}
        <svg className="ribbon-mark" viewBox="0 0 32 46" aria-hidden="true">
          <use href="#circure-ribbon-knot" />
        </svg>
      </div>
    </figure>
  );
}

export function SoftwareRun({ compact = false }: { compact?: boolean }) {
  const [step, setStep] = useState(0);
  const steps = [
    ["Input", "candidate.json", "schema accepted"],
    ["Inspect", "circure inspect", "assumptions visible"],
    ["Run", "circure rank", "versioned output"],
    ["Test", "circure verify", "expected result compared"],
  ];
  return (
    <figure className={`dry-manuscript dry-software-run ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Inspectable run</span>
        <strong>A real example, not an animated terminal prop</strong>
      </figcaption>
      <div className="dry-software-run__console">
        <header><i /><i /><i /><span>circure / reproducible example</span></header>
        <code><b>$</b> {steps[step][1]}</code>
        <code><span>0{step + 1}</span> {steps[step][2]} <i>ready</i></code>
      </div>
      <div className="dry-software-run__steps">
        {steps.map(([label], index) => (
          <button
            type="button"
            key={label}
            className={step === index ? "is-active" : ""}
            onClick={() => setStep(index)}
          >
            <span>0{index + 1}</span>{label}
          </button>
        ))}
      </div>
      <p>Placeholder interface · publish only with a real executable workflow.</p>
    </figure>
  );
}

export function ReproducibilityChecklist() {
  return (
    <div className="feature-panel dry-repro-checklist">
      <header>
        <span>Reproducibility</span>
        <strong>Another team should reproduce one output first</strong>
      </header>
      {[
        ["Environment", "version + dependencies + seed"],
        ["Inputs", "schema + provenance + example"],
        ["Outputs", "expected files + checksums"],
        ["Ownership", "student work + external contribution"],
      ].map(([label, text], index) => (
        <article key={label}>
          <span>0{index + 1}</span>
          <strong>{label}</strong>
          <p>{text}</p>
          <i />
        </article>
      ))}
    </div>
  );
}

export function HardwareApparatus({ compact = false }: { compact?: boolean }) {
  const [focus, setFocus] = useState("sample path");
  return (
    <figure className={`dry-manuscript dry-apparatus ${compact ? "is-compact" : ""}`}>
      <figcaption>
        <span>Apparatus record</span>
        <strong>Build, calibrate, and share the sample path</strong>
      </figcaption>
      <div className="dry-apparatus__image">
        <img src={apparatusUrl} alt="Concept image of the CirCure wet-lab apparatus" />
        <span data-focus={focus}>{focus}</span>
      </div>
      <div className="dry-apparatus__controls" aria-label="Inspect apparatus documentation layers">
        {["sample path", "calibration", "safety"].map((label) => (
          <button
            type="button"
            key={label}
            className={focus === label ? "is-active" : ""}
            onClick={() => setFocus(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <p>Concept image · replace or annotate with the team's real build record.</p>
    </figure>
  );
}

export function BomTable() {
  return (
    <div className="feature-panel feature-table dry-bom-table">
      <header><span>Part</span><span>Purpose</span><span>Release record</span></header>
      {[
        ["Frame", "stable geometry", "CAD + tolerance"],
        ["Optical path", "measurement", "calibration curve"],
        ["Sample holder", "repeatable placement", "cleaning protocol"],
        ["Controller", "logged settings", "firmware + version"],
      ].map((row) => (
        <div key={row[0]}>{row.map((cell) => <span key={cell}>{cell}</span>)}</div>
      ))}
    </div>
  );
}
