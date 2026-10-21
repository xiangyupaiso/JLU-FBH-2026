import { useEffect, useRef, useState, type ReactNode } from "react";
import { flushSync } from "react-dom";
import { scrollReaderToId, scrollReaderToTarget } from "../../../../utils/scrollReaderToTarget";
import * as Tabs from "@radix-ui/react-tabs";
import "../../../../styles/features/manuscript-tabs.css";

/** Author-supplied headings and content, without duplicated prose or summaries. */
export function ManuscriptTabs({
  title,
  entries,
  orientation = "vertical",
  flowLabels,
  flowInputSource = "GSE176078",
  flowNodeDetails,
  flowOutputLabel = "Output",
  skipTarget,
}: {
  title: string;
  entries: { title: string; content: ReactNode }[];
  orientation?: "vertical" | "horizontal";
  flowLabels?: string[];
  flowInputSource?: string;
  flowNodeDetails?: string[];
  flowOutputLabel?: string;
  skipTarget?: string;
}) {
  const [value, setValue] = useState("0");
  const root = useRef<HTMLDivElement>(null);
  const activeStep = useRef(0);
  const enterFromEnd = useRef(false);
  activeStep.current = Number(value);
  const isFlow = Boolean(flowLabels);
  const alignFlow = useRef<(() => void) | null>(null);

  useEffect(() => {
    const element = root.current;
    if (!isFlow || !element) return;
    const inner = element.closest(".wiki-page")?.querySelector<HTMLElement>(".route-frame__scroll") ?? null;
    let frame = 0;
    let lastWheel = 0;
    let releaseAt = 0;
    let accumulated = 0;
    let aligningUntil = 0;
    let leaving = 0;
    let previousTop = element.getBoundingClientRect().top;
    const bounds = () => {
      const viewport = window.visualViewport;
      const screenTop = viewport?.offsetTop ?? 0;
      const screenBottom = screenTop + (viewport?.height ?? window.innerHeight);
      const header = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect();
      const reader = inner?.getBoundingClientRect();
      const top = Math.max(screenTop, header?.bottom ?? 0, reader?.top ?? 0);
      const bottom = Math.min(screenBottom, reader?.bottom ?? screenBottom);
      return { top, bottom, height: Math.max(0, bottom - top) };
    };
    const fits = () => {
      const view = bounds();
      const rect = element.getBoundingClientRect();
      return rect.top >= view.top + 8 && rect.bottom <= view.bottom - 8;
    };
    const snap = () => {
      const view = bounds();
      if (element.offsetHeight > view.height - 16 || view.height < 280) return;
      aligningUntil = performance.now() + 650;
      accumulated = 0;
      releaseAt = 0;
      leaving = 0;
      if (inner && getComputedStyle(inner).overflowY === "hidden") {
        scrollReaderToTarget(element, inner, "smooth", { block: "center" });
      } else {
        const delta = element.getBoundingClientRect().top - view.top - (view.height - element.offsetHeight) / 2;
        if (inner && /auto|scroll/.test(getComputedStyle(inner).overflowY)) {
          inner.scrollBy({ top: delta, behavior: "smooth" });
        } else {
          window.scrollBy({ top: delta, behavior: "smooth" });
        }
      }
    };
    alignFlow.current = snap;
    const measure = () => {
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const headerHeight = document.querySelector<HTMLElement>(".site-header")?.getBoundingClientRect().height ?? 0;
      // Size for the reader's capacity even before it has scrolled into view.
      const availableHeight = Math.min(inner?.clientHeight ?? viewportHeight, Math.max(0, viewportHeight - headerHeight));
      const height = Math.max(240, Math.floor(availableHeight - 48));
      const value = `${height}px`;
      if (element.style.getPropertyValue("--flow-stage-height") !== value) {
        element.style.setProperty("--flow-stage-height", value);
      }
      element.style.setProperty("--flow-node-count", String(entries.length + 1));
    };
    const update = () => {
      frame = 0;
      const view = bounds();
      const rect = element.getBoundingClientRect();
      const movement = rect.top - previousTop;
      previousTop = rect.top;
      if (rect.bottom <= view.top || rect.top >= view.bottom) {
        leaving = 0;
        return;
      }
      if (leaving || performance.now() < aligningUntil || fits() || rect.height > view.height - 16) return;
      // Enter the reading stage before a wheel gesture can change its content.
      const enteringDown = movement < -0.5 && rect.top > view.top + 24 && rect.top < view.top + view.height * 0.35;
      const enteringUp = movement > 0.5 && rect.bottom < view.bottom - 24 && rect.bottom > view.top + view.height * 0.65;
      if (enteringDown || enteringUp) snap();
    };
    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const resize = () => {
      const wasFitted = fits();
      measure();
      if (wasFitted) snap();
      requestUpdate();
    };
    const advance = (event: WheelEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      if (!target || event.ctrlKey || Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;
      const direction = Math.sign(event.deltaY);
      const sheet = target.closest<HTMLElement>(".manuscript-tabs__sheet");
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? element.clientHeight : 1);
      const leaveSheet = () => {
        if (!sheet) return;
        // The reader projects document scroll into a hidden inner scroller;
        // native scroll chaining from a text sheet cannot always reach it.
        event.preventDefault();
        event.stopPropagation();
        const scroller = inner && /auto|scroll/.test(getComputedStyle(inner).overflowY) ? inner : window;
        scroller.scrollBy({ top: delta, behavior: "instant" });
      };
      if (leaving && direction !== leaving) leaving = 0;
      const now = performance.now();
      const continuing = now - lastWheel < 200;
      lastWheel = now;
      if (!fits()) {
        if (leaving) {
          leaveSheet();
          return;
        }
        // Keep the entry gesture from cancelling the alignment animation.
        if (now < aligningUntil) {
          event.preventDefault();
          event.stopPropagation();
          releaseAt = Math.max(releaseAt, now + 200);
          return;
        }
        const view = bounds();
        const rect = element.getBoundingClientRect();
        if (!leaving && now >= aligningUntil && rect.height <= view.height - 16 &&
            rect.top < view.top + view.height * 0.45 && rect.bottom > view.top + view.height * 0.55) {
          event.preventDefault();
          event.stopPropagation();
          snap();
        }
        return;
      }
      // The scroll which brought the whole stage into view never advances a node.
      if (now < aligningUntil) {
        if (!target.closest(".manuscript-tabs__sheet")) {
          event.preventDefault();
          event.stopPropagation();
        }
        releaseAt = Math.max(releaseAt, now + 200);
        return;
      }
      // Read the current text first, then hand its boundary gesture to the flow.
      if (sheet) {
        const remaining = sheet.scrollHeight - sheet.clientHeight - sheet.scrollTop;
        if (direction > 0 ? remaining > 2 : sheet.scrollTop > 2) {
          accumulated = 0;
          return;
        }
      }
      if ((continuing && releaseAt) || now < releaseAt) {
        event.preventDefault();
        event.stopPropagation();
        return;
      }
      releaseAt = 0;
      const next = activeStep.current + direction;
      if (next < 0 || next >= entries.length) {
        leaving = direction;
        leaveSheet();
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      accumulated = continuing && Math.sign(accumulated) === direction ? accumulated + delta : delta;
      if (Math.abs(accumulated) < 30) return;
      accumulated = 0;
      releaseAt = now + 450;
      activeStep.current = next;
      enterFromEnd.current = direction < 0;
      setValue(String(next));
    };
    measure();
    const observer = new ResizeObserver(resize);
    if (inner) observer.observe(inner);
    observer.observe(element);
    element.addEventListener("wheel", advance, { passive: false });
    inner?.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", resize);
    window.visualViewport?.addEventListener("resize", resize);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      observer.disconnect();
      alignFlow.current = null;
      element.removeEventListener("wheel", advance);
      inner?.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, [isFlow, entries.length]);

  useEffect(() => {
    if (isFlow) {
      const sheet = root.current?.querySelector(".manuscript-tabs__sheet");
      sheet?.scrollTo(0, enterFromEnd.current ? sheet.scrollHeight : 0);
      enterFromEnd.current = false;
    }
  }, [isFlow, value]);

  useEffect(() => {
    // Citation backlinks must reveal the destination before the shared jump
    // handler measures it. Keep inactive prose mounted for stable anchor IDs.
    const reveal = (event: MouseEvent) => {
      const link = (event.target as Element).closest('a[href^="#"]');
      if (!link) return;
      const target = document.getElementById(
        link.getAttribute("href")!.slice(1),
      );
      const panel = target?.closest<HTMLElement>("[data-manuscript-tab]");
      if (!panel || !root.current?.contains(panel)) return;
      flushSync(() => setValue(panel.dataset.manuscriptTab!));
    };
    document.addEventListener("click", reveal, true);
    return () => document.removeEventListener("click", reveal, true);
  }, []);

  return (
    <div
      ref={root}
      data-manuscript-title={title}
      id={skipTarget ? `${skipTarget}-tabs` : undefined}
      data-flow-steps={isFlow ? entries.length : undefined}
      className={`manuscript-tabs${flowLabels ? " manuscript-tabs--flow" : ""}${skipTarget ? " manuscript-tabs--pinned" : ""}`}
    >
      <h3 className="manuscript-tabs__heading">{title}</h3>
      {flowLabels && (
        <p className="manuscript-tabs__hint">
          Select a node or scroll through the text; keep scrolling at either end to move between steps.
        </p>
      )}
      <Tabs.Root
        value={value}
        onValueChange={(next) => {
          flushSync(() => setValue(next));
          if (isFlow) alignFlow.current?.();
          if (skipTarget && root.current) scrollReaderToId(`${skipTarget}-tabs`, root.current);
        }}
        orientation={orientation}
        className={`manuscript-tabs__layout${
          orientation === "horizontal"
            ? " manuscript-tabs__layout--horizontal"
            : ""
        }`}
      >
        <div className="manuscript-tabs__navigation">
        <Tabs.List className="manuscript-tabs__list" aria-label={title}>
          {entries.map((entry, i) => (
            <Tabs.Trigger
              className="manuscript-tabs__tab"
              value={String(i)}
              key={i}
            >
              {flowLabels ? (
                <>
                  {i === 0 ? <><strong>Input</strong><span className="manuscript-tabs__input-source">{flowInputSource}</span></> : <><span>{flowLabels[i]}</span>{flowNodeDetails?.[i] && <span className="manuscript-tabs__node-detail">{flowNodeDetails[i]}</span>}</>}
                </>
              ) : (
                entry.title
              )}
            </Tabs.Trigger>
          ))}
          {flowLabels && <div className="manuscript-tabs__output" aria-label={`${flowOutputLabel}, end of workflow`}>{flowOutputLabel}</div>}
        </Tabs.List>
        {skipTarget && <a
          className="manuscript-tabs__skip"
          href={`#${skipTarget}`}
          onClick={(event) => {
            event.preventDefault();
            scrollReaderToId(skipTarget, event.currentTarget);
          }}
        >Skip this section ↓</a>}
        </div>
        <div className="manuscript-tabs__sheet">
          {entries.map((entry, i) => (
            <Tabs.Content
              forceMount
              data-manuscript-tab={String(i)}
              className="manuscript-tabs__content"
              value={String(i)}
              key={i}
            >
              {flowLabels && (
                <h4 className="manuscript-tabs__detail-heading">
                  {entry.title}
                </h4>
              )}
              {entry.content}
            </Tabs.Content>
          ))}
        </div>
      </Tabs.Root>
    </div>
  );
}
