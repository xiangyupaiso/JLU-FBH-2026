/* useStoryNavAnimation — React port of circure-story-nav-local/script.js.
 *
 * Zero React state per animation frame: all mutable state lives in local
 * variables inside the layout effect; CSS variables are written directly
 * to DOM nodes via refs. The rAF main loop, critically damped spring
 * (response 108/110/122/128/100/120/108/110/124), independent page-progress
 * spring (stiffness 17), thresholds (0.0025 / 0.0005), thread-guide pointer
 * drag + keyboard, header data-tone switching, and prefers-reduced-motion
 * fallback are all preserved verbatim from the prototype to keep motion
 * fidelity at parity or above.
 *
 * Nav menu open/close is intentionally NOT handled here — the Navbar
 * component owns that state. This hook only touches scroll-driven motion,
 * thread-guide, and the global header's `data-tone`.
 */
 
import { useLayoutEffect, type RefObject } from "react";
 
interface StoryNavSectionRefs {
  opening: RefObject<HTMLElement | null>;
  history: RefObject<HTMLElement | null>;
  humanChapter: RefObject<HTMLElement | null>;
  expansion: RefObject<HTMLElement | null>;
  coverage: RefObject<HTMLElement | null>;
  evidence: RefObject<HTMLElement | null>;
  engineering: RefObject<HTMLElement | null>;
  listening: RefObject<HTMLElement | null>;
  translation: RefObject<HTMLElement | null>;
}
 
export interface StoryNavAnimationRefs {
  root: RefObject<HTMLDivElement | null>;
  sections: StoryNavSectionRefs;
  threadGuide: RefObject<HTMLElement | null>;
}
 
const LANDMARK_NAMES = [
  "Recognition",
  "History",
  "Person",
  "Design",
  "Heterogeneity",
  "Evidence",
  "Iteration",
  "Listening",
  "Responsibility",
] as const;
 
type HeaderTone = "bright" | "paper" | "blush" | "ink" | "navy";
 
interface HeaderThemeConfig {
  key: string;
  tone: HeaderTone;
  sectionKey: keyof StoryNavSectionRefs | "closing";
}
 
const HEADER_THEME_CONFIG: HeaderThemeConfig[] = [
  { key: "opening", tone: "bright", sectionKey: "opening" },
  { key: "history", tone: "bright", sectionKey: "history" },
  { key: "human", tone: "ink", sectionKey: "humanChapter" },
  { key: "expansion", tone: "navy", sectionKey: "expansion" },
  { key: "coverage", tone: "bright", sectionKey: "coverage" },
  { key: "evidence", tone: "paper", sectionKey: "evidence" },
  { key: "engineering", tone: "blush", sectionKey: "engineering" },
  { key: "listening", tone: "navy", sectionKey: "listening" },
  { key: "translation", tone: "bright", sectionKey: "translation" },
  { key: "closing", tone: "navy", sectionKey: "closing" },
];
 
const DARK_SURFACE_KEYS: Array<keyof StoryNavSectionRefs | "closing"> = [
  "humanChapter",
  "expansion",
  "listening",
  "closing",
];
 
const PAGE_SPRING_STIFFNESS = 17;
const SETTLE_THRESHOLD = 0.0025;
const PAGE_SETTLE_THRESHOLD = 0.0005;
 
function clamp(value: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, value));
}
 
function smoothstep(value: number): number {
  return value * value * (3 - 2 * value);
}
 
function followProgress(
  current: number,
  target: number,
  elapsed: number,
  response: number,
  maxStep: number,
): number {
  const delta = target - current;
  const easedStep = delta * (1 - Math.exp(-elapsed / response));
  const frameLimit = maxStep * (elapsed / 16.67);
  return current + clamp(easedStep, -frameLimit, frameLimit);
}
 
interface LayoutMetric {
  top: number;
  height: number;
}
 
interface SurfaceRange {
  start: number;
  end: number;
}
 
interface HeaderThemeRange {
  key: string;
  tone: HeaderTone;
  start: number;
  end: number;
}
 
