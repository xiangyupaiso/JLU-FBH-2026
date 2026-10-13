import { useEffect, useId, useState } from "react";
import {
  stakeholders3DList,
  type Stakeholder3DItem,
} from "../../../../data/engagement/entrepreneurshipPage";

// Exact 3D projected coordinates for SVG viewBox 0 0 960 640
const NODE_COORDINATES: Record<
  number,
  { cx: number; cy: number; floorY: number }
> = {
  1: { cx: 580, cy: 416, floorY: 494 }, // Patients: (9, 4, 10)
  2: { cx: 580, cy: 280, floorY: 454 }, // Clinical: (9, 9, 8)
  3: { cx: 332, cy: 400, floorY: 434 }, // Experts: (8, 7, 5)
  4: { cx: 504, cy: 268, floorY: 410 }, // Industry: (8, 9, 8)
  5: { cx: 252, cy: 244, floorY: 406 }, // Regulatory: (7, 10, 4)
  6: { cx: 294, cy: 404, floorY: 470 }, // Commercialization: (7, 8, 6)
  7: { cx: 430, cy: 178, floorY: 364 }, // Team: (10, 10, 9)
};

function StakeholderIcon({
  type,
  size = 18,
}: {
  type: Stakeholder3DItem["iconType"];
  size?: number;
}) {
  switch (type) {
    case "patient":
      // Patient ribbon / heart
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      );
    case "hospital":
      // Hospital / healthcare
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M12 6v4" />
          <path d="M10 8h4" />
          <path d="M18 20V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16" />
          <path d="M2 20h20" />
          <path d="M14 20v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
        </svg>
      );
    case "microscope":
      // Microscope / science
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 18h8" />
          <path d="M3 22h18" />
          <path d="m14 22 3-3 3 3" />
          <path d="M9 14a6 6 0 0 0 6 6" />
          <path d="M12 6 9 3 6 6l3 3" />
          <path d="m12 6 3 3-4 4-3-3" />
        </svg>
      );
    case "industry":
      // Factory / industry
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
          <path d="M17 18h1" />
          <path d="M12 18h1" />
          <path d="M7 18h1" />
        </svg>
      );
    case "policy":
      // Columns / government / regulation
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3 21h18" />
          <path d="M3 10h18" />
          <path d="m12 3 9 7H3Z" />
          <path d="M6 10v11" />
          <path d="M10 10v11" />
          <path d="M14 10v11" />
          <path d="M18 10v11" />
        </svg>
      );
    case "finance":
      // Coins / investment
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="8" cy="8" r="6" />
          <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
          <path d="M7 6h2v4H7z" />
          <path d="m14 14 2 2" />
        </svg>
      );
    case "team":
    default:
      // Team / Users
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      );
  }
}

