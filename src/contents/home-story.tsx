import {
  useEffect,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { PaintedReveal } from "../components/home/PaintedReveal";
import { CircRnaArtwork } from "../components/home/CircRnaArtwork";
import { HomeRnaSequence } from "../components/home/HomeRnaSequence";
import { WardInfusionTube } from "../components/home/WardInfusionTube";
import originalManifest from "../assets/home/story/manifest.json";
import supplements from "../assets/home/supplements/manifest.json";
import patientConcerned from "../assets/home/ward-transition/patient-teary-20261004.webp";
const clinicianConcerned = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/clinician-concerned.avif";
const clinicianEllipsis = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/clinician-ellipsis.avif";
const patientQuestion = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/patient-question.avif";
import { useHomeStoryAnimation } from "../hooks/useHomeStoryAnimation";
import { HomeAntigenSwitch } from "../components/home/HomeAntigenSwitch";
import { HomeFinale } from "../components/home/HomeFinale";
import { HomeExploreLinks } from "../components/home/HomeExploreLinks";
const mapDataNoteUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/map-data-note.avif";
import mapLatestUrl from "../assets/home/story/map-latest-20261004.webp";
import mapCloudNorthwestUrl from "../assets/home/story/map-cloud-northwest.webp";
import "../styles/home-story.css";
import "../styles/home-tnbc-map.css";
import "../styles/home-reading.css";
import "../styles/home-supplements.css";
import "../styles/home-clinical-transition.css";
import "../styles/home-composition.css";
import "../styles/home-clinical-mobile.css";

const manifest = { ...originalManifest, ...supplements };

const imageUrls: Record<string, string> = {
  "../assets/home/story/scene-1-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-1.webp",
  "../assets/home/story/scene-1-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-2.webp",
  "../assets/home/story/scene-1-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-3.webp",
  "../assets/home/story/scene-1-layer-4.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-4.webp",
  "../assets/home/story/scene-1-layer-5.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-1-layer-5.webp",
  "../assets/home/story/scene-2-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-1.webp",
  "../assets/home/story/scene-2-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-2.webp",
  "../assets/home/story/scene-2-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-3.webp",
  "../assets/home/story/scene-2-layer-4.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-4.webp",
  "../assets/home/story/scene-2-layer-5.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-5.webp",
  "../assets/home/story/scene-2-layer-6.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-2-layer-6.webp",
  "../assets/home/story/scene-3-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-3-layer-1.webp",
  "../assets/home/story/scene-3-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-3-layer-2.webp",
  "../assets/home/story/scene-3-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-3-layer-3.webp",
  "../assets/home/story/scene-4-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-1.webp",
  "../assets/home/story/scene-4-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-2.webp",
  "../assets/home/story/scene-4-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-3.webp",
  "../assets/home/story/scene-4-layer-4.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-4.webp",
  "../assets/home/story/scene-4-layer-5.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-5.webp",
  "../assets/home/story/scene-4-layer-6.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-6.webp",
  "../assets/home/story/scene-4-layer-7.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-7.webp",
  "../assets/home/story/scene-4-layer-8.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-4-layer-8.webp",
  "../assets/home/story/scene-5-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-5-layer-1.webp",
  "../assets/home/story/scene-5-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-5-layer-2.webp",
  "../assets/home/story/scene-5-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-5-layer-3.webp",
  "../assets/home/story/scene-6-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-6-layer-1.webp",
  "../assets/home/story/scene-6-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-6-layer-2.webp",
  "../assets/home/story/scene-6-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-6-layer-3.webp",
  "../assets/home/story/scene-7-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-7-layer-1.webp",
  "../assets/home/story/scene-7-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-7-layer-2.webp",
  "../assets/home/story/scene-7-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-7-layer-3.webp",
  "../assets/home/story/scene-7-layer-4.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-7-layer-4.webp",
  "../assets/home/story/scene-8-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-1.webp",
  "../assets/home/story/scene-8-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-2.webp",
  "../assets/home/story/scene-8-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-3.webp",
  "../assets/home/story/scene-8-layer-4.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-4.webp",
  "../assets/home/story/scene-8-layer-5.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-5.webp",
  "../assets/home/story/scene-8-layer-6.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-8-layer-6.webp",
  "../assets/home/story/scene-9-layer-1.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-9-layer-1.webp",
  "../assets/home/story/scene-9-layer-2.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-9-layer-2.webp",
  "../assets/home/story/scene-9-layer-3.webp": "https://static.igem.wiki/teams/6056/wiki/files/pages/home/scene-9-layer-3.webp",
};
const supplementUrls = import.meta.glob("../assets/home/supplements/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function artworkUrl(file: string) {
  return (
    imageUrls[`../assets/home/story/${file}`] ??
    supplementUrls[`../assets/home/supplements/${file}`]
  );
}

type ArtworkId = keyof typeof manifest;

function StoryArtwork({
  scene,
  description,
  omitLayers = [],
  backgroundLayer = 1,
  role = "img",
  children,
}: {
  scene: ArtworkId;
  description: string;
  omitLayers?: number[];
  backgroundLayer?: number;
  role?: "img" | "group";
  children?: ReactNode;
}) {
  const artwork = manifest[scene];
  const background = artwork.layers.find(
    (layer) => layer.number === backgroundLayer,
  )!;
  return (
    <>
      <img
        className="story-backdrop"
        src={artworkUrl(background.file)}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <figure
        className={`story-art story-art--${scene}`}
        role={role}
        aria-label={description}
        style={{ "--art-aspect": artwork.aspect } as CSSProperties}
      >
        {artwork.layers.map((layer) => {
          if (
            layer.number === backgroundLayer ||
            omitLayers.includes(layer.number)
          )
            return null;
          const src = artworkUrl(layer.file);
          const style = {
            left: `${layer.left}%`,
            top: `${layer.top}%`,
            width: `${layer.width}%`,
            height: `${layer.height}%`,
          };
          // Scene 1's ring is drawn by CircRnaArtwork, not here.
          const kind =
            (scene === "4" || scene === "thinking") && layer.number === 6
              ? "arrow"
              : scene === "2" && layer.number === 2
                ? "platform"
                : null;
          return kind ? (
            <PaintedReveal
              key={layer.file}
              src={src}
              kind={kind}
              number={layer.number}
              style={style}
            />
          ) : (
            <img
              key={layer.file}
              src={src}
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              className="story-layer story-layer--reveal"
              data-layer={layer.number}
              style={style}
            />
          );
        })}
        {children}
      </figure>
    </>
  );
}

function WardArtwork() {
  const base = manifest["5"].layers;
  const patient = base[1];
  return (
    <>
      <img
        className="story-backdrop"
        src={imageUrls[`../assets/home/story/${base[0].file}`]}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <WardInfusionTube />
      <figure
        className="story-art story-art--ward"
        role="img"
        aria-label="In the same hospital room, a patient worries about recurrence while a medical student listens."
        style={{ "--art-aspect": 16 / 9 } as CSSProperties}
      >
        {base.slice(2).map((item) => (
          <img
            key={item.file}
            className={`story-layer story-ward-original story-ward-original--${item.number}`}
            data-ward={`original-${item.number}`}
            src={imageUrls[`../assets/home/story/${item.file}`]}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              width: `${item.width}%`,
              height: `${item.height}%`,
            }}
          />
        ))}
        {[
          ["clinician", clinicianConcerned],
          ["ellipsis", clinicianEllipsis],
        ].map(([name, src]) => (
          <img
            key={name}
            className={`story-layer story-ward-change story-ward-change--${name}`}
            data-ward={name}
            src={src}
            alt=""
            aria-hidden="true"
            loading="lazy"
            decoding="async"
          />
        ))}
      </figure>
      <div
        className="story-art story-art--ward story-art--ward-patient"
        aria-hidden="true"
        style={{ "--art-aspect": 16 / 9 } as CSSProperties}
      >
        <img
          className="story-layer story-ward-original story-ward-original--2"
          data-ward="original-2"
          src={imageUrls[`../assets/home/story/${patient.file}`]}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            left: `${patient.left}%`,
            top: `${patient.top}%`,
            width: `${patient.width}%`,
            height: `${patient.height}%`,
          }}
        />
        <img
          className="story-layer story-ward-change story-ward-change--patient"
          data-ward="patient"
          src={patientConcerned}
          alt=""
          loading="lazy"
          decoding="async"
        />
        <img
          className="story-layer story-ward-change story-ward-change--question"
          data-ward="question"
          src={patientQuestion}
          alt=""
          loading="lazy"
          decoding="async"
        />
      </div>
    </>
  );
}

