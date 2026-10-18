/* eslint-disable react-refresh/only-export-components */
import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowDown } from "lucide-react";
import {
  wetLabEntries,
  type NotebookBlock,
  type NotebookEntry,
} from "../../../../data/project/notebookPage";
import {
  getNotebookImage,
  notebookAssets,
} from "../../../../data/project/notebookAssets";
import { VerticalGantt } from "../../timeline/VerticalGantt";
import {
  formatGanttRange,
  ganttMonthGroups,
  layoutGanttMonth,
} from "../../timeline/verticalGanttDates";
import { renderInlineFormatting } from "../../proseInline";
import "../../../../styles/features/notebook-panels.css";

// Phase labels come only from the manuscript; unlabelled work stays unlabelled.
const phaseLabels = [
  ...new Set(
    wetLabEntries.flatMap((entry) =>
      entry.blocks
        .filter((block) => block.type === "discussion")
        .map((block) => block.label),
    ),
  ),
];
const phaseTones = new Map(
  phaseLabels.map((label, index) => [label, index % 4]),
);
const timelineEntries = wetLabEntries.map((entry) => {
  const phase = entry.blocks.find(
    (block) => block.type === "discussion",
  )?.label;
  return {
    ...entry,
    phase,
    phaseTone: phase ? phaseTones.get(phase) : undefined,
  };
});
const months = ganttMonthGroups(timelineEntries).flatMap(
  (group) => group.months,
);
function RecordBlock({ block }: { block: NotebookBlock }) {
  if (block.type === "prose")
    return <p>{renderInlineFormatting(block.text)}</p>;
  if (block.type === "discussion") {
    return (
      <div
        className="notebook-record__discussion"
        data-phase={block.label}
        data-phase-tone={phaseTones.get(block.label)}
      >
        <h4>
          <span className="notebook-record__phase">{block.label}</span>
          <span>{block.title}</span>
        </h4>
        <p>{renderInlineFormatting(block.text)}</p>
      </div>
    );
  }
  if (block.type === "table") {
    return (
      <figure className="notebook-record__table">
        <table>
          <caption>
            {block.label}: {block.title}
          </caption>
          <thead>
            <tr>
              {block.headers.map((header) => (
                <th scope="col" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr key={row[0]}>
                {row.map((cell, index) =>
                  index === 0 ? (
                    <th scope="row" key={index}>
                      {cell}
                    </th>
                  ) : (
                    <td key={index}>{cell}</td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
        <figcaption>{block.caption}</figcaption>
      </figure>
    );
  }
  return (
    <figure className="notebook-record__figure">
      <figcaption>
        <span>
          <span className="notebook-record__figure-label">{block.label}</span>
          {block.title}
        </span>
      </figcaption>
      <div className="notebook-record__images">
        {block.assets.map((key) => (
          <a
            href={getNotebookImage(key)}
            target="_blank"
            rel="noreferrer"
            key={key}
            aria-label={`Open image: ${notebookAssets[key].alt}`}
          >
            <img
              src={getNotebookImage(key)}
              alt={notebookAssets[key].alt}
              width={notebookAssets[key].width}
              height={notebookAssets[key].height}
              decoding="async"
            />
          </a>
        ))}
      </div>
      <p className="notebook-record__caption">{block.caption}</p>
    </figure>
  );
}

function NotebookRecord({ entry }: { entry: NotebookEntry }) {
  return (
    <div className="notebook-record">
      <div className="notebook-record__paper">
        <div className="notebook-record__body">
          {entry.blocks.map((block, blockIndex) => (
            <RecordBlock block={block} key={`${entry.id}-${blockIndex}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

export function WetLabNotebook() {
  const [month, setMonth] = useState(months[0]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLElement>(null);
  const selectedEntry = wetLabEntries.find((entry) => entry.id === selectedId);

  useEffect(() => {
    const headings = [
      ...timelineRef.current!.querySelectorAll<HTMLElement>("[data-month]"),
    ];
    let frame = 0;
    function updateMonth() {
      frame = 0;
      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 80;
      const threshold =
        Math.max(
          headerHeight,
          navigationRef.current?.getBoundingClientRect().bottom ?? 0,
        ) + 28;
      const current = [...headings]
        .reverse()
        .find((heading) => heading.getBoundingClientRect().top <= threshold);
      if (current?.dataset.month) setMonth(current.dataset.month);
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(updateMonth);
    };
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    schedule();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, []);

  function selectEntry(id: string, reveal = false) {
    setSelectedId((current) => (current === id ? null : id));
    if (reveal && selectedId !== id) {
      requestAnimationFrame(() => {
        timelineRef.current
          ?.querySelector<HTMLButtonElement>(`[data-entry-label="${id}"]`)
          ?.scrollIntoView({ block: "start" });
      });
    }
  }

  function selectMonth(value: string) {
    setMonth(value);
  }

  return (
    <div className="notebook-workspace">
      <header className="notebook-workspace__heading">
        <div>
          <h2>
            <span className="wiki-heading-marker">Wet Lab</span>
          </h2>
          <p>
            {formatGanttRange({
              start: wetLabEntries[0].start,
              end: wetLabEntries[wetLabEntries.length - 1].end,
            })}
          </p>
        </div>
        <p className="notebook-workspace__guide">
          <ArrowDown size={17} aria-hidden="true" />
          Follow the dates downward. Select an entry to expand or collapse it.
        </p>
      </header>
      <nav
        ref={navigationRef}
        className="notebook-months"
        aria-label="Notebook months"
      >
        {months.map((value) => {
          const date = new Date(`${value}-01T00:00:00Z`);
          const count = layoutGanttMonth(wetLabEntries, value).periods.length;
          const label = new Intl.DateTimeFormat("en-GB", {
            month: "short",
            timeZone: "UTC",
          }).format(date);
          return (
            <a
              href={`#notebook-month-${value}`}
              key={value}
              aria-current={month === value ? "date" : undefined}
              aria-label={`${label} ${date.getUTCFullYear()}, ${count} ${count === 1 ? "entry" : "entries"}`}
              onClick={() => selectMonth(value)}
            >
              <span className="notebook-months__year">
                {date.getUTCFullYear()}
              </span>
              <span>{label}</span>
              <span
                className="notebook-months__activity"
                data-has-entries={count > 0}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </nav>
      <div ref={timelineRef} className="notebook-workspace__timeline">
        <VerticalGantt
          entries={timelineEntries}
          monthAnchorPrefix="notebook-month"
          selectedId={selectedId}
          onSelect={selectEntry}
          detailId="notebook-selected-record"
          renderDetail={() =>
            selectedEntry ? <NotebookRecord entry={selectedEntry} /> : null
          }
        />
      </div>
    </div>
  );
}

export function notebookFeatures(): Record<string, ReactNode> {
  return { "wet-lab-notebook": <WetLabNotebook /> };
}
