import { QueuedImage } from "../../../common/QueuedImage";
import { Fragment, useEffect, useId, useRef } from "react";
import circRnaRing from "../../../../assets/home/story/scene-1-layer-4.webp";
import tearOutline from "../../../../assets/home/supplements/tear-4.webp";
import mapCloud from "../../../../assets/home/story/map-cloud-northwest.webp";
import teamPhoto from "../../../../assets/footer/team-keepsake.webp";
import { visualDesignFigures } from "../../../../data/project/visualDesignAssets";
import { DesignExplanationFigures } from "./DesignExplanationFigures";
import { visualDesignCitationIndex as citationIndex } from "../../../../data/citations/visualDesignCitations";
import { CitationReferenceList } from "../../citations/CitationRegister";
import { FooterRevealStudy } from "./FooterRevealStudy";
import { TypographyStudy } from "./TypographyStudy";
import {
  visualDesignReferences,
  visualDesignTechnicalNotes,
  visualDesignCraftPrinciple,
  visualDesignArchiveHighlights,
  visualDesignArtworkRatios,
} from "../../../../data/project/visualDesignNarrative";
import "../../../../styles/features/visual-design-study.css";
import "../../../../styles/features/visual-design-history.css";
import "../../../../styles/features/visual-design-manuscript.css";
import historyMarkup from "../../../../data/project/visual-design/history.html?raw";
import "../../../../styles/features/visual-design-plates.css";
import "../../../../styles/features/visual-design-craft.css";
import "../../../../styles/features/visual-design-layout.css";

const plateMarkup = import.meta.glob<string>(
  "../../../../data/project/visual-design/plates/*.html",
  {
    query: "?raw",
    import: "default",
    eager: true,
  },
);

const references = visualDesignReferences;

const media = import.meta.glob<string>(
  "../../../../assets/visual-design/**/*.{png,jpg,webp,svg,json}",
  {
    query: "?url",
    import: "default",
    eager: true,
  },
);
const mediaByPath = new Map(
  Object.entries(media).map(([path, url]) => [
    path.split("/assets/visual-design/")[1],
    url,
  ]),
);
mediaByPath.set("home:tear", tearOutline);
mediaByPath.set("home:cloud", mapCloud);
mediaByPath.set("home:photo", teamPhoto);
mediaByPath.set("home:cursor", visualDesignFigures.lumiCursorActive.src);

/** Resolve every image and source record through Vite's production asset graph. */
function resolveMedia(markup: string) {
  return markup.replace(
    /\b(src|href|data-src)="([^"]+)"/g,
    (attribute, name: string, path: string) => {
      const url =
        path.startsWith("archive-navigation-study.html") ||
        path.startsWith("archive-recognition-study.html") ||
        path.startsWith("archive-hp-study/")
          ? import.meta.env.BASE_URL + path
          : path.startsWith("detail.html")
            ? import.meta.env.BASE_URL +
              "visual-design-study.html" +
              path.slice("detail.html".length)
            : mediaByPath.get(path);
      return url ? `${name}="${url}"` : attribute;
    },
  );
}

const MOTION_STATES = [
  {
    key: "establish",
    label: "Establish",
    context: "Why circRNA?",
    cue: "Introduce the subject",
    description:
      "The ring and its explanation are visible together before the scene changes.",
  },
  {
    key: "carry",
    label: "Carry",
    context: "Between chapters",
    cue: "Keep the outline",
    description:
      "The explanation recedes. The same ring remains visible through the handoff.",
  },
  {
    key: "settle",
    label: "Settle",
    context: "Our platform",
    cue: "Arrive before explaining",
    description:
      "The ring reaches its new position as the platform context begins to appear.",
  },
  {
    key: "read",
    label: "Read",
    context: "Our platform",
    cue: "Hold the complete view",
    description:
      "The ring and the new explanation stay together, leaving time to read.",
  },
] as const;