// Keep the original receiving cloud at its established viewport coordinates.
// The latest map has complete land shapes and needs no painted repair layers.
const mapMotionPieces = [
  {
    name: "cloud-northwest",
    kind: "cloud",
    x: 12.78125,
    y: 10,
    width: 8.26875,
    height: 8,
  },
] as const;

const mapStatistics = [
  {
    key: "incidence-countries",
    value: "164",
    detail: "countries · #1 incidence",
    description:
      "164 countries where breast cancer ranks first for new cases among women",
  },
  {
    key: "incidence-share",
    value: "24.3%",
    detail: "of new cases",
    description:
      "Breast cancer accounts for 24.3% of new cancer cases among women",
  },
  {
    key: "mortality-countries",
    value: "122",
    detail: "countries · #1 mortality",
    description:
      "122 countries where breast cancer ranks first for cancer deaths among women",
  },
  {
    key: "mortality-share",
    value: "16.2%",
    detail: "of cancer deaths",
    description:
      "Breast cancer accounts for 16.2% of cancer deaths among women",
  },
] as const;

function MapArtwork() {
  const mapLayer = { left: 0, top: 0, width: 100, height: 100 };
  const markerLayer = manifest["3"].layers[2];
  const markerSrc = imageUrls[`../assets/home/story/${markerLayer.file}`];
  // Independent windows preserve the artist's six original location marks.
  const markers = [
    { x: 13, y: 0, width: 11, height: 14 },
    { x: 0, y: 40, width: 10, height: 16 },
    { x: 40, y: 9, width: 10, height: 15 },
    { x: 78, y: 9, width: 11, height: 15 },
    { x: 90, y: 57, width: 10, height: 17 },
    { x: 49, y: 86, width: 11, height: 14 },
  ];
  const src = mapLatestUrl;
  return (
    <>
      <div className="tnbc-map-illustration">
        <StoryArtwork
          scene="3"
          omitLayers={[2, 3]}
          role="group"
          description="An illustrative world map, including Taiwan off the southeastern coast of China's mainland: six location marks appear one by one, showing that breast cancer affects people across the world. Locations are symbolic, not incidence data."
        >
          <svg
            className="story-layer story-map-landscape"
            data-layer="2"
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            style={{
              left: `${mapLayer.left}%`,
              top: `${mapLayer.top}%`,
              width: `${mapLayer.width}%`,
              height: `${mapLayer.height}%`,
            }}
          >
            <image
              href={src}
              width="100"
              height="100"
              preserveAspectRatio="none"
            />
          </svg>
          {mapMotionPieces.map((part, index) => (
            <svg
              key={part.name}
              className={`story-layer story-map-piece story-map-piece--${part.kind}`}
              data-map-piece={part.name}
              style={
                {
                  left: `${mapLayer.left + (mapLayer.width * part.x) / 100}%`,
                  top: `${mapLayer.top + (mapLayer.height * part.y) / 100}%`,
                  width: `${(mapLayer.width * part.width) / 100}%`,
                  height: `${(mapLayer.height * part.height) / 100}%`,
                  "--piece-index": index,
                } as CSSProperties
              }
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <image
                href={mapCloudNorthwestUrl}
                width="100"
                height="100"
                preserveAspectRatio="none"
              />
            </svg>
          ))}
          {markers.map((marker, index) => (
            <svg
              key={index}
              className="story-layer tnbc-map-marker"
              data-map-marker={index}
              viewBox={`${marker.x} ${marker.y} ${marker.width} ${marker.height}`}
              preserveAspectRatio="none"
              aria-hidden="true"
              style={{
                left: `${markerLayer.left + (markerLayer.width * marker.x) / 100}%`,
                top: `${markerLayer.top + (markerLayer.height * marker.y) / 100}%`,
                width: `${(markerLayer.width * marker.width) / 100}%`,
                height: `${(markerLayer.height * marker.height) / 100}%`,
              }}
            >
              <image
                href={markerSrc}
                width="100"
                height="100"
                preserveAspectRatio="none"
              />
            </svg>
          ))}
        </StoryArtwork>
      </div>
      <div className="tnbc-map-copy">
        <h3 className="tnbc-map-intro">
          <span className="tnbc-map-intro-lead" data-map-copy>
            Breast cancer is the
          </span>
          <strong className="tnbc-map-intro-focus" data-map-copy>
            most common cancer
          </strong>
          <span className="tnbc-map-intro-context" data-map-copy>
            among women worldwide.
          </span>
        </h3>
      </div>
      <aside
        className="tnbc-map-notes"
        aria-label="Global breast cancer statistics for women, GLOBOCAN 2024"
      >
        {mapStatistics.map((statistic) => (
          <div
            className={`tnbc-map-note tnbc-map-note--${statistic.key}`}
            data-map-note
            key={statistic.key}
            role="group"
            aria-label={statistic.description}
          >
            <img
              src={mapDataNoteUrl}
              alt=""
              className="tnbc-map-note-img"
              aria-hidden="true"
              decoding="async"
            />
            <div className="tnbc-map-note-body">
              <strong className="tnbc-map-note-val">{statistic.value}</strong>
              <span className="tnbc-map-note-detail">{statistic.detail}</span>
            </div>
          </div>
        ))}
        <a
          className="tnbc-map-data-source"
          href="https://gco.iarc.who.int/today/"
          target="_blank"
          rel="noreferrer"
        >
          Data: GLOBOCAN 2024 ↗
        </a>
      </aside>
      <a
        className="tnbc-map-source"
        href="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
        target="_blank"
        rel="noreferrer"
        aria-label="World Health Organization: global breast cancer facts"
      >
        WHO ↗
      </a>
    </>
  );
}

