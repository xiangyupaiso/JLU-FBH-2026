import { getWetLabHeroImage, getWetLabHeroVariant } from "./wetLabHeroAssets";

export function WetLabHeroVisual({
  route,
  label,
}: {
  route: string;
  label: string;
}) {
  const variant = getWetLabHeroVariant(route);

  return (
    <figure
      className="wet-hero-art"
      data-hero-variant={variant}
      role="img"
      aria-label={label}
    >
      <img
        className="wet-hero-art__image"
        src={getWetLabHeroImage(route)}
        alt=""
        loading="eager"
        decoding="async"
      />
    </figure>
  );
}
