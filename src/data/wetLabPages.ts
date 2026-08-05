import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

export const experimentsPage: WikiPageContent = {
  route: "/experiments",
  category: "wet-lab",
  chapter: "Wet Lab / 01 of 05",
  eyebrow: "Experiments · Evidence atlas",
  title: "Experiments",
  lede: "Five gates. One testable claim at each step.",
  boundary:
    "This migration contains an experimental blueprint, not completed experiments. Replace every planned condition with dated protocols, deviations, sample IDs, and result links.",
  visual: "experiment-gates",
  visualLabel: "Five-gate CirCure experimental route",
  visualSteps: ["construct", "circularize", "express", "present", "recognize"],
  facts: [
    { label: "Order", value: "Later claims depend on earlier gates." },
    { label: "Control", value: "Every assay tests a competing explanation." },
    {
      label: "Record",
      value: "Protocols resolve to samples and notebook dates.",
    },
    { label: "Decision", value: "Advance only when acceptance rules are met." },
  ],
  sections: [
    {
      id: "experiments-route",
      index: "01",
      kicker: "Experimental route",
      navLabel: "Five-gate route",
      title: "Five gates. No skipped claims.",
      summary:
        "A reporter signal cannot establish topology; topology cannot establish presentation; presentation cannot establish selective function.",
      body: [
        "The route is deliberately sequential. Every gate consumes named evidence from the previous gate and produces either an advance decision, a repeat condition, or a return to design. Ambiguous material should never be carried forward simply because a later assay produces an attractive signal.",
      ],
      layout: "steps",
      items: [
        {
          label: "Gate 01",
          navLabel: "Construct identity",
          title: "Construct identity",
          body: "Confirm insert boundaries, epitope order, linker logic, reading frame, backbone version, and critical junctions before RNA production.",
          evidence: [
            "An annotated sequence and plasmid map that identify every functional boundary.",
            "Clone lineage, backbone version, expected products, and sample identifiers.",
            "Chromatograms or equivalent confirmation for critical junctions and reading frame.",
          ],
          decision:
            "Advance only when identity, orientation, and critical junctions resolve without an unexplained mixed signal.",
          status: "planned",
        },
        {
          label: "Gate 02",
          navLabel: "Circular topology",
          title: "Circular topology",
          body: "Combine matched linear RNA, RNase R response, junction-specific detection, sequence confirmation, and purity assessment.",
          evidence: [
            "Junction-specific detection supported by sequence or orthogonal identity evidence.",
            "Matched linear RNA and RNase R conditions processed in the same experimental batch.",
            "Recovery, integrity, purity, and unresolved products reported beside the preferred band.",
          ],
          decision:
            "Repeat, purify, or redesign whenever the evidence cannot distinguish circular product from resistant linear or concatemeric material.",
          status: "planned",
        },
        {
          label: "Gate 03",
          navLabel: "Expression window",
          title: "Expression window",
          body: "Measure uptake/process control, intended output, matched linear RNA, time, dose, and viability from aligned samples.",
          evidence: [
            "Matched input, delivery condition, dose, time point, and sample lineage.",
            "A delivery or process control that separates failed access from failed translation.",
            "Encoded output displayed beside viability and cell-state measurements.",
          ],
          decision:
            "Do not advance a high-signal condition when the increase is inseparable from unacceptable stress, loss of viability, or batch imbalance.",
          status: "planned",
        },
        {
          label: "Gate 04",
          navLabel: "Presentation evidence",
          title: "Presentation evidence",
          body: "Distinguish general activation from sequence-specific display using an irrelevant epitope, matched delivery conditions, and an assay that resolves the presented target.",
          evidence: [
            "A presentation-specific readout aligned to expression and cell-state controls.",
            "Irrelevant epitope and antigen-negative conditions under matched delivery.",
            "General activation measured separately from sequence-specific display.",
          ],
          decision:
            "Presentation is supported only when the target-specific difference survives the irrelevant and process controls; expression alone is insufficient.",
          status: "planned",
        },
        {
          label: "Gate 05",
          navLabel: "Selective recognition",
          title: "Selective recognition",
          body: "Compare antigen-positive and antigen-negative targets beside functional and stress baselines before making any claim about selective response.",
          evidence: [
            "Antigen-positive and antigen-negative targets tested in the same assay window.",
            "Functional response, non-specific stress, and baseline activity reported together.",
            "Replicate structure and predefined exclusions that preserve the target comparison.",
          ],
          decision:
            "Bound the conclusion to the tested target, assay, dose, and time window; reject a selectivity claim when general stress explains the response.",
          status: "open",
        },
      ],
    },
    {
      id: "experiments-record",
      index: "02",
      kicker: "Protocol anatomy",
      navLabel: "Protocol anatomy",
      title: "Make the method reusable, not merely visible.",
      summary:
        "Each protocol records materials, critical parameters, deviations, attachments, and the exact evidence it is designed to generate.",
      body: [
        "A protocol is treated as a versioned research object. The question, comparator, acceptance rule, and required record are fixed before execution; actual deviations remain attached to the dated Notebook entry rather than being silently folded into a cleaner method.",
      ],
      layout: "ledger",
      items: [
        {
          label: "PR–01",
          navLabel: "Assembly & verification",
          title: "Construct assembly and verification",
          body: "Backbone, insert boundaries, primers, expected sizes, assembly conditions, clone lineage, plasmid map, and chromatograms.",
          evidence: [
            "Versioned construct map, primer table, expected product sizes, and assembly conditions.",
            "Clone identifiers linked to screening results and full sequence attachments.",
            "Every deviation recorded in the dated Notebook execution rather than silently corrected.",
          ],
          decision:
            "Release the protocol only when another team can reconstruct which material was built, screened, accepted, and carried forward.",
          status: "planned",
        },
        {
          label: "PR–02",
          navLabel: "RNA topology",
          title: "RNA production and topology",
          body: "Transcription input, circularization route, cleanup, recovery, integrity, RNase R conditions, primer orientation, and junction trace.",
          evidence: [
            "Input template, transcription and circularization parameters, cleanup route, and recovery.",
            "Primer orientation, expected junction product, enzyme conditions, and matched controls.",
            "Raw gel, trace, or sequence files connected to the exact RNA batch.",
          ],
          decision:
            "A reusable protocol must state the acceptance threshold and the corrective route for low recovery, degradation, contamination, or ambiguous topology.",
          status: "planned",
        },
        {
          label: "PR–03",
          navLabel: "Delivery & viability",
          title: "Delivery, expression, and viability",
          body: "Cell source, passage, seeding density, dose, reagent, exposure time, viability method, normalization, and replicate structure.",
          evidence: [
            "Cell source and state, seeding density, formulation, dose, exposure, and harvest timing.",
            "Delivery and expression readouts normalized with the same documented reference.",
            "Viability, morphology, or stress measurements from aligned wells and samples.",
          ],
          decision:
            "The method is reusable only when it exposes the operating window and the conditions that must be repeated, retuned, or rejected.",
          status: "planned",
        },
        {
          label: "PR–04",
          navLabel: "Recognition assay",
          title: "Presentation and selective recognition",
          body: "Presentation assay, target identity, matched negative and irrelevant controls, response readout, stress baseline, and predefined interpretation boundary.",
          evidence: [
            "Target provenance and antigen status documented before comparison.",
            "Matched negative, irrelevant, process, and positive-control conditions.",
            "Response and toxicity measurements linked to a predefined analysis version.",
          ],
          decision:
            "The protocol must prevent a general activation signal from being reported as target-specific recognition.",
          status: "open",
        },
      ],
      note: {
        label: "Protocol boundary",
        body: "A protocol describes what was done. The bounded conclusion and figure belong on Results; the dated execution record belongs in Notebook.",
      },
    },
    {
      id: "experiments-controls",
      index: "03",
      kicker: "Control logic",
      navLabel: "Control logic",
      title: "Design controls before seeing the signal.",
      summary:
        "Controls define what a positive result can mean and prevent one attractive readout from carrying a stronger conclusion than the assay supports.",
      body: [
        "Controls are organized around alternative explanations, not around a generic checklist. Each experimental figure should make it possible to distinguish biological absence, process failure, background signal, non-specific activation, and the specific difference the experiment was designed to test.",
      ],
      layout: "matrix",
      items: [
        {
          label: "Negative",
          navLabel: "Background signal",
          title: "Define background",
          body: "No-template, no-RNA, mock delivery, and antigen-negative conditions establish assay and biological baselines.",
          evidence: [
            "Technical blanks and no-template conditions for instrument or reagent background.",
            "Mock and no-RNA delivery conditions for process-associated response.",
            "Antigen-negative biology tested under the same acquisition and analysis settings.",
          ],
          decision:
            "A positive result must clear the relevant technical and biological baselines, not merely differ from an empty well.",
          status: "planned",
        },
        {
          label: "Process",
          navLabel: "Failure location",
          title: "Locate failure",
          body: "Delivery, extraction, amplification, staining, and instrument controls distinguish process failure from biology.",
          evidence: [
            "Process controls placed at the delivery, extraction, amplification, staining, and acquisition stages.",
            "Acceptance criteria reported for every stage capable of erasing a biological signal.",
            "Failed quality gates remain visible beside excluded or repeated samples.",
          ],
          decision:
            "Interpret a negative biological result only after the controls show that the relevant process stages remained informative.",
          status: "planned",
        },
        {
          label: "Comparator",
          navLabel: "Claimed difference",
          title: "Test the claimed difference",
          body: "Matched linear RNA, irrelevant epitope, and alternative construct conditions challenge the preferred mechanism.",
          evidence: [
            "A comparator that changes the proposed mechanism while preserving unrelated handling variables.",
            "Matched linear RNA, irrelevant epitope, or alternative construct conditions where appropriate.",
            "The same measurement range, exclusions, and replicate logic applied across the comparison.",
          ],
          decision:
            "The claimed mechanism is not supported when the preferred condition cannot be distinguished from a credible alternative explanation.",
          status: "planned",
        },
        {
          label: "Reference",
          navLabel: "Assay response",
          title: "Verify that the assay can respond",
          body: "A validated material or stimulation condition defines the expected direction and reveals when an apparently negative experiment is technically uninformative.",
          evidence: [
            "A positive-control material or stimulation with a documented expected direction.",
            "Control performance shown for the same batch, acquisition window, and analysis pipeline.",
            "A predefined response range that distinguishes weak biology from assay failure.",
          ],
          decision:
            "When the reference condition fails, classify the experiment as technically uninformative rather than biologically negative.",
          status: "planned",
        },
      ],
    },
  ],
  links: [
    { path: "/notebook", label: "Dated records" },
    { path: "/measurement", label: "Measurement standard" },
    { path: "/results", label: "Measured results" },
  ],
  next: {
    path: "/notebook",
    label: "Notebook",
    title: "Where did each sample and decision come from?",
  },
};

