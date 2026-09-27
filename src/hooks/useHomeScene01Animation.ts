import { type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { HOME_EASE, HOME_SCRUB } from "./homeMotion";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface HomeScene01AnimationRefs {
  root: RefObject<HTMLDivElement | null>;
  scene: RefObject<HTMLElement | null>;
}

// The portrait is the anchor. Each burden begins slightly farther toward its
// edge, then settles into the supplied composition as the shared camera recedes.
const DEPTHS = [
  { key: "anxiety", x: 0, y: -66, at: 0.43 },
  { key: "surgery", x: -72, y: -26, at: 0.47 },
  { key: "hair-loss", x: 72, y: -26, at: 0.51 },
  { key: "chemotherapy", x: -58, y: 50, at: 0.55 },
  { key: "death-rate", x: 58, y: 50, at: 0.59 },
] as const;

export function useHomeScene01Animation({
  root,
  scene,
}: HomeScene01AnimationRefs) {
  useGSAP(
    () => {
      const section = scene.current;
      if (!section) return;
      const stage = section.querySelector<HTMLElement>(".scene01-stage");
      const canvas = section.querySelector<HTMLElement>(".home-scene01-canvas");
      if (!stage || !canvas) return;
      const media = gsap.matchMedia();

      const buildTimeline = (compact: boolean) => {
        const select = gsap.utils.selector(section);
        const distance = compact ? 0.58 : 1;
        section.classList.add("has-scene01-motion");

        const timeline = gsap.timeline({
          defaults: { ease: HOME_EASE },
          scrollTrigger: {
            trigger: section,
            start: () =>
              `top top+=${Number.parseFloat(getComputedStyle(canvas).top) || 0}`,
            end: () =>
              `+=${Math.max(1, section.offsetHeight - canvas.offsetHeight)}`,
            scrub: compact ? 0.42 : HOME_SCRUB,
            invalidateOnRefresh: true,
          },
        });

        // The opening stays dark until scrolling reveals the woman. The
        // surrounding pressures enter only after her silhouette is visible.
        timeline.fromTo(
          stage,
          { scale: compact ? 1.035 : 1.075, transformOrigin: "52% 62%" },
          { scale: 1, duration: 1, ease: "none" },
          0,
        );
        timeline.fromTo(
          select(".scene01-darkness"),
          { opacity: 1 },
          { opacity: 0, duration: 0.3, ease: "none" },
          0.02,
        );
        timeline.fromTo(
          select(".scene01-portrait"),
          { y: 8 * distance, scale: 0.985, opacity: 0 },
          { y: 0, scale: 1, opacity: 1, duration: 0.27 },
          0.1,
        );

        DEPTHS.forEach(({ key, x, y, at }) => {
          timeline.fromTo(
            select(`.scene01-orbit--${key}`),
            {
              x: x * distance,
              y: y * distance,
              scale: 0.975,
              opacity: 0,
            },
            {
              x: 0,
              y: 0,
              scale: 1,
              opacity: 1,
              duration: 0.35,
            },
            at,
          );
          timeline.fromTo(
            select(`.scene01-label--${key}`),
            { opacity: 0 },
            { opacity: 1, duration: 0.22 },
            at + 0.18,
          );
        });

        timeline.fromTo(
          select(".scene01-scroll-cue i"),
          { scaleY: 1, transformOrigin: "top" },
          { scaleY: 0, duration: 0.16 },
          0,
        );
        timeline.fromTo(
          select(".scene01-scroll-cue"),
          { autoAlpha: 1 },
          { autoAlpha: 0, duration: 0.12 },
          0.04,
        );

        return () => section.classList.remove("has-scene01-motion");
      };

      media.add(
        "(prefers-reduced-motion: no-preference) and (min-width: 801px)",
        () => buildTimeline(false),
      );
      media.add(
        "(prefers-reduced-motion: no-preference) and (max-width: 800px)",
        () => buildTimeline(true),
      );
      return () => media.revert();
    },
    { scope: root },
  );
}
