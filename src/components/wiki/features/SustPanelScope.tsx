import type { ReactNode } from "react";
import "../../../styles/sustainability-panels.css";

/**
 * Scope container for the faithfully ported pre-revamp Sustainability panels.
 *
 * `sustainability-panels.css` publishes the plan book's token aliases (gold /
 * coral / semantic-success / shadow-medium …) inside this container instead of
 * on `:root`, so the ported rules keep their exact selectors and values while
 * nothing leaks into other pages. The container is boxless
 * (`display: contents`), so the article's own typography, spacing and
 * background are untouched.
 */
export function SustPanelScope({ children }: { children: ReactNode }) {
  return <div className="sust-panel-scope">{children}</div>;
}
