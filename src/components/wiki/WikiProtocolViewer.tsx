import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import {
  experimentProtocolImage,
  type ExperimentProtocolPair,
} from "../../data/wet-lab/experimentProtocolPages";

/**
 * Floating hover preview card displayed beside the TOC item.
 */
export function WikiProtocolHoverCard({
  pair,
  anchorRect,
  onOpenModal,
  onMouseEnter,
  onMouseLeave,
}: {
  pair: ExperimentProtocolPair;
  anchorRect: DOMRect;
  onOpenModal: (pair: ExperimentProtocolPair, initialTab?: "flow" | "inventory") => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}) {
  const [activeTab, setActiveTab] = useState<"flow" | "inventory">("flow");

  // Position popover intelligently to the right of the TOC item
  const popoverWidth = 320;
  const popoverHeight = 270;
  const padding = 12;

  let left = anchorRect.right + padding;
  if (left + popoverWidth > window.innerWidth - 16) {
    // If overflowing right edge, place to the left
    left = Math.max(16, anchorRect.left - popoverWidth - padding);
  }

  let top = anchorRect.top - 20;
  if (top + popoverHeight > window.innerHeight - 16) {
    top = Math.max(16, window.innerHeight - popoverHeight - 16);
  }

  const style: CSSProperties = {
    position: "fixed",
    top: `${Math.round(top)}px`,
    left: `${Math.round(left)}px`,
    width: `${popoverWidth}px`,
    zIndex: 9999,
  };

  const currentPage = activeTab === "flow" ? pair.flowPage : pair.inventoryPage;
  const currentLabel = activeTab === "flow" ? "Workflow 流程图" : "Materials 物料设备清单";

  return createPortal(
    <div
      className="wiki-protocol-popover"
      style={style}
      role="tooltip"
      aria-label={`${pair.code} ${pair.title} preview`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="wiki-protocol-popover__header">
        <div className="wiki-protocol-popover__badge-row">
          <span className="wiki-protocol-popover__badge">{pair.code}</span>
          <span className="wiki-protocol-popover__label">实验图谱速览</span>
        </div>
        <h4 className="wiki-protocol-popover__title">{pair.title}</h4>
      </div>

      <div className="wiki-protocol-popover__tabs">
        <button
          type="button"
          className={`wiki-protocol-popover__tab ${activeTab === "flow" ? "is-active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("flow");
          }}
        >
          P{pair.flowPage} · 流程图
        </button>
        <button
          type="button"
          className={`wiki-protocol-popover__tab ${activeTab === "inventory" ? "is-active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("inventory");
          }}
        >
          P{pair.inventoryPage} · 物料清单
        </button>
      </div>

      <div
        className="wiki-protocol-popover__image-wrap"
        onClick={() => onOpenModal(pair, activeTab)}
        title="点击打开高清大图 (支持放大查看)"
      >
        <img
          src={experimentProtocolImage(currentPage)}
          alt={`${pair.title} - ${currentLabel}`}
          className="wiki-protocol-popover__thumb"
          loading="eager"
        />
        <div className="wiki-protocol-popover__overlay-hint">
          <span>🔍 点击查看完整高清大图</span>
        </div>
      </div>

      <div className="wiki-protocol-popover__footer">
        <span className="wiki-protocol-popover__page-hint">P{currentPage} · {currentLabel}</span>
        <button
          type="button"
          className="wiki-protocol-popover__expand-btn"
          onClick={() => onOpenModal(pair, activeTab)}
        >
          放大查看 ↗
        </button>
      </div>
    </div>,
    document.body,
  );
}

/**
 * Full-screen modal viewer allowing detailed, extended inspection of experiment charts.
 */
export function WikiProtocolModal({
  pair,
  initialTab = "flow",
  onClose,
}: {
  pair: ExperimentProtocolPair | null;
  initialTab?: "flow" | "inventory";
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeTab, setActiveTab] = useState<"flow" | "inventory">(initialTab);
  const [showActualSize, setShowActualSize] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
    setShowActualSize(false);
  }, [initialTab, pair]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (pair && !dialog.open) {
      dialog.showModal();
    } else if (!pair && dialog.open) {
      dialog.close();
    }
  }, [pair]);

  if (!pair) return null;

  const currentPage = activeTab === "flow" ? pair.flowPage : pair.inventoryPage;
  const currentLabel = activeTab === "flow" ? "Workflow 流程图" : "Materials & Equipment 物料与设备";
  const currentSize = activeTab === "flow" ? pair.flowSize : pair.inventorySize;

  return (
    <dialog
      ref={dialogRef}
      className="exp-atlas__viewer wiki-protocol-modal"
      aria-labelledby="protocol-viewer-title"
      onClose={onClose}
    >
      <header className="exp-atlas__viewer-header wiki-protocol-modal__header">
        <div className="wiki-protocol-modal__meta">
          <span className="exp-atlas__eyebrow">
            Page {currentPage} · {pair.section}
          </span>
          <h4 id="protocol-viewer-title">
            <span className="wiki-protocol-modal__code">{pair.code}</span> {pair.title} · {currentLabel}
          </h4>
        </div>

        <div className="wiki-protocol-modal__tab-group">
          <button
            type="button"
            className={`wiki-protocol-modal__tab ${activeTab === "flow" ? "is-active" : ""}`}
            onClick={() => {
              setActiveTab("flow");
              setShowActualSize(false);
            }}
          >
            P{pair.flowPage} · Workflow
          </button>
          <button
            type="button"
            className={`wiki-protocol-modal__tab ${activeTab === "inventory" ? "is-active" : ""}`}
            onClick={() => {
              setActiveTab("inventory");
              setShowActualSize(false);
            }}
          >
            P{pair.inventoryPage} · Materials &amp; Equipment
          </button>
        </div>

        <div className="exp-atlas__viewer-actions">
          <button
            type="button"
            onClick={() => setShowActualSize(!showActualSize)}
          >
            {showActualSize ? "适应窗口 (Fit width)" : "原始尺寸 (Actual size)"}
          </button>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close enlarged page"
          >
            关闭 ×
          </button>
        </div>
      </header>

      {pair.boundary ? (
        <div className="wiki-protocol-modal__boundary">
          <span>实验说明：</span>{pair.boundary}
        </div>
      ) : null}

      <div className="exp-atlas__viewer-scroll wiki-protocol-modal__scroll">
        <img
          className={showActualSize ? "is-actual" : ""}
          src={experimentProtocolImage(currentPage)}
          alt={`${pair.title}, ${currentLabel}, page ${currentPage}`}
          width={currentSize[0]}
          height={currentSize[1]}
        />
      </div>
    </dialog>
  );
}
