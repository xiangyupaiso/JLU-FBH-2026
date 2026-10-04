import { useEffect, useRef, type ReactNode } from "react";
import { PaintedReveal } from "./PaintedReveal";
import ring from "../../assets/home/story/scene-1-layer-4.webp";
import "../../styles/home-finale.css";

// The painted ring fills its wrapper; the wrapper owns size and motion.
const RING_BOX = { left: 0, top: 0, width: "100%", height: "100%" };

export function HomeFinale({ art }: { art: ReactNode }) {
  const exploreRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const explore = exploreRef.current;
    if (!explore) return;
    // Reserve the lower mobile rows for navigation, including without motion.
    const observer = new IntersectionObserver(
      ([entry]) => {
        explore.dataset.exploreInView = String(entry.isIntersecting);
      },
      { threshold: 0.25 },
    );
    observer.observe(explore);
    return () => observer.disconnect();
  }, []);
  return (
    <section
      // CROSS-FILE: #home-finale is read by Navbar.tsx and
      // useHomeStoryAnimation.ts; home-finale.css only applies inside .home-story.
      id="home-finale"
      className="story-finale"
      aria-labelledby="home-finale-title"
    >
      {/* The circRNA ring from "Why circRNA?" closes behind the last words. */}
      <div className="story-finale-ambient" aria-hidden="true">
        <div className="story-finale-glow" data-finale="glow" />
        <div className="story-finale-ring" data-finale="ring">
          <PaintedReveal src={ring} kind="ring" number={0} style={RING_BOX} />
        </div>
      </div>
      <div className="story-final-statement">
        {/* CROSS-FILE: the last line of "What we hope" (home-story.tsx)
            travels down to this spot, then "the question behind" folds away,
            leaving "That is CirCure." Without motion the fold stays hidden. */}
        <p className="story-final-statement__kicker">
          <span data-final-carry="target">
            That is
            <span
              className="story-final-statement__fold"
              data-finale="fold"
              aria-hidden="true"
            >
              &nbsp;the question behind
            </span>{" "}
            <span className="story-final-statement__name" data-finale="name">
              CirCure.
            </span>
          </span>
        </p>
        <h2 id="home-finale-title" data-final-copy="title">
          Let therapy evolve{" "}
          <span className="story-final-statement__accent" data-finale="accent">
            with the tumor.
          </span>
        </h2>
        <p className="story-final-statement__tagline" data-final-copy="tagline">
          <span>One Platform.</span>{" "}
          <strong data-finale="possibilities">More Possibilities.</strong>
        </p>
      </div>
      <div
        className="story-finale-explore"
        data-finale="explore"
        ref={exploreRef}
      >
        <h2 className="story-sr-only" id="home-explore-title">
          Continue exploring CirCure
        </h2>
        {art}
      </div>
    </section>
  );
}
