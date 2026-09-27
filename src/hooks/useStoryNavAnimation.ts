/* useStoryNavAnimation — GSAP + ScrollTrigger rewrite of the original
 * requestAnimationFrame + 9-way spring engine (see home-gsap-refactor/GSAP重构映射清单.md).
 *
 * The visual contract stays CSS-variable driven: this hook writes progress
 * custom properties onto the same chapter elements and circure-home.css maps
 * those values to the composed frames. Chapters 2, 3 and 6 additionally use
 * dedicated `--*-exit-progress` variables so their readable middle layer can
 * remain fully visible before its outgoing crossfade starts.
 *
 *   - rAF loop + needsMeasure/shouldPaint dirty flags  →  ScrollTrigger scrub
 *   - followProgress() exponential lag (response 100–128ms)
 *       →  per-section `scrub` seconds (0.40–0.60), tuned per section to keep
 *          the original "each chapter catches up at its own pace" feel
 *   - smoothstep(clamp((p - offset) / range))
 *       →  one tween per sub-variable, ease "sine.inOut" (≈ smoothstep),
 *          placed with timeline position parameters at offset/range
 *   - withCompletionHold(p / 0.72)
 *       →  standard sticky timelines pack tweens into [0, 0.72] and leave the
 *          remainder empty; chapters 2, 3 and 6 use explicit reveal, readable
 *          hold, outro and final-hold stages
 *   - page-progress spring (stiffness 17)  →  global body-spanning trigger
 *       with a short scrub; thread-guide drag snaps the scrub tween to
 *       reproduce the old "rendered = target" instant follow
 *   - reduced-motion / 620px breakpoint  →  gsap.matchMedia()
 *
 * Pinning: since the phase-2 cleanup, the CSS `position: sticky` and
 * `min-height: NNNsvh` placeholders are gone from circure-home.css — GSAP owns
 * pinning via `pin: true` (pinSpacing: true, the default) on every sticky
 * section. The former min-height spans live in SECTION_SPAN below and become
 * the pin distances (`end: "+=(span − 100svh) + headerH"`), so the generated
 * .pin-spacer nodes reproduce exactly the page height the CSS used to create.
 * useGSAP's context reverts all ScrollTriggers on unmount/Vite HMR, which
 * also unwraps the pin-spacers — no stray DOM nodes are left behind.
 *
 * Nav menu open/close is intentionally NOT handled here — the Navbar
 * component owns that state. This hook only touches scroll-driven motion
 * and the thread-guide.
 */

