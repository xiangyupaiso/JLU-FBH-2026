import gsap from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { MorphSVGPlugin } from "gsap/MorphSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin, MorphSVGPlugin);

export type ReadingBeat = {
  element: HTMLElement;
  at: number;
  duration: number;
  kind: "title" | "receptor" | "challenge";
};

/** Typographic annotations follow the measured words, not a fixed illustration.
 * They resolve before the reading hold, so the final frame stays quiet. */
export function readingAccents(
  copy: HTMLElement, chapter: string, timeline: gsap.core.Timeline, beats: ReadingBeat[],
) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.classList.add("story-reading-accents");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("viewBox", `0 0 ${copy.clientWidth} ${copy.clientHeight}`);
  copy.append(svg);
  const box = copy.getBoundingClientRect();
  const finish = timeline.duration();
  // Measure every annotation in one read phase. Alternating transform writes
  // and Range reads per beat otherwise forces layout once for each underline.
  const tokens = [...new Set(beats.flatMap(beat =>
    [...beat.element.querySelectorAll<HTMLElement>(".story-reading-word")],
  ))];
  const transforms = tokens.map(token => token.style.transform);
  tokens.forEach(token => { token.style.transform = "none"; });
  const measured = beats.map(beat => {
    // Range rects remain useful for an inline <em> wrapping across two lines.
    const range = document.createRange();
    range.selectNodeContents(beat.element);
    const rects = [...range.getClientRects()].filter(r => r.width > 1);
    return { beat, rects };
  });
  tokens.forEach((token, i) => { token.style.transform = transforms[i]; });
  for (const { beat, rects } of measured) {
    if (!rects.length) continue;
    const bottom = Math.max(...rects.map(r => r.bottom));
    const row = rects.filter(r => Math.abs(r.bottom - bottom) < 4);
    const left = Math.min(...row.map(r => r.left)) - box.left;
    const right = Math.max(...row.map(r => r.right)) - box.left;
    const w = right - left;
    const y = bottom - box.top + 6;
    const middle = (left + right) / 2;
    const path = document.createElementNS(ns, "path");
    const line = `M ${left} ${y} C ${left + w * 0.3} ${y + 1} ${right - w * 0.3} ${y + 1} ${right} ${y}`;
    let initial = line;
    let resolved = line;
    let branches: string[] = [];
    if (beat.kind === "receptor") {
      // The stroke separates as each negative receptor is named.
      resolved = `M ${left} ${y} L ${middle - 7} ${y} M ${middle + 7} ${y} L ${right} ${y}`;
    } else if (chapter === "our-platform") {
      initial = `M ${middle - 14} ${y} C ${middle - 14} ${y - 12} ${middle + 14} ${y - 12} ${middle + 14} ${y} C ${middle + 14} ${y + 12} ${middle - 14} ${y + 12} ${middle - 14} ${y}`;
      branches = [-1, 1].map(d => `M ${middle} ${y} C ${middle + d * w * 0.15} ${y + 12} ${middle + d * w * 0.3} ${y + 12} ${middle + d * w * 0.4} ${y + 18}`);
    } else if (chapter === "plug-and-play") {
      initial = `M ${left} ${y} L ${left + w * 0.28} ${y} L ${left + w * 0.28} ${y + 9} L ${left + w * 0.46} ${y + 9} L ${left + w * 0.46} ${y} L ${right} ${y}`;
    }
    path.setAttribute("d", initial);
    svg.append(path);
    timeline.fromTo(path, { drawSVG: "0% 0%", opacity: 0 }, {
      drawSVG: "0% 100%", opacity: 0.65, duration: beat.duration * 0.8, ease: "power2.inOut",
    }, beat.at);
    if (initial !== resolved) timeline.to(path, {
      morphSVG: { shape: resolved, shapeIndex: 0 }, duration: 0.7, ease: "power3.inOut",
    }, beat.at + beat.duration * 0.7);
    branches.forEach((d, index) => {
      const branch = document.createElementNS(ns, "path");
      branch.setAttribute("d", d); svg.append(branch);
      timeline.fromTo(branch, { drawSVG: "0% 0%", opacity: 0 }, {
        drawSVG: "0% 100%", opacity: 0.42, duration: 0.7, ease: "sine.inOut",
      }, beat.at + beat.duration + index * 0.13);
    });
  }
  timeline.to(svg, { opacity: 0, duration: 0.55 }, Math.max(0, finish - 0.55));
  return () => svg.remove();
}