export function useStoryNavAnimation(refs: StoryNavAnimationRefs): void {
  const { root, sections, threadGuide } = refs;
 
  useLayoutEffect(() => {
    const rootEl = root.current!;
    const openingEl = sections.opening.current!;
    const historyEl = sections.history.current!;
    const humanChapterEl = sections.humanChapter.current!;
    const expansionEl = sections.expansion.current!;
    const coverageEl = sections.coverage.current!;
    const evidenceEl = sections.evidence.current!;
    const engineeringEl = sections.engineering.current!;
    const listeningEl = sections.listening.current!;
    const translationEl = sections.translation.current!;
    const threadGuideEl = threadGuide.current!;
 
    if (
      !rootEl ||
      !openingEl ||
      !historyEl ||
      !humanChapterEl ||
      !expansionEl ||
      !coverageEl ||
      !evidenceEl ||
      !engineeringEl ||
      !listeningEl ||
      !translationEl ||
      !threadGuideEl
    ) {
      return;
    }
 
    const listeningRoomEl = listeningEl.querySelector<HTMLElement>(".listening-room")!;
    const closingEl = rootEl.querySelector<HTMLElement>(".closing")!;
    const threadGuideTrackEl =
      threadGuideEl.querySelector<HTMLElement>(".thread-guide-track")!;
    const threadGuideIndexEl =
      threadGuideEl.querySelector<HTMLElement>(".thread-guide-index")!;
    const threadGuideNameEl =
      threadGuideEl.querySelector<HTMLElement>(".thread-guide-name")!;
    const headerEl = document.querySelector<HTMLElement>("[data-header]");
 
    if (
      !listeningRoomEl ||
      !closingEl ||
      !threadGuideTrackEl ||
      !threadGuideIndexEl ||
      !threadGuideNameEl
    ) {
      return;
    }
 
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const compactThreadGuide = window.matchMedia("(max-width: 620px)");
 
    let targetProgress = 0;
    let renderedProgress = 0;
    let targetOpeningProgress = 0;
    let renderedOpeningProgress = 0;
    let targetHistoryProgress = 0;
    let renderedHistoryProgress = 0;
    let targetHumanProgress = 0;
    let renderedHumanProgress = 0;
    let targetCoverageProgress = 0;
    let renderedCoverageProgress = 0;
    let targetEvidenceProgress = 0;
    let renderedEvidenceProgress = 0;
    let targetCycleProgress = 0;
    let renderedCycleProgress = 0;
    let targetListeningProgress = 0;
    let renderedListeningProgress = 0;
    let targetTranslationProgress = 0;
    let renderedTranslationProgress = 0;
    let targetPageProgress = 0;
    let renderedPageProgress = 0;
    let pageProgressVelocity = 0;
    let activeLandmarkIndex = -1;
    let activeHeaderTone = "";
    let ariaPageProgress = -1;
    let rafFrame = 0;
    let previousFrameTime = 0;
    let needsMeasure = true;
    let landmarkOffsets: number[] = [];
    let darkSurfaceRanges: SurfaceRange[] = [];
    let headerThemeRanges: HeaderThemeRange[] = [];
    let layoutMetrics: Record<string, LayoutMetric> = {};
    let cachedHeaderHeight = headerEl?.offsetHeight ?? 68;
    let paintedOpening = false;
    let paintedHistory = false;
    let paintedHuman = false;
    let paintedExpansion = false;
    let paintedCoverage = false;
    let paintedEvidence = false;
    let paintedCycle = false;
    let paintedListening = false;
    let paintedTranslation = false;
    let threadPointerId: number | null = null;
    let fontsReadyCancelled = false;
 
    const landmarkRefs: Array<RefObject<HTMLElement | null>> = [
      sections.opening,
      sections.history,
      sections.humanChapter,
      sections.expansion,
      sections.coverage,
      sections.evidence,
      sections.engineering,
      sections.listening,
      sections.translation,
    ];
 
    function cacheLayout(): void {
      if (headerEl) {
        cachedHeaderHeight = headerEl.offsetHeight;
      }
      const trackedElements: Record<string, HTMLElement | null> = {
        opening: openingEl,
        history: historyEl,
        humanChapter: humanChapterEl,
        expansion: expansionEl,
        coverage: coverageEl,
        evidence: evidenceEl,
        engineering: engineeringEl,
        listeningRoom: listeningRoomEl,
        translation: translationEl,
        listening: listeningEl,
        closing: closingEl,
      };
      layoutMetrics = {};
      for (const [key, element] of Object.entries(trackedElements)) {
        if (!element) continue;
        const bounds = element.getBoundingClientRect();
        layoutMetrics[key] = {
          top: bounds.top + window.scrollY,
          height: bounds.height,
        };
      }
      landmarkOffsets = landmarkRefs.map((ref) => {
        const el = ref.current;
        return el ? el.getBoundingClientRect().top + window.scrollY : Infinity;
      });
      darkSurfaceRanges = DARK_SURFACE_KEYS.map((key) => {
        const metric = layoutMetrics[key];
        if (!metric) return { start: Infinity, end: Infinity };
        return { start: metric.top, end: metric.top + metric.height };
      });
      headerThemeRanges = HEADER_THEME_CONFIG.map(({ key, tone, sectionKey }) => {
        const element =
          sectionKey === "closing"
            ? closingEl
            : sections[sectionKey as keyof StoryNavSectionRefs].current ?? null;
        if (!element) {
          return { key, tone, start: Infinity, end: Infinity };
        }
        const bounds = element.getBoundingClientRect();
        return {
          key,
          tone,
          start: bounds.top + window.scrollY,
          end: bounds.bottom + window.scrollY,
        };
      });
    }
 
    function updateHeaderTheme(): void {
      if (!headerEl) return;
      const probe = window.scrollY + cachedHeaderHeight + 1;
      let activeTheme: HeaderThemeRange | undefined = headerThemeRanges[0];
      for (const theme of headerThemeRanges) {
        if (theme.start <= probe) {
          activeTheme = theme;
        }
      }
      let nextTone: HeaderTone = activeTheme?.tone ?? "bright";
      if (activeTheme?.key === "coverage" && targetCoverageProgress < 0.24) {
        nextTone = "navy";
      }
      if (nextTone !== activeHeaderTone) {
        activeHeaderTone = nextTone;
        headerEl.dataset.tone = nextTone;
      }
    }
 
    function updateThreadGuide(): void {
      const probe = window.scrollY + window.innerHeight * 0.46;
      let nextLandmarkIndex = 0;
      landmarkOffsets.forEach((offset, index) => {
        if (offset <= probe) {
          nextLandmarkIndex = index;
        }
      });
      if (nextLandmarkIndex !== activeLandmarkIndex) {
        activeLandmarkIndex = nextLandmarkIndex;
        threadGuideIndexEl.textContent = `${String(nextLandmarkIndex + 1).padStart(2, "0")} / ${String(LANDMARK_NAMES.length).padStart(2, "0")}`;
        threadGuideNameEl.textContent = LANDMARK_NAMES[nextLandmarkIndex];
        threadGuideEl.setAttribute(
          "aria-valuetext",
          `${LANDMARK_NAMES[nextLandmarkIndex]}, section ${nextLandmarkIndex + 1} of ${LANDMARK_NAMES.length}`,
        );
      }
      const isOverDarkSurface = darkSurfaceRanges.some(
        ({ start, end }) => start <= probe && end >= probe,
      );
      threadGuideEl.classList.toggle("on-dark", isOverDarkSurface);
    }
 
    function updateThreadGuideOrientation(): void {
      threadGuideEl.setAttribute(
        "aria-orientation",
        compactThreadGuide.matches ? "horizontal" : "vertical",
      );
    }
 
    function getSectionProgress(
      metric: LayoutMetric | undefined,
      startRatio = 0.82,
      endRatio = 0.16,
    ): number {
      if (!metric) return 0;
      const start = window.innerHeight * startRatio;
      const end = window.innerHeight * endRatio;
      const viewportTop = metric.top - window.scrollY;
      return clamp((start - viewportTop) / Math.max(1, start - end));
    }
 
    function getStickyProgress(metric: LayoutMetric | undefined): number {
      if (!metric) return 0;
      const distance = Math.max(1, metric.height - window.innerHeight);
      return clamp((window.scrollY - metric.top + cachedHeaderHeight) / distance);
    }
 
    function measureProgress(): void {
      const openingMetric = layoutMetrics.opening;
      const expansionMetric = layoutMetrics.expansion;
      if (!openingMetric || !expansionMetric) return;
      const openingDistance = Math.max(1, openingMetric.height - window.innerHeight);
      const openingTop = openingMetric.top - window.scrollY;
      const expansionTop = expansionMetric.top - window.scrollY;
      const start = window.innerHeight * 0.62;
      const end = window.innerHeight * -0.11;
      const distance = Math.max(1, start - end);
 
      targetOpeningProgress = clamp(-openingTop / openingDistance);
      targetHistoryProgress = getStickyProgress(layoutMetrics.history);
      targetHumanProgress = getStickyProgress(layoutMetrics.humanChapter);
      targetProgress = clamp((start - expansionTop) / distance);
      targetCoverageProgress = getStickyProgress(layoutMetrics.coverage);
      targetEvidenceProgress = getStickyProgress(layoutMetrics.evidence);
      targetCycleProgress = getSectionProgress(layoutMetrics.engineering, 0.88, 0.2);
      targetListeningProgress = getSectionProgress(layoutMetrics.listeningRoom, 0.9, 0.18);
      targetTranslationProgress = getStickyProgress(layoutMetrics.translation);
      targetPageProgress = clamp(
        window.scrollY /
          Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
      );
      updateHeaderTheme();
      updateThreadGuide();
    }
 
    function setPageProgressFromGuide(progress: number): void {
      const nextProgress = clamp(progress);
      const maxScroll = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      targetPageProgress = nextProgress;
      renderedPageProgress = nextProgress;
      pageProgressVelocity = 0;
      threadGuideEl.style.setProperty("--page-progress", nextProgress.toFixed(4));
      threadGuideEl.setAttribute(
        "aria-valuenow",
        String(Math.round(nextProgress * 100)),
      );
      document.documentElement.classList.add("is-thread-directing");
      window.scrollTo(0, maxScroll * nextProgress);
 
      if (threadPointerId === null) {
        requestAnimationFrame(() => {
          document.documentElement.classList.remove("is-thread-directing");
        });
      }
      requestPaint();   
    }
 
    function getPointerGuideProgress(event: PointerEvent): number {
      const bounds = threadGuideTrackEl.getBoundingClientRect();
      if (compactThreadGuide.matches) {
        return (event.clientX - bounds.left) / Math.max(1, bounds.width);
      }
      return (event.clientY - bounds.top) / Math.max(1, bounds.height);
    }
 
    function beginThreadDrag(event: PointerEvent): void {
      if (event.pointerType === "mouse" && event.button !== 0) {
        return;
      }
      event.preventDefault();
      threadPointerId = event.pointerId;
      threadGuideTrackEl.setPointerCapture(event.pointerId);
      threadGuideEl.classList.add("is-dragging");
      document.body.classList.add("is-thread-dragging");
      threadGuideEl.focus({ preventScroll: true });
      setPageProgressFromGuide(getPointerGuideProgress(event));
    }
 
    function moveThreadDrag(event: PointerEvent): void {
      if (event.pointerId !== threadPointerId) {
        return;
      }
      event.preventDefault();
      setPageProgressFromGuide(getPointerGuideProgress(event));
    }
 
    function endThreadDrag(event: PointerEvent): void {
      if (event.pointerId !== threadPointerId) {
        return;
      }
      if (threadGuideTrackEl.hasPointerCapture(event.pointerId)) {
        threadGuideTrackEl.releasePointerCapture(event.pointerId);
      }
      threadPointerId = null;
      threadGuideEl.classList.remove("is-dragging");
      document.body.classList.remove("is-thread-dragging");
      document.documentElement.classList.remove("is-thread-directing");
      requestPaint();
    }
 
    function handleThreadGuideKeydown(event: KeyboardEvent): void {
      let nextProgress = renderedPageProgress;
      const step = event.shiftKey ? 0.1 : 0.025;
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        nextProgress += step;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        nextProgress -= step;
      } else if (event.key === "PageDown") {
        nextProgress += 0.12;
      } else if (event.key === "PageUp") {
        nextProgress -= 0.12;
      } else if (event.key === "Home") {
        nextProgress = 0;
      } else if (event.key === "End") {
        nextProgress = 1;
      } else {
        return;
      }
      event.preventDefault();
      setPageProgressFromGuide(nextProgress);
    }
 
    function paint(time: number): void {
      rafFrame = 0;
      if (needsMeasure) {
        measureProgress();
        needsMeasure = false;
      }
 
      if (reducedMotion.matches) {
        openingEl.style.setProperty("--opening-progress", "1");
        openingEl.style.setProperty("--er-progress", "1");
        openingEl.style.setProperty("--pr-progress", "1");
        openingEl.style.setProperty("--her2-progress", "1");
        openingEl.style.setProperty("--report-fold", "1");
        openingEl.style.setProperty("--life-progress", "1");
        openingEl.style.setProperty("--thread-progress", "1");
        historyEl.style.setProperty("--history-progress", "1");
        humanChapterEl.style.setProperty("--human-progress", "1");
        expansionEl.style.setProperty("--frame-progress", "1");
        expansionEl.style.setProperty("--radius-progress", "1");
        expansionEl.style.setProperty("--content-progress", "1");
        expansionEl.style.setProperty("--label-progress", "1");
        expansionEl.style.setProperty("--diagram-progress", "1");
        coverageEl.style.setProperty("--coverage-progress", "1");
        evidenceEl.style.setProperty("--evidence-progress", "1");
        engineeringEl.style.setProperty("--cycle-progress", "1");
        listeningEl.style.setProperty("--listening-progress", "1");
        translationEl.style.setProperty("--translation-progress", "1");
        threadGuideEl.style.setProperty("--final-progress", "1");
        threadGuideEl.style.setProperty(
          "--page-progress",
          targetPageProgress.toFixed(4),
        );
        if (headerEl) {
          headerEl.style.setProperty("--motion-progress", "1");
          headerEl.style.setProperty("--logo-fold-progress", "0");
          headerEl.style.setProperty("--logo-mark-progress", "0");
          headerEl.style.setProperty("--logo-ribbon-progress", "0");
        }
        threadGuideEl.setAttribute(
          "aria-valuenow",
          String(Math.round(targetPageProgress * 100)),
        );
        pageProgressVelocity = 0;
        paintedOpening = false;
        paintedHistory = false;
        paintedHuman = false;
        paintedExpansion = false;
        paintedCoverage = false;
        paintedEvidence = false;
        paintedCycle = false;
        paintedListening = false;
        paintedTranslation = false;
        return;
      }
 
      const elapsed = previousFrameTime
        ? Math.min(64, time - previousFrameTime)
        : 16.67;
      const delta = targetProgress - renderedProgress;
      const openingDelta = targetOpeningProgress - renderedOpeningProgress;
      const historyDelta = targetHistoryProgress - renderedHistoryProgress;
      const humanDelta = targetHumanProgress - renderedHumanProgress;
      const coverageDelta = targetCoverageProgress - renderedCoverageProgress;
      const evidenceDelta = targetEvidenceProgress - renderedEvidenceProgress;
      const cycleDelta = targetCycleProgress - renderedCycleProgress;
      const listeningDelta = targetListeningProgress - renderedListeningProgress;
      const translationDelta =
        targetTranslationProgress - renderedTranslationProgress;
      const shouldPaintOpening = openingDelta !== 0 || !paintedOpening;
      const shouldPaintHistory = historyDelta !== 0 || !paintedHistory;
      const shouldPaintHuman = humanDelta !== 0 || !paintedHuman;
      const shouldPaintExpansion = delta !== 0 || !paintedExpansion;
      const shouldPaintCoverage = coverageDelta !== 0 || !paintedCoverage;
      const shouldPaintEvidence = evidenceDelta !== 0 || !paintedEvidence;
      const shouldPaintCycle = cycleDelta !== 0 || !paintedCycle;
      const shouldPaintListening = listeningDelta !== 0 || !paintedListening;
      const shouldPaintTranslation = translationDelta !== 0 || !paintedTranslation;
      previousFrameTime = time;
 
      renderedProgress = followProgress(
        renderedProgress,
        targetProgress,
        elapsed,
        108,
        0.014,
      );
      renderedOpeningProgress = followProgress(
        renderedOpeningProgress,
        targetOpeningProgress,
        elapsed,
        110,
        0.016,
      );
      renderedHistoryProgress = followProgress(
        renderedHistoryProgress,
        targetHistoryProgress,
        elapsed,
        122,
        0.012,
      );
      renderedHumanProgress = followProgress(
        renderedHumanProgress,
        targetHumanProgress,
        elapsed,
        128,
        0.011,
      );
      renderedCoverageProgress = followProgress(
        renderedCoverageProgress,
        targetCoverageProgress,
        elapsed,
        100,
        0.024,
      );
      renderedEvidenceProgress = followProgress(
        renderedEvidenceProgress,
        targetEvidenceProgress,
        elapsed,
        120,
        0.013,
      );
      renderedCycleProgress = followProgress(
        renderedCycleProgress,
        targetCycleProgress,
        elapsed,
        108,
        0.022,
      );
      renderedListeningProgress = followProgress(
        renderedListeningProgress,
        targetListeningProgress,
        elapsed,
        110,
        0.021,
      );
      renderedTranslationProgress = followProgress(
        renderedTranslationProgress,
        targetTranslationProgress,
        elapsed,
        124,
        0.012,
      );
 
      const pageDeltaTime = elapsed / 1000;
      const pageSpring = PAGE_SPRING_STIFFNESS;
      const pageDisplacement = renderedPageProgress - targetPageProgress;
      const pageDecay = Math.exp(-pageSpring * pageDeltaTime);
      const pageSpringStep =
        (pageProgressVelocity + pageSpring * pageDisplacement) * pageDeltaTime;
      renderedPageProgress = clamp(
        targetPageProgress + (pageDisplacement + pageSpringStep) * pageDecay,
      );
      pageProgressVelocity =
        (pageProgressVelocity - pageSpring * pageSpringStep) * pageDecay;
 
      if (Math.abs(delta) < SETTLE_THRESHOLD) {
        renderedProgress = targetProgress;
      }
      if (Math.abs(openingDelta) < SETTLE_THRESHOLD) {
        renderedOpeningProgress = targetOpeningProgress;
      }
      if (Math.abs(historyDelta) < SETTLE_THRESHOLD) {
        renderedHistoryProgress = targetHistoryProgress;
      }
      if (Math.abs(humanDelta) < SETTLE_THRESHOLD) {
        renderedHumanProgress = targetHumanProgress;
      }
      if (Math.abs(coverageDelta) < SETTLE_THRESHOLD) {
        renderedCoverageProgress = targetCoverageProgress;
      }
      if (Math.abs(evidenceDelta) < SETTLE_THRESHOLD) {
        renderedEvidenceProgress = targetEvidenceProgress;
      }
      if (Math.abs(cycleDelta) < SETTLE_THRESHOLD) {
        renderedCycleProgress = targetCycleProgress;
      }
      if (Math.abs(listeningDelta) < SETTLE_THRESHOLD) {
        renderedListeningProgress = targetListeningProgress;
      }
      if (Math.abs(translationDelta) < SETTLE_THRESHOLD) {
        renderedTranslationProgress = targetTranslationProgress;
      }
      if (
        Math.abs(targetPageProgress - renderedPageProgress) < PAGE_SETTLE_THRESHOLD &&
        Math.abs(pageProgressVelocity) < PAGE_SETTLE_THRESHOLD
      ) {
        renderedPageProgress = targetPageProgress;
        pageProgressVelocity = 0;
      }
 
      const frameProgress = smoothstep(renderedProgress);
      const erProgress = smoothstep(clamp((renderedOpeningProgress - 0.07) / 0.15));
      const prProgress = smoothstep(clamp((renderedOpeningProgress - 0.18) / 0.15));
      const her2Progress = smoothstep(
        clamp((renderedOpeningProgress - 0.29) / 0.15),
      );
      const reportFold = smoothstep(
        clamp((renderedOpeningProgress - 0.38) / 0.42),
      );
      const lifeProgress = smoothstep(
        clamp((renderedOpeningProgress - 0.52) / 0.34),
      );
      const threadProgress = smoothstep(
        clamp((renderedOpeningProgress - 0.28) / 0.56),
      );
      const radiusProgress = smoothstep(clamp((renderedProgress - 0.54) / 0.46));
      const contentProgress = smoothstep(clamp((renderedProgress - 0.06) / 0.58));
      const labelProgress = smoothstep(clamp((renderedProgress - 0.28) / 0.72));
      const diagramProgress = smoothstep(clamp((renderedProgress - 0.04) / 0.86));
 
      if (shouldPaintOpening) {
        openingEl.style.setProperty(
          "--opening-progress",
          renderedOpeningProgress.toFixed(4),
        );
        openingEl.style.setProperty("--er-progress", erProgress.toFixed(4));
        openingEl.style.setProperty("--pr-progress", prProgress.toFixed(4));
        openingEl.style.setProperty("--her2-progress", her2Progress.toFixed(4));
        openingEl.style.setProperty("--report-fold", reportFold.toFixed(4));
        openingEl.style.setProperty("--life-progress", lifeProgress.toFixed(4));
        openingEl.style.setProperty("--thread-progress", threadProgress.toFixed(4));
        paintedOpening = true;
      }
      if (shouldPaintHistory) {
        historyEl.style.setProperty(
          "--history-progress",
          renderedHistoryProgress.toFixed(4),
        );
        paintedHistory = true;
      }
      if (shouldPaintHuman) {
        humanChapterEl.style.setProperty(
          "--human-progress",
          renderedHumanProgress.toFixed(4),
        );
        paintedHuman = true;
      }
      if (shouldPaintExpansion) {
        expansionEl.style.setProperty("--frame-progress", frameProgress.toFixed(4));
        expansionEl.style.setProperty("--radius-progress", radiusProgress.toFixed(4));
        expansionEl.style.setProperty(
          "--content-progress",
          contentProgress.toFixed(4),
        );
        expansionEl.style.setProperty("--label-progress", labelProgress.toFixed(4));
        expansionEl.style.setProperty(
          "--diagram-progress",
          diagramProgress.toFixed(4),
        );
        paintedExpansion = true;
      }
      if (shouldPaintCoverage) {
        coverageEl.style.setProperty(
          "--coverage-progress",
          renderedCoverageProgress.toFixed(4),
        );
        paintedCoverage = true;
      }
      if (shouldPaintEvidence) {
        evidenceEl.style.setProperty(
          "--evidence-progress",
          renderedEvidenceProgress.toFixed(4),
        );
        paintedEvidence = true;
      }
      if (shouldPaintCycle) {
        engineeringEl.style.setProperty(
          "--cycle-progress",
          renderedCycleProgress.toFixed(4),
        );
        paintedCycle = true;
      }
      if (shouldPaintListening) {
        listeningEl.style.setProperty(
          "--listening-progress",
          renderedListeningProgress.toFixed(4),
        );
        paintedListening = true;
      }
      if (shouldPaintTranslation) {
        translationEl.style.setProperty(
          "--translation-progress",
          renderedTranslationProgress.toFixed(4),
        );
        threadGuideEl.style.setProperty(
          "--final-progress",
          renderedTranslationProgress.toFixed(4),
        );
        paintedTranslation = true;
      }
      threadGuideEl.style.setProperty(
        "--page-progress",
        renderedPageProgress.toFixed(4),
      );
 
      const nextAriaPageProgress = Math.round(renderedPageProgress * 100);
      if (nextAriaPageProgress !== ariaPageProgress) {
        ariaPageProgress = nextAriaPageProgress;
        threadGuideEl.setAttribute("aria-valuenow", String(nextAriaPageProgress));
      }
 
      const sectionsAreMoving =
        renderedOpeningProgress !== targetOpeningProgress ||
        renderedHistoryProgress !== targetHistoryProgress ||
        renderedHumanProgress !== targetHumanProgress ||
        renderedCoverageProgress !== targetCoverageProgress ||
        renderedEvidenceProgress !== targetEvidenceProgress ||
        renderedCycleProgress !== targetCycleProgress ||
        renderedListeningProgress !== targetListeningProgress ||
        renderedTranslationProgress !== targetTranslationProgress ||
        renderedPageProgress !== targetPageProgress;
      if (renderedProgress !== targetProgress || sectionsAreMoving) {
        rafFrame = requestAnimationFrame(paint);
      } else {
        previousFrameTime = 0;
      }
    }
 
    function requestPaint(): void {
      needsMeasure = true;
      if (!rafFrame) {
        rafFrame = requestAnimationFrame(paint);
      }
    }
 
    function handleResize(): void {
      cacheLayout();
      updateThreadGuideOrientation();
      requestPaint();
    }
 
    // --- Event listeners ---
    const onScroll = () => requestPaint();
    const onResize = () => handleResize();
    const onLoad = () => handleResize();
    const onReducedMotionChange = () => requestPaint();
    const onCompactThreadGuideChange = () => updateThreadGuideOrientation();
 
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("load", onLoad, { once: true });
    reducedMotion.addEventListener("change", onReducedMotionChange);
    compactThreadGuide.addEventListener("change", onCompactThreadGuideChange);
 
    threadGuideTrackEl.addEventListener("pointerdown", beginThreadDrag);
    threadGuideTrackEl.addEventListener("pointermove", moveThreadDrag);
    threadGuideTrackEl.addEventListener("pointerup", endThreadDrag);
    threadGuideTrackEl.addEventListener("pointercancel", endThreadDrag);
    threadGuideEl.addEventListener("keydown", handleThreadGuideKeydown);
 
    const detailsEls = rootEl.querySelectorAll("details");
    const onDetailsToggle = () => handleResize();
    detailsEls.forEach((details) => {
      details.addEventListener("toggle", onDetailsToggle);
    });
 
    if (document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!fontsReadyCancelled) handleResize();
      });
    }
 
    // --- Initial setup ---
    cacheLayout();
    updateThreadGuideOrientation();
    updateHeaderTheme();
    requestPaint();
 
    // --- Cleanup ---
    return () => {
      fontsReadyCancelled = true;
      if (rafFrame) {
        cancelAnimationFrame(rafFrame);
        rafFrame = 0;
      }
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("load", onLoad);
      reducedMotion.removeEventListener("change", onReducedMotionChange);
      compactThreadGuide.removeEventListener("change", onCompactThreadGuideChange);
      threadGuideTrackEl.removeEventListener("pointerdown", beginThreadDrag);
      threadGuideTrackEl.removeEventListener("pointermove", moveThreadDrag);
      threadGuideTrackEl.removeEventListener("pointerup", endThreadDrag);
      threadGuideTrackEl.removeEventListener("pointercancel", endThreadDrag);
      threadGuideEl.removeEventListener("keydown", handleThreadGuideKeydown);
      detailsEls.forEach((details) => {
        details.removeEventListener("toggle", onDetailsToggle);
      });
      // Reset header to the inner-page default tone so leaving Home doesn't
      // strand the global header in a dark/translucent tone.
      if (headerEl) {
        headerEl.dataset.tone = "bright";
      }
      document.body.classList.remove("is-thread-dragging");
      document.documentElement.classList.remove("is-thread-directing");
    };
    // Refs are stable across renders; this effect should run once on mount.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}