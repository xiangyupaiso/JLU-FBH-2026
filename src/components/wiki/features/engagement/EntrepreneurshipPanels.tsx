/* eslint-disable react-refresh/only-export-components */
import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import {
  entrepreneurshipConcerns,
  entrepreneurshipImpacts,
  type EntrepreneurshipOrbitTopic,
} from "../../../../data/engagement/entrepreneurshipPage";
import {
  AssumptionFunnel,
  DecisionProofTable,
  TradeoffOrbit,
} from "../EngagementFeatures";
import { CirCureGoldenCircle } from "./CirCureGoldenCircle";
import { StakeholderMatrix3D } from "./StakeholderMatrix3D";
import "../../../../styles/features/entrepreneurship-panels.css";

const concernPositions = [
  [320, 147],
  [478, 264],
  [418, 449],
  [222, 449],
  [162, 264],
];
const impactPositions = [
  [208, 198],
  [432, 198],
  [208, 422],
  [432, 422],
];
const concernRingTones = ["peach", "sage", "sky", "lavender", "rose"];

function CircRnaRing({ impacts }: { impacts: boolean }) {
  const radius = impacts ? 107 : 83;
  return (
    <g className="circure-orbit__rna">
      <circle
        className="circure-orbit__backbone"
        cx="320"
        cy="310"
        r={radius}
      />
      {Array.from({ length: 40 }, (_, index) => {
        const angle = (index / 40) * Math.PI * 2 - Math.PI / 2;
        const tone = impacts
          ? index === 5
            ? "lime"
            : index === 15
              ? "mauve"
              : index === 25
                ? "slate"
                : index === 35
                  ? "yellow"
                  : index % 4 === 0
                    ? "lavender"
                    : "sky"
          : concernRingTones[index % concernRingTones.length];
        const point = (r: number) => ({
          x: 320 + Math.cos(angle) * r,
          y: 310 + Math.sin(angle) * r,
        });
        const bead = point(radius);
        const outerBase = point(radius - 10);
        const innerBase = point(radius - 21);
        return (
          <g key={index} data-orbit-tone={tone}>
            <line
              className="circure-orbit__base"
              x1={outerBase.x}
              y1={outerBase.y}
              x2={innerBase.x}
              y2={innerBase.y}
            />
            <circle
              className="circure-orbit__bead"
              cx={bead.x}
              cy={bead.y}
              r={impacts ? 6 : 4.7}
            />
          </g>
        );
      })}
      <text className="circure-orbit__brand" x="320" y="305">
        CirCure
      </text>
      <text className="circure-orbit__subtitle" x="320" y="337">
        circRNA
      </text>
    </g>
  );
}

