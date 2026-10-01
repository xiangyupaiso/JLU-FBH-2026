/* eslint-disable react-refresh/only-export-components */
/**
 * Single-page citation preview tooltip.
 *
 * One portal instance lives at the end of the reference list; its state is a
 * module-level store read via useSyncExternalStore because in-text citation
 * links and the bibliography sit in different subtrees. Mouse hover shows it
 * after 150ms; focus-visible shows it immediately; `(hover: none)` devices
 * never get a tooltip (tap jumps directly).
 */
import { useEffect, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { descriptionReferences } from "../../../../data/project/descriptionPage";

interface PreviewState {
  refId: number;
  top: number;
  left: number;
  width: number;
  placement: "top" | "bottom";
}

const EDGE = 12;
const GAP = 8;
const MAX_WIDTH = 352; // 22rem
const ESTIMATED_HEIGHT = 150;
const SHOW_DELAY = 150;
const HIDE_GRACE = 100;

let current: PreviewState | null = null;
const listeners = new Set<() => void>();
let showTimer = 0;
let hideTimer = 0;

function emit() {
  listeners.forEach((listener) => listener());
}

function clearTimers() {
  window.clearTimeout(showTimer);
  window.clearTimeout(hideTimer);
}

function positionFor(refId: number, anchor: HTMLElement): PreviewState {
  const rect = anchor.getBoundingClientRect();
  const width = Math.min(MAX_WIDTH, window.innerWidth - EDGE * 2);
  const left = Math.min(
    Math.max(rect.left, EDGE),
    window.innerWidth - width - EDGE,
  );
  const spaceBelow = window.innerHeight - rect.bottom;
  const placeAbove =
    spaceBelow < ESTIMATED_HEIGHT + GAP && rect.top > spaceBelow;
  return {
    refId,
    width,
    left,
    placement: placeAbove ? "top" : "bottom",
    top: placeAbove ? rect.top - GAP : rect.bottom + GAP,
  };
}

export const preview = {
  subscribe(listener: () => void) {
    listeners.add(listener);
    return () => {
      listeners.delete(listener);
    };
  },
  getSnapshot() {
    return current;
  },
  show(refId: number, anchor: HTMLElement) {
    clearTimers();
    showTimer = window.setTimeout(() => {
      if (!window.matchMedia("(hover: hover)").matches) return;
      current = positionFor(refId, anchor);
      emit();
    }, SHOW_DELAY);
  },
  /** Keep the tooltip open while the pointer crosses onto it. */
  keep() {
    clearTimers();
  },
  scheduleHide() {
    clearTimers();
    hideTimer = window.setTimeout(() => {
      current = null;
      emit();
    }, HIDE_GRACE);
  },
  hide() {
    clearTimers();
    current = null;
    emit();
  },
};

export function CitationPreview() {
  const state = useSyncExternalStore(preview.subscribe, preview.getSnapshot);

  useEffect(() => {
    const dismiss = () => preview.hide();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") dismiss();
    };
    window.addEventListener("scroll", dismiss, true);
    window.addEventListener("resize", dismiss);
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("scroll", dismiss, true);
      window.removeEventListener("resize", dismiss);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  if (!state) return null;
  const ref = descriptionReferences.find((item) => item.id === state.refId);
  if (!ref) return null;

  return createPortal(
    <div
      className="description-cite-preview"
      data-placement={state.placement}
      aria-hidden="true"
      style={{
        top: state.top,
        left: state.left,
        width: state.width,
        transform: state.placement === "top" ? "translateY(-100%)" : undefined,
      }}
      onPointerEnter={preview.keep}
      onPointerLeave={preview.scheduleHide}
    >
      <span className="description-cite-preview__index">[{ref.id}]</span>{" "}
      <span>{ref.authors} </span>
      <span>{ref.title} </span>
      <em>{ref.journal} </em>
      <span>{ref.volumeYear}</span>
    </div>,
    document.body,
  );
}
