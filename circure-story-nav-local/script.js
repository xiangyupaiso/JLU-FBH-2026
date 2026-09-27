const opening = document.querySelector(".prologue");
if (!opening) throw new Error("Missing .prologue"); // null-guard
const history = document.querySelector(".history");
if (!history) throw new Error("Missing .history"); // null-guard
const humanChapter = document.querySelector(".human-chapter");
if (!humanChapter) throw new Error("Missing .human-chapter"); // null-guard
const expansion = document.querySelector(".expansion");
if (!expansion) throw new Error("Missing .expansion"); // null-guard
const coverage = document.querySelector(".coverage");
if (!coverage) throw new Error("Missing .coverage"); // null-guard
const evidence = document.querySelector(".evidence");
if (!evidence) throw new Error("Missing .evidence"); // null-guard
const engineering = document.querySelector(".engineering");
if (!engineering) throw new Error("Missing .engineering"); // null-guard
const listening = document.querySelector(".listening");
if (!listening) throw new Error("Missing .listening"); // null-guard
const listeningRoom = document.querySelector(".listening-room");
if (!listeningRoom) throw new Error("Missing .listening-room"); // null-guard
const translation = document.querySelector(".translation");
if (!translation) throw new Error("Missing .translation"); // null-guard
const closing = document.querySelector(".closing");
if (!closing) throw new Error("Missing .closing"); // null-guard
const siteHeader = document.querySelector(".site-header");
if (!siteHeader) throw new Error("Missing .site-header"); // null-guard
const pageRoot = document.documentElement;
const navShell = document.querySelector("[data-nav-shell]");
if (!navShell) throw new Error("Missing [data-nav-shell]"); // null-guard
const navMenu = document.querySelector("[data-nav-menu]");
if (!navMenu) throw new Error("Missing [data-nav-menu]"); // null-guard
const navToggles = [...document.querySelectorAll("[data-nav-key]")];
const navPanels = [...document.querySelectorAll("[data-nav-panel]")];
const navHomeLinks = [...document.querySelectorAll("[data-nav-home]")];
const mobileMenuToggle = document.querySelector("[data-mobile-menu-toggle]");
if (!mobileMenuToggle) throw new Error("Missing [data-mobile-menu-toggle]"); // null-guard
const mobileMenu = document.querySelector("[data-mobile-menu]");
if (!mobileMenu) throw new Error("Missing [data-mobile-menu]"); // null-guard
const threadGuide = document.querySelector(".thread-guide");
if (!threadGuide) throw new Error("Missing .thread-guide"); // null-guard
const threadGuideTrack = document.querySelector(".thread-guide-track");
if (!threadGuideTrack) throw new Error("Missing .thread-guide-track"); // null-guard
const threadGuideIndex = document.querySelector(".thread-guide-index");
if (!threadGuideIndex) throw new Error("Missing .thread-guide-index"); // null-guard
const threadGuideName = document.querySelector(".thread-guide-name");
if (!threadGuideName) throw new Error("Missing .thread-guide-name"); // null-guard
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
const compactThreadGuide = window.matchMedia("(max-width: 620px)");
const landmarks = [
  { element: document.querySelector("#opening"), name: "Recognition" },
  { element: document.querySelector("#history"), name: "History" },
  { element: document.querySelector("#person"), name: "Person" },
  { element: document.querySelector("#approach"), name: "Design" },
  { element: document.querySelector("#coverage"), name: "Heterogeneity" },
  { element: document.querySelector("#evidence"), name: "Evidence" },
  { element: document.querySelector("#engineering"), name: "Iteration" },
  { element: document.querySelector("#listening"), name: "Listening" },
  { element: document.querySelector("#translation"), name: "Responsibility" },
];
const headerThemes = [
  { element: opening, key: "opening", tone: "bright" },
  { element: history, key: "history", tone: "bright" },
  { element: humanChapter, key: "human", tone: "ink" },
  { element: expansion, key: "expansion", tone: "navy" },
  { element: coverage, key: "coverage", tone: "bright" },
  { element: evidence, key: "evidence", tone: "paper" },
  { element: engineering, key: "engineering", tone: "blush" },
  { element: listening, key: "listening", tone: "navy" },
  { element: translation, key: "translation", tone: "bright" },
  { element: closing, key: "closing", tone: "navy" },
];

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
let frame = 0;
let previousFrameTime = 0;
let needsMeasure = true;
let landmarkOffsets = [];
let darkSurfaceRanges = [];
let headerThemeRanges = [];
let layoutMetrics = {};
let cachedHeaderHeight = siteHeader.offsetHeight;
let paintedOpening = false;
let paintedHistory = false;
let paintedHuman = false;
let paintedExpansion = false;
let paintedCoverage = false;
let paintedEvidence = false;
let paintedCycle = false;
let paintedListening = false;
let paintedTranslation = false;
let threadPointerId = null;
let activeNavKey = "project";
let navOpenTimer = 0;
let navCloseTimer = 0;

