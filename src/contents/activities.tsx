import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { TeamInspirations } from "../components/wiki/features/team/TeamInspirations";
import { activitiesPage } from "../data/team/activitiesPage";
import "../styles/route-palette-team.css";

export function Activities() {
  return (
    <WikiRoutePage
      content={activitiesPage}
      theme="team"
      pageClassName="wiki-page--team"
      features={{ inspirations: <TeamInspirations /> }}
    />
  );
}
