import { linkify } from "../../proseInline";
import { QueuedImage, QueuedSvgImage } from "../../../common/QueuedImage";
import { useState, useRef, useEffect, useCallback } from "react";
const waterfallFullWebpLocal = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/hp-waterfall-loop.webp";
const waterfallCoreWebpLocal = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/hp-waterfall-core.webp";
const waterfallStreamWebpLocal = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/hp-waterfall-stream.webp";
import {
  RETURN_CONTOUR,
  PROJECT_CONTOUR,
  ORIGIN_CONTOUR,
  HUMAN_CONTOUR,
} from "./hpContours";
import { scrollReaderToTarget } from "../../../../utils";
import "../../../../styles/features/hp-waterfall-interactive.css";

const WATERFALL_LOOP_CDN =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/hp-waterfall-loop.webp";
const WATERFALL_STREAM_CDN =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/hp-waterfall-stream.webp";

type HotspotKey = "overview" | "human" | "origin" | "project" | "return";

interface HotspotData {
  key: HotspotKey;
  navLabel: string;
  badge: string;
  title: string;
  subtitle: string;
  body: string;
  targetSectionId: string;
  targetSectionLabel: string;
  // Positioning for desktop speech bubble
  bubbleStyle: React.CSSProperties;
  // Center indicator coordinates on 1920x1080 SVG
  indicatorPoint?: { x: number; y: number };
  // Line endpoint for leader line
  connectorEnd?: { x: number; y: number };
  connectorLabelPos?: { x: number; y: number };
}

const HOTSPOTS: Record<HotspotKey, HotspotData> = {
  overview: {
    key: "overview",
    navLabel: "Overview",
    badge: "00 / Perpetual Loop",
    title: "M. C. Escher's Waterfall: Never-Ending Love",
    subtitle: "A Closed-Loop Framework Originating from and Returning to the Public",
    body: "Our Human Practices revolve around one core conviction: never-ending love. Inspired by M. C. Escher's Waterfall, we use this impossible perpetual-motion machine as a metaphor for our entire HP framework: originating from the public and returning to the public.",
    targetSectionId: "hp-overview",
    targetSectionLabel: "Overview: The Closed Loop",
    bubbleStyle: {
      top: "10%",
      left: "50%",
      transform: "translateX(-50%)",
      width: "420px",
    },
  },
  human: {
    key: "human",
    navLabel: "Human (Pool)",
    badge: "01 / Foundation & Demand",
    title: "Human: The Public Pool as Reservoir",
    subtitle: "Inspiration Originating from Grassroots Community Demands",
    body: "Using the **3i framework** across six stakeholder categories, we used **CIRC** to drive iterative dialogues and re-engagement, building a **tree-like network** that replaces linear communication with a responsive, bidirectional Human Practices approach and embeds societal feedback into project evolution.",
    targetSectionId: "hp-human",
    targetSectionLabel: "02 Human: Stakeholder Matrix",
    bubbleStyle: {
      bottom: "8%",
      left: "4%",
      width: "360px",
    },
    indicatorPoint: { x: 780, y: 880 },
    connectorEnd: { x: 440, y: 880 },
    connectorLabelPos: { x: 340, y: 888 },
  },
  origin: {
    key: "origin",
    navLabel: "Origin (Waterwheel)",
    badge: "02 / Initiation & Motivation",
    title: "Origin: The Waterwheel of Initiation",
    subtitle: "Public Needs Setting Engineering in Motion",
    body: "We conducted iterative stakeholder interviews and follow‑up re‑interviews guided by the **3i/CIRC framework**, progressively narrowing our focus to recurrence prevention for postoperative residual lesions in triple‑negative breast cancer (TNBC). We selected therapeutic tumor vaccines as our candidate intervention and reoriented educational outreach towards subtype‑specific disease awareness and patient‑centered risk communication.",
    targetSectionId: "hp-origin",
    targetSectionLabel: "03 Origin: Project Motivation",
    bubbleStyle: {
      bottom: "6%",
      right: "4%",
      width: "370px",
    },
    indicatorPoint: { x: 895, y: 860 },
    connectorEnd: { x: 1220, y: 860 },
    connectorLabelPos: { x: 1240, y: 868 },
  },
  project: {
    key: "project",
    navLabel: "Project (Aqueduct)",
    badge: "03 / Iterative Aqueducts",
    title: "Project: Rising Aqueducts of Iteration",
    subtitle: "Continuous Feedback-Driven Design Refinements",
    body: "This project develops a **circRNA-based prophylactic therapy** for residual postoperative triple-negative breast cancer lesions. It converts clinical needs into molecular plasmid design. With expert guidance, the team selected multiple target antigens and built a dry-lab analysis pipeline. The team conducted public perception surveys and ethical reviews. The study includes plasmid design and in vitro and in vivo tests, balancing scientific evidence with practical constraints for preclinical research.",
    targetSectionId: "hp-project",
    targetSectionLabel: "04 Project: Iterative Design Cycles",
    bubbleStyle: {
      top: "14%",
      right: "4%",
      width: "370px",
    },
    indicatorPoint: { x: 1180, y: 440 },
    connectorEnd: { x: 1440, y: 440 },
    connectorLabelPos: { x: 1460, y: 448 },
  },
  return: {
    key: "return",
    navLabel: "Return (Waterfall)",
    badge: "04 / Benefiting Society",
    title: "Return: Waterfall Stepping Out of the Lab",
    subtitle: "Closing the Loop: Knowledge and Solutions for Society",
    body: "Guided by the 3i/CIRC framework across six stakeholder categories, we shifted the question from whether CirCure was technically feasible to **what evidence, safeguards, and institutional conditions responsible implementation would require**. Dialogue with patients and families, experts, public and safety stakeholders, and four industry partners clarified patient priorities, research and communication boundaries, affordability concerns, and translation challenges. The Return phase established an evidence-aligned pathway that now guides our Wiki, education, and public communication.",
    targetSectionId: "hp-overview",
    targetSectionLabel: "01 Overview: Closing the Cycle",
    bubbleStyle: {
      top: "16%",
      left: "5%",
      width: "360px",
    },
    indicatorPoint: { x: 745, y: 380 },
    connectorEnd: { x: 440, y: 380 },
    connectorLabelPos: { x: 340, y: 388 },
  },
};

