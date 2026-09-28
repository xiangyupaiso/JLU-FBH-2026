import {
  useEffect,
  useId,
  useRef,
  type CSSProperties,
  type ReactNode,
} from "react";
import { PaintedReveal } from "../components/home/PaintedReveal";
import { CircRnaArtwork } from "../components/home/CircRnaArtwork";
import manifest from "../assets/home/story/manifest.json";
import clinicianConcerned from "../assets/home/ward-transition/clinician-concerned.png";
import clinicianEllipsis from "../assets/home/ward-transition/clinician-ellipsis.png";
import patientQuestion from "../assets/home/ward-transition/patient-question.png";
import patientConcerned from "../assets/home/ward-transition/patient-concerned.png";
import { useHomeStoryAnimation } from "../hooks/useHomeStoryAnimation";
import { HomeAntigenSwitch } from "../components/home/HomeAntigenSwitch";
import { HomeFinale } from "../components/home/HomeFinale";
import { HomeExploreLinks } from "../components/home/HomeExploreLinks";
import "../styles/home-story.css";
import "../styles/home-tnbc-map.css";
import "../styles/home-reading.css";

const imageUrls = import.meta.glob("../assets/home/story/*.webp", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

type ArtworkId = keyof typeof manifest;

function StoryArtwork({
  scene,
  description,
  omitLayers = [],
  role = "img",
  children,
}: {
  scene: ArtworkId;
  description: string;
  omitLayers?: number[];
  role?: "img" | "group";
  children?: ReactNode;
}) {
  const artwork = manifest[scene];
  const background = artwork.layers[0];
  return (
    <>
      <img
        className="story-backdrop"
        src={imageUrls[`../assets/home/story/${background.file}`]}
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
        {artwork.layers.map((layer, index) => {
          if (index === 0 || omitLayers.includes(layer.number)) return null;
          const src = imageUrls[`../assets/home/story/${layer.file}`];
          const style = {
            left: `${layer.left}%`,
            top: `${layer.top}%`,
            width: `${layer.width}%`,
            height: `${layer.height}%`,
          };
          // Scene 1's ring is drawn by CircRnaArtwork, not here.
          const kind =
            scene === "4" && layer.number === 6
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

const mapMotionPieces = [
  { name: "cloud-west", kind: "cloud", x: 0, y: 30, width: 8, height: 9 },
  { name: "cloud-northwest", kind: "cloud", x: 10, y: 10, width: 9, height: 8 },
  { name: "cloud-north", kind: "cloud", x: 57, y: 6, width: 8, height: 7 },
  { name: "cloud-east", kind: "cloud", x: 93, y: 25, width: 7, height: 9 },
  { name: "boat-smoke", kind: "cloud", x: 47, y: 66, width: 5, height: 4 },
  { name: "wave-west-1", kind: "wave", x: 0, y: 64, width: 8, height: 4 },
  { name: "wave-west-2", kind: "wave", x: 0, y: 69, width: 8, height: 4 },
  { name: "wave-southwest-1", kind: "wave", x: 12, y: 78, width: 8, height: 4 },
  { name: "wave-southwest-2", kind: "wave", x: 12, y: 82, width: 8, height: 5 },
  {
    name: "wave-central-west-1",
    kind: "wave",
    x: 32,
    y: 59,
    width: 7,
    height: 4,
  },
  {
    name: "wave-central-west-2",
    kind: "wave",
    x: 39,
    y: 64,
    width: 9,
    height: 4,
  },
  {
    name: "wave-central-west-3",
    kind: "wave",
    x: 32,
    y: 83,
    width: 7,
    height: 5,
  },
  { name: "wave-central", kind: "wave", x: 50, y: 52, width: 8, height: 5 },
  {
    name: "wave-central-east-1",
    kind: "wave",
    x: 63,
    y: 40,
    width: 9,
    height: 5,
  },
  {
    name: "wave-central-east-2",
    kind: "wave",
    x: 61,
    y: 44,
    width: 12,
    height: 5,
  },
  {
    name: "wave-central-east-3",
    kind: "wave",
    x: 60,
    y: 64,
    width: 12,
    height: 5,
  },
  {
    name: "wave-central-east-4",
    kind: "wave",
    x: 65,
    y: 68,
    width: 5,
    height: 4,
  },
  { name: "wave-east-1", kind: "wave", x: 86, y: 39, width: 8, height: 4 },
  { name: "wave-east-2", kind: "wave", x: 87, y: 43, width: 6, height: 4 },
  { name: "wave-east-3", kind: "wave", x: 72, y: 74, width: 5, height: 4 },
  { name: "wave-east-4", kind: "wave", x: 91, y: 81, width: 9, height: 5 },
  { name: "wave-boat", kind: "wave", x: 43, y: 79.5, width: 9.5, height: 2.5 },
  { name: "boat", kind: "boat", x: 42, y: 70, width: 13.2, height: 9 },
] as const;

function MapArtwork() {
  const landscapeMaskId = useId();
  const inkFilterId = useId();
  const mapLayer = manifest["3"].layers[1];
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
  const src = imageUrls[`../assets/home/story/${mapLayer.file}`];
  return (
    <>
      <StoryArtwork
        scene="3"
        omitLayers={[2, 3]}
        role="group"
        description="An illustrative world map: six location marks appear one by one, showing that breast cancer affects people across the world. Locations are symbolic, not incidence data."
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
          <defs>
            <mask
              id={landscapeMaskId}
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="100"
              height="100"
            >
              <rect width="100" height="100" fill="white" />
              {mapMotionPieces.map((part) => (
                <rect
                  key={part.name}
                  x={part.x}
                  y={part.y}
                  width={part.width}
                  height={part.height}
                  fill="black"
                />
              ))}
            </mask>
          </defs>
          <image
            href={src}
            width="100"
            height="100"
            preserveAspectRatio="none"
            mask={`url(#${landscapeMaskId})`}
          />
        </svg>
        {mapMotionPieces.map((part, index) => (
          <svg
            key={part.name}
            className={`story-layer story-map-piece story-map-piece--${part.kind}`}
            data-map-piece={part.name}
            style={
              {
                left:
                  part.name === "wave-central"
                    ? "34%"
                    : `${mapLayer.left + (mapLayer.width * part.x) / 100}%`,
                top:
                  part.name === "wave-central"
                    ? "92%"
                    : `${mapLayer.top + (mapLayer.height * part.y) / 100}%`,
                width: `${(mapLayer.width * part.width) / 100}%`,
                height: `${(mapLayer.height * part.height) / 100}%`,
                "--piece-index": index,
              } as CSSProperties
            }
            viewBox={`${part.x} ${part.y} ${part.width} ${part.height}`}
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <image
              href={src}
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
        <svg
          className="tnbc-map-ink-defs"
          width="0"
          height="0"
          aria-hidden="true"
        >
          <defs>
            <filter
              id={inkFilterId}
              x="-5%"
              y="-10%"
              width="110%"
              height="120%"
              colorInterpolationFilters="sRGB"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.68"
                numOctaves="2"
                seed="11"
                result="grain"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="grain"
                scale="0.6"
                xChannelSelector="R"
                yChannelSelector="G"
                result="ink"
              />
              <feColorMatrix
                in="grain"
                type="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0.1 0.1 0.1 0 0.72"
                result="paper"
              />
              <feComposite in="ink" in2="paper" operator="in" />
            </filter>
          </defs>
        </svg>
        <div
          className="tnbc-map-copy"
          style={
            { "--map-ink-filter": `url(#${inkFilterId})` } as CSSProperties
          }
        >
          <h3 className="tnbc-map-title" data-map-copy>
            <span>Breast cancer</span> <span>knows no borders.</span>
          </h3>
          <p className="tnbc-map-intro" data-map-copy>
            The most common cancer
            <br />
            among women worldwide.
          </p>
          <a
            className="tnbc-map-source"
            href="https://www.who.int/news-room/fact-sheets/detail/breast-cancer"
            target="_blank"
            rel="noreferrer"
            aria-label="World Health Organization: global breast cancer facts"
          >
            WHO ↗
          </a>
        </div>
      </StoryArtwork>
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
      description="Surgery and chemotherapy transform into written treatment names; three limitations become drug resistance, severe side effects and recurrence risk."
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
  const boardSrc = imageUrls["../assets/home/story/scene-4-layer-2.webp"];
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
      scene="4"
      role="group"
      description="From a question about tumor recognition to cancer vaccines and antigen presentation."
    >
      <article className="story-vaccine-copy story-vaccine-copy--question">
        {boardFrame("question")}
        <div data-vaccine-copy="question">
          <h3>
            If conventional therapies lack sufficient targets, could the
            patient’s own <span>immune system</span> recognize the tumor?
          </h3>
        </div>
      </article>
      <article className="story-vaccine-copy story-vaccine-copy--answer">
        {boardFrame("answer")}
        <div data-vaccine-copy="answer">
          <h3>
            This led us to <span>cancer vaccines</span>: presenting tumor
            antigens to train the immune system to recognize and attack tumors.
          </h3>
        </div>
      </article>
    </StoryArtwork>
  );
}

const platformNotes = [
  ["structure", "Circular structure", "Multiple antigen sites"],
  ["mechanism", "Vaccine mechanism", "Activates antitumor immunity"],
  ["design", "Simple design", "Swap the antigen sequence"],
  ["beyond", "Beyond TNBC", "Adaptable to other solid tumors"],
] as const;

function PlatformArtwork() {
  return (
    <div className="story-platform-layout">
      <StoryArtwork
        scene="2"
        description="A central circRNA ring connects to four modular functions: multiple antigen sites, antitumor immunity, sequence replacement and other solid tumors."
      />
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
  art: ReactNode;
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
      <div className="story-scene-track">
        <div className="story-chapter-inner">
          <div className="story-visual">{art}</div>
        </div>
      </div>
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
    return () => {
      observer.disconnect();
      motionObserver.disconnect();
    };
  }, []);

  return (
    <div className="home-story" ref={root}>
      <div className="story-prologue">
        <p>
          <span className="story-prologue-line">Behind every diagnosis,</span>{" "}
          <em className="story-prologue-line">there is a person.</em>
        </p>
        <button
          type="button"
          onClick={() =>
            root.current?.querySelector("#what-we-saw")?.scrollIntoView({
              block: "start",
              behavior: "instant",
            })
          }
        >
          It began with a question <span aria-hidden="true">↓</span>
        </button>
      </div>

      <Chapter
        id="what-we-saw"
        className="story-chapter--clinic story-chapter--ward"
        title={
          <>
            <span className="story-ward-title-line">She hoped the hardest part</span>
            {" "}
            <em className="story-ward-title-ending">was over.</em>
          </>
        }
        art={<WardArtwork />}
      >
        <p className="story-ward-context">
          During clinical training, we met patients living with triple-negative
          breast cancer. After surgery and chemotherapy, one hope remained.
        </p>
        <div className="story-ward-dialogue">
          <blockquote className="story-ward-wish">“I just hope it never comes back.”</blockquote>
          <p id="the-question" className="story-ward-question">
            “What if it comes back?”
          </p>
        </div>
        <span className="story-ward-thread" aria-hidden="true" />
        <p className="story-ward-aftermath">
          <span>Treatment had ended.</span>{" "}
          <span>The uncertainty had not.</span>{" "}
          <span>Her question stayed with us.</span>
        </p>
      </Chapter>

      <Chapter
        id="why-tnbc"
        className="story-chapter--map"
        title={
          <>
            <em className="story-emphasis-why">Why</em> triple-negative
            {" "}
            breast cancer?
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
          Fewer familiar targets.
          {" "}A high risk of recurrence and spread.
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

      <Chapter
        id="clinical-challenge"
        className="story-chapter--challenge"
        title={
          <>
            Treatment matters.
            {" "}
            <em>So does what comes next.</em>
          </>
        }
        art={<ChallengeArtwork />}
      >
        <p>
          Surgery and chemotherapy remain important parts of treatment. Yet
          patients may still face:
        </p>
        <ul className="story-challenges">
          <li>Drug resistance</li>
          <li>Severe side effects</li>
          <li>Recurrence</li>
        </ul>
        <p className="story-small">
          Treatment can also include radiotherapy, immunotherapy and selected
          targeted medicines, depending on the cancer.
        </p>
        <a
          className="story-source"
          href="https://www.cancer.gov/types/breast/treatment/triple-negative-breast-cancer"
          target="_blank"
          rel="noreferrer"
        >
          TNBC treatment · NCI ↗
        </a>
      </Chapter>

      <Chapter
        id="a-new-direction"
        className="story-chapter--vaccine"
        title="From a question to cancer vaccines"
        copyInArtwork
        art={<VaccineArtwork />}
      />

      <Chapter
        id="why-circrna"
        className="story-chapter--rna"
        title="Why circRNA?"
        copyInArtwork
        art={<CircRnaArtwork />}
      />

      <Chapter
        id="our-platform"
        className="story-chapter--platform"
        title={
          <>
            One backbone.
            {" "}
            <em>Room for more targets.</em>
          </>
        }
        art={<PlatformArtwork />}
      >
        <p>
          Tumors are not defined by a single target. We want to address that
          diversity with a modular circRNA cancer vaccine platform.
        </p>
        <p>
          Keep the vaccine framework. Replace the antigen sequence. Explore a
          different tumor target.
        </p>
      </Chapter>

      <Chapter
        id="plug-and-play"
        className="story-chapter--switch"
        title={
          <>
            Like changing
            {" "}
            <em>a key.</em>
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
            Starting with TNBC.
            {" "}
            <em>Looking further.</em>
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
            “If it comes back,
            {" "}
            can we give her
            {" "}
            <em>more options?</em>”
          </>
        }
        art={<HopeArtwork />}
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
      <HomeFinale />
    </div>
  );
}
