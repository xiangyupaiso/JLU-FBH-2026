import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type RefObject,
} from "react";
import { createPortal } from "react-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  ENGINEERING_ITERATIONS,
  TIME_CYCLES,
  engineeringPage,
  type EngineeringIterationDatum,
} from "../../../../data/project/engineeringPage";
import { engineeringReferenceStages } from "../../../../data/project/engineeringRecordAdditions";
import type {
  WikiContentBlock,
  WikiDbTLStage,
  WikiDbTLStageKey,
  WikiSection,
} from "../../wikiPageTypes";
import { EngineeringOutline } from "./EngineeringPanels";
import gearTSrc from "../../../../assets/wiki/engineering/engineering-gear-t.webp";
import gearTActiveSrc from "../../../../assets/wiki/engineering/engineering-gear-t-active.webp";
import gearISrc from "../../../../assets/wiki/engineering/engineering-gear-i.webp";
import gearIActiveSrc from "../../../../assets/wiki/engineering/engineering-gear-i-active.webp";
import gearMSrc from "../../../../assets/wiki/engineering/engineering-gear-m.webp";
import gearMActiveSrc from "../../../../assets/wiki/engineering/engineering-gear-m-active.webp";
import gearESrc from "../../../../assets/wiki/engineering/engineering-gear-e.webp";
import gearEActiveSrc from "../../../../assets/wiki/engineering/engineering-gear-e-active.webp";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface IterationRecord {
  iteration: EngineeringIterationDatum;
  stages: WikiDbTLStage[];
}
interface Selection {
  id: string;
  stage: WikiDbTLStageKey;
}
type Navigate = (
  iteration: EngineeringIterationDatum,
  stage?: WikiDbTLStageKey,
) => void;
type Register = (
  id: string,
  navigate: (stage: WikiDbTLStageKey) => void,
) => () => void;
const STAGE_KEYS: WikiDbTLStageKey[] = ["design", "build", "test", "learn"];

// Keep Cycle 1's published blocks intact, placing its bibliography at the
// stage recorded in the source brief. Cycle 2 already carries stage references.
function iterationRecords(section: WikiSection): IterationRecord[] {
  const records: IterationRecord[] = [];
  let current: IterationRecord | undefined;
  for (const block of section.blocks ?? []) {
    if (block.type === "subheading") {
      const iteration = ENGINEERING_ITERATIONS.find((it) => it.id === block.id);
      current = iteration ? { iteration, stages: [] } : undefined;
      if (current) records.push(current);
    } else if (block.type === "dbtl" && current) {
      current.stages = block.stages.map((stage) => ({
        ...stage,
        blocks: [...stage.blocks],
      }));
    } else if (block.type === "references" && current) {
      const locations = engineeringReferenceStages[current.iteration.index];
      for (const stage of current.stages) {
        const items = block.items.filter(
          (entry) => entry.href && locations?.[entry.href] === stage.key,
        );
        if (items.length) stage.blocks.push({ type: "references", items });
      }
    }
  }
  return records;
}

const cycles = engineeringPage.sections
  .slice(1)
  .map((section) => ({ section, records: iterationRecords(section) }));

// Only ordinary article headings follow the shared marker/colon treatment.
// The dial scenes and Next page retain their distinct editorial typography.
function EngineeringArticleHeading({ title }: { title: string }) {
  const colon = title.search(/[:：]/);
  if (colon < 0) return <span className="wiki-heading-marker">{title}</span>;
  const lead = title.slice(0, colon + 1);
  const sub = title.slice(colon + 1).trim();
  return (
    <>
      <span className="wiki-heading-line wiki-heading-line--lead">
        <span className="wiki-heading-marker wiki-heading-marker--lead">
          {lead}
        </span>
      </span>
      {sub ? (
        <span className="wiki-heading-line wiki-heading-line--sub">
          <span className="wiki-heading-marker wiki-heading-marker--sub">
            {sub}
          </span>
        </span>
      ) : null}
    </>
  );
}