export function MotionScoreStudy() {
  const id = useId();

  return (
    <figure
      className="supplement-motion-study"
      aria-labelledby={id + "-caption"}
    >
      <div className="supplement-motion-study__heading">
        <span>One ring, four readable states</span>
        <span className="supplement-motion-study__eyebrow">
          Why circRNA? → Our platform
        </span>
      </div>
      <ol
        className="supplement-motion-study__sequence"
        aria-label="CircRNA reading sequence"
      >
        {MOTION_STATES.map((state, index) => (
          <li
            className={
              "supplement-motion-study__state supplement-motion-study__state--" +
              state.key
            }
            key={state.key}
          >
            <div className="supplement-motion-study__phase">
              <span
                className="supplement-motion-study__letter"
                aria-hidden="true"
              >
                {String.fromCharCode(97 + index)}
              </span>
              <strong>{state.label}</strong>
            </div>
            <div className="supplement-motion-study__scene" aria-hidden="true">
              <span className="supplement-motion-study__context">
                {state.context}
              </span>
              <QueuedImage
                className="supplement-motion-study__ring"
                src={circRnaRing}
                width="459"
                height="448"
                alt=""
                loading="lazy"
                decoding="async"
              />
              <span className="supplement-motion-study__annotation">
                {index < 2 ? "Circular RNA" : "circRNA backbone"}
              </span>
            </div>
            <div className="supplement-motion-study__note">
              <strong>{state.cue}</strong>
              <p>{state.description}</p>
            </div>
          </li>
        ))}
      </ol>
      <figcaption id={id + "-caption"}>
        <strong>The outline persists; the context changes.</strong> These four
        schematic states place the original watercolor ring side by side, from
        “Why circRNA?” to “Our platform”. They illustrate the reading sequence,
        rather than reproduce individual homepage frames.
      </figcaption>
    </figure>
  );
}

const markupByFeature = new Map([
  ...Object.entries(plateMarkup).map(
    ([path, markup]) =>
      [
        "design-study-" +
          path
            .split("/")
            .pop()!
            .replace(/\.html$/, ""),
        resolveMedia(markup),
      ] as const,
  ),
]);

function DesignCraftPrinciple() {
  const principle = visualDesignCraftPrinciple;
  return (
    <aside className="design-craft-principle" aria-label={principle.label}>
      <p className="design-craft-principle__label">{principle.label}</p>
      <blockquote>
        <p className="design-craft-principle__motto" lang="zh-CN">
          {principle.motto}
        </p>
        <p className="design-craft-principle__translation">
          {principle.translation}
        </p>
      </blockquote>
      <p className="design-craft-principle__description">
        {principle.description}
      </p>
      <ol className="design-craft-principle__steps">
        {principle.steps.map((step) => (
          <li key={step.title}>
            <strong>{step.title}</strong>
            <p>{step.body}</p>
          </li>
        ))}
      </ol>
    </aside>
  );
}

const archiveMarkup = resolveMedia(historyMarkup);

function ArtworkRatioStudy() {
  const id = useId();
  return (
    <figure className="artwork-ratio-study" aria-labelledby={id}>
      <div className="artwork-ratio-study__grid">
        {visualDesignArtworkRatios.map((item) => (
          <div className="artwork-ratio-study__item" key={item.ratio}>
            <div className="artwork-ratio-study__label">
              <strong>{item.ratio}</strong>
              <span>{item.label}</span>
            </div>
            <div
              className={`artwork-ratio-study__frame artwork-ratio-study__frame--${item.variant}`}
            >
              <div className="artwork-ratio-study__canvas">
                <QueuedImage
                  src={mediaByPath.get(
                    "plates/panels/01-patient-question-a.png",
                  )}
                  width="4000"
                  height="2250"
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
            <p>{item.detail}</p>
          </div>
        ))}
      </div>
      <figcaption id={id}>
        Reconstructed framing comparison using one illustration in the same
        16:10 desktop frame. Pale striped areas mark unused space. The final
        view enlarges and crops the existing source; new artwork can be composed
        directly on a 16:10 canvas.
      </figcaption>
    </figure>
  );
}

function DesignRevision({
  revision,
}: {
  revision: (typeof visualDesignArchiveHighlights)[number];
}) {
  return (
    <aside
      id={revision.key}
      className="design-revision"
      aria-label={revision.title}
    >
      <ol className="design-archive-highlights">
        <li>
          <div className="design-archive-highlights__copy">
            <p className="design-revision__label">Why we revised it</p>
            <h4>{revision.title}</h4>
            <p>{revision.body}</p>
            <a href={`#${revision.target}`}>Inspect the archived comparison</a>
          </div>
          <div className="design-archive-highlights__pair design-plate">
            {revision.images.map((image) => (
              <figure className="design-panel" key={image.path}>
                <a
                  className="design-panel__image"
                  href={mediaByPath.get(image.path)}
                  aria-label={`Inspect: ${image.label}`}
                >
                  <QueuedImage
                    src={mediaByPath.get(image.path)}
                    width={image.width}
                    height={image.height}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <figcaption>{image.label}</figcaption>
              </figure>
            ))}
          </div>
        </li>
      </ol>
    </aside>
  );
}

