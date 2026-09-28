import { useState, type ReactNode } from "react";
import { scrollReaderToTarget } from "../../../../utils";
import "../../../../styles/features/experiments-panels.css";

// ---------------------------------------------------------------------------
// 1. Pipeline Navigator Card
// ---------------------------------------------------------------------------
const PIPELINE_STAGES = [
  {
    index: "01",
    name: "Synthesis",
    targetId: "sec-synthesis",
    objective: "Cloning predicted CTL epitopes into T7 vector; PIE self-splicing circularisation.",
    readout: "Agarose gel linearisation check; RT-qPCR divergent/convergent ratio; Sanger BSJ.",
    gate: "RNase R–resistant circular fraction ≥ 90%; clear single-peak BSJ chromatogram.",
  },
  {
    index: "02",
    name: "Screening",
    targetId: "sec-round1-screen",
    objective: "Electroporating 13 single-epitope circRNAs into autologous PBMC-derived DCs.",
    readout: "IFN-γ ELISpot SFC ranking; Calcein-AM cytotoxicity (K562); CD8⁺CD69⁺ flow cytometry.",
    gate: "Select top 2 highest-SFC epitopes per antigen (8 epitopes total in 8 fragments).",
  },
  {
    index: "03",
    name: "Optimisation",
    targetId: "sec-optimisation",
    objective: "Assembling selected 8 epitopes into tandem cassette with flexible linkers.",
    readout: "Colony PCR; full-length sequencing; release-testing RT-qPCR of Combined batch.",
    gate: "100% sequence accuracy; identical T4 td BSJ trace; circular fraction ≥ 90%.",
  },
  {
    index: "04",
    name: "Validation",
    targetId: "sec-round2-validation",
    objective: "Validating complete immune chain: DC maturation, translation, T-cell activation & killing.",
    readout: "CD80/CD86 flow; anti-FLAG Western blot; CD45RO⁺CCR7⁻ memory; MDA-MB-231 killing.",
    gate: "Subtracted Vector Blank background; confirmed antigen-specific CTL activation.",
  },
  {
    index: "05",
    name: "Safety",
    targetId: "sec-safety",
    objective: "Determining molecular resistance, off-target normal cell cytotoxicity & LNP dose ceiling.",
    readout: "72 h gel persistence; Calcein-AM on HCAEC/LX-2/BEAS-2B/MCF12A; CCK-8 on empty LNP.",
    gate: "Zero off-target normal killing; established non-toxic working interval (<400 ng/well).",
  },
  {
    index: "06",
    name: "Target Model",
    targetId: "sec-trop2-model",
    objective: "Establishing 4T1 murine mammary carcinoma line stably overexpressing human TROP2.",
    readout: "Lentiviral transduction (GFP/puro); FACS sorting; RT-PCR mRNA; surface flow cytometry.",
    gate: "Robust GFP signal, verified TROP2 mRNA amplicon, and confirmed membrane display.",
  },
  {
    index: "07",
    name: "In Vivo",
    targetId: "sec-in-vivo",
    objective: "Testing antitumour protection, tumour-infiltrating CTLs, and systemic immune memory in mice.",
    readout: "Weekly caliper volume; endpoint D35 volume; IF CD8/GzmB; splenic flow & ICS.",
    gate: "Significant tumour growth inhibition (TGI); elevated intratumoural CTLs & memory subsets.",
  },
];

const TOP_ROW_STAGES = PIPELINE_STAGES.slice(0, 3);
const BOTTOM_ROW_STAGES = PIPELINE_STAGES.slice(3);

