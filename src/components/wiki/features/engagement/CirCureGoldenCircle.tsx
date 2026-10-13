import { useId, useState } from "react";
import {
  goldenCircleTopics,
  type GoldenCircleTopic,
} from "../../../../data/engagement/entrepreneurshipPage";

export function CirCureGoldenCircle() {
  const id = useId();
  const [activeId, setActiveId] = useState<"why" | "what" | "how" | null>(null);

  return (
    <div
      className="circure-golden-circle"
      role="region"
      aria-label="CirCure Value Proposition: Golden Circle"
    >
      {/* Decorative header */}
      <div className="circure-golden-circle__header">
        <span className="circure-golden-circle__eyebrow">
          Core Value Proposition
        </span>
        <h3 className="circure-golden-circle__heading">
          The Golden Circle Framework
        </h3>
        <p className="circure-golden-circle__lede">
          Why triple-negative breast cancer (TNBC) urgently demands novel targeted
          therapies, what CirCure delivers as a multi-epitope circular RNA vaccine
          prototype, and how our systematic translational workflow executes.
        </p>
      </div>

      {/* Interactive 3-way Venn Stage */}
      <div className="circure-golden-circle__stage">
        {/* SVG Watercolor Graphic Layer */}
        <svg
          className="circure-golden-circle__svg"
          viewBox="0 0 800 700"
          aria-hidden="true"
        >
          <defs>
            <filter
              id={`${id}-venn-watercolor`}
              x="-20%"
              y="-20%"
              width="140%"
              height="140%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.04"
                numOctaves="3"
                seed="12"
                result="grain"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="grain"
                scale="4"
                xChannelSelector="R"
                yChannelSelector="G"
              />
              <feGaussianBlur stdDeviation="0.45" />
            </filter>

            <linearGradient id={`${id}-why-wash`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#d8cbe7" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#ede5f7" stopOpacity="0.68" />
            </linearGradient>

            <linearGradient id={`${id}-what-wash`} x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#f5ccd9" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#fdebf0" stopOpacity="0.68" />
            </linearGradient>

            <linearGradient id={`${id}-how-wash`} x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#fce7a2" stopOpacity="0.82" />
              <stop offset="100%" stopColor="#fff8dd" stopOpacity="0.68" />
            </linearGradient>
          </defs>

          {/* Center blending aura */}
          <circle
            cx="400"
            cy="390"
            r="110"
            fill="#f7f0e6"
            opacity="0.9"
            filter={`url(#${id}-venn-watercolor)`}
          />

          {/* WHY Circle (Top) */}
          <g
            className={`circure-golden-circle__svg-circle circure-golden-circle__svg-circle--why ${
              activeId === "why" ? "is-active" : ""
            }`}
            filter={`url(#${id}-venn-watercolor)`}
          >
            <circle
              cx="400"
              cy="235"
              r="178"
              fill={`url(#${id}-why-wash)`}
              stroke="#baa3cf"
              strokeWidth="2.5"
            />
            <circle
              cx="392"
              cy="225"
              r="162"
              fill="#c6b4d8"
              opacity="0.18"
            />
          </g>

          {/* WHAT Circle (Bottom Left) */}
          <g
            className={`circure-golden-circle__svg-circle circure-golden-circle__svg-circle--what ${
              activeId === "what" ? "is-active" : ""
            }`}
            filter={`url(#${id}-venn-watercolor)`}
          >
            <circle
              cx="260"
              cy="470"
              r="178"
              fill={`url(#${id}-what-wash)`}
              stroke="#e4a1b9"
              strokeWidth="2.5"
            />
            <circle
              cx="252"
              cy="460"
              r="162"
              fill="#e8b5cd"
              opacity="0.18"
            />
          </g>

          {/* HOW Circle (Bottom Right) */}
          <g
            className={`circure-golden-circle__svg-circle circure-golden-circle__svg-circle--how ${
              activeId === "how" ? "is-active" : ""
            }`}
            filter={`url(#${id}-venn-watercolor)`}
          >
            <circle
              cx="540"
              cy="470"
              r="178"
              fill={`url(#${id}-how-wash)`}
              stroke="#eed074"
              strokeWidth="2.5"
            />
            <circle
              cx="548"
              cy="460"
              r="162"
              fill="#ffdf7b"
              opacity="0.18"
            />
          </g>

          {/* Intersection accents and center badge */}
          <g className="circure-golden-circle__core-emblem">
            <circle
              cx="400"
              cy="390"
              r="34"
              fill="#ffffff"
              stroke="#bca7cb"
              strokeWidth="2"
              opacity="0.95"
            />
            {/* circRNA loop icon */}
            <circle
              cx="400"
              cy="390"
              r="22"
              fill="none"
              stroke="#835c9b"
              strokeWidth="2.8"
              strokeDasharray="4 2"
            />
            <circle cx="400" cy="368" r="4" fill="#835c9b" />
            <circle cx="419" cy="401" r="3.2" fill="#d26084" />
            <circle cx="381" cy="401" r="3.2" fill="#c49727" />
          </g>
        </svg>

        {/* Crisp HTML Interactive Overlay Cards */}
        <div className="circure-golden-circle__cards">
          {goldenCircleTopics.map((topic: GoldenCircleTopic) => {
            const isActive = activeId === topic.id;
            return (
              <div
                key={topic.id}
                className={`circure-golden-circle__card circure-golden-circle__card--${topic.id} ${
                  isActive ? "is-active" : ""
                } ${activeId && !isActive ? "is-dimmed" : ""}`}
                data-orbit-tone={topic.tone}
                onPointerEnter={() => setActiveId(topic.id)}
                onPointerLeave={() => setActiveId(null)}
                onClick={() =>
                  setActiveId((prev) => (prev === topic.id ? null : topic.id))
                }
                tabIndex={0}
                role="article"
                aria-label={`${topic.title}: ${topic.lead}`}
              >
                <div className="circure-golden-circle__card-inner">
                  <span className="circure-golden-circle__tag">
                    {topic.title}
                  </span>
                  <div className="circure-golden-circle__line-accent" />

                  <p className="circure-golden-circle__lead">
                    {topic.lead}
                  </p>

                  <p className="circure-golden-circle__body">
                    {topic.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer hint */}
      <div className="circure-golden-circle__footer">
        <span className="circure-golden-circle__pill-indicator">
          CirCure Therapeutic circRNA Vaccine Framework
        </span>
      </div>
    </div>
  );
}