function DesignHistoryArchive() {
  const fullArchive = useRef<HTMLDetailsElement>(null);

  useEffect(() => {
    let focusFrame = 0;
    // Reveal archived anchors before the shared reading-frame jump measures them.
    const reveal = (hash: string) => {
      const target = document.getElementById(hash.slice(1));
      if (target && fullArchive.current?.contains(target)) {
        fullArchive.current.open = true;
        return target;
      }
    };
    const revealCurrent = () => reveal(window.location.hash);
    const revealLink = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>('a[href^="#"]');
      const target = link && reveal(link.hash);
      if (target) {
        cancelAnimationFrame(focusFrame);
        focusFrame = requestAnimationFrame(() => {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        });
      }
    };
    revealCurrent();
    document.addEventListener("click", revealLink, true);
    window.addEventListener("hashchange", revealCurrent, true);
    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("click", revealLink, true);
      window.removeEventListener("hashchange", revealCurrent, true);
    };
  }, []);

  return (
    <div className="design-archive-review">
      <details
        id="design-history-archive"
        className="design-archive-complete"
        ref={fullArchive}
      >
        <summary>
          <span>Explore the complete archive · Six design folios</span>
          <span className="design-disclosure-preview">
            July–October studies, working prototypes and the sources behind the
            revisions.
          </span>
        </summary>
        <div dangerouslySetInnerHTML={{ __html: archiveMarkup }} />
      </details>
    </div>
  );
}

export function VisualDesignNarrativeFeature({ name }: { name: string }) {
  if (name === "design-typography-study") return <TypographyStudy />;
  if (
    [
      "design-reader-choice",
      "design-painted-layers",
      "design-particle-endpoints",
      "design-lumi-roles",
    ].includes(name)
  ) {
    return <DesignExplanationFigures name={name} sources={mediaByPath} />;
  }
  if (name === "design-study-07-footer-reveal") {
    return (
      <FooterRevealStudy archiveMarkup={markupByFeature.get(name) ?? ""} />
    );
  }
  if (name === "motion-score-study") return <MotionScoreStudy />;
  if (name === "design-craft-principle") return <DesignCraftPrinciple />;
  if (name === "design-history-archive") return <DesignHistoryArchive />;
  const revision = visualDesignArchiveHighlights.find(
    (item) => item.key === name,
  );
  if (revision) return <DesignRevision revision={revision} />;
  const technicalNote = visualDesignTechnicalNotes[name];
  if (technicalNote) {
    const [label, title] = technicalNote.title.split(" · ");
    return (
      <details id={name} className="design-technical-note">
        <summary>
          <span className="design-technical-note__label">{label}</span>
          <span className="design-technical-note__title">{title}</span>
          <span className="design-disclosure-preview">
            {technicalNote.description}
          </span>
          <span className="design-technical-note__toggle" aria-hidden="true" />
        </summary>
        <div className="design-technical-note__body">
          {technicalNote.sections.map((section, index) => (
            <Fragment key={section.title}>
              <div className="design-technical-note__section">
                <h4>{section.title}</h4>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {index === 0 ? (
                name === "design-details-artwork" ? (
                  <ArtworkRatioStudy />
                ) : (
                  <DesignExplanationFigures name={name} sources={mediaByPath} />
                )
              ) : null}
            </Fragment>
          ))}
          {technicalNote.code ? (
            <div className="design-technical-note__section">
              <h4>{technicalNote.codeLabel}</h4>
              <pre aria-label={technicalNote.codeLabel}>
                <code>{technicalNote.code}</code>
              </pre>
            </div>
          ) : null}
        </div>
      </details>
    );
  }
  if (name === "supplement-references") {
    return (
      <CitationReferenceList references={references} index={citationIndex} />
    );
  }
  const markup = markupByFeature.get(name);
  // Exhibition HTML is generated from escaped, reviewed local archive records.
  return markup ? <div dangerouslySetInnerHTML={{ __html: markup }} /> : null;
}
