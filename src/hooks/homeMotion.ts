// A short scrub smooths wheel input without leaving the illustration trailing.
export const HOME_SCRUB = 0.48;
// NOTE: "sine.inOut" is also hardcoded in animateCircRna.ts and in
// useHomeStoryAnimation.ts (paint() and several tweens). Changing this alone
// will not retune those; search for the literal.
export const HOME_EASE = "sine.inOut";

// Add half the animation's scroll distance as a completed-frame hold. Scaling
// the track by the same amount preserves the original reveal speed.
export const HOME_REST_RATIO = 0.5;

// Desktop: every scrubbed scene stays perfectly still for this fraction of its
// own reveal distance before the next scene, or the bridge into it, moves.
export const HOME_STILL_RATIO = 0.2;

/**
 * Desktop scroll budget for a scene whose timeline ends in an empty rest tween.
 * `range` is its current ScrollTrigger distance and `rest` the rest tween's
 * share of the reveal (rest duration / reveal duration). A bridge that starts
 * `lead` px before the scene ends would consume that rest, so the lead is
 * added on top of the `still` hold. Returns the factor to lengthen the scroll
 * track by and the new rest share; the reveal speed stays unchanged.
 */
export function stillHold(range: number, rest: number, lead = 0, still = HOME_STILL_RATIO) {
  // A chapter can mount while the page loader keeps it unmeasurable. Keep its
  // normal track length instead of writing Infinity into CSS.
  if (!(range > 0) || !Number.isFinite(range)) return { scale: 1, rest };
  const reveal = range / (1 + rest);
  const next = reveal * (1 + still) + lead;
  return { scale: next / range, rest: next / reveal - 1 };
}
