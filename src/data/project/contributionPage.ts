import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const contributionPage: WikiPageContent = {
  route: "/contribution",
  category: "project",
  chapter: "Project / 04 of 07",
  eyebrow: "Contribution · Open records",
  title: "Contribution",
  lede: "Reusable methods, tools, and records.",
  boundary:
    "The resources below are planned contribution packages. Final claims require versioned releases, working links, licenses, examples, and evidence that the package can be reused.",
  visual: "resource-library",
  visualLabel: "CirCure reusable resource library",
  visualSteps: ["design records", "protocols", "data and code", "HP field kit"],
  facts: [
    { label: "Find", value: "Stable identifiers and one canonical location." },
    { label: "Run", value: "A minimal example with expected output." },
    { label: "Adapt", value: "Inputs, assumptions, and replacement rules." },
    { label: "Limit", value: "Known failures and inappropriate uses." },
  ],
  sections: [
    {
      id: "contribution-packages",
      index: "01",
      kicker: "Planned releases",
      title: "Package the decision, not only the file.",
      summary:
        "Each resource should explain what problem it solves, the evidence behind it, how to use it, and when not to use it.",
      layout: "steps",
      items: [
        {
          label: "CON–01",
          title: "Multi-epitope design record",
          body: "Candidate ranking fields, sequence versioning, design gates, replacement logic, and a worked example.",
          status: "planned",
        },
        {
          label: "CON–02",
          title: "circRNA validation bundle",
          body: "Protocol set, comparison matrix, acceptance rules, troubleshooting record, and accessible result template.",
          status: "planned",
        },
        {
          label: "CON–03",
          title: "Model reproducibility package",
          body: "Versioned data schema, environment, one-command example, tests, expected outputs, and ownership statement.",
          status: "planned",
        },
        {
          label: "CON–04",
          title: "Human Practices field kit",
          body: "Stakeholder map, consent tiers, decision ledger, conflict rule, return-loop checklist, and publication gate.",
          status: "recorded",
        },
      ],
    },
    {
      id: "contribution-reuse",
      index: "02",
      kicker: "Reuse path",
      title: "Make the first successful use small.",
      summary:
        "A future team should be able to reproduce one figure, protocol decision, or engagement record before adopting the entire framework.",
      layout: "timeline",
      items: [
        {
          label: "Step 01",
          title: "Choose the smallest relevant package.",
          body: "Start from a clearly scoped question rather than downloading an undifferentiated archive.",
          status: "recorded",
        },
        {
          label: "Step 02",
          title: "Run the worked example.",
          body: "Compare the generated output with the documented expected output and environment.",
          status: "planned",
        },
        {
          label: "Step 03",
          title: "Replace inputs with local context.",
          body: "Revisit assumptions, safety, consent, and platform constraints before adapting the method.",
          status: "open",
        },
      ],
    },
    {
      id: "contribution-release",
      index: "03",
      kicker: "Release checklist",
      title: "A link is not yet a contribution.",
      summary:
        "Every release should remain usable after the competition and make provenance, ownership, licensing, and limitations visible.",
      layout: "ledger",
      items: [
        {
          label: "Version",
          title: "Tagged and dated",
          body: "Release notes identify the exact files and changes included.",
          status: "planned",
        },
        {
          label: "License",
          title: "Permission is explicit",
          body: "Code, data, documents, and media use appropriate open licenses.",
          status: "planned",
        },
        {
          label: "Evidence",
          title: "The package has been exercised",
          body: "A worked example or external test shows the resource can be followed.",
          status: "open",
        },
        {
          label: "Limits",
          title: "Failure conditions remain visible",
          body: "Known constraints and unsupported applications are documented beside the release.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/software", label: "Software release" },
    { path: "/experiments", label: "Protocol records" },
    { path: "/human-practices", label: "HP method" },
    { path: "/visual-design", label: "Visual Design" },
  ],
  next: {
    path: "/visual-design",
    label: "Visual Design",
    title: "Explore CirCure's visual identity and scientific design system.",
  },
};
