import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { HOME_EASE, HOME_REST_RATIO, HOME_SCRUB } from "./homeMotion";
import { animateCircRna } from "./animateCircRna";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const ART_REVEAL_DURATION = 0.28;
const ARTWORK_START = 0.06;
// CROSS-FILE: .story-hope-light span size in home-story.css.
const HOPE_LIGHT_SIZE = 800;
// The heart sits ~63% down scene-9-layer-3; the glow starts ~2.2× that
// layer's width (about 320px on desktop).
const HOPE_HEART_Y = 0.63;
const HOPE_GLOW_SCALE = 2.2;
// The "If it comes back…" title warms slightly once it is under the light.
const HOPE_LIT_INK = "#603846";

declare global {
  interface Window {
    __homeMotion?: {
      seek: (id: string, progress: number) => void;
      state: () => { id: string; progress: number }[];
    };
  }
}

function choreographArt(
  section: HTMLElement,
  timeline: gsap.core.Timeline,
  compact: boolean,
  splits: ReturnType<typeof SplitText.create>[],
) {
  const distance = compact ? 0.64 : 1;
  const layer = (number: number) =>
    section.querySelector<HTMLElement>(`[data-layer="${number}"]`);
  const scaled = (vars: gsap.TweenVars) => {
    const result = { ...vars };
    if (typeof result.x === "number") result.x *= distance;
    if (typeof result.y === "number") result.y *= distance;
    if (typeof result.xPercent === "number") result.xPercent *= distance;
    if (typeof result.yPercent === "number") result.yPercent *= distance;
    return result;
  };
  const move = (
    number: number,
    from: gsap.TweenVars,
    to: gsap.TweenVars,
    at = 0,
    duration = 1,
    ease = "none",
  ) => {
    const target = layer(number);
    if (!target) return;
    timeline.fromTo(
      target,
      scaled(from),
      { ...scaled(to), duration, ease },
      at,
    );
  };
  const arrive = (
    number: number,
    at: number,
    from: gsap.TweenVars = {},
    duration = 0.3,
    to: gsap.TweenVars = {},
  ) =>
    move(
      number,
      { opacity: 0.72, ...from },
      { opacity: 1, x: 0, y: 0, scale: 1, rotation: 0, ...to },
      at,
      duration,
      HOME_EASE,
    );
  const camera = (
    from: gsap.TweenVars = { scale: 1.035 },
    to: gsap.TweenVars = { scale: 1.01 },
  ) => {
    const background = section.querySelector<HTMLElement>(".story-backdrop");
    if (background) {
      timeline.fromTo(background, scaled(from), {
        ...scaled(to),
        duration: 1,
        ease: "none",
      });
    }
  };
  // DUPLICATE: animateCircRna.ts repeats this draw pattern for scene 1.
  const paint = (kind: "arrow", at: number, duration: number) => {
    const stroke = section.querySelector(
      `.story-painted--${kind} .story-paint-stroke`,
    );
    const complete = section.querySelector(
      `.story-painted--${kind} .story-paint-complete`,
    );
    const image = section.querySelector(`.story-painted--${kind} image`);
    if (!stroke || !complete || !image) return;
    gsap.set(stroke, {
      attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 1 },
    });
    gsap.set(complete, { opacity: 0 });
    timeline.to(
      stroke,
      { attr: { "stroke-dashoffset": 0 }, duration, ease: "sine.inOut" },
      at,
    );
    timeline.to(
      complete,
      { opacity: 1, duration: 0.12, ease: "sine.inOut" },
      at + duration - 0.1,
    );
  };

  switch (section.id) {
    case "what-we-saw": {
      const ward = (name: string) =>
        section.querySelector<HTMLElement>(`[data-ward="${name}"]`);
      camera({ scale: 1.02 }, { scale: 1.005 });
      timeline.fromTo(
        ward("original-3"),
        { x: 36 * distance },
        { x: 0, duration: 0.34, ease: HOME_EASE },
        0.04,
      );
      [
        ["original-2", "patient", 0.42],
        ["original-3", "clinician", 0.64],
      ].forEach(([before, after, at]) => {
        timeline.to(
          ward(String(before)),
          { opacity: 0, duration: 0.18, ease: HOME_EASE },
          Number(at),
        );
        timeline.fromTo(
          ward(String(after)),
          { opacity: 0, y: 5 * distance },
          { opacity: 1, y: 0, duration: 0.2, ease: HOME_EASE },
          Number(at),
        );
      });
      timeline.fromTo(
        ward("question"),
        { opacity: 0, scale: 0.94, y: 8 * distance },
        { opacity: 1, scale: 1, y: 0, duration: 0.22, ease: HOME_EASE },
        0.82,
      );
      timeline.fromTo(
        ward("ellipsis"),
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.13, ease: HOME_EASE },
        0.89,
      );
      break;
    }
    case "why-tnbc": {
      camera({ scale: 1.018 }, { scale: 1.006 });
      timeline.fromTo(
        section.querySelectorAll("[data-map-copy]"),
        {
          opacity: (index: number) => (index < 3 ? 0.72 : 0),
          y: 16 * distance,
        },
        { opacity: 1, y: 0, duration: 0.2, stagger: 0.04, ease: HOME_EASE },
        0,
      );
      section.querySelectorAll("[data-map-marker]").forEach((marker, index) => {
        timeline.fromTo(
          marker,
          { opacity: 0, scale: 0.65, y: -24 * distance },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.11,
            ease: "back.out(1.35)",
          },
          0.23 + index * 0.115,
        );
      });
      break;
    }
    case "clinical-challenge": {
      camera({ scale: 1.02 }, { scale: 1.008 });
      move(
        2,
        { opacity: 0.88, scale: 0.995 },
        { opacity: 1, scale: 1 },
        0,
        0.17,
        HOME_EASE,
      );
      move(
        4,
        { x: -8, opacity: 0.85 },
        { x: 0, opacity: 1 },
        0,
        0.22,
        HOME_EASE,
      );
      const morphKeys = [
        "surgery",
        "chemotherapy",
        "resistance",
        "effects",
        "recurrence",
      ];
      morphKeys.forEach((key, index) => {
        const icon = section.querySelector(`[data-morph-icon="${key}"]`);
        const word = section.querySelector<HTMLElement>(
          `[data-morph-word="${key}"]`,
        );
        const particleBox = section.querySelector<HTMLElement>(
          `[data-morph-particles="${key}"]`,
        );
        const particles = particleBox?.querySelectorAll<HTMLElement>("i");
        if (!icon || !word) return;
        const split = SplitText.create(word, {
          type: "words,chars",
          aria: "hidden",
        });
        splits.push(split);
        const letters = split.chars;
        const at = 0.29 + index * 0.11;
        timeline.set(icon, { opacity: 1 }, 0);
        timeline.to(icon, { opacity: 0, duration: 0.17, ease: HOME_EASE }, at);
        if (particles?.length && particleBox && letters.length) {
          const spreadX = particleBox.clientWidth * 0.4;
          const spreadY = particleBox.clientHeight * 0.34;
          const letterPoint = (particleIndex: number) => {
            const letter =
              letters[
                Math.floor((particleIndex * letters.length) / particles.length)
              ];
            const letterRect = letter.getBoundingClientRect();
            const boxRect = particleBox.getBoundingClientRect();
            return {
              x:
                letterRect.left +
                letterRect.width / 2 -
                boxRect.left -
                boxRect.width / 2 +
                ((particleIndex % 3) - 1) * 2,
              y:
                letterRect.top +
                letterRect.height / 2 -
                boxRect.top -
                boxRect.height / 2,
            };
          };
          timeline.fromTo(
            particles,
            { opacity: 0, scale: 0.35, x: 0, y: 0 },
            {
              opacity: 0.9,
              scale: 1,
              x: (particleIndex: number) => {
                const radius = Math.sqrt(
                  (particleIndex + 0.5) / particles.length,
                );
                return Math.cos(particleIndex * 2.4) * spreadX * radius;
              },
              y: (particleIndex: number) => {
                const radius = Math.sqrt(
                  (particleIndex + 0.5) / particles.length,
                );
                return Math.sin(particleIndex * 2.4) * spreadY * radius;
              },
              duration: 0.12,
              stagger: 0.001,
              ease: "sine.out",
            },
            at,
          );
          timeline.to(
            particles,
            {
              x: (particleIndex: number) => letterPoint(particleIndex).x,
              y: (particleIndex: number) => letterPoint(particleIndex).y,
              scale: 0.65,
              duration: 0.16,
              ease: "sine.inOut",
            },
            at + 0.14,
          );
          timeline.to(
            particles,
            { opacity: 0, scale: 0.35, duration: 0.1 },
            at + 0.27,
          );
        }
        timeline.fromTo(
          word,
          { opacity: 0 },
          { opacity: 1, duration: 0.01 },
          at + 0.22,
        );
        timeline.fromTo(
          letters,
          { opacity: 0, y: 4 * distance },
          {
            opacity: 1,
            y: 0,
            duration: 0.14,
            stagger: 0.008,
            ease: HOME_EASE,
          },
          at + 0.22,
        );
      });
      arrive(3, 0.82, { scale: 0.9, opacity: 0 }, 0.13);
      break;
    }
    case "a-new-direction": {
      camera({ scale: 1.03, xPercent: -0.3 }, { scale: 1.012, xPercent: 0.2 });
      move(
        2,
        { y: 8, scale: 0.99, opacity: 0.78 },
        { y: 0, scale: 1, opacity: 1 },
        0,
        0.35,
        HOME_EASE,
      );
      move(
        5,
        { y: 14, scale: 0.99, opacity: 0.84 },
        { y: 0, scale: 1, opacity: 1 },
        0,
        0.5,
        HOME_EASE,
      );
      arrive(4, 0.08, { x: -14, opacity: 0.5 }, 0.3);
      const question = section.querySelector('[data-vaccine-copy="question"]');
      const answer = section.querySelector('[data-vaccine-copy="answer"]');
      timeline.fromTo(
        question,
        { opacity: 0, y: 10 * distance },
        { opacity: 1, y: 0, duration: 0.2, ease: HOME_EASE },
        0.04,
      );
      arrive(8, 0.18, { y: 8, scale: 0.88, opacity: 0 }, 0.2);
      paint("arrow", 0.36, 0.24);
      arrive(3, 0.52, { x: 12, scale: 0.98, opacity: 0.18 }, 0.26);
      arrive(7, 0.56, { y: 8, scale: 0.86, opacity: 0 }, 0.18);
      timeline.fromTo(
        answer,
        { opacity: 0, y: 12 * distance },
        { opacity: 1, y: 0, duration: 0.22, ease: HOME_EASE },
        0.6,
      );
      break;
    }
    case "why-circrna":
      animateCircRna(section, timeline);
      break;
    case "our-platform": {
      camera({ scale: 1.016 }, { scale: 1.005 });
      move(
        2,
        { opacity: 1, scale: 0.98 },
        { opacity: 1, scale: 1 },
        0,
        0.9,
        HOME_EASE,
      );
      const complete = section.querySelector(".story-paint-complete");
      const core = section.querySelector(".story-paint-core");
      const rays = [...section.querySelectorAll(".story-paint-ray")];
      const platformImage = section.querySelector(
        ".story-painted--platform image",
      );
      if (complete && core && platformImage && rays.length === 4) {
        gsap.set(complete, { opacity: 0 });
        gsap.set(core, { opacity: 0 });
        gsap.set(rays, {
          attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 1 },
        });
        timeline.to(
          core,
          { opacity: 1, duration: 0.18, ease: HOME_EASE },
          0.06,
        );
        rays.forEach((ray) => {
          timeline.to(
            ray,
            {
              attr: { "stroke-dashoffset": 0 },
              duration: 0.25,
              ease: HOME_EASE,
            },
            0.28,
          );
        });
        [4, 5, 6, 3].forEach((number, index) => {
          arrive(
            number,
            0.51 + index * 0.055,
            { opacity: 0, scale: 0.96 },
            0.2,
          );
        });
        ["structure", "mechanism", "beyond", "design"].forEach((key, index) => {
          const note = section.querySelector(`[data-platform-note="${key}"]`);
          timeline.fromTo(
            note,
            { opacity: 0, y: 6 * distance },
            { opacity: 1, y: 0, duration: 0.16, ease: HOME_EASE },
            0.73 + index * 0.055,
          );
        });
        timeline.to(
          complete,
          { opacity: 1, duration: 0.12, ease: "sine.inOut" },
          0.88,
        );
      }
      break;
    }
    case "plug-and-play":
      // Keep the drag surface still; antigen changes belong to the reader.
      break;
    case "beyond-tnbc":
      camera({ scale: 1.025, xPercent: -0.2 }, { scale: 1.006, xPercent: 0 });
      move(
        3,
        { x: -10, y: 0, scale: 1, opacity: 0.55 },
        { x: 0, y: 0, scale: 1, opacity: 1 },
        0.03,
        0.72,
        HOME_EASE,
      );
      move(
        2,
        { x: 18, y: 0, opacity: 0.35 },
        { x: 0, y: 0, opacity: 1 },
        0.2,
        0.6,
        HOME_EASE,
      );
      break;
    case "what-we-hope":
      camera({ scale: 1.025, yPercent: -0.15 }, { scale: 1.006, yPercent: 0 });
      move(
        2,
        { y: 26, scale: 0.985, opacity: 0.6 },
        { y: 0, scale: 1, opacity: 1 },
        0.04,
        0.72,
        HOME_EASE,
      );
      move(
        3,
        { y: -12, scale: 0.985, opacity: 0.55 },
        { y: 0, scale: 1, opacity: 1 },
        0.22,
        0.58,
        HOME_EASE,
      );
      section
        .querySelectorAll<HTMLElement>("[data-hope-card]")
        .forEach((card, index) => {
          timeline.fromTo(
            card,
            { opacity: 0, y: 12 * distance },
            { opacity: 1, y: 0, duration: 0.23, ease: HOME_EASE },
            0.52 + (index % 3) * 0.075,
          );
        });
      break;
  }

  // Normalize the choreography; the parent reserves the completed-frame hold.
  timeline.to({}, { duration: 0.04 }, 0.96);
}

