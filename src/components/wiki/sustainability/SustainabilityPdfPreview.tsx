import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
import type { ProtocolManual } from "../../../data/protocolPages";
import "../../../styles/sustainability-page.css";

if (!pdfjs.GlobalWorkerOptions.workerPort) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker();
}

export function SustainabilityPdfPreview({
  manual,
  onOpen,
}: {
  manual: ProtocolManual;
  onOpen: () => void;
}) {
  const stageRef = useRef<HTMLDivElement | null>(null);
  const [coverWidth, setCoverWidth] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;
    const measure = () => setCoverWidth(stage.clientWidth);
    measure();
    if (typeof ResizeObserver === "undefined") return;
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  return (
    <figure className="sust-pdf-hero">
      <div className="sust-pdf-hero__stage" ref={stageRef}>
        {!failed && (
          <div className="sust-pdf-hero__page" aria-hidden="true">
            <Document
              file={manual.pdfUrl}
              onLoadSuccess={({ numPages }) => setPageCount(numPages)}
              onLoadError={() => setFailed(true)}
              onSourceError={() => setFailed(true)}
            >
              {coverWidth > 0 && (
                <Page
                  pageNumber={pageNumber}
                  width={coverWidth}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  loading={
                    <span className="sust-pdf-hero__status">
                      正在加载文档 Loading…
                    </span>
                  }
                />
              )}
            </Document>
          </div>
        )}

        <div className="sust-pdf-hero__scrim" aria-hidden="true" />
        <div className="sust-pdf-hero__frame" aria-hidden="true" />

        <button
          type="button"
          className="sust-pdf-hero__open"
          onClick={onOpen}
          aria-label={`在线预览 ${manual.title}（共 ${manual.pages} 页）`}
        >
          <span className="sust-pdf-hero__top">
            <span>PDF Attachment · SST-QN</span>
            <span>{manual.pages} Pages</span>
          </span>
          <span className="sust-pdf-hero__bottom">
            <span className="sust-pdf-hero__title">{manual.title}</span>
            <span className="sust-pdf-hero__caption">
              点击任意位置进入在线预览 · Click anywhere to open the reader
            </span>
          </span>
        </button>

        <div className="sust-pdf-hero__pager">
          <button
            type="button"
            disabled={pageNumber <= 1}
            aria-label="上一页 Previous page"
            onClick={() => setPageNumber((value) => Math.max(1, value - 1))}
          >
            ‹
          </button>
          <span aria-live="polite">
            {pageNumber} / {pageCount || manual.pages}
          </span>
          <button
            type="button"
            disabled={!pageCount || pageNumber >= pageCount}
            aria-label="下一页 Next page"
            onClick={() =>
              setPageNumber((value) => Math.min(pageCount, value + 1))
            }
          >
            ›
          </button>
        </div>
      </div>

      <figcaption className="sust-pdf-hero__bar">
        <p>{manual.description}</p>
        <a href={manual.pdfUrl} download={manual.assetName}>
          下载 Download <span aria-hidden="true">↧</span>
        </a>
      </figcaption>
    </figure>
  );
}
