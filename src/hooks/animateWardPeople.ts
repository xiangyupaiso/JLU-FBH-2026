import gsap from "gsap";
import { updateWardInfusionTube } from "./wardInfusionGeometry";

type Registration = {
  anchor: [number, number];
  span: [number, number];
};
type PoseChange = {
  before: string;
  after: string;
  source: Registration;
  target: Registration;
  moveAt: number;
  moveDuration: number;
  changeAt: number;
  changeDuration: number;
  approachX?: number;
  lean?: number;
  fit?: "height";
};

// A quiet start and finish, with no overshoot or change in body proportions.
const settle = (p: number) => p * p * p * (p * (p * 6 - 15) + 10);

/** Keep one continuous shot: move the registered artwork first, then change
 * its expression close to rest. Background action stays behind the patient. */
export function animateWardPeople(
  section: HTMLElement,
  timeline: gsap.core.Timeline,
  compact: boolean,
) {
  const ward = (name: string) =>
    section.querySelector<HTMLElement>('[data-ward="' + name + '"]');
  const tube = (name: string) =>
    section.querySelector<SVGSVGElement>('[data-ward-tube="' + name + '"]');

  const changePose = (pose: PoseChange) => {
    const before = ward(pose.before);
    const after = ward(pose.after);
    if (!before || !after) return;
    const gap = (axis: 0 | 1) => {
      const offset = axis === 0 ? "offsetLeft" : "offsetTop";
      const size = axis === 0 ? "offsetWidth" : "offsetHeight";
      return (
        after[offset] +
        after[size] * pose.target.anchor[axis] -
        before[offset] -
        before[size] * pose.source.anchor[axis]
      );
    };
    const scale = () => {
      const x =
        (after.offsetWidth * pose.target.span[0]) /
        Math.max(1, before.offsetWidth * pose.source.span[0]);
      const y =
        (after.offsetHeight * pose.target.span[1]) /
        Math.max(1, before.offsetHeight * pose.source.span[1]);
      return pose.fit === "height" ? y : Math.sqrt(x * y);
    };
    const origin = (point: Registration) =>
      point.anchor[0] * 100 + "% " + point.anchor[1] * 100 + "%";

    gsap.set(before.parentElement, { isolation: "isolate" });
    // Complementary weights preserve the painted brightness during the short
    // registered dissolve. No travelling mask cuts through a face or a coat.
    gsap.set([before, after], {
      maskImage: "none",
      webkitMaskImage: "none",
      mixBlendMode: "plus-lighter",
    });
    gsap.set(before, { opacity: 1, transformOrigin: origin(pose.source) });
    gsap.set(after, { opacity: 0, transformOrigin: origin(pose.target) });
    if (pose.lean) {
      // Both poses pivot on the same sole anchor. Let the torso finish
      // returning upright just after the final step stops translating.
      timeline.fromTo(
        [before, after],
        { rotation: pose.lean },
        {
          rotation: 0,
          duration: pose.changeAt + pose.changeDuration - pose.moveAt + 0.04,
          ease: settle,
        },
        pose.moveAt,
      );
    }
    timeline.fromTo(
      before,
      { x: pose.approachX ?? 0, y: 0, scale: 1 },
      {
        x: () => gap(0),
        y: () => gap(1),
        scale,
        duration: pose.moveDuration,
        ease: settle,
      },
      pose.moveAt,
    );
    timeline.fromTo(
      after,
      {
        x: () => -gap(0) + (pose.approachX ?? 0),
        y: () => -gap(1),
        scale: () => 1 / scale(),
      },
      {
        x: 0,
        y: 0,
        scale: 1,
        duration: pose.moveDuration,
        ease: settle,
      },
      pose.moveAt,
    );
    timeline.fromTo(
      before,
      { opacity: 1 },
      {
        opacity: 0,
        duration: pose.changeDuration,
        ease: "sine.inOut",
      },
      pose.changeAt,
    );
    timeline.fromTo(
      after,
      { opacity: 0 },
      {
        opacity: 1,
        duration: pose.changeDuration,
        ease: "sine.inOut",
      },
      pose.changeAt,
    );
    if (pose.after === "patient") {
      timeline.fromTo(
        tube(pose.before),
        { opacity: 1 },
        {
          opacity: 0,
          duration: pose.changeDuration,
          ease: "sine.inOut",
        },
        pose.changeAt,
      );
      timeline.fromTo(
        tube(pose.after),
        { opacity: 0 },
        {
          opacity: 1,
          duration: pose.changeDuration,
          ease: "sine.inOut",
        },
        pose.changeAt,
      );
    }
  };

  changePose({
    before: "original-2",
    after: "patient",
    source: { anchor: [226 / 428, 142 / 629], span: [304 / 428, 284 / 629] },
    target: {
      anchor: [855 / 2752, 908 / 2064],
      span: [988 / 2752, 1012 / 2064],
    },
    moveAt: 0.12,
    moveDuration: 0.62,
    changeAt: 0.74,
    changeDuration: 0.12,
  });
  // Register the soles and preserve the whole standing height. The doctor
  // settles in the background while the patient's approach leads attention.
  changePose({
    before: "original-3",
    after: "clinician",
    source: { anchor: [0.5, 1], span: [1, 1] },
    target: {
      anchor: [2140 / 2752, 1863 / 2064],
      span: [593 / 2752, 1631 / 2064],
    },
    fit: "height",
    approachX: -36 * (compact ? 0.64 : 1),
    lean: 0.8,
    moveAt: 0.08,
    moveDuration: 0.32,
    changeAt: 0.34,
    changeDuration: 0.12,
  });
  timeline.fromTo(
    ward("question"),
    { opacity: 0, y: 2 },
    {
      opacity: 1,
      y: 0,
      duration: 0.22,
      ease: "sine.inOut",
    },
    0.9,
  );
  timeline.fromTo(
    ward("ellipsis"),
    { opacity: 0 },
    {
      opacity: 1,
      duration: 0.16,
      ease: "sine.inOut",
    },
    1.14,
  );
  timeline.addLabel("patient-settled", 0.86);
  timeline.addLabel("clinician-settled", 0.5);
  timeline.addLabel("ward-question-readable", 1.3);
  timeline.eventCallback("onUpdate", () => updateWardInfusionTube(section));
  return () => timeline.eventCallback("onUpdate", null);
}
