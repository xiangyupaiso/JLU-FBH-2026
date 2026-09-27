import descriptionGradient from "./assets/project-description-gradient.png";
import engineeringGradient from "./assets/project-engineering-gradient.png";
import resultsGradient from "./assets/project-results-gradient.png";
import contributionGradient from "./assets/project-contribution-gradient.png";

export type ProjectPreviewVariant =
  | "description"
  | "engineering"
  | "results"
  | "contribution";

const HERO_IMAGES: Record<ProjectPreviewVariant, string> = {
  description: descriptionGradient,
  engineering: engineeringGradient,
  results: resultsGradient,
  contribution: contributionGradient,
};

export function ProjectPreviewHero({
  variant,
  label,
}: {
  variant: ProjectPreviewVariant;
  label: string;
}) {
  return (
    <figure
      className="wet-hero-art project-preview-hero"
      data-preview-variant={variant}
      role="img"
      aria-label={label}
    >
      <img
        className="wet-hero-art__image project-preview-hero__image"
        src={HERO_IMAGES[variant]}
        alt=""
        loading="eager"
        decoding="async"
      />
    </figure>
  );
}
