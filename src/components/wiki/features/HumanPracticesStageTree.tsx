import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { UserRound } from "lucide-react";
import { humanPracticesPage } from "../../../data/engagement/humanPracticesPage";
import { scrollReaderToTarget } from "../../../utils";
import type { WikiContentBlock } from "../wikiPageTypes";
import "../../../styles/hp-stage-tree.css";

type Variant = "plasmid" | "in-vivo" | "in-vitro";
type FlowNode = { id: string; name: string; x: number; y: number; kind?: "milestone" };
type FlowEdge = { id: string; path: string; return?: boolean };
type FlowStep = { node: string; headingId?: string; edge?: string; followup?: boolean };
type FlowConfig = {
  sectionId: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  steps: FlowStep[];
};

const configs: Record<Variant, FlowConfig> = {
  plasmid: {
    sectionId: "hp-plasmid-design",
    nodes: [
      { id: "hu", name: "胡继繁", x: 50, y: 8 },
      { id: "public", name: "公众与社区", x: 23, y: 28 },
      { id: "wang", name: "王医术", x: 77, y: 28 },
      { id: "niu", name: "牛俊奇", x: 23, y: 48 },
      { id: "guan", name: "管青天", x: 77, y: 48 },
      { id: "wu", name: "吴迪", x: 77, y: 68 },
      { id: "meng", name: "孟祥宇", x: 77, y: 88 },
    ],
    edges: [
      { id: "hu-public", path: "M 50 14 V 18 H 23 V 22" },
      { id: "hu-wang", path: "M 50 14 V 18 H 77 V 22" },
      { id: "public-niu", path: "M 23 34 V 42" },
      { id: "wang-guan", path: "M 77 34 V 42" },
      { id: "guan-wu", path: "M 77 54 V 62" },
      { id: "wu-meng", path: "M 77 74 V 82" },
      { id: "niu-public", path: "M 12 48 H 5 V 28 H 12", return: true },
      { id: "wu-guan", path: "M 88 68 H 95 V 48 H 88", return: true },
      { id: "guan-meng", path: "M 66 48 H 60 V 88 H 66", return: true },
      { id: "meng-hu", path: "M 88 88 H 99 V 8 H 61", return: true },
    ],
    steps: [
      { node: "hu", headingId: "hp-hp-plasmid-design-14" },
      { node: "public", headingId: "hp-hp-plasmid-design-16", edge: "hu-public" },
      { node: "niu", headingId: "hp-hp-plasmid-design-17", edge: "public-niu" },
      { node: "public", headingId: "hp-hp-plasmid-design-18", edge: "niu-public", followup: true },
      { node: "wang", headingId: "hp-hp-plasmid-design-20", edge: "hu-wang" },
      { node: "guan", headingId: "hp-hp-plasmid-design-21", edge: "wang-guan" },
      { node: "wu", headingId: "hp-hp-plasmid-design-22", edge: "guan-wu" },
      { node: "guan", headingId: "hp-hp-plasmid-design-23", edge: "wu-guan", followup: true },
      { node: "meng", headingId: "hp-hp-plasmid-design-24", edge: "guan-meng" },
      { node: "hu", headingId: "hp-hp-plasmid-design-25", edge: "meng-hu", followup: true },
    ],
  },
  "in-vivo": {
    sectionId: "hp-in-vivo",
    nodes: [
      { id: "yang", name: "杨若晗", x: 50, y: 8 },
      { id: "circular", name: "环化实验 · 体外转录、环化、纯化、凝胶与 RNase R 数据", x: 50, y: 25, kind: "milestone" },
      { id: "niu", name: "牛俊奇", x: 23, y: 47 },
      { id: "jia", name: "贾琳", x: 77, y: 47 },
      { id: "assays", name: "ELISpot 实验 + K562 实验 → 获得两套数据", x: 50, y: 69, kind: "milestone" },
      { id: "miao", name: "苗蕾", x: 50, y: 89 },
    ],
    edges: [
      { id: "yang-circular", path: "M 50 14 V 18" },
      { id: "circular-niu", path: "M 50 32 V 36 H 23 V 41" },
      { id: "circular-jia", path: "M 50 32 V 36 H 77 V 41" },
      { id: "niu-jia", path: "M 34 47 H 66" },
      { id: "jia-assays", path: "M 77 53 V 59 H 50 V 62" },
      { id: "assays-miao", path: "M 50 76 V 83" },
      { id: "circular-yang", path: "M 39 25 H 10 V 8 H 39", return: true },
      { id: "assays-jia", path: "M 61 69 H 95 V 47 H 88", return: true },
    ],
    steps: [
      { node: "yang", headingId: "hp-hp-in-vivo-26" },
      { node: "circular", edge: "yang-circular" },
      { node: "yang", headingId: "hp-hp-in-vivo-27", edge: "circular-yang", followup: true },
      { node: "niu", headingId: "hp-hp-in-vivo-28", edge: "circular-niu" },
      { node: "jia", headingId: "hp-hp-in-vivo-29", edge: "circular-jia" },
      { node: "assays", edge: "jia-assays" },
      { node: "jia", headingId: "hp-hp-in-vivo-30", edge: "assays-jia", followup: true },
      { node: "miao", headingId: "hp-hp-in-vivo-31", edge: "assays-miao" },
    ],
  },
  "in-vitro": {
    sectionId: "hp-in-vitro",
    nodes: [
      { id: "huzheng", name: "胡正", x: 24, y: 22 },
      { id: "song", name: "宋海明", x: 76, y: 22 },
      { id: "lock", name: "PRE-ANIMAL LOCK · 预测冻结 → Animal validation", x: 50, y: 68, kind: "milestone" },
    ],
    edges: [
      { id: "hu-song", path: "M 35 22 H 65" },
      { id: "hu-lock", path: "M 24 28 V 44 H 50 V 61" },
      { id: "song-lock", path: "M 76 28 V 44 H 50 V 61" },
      { id: "lock-hu", path: "M 39 68 H 7 V 22 H 13", return: true },
    ],
    steps: [
      { node: "huzheng", headingId: "hp-hp-in-vitro-32" },
      { node: "song", headingId: "hp-hp-in-vitro-34", edge: "hu-song" },
      { node: "lock", edge: "song-lock" },
      { node: "huzheng", headingId: "hp-hp-in-vitro-33", edge: "lock-hu", followup: true },
    ],
  },
};

