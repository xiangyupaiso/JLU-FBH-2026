import { useEffect, type RefObject } from "react";

type PiecePosition = {
  left: number;
  top: number;
  width: number;
  height: number;
};

type Drag = {
  pointerId: number;
  button: HTMLButtonElement;
  startX: number;
  startY: number;
  offsetX: number;
  offsetY: number;
  width: number;
  height: number;
  moved: boolean;
};

export function useAntigenDrag(
  root: RefObject<HTMLDivElement | null>,
  onSelect: (index: number) => void,
) {
  useEffect(() => {
    const scene = root.current;
    if (!scene) return;
    const ring = scene.querySelector<HTMLElement>("[data-antigen-ring]")!;
    const installed = scene.querySelector<SVGGElement>(
      "[data-antigen-installed]",
    )!;
    const installedImage = installed.querySelector("image")!;
    const ghost = scene.querySelector<HTMLElement>("[data-antigen-ghost]")!;
    const ghostImage = ghost.querySelector("image")!;
    const buttons = [
      ...scene.querySelectorAll<HTMLButtonElement>("[data-antigen-option]"),
    ];
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const listeners = new AbortController();
    const signal = listeners.signal;
    let drag: Drag | null = null;
    let animation: Animation | null = null;
    let finishTimer: ReturnType<typeof setTimeout> | undefined;
    let clickTimer: ReturnType<typeof setTimeout> | undefined;
    let suppressedButton: HTMLButtonElement | null = null;

    function stopAnimation() {
      clearTimeout(finishTimer);
      animation?.cancel();
      animation = null;
      ghost.hidden = true;
      installed.style.opacity = "1";
      installedImage.setAttribute("filter", scene!.dataset.selectedFilter!);
    }

    function resetDrag() {
      if (!drag) return;
      const previous = drag;
      drag = null;
      previous.button.classList.remove("is-held");
      if (previous.button.hasPointerCapture(previous.pointerId)) {
        previous.button.releasePointerCapture(previous.pointerId);
      }
      ghost.hidden = true;
      installed.style.opacity = "1";
      scene!.classList.remove("is-dragging", "is-near");
    }

    function position(x: number, y: number): PiecePosition {
      return {
        left: x - drag!.offsetX,
        top: y - drag!.offsetY,
        width: drag!.width,
        height: drag!.height,
      };
    }

    // Test the visible piece against the slot, not a large area around the pointer.
    function isAligned(piece: PiecePosition) {
      const bounds = ring.getBoundingClientRect();
      const dx =
        piece.left + piece.width / 2 - (bounds.left + bounds.width / 2);
      const dy =
        piece.top +
        (piece.height * 25) / 65 -
        (bounds.top + (bounds.height * 25) / 300);
      const rx = Math.max(12, Math.min(24, bounds.width * 0.065));
      const ry = Math.max(10, Math.min(20, bounds.height * 0.045));
      return (dx / rx) ** 2 + (dy / ry) ** 2 <= 1;
    }

    function install(index: number, origin?: PiecePosition) {
      stopAnimation();
      const filter = buttons[index].dataset.filter!;
      installedImage.setAttribute("filter", filter);
      const finish = () => {
        ghost.hidden = true;
        installed.style.opacity = "1";
        onSelect(index);
      };
      if (reducedMotion.matches) {
        finish();
        return;
      }
      if (origin) {
        const bounds = ring.getBoundingClientRect();
        const stage = scene!.getBoundingClientRect();
        installed.style.opacity = "0";
        ghost.hidden = false;
        ghostImage.setAttribute("filter", filter);
        animation = ghost.animate(
          [
            {
              transform:
                "translate(" +
                (origin.left - stage.left) +
                "px," +
                (origin.top - stage.top) +
                "px)",
              width: origin.width + "px",
              height: origin.height + "px",
            },
            {
              transform:
                "translate(" +
                (bounds.left + (bounds.width * 80) / 300 - stage.left) +
                "px," +
                (bounds.top - stage.top) +
                "px)",
              width: (bounds.width * 140) / 300 + "px",
              height: (bounds.width * 65) / 300 + "px",
            },
          ],
          { duration: 180, easing: "ease-out", fill: "forwards" },
        );
      } else {
        animation = installed.animate(
          [
            { transform: "translateY(-7px)", opacity: 0.7 },
            { transform: "translateY(0)", opacity: 1 },
          ],
          { duration: 180, easing: "ease-out" },
        );
      }
      finishTimer = setTimeout(finish, 180);
    }

    buttons.forEach((button, index) => {
      button.addEventListener(
        "pointerdown",
        (event) => {
          if (event.button !== 0 || !event.isPrimary || drag) return;
          const art = button.querySelector("svg")!.getBoundingClientRect();
          stopAnimation();
          drag = {
            pointerId: event.pointerId,
            button,
            startX: event.clientX,
            startY: event.clientY,
            offsetX: event.clientX - art.left,
            offsetY: event.clientY - art.top,
            width: art.width,
            height: art.height,
            moved: false,
          };
          button.setPointerCapture(event.pointerId);
        },
        { signal },
      );
      button.addEventListener(
        "pointermove",
        (event) => {
          if (!drag || drag.pointerId !== event.pointerId) return;
          if (
            !drag.moved &&
            Math.hypot(
              event.clientX - drag.startX,
              event.clientY - drag.startY,
            ) < 7
          ) {
            return;
          }
          if (!drag.moved) {
            drag.moved = true;
            button.classList.add("is-held");
            scene.classList.add("is-dragging");
            scene.style.setProperty("--incoming-color", button.dataset.color!);
            ghostImage.setAttribute("filter", button.dataset.filter!);
            ghost.hidden = false;
          }
          const piece = position(event.clientX, event.clientY);
          const stage = scene.getBoundingClientRect();
          ghost.style.width = piece.width + "px";
          ghost.style.height = piece.height + "px";
          ghost.style.transform =
            "translate(" +
            (piece.left - stage.left) +
            "px," +
            (piece.top - stage.top) +
            "px)";
          scene.classList.toggle("is-near", isAligned(piece));
          installed.style.opacity = "0.08";
        },
        { signal },
      );
      button.addEventListener(
        "pointerup",
        (event) => {
          if (!drag || drag.pointerId !== event.pointerId) return;
          const moved = drag.moved;
          const piece = position(event.clientX, event.clientY);
          const aligned = isAligned(piece);
          resetDrag();
          if (!moved) return;
          // Suppress only this drag's generated click; keyboard activation stays available.
          suppressedButton = button;
          clearTimeout(clickTimer);
          clickTimer = setTimeout(() => (suppressedButton = null), 350);
          if (aligned) install(index, piece);
        },
        { signal },
      );
      button.addEventListener("pointercancel", resetDrag, { signal });
      button.addEventListener("lostpointercapture", resetDrag, { signal });
      button.addEventListener(
        "click",
        (event) => {
          if (suppressedButton === button && event.detail !== 0) {
            suppressedButton = null;
            clearTimeout(clickTimer);
            return;
          }
          install(index);
        },
        { signal },
      );
    });

    scene.addEventListener(
      "keydown",
      (event) => {
        if (event.key === "Escape" && drag) {
          event.preventDefault();
          resetDrag();
        }
      },
      { signal },
    );
    window.addEventListener("blur", resetDrag, { signal });
    window.addEventListener("resize", resetDrag, { signal });
    window.addEventListener("scroll", resetDrag, { signal, passive: true });
    return () => {
      listeners.abort();
      resetDrag();
      stopAnimation();
      clearTimeout(clickTimer);
    };
  }, [root, onSelect]);
}