function InlineCopy({ text }: { text: string }) {
  return (
    <>
      {text
        .split(
          /(\*\*[^*]+?\*\*|(?<![\w*])\*[^*\n]+?\*(?![\w*])|\[[^\]\n]+\]\(https?:\/\/[^\s)]+\))/g,
        )
        .map((part, index) => {
          if (part.startsWith("**") && part.endsWith("**"))
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          if (part.startsWith("*") && part.endsWith("*"))
            return <em key={index}>{part.slice(1, -1)}</em>;
          const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
          return link ? (
            <a
              className="wiki-prose-link"
              key={index}
              href={link[2]}
              target="_blank"
              rel="noreferrer"
            >
              {link[1]}
            </a>
          ) : (
            part
          );
        })}
    </>
  );
}

function EngineeringBlock({ block }: { block: WikiContentBlock }) {
  switch (block.type) {
    case "prose":
      return (
        <div className="wiki-prose">
          {block.paragraphs.map((text, index) => (
            <p key={index}>
              <InlineCopy text={text} />
            </p>
          ))}
        </div>
      );
    case "callout":
      if (block.label === "How to read this page")
        return (
          <details
            className="eng-reading-tips"
            onToggle={() => ScrollTrigger.refresh()}
          >
            <summary>
              <span>{block.label}</span>
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </summary>
            <div className="eng-reading-tips__body">
              <p>
                <InlineCopy text={block.body} />
              </p>
            </div>
          </details>
        );
      return (
        <aside className="wiki-callout" data-tone={block.tone}>
          {block.label ? <h3>{block.label}</h3> : null}
          <p>
            <InlineCopy text={block.body} />
          </p>
        </aside>
      );
    case "table":
      return (
        <div
          className="wiki-table-wrap"
          role="region"
          aria-label={block.caption ?? "Engineering comparison"}
          tabIndex={0}
        >
          <table className="wiki-table">
            {block.caption ? <caption>{block.caption}</caption> : null}
            <thead>
              <tr>
                {block.headers.map((header) => (
                  <th key={header} scope="col">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, index) => (
                <tr key={index}>
                  {row.map((cell, col) => (
                    <td key={col}>
                      <InlineCopy text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "image-placeholder":
      return (
        <figure className="wiki-figure wiki-figure--placeholder">
          <div
            className="wiki-image-placeholder"
            role="img"
            aria-label={`Reserved figure: ${block.filename}`}
          >
            <strong>{block.filename}</strong>
            <p>{block.instruction}</p>
          </div>
          {block.caption ? (
            <figcaption>
              <InlineCopy text={block.caption} />
            </figcaption>
          ) : null}
        </figure>
      );
    case "figure":
      return (
        <figure className="wiki-figure">
          <img
            src={block.src}
            alt={block.alt}
            loading="lazy"
            decoding="async"
          />
          {block.caption ? (
            <figcaption>
              <InlineCopy text={block.caption} />
            </figcaption>
          ) : null}
        </figure>
      );
    case "references":
      return (
        <aside className="eng-stage-references" aria-label="References">
          <ol>
            {block.items.map((entry, index) => (
              <li key={`${entry.href}-${index}`}>
                <span aria-hidden="true">[{index + 1}] </span>
                {entry.text}{" "}
                {entry.href ? (
                  <a href={entry.href} target="_blank" rel="noreferrer">
                    {entry.hrefLabel ?? "Source"}
                  </a>
                ) : null}
              </li>
            ))}
          </ol>
        </aside>
      );
    default:
      return null;
  }
}

export function EngineeringIntroduction({ section }: { section: WikiSection }) {
  const firstIteration =
    section.blocks?.findIndex((block) => block.type === "subheading") ?? -1;
  const blocks =
    firstIteration < 0
      ? section.blocks
      : section.blocks?.slice(0, firstIteration);
  return (
    <section className="eng-introduction" id={section.id}>
      <header className="eng-introduction__heading">
        <h2>
          <EngineeringArticleHeading title={section.title} />
        </h2>
      </header>
      <div className="wiki-blocks">
        {blocks?.map((block, index) => (
          <EngineeringBlock block={block} key={index} />
        ))}
      </div>
    </section>
  );
}

function CycleScenes({
  section,
  records,
  selection,
  onChange,
  register,
  onNavigate,
}: {
  section: WikiSection;
  records: IterationRecord[];
  selection: Selection;
  onChange: (selection: Selection) => void;
  register: Register;
  onNavigate: Navigate;
}) {
  const root = useRef<HTMLDivElement>(null);
  const current =
    records.find((record) => record.iteration.id === selection.id) ??
    records[0];
  const activeStage =
    current.iteration.id === selection.id ? selection.stage : "design";

  useGSAP(
    () => {
      const element = root.current;
      if (!element) return;
      const media = gsap.matchMedia();
      media.add(
        {
          animated:
            "(min-width: 981px) and (prefers-reduced-motion: no-preference)",
          readable: "(max-width: 980px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          const slides = Array.from(
            element.querySelectorAll<HTMLElement>(".eng-scene"),
          );
          const stages = Array.from(
            element.querySelectorAll<HTMLElement>(".eng-stage"),
          );
          const cleanups: Array<() => void> = [];

          if (!context.conditions?.animated) {
            stages.forEach((stage) => {
              stage.inert = false;
              stage.removeAttribute("aria-hidden");
            });
            slides.forEach((slide) => {
              slide.inert = false;
              slide.removeAttribute("aria-hidden");
            });
            records.forEach((record) =>
              cleanups.push(
                register(record.iteration.id, (key) => {
                  const target = document.getElementById(
                    key === "design"
                      ? record.iteration.id
                      : `${record.iteration.id}-${key}`,
                  );
                  target?.scrollIntoView({
                    behavior: "instant",
                    block: "start",
                  });
                  onChange({ id: record.iteration.id, stage: key });
                }),
              ),
            );
            const observer = new IntersectionObserver(
              (entries) => {
                const visible = entries
                  .filter((entry) => entry.isIntersecting)
                  .sort(
                    (a, b) =>
                      a.boundingClientRect.top - b.boundingClientRect.top,
                  )[0];
                const target = visible?.target as HTMLElement | undefined;
                if (target?.dataset.iteration && target.dataset.dbtlStage)
                  onChange({
                    id: target.dataset.iteration,
                    stage: target.dataset.dbtlStage as WikiDbTLStageKey,
                  });
              },
              { rootMargin: "-15% 0px -60% 0px", threshold: 0 },
            );
            stages.forEach((stage) => observer.observe(stage));
            return () => {
              observer.disconnect();
              cleanups.forEach((cleanup) => cleanup());
            };
          }

          const track = element.querySelector<HTMLElement>(".eng-slides");
          const clip = element.querySelector<HTMLElement>(".eng-slides-clip");
          if (!track || !clip) return;
          const markers: Array<{
            time: number;
            selection: Selection;
            panel: HTMLElement;
            slide: HTMLElement;
          }> = [];
          gsap.set(stages, { autoAlpha: 0 });
          gsap.set(stages[0], { autoAlpha: 1 });
          const timeline = gsap.timeline({ paused: true });
          let cursor = 0;
          records.forEach((record, slideIndex) => {
            const panels = Array.from(
              slides[slideIndex].querySelectorAll<HTMLElement>(".eng-stage"),
            );
            record.stages.forEach((stage, stageIndex) => {
              const panel = panels[stageIndex];
              const content =
                panel.querySelector<HTMLElement>(".eng-stage-content");
              const viewport =
                panel.querySelector<HTMLElement>(".eng-stage-body");
              const label = `${record.iteration.id}-${stage.key}`;
              timeline.addLabel(label, cursor);
              markers.push({
                time: cursor,
                selection: { id: record.iteration.id, stage: stage.key },
                panel,
                slide: slides[slideIndex],
              });
              if (slideIndex > 0 || stageIndex > 0)
                timeline.to(panel, { autoAlpha: 1, duration: 0.14 }, cursor);
              // Keep the existing document-driven reading and transitions;
              // the fixed title sits above this narrower reading window.
              const overflow = () =>
                Math.max(
                  0,
                  (content?.scrollHeight ?? 0) - (viewport?.clientHeight ?? 0),
                );
              const readingTime = 0.9 + overflow() / 450;
              if (content)
                timeline.fromTo(
                  content,
                  { y: 0 },
                  {
                    y: () => -overflow(),
                    duration: readingTime,
                    ease: "none",
                    immediateRender: false,
                  },
                  cursor + 0.24,
                );
              cursor += readingTime + 0.56;
              if (stageIndex < record.stages.length - 1) {
                timeline.to(panel, { autoAlpha: 0, duration: 0.14 }, cursor);
                cursor += 0.14;
              }
            });
            if (slideIndex < records.length - 1) {
              const nextFirst =
                slides[slideIndex + 1].querySelector<HTMLElement>(".eng-stage");
              if (nextFirst) timeline.set(nextFirst, { autoAlpha: 1 }, cursor);
              timeline.to(
                track,
                {
                  x: () => -(slideIndex + 1) * clip.clientWidth,
                  duration: 0.55,
                  ease: "none",
                },
                cursor,
              );
              cursor += 0.55;
            }
          });
          timeline.to({}, { duration: 0.01 }, cursor);

          let lastMarker = -1;
          const updateSelection = (publish = false) => {
            const time = timeline.time();
            let index = 0;
            while (
              index + 1 < markers.length &&
              markers[index + 1].time <= time + 0.001
            )
              index++;
            const marker = markers[index];
            if (index !== lastMarker) {
              lastMarker = index;
              stages.forEach((panel) => {
                panel.inert = panel !== marker.panel;
                panel.setAttribute(
                  "aria-hidden",
                  String(panel !== marker.panel),
                );
              });
              slides.forEach((slide) => {
                slide.inert = slide !== marker.slide;
                slide.setAttribute(
                  "aria-hidden",
                  String(slide !== marker.slide),
                );
              });
            }
            if (publish) onChange(marker.selection);
          };
          timeline.eventCallback("onUpdate", () => updateSelection());
          const trigger = ScrollTrigger.create({
            trigger: element,
            animation: timeline,
            pin: true,
            scrub: true,
            start: () =>
              `top ${getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim() || "78px"}`,
            end: () =>
              `+=${timeline.duration() * Math.max(440, clip.clientHeight * 0.8)}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => updateSelection(self.isActive),
            onRefresh: (self) => updateSelection(self.isActive),
            onEnter: (self) => updateSelection(self.isActive),
            onEnterBack: (self) => updateSelection(self.isActive),
          });
          updateSelection(trigger.isActive);
          records.forEach((record) =>
            cleanups.push(
              register(record.iteration.id, (key) => {
                const time =
                  timeline.labels[`${record.iteration.id}-${key}`] ?? 0;
                // Land after the fade-in so the requested stage is immediately readable.
                const position =
                  trigger.start +
                  (trigger.end - trigger.start) *
                    ((time + 0.18) / timeline.duration());
                window.scrollTo({ top: position, behavior: "instant" });
                trigger.update();
              }),
            ),
          );
          return () => {
            cleanups.forEach((cleanup) => cleanup());
            stages.forEach((panel) => {
              panel.inert = false;
              panel.removeAttribute("aria-hidden");
            });
            slides.forEach((slide) => {
              slide.inert = false;
              slide.removeAttribute("aria-hidden");
            });
          };
        },
      );
      let alive = true;
      document.fonts.ready.then(() => {
        if (alive) ScrollTrigger.refresh();
      });
      return () => {
        alive = false;
        media.revert();
      };
    },
    {
      scope: root,
      dependencies: [records, register, onChange],
      revertOnUpdate: true,
    },
  );

  return (
    <div
      className="eng-cycle-scenes"
      ref={root}
      aria-label={`${section.navLabel} engineering iterations`}
    >
      <EngineeringOutline
        activeIteration={current.iteration}
        activeStage={activeStage}
        onNavigate={onNavigate}
      />
      <div className="eng-slides-clip">
        <div className="eng-slides">
          {records.map((record) => {
            const index = ENGINEERING_ITERATIONS.findIndex(
              (iteration) => iteration.id === record.iteration.id,
            );
            const previous = ENGINEERING_ITERATIONS[index - 1];
            const next = ENGINEERING_ITERATIONS[index + 1];
            return (
              <article
                className="eng-scene"
                id={record.iteration.id}
                key={record.iteration.id}
                aria-label={record.iteration.label}
              >
                <header className="eng-scene-heading">
                  <p className="eng-scene-cycle">
                    Cycle {record.iteration.cycle}
                    <span aria-hidden="true"> · </span>
                    {
                      TIME_CYCLES[record.iteration.cycle - 1].title.split(
                        ":",
                      )[0]
                    }
                  </p>
                  <div className="eng-scene-heading__row">
                    <button
                      className="eng-iteration-arrow"
                      type="button"
                      aria-label="Previous iteration"
                      disabled={!previous}
                      onClick={() => previous && onNavigate(previous)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m15 4-8 8 8 8" />
                      </svg>
                    </button>
                    <h3 tabIndex={-1} id={`${record.iteration.id}-title`}>
                      <span className="eng-iteration-index">
                        {record.iteration.index}
                      </span>
                      {record.iteration.short}
                    </h3>
                    <button
                      className="eng-iteration-arrow"
                      type="button"
                      aria-label="Next iteration"
                      disabled={!next}
                      onClick={() => next && onNavigate(next)}
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true">
                        <path d="m9 4 8 8-8 8" />
                      </svg>
                    </button>
                  </div>
                </header>
                <div
                  className="eng-stage-stack"
                  id={`dbtl-${record.iteration.index.replace(".", "-")}`}
                >
                  {record.stages.map((stage) => (
                    <section
                      className="eng-stage"
                      id={`${record.iteration.id}-${stage.key}`}
                      data-iteration={record.iteration.id}
                      data-dbtl-stage={stage.key}
                      key={stage.key}
                      aria-label={`${record.iteration.index} ${stage.title}`}
                    >
                      <h4 className="eng-stage-title">{stage.title}</h4>
                      <div className="eng-stage-body">
                        <div className="eng-stage-content">
                          {stage.blocks.map((block, index) => (
                            <EngineeringBlock block={block} key={index} />
                          ))}
                        </div>
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const GEAR_ASSETS: Record<string, { normal: string; active: string }> = {
  t: { normal: gearTSrc, active: gearTActiveSrc },
  i: { normal: gearISrc, active: gearIActiveSrc },
  m: { normal: gearMSrc, active: gearMActiveSrc },
  e: { normal: gearESrc, active: gearEActiveSrc },
};

function SmallGear({
  letter,
  isActive,
  phase,
}: {
  letter: string;
  isActive: boolean;
  phase: number;
}) {
  const assets = GEAR_ASSETS[letter.toLowerCase()] ?? GEAR_ASSETS.t;
  const src = isActive ? assets.active : assets.normal;
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      className="eng-small-gear__img"
      style={{ "--gear-phase": `${phase}deg` } as CSSProperties}
    />
  );
}

function GearNavigation({
  selection,
  onNavigate,
}: {
  selection: Selection;
  onNavigate: Navigate;
}) {
  const root = useRef<HTMLElement>(null);
  const [pinnedCycle, setPinnedCycle] = useState<string | null>(null);
  const [hoveredCycle, setHoveredCycle] = useState<string | null>(null);
  const openCycle = hoveredCycle ?? pinnedCycle;
  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) {
        setPinnedCycle(null);
        setHoveredCycle(null);
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    return () => document.removeEventListener("pointerdown", closeOutside);
  }, []);
  return (
    <nav
      className="eng-gear-nav wiki-page--project"
      aria-label="Jump to an engineering iteration"
      ref={root}
      data-open={Boolean(openCycle)}
      onPointerLeave={() => setHoveredCycle(null)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setPinnedCycle(null);
          setHoveredCycle(null);
        }
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape" && openCycle) {
          event.preventDefault();
          root.current
            ?.querySelector<HTMLButtonElement>(`[data-cycle-id="${openCycle}"]`)
            ?.focus();
          setPinnedCycle(null);
          setHoveredCycle(null);
        }
      }}
    >
      <div className="eng-time-bar">
        {TIME_CYCLES.map((cycle, index) => (
          <button
            type="button"
            key={cycle.id}
            className="eng-time-letter"
            data-cycle-id={cycle.id}
            data-letter={cycle.letter.toLowerCase()}
            aria-label={`${cycle.letter} — Cycle ${index + 1}: ${cycle.title.split(":")[0]}${cycle.status === "planned" ? " (coming soon)" : ""}`}
            aria-expanded={openCycle === cycle.id}
            aria-controls={`eng-cycle-menu-${cycle.letter}`}
            aria-current={
              ENGINEERING_ITERATIONS.find((it) => it.id === selection.id)
                ?.cycleId === cycle.id
                ? "step"
                : undefined
            }
            onPointerEnter={(event) => {
              if (event.pointerType === "mouse") setHoveredCycle(cycle.id);
            }}
            onClick={() => {
              setHoveredCycle(null);
              setPinnedCycle((previous) =>
                previous === cycle.id ? null : cycle.id,
              );
            }}
            onKeyDown={(event) => {
              if (event.key !== "ArrowUp" && event.key !== "ArrowDown") return;
              event.preventDefault();
              setHoveredCycle(null);
              setPinnedCycle(cycle.id);
              requestAnimationFrame(() => {
                root.current
                  ?.querySelector<HTMLButtonElement>(
                    `#eng-cycle-menu-${cycle.letter} .eng-small-gear`,
                  )
                  ?.focus();
              });
            }}
          >
            {cycle.letter}
          </button>
        ))}
      </div>
      {TIME_CYCLES.map((cycle, cycleIndex) => {
        const records =
          cycles.find(({ section }) => section.id === cycle.id)?.records ?? [];
        return (
          <div
            className="eng-cycle-flyout"
            key={cycle.id}
            id={`eng-cycle-menu-${cycle.letter}`}
            data-letter={cycle.letter.toLowerCase()}
            hidden={openCycle !== cycle.id}
            role="group"
            aria-label={`Cycle ${cycleIndex + 1} iterations`}
            style={{ "--flyout-slot": cycleIndex - 1.5 } as CSSProperties}
          >
            <div className="eng-cycle-flyout__heading">
              <span>
                Cycle {cycleIndex + 1} · {cycle.title.split(":")[0]}
              </span>
              <span>
                {records.length
                  ? `${records.length} iterations`
                  : "Coming soon"}
              </span>
            </div>
            <div className="eng-gear-cluster">
              {records.map(({ iteration }, index) => (
                <button
                  type="button"
                  key={iteration.id}
                  className={`eng-small-gear${selection.id === iteration.id ? " is-active" : ""}`}
                  aria-label={`Go to iteration ${iteration.index}: ${iteration.short}`}
                  aria-current={
                    selection.id === iteration.id ? "step" : undefined
                  }
                  title={`${iteration.index} · ${iteration.short}`}
                  onClick={() => {
                    onNavigate(iteration);
                    setPinnedCycle(null);
                    setHoveredCycle(null);
                    requestAnimationFrame(() => {
                      document
                        .getElementById(`${iteration.id}-title`)
                        ?.focus({ preventScroll: true });
                    });
                  }}
                >
                  <SmallGear
                    letter={cycle.letter}
                    isActive={selection.id === iteration.id}
                    phase={index % 2 ? 7.5 : 0}
                  />
                  <span>{iteration.index}</span>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </nav>
  );
}

export function EngineeringJourney({
  heroRef,
}: {
  heroRef: RefObject<HTMLElement | null>;
}) {
  const root = useRef<HTMLDivElement>(null);
  const navigation = useRef(
    new Map<string, (stage: WikiDbTLStageKey) => void>(),
  );
  const [selection, setSelection] = useState<Selection>({
    id: ENGINEERING_ITERATIONS[0].id,
    stage: "design",
  });
  const currentSelection = useRef(selection);
  const resizeTarget = useRef<Selection | null>(null);
  const readerVisible = useRef(false);
  const [navigationVisible, setNavigationVisible] = useState(false);

  useGSAP(
    () => {
      const hero = heroRef.current;
      if (!hero) return;
      ScrollTrigger.create({
        trigger: hero,
        start: () =>
          `bottom ${getComputedStyle(document.documentElement).getPropertyValue("--header-height").trim() || "0px"}`,
        end: "max",
        onEnter: () => setNavigationVisible(true),
        onLeaveBack: () => setNavigationVisible(false),
        onRefresh: (trigger) =>
          setNavigationVisible(trigger.scroll() >= trigger.start),
      });
    },
    { scope: root, dependencies: [heroRef], revertOnUpdate: true },
  );
  const onChange = useCallback((next: Selection) => {
    if (resizeTarget.current) return;
    currentSelection.current = next;
    setSelection((previous) =>
      previous.id === next.id && previous.stage === next.stage
        ? previous
        : next,
    );
  }, []);
  const register = useCallback<Register>((id, navigate) => {
    navigation.current.set(id, navigate);
    return () => {
      navigation.current.delete(id);
    };
  }, []);
  const onNavigate = useCallback<Navigate>(
    (iteration, stage = "design") => {
      resizeTarget.current = null;
      navigation.current.get(iteration.id)?.(stage);
      onChange({ id: iteration.id, stage });
      window.history.replaceState(
        null,
        "",
        `#${iteration.id}${stage === "design" ? "" : `-${stage}`}`,
      );
    },
    [onChange],
  );

  useEffect(() => {
    const element = root.current;
    if (!element) return;
    const visibleScenes = new Set<Element>();
    const sceneObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visibleScenes.add(entry.target);
          else visibleScenes.delete(entry.target);
        }
        readerVisible.current = visibleScenes.size > 0;
      },
      { rootMargin: "-80px 0px -24px 0px", threshold: 0 },
    );
    element
      .querySelectorAll(".eng-cycle-scenes")
      .forEach((scene) => sceneObserver.observe(scene));
    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const handleResize = () => {
      if (!readerVisible.current && !resizeTarget.current) return;
      resizeTarget.current ??= currentSelection.current;
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        // Refresh after the responsive scene has rebuilt, then restore the
        // selected stage instead of retaining a stale document offset.
        ScrollTrigger.refresh();
        const next = resizeTarget.current;
        resizeTarget.current = null;
        if (next) {
          navigation.current.get(next.id)?.(next.stage);
          onChange(next);
        }
      }, 350);
    };
    window.addEventListener("resize", handleResize, { capture: true });
    const handleHash = () => {
      const hash = decodeURIComponent(window.location.hash.slice(1));
      const iteration = ENGINEERING_ITERATIONS.find(
        (it) =>
          hash === it.id ||
          hash.startsWith(`${it.id}-`) ||
          hash === `dbtl-${it.index.replace(".", "-")}` ||
          hash === it.cycleId,
      );
      if (iteration) {
        const stage =
          STAGE_KEYS.find((key) => hash.endsWith(`-${key}`)) ?? "design";
        navigation.current.get(iteration.id)?.(stage);
        onChange({ id: iteration.id, stage });
      }
    };
    const frame = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
      handleHash();
    });
    window.addEventListener("hashchange", handleHash);
    return () => {
      cancelAnimationFrame(frame);
      sceneObserver.disconnect();
      clearTimeout(resizeTimer);
      resizeTarget.current = null;
      window.removeEventListener("resize", handleResize, { capture: true });
      window.removeEventListener("hashchange", handleHash);
    };
  }, [onChange]);

  return (
    <div className="eng-journey" ref={root}>
      {cycles.map(({ section, records }) => (
        <div className="eng-cycle" key={section.id}>
          <EngineeringIntroduction section={section} />
          <CycleScenes
            section={section}
            records={records}
            selection={selection}
            onChange={onChange}
            register={register}
            onNavigate={onNavigate}
          />
          {section.note ? (
            <aside className="eng-outcome">
              <h3>
                <EngineeringArticleHeading title={section.note.label} />
              </h3>
              <div className="wiki-prose">
                {section.note.body.split(/\n+/).map((text, index) => (
                  <p key={index}>
                    <InlineCopy text={text} />
                  </p>
                ))}
              </div>
            </aside>
          ) : null}
        </div>
      ))}
      {navigationVisible
        ? createPortal(
            <GearNavigation selection={selection} onNavigate={onNavigate} />,
            document.body,
          )
        : null}
    </div>
  );
}
