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

/** Reusable tool / download cards: optional Why · What it helps with · Best for + PDF links. */
export function PdfToolList({ tools }: { tools: ReadonlyArray<ToolCard> }) {
  return (
    <div className="sust-tool-grid">
      {tools.map((tool) => (
        <article className="sust-tool-card" key={tool.title}>
          <h4 className="sust-tool-card__title">{tool.title}</h4>
          {ROWS.some(([key]) => tool[key]) ? (
            <dl className="sust-tool-card__rows">
              {ROWS.map(([key, label]) =>
                tool[key] ? (
                  <div className="sust-tool-card__row" key={key}>
                    <dt>{label}</dt>
                    <dd>
                      <RichText text={tool[key]} />
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          ) : null}
          <div className="sust-tool-card__actions">
            {tool.pdfs.map((pdf) => (
              <a
                key={pdf.fileName}
                className="sust-tool-card__btn"
                href={sustainabilityDocUrl(pdf.fileName)}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${tool.title} (${pdf.label}) PDF, opens in a new tab`}
              >
                {pdf.label} PDF
              </a>
            ))}
          </div>
        </article>
      ))}
    </div>
  );
}