import { type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { clamp } from "../utils";

gsap.registerPlugin(useGSAP, ScrollTrigger);

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

const DARK_SURFACE_KEYS: Array<keyof StoryNavSectionRefs | "closing"> = [
  "humanChapter",
  "expansion",
  "listening",
  "closing",
];

// Standard sticky choreography completes at 72% of the sticky scroll; the
// remaining 28% is the final Hold Zone. Chapters 2, 3 and 6 use the explicit
// multi-stage timeline built by intermediateHoldVars instead.
const STICKY_ANIMATION_END = 0.72;

// Per-section scrub seconds, mapped from the old spring responses
// (100ms → 0.40 … 128ms → 0.60) to keep the per-chapter lag differences.
const SCRUB = {
  opening: 0.45, // response 110
  history: 0.52, // response 122
  human: 0.6, // response 128
  expansion: 0.44, // response 108
  coverage: 0.4, // response 100
  evidence: 0.5, // response 120
  engineering: 0.44, // response 108
  listening: 0.45, // response 110
  translation: 0.55, // response 124
} as const;
// The page spring (stiffness 17, time constant ~59ms) was much snappier than
// the section springs, hence the shorter scrub for the thread-guide knot.
const PAGE_SCRUB = 0.25;

// Scroll span of each pinned section in svh units — the former CSS
// `min-height` placeholder values per breakpoint (base / ≤900px / ≤620px; the
// 620 value wins over the 900 one, exactly like the old cascade resolved).
// Pin distance = (span − 100)svh + header height, matching the old sticky
// range (engage at `top: headerH`, release when the child's bottom met the
// section's bottom).
interface SectionSpan {
  base: number;
  md: number;
  sm: number;
}

const SECTION_SPAN: Record<
  | "opening"
  | "history"
  | "human"
  | "expansion"
  | "coverage"
  | "evidence"
  | "translation",
  SectionSpan
> = {
  opening: { base: 360, md: 360, sm: 260 },
  history: { base: 380, md: 310, sm: 320 },
  human: { base: 410, md: 410, sm: 330 },
  expansion: { base: 235, md: 235, sm: 235 },
  coverage: { base: 335, md: 275, sm: 290 },
  evidence: { base: 380, md: 380, sm: 315 },
  translation: { base: 365, md: 365, sm: 300 },
};

// smoothstep(t) = 3t² − 2t³ and sine.inOut are near-identical S-curves.
const SMOOTHSTEP = "sine.inOut";

interface SurfaceRange {
  start: number;
  end: number;
}

export function useStoryNavAnimation(refs: StoryNavAnimationRefs): void {
  const { root, sections, threadGuide } = refs;

  useGSAP(
    () => {
      const rootEl = root.current;
      const openingEl = sections.opening.current;
      const historyEl = sections.history.current;
      const humanChapterEl = sections.humanChapter.current;
      const expansionEl = sections.expansion.current;
      const coverageEl = sections.coverage.current;
      const evidenceEl = sections.evidence.current;
      const engineeringEl = sections.engineering.current;
      const listeningEl = sections.listening.current;
      const translationEl = sections.translation.current;
      const threadGuideEl = threadGuide.current;

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

      const listeningRoomEl =
        listeningEl.querySelector<HTMLElement>(".listening-room");
      const closingEl = rootEl.querySelector<HTMLElement>(".closing");
      const threadGuideTrackEl = threadGuideEl.querySelector<HTMLElement>(
        ".thread-guide-track",
      );
      const threadGuideIndexEl = threadGuideEl.querySelector<HTMLElement>(
        ".thread-guide-index",
      );
      const threadGuideNameEl =
        threadGuideEl.querySelector<HTMLElement>(".thread-guide-name");
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

      const compactThreadGuide = window.matchMedia("(max-width: 620px)");
      const readHeaderHeight = () =>
        Number.parseFloat(
          getComputedStyle(document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78;
      let cachedHeaderHeight = readHeaderHeight();
      const cacheHeaderHeight = () => {
        cachedHeaderHeight = readHeaderHeight();
      };
      const headerHeight = () => cachedHeaderHeight;

      // The header token only changes on responsive refreshes. Cache it before
      // ScrollTrigger measures start/end positions so scroll updates never need
      // to force a computed-style read after GSAP has written animation values.
      ScrollTrigger.addEventListener("refreshInit", cacheHeaderHeight);

      // Pins engage when a section's top reaches the header's bottom edge —
      // the exact spot the old CSS `position: sticky; top: var(--header-height)`
      // stuck at.
      const stickyStart = () => `top top+=${headerHeight()}`;

      const sectionElByThemeKey: Record<
        keyof StoryNavSectionRefs | "closing",
        HTMLElement
      > = {
        opening: openingEl,
        history: historyEl,
        humanChapter: humanChapterEl,
        expansion: expansionEl,
        coverage: coverageEl,
        evidence: evidenceEl,
        engineering: engineeringEl,
        listening: listeningEl,
        translation: translationEl,
        closing: closingEl,
      };

      const landmarkEls: HTMLElement[] = [
        openingEl,
        historyEl,
        humanChapterEl,
        expansionEl,
        coverageEl,
        evidenceEl,
        engineeringEl,
        listeningEl,
        translationEl,
      ];

      // --- Thread-guide bookkeeping (cached per refresh) ---
      let darkSurfaceRanges: SurfaceRange[] = [];
      let landmarkOffsets: number[] = [];
      let activeLandmarkIndex = -1;
      let ariaPageProgress = -1;
      let threadPointerId: number | null = null;
      let fontsReadyCancelled = false;

      // Assigned inside the matchMedia handler; recreated on breakpoint or
      // reduced-motion changes.
      let pageST: ScrollTrigger | null = null;

      // While a section is pinned its getBoundingClientRect is the fixed
      // screen position, not its place in the document flow — so pinned
      // sections derive their document-space range from their own trigger:
      // top = start + headerH, bottom = end + one viewport (the pin-spacer's
      // footprint). Non-pinned elements keep using live rects.
      const pinTriggerByElement = new Map<HTMLElement, ScrollTrigger>();

      function docTop(el: HTMLElement): number {
        const pin = pinTriggerByElement.get(el);
        if (pin) return pin.start + headerHeight();
        return el.getBoundingClientRect().top + window.scrollY;
      }

      function docBottom(el: HTMLElement): number {
        const pin = pinTriggerByElement.get(el);
        if (pin) return pin.end + window.innerHeight;
        return el.getBoundingClientRect().bottom + window.scrollY;
      }

      function cacheRanges(): void {
        darkSurfaceRanges = DARK_SURFACE_KEYS.map((key) => {
          const element = sectionElByThemeKey[key];
          return { start: docTop(element), end: docBottom(element) };
        });
        landmarkOffsets = landmarkEls.map((el) => docTop(el));
      }

      function updateThreadGuide(scrollY: number): void {
        if (!threadGuideEl || !threadGuideIndexEl || !threadGuideNameEl)
          return;
        const probe = scrollY + window.innerHeight * 0.46;
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

      // Runs on every scroll change of the global trigger and on refresh.
      function applyPageState(self: ScrollTrigger): void {
        if (!threadGuideEl) return;
        const scrollY = self.scroll();
        updateThreadGuide(scrollY);
        const nextAriaPageProgress = Math.round(self.progress * 100);
        if (nextAriaPageProgress !== ariaPageProgress) {
          ariaPageProgress = nextAriaPageProgress;
          threadGuideEl.setAttribute(
            "aria-valuenow",
            String(nextAriaPageProgress),
          );
        }
      }

      // --- Timeline builders ---

      // Main sticky variable: linear 0→1 across [0, 0.72] (the old rendered
      // progress was the held raw value, no smoothstep).
      const holdVar = (
        tl: gsap.core.Timeline,
        target: HTMLElement,
        varName: string,
      ) =>
        tl.fromTo(
          target,
          { [varName]: 0 },
          { [varName]: 1, duration: STICKY_ANIMATION_END, ease: "none" },
          0,
        );

      // Sub-variable window: smoothstep(clamp((held − offset) / range)) maps
      // to a sine.inOut tween at position offset·0.72 with duration range·0.72.
      const holdSub = (
        tl: gsap.core.Timeline,
        target: HTMLElement,
        varName: string,
        offset: number,
        range: number,
      ) =>
        tl.fromTo(
          target,
          { [varName]: 0 },
          {
            [varName]: 1,
            duration: range * STICKY_ANIMATION_END,
            ease: SMOOTHSTEP,
          },
          offset * STICKY_ANIMATION_END,
        );

      // Empty filler tween extends the timeline to 1 so [0.72, 1] stays blank.
      const holdZone = (tl: gsap.core.Timeline) =>
        tl.to({}, { duration: 1 - STICKY_ANIMATION_END }, STICKY_ANIMATION_END);

      // Chapters 2, 3 and 6 split reveal and exit into independent variables.
      // The readable layer can therefore reach its fully composed state while
      // exit stays at zero throughout the hold; only continued scrolling starts
      // the outgoing crossfade. Timeline units are ratios here: ScrollTrigger
      // maps the complete sequence across the section's existing pin distance.
      const intermediateHoldVars = (
        tl: gsap.core.Timeline,
        target: HTMLElement,
        revealVarName: string,
        exitVarName: string,
      ) =>
        tl
          .addLabel("reveal", 0)
          .set(target, { [exitVarName]: 0 }, "reveal")
          .fromTo(
            target,
            { [revealVarName]: 0 },
            {
              [revealVarName]: 1,
              duration: 1,
              ease: "none",
            },
            "reveal",
          )
          .addLabel("intermediateHold")
          .to({}, { duration: 1.5 }, "intermediateHold")
          .addLabel("outro")
          .to(
            target,
            {
              [exitVarName]: 1,
              duration: 0.65,
              ease: SMOOTHSTEP,
            },
            "outro",
          )
          .addLabel("finalHold")
          .to({}, { duration: 1.1 }, "finalHold");

      // Non-hold window (Expansion): same mapping without the 0.72 scale.
      const windowSub = (
        tl: gsap.core.Timeline,
        target: HTMLElement,
        varName: string,
        offset: number,
        range: number,
      ) =>
        tl.fromTo(
          target,
          { [varName]: 0 },
          { [varName]: 1, duration: range, ease: SMOOTHSTEP },
          offset,
        );

      const mm = gsap.matchMedia();

      // The condition set must cover every environment (a matchMedia handler
      // only runs while at least one condition matches), hence the
      // complementary fullMotion/regular queries.
      mm.add(
        {
          reduceMotion: "(prefers-reduced-motion: reduce)",
          fullMotion: "(prefers-reduced-motion: no-preference)",
          compact: "(max-width: 620px)",
          medium: "(max-width: 900px)",
          regular: "(min-width: 620.02px)",
        },
        (mmContext) => {
          const { reduceMotion, compact, medium } = mmContext.conditions as {
            reduceMotion: boolean;
            compact: boolean;
            medium: boolean;
          };

          // Pin scroll distance for a sticky section: the former CSS
          // min-height span minus one viewport, plus the header offset the
          // sticky `top` used to reserve. Function form re-evaluates on every
          // ScrollTrigger.refresh (resize, fonts, images, details toggles).
          const spanFor = (span: SectionSpan): number =>
            compact ? span.sm : medium ? span.md : span.base;
          const pinEnd = (span: SectionSpan) => () =>
            `+=${((spanFor(span) - 100) / 100) * window.innerHeight + headerHeight()}`;

          threadGuideEl.setAttribute(
            "aria-orientation",
            compact ? "horizontal" : "vertical",
          );

          if (reduceMotion) {
            // Reduced motion: every section rests in its final composed state;
            // only the page progress (knot position) and thread-guide labels
            // keep tracking the scroll — same as the old reduced-motion paint
            // branch.
            gsap.set(openingEl, {
              "--opening-progress": 1,
              "--er-progress": 1,
              "--pr-progress": 1,
              "--her2-progress": 1,
              "--report-fold": 1,
              "--life-progress": 1,
              "--thread-progress": 1,
            });
            gsap.set(historyEl, {
              "--history-progress": 1,
              "--history-exit-progress": 1,
            });
            gsap.set(humanChapterEl, {
              "--human-progress": 1,
              "--human-exit-progress": 1,
            });
            gsap.set(expansionEl, {
              "--frame-progress": 1,
              "--radius-progress": 1,
              "--content-progress": 1,
              "--label-progress": 1,
              "--diagram-progress": 1,
            });
            gsap.set(coverageEl, { "--coverage-progress": 1 });
            gsap.set(evidenceEl, {
              "--evidence-progress": 1,
              "--evidence-exit-progress": 1,
            });
            gsap.set(engineeringEl, { "--cycle-progress": 1 });
            gsap.set(listeningEl, { "--listening-progress": 1 });
            gsap.set(translationEl, { "--translation-progress": 1 });
            gsap.set(threadGuideEl, { "--final-progress": 1 });
            if (headerEl) {
              gsap.set(headerEl, {
                "--motion-progress": 1,
                "--logo-fold-progress": 0,
                "--logo-mark-progress": 0,
                "--logo-ribbon-progress": 0,
              });
            }

            // Knot follows the scroll directly (no scrub smoothing).
            pageST = ScrollTrigger.create({
              id: "story-page",
              start: 0,
              end: "max",
              onRefresh: (self) => {
                cacheRanges();
                threadGuideEl.style.setProperty(
                  "--page-progress",
                  self.progress.toFixed(4),
                );
                applyPageState(self);
              },
              onUpdate: (self) => {
                threadGuideEl.style.setProperty(
                  "--page-progress",
                  self.progress.toFixed(4),
                );
                applyPageState(self);
              },
            });

            return () => {
              pinTriggerByElement.clear();
              pageST = null;
            };
          }

          // --- Full-motion branch: one ScrollTrigger per section, created in
          // page order (top → bottom) so refresh order matches DOM order. ---

          // Opening — body's padding-top equals the header height, so the pin
          // engages right at scrollY 0, exactly where the CSS sticky stuck.
          const openingTl = gsap.timeline({
            scrollTrigger: {
              id: "story-opening",
              trigger: openingEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.opening),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.opening,
            },
          });
          pinTriggerByElement.set(openingEl, openingTl.scrollTrigger!);
          holdVar(openingTl, openingEl, "--opening-progress");
          holdSub(openingTl, openingEl, "--er-progress", 0.07, 0.15);
          holdSub(openingTl, openingEl, "--pr-progress", 0.18, 0.15);
          holdSub(openingTl, openingEl, "--her2-progress", 0.29, 0.15);
          holdSub(openingTl, openingEl, "--thread-progress", 0.28, 0.56);
          holdSub(openingTl, openingEl, "--report-fold", 0.38, 0.42);
          holdSub(openingTl, openingEl, "--life-progress", 0.52, 0.34);
          holdZone(openingTl);

          // History
          const historyTl = gsap.timeline({
            scrollTrigger: {
              id: "story-history",
              trigger: historyEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.history),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.history,
            },
          });
          pinTriggerByElement.set(historyEl, historyTl.scrollTrigger!);
          intermediateHoldVars(
            historyTl,
            historyEl,
            "--history-progress",
            "--history-exit-progress",
          );

          // Human
          const humanTl = gsap.timeline({
            scrollTrigger: {
              id: "story-human",
              trigger: humanChapterEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.human),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.human,
            },
          });
          pinTriggerByElement.set(humanChapterEl, humanTl.scrollTrigger!);
          intermediateHoldVars(
            humanTl,
            humanChapterEl,
            "--human-progress",
            "--human-exit-progress",
          );

          // Expansion — viewport-crossing measurement (top 62% → top −11%),
          // five sub-variables derived from one source progress, merged into a
          // single timeline via position parameters.
          const expansionTl = gsap.timeline({
            scrollTrigger: {
              id: "story-expansion",
              trigger: expansionEl,
              start: "top 62%",
              end: "top -11%",
              scrub: SCRUB.expansion,
            },
          });
          windowSub(expansionTl, expansionEl, "--frame-progress", 0, 1);
          windowSub(expansionTl, expansionEl, "--diagram-progress", 0.04, 0.86);
          windowSub(expansionTl, expansionEl, "--content-progress", 0.06, 0.58);
          windowSub(expansionTl, expansionEl, "--label-progress", 0.28, 0.72);
          windowSub(expansionTl, expansionEl, "--radius-progress", 0.54, 0.46);

          // Expansion pin — the CSS sticky used to hold the expanded frame
          // through the rest of the 235svh span; a dedicated pin-only trigger
          // now does that, while the reveal animation above keeps its own
          // viewport-crossing range (created first: its start comes earlier).
          const expansionPin = ScrollTrigger.create({
            id: "story-expansion-pin",
            trigger: expansionEl,
            start: stickyStart,
            end: pinEnd(SECTION_SPAN.expansion),
            pin: true,
            anticipatePin: 1,
          });
          pinTriggerByElement.set(expansionEl, expansionPin);

          // Coverage
          const coverageTl = gsap.timeline({
            scrollTrigger: {
              id: "story-coverage",
              trigger: coverageEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.coverage),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.coverage,
            },
          });
          holdVar(coverageTl, coverageEl, "--coverage-progress");
          holdZone(coverageTl);
          pinTriggerByElement.set(coverageEl, coverageTl.scrollTrigger!);

          // Evidence
          const evidenceTl = gsap.timeline({
            scrollTrigger: {
              id: "story-evidence",
              trigger: evidenceEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.evidence),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.evidence,
            },
          });
          pinTriggerByElement.set(evidenceEl, evidenceTl.scrollTrigger!);
          intermediateHoldVars(
            evidenceTl,
            evidenceEl,
            "--evidence-progress",
            "--evidence-exit-progress",
          );

          // Engineering — non-pinned viewport crossing, raw linear progress
          // (the stagger between the three cards lives in CSS via --lab-step).
          gsap.fromTo(
            engineeringEl,
            { "--cycle-progress": 0 },
            {
              "--cycle-progress": 1,
              ease: "none",
              scrollTrigger: {
                id: "story-engineering",
                trigger: engineeringEl,
                start: "top 88%",
                end: "top 20%",
                scrub: SCRUB.engineering,
              },
            },
          );

          // Listening — triggered by the inner room, variable written on the
          // section element (voice cards stagger in CSS via --voice-step).
          gsap.fromTo(
            listeningEl,
            { "--listening-progress": 0 },
            {
              "--listening-progress": 1,
              ease: "none",
              scrollTrigger: {
                id: "story-listening",
                trigger: listeningRoomEl,
                start: "top 90%",
                end: "top 18%",
                scrub: SCRUB.listening,
              },
            },
          );

          // Translation — also mirrors its progress to the thread-guide's
          // --final-progress (drives the guide's final tone shift).
          const translationTl = gsap.timeline({
            scrollTrigger: {
              id: "story-translation",
              trigger: translationEl,
              start: stickyStart,
              end: pinEnd(SECTION_SPAN.translation),
              pin: true,
              anticipatePin: 1,
              scrub: SCRUB.translation,
            },
          });
          pinTriggerByElement.set(translationEl, translationTl.scrollTrigger!);
          holdVar(translationTl, translationEl, "--translation-progress");
          holdVar(translationTl, threadGuideEl, "--final-progress");
          holdZone(translationTl);

          // Global page progress — drives the thread-guide knot's position
          // (CSS maps --page-progress to the knot's top/height) plus the
          // landmark labels.
          const pageTween = gsap.fromTo(
            threadGuideEl,
            { "--page-progress": 0 },
            {
              "--page-progress": 1,
              ease: "none",
              scrollTrigger: {
                id: "story-page",
                start: 0,
                end: "max",
                scrub: PAGE_SCRUB,
                onRefresh: (self) => {
                  cacheRanges();
                  applyPageState(self);
                },
                onUpdate: applyPageState,
              },
            },
          );
          pageST = pageTween.scrollTrigger ?? null;

          return () => {
            pinTriggerByElement.clear();
            pageST = null;
          };
        },
      );

      // --- Thread-guide pointer drag + keyboard (unchanged behavior) ---

      function getPointerGuideProgress(event: PointerEvent): number {
        if (!threadGuideTrackEl) return 0;
        const bounds = threadGuideTrackEl.getBoundingClientRect();
        if (compactThreadGuide.matches) {
          return (event.clientX - bounds.left) / Math.max(1, bounds.width);
        }
        return (event.clientY - bounds.top) / Math.max(1, bounds.height);
      }

      function setPageProgressFromGuide(progress: number): void {
        if (!threadGuideEl) return;
        const nextProgress = clamp(progress);
        const maxScroll = Math.max(
          0,
          document.documentElement.scrollHeight - window.innerHeight,
        );
        threadGuideEl.style.setProperty(
          "--page-progress",
          nextProgress.toFixed(4),
        );
        threadGuideEl.setAttribute(
          "aria-valuenow",
          String(Math.round(nextProgress * 100)),
        );
        document.documentElement.classList.add("is-thread-directing");
        window.scrollTo(0, maxScroll * nextProgress);
        // Snap the scrub tween so the knot tracks the pointer instantly,
        // mirroring the old "rendered = target, velocity = 0" behavior.
        ScrollTrigger.update();
        pageST?.getTween()?.progress(1);

        if (threadPointerId === null) {
          requestAnimationFrame(() => {
            document.documentElement.classList.remove("is-thread-directing");
          });
        }
      }

      function beginThreadDrag(event: PointerEvent): void {
        if (!threadGuideEl || !threadGuideTrackEl) return;
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
        if (!threadGuideEl || !threadGuideTrackEl) return;
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
      }

      function handleThreadGuideKeydown(event: KeyboardEvent): void {
        let nextProgress = pageST?.progress ?? 0;
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

      threadGuideTrackEl.addEventListener("pointerdown", beginThreadDrag);
      threadGuideTrackEl.addEventListener("pointermove", moveThreadDrag);
      threadGuideTrackEl.addEventListener("pointerup", endThreadDrag);
      threadGuideTrackEl.addEventListener("pointercancel", endThreadDrag);
      threadGuideEl.addEventListener("keydown", handleThreadGuideKeydown);

      // <details> expand/collapse changes section heights → refresh triggers.
      const detailsEls = rootEl.querySelectorAll("details");
      const onDetailsToggle = () => ScrollTrigger.refresh();
      detailsEls.forEach((details) => {
        details.addEventListener("toggle", onDetailsToggle);
      });

      // Web fonts change layout metrics once loaded.
      if (document.fonts?.ready) {
        document.fonts.ready.then(() => {
          if (!fontsReadyCancelled) ScrollTrigger.refresh();
        });
      }

      // Late-loading images push the DOM around and would skew pin start
      // positions; refresh once they land. Debounced via a paused delayedCall
      // (killed automatically by the useGSAP context) since several images
      // often finish within the same tick.
      const imageRefresh = gsap
        .delayedCall(0.2, () => ScrollTrigger.refresh())
        .pause();
      const onImageLoad = () => imageRefresh.restart(true);
      const pendingImages = Array.from(rootEl.querySelectorAll("img")).filter(
        (img) => !img.complete,
      );
      pendingImages.forEach((img) => {
        img.addEventListener("load", onImageLoad, { once: true });
        img.addEventListener("error", onImageLoad, { once: true });
      });

      // useGSAP reverts all tweens, timelines and ScrollTriggers (including
      // everything created inside gsap.matchMedia) on unmount and Vite HMR;
      // this extra cleanup handles what lives outside GSAP's reach.
      return () => {
        fontsReadyCancelled = true;
        mm.revert();
        ScrollTrigger.removeEventListener("refreshInit", cacheHeaderHeight);
        threadGuideTrackEl.removeEventListener("pointerdown", beginThreadDrag);
        threadGuideTrackEl.removeEventListener("pointermove", moveThreadDrag);
        threadGuideTrackEl.removeEventListener("pointerup", endThreadDrag);
        threadGuideTrackEl.removeEventListener("pointercancel", endThreadDrag);
        threadGuideEl.removeEventListener("keydown", handleThreadGuideKeydown);
        detailsEls.forEach((details) => {
          details.removeEventListener("toggle", onDetailsToggle);
        });
        pendingImages.forEach((img) => {
          img.removeEventListener("load", onImageLoad);
          img.removeEventListener("error", onImageLoad);
        });
        document.body.classList.remove("is-thread-dragging");
        document.documentElement.classList.remove("is-thread-directing");
      };
    },
    { scope: root },
  );
}
