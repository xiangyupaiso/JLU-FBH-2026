import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { measureAntigenTransit, pointOnTransit } from "./useAntigenTransit";

// One clock owns both the illustrations and the explanatory stages.
// These durations explain the sequence, not biological time.
const stageStarts = [0, 0.15, 2.5, 3.85, 4.75, 6.2, 6.85, 7.45];
const finalStage = stageStarts.length - 1;
type ProteinPaths = { growing: string; processed: string; peptide: string };

export function useAntigenMechanism(
  root: RefObject<HTMLDivElement | null>,
  selected: number,
  { growing, processed, peptide }: ProteinPaths,
) {
  const [phase, setPhase] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [run, setRun] = useState(0);
  const timeline = useRef<gsap.core.Timeline | null>(null);
  const reducedMotion = useRef(false);
  const inViewport = useRef(false);
  const activated = useRef(false);

  const stop = useCallback(() => {
    timeline.current?.progress(1).pause();
    setPhase(finalStage);
    setPlaying(false);
  }, []);
  const replay = useCallback(() => {
    activated.current = true;
    setRun((previous) => previous + 1);
  }, []);

  useLayoutEffect(() => {
    const scene = root.current;
    if (!scene) return;
    reducedMotion.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const select = (name: string) =>
      scene.querySelector<SVGGraphicsElement>(`.home-antigen-switch__${name}`)!;
    const all = (name: string) =>
      scene.querySelectorAll<SVGGraphicsElement>(
        `.home-antigen-switch__${name}`,
      );
    const product = select("product-route");
    const tcell = select("tcell");
    const proteins = all("protein");
    const tcellLabel = select("tcell-label");
    let labelSize = parseFloat(
      getComputedStyle(scene).getPropertyValue("--tcell-label-size"),
    );
    tcellLabel.setAttribute("y", selected === 0 ? "63" : "-62");
    tcellLabel.setAttribute("x", selected === 1 ? "-38" : "0");
    const active = scene
      .querySelector(`[data-antigen-contact="${selected}"]`)
      ?.closest(".home-antigen-switch__cell");
    if (!product || !tcell || !active) return;
    let geometry = measureAntigenTransit(scene, selected);
    const motion = {
      travel: 0,
      dock: 0,
      approach: 0,
      migration: 0,
      turn: 0,
      outline: 0,
      growth: 0,
    };
    const growProtein = gsap.utils.interpolate(
      growing.replace(/-?\d+(?:\.\d+)?/g, "0"),
      growing,
    );
    const growingToProcessed = gsap.utils.interpolate(growing, processed);
    const processedToPeptide = gsap.utils.interpolate(processed, peptide);
    const render = () => {
      if (geometry) {
        const route = pointOnTransit(geometry.product, motion.travel);
        const x =
          route.x +
          (geometry.presented.x - geometry.processing.x) * motion.dock;
        const y =
          route.y +
          (geometry.presented.y - geometry.processing.y) * motion.dock;
        const scale = 1 + (geometry.productScale - 1) * motion.travel;
        product.setAttribute(
          "transform",
          `translate(${x} ${y}) rotate(${geometry.productAngle * motion.travel}) scale(${scale})`,
        );
        const position = pointOnTransit(geometry.tcell, motion.migration);
        const tcellScale = 1.1 + (geometry.tcellScale - 1.1) * motion.migration;
        tcell.setAttribute(
          "transform",
          `translate(${position.x + 16 * (1 - motion.approach)} ${position.y + 1 - motion.approach}) scale(${tcellScale})`,
        );
      }
      select("tcr-turn").setAttribute(
        "transform",
        `rotate(${motion.turn * (geometry?.tcellAngle ?? 180)})`,
      );
      select("tcr-outline").setAttribute(
        "transform",
        `rotate(${motion.turn * (geometry?.outlineAngle ?? 90)}) scale(1.4)`,
      );
      tcellLabel.style.fontSize = `${16 + (labelSize - 16) * motion.migration}px`;
      select("cytotoxic-turn").setAttribute(
        "transform",
        `rotate(${(geometry?.tcellAngle ?? 180) - 180})`,
      );
      proteins.forEach((path) =>
        path.setAttribute(
          "d",
          motion.outline === 0
            ? growProtein(motion.growth)
            : motion.outline <= 1
              ? growingToProcessed(motion.outline)
              : processedToPeptide(motion.outline - 1),
        ),
      );
    };
    let lastPhase = -1;
    const syncPhase = () => {
      const time = sequence.time();
      const current = stageStarts.filter((start) => time >= start).length - 1;
      if (current !== lastPhase) {
        lastPhase = current;
        setPhase(current);
      }
      render();
    };
    const sequence = gsap.timeline({
      paused: true,
      defaults: { ease: "power2.inOut" },
      onUpdate: syncPhase,
      onComplete: () => setPlaying(false),
    });
    timeline.current = sequence;
    const zero = { opacity: 0 };
    gsap.set(proteins, {
      ...zero,
      fillOpacity: 0,
      strokeDasharray: "none",
      strokeDashoffset: 0,
    });
    proteins.forEach((path) =>
      gsap.set(path, {
        strokeWidth: path.classList.contains(
          "home-antigen-switch__protein-wash",
        )
          ? 4.5
          : 2.35,
      }),
    );
    gsap.set(tcell, { opacity: 0.78 });
    gsap.set(select("ribosome"), zero);
    gsap.set(
      [
        select("binding-wash"),
        select("priming-contact"),
        select("synapse"),
        select("presented-peptide"),
        ...all("granule"),
        ...all("apoptotic-body"),
        ...all("target-status"),
      ],
      zero,
    );
    gsap.set(select("presenter"), { opacity: 0.65 });
    gsap.set(select("tcell-sub-label"), { opacity: 1 });
    gsap.set(select("tcell-label"), { fontSize: 16 });
    gsap.set(all("cell-response"), { opacity: 0.55, scale: 1 });
    gsap.set(all("tumor-peptide"), { opacity: 0.65 });
    gsap.set(all("flow-in"), {
      opacity: 0.4,
      strokeDasharray: 1,
      strokeDashoffset: 1,
    });
    sequence
      .to(select("ribosome"), { opacity: 1, duration: 0.28 }, 0.15)
      .to(proteins, { opacity: 0.95, duration: 0.25 }, 0.35)
      .to(motion, { growth: 1, duration: 1.15, ease: "sine.out" }, 0.4)
      .to(select("ribosome"), { opacity: 0, duration: 0.42 }, 1.55)
      .to(motion, { travel: 1, duration: 1.15 }, 1.55)
      .to(
        all("flow-in"),
        { strokeDashoffset: 0, opacity: 0.65, duration: 0.6 },
        1.55,
      )
      .to(motion, { outline: 1, duration: 0.4 }, 2.7)
      .to(motion, { outline: 2, duration: 0.38 }, 3.1)
      .to(proteins, { fillOpacity: 1, duration: 0.38 }, 3.1)
      .to(motion, { dock: 1, duration: 0.5 }, 3.4)
      .to(select("presenter"), { opacity: 1, duration: 0.4 }, 3.4)
      .to(select("binding-wash"), { opacity: 0.12, duration: 0.25 }, 3.55)
      .to(proteins, { opacity: 0, duration: 0.24 }, 3.85)
      .to(select("presented-peptide"), { opacity: 1, duration: 0.24 }, 3.85)
      .to(select("binding-wash"), { opacity: 0, duration: 0.4 }, 3.95)
      .to(motion, { approach: 1, duration: 0.4 }, 3.85)
      .to(tcell, { opacity: 1, duration: 0.4 }, 3.85)
      .to(select("priming-contact"), { opacity: 0.28, duration: 0.22 }, 4.2)
      .to(select("priming-contact"), { opacity: 0, duration: 0.32 }, 4.55)
      .to(motion, { turn: 1, duration: 0.85 }, 4.75)
      .to(motion, { migration: 1, duration: 1.45 }, 4.75)
      .to(select("tcell-sub-label"), { opacity: 0, duration: 0.3 }, 4.75)
      .to(select("synapse"), { opacity: 0.5, duration: 0.28 }, 6.2)
      .to(
        active.querySelector(".home-antigen-switch__cell-response"),
        { opacity: 1, duration: 0.3 },
        6.2,
      )
      .to(
        active.querySelector(".home-antigen-switch__tumor-peptide"),
        { opacity: 1, duration: 0.3 },
        6.2,
      )
      .to(select("synapse"), { opacity: 0, duration: 0.65 }, 7.45)
      .to(
        active.querySelector(".home-antigen-switch__cell-response"),
        { opacity: 0.22, scale: 0.68, duration: 0.95 },
        7.45,
      )
      .to(
        active.querySelector(".home-antigen-switch__tumor-peptide"),
        { opacity: 0.15, duration: 0.95 },
        7.45,
      )
      .to(
        active.querySelector(".home-antigen-switch__target-status"),
        { opacity: 1, duration: 0.45 },
        7.8,
      );
    proteins.forEach((path) =>
      sequence.to(
        path,
        {
          strokeWidth: path.classList.contains(
            "home-antigen-switch__protein-wash",
          )
            ? 2.5
            : 0.9,
          duration: 0.38,
        },
        3.1,
      ),
    );
    all("granule").forEach((granule, index) => {
      const y = -8 + index * 8;
      gsap.set(granule, { x: 28, y, scale: 0.65 });
      sequence
        .to(
          granule,
          { opacity: 0.85, x: 40, scale: 1, duration: 0.16 },
          6.85 + index * 0.08,
        )
        .to(
          granule,
          { opacity: 0, x: 100, scale: 0.7, duration: 0.48 },
          7.01 + index * 0.08,
        );
    });
    active
      .querySelectorAll<SVGGraphicsElement>(
        ".home-antigen-switch__apoptotic-body",
      )
      .forEach((body) => {
        const style = getComputedStyle(body);
        const coordinate = (name: string) =>
          parseFloat(style.getPropertyValue(name));
        gsap.set(body, {
          x: coordinate("--body-start-x"),
          y: coordinate("--body-start-y"),
          scale: 0.3,
        });
        sequence.to(
          body,
          {
            opacity: 0.6,
            x: coordinate("--body-end-x"),
            y: coordinate("--body-end-y"),
            scale: 0.9,
            duration: 0.95,
          },
          7.45,
        );
      });
    render();
    if (reducedMotion.current || (activated.current && document.hidden)) {
      sequence.progress(1).pause();
      setPhase(finalStage);
      setPlaying(false);
    } else if (activated.current) {
      setPhase(0);
      setPlaying(true);
      sequence.play(0);
    }
    let frame = 0;
    const observer = new ResizeObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        geometry = measureAntigenTransit(scene, selected);
        labelSize = parseFloat(
          getComputedStyle(scene).getPropertyValue("--tcell-label-size"),
        );
        render();
      });
    });
    scene
      .querySelectorAll<SVGSVGElement>(
        "[data-antigen-ring] > svg, [data-antigen-bridge], .home-antigen-switch__target > svg",
      )
      .forEach((svg) => observer.observe(svg));
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      sequence.kill();
      if (timeline.current === sequence) timeline.current = null;
    };
  }, [root, selected, run, growing, processed, peptide]);

  useEffect(() => {
    const scene = root.current;
    if (!scene) return;
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let resizeTimer = 0;
    let resizing = false;
    let resizeProgress: number | undefined;
    let measuredWidth = window.innerWidth;
    let measuredHeight = window.innerHeight;
    const track = scene.closest(".story-scene-track");
    const sceneTrigger = () =>
      ScrollTrigger.getAll().find((trigger) => trigger.vars.trigger === track);
    const resize = () => {
      // Match the story's gate: mobile address bars do not rebuild its tracks.
      if (
        window.innerWidth === measuredWidth &&
        Math.abs(window.innerHeight - measuredHeight) < 80
      )
        return;
      // Only bookmark this diagram while the reader is looking at it.
      if ((!inViewport.current && !resizing) || document.hidden) {
        measuredWidth = window.innerWidth;
        measuredHeight = window.innerHeight;
        return;
      }
      resizeProgress ??= sceneTrigger()?.progress;
      if (resizeProgress === undefined) return;
      resizing = true;
      window.clearTimeout(resizeTimer);
      // The parent story rebuilds its viewport-dependent tracks after 220ms.
      resizeTimer = window.setTimeout(() => {
        const trigger = sceneTrigger();
        if (trigger && scene.isConnected && resizeProgress !== undefined) {
          window.scrollTo({
            top: trigger.start + (trigger.end - trigger.start) * resizeProgress,
            behavior: "instant",
          });
          ScrollTrigger.update();
        }
        resizing = false;
        resizeProgress = undefined;
        measuredWidth = window.innerWidth;
        measuredHeight = window.innerHeight;
      }, 300);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        inViewport.current = entry.isIntersecting;
        const visibleHeight =
          Math.min(
            entry.boundingClientRect.height,
            entry.rootBounds?.height ?? window.innerHeight,
          ) * 0.55;
        if (
          entry.isIntersecting &&
          entry.intersectionRect.height >= visibleHeight &&
          !activated.current &&
          !document.hidden
        )
          replay();
        if (!entry.isIntersecting && !resizing) {
          if (activated.current) stop();
          activated.current = false;
        }
      },
      { threshold: Array.from({ length: 21 }, (_, index) => index / 20) },
    );
    observer.observe(scene);
    const preferenceChanged = () => {
      reducedMotion.current = media.matches;
      stop();
    };
    const visibilityChanged = () => {
      if (document.hidden) stop();
      else if (inViewport.current) replay();
    };
    media.addEventListener("change", preferenceChanged);
    document.addEventListener("visibilitychange", visibilityChanged);
    window.addEventListener("resize", resize);
    return () => {
      observer.disconnect();
      media.removeEventListener("change", preferenceChanged);
      document.removeEventListener("visibilitychange", visibilityChanged);
      window.removeEventListener("resize", resize);
      window.clearTimeout(resizeTimer);
      activated.current = false;
      inViewport.current = false;
    };
  }, [root, replay, stop]);
  return { phase, playing, replay };
}
