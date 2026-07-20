import { useLayoutEffect, useState, type RefObject } from "react";

function clamp(value: number, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

export function useWikiPageMotion(
  rootRef: RefObject<HTMLElement | null>,
  sectionIds: string[],
  route: string,
) {
  const [activeSection, setActiveSection] = useState(() => {
    const hash = window.location.hash.slice(1);
    return sectionIds.includes(hash) ? hash : (sectionIds[0] ?? "");
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

    let frame = 0;
    const updateProgress = () => {
      frame = 0;
      const bounds = root.getBoundingClientRect();
      const pageScrollable = Math.max(1, root.offsetHeight - window.innerHeight);
      root.style.setProperty(
        "--wiki-page-progress",
        clamp(-bounds.top / pageScrollable).toFixed(4),
      );

      if (record) {
        const recordBounds = record.getBoundingClientRect();
        const recordScrollable = Math.max(
          1,
          recordBounds.height - window.innerHeight + outlineOffset,
        );
        root.style.setProperty(
          "--wiki-outline-progress",
          clamp(
            (outlineOffset - recordBounds.top) / recordScrollable,
          ).toFixed(4),
        );
      }

      let currentSection = sections[0]?.id ?? "";
      const activationLine = outlineOffset + 76;
      sections.forEach((section) => {
        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = section.id;
        }
      });
      if (currentSection) setActiveSection(currentSection);
    };
    const requestProgress = () => {
      if (!frame) frame = requestAnimationFrame(updateProgress);
    };

    window.addEventListener("scroll", requestProgress, { passive: true });
    window.addEventListener("resize", requestProgress, { passive: true });
    updateProgress();

    requestAnimationFrame(() => {
      if (routeHash && sectionIds.includes(routeHash)) {
        document.getElementById(routeHash)?.scrollIntoView({ block: "start" });
        setActiveSection(routeHash);
        requestProgress();
      } else {
        window.scrollTo({ top: 0, behavior: "auto" });
      }
    });

    return () => {
      if (frame) cancelAnimationFrame(frame);
      revealObserver?.disconnect();
      window.removeEventListener("scroll", requestProgress);
      window.removeEventListener("resize", requestProgress);
    };
  }, [rootRef, route, sectionIds]);

  return activeSection;
}
