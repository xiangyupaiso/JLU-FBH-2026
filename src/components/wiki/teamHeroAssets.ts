import teamHero from "../../assets/wiki/team-heroes/team-hero.webp";
import collaborationHero from "../../assets/wiki/team-heroes/team-collaboration-hero.webp";

export function getTeamHeroImage(route?: string) {
  if (route === "/activities") {
    return collaborationHero;
  }
  return teamHero;
}