const challengeItems = [
  { key: "surgery", label: "Surgery", x: 0, y: 0, width: 43, height: 52 },
  {
    key: "chemotherapy",
    label: "Chemotherapy",
    x: 0,
    y: 53,
    width: 43,
    height: 47,
  },
  {
    key: "resistance",
    label: "Drug resistance",
    x: 52,
    y: 0,
    width: 48,
    height: 38,
  },
  {
    key: "effects",
    label: "Severe side effects",
    x: 52,
    y: 36,
    width: 48,
    height: 34,
  },
  {
    key: "recurrence",
    label: "High recurrence risk",
    x: 52,
    y: 68,
    width: 48,
    height: 32,
  },
] as const;

function ChallengeArtwork() {
  const iconLayer = manifest["8"].layers[5];
  const src = imageUrls[`../assets/home/story/${iconLayer.file}`];
  return (
    <StoryArtwork
      scene="8"
      omitLayers={[5, 6]}
      description="Surgery, chemotherapy, drug resistance, severe side effects and recurrence risk, each paired with a small version of its original illustration."
    >
      <div
        className="story-challenge-heading story-challenge-heading--care"
        aria-hidden="true"
      >
        <span>Today’s care</span>
        <strong>Treatment</strong>
      </div>
      <div
        className="story-challenge-heading story-challenge-heading--need"
        aria-hidden="true"
      >
        <span>Unmet needs</span>
        <strong>Challenges</strong>
      </div>
      {challengeItems.map((item) => (
        <div className={`story-morph story-morph--${item.key}`} key={item.key}>
          <svg
            className="story-layer story-morph-icon"
            data-morph-icon={item.key}
            style={{
              left: `${iconLayer.left}%`,
              top: `${iconLayer.top}%`,
              width: `${iconLayer.width}%`,
              height: `${iconLayer.height}%`,
            }}
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <defs>
              <clipPath id={`challenge-${item.key}`}>
                <rect
                  x={item.x}
                  y={item.y}
                  width={item.width}
                  height={item.height}
                />
              </clipPath>
            </defs>
            <image
              href={src}
              width="100"
              height="100"
              preserveAspectRatio="none"
              clipPath={`url(#challenge-${item.key})`}
            />
          </svg>
          <svg
            className="story-morph-thumbnail"
            data-morph-thumbnail={item.key}
            viewBox={`${item.x} ${item.y} ${item.width} ${item.height}`}
            preserveAspectRatio="none"
            style={{
              aspectRatio:
                (iconLayer.width * item.width * manifest["8"].aspect) /
                (iconLayer.height * item.height),
            }}
            aria-hidden="true"
          >
            <image
              href={src}
              width="100"
              height="100"
              preserveAspectRatio="none"
            />
          </svg>
          <span
            className="story-morph-word"
            data-morph-word={item.key}
            aria-hidden="true"
          >
            {item.label}
          </span>
        </div>
      ))}
    </StoryArtwork>
  );
}

