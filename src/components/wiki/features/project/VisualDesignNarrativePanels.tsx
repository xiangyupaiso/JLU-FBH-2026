import { useId, useState } from "react";
import circRnaRing from "../../../../assets/home/story/scene-1-layer-4.webp";
import { QueuedSvgImage } from "../../../common/QueuedImage";
import { visualDesignCitationIndex as citationIndex } from "../../../../data/citations/visualDesignCitations";
import { CitationReferenceList } from "../../citations/CitationRegister";
import {
  visualDesignReferences,
  visualDesignTechnicalNotes,
} from "../../../../data/project/visualDesignNarrative";
import "../../../../styles/features/visual-design-study.css";
import "../../../../styles/features/visual-design-history.css";
import "../../../../styles/features/visual-design-manuscript.css";
import historyMarkup from "../../../../data/project/visual-design/history.html?raw";
import "../../../../styles/features/visual-design-plates.css";

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
  "../../../../assets/visual-design/**/*.{png,jpg,webp,json}",
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

/** Resolve every image and source record through Vite's production asset graph. */
function resolveMedia(markup: string) {
  return markup.replace(
    /\b(src|href|data-src)="([^"]+)"/g,
    (attribute, name: string, path: string) => {
      const url = path.startsWith("detail.html")
        ? import.meta.env.BASE_URL +
          "visual-design-study.html" +
          path.slice("detail.html".length)
        : mediaByPath.get(path);
      return url ? `${name}="${url}"` : attribute;
    },
  );
}

const PHASES = [
  {
    label: "Establish",
    description: "The ring is settled and its first explanation can be read.",
    progress: 10,
  },
  {
    label: "Carry",
    description:
      "The same visible ring moves while the surrounding context changes.",
    progress: 40,
  },
  {
    label: "Settle",
    description:
      "The ring reaches the platform before the new explanation finishes appearing.",
    progress: 70,
  },
  {
    label: "Read",
    description:
      "The completed relationship stays still. Further progress leaves time to read.",
    progress: 90,
  },
] as const;

const clamp = (n: number) => Math.max(0, Math.min(1, n));
const ease = (n: number) => (1 - Math.cos(Math.PI * n)) / 2;

export function MotionScoreStudy() {
  const id = useId();
  const [progress, setProgress] = useState(10);
  const p = progress / 100;
  const travel = ease(clamp((p - 0.2) / 0.4));
  const phase = p < 0.2 ? 0 : p < 0.6 ? 1 : p < 0.8 ? 2 : 3;
  const x = 145 + travel * 510;
  const y = 132 - Math.sin(travel * Math.PI) * 48;
  const context = clamp((p - 0.6) / 0.2);

  return (
    <figure
      className="supplement-motion-study"
      aria-labelledby={id + "-caption"}
    >
      <div
        className="supplement-motion-study__phases"
        role="group"
        aria-label="Choose a design state"
      >
        {PHASES.map((item, index) => (
          <button
            key={item.label}
            type="button"
            aria-pressed={phase === index}
            onClick={() => setProgress(item.progress)}
          >
            <span
              className="supplement-motion-study__letter"
              aria-hidden="true"
            >
              {String.fromCharCode(97 + index)}
            </span>{" "}
            {item.label}
          </button>
        ))}
      </div>
      <svg viewBox="0 0 800 225" role="img" aria-labelledby={id + "-title"}>
        <title id={id + "-title"}>
          The original circRNA artwork from the homepage.{" "}
          {PHASES[phase].description}
        </title>
        <path
          className="supplement-motion-study__guide"
          d="M145 132 Q400 35 655 132"
        />
        <g transform={`translate(${x} ${y})`}>
          <QueuedSvgImage
            href={circRnaRing}
            x="-58"
            y="-58"
            width="116"
            height="116"
            preserveAspectRatio="xMidYMid meet"
          />
        </g>
      </svg>
      <div className="supplement-motion-study__labels" aria-hidden="true">
        <span style={{ opacity: 1 - travel * 0.65 }}>Why circRNA?</span>
        <span style={{ opacity: context }}>Our platform</span>
      </div>
      <label
        className="supplement-motion-study__range"
        htmlFor={id + "-progress"}
      >
        <span>Move through the design states</span>
        <input
          id={id + "-progress"}
          type="range"
          min="0"
          max="100"
          value={progress}
          onChange={(event) => setProgress(Number(event.target.value))}
        />
      </label>
      <p className="supplement-motion-study__explanation" aria-live="polite">
        <strong>{PHASES[phase].label}.</strong> {PHASES[phase].description}
      </p>
      <figcaption id={id + "-caption"}>
        <strong>One circRNA ring connects two homepage chapters.</strong> This
        study uses the original watercolor ring from “Why circRNA?”. The slider
        illustrates its journey toward “Our platform” through four states:
        introduction, movement, arrival and a reading hold.
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
  ["design-history-archive", resolveMedia(historyMarkup)] as const,
]);

export function VisualDesignNarrativeFeature({ name }: { name: string }) {
  if (name === "motion-score-study") return <MotionScoreStudy />;
  const technicalNote = visualDesignTechnicalNotes[name];
  if (technicalNote) {
    return (
      <details className="design-technical-note">
        <summary>{technicalNote.title}</summary>
        <div className="design-technical-note__body">
          {technicalNote.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {technicalNote.code ? (
            <pre aria-label="Ribbon travel equations">
              <code>{technicalNote.code}</code>
            </pre>
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
