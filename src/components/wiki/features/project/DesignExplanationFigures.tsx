import { useId } from "react";
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
  "design-reader-choice": {
    title: "A pause, a way back and an optional invitation",
    caption:
      "The playback control pauses the guide; the scene list offers a route back. The letter is a separate invitation, opened only when the reader chooses it. Saved interface views show these different levels of choice.",
    panels: [
      {
        path: "plates/panels/06-navigation-states-d.png",
        label: "Pause or resume",
        alt: "The vertical story controller with a playback button and scene-list button.",
      },
      {
        path: "plates/panels/06-navigation-states-e.png",
        label: "Choose a scene",
        alt: "The scene list with named chapters and playback speed.",
      },
      {
        path: "plates/panels/07-footer-reveal-d.png",
        label: "Read the optional letter",
        alt: "The opened personal note with supporting hands and the words For more ordinary days.",
      },
    ],
  },
  "design-details-entry": {
    title: "From preparation to the patient’s story",
    caption:
      "Saved page captures show the preparation screen, the opening wordmark and the first patient scene. They show the visual handoff described below; still images do not establish transition durations.",
    panels: [
      {
        path: "plates/panels/05-opening-sequence-a.png",
        label: "Preparation",
        alt: "Page capture of Lumi, the ribbon and supporting hands during preparation.",
      },
      {
        path: "plates/panels/05-opening-sequence-b.png",
        label: "Opening wordmark",
        alt: "Page capture of the CirCure opening title against the dark painted scene.",
      },
      {
        path: "plates/panels/05-opening-sequence-c.png",
        label: "The patient enters",
        alt: "Page capture of the patient silhouette with navigation above the opening artwork.",
      },
    ],
  },
  "design-details-layers": {
    title: "The registered layers inside the finished scene",
    caption:
      "The saved page capture shows the ward, patient and medical student together. Their shared placement in the page is the visible result of the canvas registration described below; the original separate layers appear in the main narrative.",
    panels: [
      {
        path: "plates/panels/01-patient-question-b.png",
        label: "Ward, patient and medical student",
        alt: "Actual story scene with the patient in the ward and the medical student behind her.",
      },
    ],
  },
  "design-details-motion": {
    title: "Readable compositions at two story stops",
    caption:
      "Saved page captures show the circRNA explanation and the project-advantages composition. The illustration and text have distinct places to settle before the next transition. The captures document composition, while the implementation below describes travel and reading time.",
    panels: [
      {
        path: "plates/panels/02-visual-continuity-d.png",
        label: "The circRNA explanation",
        alt: "Saved page view of the circRNA ring and illustrated benefits in the Why circRNA scene.",
      },
      {
        path: "plates/panels/02-visual-continuity-e.png",
        label: "Project advantages",
        alt: "Saved page view of the project advantages arranged around the central platform illustration.",
      },
    ],
  },
  "design-details-particles": {
    title: "The tear-to-map transition in the page",
    caption:
      "Three saved page frames follow the patient’s tear into the emerging map and its readable destination. These are captured story states; the sampling and correspondence described below belong to the renderer.",
    panels: [
      {
        path: "plates/panels/02-visual-continuity-a.png",
        label: "The patient’s question",
        alt: "Captured story frame with the painted tear and the patient’s question.",
      },
      {
        path: "plates/panels/02-visual-continuity-b.png",
        label: "The map emerges",
        alt: "Captured intermediate story frame as the map becomes visible.",
      },
      {
        path: "plates/panels/02-visual-continuity-c.png",
        label: "The wider context",
        alt: "Captured map scene with geographic context and statistics fully visible.",
      },
    ],
  },
  "design-particle-endpoints": {
    title: "The original paint supplies both ends of the transition",
    caption:
      "Original source layers used by the tear-to-cloud bridge: the enlarged tear artwork and a cloud cut from the map. These are isolated painted endpoints, with no physical transformation implied.",
    panels: [
      {
        path: "home:tear",
        label: "From the patient’s question",
        alt: "The original painted tear layer used by the tear-to-cloud bridge.",
      },
      {
        path: "home:cloud",
        label: "Into the map’s context",
        alt: "The original pale watercolor cloud from the map scene.",
      },
    ],
  },
  "design-details-navigation": {
    title: "Let the illustration remain visible behind the lettering",
    caption:
      "The opening page capture shows pale navigation labels over the dark painted patient scene. The illustration remains visible across the header; the styles below describe the text separation used here.",
    panels: [
      {
        path: "plates/panels/05-opening-sequence-c.png",
        label: "Navigation over the opening artwork",
        alt: "Actual opening page with pale navigation lettering above the dark patient illustration.",
      },
    ],
  },
  "design-details-navigation-motion": {
    title: "The navigation in its captured states",
    caption:
      "Saved interface captures show the opening bar, the compact crest and the expanded capsule. They make the changes in surface and label visibility visible. The timing values below come from the implementation, rather than from these still captures.",
    panels: [
      {
        path: "plates/panels/06-navigation-states-a.png",
        label: "Opening bar",
        alt: "Captured opening navigation bar with visible section labels.",
      },
      {
        path: "plates/panels/06-navigation-states-b.png",
        label: "Compact crest",
        alt: "Captured navigation folded into its small circular crest.",
      },
      {
        path: "plates/panels/06-navigation-states-c.png",
        label: "Expanded capsule",
        alt: "Captured navigation capsule expanded with its section labels visible.",
      },
    ],
  },
  "design-white-space": {
    title: "Less is more: give the next step a view of its own",
    caption:
      "a, The taller viewport shows what the broad interval separates: the next-page destination and institutional marks. b, In a shorter viewport, the reading area contains only the ribbon, companion and next-page action; article copy and institutional marks remain outside the view. Both are fresh, complete browser captures at a requested width of 1440px, with heights of 800px and 520px respectively. The page layout and spacing are unchanged. The captures illustrate a page-like moment of attention; its extent varies with viewport height and scroll position.",
    panels: [
      {
        path: "plates/panels/08b-whitespace-context.jpg",
        label: "Context · The interval before the institutional footer",
        alt: "Full desktop viewport showing Notebook and the watercolor ribbon above a broad quiet interval, with the Jilin University mark entering below. The original page spacing is retained.",
        width: 1425,
        height: 792,
      },
      {
        path: "plates/panels/08b-whitespace-next-only.jpg",
        label: "Focus · Only the next-page invitation in the reading area",
        alt: "Complete browser viewport with persistent navigation above the watercolor ribbon, lamb, Next page label, Notebook destination and arrow. The remaining reading area is quiet; no article text or institutional marks are visible.",
        width: 1425,
        height: 515,
      },
    ],
  },
  "design-details-destinations": {
    title: "Lumi follows the painted route to the next page",
    caption:
      "Three actual page captures show the ribbon entry, travel and arrival states. Lumi stays in contact with the painted route while the next destination remains readable. The geometry below describes how the motion follows that route.",
    panels: [
      {
        path: "plates/panels/08b-ribbon-entry.png",
        label: "Entry",
        alt: "Actual next-page ribbon capture with Lumi at the start of the painted route.",
      },
      {
        path: "plates/panels/08b-ribbon-travel.png",
        label: "Travel",
        alt: "Actual next-page ribbon capture with Lumi moving along the watercolor route.",
      },
      {
        path: "plates/panels/08b-ribbon-arrival.png",
        label: "Arrival",
        alt: "Actual next-page ribbon capture with Lumi arriving beside the destination.",
      },
    ],
  },
  "design-details-closing": {
    title: "The team photograph enters the page",
    caption:
      "Saved browser captures show the first photo strip, the wider reveal and the final team photograph with the CirCure wordmark. These frames preserve the surrounding page and its reveal layers.",
    panels: [
      {
        path: "plates/panels/07-footer-reveal-a.png",
        label: "First glimpse",
        alt: "Actual page capture as a narrow strip of the team photograph enters the footer.",
      },
      {
        path: "plates/panels/07-footer-reveal-b.png",
        label: "The photograph opens",
        alt: "Actual page capture with a larger area of the team photograph revealed.",
      },
      {
        path: "plates/panels/07-footer-reveal-c.png",
        label: "The final view",
        alt: "Actual footer capture showing the team photograph and CirCure wordmark.",
      },
    ],
  },
  "design-details-subpage-color": {
    title: "From painted page openings to the reading surface",
    caption:
      "Actual browser captures pair the opening and reading views of Model and Description. The blue-green and pink painted fields establish each page’s opening; the article views show how color recedes around the text.",
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
  "design-lumi-roles": {
    title: "One character family, different jobs in the interface",
    caption:
      "Lumi accompanies preparation, pointer feedback, destination choice and the painted route. Each setting retains its own explicit status or action.",
    panels: [
      {
        path: "home:cursor",
        label: "Pointer companion",
        alt: "The active Lumi pointer artwork with a raised hoof.",
      },
      {
        path: "plates/panels/08c-explore-hover.png",
        label: "Destination greeting",
        alt: "An exploration destination showing its selected title, arrow, hint and Lumi illustration.",
      },
      {
        path: "plates/panels/05-opening-sequence-a.png",
        label: "Preparation status",
        alt: "The preparation screen with Lumi, a ribbon and supporting hands.",
      },
      {
        path: "plates/panels/08-small-interactions-c.png",
        label: "Ribbon companion",
        alt: "Lumi resting with her feet on the painted watercolor route.",
        width: 740,
        height: 660,
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
              <span aria-hidden="true">{String.fromCharCode(97 + index)}</span>
              {panel.label}
            </div>
            <a
              className="design-panel__image design-explanation__image"
              href={sources.get(panel.path)}
              aria-label={`Inspect: ${panel.label}`}
            >
              <img
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
        Three painted layers, one registered composition
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
              <img
                src={sources.get(`history/artwork/${layer}-full.webp`)}
                alt={`Original ${layer} artwork on its full shared canvas.`}
                width="2752"
                height="2064"
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
              <img
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
        Original supporting artwork, reconstructed at its shared 2752 × 2064 px
        canvas size. The checkerboard marks transparency. Keeping the original
        registration lets the setting, patient and student receive independent
        motion without losing their shared composition.
      </figcaption>
    </figure>
  );
}

function PhotoScaleStudy({ sources }: Pick<Props, "sources">) {
  const id = useId();
  return (
    <figure className="design-plate design-explanation" aria-labelledby={id}>
      <div className="design-explanation__title">
        One photograph, three positions on the reveal
      </div>
      <div className="design-explanation__panels" data-count="3">
        {[0, 0.5, 1].map((progress) => (
          <div className="design-panel" key={progress}>
            <div className="design-explanation__label">
              p = {progress} · scale {(1.3 - 0.3 * progress).toFixed(2)}
            </div>
            <div
              className="design-explanation__photo"
              role="img"
              aria-label={`Reconstructed photo crop at progress ${progress}, scale ${(1.3 - 0.3 * progress).toFixed(2)}.`}
            >
              <img
                src={sources.get("home:photo")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
                style={{ transform: `scale(${1.3 - 0.3 * progress})` }}
              />
            </div>
          </div>
        ))}
      </div>
      <figcaption id={id}>
        Reconstructed crops of the same team photograph illustrate scale = 1.3 −
        0.3p. Each frame uses the same bottom alignment. They isolate the photo
        transform; the live reveal, shade, wordmark and optional letter are
        separate layers.
      </figcaption>
    </figure>
  );
}

function ColorSurfaceStudy({ sources }: Pick<Props, "sources">) {
  const id = useId();
  return (
    <figure className="design-plate design-explanation" aria-labelledby={id}>
      <div className="design-explanation__title">
        Let painted color recede before the long reading begins
      </div>
      <div className="design-explanation__panels" data-count="2">
        {[false, true].map((masked) => (
          <div className="design-panel" key={String(masked)}>
            <div className="design-explanation__label">
              {masked
                ? "b · Fading into the reading surface"
                : "a · Original painted background"}
            </div>
            <div
              className={`design-explanation__color ${masked ? "design-explanation__color--masked" : ""}`}
              role="img"
              aria-label={
                masked
                  ? "Schematic mask fades the preserved green painted background into a plain reading surface."
                  : "The preserved green Dry Lab painted background without the illustrative mask."
              }
            >
              <img
                src={sources.get("history/subpages/model.webp")}
                alt=""
                aria-hidden="true"
                loading="lazy"
                decoding="async"
              />
              {masked ? (
                <div
                  className="design-explanation__reading-lines"
                  aria-hidden="true"
                >
                  <i />
                  <i />
                  <i />
                  <i />
                </div>
              ) : null}
            </div>
          </div>
        ))}
      </div>
      <figcaption id={id}>
        The preserved Model background is shown directly and with an
        illustrative vertical CSS mask. Neutral lines mark the long-form reading
        area. This reconstruction explains the separation of art and content; it
        does not reproduce a specific archived viewport or measured readability
        result.
      </figcaption>
    </figure>
  );
}

export function DesignExplanationFigures({ name, sources }: Props) {
  if (name === "design-details-destinations")
    return (
      <>
        <StudyFrame
          name="design-white-space"
          sources={sources}
          study={studies["design-white-space"]}
        />
        <StudyFrame name={name} sources={sources} study={studies[name]} />
      </>
    );
  if (name === "design-painted-layers")
    return <LayerAssembly sources={sources} />;
  if (name === "design-details-closing")
    return <PhotoScaleStudy sources={sources} />;
  if (name === "design-details-subpage-color")
    return <ColorSurfaceStudy sources={sources} />;
  const study = studies[name];
  return study ? (
    <StudyFrame name={name} sources={sources} study={study} />
  ) : null;
}