const clamp = (value, min = 0, max = 1) => Math.min(max, Math.max(min, value));
const smoothstep = (value) => value * value * (3 - 2 * value);

function setDesktopNav(key = activeNavKey, isOpen = true) {
  window.clearTimeout(navOpenTimer);
  window.clearTimeout(navCloseTimer);

  if (window.innerWidth <= 980) {
    isOpen = false;
  }

  const nextKey = key || activeNavKey;
  const wasOpen = pageRoot.classList.contains("nav-menu-open");

  if (isOpen === wasOpen && (!isOpen || nextKey === activeNavKey)) {
    return;
  }

  const applyState = () => {
    activeNavKey = nextKey;
    pageRoot.classList.toggle("nav-menu-open", isOpen);
    navMenu.classList.toggle("is-open", isOpen);
    navMenu.setAttribute("aria-hidden", String(!isOpen));
    navMenu.inert = !isOpen;

    navToggles.forEach((toggle) => {
      toggle.setAttribute(
        "aria-expanded",
        String(isOpen && toggle.dataset.navKey === activeNavKey),
      );
    });

    navPanels.forEach((panel) => {
      const isActive = panel.dataset.navPanel === activeNavKey;
      panel.classList.toggle("is-active", isActive);
      panel.setAttribute("aria-hidden", String(!isActive));
      panel.inert = !isActive;
    });
  };

  if (isOpen && wasOpen) {
    applyState();
    return;
  }

  applyState();
}

function queueDesktopNavOpen(key) {
  window.clearTimeout(navCloseTimer);
  window.clearTimeout(navOpenTimer);
  navOpenTimer = window.setTimeout(() => setDesktopNav(key, true), 70);
}

function queueDesktopNavClose() {
  window.clearTimeout(navOpenTimer);
  window.clearTimeout(navCloseTimer);
  navCloseTimer = window.setTimeout(() => setDesktopNav(activeNavKey, false), 170);
}

function setMobileMenu(isOpen) {
  pageRoot.classList.toggle("mobile-menu-open", isOpen);
  mobileMenuToggle.setAttribute("aria-expanded", String(isOpen));
  mobileMenu.classList.toggle("is-open", isOpen);
  mobileMenu.setAttribute("aria-hidden", String(!isOpen));
  mobileMenu.inert = !isOpen;

  if (isOpen) {
    setDesktopNav(activeNavKey, false);
  }
}

function followProgress(current, target, elapsed, response, maxStep) {
  const delta = target - current;
  const easedStep = delta * (1 - Math.exp(-elapsed / response));
  const frameLimit = maxStep * (elapsed / 16.67);
  return current + clamp(easedStep, -frameLimit, frameLimit);
}

function updateThreadGuideOrientation() {
  threadGuide.setAttribute(
    "aria-orientation",
    compactThreadGuide.matches ? "horizontal" : "vertical",
  );
}

function setPageProgressFromGuide(progress) {
  const nextProgress = clamp(progress);
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  );
  targetPageProgress = nextProgress;
  renderedPageProgress = nextProgress;
  pageProgressVelocity = 0;
  threadGuide.style.setProperty("--page-progress", nextProgress.toFixed(4));
  threadGuide.setAttribute("aria-valuenow", String(Math.round(nextProgress * 100)));
  document.documentElement.classList.add("is-thread-directing");
  window.scrollTo(0, maxScroll * nextProgress);

  if (threadPointerId === null) {
    requestAnimationFrame(() => {
      document.documentElement.classList.remove("is-thread-directing");
    });
  }

  requestPaint();
}

