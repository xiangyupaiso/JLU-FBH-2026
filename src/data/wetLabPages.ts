import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

export const experimentsPage: WikiPageContent = {
  route: "/experiments",
  category: "wet-lab",
  chapter: "Wet Lab / 01 of 05",
  eyebrow: "Experiments · Evidence atlas",
  title: "Evidence, in the right order.",
  lede: "The experimental programme moves through five gates: construct identity, circular topology, expression, presentation, and selective function. Each gate names its question, method, critical comparison, and decision rule.",
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
      title: "Five gates. No skipped claims.",
      summary:
        "A reporter signal cannot establish topology; topology cannot establish presentation; presentation cannot establish selective function.",
      layout: "steps",
      items: [
        {
          label: "Gate 01",
          title: "Construct identity",
          body: "Confirm insert boundaries, epitope order, linker logic, reading frame, backbone version, and critical junctions before RNA production.",
          status: "planned",
        },
        {
          label: "Gate 02",
          title: "Circular topology",
          body: "Combine matched linear RNA, RNase R response, junction-specific detection, sequence confirmation, and purity assessment.",
          status: "planned",
        },
        {
          label: "Gate 03",
          title: "Expression window",
          body: "Measure uptake/process control, intended output, matched linear RNA, time, dose, and viability from aligned samples.",
          status: "planned",
        },
        {
          label: "Gate 04–05",
          title: "Presentation and recognition",
          body: "Separate general activation from sequence-specific MHC display, then compare antigen-positive and antigen-negative targets.",
          status: "open",
        },
      ],
    },
    {
      id: "experiments-record",
      index: "02",
      kicker: "Protocol anatomy",
      title: "Make the method reusable, not merely visible.",
      summary:
        "Each protocol records materials, critical parameters, deviations, attachments, and the exact evidence it is designed to generate.",
      layout: "ledger",
      items: [
        {
          label: "PR–01",
          title: "Construct assembly and verification",
          body: "Backbone, insert boundaries, primers, expected sizes, assembly conditions, clone lineage, plasmid map, and chromatograms.",
          status: "planned",
        },
        {
          label: "PR–02",
          title: "RNA production and topology",
          body: "Transcription input, circularization route, cleanup, recovery, integrity, RNase R conditions, primer orientation, and junction trace.",
          status: "planned",
        },
        {
          label: "PR–03",
          title: "Delivery, expression, and viability",
          body: "Cell source, passage, seeding density, dose, reagent, exposure time, viability method, normalization, and replicate structure.",
          status: "planned",
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
      title: "Design controls before seeing the signal.",
      summary:
        "Controls define what a positive result can mean and prevent one attractive readout from carrying a stronger conclusion than the assay supports.",
      layout: "matrix",
      items: [
        {
          label: "Negative",
          title: "Define background",
          body: "No-template, no-RNA, mock delivery, and antigen-negative conditions establish assay and biological baselines.",
          status: "planned",
        },
        {
          label: "Process",
          title: "Locate failure",
          body: "Delivery, extraction, amplification, staining, and instrument controls distinguish process failure from biology.",
          status: "planned",
        },
        {
          label: "Comparator",
          title: "Test the claimed difference",
          body: "Matched linear RNA, irrelevant epitope, and alternative construct conditions challenge the preferred mechanism.",
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
  title: "A date is only the beginning of a record.",
  lede: "The notebook connects daily work to sample lineage, deviations, observations, decisions, and the next experiment. It is chronological, but every entry also points into the wider evidence chain.",
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
      title: "Every entry should survive handoff.",
      summary:
        "A future reader should understand what happened without relying on the memory of the person who performed it.",
      layout: "matrix",
      items: [
        {
          label: "Context",
          title: "Purpose and people",
          body: "Date, owner, collaborators, research question, protocol version, and related design record.",
          status: "recorded",
        },
        {
          label: "Execution",
          title: "Samples and deviations",
          body: "Sample IDs, lineage, reagents, lots, equipment, parameters, environmental conditions, and departures from protocol.",
          status: "planned",
        },
        {
          label: "Outcome",
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
      title: "Chronology with an evidence spine.",
      summary:
        "The final timeline should contain all project work, including unsuccessful builds, analysis changes, safety decisions, and meetings that affected experiments.",
      layout: "timeline",
      items: [
        {
          label: "NB–2026–01 · replace date",
          title: "Construct definition and acceptance criteria",
          body: "Reserved for the team meeting that freezes the candidate sequence, expected products, primer plan, and no-go conditions.",
          status: "planned",
        },
        {
          label: "NB–2026–02 · replace date",
          title: "Assembly and sequence review",
          body: "Reserved for build conditions, clone IDs, deviations, chromatograms, failed clones, and the decision to advance or rebuild.",
          status: "planned",
        },
        {
          label: "NB–2026–03 · replace date",
          title: "RNA production and topology evidence",
          body: "Reserved for sample lineage, recovery, raw images, junction evidence, ambiguity, and the next purification or geometry change.",
          status: "open",
        },
      ],
    },
    {
      id: "notebook-index",
      index: "03",
      kicker: "Cross-reference",
      title: "One record, several destinations.",
      summary:
        "Notebook entries remain the provenance layer; other pages cite them rather than copying the daily log.",
      layout: "ledger",
      items: [
        {
          label: "EXP–xx",
          title: "Protocol used",
          body: "The exact protocol version and any deviations in this execution.",
          status: "planned",
        },
        {
          label: "RES–xx",
          title: "Result generated",
          body: "The result block and raw file that use this sample or analysis.",
          status: "planned",
        },
        {
          label: "DR–xx",
          title: "Decision changed",
          body: "The build, threshold, assay, or boundary that changed because of the record.",
          status: "open",
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
  title: "A number needs a measurement story.",
  lede: "CirCure measurements should make biological meaning, calibration, controls, normalization, range, and uncertainty visible. A stronger signal is not automatically a better experimental condition.",
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
      title: "Connect material, instrument, number, and decision.",
      summary:
        "Each measurement should show how a biological state becomes a recorded value and how that value supports a bounded decision.",
      layout: "steps",
      items: [
        {
          label: "Define",
          title: "Choose the biological quantity.",
          body: "Specify whether the assay measures identity, abundance, uptake, translation, viability, presentation, or function.",
          status: "recorded",
        },
        {
          label: "Calibrate",
          title: "Establish a meaningful range.",
          body: "Document standards, blanks, instrument settings, linear range, detection limits, and acceptance thresholds.",
          status: "planned",
        },
        {
          label: "Normalize",
          title: "Preserve the comparison.",
          body: "State reference samples, loading or cell-count corrections, batch handling, and transformations.",
          status: "planned",
        },
        {
          label: "Decide",
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
      title: "Keep neighboring claims separate.",
      summary:
        "Delivery, expression, cell state, presentation, and response should be measured beside one another without being collapsed into one success metric.",
      layout: "matrix",
      items: [
        {
          label: "M–01",
          title: "Product identity and topology",
          body: "Size, junction identity, RNase R comparison, purity, recovery, and uncertainty in topology interpretation.",
          status: "planned",
        },
        {
          label: "M–02",
          title: "Delivery, expression, viability",
          body: "Matched samples, dose and time window, uptake/process control, intended output, and cell-state readout.",
          status: "planned",
        },
        {
          label: "M–03",
          title: "Presentation and function",
          body: "Sequence-specific display, general activation, antigen-positive/negative targets, response, and non-specific toxicity.",
          status: "open",
        },
      ],
    },
    {
      id: "measurement-publication",
      index: "03",
      kicker: "Publication gate",
      title: "A figure must be auditable.",
      summary:
        "The same checklist applies to positive, negative, and ambiguous results.",
      layout: "ledger",
      items: [
        {
          label: "Source",
          title: "Raw file and sample trace",
          body: "Link the instrument or image file to sample IDs and notebook records.",
          status: "planned",
        },
        {
          label: "Scale",
          title: "Units and normalization",
          body: "Name axes, units, transformations, baselines, and any excluded observations.",
          status: "planned",
        },
        {
          label: "Structure",
          title: "Replicates and analysis",
          body: "State biological n, technical n, error definition, statistical method, and analysis version.",
          status: "planned",
        },
        {
          label: "Boundary",
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
  title: "The host changes what the construct can mean.",
  lede: "A mammalian or cell-free context is not a neutral container. It changes expression, processing, safety, measurement, cost, and the limits of what can be compared with standard iGEM chassis.",
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
      title: "Use the platform because the question requires it.",
      summary:
        "The page should explain why a standard bacterial or yeast context cannot answer the selected biological question.",
      body: [
        "For CirCure, candidate expression, processing, presentation, or delivery may require mammalian or cell-free systems. The final page should identify the exact system and distinguish a project necessity from eligibility for a special prize.",
        "If the selected work is not genuinely an alternative platform contribution, the route should state that limit honestly rather than expanding a generic award description.",
      ],
    },
    {
      id: "platform-workflow",
      index: "02",
      kicker: "Adaptation record",
      title: "Document what the context changes.",
      summary:
        "Construct design, handling, controls, measurement, and safety should be adapted together.",
      layout: "steps",
      items: [
        {
          label: "System",
          title: "Define source and state.",
          body: "Record cell or extract source, provenance, passage or batch, culture conditions, quality criteria, and relevant biological functions.",
          status: "planned",
        },
        {
          label: "Construct",
          title: "Map compatibility constraints.",
          body: "Explain translation entry, sequence context, payload size, formulation, delivery, and processing assumptions.",
          status: "planned",
        },
        {
          label: "Control",
          title: "Build a fair comparison.",
          body: "Use matched payload, process, viability, and host controls that separate platform effects from construct effects.",
          status: "planned",
        },
        {
          label: "Reuse",
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
      title: "Show utility, not novelty alone.",
      summary:
        "A platform page becomes meaningful when it demonstrates an observable advantage, a tradeoff, and reproducible operation.",
      layout: "ledger",
      items: [
        {
          label: "Performance",
          title: "Relevant readout",
          body: "Define the platform-dependent property being measured and its acceptance rule.",
          status: "planned",
        },
        {
          label: "Comparison",
          title: "Alternative context",
          body: "Compare against a relevant standard, simpler system, or literature-supported baseline.",
          status: "open",
        },
        {
          label: "Limit",
          title: "Transferability",
          body: "State what cannot be inferred outside the chosen host, batch, or assay context.",
          status: "recorded",
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
  title: "Safety is a condition of the design.",
  lede: "CirCure treats biological, chemical, physical, informational, and communication risks as engineering inputs. Mitigation begins before the experiment and remains visible beside every claim.",
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
      title: "Name who or what could be harmed.",
      summary:
        "Risk descriptions should be specific enough to change a construct, protocol, access rule, claim, or implementation plan.",
      layout: "matrix",
      items: [
        {
          label: "Biological",
          title: "Material and host risk",
          body: "Chassis, payload, expression product, off-target activity, environmental release, cell line handling, and waste.",
          status: "planned",
        },
        {
          label: "Operational",
          title: "Chemical and physical risk",
          body: "Reagents, sharps, heat, UV, centrifugation, electrical equipment, transport, storage, and disposal.",
          status: "planned",
        },
        {
          label: "Security",
          title: "Information and misuse risk",
          body: "Access to materials, sequences, data, code, dual-use interpretation, medical misinformation, and unauthorized claims.",
          status: "open",
        },
      ],
    },
    {
      id: "safety-controls",
      index: "02",
      kicker: "Control hierarchy",
      title: "Mitigation should be visible in the artifact.",
      summary:
        "Where possible, the project changes the design or removes the hazard instead of relying only on procedural reminders.",
      layout: "steps",
      items: [
        {
          label: "Eliminate",
          title: "Avoid unnecessary hazard.",
          body: "Choose non-pathogenic systems, safer materials, limited functionality, and the minimum data or material access required.",
          status: "planned",
        },
        {
          label: "Engineer",
          title: "Build constraints into the system.",
          body: "Use design boundaries, containment, access control, fail-safe operation, and assays that reveal unacceptable cell stress.",
          status: "planned",
        },
        {
          label: "Administer",
          title: "Define responsibility.",
          body: "Training, supervision, inventories, labels, storage, transport, deviation reporting, and incident escalation must be documented.",
          status: "planned",
        },
        {
          label: "Protect",
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
      title: "A no-go condition is an engineering output.",
      summary:
        "The team should predefine when a construct, dose, assay, publication, or implementation claim will not advance.",
      layout: "ledger",
      items: [
        {
          label: "SAFE–01",
          title: "Unexpected product or unresolved topology",
          body: "Stop downstream interpretation and return to construct identity, purification, or geometry.",
          status: "boundary",
        },
        {
          label: "SAFE–02",
          title: "Signal coupled to unacceptable cell stress",
          body: "Reject the condition; do not optimize only for maximum expression or activation.",
          status: "boundary",
        },
        {
          label: "SAFE–03",
          title: "Evidence cannot support medical readiness",
          body: "Keep therapeutic efficacy, safety, dosing, and clinical claims outside the published conclusion.",
          status: "boundary",
        },
        {
          label: "SAFE–04",
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
    path: "/model",
    label: "Model",
    title: "Which designs deserve the first experiment?",
  },
};
