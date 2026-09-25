import type { ReactNode } from "react";
import { stringToSlug } from "../../../../utils";

const inspirationLinks = [
  { year: 2025, teamName: "McGill", pageName: "team" },
  { year: 2025, teamName: "EPFL", pageName: "team" },
  { year: 2024, teamName: "Waseda-Tokyo", pageName: "members" },
  { year: 2024, teamName: "Aachen", pageName: "team" },
  { year: 2024, teamName: "Patras", pageName: "team" },
] as const;

export function TeamInspirations(): ReactNode {
  return (
    <aside className="team-inspirations" aria-label="Inspirations">
      <span>Related records</span>
      <h3>Inspirations</h3>
      <ul>
        {inspirationLinks.map(({ year, teamName, pageName }) => {
          const href = `https://${year}.igem.wiki/${stringToSlug(teamName)}/${stringToSlug(pageName)}`;
          return (
            <li key={`${year}-${teamName}`}>
              <a href={href} target="_blank" rel="noreferrer">
                {year} {teamName} <span aria-hidden="true">↗</span>
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
