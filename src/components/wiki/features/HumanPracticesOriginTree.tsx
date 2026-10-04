import { useEffect, useRef, useState, type ReactNode } from "react";
import { UserRound } from "lucide-react";
import { originInterviewRecords } from "../../../data/engagement/humanPracticesCopy";
import { scrollReaderToTarget } from "../../../utils";
import "../../../styles/hp-origin-tree.css";

const names = ["药博会", "刘雅文", "公众", "贾琳", "王磊", "李成丽", "田润辉"];
const basePoints = [
  { x: 50, y: 7 }, { x: 50, y: 22 }, { x: 50, y: 37 },
  { x: 50, y: 52 }, { x: 26, y: 68 }, { x: 74, y: 68 },
  { x: 50, y: 88 },
];
const forwardEdges = [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]];
const returnEdges = [
  { id: "liu-return", from: 5, to: 1, path: "M 88 68 H 94 V 22 H 65" },
  { id: "jia-return", from: 6, to: 3, path: "M 50 88 H 93 V 52 H 64" },
  { id: "public-return", from: 6, to: 2, path: "M 50 88 H 4 V 37 H 36" },
  { id: "wang-return", from: 6, to: 4, path: "M 50 88 H 10 V 68 H 12" },
];
const storySteps: Array<{ person: number; phase: "first" | "followup" | "review"; label: string; returnFrom?: number }> = [
  { person: 0, phase: "first", label: "Industry field research" },
  { person: 1, phase: "first", label: "First interview" },
  { person: 2, phase: "first", label: "First survey" },
  { person: 3, phase: "first", label: "First interview" },
  { person: 4, phase: "first", label: "First interview" },
  { person: 5, phase: "first", label: "First interview" },
  { person: 1, phase: "followup", label: "Follow-up interview", returnFrom: 5 },
  { person: 6, phase: "first", label: "Clinical and patient perspective" },
  { person: 2, phase: "followup", label: "Follow-up survey", returnFrom: 6 },
  { person: 3, phase: "followup", label: "Follow-up interview", returnFrom: 6 },
  { person: 4, phase: "followup", label: "Follow-up interview", returnFrom: 6 },
];
const introPoints = [
  { x: 8, y: 50 }, { x: 24, y: 50 }, { x: 40, y: 50 },
  { x: 56, y: 50 }, { x: 74, y: 76 }, { x: 74, y: 24 },
  { x: 91, y: 50 },
];
const introForwardPaths = [
  "M 14 50 H 17", "M 30 50 H 33", "M 46 50 H 49",
  "M 62 50 H 66 V 24 H 67", "M 62 50 H 66 V 76 H 67",
  "M 81 24 H 82 V 50", "M 81 76 H 82 V 50", "M 82 50 H 84",
];
const introReturnPaths = [
  "M 80 24 H 86 V 10 H 34 V 50 H 30",
  "M 91 58 V 89 H 56 V 58",
  "M 91 58 V 93 H 40 V 58",
  "M 91 58 V 96 H 74 V 84",
];
type Point = { x: number; y: number };

function connector(a: Point, b: Point) {
  const startY = a.y + 5.5;
  const endY = b.y - 6.5;
  const mid = (startY + endY) / 2;
  return `M ${a.x} ${startY} C ${a.x} ${mid}, ${b.x} ${mid}, ${b.x} ${endY}`;
}

function inline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

function interviewContext(index: number) {
  const blocks = originInterviewRecords[index]?.blocks ?? [];
  let inContext = false;
  for (const block of blocks) {
    if (block.type !== "prose") continue;
    for (const paragraph of block.paragraphs) {
      if (paragraph === "**Context**") {
        inContext = true;
      } else if (inContext && !paragraph.startsWith("**")) {
        return paragraph;
      }
    }
  }
  return "";
}

function interviewParagraphs(index: number, phase: "first" | "followup" | "review") {
  const paragraphs = originInterviewRecords[index].blocks.flatMap((block) => block.type === "prose" ? block.paragraphs : []);
  const followupStart = paragraphs.findIndex((paragraph) => paragraph.startsWith("**Follow"));
  if (followupStart < 0) return paragraphs;
  return phase === "first" ? paragraphs.slice(0, followupStart) : paragraphs.slice(followupStart);
}

