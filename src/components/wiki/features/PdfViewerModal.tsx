import {
  useEffect,
  useRef,
  useState,
  type WheelEvent as ReactWheelEvent,
} from "react";
import { Document, Page, pdfjs } from "react-pdf";
import PdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import type { ProtocolManual } from "../../../data/protocolPages";

if (!pdfjs.GlobalWorkerOptions.workerPort) {
  pdfjs.GlobalWorkerOptions.workerPort = new PdfWorker();
}

interface PdfViewerModalProps {
  manual: ProtocolManual | null;
  onClose: () => void;
}

const MIN_SCALE = 0.6;
const MAX_SCALE = 1.8;
const SCALE_STEP = 0.15;

export function PdfViewerModal({ manual, onClose }: PdfViewerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pageCountRef = useRef(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [scale, setScale] = useState(1);
  const [useFallback, setUseFallback] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    if (!manual) return;

    setPageNumber(1);
    setPageCount(0);
    pageCountRef.current = 0;
    setScale(1);
    setUseFallback(false);

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() =>
      closeButtonRef.current?.focus(),
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "ArrowLeft") {
        setPageNumber((current) => Math.max(1, current - 1));
      }

      if (event.key === "ArrowRight") {
        setPageNumber((current) =>
          Math.min(pageCountRef.current || manual.pages, current + 1),
        );
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not(:disabled), a[href], iframe, [tabindex]:not([tabindex="-1"])',
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement) previousFocus.focus();
    };
  }, [manual, onClose]);

  useEffect(() => {
    const handleFullscreenChange = () =>
      setIsFullscreen(document.fullscreenElement === dialogRef.current);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!manual) return null;

  const changeScale = (difference: number) => {
    setScale((current) =>
      Math.min(
        MAX_SCALE,
        Math.max(MIN_SCALE, Number((current + difference).toFixed(2))),
      ),
    );
  };

  const handleWheel = (event: ReactWheelEvent<HTMLDivElement>) => {
    if (!event.ctrlKey) return;
    event.preventDefault();
    changeScale(event.deltaY > 0 ? -SCALE_STEP : SCALE_STEP);
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await dialogRef.current?.requestFullscreen();
    }
  };

  return (
    <div
      className="protocol-modal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="protocol-modal__panel"
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="protocol-modal-title"
      >
        <header className="protocol-modal__header">
          <div>
            <span>
              {manual.id} / {manual.documentType}
            </span>
            <h2 id="protocol-modal-title">{manual.title}</h2>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close PDF viewer"
            onClick={onClose}
          >
            <span aria-hidden="true">×</span>
          </button>
        </header>

        <div className="protocol-modal__toolbar" aria-label="PDF controls">
          <div>
            <button
              type="button"
              disabled={useFallback || pageNumber <= 1}
              aria-label="Previous page"
              onClick={() => setPageNumber((current) => current - 1)}
            >
              ‹
            </button>
            <span aria-live="polite">
              Page {pageNumber} / {pageCount || manual.pages}
            </span>
            <button
              type="button"
              disabled={useFallback || !pageCount || pageNumber >= pageCount}
              aria-label="Next page"
              onClick={() => setPageNumber((current) => current + 1)}
            >
              ›
            </button>
          </div>

          <div>
            <button
              type="button"
              disabled={useFallback || scale <= MIN_SCALE}
              aria-label="Zoom out"
              onClick={() => changeScale(-SCALE_STEP)}
            >
              −
            </button>
            <span>{Math.round(scale * 100)}%</span>
            <button
              type="button"
              disabled={useFallback || scale >= MAX_SCALE}
              aria-label="Zoom in"
              onClick={() => changeScale(SCALE_STEP)}
            >
              +
            </button>
          </div>

          <div>
            <button type="button" onClick={toggleFullscreen}>
              {isFullscreen ? "Exit full screen" : "Full screen"}
            </button>
            <a href={manual.pdfUrl} download={manual.assetName}>
              Download
            </a>
          </div>
        </div>

        <div className="protocol-modal__viewport" onWheel={handleWheel}>
          {useFallback ? (
            <iframe src={manual.pdfUrl} title={`${manual.title} PDF`} />
          ) : (
            <Document
              file={manual.pdfUrl}
              loading={
                <p className="protocol-modal__status">Loading document…</p>
              }
              onLoadSuccess={({ numPages }) => {
                pageCountRef.current = numPages;
                setPageCount(numPages);
              }}
              onLoadError={() => setUseFallback(true)}
              onSourceError={() => setUseFallback(true)}
            >
              <Page
                pageNumber={pageNumber}
                scale={scale}
                loading={
                  <p className="protocol-modal__status">Rendering page…</p>
                }
              />
            </Document>
          )}
        </div>
      </div>
    </div>
  );
}
