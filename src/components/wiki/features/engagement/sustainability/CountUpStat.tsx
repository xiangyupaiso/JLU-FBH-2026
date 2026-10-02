import { useEffect, useRef } from "react";
import type { SustainabilityStat } from "../../../../../data/engagement/sustainability/sdgChapterContract";

/** cubic-bezier(.22,1,.36,1) 的等价近似曲线（easeOutQuart）。 */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

const format = (value: number, decimals = 0) => value.toFixed(decimals);

/** Counts from 0 to the target once; the final frame writes the exact value. */
function animateCount(node: HTMLElement, stat: SustainabilityStat, delay: number) {
  const duration = stat.value < 100 ? 900 : 1200;
  const startedAt = performance.now() + delay;
  let frame = 0;
  const tick = (now: number) => {
    const progress = Math.min(1, Math.max(0, (now - startedAt) / duration));
    node.textContent = format(stat.value * easeOutQuart(progress), stat.decimals);
    if (progress < 1) frame = window.requestAnimationFrame(tick);
  };
  frame = window.requestAnimationFrame(tick);
  return () => window.cancelAnimationFrame(frame);
}

export function CountUpStat({ stat, delay = 0 }: { stat: SustainabilityStat; delay?: number }) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const finalValue = format(stat.value, stat.decimals);

  useEffect(() => {
    const node = valueRef.current;
    // Progressive enhancement: without motion the number stays at its value.
    if (
      !node ||
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    let cancelCount: (() => void) | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          cancelCount = animateCount(node, stat, delay);
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => {
      cancelCount?.();
      observer.disconnect();
    };
  }, [delay, stat]);

  return (
    <div className="sust-count-stat" role="group" aria-label={`${finalValue}${stat.unit ?? ""} ${stat.label}`}>
      <span className="sust-count-stat__value" aria-hidden="true">
        <span ref={valueRef}>{finalValue}</span>
        {stat.unit}
      </span>
      <span className="sust-count-stat__label" aria-hidden="true">
        {stat.label}
      </span>
    </div>
  );
}

export function StatsGrid({ stats }: { stats: ReadonlyArray<SustainabilityStat> }) {
  return (
    <div className="sust-stats-grid">
      {stats.map((stat, index) => (
        <CountUpStat key={stat.id} stat={stat} delay={index * 80} />
      ))}
    </div>
  );
}
