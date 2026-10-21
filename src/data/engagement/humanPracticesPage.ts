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
  visualSteps: ["**Context**", "**Issue**", "**Reframing**", "**Cycle**"],
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
    title: "Creating Different Ways to Take Part",
    description: "Listening to different communities revealed different barriers to participation. Explore how we responded through classroom activities, public dialogue, games and virtual laboratory experiences.",
  },
};
