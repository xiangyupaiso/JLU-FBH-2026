import { useLayoutEffect, useState, type RefObject } from "react";
import { clamp } from "../utils";

export function useWikiPageMotion(
  rootRef: RefObject<HTMLElement | null>,
  sectionIds: string[],
  route: string,
) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.slice(1);
    return sectionIds.includes(hash) ? hash : (sectionIds[0] ?? "");
  });
  const [activeSubsection, setActiveSubsection] = useState(() => {
    const hash = window.location.hash.slice(1);
    return hash && !sectionIds.includes(hash) ? hash : "";
  });

  useLayoutEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const record = root.querySelector<HTMLElement>(".wiki-record");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    const outlineOffset = headerHeight + 32;
    const revealElements = Array.from(
      root.querySelectorAll<HTMLElement>("[data-wiki-reveal]"),
    );
    const sections = sectionIds
      .map((id) => root.querySelector<HTMLElement>(`#${id}`))
      .filter((section): section is HTMLElement => Boolean(section));
    const outlineAnchors = Array.from(
      root.querySelectorAll<HTMLElement>("[data-wiki-outline-anchor]"),
    );
    const routeHash = window.location.hash.slice(1);

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      revealElements.forEach((element) => element.classList.add("is-visible"));
    }

    const revealObserver = reducedMotion.matches
      ? null
      : new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return;
              entry.target.classList.add("is-visible");
              revealObserver?.unobserve(entry.target);
            });
          },
          { rootMargin: "0px 0px -8%", threshold: 0.08 },
        );

    revealElements.forEach((element) => revealObserver?.observe(element));

    const sectionMotion = sections.map((section) => ({
      section,
      reveal: reducedMotion.matches ? 1 : 0,
      focus: reducedMotion.matches ? 1 : 0,
      drift: 0,
      targetReveal: reducedMotion.matches ? 1 : 0,
      targetFocus: reducedMotion.matches ? 1 : 0,
      targetDrift: 0,
    }));
    let frame = 0;
    let needsMeasure = true;
    let previousFrameTime = 0;
    let pageProgress = 0;
    let outlineProgress = 0;
    let targetPageProgress = 0;
    let targetOutlineProgress = 0;

    const measureProgress = () => {
      needsMeasure = false;
      const bounds = root.getBoundingClientRect();
      const pageScrollable = Math.max(
        1,
        root.offsetHeight - window.innerHeight,
      );
      targetPageProgress = clamp(-bounds.top / pageScrollable);

      if (record) {
        const recordBounds = record.getBoundingClientRect();
        const recordScrollable = Math.max(
          1,
          recordBounds.height - window.innerHeight + outlineOffset,
        );
        targetOutlineProgress = clamp(
          (outlineOffset - recordBounds.top) / recordScrollable,
        );
      }

      let currentSection = sections[0]?.id ?? "";
      const activationLine = outlineOffset + 76;
      const viewportHeight = window.innerHeight;
      sectionMotion.forEach((motion) => {
        const sectionBounds = motion.section.getBoundingClientRect();
        const revealStart = viewportHeight * 0.9;
        const revealDistance = Math.max(280, viewportHeight * 0.58);
        const sectionTravel = Math.max(
          viewportHeight * 0.72,
          sectionBounds.height + viewportHeight * 0.4,
        );
        const sectionProgress = clamp(
          (viewportHeight * 0.84 - sectionBounds.top) / sectionTravel,
        );

        motion.targetReveal = reducedMotion.matches
          ? 1
          : clamp((revealStart - sectionBounds.top) / revealDistance);
        motion.targetFocus = reducedMotion.matches
          ? 1
          : clamp(
              Math.min(
                (viewportHeight - sectionBounds.top) /
                  Math.max(1, viewportHeight * 0.48),
                (sectionBounds.bottom - outlineOffset) /
                  Math.max(1, viewportHeight * 0.52),
              ),
            );
        motion.targetDrift = reducedMotion.matches
          ? 0
          : 12 - sectionProgress * 24;

        if (sectionBounds.top <= activationLine) {
          currentSection = motion.section.id;
        }
      });

      if (currentSection) {
        setActiveSection(currentSection);
        sections.forEach((section) => {
          section.toggleAttribute(
            "data-wiki-active",
            section.id === currentSection,
          );
        });

        const currentAnchors = outlineAnchors.filter(
          (anchor) =>
            anchor.dataset.wikiOutlineParent === currentSection,
        );
        let currentSubsection = "";
        currentAnchors.forEach((anchor) => {
          if (anchor.getBoundingClientRect().top <= activationLine + 18) {
            currentSubsection = anchor.id;
          }
        });
        const pageBottomReached =
          window.scrollY + viewportHeight >=
          document.documentElement.scrollHeight - 4;
        if (pageBottomReached && currentAnchors.length) {
          currentSubsection =
            currentAnchors[currentAnchors.length - 1]?.id ?? currentSubsection;
        }
        setActiveSubsection(currentSubsection);
        outlineAnchors.forEach((anchor) => {
          anchor.toggleAttribute(
            "data-wiki-outline-active",
            anchor.id === currentSubsection,
          );
        });
      }
    };

    const paintProgress = (time: number) => {
      frame = 0;
      if (needsMeasure) measureProgress();

      const elapsed = previousFrameTime
        ? Math.min(64, Math.max(1, time - previousFrameTime))
        : 16;
      previousFrameTime = time;
      const easing = reducedMotion.matches
        ? 1
        : 1 - Math.exp(-elapsed / 86);
      let unsettled = false;

      const easeValue = (current: number, target: number) => {
        if (Math.abs(target - current) < 0.0005) return target;
        unsettled = true;
        return current + (target - current) * easing;
      };

      pageProgress = easeValue(pageProgress, targetPageProgress);
      outlineProgress = easeValue(outlineProgress, targetOutlineProgress);
      root.style.setProperty("--wiki-page-progress", pageProgress.toFixed(4));
      root.style.setProperty(
        "--wiki-outline-progress",
        outlineProgress.toFixed(4),
      );

      sectionMotion.forEach((motion) => {
        motion.reveal = easeValue(motion.reveal, motion.targetReveal);
        motion.focus = easeValue(motion.focus, motion.targetFocus);
        motion.drift = easeValue(motion.drift, motion.targetDrift);
        motion.section.style.setProperty(
          "--wiki-section-reveal",
          motion.reveal.toFixed(4),
        );
        motion.section.style.setProperty(
          "--wiki-section-focus",
          motion.focus.toFixed(4),
        );
        motion.section.style.setProperty(
          "--wiki-section-shift",
          `${((1 - motion.reveal) * 36).toFixed(2)}px`,
        );
        motion.section.style.setProperty(
          "--wiki-section-drift",
          `${motion.drift.toFixed(2)}px`,
        );
      });

      if (needsMeasure || unsettled) {
        frame = requestAnimationFrame(paintProgress);
      } else {
        previousFrameTime = 0;
      }
    };

    const requestProgress = () => {
      needsMeasure = true;
      if (!frame) frame = requestAnimationFrame(paintProgress);
    };
    const recordResizeObserver =
      "ResizeObserver" in window
        ? new ResizeObserver(requestProgress)
        : null;

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress, { passive: true });
    if (record) recordResizeObserver?.observe(record);
    requestProgress();

    const hashFrame = requestAnimationFrame(() => {
      const routeTarget = routeHash
        ? document.getElementById(routeHash)
        : null;
      if (routeTarget && root.contains(routeTarget)) {
        routeTarget.scrollIntoView({ block: "start" });
        if (sectionIds.includes(routeHash)) {
          setActiveSection(routeHash);
        } else {
          setActiveSubsection(routeHash);
        }
        requestProgress();
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      cancelAnimationFrame(hashFrame);
      revealObserver?.disconnect();
      recordResizeObserver?.disconnect();
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
      sections.forEach((section) => {
        section.removeAttribute("data-wiki-active");
        section.style.removeProperty("--wiki-section-reveal");
        section.style.removeProperty("--wiki-section-focus");
        section.style.removeProperty("--wiki-section-shift");
        section.style.removeProperty("--wiki-section-drift");
      });
      outlineAnchors.forEach((anchor) => {
        anchor.removeAttribute("data-wiki-outline-active");
      });
    };
  }, [rootRef, route, sectionIds]);

  return { activeSection, activeSubsection };
}
