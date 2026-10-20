import {
  SVG_NS,
  gesture,
  blink,
  createPaintedClinician,
} from "./paintedClinicianMotion";

const BLINK_TIMES = [2.2, 5.6, 9.2, 12.4, 15.9, 19.4, 22.8];

/** Articulate the existing painting without moving the particle source image.
 * Clip boundaries overlap inside the collar, sleeve and coat hem. */
export function createNurseMotion(source: HTMLImageElement) {
  return createPaintedClinician(
    source,
    "nurse",
    421,
    809,
    ({ svg, defs, id, part }) => {
      const upper = document.createElementNS(SVG_NS, "g");
      part("legs", "0,650 421,650 421,809 0,809", svg);
      svg.append(upper);
      part(
        "body",
        "0,275 270,275 270,384 226,420 216,468 229,504 421,504 421,656 0,656",
        upper,
      );
      const head = part("head", "0,0 270,0 270,280 0,280", upper);
      const face = head.querySelector("image")!;
      face.id = `${id}-face`;
      const feather = document.createElementNS(SVG_NS, "radialGradient");
      feather.id = `${id}-eyelid-feather`;
      for (const [offset, color] of [
        ["80%", "white"],
        ["100%", "black"],
      ]) {
        const stop = document.createElementNS(SVG_NS, "stop");
        stop.setAttribute("offset", offset);
        stop.setAttribute("stop-color", color);
        feather.append(stop);
      }
      defs.append(feather);
      const eyes = [98, 178].map((x, index) => {
        const group = document.createElementNS(SVG_NS, "g");
        group.dataset.nurseEye = index === 0 ? "left" : "right";
        group.setAttribute("visibility", "hidden");
        const mask = document.createElementNS(SVG_NS, "mask");
        mask.id = `${id}-eyelid-${index}`;
        mask.setAttribute("maskUnits", "userSpaceOnUse");
        mask.setAttribute("x", String(x - 14));
        mask.setAttribute("y", "177");
        mask.setAttribute("width", "28");
        mask.setAttribute("height", "34");
        const shape = document.createElementNS(SVG_NS, "ellipse");
        shape.setAttribute("cx", String(x));
        shape.setAttribute("cy", "194");
        shape.setAttribute("rx", "14");
        shape.setAttribute("ry", "17");
        shape.setAttribute("fill", `url(#${feather.id})`);
        mask.append(shape);
        const skin = document.createElementNS(SVG_NS, "g");
        skin.setAttribute("mask", `url(#${mask.id})`);
        const patch = document.createElementNS(SVG_NS, "use");
        patch.setAttribute("href", `#${face.id}`);
        // Sample adjacent unmarked skin from the original watercolor face.
        patch.setAttribute(
          "transform",
          `translate(${index === 0 ? -24 : 24} 0)`,
        );
        skin.append(patch);
        const clip = document.createElementNS(SVG_NS, "clipPath");
        clip.id = `${id}-eye-${index}`;
        clip.setAttribute("clipPathUnits", "userSpaceOnUse");
        const eyeShape = shape.cloneNode(false) as SVGEllipseElement;
        eyeShape.setAttribute("rx", "11");
        eyeShape.setAttribute("ry", "14");
        eyeShape.removeAttribute("fill");
        clip.append(eyeShape);
        defs.append(mask, clip);
        const iris = document.createElementNS(SVG_NS, "g");
        const paintedEye = document.createElementNS(SVG_NS, "use");
        paintedEye.setAttribute("href", `#${face.id}`);
        paintedEye.setAttribute("clip-path", `url(#${clip.id})`);
        iris.append(paintedEye);
        group.append(skin, iris);
        head.append(group);
        return { group, iris };
      });
      const arm = part(
        "arm",
        "270,0 421,0 421,504 225,504 210,468 222,420 266,384 266,275 270,275",
        upper,
      );
      return (phase, weight) => {
        const p = phase % 1;
        const point = gesture(p, 0.09, 0.19, 0.37);
        const explain = gesture(p, 0.56, 0.68, 0.91);
        const nod = gesture(p, 0.14, 0.24, 0.41);
        head.setAttribute(
          "transform",
          `rotate(${(nod * 2.6 - explain * 1.4) * weight} 134 276)`,
        );
        arm.setAttribute(
          "transform",
          `rotate(${(-point * 6 + explain * 3.5) * weight} 224 465)`,
        );
        // Unequal gaps of 3.2–3.6 seconds keep the more visible blink natural.
        const time = phase * 12;
        const closure =
          BLINK_TIMES.reduce(
            (value, at) => Math.max(value, blink(time, at)),
            0,
          ) * weight;
        for (const { group, iris } of eyes) {
          group.setAttribute(
            "visibility",
            closure > 0.0001 ? "visible" : "hidden",
          );
          iris.setAttribute(
            "transform",
            `translate(0 194) scale(1 ${1 - closure * 0.92}) translate(0 -194)`,
          );
        }
      };
    },
  );
}
