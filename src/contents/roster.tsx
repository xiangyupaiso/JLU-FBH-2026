import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { getTeamHeroImage } from "../components/wiki/teamHeroAssets";
import { rosterPage } from "../data/team/rosterPage";
import "../styles/route-palette-team.css";

export function Roster() {
  return (
    <WikiRoutePage
      content={rosterPage}
      heroImage={getTeamHeroImage(rosterPage.route)}
      theme="team"
      pageClassName="wiki-page--team"
      hideHeroCopy
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}

