// Summaries describe the scope of the existing pages, not completed results.
export const homeDestinations = [
  {
    key: "description",
    label: "Description",
    path: "/description",
    summary:
      "Discover why CirCure explores a modular circRNA vaccine platform for triple-negative breast cancer.",
    topics: ["The clinical challenge", "Our circRNA vaccine concept", "The proposed project design"],
    action: "Explore the description",
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
    key: "sustainability",
    label: "Sustainability",
    path: "/sustainability",
    summary:
      "Explore how CirCure evaluates its impact against the Sustainable Development Goals and plans for responsible development.",
    topics: ["Project overview", "Sustainability assessment", "SDG impact framework"],
    action: "Explore sustainability",
  },
  {
    key: "contribution",
    label: "Contribution",
    path: "/contribution",
    summary:
      "Explore reusable wet-lab resources, computational tools and records shared for future iGEM teams.",
    topics: ["Wet-lab resources and parts", "Computational tools", "Education and collaboration"],
    action: "Explore our contributions",
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
    key: "team",
    label: "Team",
    path: "/roster",
    summary:
      "Get to know the students, instructors and advisors bringing different disciplines together around CirCure.",
    topics: ["Student researchers", "Instructors and advisors", "Our laboratory and inspirations"],
    action: "Meet our team",
  },
] as const;

export type HomeDestination = (typeof homeDestinations)[number];
