/** Clamp `value` to the inclusive range [`min`, `max`]. Defaults to 0..1. */
export function clamp(value: number, min = 0, max = 1): number {
  return Math.min(max, Math.max(min, value));
}
