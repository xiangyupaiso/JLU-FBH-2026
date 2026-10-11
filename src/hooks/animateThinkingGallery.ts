import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isHomeMotionRefreshing, settleHomeScrubEndpoint } from "./homeMotion";
import {
  createThinkingGalleryInk,
  THINKING_PUNCTUATION_CROPS,
  type InkBounds,
} from "./createThinkingGalleryInk";
import "../styles/home-thinking-gallery.css";

const smooth = (start: number, end: number, value: number) => {
  const t = gsap.utils.clamp(0, 1, (value - start) / (end - start));
  return t * t * (3 - 2 * t);
};

/** Clear the scene before its punctuation opens into the next chapter's choices.
 * Local opacity overrides leave the chapter timelines intact for reverse scrolling. */
export function animateThinkingGallery(
  root: HTMLElement,
  intro: gsap.core.Timeline,
  compact: boolean,
) {
  const source = root.querySelector<HTMLElement>(".story-clinical-stage");
  const destination = root.querySelector<HTMLElement>(
    ".home-molecule-gallery__stage",
  );
  const thinking = root.querySelector<HTMLElement>("#a-new-direction");
  const sources = [8, 7].map((layer) =>
    thinking?.querySelector<HTMLImageElement>(`[data-layer="${layer}"]`),
  );
  const cards = Array.from(
    root.querySelectorAll<HTMLElement>("[data-gallery-card]"),
  );
  const clinical = ScrollTrigger.getById("home-clinical-sequence");
  if (
    !source ||
    !destination ||
    !sources[0] ||
    !sources[1] ||
    !clinical ||
    !intro.scrollTrigger
  ) {
    return () => {};
  }
  const images = sources as HTMLImageElement[];
  const wash = document.createElement("div");
  wash.className = "home-thinking-gallery-wash";
  wash.setAttribute("aria-hidden", "true");
  document.body.append(wash);
  const state = { progress: 0 };
  let disposed = false;
  let carried = false;
  let passActive = false;
  let useParticles = false;
  let sourceBounds: InkBounds[] = [];
  let targetBounds: InkBounds[] = [];
  const bounds = (element: Element): InkBounds => {
    const { left, top, width, height } = element.getBoundingClientRect();
    return { left, top, width, height };
  };
  const measure = (progress: number) => {
    const stageBounds = bounds(source);
    // Keep the punctuation in its settled viewport position while the source
    // chapter scrolls away. The same coordinates apply when returning to it.
    const nextSources = images.map((image, index) => {
      const box = bounds(image);
      const settled = { ...box, top: box.top - stageBounds.top };
      // Move the isolated marks into the centre and enlarge them modestly as
      // the scene clears, preserving the original painting's aspect ratio.
      const crop = THINKING_PUNCTUATION_CROPS[index];
      const amount = smooth(0.08, 0.18, progress);
      const scale = (compact ? Math.max(1, 56 / box.width) : 1) * 1.35;
      const width = gsap.utils.interpolate(
        box.width,
        box.width * scale,
        amount,
      );
      const height = gsap.utils.interpolate(
        box.height,
        box.height * scale,
        amount,
      );
      const gap = Math.min(window.innerWidth * 0.12, compact ? 48 : 90);
      const left =
        window.innerWidth / 2 +
        (index === 0 ? -gap : gap) -
        (crop.left + crop.width / 2) * width;
      const top =
        window.innerHeight / 2 - (crop.top + crop.height / 2) * height;
      return {
        left: gsap.utils.interpolate(settled.left, left, amount),
        top: gsap.utils.interpolate(settled.top, top, amount),
        width,
        height,
      };
    });
    // Read the SVG viewport; an image's bounding box includes the whole sheet.
    const nextTargets = cards.map((card) => bounds(card.querySelector("svg")!));
    if (
      ![...nextSources, ...nextTargets].every(
        ({ width, height }) =>
          Number.isFinite(width) &&
          Number.isFinite(height) &&
          width > 0 &&
          height > 0,
      )
    )
      return false;
    sourceBounds = nextSources;
    targetBounds = nextTargets;
    return true;
  };
  const carry = (active: boolean) => {
    if (carried === active) return;
    carried = active;
    source.classList.toggle("is-thinking-gallery-source", active);
    destination.classList.toggle("is-thinking-gallery-target", active);
    if (active) {
      clinical.getTween()?.progress(1);
    }
  };
  const ink = createThinkingGalleryInk(images, cards, compact, () => {
    if (!disposed && !carried) draw();
  });
  const draw = () => {
    if (disposed || isHomeMotionRefreshing()) return;
    const trigger = ScrollTrigger.getById("home-thinking-gallery-carry");
    // A chapter jump must release the ink even during the trailing scrub.
    if (
      trigger &&
      state.progress > 0 &&
      state.progress < 1 &&
      (trigger.scroll() < trigger.start - window.innerHeight * 0.5 ||
        trigger.scroll() > trigger.end + window.innerHeight * 0.5)
    ) {
      trigger.getTween()?.pause();
      trigger.animation?.progress(trigger.scroll() < trigger.start ? 0 : 1);
      return;
    }
    const p = state.progress;
    // Give the centred punctuation a longer still hold. One shared progress
    // keeps the background, ink and destination reveal in the same rhythm.
    const phaseProgress =
      p <= 0.18
        ? p
        : p <= 0.44
          ? gsap.utils.mapRange(0.18, 0.44, 0.18, 0.34, p)
          : gsap.utils.mapRange(0.44, 1, 0.34, 1, p);
    const active = p > 0 && p < 1;
    const entering = active && !passActive;
    passActive = active;
    carry(active && (entering || useParticles));
    wash.style.visibility = active ? "visible" : "hidden";
    wash.dataset.progress = p.toFixed(4);
    wash.dataset.phase =
      phaseProgress < 0.18
        ? "scene-exit"
        : phaseProgress < 0.34
          ? "punctuation"
          : phaseProgress < 0.62
            ? "disperse"
            : phaseProgress < 0.9
              ? "gather"
              : "choices";
    if (!active) {
      ink.render(phaseProgress, sourceBounds, targetBounds, false);
      return;
    }
    // The target stage covers the viewport during the carry, then rejoins its
    // sticky layout at the same position. Measure again after every resize.
    if (!measure(p)) {
      carry(false);
      wash.style.visibility = "hidden";
      ink.render(phaseProgress, sourceBounds, targetBounds, false);
      return;
    }
    const ready = ink.render(
      phaseProgress,
      sourceBounds,
      targetBounds,
      entering || useParticles,
    );
    // Decode arriving halfway through a pass keeps the image dissolve intact.
    if (entering) useParticles = ready;
    if (!useParticles) {
      // Keep the native chapter reveal when image sampling is unavailable;
      // an opaque wash would otherwise cover the only remaining punctuation.
      carry(false);
      wash.style.visibility = "hidden";
      ink.render(phaseProgress, sourceBounds, targetBounds, false);
      return;
    }
    const sceneExit = smooth(0, 0.18, p);
    const color = smooth(0.34, 0.78, phaseProgress);
    wash.style.opacity = String(sceneExit);
    wash.style.backgroundColor = gsap.utils.interpolate(
      "#f0f3fd",
      "#fceeed",
      color,
    );
    source.style.setProperty("--thinking-scene-opacity", String(1 - sceneExit));
    source.style.setProperty(
      "--thinking-cloud-opacity",
      String(1 - smooth(0, 0.08, p)),
    );
    cards.forEach((card, index) => {
      card.style.setProperty(
        "--thinking-card-opacity",
        String(
          smooth(0.62 + index * 0.025, 0.84 + index * 0.025, phaseProgress),
        ),
      );
      card.style.setProperty(
        "--thinking-symbol-opacity",
        String(
          smooth(0.84 + index * 0.018, 0.95 + index * 0.012, phaseProgress),
        ),
      );
      card.style.setProperty(
        "--thinking-label-opacity",
        String(
          smooth(0.89 + index * 0.015, 0.97 + index * 0.01, phaseProgress),
        ),
      );
    });
  };
  const bridge = gsap.timeline({
    scrollTrigger: {
      id: "home-thinking-gallery-carry",
      trigger: destination.parentElement!,
      start: () => clinical.end - window.innerHeight * (compact ? 0.32 : 0.48),
      end: () => {
        const trigger = intro.scrollTrigger!;
        return (
          trigger.start +
          (trigger.end - trigger.start) *
            (intro.labels["choices-visible"] / intro.duration())
        );
      },
      scrub: 0.2,
      invalidateOnRefresh: true,
      onUpdate: settleHomeScrubEndpoint,
      onRefreshInit: () => {
        carry(false);
        wash.style.visibility = "hidden";
        ink.render(state.progress, sourceBounds, targetBounds, false);
      },
    },
  });
  bridge.fromTo(
    state,
    { progress: 0 },
    {
      progress: 1,
      duration: 1,
      ease: "none",
      onUpdate: draw,
    },
  );
  // Per-trigger refresh callbacks run while all pins are temporarily reverted.
  // Read geometry after the global refresh has restored the normal layout.
  ScrollTrigger.addEventListener("refresh", draw);
  draw();
  return () => {
    disposed = true;
    ScrollTrigger.removeEventListener("refresh", draw);
    bridge.scrollTrigger?.kill();
    bridge.kill();
    carry(false);
    source.style.removeProperty("--thinking-scene-opacity");
    source.style.removeProperty("--thinking-cloud-opacity");
    cards.forEach((card) => {
      [
        "--thinking-card-opacity",
        "--thinking-symbol-opacity",
        "--thinking-label-opacity",
      ].forEach((property) => card.style.removeProperty(property));
    });
    ink.dispose();
    wash.remove();
  };
}
