import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { Document, Page, pdfjs } from "react-pdf";
import PdfWorker from "pdfjs-dist/build/pdf.worker.min.mjs?worker";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import "../../../styles/protocol-bookcase.css";
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
/** 视口内 PDF 渲染区与卡片内边距（30px × 2）的预留空间。 */
const VIEWPORT_INSET = 60;

export function PdfViewerModal({ manual, onClose }: PdfViewerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const pageCountRef = useRef(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const baseSizeRef = useRef<{ width: number; height: number } | null>(null);
  const didFitRef = useRef(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [scale, setScale] = useState(1);
  const [useFallback, setUseFallback] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const closingRef = useRef(false);
  const closeTimerRef = useRef<number>(0);

  /** 按「宽度与高度中较小者」等比缩放，让整页 PDF 刚好完整容纳在视口内。 */
  const fitToViewport = useCallback(() => {
    const viewport = viewportRef.current;
    const base = baseSizeRef.current;
    if (!viewport || !base) return;
    const availW = viewport.clientWidth - VIEWPORT_INSET;
    const availH = viewport.clientHeight - VIEWPORT_INSET;
    if (availW <= 0 || availH <= 0 || base.width <= 0 || base.height <= 0) return;
    const fit = Math.min(availW / base.width, availH / base.height);
    setScale(
      Math.min(MAX_SCALE, Math.max(MIN_SCALE, Math.round(fit * 100) / 100)),
    );
  }, []);

  /** 关闭：先播放出场动画再真正卸载；偏好减少动效时立即关闭。 */
  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsClosing(true);
    window.clearTimeout(closeTimerRef.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    closeTimerRef.current = window.setTimeout(onClose, reduced ? 0 : 200);
  }, [onClose]);

  /** 重新打开时清除上一次关闭遗留的出场状态。 */
  useLayoutEffect(() => {
    if (!manual) return;
    closingRef.current = false;
    setIsClosing(false);
  }, [manual]);

  useEffect(
    () => () => {
      window.clearTimeout(closeTimerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!manual) return;

    setPageNumber(1);
    setPageCount(0);
    pageCountRef.current = 0;
    setScale(1);
    didFitRef.current = false;
    baseSizeRef.current = null;
    setUseFallback(false);

    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() =>
      closeButtonRef.current?.focus(),
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        requestClose();
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
  }, [manual, requestClose]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === dialogRef.current);
      // 进入/退出原生全屏后视口尺寸变化，重新 fit 到当前视口。
      fitToViewport();
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, [fitToViewport]);

  // React 的 onWheel 以 passive 方式注册，preventDefault 无效；改用原生
  // 非 passive 监听拦截 Ctrl+滚轮，避免浏览器整页缩放与 PDF 缩放同时发生。
  useEffect(() => {
    const viewport = viewportRef.current;
    if (!manual || !viewport) return;
    const handleWheel = (event: WheelEvent) => {
      if (!event.ctrlKey) return;
      event.preventDefault();
      setScale((current) =>
        Math.min(
          MAX_SCALE,
          Math.max(
            MIN_SCALE,
            Number(
              (
                current + (event.deltaY > 0 ? -SCALE_STEP : SCALE_STEP)
              ).toFixed(2),
            ),
          ),
        ),
      );
    };
    viewport.addEventListener("wheel", handleWheel, { passive: false });
    return () => viewport.removeEventListener("wheel", handleWheel);
  }, [manual]);

  if (!manual) return null;

  const changeScale = (difference: number) => {
    setScale((current) =>
      Math.min(
        MAX_SCALE,
        Math.max(MIN_SCALE, Number((current + difference).toFixed(2))),
      ),
    );
  };

  const toggleFullscreen = async () => {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    } else {
      await dialogRef.current?.requestFullscreen();
    }
  };

  const modal = (
    <div
      className={`protocol-modal${isClosing ? " protocol-modal--closing" : ""}`}
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
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
            onClick={requestClose}
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

        <div
          className="protocol-modal__viewport"
          ref={viewportRef}
        >
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
                onLoadSuccess={(page) => {
                  if (!baseSizeRef.current) {
                    const viewport = page.getViewport({ scale: 1 });
                    baseSizeRef.current = {
                      width: viewport.width,
                      height: viewport.height,
                    };
                  }
                  if (!didFitRef.current) {
                    didFitRef.current = true;
                    fitToViewport();
                  }
                }}
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

  return createPortal(modal, document.body);
}
