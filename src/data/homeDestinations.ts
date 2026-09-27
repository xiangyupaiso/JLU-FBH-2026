// Summaries describe the scope of the existing pages, not completed results.
export const homeDestinations = [
  {
    key: "description",
    label: "The project",
    path: "/description",
    summary:
      "Discover why CirCure explores a modular circRNA vaccine platform for triple-negative breast cancer.",
    topics: ["The clinical challenge", "Our circRNA vaccine concept", "The proposed project design"],
    action: "Explore the project",
  },
  {
    key: "engineering",
    label: "Engineering",
    path: "/engineering",
    summary:
      "Follow our design–build–test–learn framework for turning circRNA design questions into testable experiments.",
    topics: ["Design decisions", "Build–test–learn cycles", "Evidence needed to move forward"],
    action: "Follow the engineering",
  },
  {
    key: "experiments",
    label: "Experiments",
    path: "/experiments",
    summary:
      "Explore the planned wet-lab route from circRNA construction to immune recognition, with controls at every step.",
    topics: ["The five experimental gates", "Protocols and sample records", "Controls and readouts"],
    action: "Explore the experiments",
  },
  {
    key: "model",
    label: "Model",
    path: "/model",
    summary:
      "Explore our framework for prioritizing epitopes, comparing circRNA structures and planning measurements.",
    topics: ["Epitope selection", "Structure and expression models", "Connections to wet-lab decisions"],
    action: "Explore the models",
  },
  {
    key: "human-practices",
    label: "Human practices",
    path: "/human-practices",
    summary:
      "See how our Human Practices approach connects stakeholder perspectives with responsible research and design decisions.",
    topics: ["Stakeholder questions", "Feedback and design changes", "Ethics and responsibility"],
    action: "Explore human practices",
  },
  {
    key: "team",
    label: "Our team",
    path: "/roster",
    summary:
      "Get to know the students, instructors and advisors bringing different disciplines together around CirCure.",
    topics: ["Student researchers", "Instructors and advisors", "Our laboratory and inspirations"],
    action: "Meet our team",
  },
] as const;

export type HomeDestination = (typeof homeDestinations)[number];