export function HumanPracticesOriginTree() {
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const hoverExitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);

  const showProfile = (index: number) => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
    hoverExitTimer.current = null;
    setHoveredProfile(index);
  };
  const hideProfileSoon = () => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
    hoverExitTimer.current = setTimeout(() => setHoveredProfile(null), 150);
  };

  useEffect(() => () => {
    if (hoverExitTimer.current) clearTimeout(hoverExitTimer.current);
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const inner = root?.closest<HTMLElement>(".route-frame__scroll");
    if (!root || !inner) return;
    // This feature spans multiple viewport-length steps. Reveal its stage directly;
    // the shared 8% IntersectionObserver threshold cannot reveal a block this tall.
    root.closest<HTMLElement>("[data-wiki-reveal]")?.classList.add("is-visible");
    let frame = 0;
    const update = () => {
      frame = 0;
      const step = root.offsetHeight / (storySteps.length + 1);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      const index = Math.max(0, Math.min(storySteps.length - 1, Math.floor((scrolled - step + step * 0.25) / step)));
      setActive(index);
      setUnlocked((previous) => Math.max(previous, index));
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const skipFlowWhenOutside = (event: WheelEvent) => {
      if (event.deltaY <= 0) return;
      const step = root.offsetHeight / (storySteps.length + 1);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      if (scrolled < step || scrolled >= root.offsetHeight - step) return;
      const target = event.target;
      if (target instanceof Element && target.closest(".hp-origin-flow__tree, .hp-origin-flow__card")) return;
      const next = root.closest(".wiki-feature")?.nextElementSibling;
      if (!(next instanceof HTMLElement)) return;
      event.preventDefault();
      scrollReaderToTarget(next, inner, "smooth");
    };
    inner.addEventListener("scroll", requestUpdate, { passive: true });
    inner.addEventListener("wheel", skipFlowWhenOutside, { passive: false });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      inner.removeEventListener("scroll", requestUpdate);
      inner.removeEventListener("wheel", skipFlowWhenOutside);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    cardRef.current?.scrollTo({ top: 0 });
  }, [active]);

  const revisit = (index: number) => {
    let targetStep = -1;
    for (let position = unlocked; position >= 0; position -= 1) {
      if (storySteps[position].person === index) {
        targetStep = position;
        break;
      }
    }
    if (targetStep < 0) return;
    const marker = document.getElementById(`hp-origin-step-${targetStep}`);
    const inner = rootRef.current?.closest<HTMLElement>(".route-frame__scroll");
    if (marker) {
      setActive(targetStep);
      scrollReaderToTarget(marker, inner, "smooth");
    }
  };

  const currentStep = storySteps[active];
  const record = originInterviewRecords[currentStep.person];
  const visibleParagraphs = interviewParagraphs(currentStep.person, currentStep.phase);
  const visitedPeople = new Set(storySteps.slice(0, unlocked + 1).map((step) => step.person));

  return (
    <div className="hp-origin-flow" ref={rootRef} style={{ height: `calc(var(--hp-origin-step) * ${storySteps.length + 1})` }}>
      <section className="hp-origin-flow__intro" aria-label="Stakeholder network overview">
        <div className="hp-origin-flow__intro-heading">
          <span>III / Origin</span>
          <h3>Tree-shaped stakeholder network</h3>
        </div>
        <div className="hp-origin-flow__intro-network">
          <div className="hp-origin-flow__intro-canvas">
          <svg className="hp-origin-flow__intro-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="hp-intro-forward-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
              <marker id="hp-intro-return-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
            </defs>
            {introForwardPaths.map((path, index) => <path key={`forward-${index}`} d={path} className="hp-origin-flow__intro-forward" markerEnd={index < 5 || index === 7 ? "url(#hp-intro-forward-arrow)" : undefined} />)}
            {introReturnPaths.map((path, index) => <path key={`return-${index}`} d={path} className="hp-origin-flow__intro-return" markerEnd="url(#hp-intro-return-arrow)" />)}
          </svg>
          {originInterviewRecords.map((item, index) => (
            <button
              key={item.id}
              className={`hp-origin-flow__intro-node${hoveredProfile === index ? " is-hovered" : ""}${[1, 2, 3, 4].includes(index) ? " has-followup" : ""}`}
              type="button"
              style={{ left: `${introPoints[index].x}%`, top: `${introPoints[index].y}%` }}
              aria-label={`${names[index]}: ${item.title}`}
              onMouseEnter={() => showProfile(index)}
              onMouseLeave={hideProfileSoon}
              onFocus={() => showProfile(index)}
              onBlur={hideProfileSoon}
            >
              <span className="hp-origin-flow__intro-node-name">{names[index]}</span>
              <span className="hp-origin-flow__intro-node-photo" aria-hidden="true">{index === 0 ? "EXPO" : <UserRound size={26} strokeWidth={1.6} />}</span>
            </button>
          ))}
          {hoveredProfile !== null && (
            <aside
              className={`hp-origin-flow__intro-tooltip${introPoints[hoveredProfile].x > 68 ? " is-left" : " is-right"}`}
              style={{ left: `${introPoints[hoveredProfile].x > 68 ? introPoints[hoveredProfile].x - 27 : introPoints[hoveredProfile].x + 6}%`, top: `${introPoints[hoveredProfile].y}%` }}
              aria-label={`${names[hoveredProfile]} interview context`}
              onMouseEnter={() => showProfile(hoveredProfile)}
              onMouseLeave={hideProfileSoon}
            >
              <div className="hp-origin-flow__intro-tooltip-body">
                <span>Stakeholder background</span>
                <h4>{names[hoveredProfile]}</h4>
                <strong>{originInterviewRecords[hoveredProfile].title}</strong>
                <p>{interviewContext(hoveredProfile)}</p>
              </div>
            </aside>
          )}
          </div>
        </div>
        <p className="hp-origin-flow__intro-hint">Hover over a stakeholder for context · Scroll to follow the dialogue</p>
      </section>
      {storySteps.map((step, index) => (
        <span
          className="hp-origin-flow__step"
          id={`hp-origin-step-${index}`}
          key={`${step.person}-${step.phase}-${index}`}
          style={{ top: `${(index + 1) / (storySteps.length + 1) * 100}%` }}
          aria-hidden="true"
        />
      ))}

      <section className="hp-origin-flow__stage" aria-label="Origin stakeholder interview network">
        <div className="hp-origin-flow__heading">
          <span>Origin / CIRC dialogue</span>
          <strong>Stakeholder interviews</strong>
          <span aria-live="polite">{String(active + 1).padStart(2, "0")} / {String(storySteps.length).padStart(2, "0")}</span>
        </div>
        <h3 className="hp-origin-flow__sr-only">IV. Stakeholder Interview Contents under the CIRC Framework</h3>

        <div className="hp-origin-flow__tree" aria-label="Interview sequence">
          <svg className="hp-origin-flow__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="hp-origin-forward-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
              <marker id="hp-origin-return-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
            </defs>
            {forwardEdges.map(([from, to]) => (
              <path key={`${from}-${to}`} d={connector(basePoints[from], basePoints[to])} className={`${visitedPeople.has(from) && visitedPeople.has(to) ? "is-lit" : ""}${currentStep.person === to && currentStep.returnFrom === undefined ? " is-current" : ""}`} markerEnd="url(#hp-origin-forward-arrow)" />
            ))}
            <path d="M 26 73 C 26 78, 38 78, 50 78" className={visitedPeople.has(4) ? "is-lit" : ""} />
            <path d="M 74 73 C 74 78, 62 78, 50 78" className={visitedPeople.has(5) ? "is-lit" : ""} />
            <path d="M 50 78 L 50 83" className={`${visitedPeople.has(4) && visitedPeople.has(5) ? "is-lit" : ""}${currentStep.person === 6 ? " is-current" : ""}`} markerEnd="url(#hp-origin-forward-arrow)" />
            {returnEdges.map((edge) => (
              <path key={edge.id} d={edge.path} className={`hp-origin-flow__return-link${visitedPeople.has(edge.from) ? " is-lit" : ""}${currentStep.returnFrom === edge.from && currentStep.person === edge.to ? " is-current" : ""}`} markerEnd="url(#hp-origin-return-arrow)" />
            ))}
          </svg>

          {originInterviewRecords.map((item, index) => (
            <button
              className={`hp-origin-flow__person${visitedPeople.has(index) ? " is-lit" : " is-locked"}${index === currentStep.person ? " is-active" : ""}${index === currentStep.person && currentStep.returnFrom !== undefined ? " is-revisit" : ""}${[1, 2, 3, 4].includes(index) ? " has-followup" : ""}`}
              key={item.id}
              type="button"
              aria-disabled={!visitedPeople.has(index)}
              aria-current={index === currentStep.person ? "step" : undefined}
              aria-label={`${names[index] ?? item.title}: ${item.title}`}
              style={{ left: `${basePoints[index].x}%`, top: `${basePoints[index].y}%` }}
              onClick={() => revisit(index)}
            >
              <span className="hp-origin-flow__person-back" aria-hidden="true" />
              <span className="hp-origin-flow__person-front">
                <span className="hp-origin-flow__name">{names[index] ?? item.title}</span>
                <span className="hp-origin-flow__portrait" aria-hidden="true">{index === 0 ? "EXPO" : <UserRound size={25} strokeWidth={1.6} />}</span>
              </span>
            </button>
          ))}
        </div>

        <div
          className={`hp-origin-flow__card${currentStep.returnFrom !== undefined ? " is-followup" : ""}`}
          key={`${record.id}-${active}`}
          ref={cardRef}
          role="region"
          tabIndex={0}
          aria-label={`${names[currentStep.person]} ${currentStep.label} notes`}
          onKeyDown={(event) => {
            if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
              event.stopPropagation();
            }
          }}
        >
          <div className="hp-origin-flow__card-head">
            <span>{String(active + 1).padStart(2, "0")} / {String(storySteps.length).padStart(2, "0")} · {currentStep.label}</span>
            <h3>{names[currentStep.person]}</h3>
            <p>{record.title}</p>
          </div>
          <div className="hp-origin-flow__card-body">
            {visibleParagraphs.map((paragraph, paragraphIndex) => {
              const label = paragraph.match(/^\*\*(.+)\*\*$/);
              return label
                ? <h4 key={paragraphIndex}>{label[1]}</h4>
                : <p key={paragraphIndex}>{inline(paragraph)}</p>;
            })}
          </div>
        </div>
        <p className="hp-origin-flow__hint">Scroll to continue · Select a lit portrait to revisit</p>
      </section>
    </div>
  );
}
