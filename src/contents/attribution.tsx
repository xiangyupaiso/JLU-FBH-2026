import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { attributionPage } from "../data/team/attributionPage";
import "../styles/route-palette-team.css";

export function Attribution() {
  return (
    <WikiRoutePage
      content={attributionPage}
      theme="team"
      pageClassName="wiki-page--team"
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}
