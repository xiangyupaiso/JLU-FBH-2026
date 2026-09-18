import type { ReactNode } from "react";
import "../../../styles/dry-panel-shared.css";
import "../../../styles/dry-panel-disclosures.css";

/**
 * Scope container for the faithfully ported pre-revamp Dry Lab panels.
 *
 * The old stylesheets scope every rule with page-level classes
 * (`.wiki-page`, `.wiki-page--model-hero`, `.wiki-page--dry-lab`, …). The port
 * renames those classes into the `dry-panel*` namespace and this container
 * supplies them, so the old rules can only ever match inside the panels —
 * nothing leaks into the new reader shell or any other page, and the new global
 * styles cannot reach into the panels.
 *
 * DOM shape mirrors the old page exactly:
 *
 *   old:  <div class="wiki-feature"> <PanelRoot/> </div>
 *   new:  <div class="dry-panel dry-panel--model dry-panel--dry">
 *           <div class="dry-panel__feature"> <PanelRoot/> </div>
 *         </div>
 *
 * `dry-panel__feature` is the renamed `.wiki-feature`, so
 * `.dry-panel--dry .dry-panel__feature > *` still targets the panel root, and
 * the class-count/specificity of every ported selector is unchanged.
 */
export function DryPanelScope({
  module,
  children,
}: {
  /** Palette/module variant the old page class carried. */
  module: "model" | "software";
  children: ReactNode;
}) {
  return (
    <div
      className={`dry-panel dry-panel--${module} dry-panel--dry dry-panel--unified-disclosures`}
    >
      <div className="dry-panel__feature">{children}</div>
    </div>
  );
}
