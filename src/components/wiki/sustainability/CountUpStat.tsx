import { useEffect, useRef, useState } from "react";
import type { SustainabilityStat } from "../../../data/sustainabilityData";
import { prefersReducedMotion } from "./useInViewReveal";
import "../../../styles/sustainability-page.css";

export function CountUpStat({
  stat,
  duration = 550,
}: {
  stat: SustainabilityStat;
  duration?: number;
}) {
  const nodeRef = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);
  const [display, setDisplay] = useState<number | null>(null);

  useEffect(() => {
    if (display !== null) return;
    const node = nodeRef.current;
    if (!node) return;
    if (prefersReducedMotion()) {
      setDisplay(stat.value);
      return;
    }
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [display, stat.value]);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const startedAt = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startedAt) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * stat.value));
      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };
    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [inView, duration, stat.value]);

  const shown = display ?? 0;

  return (
    <div ref={nodeRef} className="sust-count-stat" role="group">
      <span className="sust-count-stat__value" aria-hidden="true">
        {shown}
      </span>
      <span className="sust-visually-hidden">{stat.value}</span>
      <span className="sust-count-stat__labels">
        <strong>{stat.labelZh}</strong>
        <em>{stat.labelEn}</em>
      </span>
    </div>
  );
}
