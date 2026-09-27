import {
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type MouseEvent,
  type PointerEvent,
  type ReactNode,
} from "react";
import { Link } from "react-router-dom";

export interface WikiLineSidebarItem {
  id: string;
  index: string;
  label: string;
  meta?: string;
  children?: Array<{
    id: string;
    index: string;
    label: string;
  }>;
}

export interface WikiLineSidebarLink {
  label: string;
  path: string;
}

interface WikiLineSidebarProps {
  activeId: string;
  activeChildId?: string;
  items: WikiLineSidebarItem[];
  links?: WikiLineSidebarLink[];
  label?: string;
  minimal?: boolean;
  activeMarker?: ReactNode;
}

export function WikiLineSidebar({
  activeId,
  activeChildId = "",
  items,
  links = [],
  label = "On this page",
  minimal = false,
  activeMarker,
}: WikiLineSidebarProps) {
  const hasActiveMarker = Boolean(activeMarker);
  const outlineRef = useRef<HTMLElement>(null);
  const ribbonRef = useRef<HTMLSpanElement>(null);
  const pointerIdRef = useRef<number | null>(null);
  const requestRibbonMeasureRef = useRef<() => void>(() => undefined);
  const [ribbonTargetId, setRibbonTargetId] = useState(
    activeChildId || activeId,
  );
  const targetSignature = items
    .flatMap((item) => [
      item.id,
      ...(item.children?.map((child) => child.id) ?? []),
    ])
    .join("|");

  useEffect(() => {
    if (!minimal || hasActiveMarker) return;

    const outline = outlineRef.current;
    const ribbon = ribbonRef.current;
    if (!outline || !ribbon) return;

    let frame = 0;
    const measure = () => {
      frame = 0;
      if (ribbon.classList.contains("is-dragging")) return;

      const stops = Array.from(
        outline.querySelectorAll<HTMLElement>("[data-outline-target]"),
      )
        .map((navigation) => {
          const id = navigation.dataset.outlineTarget ?? "";
          return {
            id,
            navigation,
            content: id ? document.getElementById(id) : null,
          };
        })
        .filter(
          (
            stop,
          ): stop is {
            id: string;
            navigation: HTMLElement;
            content: HTMLElement;
          } => Boolean(stop.id && stop.content),
        );
      if (!stops.length) return;

      const headerHeight =
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      const readingLine = headerHeight + 108;
      let currentIndex = -1;
      let nextIndex = 0;

      stops.forEach((stop, index) => {
        if (stop.content.getBoundingClientRect().top <= readingLine) {
          currentIndex = index;
          nextIndex = Math.min(stops.length - 1, index + 1);
        }
      });

      if (currentIndex < 0) {
        currentIndex = 0;
        nextIndex = 0;
      }

      const current = stops[currentIndex];
      const next = stops[nextIndex];
      const currentBounds = current.navigation.getBoundingClientRect();
      const nextBounds = next.navigation.getBoundingClientRect();
      const ribbonBounds = ribbon.getBoundingClientRect();
      const currentCenter = currentBounds.top + currentBounds.height / 2;
      const nextCenter = nextBounds.top + nextBounds.height / 2;
      const contentDistance = Math.max(
        1,
        next.content.getBoundingClientRect().top -
          current.content.getBoundingClientRect().top,
      );
      const travelWindow = Math.min(220, Math.max(72, contentDistance * 0.32));
      const nextTop = next.content.getBoundingClientRect().top;
      const rawTravel =
        currentIndex === nextIndex
          ? 0
          : Math.min(
              1,
              Math.max(
                0,
                (readingLine + travelWindow - nextTop) / travelWindow,
              ),
            );
      const travel = rawTravel * rawTravel * (3 - 2 * rawTravel);
      const knotCenter = currentCenter + (nextCenter - currentCenter) * travel;
      const progress = Math.min(
        1,
        Math.max(
          0,
          (knotCenter - ribbonBounds.top) / Math.max(1, ribbonBounds.height),
        ),
      );
      const nearest = travel < 0.5 ? current : next;

      outline.style.setProperty("--wiki-outline-progress", progress.toFixed(4));
      setRibbonTargetId((previous) =>
        previous === nearest.id ? previous : nearest.id,
      );
    };

    const requestMeasure = () => {
      if (!frame) frame = requestAnimationFrame(measure);
    };
    const record = outline.closest<HTMLElement>(".wiki-record");
    const resizeObserver =
      "ResizeObserver" in window ? new ResizeObserver(requestMeasure) : null;

    requestRibbonMeasureRef.current = requestMeasure;
    window.addEventListener("scroll", requestMeasure, { passive: true });
    window.addEventListener("resize", requestMeasure, { passive: true });
    outline.addEventListener("scroll", requestMeasure, { passive: true });
    if (record) resizeObserver?.observe(record);
    requestMeasure();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestMeasure);
      window.removeEventListener("resize", requestMeasure);
      outline.removeEventListener("scroll", requestMeasure);
      resizeObserver?.disconnect();
      requestRibbonMeasureRef.current = () => undefined;
    };
  }, [minimal, targetSignature, hasActiveMarker]);

  useEffect(() => {
    const outline = outlineRef.current;
    const targetId = hasActiveMarker
      ? activeChildId || activeId
      : ribbonTargetId || activeChildId || activeId;
    const target = targetId
      ? outline?.querySelector<HTMLElement>(
          `[data-outline-target="${targetId}"]`,
        )
      : null;
    if (!outline || !target || !target.offsetParent) return;

    const outlineBounds = outline.getBoundingClientRect();
    const targetBounds = target.getBoundingClientRect();
    const upperGuard = outlineBounds.top + 76;
    const lowerGuard = outlineBounds.bottom - 42;
    const delta =
      targetBounds.top < upperGuard
        ? targetBounds.top - upperGuard
        : targetBounds.bottom > lowerGuard
          ? targetBounds.bottom - lowerGuard
          : 0;

    if (delta) {
      outline.scrollTo({
        top: outline.scrollTop + delta,
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "auto"
          : "smooth",
      });
    }
  }, [activeChildId, activeId, ribbonTargetId, hasActiveMarker]);

  const jumpToSection = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.history.replaceState(null, "", `#${id}`);
    document.getElementById(id)?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  const setScrollFromRibbon = (clientY: number) => {
    const outline = outlineRef.current;
    const ribbon = ribbonRef.current;
    const record = outline?.closest<HTMLElement>(".wiki-record");
    if (!outline || !ribbon || !record) return;

    const ribbonBounds = ribbon.getBoundingClientRect();
    const progress = Math.min(
      1,
      Math.max(
        0,
        (clientY - ribbonBounds.top) / Math.max(1, ribbonBounds.height),
      ),
    );
    outline.style.setProperty("--wiki-outline-progress", progress.toFixed(4));
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    const recordTop = record.getBoundingClientRect().top + window.scrollY;
    const start = recordTop - headerHeight - 24;
    const travel = Math.max(1, record.offsetHeight - window.innerHeight + 120);

    document.documentElement.classList.add("is-thread-directing");
    window.scrollTo(0, start + travel * progress);
  };

  const beginRibbonDrag = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    event.preventDefault();
    pointerIdRef.current = event.pointerId;
    event.currentTarget.setPointerCapture(event.pointerId);
    event.currentTarget.classList.add("is-dragging");
    document.body.classList.add("is-wiki-outline-dragging");
    event.currentTarget.focus({ preventScroll: true });
    setScrollFromRibbon(event.clientY);
  };

  const moveRibbonDrag = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerId !== pointerIdRef.current) return;
    event.preventDefault();
    setScrollFromRibbon(event.clientY);
  };

  const endRibbonDrag = (event: PointerEvent<HTMLSpanElement>) => {
    if (event.pointerId !== pointerIdRef.current) return;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }
    pointerIdRef.current = null;
    event.currentTarget.classList.remove("is-dragging");
    document.body.classList.remove("is-wiki-outline-dragging");
    document.documentElement.classList.remove("is-thread-directing");
    requestAnimationFrame(() => requestRibbonMeasureRef.current());
  };

  const moveRibbonWithKeyboard = (event: KeyboardEvent<HTMLSpanElement>) => {
    const activeIndex = Math.max(
      0,
      items.findIndex((item) => item.id === activeId),
    );
    let nextIndex = activeIndex;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex += 1;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex -= 1;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = items.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const target = items[Math.min(items.length - 1, Math.max(0, nextIndex))];
    document.getElementById(target.id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
      block: "start",
    });
  };

  return (
    <aside ref={outlineRef} className="wiki-outline" aria-label={label}>
      <header className="wiki-outline__header">
        <div>
          <p>{label}</p>
          <strong>
            {minimal
              ? `${String(
                  Math.max(
                    1,
                    items.findIndex((item) => item.id === activeId) + 1,
                  ),
                ).padStart(2, "0")} / ${String(items.length).padStart(2, "0")}`
              : `${items.length} chapters`}
          </strong>
        </div>
        <span>Jump to section</span>
      </header>
      <nav aria-label={label}>
        {!hasActiveMarker && (
          <span
            ref={ribbonRef}
            className="wiki-outline__ribbon"
            role="slider"
            tabIndex={0}
            aria-label="Drag the ribbon to navigate this record"
            aria-orientation="vertical"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(
              (Math.max(
                0,
                items.findIndex((item) => item.id === activeId),
              ) /
                Math.max(1, items.length - 1)) *
                100,
            )}
            onPointerDown={beginRibbonDrag}
            onPointerMove={moveRibbonDrag}
            onPointerUp={endRibbonDrag}
            onPointerCancel={endRibbonDrag}
            onKeyDown={moveRibbonWithKeyboard}
          >
            <i className="wiki-outline__ribbon-progress" />
            <i className="wiki-outline__ribbon-rest" />
            <svg
              className="ribbon-mark wiki-outline__ribbon-knot"
              viewBox="0 0 32 46"
            >
              <use href="#circure-ribbon-knot" />
            </svg>
          </span>
        )}
        {items.map((item) => (
          <div className="wiki-outline__group" key={item.id}>
            <a
              href={`#${item.id}`}
              className={`wiki-outline__primary ${
                activeId === item.id ? "is-active" : ""
              }`}
              data-outline-target={item.id}
              aria-current={activeId === item.id ? "location" : undefined}
              onClick={(event) => jumpToSection(event, item.id)}
              title={item.label}
            >
              <span className="wiki-outline__index">
                {minimal ? Number.parseInt(item.index, 10) : item.index}
              </span>
              <span className="wiki-outline__copy">
                {!minimal && item.meta ? <small>{item.meta}</small> : null}
                <strong>{item.label}</strong>
              </span>
              {hasActiveMarker && (
                <span className="wiki-outline__marker" aria-hidden="true">
                  {activeMarker}
                </span>
              )}
            </a>

            {minimal && item.children?.length ? (
              <div
                className="wiki-outline__subnav"
                aria-label={`${item.label} subsections`}
              >
                {item.children.map((child) => (
                  <a
                    className={`wiki-outline__secondary ${
                      ribbonTargetId === child.id ? "is-active" : ""
                    }`}
                    href={`#${child.id}`}
                    data-outline-target={child.id}
                    onClick={(event) => jumpToSection(event, child.id)}
                    aria-current={
                      ribbonTargetId === child.id ? "location" : undefined
                    }
                    title={child.label}
                    key={child.id}
                  >
                    <span>{child.index}</span>
                    <strong>{child.label}</strong>
                  </a>
                ))}
              </div>
            ) : null}
          </div>
        ))}
      </nav>

      {links.length ? (
        <div className="wiki-outline__related">
          {!minimal ? <span>Related records</span> : null}
          {links.map((link) => (
            <Link key={link.path} to={link.path}>
              {link.label} <span aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>
      ) : null}
    </aside>
  );
}
