import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const activitiesPage: WikiPageContent = {
  route: "/activities",
  category: "team",
  chapter: "Team / 03 of 03",
  eyebrow: "Team · 2.3 Activities",
  title: "Team Activities",
  lede: "A chronological record of our team building, internal workshops, academic exchanges, and collaborative milestones throughout the 2026 iGEM season.",
  boundary: "This section records team dynamics, training seminars, and community moments leading up to the Grand Jamboree.",
  visual: "evidence-ledger",
  visualLabel: "Team Milestones",
  visualSteps: ["formation", "brainstorming", "summer-lab", "jamboree-prep"],
  facts: [
    { label: "Journey", value: "Multi-stage seasonal milestones" },
    { label: "Community", value: "Team cohesion & social outreach" },
    { label: "Culture", value: "Interdisciplinary collaboration" },
  ],
  sections: [
    {
      id: "activities-journey",
      index: "01",
      kicker: "01 / Seasonal Journey",
      title: "From team formation to collaborative research.",
      summary: "Documenting our collective growth, weekly journal clubs, and cross-disciplinary lab training sessions.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Participating in iGEM is as much about human growth and team building as it is about experimental synthetic biology. Our team assembled members from diverse academic disciplines including biotechnology, bioinformatics, computer science, and graphic communication.",
            "Throughout the season, we held regular seminars, literature review discussions, and dry-wet integration workshops to ensure unified understanding of our circRNA therapeutic system.",
          ],
        },
        { type: "feature", key: "inspirations" },
      ],
    },
    {
      id: "activities-moments",
      index: "02",
      kicker: "02 / Life in the Lab",
      title: "Shared moments and collective memories.",
      summary: "Memorable highlights from experimental breakthroughs, late-night debugging sessions, and campus outreach festivals.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Beyond technical benchwork, our team engaged in public science dissemination, campus synthetic biology festivals, and joint meetups with sibling iGEM teams across the region.",
            "These shared experiences cemented a resilient, creative team culture committed to translating synthetic biology into accessible real-world impacts.",
          ],
        },
      ],
    },
  ],
  links: [],
  next: {
    path: "/description",
    label: "Project Description",
    title: "Now follow the project from people to purpose.",
  },
};
