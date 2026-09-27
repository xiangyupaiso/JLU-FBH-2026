import { useState } from "react";

const architectureModels = [
  {
    number: "01",
    short: "Candidates",
    title: "Epitope prioritisation",
    question: "Which candidates deserve scarce experiments?",
    output: "Ranked set + decomposition + sensitivity",
    return: "Measured relevance and exclusion evidence",
  },
  {
    number: "02",
    short: "Construct",
    title: "circRNA structural assessment",
    question: "Which construct remains plausible and testable?",
    output: "Matched comparison + selection rule",
    return: "Construct performance and failure mode",
  },
  {
    number: "03",
    short: "Dynamics",
    title: "Expression and immune dynamics",
    question: "Which measurement best separates explanations?",
    output: "Prediction + uncertainty + experimental window",
    return: "Time-course data and revised parameters",
  },
];

export function ModelArchitectureMap() {
  const [active, setActive] = useState(0);
  const selected = architectureModels[active];

  return (
    <figure className="model-architecture-map">
      <figcaption className="model-feature-heading">
        <div>
          <span>Fig. M-01 / Model architecture</span>
          <strong>
            The full chain stays visible; selection only changes focus.
          </strong>
        </div>
        <p>Interactive architecture · keyboard and touch accessible</p>
      </figcaption>

      <div
        className="model-architecture-map__route"
        aria-label="Select a model module"
      >
        {architectureModels.map((model, index) => (
          <button
            type="button"
            key={model.number}
            aria-pressed={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>{model.number}</span>
            <strong>{model.short}</strong>
            <small>{model.title}</small>
          </button>
        ))}
        <span
          className="model-architecture-map__connector"
          aria-hidden="true"
        />
      </div>

      <article className="model-architecture-map__focus" aria-live="polite">
        <div>
          <span>Research question</span>
          <strong>{selected.question}</strong>
        </div>
        <div>
          <span>Decision output</span>
          <strong>{selected.output}</strong>
        </div>
        <div>
          <span>Wet Lab return</span>
          <strong>{selected.return}</strong>
        </div>
      </article>

      <div className="model-architecture-map__return">
        <span>
          Wet evidence revises assumptions, thresholds, and parameters
        </span>
        <i aria-hidden="true" />
        <b>return</b>
      </div>
    </figure>
  );
}

const scoringFields = [
  ["Relevance", "Biological question + source", "Weight + uncertainty"],
  ["Presentation", "Versioned prediction record", "Threshold + sensitivity"],
  ["Coverage", "Population and allele definition", "Range + missingness"],
  ["Safety", "Hard gate + evidence source", "Exclusion reason"],
  ["Redundancy", "Similarity / overlap rule", "Diversity consequence"],
];

export function EpitopeEvidencePanel() {
  return (
    <div className="model-evidence-pair" data-model-placeholder>
      <section
        className="model-score-ledger"
        aria-labelledby="model-score-ledger-title"
      >
        <header className="model-feature-heading">
          <div>
            <span>Table M-02 / Scoring ledger</span>
            <strong id="model-score-ledger-title">
              Every score keeps its rationale and uncertainty.
            </strong>
          </div>
        </header>
        <div className="model-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Feature</th>
                <th scope="col">Evidence record</th>
                <th scope="col">Decision record</th>
              </tr>
            </thead>
            <tbody>
              {scoringFields.map(([feature, evidence, decision]) => (
                <tr key={feature}>
                  <th scope="row">{feature}</th>
                  <td>{evidence}</td>
                  <td>{decision}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <figure className="model-empty-chart model-empty-chart--ranking">
        <figcaption className="model-feature-heading">
          <div>
            <span>Fig. M-02 / Score decomposition</span>
            <strong>
              Compare the total rank and every component in one view.
            </strong>
          </div>
        </figcaption>
        <div
          className="model-empty-chart__canvas"
          role="img"
          aria-label="Empty score decomposition chart awaiting team data"
        >
          <div className="model-empty-chart__axis" aria-hidden="true" />
          {[
            "CirCure candidate 01",
            "CirCure candidate 02",
            "CirCure candidate 03",
          ].map((candidate) => (
            <div className="model-empty-chart__row" key={candidate}>
              <span>{candidate}</span>
              <i />
              <b>—</b>
            </div>
          ))}
          <strong className="model-empty-chart__watermark">
            Awaiting team scores
          </strong>
        </div>
        <p className="model-placeholder-note">
          Layout preview only · no candidate or numerical result is claimed.
        </p>
      </figure>
    </div>
  );
}

const structureVariants = [
  "Proposed construct A",
  "Proposed construct B",
  "Proposed construct C",
];

export function StructureComparisonPanel() {
  return (
    <figure className="model-structure-comparison" data-model-placeholder>
      <figcaption className="model-feature-heading">
        <div>
          <span>Fig. M-03 / Matched structural comparison</span>
          <strong>
            Same orientation, same scale, same annotations, one selection rule.
          </strong>
        </div>
        <p>Illustrative record · structural outputs not supplied</p>
      </figcaption>

      <div className="model-structure-comparison__grid">
        {structureVariants.map((variant, index) => (
          <article key={variant}>
            <header>
              <span>0{index + 1}</span>
              <strong>{variant}</strong>
            </header>
            <svg
              viewBox="0 0 240 170"
              role="img"
              aria-label={`${variant} placeholder diagram`}
            >
              <path
                className="model-structure-comparison__guide"
                d="M22 132C58 30 93 148 128 54S188 30 220 112"
              />
              <path d="M22 128C54 42 94 140 128 62S187 38 220 108" />
              <circle cx="22" cy="128" r="5" />
              <circle cx="128" cy="62" r="5" />
              <circle cx="220" cy="108" r="5" />
            </svg>
            <dl>
              <div>
                <dt>Tool record</dt>
                <dd>version / parameters</dd>
              </div>
              <div>
                <dt>Shared metric</dt>
                <dd>awaiting output</dd>
              </div>
              <div>
                <dt>Decision</dt>
                <dd>not claimed</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
      <p className="model-placeholder-note">
        Replace schematic traces with team-generated, consistently rendered
        structures.
      </p>
    </figure>
  );
}

export function DynamicsValidationPanel() {
  return (
    <div className="model-dynamics-panel" data-model-placeholder>
      <figure className="model-dynamics-plot">
        <figcaption className="model-feature-heading">
          <div>
            <span>Fig. M-04 / Prediction and validation</span>
            <strong>
              Observed points, prediction, uncertainty, and residuals belong
              together.
            </strong>
          </div>
        </figcaption>
        <div
          className="model-dynamics-plot__frame"
          role="img"
          aria-label="Empty prediction and validation plot awaiting team measurements"
        >
          <span className="model-dynamics-plot__y">
            CirCure expression observable
          </span>
          <span className="model-dynamics-plot__x">time after delivery</span>
          <div className="model-dynamics-plot__grid" aria-hidden="true" />
          <strong>Awaiting measured and simulated values</strong>
        </div>
        <div
          className="model-dynamics-plot__legend"
          aria-label="Expected plot layers"
        >
          <span>
            <i data-layer="observed" />
            Observed data
          </span>
          <span>
            <i data-layer="prediction" />
            Model prediction
          </span>
          <span>
            <i data-layer="uncertainty" />
            Uncertainty interval
          </span>
          <span>
            <i data-layer="residual" />
            Residual check
          </span>
        </div>
      </figure>

      <aside className="model-equation-record">
        <header className="model-feature-heading">
          <div>
            <span>Eq. M-01 / Equation record</span>
            <strong>
              Every symbol keeps its unit, source, and biological meaning.
            </strong>
          </div>
        </header>
        <div
          className="model-equation-record__formula"
          aria-label="Illustrative equation layout, not a team model"
        >
          <span>dP</span>
          <i>/</i>
          <span>dt</span>
          <b>=</b>
          <strong>
            k<sub>tl</sub> · R − δ<sub>p</sub> · P
          </strong>
        </div>
        <dl>
          <div>
            <dt>R</dt>
            <dd>state / measured input</dd>
            <small>unit + source required</small>
          </div>
          <div>
            <dt>
              k<sub>tl</sub>
            </dt>
            <dd>translation parameter</dd>
            <small>fit / literature required</small>
          </div>
          <div>
            <dt>
              δ<sub>p</sub>
            </dt>
            <dd>protein loss parameter</dd>
            <small>range + sensitivity required</small>
          </div>
        </dl>
        <p>
          Illustrative notation only · replace with the team's validated
          equations.
        </p>
      </aside>
    </div>
  );
}

const validationRows = [
  [
    "TNBC epitope shortlist",
    "Held-out source / literature / presentation assay",
    "Rank stability",
    "not started",
  ],
  [
    "Multi-epitope construct",
    "Orthogonal structure tool / junction and RNase R evidence",
    "Selection agreement",
    "not started",
  ],
  [
    "Expression window",
    "Measured expression time course",
    "Residual + interval coverage",
    "not started",
  ],
];

export function ValidationAndSensitivityPanel() {
  return (
    <div className="model-validation-panel" data-model-placeholder>
      <section>
        <header className="model-feature-heading">
          <div>
            <span>Table M-03 / Validation register</span>
            <strong>
              Independent evidence and disagreement remain visible.
            </strong>
          </div>
        </header>
        <div className="model-table-scroll">
          <table>
            <thead>
              <tr>
                <th scope="col">Claim</th>
                <th scope="col">Independent check</th>
                <th scope="col">Evaluation</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {validationRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                  <td>
                    <span className="model-data-state">{row[3]}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <figure className="model-sensitivity-placeholder">
        <figcaption className="model-feature-heading">
          <div>
            <span>Fig. M-05 / Decision sensitivity</span>
            <strong>Show which assumptions can reverse a decision.</strong>
          </div>
        </figcaption>
        <div>
          {[
            "TNBC relevance weight",
            "Presentation threshold",
            "Expression loss parameter",
          ].map((label) => (
            <article key={label}>
              <span>{label}</span>
              <i>
                <b />
              </i>
              <small>range required</small>
            </article>
          ))}
          <strong>Awaiting sensitivity analysis</strong>
        </div>
      </figure>
    </div>
  );
}

const wetDryStages = [
  [
    "01",
    "Wet input",
    "Junction, RNase R, expression, or recognition evidence",
    "data + protocol + quality",
  ],
  [
    "02",
    "Model revision",
    "Prediction and uncertainty",
    "assumption + parameter + version",
  ],
  [
    "03",
    "Decision",
    "Candidate, construct, or measurement window",
    "reason + confidence + alternative",
  ],
  [
    "04",
    "Wet return",
    "Discriminating experiment",
    "observable + success criterion",
  ],
];

export function WetDryDecisionLedger() {
  return (
    <figure className="model-wet-dry-ledger" data-model-placeholder>
      <figcaption className="model-feature-heading">
        <div>
          <span>Fig. M-06 / Wet–Dry decision ledger</span>
          <strong>
            The loop records consequences instead of drawing an empty cycle.
          </strong>
        </div>
      </figcaption>
      <div className="model-wet-dry-ledger__route">
        {wetDryStages.map(([number, title, output, record]) => (
          <article key={number}>
            <span>{number}</span>
            <h3>{title}</h3>
            <strong>{output}</strong>
            <p>{record}</p>
          </article>
        ))}
      </div>
      <div className="model-wet-dry-ledger__return">
        <i aria-hidden="true" />
        <span>Observed evidence starts the next documented round</span>
      </div>
    </figure>
  );
}

const limitations = [
  [
    "Training / source population",
    "Candidate ranking",
    "Out-of-domain candidate",
    "Require new evidence + review",
  ],
  [
    "Structure tool assumptions",
    "Construct selection",
    "Method disagreement",
    "Orthogonal prediction / assay",
  ],
  [
    "Parameter identifiability",
    "Dynamic window",
    "Wide or multimodal interval",
    "Discriminating measurement",
  ],
  [
    "Measurement conditions",
    "Cross-model conclusion",
    "Protocol or unit mismatch",
    "Harmonise and rerun",
  ],
];

export function ModelLimitationsMatrix() {
  return (
    <section className="model-limitations-matrix" data-model-placeholder>
      <header className="model-feature-heading">
        <div>
          <span>Table M-04 / Applicability boundary</span>
          <strong>
            Every limitation names the affected output and response.
          </strong>
        </div>
      </header>
      <div className="model-table-scroll">
        <table>
          <thead>
            <tr>
              <th scope="col">Assumption / gap</th>
              <th scope="col">Affected output</th>
              <th scope="col">Warning sign</th>
              <th scope="col">Mitigation</th>
            </tr>
          </thead>
          <tbody>
            {limitations.map((row) => (
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
  );
}

const releaseRecords = [
  ["Data", "raw + processed + schema + license + checksum"],
  ["Code", "tagged entry point + tests + deterministic seed"],
  ["Environment", "runtime + dependencies + hardware notes"],
  ["Output", "one expected figure/table + verification rule"],
  ["Ownership", "student work + external contribution + prior methods"],
];

export function ModelReproducibilityRelease() {
  return (
    <div className="model-reproducibility-release" data-model-placeholder>
      <section>
        <header className="model-feature-heading">
          <div>
            <span>Release contract / minimum viable reproduction</span>
            <strong>
              Another team should reproduce one output before adapting the
              model.
            </strong>
          </div>
        </header>
        <div className="model-reproducibility-release__list">
          {releaseRecords.map(([title, detail], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{detail}</p>
              <i aria-label="planned" />
            </article>
          ))}
        </div>
      </section>

      <section
        className="model-technical-appendices"
        aria-labelledby="model-appendix-title"
      >
        <header>
          <span>Progressive disclosure</span>
          <h3 id="model-appendix-title">Technical appendices</h3>
          <p>
            Core evidence stays open. Complete derivations and machine records
            can fold.
          </p>
        </header>
        <details>
          <summary>
            <span>Appendix A</span> Assumptions, equations, and symbol table{" "}
            <b>＋</b>
          </summary>
          <p>
            Reserved for the complete derivation, dimensional checks, initial
            conditions, and parameter provenance.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix B</span> Environment, command, and expected output{" "}
            <b>＋</b>
          </summary>
          <p>
            Reserved for an executable command, version lock, deterministic
            seed, checksum, and one verified result.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix C</span> Supplementary figures and references{" "}
            <b>＋</b>
          </summary>
          <p>
            Reserved for repeated diagnostics, complete sensitivity outputs,
            abbreviations, and cited sources.
          </p>
        </details>
      </section>
    </div>
  );
}
