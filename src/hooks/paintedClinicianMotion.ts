import gsap from "gsap";
import { bindHomeArtwork, homeArtworkSource } from "../utils/homeArtworkSource";

export const SVG_NS = "http://www.w3.org/2000/svg";
let motionId = 0;

// Smooth position, velocity and acceleration at both ends of each gesture.
export const settle = (value: number) => {
  const p = gsap.utils.clamp(0, 1, value);
  return p * p * p * (p * (p * 6 - 15) + 10);
};
export const gesture = (
  phase: number,
  start: number,
  hold: number,
  end: number,
) =>
  settle((phase - start) / (hold - start)) *
  (1 - settle((phase - hold - 0.045) / (end - hold - 0.045)));
// One soft blink: 70 ms close, 20 ms rest, 145 ms open.
export const blink = (time: number, start: number) =>
  settle((time - start) / 0.07) * (1 - settle((time - start - 0.09) / 0.145));

type Painting = {
  svg: SVGSVGElement;
  defs: SVGDefsElement;
  id: string;
  part: (name: string, points: string, parent: SVGElement) => SVGGElement;
};

/** Keep idle articulation separate from the original particle geometry.
 * Own loading, placement, pause and teardown for the painted articulation. */
export function createPaintedClinician(
  source: HTMLImageElement,
  name: "nurse" | "doctor",
  width: number,
  height: number,
  build: (painting: Painting) => (phase: number, weight: number) => void,
) {
  const svg = document.createElementNS(SVG_NS, "svg");
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.classList.add("story-layer");
  svg.setAttribute(`data-${name}-motion`, "");
  svg.style.cssText = source.style.cssText;
  svg.style.overflow = "visible";
  svg.style.visibility = "hidden";
  const defs = document.createElementNS(SVG_NS, "defs");
  svg.append(defs);
  const id = `${name}-motion-${++motionId}`;
  const imageUrl = homeArtworkSource(source);
  const part: Painting["part"] = (partName, points, parent) => {
    const clip = document.createElementNS(SVG_NS, "clipPath");
    clip.id = `${id}-${partName}`;
    clip.setAttribute("clipPathUnits", "userSpaceOnUse");
    const polygon = document.createElementNS(SVG_NS, "polygon");
    polygon.setAttribute("points", points);
    clip.append(polygon);
    defs.append(clip);
    const group = document.createElementNS(SVG_NS, "g");
    group.setAttribute(`data-${name}-part`, partName);
    const image = document.createElementNS(SVG_NS, "image");
    image.setAttribute("width", String(width));
    image.setAttribute("height", String(height));
    image.setAttribute("clip-path", `url(#${clip.id})`);
    image.dataset.homeSrc = imageUrl;
    group.append(image);
    parent.append(group);
    return group;
  };
  const pose = build({ svg, defs, id, part });
  const imageCount = svg.querySelectorAll("image").length;
  source.after(svg);
  const originalVisibility = source.style.visibility;
  const state = { phase: 0, weight: 0 };
  const loaded = new Set<EventTarget>();
  let ready = false;
  const render = () => {
    const active = ready && state.weight > 0;
    source.style.visibility = active ? "hidden" : originalVisibility;
    svg.style.visibility = active ? "visible" : "hidden";
    if (!active) return;
    svg.style.opacity = source.style.opacity;
    svg.style.transform = source.style.transform;
    svg.style.transformOrigin = source.style.transformOrigin;
    svg.style.translate = source.style.translate;
    pose(state.phase, state.weight);
  };
  const onLoad = (event: Event) => {
    if (event.target instanceof SVGImageElement) loaded.add(event.target);
    ready = loaded.size === imageCount;
    if (ready) loop.paused(state.weight === 0);
    render();
  };
  svg.addEventListener("load", onLoad, true);
  const stopArtwork = bindHomeArtwork(source, svg);
  const loop = gsap.to(state, {
    phase: 2,
    duration: 24,
    repeat: -1,
    paused: true,
    ease: "none",
    onUpdate: render,
  });
  return {
    update(weight: number) {
      state.weight = weight;
      loop.paused(weight === 0 || !ready);
      render();
    },
    cleanup() {
      loop.kill();
      stopArtwork();
      svg.removeEventListener("load", onLoad, true);
      source.style.visibility = originalVisibility;
      svg.remove();
    },
  };
}
