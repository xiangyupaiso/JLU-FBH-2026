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
  activeId,
}: {
  steps: ReadonlyArray<ScaleRailStep>;
  /** The chapter heading; the rail shows (without a current step) on it too. */
  parentId: string;
  activeId: string;
}) {
  const anchorRef = useRef<HTMLSpanElement>(null);
  const [host, setHost] = useState<HTMLElement | null>(null);
  const [left, setLeft] = useState<number | null>(null);

  const activeIndex = steps.findIndex((step) => step.id === activeId);
  const hasCurrent = activeIndex !== -1;
  const visible = hasCurrent || activeId === parentId;
  const stateOf = (index: number): StepState =>
    index < activeIndex ? "done" : index === activeIndex ? "current" : "upcoming";

  // Portal target = the route page root, so the module palette vars still apply.
  useEffect(() => {
    setHost(anchorRef.current?.closest<HTMLElement>(".wiki-page") ?? null);
  }, []);

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