function getPointerGuideProgress(event) {
  const bounds = threadGuideTrack.getBoundingClientRect();
  if (compactThreadGuide.matches) {
    return (event.clientX - bounds.left) / Math.max(1, bounds.width);
  }
  return (event.clientY - bounds.top) / Math.max(1, bounds.height);
}

function beginThreadDrag(event) {
  if (event.pointerType === "mouse" && event.button !== 0) {
    return;
  }

  event.preventDefault();
  threadPointerId = event.pointerId;
  threadGuideTrack.setPointerCapture(event.pointerId);
  threadGuide.classList.add("is-dragging");
  document.body.classList.add("is-thread-dragging");
  threadGuide.focus({ preventScroll: true });
  setPageProgressFromGuide(getPointerGuideProgress(event));
}

function moveThreadDrag(event) {
  if (event.pointerId !== threadPointerId) {
    return;
  }

  event.preventDefault();
  setPageProgressFromGuide(getPointerGuideProgress(event));
}

function endThreadDrag(event) {
  if (event.pointerId !== threadPointerId) {
    return;
  }

  if (threadGuideTrack.hasPointerCapture(event.pointerId)) {
    threadGuideTrack.releasePointerCapture(event.pointerId);
  }
  threadPointerId = null;
  threadGuide.classList.remove("is-dragging");
  document.body.classList.remove("is-thread-dragging");
  document.documentElement.classList.remove("is-thread-directing");
  requestPaint();
}

function handleThreadGuideKeydown(event) {
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

function getSectionProgress(metric, startRatio = 0.82, endRatio = 0.16) {
  if (!metric) {
    return 0;
  }

  const start = window.innerHeight * startRatio;
  const end = window.innerHeight * endRatio;
  const viewportTop = metric.top - window.scrollY;
  return clamp((start - viewportTop) / Math.max(1, start - end));
}

function getStickyProgress(metric) {
  if (!metric) {
    return 0;
  }

  const distance = Math.max(1, metric.height - window.innerHeight);
  return clamp((window.scrollY - metric.top + cachedHeaderHeight) / distance);
}

function cacheLayout() {
  cachedHeaderHeight = siteHeader.offsetHeight;
  const trackedElements = {
    opening,
    history,
    humanChapter,
    expansion,
    coverage,
    evidence,
    engineering,
    listeningRoom,
    translation,
    listening,
    closing,
  };
  layoutMetrics = Object.fromEntries(
    Object.entries(trackedElements).map(([key, element]) => {
      const bounds = element.getBoundingClientRect();
      return [key, { top: bounds.top + window.scrollY, height: bounds.height }];
    }),
  );
  landmarkOffsets = landmarks.map(({ element }) =>
    element ? element.getBoundingClientRect().top + window.scrollY : Infinity,
  );
  darkSurfaceRanges = ["humanChapter", "expansion", "listening", "closing"].map(
    (key) => ({
      start: layoutMetrics[key].top,
      end: layoutMetrics[key].top + layoutMetrics[key].height,
    }),
  );
  headerThemeRanges = headerThemes.map(({ element, key, tone }) => {
    const bounds = element.getBoundingClientRect();
    return {
      key,
      tone,
      start: bounds.top + window.scrollY,
      end: bounds.bottom + window.scrollY,
    };
  });
}

function updateHeaderTheme() {
  const probe = window.scrollY + cachedHeaderHeight + 1;
  let activeTheme = headerThemeRanges[0];

  headerThemeRanges.forEach((theme) => {
    if (theme.start <= probe) {
      activeTheme = theme;
    }
  });

  let nextTone = activeTheme?.tone || "bright";
  if (activeTheme?.key === "coverage" && targetCoverageProgress < 0.24) {
    nextTone = "navy";
  }

  if (nextTone !== activeHeaderTone) {
    activeHeaderTone = nextTone;
    siteHeader.dataset.tone = nextTone;
  }
}

function updateThreadGuide() {
  const probe = window.scrollY + window.innerHeight * 0.46;
  let nextLandmarkIndex = 0;

  landmarkOffsets.forEach((offset, index) => {
    if (offset <= probe) {
      nextLandmarkIndex = index;
    }
  });

  if (nextLandmarkIndex !== activeLandmarkIndex) {
    activeLandmarkIndex = nextLandmarkIndex;
    threadGuideIndex.textContent = `${String(nextLandmarkIndex + 1).padStart(2, "0")} / ${String(landmarks.length).padStart(2, "0")}`;
    threadGuideName.textContent = landmarks[nextLandmarkIndex].name;
    threadGuide.setAttribute(
      "aria-valuetext",
      `${landmarks[nextLandmarkIndex].name}, section ${nextLandmarkIndex + 1} of ${landmarks.length}`,
    );
  }

  const isOverDarkSurface = darkSurfaceRanges.some(
    ({ start, end }) => start <= probe && end >= probe,
  );
  threadGuide.classList.toggle("on-dark", isOverDarkSurface);
}

function measureProgress() {
  const openingDistance = Math.max(1, layoutMetrics.opening.height - window.innerHeight);
  const openingTop = layoutMetrics.opening.top - window.scrollY;
  const expansionTop = layoutMetrics.expansion.top - window.scrollY;
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
    window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight),
  );
  updateHeaderTheme();
  updateThreadGuide();
}

