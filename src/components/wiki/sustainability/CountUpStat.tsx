import { useEffect, useRef } from "react";
import type { SustainabilityStat } from "../../../data/sustainabilityData";
import { prefersReducedMotion } from "./useInViewReveal";
import "../../../styles/sustainability-page.css";

/** cubic-bezier(.22,1,.36,1) 的等价近似曲线（easeOutQuart）。 */
const easeOutQuart = (t: number) => 1 - Math.pow(1 - t, 4);

/** 从 1 计数到 target（一次性），结束后逐字写回终值。 */
function animateCount(
  node: HTMLElement,
  target: number,
  duration: number,
  delay: number,
) {
  const startedAt = performance.now() + delay;
  let frame = 0;
  const tick = (now: number) => {
    const progress = Math.min(1, Math.max(0, (now - startedAt) / duration));
    const eased = easeOutQuart(progress);
    const value = Math.round(1 + (target - 1) * eased);
    node.textContent = String(value);
    if (progress < 1) {
      frame = window.requestAnimationFrame(tick);
    } else {
      node.textContent = String(target);
    }
  };
  frame = window.requestAnimationFrame(tick);
  return () => window.cancelAnimationFrame(frame);
}

export function CountUpStat({
  stat,
  delay = 0,
}: {
  stat: SustainabilityStat;
  delay?: number;
}) {
  const valueRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = valueRef.current;
    if (!node) return;
    const target = Number.parseInt(node.textContent ?? "", 10);
    if (!Number.isFinite(target)) return;
    // 渐进增强：无动画 / 减动效时数字保持静态终值。
    if (prefersReducedMotion() || typeof IntersectionObserver === "undefined") {
      return;
    }

    const duration = target < 100 ? 900 : 1200;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.disconnect();
            animateCount(node, target, duration, delay);
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, stat.value]);

  return (
    <div className="sust-count-stat">
      <span
        ref={valueRef}
        className="sust-count-stat__value"
        aria-label={String(stat.value)}
      >
        {stat.value}
      </span>
      <span className="sust-count-stat__labels">
        <strong>{stat.labelZh}</strong>
        <em>{stat.labelEn}</em>
      </span>
    </div>
  );
}
