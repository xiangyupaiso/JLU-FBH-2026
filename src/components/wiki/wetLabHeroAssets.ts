import experimentsHero from "../../assets/wiki/wet-lab-heroes/wet-lab-experiments-hero-v3.webp";
import measurementHero from "../../assets/wiki/wet-lab-heroes/wet-lab-measurement-hero-v3.webp";
import notebookHero from "../../assets/wiki/wet-lab-heroes/wet-lab-notebook-hero-v3.webp";
import platformHero from "../../assets/wiki/wet-lab-heroes/wet-lab-platform-hero-v3.webp";
import safetyHero from "../../assets/wiki/wet-lab-heroes/wet-lab-safety-hero-v3.webp";

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