function paint(time) {
  frame = 0;
  if (needsMeasure) {
    measureProgress();
    needsMeasure = false;
  }

  if (reducedMotion.matches) {
    opening.style.setProperty("--opening-progress", "1");
    opening.style.setProperty("--er-progress", "1");
    opening.style.setProperty("--pr-progress", "1");
    opening.style.setProperty("--her2-progress", "1");
    opening.style.setProperty("--report-fold", "1");
    opening.style.setProperty("--life-progress", "1");
    opening.style.setProperty("--thread-progress", "1");
    history.style.setProperty("--history-progress", "1");
    humanChapter.style.setProperty("--human-progress", "1");
    expansion.style.setProperty("--frame-progress", "1");
    expansion.style.setProperty("--radius-progress", "1");
    expansion.style.setProperty("--content-progress", "1");
    expansion.style.setProperty("--label-progress", "1");
    expansion.style.setProperty("--diagram-progress", "1");
    coverage.style.setProperty("--coverage-progress", "1");
    evidence.style.setProperty("--evidence-progress", "1");
    engineering.style.setProperty("--cycle-progress", "1");
    listening.style.setProperty("--listening-progress", "1");
    translation.style.setProperty("--translation-progress", "1");
    threadGuide.style.setProperty("--final-progress", "1");
    threadGuide.style.setProperty("--page-progress", targetPageProgress.toFixed(4));
    siteHeader.style.setProperty("--motion-progress", "1");
    siteHeader.style.setProperty("--logo-fold-progress", "0");
    siteHeader.style.setProperty("--logo-mark-progress", "0");
    siteHeader.style.setProperty("--logo-ribbon-progress", "0");
    threadGuide.setAttribute("aria-valuenow", String(Math.round(targetPageProgress * 100)));
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

  const elapsed = previousFrameTime ? Math.min(64, time - previousFrameTime) : 16.67;
  const delta = targetProgress - renderedProgress;
  const openingDelta = targetOpeningProgress - renderedOpeningProgress;
  const historyDelta = targetHistoryProgress - renderedHistoryProgress;
  const humanDelta = targetHumanProgress - renderedHumanProgress;
  const coverageDelta = targetCoverageProgress - renderedCoverageProgress;
  const evidenceDelta = targetEvidenceProgress - renderedEvidenceProgress;
  const cycleDelta = targetCycleProgress - renderedCycleProgress;
  const listeningDelta = targetListeningProgress - renderedListeningProgress;
  const translationDelta = targetTranslationProgress - renderedTranslationProgress;
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
  renderedProgress = followProgress(renderedProgress, targetProgress, elapsed, 108, 0.014);
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
  const pageSpring = 17;
  const pageDisplacement = renderedPageProgress - targetPageProgress;
  const pageDecay = Math.exp(-pageSpring * pageDeltaTime);
  const pageSpringStep =
    (pageProgressVelocity + pageSpring * pageDisplacement) * pageDeltaTime;
  renderedPageProgress = clamp(
    targetPageProgress + (pageDisplacement + pageSpringStep) * pageDecay,
  );
  pageProgressVelocity =
    (pageProgressVelocity - pageSpring * pageSpringStep) * pageDecay;

  if (Math.abs(delta) < 0.0025) {
    renderedProgress = targetProgress;
  }
  if (Math.abs(openingDelta) < 0.0025) {
    renderedOpeningProgress = targetOpeningProgress;
  }
  if (Math.abs(historyDelta) < 0.0025) {
    renderedHistoryProgress = targetHistoryProgress;
  }
  if (Math.abs(humanDelta) < 0.0025) {
    renderedHumanProgress = targetHumanProgress;
  }
  if (Math.abs(coverageDelta) < 0.0025) {
    renderedCoverageProgress = targetCoverageProgress;
  }
  if (Math.abs(evidenceDelta) < 0.0025) {
    renderedEvidenceProgress = targetEvidenceProgress;
  }
  if (Math.abs(cycleDelta) < 0.0025) {
    renderedCycleProgress = targetCycleProgress;
  }
  if (Math.abs(listeningDelta) < 0.0025) {
    renderedListeningProgress = targetListeningProgress;
  }
  if (Math.abs(translationDelta) < 0.0025) {
    renderedTranslationProgress = targetTranslationProgress;
  }
  if (
    Math.abs(targetPageProgress - renderedPageProgress) < 0.0005 &&
    Math.abs(pageProgressVelocity) < 0.0005
  ) {
    renderedPageProgress = targetPageProgress;
    pageProgressVelocity = 0;
  }

  const frameProgress = smoothstep(renderedProgress);
  const erProgress = smoothstep(clamp((renderedOpeningProgress - 0.07) / 0.15));
  const prProgress = smoothstep(clamp((renderedOpeningProgress - 0.18) / 0.15));
  const her2Progress = smoothstep(clamp((renderedOpeningProgress - 0.29) / 0.15));
  const reportFold = smoothstep(clamp((renderedOpeningProgress - 0.38) / 0.42));
  const lifeProgress = smoothstep(clamp((renderedOpeningProgress - 0.52) / 0.34));
  const threadProgress = smoothstep(clamp((renderedOpeningProgress - 0.28) / 0.56));
  const radiusProgress = smoothstep(clamp((renderedProgress - 0.54) / 0.46));
  const contentProgress = smoothstep(clamp((renderedProgress - 0.06) / 0.58));
  const labelProgress = smoothstep(clamp((renderedProgress - 0.28) / 0.72));
  const diagramProgress = smoothstep(clamp((renderedProgress - 0.04) / 0.86));
  if (shouldPaintOpening) {
    opening.style.setProperty("--opening-progress", renderedOpeningProgress.toFixed(4));
    opening.style.setProperty("--er-progress", erProgress.toFixed(4));
    opening.style.setProperty("--pr-progress", prProgress.toFixed(4));
    opening.style.setProperty("--her2-progress", her2Progress.toFixed(4));
    opening.style.setProperty("--report-fold", reportFold.toFixed(4));
    opening.style.setProperty("--life-progress", lifeProgress.toFixed(4));
    opening.style.setProperty("--thread-progress", threadProgress.toFixed(4));
    paintedOpening = true;
  }
  if (shouldPaintHistory) {
    history.style.setProperty("--history-progress", renderedHistoryProgress.toFixed(4));
    paintedHistory = true;
  }
  if (shouldPaintHuman) {
    humanChapter.style.setProperty("--human-progress", renderedHumanProgress.toFixed(4));
    paintedHuman = true;
  }
  if (shouldPaintExpansion) {
    expansion.style.setProperty("--frame-progress", frameProgress.toFixed(4));
    expansion.style.setProperty("--radius-progress", radiusProgress.toFixed(4));
    expansion.style.setProperty("--content-progress", contentProgress.toFixed(4));
    expansion.style.setProperty("--label-progress", labelProgress.toFixed(4));
    expansion.style.setProperty("--diagram-progress", diagramProgress.toFixed(4));
    paintedExpansion = true;
  }
  if (shouldPaintCoverage) {
    coverage.style.setProperty("--coverage-progress", renderedCoverageProgress.toFixed(4));
    paintedCoverage = true;
  }
  if (shouldPaintEvidence) {
    evidence.style.setProperty("--evidence-progress", renderedEvidenceProgress.toFixed(4));
    paintedEvidence = true;
  }
  if (shouldPaintCycle) {
    engineering.style.setProperty("--cycle-progress", renderedCycleProgress.toFixed(4));
    paintedCycle = true;
  }
  if (shouldPaintListening) {
    listening.style.setProperty("--listening-progress", renderedListeningProgress.toFixed(4));
    paintedListening = true;
  }
  if (shouldPaintTranslation) {
    translation.style.setProperty(
      "--translation-progress",
      renderedTranslationProgress.toFixed(4),
    );
    threadGuide.style.setProperty(
      "--final-progress",
      renderedTranslationProgress.toFixed(4),
    );
    paintedTranslation = true;
  }
  threadGuide.style.setProperty("--page-progress", renderedPageProgress.toFixed(4));

  const nextAriaPageProgress = Math.round(renderedPageProgress * 100);
  if (nextAriaPageProgress !== ariaPageProgress) {
    ariaPageProgress = nextAriaPageProgress;
    threadGuide.setAttribute("aria-valuenow", String(nextAriaPageProgress));
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
    frame = requestAnimationFrame(paint);
  } else {
    previousFrameTime = 0;
  }
}

function requestPaint() {
  needsMeasure = true;
  if (!frame) {
    frame = requestAnimationFrame(paint);
  }
}

function handleResize() {
  if (window.innerWidth <= 980 && pageRoot.classList.contains("nav-menu-open")) {
    setDesktopNav(activeNavKey, false);
  }
  if (window.innerWidth > 980 && pageRoot.classList.contains("mobile-menu-open")) {
    setMobileMenu(false);
  }
  cacheLayout();
  updateThreadGuideOrientation();
  requestPaint();
}

navToggles.forEach((toggle, index) => {
  toggle.addEventListener("pointerenter", () => queueDesktopNavOpen(toggle.dataset.navKey));
  toggle.addEventListener("focus", () => setDesktopNav(toggle.dataset.navKey, true));
  toggle.addEventListener("click", () => setDesktopNav(toggle.dataset.navKey, true));
  toggle.addEventListener("keydown", (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") {
      return;
    }

    event.preventDefault();
    const direction = event.key === "ArrowRight" ? 1 : -1;
    const nextIndex = (index + direction + navToggles.length) % navToggles.length;
    navToggles[nextIndex].focus();
  });
});

