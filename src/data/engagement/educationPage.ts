import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import { educationSections } from "./educationSections";

/** Complete Education manuscript from education-source.md. */
export const educationPage: WikiPageContent = {
  route: "/education",
  category: "engagement",
  chapter: "Engagement / 03 of 05",
  eyebrow: "Education · Learning through participation",
  title: "Education",
  lede: "Different barriers call for different educational responses.",
  boundary: "",
  visual: "education-dialogue",
  visualLabel: "From community needs to education and feedback",
  visualSteps: ["Audience × Context", "Educational Functions", "Portfolio", "Feedback"],
  facts: [],
  sections: educationSections,
  links: [
    { path: "/human-practices", label: "Human Practices" },
    { path: "/games", label: "Educational games" },
    { path: "/contribution", label: "Reusable materials" },
  ],
  next: {
    path: "/inclusivity",
    label: "Inclusivity",
    title: "Who can participate—and who is still missing?",
  },
};
