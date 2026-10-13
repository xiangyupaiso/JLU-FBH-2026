/* eslint-disable react-refresh/only-export-components */
import { useId, type ReactNode } from "react";
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
import {
  EntrepreneurshipDetail,
  useEntrepreneurshipDetail,
} from "./EntrepreneurshipDetail";
import { WatercolorCircle } from "./EntrepreneurshipWatercolor";
import { MilestoneTimeline } from "./MilestoneTimeline";
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
  const detail = useEntrepreneurshipDetail();
  const { activeIndex } = detail;
  const active = activeIndex === null ? null : topics[activeIndex];
  const positions = impacts ? impactPositions : concernPositions;
  const title = impacts
    ? "Positive Long-Term Impacts"
    : "Potential Problems and Solutions";
  const detailAbove =
    activeIndex !== null &&
    (impacts ? activeIndex >= 2 : activeIndex === 2 || activeIndex === 3);

  return (
    <div
      className={`circure-orbit circure-orbit--${impacts ? "impacts" : "concerns"}`}
      role="group"
      aria-label={title}
      {...detail.containerProps}
    >
      <svg
        className="circure-orbit__drawing"
        viewBox="0 0 640 570"
        aria-hidden="true"
      >
        <defs>
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
            <WatercolorCircle
              key={topic.id}
              cx={x}
              cy={y}
              radius={radius}
              tone={topic.tone}
              seed={8 + index * 7}
              active={activeIndex === index}
            />
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
          {...detail.triggerProps(index)}
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
        <EntrepreneurshipDetail
          id={detail.detailId}
          title={active.title}
          tone={active.tone}
          group={active.group}
          above={detailAbove}
          onClose={detail.closeDetail}
        >
          <p>{active.body}</p>
        </EntrepreneurshipDetail>
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
    "entrepreneurship-milestone": <MilestoneTimeline />,
    "venture-discovery": <AssumptionFunnel />,
    "venture-hypotheses": <DecisionProofTable />,
    "venture-roadmap": <TradeoffOrbit />,
  };
}
