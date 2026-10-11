import { useCallback, useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PDFPageProxy } from "pdfjs-dist";
import pdfWorkerUrl from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = pdfWorkerUrl;

function PdfPage({
  document,
  number,
  availableWidth,
  zoom,
  onVisible,
}: {
  document: PDFDocumentProxy;
  number: number;
  availableWidth: number;
  zoom: number;
  onVisible: (number: number) => void;
}) {
  const pageRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textLayerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<PDFPageProxy | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(number <= 2);

  useEffect(() => {
    const element = pageRef.current;
    const root = element?.closest<HTMLElement>(".wiki-document__pages");
    if (!element || !root) return;

    const renderObserver = new IntersectionObserver(
      ([entry]) => setIsNearViewport(entry.isIntersecting),
      { root, rootMargin: "700px 0px" },
    );
    const activePageObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) onVisible(number);
      },
      { root, threshold: 0.5 },
    );
    renderObserver.observe(element);
    activePageObserver.observe(element);
    return () => {
      renderObserver.disconnect();
      activePageObserver.disconnect();
    };
  }, [number, onVisible]);

  useEffect(() => {
    let cancelled = false;
    void document.getPage(number).then((loadedPage) => {
      if (!cancelled) setPage(loadedPage);
    });
    return () => {
      cancelled = true;
    };
  }, [document, number]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const textContainer = textLayerRef.current;
    if (!page || !canvas || !textContainer || !isNearViewport) return;

    const unitViewport = page.getViewport({ scale: 1 });
    const fitScale = Math.min(1, Math.max(0.1, (availableWidth - 32) / unitViewport.width));
    const scale = fitScale * zoom;
    const viewport = page.getViewport({ scale });
    const outputScale = Math.min(window.devicePixelRatio || 1, 2);
    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return;

    canvas.width = Math.floor(viewport.width * outputScale);
    canvas.height = Math.floor(viewport.height * outputScale);
    canvas.style.width = `${viewport.width}px`;
    canvas.style.height = `${viewport.height}px`;
    textContainer.replaceChildren();
    textContainer.style.width = `${viewport.width}px`;
    textContainer.style.height = `${viewport.height}px`;

    let cancelled = false;
    const renderTask = page.render({
      canvas,
      canvasContext: context,
      viewport,
      ...(outputScale > 1
        ? { transform: [outputScale, 0, 0, outputScale, 0, 0] }
        : {}),
      background: "#ffffff",
    });
    const textTask = page.getTextContent().then(async (textContent) => {
      if (cancelled) return;
      const layer = new pdfjs.TextLayer({
        textContentSource: textContent,
        container: textContainer,
        viewport,
      });
      await layer.render();
    });

    void Promise.all([renderTask.promise, textTask]).catch((error: unknown) => {
      if (
        !cancelled &&
        !(error instanceof pdfjs.RenderingCancelledException)
      ) {
        console.error("Unable to render PDF page", error);
      }
    });

    return () => {
      cancelled = true;
      renderTask.cancel();
      textContainer.replaceChildren();
    };
  }, [availableWidth, isNearViewport, page, zoom]);

  return (
    <section
      ref={pageRef}
      className="wiki-document__page"
      aria-label={`Page ${number}`}
      data-page-number={number}
    >
      <div className="wiki-document__page-content">
        <canvas ref={canvasRef} aria-label={`PDF page ${number}`} />
        <div ref={textLayerRef} className="wiki-document__text-layer" />
      </div>
    </section>
  );
}

export function PdfDocumentSurface({
  url,
  title,
}: {
  url: string;
  title: string;
}) {
  const pagesRef = useRef<HTMLDivElement>(null);
  const [document, setDocument] = useState<PDFDocumentProxy | null>(null);
  const [pageCount, setPageCount] = useState(0);
  const [availableWidth, setAvailableWidth] = useState(720);
  const [zoom, setZoom] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(false);
  const onVisible = useCallback((number: number) => setCurrentPage(number), []);

  useEffect(() => {
    const container = pagesRef.current;
    if (!container) return;

    const measure = () => setAvailableWidth(container.clientWidth);
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let cancelled = false;
    const loadingTask = pdfjs.getDocument({ url });
    setError(false);
    setDocument(null);
    setPageCount(0);
    setCurrentPage(1);

    void loadingTask.promise
      .then((loadedDocument) => {
        if (cancelled) {
          void loadedDocument.cleanup();
          return;
        }
        setDocument(loadedDocument);
        setPageCount(loadedDocument.numPages);
      })
      .catch((loadError: unknown) => {
        if (!cancelled) {
          console.error("Unable to open PDF", loadError);
          setError(true);
        }
      });

    return () => {
      cancelled = true;
      void loadingTask.destroy();
    };
  }, [url]);

  const goToPage = (page: number) => {
    pagesRef.current
      ?.querySelector<HTMLElement>(`[data-page-number="${page}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
    setCurrentPage(page);
  };

  return (
    <div className="wiki-document__reader" aria-label={title}>
      {document ? (
        <div className="wiki-document__toolbar" aria-label="PDF controls">
          <button
            type="button"
            onClick={() => goToPage(Math.max(1, currentPage - 1))}
            disabled={currentPage <= 1}
            aria-label="Previous page"
          >
            ‹
          </button>
          <label className="wiki-document__page-number">
            <input
              type="number"
              min={1}
              max={pageCount}
              value={currentPage}
              onChange={(event) => {
                const page = Number(event.currentTarget.value);
                if (Number.isInteger(page) && page >= 1 && page <= pageCount) {
                  goToPage(page);
                }
              }}
              aria-label="Current page"
            />
            <span> / {pageCount}</span>
          </label>
          <button
            type="button"
            onClick={() => goToPage(Math.min(pageCount, currentPage + 1))}
            disabled={currentPage >= pageCount}
            aria-label="Next page"
          >
            ›
          </button>
          <span className="wiki-document__toolbar-spacer" />
          <button
            type="button"
            onClick={() => setZoom((value) => Math.max(0.6, value - 0.1))}
            disabled={zoom <= 0.6}
            aria-label="Zoom out"
          >
            −
          </button>
          <span className="wiki-document__zoom-value">
            {Math.round(zoom * 100)}%
          </span>
          <button
            type="button"
            onClick={() => setZoom((value) => Math.min(2, value + 0.1))}
            disabled={zoom >= 2}
            aria-label="Zoom in"
          >
            +
          </button>
        </div>
      ) : null}

      <div
        ref={pagesRef}
        className="wiki-document__pages"
        tabIndex={0}
        aria-label={`${title} pages`}
      >
        {document
          ? Array.from({ length: pageCount }, (_, index) => (
              <PdfPage
                key={`${url}-${index + 1}`}
                document={document}
                number={index + 1}
                availableWidth={availableWidth}
                zoom={zoom}
                onVisible={onVisible}
              />
            ))
          : error
            ? <p className="wiki-document__load-state" role="alert">This PDF could not be displayed. Use the open or download link above.</p>
            : <p className="wiki-document__load-state" role="status">Loading document…</p>}
      </div>
    </div>
  );
}
