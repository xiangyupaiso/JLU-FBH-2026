import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const attributionPage: WikiPageContent = {
  route: "/attributions",
  category: "team",
  chapter: "Team / 02 of 03",
  eyebrow: "Team · 2.2 Attribution",
  title: "Project Attributions",
  lede: "In strict accordance with iGEM competition requirements, this page accurately details the contributions of each team member and acknowledges external support received.",
  boundary: "The standard attribution form and attribution breakdowns are formatted here for transparent judging evaluation.",
  visual: "evidence-ledger",
  visualLabel: "Attribution Matrix",
  visualSteps: ["conception", "wet-lab", "dry-lab", "human-practices"],
  facts: [
    { label: "Standard", value: "iGEM Project Attribution Form" },
    { label: "Integrity", value: "Independent student execution" },
    { label: "Oversight", value: "Institutional and PI guidance" },
  ],
  sections: [
    {
      id: "attribution-overview",
      index: "01",
      kicker: "01 / Overview",
      title: "Documenting transparent scientific contributions.",
      summary: "Clear delineation between student research work, external facility assistance, and academic mentorship.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Synthetic biology is fundamentally a team-based science. It is essential to clearly specify what work was conducted by student team members and where external assistance, commercial synthesis, or university core facilities were utilized.",
            "Each team member contributed across distinct facets of the CirCure project, spanning project conceptualization, circular RNA construct design, wet lab validation, dry lab molecular dynamics, and integrated human practices.",
          ],
        },
        {
          type: "callout",
          tone: "neutral",
          label: "Attribution Standard",
          body: "The formal iGEM Attribution Form documents work across project ideation, experimental execution, data analysis, wiki design, fundraising, and community engagement.",
        },
        { type: "feature", key: "inspirations" },
      ],
    },
    {
      id: "attribution-form",
      index: "02",
      kicker: "02 / Formal Declarations",
      title: "Attribution Form and External Acknowledgements.",
      summary: "Standardized disclosure of all laboratory facilities, hardware usage, and advisor consultations.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "We extend our gratitude to our primary investigators, instructors, lab technicians, and academic advisors at Jilin University for their ongoing mentorship and technical guidance.",
            "All experiments and measurements were carried out within designated biosafety containment facilities in full compliance with institutional and international biological safety guidelines.",
          ],
        },
      ],
    },
  ],
  links: [],
  next: {
    path: "/activities",
    label: "Team Activities",
    title: "Explore our team building, outreach, and milestones.",
  },
};
