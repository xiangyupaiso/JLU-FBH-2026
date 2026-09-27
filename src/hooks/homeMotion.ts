// A short scrub smooths wheel input without leaving the illustration trailing.
export const HOME_SCRUB = 0.48;
// NOTE: "sine.inOut" is also hardcoded in animateCircRna.ts and in
// useHomeStoryAnimation.ts (paint() and several tweens). Changing this alone
// will not retune those; search for the literal.
export const HOME_EASE = "sine.inOut";

// Add half the animation's scroll distance as a completed-frame hold. Scaling
// the track by the same amount preserves the original reveal speed.
export const HOME_REST_RATIO = 0.5;
