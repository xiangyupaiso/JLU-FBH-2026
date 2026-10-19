import { HomeImage, HomeSvgImage } from "./HomeArtwork";
import { type CSSProperties } from "react";
import { PaintedReveal } from "./PaintedReveal";
import manifest from "../../assets/home/story/manifest.json";
const ring = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-4.webp";
const paper =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-1.webp";
const heading =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-2.webp";
const annotation =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-3.webp";
const benefits =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-5.webp";
import "../../styles/home-circrna.css";

const sources = [paper, heading, annotation, ring, benefits];

export function CircRnaArtwork() {
  return (
    <>
      <HomeImage className="story-backdrop" src={paper} alt="" aria-hidden="true" />
      <figure
        className="story-art circrna-illustration"
        style={{ "--art-aspect": manifest["1"].aspect } as CSSProperties}
        role="img"
        aria-label="Why circRNA? Circular structure, stability and persistent expression. We chose circRNA to support sustained antigen expression. Conceptual illustration."
      >
        {manifest["1"].layers.slice(1).map((layer) => {
          const style = {
            left: layer.left + "%",
            top: layer.top + "%",
            width: layer.width + "%",
            height: layer.height + "%",
          };
          if (layer.number === 2) {
            return (
              <svg
                key={layer.number}
                className="story-layer circrna-heading-art"
                data-layer={2}
                style={style}
                viewBox="0 0 824 136"
                aria-hidden="true"
              >
                {/* Preserve the original lettering while its question arrives independently. */}
                <svg
                  data-circrna-heading="words"
                  width="760"
                  height="136"
                  viewBox="0 0 760 136"
                  overflow="hidden"
                >
                  <HomeSvgImage href={heading} width="824" height="136" />
                </svg>
                <svg
                  data-circrna-heading="question"
                  x="760"
                  width="64"
                  height="136"
                  viewBox="760 0 64 136"
                  overflow="hidden"
                >
                  <HomeSvgImage href={heading} width="824" height="136" />
                </svg>
              </svg>
            );
          }
          if (layer.number === 4) {
            return (
              <PaintedReveal
                key={layer.number}
                src={ring}
                kind="ring"
                number={4}
                style={style}
              />
            );
          }
          if (layer.number === 5) {
            // Preserve the full original sketch, including its handwritten labels.
            return (
              <svg
                key={layer.number}
                className="story-layer circrna-benefit-art"
                style={style}
                viewBox="0 0 296 346"
                overflow="visible"
                aria-hidden="true"
              >
                <svg
                  data-circrna-sketch="stability"
                  width="296"
                  height="190"
                  viewBox="0 0 296 190"
                  overflow="hidden"
                >
                  <HomeSvgImage href={benefits} width="296" height="346" />
                </svg>
                <svg
                  data-circrna-sketch="expression"
                  y="260"
                  width="296"
                  height="156"
                  viewBox="0 190 296 156"
                  overflow="hidden"
                >
                  <HomeSvgImage href={benefits} width="296" height="346" />
                </svg>
              </svg>
            );
          }
          return (
            <HomeImage
              key={layer.number}
              className="story-layer"
              data-layer={layer.number}
              style={style}
              src={sources[layer.number - 1]}
              alt=""
              aria-hidden="true"
            />
          );
        })}
        <figcaption className="circrna-caption">
          We chose circRNA to support sustained antigen expression.
        </figcaption>
      </figure>
    </>
  );
}
