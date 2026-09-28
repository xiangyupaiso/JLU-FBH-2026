import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import restingSheep from "../assets/wiki/cursor-default.png";
import happySheep from "../assets/wiki/cursor-active.png";
import { GlassSheen } from "./GlassSheen";

const INTERACTIVE =
  'a[href], button:not(:disabled), summary, label[for], select:not(:disabled), input[type="range"], input[type="checkbox"], input[type="radio"], [role="button"], [role="link"], [role="tab"], [role="menuitem"], [role="slider"]';
const NATIVE =
  'input:not([type="range"]):not([type="checkbox"]):not([type="radio"]), textarea, [contenteditable]:not([contenteditable="false"]), iframe, [draggable="true"], [data-native-cursor]';
const PARTICLE_COUNT = 14;

/** Keep the hotspot exact; only the illustration's attitude has inertia. */
export function SheepCursor() {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = layerRef.current!;
    const follower = layer.querySelector<HTMLElement>(
      ".sheep-cursor__follower",
    )!;
    const tilt = layer.querySelector<HTMLElement>(".sheep-cursor__tilt")!;
    const sprite = layer.querySelector<HTMLElement>(".sheep-cursor__sprite")!;
    const halo = layer.querySelector<HTMLElement>(".sheep-cursor__halo")!;
    const sheens = [
      ...layer.querySelectorAll<HTMLElement>(".sheep-cursor__sheen"),
    ];
    const particles = [
      ...layer.querySelectorAll<HTMLElement>(".sheep-cursor__spark"),
    ];
    const media = matchMedia(
      "(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)",
    );
    const root = document.documentElement;
    let disposed = false;
    let ready = false;
    let visible = false;
    let pressed = false;
    let active: Element | null = null;
    let x = 0;
    let y = 0;
    let lastMove = 0;
    let lastShine = -1000;
    let angle = 0;
    let targetAngle = 0;
    let frame = 0;
    let frameTime = 0;
    let particleIndex = 0;

    function spark(
      px: number,
      py: number,
      dx: number,
      dy: number,
      size: number,
    ) {
      const particle = particles[particleIndex++ % PARTICLE_COUNT];
      particle.getAnimations().forEach((animation) => animation.cancel());
      particle.style.left = `${px}px`;
      particle.style.top = `${py}px`;
      particle.style.width = particle.style.height = `${size}px`;
      particle.animate(
        [
          {
            opacity: 0,
            transform: "translate(-50%, -50%) scale(.25) rotate(0deg)",
            offset: 0,
          },
          {
            opacity: 0.85,
            transform: `translate(calc(-50% + ${dx * 0.2}px), calc(-50% + ${dy * 0.2 + 2.4}px)) scale(1) rotate(18deg)`,
            offset: 0.2,
          },
          {
            opacity: 0.7,
            transform: `translate(calc(-50% + ${dx * 0.5}px), calc(-50% + ${dy * 0.5 + 15}px)) scale(.8) rotate(35deg)`,
            offset: 0.5,
          },
          {
            opacity: 0,
            transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy + 60}px)) scale(.1) rotate(70deg)`,
          },
        ],
        { duration: 620 + size * 18, easing: "linear" },
      );
    }

    function shine() {
      const now = performance.now();
      if (!visible || pressed || now - lastShine < 850) return;
      lastShine = now;
      halo.getAnimations().forEach((animation) => animation.cancel());
      halo.animate(
        [
          { opacity: 0, transform: "scale(.7)" },
          { opacity: 0.42, transform: "scale(1)", offset: 0.35 },
          { opacity: 0, transform: "scale(1.18)" },
        ],
        { duration: 780, easing: "ease-out" },
      );
      sheens.forEach((sheen) => {
        sheen.getAnimations().forEach((animation) => animation.cancel());
        sheen.animate(
          [
            { maskPosition: "100% 0", opacity: 0 },
            { opacity: 0.9, offset: 0.25 },
            { opacity: 0.9, offset: 0.6 },
            { maskPosition: "0% 0", opacity: 0 },
          ],
          { duration: 700, easing: "ease-in-out" },
        );
      });
    }

    function settle(now: number) {
      frame = 0;
      const dt = Math.min(now - frameTime, 40);
      frameTime = now;
      if (now - lastMove > 60) targetAngle = 0;
      angle += (targetAngle - angle) * (1 - Math.exp(-dt / 75));
      tilt.style.transform = `rotate(${angle.toFixed(2)}deg)`;
      if (Math.abs(angle) > 0.05 || now - lastMove < 80) {
        frame = requestAnimationFrame(settle);
      } else {
        tilt.style.transform = "rotate(0deg)";
      }
    }

    function hide() {
      visible = false;
      pressed = false;
      active = null;
      layer.dataset.visible = "false";
      layer.dataset.active = "false";
      root.classList.remove("has-sheep-cursor");
      cancelAnimationFrame(frame);
      frame = 0;
      angle = targetAngle = 0;
      tilt.style.transform = "rotate(0deg)";
      layer
        .getAnimations({ subtree: true })
        .forEach((animation) => animation.cancel());
    }

    function updateTarget(target: EventTarget | null) {
      const element = target instanceof Element ? target : null;
      // Native controls, selection and top-layer dialogs retain their own cursor.
      if (
        !element ||
        element.closest(NATIVE) ||
        element.closest(":modal") ||
        document.body.classList.contains("is-thread-dragging")
      ) {
        hide();
        return false;
      }
      const next = element.closest(INTERACTIVE);
      const enabled =
        next && !next.matches('[disabled], [aria-disabled="true"]')
          ? next
          : null;
      layer.dataset.active = String(Boolean(enabled) || pressed);
      if (enabled && enabled !== active) shine();
      active = enabled;
      return true;
    }

    function move(event: PointerEvent) {
      if (!ready || !media.matches || event.pointerType !== "mouse") {
        hide();
        return;
      }
      const now = performance.now();
      const elapsed = Math.max(8, now - lastMove);
      const dx = event.clientX - x;
      const distance = Math.hypot(dx, event.clientY - y);
      const wasVisible = visible;
      x = event.clientX;
      y = event.clientY;
      if (!updateTarget(event.target)) return;
      follower.style.transform = `translate3d(${x - 13}px, ${y - 12}px, 0)`;
      visible = true;
      layer.dataset.visible = "true";
      root.classList.add("has-sheep-cursor");
      // A quick gesture catches the light once, without a permanent glow loop.
      if (wasVisible && distance > 14 && distance / elapsed > 1.15) shine();
      targetAngle = Math.max(-9, Math.min(9, (dx / elapsed) * 5));
      lastMove = now;
      if (!frame) {
        frameTime = now;
        frame = requestAnimationFrame(settle);
      }
    }

    function down(event: PointerEvent) {
      if (event.button !== 0 || event.pointerType !== "mouse" || !visible)
        return;
      if (!updateTarget(event.target)) return;
      pressed = true;
      layer.dataset.active = "true";
      sprite.getAnimations().forEach((animation) => animation.cancel());
      sprite.animate(
        [
          { transform: "scale(1)" },
          { transform: "scale(.94, .9)", offset: 0.4 },
          { transform: "scale(1.04, 1.06)", offset: 0.72 },
          { transform: "scale(1)" },
        ],
        { duration: 380, easing: "ease-out" },
      );
      for (let i = 0; i < 5; i++) {
        const theta = (i * Math.PI * 2) / 5 - Math.PI / 2;
        spark(
          x + 30 + Math.cos(theta) * 32,
          y + 31 + Math.sin(theta) * 32,
          Math.cos(theta) * 19,
          Math.sin(theta) * 19,
          i % 2 ? 6 : 10,
        );
      }
    }

    function up() {
      pressed = false;
      if (visible) updateTarget(document.elementFromPoint(x, y));
    }

    function out(event: PointerEvent) {
      if (!event.relatedTarget) hide();
    }

    function scroll() {
      if (visible) updateTarget(document.elementFromPoint(x, y));
    }

    function key(event: KeyboardEvent) {
      if (event.key === "Tab" || event.key === "Escape") hide();
    }

    // Decode both poses before hiding the platform cursor, including after HMR.
    Promise.all(
      [restingSheep, happySheep].map((src) => {
        const image = new Image();
        image.src = src;
        return image.decode();
      }),
    )
      .then(() => {
        if (!disposed) ready = true;
      })
      .catch(() => {});

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", down, {
      passive: true,
      capture: true,
    });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("pointerout", out);
    window.addEventListener("pointercancel", hide);
    window.addEventListener("blur", hide);
    window.addEventListener("dragstart", hide);
    window.addEventListener("keydown", key);
    window.addEventListener("scroll", scroll, { passive: true, capture: true });
    document.addEventListener("visibilitychange", hide);
    media.addEventListener("change", hide);
    return () => {
      disposed = true;
      hide();
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", down, true);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointerout", out);
      window.removeEventListener("pointercancel", hide);
      window.removeEventListener("blur", hide);
      window.removeEventListener("dragstart", hide);
      window.removeEventListener("keydown", key);
      window.removeEventListener("scroll", scroll, true);
      document.removeEventListener("visibilitychange", hide);
      media.removeEventListener("change", hide);
    };
  }, []);

  return createPortal(
    <div
      ref={layerRef}
      className="sheep-cursor"
      aria-hidden="true"
      data-visible="false"
    >
      <div className="sheep-cursor__follower">
        <div className="sheep-cursor__tilt">
          <span className="sheep-cursor__halo" />
          <div className="sheep-cursor__sprite">
            <img
              className="sheep-cursor__rest"
              src={restingSheep}
              alt=""
              draggable={false}
            />
            <img
              className="sheep-cursor__happy"
              src={happySheep}
              alt=""
              draggable={false}
            />
            <GlassSheen
              src={restingSheep}
              className="sheep-cursor__sheen sheep-cursor__sheen--rest"
            />
            <GlassSheen
              src={happySheep}
              className="sheep-cursor__sheen sheep-cursor__sheen--happy"
            />
          </div>
        </div>
      </div>
      {Array.from({ length: PARTICLE_COUNT }, (_, index) => (
        <i key={index} className="sheep-cursor__spark" />
      ))}
    </div>,
    document.body,
  );
}
