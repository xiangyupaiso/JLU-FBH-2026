import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const rosterPage: WikiPageContent = {
  route: "/roster",
  category: "team",
  chapter: "Team / 01 of 03",
  eyebrow: "Team · 2.1 Roster",
  title: "Meet Our Team",
  lede: "This page introduces the multidisciplinary students, instructors, and advisors behind CirCure who made our iGEM project possible.",
  boundary: "The team roster contains introductory guidance and structural placeholders while member profiles and laboratory photographs are prepared.",
  visual: "evidence-ledger",
  visualLabel: "Team Roster Structure",
  visualSteps: ["members", "mentors", "place", "inspirations"],
  facts: [
    { label: "Members", value: "Student researchers & leads" },
    { label: "Guidance", value: "Primary PIs & advisors" },
    { label: "Context", value: "JLU-FBH Laboratory" },
  ],
  sections: [
    {
      id: "roster-content",
      index: "01",
      kicker: "01 / Team Members",
      title: "Introduce the people behind the project.",
      summary: "Showcasing the individuals, diverse scientific backgrounds, and collaborative spirit that drive CirCure forward.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Include pictures of your teammates, don't forget instructors and advisors!",
            "You can add a small biography or a few words from each team member, to tell us what you like, and what motivated you to participate in iGEM.",
            "Present your lab environment, your institution, and perhaps glimpses of your city or region.",
            "Showcase the expertise and guidance of your instructors and advisors.",
          ],
        },
        { type: "feature", key: "inspirations" },
      ],
    },
    {
      id: "team-privacy",
      index: "02",
      kicker: "02 / Privacy & Consent",
      title: "Share personal information with care.",
      summary: "Ensuring all public representations respect individual privacy and competition archival policies.",
      blocks: [
        {
          type: "callout",
          tone: "gold",
          label: "Important",
          body: "Remember that your wiki will be archived and remain publicly accessible. Be mindful of the personal information you share. Avoid posting sensitive details. Be sure everyone shown in pictures agrees to being shown.",
        },
      ],
    },
  ],
  links: [],
  next: {
    path: "/attributions",
    label: "Attributions",
    title: "Documenting team tasks and institutional support.",
  },
};
