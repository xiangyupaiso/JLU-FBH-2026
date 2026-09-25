import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { rosterPage } from "../data/team/rosterPage";
import "../styles/route-palette-team.css";

export function Roster() {
  return (
    <WikiRoutePage
      content={rosterPage}
      theme="team"
      pageClassName="wiki-page--team"
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}
