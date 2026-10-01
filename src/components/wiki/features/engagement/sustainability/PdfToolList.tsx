import type { LegacyTool } from "../../../../../data/engagement/sustainability/sustainabilityData";
import "../../../../../styles/sustainability-panels.css";

const pdfUrl = (fileName: string) =>
  `https://static.igem.wiki/teams/6056/wiki/files/docs/${fileName}`;

const pad = (n: number) => String(Math.max(1, n)).padStart(2, "0");

/** L — Legacy 章节工具卡：每个 PDF 以浏览器原生方式直接在新标签页打开（内含下载），
 *  不再走自定义 PDF 弹窗。卡片标题（tool.title）即用户可见的标题说明。 */
export function PdfToolList({
  tools,
  startIndex = 1,
}: {
  tools: ReadonlyArray<LegacyTool>;
  startIndex?: number;
}) {
  return (
    <div className="sust-tool-grid">
      {tools.map((tool, index) => (
        <article className="sust-tool-card" key={tool.title}>
          <p
            className="sust-tool-card__kicker"
            data-tool-id={`TOOL-${pad(startIndex + index)}`}
          >
            Reusable Tool
          </p>
          <h3 className="sust-tool-card__title">{tool.title}</h3>
          <p className="sust-tool-card__desc">{tool.description}</p>
          {tool.pdfs.length > 0 && (
            <div className="sust-tool-card__actions">
              {tool.pdfs.map((pdf) => (
                <a
                  key={pdf.fileName}
                  className="sust-tool-card__btn"
                  href={pdfUrl(pdf.fileName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`在新标签页打开 ${tool.title}（${pdf.label}）PDF`}
                >
                  {pdf.label} PDF
                </a>
              ))}
            </div>
          )}
        </article>
      ))}
    </div>
  );
}


