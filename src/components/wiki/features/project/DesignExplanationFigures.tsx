import { useId } from "react";
import { QueuedImage } from "../../../common/QueuedImage";
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
    title: "Give the next step room of its own",
    caption:
      "a, In the taller view, the interval separates the next-page invitation from the institutional footer. b, With the shorter viewport, the ribbon, Lumi and the destination occupy the reading area together. Page spacing is identical in both captures: the width is 1440 px, and the heights are 800 px and 520 px.",
    panels: [
      {
        path: "plates/panels/08b-whitespace-context.jpg",
        label: "Context · Space before the institutional footer",
        alt: "Full desktop viewport showing Notebook and the watercolor ribbon above a broad quiet interval, with the Jilin University and hospital marks below. The original page spacing is retained.",
        width: 1440,
        height: 800,
      },
      {
        path: "plates/panels/08b-whitespace-next-only.jpg",
        label: "Focus · The next-page invitation",
        alt: "Complete browser viewport with persistent navigation above the watercolor ribbon, lamb, Next page label, Notebook destination and arrow. The remaining reading area is quiet; no article text or institutional marks are visible.",
        width: 1440,
        height: 520,
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
                width={panel.width}
                height={panel.height}
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
                  layer === "ward" ? 2752 : layer === "patient" ? 620 : 487
                }
                height={layer === "ward" ? 2064 : 1000}
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
                width="2752"
                height="2064"
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
  if (name === "design-details-destinations")
    return (
      <StudyFrame
        name="design-white-space"
        sources={sources}
        study={studies["design-white-space"]}
      />
    );
  if (name === "design-painted-layers")
    return <LayerAssembly sources={sources} />;
  const study = studies[name];
  return study ? (
    <StudyFrame name={name} sources={sources} study={study} />
  ) : null;
}
