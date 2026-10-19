/**
 * SDG 4 — activity feedback five-bookmark cards.
 *
 * Direct port of the finalized manuscript component
 * (五书签卡片组件_修复版.html): five questionnaire tabs, each answer visualized
 * as a 96-well microplate (one well = five responses) beside a count/share
 * table. Driven by global document scroll (sticky stage + ScrollTrigger, same
 * mechanism as StakeholderDeck) so the card stays pinned until all five
 * bookmarks are scrolled through before continuing down the page.
 *
 * All response counts live in the pure data layer (`sustainabilitySdg4.ts`).
 */
import {
  useRef,
  useState,
  type KeyboardEvent as ReactKeyboardEvent,
  type ReactNode,
} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  sdg4FeedbackQuestions,
  type Sdg4FeedbackOption,
  type Sdg4FeedbackQuestion,
} from "../../../../../data/engagement/sustainability/sustainabilitySdg4";
import { readerTrackStart } from "../../../../../utils";
import { whenPageLoaderLeaves } from "../../../../../utils/pageLoader";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/** Seven-step SDG 4 red ramp; option letters cycle through it. */
const COLORS = ["#DE5A44", "#F0917A", "#C5192D", "#F8C4BB", "#8E1B29", "#FCE3DE", "#B04A38"];

interface WellPart {
  index: number;
  people: number;
}

const code = (i: number) => String.fromCharCode(65 + i);

/** White/dark ink chosen from the well fill for WCAG-style contrast. */
function inkFor(hex: string): string {
  const rgb = hex
    .slice(1)
    .match(/../g)!
    .map((x) => parseInt(x, 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)));
  const luminance = 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
  return 1.05 / (luminance + 0.05) >= 4.5 ? "#FFFFFF" : "#533a25";
}

/**
 * Pack responses into exactly 96 wells of five people each; remainders of
 * different options share one well. Throws unless the option counts sum to 480.
 */
function packWells(options: ReadonlyArray<Sdg4FeedbackOption>): WellPart[][] {
  const wells: WellPart[][] = [];
  const leftovers: WellPart[] = [];
  options.forEach((o, i) => {
    for (let j = 0; j < Math.floor(o.count / 5); j++) wells.push([{ index: i, people: 5 }]);
    if (o.count % 5) leftovers.push({ index: i, people: o.count % 5 });
  });
  let current: WellPart[] = [];
  let used = 0;
  leftovers.forEach((left) => {
    let remaining = left.people;
    while (remaining) {
      const take = Math.min(remaining, 5 - used);
      current.push({ index: left.index, people: take });
      remaining -= take;
      used += take;
      if (used === 5) {
        wells.push(current);
        current = [];
        used = 0;
      }
    }
  });
  if (used !== 0 || wells.length !== 96)
    throw new Error("Each microplate must contain exactly 480 responses.");
  return wells;
}

function MixedWell({ parts }: { parts: WellPart[] }) {
  const stops: string[] = [];
  const letters: ReactNode[] = [];
  let start = 0;
  parts.forEach((part, i) => {
    const end = start + part.people * 72;
    stops.push(`${COLORS[part.index % COLORS.length]} ${start}deg ${end}deg`);
    const angle = ((start + end) / 2 - 90) * (Math.PI / 180);
    const radius = part.people === 1 ? 33 : 27;
    letters.push(
      <text
        key={i}
        x={50 + Math.cos(angle) * radius}
        y={50 + Math.sin(angle) * radius}
        textAnchor="middle"
        dominantBaseline="central"
        fontFamily="Lexend, sans-serif"
        fontSize="25"
        fontWeight="700"
        fill={inkFor(COLORS[part.index % COLORS.length])}
      >
        {code(part.index)}
      </text>,
    );
    start = end;
  });
  return (
    <div
      className="ef-well ef-well--mixed"
      style={{ background: `conic-gradient(${stops.join(", ")})` }}
    >
      <svg viewBox="0 0 100 100" aria-hidden="true">
        {letters}
      </svg>
    </div>
  );
}

function Microplate({ options }: { options: ReadonlyArray<Sdg4FeedbackOption> }) {
  const wells = packWells(options);
  return (
    <div className="ef-plate" aria-hidden="true">
      <span className="ef-axis" />
      {Array.from({ length: 12 }, (_, c) => (
        <span className="ef-axis" key={`c${c}`}>
          {c + 1}
        </span>
      ))}
      {"ABCDEFGH".split("").map((row, r) => (
        <FragmentRow key={row} row={r} wells={wells} />
      ))}
    </div>
  );
}

