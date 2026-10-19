import { useEffect, useRef } from "react";

const mix = (from: number, to: number, progress: number) =>
  from + (to - from) * progress;
const smooth = (value: number) => {
  const t = Math.max(0, Math.min(1, value));
  return t * t * (3 - 2 * t);
};

/** Follow a shallow arc without tilting or shearing the paper. */
function noteFrames(
  panel: DOMRect,
  button: DOMRect,
  radius: number,
): Keyframe[] {
  const dx = button.left + button.width / 2 - panel.left - panel.width / 2;
  const dy = button.top + button.height / 2 - panel.top - panel.height / 2;
  return Array.from({ length: 33 }, (_, index) => {
    const progress = index / 32;
    const x = dx * (1.24 * progress - 0.24 * progress * progress);
    const y = dy * (0.6 * progress + 0.4 * progress * progress);
    const sx = mix(1, button.width / panel.width, progress);
    const sy = mix(1, button.height / panel.height, progress);
    const corner = mix(radius, button.height / 2, progress);
    return {
      offset: progress,
      transform: `translate3d(${x}px, ${y}px, 0) scale(${sx}, ${sy})`,
      opacity: 1 - smooth((progress - 0.4) / 0.6),
      // Compensate for scale so the corners remain soft throughout the flight.
      borderRadius: `${corner / sx}px / ${corner / sy}px`,
    };
  });
}

/** Keep the photograph's scroll geometry intact throughout the modal session. */
export function useKeepsakeNote() {
  const noteRef = useRef<HTMLDialogElement>(null);
  const notePanelRef = useRef<HTMLDivElement>(null);
  const noteButtonRef = useRef<HTMLButtonElement>(null);
  const noteSheetRef = useRef<HTMLDivElement>(null);
  const noteTitleRef = useRef<HTMLHeadingElement>(null);
  const motionRef = useRef<Animation | null>(null);
  const unlockRef = useRef<(() => void) | null>(null);

  const finishClose = () => {
    const note = noteRef.current;
    motionRef.current?.cancel();
    motionRef.current = null;
    note?.close();
    if (note) delete note.dataset.motion;
    unlockRef.current?.();
    unlockRef.current = null;
    noteButtonRef.current?.focus({ preventScroll: true });
  };

  const animate = (closing: boolean) => {
    const note = noteRef.current;
    const panel = notePanelRef.current;
    const button = noteButtonRef.current;
    if (!note || !panel || !button) return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    note.dataset.motion = closing ? "closing" : "opening";

    // Reverse in place if Escape interrupts the opening, without a visual jump.
    if (closing && motionRef.current?.playState === "running") {
      motionRef.current.reverse();
      motionRef.current.onfinish = finishClose;
      return;
    }

    const frames = reduced
      ? [{ opacity: 1 }, { opacity: 0 }]
      : noteFrames(
          panel.getBoundingClientRect(),
          button.getBoundingClientRect(),
          parseFloat(getComputedStyle(panel).borderTopLeftRadius),
        );
    const ordered = closing ? frames : [...frames].reverse();
    const motion = panel.animate(
      ordered.map((frame, index) => ({
        ...frame,
        offset: index / (ordered.length - 1),
      })),
      {
        duration: reduced ? 120 : closing ? 380 : 540,
        easing: closing
          ? "cubic-bezier(0.4, 0, 0.72, 0.3)"
          : "cubic-bezier(0.16, 1, 0.3, 1)",
        fill: "both",
      },
    );
    motionRef.current = motion;
    motion.onfinish = closing
      ? finishClose
      : () => {
          motion.cancel();
          motionRef.current = null;
          note.dataset.motion = "open";
        };
  };

  const openNote = () => {
    const note = noteRef.current;
    const sheet = noteSheetRef.current;
    if (!note || !sheet || note.open) return;

    // Block background input instead of changing body overflow: sticky, viewport
    // width and the photograph's scroll-derived scale must remain unchanged.
    let touchY = 0;
    const canScroll = (target: EventTarget | null, delta: number) =>
      target instanceof Node &&
      sheet.contains(target) &&
      (delta < 0
        ? sheet.scrollTop > 0
        : delta > 0 &&
          sheet.scrollTop + sheet.clientHeight < sheet.scrollHeight - 1);
    const wheel = (event: WheelEvent) => {
      if (!event.ctrlKey && !canScroll(event.target, event.deltaY))
        event.preventDefault();
    };
    const touchStart = (event: TouchEvent) => {
      touchY = event.touches[0]?.clientY ?? 0;
    };
    const touchMove = (event: TouchEvent) => {
      if (event.touches.length !== 1) return;
      const y = event.touches[0].clientY;
      if (!canScroll(event.target, touchY - y)) event.preventDefault();
      touchY = y;
    };
    const keydown = (event: KeyboardEvent) => {
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (
        ![
          " ",
          "ArrowUp",
          "ArrowDown",
          "PageUp",
          "PageDown",
          "Home",
          "End",
        ].includes(event.key)
      )
        return;
      if (event.key === " " && event.target instanceof HTMLButtonElement)
        return;
      const upward =
        ["ArrowUp", "PageUp", "Home"].includes(event.key) ||
        (event.key === " " && event.shiftKey);
      if (!canScroll(event.target, upward ? -1 : 1)) event.preventDefault();
    };
    document.addEventListener("wheel", wheel, { passive: false });
    document.addEventListener("touchstart", touchStart, { passive: true });
    document.addEventListener("touchmove", touchMove, { passive: false });
    document.addEventListener("keydown", keydown);
    unlockRef.current = () => {
      document.removeEventListener("wheel", wheel);
      document.removeEventListener("touchstart", touchStart);
      document.removeEventListener("touchmove", touchMove);
      document.removeEventListener("keydown", keydown);
    };
    note.showModal();
    sheet.scrollTop = 0;
    noteTitleRef.current?.focus({ preventScroll: true });
    animate(false);
  };

  const closeNote = () => {
    if (!noteRef.current?.open || noteRef.current.dataset.motion === "closing")
      return;
    animate(true);
  };

  useEffect(() => {
    // Resizing invalidates the destination; settle safely instead of flying to
    // stale coordinates. The next transition measures the new layout afresh.
    const resized = () => {
      const note = noteRef.current;
      if (!note?.open || !motionRef.current) return;
      motionRef.current.cancel();
      motionRef.current = null;
      if (note.dataset.motion === "closing") {
        note.close();
        delete note.dataset.motion;
        unlockRef.current?.();
        unlockRef.current = null;
        noteButtonRef.current?.focus({ preventScroll: true });
      } else {
        note.dataset.motion = "open";
      }
    };
    window.addEventListener("resize", resized);
    return () => {
      window.removeEventListener("resize", resized);
      motionRef.current?.cancel();
      unlockRef.current?.();
    };
  }, []);

  return {
    noteRef,
    notePanelRef,
    noteButtonRef,
    noteSheetRef,
    noteTitleRef,
    openNote,
    closeNote,
  };
}
