/** Mirrors the section IDs and labels in the official form's Jump to menu.
 * Content stays in the live official iframe; only its outline is hosted here.
 */
export const attributionPage = {
  route: "/attributions",
  title: "Project Attributions",
  formUrl: "https://teams.igem.org/wiki/6056/attributions",
  sections: [
    { id: "team-member-contributions", label: "Team Member Contributions" },
    { id: "ai-tool-use", label: "AI Tool Use" },
    { id: "igem-partner-offers", label: "iGEM & Partner Offers" },
    { id: "external-contributions", label: "External Contributions" },
    { id: "timeline", label: "Timeline" },
  ],
  next: {
    path: "/activities",
    label: "Activities",
    title: "The Moments We Shared",
    description: "The attribution form records our contributions. Our photographs tell another part of the story: the shared work, friendships and everyday moments of our iGEM season.",
  },
} as const;
