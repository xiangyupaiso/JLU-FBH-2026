// Summaries describe the scope of the existing pages, not completed results.
export const homeDestinations = [
  {
    key: "description",
    label: "Description",
    path: "/description",
    summary:
      "Discover why CirCure explores a modular circRNA vaccine platform for triple-negative breast cancer.",
    hint: "Why we chose circRNA",
    action: "Explore the description",
  },
  {
    key: "engineering",
    label: "Engineering",
    path: "/engineering",
    summary:
      "Follow our design–build–test–learn framework for turning circRNA design questions into testable experiments.",
    hint: "How we build and test",
    action: "Follow the engineering",
  },
  {
    key: "sustainability",
    label: "Sustainability",
    path: "/sustainability",
    summary:
      "Explore how CirCure evaluates its impact against the Sustainable Development Goals and plans for responsible development.",
    hint: "Our impact and responsibilities",
    action: "Explore sustainability",
  },
  {
    key: "contribution",
    label: "Contribution",
    path: "/contribution",
    summary:
      "Explore reusable wet-lab resources, computational tools and records shared for future iGEM teams.",
    hint: "Resources you can reuse",
    action: "Explore our contributions",
  },
  {
    key: "model",
    label: "Model",
    path: "/model",
    summary:
      "Explore our framework for prioritizing epitopes, comparing circRNA structures and planning measurements.",
    hint: "How models guide our design",
    action: "Explore the models",
  },
  {
    key: "software",
    label: "Software",
    path: "/software",
    summary:
      "Explore CircuForge and TorusFold, our software for guided circRNA design and circular RNA structure analysis.",
    hint: "Tools for circular RNA design",
    action: "Explore the software",
  },
] as const;

export type HomeDestination = (typeof homeDestinations)[number];
