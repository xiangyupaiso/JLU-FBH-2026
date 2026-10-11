import { useEffect, useRef, useState, type RefObject } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  HOME_PLAYBACK_ANTIGEN_EVENT,
  publishHomePlaybackState,
  type HomePlaybackMode,
} from "../utils/homePlayback";
import { HOME_INTRO_REPLAY_EVENT } from "../utils/homeIntro";

const CHAPTERS = [
  { id: "top", title: "Behind the diagnosis" },
  { id: "what-we-saw", title: "A patient's question" },
  { id: "what-stayed-with-us", title: "What stayed with us" },
  { id: "why-tnbc", title: "Why TNBC?" },
  { id: "clinical-challenge", title: "The treatment challenge" },
  { id: "a-new-direction", title: "A new direction" },
  { id: "molecule-gallery", title: "DNA, mRNA and circRNA" },
  { id: "why-circrna", title: "Why circular RNA?" },
  { id: "our-platform", title: "One adaptable platform" },
  { id: "plug-and-play", title: "Changing the antigen" },
  { id: "beyond-tnbc", title: "Looking further" },
  { id: "home-finale", title: "That is CirCure" },
] as const;

type Anchor = {
  chapter: number;
  kind?: "reading" | "bridge";
  progress: number;
  label?: string;
};
type Beat = Anchor & { travel: number; hold?: number; antigen?: number };

// Seconds are editorial pacing. Positions always come from live ScrollTriggers,
// so the same sequence follows the existing desktop and mobile choreography.
const BEATS: readonly Beat[] = [
  { chapter: 0, progress: 0.24, travel: 4, hold: 2 },
  { chapter: 0, progress: 0.66, label: "portrait-closeup", travel: 3 },
  { chapter: 0, progress: 0.98, travel: 2, hold: 3 },
  { chapter: 1, progress: 0, travel: 2 },
  { chapter: 1, progress: 0.42, travel: 4, hold: 2 },
  { chapter: 1, progress: 0.9, travel: 4, hold: 14 },
  { chapter: 2, progress: 0.29, label: "wish-readable", travel: 4, hold: 2 },
  { chapter: 2, progress: 0.5, label: "question-readable", travel: 3, hold: 3 },
  { chapter: 2, progress: 0.84, travel: 5, hold: 2 },
  { chapter: 3, progress: 0, travel: 5 },
  { chapter: 3, progress: 0.88, travel: 7, hold: 4 },
  { chapter: 3, kind: "bridge", progress: 1, travel: 4, hold: 2 },
  { chapter: 3, kind: "reading", progress: 0.94, travel: 4, hold: 4 },
  { chapter: 4, progress: 0.08, travel: 2 },
  { chapter: 4, progress: 0.27, travel: 5, hold: 3 },
  { chapter: 5, progress: 0.72, travel: 7, hold: 3 },
  { chapter: 5, progress: 0.97, travel: 4, hold: 2 },
  { chapter: 6, progress: 0.38, label: "choices-visible", travel: 4, hold: 3 },
  { chapter: 6, progress: 0.88, label: "circ-selected", travel: 4, hold: 3 },
  { chapter: 7, progress: 0, travel: 5 },
  { chapter: 7, progress: 0.2, travel: 5, hold: 3 },
  { chapter: 8, progress: 0.47, travel: 5 },
  { chapter: 8, progress: 0.9, travel: 10, hold: 4 },
  { chapter: 8, kind: "reading", progress: 0.94, travel: 6, hold: 5 },
  { chapter: 9, progress: 0.12, travel: 3, hold: 2 },
  { chapter: 9, progress: 0.5, travel: 2, hold: 10, antigen: 0 },
  { chapter: 9, progress: 0.5, travel: 0, hold: 10, antigen: 1 },
  { chapter: 9, progress: 0.5, travel: 0, hold: 10, antigen: 2 },
  { chapter: 9, progress: 0.96, travel: 4, hold: 2 },
  { chapter: 10, progress: 0.88, travel: 5, hold: 3 },
  { chapter: 11, progress: 0, travel: 4 },
  { chapter: 11, progress: 0.4, label: "circle-to-care", travel: 5, hold: 3 },
  { chapter: 11, progress: 0.98, travel: 7, hold: 3 },
];

const DEFAULT_RATE = 1.2;

type View = {
  mode: HomePlaybackMode;
  rate: number;
  chapterIndex: number;
  progress: number;
  ended: boolean;
  reducedMotion: boolean;
};
type Controls = {
  toggle: () => void;
  seekChapter: (index: number) => void;
  setRate: (rate: number) => void;
};

