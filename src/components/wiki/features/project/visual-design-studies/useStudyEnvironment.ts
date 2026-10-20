import { useEffect, useState } from "react";

/** Parent visibility matters inside an iframe as well as document visibility. */
export function useStudyEnvironment() {
  const [active, setActive] = useState(!document.hidden);
  const [reducedMotion, setReducedMotion] = useState(
    () => matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  useEffect(() => {
    let parentVisible = true;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setActive(parentVisible && !document.hidden);
    const changeMotion = () => setReducedMotion(reduced.matches);
    const message = (event: MessageEvent) => {
      if (
        event.source !== parent ||
        event.origin !== location.origin ||
        event.data?.type !== "visual-design-study-visibility" ||
        typeof event.data.visible !== "boolean"
      )
        return;
      parentVisible = event.data.visible;
      sync();
    };
    window.addEventListener("message", message);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", changeMotion);
    return () => {
      window.removeEventListener("message", message);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", changeMotion);
    };
  }, []);
  return { active, reducedMotion };
}
