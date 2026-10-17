import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import { humanPracticesSections } from "./humanPracticesCopy";

export const humanPracticesPage: WikiPageContent = {
  route: "/human-practices",
  category: "engagement",
  chapter: "Engagement / 02 of 04",
  eyebrow: "Integrated Human Practices",
  title: "Human Practices",
  lede: "Our Human Practices revolve around one core conviction: **never‑ending love**.",
  boundary: "",
  visual: "human-thread",
  visualLabel: "Stakeholder dialogue and project iteration",
  visualSteps: ["Context", "Issue", "Reframing", "Cycle"],
  facts: [],
  sections: humanPracticesSections,
  links: [
    { path: "/description", label: "Clinical Motivation" },
    { path: "/engineering", label: "Feedback-Driven DBTL" },
    { path: "/entrepreneurship", label: "Patient-Centric Strategy" },
    { path: "/education", label: "Community Dialogue" },
  ],
  next: {
    path: "/education",
    label: "Education",
    title: "Inspiring the Next Generation of Bioengineers",
    description: "Empathy in research naturally extends to community empowerment. See how patient conversations inspired interactive textbooks, science workshops, and inclusive education.",
  },
};