function inline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+?\*\*)/g).map((part, index) =>
    part.startsWith("**") && part.endsWith("**")
      ? <strong key={index}>{part.slice(2, -2)}</strong>
      : part,
  );
}

function interviewFor(sectionId: string, headingId?: string) {
  if (!headingId) return null;
  const blocks = humanPracticesPage.sections.find((section) => section.id === sectionId)?.blocks ?? [];
  const start = blocks.findIndex((block) => block.type === "subheading" && block.id === headingId);
  if (start < 0) return null;
  const heading = blocks[start];
  if (heading.type !== "subheading") return null;
  const next = blocks.findIndex((block, index) => index > start && block.type === "subheading");
  const content = blocks.slice(start + 1, next < 0 ? undefined : next);
  const paragraphs = content.flatMap((block: WikiContentBlock) => block.type === "prose" ? block.paragraphs : []);
  return { title: heading.title, paragraphs: paragraphs.filter((paragraph) => paragraph !== "---") };
}

export function HumanPracticesStageTree({ variant }: { variant: Variant }) {
  const config = configs[variant];
  const section = humanPracticesPage.sections.find((item) => item.id === config.sectionId);
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef(0);
  const navigationRef = useRef<{ index: number; expiresAt: number } | null>(null);
  const gestureRef = useRef<{ active: boolean; releaseAt: number; timer: ReturnType<typeof setTimeout> | null }>({ active: false, releaseAt: 0, timer: null });
  const hoverTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [active, setActive] = useState(0);
  const [unlocked, setUnlocked] = useState(0);
  const [overview, setOverview] = useState(true);
  const [hovered, setHovered] = useState<string | null>(null);
  const [showFirst, setShowFirst] = useState(false);

  const goToStep = useCallback((index: number) => {
    const root = rootRef.current;
    const inner = root?.closest<HTMLElement>(".route-frame__scroll");
    const marker = root?.querySelector<HTMLElement>(`#hp-${variant}-step-${index}`);
    if (!inner || !marker) return;
    navigationRef.current = { index, expiresAt: performance.now() + 1200 };
    activeRef.current = index;
    setActive(index);
    setOverview(false);
    setUnlocked((previous) => Math.max(previous, index));
    scrollReaderToTarget(marker, inner, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth");
  }, [variant]);

  useEffect(() => {
    const root = rootRef.current;
    const inner = root?.closest<HTMLElement>(".route-frame__scroll");
    if (!root || !inner) return;
    root.closest<HTMLElement>("[data-wiki-reveal]")?.classList.add("is-visible");
    let frame = 0;
    const update = () => {
      frame = 0;
      const step = root.offsetHeight / (config.steps.length + 1);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      const isOverview = scrolled < step * 0.72;
      setOverview(isOverview);
      if (isOverview) return;
      const index = Math.max(0, Math.min(config.steps.length - 1, Math.floor((scrolled - step + step * 0.25) / step)));
      const navigation = navigationRef.current;
      if (navigation) {
        if (performance.now() < navigation.expiresAt && Math.abs(scrolled - (navigation.index + 1) * step) > 64) return;
        navigationRef.current = null;
      }
      activeRef.current = index;
      setActive(index);
      setUnlocked((previous) => Math.max(previous, index));
    };
    const requestUpdate = () => { if (!frame) frame = requestAnimationFrame(update); };
    const holdGesture = () => {
      const gesture = gestureRef.current;
      if (!gesture.active) gesture.releaseAt = performance.now() + 420;
      gesture.active = true;
      if (gesture.timer) clearTimeout(gesture.timer);
      gesture.timer = setTimeout(() => { gesture.active = false; gesture.timer = null; }, Math.max(170, gesture.releaseAt - performance.now()));
    };
    const handleWheel = (event: WheelEvent) => {
      if (Math.abs(event.deltaY) < 1) return;
      const target = event.target instanceof Element ? event.target : null;
      if (!target || target.closest(".hp-stage-flow") !== root) return;
      const step = root.offsetHeight / (config.steps.length + 1);
      const scrolled = inner.getBoundingClientRect().top - root.getBoundingClientRect().top;
      if (scrolled < -48 || scrolled > root.offsetHeight - step + 48) return;
      const direction = Math.sign(event.deltaY);
      const card = target.closest<HTMLElement>(".hp-stage-flow__card");
      const cardBody = card?.querySelector<HTMLElement>(".hp-stage-flow__card-body");
      if (cardBody) {
        const remaining = cardBody.scrollHeight - cardBody.clientHeight - cardBody.scrollTop;
        if (direction > 0 ? remaining > 2 : cardBody.scrollTop > 2) {
          event.preventDefault();
          const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? cardBody.clientHeight : 1);
          cardBody.scrollTop += delta;
          return;
        }
      }
      if (direction < 0 && scrolled < step * 0.72) return;
      event.preventDefault();
      if (gestureRef.current.active) { holdGesture(); return; }
      holdGesture();
      if (scrolled < step * 0.72) { goToStep(0); return; }
      if (direction > 0 && activeRef.current === config.steps.length - 1) {
        const next = root.closest(".wiki-section")?.nextElementSibling;
        if (next instanceof HTMLElement) scrollReaderToTarget(next, inner, "smooth");
        return;
      }
      if (direction < 0 && activeRef.current === 0) {
        navigationRef.current = null;
        scrollReaderToTarget(root, inner, "smooth");
        return;
      }
      goToStep(Math.max(0, Math.min(config.steps.length - 1, activeRef.current + direction)));
    };
    inner.addEventListener("scroll", requestUpdate, { passive: true });
    inner.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate, { passive: true });
    update();
    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (gestureRef.current.timer) clearTimeout(gestureRef.current.timer);
      if (hoverTimer.current) clearTimeout(hoverTimer.current);
      inner.removeEventListener("scroll", requestUpdate);
      inner.removeEventListener("wheel", handleWheel);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [config, goToStep]);

  useEffect(() => { cardRef.current?.scrollTo({ top: 0 }); setShowFirst(false); }, [active]);

  const step = config.steps[active];
  const node = config.nodes.find((item) => item.id === step.node)!;
  const firstStep = config.steps.find((item) => item.node === step.node && item.headingId && !item.followup);
  const displayedStep = showFirst && step.followup && firstStep ? firstStep : step;
  const interview = interviewFor(config.sectionId, displayedStep.headingId);
  const visited = new Set(config.steps.slice(0, unlocked + 1).map((item) => item.node));
  const returned = new Set(config.steps.slice(0, unlocked + 1).filter((item) => item.followup).map((item) => item.node));
  const hoveredNode = config.nodes.find((item) => item.id === hovered);
  const hoveredStep = config.steps.find((item) => item.node === hovered && item.headingId && !item.followup);
  const hoveredInterview = interviewFor(config.sectionId, hoveredStep?.headingId);
  const hoverContext = hoveredInterview?.paragraphs.find((paragraph) => !paragraph.startsWith("**")) ?? "";
  const activeEdge = config.edges.find((item) => item.id === displayedStep.edge);
  const stopHoverTimer = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); hoverTimer.current = null; };
  const hideHoverSoon = () => { stopHoverTimer(); hoverTimer.current = setTimeout(() => setHovered(null), 160); };

  return (
    <div className={`hp-stage-flow hp-stage-flow--${variant}${overview ? " is-overview" : ""}`} ref={rootRef} style={{ height: `calc(var(--hp-stage-step) * ${config.steps.length + 1})` }}>
      {config.steps.map((item, index) => <span className="hp-stage-flow__step" id={`hp-${variant}-step-${index}`} key={`${item.node}-${index}`} style={{ top: `${(index + 1) / (config.steps.length + 1) * 100}%` }} aria-hidden="true" />)}
      <section className="hp-stage-flow__stage" aria-label={`${section?.navLabel ?? "Human Practices"} stakeholder flow`}>
        <header className="hp-stage-flow__heading">
          <span>{section?.navLabel}</span>
          <strong>{overview ? "Stakeholder flow" : "Stakeholder interviews"}</strong>
          {!overview && <small>{String(active + 1).padStart(2, "0")} / {String(config.steps.length).padStart(2, "0")}</small>}
        </header>
        <div className="hp-stage-flow__tree" aria-label="Interview sequence">
          <svg className="hp-stage-flow__links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id={`hp-${variant}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="4" markerHeight="4" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 Z" /></marker>
            </defs>
            {config.edges.map((edge) => <path key={edge.id} d={edge.path} className={`hp-stage-flow__link${edge.return ? " is-return" : ""}${edge.id === activeEdge?.id && !overview ? " is-current" : ""}`} markerEnd={`url(#hp-${variant}-arrow)`} />)}
            {!overview && activeEdge && <path key={`${active}-${showFirst}`} d={activeEdge.path} pathLength={100} className={`hp-stage-flow__trace${activeEdge.return ? " is-return" : ""}`} />}
          </svg>
          {config.nodes.map((item) => {
            const isActive = !overview && item.id === displayedStep.node;
            const isReturned = returned.has(item.id);
            return (
              <button
                key={item.id}
                type="button"
                className={`hp-stage-flow__node${item.kind === "milestone" ? " is-milestone" : ""}${isActive ? " is-active" : ""}${isActive && displayedStep.followup ? " is-followup" : ""}${isReturned ? " has-followup" : ""}${!overview && !visited.has(item.id) ? " is-future" : ""}`}
                style={{ left: `${item.x}%`, top: `${item.y}%` }}
                aria-label={item.name}
                aria-current={isActive ? "step" : undefined}
                onMouseEnter={() => { stopHoverTimer(); setHovered(item.id); }}
                onMouseLeave={hideHoverSoon}
                onFocus={() => setHovered(item.id)}
                onBlur={hideHoverSoon}
                onClick={() => {
                  const previous = config.steps.slice(0, unlocked + 1).map((candidate, index) => candidate.node === item.id ? index : -1).filter((index) => index >= 0).at(-1);
                  if (previous !== undefined) goToStep(previous);
                }}
              >
                <span className="hp-stage-flow__node-back" aria-hidden="true" />
                <span className="hp-stage-flow__node-front">{item.kind === "milestone" ? <span className="hp-stage-flow__milestone-label">{item.name}</span> : <span className="hp-stage-flow__portrait" aria-hidden="true"><UserRound size={30} strokeWidth={1.5} /></span>}</span>
              </button>
            );
          })}
          {hoveredNode && <aside className={`hp-stage-flow__tooltip${hoveredNode.x > 50 ? " is-left" : ""}`} style={{ left: `${hoveredNode.x}%`, top: `${hoveredNode.y}%` }} onMouseEnter={stopHoverTimer} onMouseLeave={hideHoverSoon}>
            <strong>{hoveredNode.name}</strong>
            {hoveredInterview && <span>{hoveredInterview.title}</span>}
            {hoverContext && <p>{inline(hoverContext)}</p>}
          </aside>}
        </div>
        {!overview && <article className={`hp-stage-flow__card${displayedStep.followup ? " is-followup" : ""}`}>
          <div className="hp-stage-flow__card-head">
            <span>{String(active + 1).padStart(2, "0")} / {String(config.steps.length).padStart(2, "0")}{displayedStep.followup ? " · Follow-up" : ""}</span>
            <h3>{interview?.title ?? node.name}</h3>
            {step.followup && firstStep && <div className="hp-stage-flow__rounds" role="group" aria-label={`${node.name} interview round`}>
              <button type="button" className={showFirst ? "is-selected" : ""} onClick={() => setShowFirst(true)}>First interview</button>
              <button type="button" className={!showFirst ? "is-selected" : ""} onClick={() => setShowFirst(false)}>Follow-up</button>
            </div>}
          </div>
          <div className="hp-stage-flow__card-body" ref={cardRef}>
            {interview ? interview.paragraphs.map((paragraph, index) => paragraph.startsWith("**") && paragraph.endsWith("**")
              ? <h4 key={index}>{paragraph.slice(2, -2)}</h4>
              : <p key={index}>{inline(paragraph)}</p>) : <p>{node.name}</p>}
          </div>
        </article>}
        <p className="hp-stage-flow__hint">{overview ? "Hover over a node for context · Scroll to follow the sequence" : "Scroll to continue · Select a visited node to revisit"}</p>
      </section>
    </div>
  );
}
