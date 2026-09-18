import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import type { ReactNode } from "react";
import { stringToSlug } from "../utils";
import type { WikiPageContent } from "../components/wiki/wikiPageTypes";
import "../styles/route-palette-team.css";

const inspirationLinks = [
  { year: 2025, teamName: "McGill", pageName: "team" },
  { year: 2025, teamName: "EPFL", pageName: "team" },
  { year: 2024, teamName: "Waseda-Tokyo", pageName: "members" },
  { year: 2024, teamName: "Aachen", pageName: "team" },
  { year: 2024, teamName: "Patras", pageName: "team" },
] as const;

function TeamInspirations(): ReactNode {
  return (
    <aside className="team-inspirations" aria-label="Inspirations">
      <span>Related records</span>
      <h3>Inspirations</h3>
      <ul>
        {inspirationLinks.map(({ year, teamName, pageName }) => {
          const href = `https://${year}.igem.wiki/${stringToSlug(teamName)}/${stringToSlug(pageName)}`;
          return <li key={`${year}-${teamName}`}><a href={href} target="_blank" rel="noreferrer">{year} {teamName} <span aria-hidden="true">↗</span></a></li>;
        })}
      </ul>
    </aside>
  );
}

const teamPage: WikiPageContent = {
  route: "/team", category: "team", chapter: "Team / 01 of 01",
  eyebrow: "Team · People behind the project", title: "Meet Our Team",
  lede: "This page is dedicated to introducing the individuals who made our iGEM project possible. Here, you'll find information about our team members, instructors, and advisors.",
  boundary: "The current Team page contains guidance for presenting the team, but no member profiles or team photographs have been supplied yet.",
  visual: "evidence-ledger", visualLabel: "Team page contents", visualSteps: ["members", "mentors", "place", "inspiration"],
  facts: [
    { label: "Members", value: "Profiles and photographs can be added here." },
    { label: "Guidance", value: "Introduce roles, interests, and motivation." },
    { label: "Context", value: "Show the lab, institution, city, or region." },
  ],
  sections: [
    { id: "team-content", index: "01", kicker: "What this page should contain", title: "Introduce the people behind the project.", summary: "Use this page to show the people, expertise, and place that made the project possible.", blocks: [
      { type: "prose", paragraphs: [
        "Include pictures of your teammates, don't forget instructors and advisors!",
        "You can add a small biography or a few words from each team member, to tell us what you like, and what motivated you to participate in iGEM.",
        "Present your lab environment, your institution, and perhaps glimpses of your city or region.",
        "Showcase the expertise and guidance of your instructors and advisors.",
      ] }, { type: "feature", key: "inspirations" },
    ] },
    { id: "team-privacy", index: "02", kicker: "Before publishing", title: "Share personal information with care.", summary: "The page remains public after the wiki is archived, so everyone shown should agree to being shown.", blocks: [{ type: "callout", tone: "gold", label: "Important", body: "Remember that your wiki will be archived and remain publicly accessible. Be mindful of the personal information you share. Avoid posting sensitive details. Be sure everyone shown in pictures agree to them being shown." }] },
  ], links: [], next: { path: "/description", label: "Project Description", title: "Now follow the project from people to purpose." },
};

export function Members() { return <WikiRoutePage content={teamPage} theme="team" pageClassName="wiki-page--team" features={{ inspirations: <TeamInspirations /> }} />; }
