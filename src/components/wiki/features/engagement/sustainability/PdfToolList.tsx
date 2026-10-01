import type { LegacyTool } from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

const pdfUrl = (fileName: string) =>
  `https://static.igem.wiki/teams/6056/wiki/files/docs/${fileName}`;

const pad = (n: number) => String(Math.max(1, n)).padStart(2, "0");

/**
 * L — Legacy tools list rendering why, what it helps with, best for,
 * and direct links to Chinese and English PDF editions.
 */
export function PdfToolList({
  tools,
  startIndex = 1,
}: {
  tools: ReadonlyArray<LegacyTool>;
  startIndex?: number;
}) {
  return (
    <div className="sust-tool-grid" data-wiki-reveal>
      {tools.map((tool, index) => (
        <article className="sust-tool-card" key={tool.title}>
          <header className="sust-tool-card__header">
            <span
              className="sust-tool-card__kicker"
              data-tool-id={`TOOL-${pad(startIndex + index)}`}
            >
              Reusable Tool · {pad(startIndex + index)}
            </span>
            <h3 className="sust-tool-card__title">{tool.title}</h3>
          </header>

          <div className="sust-tool-card__body">
            {tool.why && (
              <div className="sust-tool-card__row">
                <span className="sust-tool-card__label">Why</span>
                <p className="sust-tool-card__text">{tool.why}</p>
              </div>
            )}

            {tool.whatItHelpsWith && (
              <div className="sust-tool-card__row">
                <span className="sust-tool-card__label">What it helps with</span>
                <p className="sust-tool-card__text">{tool.whatItHelpsWith}</p>
              </div>
            )}

            {tool.bestFor && (
              <div className="sust-tool-card__row">
                <span className="sust-tool-card__label">Best for</span>
                <p className="sust-tool-card__text">{tool.bestFor}</p>
              </div>
            )}

            {!tool.why && tool.description && (
              <p className="sust-tool-card__desc">{tool.description}</p>
            )}
          </div>

          {tool.pdfs.length > 0 && (
            <footer className="sust-tool-card__actions">
              {tool.pdfs.map((pdf) => (
                <a
                  key={pdf.fileName}
                  className="sust-tool-card__btn"
                  href={pdfUrl(pdf.fileName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`在新标签页打开 ${tool.title}（${pdf.label}）PDF`}
                >
                  <span className="sust-tool-card__btn-icon" aria-hidden="true">📄</span>
                  {pdf.label} PDF
                </a>
              ))}
            </footer>
          )}
        </article>
      ))}
    </div>
  );
}
