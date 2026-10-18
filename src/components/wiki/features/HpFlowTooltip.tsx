import { useLayoutEffect, useRef, type ReactNode } from "react";
import { createPortal } from "react-dom";

type HpFlowTooltipProps = {
  anchor: HTMLElement | null;
  className: string;
  children: ReactNode;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  role?: string;
  ariaLabel?: string;
};

/** Keep a flow tooltip beside its node without letting sticky panels clip it. */
export function HpFlowTooltip({ anchor, className, children, onMouseEnter, onMouseLeave, role, ariaLabel }: HpFlowTooltipProps) {
  const tooltipRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    const tooltip = tooltipRef.current;
    if (!anchor || !tooltip) return;
    let frame = 0;
    const place = () => {
      const node = anchor.getBoundingClientRect();
      const box = tooltip.getBoundingClientRect();
      const margin = 12;
      const gap = 14;
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const fitsRight = node.right + gap + box.width <= viewportWidth - margin;
      const fitsLeft = node.left - gap - box.width >= margin;
      const leftSide = !fitsRight && (fitsLeft || node.left > viewportWidth / 2);
      const idealX = leftSide ? node.left - gap - box.width : node.right + gap;
      const x = Math.min(Math.max(margin, idealX), Math.max(margin, viewportWidth - margin - box.width));
      const idealY = node.top + node.height / 2 - box.height / 2;
      const y = Math.min(Math.max(margin, idealY), Math.max(margin, viewportHeight - margin - box.height));
      tooltip.style.left = `${x}px`;
      tooltip.style.top = `${y}px`;
      tooltip.style.visibility = "visible";
      tooltip.classList.toggle("is-left", leftSide);
      tooltip.classList.toggle("is-right", !leftSide);
      frame = requestAnimationFrame(place);
    };
    place();
    return () => cancelAnimationFrame(frame);
  }, [anchor, children]);

  if (typeof document === "undefined" || !anchor) return null;
  return createPortal(
    <aside
      ref={tooltipRef}
      className={className}
      role={role}
      aria-label={ariaLabel}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ position: "fixed", zIndex: 10000, left: 0, top: 0, maxWidth: "calc(100vw - 24px)", transform: "none", animation: "none", visibility: "hidden" }}
    >
      <div style={{ maxHeight: "calc(100dvh - 56px)", overflowY: "auto" }}>{children}</div>
    </aside>,
    document.body,
  );
}