function VaccineArtwork() {
  const boardSrc = artworkUrl("thinking-2.webp");
  const boardFrame = (side: "question" | "answer") => (
    <svg
      className="story-vaccine-mobile-frame"
      viewBox={`${side === "question" ? 0 : 58} 0 42 100`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <image
        href={boardSrc}
        width="100"
        height="100"
        preserveAspectRatio="none"
      />
    </svg>
  );
  return (
    <StoryArtwork
      scene="thinking"
      role="group"
      description="From a question about tumor recognition to cancer vaccines and antigen presentation."
    >
      <article className="story-vaccine-copy story-vaccine-copy--question">
        {boardFrame("question")}
        <div data-vaccine-copy="question">
          <h3>
            If conventional therapies lack sufficient targets, could the
            patient’s <span>immune system</span> recognize the tumor?
          </h3>
        </div>
      </article>
      <article className="story-vaccine-copy story-vaccine-copy--answer">
        {boardFrame("answer")}
        <div data-vaccine-copy="answer">
          <h3>
            <span>Cancer vaccines</span> present tumor antigens to train the
            immune system to recognize and attack tumors.
          </h3>
        </div>
      </article>
    </StoryArtwork>
  );
}

const platformNotes = [
  ["mechanism", "Immune recognition", "Present antigens to the immune system"],
  ["design", "Antigen switching", "Replace the sequence, keep the backbone"],
  ["structure", "Multiple targets", "Design for tumor heterogeneity"],
  ["beyond", "Beyond TNBC", "A platform to explore other solid tumors"],
] as const;

function PlatformArtwork() {
  return (
    <div className="story-platform-layout">
      <StoryArtwork
        scene="fan"
        role="group"
        description="Project advantages: immune recognition, antigen switching, multiple targets and a vision beyond TNBC. Conceptual platform design."
      >
        <div className="story-platform-notes">
          {platformNotes.map(([key, title, detail]) => (
            <span
              className={`story-platform-note story-platform-note--${key}`}
              data-platform-note={key}
              key={key}
            >
              <strong>{title}</strong>
              <small>{detail}</small>
            </span>
          ))}
        </div>
      </StoryArtwork>
    </div>
  );
}

function TearArtwork() {
  return (
    <>
      <StoryArtwork
        scene="tear"
        backgroundLayer={2}
        omitLayers={[1]}
        description="A hand-painted tear holds the patient's question: What if it comes back?"
      />
      <div
        className="story-tear-copy story-tear-copy--before"
        data-tear-copy="before"
      >
        <p className="story-tear-context">
          During clinical training, we met patients living with triple-negative
          breast cancer. After surgery and chemotherapy, one hope remained.
        </p>
        <div className="story-tear-dialogue">
          <blockquote className="story-tear-wish">
            “I just hope it never comes back.”
          </blockquote>
          <blockquote id="the-question" className="story-tear-question">
            “What if it comes back?”
          </blockquote>
        </div>
      </div>
      <div
        className="story-tear-copy story-tear-copy--after"
        data-tear-copy="after"
      >
        <p>
          Treatment had ended. <br />
          The uncertainty had not.
        </p>
        <p className="story-tear-ending">
          Her question <br />
          stayed with us.
        </p>
      </div>
    </>
  );
}

function BeyondArtwork() {
  const family = manifest["6"].layers[1];
  return (
    <>
      <StoryArtwork
        scene="6"
        omitLayers={[2]}
        description="A patient and doctor stand together in a sunlit clinic while a family member looks on."
      />
      <div
        className="story-art story-art--6 story-art--family"
        aria-hidden="true"
        style={{ "--art-aspect": manifest["6"].aspect } as CSSProperties}
      >
        <img
          className="story-layer"
          data-layer="2"
          src={imageUrls[`../assets/home/story/${family.file}`]}
          alt=""
          loading="lazy"
          decoding="async"
          style={{
            left: `${family.left}%`,
            bottom: 0,
            width: `${family.width}%`,
            height: `${family.height}%`,
          }}
        />
      </div>
    </>
  );
}

function HopeArtwork() {
  return (
    <>
      <StoryArtwork
        scene="9"
        description="Open hands support a smiling patient holding a heart, symbolizing care and hope."
      />
      <HomeExploreLinks />
    </>
  );
}

function Chapter({
  id,
  title,
  children,
  art,
  className = "",
  copyInArtwork = false,
}: {
  id: string;
  title: ReactNode;
  children?: ReactNode;
  art?: ReactNode;
  className?: string;
  copyInArtwork?: boolean;
}) {
  return (
    <section
      id={id}
      className={`story-chapter ${className}`}
      aria-labelledby={`${id}-title`}
    >
      {copyInArtwork && (
        <h2 className="story-sr-only" id={`${id}-title`}>
          {title}
        </h2>
      )}
      {art && (
        <div className="story-scene-track">
          <div className="story-chapter-inner">
            <div className="story-visual">{art}</div>
          </div>
        </div>
      )}
      {!copyInArtwork && (
        <div className="story-copy">
          <h2 id={`${id}-title`}>{title}</h2>
          <div className="story-body">{children}</div>
        </div>
      )}
    </section>
  );
}

export function HomeStory() {
  const root = useRef<HTMLDivElement>(null);
  useHomeStoryAnimation(root);
  useEffect(() => {
    const story = root.current;
    // Load hidden layers before their scene arrives, without loading every scene at once.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return;
          target.querySelectorAll("img").forEach((image) => {
            image.loading = "eager";
          });
          observer.unobserve(target);
        });
      },
      { rootMargin: "100% 0px" },
    );
    root.current?.querySelectorAll(".story-scene-track").forEach((scene) => {
      observer.observe(scene);
    });
    // Ambient motion continues while the artwork is visible, including scroll endpoints.
    const mapStage = root.current?.querySelector(
      ".story-chapter--map .story-chapter-inner",
    );
    const motionObserver = new IntersectionObserver((entries) => {
      entries.forEach(({ isIntersecting, target }) => {
        target
          .closest(".story-chapter")
          ?.classList.toggle("is-visible", isIntersecting);
      });
    });
    if (mapStage) motionObserver.observe(mapStage);
    // Keep the floating artwork button clear of the four platform captions.
    const platformStage = root.current?.querySelector(
      "#our-platform .story-chapter-inner",
    );
    const platformObserver = new IntersectionObserver(([entry]) => {
      if (story) story.dataset.platformInView = String(entry.isIntersecting);
    });
    if (platformStage) platformObserver.observe(platformStage);
    return () => {
      observer.disconnect();
      motionObserver.disconnect();
      platformObserver.disconnect();
      if (story) delete story.dataset.platformInView;
    };
  }, []);

  return (
    <div className="home-story" ref={root}>
      <Chapter
        id="what-we-saw"
        className="story-chapter--clinic story-chapter--ward"
        title={
          <>
            <span className="story-ward-title-line">
              She hoped the hardest part
            </span>{" "}
            <em className="story-ward-title-ending">was over.</em>
          </>
        }
        art={<WardArtwork />}
        copyInArtwork
      />

      <Chapter
        id="what-stayed-with-us"
        className="story-chapter--tear"
        title="What if it comes back? That question stayed with us."
        art={<TearArtwork />}
        copyInArtwork
      />

      <Chapter
        id="why-tnbc"
        className="story-chapter--map"
        title={
          <>
            <em className="story-emphasis-why">Why</em> triple-negative breast
            cancer?
          </>
        }
        art={<MapArtwork />}
      >
        <p>
          For patients with triple-negative breast cancer (TNBC), recurrence is
          an especially difficult concern.
        </p>
        <div
          className="story-receptors"
          aria-label="Estrogen receptor negative, progesterone receptor negative, HER2 negative"
        >
          <span>
            ER <b>−</b>
          </span>
          <span>
            PR <b>−</b>
          </span>
          <span>
            HER2 <b>−</b>
          </span>
        </div>
        <p>
          TNBC lacks the hormone receptors and HER2 overexpression that many
          breast cancer treatments target.
        </p>
        <p className="story-emphasis">
          Fewer familiar targets. A high risk of recurrence and spread.
        </p>
        <p className="tnbc-patient-callback" data-tnbc-callback>
          We kept returning to her question:{" "}
          <span className="story-emphasis">“What if it comes back?”</span>{" "}
          It is why we began looking for more options.
        </p>
        <a
          className="story-source"
          href="https://www.cancer.gov/types/breast/breast-cancer-types/triple-negative"
          target="_blank"
          rel="noreferrer"
        >
          About TNBC · NCI ↗
        </a>
      </Chapter>

      <div className="story-clinical-sequence">
        <div className="story-clinical-stage">
          <Chapter
            id="clinical-challenge"
            className="story-chapter--challenge"
            title={
              <>
                Treatment matters. <em>So does what comes next.</em>
              </>
            }
            art={<ChallengeArtwork />}
            copyInArtwork
          />

          <Chapter
            id="a-new-direction"
            className="story-chapter--vaccine"
            title="From a question to cancer vaccines"
            copyInArtwork
            art={<VaccineArtwork />}
          />
        </div>
      </div>

      <HomeRnaSequence
        rna={<CircRnaArtwork />}
        platform={<PlatformArtwork />}
      />

      <Chapter
        id="plug-and-play"
        className="story-chapter--switch"
        title={
          <>
            Like changing <em>a key.</em>
          </>
        }
        art={<HomeAntigenSwitch />}
      >
        <p>
          Drag or select an antigen above to explore the same backbone with a
          different target.
        </p>
        <p>
          Our design separates the shared circRNA backbone from the
          antigen-encoding sequence. A, B and C illustrate this concept; they
          are not experimental results.
        </p>
      </Chapter>

      <Chapter
        id="beyond-tnbc"
        className="story-chapter--beyond"
        title={
          <>
            Starting with TNBC. <em>Looking further.</em>
          </>
        }
        art={<BeyondArtwork />}
      >
        <p>
          We start with triple-negative breast cancer. Our longer-term vision is
          a framework that can be adapted to other solid tumors.
        </p>
        <p>
          Each new target will need its own validation. The ambition stays the
          same: more flexibility, and more possibilities for patients.
        </p>
      </Chapter>

      {/* CROSS-FILE: #what-we-hope is read by Navbar.tsx for the header theme. */}
      <Chapter
        id="what-we-hope"
        className="story-chapter--hope"
        title={
          <>
            “If it comes back, can we give her <em>more options?</em>”
          </>
        }
      >
        <p>
          Clinical training showed us the uncertainty patients face. Research
          gives us a way to work toward an answer.
        </p>
        {/* CROSS-FILE: this line travels down into HomeFinale.tsx, where it
            becomes "That is CirCure." (useHomeStoryAnimation.ts, finale). */}
        <p className="story-carry">
          <span data-final-carry="source">
            That is the question behind{" "}
            <span className="story-emphasis">CirCure.</span>
          </span>
        </p>
      </Chapter>
      <HomeFinale art={<HopeArtwork />} />
    </div>
  );
}