export function ExperimentPipelineNavigator() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeStage = PIPELINE_STAGES[activeIdx];

  const handleJumpToChapter = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    const inner =
      el.closest<HTMLElement>(".route-frame__scroll") ||
      document.querySelector<HTMLElement>(".route-frame__scroll");
    scrollReaderToTarget(el, inner, "smooth");
  };

  return (
    <figure className="exp-pipeline-card">
      <header className="exp-pipeline-card__header">
        <h3 className="exp-pipeline-card__title">Seven-Stage Experimental Pipeline</h3>
        <p className="exp-pipeline-card__desc">
          Sequential experimental logic designed around the closed chain:
          <strong> Construct → Screen → Optimise → Validate → Safety → Target Model → In Vivo</strong>.
          Every step enforces explicit quality gates before material advances.
        </p>
      </header>

      <div className="exp-pipeline-steps" role="tablist" aria-label="Experimental Stages">
        <div className="exp-pipeline-steps__row exp-pipeline-steps__row--3">
          {TOP_ROW_STAGES.map((stage) => {
            const idx = PIPELINE_STAGES.findIndex((s) => s.index === stage.index);
            const isActive = activeIdx === idx;
            return (
              <button
                key={stage.index}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`exp-pipeline-step-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="exp-pipeline-step-btn__index">{stage.index}</span>
                <span className="exp-pipeline-step-btn__name">{stage.name}</span>
              </button>
            );
          })}
        </div>
        <div className="exp-pipeline-steps__row exp-pipeline-steps__row--4">
          {BOTTOM_ROW_STAGES.map((stage) => {
            const idx = PIPELINE_STAGES.findIndex((s) => s.index === stage.index);
            const isActive = activeIdx === idx;
            return (
              <button
                key={stage.index}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`exp-pipeline-step-btn ${isActive ? "is-active" : ""}`}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="exp-pipeline-step-btn__index">{stage.index}</span>
                <span className="exp-pipeline-step-btn__name">{stage.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="exp-pipeline-detail" aria-live="polite">
        <div className="exp-pipeline-detail__top">
          <div className="exp-pipeline-detail__lead">
            Stage {activeStage.index} · {activeStage.name} Overview
          </div>
          <button
            type="button"
            className="exp-pipeline-detail__jump-btn"
            onClick={() => handleJumpToChapter(activeStage.targetId)}
          >
            Go to Section {activeStage.index} ↓
          </button>
        </div>
        <div className="exp-pipeline-detail__row">
          <span className="exp-pipeline-detail__label">Objective:</span>
          <span>{activeStage.objective}</span>
        </div>
        <div className="exp-pipeline-detail__row">
          <span className="exp-pipeline-detail__label">Readouts:</span>
          <span>{activeStage.readout}</span>
        </div>
        <div className="exp-pipeline-detail__row">
          <span className="exp-pipeline-detail__label">Gate Rule:</span>
          <span>{activeStage.gate}</span>
        </div>
      </div>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// 2. circRNA Biochemistry Diagram
// ---------------------------------------------------------------------------
export function CircrnaBiochemDiagram() {
  const [tab, setTab] = useState<"splicing" | "primers">("splicing");

  return (
    <div className="exp-biochem-panel">
      <div className="exp-biochem-tabs">
        <button
          type="button"
          className={`exp-biochem-tab-btn ${tab === "splicing" ? "is-active" : ""}`}
          onClick={() => setTab("splicing")}
        >
          PIE Self-Splicing Mechanism
        </button>
        <button
          type="button"
          className={`exp-biochem-tab-btn ${tab === "primers" ? "is-active" : ""}`}
          onClick={() => setTab("primers")}
        >
          Convergent vs. Divergent RT-qPCR
        </button>
      </div>

      {tab === "splicing" ? (
        <div className="exp-biochem-schematic">
          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Step 1: IVT Precursor</span>
              <span className="exp-biochem-card__badge">Linear RNA</span>
            </div>
            <div className="exp-biochem-card__visual">
              5&apos; — [Exon 2] — [IRES-Epitopes-Adjuvant] — [Exon 1] — 3&apos;
            </div>
            <p className="exp-biochem-card__content">
              T7 RNA polymerase transcribes the linear precursor containing permuted group I intron (T4 <em>td</em>) elements. GTP attacks the 5&apos; splice site.
            </p>
          </article>

          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Step 2: Covalent Closure</span>
              <span className="exp-biochem-card__badge">Circular RNA</span>
            </div>
            <div className="exp-biochem-card__visual">
              ↺ Covalently Closed Loop [BSJ: Exon1-Exon2 Junction] ↻
            </div>
            <p className="exp-biochem-card__content">
              Self-splicing at 55 ℃ ligates Exon 1 to Exon 2, creating a covalent back-splice junction (BSJ) without free 5&apos;/3&apos; ends.
            </p>
          </article>

          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Step 3: RNase R Digestion</span>
              <span className="exp-biochem-card__badge">Purification Gate</span>
            </div>
            <div className="exp-biochem-card__visual">
              RNase R (3&apos;→5&apos; Exonuclease) digests linear RNA; circRNA survives
            </div>
            <p className="exp-biochem-card__content">
              Strict 37 ℃, 15 min digestion removes uncircularised linear precursor and nicked intermediates, enriching the resistant closed circular fraction to ≥ 90%.
            </p>
          </article>
        </div>
      ) : (
        <div className="exp-biochem-schematic">
          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Convergent Primers</span>
              <span className="exp-biochem-card__badge">Linear / Total</span>
            </div>
            <div className="exp-biochem-card__visual">
              5&apos; ──→ [Forward] ──── [Reverse] ←── 3&apos;
            </div>
            <p className="exp-biochem-card__content">
              Primers face each other along the linear sequence. Amplifies linear precursor and total transcripts to establish reference baseline Cq.
            </p>
          </article>

          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Divergent Primers</span>
              <span className="exp-biochem-card__badge">Circular Specific</span>
            </div>
            <div className="exp-biochem-card__visual">
              ←── [Reverse] ─ [BSJ Junction] ─ [Forward] ──→
            </div>
            <p className="exp-biochem-card__content">
              Primers face outward on linear cDNA and fail to amplify; only on circular cDNA that has formed the BSJ loop do they face inward, yielding specific amplicon.
            </p>
          </article>

          <article className="exp-biochem-card">
            <div className="exp-biochem-card__title">
              <span>Circularity Metric</span>
              <span className="exp-biochem-card__badge">ΔCq Formula</span>
            </div>
            <div className="exp-biochem-card__visual">
              Ratio = 2^(-ΔCq), ΔCq = Cq(divergent) - Cq(convergent)
            </div>
            <p className="exp-biochem-card__content">
              Assayed side-by-side on identical cDNA at 4 µL (3 technical replicates). A qualified batch requires an RNase R–resistant fraction ≥ 90%.
            </p>
          </article>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// 3. Screening Funnel (Round 1 Single-Epitope Screen)
// ---------------------------------------------------------------------------
export function ScreeningFunnel() {
  const stages = [
    {
      count: "13 Constructs",
      name: "Candidate Library",
      desc: "TROP2 ×3 (CTL1-3), B7-H4 ×2 (CTL1, CTL3), Nectin-4 ×3 (CTL2-4), LIV-1 ×5 (CTL1-5) cloned into T7-circRNA backbone.",
    },
    {
      count: "HLA-A*02:01",
      name: "PBMC DC-T Co-Culture",
      desc: "CD14⁺ MACS sorting & moDC induction (GM-CSF + IL-4), circRNA electroporation, co-culture with autologous CD3⁺ T cells at 1:20.",
    },
    {
      count: "Dual Assays",
      name: "Immunogenicity Ranking",
      desc: "Primary criterion: IFN-γ ELISpot SFC ranking (single determinations). Secondary criteria: Calcein-AM cytotoxicity (K562) & CD8⁺CD69⁺ flow activation.",
    },
    {
      count: "8 Epitopes",
      name: "Combined Assembly",
      desc: "Top 2 immunogenic epitopes per antigen selected (8 epitopes in 8 tandem fragments; 9 epitopes total due to overlapping Nectin-4 pair).",
    },
  ];

  return (
    <figure className="exp-funnel-card">
      <header className="exp-pipeline-card__header">
        <h3 className="exp-pipeline-card__title">Round 1 Screening Funnel: From 13 Candidates to 8-Epitope Cassette</h3>
        <p className="exp-pipeline-card__desc">
          To ensure balanced multivalent coverage across all four TNBC targets, exactly 2 epitopes were selected from each antigen, bounded by B7-H4 which entered with 2 constructs.
        </p>
      </header>

      <div className="exp-funnel-stages">
        {stages.map((st, i) => (
          <div className="exp-funnel-stage" key={st.name}>
            <div className="exp-funnel-stage__left">
              <span className="exp-funnel-stage__count">{st.count}</span>
              <span className="exp-funnel-stage__name">Step {i + 1} · {st.name}</span>
            </div>
            <div className="exp-funnel-stage__desc">{st.desc}</div>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// 4. Safety Window Radar / Interactive Pillars
// ---------------------------------------------------------------------------
export function SafetyWindowInteractive() {
  const pillars = [
    {
      index: "Link 01 · Molecule",
      title: "In Vitro Stability (vs. Linear)",
      metric: "72 h Densitometric Residual",
      body: "Equal mass circRNA vs linear precursor incubated at 37 ℃ across 0, 24, 48, 72 h. Proves circular exonuclease resistance; bounds low-frequency dosing rationale.",
    },
    {
      index: "Link 02 · Specificity",
      title: "Off-Target Normal Cell Panel",
      metric: "E:T 80:1 & 100:1 Calcein-AM",
      body: "Tested against HLA-A*02:01⁺ normal lines: HCAEC (endothelium), LX-2 (hepatic), BEAS-2B (bronchial), MCF12A (mammary) vs. MDA-MB-231 positive control.",
    },
    {
      index: "Link 03 · Vehicle",
      title: "Carrier Safe Working Ceiling",
      metric: "0–400 ng/well CCK-8 Viability",
      body: "Empty LNP (cargo-free carrier) titrated on moDCs to isolate vehicle toxicity from RNA. Establishes the non-toxic delivery ceiling before in vivo dosing.",
    },
  ];

  return (
    <figure className="exp-safety-panel">
      <header className="exp-pipeline-card__header">
        <h3 className="exp-pipeline-card__title">Three-Link Safety Evaluation Architecture</h3>
        <p className="exp-pipeline-card__desc">
          Safety is built as a chain of evidence before any animal use: molecular stability parameterises dosing, cellular cytotoxicity bounds on-target/off-tumour damage, and empty vehicle titrations establish carrier safety.
        </p>
      </header>

      <div className="exp-safety-grid">
        {pillars.map((p) => (
          <article className="exp-safety-pillar" key={p.title}>
            <span className="exp-safety-pillar__index">{p.index}</span>
            <h4 className="exp-safety-pillar__title">{p.title}</h4>
            <div className="exp-safety-pillar__metric">{p.metric}</div>
            <p className="exp-safety-pillar__body">{p.body}</p>
          </article>
        ))}
      </div>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// 5. In Vivo NC3Rs EDA Protocol Timeline
// ---------------------------------------------------------------------------
export function InVivoTimelinePanel() {
  const timeline = [
    {
      day: "Day 0 · Inoculation & Dose 1",
      action: "Syngeneic Inoculation + Tail-Base Prime",
      desc: "4T1-TROP2 (1×10⁶/100 µL) injected into right axillary subcutaneous fat pad of female BALB/c (n=5/group). Randomised allocation. Subcutaneous tail-base injection of 10 µg circRNA-LNP (Dose 1).",
    },
    {
      day: "Days 7, 14, 21, 28 · Weekly Regimen",
      action: "Boost Immunisations & Blind Calipering",
      desc: "Weekly subcutaneous injections at the tail base (Doses 2–5). Tumour dimensions measured blind by an independent operator: V = 0.5 × L × W². Humane endpoint surveillance.",
    },
    {
      day: "Day 35 · Study Endpoint",
      action: "Excision & Multi-Tier Immune Profiling",
      desc: "Tumours excised intact; volume measured 3× consecutively blind. Tumours fixed for dual IF (CD8 + Granzyme B). Fresh spleens isolated for 4 flow panels (DC, activation, central memory) & ICS.",
    },
  ];

  return (
    <figure className="exp-invivo-panel">
      <header className="exp-pipeline-card__header">
        <h3 className="exp-pipeline-card__title">In Vivo Immunisation & Readout Timeline (NC3Rs EDA Model)</h3>
        <p className="exp-pipeline-card__desc">
          Pre-specified protocol: 3 randomised groups (PBS Vehicle, Empty Vector circRNA-LNP, Combined circRNA-LNP), n=5 per group. Tail-base injection placed distant from the axillary tumour site to prevent confounding local reactions.
        </p>
      </header>

      <div className="exp-invivo-timeline">
        {timeline.map((item) => (
          <div className="exp-invivo-node" key={item.day}>
            <span className="exp-invivo-node__day">{item.day}</span>
            <strong className="exp-invivo-node__action">{item.action}</strong>
            <span className="exp-invivo-node__desc">{item.desc}</span>
          </div>
        ))}
      </div>
    </figure>
  );
}

// ---------------------------------------------------------------------------
// 6. Bench Protocol Tool Card (TOOL-01)
// ---------------------------------------------------------------------------
export function BenchProtocolToolkit() {
  const pdfUrl = `${import.meta.env.BASE_URL}assets/docs/circure-wetlab-protocol.pdf`;

  return (
    <article className="exp-protocol-tool" id="bench-protocol-toolkit">
      <h3 className="exp-protocol-tool__title">
        CirCure Wet Lab Standard Operating Procedures (SOPs) Manual
      </h3>
      <p className="exp-protocol-tool__desc">
        Complete laboratory manual containing 14 formal Standard Operating Procedures (SOPs), buffer recipes, quality criteria, and equipment specifications spanning molecular cloning, in vitro transcription, RNase R digestion, DC electroporation, ELISpot, Calcein-AM assays, lentiviral transduction, and syngeneic murine tumour models.
      </p>

      <div className="exp-protocol-tool__meta-grid">
        <div className="exp-protocol-tool__meta-item">
          <strong>Document Format</strong>
          <span>PDF (Full Edition, 58.5 MB)</span>
        </div>
        <div className="exp-protocol-tool__meta-item">
          <strong>Compliance Standards</strong>
          <span>ARRIVE 2.0 &amp; NC3Rs EDA</span>
        </div>
        <div className="exp-protocol-tool__meta-item">
          <strong>Biosafety Level</strong>
          <span>BSL-2 / SPF Barrier Facility</span>
        </div>
        <div className="exp-protocol-tool__meta-item">
          <strong>Ethics Approval</strong>
          <span>JDYY20261369 / SYXK(Ji) 2023-0011</span>
        </div>
      </div>

      <div className="exp-protocol-tool__actions">
        <a
          className="exp-protocol-tool__btn"
          href={pdfUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open CirCure Wet Lab Protocol Manual in a new tab"
        >
          <span>Open Full Bench Protocol (PDF)</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Dictionary Export for WikiRoutePage
// ---------------------------------------------------------------------------
export function experimentsFeatures(): Record<string, ReactNode> {
  return {
    "exp-pipeline-navigator": <ExperimentPipelineNavigator />,
    "circrna-biochem-diagram": <CircrnaBiochemDiagram />,
    "screening-funnel": <ScreeningFunnel />,
    "safety-window-interactive": <SafetyWindowInteractive />,
    "in-vivo-timeline": <InVivoTimelinePanel />,
    "bench-protocol-toolkit": <BenchProtocolToolkit />,
  };
}