export function useHomePlayback(root: RefObject<HTMLDivElement | null>) {
  const [view, setView] = useState<View>({
    mode: "manual",
    rate: DEFAULT_RATE,
    chapterIndex: 0,
    progress: 0,
    ended: false,
    reducedMotion: false,
  });
  const controls = useRef<Controls>({
    toggle: () => {},
    seekChapter: () => {},
    setRate: () => {},
  });

  useEffect(() => {
    const page = root.current;
    if (!page) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let mode: HomePlaybackMode = preference.matches ? "manual" : "playing";
    let rate = DEFAULT_RATE;
    let ended = false;
    let frame = 0;
    let lastTime = 0;
    let lastPaint = 0;
    let beatIndex = -1;
    let elapsed = 0;
    let holdElapsed = 0;
    let holding = false;
    let origin = 0;
    let travel = 0;
    let ownReplay = false;
    let measuredWidth = window.innerWidth;
    let measuredHeight = window.innerHeight;

    const clamp = (value: number) => Math.max(0, Math.min(1, value));
    const maxScroll = () =>
      Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
    const section = (chapter: number) =>
      page.querySelector<HTMLElement>(
        chapter === 0 ? ".home-scene01" : `#${CHAPTERS[chapter].id}`,
      );
    const findTrigger = (anchor: Anchor) => {
      if (anchor.kind === "bridge") {
        return ScrollTrigger.getById("home-tnbc-copy-bridge");
      }
      if (anchor.kind === "reading") {
        return ScrollTrigger.getById(
          `home-${CHAPTERS[anchor.chapter].id}-reading`,
        );
      }
      const id =
        anchor.chapter === 0
          ? "home-person-transition"
          : anchor.chapter === 4 || anchor.chapter === 5
            ? "home-clinical-sequence"
            : anchor.chapter === 6
              ? "home-molecule-gallery-intro"
              : anchor.chapter === 7 || anchor.chapter === 8
                ? "home-circrna-platform"
                : anchor.chapter === 11
                  ? "home-finale-reading"
                  : undefined;
      if (id) return ScrollTrigger.getById(id);
      const track = section(anchor.chapter)?.querySelector(
        ".story-scene-track",
      );
      return ScrollTrigger.getAll().find(
        (trigger) => trigger.vars.trigger === track,
      );
    };
    const position = (anchor: Anchor) => {
      const flowAntigen = window.matchMedia(
        "(max-width: 800px) and (orientation: portrait), (max-height: 650px) and (orientation: landscape)",
      ).matches;
      if (anchor.chapter === 9 && flowAntigen) {
        const overview = section(9)?.querySelector<HTMLElement>(
          '.home-antigen-switch[data-antigen-view="overview"]',
        );
        const mechanism = section(9)?.querySelector<HTMLElement>(
          '.home-antigen-switch[data-antigen-view="mechanism"]',
        );
        if (overview && mechanism) {
          const overviewTop =
            overview.getBoundingClientRect().top + window.scrollY - 96;
          const mechanismTop =
            mechanism.getBoundingClientRect().top + window.scrollY - 96;
          const extra = Math.max(
            0,
            mechanism.offsetHeight - window.innerHeight + 156,
          );
          const progress = anchor.progress;
          let y = overviewTop;
          if (progress > 0.5) {
            y = mechanismTop + extra * clamp((progress - 0.5) / 0.46);
          } else if (progress > 0.12) {
            y =
              overviewTop +
              (mechanismTop - overviewTop) * ((progress - 0.12) / 0.38);
          }
          return Math.max(0, Math.min(maxScroll(), y));
        }
      }
      const trigger = findTrigger(anchor);
      if (trigger) {
        let p = anchor.progress;
        const animation = trigger.animation;
        if (anchor.label && animation && "getChildren" in animation) {
          const labelTime = (
            timeline: gsap.core.Timeline,
            label: string,
            offset = 0,
          ): number | undefined => {
            if (timeline.labels[label] !== undefined)
              return offset + timeline.labels[label];
            for (const child of timeline.getChildren(false, false, true)) {
              const found = labelTime(
                child as gsap.core.Timeline,
                label,
                offset + child.startTime(),
              );
              if (found !== undefined) return found;
            }
          };
          const time = labelTime(animation as gsap.core.Timeline, anchor.label);
          if (time !== undefined) p = time / animation.duration();
        }
        return Math.max(
          0,
          Math.min(
            maxScroll(),
            trigger.start + (trigger.end - trigger.start) * clamp(p),
          ),
        );
      }
      const element =
        anchor.kind === "reading"
          ? (section(anchor.chapter)?.querySelector<HTMLElement>(
              ".story-copy",
            ) ?? section(anchor.chapter))
          : section(anchor.chapter);
      if (!element) return window.scrollY;
      const header =
        page
          .closest("#root")
          ?.querySelector(".site-header")
          ?.getBoundingClientRect().height ?? 78;
      const top = element.getBoundingClientRect().top + window.scrollY - header;
      return Math.max(
        0,
        Math.min(
          maxScroll(),
          top +
            Math.max(0, element.offsetHeight - window.innerHeight + header) *
              anchor.progress,
        ),
      );
    };
    const entry = (index: number): Anchor => ({
      chapter: index,
      progress: index === 4 ? 0.08 : index === 5 ? 0.55 : index === 8 ? 0.47 : 0,
    });
    const seekAnchor = (index: number): Anchor => ({
      ...entry(index),
      progress: [
        0.24, 0.9, 0.5, 0.88, 0.27, 0.91, 0.38, 0.2, 0.9, 0.12, 0.88, 0.15,
      ][index],
      label:
        index === 2
          ? "question-readable"
          : index === 6
            ? "choices-visible"
            : undefined,
    });
    const paint = () => {
      const y = window.scrollY;
      let chapterIndex = 0;
      CHAPTERS.forEach((_, index) => {
        if (y >= position(entry(index)) - 4) chapterIndex = index;
      });
      const end = position({ chapter: 11, progress: 0.98 });
      setView({
        mode,
        rate,
        chapterIndex,
        progress: clamp(y / Math.max(1, end)),
        ended,
        reducedMotion: preference.matches,
      });
    };
    const settleScrubs = () => {
      ScrollTrigger.getAll()
        .filter((trigger) => {
          const element = trigger.trigger;
          return trigger.isActive && element && page.contains(element);
        })
        .forEach((trigger) => {
          const tween = trigger.getTween();
          if (tween && typeof tween.progress === "function") tween.progress(1);
        });
    };
    const changeMode = (next: HomePlaybackMode) => {
      mode = next;
      lastTime = 0;
      publishHomePlaybackState({ mode, rate });
      if (next !== "playing") {
        cancelAnimationFrame(frame);
        frame = 0;
        // Finish only the small scrub lag, retaining the scroll's current frame.
        settleScrubs();
      }
      if (next === "manual") {
        beatIndex = -1;
        section(9)?.style.removeProperty("--home-playback-phase-offset");
      }
      paint();
    };
    const scrollTo = (y: number) => {
      window.scrollTo({ top: y, behavior: "instant" });
      ScrollTrigger.update();
    };
    const compactDiagram = window.matchMedia(
      "(max-width: 800px) and (orientation: portrait), (max-height: 650px) and (orientation: landscape)",
    );
    const headerBottom = () => {
      const header = document.querySelector<HTMLElement>(".site-header");
      return Math.max(
        header?.getBoundingClientRect().bottom ?? 0,
        Number.parseFloat(
          getComputedStyle(header ?? document.documentElement).getPropertyValue(
            "--header-height",
          ),
        ) || 78,
      );
    };
    const followAntigen = (delta: number) => {
      if (!compactDiagram.matches) return;
      const diagram = section(9)?.querySelector<HTMLElement>(
        '.home-antigen-switch[data-antigen-view="mechanism"]',
      );
      if (!diagram) return;
      const phase = Number(diagram.dataset.phase);
      const target = diagram.querySelector<HTMLElement | SVGGraphicsElement>(
        phase < 2
          ? ".home-antigen-switch__rna"
          : phase < 4
            ? ".home-antigen-switch__bridge"
            : phase === 4
              ? "[data-antigen-tcell]"
              : ".home-antigen-switch__target",
      );
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const center = (headerBottom() + 24 + window.innerHeight - 68) / 2;
      const destination = Math.max(
        0,
        Math.min(
          maxScroll(),
          window.scrollY + rect.top + rect.height / 2 - center,
        ),
      );
      scrollTo(
        window.scrollY +
          (destination - window.scrollY) * Math.min(1, delta * 5),
      );
    };
    const followAntigenCaption = () => {
      if (!compactDiagram.matches) return;
      const chapter = section(9);
      const diagram = chapter?.querySelector<HTMLElement>(
        '.home-antigen-switch[data-antigen-view="mechanism"]',
      );
      if (!diagram) return;
      const caption = diagram.querySelector<HTMLElement>(
        ".home-antigen-switch__phase-label",
      );
      if (chapter && caption) {
        const offset =
          Number.parseFloat(
            chapter.style.getPropertyValue("--home-playback-phase-offset"),
          ) || 0;
        chapter.style.setProperty(
          "--home-playback-phase-offset",
          `${offset + headerBottom() + 18 - caption.getBoundingClientRect().top}px`,
        );
      }
    };
    const preload = (chapter: number) => {
      [chapter, chapter + 1].forEach((index) => {
        if (index >= CHAPTERS.length) return;
        section(index)
          ?.querySelectorAll("img")
          .forEach((image) => {
            image.loading = "eager";
          });
      });
    };
    const beginBeat = (index: number) => {
      beatIndex = index;
      elapsed = 0;
      holdElapsed = 0;
      holding = false;
      origin = window.scrollY;
      travel = BEATS[index].travel;
      preload(BEATS[index].chapter);
    };
    const chooseBeat = () => {
      const inAntigen =
        window.scrollY >= position(entry(9)) - 3 &&
        window.scrollY < position(entry(10));
      const overviewBeat = BEATS.findIndex(
        (beat) => beat.chapter === 9 && beat.progress === 0.12,
      );
      let index: number;
      if (inAntigen) {
        index =
          window.scrollY <= position(BEATS[overviewBeat]) + 3
            ? overviewBeat
            : BEATS.findIndex((beat) => beat.antigen === 0);
      } else {
        index = BEATS.findIndex((beat) => position(beat) > window.scrollY + 3);
      }
      if (index < 0) return false;
      beginBeat(index);
      return true;
    };
    const tick = (time: number) => {
      frame = 0;
      if (mode !== "playing") return;
      const delta = lastTime
        ? Math.min(0.1, (time - lastTime) / 1000) * rate
        : 0;
      lastTime = time;
      const introDone = section(0)?.dataset.intro === "done";
      if (introDone && beatIndex < 0 && !chooseBeat()) {
        ended = true;
        changeMode("paused");
        return;
      }
      if (introDone && beatIndex >= 0) {
        const beat = BEATS[beatIndex];
        if (!holding) {
          elapsed += delta;
          const fraction = travel > 0 ? clamp(elapsed / travel) : 1;
          scrollTo(
            origin + (Math.max(origin, position(beat)) - origin) * fraction,
          );
          if (fraction >= 1) {
            holding = true;
            if (beat.antigen !== undefined) {
              window.dispatchEvent(
                new CustomEvent(HOME_PLAYBACK_ANTIGEN_EVENT, {
                  detail: { selected: beat.antigen },
                }),
              );
            }
          }
        } else {
          holdElapsed += delta;
          // Tall phone diagrams use a camera move from translation to priming
          // and recognition, keeping the currently explained stage in view.
          if (beat.chapter === 9 && beat.antigen !== undefined)
            followAntigen(delta);
          if (holdElapsed >= (beat.hold ?? 0)) {
            if (beatIndex === BEATS.length - 1) {
              ended = true;
              changeMode("paused");
              return;
            }
            beginBeat(beatIndex + 1);
          }
        }
        // Caption positioning also runs during the approach to the diagram.
        if (beat.chapter === 9 && beat.antigen !== undefined)
          followAntigenCaption();
      }
      if (time - lastPaint >= 150) {
        paint();
        lastPaint = time;
      }
      frame = requestAnimationFrame(tick);
    };
    const requestTick = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const replay = () => {
      ownReplay = true;
      window.dispatchEvent(new Event(HOME_INTRO_REPLAY_EVENT));
      ownReplay = false;
    };
    controls.current = {
      toggle() {
        if (preference.matches) return;
        if (mode === "playing") {
          changeMode("paused");
          return;
        }
        if (ended) {
          scrollTo(0);
          replay();
          beatIndex = -1;
        }
        ended = false;
        changeMode("playing");
        requestTick();
      },
      seekChapter(index) {
        if (index < 0 || index >= CHAPTERS.length) return;
        changeMode("manual");
        section(9)?.style.removeProperty("--home-playback-phase-offset");
        beatIndex = -1;
        ended = false;
        preload(index);
        // Trigger boundaries already include all pin spacers; fragments would
        // misalign shared clinical/RNA scenes and replay the intro on refresh.
        scrollTo(position(seekAnchor(index)) + 1);
        // A chapter jump is instantaneous, so paint every affected timeline
        // at its destination frame before the previous scene can flash.
        settleScrubs();
        paint();
      },
      setRate(next) {
        rate = Math.max(0.5, Math.min(2, next));
        publishHomePlaybackState({ mode, rate });
        paint();
      },
    };
    const inPlayer = (target: EventTarget | null) =>
      target instanceof Element && !!target.closest("[data-home-player]");
    const manual = (event: Event) => {
      if (inPlayer(event.target)) return;
      if (mode !== "manual") changeMode("manual");
    };
    const scrollInput = (event: Event) => {
      // Scrolling the open list stays local; scrolling over the transport
      // itself still hands the document back to the reader.
      if (
        event.target instanceof Element &&
        event.target.closest(".home-playback-scenes")
      )
        return;
      if (mode !== "manual") changeMode("manual");
    };
    const keydown = (event: KeyboardEvent) => {
      if (inPlayer(event.target)) return;
      const target = event.target;
      if (
        target instanceof HTMLElement &&
        (target.isContentEditable || target.closest("input,textarea,select"))
      )
        return;
      if (
        [
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
          " ",
          "Escape",
        ].includes(event.key)
      )
        manual(event);
    };
    const interaction = (event: Event) => {
      const target = event.target;
      if (
        target instanceof Element &&
        (target.closest(
          "button,a,input,summary,[role='button'],.home-antigen-switch",
        ) ||
          target === document.documentElement)
      )
        manual(event);
    };
    const visibility = () => {
      if (document.hidden && mode === "playing") changeMode("paused");
    };
    const resize = () => {
      if (
        window.innerWidth !== measuredWidth ||
        Math.abs(window.innerHeight - measuredHeight) >= 80
      ) {
        if (mode === "playing") changeMode("paused");
        beatIndex = -1;
        measuredWidth = window.innerWidth;
        measuredHeight = window.innerHeight;
      }
      paint();
    };
    const refresh = () => {
      // An expanded diagram changes downstream geometry. Rebase the remaining
      // movement on the current frame without restarting the scene clock.
      if (mode === "playing" && beatIndex >= 0 && !holding) {
        travel = Math.max(0.2, travel - elapsed);
        elapsed = 0;
        origin = window.scrollY;
      }
      paint();
    };
    const onReplay = () => {
      if (ownReplay) return;
      ended = false;
      beatIndex = -1;
      changeMode("manual");
    };
    const onScroll = () => {
      if (mode !== "playing") paint();
    };
    const onPreference = () => {
      changeMode("manual");
      paint();
    };
    window.addEventListener("wheel", scrollInput, {
      passive: true,
      capture: true,
    });
    window.addEventListener("touchmove", scrollInput, {
      passive: true,
      capture: true,
    });
    window.addEventListener("pointerdown", interaction, true);
    window.addEventListener("click", interaction, true);
    window.addEventListener("keydown", keydown);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener(HOME_INTRO_REPLAY_EVENT, onReplay);
    document.addEventListener("visibilitychange", visibility);
    preference.addEventListener("change", onPreference);
    ScrollTrigger.addEventListener("refresh", refresh);
    publishHomePlaybackState({ mode, rate });
    paint();
    if (mode === "playing") requestTick();
    return () => {
      cancelAnimationFrame(frame);
      section(9)?.style.removeProperty("--home-playback-phase-offset");
      window.removeEventListener("wheel", scrollInput, true);
      window.removeEventListener("touchmove", scrollInput, true);
      window.removeEventListener("pointerdown", interaction, true);
      window.removeEventListener("click", interaction, true);
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener(HOME_INTRO_REPLAY_EVENT, onReplay);
      document.removeEventListener("visibilitychange", visibility);
      preference.removeEventListener("change", onPreference);
      ScrollTrigger.removeEventListener("refresh", refresh);
      publishHomePlaybackState({ mode: "manual", rate: 1 });
      delete document.documentElement.dataset.homePlayback;
      delete document.documentElement.dataset.homePlaybackRate;
    };
  }, [root]);

  return {
    ...view,
    chapters: CHAPTERS,
    toggle: () => controls.current.toggle(),
    seekChapter: (index: number) => controls.current.seekChapter(index),
    setRate: (rate: number) => controls.current.setRate(rate),
  };
}
