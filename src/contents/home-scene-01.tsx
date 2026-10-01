import { useRef } from "react";
const anxietyLabelUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/anxiety-label.webp";
const anxietyUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/anxiety.webp";
const chemotherapyLabelUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/chemotherapy-label.webp";
const chemotherapyUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/chemotherapy.webp";
const deathRateLabelUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/death-rate-label.webp";
const deathRateUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/death-rate.webp";
const hairLossLabelUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/hair-loss-label.webp";
const hairLossUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/hair-loss.webp";
const surgeryLabelUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/surgery-label.webp";
const surgeryUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/surgery.webp";
const womanFrameUrl = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/woman-frame.webp";
import { HomeIntro } from "../components/home/HomeIntro";
import { useHomeScene01Animation } from "../hooks/useHomeScene01Animation";
import { HomeStory } from "./home-story";
import "../styles/home-scene-01.css";

const sceneItems = [
  {
    key: "anxiety",
    visual: anxietyUrl,
    label: anxietyLabelUrl,
    description: "Anxiety",
  },
  {
    key: "surgery",
    visual: surgeryUrl,
    label: surgeryLabelUrl,
    description: "Surgery",
  },
  {
    key: "hair-loss",
    visual: hairLossUrl,
    label: hairLossLabelUrl,
    description: "Hair loss",
  },
  {
    key: "chemotherapy",
    visual: chemotherapyUrl,
    label: chemotherapyLabelUrl,
    description: "Chemotherapy",
  },
  {
    key: "death-rate",
    visual: deathRateUrl,
    label: deathRateLabelUrl,
    description: "Death rate",
  },
] as const;

export function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLElement>(null);
  useHomeScene01Animation({ root: rootRef, scene: sceneRef });

  return (
    <div className="home-redesign" ref={rootRef}>
      <main id="top">
        {/* CROSS-FILE: .home-scene01 is read by Navbar.tsx; its darkness and
            portrait are driven by HomeIntro (see data-intro). */}
        <section
          className="home-scene01"
          ref={sceneRef}
          aria-labelledby="home-scene01-title"
        >
          <h1 id="home-scene01-title" className="scene01-sr-only">
            The burdens surrounding breast cancer
          </h1>
          <div className="home-scene01-canvas" data-surface="navy">
            <div className="scene01-darkness" aria-hidden="true" />
            <div className="scene01-stage">
              {sceneItems.map(({ key, visual, description }) => (
                <figure
                  className={`scene01-orbit scene01-orbit--${key}`}
                  key={key}
                >
                  <img src={visual} alt="" decoding="async" />
                  <figcaption className="scene01-sr-only">
                    {description}
                  </figcaption>
                </figure>
              ))}
              <div className="scene01-portrait">
                <img
                  className="scene01-frame"
                  src={womanFrameUrl}
                  alt="A woman in profile at the center of the surrounding burdens"
                  fetchPriority="high"
                />
              </div>
              <div className="scene01-labels">
                {sceneItems.map(({ key, label }) => (
                  <img
                    className={`scene01-label scene01-label--${key}`}
                    src={label}
                    alt=""
                    aria-hidden="true"
                    decoding="async"
                    key={`${key}-label`}
                  />
                ))}
              </div>
            </div>
            <p className="scene01-scroll-cue" aria-hidden="true">
              <i />
            </p>
          </div>
        </section>
        {/* A sibling, so the section ref is attached before its effects run. */}
        <HomeIntro scene={sceneRef} />
        <HomeStory />
      </main>
    </div>
  );
}