export function useHomeStoryAnimation(root: RefObject<HTMLDivElement | null>) {
  useGSAP(
    () => {
      gsap.set(root.current, { "--home-scroll-scale": 1 + HOME_REST_RATIO });
      const media = gsap.matchMedia();
      const buildTimelines = (compact: boolean) => {
        const timelines = new Map<string, gsap.core.Timeline>();
        const splits: ReturnType<typeof SplitText.create>[] = [];
        const cleanups: (() => void)[] = [];
        let debugMotion: Window["__homeMotion"];
        root.current?.classList.add("has-story-motion");
        root.current
          ?.querySelectorAll<HTMLElement>(".story-chapter")
          .forEach((section) => {
            const stage = section.querySelector<HTMLElement>(
              ".story-chapter-inner",
            );
            const track =
              section.querySelector<HTMLElement>(".story-scene-track");
            const visual = section.querySelector<HTMLElement>(".story-visual");
            if (!stage || !track || !visual) return;
            const stackedVaccine = compact && section.id === "a-new-direction";
            const timeline = gsap.timeline({
              defaults: { ease: "none" },
              scrollTrigger: {
                trigger: track,
                start: () =>
                  stackedVaccine
                    ? "top 80%"
                    : `top top+=${Number.parseFloat(getComputedStyle(stage).top) || 0}`,
                end: () =>
                  stackedVaccine
                    ? "bottom bottom"
                    : `bottom top+=${stage.offsetHeight + (Number.parseFloat(getComputedStyle(stage).top) || 0)}`,
                scrub: compact ? 0.42 : HOME_SCRUB,
                invalidateOnRefresh: true,
                // CROSS-FILE: home-antigen-switch.css reads .is-current.
                onToggle: ({ isActive }) =>
                  section.classList.toggle("is-current", isActive),
              },
            });
            // Keep the illustration visible on entry; the layer choreography
            // begins while its contrast is still settling.
            timeline.fromTo(
              visual,
              { opacity: 0.86 },
              {
                opacity: 1,
                duration: ART_REVEAL_DURATION,
                ease: "sine.inOut",
              },
              0,
            );
            const artworkTimeline = gsap.timeline({
              defaults: { ease: "none" },
            });
            choreographArt(section, artworkTimeline, compact, splits);
            timeline.add(artworkTimeline, ARTWORK_START);

            if (stackedVaccine) {
              // This mobile composition is taller than the viewport. Let it
              // scroll through, then hold its fully revealed ending in view.
              ScrollTrigger.create({
                id: `home-${section.id}-hold`,
                trigger: stage,
                start: "bottom bottom",
                end: () => `+=${Math.round(window.innerHeight * 0.45)}`,
                pin: true,
              });
            } else {
              timeline.to({}, {
                duration: timeline.duration() * HOME_REST_RATIO,
              });
            }
            timelines.set(section.id, timeline);

            const copy = section.querySelector<HTMLElement>(".story-copy");
            if (copy) {
              // Full-height copy gets its own reading beat. For taller copy,
              // bottom/bottom lets every line scroll into view before pinning.
              ScrollTrigger.create({
                id: `home-${section.id}-reading`,
                trigger: copy,
                start: "bottom bottom",
                end: () => `+=${Math.round(window.innerHeight * (compact ? 0.4 : 0.6))}`,
                pin: true,
              });
            }
          });

        // Hope light: the warm glow at the patient's heart (scene 9) lifts
        // out of the artwork and settles as the overhead light of its copy.
        // Both ends move while scrolling, so rects are read live every
        // update, as in the finale carry below.
        const hope = root.current?.querySelector<HTMLElement>("#what-we-hope");
        const hopeArt = timelines.get("what-we-hope")?.scrollTrigger;
        const hopeReading = ScrollTrigger.getById("home-what-we-hope-reading");
        const hopeFigure = hope?.querySelector<HTMLElement>(".story-art--9");
        const heart = hopeFigure?.querySelector<HTMLElement>('[data-layer="3"]');
        const hopeCopy = hope?.querySelector<HTMLElement>(".story-copy");
        const hopeTitle = hopeCopy?.querySelector<HTMLElement>("h2");
        if (hope && hopeArt && hopeReading && hopeFigure && heart && hopeCopy && hopeTitle) {
          const frame = document.createElement("div");
          frame.className = "story-hope-light";
          frame.setAttribute("aria-hidden", "true");
          const light = document.createElement("span");
          frame.append(light);
          hope.append(frame);
          cleanups.push(() => {
            frame.remove();
            gsap.set([hopeFigure, hopeTitle], { clearProps: "opacity,color" });
          });
          const clamp = gsap.utils.clamp(0, 1);
          const glide = gsap.parseEase("sine.inOut");
          const bloom = gsap.parseEase("sine.out");
          const ink = gsap.utils.interpolate(
            getComputedStyle(hopeTitle).color,
            HOPE_LIT_INK,
          );
          const placeLight = (self: ScrollTrigger) => {
            // 0 → 1 from lift-off to the copy's reading pin; afterwards the
            // light stays on the copy's top edge and scrolls away with it.
            const t = clamp(
              (self.scroll() - self.start) / (hopeReading.start - self.start || 1),
            );
            const frameTop = frame.getBoundingClientRect().top;
            const copy = hopeCopy.getBoundingClientRect();
            const shown =
              self.progress > 0 && self.progress < 1 && t > 0 && copy.bottom > frameTop;
            frame.style.visibility = shown ? "visible" : "hidden";
            frame.classList.toggle("is-lit", shown && t >= 1);
            gsap.set(hopeFigure, { opacity: 1 - 0.5 * clamp(t / 0.6) });
            gsap.set(hopeTitle, { color: ink(clamp((t - 0.55) / 0.45)) });
            if (!shown) return;
            const p = glide(t);
            const from = heart.getBoundingClientRect();
            const glow = from.width * HOPE_GLOW_SCALE;
            const width = gsap.utils.interpolate(glow, copy.width * 1.5, p);
            const height = gsap.utils.interpolate(
              glow,
              Math.min(copy.height, window.innerHeight) * 1.1,
              p,
            );
            const x = gsap.utils.interpolate(
              from.left + from.width / 2,
              copy.left + copy.width / 2,
              p,
            );
            // Aim for the top of the viewport until the copy's own top edge
            // rises past it, so the light only ever travels upwards.
            const y = gsap.utils.interpolate(
              from.top + from.height * HOPE_HEART_Y,
              Math.min(frameTop, copy.top),
              p,
            );
            gsap.set(light, {
              x: x - HOPE_LIGHT_SIZE / 2,
              y: y - frameTop - HOPE_LIGHT_SIZE / 2,
              scaleX: width / HOPE_LIGHT_SIZE,
              scaleY: height / HOPE_LIGHT_SIZE,
              opacity: bloom(clamp(t / 0.3)),
            });
          };
          ScrollTrigger.create({
            id: "home-hope-light",
            trigger: hope,
            // Lift off while the art is still held, then follow the copy
            // until it has scrolled out after its reading pin.
            start: () => hopeArt.end - window.innerHeight * 0.18,
            end: () => hopeReading.end + window.innerHeight,
            onUpdate: placeLight,
            onRefresh: placeLight,
          });
        }

        // CROSS-FILE: id owned by HomeFinale.tsx; Navbar.tsx reads it too.
        const finale = root.current?.querySelector<HTMLElement>("#home-finale");
        if (finale) {
          const pick = (name: string) =>
            finale.querySelector<HTMLElement>(`[data-finale="${name}"]`);
          const ring = pick("ring");
          const glow = pick("glow");
          const fold = pick("fold");
          const name = pick("name");
          const accent = pick("accent");
          const possibilities = pick("possibilities");
          const stroke = ring?.querySelector(".story-paint-stroke");
          const complete = ring?.querySelector(".story-paint-complete");
          const copy = (part: string) =>
            finale.querySelector<HTMLElement>(`[data-final-copy="${part}"]`);
          const title = copy("title");
          const tagline = copy("tagline");
          // CROSS-FILE: source is the last line of #what-we-hope in
          // home-story.tsx; target is the kicker in HomeFinale.tsx.
          const carrySource = root.current?.querySelector<HTMLElement>(
            '[data-final-carry="source"]',
          );
          const carryTarget = finale.querySelector<HTMLElement>(
            '[data-final-carry="target"]',
          );

          // 2. Pinned finale, scrubbed: "the question behind" folds away so the
          //    flanks close in on "That is CirCure." (centred text does the
          //    drawing together), the name glows as they meet, then the
          //    statement, its light pass and the tagline follow while the
          //    "Why circRNA?" ring paints itself closed behind them.
          const evolve = gsap.timeline({ defaults: { ease: "none" } });
          if (fold) {
            evolve.fromTo(
              fold,
              {
                width: () => fold.scrollWidth,
                opacity: 1,
                filter: "blur(0px)",
                "--feather": 0,
              },
              {
                width: 0,
                opacity: 0,
                filter: "blur(4px)",
                "--feather": 1,
                duration: 0.2,
                ease: HOME_EASE,
              },
              0.04,
            );
          }
          if (name) {
            evolve
              .fromTo(name, { "--merge": 0 }, { "--merge": 1, duration: 0.06 }, 0.2)
              .to(name, { "--merge": 0.25, duration: 0.14, ease: "sine.out" }, 0.26);
          }
          if (title) {
            evolve.fromTo(
              title,
              { autoAlpha: 0, y: compact ? 10 : 18, filter: "blur(6px)" },
              { autoAlpha: 1, y: 0, filter: "blur(0px)", duration: 0.16, ease: HOME_EASE },
              0.3,
            );
          }
          if (accent) {
            evolve.fromTo(
              accent,
              { "--shine": "100%" },
              { "--shine": "0%", duration: 0.26, ease: "sine.inOut" },
              0.42,
            );
          }
          if (tagline) {
            evolve.fromTo(
              tagline,
              { autoAlpha: 0, y: compact ? 8 : 12 },
              { autoAlpha: 1, y: 0, duration: 0.14, ease: HOME_EASE },
              0.52,
            );
          }
          if (ring && stroke && complete) {
            gsap.set(stroke, {
              attr: { "stroke-dasharray": "1 1", "stroke-dashoffset": 1 },
            });
            gsap.set(complete, { opacity: 0 });
            evolve.fromTo(
              ring,
              { rotation: -24, scale: 0.9, opacity: 0.1 },
              { rotation: 12, scale: 1, opacity: compact ? 0.16 : 0.2, duration: 0.66 },
              0.3,
            );
            evolve.to(
              stroke,
              { attr: { "stroke-dashoffset": 0 }, duration: 0.46, ease: HOME_EASE },
              0.3,
            );
            evolve.to(complete, { opacity: 1, duration: 0.08 }, 0.72);
          }
          if (glow) {
            evolve.fromTo(glow, { opacity: 0.35 }, { opacity: 0.9, duration: 0.5 }, 0.3);
          }
          if (possibilities) {
            evolve.fromTo(
              possibilities,
              { "--underline": 0 },
              { "--underline": 1, duration: 0.14, ease: HOME_EASE },
              0.74,
            );
          }
          // Hold the finished frame for the last stretch of the pin.
          evolve.to({}, { duration: 0.08 }, 0.92);

          const finaleTrigger = ScrollTrigger.create({
            id: "home-finale-reading",
            trigger: finale,
            start: () => {
              const headerHeight = Number.parseFloat(
                getComputedStyle(finale).getPropertyValue("--header-height"),
              ) || 0;
              return finale.offsetHeight > window.innerHeight - headerHeight + 1
                ? "bottom bottom"
                : `top top+=${headerHeight}`;
            },
            end: () => `+=${Math.round(window.innerHeight * (compact ? 1 : 1.3))}`,
            pin: true,
            animation: evolve,
            scrub: compact ? 0.42 : HOME_SCRUB,
            // The fold's start width is re-measured after font or size changes.
            invalidateOnRefresh: true,
          });

          // 1. Carry: between the "What we hope" reading pin and the finale
          //    pin, a clone of the kicker follows the scroll from the scene 9
          //    line to its place in the finale, shrinking from that line's
          //    width to the kicker's. Rects are read live every update, so
          //    resizes and fast scrolls cannot leave it off target. Created
          //    after both pins so their layout is already applied.
          const hopePin = ScrollTrigger.getById("home-what-we-hope-reading");
          if (carrySource && carryTarget && hopePin) {
            const ghost = document.createElement("span");
            ghost.className = "story-final-carry";
            ghost.setAttribute("aria-hidden", "true");
            ghost.append(carryTarget.cloneNode(true));
            // The clone keeps the full sentence at its natural width: drop
            // inline motion styles copied from the kicker (fold width etc.).
            ghost
              .querySelectorAll("[style]")
              .forEach((node) => node.removeAttribute("style"));
            finale.after(ghost);
            cleanups.push(() => ghost.remove());
            const glide = gsap.parseEase("sine.inOut");
            const place = ({ progress, start, end, scroll }: ScrollTrigger) => {
              const travelling = progress > 0 && progress < 1;
              carrySource.style.visibility = progress > 0 ? "hidden" : "";
              carryTarget.style.visibility = progress < 1 ? "hidden" : "";
              ghost.style.visibility = travelling ? "visible" : "hidden";
              if (!travelling) return;
              // Where the line sat when the carry began, and where the kicker
              // will sit once the finale pins: interpolating those (in page
              // terms) glides the clone steadily down the page as it scrolls.
              const now = scroll();
              const from = carrySource.getBoundingClientRect();
              const to = carryTarget.getBoundingClientRect();
              const fromTop = from.top + (now - start);
              const toTop = to.top - (end - now);
              const p = glide(progress);
              const scale = gsap.utils.interpolate(
                from.width / ghost.offsetWidth,
                to.width / ghost.offsetWidth,
                p,
              );
              const y = gsap.utils.interpolate(
                fromTop + from.height / 2,
                toTop + to.height / 2,
                p,
              );
              gsap.set(ghost, {
                x: gsap.utils.interpolate(from.left, to.left, p),
                y: y - (ghost.offsetHeight * scale) / 2,
                scale,
              });
            };
            ScrollTrigger.create({
              id: "home-finale-carry",
              trigger: finale,
              start: () => hopePin.end,
              end: () => finaleTrigger.start,
              onUpdate: place,
              onRefresh: place,
            });
            cleanups.push(() => {
              carrySource.style.visibility = "";
              carryTarget.style.visibility = "";
            });
          }
        }

        if (import.meta.env.DEV) {
          debugMotion = {
            seek(id, progress) {
              const timeline = timelines.get(id);
              const trigger = timeline?.scrollTrigger;
              if (!timeline || !trigger) return;
              const p = gsap.utils.clamp(0, 1, progress);
              window.scrollTo({
                top: trigger.start + (trigger.end - trigger.start) * p,
                behavior: "instant",
              });
              ScrollTrigger.update();
              trigger.getTween()?.progress(1);
              timeline.progress(p);
            },
            state: () =>
              [...timelines].map(([id, timeline]) => ({
                id,
                progress: timeline.progress(),
              })),
          };
          window.__homeMotion = debugMotion;
        }

        return () => {
          splits.forEach((split) => split.revert());
          cleanups.forEach((cleanup) => cleanup());
          if (window.__homeMotion === debugMotion) {
            delete window.__homeMotion;
          }
          root.current?.classList.remove("has-story-motion");
        };
      };

      media.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 801px)",
        () => buildTimelines(false),
      );
      media.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 800px)",
        () => buildTimelines(true),
      );
      // Reading panels depend on the final font metrics, including on reload.
      let active = true;
      document.fonts.ready.then(() => {
        if (active) ScrollTrigger.refresh();
      });
      return () => {
        active = false;
        media.revert();
      };
    },
    { scope: root },
  );
}
