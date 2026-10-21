import { renderMathLatex } from "./mathText";

/** A `$…$` segment. `display` centres it as a standalone equation line. */
export function WikiMath({ latex, display = false }: { latex: string; display?: boolean }) {
  return (
    <span className={display ? "wiki-math wiki-math--block" : "wiki-math"} role="math">
      {renderMathLatex(latex)}
    </span>
  );
}
