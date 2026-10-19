import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { originInterviewRecords } from "../../../data/engagement/humanPracticesCopy";
import { originMedia } from "../../../data/engagement/humanPracticesAssets";
import { scrollReaderToTarget } from "../../../utils";
import { HpFlowTooltip } from "./HpFlowTooltip";
import { HpInterviewPhoto, HpPortrait } from "./HpStakeholderMedia";
import "../../../styles/hp-origin-tree.css";

const names = ["药博会", "寇长贵", "公众", "贾琳", "王磊", "李成丽", "田润辉"];
const basePoints = [
  { x: 50, y: 4 }, { x: 50, y: 22 }, { x: 50, y: 40 },
  { x: 50, y: 58 }, { x: 26, y: 76 }, { x: 74, y: 76 },
  { x: 50, y: 94 },
];
const forwardEdges = [[0, 1], [1, 2], [2, 3], [3, 4], [3, 5]];
const returnEdges = [
  { id: "liu-return", from: 5, to: 1, path: "M 84 76 H 94 V 22 H 63" },
  { id: "jia-return", from: 6, to: 3, path: "M 59 94 H 92 V 58 H 63" },
  { id: "public-return", from: 6, to: 2, path: "M 41 94 H 4 V 40 H 37" },
  { id: "wang-return", from: 6, to: 4, path: "M 41 94 H 10 V 76 H 13" },
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
const leadSteps = 2;
const introPoints = [
  { x: 8, y: 50 }, { x: 24, y: 50 }, { x: 40, y: 50 },
  { x: 56, y: 50 }, { x: 74, y: 76 }, { x: 74, y: 24 },
  { x: 91, y: 50 },
];
const introForwardPaths = [
  "M 13.5 50 H 18.2", "M 29.5 50 H 34.2", "M 45.5 50 H 50.2",
  "M 61.5 50 H 65 V 24 H 68.2", "M 61.5 50 H 65 V 76 H 68.2",
  "M 79.4 24 H 82.4 V 50", "M 79.4 76 H 82.4 V 50", "M 82.4 50 H 85.5",
];
const introReturnPaths = [
  "M 79.4 24 H 86 V 10 H 34 V 50 H 30",
  "M 91 62.5 V 89 H 56 V 62.5",
  "M 91 62.5 V 93 H 40 V 62.5",
  "M 91 62.5 V 96 H 74 V 88.5",
];
type Point = { x: number; y: number };

function connector(a: Point, b: Point) {
  const startY = a.y + 5.8;
  const endY = b.y - 6.4;
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
  const introNodeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const treeNodeRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const hoverExitTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(0);
  const navigationRef = useRef<{ index: number; expiresAt: number } | null>(null);
  const wheelGestureRef = useRef<{ active: boolean; releaseAt: number; timer: ReturnType<typeof setTimeout> | null }>({ active: false, releaseAt: 0, timer: null });
  const [active, setActive] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [hoveredProfile, setHoveredProfile] = useState<number | null>(null);
  const [hoveredTreeProfile, setHoveredTreeProfile] = useState<number | null>(null);
  const [firstViewAtStep, setFirstViewAtStep] = useState<number | null>(null);

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

  const goToStep = useCallback((index: number) => {
    const root = rootRef.current;
    const inner = root?.closest<HTMLElement>(".route-frame__scroll");
    const marker = root?.querySelector<HTMLElement>(`#hp-origin-step-${index}`);
    if (!inner || !marker) return;
    navigationRef.current = { index, expiresAt: performance.now() + 1200 };
    activeRef.current = index;
    setActive(index);
    setUnlocked((previous) => Math.max(previous, index));
    scrollReaderToTarget(marker, inner, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth");
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    const inner = root?.closest<HTMLElement>(".route-frame__scroll");
    if (!root || !inner) return;
    // This feature spans multiple viewport-length steps. Reveal its stage directly;
    // the shared 8% IntersectionObserver threshold cannot reveal a block this tall.
    root.closest<HTMLElement>("[data-wiki-reveal]")?.classList.add("is-visible");
    const intro = root.querySelector<HTMLElement>(".hp-origin-flow__intro");
    const introHeading = root.querySelector<HTMLElement>(".hp-origin-flow__intro-heading");
    const introNetwork = root.querySelector<HTMLElement>(".hp-origin-flow__intro-network");
    const introPrompt = root.querySelector<HTMLElement>(".hp-origin-flow__intro-prompt");
    const stage = root.querySelector<HTMLElement>(".hp-origin-flow__stage");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const narrowScreen = window.matchMedia("(max-width: 760px)");
    let frame = 0;
    let renderedMorph = -1;
    let renderedMotion = false;
    const update = () => {
      frame = 0;
      const step = root.offsetHeight / (storySteps.length + leadSteps);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      const morph = Math.max(0, Math.min(1, (scrolled - step) / step));
      const motionEnabled = !reducedMotion.matches && !narrowScreen.matches;
      if (morph !== renderedMorph || motionEnabled !== renderedMotion) {
        const eased = morph * morph * (3 - 2 * morph);
        const introOpacity = Math.max(0, Math.min(1, (0.94 - morph) / 0.26));
        const stageOpacity = Math.max(0, Math.min(1, (morph - 0.7) / 0.24));
        if (introNetwork) {
          introNetwork.style.transform = motionEnabled
            ? `translate3d(${-30 * eased}%, 0, 0) rotate(${90 * eased}deg) scaleX(${1 - 0.5 * eased})`
            : "none";
          introNetwork.style.opacity = String(introOpacity);
        }
        if (introHeading) introHeading.style.opacity = String(introOpacity);
        if (introPrompt) introPrompt.style.opacity = String(introOpacity);
        if (stage) stage.style.opacity = String(stageOpacity);
        if (intro) intro.style.visibility = morph >= 0.94 ? "hidden" : "visible";
        const stageReady = morph >= 0.9;
        root.classList.toggle("is-transforming", morph > 0.02 && !stageReady);
        root.classList.toggle("is-stage-ready", stageReady);
        if (intro && intro.inert !== stageReady) intro.inert = stageReady;
        if (stage && stage.inert === stageReady) stage.inert = !stageReady;
        renderedMorph = morph;
        renderedMotion = motionEnabled;
      }
      const index = Math.max(0, Math.min(storySteps.length - 1, Math.floor((scrolled - step * leadSteps + step * 0.25) / step)));
      const navigation = navigationRef.current;
      if (navigation) {
        if (performance.now() < navigation.expiresAt && Math.abs(scrolled - (navigation.index + leadSteps) * step) > 64) return;
        navigationRef.current = null;
      }
      activeRef.current = index;
      setActive(index);
      setUnlocked((previous) => Math.max(previous, index));
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const holdWheelGesture = () => {
      const gesture = wheelGestureRef.current;
      if (!gesture.active) gesture.releaseAt = performance.now() + 420;
      gesture.active = true;
      if (gesture.timer) clearTimeout(gesture.timer);
      gesture.timer = setTimeout(() => {
        gesture.active = false;
        gesture.timer = null;
      }, Math.max(170, gesture.releaseAt - performance.now()));
    };
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 1) return;
      const gesture = wheelGestureRef.current;
      if (gesture.active) {
        event.preventDefault();
        holdWheelGesture();
        return;
      }
      const step = root.offsetHeight / (storySteps.length + leadSteps);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      if (scrolled < step * leadSteps - 48 || scrolled > root.offsetHeight - step + 48) return;
      const target = event.target instanceof Element ? event.target : null;
      const card = target?.closest<HTMLElement>(".hp-origin-flow__card");
      const direction = Math.sign(event.deltaY);
      if (card) {
        const remaining = card.scrollHeight - card.clientHeight - card.scrollTop;
        if (direction > 0 ? remaining > 2 : card.scrollTop > 2) return;
      }
      event.preventDefault();
      holdWheelGesture();
      if (direction > 0 && activeRef.current === storySteps.length - 1) {
        const next = root.closest(".wiki-feature")?.nextElementSibling;
        if (next instanceof HTMLElement) {
          navigationRef.current = null;
          scrollReaderToTarget(next, inner, "smooth");
        }
        return;
      }
      if (direction < 0 && activeRef.current === 0) {
        navigationRef.current = null;
        const intro = root.querySelector<HTMLElement>(".hp-origin-flow__intro");
        if (intro) scrollReaderToTarget(intro, inner, "smooth");
        return;
      }
      goToStep(Math.max(0, Math.min(storySteps.length - 1, activeRef.current + direction)));
    };
    inner.addEventListener("scroll", requestUpdate, { passive: true });
    inner.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    reducedMotion.addEventListener("change", requestUpdate);
    narrowScreen.addEventListener("change", requestUpdate);
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (wheelGestureRef.current.timer) clearTimeout(wheelGestureRef.current.timer);
      inner.removeEventListener("scroll", requestUpdate);
      inner.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      reducedMotion.removeEventListener("change", requestUpdate);
      narrowScreen.removeEventListener("change", requestUpdate);
    };
  }, [goToStep]);

  useEffect(() => {
    cardRef.current?.scrollTo({ top: 0 });
    setFirstViewAtStep(null);
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
    goToStep(targetStep);
  };

  const currentStep = storySteps[active];
  const record = originInterviewRecords[currentStep.person];
  const showingFirst = currentStep.phase === "followup" && firstViewAtStep === active;
  const displayedPhase = showingFirst ? "first" : currentStep.phase;
  const displayedReturnFrom = showingFirst ? undefined : currentStep.returnFrom;
  const firstRoundLabel = storySteps.find((step) => step.person === currentStep.person && step.phase === "first")?.label ?? "First interview";
  const displayedLabel = showingFirst ? firstRoundLabel : currentStep.label;
  const visibleParagraphs = interviewParagraphs(currentStep.person, displayedPhase);
  const currentMedia = originMedia[currentStep.person];
  const interviewPhotos = displayedPhase === "followup" ? currentMedia?.followup ?? [] : currentMedia?.interview ?? [];
  const firstProseIndex = visibleParagraphs.findIndex((paragraph) => !paragraph.startsWith("**"));
  const visitedPeople = new Set(storySteps.slice(0, unlocked + 1).map((step) => step.person));
  const returnedPeople = new Set(storySteps.slice(0, unlocked + 1).filter((step) => step.phase === "followup").map((step) => step.person));
  const activeTracePaths = displayedReturnFrom !== undefined
    ? returnEdges.filter((edge) => edge.from === displayedReturnFrom && edge.to === currentStep.person).map((edge) => edge.path)
    : currentStep.person === 6
      ? ["M 26 82 C 26 83.5, 38 83.5, 50 83.5", "M 74 82 C 74 83.5, 62 83.5, 50 83.5", "M 50 83.5 L 50 88"]
      : forwardEdges.filter(([, to]) => to === currentStep.person).map(([from, to]) => connector(basePoints[from], basePoints[to]));

  return (
    <div className="hp-origin-flow" ref={rootRef} style={{ height: `calc(var(--hp-origin-step) * ${storySteps.length + leadSteps})` }}>
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
              ref={(element) => { introNodeRefs.current[index] = element; }}
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
              <span className="hp-origin-flow__intro-node-photo" aria-hidden="true"><HpPortrait src={originMedia[index]?.portrait} name={names[index]} /></span>
            </button>
          ))}
          {hoveredProfile !== null && (
            <HpFlowTooltip
              anchor={introNodeRefs.current[hoveredProfile]}
              className="hp-origin-flow__intro-tooltip"
              ariaLabel={`${names[hoveredProfile]} interview context`}
              onMouseEnter={() => showProfile(hoveredProfile)}
              onMouseLeave={hideProfileSoon}
            >
              <div className="hp-origin-flow__intro-tooltip-body">
                <span>Stakeholder background</span>
                <h4>{names[hoveredProfile]}</h4>
                <strong>{originInterviewRecords[hoveredProfile].title}</strong>
                <p>{interviewContext(hoveredProfile)}</p>
              </div>
            </HpFlowTooltip>
          )}
          </div>
        </div>
        <p className="hp-origin-flow__intro-prompt">Hover over a portrait to see each stakeholder’s background</p>
      </section>
      {storySteps.map((step, index) => (
        <span
          className="hp-origin-flow__step"
          id={`hp-origin-step-${index}`}
          key={`${step.person}-${step.phase}-${index}`}
          style={{ top: `${(index + leadSteps) / (storySteps.length + leadSteps) * 100}%` }}
          aria-hidden="true"
        />
      ))}

      <section className="hp-origin-flow__stage" aria-label="Origin stakeholder interview network">
        <div className="hp-origin-flow__heading">
          <strong>Stakeholder interviews</strong>
        </div>
        <h3 className="hp-origin-flow__sr-only">IV. Stakeholder Interview Contents under the CIRC Framework</h3>

        <div className="hp-origin-flow__tree" aria-label="Interview sequence">
          <svg className="hp-origin-flow__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="hp-origin-forward-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="3.2" markerHeight="3.2" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
              <marker id="hp-origin-return-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
            </defs>
            {forwardEdges.map(([from, to]) => (
              <path key={`${from}-${to}`} d={connector(basePoints[from], basePoints[to])} className={`${visitedPeople.has(from) && visitedPeople.has(to) ? "is-lit" : ""}${currentStep.person === to && displayedReturnFrom === undefined ? " is-current" : ""}`} markerEnd="url(#hp-origin-forward-arrow)" />
            ))}
            <path d="M 26 82 C 26 83.5, 38 83.5, 50 83.5" className={visitedPeople.has(4) ? "is-lit" : ""} />
            <path d="M 74 82 C 74 83.5, 62 83.5, 50 83.5" className={visitedPeople.has(5) ? "is-lit" : ""} />
            <path d="M 50 83.5 L 50 88" className={`${visitedPeople.has(4) && visitedPeople.has(5) ? "is-lit" : ""}${currentStep.person === 6 ? " is-current" : ""}`} markerEnd="url(#hp-origin-forward-arrow)" />
            {returnEdges.map((edge) => (
              <path key={edge.id} d={edge.path} className={`hp-origin-flow__return-link${visitedPeople.has(edge.from) ? " is-lit" : ""}${displayedReturnFrom === edge.from && currentStep.person === edge.to ? " is-current" : ""}`} markerEnd="url(#hp-origin-return-arrow)" />
            ))}
            {activeTracePaths.map((path, index) => (
              <path key={`${active}-${displayedPhase}-${index}`} d={path} pathLength={100} className={`hp-origin-flow__active-trace${displayedReturnFrom !== undefined ? " is-return" : ""}`} />
            ))}
          </svg>

          {originInterviewRecords.map((item, index) => (
            <button
              className={`hp-origin-flow__person${visitedPeople.has(index) ? " is-lit" : " is-locked"}${index === currentStep.person ? " is-active" : ""}${index === currentStep.person && displayedReturnFrom !== undefined ? " is-revisit" : ""}${returnedPeople.has(index) ? " has-followup" : ""}`}
              key={item.id}
              ref={(element) => { treeNodeRefs.current[index] = element; }}
              type="button"
              aria-disabled={!visitedPeople.has(index)}
              aria-current={index === currentStep.person ? "step" : undefined}
              aria-label={`${names[index] ?? item.title}: ${item.title}`}
              style={{ left: `${basePoints[index].x}%`, top: `${basePoints[index].y}%` }}
              onClick={() => revisit(index)}
              onMouseEnter={() => setHoveredTreeProfile(index)}
              onMouseLeave={() => setHoveredTreeProfile(null)}
              onFocus={() => setHoveredTreeProfile(index)}
              onBlur={() => setHoveredTreeProfile(null)}
            >
              <span className="hp-origin-flow__person-back" aria-hidden="true" />
              <span className="hp-origin-flow__person-front">
                <span className="hp-origin-flow__portrait" aria-hidden="true"><HpPortrait src={originMedia[index]?.portrait} name={names[index]} /></span>
              </span>
            </button>
          ))}
          {hoveredTreeProfile !== null && (
            <HpFlowTooltip
              anchor={treeNodeRefs.current[hoveredTreeProfile]}
              className="hp-origin-flow__tree-tooltip"
              role="tooltip"
            >
              <strong>{names[hoveredTreeProfile]}</strong>
              <span>{originInterviewRecords[hoveredTreeProfile].title}</span>
            </HpFlowTooltip>
          )}
        </div>

        <div
          className={`hp-origin-flow__card${displayedReturnFrom !== undefined ? " is-followup" : ""}`}
          key={`${record.id}-${active}-${displayedPhase}`}
          ref={cardRef}
          role="region"
          tabIndex={0}
          aria-label={`${names[currentStep.person]} ${displayedLabel} notes`}
          onKeyDown={(event) => {
            if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", "Home", "End", " "].includes(event.key)) {
              event.stopPropagation();
            }
          }}
        >
          <div className="hp-origin-flow__card-head">
            <h3>{names[currentStep.person]}</h3>
            <p>{record.title}</p>
            {currentStep.phase === "followup" && (
              <div className="hp-origin-flow__phase-switch" role="group" aria-label={`${names[currentStep.person]} interview round`}>
                <button type="button" aria-pressed={showingFirst} onClick={() => setFirstViewAtStep(active)}>{firstRoundLabel}</button>
                <button type="button" aria-pressed={!showingFirst} onClick={() => setFirstViewAtStep(null)}>Follow-up</button>
              </div>
            )}
          </div>
          <div className="hp-origin-flow__card-body">
            {visibleParagraphs.map((paragraph, paragraphIndex) => {
              const label = paragraph.match(/^\*\*(.+)\*\*$/);
              return <div className="hp-interview-segment" key={paragraphIndex}>
                {label ? <h4>{label[1]}</h4> : <p>{inline(paragraph)}</p>}
                {paragraphIndex === firstProseIndex && interviewPhotos.map((src) => <HpInterviewPhoto key={src} src={src} name={names[currentStep.person]} />)}
              </div>;
            })}
          </div>
        </div>
        <p className="hp-origin-flow__hint">Scroll to continue · Select a lit portrait to revisit</p>
      </section>
    </div>
  );
}
