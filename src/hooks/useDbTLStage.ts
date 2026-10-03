import { useEffect, useState, type RefObject } from "react";

/**
 * Resolve which Design–Build–Test–Learn stage the reader is currently inside.
 *
 * The Engineering page publishes ~10 iterations per cycle, so a page-wide
 * `IntersectionObserver` over every stage would carry dozens of observed nodes
 * for a value that is only ever read from one quartet. Instead this hook
 * re-queries the DOM only when the active iteration changes, which caps the
 * work at the four stages of that iteration and keeps the dial's inner ring
 * free of layout-thrashing observers.
 *
 * The activation line matches `useWikiPageMotion`: a fixed offset from the top
 * of the reader frame, so the stage flips at the same moment the reader's own
 * scroll spy advances.
 */

const STAGE_KEYS = ["design", "build", "test", "learn"] as const;

export type DbTLStageKey = (typeof STAGE_KEYS)[number];

function readStage(
  container: HTMLElement,
  sectionId: string,
): DbTLStageKey | "" {
  const root = container.querySelector<HTMLElement>(`#${CSS.escape(sectionId)}`);
  if (!root) return "";

  const bounds = container.getBoundingClientRect();
  const activationLine =
    bounds.top + Math.min(112, container.clientHeight * 0.22);

  let current: DbTLStageKey | "" = "";
  root.querySelectorAll<HTMLElement>("[data-dbtl-stage]").forEach((node) => {
    const key = node.dataset.dbtlStage as DbTLStageKey | undefined;
    if (!key || !STAGE_KEYS.includes(key)) return;
    if (node.getBoundingClientRect().top <= activationLine + 18) {
      current = key;
    }
  });

  // At the very end of an iteration the last stage can sit above the line while
  // the reader is already looking at the next heading; keep it selected rather
  // than falling back to the start of the ladder.
  if (!current) {
    const stages = root.querySelectorAll<HTMLElement>("[data-dbtl-stage]");
    const last = stages[stages.length - 1];
    if (
      last &&
      container.scrollTop + container.clientHeight >= container.scrollHeight - 4
    ) {
      const tail = last.dataset.dbtlStage;
      current = STAGE_KEYS.includes(tail as DbTLStageKey)
        ? (tail as DbTLStageKey)
        : "";
    }
  }

  return current;
}

export function useDbTLStage(
  scrollContainerRef: RefObject<HTMLElement | null>,
  activeSection: string,
): DbTLStageKey | "" {
  const [stage, setStage] = useState<DbTLStageKey | "">("");

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || !activeSection) return;

    let frame = 0;

    const measure = () => {
      frame = 0;
      const next = readStage(container, activeSection);
      setStage((previous) => (previous === next ? previous : next));
    };

    const request = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };

    container.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request, { passive: true });
    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(request) : null;
    resizeObserver?.observe(container);

    request();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      container.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      resizeObserver?.disconnect();
    };
  }, [activeSection, scrollContainerRef]);

  return stage;
}