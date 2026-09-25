import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
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

