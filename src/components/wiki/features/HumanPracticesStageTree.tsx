import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { UserRound } from "lucide-react";
import { humanPracticesTreeCopy } from "../../../data/engagement/humanPracticesTreeCopy";
import { scrollReaderToTarget } from "../../../utils";
import "../../../styles/hp-stage-tree.css";

type Variant = "plasmid" | "in-vitro" | "in-vivo" | "return";
type FlowNode = { id: string; name: string; x: number; y: number; kind?: "milestone" };
type FlowEdge = { id: string; path: string; return?: boolean };
type FlowStep = { node: string; copyKey?: string; edge?: string; followup?: boolean };
type FlowConfig = {
  label: string;
  nodes: FlowNode[];
  edges: FlowEdge[];
  steps: FlowStep[];
};

const configs: Record<Variant, FlowConfig> = {
  plasmid: {
    label: "Plasmid Design",
    nodes: [
      { id: "hu", name: "胡继繁", x: 50, y: 8 },
      { id: "niu", name: "牛俊奇", x: 22, y: 26 },
      { id: "public", name: "公众", x: 78, y: 26 },
      { id: "wang", name: "王医术", x: 50, y: 45 },
      { id: "guan", name: "管青天", x: 50, y: 63 },
      { id: "wu", name: "吴迪", x: 22, y: 81 },
      { id: "meng", name: "孟祥宇", x: 50, y: 93 },
    ],
    edges: [
      { id: "hu-niu", path: "M 50 14 V 18 H 22 V 20" },
      { id: "hu-public", path: "M 50 14 V 18 H 78 V 20" },
      { id: "niu-wang", path: "M 22 32 V 37 H 50 V 39" },
      { id: "public-wang", path: "M 78 32 V 37 H 50 V 39" },
      { id: "wang-guan", path: "M 50 51 V 57" },
      { id: "guan-wu", path: "M 50 69 V 73 H 22 V 75" },
      { id: "guan-meng", path: "M 50 69 V 87" },
      { id: "wu-hu", path: "M 33 81 H 98 V 8 H 61", return: true },
      { id: "hu-guan", path: "M 39 8 H 5 V 63 H 39", return: true },
    ],
    steps: [
      { node: "hu", copyKey: "plasmid-1" },
      { node: "public", copyKey: "plasmid-2", edge: "hu-public" },
      { node: "niu", copyKey: "plasmid-3", edge: "hu-niu" },
      { node: "wang", copyKey: "plasmid-4", edge: "niu-wang" },
      { node: "guan", copyKey: "plasmid-5", edge: "wang-guan" },
      { node: "wu", copyKey: "plasmid-6", edge: "guan-wu" },
      { node: "hu", copyKey: "plasmid-7", edge: "wu-hu", followup: true },
      { node: "guan", copyKey: "plasmid-8", edge: "hu-guan", followup: true },
      { node: "meng", copyKey: "plasmid-9", edge: "guan-meng" },
    ],
  },
  "in-vitro": {
    label: "In Vitro",
    nodes: [
      { id: "yang", name: "杨若晗", x: 23, y: 12 },
      { id: "circular", name: "环化实验完成，但仅凭 RNase R 和凝胶结果无法充分证明成环", x: 75, y: 12, kind: "milestone" },
      { id: "niu", name: "牛俊奇", x: 23, y: 36 },
      { id: "jia", name: "贾琳", x: 23, y: 59 },
      { id: "assays", name: "ELISpot 差异明显，但 K562 杀伤差异较小", x: 75, y: 59, kind: "milestone" },
      { id: "miao", name: "苗蕾", x: 23, y: 85 },
    ],
    edges: [
      { id: "yang-circular", path: "M 34 12 H 55" },
      { id: "circular-yang", path: "M 75 4 V 2 H 23 V 6", return: true },
      { id: "yang-niu", path: "M 23 18 V 30" },
      { id: "niu-jia", path: "M 23 42 V 53" },
      { id: "jia-assays", path: "M 34 59 H 55" },
      { id: "assays-jia", path: "M 75 51 V 47 H 23 V 53", return: true },
      { id: "jia-miao", path: "M 23 65 V 79" },
    ],
    steps: [
      { node: "yang", copyKey: "vitro-1" },
      { node: "circular", edge: "yang-circular" },
      { node: "yang", copyKey: "vitro-2", edge: "circular-yang", followup: true },
      { node: "niu", copyKey: "vitro-3", edge: "yang-niu" },
      { node: "jia", copyKey: "vitro-4", edge: "niu-jia" },
      { node: "assays", edge: "jia-assays" },
      { node: "jia", copyKey: "vitro-5", edge: "assays-jia", followup: true },
      { node: "miao", copyKey: "vitro-6", edge: "jia-miao" },
    ],
  },
  "in-vivo": {
    label: "In Vivo",
    nodes: [
      { id: "hu", name: "胡正", x: 50, y: 8 },
      { id: "zhang", name: "张宇宁", x: 50, y: 21 },
      { id: "song", name: "宋海明", x: 50, y: 34 },
      { id: "tianmeng", name: "孙天盟", x: 24, y: 51 },
      { id: "guangjie", name: "孙广杰", x: 76, y: 51 },
      { id: "cui", name: "崔久嵬", x: 50, y: 68 },
      { id: "zhao", name: "赵铁锁", x: 50, y: 85 },
    ],
    edges: [
      { id: "hu-zhang", path: "M 50 14 V 15" },
      { id: "zhang-song", path: "M 50 27 V 28" },
      { id: "song-tianmeng", path: "M 50 40 V 43 H 24 V 45" },
      { id: "song-guangjie", path: "M 50 40 V 43 H 76 V 45" },
      { id: "tianmeng-cui", path: "M 24 57 V 61 H 50 V 62" },
      { id: "guangjie-cui", path: "M 76 57 V 61 H 50 V 62" },
      { id: "cui-zhao", path: "M 50 74 V 79" },
      { id: "zhao-cui", path: "M 61 85 H 96 V 68 H 61", return: true },
    ],
    steps: [
      { node: "hu", copyKey: "vivo-1" },
      { node: "zhang", copyKey: "vivo-2", edge: "hu-zhang" },
      { node: "song", copyKey: "vivo-3", edge: "zhang-song" },
      { node: "tianmeng", copyKey: "vivo-4", edge: "song-tianmeng" },
      { node: "guangjie", copyKey: "vivo-5", edge: "song-guangjie" },
      { node: "cui", copyKey: "vivo-6", edge: "guangjie-cui" },
      { node: "zhao", copyKey: "vivo-7", edge: "cui-zhao" },
      { node: "cui", copyKey: "vivo-8", edge: "zhao-cui", followup: true },
    ],
  },
  return: {
    label: "Return",
    nodes: [
      { id: "survey", name: "质粒构建中的公众问卷调查", x: 50, y: 7, kind: "milestone" },
      { id: "yang", name: "杨淑娟", x: 24, y: 20 },
      { id: "hu", name: "胡远超", x: 76, y: 20 },
      { id: "tian", name: "田润辉", x: 24, y: 34 },
      { id: "patients", name: "患者", x: 76, y: 34 },
      { id: "family", name: "患者家属", x: 24, y: 48 },
      { id: "wang", name: "王建国", x: 76, y: 48 },
      { id: "jing", name: "Jing Wen", x: 24, y: 62 },
      { id: "jia", name: "贾永立", x: 76, y: 62 },
      { id: "qiao", name: "乔君华", x: 24, y: 76 },
      { id: "companies", name: "吉卡与吉恩致和", x: 76, y: 76 },
      { id: "yu", name: "于双成", x: 50, y: 90 },
    ],
    edges: [
      { id: "survey-hu", path: "M 50 13 V 15 H 76 V 16" },
      { id: "yang-hu", path: "M 35 20 H 65" },
      { id: "hu-tian", path: "M 76 26 V 29 H 24 V 30" },
      { id: "tian-patients", path: "M 35 34 H 65" },
      { id: "patients-family", path: "M 76 40 V 43 H 24 V 44" },
      { id: "family-wang", path: "M 35 48 H 65" },
      { id: "patients-wang", path: "M 76 40 V 42" },
      { id: "wang-jing", path: "M 76 54 V 57 H 24 V 58" },
      { id: "jing-jia", path: "M 35 62 H 65" },
      { id: "jia-qiao", path: "M 76 68 V 71 H 24 V 72" },
      { id: "qiao-companies", path: "M 35 76 H 65" },
      { id: "companies-yu", path: "M 76 82 V 85 H 50 V 86" },
      { id: "wang-yang", path: "M 87 48 H 96 V 3 H 24 V 14", return: true },
      { id: "yu-yang", path: "M 61 90 H 99 V 1 H 24 V 14", return: true },
      { id: "yu-hu", path: "M 61 90 H 93 V 5 H 76 V 14", return: true },
    ],
    steps: [
      { node: "survey", copyKey: "plasmid-2" },
      { node: "yang", copyKey: "return-1" },
      { node: "hu", copyKey: "return-2", edge: "yang-hu" },
      { node: "tian", copyKey: "return-3", edge: "hu-tian" },
      { node: "patients", copyKey: "return-4", edge: "tian-patients" },
      { node: "family", copyKey: "return-5", edge: "patients-family" },
      { node: "wang", copyKey: "return-6", edge: "family-wang" },
      { node: "yang", copyKey: "return-12", edge: "wang-yang", followup: true },
      { node: "jing", copyKey: "return-7", edge: "wang-jing" },
      { node: "jia", copyKey: "return-8", edge: "jing-jia" },
      { node: "qiao", copyKey: "return-9", edge: "jia-qiao" },
      { node: "companies", copyKey: "return-10", edge: "qiao-companies" },
      { node: "yu", copyKey: "return-11", edge: "companies-yu" },
      { node: "yang", copyKey: "return-13", edge: "yu-yang", followup: true },
      { node: "hu", copyKey: "return-14", edge: "yu-hu", followup: true },
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

function interviewFor(copyKey?: string) {
  return copyKey ? humanPracticesTreeCopy[copyKey] ?? null : null;
}

export function HumanPracticesStageTree({ variant }: { variant: Variant }) {
  const config = configs[variant];
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
      const nextSection = direction > 0 && activeRef.current === config.steps.length - 1
        ? root.closest(".wiki-section")?.nextElementSibling
        : null;
      if (direction > 0 && activeRef.current === config.steps.length - 1 && !(nextSection instanceof HTMLElement)) return;
      event.preventDefault();
      if (gestureRef.current.active) { holdGesture(); return; }
      holdGesture();
      if (scrolled < step * 0.72) { goToStep(0); return; }
      if (direction > 0 && activeRef.current === config.steps.length - 1) {
        if (nextSection instanceof HTMLElement) scrollReaderToTarget(nextSection, inner, "smooth");
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

  useEffect(() => { setShowFirst(false); }, [active]);
  useEffect(() => { cardRef.current?.scrollTo({ top: 0 }); }, [active, showFirst]);

  const step = config.steps[active];
  const node = config.nodes.find((item) => item.id === step.node)!;
  const firstStep = config.steps.find((item) => item.node === step.node && item.copyKey && !item.followup);
  const displayedStep = showFirst && step.followup && firstStep ? firstStep : step;
  const interview = interviewFor(displayedStep.copyKey);
  const visited = new Set(config.steps.slice(0, unlocked + 1).map((item) => item.node));
  const returned = new Set(config.steps.slice(0, unlocked + 1).filter((item) => item.followup).map((item) => item.node));
  const hoveredNode = config.nodes.find((item) => item.id === hovered);
  const hoveredStep = config.steps.find((item) => item.node === hovered && item.copyKey && !item.followup);
  const hoveredInterview = interviewFor(hoveredStep?.copyKey);
  const hoverContext = hoveredInterview?.paragraphs.find((paragraph) => !paragraph.startsWith("**")) ?? "";
  const activeEdge = config.edges.find((item) => item.id === displayedStep.edge);
  const stopHoverTimer = () => { if (hoverTimer.current) clearTimeout(hoverTimer.current); hoverTimer.current = null; };
  const hideHoverSoon = () => { stopHoverTimer(); hoverTimer.current = setTimeout(() => setHovered(null), 160); };

  return (
    <div className={`hp-stage-flow hp-stage-flow--${variant}${overview ? " is-overview" : ""}`} ref={rootRef} style={{ height: `calc(var(--hp-stage-step) * ${config.steps.length + 1})` }}>
      {config.steps.map((item, index) => <span className="hp-stage-flow__step" id={`hp-${variant}-step-${index}`} key={`${item.node}-${index}`} style={{ top: `${(index + 1) / (config.steps.length + 1) * 100}%` }} aria-hidden="true" />)}
      <section className="hp-stage-flow__stage" aria-label={`${config.label} stakeholder flow`}>
        <header className="hp-stage-flow__heading">
          <span>{config.label}</span>
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
