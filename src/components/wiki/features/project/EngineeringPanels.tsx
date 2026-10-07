import { useId, useRef, type MouseEvent } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import {
  ENGINEERING_ITERATIONS,
  TIME_CYCLES,
  type EngineeringIterationDatum,
} from "../../../../data/project/engineeringPage";
import type { WikiDbTLStageKey as DbTLStageKey } from "../../wikiPageTypes";
import "../../../../styles/features/engineering-dial.css";
gsap.registerPlugin(useGSAP);

export interface EngineeringOutlineProps {
  activeIteration: EngineeringIterationDatum;
  activeStage: DbTLStageKey;
  onNavigate: (
    iteration: EngineeringIterationDatum,
    stage?: DbTLStageKey,
  ) => void;
}
// Dial geometry, all in viewBox units around the centre (C, C).
const C = 120;
const RING_OUT = 98; // outer TIME ring
const RING_IN = 58;
const DIAL_OUT = 56; // inner DBTL dial
const DIAL_IN = 16;

// Polar coordinate helper (0 deg = 12 o'clock, clockwise)
const polar = (r: number, deg: number) => {
  const rad = ((deg - 90) * Math.PI) / 180;
  return [C + r * Math.cos(rad), C + r * Math.sin(rad)] as const;
};

const f2 = (n: number) => n.toFixed(2);

// Annular sector path (donut wedge)
function sectorPath(
  rInner: number,
  rOuter: number,
  startDeg: number,
  sweepDeg: number,
) {
  const [x1, y1] = polar(rOuter, startDeg);
  const [x2, y2] = polar(rOuter, startDeg + sweepDeg);
  const [x3, y3] = polar(rInner, startDeg + sweepDeg);
  const [x4, y4] = polar(rInner, startDeg);
  return `M ${f2(x1)} ${f2(y1)} A ${rOuter} ${rOuter} 0 0 1 ${f2(x2)} ${f2(y2)} L ${f2(x3)} ${f2(y3)} A ${rInner} ${rInner} 0 0 0 ${f2(x4)} ${f2(y4)} Z`;
}

// Text baseline arc. Lower quadrants run counter-clockwise so words stay
// upright; their glyphs then hang inward, so the baseline moves out to keep
// both halves in the same band of the ring.
function labelArc(startDeg: number, endDeg: number) {
  const mid = (startDeg + endDeg) / 2;
  const lower = mid > 90 && mid < 270;
  const r = lower ? 72.5 : 66;
  const [a, b] = lower ? [endDeg, startDeg] : [startDeg, endDeg];
  const [x1, y1] = polar(r, a);
  const [x2, y2] = polar(r, b);
  return `M ${f2(x1)} ${f2(y1)} A ${r} ${r} 0 0 ${lower ? 0 : 1} ${f2(x2)} ${f2(y2)}`;
}

// Flat spur gear outline centred on (0, 0)
function gearPath(teeth: number, rPitch: number, toothH: number) {
  const step = 360 / teeth;
  const rRoot = rPitch - toothH * 0.5;
  const rTip = rPitch + toothH * 0.5;
  const pt = (radius: number, deg: number) => {
    const rad = (deg * Math.PI) / 180;
    return `${f2(radius * Math.cos(rad))} ${f2(radius * Math.sin(rad))}`;
  };
  const profile: string[] = [];
  for (let i = 0; i < teeth; i += 1) {
    const a = i * step;
    profile.push(
      pt(rRoot, a - step * 0.3),
      pt(rTip, a - step * 0.14),
      pt(rTip, a + step * 0.14),
      pt(rRoot, a + step * 0.3),
    );
  }
  return profile.map((p, i) => `${i === 0 ? "M" : "L"} ${p}`).join(" ") + " Z";
}

// Figure E01 layout: T top-left, then clockwise I, M, E. Each cycle shares its
// quadrant with the DBTL stage of the same order, so T lines up with Design.
const CYCLE_START = [270, 0, 90, 180];

const STAGES: { key: DbTLStageKey; label: string; start: number }[] = [
  { key: "design", label: "Design", start: 270 },
  { key: "build", label: "Build", start: 0 },
  { key: "test", label: "Test", start: 90 },
  { key: "learn", label: "Learn", start: 180 },
];

// Hand drawn pointing at 12 o'clock; CSS rotates it about the dial centre.
// Tip stops short of the stage label so the word stays readable.
const HAND = `M ${C - 2.6} ${C + 6} L ${C - 1.4} ${C - 22} L ${C} ${C - 27} L ${C + 1.4} ${C - 22} L ${C + 2.6} ${C + 6} Z`;

const cycleWord = (title: string) => title.split(":")[0];

