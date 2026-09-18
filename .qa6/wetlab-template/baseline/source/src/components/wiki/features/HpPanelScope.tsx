import type { ReactNode } from "react";
import "../../../styles/hp-panels.css";

/**
 * Scope container for the faithfully ported pre-revamp Human Practices panels.
 *
 * The old stylesheet scopes its token block (and a few helpers) with the page
 * root class `.hp-local-page`; this wrapper supplies that class so the ported
 * rules keep their exact selectors while the panels render inside the shared
 * reader-route article. `hp-panels.css` keeps the scope boxless
 * (`display: contents`), so it only carries the tokens — the article's own
 * typography, spacing and background are untouched.
 */
export function HpPanelScope({ children }: { children: ReactNode }) {
  return <div className="hp-local-page hp-panel-scope">{children}</div>;
}
