import { useEffect, useRef, useState, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import { scrollReaderToId } from "../../../../../utils";

export interface ScaleRailStep {
  id: string;
  /** Full heading index, e.g. "4.1.1". */
  index: string;
  /** Letter shown in the rail: S / C / A / L / E, T for the Tracker. */
  mark: string;
  /** Full name, shown on hover / focus, e.g. "Stakeholder Insights". */
  label: string;
}

type StepState = "done" | "current" | "upcoming";

/** Desktop rail breakpoint; matches the reader's `@media (max-width: 980px)` drawer. */
const DESKTOP_QUERY = "(min-width: 981px)";

/**
 * Subsection rail for one SDG chapter: every third-level heading under the
 * chapter (4.1.1 … 4.1.6), which the TOC no longer lists.
 *
 * Desktop: a vertical track of letters (S C A L E T) in the gap between the
 * TOC card and the article; ≤980px: a bar under the header. A gradient slider
 * glides to the current step; every step jumps through the reader's document
 * timeline, like the TOC. The rail
 * fades in while the reader is inside the chapter. It is portalled to the page
 * root because the feature slot's reveal transform would otherwise capture
 * `position: fixed`.
 */
export function SCALEProgressChain({
  steps,
  parentId,
  endId,
  activeId,
}: {
  steps: ReadonlyArray<ScaleRailStep>;
  /** The chapter heading; the rail shows (without a current step) on it too. */
  parentId: string;
  /** The next chapter heading, after all content in the final SCALE step. */
  endId: string;
  activeId: string;
}) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [left, setLeft] = useState<number | null>(null);
  const [inChapter, setInChapter] = useState(false);
  const [realActiveIndex, setRealActiveIndex] = useState(-1);

  // Portal target = the route page root, so the module palette vars still apply.
  useEffect(() => {
    setHost(anchorRef.current?.closest<HTMLElement>(".wiki-page") ?? null);
  }, []);

  // Use the next chapter heading, never the last step's introductory block.
  useEffect(() => {
    const reader = anchorRef.current?.closest<HTMLElement>(".route-frame__scroll");
    const scrollContainer = reader ?? window;
    let frame = 0;

    const updateRail = () => {
      frame = 0;
      const startEl = document.getElementById(parentId);
      if (!startEl) {
        setInChapter(false);
        return;
      }

      const startRect = startEl.getBoundingClientRect();
      const headerHeight = Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue("--header-height"),
      ) || 78;
      // Match the article scroll spy: use reader coordinates on desktop and
      // the document reading line under the header on compact screens.
      const readingLine = reader && window.matchMedia(DESKTOP_QUERY).matches
        ? reader.getBoundingClientRect().top + Math.min(112, reader.clientHeight * 0.22) + 18
        : headerHeight + 108;
      const nextChapter = endId ? document.getElementById(endId) : null;
      const lastStepId = steps[steps.length - 1]?.id;
      const lastStep = lastStepId ? document.getElementById(lastStepId) : null;
      // With no later same-level chapter, end at the final step's feature
      // instead of keeping the rail alive through the rest of the page.
      const finalFeature = lastStep?.nextElementSibling?.nextElementSibling;
      const endTop = nextChapter?.getBoundingClientRect().top
        ?? finalFeature?.getBoundingClientRect().bottom
        ?? startEl.closest(".wiki-section")?.getBoundingClientRect().bottom
        ?? Infinity;
      const entered = startRect.top <= readingLine;
      // The final chapter has no following same-level heading. Let its rail
      // leave once the final feature has cleared the reader viewport, so it
      // cannot remain fixed over the page's Next page card.
      const exitLine = nextChapter
        ? readingLine
        : reader?.getBoundingClientRect().bottom ?? readingLine;
      const exited = endTop <= exitLine;
      const isInside = entered && !exited;

      setInChapter(isInside);

      if (isInside) {
        let activeIdx = -1;
        steps.forEach((step, idx) => {
          const el = document.getElementById(step.id);
          if (el && el.getBoundingClientRect().top <= readingLine) {
            activeIdx = idx;
          }
        });
        setRealActiveIndex(activeIdx);
      } else {
        setRealActiveIndex(-1);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = requestAnimationFrame(updateRail);
    };
    updateRail();
    scrollContainer.addEventListener("scroll", requestUpdate, { passive: true });
    if (scrollContainer !== window) {
      window.addEventListener("scroll", requestUpdate, { passive: true });
    }
    window.addEventListener("resize", requestUpdate, { passive: true });
    return () => {
      if (frame) cancelAnimationFrame(frame);
      scrollContainer.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, [parentId, endId, steps]);

  const activeIndex = realActiveIndex !== -1 ? realActiveIndex : steps.findIndex((step) => step.id === activeId);
  const hasCurrent = activeIndex !== -1;
  const visible = inChapter;
  const stateOf = (index: number): StepState =>
    index < activeIndex ? "done" : index === activeIndex ? "current" : "upcoming";

  // Desktop: centre the rail in the gap right of the TOC card.
  useEffect(() => {
    if (!host) return;
    const desktop = window.matchMedia(DESKTOP_QUERY);
    const measure = () => {
      const toc = host.querySelector<HTMLElement>(".wiki-outline");
      setLeft(desktop.matches && toc ? toc.getBoundingClientRect().right : null);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(host);
    desktop.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      desktop.removeEventListener("change", measure);
    };
  }, [host]);

  const style = {
    "--scale-index": Math.max(0, activeIndex),
    "--scale-count": steps.length,
    ...(left === null ? null : { "--scale-rail-left": `${left}px` }),
  } as CSSProperties;

  return (
    <>
      <span ref={anchorRef} className="sust-scale-rail__anchor" aria-hidden="true" />
      {host
        ? createPortal(
            <nav
              className={`sust-scale-rail${visible ? " is-visible" : ""}${
                hasCurrent ? " has-current" : ""
              }`}
              aria-label="Chapter subsections"
              aria-hidden={!visible}
              inert={!visible}
              style={style}
            >
              <span className="sust-scale-rail__slider" aria-hidden="true" />
              <ol className="sust-scale-rail__track">
                {steps.map((step, index) => (
                  <li
                    key={step.id}
                    className={`sust-scale__item is-${stateOf(index)}`}
                    data-scale-step={step.mark}
                  >
                    <a
                      className="sust-scale__button"
                      href={`#${step.id}`}
                      onClick={(event) => {
                        event.preventDefault();
                        scrollReaderToId(step.id, event.currentTarget);
                      }}
                      aria-current={index === activeIndex ? "location" : undefined}
                    >
                      <span
                        className="sust-scale__letter"
                        aria-hidden="true"
                        data-scale-step={step.mark}
                      >
                        {step.mark}
                      </span>
                      <span className="sust-scale__name">
                        {step.index} {step.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>,
            host,
          )
        : null}
    </>
  );
}
