const experimentsHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/wet-lab-experiments-hero.webp";
const measurementHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/wet-lab-measurement-hero.webp";
const notebookHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/wet-lab-notebook-hero-v3.webp";
const platformHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/wet-lab-platform-hero.webp";
const safetyHero = "https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/wet-lab-safety-hero-v3.webp";

export type WetLabHeroVariant =
  | "experiments"
  | "notebook"
  | "measurement"
  | "platform"
  | "safety";

const VARIANT_BY_ROUTE: Record<string, WetLabHeroVariant> = {
  "/experiments": "experiments",
  "/notebook": "notebook",
  "/measurement": "measurement",
  "/alternative-platform": "platform",
  "/safety-and-security": "safety",
};

const HERO_BY_VARIANT: Record<WetLabHeroVariant, string> = {
  experiments: experimentsHero,
  notebook: notebookHero,
  measurement: measurementHero,
  platform: platformHero,
  safety: safetyHero,
};

export function getWetLabHeroVariant(route: string) {
  return VARIANT_BY_ROUTE[route] ?? "experiments";
}

export function getWetLabHeroImage(route: string) {
  return HERO_BY_VARIANT[getWetLabHeroVariant(route)];
}