function CircureOrbitPanel({
  topics,
  impacts = false,
}: {
  topics: EntrepreneurshipOrbitTopic[];
  impacts?: boolean;
}) {
  const id = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const suppressFocusRef = useRef(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : topics[activeIndex];
  const positions = impacts ? impactPositions : concernPositions;
  const title = impacts
    ? "Positive Long-Term Impacts"
    : "Potential Problems and Solutions";
  const detailAbove =
    activeIndex !== null &&
    (impacts ? activeIndex >= 2 : activeIndex === 2 || activeIndex === 3);

  useEffect(() => {
    if (!active) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
    };
    const closeOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node))
        setActiveIndex(null);
    };
    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("pointerdown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("pointerdown", closeOutside);
    };
  }, [active]);

  const closeDetail = () => {
    setActiveIndex(null);
    suppressFocusRef.current = true;
    triggerRef.current?.focus({ preventScroll: true });
    suppressFocusRef.current = false;
  };

  return (
    <div
      ref={rootRef}
      className={`circure-orbit circure-orbit--${impacts ? "impacts" : "concerns"}`}
      role="group"
      aria-label={title}
      onPointerLeave={() => {
        if (!rootRef.current?.contains(document.activeElement))
          setActiveIndex(null);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setActiveIndex(null);
      }}
    >
      <svg
        className="circure-orbit__drawing"
        viewBox="0 0 640 570"
        aria-hidden="true"
      >
        <defs>
          <filter
            id={`${id}-watercolor`}
            x="-15%"
            y="-15%"
            width="130%"
            height="130%"
          >
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.045"
              numOctaves="3"
              seed="8"
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
          <path id={`${id}-title-arc`} d="M 55,166 Q 320,-30 585,166" />
        </defs>
        {impacts ? (
          <text className="circure-orbit__title circure-orbit__title--arched">
            <textPath
              href={`#${id}-title-arc`}
              startOffset="50%"
              textAnchor="middle"
            >
              {title}
            </textPath>
          </text>
        ) : (
          <text
            className="circure-orbit__title"
            x="320"
            y="45"
            textAnchor="middle"
          >
            {title}
          </text>
        )}
        <CircRnaRing impacts={impacts} />
        {topics.map((topic, index) => {
          const [x, y] = positions[index];
          const radius = impacts ? 32 : 64;
          return (
            <g
              className={`circure-orbit__wash ${activeIndex === index ? "is-active" : ""}`}
              data-orbit-tone={topic.tone}
              key={topic.id}
              filter={`url(#${id}-watercolor)`}
            >
              <circle
                className="circure-orbit__wash-base"
                cx={x}
                cy={y}
                r={radius}
              />
              <ellipse
                className="circure-orbit__wash-layer"
                cx={x - radius * 0.12}
                cy={y + radius * 0.04}
                rx={radius * 0.88}
                ry={radius * 0.94}
              />
              <ellipse
                className="circure-orbit__wash-light"
                cx={x + radius * 0.2}
                cy={y - radius * 0.16}
                rx={radius * 0.69}
                ry={radius * 0.72}
              />
            </g>
          );
        })}
      </svg>

      {topics.map((topic, index) => (
        <button
          key={topic.id}
          type="button"
          className={`circure-orbit__node circure-orbit__node--${topic.id}`}
          data-orbit-tone={topic.tone}
          aria-label={
            topic.group ? `${topic.group}: ${topic.title}` : topic.title
          }
          aria-expanded={activeIndex === index}
          aria-controls={activeIndex === index ? `${id}-detail` : undefined}
          onPointerEnter={(event) => {
            if (event.pointerType === "touch") return;
            triggerRef.current = event.currentTarget;
            setActiveIndex(index);
          }}
          onFocus={(event) => {
            if (suppressFocusRef.current) return;
            triggerRef.current = event.currentTarget;
            setActiveIndex(index);
          }}
          onClick={(event) => {
            triggerRef.current = event.currentTarget;
            setActiveIndex(index);
          }}
        >
          {topic.label.map((line) => (
            <span key={line}>{line}</span>
          ))}
        </button>
      ))}

      {impacts ? (
        <div className="circure-orbit__legend">
          <span>
            <i data-orbit-tone="yellow" />
            <i data-orbit-tone="lime" />
            Direct impacts
          </span>
          <span>
            <i data-orbit-tone="slate" />
            <i data-orbit-tone="mauve" />
            Indirect impacts
          </span>
        </div>
      ) : null}

      {active ? (
        <div
          id={`${id}-detail`}
          className={`circure-orbit__detail ${detailAbove ? "circure-orbit__detail--above" : ""}`}
          data-orbit-tone={active.tone}
          role="region"
          aria-labelledby={`${id}-detail-title`}
        >
          <button
            className="circure-orbit__close"
            type="button"
            aria-label="Close details"
            onClick={closeDetail}
          >
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
          {active.group ? (
            <p className="circure-orbit__detail-group">{active.group}</p>
          ) : null}
          <h3 id={`${id}-detail-title`}>{active.title}</h3>
          <p className="circure-orbit__detail-copy">{active.body}</p>
        </div>
      ) : null}
    </div>
  );
}

export function PotentialProblemsAndSolutions() {
  return <CircureOrbitPanel topics={entrepreneurshipConcerns} />;
}

export function PositiveLongTermImpacts() {
  return <CircureOrbitPanel topics={entrepreneurshipImpacts} impacts />;
}

export { CirCureGoldenCircle } from "./CirCureGoldenCircle";
export { StakeholderMatrix3D } from "./StakeholderMatrix3D";

export function entrepreneurshipFeatures(): Record<string, ReactNode> {
  return {
    "potential-problems-and-solutions": <PotentialProblemsAndSolutions />,
    "positive-long-term-impacts": <PositiveLongTermImpacts />,
    "circure-golden-circle": <CirCureGoldenCircle />,
    "stakeholder-matrix-3d": <StakeholderMatrix3D />,
    "venture-discovery": <AssumptionFunnel />,
    "venture-hypotheses": <DecisionProofTable />,
    "venture-roadmap": <TradeoffOrbit />,
  };
}
