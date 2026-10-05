import { useEffect, useRef, useState, type CSSProperties } from "react";
import emblemUrl from "../assets/story-nav/circure-emblem.png";
import ribbonUrl from "../assets/story-nav/circure-ribbon.png";
import {
  INTRO_WORDMARK_GLYPHS,
  INTRO_WORDMARK_VIEWBOX,
} from "../data/homeIntroWordmark";
import { useFooterEasterEgg } from "../hooks/useFooterEasterEgg";
import "../styles/footer-easter-egg.css";

/** Sample the real CirCure vector artwork, so particles and outlines match exactly. */
function ParticleWordmark() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");
    if (!canvas || !context) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (motion.matches) return;
    const width = 900;
    const height = 217;
    const sample = document.createElement("canvas");
    sample.width = canvas.width = width;
    sample.height = canvas.height = height;
    const sampleContext = sample.getContext("2d");
    if (!sampleContext) return;
    sampleContext.scale(width / 2950, height / 710);
    sampleContext.translate(-62, -40);
    INTRO_WORDMARK_GLYPHS.forEach((glyph) =>
      sampleContext.fill(new Path2D(glyph)),
    );
    const pixels = sampleContext.getImageData(0, 0, width, height).data;
    const targets: { x: number; y: number }[] = [];
    for (let y = 0; y < height; y += 5) {
      for (let x = 0; x < width; x += 5) {
        if (pixels[(y * width + x) * 4 + 3] > 100) targets.push({ x, y });
      }
    }
    const stride = Math.max(1, Math.ceil(targets.length / 1200));
    const particles = targets
      .filter((_, index) => index % stride === 0)
      .map((target, index) => {
        const phase = index * 2.39996;
        return {
          ...target,
          dx: Math.cos(phase) * (70 + (index % 130)),
          dy: Math.sin(phase) * (50 + (index % 80)),
          delay: (index % 11) * 24,
        };
      });
    let frame = 0;
    let start = 0;
    let visible = true;
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
    });
    observer.observe(canvas);
    const paint = (now: number) => {
      if (!start) start = now;
      const elapsed = now - start;
      context.clearRect(0, 0, width, height);
      if (motion.matches || elapsed > 2500) {
        frame = 0;
        return;
      }
      if (visible && !document.hidden) {
        const fade =
          Math.min(1, elapsed / 240) *
          Math.max(0, 1 - Math.max(0, elapsed - 1650) / 850);
        particles.forEach((particle, index) => {
          const p = Math.min(1, Math.max(0, (elapsed - particle.delay) / 1450));
          const remainder = (1 - p) ** 3;
          context.fillStyle =
            index % 4 === 0
              ? `rgba(248,233,232,${fade})`
              : `rgba(215,132,179,${fade})`;
          context.fillRect(
            particle.x + particle.dx * remainder,
            particle.y + particle.dy * remainder,
            1.6,
            1.6,
          );
        });
      }
      frame = window.requestAnimationFrame(paint);
    };
    frame = window.requestAnimationFrame(paint);
    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, []);
  return (
    <canvas ref={canvasRef} className="finale-particles" aria-hidden="true" />
  );
}

export function FooterEasterEgg() {
  const rootRef = useRef<HTMLElement>(null);
  const seamRef = useRef<HTMLButtonElement>(null);
  const { revealed, reveal, close } = useFooterEasterEgg(rootRef, seamRef);
  const [take, setTake] = useState(0);

  return (
    <>
      <div className="finale-seam">
        <button
          ref={seamRef}
          type="button"
          className="finale-gate"
          aria-expanded={revealed}
          aria-controls="circure-hidden-finale"
          onClick={reveal}
        >
          <span className="finale-gate__line" aria-hidden="true" />
          <span>One more turn</span>
          <span className="finale-gate__arrow" aria-hidden="true">
            ↓
          </span>
          <span className="visually-hidden">
            {" "}
            — keep scrolling or activate to reveal the CirCure hidden finale
          </span>
        </button>
      </div>
      <section
        ref={rootRef}
        id="circure-hidden-finale"
        className={`circure-hidden-finale${revealed ? " is-revealed" : ""}`}
        aria-label="CirCure hidden finale. Let therapy evolve with the tumor."
        aria-hidden={!revealed}
        inert={!revealed || undefined}
        tabIndex={-1}
        data-theme="dark"
      >
        {revealed && (
          <div className="finale-stage">
            <button
              className="finale-icon-button finale-close"
              type="button"
              onClick={close}
              aria-label="Return to footer"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="m6 6 12 12M18 6 6 18" />
              </svg>
            </button>
            <div className="finale-orbits" aria-hidden="true">
              <i />
              <i />
              <i />
            </div>
            <div className="finale-composition" key={take}>
              <div className="finale-emblem" aria-hidden="true">
                <div className="finale-emblem__disc">
                  <img src={emblemUrl} alt="" />
                  <img
                    className="finale-emblem__ribbon"
                    src={ribbonUrl}
                    alt=""
                  />
                </div>
                <svg
                  className="finale-emblem__orbit"
                  viewBox="0 0 320 320"
                  fill="none"
                >
                  <circle cx="160" cy="160" r="152" />
                  <circle
                    className="finale-emblem__draw"
                    cx="160"
                    cy="160"
                    r="152"
                    pathLength="1"
                  />
                  <circle
                    className="finale-emblem__node"
                    cx="52"
                    cy="53"
                    r="4"
                  />
                </svg>
              </div>
              <div className="finale-brand">
                <div
                  className="finale-wordmark"
                  role="img"
                  aria-label="CirCure"
                >
                  <svg viewBox={INTRO_WORDMARK_VIEWBOX} aria-hidden="true">
                    {INTRO_WORDMARK_GLYPHS.map((glyph, index) => (
                      <g
                        key={index}
                        style={{ "--glyph-index": index } as CSSProperties}
                      >
                        <path
                          className="finale-glyph-outline"
                          d={glyph}
                          pathLength="1"
                          vectorEffect="non-scaling-stroke"
                        />
                        <path className="finale-glyph-fill" d={glyph} />
                      </g>
                    ))}
                  </svg>
                  <ParticleWordmark />
                  <span className="finale-scan" aria-hidden="true" />
                </div>
                <p className="finale-tagline">
                  Let therapy evolve
                  <br />
                  with the tumor<span>.</span>
                </p>
                <svg
                  className="finale-thread"
                  viewBox="0 0 600 100"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    pathLength="1"
                    d="M5 67C96 26 132 80 192 54S333 29 409 53c71 23 147 23 169-7 24-33-38-49-52-19-10 22 17 38 66 44"
                  />
                </svg>
              </div>
            </div>
            <button
              className="finale-icon-button finale-replay"
              type="button"
              onClick={() => setTake((value) => value + 1)}
              aria-label="Replay the CirCure animation"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 11a8 8 0 1 1 2 6M4 5v6h6" />
              </svg>
            </button>
          </div>
        )}
      </section>
    </>
  );
}