const isDev = import.meta.env.DEV;

export function HpInteractiveWaterfall() {
  const containerRef = useRef<HTMLElement>(null);

  const [activeKey, setActiveKey] = useState<HotspotKey>("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [manualFocus, setManualFocus] = useState<boolean | null>(null);

  const activeData = HOTSPOTS[activeKey];

  // Smooth cinematic masking: active on tab click or scroll past threshold
  const isCore =
    manualFocus !== null
      ? manualFocus
      : scrollProgress >= 0.26;

  // Stage 3: Water stream emerges from top to bottom behind the house
  // Flows smoothly along path from scrollProgress 0.50 to 0.92
  const streamProgress =
    manualFocus === false
      ? 0
      : manualFocus === true
      ? 1
      : scrollProgress >= 0.50
      ? Math.max(0, Math.min(1, (scrollProgress - 0.50) / 0.40))
      : 0;

  // Pinned scroll listener: card stays frozen in viewport while mouse wheel scrolls from 0 to 1
  useEffect(() => {
    let lastScrollY = window.scrollY;
    let frame = 0;

    const handleScroll = () => {
      frame = 0;
      const container = containerRef.current;
      if (!container) return;

      // Reset manual click override if user performs substantial scroll (>80px)
      if (Math.abs(window.scrollY - lastScrollY) > 80) {
        setManualFocus(null);
        lastScrollY = window.scrollY;
      }

      const rect = container.getBoundingClientRect();
      const topOffset = 78;
      const pinDistance = rect.height - window.innerHeight;

      if (pinDistance > 0) {
        const scrolled = topOffset - rect.top;
        const progress = Math.max(0, Math.min(1, scrolled / pinDistance));
        setScrollProgress(progress);
        if (progress < 0.20 && manualFocus === null) {
          setActiveKey("overview");
        }
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(handleScroll);
    };
    const observer = new ResizeObserver(requestUpdate);
    if (containerRef.current) observer.observe(containerRef.current);
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    window.visualViewport?.addEventListener("resize", requestUpdate, { passive: true });
    handleScroll();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.visualViewport?.removeEventListener("resize", requestUpdate);
    };
  }, [manualFocus]);

  const handleSelectTab = (key: HotspotKey) => {
    setActiveKey(key);
    if (key === "overview") {
      setManualFocus(false); // Reveal full landscape
    } else {
      setManualFocus(true); // Focus on central core
    }
  };

  const handleJumpToSection = useCallback((sectionId: string) => {
    const target = document.getElementById(sectionId);
    const inner = document.querySelector<HTMLElement>(".route-frame__scroll");
    if (target) {
      scrollReaderToTarget(target, inner, "smooth");
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="hp-waterfall-pinned-container"
      aria-label="Integrated Human Practices Interactive Map"
    >
      <div className="hp-waterfall-sticky-stage">
        <div className="hp-waterfall-card">
          {/* Visual Stage */}
          <div className="hp-waterfall-stage-wrapper">
            <div className="hp-waterfall-stage">
              {/* 1. Opening Layer: Full Landscape Animated WebP (Continuous loop, ONLY visible in Stage 1 / Overview) */}
              <QueuedImage
                src={isDev ? waterfallFullWebpLocal : WATERFALL_LOOP_CDN}
                data-page-fallback-src={waterfallFullWebpLocal}
                alt="Human Practices Waterfall Overview"
                className={`hp-waterfall-media hp-media-full ${isCore ? "is-hidden" : ""}`}
                aria-hidden={isCore}
              />

              {/* 2. Middle Layer: Winding River Stream Animated Reveal (Behind Core Building) */}
              <svg
                className="hp-waterfall-media hp-media-stream"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
              >
                <defs>
                  <mask id="hpStreamRevealMask">
                    <path
                      d="M 1700 100 Q 1550 95 1475.0 107.5 Q 1400 120 1325.0 150.0 Q 1250 180 1175.0 205.0 Q 1100 230 1030.0 235.0 Q 960 240 880.0 230.0 Q 800 220 725.0 200.0 Q 650 180 575.0 162.5 Q 500 145 425.0 145.0 Q 350 145 295.0 157.5 Q 240 170 200.0 200.0 Q 160 230 165.0 270.0 Q 170 310 205.0 350.0 Q 240 390 310.0 430.0 Q 380 470 405.0 510.0 Q 430 550 415.0 595.0 Q 400 640 370.0 680.0 Q 340 720 305.0 760.0 Q 270 800 240.0 835.0 Q 210 870 225.0 895.0 Q 240 920 295.0 945.0 Q 350 970 415.0 1000.0 Q 480 1030 565.0 1037.5 L 650 1045"
                      fill="none"
                      stroke="white"
                      strokeWidth="300"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      pathLength="100"
                      strokeDasharray="100"
                      strokeDashoffset={100 * (1 - streamProgress)}
                      style={{
                        transition:
                          manualFocus !== null
                            ? "stroke-dashoffset 0.6s ease-in-out"
                            : "none",
                      }}
                    />
                  </mask>
                </defs>
                <QueuedSvgImage
                  href={isDev ? waterfallStreamWebpLocal : WATERFALL_STREAM_CDN}
                  data-page-fallback-src={waterfallStreamWebpLocal}
                  width="1920"
                  height="1080"
                  mask="url(#hpStreamRevealMask)"
                  style={{
                    opacity: isCore && streamProgress > 0.01 ? 1 : 0,
                    transition: "opacity 0.25s ease",
                  }}
                />
              </svg>

              {/* Use the bundled animation with corrected frame replacement flags. */}
              <QueuedImage
                src={waterfallCoreWebpLocal}
                alt="Human Practices Core Framework"
                className={`hp-waterfall-media hp-media-core ${isCore ? "is-active" : ""}`}
                aria-hidden={!isCore}
              />

              {/* 3. SVG Interactive Hotspots Layer */}
              <svg
                className="hp-waterfall-svg"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="xMidYMid meet"
                aria-hidden="true"
                style={{ outline: "none" }}
              >
                <defs>
                  <filter id="hpRedGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 1. Human Pool Hotspot (Placed FIRST in DOM so it sits at the bottom layer) */}
                <polygon
                  points={HUMAN_CONTOUR}
                  className={`hp-hotspot-shape hp-hotspot-human ${activeKey === "human" ? "is-active" : ""}`}
                  onClick={() => handleSelectTab("human")}
                  tabIndex={0}
                  role="button"
                  aria-label="Public Pool: Human stakeholder phase"
                  onKeyDown={(e) => e.key === "Enter" && handleSelectTab("human")}
                  style={{ outline: "none" }}
                />

                {/* 2. Project Aqueduct Hotspot */}
                <polygon
                  points={PROJECT_CONTOUR}
                  className={`hp-hotspot-shape hp-hotspot-project ${activeKey === "project" ? "is-active" : ""}`}
                  onClick={() => handleSelectTab("project")}
                  tabIndex={0}
                  role="button"
                  aria-label="Aqueducts: Project iteration phase"
                  onKeyDown={(e) => e.key === "Enter" && handleSelectTab("project")}
                  style={{ outline: "none" }}
                />

                {/* 3. Return Waterfall Hotspot */}
                <polygon
                  points={RETURN_CONTOUR}
                  className={`hp-hotspot-shape hp-hotspot-return ${activeKey === "return" ? "is-active" : ""}`}
                  onClick={() => handleSelectTab("return")}
                  tabIndex={0}
                  role="button"
                  aria-label="Waterfall: Return phase"
                  onKeyDown={(e) => e.key === "Enter" && handleSelectTab("return")}
                  style={{ outline: "none" }}
                />

                {/* 4. Origin Waterwheel Hotspot (Placed LAST in DOM so it sits ON TOP of Human Pool) */}
                <polygon
                  points={ORIGIN_CONTOUR}
                  className={`hp-hotspot-shape hp-hotspot-origin ${activeKey === "origin" ? "is-active" : ""}`}
                  onClick={() => handleSelectTab("origin")}
                  tabIndex={0}
                  role="button"
                  aria-label="Waterwheel: Origin initiation phase"
                  onKeyDown={(e) => e.key === "Enter" && handleSelectTab("origin")}
                  style={{ outline: "none" }}
                />

              {/* Active Connector Lines and Indicator Dots */}
              {activeData.indicatorPoint && activeData.connectorEnd && (
                <g className="hp-callout-overlay">
                  {/* Leader line */}
                  <line
                    x1={activeData.indicatorPoint.x}
                    y1={activeData.indicatorPoint.y}
                    x2={activeData.connectorEnd.x}
                    y2={activeData.connectorEnd.y}
                    className="hp-connector-line"
                  />
                  {/* Endpoint terminal dot */}
                  <circle
                    cx={activeData.connectorEnd.x}
                    cy={activeData.connectorEnd.y}
                    r={5}
                    className="hp-connector-endpoint"
                  />
                  {/* Callout text label */}
                  {activeData.connectorLabelPos && (
                    <text
                      x={activeData.connectorLabelPos.x}
                      y={activeData.connectorLabelPos.y}
                      className="hp-connector-text"
                    >
                      {activeData.key}
                    </text>
                  )}
                  {/* Pulsing indicator at origin */}
                  <g className="hp-hotspot-dot">
                    <circle
                      cx={activeData.indicatorPoint.x}
                      cy={activeData.indicatorPoint.y}
                      r={7}
                      className="hp-dot-core"
                    />
                    <circle
                      cx={activeData.indicatorPoint.x}
                      cy={activeData.indicatorPoint.y}
                      r={7}
                      className="hp-dot-ring"
                    />
                  </g>
                </g>
              )}
            </svg>

            {/* Floating Speech Bubble (Desktop view) */}
            {activeKey !== "overview" && (
              <div
                className="hp-stage-bubble"
                style={activeData.bubbleStyle}
                role="region"
                aria-live="polite"
              >
                <button
                  type="button"
                  className="hp-bubble-close"
                  onClick={() => handleSelectTab("overview")}
                  aria-label="Back to overview"
                >
                  ✕
                </button>
                <div className="hp-bubble-kicker">{activeData.badge}</div>
                <h3 className="hp-bubble-title">{activeData.title}</h3>
                <p className="hp-bubble-body">{linkify(activeData.body)}</p>
                <button
                  type="button"
                  className="hp-bubble-action-btn"
                  onClick={() => handleJumpToSection(activeData.targetSectionId)}
                >
                  <span>Read &quot;{activeData.targetSectionLabel}&quot;</span>
                  <span aria-hidden="true">↓</span>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className="hp-waterfall-nav" aria-label="Waterfall sections navigation">
          <div className="hp-waterfall-tabs">
            {(Object.keys(HOTSPOTS) as HotspotKey[]).map((key) => {
              const item = HOTSPOTS[key];
              const isActive = activeKey === key;
              return (
                <button
                  key={key}
                  type="button"
                  className={`hp-waterfall-tab-btn ${isActive ? "is-active" : ""}`}
                  onClick={() => handleSelectTab(key)}
                  aria-pressed={isActive}
                >
                  <span className="hp-tab-badge" aria-hidden="true" />
                  <span>{item.navLabel}</span>
                </button>
              );
            })}
          </div>
        </nav>
      </div>
    </div>
  </section>
);
}
