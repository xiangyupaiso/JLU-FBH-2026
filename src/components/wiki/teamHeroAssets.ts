import rosterHero from "../../assets/wiki/team-heroes/team-roster-hero.webp";
import attributionHero from "../../assets/wiki/team-heroes/team-attributions-hero.webp";
import activitiesHero from "../../assets/wiki/team-heroes/team-activities-hero.webp";

export function getTeamHeroImage(route?: string) {
  if (route === "/activities") {
    return activitiesHero;
  }
  if (route === "/attributions") {
    return attributionHero;
  }
  return rosterHero;
}
