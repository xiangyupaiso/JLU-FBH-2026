import { useId } from "react";
import { QueuedImage } from "../../../common/QueuedImage";
import { visualDesignMediaSizes } from "../../../../data/project/visualDesignNarrativeMedia";
import "../../../../styles/features/design-explanation-figures.css";

type Panel = {
  path: string;
  label: string;
  alt: string;
  width?: number;
  height?: number;
};
type Study = { title: string; caption: string; panels: Panel[] };

const studies: Record<string, Study> = {
  "design-particle-endpoints": {
    title: "The tear and cloud share their watercolor pigment",
    caption:
      "The enlarged tear supplies the starting shape; a cloud from the map supplies the destination. Sampling these original layers keeps the moving pigment connected to the colors and contours of both paintings.",
    panels: [
      {
        path: "home:tear",
        label: "The patient’s question",
        alt: "The original painted tear layer used by the tear-to-cloud bridge.",
      },
      {
        path: "home:cloud",
        label: "The wider clinical picture",
        alt: "The original pale watercolor cloud from the map scene.",
      },
    ],
  },
  "design-white-space": {
    title: "A screen for the next step, then the logos",
    caption:
      "a, Next page sits near the middle of the screen, with open space below and the university and hospital logos still out of view. b, Scrolling further brings the university mark into view beneath the same gap. Both screenshots use the same window size and page layout. The scrollbar on the right shows the change in position.",
    panels: [
      {
        path: "plates/panels/08b-whitespace-focus-scroll.jpg",
        label: "Next page · A view of its own",
        alt: "Full desktop viewport with the closing thought above the watercolor ribbon and Notebook link near the center. Open space fills the lower screen; no university or hospital logos are visible. The vertical scrollbar is retained on the right.",
        width: 1487,
        height: 695,
      },
      {
        path: "plates/panels/08b-whitespace-footer-scroll.jpg",
        label: "Further down · The university logo enters",
        alt: "The same desktop window after scrolling down. The Notebook link is higher on screen, a broad gap remains below the ribbon, and the blue Jilin University logo has entered at the bottom. The vertical scrollbar remains visible on the right.",
        width: 1487,
        height: 695,
      },
    ],
  },
  "design-details-subpage-color": {
    title: "Color at the opening, space for the article",
    caption:
      "Each pair shows the opening and article area of Model or Description. Blue-green and pink establish the page’s identity at the entrance, then fade around the longer explanations. This gradual change keeps the article connected to its illustrated opening.",
    panels: [
      {
        path: "history/subpages/pages/model.png",
        label: "Model · Opening",
        alt: "Actual Model page opening with blue-green watercolor above the title.",
      },
      {
        path: "history/subpages/pages/model-reading.png",
        label: "Model · Reading",
        alt: "Actual Model article view showing the computational framework text and page navigation.",
      },
      {
        path: "history/subpages/pages/description.png",
        label: "Description · Opening",
        alt: "Actual Description page opening with a pink watercolor field and page title.",
      },
      {
        path: "history/subpages/pages/description-reading.png",
        label: "Description · Reading",
        alt: "Actual Description article view showing the TNBC explanation on the pale reading surface.",
      },
    ],
  },
};

type Props = { name: string; sources: ReadonlyMap<string, string> };

function StudyFrame({ study, sources, name }: Props & { study: Study }) {
  const id = useId();
  return (
    <figure
      className={`design-plate design-explanation design-explanation--${name}`}
      aria-labelledby={id}
    >
      <div className="design-explanation__title">{study.title}</div>
      <div
        className="design-explanation__panels"
        data-count={study.panels.length}
      >
        {study.panels.map((panel, index) => (
          <div className="design-panel" key={panel.path}>
            <div className="design-explanation__label">
              {study.panels.length > 1 ? (
                <span aria-hidden="true">
                  {String.fromCharCode(97 + index)}
                </span>
              ) : null}
              {panel.label}
            </div>
            <a
              className="design-panel__image design-explanation__image"
              href={sources.get(panel.path)}
              aria-label={`Inspect: ${panel.label}`}
            >
              <QueuedImage
                src={sources.get(panel.path)}
                alt={panel.alt}
                width={visualDesignMediaSizes[panel.path]?.width ?? panel.width}
                height={visualDesignMediaSizes[panel.path]?.height ?? panel.height}
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        ))}
      </div>
      <figcaption id={id}>{study.caption}</figcaption>
    </figure>
  );
}

function LayerAssembly({ sources }: Pick<Props, "sources">) {
  const id = useId();
  const layers = ["ward", "patient", "student"];
  return (
    <figure
      className="design-plate design-explanation design-explanation--layers"
      aria-labelledby={id}
    >
      <div className="design-explanation__title">
        Separate paintings come together on a shared canvas
      </div>
      <div className="design-explanation__panels" data-count="4">
        {layers.map((layer, index) => (
          <div className="design-panel" key={layer}>
            <div className="design-explanation__label">
              <span aria-hidden="true">{String.fromCharCode(97 + index)}</span>
              {["Setting", "Patient", "Medical student"][index]}
            </div>
            <a
              className="design-panel__image design-explanation__image design-explanation__transparent"
              href={sources.get(`history/artwork/${layer}-full.webp`)}
              aria-label={`Inspect original ${layer} layer`}
            >
              <QueuedImage
                src={sources.get(
                  `history/artwork/${layer}${layer === "ward" ? "-full" : ""}.webp`,
                )}
                alt={
                  layer === "ward"
                    ? "Original ward artwork on its full shared canvas."
                    : `Original ${layer} artwork centered for individual inspection.`
                }
                width={
                  visualDesignMediaSizes[
                    `history/artwork/${layer}${layer === "ward" ? "-full" : ""}.webp`
                  ].width
                }
                height={
                  visualDesignMediaSizes[
                    `history/artwork/${layer}${layer === "ward" ? "-full" : ""}.webp`
                  ].height
                }
                loading="lazy"
                decoding="async"
              />
            </a>
          </div>
        ))}
        <div className="design-panel">
          <div className="design-explanation__label">
            <span aria-hidden="true">d</span>Aligned assembly
          </div>
          <div
            className="design-explanation__assembly"
            role="img"
            aria-label="Reconstruction overlaying the original ward, patient and medical student at their shared canvas coordinates."
          >
            {layers.map((layer) => (
              <QueuedImage
                src={sources.get(`history/artwork/${layer}-full.webp`)}
                alt=""
                aria-hidden="true"
                key={layer}
                width={visualDesignMediaSizes[`history/artwork/${layer}-full.webp`].width}
                height={visualDesignMediaSizes[`history/artwork/${layer}-full.webp`].height}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </div>
      <figcaption id={id}>
        The ward, patient and medical student are painted on a shared 2752 ×
        2064 px canvas. The individual views center each character for a closer
        look; the assembly restores their original positions. Checkerboard areas
        mark transparency, which lets the layers overlap and move separately.
      </figcaption>
    </figure>
  );
}

export function DesignExplanationFigures({ name, sources }: Props) {
  if (name === "design-painted-layers")
    return <LayerAssembly sources={sources} />;
  const study = studies[name];
  return study ? (
    <StudyFrame name={name} sources={sources} study={study} />
  ) : null;
}