export function StakeholderMatrix3D() {
  const id = useId();
  const [activeId, setActiveId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [viewMode, setViewMode] = useState<"3d" | "ledger">("3d");

  const activeItem =
    activeId !== null
      ? stakeholders3DList.find((item) => item.id === activeId) ?? null
      : null;

  // Keyboard navigation for closing modal
  useEffect(() => {
    if (!activeItem) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveId(null);
      } else if (e.key === "ArrowRight") {
        setActiveId((prev) => (prev === null || prev >= 7 ? 1 : prev + 1));
      } else if (e.key === "ArrowLeft") {
        setActiveId((prev) => (prev === null || prev <= 1 ? 7 : prev - 1));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeItem]);

  return (
    <div
      className="stakeholder-matrix-3d"
      role="region"
      aria-label="3D Stakeholder Interest, Influence and Impact Matrix"
    >
      {/* Header controls */}
      <div className="stakeholder-matrix-3d__header">
        <div className="stakeholder-matrix-3d__titles">
          <span className="stakeholder-matrix-3d__eyebrow">
            Multi-Dimensional Stakeholder Mapping
          </span>
          <h3 className="stakeholder-matrix-3d__heading">
            Interest × Influence × Impact Framework
          </h3>
          <p className="stakeholder-matrix-3d__lede">
            Systematic stratification of 7 key stakeholder groups across three
            interlocking axes to calibrate risk, translation milestones, and
            shared value delivery.
          </p>
        </div>

        {/* View Toggle */}
        <div className="stakeholder-matrix-3d__view-toggle">
          <button
            type="button"
            className={`stakeholder-matrix-3d__toggle-btn ${
              viewMode === "3d" ? "is-active" : ""
            }`}
            onClick={() => setViewMode("3d")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m21 16-9 5-9-5V8l9-5 9 5Z" />
              <path d="M12 21V11" />
              <path d="m3 8 9 5 9-5" />
            </svg>
            3D Spatial Matrix
          </button>
          <button
            type="button"
            className={`stakeholder-matrix-3d__toggle-btn ${
              viewMode === "ledger" ? "is-active" : ""
            }`}
            onClick={() => setViewMode("ledger")}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="8" y1="6" x2="21" y2="6" />
              <line x1="8" y1="12" x2="21" y2="12" />
              <line x1="8" y1="18" x2="21" y2="18" />
              <line x1="3" y1="6" x2="3.01" y2="6" />
              <line x1="3" y1="12" x2="3.01" y2="12" />
              <line x1="3" y1="18" x2="3.01" y2="18" />
            </svg>
            Complete Ledger View
          </button>
        </div>
      </div>

      {viewMode === "3d" ? (
        <div className="stakeholder-matrix-3d__main-row">
          {/* Left: 3D Isometric Visualization Canvas */}
          <div className="stakeholder-matrix-3d__stage">
            <svg
              className="stakeholder-matrix-3d__svg"
              viewBox="0 0 960 640"
              aria-hidden="true"
            >
              <defs>
                {/* Stage Gradients */}
                <linearGradient
                  id={`${id}-grad-left`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#dbeafe" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#e0f2fe" stopOpacity="0.15" />
                </linearGradient>

                <linearGradient
                  id={`${id}-grad-back`}
                  x1="0"
                  y1="1"
                  x2="1"
                  y2="0"
                >
                  <stop offset="0%" stopColor="#ede9fe" stopOpacity="0.45" />
                  <stop offset="100%" stopColor="#fce7f3" stopOpacity="0.2" />
                </linearGradient>

                <linearGradient
                  id={`${id}-grad-floor`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#eff6ff" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#f5f3ff" stopOpacity="0.25" />
                </linearGradient>

                {/* Shading gradients for 7 spheres */}
                {stakeholders3DList.map((item) => (
                  <radialGradient
                    key={item.id}
                    id={`${id}-sphere-grad-${item.id}`}
                    cx="35%"
                    cy="30%"
                    r="68%"
                  >
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="35%" stopColor={item.color} stopOpacity="1" />
                    <stop
                      offset="100%"
                      stopColor={item.color}
                      stopOpacity="0.75"
                    />
                  </radialGradient>
                ))}
              </defs>

              {/* Box Back Wall (Impact vs Interest) */}
              <polygon
                points="520,345 680,478 680,195 426,110"
                fill={`url(#${id}-grad-back)`}
                stroke="#c7d2fe"
                strokeWidth="1.2"
              />

              {/* Box Left Wall (Impact vs Influence) */}
              <polygon
                points="112,445 520,345 426,110 112,125"
                fill={`url(#${id}-grad-left)`}
                stroke="#bae6fd"
                strokeWidth="1.2"
              />

              {/* Box Floor Plane (Interest vs Influence) */}
              <polygon
                points="272,578 680,478 520,345 112,445"
                fill={`url(#${id}-grad-floor)`}
                stroke="#cbd5e1"
                strokeWidth="1.2"
              />

              {/* Floor Subdivided Grid Lines */}
              {/* Lines parallel to Interest axis */}
              <line
                x1="232"
                y1="545"
                x2="640"
                y2="445"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="192"
                y1="511"
                x2="600"
                y2="411"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="152"
                y1="478"
                x2="560"
                y2="378"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />

              {/* Lines parallel to Influence axis */}
              <line
                x1="374"
                y1="553"
                x2="214"
                y2="420"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="476"
                y1="528"
                x2="316"
                y2="395"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />
              <line
                x1="578"
                y1="503"
                x2="418"
                y2="370"
                stroke="#93c5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.6"
              />

              {/* Left Wall Grid Lines (Horizontal) */}
              <line
                x1="112"
                y1="365"
                x2="520"
                y2="265"
                stroke="#7dd3fc"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="112"
                y1="285"
                x2="520"
                y2="185"
                stroke="#7dd3fc"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="112"
                y1="205"
                x2="520"
                y2="105"
                stroke="#7dd3fc"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Back Wall Grid Lines (Horizontal) */}
              <line
                x1="520"
                y1="265"
                x2="680"
                y2="398"
                stroke="#c4b5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.5"
              />
              <line
                x1="520"
                y1="185"
                x2="680"
                y2="318"
                stroke="#c4b5fd"
                strokeDasharray="3 3"
                strokeWidth="1"
                opacity="0.5"
              />

              {/* Primary 3D Axes */}
              {/* 1. Impact Axis (Vertical) */}
              <g className="stakeholder-matrix-3d__axis stakeholder-matrix-3d__axis--impact">
                <line
                  x1="112"
                  y1="445"
                  x2="112"
                  y2="125"
                  stroke="#1d4ed8"
                  strokeWidth="3.5"
                />
                {/* Arrowhead */}
                <polygon points="112,112 106,128 118,128" fill="#1d4ed8" />
                {/* Spherical origin base indicator */}
                <circle cx="112" cy="445" r="7" fill="#1d4ed8" />

                {/* Level Pills */}
                <g transform="translate(42, 136)">
                  <rect
                    width="52"
                    height="24"
                    rx="12"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="26"
                    y="16"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="12"
                    fontWeight="600"
                  >
                    High
                  </text>
                </g>
                <g transform="translate(32, 280)">
                  <rect
                    width="62"
                    height="24"
                    rx="12"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="31"
                    y="16"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="12"
                    fontWeight="600"
                  >
                    Medium
                  </text>
                </g>
                <g transform="translate(42, 424)">
                  <rect
                    width="52"
                    height="24"
                    rx="12"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="26"
                    y="16"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="12"
                    fontWeight="600"
                  >
                    Low
                  </text>
                </g>

                {/* Axis Name Label */}
                <text
                  x="82"
                  y="245"
                  transform="rotate(-90 82 245)"
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontSize="22"
                  fontWeight="700"
                  letterSpacing="0.8px"
                >
                  Impact
                </text>
              </g>

              {/* 2. Influence Axis (Depth) */}
              <g className="stakeholder-matrix-3d__axis stakeholder-matrix-3d__axis--influence">
                <line
                  x1="272"
                  y1="578"
                  x2="112"
                  y2="445"
                  stroke="#1d4ed8"
                  strokeWidth="3.5"
                />
                <circle cx="272" cy="578" r="7" fill="#1d4ed8" />

                {/* Influence pills */}
                <g transform="translate(196, 546)">
                  <rect
                    width="48"
                    height="22"
                    rx="11"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="24"
                    y="15"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="11"
                    fontWeight="600"
                  >
                    High
                  </text>
                </g>
                <g transform="translate(322, 592)">
                  <rect
                    width="48"
                    height="22"
                    rx="11"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="24"
                    y="15"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="11"
                    fontWeight="600"
                  >
                    Low
                  </text>
                </g>

                {/* Axis Name Label */}
                <text
                  x="184"
                  y="522"
                  transform="rotate(38 184 522)"
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontSize="19"
                  fontWeight="700"
                >
                  Influence
                </text>
              </g>

              {/* 3. Interest Axis (Front-Right) */}
              <g className="stakeholder-matrix-3d__axis stakeholder-matrix-3d__axis--interest">
                <line
                  x1="272"
                  y1="578"
                  x2="698"
                  y2="472"
                  stroke="#1d4ed8"
                  strokeWidth="3.5"
                />
                <polygon points="710,469 693,464 699,478" fill="#1d4ed8" />

                {/* Interest Pills */}
                <g transform="translate(642, 488)">
                  <rect
                    width="52"
                    height="24"
                    rx="12"
                    fill="#eff6ff"
                    stroke="#3b82f6"
                    strokeWidth="1.5"
                  />
                  <text
                    x="26"
                    y="16"
                    textAnchor="middle"
                    fill="#1d4ed8"
                    fontSize="12"
                    fontWeight="600"
                  >
                    High
                  </text>
                </g>

                {/* Axis Name Label */}
                <text
                  x="510"
                  y="534"
                  transform="rotate(-14 510 534)"
                  textAnchor="middle"
                  fill="#1e3a8a"
                  fontSize="22"
                  fontWeight="700"
                >
                  Interest
                </text>
              </g>

              {/* 7 Stakeholder 3D Nodes & Stems */}
              {stakeholders3DList.map((item) => {
                const pos = NODE_COORDINATES[item.id];
                if (!pos) return null;
                const isSelected = activeId === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <g
                    key={item.id}
                    className={`stakeholder-matrix-3d__node-group ${
                      isSelected ? "is-selected" : ""
                    } ${isHovered ? "is-hovered" : ""}`}
                    onClick={() => setActiveId(item.id)}
                    onPointerEnter={() => setHoveredId(item.id)}
                    onPointerLeave={() => setHoveredId(null)}
                    style={{ cursor: "pointer" }}
                    role="button"
                    tabIndex={0}
                    aria-label={`${item.id}: ${item.name}`}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setActiveId(item.id);
                      }
                    }}
                  >
                    {/* Vertical Drop-line Stem */}
                    <line
                      x1={pos.cx}
                      y1={pos.cy}
                      x2={pos.cx}
                      y2={pos.floorY}
                      stroke={item.color}
                      strokeDasharray="4 3"
                      strokeWidth={isSelected ? 3 : 2}
                      opacity={isSelected ? 1 : 0.85}
                    />

                    {/* Floor Landing Shadow Ellipse */}
                    <ellipse
                      cx={pos.cx}
                      cy={pos.floorY}
                      rx={isSelected ? 14 : 10}
                      ry={isSelected ? 7 : 5}
                      fill={item.color}
                      opacity={isSelected ? 0.6 : 0.35}
                    />

                    {/* Active Pulse Ring */}
                    {(isSelected || isHovered) && (
                      <circle
                        cx={pos.cx}
                        cy={pos.cy}
                        r="34"
                        fill="none"
                        stroke={item.color}
                        strokeWidth="2.5"
                        opacity="0.6"
                        className="stakeholder-matrix-3d__pulse"
                      />
                    )}

                    {/* 3D Sphere Body */}
                    <circle
                      cx={pos.cx}
                      cy={pos.cy}
                      r="24"
                      fill={`url(#${id}-sphere-grad-${item.id})`}
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      filter="drop-shadow(0 4px 8px rgba(0,0,0,0.18))"
                    />

                    {/* Prominent Number Badge (Top-right pill) */}
                    <g transform={`translate(${pos.cx + 14}, ${pos.cy - 16})`}>
                      <circle
                        cx="0"
                        cy="0"
                        r="11"
                        fill={item.color}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                      <text
                        x="0"
                        y="3.5"
                        textAnchor="middle"
                        fill="#ffffff"
                        fontSize="11"
                        fontWeight="800"
                      >
                        {item.id}
                      </text>
                    </g>

                    {/* Micro-Icon in center of sphere */}
                    <foreignObject
                      x={pos.cx - 11}
                      y={pos.cy - 11}
                      width="22"
                      height="22"
                      style={{ pointerEvents: "none" }}
                    >
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: "#ffffff",
                        }}
                      >
                        <StakeholderIcon type={item.iconType} size={15} />
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Right: Legend Panel matching Image 2 */}
          <div className="stakeholder-matrix-3d__legend">
            <div className="stakeholder-matrix-3d__legend-header">
              <span className="stakeholder-matrix-3d__legend-title">
                Stakeholder Registry
              </span>
              <span className="stakeholder-matrix-3d__legend-count">
                7 Groups
              </span>
            </div>

            <div className="stakeholder-matrix-3d__legend-list">
              {stakeholders3DList.map((item) => {
                const isSelected = activeId === item.id;
                const isHovered = hoveredId === item.id;

                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`stakeholder-matrix-3d__legend-item ${
                      isSelected ? "is-active" : ""
                    } ${isHovered ? "is-hovered" : ""}`}
                    onClick={() => setActiveId(item.id)}
                    onPointerEnter={() => setHoveredId(item.id)}
                    onPointerLeave={() => setHoveredId(null)}
                    style={
                      {
                        "--item-color": item.color,
                      } as React.CSSProperties
                    }
                  >
                    <span
                      className="stakeholder-matrix-3d__legend-badge"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.id}
                    </span>

                    <div className="stakeholder-matrix-3d__legend-info">
                      <span className="stakeholder-matrix-3d__legend-name">
                        {item.name}
                      </span>
                      <span className="stakeholder-matrix-3d__legend-cn">
                        {item.chineseName}
                      </span>
                    </div>

                    <span className="stakeholder-matrix-3d__legend-coords">
                      ({item.coordinates.interest}, {item.coordinates.influence},{" "}
                      {item.coordinates.impact})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        /* Complete Ledger View (Tabular Breakdown from Image 3 & 4) */
        <div className="stakeholder-matrix-3d__table-card">
          <div className="stakeholder-matrix-3d__table-wrapper">
            <table className="stakeholder-matrix-3d__table">
              <thead>
                <tr>
                  <th style={{ width: "60px" }}>#</th>
                  <th>Stakeholder Group (利益相关者)</th>
                  <th style={{ width: "130px" }}>Coordinates (X, Y, Z)</th>
                  <th>Interest (核心关切)</th>
                  <th>Impact (决策力与设计影响)</th>
                  <th>Influence (短期与长期效应)</th>
                </tr>
              </thead>
              <tbody>
                {stakeholders3DList.map((item) => (
                  <tr
                    key={item.id}
                    className={activeId === item.id ? "is-row-active" : ""}
                    onClick={() => setActiveId(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    <td>
                      <span
                        className="stakeholder-matrix-3d__legend-badge"
                        style={{ backgroundColor: item.color }}
                      >
                        {item.id}
                      </span>
                    </td>
                    <td>
                      <strong style={{ display: "block", color: "#1f2937" }}>
                        {item.name}
                      </strong>
                      <span style={{ fontSize: "13px", color: "#6b7280" }}>
                        {item.chineseName}
                      </span>
                    </td>
                    <td>
                      <code className="stakeholder-matrix-3d__code">
                        ({item.coordinates.interest}, {item.coordinates.influence},{" "}
                        {item.coordinates.impact})
                      </code>
                    </td>
                    <td>{item.details.interest}</td>
                    <td>{item.details.impact}</td>
                    <td>{item.details.influence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Floating Detail Highlight Modal (Image 4 Data) */}
      {activeItem ? (
        <div
          className="stakeholder-matrix-3d__modal-overlay"
          onClick={() => setActiveId(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${id}-modal-title`}
        >
          <div
            className="stakeholder-matrix-3d__modal-card"
            onClick={(e) => e.stopPropagation()}
            style={
              {
                "--stakeholder-color": activeItem.color,
              } as React.CSSProperties
            }
          >
            {/* Header */}
            <div className="stakeholder-matrix-3d__modal-header">
              <div className="stakeholder-matrix-3d__modal-badge-row">
                <span
                  className="stakeholder-matrix-3d__modal-pill"
                  style={{ backgroundColor: activeItem.color }}
                >
                  <StakeholderIcon type={activeItem.iconType} size={16} />
                  Group {activeItem.id}
                </span>

                <span className="stakeholder-matrix-3d__modal-coords-chip">
                  Interest: {activeItem.coordinates.interest} · Influence:{" "}
                  {activeItem.coordinates.influence} · Impact:{" "}
                  {activeItem.coordinates.impact}
                </span>
              </div>

              <div className="stakeholder-matrix-3d__modal-title-row">
                <div>
                  <h4
                    id={`${id}-modal-title`}
                    className="stakeholder-matrix-3d__modal-title"
                  >
                    {activeItem.name}
                  </h4>
                  <p className="stakeholder-matrix-3d__modal-subtitle">
                    {activeItem.chineseName}
                  </p>
                </div>

                <button
                  type="button"
                  className="stakeholder-matrix-3d__modal-close"
                  onClick={() => setActiveId(null)}
                  aria-label="Close dialog"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Structured 3-Dimension Body (From Image 4) */}
            <div className="stakeholder-matrix-3d__modal-grid">
              {/* 1. Interest */}
              <div className="stakeholder-matrix-3d__dim-card">
                <div className="stakeholder-matrix-3d__dim-header">
                  <span className="stakeholder-matrix-3d__dim-icon">🎯</span>
                  <span className="stakeholder-matrix-3d__dim-name">
                    Interest (核心诉求)
                  </span>
                </div>
                <p className="stakeholder-matrix-3d__dim-text">
                  {activeItem.details.interest}
                </p>
              </div>

              {/* 2. Impact */}
              <div className="stakeholder-matrix-3d__dim-card">
                <div className="stakeholder-matrix-3d__dim-header">
                  <span className="stakeholder-matrix-3d__dim-icon">⚡</span>
                  <span className="stakeholder-matrix-3d__dim-name">
                    Impact (决策与设计塑造)
                  </span>
                </div>
                <p className="stakeholder-matrix-3d__dim-text">
                  {activeItem.details.impact}
                </p>
              </div>

              {/* 3. Influence */}
              <div className="stakeholder-matrix-3d__dim-card stakeholder-matrix-3d__dim-card--full">
                <div className="stakeholder-matrix-3d__dim-header">
                  <span className="stakeholder-matrix-3d__dim-icon">🔄</span>
                  <span className="stakeholder-matrix-3d__dim-name">
                    Influence (短期参与与长期生态影响)
                  </span>
                </div>
                <p className="stakeholder-matrix-3d__dim-text">
                  {activeItem.details.influence}
                </p>
              </div>
            </div>

            {/* Stepper Footer */}
            <div className="stakeholder-matrix-3d__modal-footer">
              <button
                type="button"
                className="stakeholder-matrix-3d__step-btn"
                onClick={() =>
                  setActiveId((prev) =>
                    prev === null || prev <= 1 ? 7 : prev - 1
                  )
                }
              >
                ← Prev Group
              </button>

              <div className="stakeholder-matrix-3d__step-dots">
                {stakeholders3DList.map((st) => (
                  <button
                    key={st.id}
                    type="button"
                    className={`stakeholder-matrix-3d__step-dot ${
                      activeId === st.id ? "is-active" : ""
                    }`}
                    style={{
                      backgroundColor:
                        activeId === st.id ? st.color : "#d1d5db",
                    }}
                    onClick={() => setActiveId(st.id)}
                    aria-label={`Jump to group ${st.id}`}
                  />
                ))}
              </div>

              <button
                type="button"
                className="stakeholder-matrix-3d__step-btn"
                onClick={() =>
                  setActiveId((prev) =>
                    prev === null || prev >= 7 ? 1 : prev + 1
                  )
                }
              >
                Next Group →
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
