import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type RefObject,
} from "react";

/** Extra intent at the real document end reveals the hidden final chapter.
 * No wheel cancellation, body lock, or interference with nested readers.
 */
export function useFooterEasterEgg(
  rootRef: RefObject<HTMLElement | null>,
  seamRef: RefObject<HTMLButtonElement | null>,
) {
  const [revealed, setRevealed] = useState(false);
  const returnY = useRef(0);
  const closingFrame = useRef(0);
  const reveal = useCallback(() => {
    returnY.current = window.scrollY;
    setRevealed(true);
  }, []);
  const close = useCallback(() => {
    setRevealed(false);
    closingFrame.current = window.requestAnimationFrame(() => {
      window.scrollTo({ top: returnY.current, behavior: "instant" });
      seamRef.current?.focus({ preventScroll: true });
      closingFrame.current = 0;
    });
  }, [seamRef]);

  useLayoutEffect(() => {
    if (!revealed || !rootRef.current) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const headerHeight =
      Number.parseFloat(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--header-height",
        ),
      ) || 78;
    const top =
      window.scrollY +
      rootRef.current.getBoundingClientRect().top -
      headerHeight;
    window.scrollTo({ top, behavior: reduced ? "instant" : "smooth" });
    rootRef.current.focus({ preventScroll: true });
  }, [revealed, rootRef]);

  useEffect(() => () => window.cancelAnimationFrame(closingFrame.current), []);

  useEffect(() => {
    const seam = seamRef.current;
    if (!seam) return;
    if (revealed) {
      const escape = (event: KeyboardEvent) => {
        if (
          event.key === "Escape" &&
          rootRef.current?.contains(event.target as Node)
        )
          close();
      };
      window.addEventListener("keydown", escape);
      return () => window.removeEventListener("keydown", escape);
    }
    let arrived = 0;
    let lastWheel = 0;
    let armed = false;
    let pressure = 0;
    let resetTimer = 0;
    let touchY = 0;
    let touchReady = false;
    const atEnd = () =>
      document.documentElement.scrollHeight -
        window.scrollY -
        window.innerHeight <=
      4;
    const reset = () => {
      pressure = 0;
      armed = false;
      seam.style.setProperty("--gate-p", "0");
    };
    const onScroll = () => {
      if (atEnd()) {
        if (!arrived) arrived = performance.now();
      } else {
        arrived = 0;
        reset();
      }
    };
    const push = (distance: number) => {
      pressure = Math.max(0, Math.min(240, pressure + distance));
      seam.style.setProperty("--gate-p", String(pressure / 240));
      window.clearTimeout(resetTimer);
      if (pressure >= 240) {
        reset();
        reveal();
      } else resetTimer = window.setTimeout(reset, 1000);
    };
    const nestedControl = (target: EventTarget | null) => {
      if (!(target instanceof Element)) return false;
      if (
        target.closest(
          "input, textarea, select, [contenteditable='true'], [role='dialog']",
        )
      )
        return true;
      for (
        let node: Element | null = target;
        node && node !== document.body;
        node = node.parentElement
      ) {
        if (
          node.scrollHeight > node.clientHeight + 2 &&
          /auto|scroll/.test(getComputedStyle(node).overflowY)
        )
          return true;
      }
      return false;
    };
    const wheel = (event: WheelEvent) => {
      if (
        event.ctrlKey ||
        event.shiftKey ||
        nestedControl(event.target) ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      )
        return;
      const now = performance.now();
      const pause = now - lastWheel;
      lastWheel = now;
      if (!atEnd() || event.deltaY <= 0) {
        reset();
        return;
      }
      // The gesture that first reaches the footer never opens the scene.
      // A short pause distinguishes the next deliberate gesture from inertia.
      if (!arrived) {
        arrived = now;
        return;
      }
      if (now - arrived < 220) return;
      if (!armed) {
        if (pause < 160) return;
        armed = true;
      }
      const delta =
        event.deltaMode === 1
          ? event.deltaY * 16
          : event.deltaMode === 2
            ? event.deltaY * window.innerHeight
            : event.deltaY;
      push(Math.min(delta, 120));
    };
    const keydown = (event: KeyboardEvent) => {
      if (
        nestedControl(event.target) ||
        (event.target instanceof Element && event.target.closest("button, a"))
      )
        return;
      if (
        ["ArrowDown", "PageDown", " "].includes(event.key) &&
        !event.shiftKey &&
        atEnd()
      ) {
        if (arrived && performance.now() - arrived > 220) push(120);
        else onScroll();
      }
    };
    const touchStart = (event: TouchEvent) => {
      touchReady =
        event.touches.length === 1 && atEnd() && !nestedControl(event.target);
      touchY = event.touches[0]?.clientY ?? 0;
    };
    const touchMove = (event: TouchEvent) => {
      if (!touchReady || event.touches.length !== 1) return;
      const next = event.touches[0].clientY;
      const distance = touchY - next;
      touchY = next;
      if (distance > 0) push(distance * 3);
      else reset();
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("wheel", wheel, { passive: true });
    window.addEventListener("keydown", keydown);
    window.addEventListener("touchstart", touchStart, { passive: true });
    window.addEventListener("touchmove", touchMove, { passive: true });
    return () => {
      window.clearTimeout(resetTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("wheel", wheel);
      window.removeEventListener("keydown", keydown);
      window.removeEventListener("touchstart", touchStart);
      window.removeEventListener("touchmove", touchMove);
    };
  }, [revealed, reveal, close, rootRef, seamRef]);
  return { revealed, reveal, close };
}