export const notebookPage: WikiPageContent = {
  route: "/notebook",
  category: "wet-lab",
  chapter: "Wet Lab / 02 of 05",
  eyebrow: "Notebook · Trace the work",
  title: "Notebook",
  lede: "Dates, samples, deviations, and decisions—one traceable record.",
  boundary:
    "No team notebook export was supplied. The entries below define the record schema and must be replaced with real dates, participants, files, and outcomes.",
  visual: "notebook-trace",
  visualLabel: "Chronological laboratory record",
  visualSteps: [
    "construct review",
    "assembly",
    "RNA preparation",
    "assay review",
  ],
  facts: [
    { label: "When", value: "Date, time, project phase, and owner." },
    { label: "What", value: "Purpose, procedure, samples, and deviation." },
    { label: "Observed", value: "Raw observation before interpretation." },
    { label: "Next", value: "Decision, follow-up, and linked evidence." },
  ],
  sections: [
    {
      id: "notebook-schema",
      index: "01",
      kicker: "Record schema",
      navLabel: "Record schema",
      title: "Every entry should survive handoff.",
      summary:
        "A future reader should understand what happened without relying on the memory of the person who performed it.",
      body: [
        "Each entry begins with a question and ends with an assigned next action. Sample identifiers, raw files, protocol versions, and deviations are mandatory links, while interpretation is kept visually separate from the observation that produced it.",
      ],
      layout: "matrix",
      items: [
        {
          label: "Context",
          navLabel: "Purpose & people",
          title: "Purpose and people",
          body: "Date, owner, collaborators, research question, protocol version, and related design record.",
          status: "recorded",
        },
        {
          label: "Execution",
          navLabel: "Samples & deviations",
          title: "Samples and deviations",
          body: "Sample IDs, lineage, reagents, lots, equipment, parameters, environmental conditions, and departures from protocol.",
          status: "planned",
        },
        {
          label: "Outcome",
          navLabel: "Observation & next step",
          title: "Observation and next step",
          body: "Raw files, observations, interpretation, uncertainty, decision, responsible person, and follow-up date.",
          status: "planned",
        },
      ],
    },
    {
      id: "notebook-timeline",
      index: "02",
      kicker: "Working timeline",
      navLabel: "Evidence timeline",
      title: "Chronology with an evidence spine.",
      summary:
        "The final timeline should contain all project work, including unsuccessful builds, analysis changes, safety decisions, and meetings that affected experiments.",
      body: [
        "The timeline is not a highlight reel. Failed preparations, inconclusive assays, threshold changes, and pauses for safety or supervision remain part of the scientific record because they explain why the project changed direction.",
      ],
      layout: "timeline",
      items: [
        {
          label: "NB–2026–01 · replace date",
          navLabel: "Construct acceptance",
          title: "Construct definition and acceptance criteria",
          body: "Reserved for the team meeting that freezes the candidate sequence, expected products, primer plan, and no-go conditions.",
          status: "planned",
        },
        {
          label: "NB–2026–02 · replace date",
          navLabel: "Assembly review",
          title: "Assembly and sequence review",
          body: "Reserved for build conditions, clone IDs, deviations, chromatograms, failed clones, and the decision to advance or rebuild.",
          status: "planned",
        },
        {
          label: "NB–2026–03 · replace date",
          navLabel: "RNA topology",
          title: "RNA production and topology evidence",
          body: "Reserved for sample lineage, recovery, raw images, junction evidence, ambiguity, and the next purification or geometry change.",
          status: "open",
        },
        {
          label: "NB–2026–04 · replace date",
          navLabel: "Assay decision",
          title: "Assay review and continuation decision",
          body: "Reserved for aligned readouts, control performance, uncertainty, team interpretation, the accountable reviewer, and the decision to advance, repeat, revise, or stop.",
          status: "open",
        },
      ],
    },
    {
      id: "notebook-index",
      index: "03",
      kicker: "Cross-reference",
      navLabel: "Cross-reference",
      title: "One record, several destinations.",
      summary:
        "Notebook entries remain the provenance layer; other pages cite them rather than copying the daily log.",
      body: [
        "A single execution can support several downstream artifacts, but each artifact points back to the same source record. This prevents a figure, protocol, or design decision from becoming detached from the sample and analysis history that produced it.",
      ],
      layout: "ledger",
      items: [
        {
          label: "EXP–xx",
          navLabel: "Protocol link",
          title: "Protocol used",
          body: "The exact protocol version and any deviations in this execution.",
          status: "planned",
        },
        {
          label: "RES–xx",
          navLabel: "Result link",
          title: "Result generated",
          body: "The result block and raw file that use this sample or analysis.",
          status: "planned",
        },
        {
          label: "DR–xx",
          navLabel: "Decision link",
          title: "Decision changed",
          body: "The build, threshold, assay, or boundary that changed because of the record.",
          status: "open",
        },
        {
          label: "FIG–xx",
          navLabel: "Figure release",
          title: "Figure released",
          body: "The plotted result, caption boundary, analysis version, and accessible source data created from the record.",
          status: "planned",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Protocols" },
    { path: "/engineering", label: "Engineering decisions" },
    { path: "/results", label: "Result figures" },
  ],
  next: {
    path: "/measurement",
    label: "Measurement",
    title: "How will each readout remain comparable?",
  },
};

export const measurementPage: WikiPageContent = {
  route: "/measurement",
  category: "wet-lab",
  chapter: "Wet Lab / 03 of 05",
  eyebrow: "Measurement · Quantify the claim",
  title: "Measurement",
  lede: "Calibration, controls, range, and uncertainty beside every result.",
  boundary:
    "The page currently defines the reporting and calibration plan. Instrument settings, standard curves, units, replicate counts, and validation results await team data.",
  visual: "measurement-field",
  visualLabel: "Measurement range and decision points",
  visualSteps: ["baseline", "linear range", "decision", "saturation"],
  facts: [
    {
      label: "Meaning",
      value: "The readout resolves a named biological question.",
    },
    {
      label: "Range",
      value: "Limits of detection and quantification are stated.",
    },
    {
      label: "Compare",
      value: "Calibration and normalization remain explicit.",
    },
    {
      label: "Uncertainty",
      value: "Replicates, error, and failed quality gates stay visible.",
    },
  ],
  sections: [
    {
      id: "measurement-chain",
      index: "01",
      kicker: "Measurement chain",
      navLabel: "Measure chain",
      title: "Connect material, instrument, number, and decision.",
      summary:
        "Each measurement should show how a biological state becomes a recorded value and how that value supports a bounded decision.",
      body: [
        "The chain begins before the instrument is switched on. The team first names the biological quantity, the competing explanation, and the useful range; calibration, acquisition, normalization, and decision rules then preserve that meaning through analysis.",
      ],
      layout: "steps",
      items: [
        {
          label: "Define",
          navLabel: "Biological quantity",
          title: "Choose the biological quantity.",
          body: "Specify whether the assay measures identity, abundance, uptake, translation, viability, presentation, or function.",
          status: "recorded",
        },
        {
          label: "Calibrate",
          navLabel: "Meaningful range",
          title: "Establish a meaningful range.",
          body: "Document standards, blanks, instrument settings, linear range, detection limits, and acceptance thresholds.",
          status: "planned",
        },
        {
          label: "Normalize",
          navLabel: "Preserve comparison",
          title: "Preserve the comparison.",
          body: "State reference samples, loading or cell-count corrections, batch handling, and transformations.",
          status: "planned",
        },
        {
          label: "Decide",
          navLabel: "Interpretation rule",
          title: "Predefine interpretation.",
          body: "Connect the measurement and uncertainty to an advance, revise, reject, or repeat rule.",
          status: "open",
        },
      ],
    },
    {
      id: "measurement-readouts",
      index: "02",
      kicker: "Readout matrix",
      navLabel: "Readout matrix",
      title: "Keep neighboring claims separate.",
      summary:
        "Delivery, expression, cell state, presentation, and response should be measured beside one another without being collapsed into one success metric.",
      body: [
        "Related readouts are aligned by sample, dose, time, and batch so that apparent improvement in one dimension cannot hide deterioration in another. A condition with higher encoded signal but unacceptable loss of viability is recorded as a trade-off, not a success.",
      ],
      layout: "matrix",
      items: [
        {
          label: "M–01",
          navLabel: "Identity & topology",
          title: "Product identity and topology",
          body: "Size, junction identity, RNase R comparison, purity, recovery, and uncertainty in topology interpretation.",
          status: "planned",
        },
        {
          label: "M–02",
          navLabel: "Expression & viability",
          title: "Delivery, expression, viability",
          body: "Matched samples, dose and time window, uptake/process control, intended output, and cell-state readout.",
          status: "planned",
        },
        {
          label: "M–03",
          navLabel: "Presentation & function",
          title: "Presentation and function",
          body: "Sequence-specific display, general activation, antigen-positive/negative targets, response, and non-specific toxicity.",
          status: "open",
        },
        {
          label: "M–04",
          navLabel: "Batch quality",
          title: "Process and batch quality",
          body: "Instrument controls, extraction or staining recovery, plate position, reagent lot, batch reference, missingness, and predefined quality exclusions.",
          status: "planned",
        },
      ],
    },
    {
      id: "measurement-publication",
      index: "03",
      kicker: "Publication gate",
      navLabel: "Publication gate",
      title: "A figure must be auditable.",
      summary:
        "The same checklist applies to positive, negative, and ambiguous results.",
      body: [
        "A figure is released only when the plotted value can be traced to its raw source and when another reader can reconstruct the units, exclusions, replicate structure, and analysis version. The caption states both the supported interpretation and the nearest unsupported claim.",
      ],
      layout: "ledger",
      items: [
        {
          label: "Source",
          navLabel: "Raw files",
          title: "Raw file and sample trace",
          body: "Link the instrument or image file to sample IDs and notebook records.",
          status: "planned",
        },
        {
          label: "Scale",
          navLabel: "Units & normalization",
          title: "Units and normalization",
          body: "Name axes, units, transformations, baselines, and any excluded observations.",
          status: "planned",
        },
        {
          label: "Structure",
          navLabel: "Replicates & analysis",
          title: "Replicates and analysis",
          body: "State biological n, technical n, error definition, statistical method, and analysis version.",
          status: "planned",
        },
        {
          label: "Boundary",
          navLabel: "Interpretation boundary",
          title: "Accessible interpretation",
          body: "Explain the result in text and state what the measurement cannot establish.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental route" },
    { path: "/results", label: "Result standard" },
    { path: "/model", label: "Model validation" },
  ],
  next: {
    path: "/alternative-platform",
    label: "Alternative Platform",
    title: "Which experimental context carries the system?",
  },
};

export const alternativePlatformPage: WikiPageContent = {
  route: "/alternative-platform",
  category: "wet-lab",
  chapter: "Wet Lab / 04 of 05",
  eyebrow: "Alternative platform · Context first",
  title: "Alternative Platform",
  lede: "The host changes expression, safety, cost, and comparability.",
  boundary:
    "Eligibility and the final experimental platform still require confirmation. This page must remain a concise scope record if the project does not meet the Alternative Platform criteria.",
  visual: "platform-orbit",
  visualLabel: "Payload, host, and readout relationship",
  visualSteps: ["payload", "host context", "observable output"],
  facts: [
    { label: "Choose", value: "The platform answers a project-specific need." },
    {
      label: "Adapt",
      value: "Construct and protocol fit the biological context.",
    },
    { label: "Compare", value: "Advantages are tested against alternatives." },
    {
      label: "Guard",
      value: "Platform-specific risks and limits are explicit.",
    },
  ],
  sections: [
    {
      id: "platform-rationale",
      index: "01",
      kicker: "Platform rationale",
      navLabel: "Platform choice",
      title: "Use the platform because the question requires it.",
      summary:
        "The page should explain why a standard bacterial or yeast context cannot answer the selected biological question.",
      body: [
        "For CirCure, candidate expression, processing, presentation, or delivery may require mammalian or cell-free systems. The final page should identify the exact system and distinguish a project necessity from eligibility for a special prize.",
        "If the selected work is not genuinely an alternative platform contribution, the route should state that limit honestly rather than expanding a generic award description.",
        "The platform decision should therefore be reversible and evidence-led: use rapid, controllable systems to answer screening questions, and move into biologically richer contexts only when the next claim requires that context.",
      ],
    },
    {
      id: "platform-workflow",
      index: "02",
      kicker: "Adaptation record",
      navLabel: "Adaptation record",
      title: "Document what the context changes.",
      summary:
        "Construct design, handling, controls, measurement, and safety should be adapted together.",
      body: [
        "Changing the host changes more than a protocol. Source quality, processing assumptions, delivery route, stress response, baseline variability, and the meaning of a negative result are reviewed as one connected adaptation record.",
      ],
      layout: "steps",
      items: [
        {
          label: "System",
          navLabel: "Source & state",
          title: "Define source and state.",
          body: "Record cell or extract source, provenance, passage or batch, culture conditions, quality criteria, and relevant biological functions.",
          status: "planned",
        },
        {
          label: "Construct",
          navLabel: "Compatibility",
          title: "Map compatibility constraints.",
          body: "Explain translation entry, sequence context, payload size, formulation, delivery, and processing assumptions.",
          status: "planned",
        },
        {
          label: "Control",
          navLabel: "Fair comparison",
          title: "Build a fair comparison.",
          body: "Use matched payload, process, viability, and host controls that separate platform effects from construct effects.",
          status: "planned",
        },
        {
          label: "Reuse",
          navLabel: "Adaptation path",
          title: "Release the adaptation path.",
          body: "Provide protocols, troubleshooting, acceptance criteria, and platform-specific limitations for future teams.",
          status: "open",
        },
      ],
    },
    {
      id: "platform-evidence",
      index: "03",
      kicker: "Evidence required",
      navLabel: "Evidence required",
      title: "Show utility, not novelty alone.",
      summary:
        "A platform page becomes meaningful when it demonstrates an observable advantage, a tradeoff, and reproducible operation.",
      body: [
        "Novelty alone is not the endpoint. The platform must answer a defined project need, outperform or complement a credible alternative on that need, and expose the cost, variability, safety, and transfer limits introduced by the choice.",
      ],
      layout: "ledger",
      items: [
        {
          label: "Performance",
          navLabel: "Relevant readout",
          title: "Relevant readout",
          body: "Define the platform-dependent property being measured and its acceptance rule.",
          status: "planned",
        },
        {
          label: "Comparison",
          navLabel: "Alternative context",
          title: "Alternative context",
          body: "Compare against a relevant standard, simpler system, or literature-supported baseline.",
          status: "open",
        },
        {
          label: "Limit",
          navLabel: "Transferability",
          title: "Transferability",
          body: "State what cannot be inferred outside the chosen host, batch, or assay context.",
          status: "recorded",
        },
        {
          label: "Reuse",
          navLabel: "Operating envelope",
          title: "Reproducible operating envelope",
          body: "Release the source criteria, handling window, quality gates, failure modes, and troubleshooting evidence another team would need to reproduce the context.",
          status: "planned",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Platform protocols" },
    { path: "/measurement", label: "Platform readouts" },
    { path: "/safety-and-security", label: "Platform safety" },
  ],
  next: {
    path: "/safety-and-security",
    label: "Safety and Security",
    title: "Where must the project stop?",
  },
};

export const safetyPage: WikiPageContent = {
  route: "/safety-and-security",
  category: "wet-lab",
  chapter: "Wet Lab / 05 of 05",
  eyebrow: "Safety and security · Design boundaries",
  title: "Safety and Security",
  lede: "Risk controls begin before every experiment.",
  boundary:
    "This page is a planning framework and does not replace institutional review, iGEM forms, local regulation, supervision, or project-specific risk assessment.",
  visual: "safety-boundary",
  visualLabel: "Risk and no-go boundary map",
  visualSteps: ["biological", "chemical", "physical", "misuse"],
  facts: [
    {
      label: "Identify",
      value: "Hazard, exposure route, affected party, and uncertainty.",
    },
    { label: "Reduce", value: "Elimination and design controls before PPE." },
    {
      label: "Monitor",
      value: "Training, records, incidents, and review points.",
    },
    {
      label: "Stop",
      value: "Explicit no-go conditions and escalation routes.",
    },
  ],
  sections: [
    {
      id: "safety-risks",
      index: "01",
      kicker: "Risk inventory",
      navLabel: "Risk inventory",
      title: "Name who or what could be harmed.",
      summary:
        "Risk descriptions should be specific enough to change a construct, protocol, access rule, claim, or implementation plan.",
      body: [
        "Each risk statement identifies a hazard, an exposure or misuse pathway, the affected people or environment, existing controls, residual uncertainty, and the owner of the next review. Generic statements that cannot change a decision are not treated as completed assessment.",
      ],
      layout: "matrix",
      items: [
        {
          label: "Biological",
          navLabel: "Material & host",
          title: "Material and host risk",
          body: "Chassis, payload, expression product, off-target activity, environmental release, cell line handling, and waste.",
          status: "planned",
        },
        {
          label: "Operational",
          navLabel: "Chemical & physical",
          title: "Chemical and physical risk",
          body: "Reagents, sharps, heat, UV, centrifugation, electrical equipment, transport, storage, and disposal.",
          status: "planned",
        },
        {
          label: "Security",
          navLabel: "Information & misuse",
          title: "Information and misuse risk",
          body: "Access to materials, sequences, data, code, dual-use interpretation, medical misinformation, and unauthorized claims.",
          status: "open",
        },
        {
          label: "Governance",
          navLabel: "Consent & access",
          title: "Consent, access, and communication",
          body: "Stakeholder records, identifiable material, restricted information, public-facing claims, review authority, and the route for correction or withdrawal.",
          status: "planned",
        },
      ],
    },
    {
      id: "safety-controls",
      index: "02",
      kicker: "Control hierarchy",
      navLabel: "Control hierarchy",
      title: "Mitigation should be visible in the artifact.",
      summary:
        "Where possible, the project changes the design or removes the hazard instead of relying only on procedural reminders.",
      body: [
        "Mitigations are ordered by reliability. Elimination and design constraints are considered first, followed by physical or technical controls, documented responsibility, and finally task-specific PPE; every layer names how its effectiveness will be checked.",
      ],
      layout: "steps",
      items: [
        {
          label: "Eliminate",
          navLabel: "Eliminate hazard",
          title: "Avoid unnecessary hazard.",
          body: "Choose non-pathogenic systems, safer materials, limited functionality, and the minimum data or material access required.",
          status: "planned",
        },
        {
          label: "Engineer",
          navLabel: "Built-in constraints",
          title: "Build constraints into the system.",
          body: "Use design boundaries, containment, access control, fail-safe operation, and assays that reveal unacceptable cell stress.",
          status: "planned",
        },
        {
          label: "Administer",
          navLabel: "Responsibility",
          title: "Define responsibility.",
          body: "Training, supervision, inventories, labels, storage, transport, deviation reporting, and incident escalation must be documented.",
          status: "planned",
        },
        {
          label: "Protect",
          navLabel: "Task-specific PPE",
          title: "Use task-specific PPE.",
          body: "PPE remains the final layer and is tied to the actual procedure rather than listed generically.",
          status: "recorded",
        },
      ],
    },
    {
      id: "safety-boundaries",
      index: "03",
      kicker: "Claim and continuation gates",
      navLabel: "No-go gates",
      title: "A no-go condition is an engineering output.",
      summary:
        "The team should predefine when a construct, dose, assay, publication, or implementation claim will not advance.",
      body: [
        "A no-go decision is logged with the triggering evidence, responsible reviewer, immediate containment action, and conditions required for reconsideration. Stopping is presented as a designed outcome rather than an unexplained absence of progress.",
      ],
      layout: "ledger",
      items: [
        {
          label: "SAFE–01",
          navLabel: "Unexpected product",
          title: "Unexpected product or unresolved topology",
          body: "Stop downstream interpretation and return to construct identity, purification, or geometry.",
          status: "boundary",
        },
        {
          label: "SAFE–02",
          navLabel: "Cell stress",
          title: "Signal coupled to unacceptable cell stress",
          body: "Reject the condition; do not optimize only for maximum expression or activation.",
          status: "boundary",
        },
        {
          label: "SAFE–03",
          navLabel: "Medical claims",
          title: "Evidence cannot support medical readiness",
          body: "Keep therapeutic efficacy, safety, dosing, and clinical claims outside the published conclusion.",
          status: "boundary",
        },
        {
          label: "SAFE–04",
          navLabel: "Consent & access",
          title: "Consent or access is unclear",
          body: "Do not publish identifiable stakeholder material or restricted records.",
          status: "boundary",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental controls" },
    { path: "/human-practices", label: "Responsible design" },
    { path: "/inclusivity", label: "Consent and access" },
  ],
  next: {
    path: "/protocol",
    label: "Protocol Library",
    title: "Open the bench record at the point of work.",
  },
};