navHomeLinks.forEach((link) => {
  link.addEventListener("pointerenter", () => setDesktopNav(activeNavKey, false));
  link.addEventListener("focus", () => setDesktopNav(activeNavKey, false));
  link.addEventListener("click", () => setMobileMenu(false));
});

navShell.addEventListener("pointerenter", () => window.clearTimeout(navCloseTimer));
navShell.addEventListener("pointerleave", queueDesktopNavClose);
navShell.addEventListener("focusout", (event) => {
  if (!navShell.contains(event.relatedTarget)) {
    queueDesktopNavClose();
  }
});

navMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setDesktopNav(activeNavKey, false));
});

mobileMenuToggle.addEventListener("click", () => {
  setMobileMenu(!pageRoot.classList.contains("mobile-menu-open"));
});

mobileMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMobileMenu(false));
});

document.addEventListener("pointerdown", (event) => {
  if (!siteHeader.contains(event.target)) {
    setDesktopNav(activeNavKey, false);
    setMobileMenu(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") {
    return;
  }

  const expandedToggle = navToggles.find(
    (toggle) => toggle.getAttribute("aria-expanded") === "true",
  );
  const wasMobileOpen = pageRoot.classList.contains("mobile-menu-open");
  setDesktopNav(activeNavKey, false);
  setMobileMenu(false);

  if (wasMobileOpen) {
    mobileMenuToggle.focus();
  } else {
    expandedToggle?.focus();
  }
});

window.addEventListener("scroll", () => {
  requestPaint();
}, { passive: true });
window.addEventListener("resize", handleResize, { passive: true });
window.addEventListener("load", handleResize, { once: true });
reducedMotion.addEventListener("change", requestPaint);
compactThreadGuide.addEventListener("change", updateThreadGuideOrientation);
threadGuideTrack.addEventListener("pointerdown", beginThreadDrag);
threadGuideTrack.addEventListener("pointermove", moveThreadDrag);
threadGuideTrack.addEventListener("pointerup", endThreadDrag);
threadGuideTrack.addEventListener("pointercancel", endThreadDrag);
threadGuide.addEventListener("keydown", handleThreadGuideKeydown);
document.querySelectorAll("details").forEach((details) => {
  details.addEventListener("toggle", handleResize);
});
document.fonts?.ready.then(handleResize);

cacheLayout();
updateThreadGuideOrientation();
updateHeaderTheme();
requestPaint();
