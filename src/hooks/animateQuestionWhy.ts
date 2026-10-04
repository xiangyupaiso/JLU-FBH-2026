import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_SCRUB } from "./homeMotion";
import {
  createQuestionInk,
  THOUGHT_INK_PATH,
  QUESTION_HEADING_PARTS,
  headingPartOpacity,
} from "./questionInk";

const clamp = gsap.utils.clamp(0, 1);
const smooth = (from: number, to: number, value: number) => {
  const t = clamp((value - from) / (to - from));
  return t * t * (3 - 2 * t);
};
const svgNamespace = "http://www.w3.org/2000/svg";
type MediaEvent = "matchMediaInit" | "matchMedia";
// These lifecycle methods exist in the bundled GSAP runtime; its typings omit them.
const mediaEvents = gsap as typeof gsap & {
  addEventListener: (event: MediaEvent, callback: () => void) => void;
  removeEventListener: (event: MediaEvent, callback: () => void) => void;
};

/** Keep the camera still while the thought becomes the next chapter's question.
 * The sprites are windows into the original paintings, with no extra artwork. */
export function animateQuestionWhy(
  root: HTMLElement,
  thinkingTimeline: gsap.core.Timeline,
  rnaTimeline: gsap.core.Timeline,
  compact: boolean,
) {
  const thinking = root.querySelector<HTMLElement>("#a-new-direction");
  const rna = root.querySelector<HTMLElement>("#why-circrna");
  const source = root.querySelector<HTMLElement>(".story-clinical-stage");
  const destination =
    root.querySelector<HTMLElement>(".story-rna-sequence-stage") ??
    rna?.querySelector<HTMLElement>(".story-chapter-inner");
  const bubble = thinking?.querySelector<HTMLImageElement>('[data-layer="8"]');
  const heading = rna?.querySelector<SVGSVGElement>(".circrna-heading-art");
  const from = thinkingTimeline.scrollTrigger;
  const to = rnaTimeline.scrollTrigger;
  if (
    !thinking ||
    !rna ||
    !source ||
    !destination ||
    !bubble ||
    !heading ||
    !from ||
    !to
  ) {
    return () => {};
  }

  const frame = document.createElement("div");
  frame.className = "story-question-transition";
  frame.setAttribute("aria-hidden", "true");
  const sprite = document.createElement("div");
  sprite.className = "story-question-sprite";
  sprite.setAttribute("aria-hidden", "true");
  const sourceGlyph = document.createElementNS(svgNamespace, "svg");
  sourceGlyph.setAttribute("viewBox", "62 38 82 112");
  sourceGlyph.setAttribute("preserveAspectRatio", "none");
  const defs = document.createElementNS(svgNamespace, "defs");
  const clip = document.createElementNS(svgNamespace, "clipPath");
  const clipId = `thought-ink-${root.id || "home"}`;
  clip.id = clipId;
  const silhouette = document.createElementNS(svgNamespace, "path");
  // A loose silhouette removes the white cloud while retaining the blue
  // watercolor edges of the supplied 208 x 253 question and its dot.
  silhouette.setAttribute("d", THOUGHT_INK_PATH);
  clip.append(silhouette);
  defs.append(clip);
  const image = document.createElementNS(svgNamespace, "image");
  image.setAttribute("href", bubble.src);
  image.setAttribute("width", "208");
  image.setAttribute("height", "253");
  image.setAttribute("clip-path", `url(#${clipId})`);
  sourceGlyph.append(defs, image);
  const targetUrl = heading.querySelector("image")!.href.baseVal;
  const targetGlyph = document.createElementNS(svgNamespace, "svg");
  targetGlyph.setAttribute("viewBox", "0 0 824 136");
  targetGlyph.setAttribute("preserveAspectRatio", "none");
  const targetParts = QUESTION_HEADING_PARTS.map(({ start, end, name }) => {
    const part = document.createElementNS(svgNamespace, "svg");
    part.dataset.questionTitlePart = name;
    part.setAttribute("x", String(start));
    part.setAttribute("width", String(end - start));
    part.setAttribute("height", "136");
    part.setAttribute("viewBox", `${start} 0 ${end - start} 136`);
    part.setAttribute("overflow", "hidden");
    const artwork = document.createElementNS(svgNamespace, "image");
    artwork.setAttribute("href", targetUrl);
    artwork.setAttribute("width", "824");
    artwork.setAttribute("height", "136");
    part.append(artwork);
    targetGlyph.append(part);
    return part;
  });
  sprite.append(sourceGlyph, targetGlyph);
  root.append(frame, sprite);

  const stages = [source, destination];
  const originalOpacity = stages.map((stage) => stage.style.opacity);
  const headingVisibility = heading.style.visibility;
  const background = gsap.utils.interpolate(
    getComputedStyle(thinking).getPropertyValue("--chapter-bg").trim(),
    getComputedStyle(rna).getPropertyValue("--chapter-bg").trim(),
  );
  const state = { progress: 0 };
  let disposed = false;
  let fixed = false;
  let geometry = { sx: 0, sy: 0, sw: 1, sh: 1, dx: 0, dy: 0, dw: 1, dh: 1 };
  const measure = () => {
    const a = bubble.getBoundingClientRect();
    // Nested SVG image bounds include pixels outside its clipped viewport.
    // Transform the actual viewport corners instead of using its image bbox.
    const matrix = heading.getScreenCTM();
    if (!matrix) return;
    const start = new DOMPoint(0, 0).matrixTransform(matrix);
    const end = new DOMPoint(824, 136).matrixTransform(matrix);
    geometry = {
      sx: a.left + a.width * (103 / 208),
      sy: a.top + a.height * (94 / 253),
      sw: a.width * (82 / 208),
      sh: a.height * (112 / 253),
      dx: (start.x + end.x) / 2,
      dy: (start.y + end.y) / 2,
      dw: end.x - start.x,
      dh: end.y - start.y,
    };
    sprite.style.width = `${geometry.dw}px`;
    sprite.style.height = `${geometry.dh}px`;
  };
  const setFixed = (active: boolean) => {
    if (fixed === active) return;
    fixed = active;
    stages.forEach((stage) =>
      stage.classList.toggle("is-question-carried", active),
    );
    if (active) {
      // An abrupt scroll may reach the bridge before the parent scrubs settle.
      // Measure the completed thought and current destination frame together.
      from.getTween()?.progress(1);
      to.getTween()?.progress(1);
      measure();
    } else {
      stages.forEach((stage, index) => {
        stage.style.opacity = originalOpacity[index];
      });
      heading.style.visibility = headingVisibility;
    }
  };
  const ink = createQuestionInk(root, bubble, targetUrl, compact, () => draw());
  const draw = () => {
    if (disposed) return;
    const p = state.progress;
    const active = p > 0 && p < 1;
    setFixed(active);
    frame.style.visibility = active ? "visible" : "hidden";
    sprite.style.visibility = active ? "visible" : "hidden";
    frame.dataset.progress = p.toFixed(3);
    frame.dataset.phase =
      p < 0.18 ? "thought" : p < 0.7 ? "ink-flight" : "gather";
    const particlesReady = ink.render(p, geometry, active);
    if (!active) return;
    const { sx, sy, sw, sh, dx, dy, dw, dh } = geometry;
    frame.style.backgroundColor = background(smooth(0.2, 0.78, p));
    source.style.opacity = String(1 - smooth(0.26, 0.64, p));
    destination.style.opacity = String(smooth(0.28, 0.8, p));
    destination.style.setProperty(
      "--question-paper-opacity",
      String(smooth(0.72, 0.98, p)),
    );
    destination.style.setProperty(
      "--question-ring-opacity",
      String(smooth(0.78, 0.98, p)),
    );
    // CSS overrides only while carried; the clinical timeline retains its
    // own opacity so fast reverse scrolling restores the correct source frame.
    source.style.setProperty(
      "--question-bubble-opacity",
      String(1 - smooth(0.08, 0.22, p)),
    );
    heading.style.visibility = "hidden";
    // Keep both original endpoints still while the pigment fans into all
    // three title regions. Only the sampled grains travel between them.
    sprite.style.width = "100%";
    sprite.style.height = "100svh";
    sprite.style.transform = "none";
    sprite.style.opacity = "1";
    Object.assign(sourceGlyph.style, {
      left: `${sx - sw / 2}px`,
      top: `${sy - sh / 2}px`,
      width: `${sw}px`,
      height: `${sh}px`,
    });
    Object.assign(targetGlyph.style, {
      left: `${dx - dw / 2}px`,
      top: `${dy - dh / 2}px`,
      width: `${dw}px`,
      height: `${dh}px`,
    });
    sourceGlyph.style.opacity = String(
      smooth(0.08, 0.22, p) * (1 - smooth(0.12, particlesReady ? 0.3 : 0.5, p)),
    );
    targetParts.forEach((part, group) => {
      part.style.opacity = String(
        particlesReady ? headingPartOpacity(group, p) : smooth(0.64, 0.99, p),
      );
    });
  };
  const timeline = gsap.timeline({
    scrollTrigger: {
      id: "home-question-why-carry",
      trigger: destination.parentElement!,
      start: () => from.end - window.innerHeight * 0.28,
      // The next shared timeline starts with a one-second circRNA reveal.
      // Finish inside that reveal, well before its ring-to-platform handoff.
      end: () =>
        to.start + (to.end - to.start) * (0.3 / rnaTimeline.duration()),
      scrub: compact ? 0.42 : HOME_SCRUB,
      invalidateOnRefresh: true,
    },
  });
  timeline.fromTo(
    state,
    { progress: 0 },
    { progress: 1, duration: 1, ease: "none", onUpdate: draw },
  );
  const beforeRefresh = () => setFixed(false);
  const refresh = () => {
    frame.dataset.scrollStart = String(timeline.scrollTrigger!.start);
    frame.dataset.scrollEnd = String(timeline.scrollTrigger!.end);
    draw();
    if (fixed) measure();
    draw();
  };
  ScrollTrigger.addEventListener("refreshInit", beforeRefresh);
  ScrollTrigger.addEventListener("refresh", refresh);
  // MatchMedia reverts its pins before the ordinary resize callback runs.
  // Keep this bridge's reading position across that automatic rebuild too.
  const rememberMediaPosition = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      delete root.dataset.questionCarryProgress;
      return;
    }
    // ScrollTrigger's earlier listener has already reverted its triggers.
    // The last painted frame still records the reader's visual position.
    const progress = Number.parseFloat(frame.dataset.progress ?? "");
    if (progress > 0 && progress < 1) {
      root.dataset.questionCarryProgress = String(progress);
    }
  };
  const resumeMediaPosition = () => {
    const progress = Number.parseFloat(
      root.dataset.questionCarryProgress ?? "",
    );
    const trigger = timeline.scrollTrigger;
    if (!Number.isFinite(progress) || !trigger) return;
    delete root.dataset.questionCarryProgress;
    window.scrollTo({
      top: trigger.start + (trigger.end - trigger.start) * progress,
      behavior: "instant",
    });
    ScrollTrigger.update();
    trigger.getTween()?.progress(1);
  };
  mediaEvents.addEventListener("matchMediaInit", rememberMediaPosition);
  mediaEvents.addEventListener("matchMedia", resumeMediaPosition);
  refresh();
  return () => {
    disposed = true;
    ScrollTrigger.removeEventListener("refreshInit", beforeRefresh);
    ScrollTrigger.removeEventListener("refresh", refresh);
    mediaEvents.removeEventListener("matchMediaInit", rememberMediaPosition);
    mediaEvents.removeEventListener("matchMedia", resumeMediaPosition);
    timeline.scrollTrigger?.kill();
    timeline.kill();
    ink.dispose();
    setFixed(false);
    source.style.removeProperty("--question-bubble-opacity");
    ["--question-paper-opacity", "--question-ring-opacity"].forEach((name) =>
      destination.style.removeProperty(name),
    );
    frame.remove();
    sprite.remove();
  };
}
