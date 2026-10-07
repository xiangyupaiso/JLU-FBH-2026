import { useState } from "react";
import type { LegacyTool } from "../../../../../data/engagement/sustainability/sdgChapterContract";
import { sustainabilityDocUrl } from "../../../../../data/engagement/sustainability/sustainabilityAssets";
import { RichText } from "./RichText";

type ToolCard = Pick<LegacyTool, "title" | "pdfs"> &
  Partial<Pick<LegacyTool, "why" | "whatItHelpsWith" | "bestFor">>;

const ROWS = [
  ["why", "Why"],
  ["whatItHelpsWith", "What it helps with"],
  ["bestFor", "Best for"],
] as const;

const pdfLabel = (label: string) => (label === "Template" ? "Template" : `${label} PDF`);

/** Folder tints, cycled so a set of any length stays in the cream/olive family. */
const TINTS = ["peach", "wheat", "sage", "sand"] as const;

/**
 * Reusable tool archive.
 *
 * A 2×2 cabinet of folders sits on the left; clicking one opens it and shows
 * that tool's full card on the right. The folders reuse the reference sketch's
 * mechanism — a coloured cover with a cream paper edge sliding out of the top,
 * the whole folder lifting on hover — so the toolkit reads as a set of physical
 * folders rather than a list of rows.
 *
 * `instance` keeps tab/panel ids unique: the page renders one archive per SDG
 * plus the Tracker download set.
 */
export function PdfToolList({
  tools,
  instance,
}: {
  tools: ReadonlyArray<ToolCard>;
  /** Unique per archive on the page; defaults to a single shared instance. */
  instance?: string;
}) {
  const [open, setOpen] = useState(0);
  const active = tools[open];
  const uid = instance ?? "tools";

  if (!active) return null;

  const tabId = (index: number) => `${uid}-archive-tab-${index}`;
  const panelId = `${uid}-archive-panel`;
  /** 2×2 while there is more than one tool; a single folder when there is one. */
  const grid = tools.length > 1 ? (tools.length <= 4 ? "2x2" : "3up") : "single";

  return (
    <div className={`sust-archive sust-archive--${grid}`}>
      {/* The cabinet stretches to the card's height so both columns align. */}
      <div className="sust-archive__side">
        <div className="sust-archive__cabinet" role="tablist">
          {tools.map((tool, index) => (
            <button
              key={tool.title}
              type="button"
              role="tab"
              id={tabId(index)}
              aria-selected={index === open}
              aria-controls={panelId}
              className="sust-folder"
              data-tint={TINTS[index % TINTS.length]}
              onClick={() => setOpen(index)}
            >
              {/* The paper that slides out of the folder when it is opened. */}
              <span className="sust-folder__paper" aria-hidden="true">
                <span className="sust-folder__paper-label">{tool.title}</span>
              </span>
              <span className="sust-folder__cover">
                <span className="sust-folder__no">FILE {String(index + 1).padStart(2, "0")}</span>
                <span className="sust-folder__title">{tool.title}</span>
                <span className="sust-folder__meta">
                  {tool.pdfs.map((pdf) => pdfLabel(pdf.label)).join(" · ")}
                </span>
              </span>
            </button>
          ))}
        </div>
        <p className="sust-archive__hint">Click the document to learn.</p>
      </div>

      <article
        className="sust-tool-card"
        role="tabpanel"
        id={panelId}
        aria-labelledby={tabId(open)}
        tabIndex={0}
      >
        <h4 className="sust-tool-card__title">{active.title}</h4>
        {ROWS.some(([key]) => active[key]) ? (
          <dl className="sust-tool-card__rows">
            {ROWS.map(([key, label]) =>
              active[key] ? (
                <div className="sust-tool-card__row" key={key}>
                  <dt>{label}</dt>
                  <dd>
                    <RichText text={active[key]} />
                  </dd>
                </div>
              ) : null,
            )}
          </dl>
        ) : null}
        <div className="sust-tool-card__actions">
          {active.pdfs.map((pdf) => (
            <a
              key={pdf.fileName}
              className="sust-tool-card__btn"
              href={sustainabilityDocUrl(pdf.fileName)}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${active.title} (${pdf.label}), opens in a new tab`}
            >
              {pdfLabel(pdf.label)}
            </a>
          ))}
        </div>
      </article>
    </div>
  );
}

/** English first, as the Evidence table lists them. */
const byEnglishFirst = (a: { label: string }, b: { label: string }) =>
  Number(b.label === "English") - Number(a.label === "English");

/** Evidence summary of the Legacy tools: Tool / What it does / Download. */
export function ToolTable({ tools }: { tools: ReadonlyArray<LegacyTool> }) {
  return (
    <div className="wiki-table-wrap sust-tool-table" role="region" aria-label="Reusable tools">
      <table className="wiki-table">
        <thead>
          <tr>
            <th scope="col">Tool</th>
            <th scope="col">What it does</th>
            <th scope="col">Download</th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <tr key={tool.title}>
              <th scope="row">{tool.title}</th>
              <td>{tool.whatItDoes}</td>
              <td className="sust-tool-table__links">
                {[...tool.pdfs].sort(byEnglishFirst).map((pdf, index) => (
                  <span key={pdf.fileName}>
                    {index ? " / " : null}
                    <a
                      href={sustainabilityDocUrl(pdf.fileName)}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${tool.title} (${pdf.label}), opens in a new tab`}
                    >
                      {pdf.label}
                    </a>
                  </span>
                ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}