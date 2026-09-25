import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
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

