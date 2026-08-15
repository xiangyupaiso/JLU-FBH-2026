import { lazy, Suspense, useState } from "react";
import type { LegacyTool, LegacyToolPdf } from "../../../data/sustainabilityData";
import type { ProtocolManual } from "../../../data/protocolPages";
import "../../../styles/sustainability-page.css";

const PdfViewerModal = lazy(() =>
  import("../features/PdfViewerModal").then((m) => ({
    default: m.PdfViewerModal,
  })),
);

const pdfUrl = (fileName: string) =>
  `${import.meta.env.BASE_URL}assets/docs/${fileName}`;

const SHORT_LABEL: Record<string, string> = {
  中文: "CN",
  English: "EN",
};

const pad = (n: number) => String(Math.max(1, n)).padStart(2, "0");

/** L — Legacy 章节的工具卡片：每张卡含标题、说明与 CN/EN 预览按钮。 */
export function PdfToolList({
  tools,
  startIndex = 1,
}: {
  tools: ReadonlyArray<LegacyTool>;
  startIndex?: number;
}) {
  const [openManual, setOpenManual] = useState<ProtocolManual | null>(null);

  const openPdf = (tool: LegacyTool, pdf: LegacyToolPdf) => {
    setOpenManual({
      id: tool.title,
      title: `${tool.title}（${pdf.label}）`,
      category: "report",
      description: tool.description,
      pdfUrl: pdfUrl(pdf.fileName),
      assetName: pdf.fileName,
      documentType: "Report",
      addedAt: "2026-08-15",
      pages: 1,
    });
  };

  return (
    <>
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
                  <button
                    key={pdf.fileName}
                    type="button"
                    className="sust-tool-card__btn"
                    aria-label={`预览 ${tool.title}（${pdf.label}）`}
                    onClick={() => openPdf(tool, pdf)}
                  >
                    {SHORT_LABEL[pdf.label] ?? pdf.label}
                  </button>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <Suspense fallback={null}>
        <PdfViewerModal
          manual={openManual}
          onClose={() => setOpenManual(null)}
        />
      </Suspense>
    </>
  );
}
