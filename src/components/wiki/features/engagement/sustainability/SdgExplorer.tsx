import { createElement, useEffect, useRef } from "react";
import sdgExplorerModuleUrl from "../../../../../assets/wiki/sustainability/circure-sdg.js?url";

let registration: Promise<unknown> | undefined;

export function SdgExplorer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const syncGoal = () => {
      const match = /^#grow-sdg(1|5|8|10|13)$/.exec(window.location.hash);
      if (match)
        containerRef.current
          ?.querySelector("circure-sdg-explorer")
          ?.setAttribute("default-goal", match[1]);
    };
    registration ??= import(/* @vite-ignore */ sdgExplorerModuleUrl);
    void registration.then(syncGoal);
    window.addEventListener("hashchange", syncGoal);
    return () => window.removeEventListener("hashchange", syncGoal);
  }, []);

  return (
    <div className="sust-grow-explorer" ref={containerRef}>
      {[1, 5, 8, 10, 13].map((goal) => (
        <span
          className="sust-grow-anchor"
          id={`grow-sdg${goal}`}
          key={goal}
          aria-hidden="true"
        />
      ))}
      {createElement("circure-sdg-explorer")}
    </div>
  );
}
