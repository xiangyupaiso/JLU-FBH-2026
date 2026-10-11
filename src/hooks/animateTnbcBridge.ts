import gsap from "gsap";
import { resetTnbcCopyOpacity, setTnbcCopyOpacity } from "./tnbcCopyOpacity";

// Keep the real reading panel in place while the map gives way to its title.
export function animateTnbcBridge(section: HTMLElement) {
  const track = section.querySelector<HTMLElement>(".story-scene-track")!;
  const stage = section.querySelector<HTMLElement>(".story-chapter-inner")!;
  const copy = section.querySelector<HTMLElement>(".story-copy")!;
  const source = section.querySelector<HTMLElement>("[data-tnbc-map-shared]")!;
  const target = copy.querySelector<HTMLElement>("[data-tnbc-title-shared]")!;
  const wash = document.createElement("div");
  wash.className = "tnbc-reading-bridge-wash";
  wash.setAttribute("aria-hidden", "true");
  const word = document.createElement("span");
  word.className = "tnbc-reading-word-transfer";
  word.textContent = source.textContent?.trim() || "Breast cancer";
  word.setAttribute("aria-hidden", "true");
  section.append(wash, word);

  const original = {
    stageTransform: stage.style.transform,
    stageWillChange: stage.style.willChange,
    copyTransform: copy.style.transform,
    copyOpacity: copy.style.opacity,
    copyPointerEvents: copy.style.pointerEvents,
    copyWillChange: copy.style.willChange,
    copyZIndex: copy.style.zIndex,
    sourceVisibility: source.style.visibility,
    targetOpacity: target.style.opacity,
  };
  const state = { progress: 0 };
  const clamp = gsap.utils.clamp(0, 1);
  const ease = gsap.parseEase("sine.inOut");
  const fade = (start: number, end: number, value: number) =>
    ease(clamp((value - start) / (end - start)));
  const bridgeRef: { current?: gsap.core.Timeline } = {};
  let geometry:
    | {
        fromX: number;
        fromY: number;
        fromWidth: number;
        fromHeight: number;
        toX: number;
        toY: number;
        toWidth: number;
        toHeight: number;
      }
    | undefined;

  const headerHeight = () =>
    Number.parseFloat(
      getComputedStyle(section).getPropertyValue("--header-height"),
    ) || 0;
  const trackBottom = () =>
    track.getBoundingClientRect().bottom + window.scrollY;

  // The copy remains in normal flow. Its counter-movement puts the same DOM
  // at the final viewport position throughout the transition.
  const position = () => {
    const trigger = bridgeRef.current?.scrollTrigger;
    const distance = trigger
      ? trigger.end - trigger.start
      : stage.offsetHeight - headerHeight();
    const travelled = trigger
      ? gsap.utils.clamp(0, distance, trigger.scroll() - trigger.start)
      : 0;
    const active = travelled > 0 && travelled < distance;
    copy.style.transform = active
      ? "translate3d(0, " + (travelled - distance) + "px, 0)"
      : original.copyTransform;
    const holdStage = active;
    stage.style.transform = holdStage
      ? "translate3d(0, " + travelled + "px, 0)"
      : original.stageTransform;
    stage.style.willChange = holdStage ? "transform" : original.stageWillChange;
    copy.style.willChange = active
      ? "transform, opacity"
      : original.copyWillChange;
  };

  const measure = () => {
    const from = source.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    const style = getComputedStyle(source);
    geometry = {
      fromX: from.left,
      fromY: from.top,
      fromWidth: from.width,
      fromHeight: from.height,
      toX: to.left,
      toY: to.top,
      toWidth: to.width,
      toHeight: to.height,
    };
    Object.assign(word.style, {
      width: from.width + "px",
      height: from.height + "px",
      fontFamily: style.fontFamily,
      fontSize: style.fontSize,
      fontWeight: style.fontWeight,
      lineHeight: style.lineHeight,
      letterSpacing: style.letterSpacing,
      color: style.color,
    });
  };

  const draw = () => {
    position();
    const progress = bridgeRef.current?.scrollTrigger?.progress ?? 0;
    const visible = progress > 0 && progress < 1;
    if (visible && !geometry) measure();
    wash.style.visibility = visible ? "visible" : "hidden";
    word.style.visibility = visible ? "visible" : "hidden";
    wash.style.opacity = String(fade(0.02, 0.32, progress));
    setTnbcCopyOpacity(copy, "bridge", fade(0.32, 0.72, progress));
    target.style.opacity = String(fade(0.68, 0.82, progress));
    source.style.visibility = visible ? "hidden" : original.sourceVisibility;
    copy.style.pointerEvents = progress < 1 ? "none" : original.copyPointerEvents;
    copy.style.zIndex = visible ? "62" : original.copyZIndex;
    if (!visible || !geometry) return;

    // Let the surrounding map copy disappear before the shared word moves.
    const move = fade(0.24, 0.62, progress);
    const { fromX, fromY, fromWidth, fromHeight, toX, toY, toWidth, toHeight } =
      geometry;
    const x = gsap.utils.interpolate(fromX, toX, move);
    const y = gsap.utils.interpolate(fromY, toY, move);
    const scaleX = gsap.utils.interpolate(1, toWidth / fromWidth, move);
    const scaleY = gsap.utils.interpolate(1, toHeight / fromHeight, move);
    word.style.transform =
      "translate3d(" + x + "px, " + y + "px, 0) scale(" +
      scaleX + ", " + scaleY + ")";
    word.style.opacity = String(1 - fade(0.62, 0.76, progress));
  };

  const bridge = gsap.timeline({
    scrollTrigger: {
      id: "home-tnbc-copy-bridge",
      trigger: track,
      start: () => trackBottom() - stage.offsetHeight,
      end: () => trackBottom() - headerHeight(),
      scrub: 0.12,
      invalidateOnRefresh: true,
      onUpdate: draw,
      onRefreshInit: () => {
        stage.style.transform = original.stageTransform;
        copy.style.transform = original.copyTransform;
        geometry = undefined;
      },
      onRefresh: draw,
    },
  });
  bridgeRef.current = bridge;
  bridge.fromTo(
    state,
    { progress: 0 },
    { progress: 1, duration: 1, ease: "none" },
  );
  draw();

  return {
    timeline: bridge,
    cleanup: () => {
      bridge.kill();
      stage.style.transform = original.stageTransform;
      stage.style.willChange = original.stageWillChange;
      copy.style.transform = original.copyTransform;
      resetTnbcCopyOpacity(copy, "bridge");
      copy.style.opacity = original.copyOpacity;
      copy.style.pointerEvents = original.copyPointerEvents;
      copy.style.willChange = original.copyWillChange;
      copy.style.zIndex = original.copyZIndex;
      source.style.visibility = original.sourceVisibility;
      target.style.opacity = original.targetOpacity;
      wash.remove();
      word.remove();
    },
  };
}