export function EngineeringOutline({
  activeIteration,
  activeStage,
  onNavigate,
}: EngineeringOutlineProps) {
  const activeCycle = activeIteration.cycle - 1;
  const shownStage = activeStage;
  const dialId = useId();
  const svgRef = useRef<SVGSVGElement>(null);
  const angle = useRef(315);
  useGSAP(
    () => {
      const shown = STAGES.find((s) => s.key === shownStage) ?? STAGES[0];
      const target = shown.start + 45;
      const delta = ((((target - angle.current) % 360) + 540) % 360) - 180;
      angle.current += delta;
      gsap.to(svgRef.current?.querySelector(".eng-dial__hand") ?? [], {
        rotation: angle.current,
        svgOrigin: `${C} ${C}`,
        smoothOrigin: false,
        duration: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? 0
          : 0.35,
        ease: "power2.out",
        overwrite: true,
      });
    },
    { scope: svgRef, dependencies: [shownStage] },
  );
  const jumpTo = (id: string, event: MouseEvent<Element>) => {
    event.preventDefault();
    const first = ENGINEERING_ITERATIONS.find((it) => it.cycleId === id);
    if (first) onNavigate(first);
  };
  const jumpToStage = (stage: DbTLStageKey, event: MouseEvent<Element>) => {
    event.preventDefault();
    onNavigate(activeIteration, stage);
  };
  return (
    <nav
      className="eng-mech-nav"
      aria-label="TIME cycles and engineering stages"
    >
      <div className="eng-mech-figure-box">
        <svg
          ref={svgRef}
          viewBox="0 0 240 240"
          className="eng-dial"
          role="group"
          aria-label="TIME cycles and Design–Build–Test–Learn stages"
        >
          <defs>
            {CYCLE_START.map((start, i) => (
              <path
                key={start}
                id={`${dialId}-arc-${i}`}
                d={labelArc(start + 6, start + 84)}
              />
            ))}
          </defs>

          <path
            className="eng-dial__teeth"
            d={gearPath(30, 108, 9)}
            transform={`translate(${C} ${C})`}
          />
          <circle className="eng-dial__bezel" cx={C} cy={C} r={RING_OUT + 3} />

          {/* Outer ring: four project-level TIME cycles */}
          {TIME_CYCLES.map((cycle, i) => {
            const start = CYCLE_START[i];
            const [lx, ly] = polar(83, start + 45);
            const word = cycleWord(cycle.title);
            const recorded = cycle.status === "recorded";
            const isActive = i === activeCycle;
            const className = [
              "eng-dial__cycle",
              `eng-dial__cycle--${cycle.letter.toLowerCase()}`,
              isActive ? "is-active" : "",
              recorded ? "" : "is-planned",
            ]
              .filter(Boolean)
              .join(" ");
            const face = (
              <>
                <title>{`Cycle ${i + 1} · ${word}${recorded ? "" : " (coming soon)"}`}</title>
                <path
                  className="eng-dial__cycle-face"
                  d={sectorPath(RING_IN, RING_OUT, start, 90)}
                />
                <text className="eng-dial__cycle-letter" x={f2(lx)} y={f2(ly)}>
                  {cycle.letter}
                </text>
                <text className="eng-dial__cycle-word">
                  <textPath href={`#${dialId}-arc-${i}`} startOffset="50%">
                    {word}
                  </textPath>
                </text>
              </>
            );
            return recorded ? (
              <a
                key={cycle.id}
                href={`#${cycle.id}`}
                className={className}
                aria-label={`Cycle ${i + 1}: ${word}`}
                aria-current={isActive ? "step" : undefined}
                onClick={(e) => jumpTo(cycle.id, e)}
              >
                {face}
              </a>
            ) : (
              <g key={cycle.id} className={className} aria-disabled="true">
                {face}
              </g>
            );
          })}

          <circle
            className="eng-dial__groove"
            cx={C}
            cy={C}
            r={(RING_IN + DIAL_OUT) / 2}
          />

          {/* Inner dial: DBTL stages of the current iteration */}
          {STAGES.map((stage) => {
            const [lx, ly] = polar(41, stage.start + 45);
            // Highlight follows the hand, so the overview never shows a bare pointer.
            const isActive = stage.key === shownStage;
            return (
              <a
                key={stage.key}
                href={`#${activeIteration.id}-${stage.key}`}
                className={`eng-dial__stage eng-dial__stage--${stage.key}${isActive ? " is-active" : ""}`}
                aria-label={`Iteration ${activeIteration.index}: ${stage.label}`}
                aria-current={isActive ? "step" : undefined}
                onClick={(e) => jumpToStage(stage.key, e)}
              >
                <path
                  className="eng-dial__stage-face"
                  d={sectorPath(DIAL_IN, DIAL_OUT, stage.start, 90)}
                />
                <text className="eng-dial__stage-label" x={f2(lx)} y={f2(ly)}>
                  {stage.label}
                </text>
              </a>
            );
          })}

          <path className="eng-dial__hand" d={HAND} />
          <circle className="eng-dial__hub" cx={C} cy={C} r="7.5" />
          <circle className="eng-dial__pin" cx={C} cy={C} r="2.6" />
        </svg>{" "}
        <p className="eng-current-iteration" aria-live="polite">
          <span className="eng-current-iteration__index">
            {activeIteration.index}
          </span>
          <span>{activeIteration.short}</span>
        </p>
      </div>
    </nav>
  );
}
