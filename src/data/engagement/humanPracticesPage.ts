import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import { humanPracticesSections } from "./humanPracticesCopy";

export const humanPracticesPage: WikiPageContent = {
  route: "/human-practices",
  category: "engagement",
  chapter: "Engagement / 02 of 05",
  eyebrow: "Integrated Human Practices",
  title: "Human Practices",
  lede: "Our Human Practices revolve around one core conviction:** never‑ending love**.",
  boundary: "",
  visual: "human-thread",
  visualLabel: "Stakeholder dialogue and project iteration",
  visualSteps: ["Context", "Issue", "Reframing", "Cycle"],
  facts: [],
  sections: humanPracticesSections,
  links: [
    { path: "/description", label: "Project context" },
    { path: "/engineering", label: "Design iterations" },
    { path: "/education", label: "Public dialogue" },
  ],
  next: {
    path: "/education",
    label: "Education",
    title: "How did dialogue change what everyone learned?",
  },
};
