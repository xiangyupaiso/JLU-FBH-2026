import { stringToSlug } from "../utils";

export interface InspirationLink {
  year: number;
  teamName: string;
  pageName: string;
}

interface InspirationsProps {
  inspirationLinkList: InspirationLink[];
}

export function Inspirations({ inspirationLinkList }: InspirationsProps) {
  return (
    <>
      <div className="col-lg-4">
        <h2>Inspirations</h2>
        <hr />
        <ul>
          {inspirationLinkList.map((inspirationLink) => {
            const { year, teamName, pageName } = inspirationLink;
            const teamSlug = stringToSlug(teamName);
            const pageSlug = pageName ? `/${stringToSlug(pageName)}` : "";

            const href =
              year < 2022
                ? `https://${year}.igem.org/Team:${teamName}${pageName ? `/${pageName.replace(/ /g, "_")}` : ""}`
                : `https://${year}.igem.wiki/${teamSlug}${pageSlug}`;

            return (
              <li key={`${year}-${teamName}-${pageName}`}>
                <a href={href} target="_blank" rel="noopener noreferrer">
                  {year} {teamName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
