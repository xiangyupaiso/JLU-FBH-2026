import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
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