/** One plate row: row letter plus twelve wells (fragment to keep keyed cells). */
function FragmentRow({ row, wells }: { row: number; wells: WellPart[][] }) {
  return (
    <>
      <span className="ef-axis">{"ABCDEFGH"[row]}</span>
      {Array.from({ length: 12 }, (_, c) => {
        const parts = wells[row * 12 + c];
        if (parts.length > 1) return <MixedWell key={c} parts={parts} />;
        return (
          <div className="ef-well" data-color={parts[0].index % COLORS.length} key={c}>
            {code(parts[0].index)}
          </div>
        );
      })}
    </>
  );
}

function AnswerTable({ options }: { options: ReadonlyArray<Sdg4FeedbackOption> }) {
  const total = options.reduce((sum, o) => sum + o.count, 0);
  return (
    <table className="ef-table" aria-label="Answer counts and percentages">
      <thead>
        <tr>
          <th scope="col">Answer</th>
          <th className="ef-count" scope="col">
            Count
          </th>
          <th className="ef-share" scope="col">
            Share
          </th>
        </tr>
      </thead>
      <tbody>
        {options.map((o, i) => (
          <tr key={o.label}>
            <td>
              <span className="ef-option">
                <span className="ef-key" data-color={i % COLORS.length}>
                  {code(i)}
                </span>
                <span>{o.label}</span>
              </span>
            </td>
            <td className="ef-count">{o.count}</td>
            <td className="ef-share">{((o.count / total) * 100).toFixed(1)}%</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/**
 * Five bookmark tabs driven by the global scroll timeline: when the card
 * reaches the viewport it sticks in place and steps through Q1 → Q5 as the
 * user continues scrolling, then releases into the rest of the chapter.
 */
export function EduFeedbackCards({
  questions = sdg4FeedbackQuestions,
}: {
  questions?: ReadonlyArray<Sdg4FeedbackQuestion>;
}) {
  const [active, setActive] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLElement>(null);
  const tabsRef = useRef<Array<HTMLButtonElement | null>>([]);
  const navigateRef = useRef<((index: number) => void) | null>(null);

  useGSAP(
    () => {
      const element = rootRef.current;
      const card = cardRef.current;
      if (!element || !card || questions.length <= 1) return;

      const inner = element.closest<HTMLElement>(".route-frame__scroll");
      const media = gsap.matchMedia();

      media.add(
        {
          animated:
            "(min-width: 981px) and (min-height: 700px) and (prefers-reduced-motion: no-preference)",
          readable:
            "(max-width: 980px), (max-height: 699px), (prefers-reduced-motion: reduce)",
        },
        (context) => {
          if (!context.conditions?.animated) {
            navigateRef.current = null;
            return;
          }

          const projected = Boolean(
            inner && getComputedStyle(inner).overflowY === "hidden",
          );
          const scroller = projected && inner ? inner : undefined;
          const headerHeight = () =>
            Number.parseFloat(
              getComputedStyle(document.documentElement).getPropertyValue(
                "--header-height",
              ),
            ) || 78;

          element.dataset.scrollDeck = "true";
          const stepSpan = 360;
          const totalTravel = (questions.length - 1) * stepSpan;
          let cardHeight = 0;

          const measure = () => {
            const top = projected ? 24 : headerHeight() + 24;
            const nextHeight = card.offsetHeight || 620;
            const changed = Math.abs(cardHeight - nextHeight) > 0.5;
            cardHeight = nextHeight;
            element.style.setProperty("--ef-top", `${top}px`);
            element.style.setProperty("--ef-height", `${cardHeight}px`);
            element.style.setProperty("--ef-travel", `${totalTravel}px`);
            return changed;
          };

          measure();
          let previous = -1;

          const update = (self: ScrollTrigger) => {
            const position = Math.max(
              0,
              Math.min(totalTravel, self.scroll() - self.start),
            );
            const index = Math.min(
              questions.length - 1,
              Math.floor((position + stepSpan * 0.45) / stepSpan),
            );
            if (index !== previous) {
              previous = index;
              setActive(index);
            }
          };

          const trigger = ScrollTrigger.create({
            id: "edu-feedback-scroll",
            trigger: element,
            scroller,
            start: () => `top ${projected ? 24 : headerHeight() + 24}px`,
            end: () => `+=${Math.max(1, totalTravel)}`,
            onUpdate: update,
            onRefresh: update,
          });

          update(trigger);

          navigateRef.current = (index: number) => {
            const targetPos = trigger.start + index * stepSpan;
            const track = inner?.closest<HTMLElement>(".wiki-reader-track");
            if (projected && inner && track) {
              inner.scrollTop = targetPos;
              window.scrollTo({
                top: readerTrackStart(track) + targetPos,
                behavior: "instant",
              });
            } else {
              window.scrollTo({ top: targetPos, behavior: "instant" });
            }
            trigger.update();
          };

          let frame = 0;
          let alive = true;
          const requestMeasure = () => {
            if (frame || !alive) return;
            frame = requestAnimationFrame(() => {
              frame = 0;
              if (measure()) trigger.refresh();
            });
          };

          const observer = new ResizeObserver(requestMeasure);
          observer.observe(card);
          if (projected && inner) observer.observe(inner);
          window.addEventListener("resize", requestMeasure, { passive: true });
          whenPageLoaderLeaves().then(() => {
            if (!alive) return;
            measure();
            trigger.refresh();
            trigger.update();
          });

          return () => {
            alive = false;
            if (frame) cancelAnimationFrame(frame);
            observer.disconnect();
            window.removeEventListener("resize", requestMeasure);
            navigateRef.current = null;
            delete element.dataset.scrollDeck;
            element.style.removeProperty("--ef-top");
            element.style.removeProperty("--ef-height");
            element.style.removeProperty("--ef-travel");
            trigger.kill();
          };
        },
      );

      return () => {
        media.revert();
      };
    },
    {
      scope: rootRef,
      dependencies: [questions.length],
      revertOnUpdate: true,
    },
  );

  const select = (index: number) => {
    if (index < 0 || index >= questions.length) return;
    if (navigateRef.current) navigateRef.current(index);
    else setActive(index);
  };

  const onTabKeyDown = (event: ReactKeyboardEvent, index: number) => {
    let next: number | undefined;
    if (event.key === "ArrowDown" || event.key === "ArrowRight")
      next = (index + 1) % questions.length;
    else if (event.key === "ArrowUp" || event.key === "ArrowLeft")
      next = (index - 1 + questions.length) % questions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = questions.length - 1;
    if (next === undefined) return;
    event.preventDefault();
    select(next);
    tabsRef.current[next]?.focus({ preventScroll: true });
  };

  return (
    <div ref={rootRef} className="edu-feedback">
      <article className="ef-card" ref={cardRef} aria-label="Activity feedback questions and data">
        <div className="ef-rail">
          <div className="ef-tabs" role="tablist" aria-label="Feedback questions" aria-orientation="vertical">
            {questions.map((question, i) => (
              <button
                type="button"
                key={question.sourceId}
                ref={(node) => {
                  tabsRef.current[i] = node;
                }}
                className="ef-tab"
                role="tab"
                aria-selected={i === active}
                aria-controls={`edu-feedback-q${i + 1}-panel`}
                id={`edu-feedback-q${i + 1}-tab`}
                tabIndex={i === active ? 0 : -1}
                onClick={() => select(i)}
                onKeyDown={(event) => onTabKeyDown(event, i)}
              >
                <span className="ef-tab-number">Q{i + 1}</span> {question.title}
              </button>
            ))}
          </div>
        </div>

        <div className="ef-content">
          {questions.map((question, i) => (
            <section
              className="ef-panel"
              hidden={i !== active}
              key={question.sourceId}
              role="tabpanel"
              id={`edu-feedback-q${i + 1}-panel`}
              aria-labelledby={`edu-feedback-q${i + 1}-tab`}
              tabIndex={0}
              data-active={i === active || undefined}
            >
              <div className="ef-body">
                <h2 className="ef-title">
                  <span className="ef-title-number">Q{i + 1}</span> {question.title}
                </h2>
                <p className="ef-question">{question.question}</p>
                <div className="ef-data">
                  <figure className="ef-figure" aria-label="96-well response distribution">
                    <Microplate options={question.options} />
                  </figure>
                  <AnswerTable options={question.options} />
                </div>
              </div>
            </section>
          ))}
        </div>
      </article>
      <span className="ef-sr-only" role="status" aria-live="polite">
        Q{active + 1} {questions[active].title}. {active + 1} of {questions.length}.
      </span>
    </div>
  );
}
