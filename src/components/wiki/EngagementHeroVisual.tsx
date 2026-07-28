import educationHero from "../../assets/wiki/wet-lab-heroes/wet-lab-notebook-hero-v2.webp";
import entrepreneurshipHero from "../../assets/wiki/wet-lab-heroes/wet-lab-platform-hero-v2.webp";
import humanPracticesHero from "../../assets/wiki/wet-lab-heroes/wet-lab-experiments-hero-v2.webp";
import inclusivityHero from "../../assets/wiki/wet-lab-heroes/wet-lab-safety-hero-v2.webp";
import sustainabilityHero from "../../assets/wiki/wet-lab-heroes/wet-lab-measurement-hero-v2.webp";

const HERO_BY_ROUTE: Record<string, string> = {
  "/entrepreneurship": entrepreneurshipHero,
  "/human-practices": humanPracticesHero,
  "/education": educationHero,
  "/inclusivity": inclusivityHero,
  "/sustainability": sustainabilityHero,
};

export function EngagementHeroVisual({ route }: { route: string }) {
  const source = HERO_BY_ROUTE[route] ?? entrepreneurshipHero;

  return (
    <figure className="engagement-hero-art" aria-hidden="true">
      <img src={source} alt="" loading="eager" decoding="async" />
    </figure>
  );
}
