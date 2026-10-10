import { useState, useRef, useEffect, useCallback } from "react";
const waterfallFullImage = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/hp-waterfall-loop-0909d9ac3bdc-soconvert.webp";
const waterfallCoreImage = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/hp-waterfall-core-9ba42837caf0-soconvert.webp";
import {
  RETURN_CONTOUR,
  PROJECT_CONTOUR,
  ORIGIN_CONTOUR,
  HUMAN_CONTOUR,
} from "./hpContours";
import { scrollReaderToTarget } from "../../../../utils";
import "../../../../styles/features/hp-waterfall-interactive.css";

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
    body: "Within this loop, the pool stands for the public. At the project's inception, we reached out to clinical doctors, breast cancer patients, and community advocates. Through interviews and surveys, real-world demands filled our reservoir of inspiration, defining our project direction.",
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
    body: "The waterwheel symbolizes the project initiation phase—public demands set our project in motion. Energy from public participation drives the initial wheels of exploration, giving our team the momentum to innovate with rigorous protective care.",
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
    body: "As the waterwheel spins, water flows forward along ascending aqueducts. These rising aqueducts represent our continuously iterating and advancing project. Throughout development, we repeatedly engaged stakeholders and experts to adjust and mature our delivery system.",
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
    body: "Eventually, water plunges as a waterfall. The waterfall signifies the project stepping out of the laboratory to benefit the public. Through open educational kits, accessible clinical translation, and social advocacy, we return value to those who inspired us.",
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

export function HpInteractiveWaterfall() {
  const containerRef = useRef<HTMLElement>(null);

  const [activeKey, setActiveKey] = useState<HotspotKey>("overview");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [manualFocus, setManualFocus] = useState<boolean | null>(null);

  const activeData = HOTSPOTS[activeKey];

  // Instant cut between full landscape and core building (0 ghosting)
  // If user clicked a tab: manualFocus controls it (Overview = false, others = true)
  // Else (driven by scroll within the sticky container):
  // When scrollProgress < 0.45: false (Full Landscape)
  // When scrollProgress >= 0.45: true (Core Building)
  const isCore =
    manualFocus !== null
      ? manualFocus
      : scrollProgress >= 0.45;

  // Pinned scroll listener: card stays frozen in viewport while mouse wheel scrolls from 0 to 1
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
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
        if (progress < 0.2 && manualFocus === null) {
          setActiveKey("overview");
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
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
              {/* 1. Base Layer: Full Landscape Animation */}
              <img
                src={waterfallFullImage}
                className="hp-waterfall-video hp-video-full"
                style={{
                  opacity: isCore ? 0 : 1,
                  visibility: isCore ? "hidden" : "visible",
                }}
                alt="Animated overview of the Human Practices waterfall"
              />

              {/* 2. Top Layer: Focused Core Building Animation */}
              <img
                src={waterfallCoreImage}
                className="hp-waterfall-video hp-video-core"
                style={{
                  opacity: isCore ? 1 : 0,
                  visibility: isCore ? "visible" : "hidden",
                }}
                aria-hidden="true"
                alt=""
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
                <p className="hp-bubble-body">{activeData.body}</p>
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
