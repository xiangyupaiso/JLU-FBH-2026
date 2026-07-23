import { useState } from "react";
import apparatusUrl from "../../../assets/wiki/hardware-circure-apparatus.png";

const requirementRows = [
  [
    "Sample interface",
    "volume · material · temperature",
    "Team-defined supported range",
    "Compatibility + leakage challenge",
    "awaiting threshold",
  ],
  [
    "Measurement",
    "signal · range · unit",
    "Accuracy and repeatability budget",
    "Reference calibration + residuals",
    "awaiting standard",
  ],
  [
    "Throughput",
    "samples / time",
    "Representative task budget",
    "Timed end-to-end workflow",
    "awaiting user record",
  ],
  [
    "Containment",
    "leakage · carryover · cleaning",
    "Safe boundary and recovery rule",
    "Challenge + cleaning verification",
    "awaiting risk review",
  ],
  [
    "Cost & maintenance",
    "currency / build · service interval",
    "User and resource constraint",
    "BOM + maintenance trial",
    "awaiting cost record",
  ],
];

export function HardwareRequirementMatrix() {
  return (
    <div className="hardware-requirement-matrix" data-hardware-placeholder>
      <header className="hardware-feature-heading">
        <div>
          <span>Table H-01 / Requirement and acceptance contract</span>
          <strong>
            A component choice is credible only after the task has a measurable
            pass condition.
          </strong>
        </div>
        <p>Judge-first brief · thresholds not supplied</p>
      </header>

      <div className="hardware-judge-brief">
        {[
          ["01 / Need", "Who is blocked, by which physical task?"],
          ["02 / Function", "What must enter, change, and leave?"],
          ["03 / Evidence", "Which measurement accepts or rejects the build?"],
          ["04 / Reuse", "Can another team repeat the critical function?"],
        ].map(([label, question]) => (
          <article key={label}>
            <span>{label}</span>
            <strong>{question}</strong>
            <small>evidence slot · planned</small>
          </article>
        ))}
      </div>

      <div
        className="hardware-table-scroll"
        role="region"
        aria-label="Hardware requirement matrix"
        tabIndex={0}
      >
        <table>
          <caption>Table H-01. Quantitative requirement fields</caption>
          <thead>
            <tr>
              <th scope="col">Requirement</th>
              <th scope="col">Metric / unit</th>
              <th scope="col">Acceptance rule</th>
              <th scope="col">Verification</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            {requirementRows.map((row) => (
              <tr key={row[0]}>
                <th scope="row">{row[0]}</th>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>
                  <span className="hardware-data-state">{row[4]}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

const systemLayers = [
  {
    label: "Sample path",
    short: "Material flow",
    input: "Defined sample, volume, compatibility, and containment",
    output: "Recovered, retained, or safely disposed sample",
    record:
      "Direction, dead volume, contact materials, cleaning, and carryover",
    failure: "Leak, blockage, contamination, misloading, or loss",
    markers: [
      { label: "Inlet", x: "31%", y: "53%" },
      { label: "Condition", x: "47%", y: "36%" },
      { label: "Chamber", x: "62%", y: "48%" },
      { label: "Outlet", x: "76%", y: "42%" },
    ],
  },
  {
    label: "Measurement",
    short: "Reference → signal",
    input: "Reference standard, blank, environment, and acquisition settings",
    output: "Versioned raw signal, unit, uncertainty, and quality state",
    record:
      "Sensor identity, calibration, sampling rate, processing, and timestamp",
    failure: "Drift, saturation, noise, alignment error, or missing reference",
    markers: [
      { label: "Reference", x: "42%", y: "36%" },
      { label: "Sensor", x: "58%", y: "43%" },
      { label: "Log", x: "70%", y: "55%" },
    ],
  },
  {
    label: "Control & safety",
    short: "Setpoint → safe state",
    input: "Operator intent, permitted range, interlock, and power state",
    output: "Controlled action, stop condition, alert, and recovery record",
    record: "Firmware, configuration, access, fault, cleaning, and maintenance",
    failure:
      "Unsafe setpoint, power loss, stuck actuator, or bypassed interlock",
    markers: [
      { label: "Setpoint", x: "61%", y: "38%" },
      { label: "Interlock", x: "79%", y: "50%" },
      { label: "Recovery", x: "51%", y: "64%" },
    ],
  },
];

export function AnnotatedSystemDiagram() {
  const [active, setActive] = useState(0);
  const selected = systemLayers[active];

  return (
    <figure className="hardware-system-diagram" data-hardware-placeholder>
      <figcaption className="hardware-feature-heading">
        <div>
          <span>Fig. H-01 / Annotated system diagram</span>
          <strong>
            Select one evidence layer without hiding the complete device
            boundary.
          </strong>
        </div>
        <p>Illustrative apparatus · not a verified build</p>
      </figcaption>

      <div
        className="hardware-system-diagram__controls"
        aria-label="Inspect hardware evidence layers"
      >
        {systemLayers.map((layer, index) => (
          <button
            type="button"
            key={layer.label}
            aria-pressed={active === index}
            className={active === index ? "is-active" : ""}
            onClick={() => setActive(index)}
          >
            <span>0{index + 1}</span>
            <strong>{layer.label}</strong>
            <small>{layer.short}</small>
          </button>
        ))}
      </div>

      <div className="hardware-system-diagram__stage">
        <div className="hardware-system-diagram__image">
          <img
            src={apparatusUrl}
            alt="Illustrative conceptual apparatus with selectable evidence annotations"
          />
          {selected.markers.map((marker, index) => (
            <span
              className="hardware-system-marker"
              key={marker.label}
              style={{ left: marker.x, top: marker.y }}
            >
              <b>{String(index + 1).padStart(2, "0")}</b>
              {marker.label}
            </span>
          ))}
        </div>

        <article aria-live="polite">
          <header>
            <span>Selected layer</span>
            <strong>{selected.label}</strong>
          </header>
          <dl>
            <div>
              <dt>Input</dt>
              <dd>{selected.input}</dd>
            </div>
            <div>
              <dt>Output</dt>
              <dd>{selected.output}</dd>
            </div>
            <div>
              <dt>Required record</dt>
              <dd>{selected.record}</dd>
            </div>
            <div>
              <dt>Failure to test</dt>
              <dd>{selected.failure}</dd>
            </div>
          </dl>
          <span className="hardware-data-state">illustrative only</span>
        </article>
      </div>
    </figure>
  );
}

const assemblyGroups = [
  {
    number: "01",
    title: "Sample interface",
    interface: "Inlet · contact path · holder · outlet",
    record: "Geometry, material, seal, tolerance, and cleaning",
  },
  {
    number: "02",
    title: "Measurement module",
    interface: "Reference · sensor · alignment · acquisition",
    record: "Range, resolution, calibration, and raw output",
  },
  {
    number: "03",
    title: "Control module",
    interface: "Power · controller · actuator · logging",
    record: "Circuit, firmware, configuration, and fault state",
  },
  {
    number: "04",
    title: "Enclosure & fixtures",
    interface: "Frame · mounting · guard · service access",
    record: "CAD, dimensions, tolerance, tools, and safety",
  },
];

const bomRows = [
  [
    "H-001",
    "Sample interface",
    "—",
    "awaiting",
    "awaiting",
    "awaiting",
    "awaiting",
    "unreleased",
  ],
  [
    "H-002",
    "Measurement module",
    "—",
    "awaiting",
    "awaiting",
    "awaiting",
    "awaiting",
    "unreleased",
  ],
  [
    "H-003",
    "Control & power",
    "—",
    "awaiting",
    "awaiting",
    "awaiting",
    "awaiting",
    "unreleased",
  ],
  [
    "H-004",
    "Enclosure & fixtures",
    "—",
    "awaiting",
    "awaiting",
    "awaiting",
    "awaiting",
    "unreleased",
  ],
];

export function HardwareAssemblyAndBom() {
  return (
    <div className="hardware-assembly-bom" data-hardware-placeholder>
      <figure className="hardware-exploded-assembly">
        <figcaption className="hardware-feature-heading">
          <div>
            <span>Fig. H-02 / Exploded assembly record</span>
            <strong>
              Each physical layer exposes its interface and release evidence.
            </strong>
          </div>
          <p>Structure preview · not fabrication geometry</p>
        </figcaption>
        <div className="hardware-exploded-assembly__stack">
          {assemblyGroups.map((group) => (
            <article key={group.number}>
              <span>{group.number}</span>
              <div>
                <strong>{group.title}</strong>
                <p>{group.interface}</p>
              </div>
              <small>{group.record}</small>
              <i aria-hidden="true" />
            </article>
          ))}
        </div>
      </figure>

      <section className="hardware-bom-record">
        <header className="hardware-feature-heading">
          <div>
            <span>Table H-02 / Bill of materials</span>
            <strong>
              Quantity, specification, cost, alternative, source, and version
              travel together.
            </strong>
          </div>
          <p>No purchasing record supplied</p>
        </header>
        <div
          className="hardware-table-scroll"
          role="region"
          aria-label="Bill of materials evidence table"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Assembly group</th>
                <th scope="col">Qty</th>
                <th scope="col">Critical spec</th>
                <th scope="col">Cost</th>
                <th scope="col">Alternative</th>
                <th scope="col">Source / version</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {bomRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1, -1).map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                  <td>
                    <span className="hardware-data-state">
                      {row[row.length - 1]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const iterationStages = [
  ["01", "Need", "Observed physical bottleneck + baseline", "awaiting record"],
  [
    "02",
    "Build v0.1",
    "Drawing, assumptions, assembly, and first fault",
    "awaiting build",
  ],
  [
    "03",
    "Measure & change",
    "Signal, diagnosis, physical revision, and retest",
    "not tested",
  ],
  [
    "04",
    "Release candidate",
    "Independent build and critical-function check",
    "not reproduced",
  ],
];

export function BuildIterationTimeline() {
  return (
    <figure className="hardware-iteration-timeline" data-hardware-placeholder>
      <figcaption className="hardware-feature-heading">
        <div>
          <span>Fig. H-03 / Measurement-driven build history</span>
          <strong>
            A version advances only when a retained measurement changes the
            design.
          </strong>
        </div>
        <p>No prototype versions supplied</p>
      </figcaption>

      <div className="hardware-iteration-timeline__route">
        {iterationStages.map(([number, title, record, state]) => (
          <article key={number}>
            <span>{number}</span>
            <strong>{title}</strong>
            <p>{record}</p>
            <small>{state}</small>
          </article>
        ))}
      </div>

      <div className="hardware-iteration-ledger">
        {[
          ["Measured problem", "awaiting baseline or failed run"],
          ["Diagnosis", "awaiting root-cause evidence"],
          ["Physical change", "awaiting drawing and version"],
          ["Retest consequence", "awaiting comparable measurement"],
        ].map(([label, state]) => (
          <div key={label}>
            <span>{label}</span>
            <strong>{state}</strong>
          </div>
        ))}
      </div>
    </figure>
  );
}

const performanceRows = [
  ["Accuracy", "named reference", "—", "—", "unit + uncertainty", "awaiting"],
  [
    "Repeatability",
    "replicated reference",
    "—",
    "—",
    "distribution + CV/SD",
    "awaiting",
  ],
  [
    "Operating range",
    "lower / upper standard",
    "—",
    "—",
    "declared supported range",
    "awaiting",
  ],
  [
    "Response time",
    "timed reference event",
    "—",
    "—",
    "latency distribution",
    "awaiting",
  ],
  [
    "Throughput",
    "representative workflow",
    "—",
    "—",
    "samples / time",
    "awaiting",
  ],
  [
    "Maintenance",
    "post-service check",
    "—",
    "—",
    "drift + service interval",
    "awaiting",
  ],
];

export function HardwareCalibrationAndPerformance() {
  return (
    <div className="hardware-calibration-performance" data-hardware-placeholder>
      <figure className="hardware-calibration-plot">
        <figcaption className="hardware-feature-heading">
          <div>
            <span>Fig. H-04 / Calibration evidence</span>
            <strong>
              Reference, device response, uncertainty, and acceptance range
              belong in one view.
            </strong>
          </div>
          <p>Empty chart · no measured points supplied</p>
        </figcaption>
        <div
          className="hardware-calibration-plot__frame"
          role="img"
          aria-label="Empty calibration chart awaiting reference and device measurements"
        >
          <span className="hardware-calibration-plot__y">
            Device response / unit required
          </span>
          <span className="hardware-calibration-plot__x">
            Reference value / unit required
          </span>
          <div className="hardware-calibration-plot__grid" aria-hidden="true" />
          <strong>Awaiting calibration data</strong>
          <small>No curve, fit, accuracy, or uncertainty is claimed.</small>
        </div>
        <div className="hardware-calibration-contract">
          {[
            ["Standard", "identity + traceability"],
            ["Runs", "replicates + environment"],
            ["Method", "fit + residual rule"],
            ["Decision", "acceptance + version"],
          ].map(([label, record]) => (
            <div key={label}>
              <span>{label}</span>
              <strong>{record}</strong>
            </div>
          ))}
        </div>
      </figure>

      <section className="hardware-performance-table">
        <header className="hardware-feature-heading">
          <div>
            <span>Table H-03 / Performance comparison</span>
            <strong>
              Compare a named reference and a named hardware version under the
              same conditions.
            </strong>
          </div>
        </header>
        <div
          className="hardware-table-scroll"
          role="region"
          aria-label="Hardware performance comparison table"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Metric</th>
                <th scope="col">Reference / baseline</th>
                <th scope="col">Reference result</th>
                <th scope="col">Device result</th>
                <th scope="col">Acceptance evidence</th>
                <th scope="col">State</th>
              </tr>
            </thead>
            <tbody>
              {performanceRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1, -1).map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                  <td>
                    <span className="hardware-data-state">
                      {row[row.length - 1]}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

const riskRows = [
  [
    "Sample leakage / carryover",
    "Exposure or invalid result",
    "Pressure / visual / blank check",
    "Stop, contain, clean, document",
    "challenge + cleaning record",
  ],
  [
    "Electrical / thermal fault",
    "Shock, burn, or component damage",
    "Fuse / temperature / inspection",
    "Isolate power and prevent restart",
    "fault and recovery test",
  ],
  [
    "Pressure or moving part",
    "Pinch, breakage, or uncontrolled release",
    "Guard / limit / interlock",
    "De-energise and vent safely",
    "interlock verification",
  ],
  [
    "Calibration drift",
    "Incorrect scientific decision",
    "Control standard + trend",
    "Block result and recalibrate",
    "drift threshold + audit",
  ],
  [
    "Cleaning / maintenance lapse",
    "Contamination or hidden degradation",
    "Checklist + service log",
    "Remove from service",
    "post-maintenance qualification",
  ],
];

export function HardwareSafetyRiskMatrix() {
  return (
    <div className="hardware-safety-risk" data-hardware-placeholder>
      <section>
        <header className="hardware-feature-heading">
          <div>
            <span>Table H-04 / Safety and failure matrix</span>
            <strong>
              Every hazard names detection, a safe state, and evidence before
              operation.
            </strong>
          </div>
          <p>Hazard categories · severity not assessed</p>
        </header>
        <div
          className="hardware-table-scroll"
          role="region"
          aria-label="Hardware safety and failure matrix"
          tabIndex={0}
        >
          <table>
            <thead>
              <tr>
                <th scope="col">Hazard category</th>
                <th scope="col">Potential harm</th>
                <th scope="col">Detection</th>
                <th scope="col">Safe response</th>
                <th scope="col">Verification required</th>
              </tr>
            </thead>
            <tbody>
              {riskRows.map((row) => (
                <tr key={row[0]}>
                  <th scope="row">{row[0]}</th>
                  {row.slice(1).map((cell, index) => (
                    <td key={`${row[0]}-${index}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="hardware-placeholder-note">
          These are review categories, not a completed risk assessment.
        </p>
      </section>

      <section className="hardware-maintenance-register">
        <header className="hardware-feature-heading">
          <div>
            <span>Maintenance and cleaning register</span>
            <strong>
              Qualification continues after assembly and after every relevant
              service event.
            </strong>
          </div>
        </header>
        <div>
          {[
            ["Before run", "inspection + blank + permitted configuration"],
            ["After run", "containment + cleaning + disposal record"],
            ["Scheduled", "wear parts + calibration + firmware review"],
            ["After fault", "root cause + repair + requalification"],
          ].map(([title, record], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{record}</p>
              <small>awaiting owner and interval</small>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

const releaseStages = [
  ["Source", "Editable CAD, circuit, firmware, drawings, exports, and license"],
  [
    "Build",
    "BOM, suppliers, alternatives, tools, tolerances, and assembly checks",
  ],
  [
    "Calibrate",
    "Standards, fixtures, raw data, analysis, expected result, and threshold",
  ],
  [
    "Operate",
    "Setup, sample limits, controls, warnings, safe stop, cleaning, and disposal",
  ],
  [
    "Maintain",
    "Inspection, service intervals, replacement, fault history, and requalification",
  ],
];

export function OpenHardwareReleaseChecklist() {
  return (
    <div className="hardware-release-package" data-hardware-placeholder>
      <section className="hardware-release-checklist">
        <header className="hardware-feature-heading">
          <div>
            <span>Checklist H-01 / Open hardware release contract</span>
            <strong>
              Reproduction ends with a verified function, not a downloaded file.
            </strong>
          </div>
          <p>No release package supplied</p>
        </header>
        <div>
          {releaseStages.map(([title, record], index) => (
            <article key={title}>
              <span>0{index + 1}</span>
              <strong>{title}</strong>
              <p>{record}</p>
              <small>awaiting release evidence</small>
            </article>
          ))}
        </div>
      </section>

      <section className="hardware-release-verification">
        <header>
          <span>Independent reproduction gate</span>
          <h3>Can another team verify one critical function?</h3>
        </header>
        <dl>
          <div>
            <dt>Supported environment</dt>
            <dd>awaiting platform, tools, and version</dd>
          </div>
          <div>
            <dt>Expected artifact</dt>
            <dd>awaiting reference input and output</dd>
          </div>
          <div>
            <dt>Acceptance signal</dt>
            <dd>awaiting unit, tolerance, and uncertainty</dd>
          </div>
          <div>
            <dt>Independent record</dt>
            <dd>not assembled or verified</dd>
          </div>
        </dl>
      </section>

      <section
        className="hardware-technical-appendices"
        aria-labelledby="hardware-appendix-title"
      >
        <header>
          <span>Progressive disclosure</span>
          <h3 id="hardware-appendix-title">Technical appendices</h3>
          <p>
            Core requirements, system, calibration, safety, and release state
            remain visible. Machine-level records may fold.
          </p>
        </header>
        <details>
          <summary>
            <span>Appendix A</span> Source manifest and fabrication exports
            <b>＋</b>
          </summary>
          <p>
            Reserved for editable sources, neutral exports, drawings,
            tolerances, circuit files, firmware, checksums, licenses, and
            attribution.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix B</span> Assembly, calibration, and performance logs
            <b>＋</b>
          </summary>
          <p>
            Reserved for assembly deviations, calibration standards, raw
            measurements, analysis method, residuals, uncertainty, failures, and
            versioned results.
          </p>
        </details>
        <details>
          <summary>
            <span>Appendix C</span> Safety, cleaning, maintenance, and incidents
            <b>＋</b>
          </summary>
          <p>
            Reserved for risk review, operating limits, training, cleaning,
            disposal, inspections, service, faults, corrective actions, and
            requalification.
          </p>
        </details>
      </section>
    </div>
  );
}
