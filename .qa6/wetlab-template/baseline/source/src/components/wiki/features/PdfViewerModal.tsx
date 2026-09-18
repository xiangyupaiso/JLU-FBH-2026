import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { ProtocolManual } from "../../../data/protocolPages";

/**
 * Protocol Library reader.
 *
 * The modal shell, toolbar, focus trap and enter/leave animation are the team's
 * own code, migrated from the previous build. The PDF *rendering engine* is the
 * browser's built-in viewer (an `<iframe>`), because the previous build relied on
 * `react-pdf` + `pdfjs-dist` and this project must not add external
 * dependencies. Consequence, called out in the hand-over notes: page turning and
 * zoom now belong to the browser viewer, so the custom page/zoom controls are
 * gone; "Open in new tab" was added so the document can be inspected outside the
 * modal.
 */

interface PdfViewerModalProps {
  manual: ProtocolManual | null;
  onClose: () => void;
}

export function PdfViewerModal({ manual, onClose }: PdfViewerModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const closeTimerRef = useRef<number>(0);
  const closingRef = useRef(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  /** Close: play the leave animation first; skip it when motion is reduced. */
  const requestClose = useCallback(() => {
    if (closingRef.current) return;
    closingRef.current = true;
    setIsClosing(true);
    window.clearTimeout(closeTimerRef.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)")
      .matches;
    closeTimerRef.current = window.setTimeout(onClose, reduced ? 0 : 200);
  }, [onClose]);

  useEffect(() => {
    if (!manual) return;

    closingRef.current = false;
    setIsClosing(false);
    setIsLoading(true);

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

  useEffect(() => () => window.clearTimeout(closeTimerRef.current), []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(document.fullscreenElement === dialogRef.current);
    };
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  if (!manual) return null;

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
            <span>
              {manual.pages} pages / {manual.assetName}
            </span>
          </div>

          <div>
            <a href={manual.pdfUrl} target="_blank" rel="noreferrer">
              Open in new tab
            </a>
            <button type="button" onClick={toggleFullscreen}>
              {isFullscreen ? "Exit full screen" : "Full screen"}
            </button>
            <a href={manual.pdfUrl} download={manual.assetName}>
              Download
            </a>
          </div>
        </div>

        <div className="protocol-modal__viewport">
          <iframe
            className="protocol-modal__document"
            src={manual.pdfUrl}
            title={`${manual.title} PDF`}
            onLoad={() => setIsLoading(false)}
          />
          {isLoading ? (
            <p className="protocol-modal__status">Loading document…</p>
          ) : null}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
}
