import type { ReactNode } from "react";
import {
  experimentsPage,
  experimentsReferences,
} from "../../../../data/wet-lab/experimentsPage";
import {
  buildNumericCitationIndex,
  reportCitationIssues,
} from "../../../../data/citations/citationIndex";
import {
  CitationReferenceList,
  createCitationRenderer,
} from "../../citations/CitationRegister";
import { ExperimentProtocolAtlas } from "./ExperimentProtocolAtlas";
import "../../../../styles/features/experiments-panels.css";

const citationTint = {
  ramp: "rgba(20, 53, 76, 0.14)",
  ring: "0 0 0 3px rgba(20, 53, 76, 0.32)",
};
export const experimentsCitationIndex = buildNumericCitationIndex(
  experimentsPage.sections,
  experimentsReferences,
);
reportCitationIssues("experiments", experimentsCitationIndex);
const renderCitations = createCitationRenderer(
  experimentsCitationIndex,
  citationTint,
);

function renderProtocolFormula(formula: string): ReactNode {
  const label = formula.match(/\\text\{([^}]+)\}/)?.[1];
  if (formula.includes("\\Delta C_q")) {
    return (
      <span className="exp-protocol-formula">
        {label} = 2
        <sup>
          −ΔC<sub>q</sub>
        </sup>
        , ΔC<sub>q</sub> = C<sub>q</sub>(divergent) − C<sub>q</sub>(convergent)
      </span>
    );
  }
  if (formula.includes("\\frac")) {
    const od = formula.includes("\\mathrm{OD}");
    const symbol = od ? "OD" : "F";
    const baseline = od ? "blank" : "spontaneous";
    return (
      <span className="exp-protocol-formula">
        {label} (%) =
        <span className="exp-protocol-formula__fraction">
          <span>
            {symbol}
            <sub>{od ? "sample" : "experimental"}</sub> − {symbol}
            <sub>{baseline}</sub>
          </span>
          <span>
            {symbol}
            <sub>{od ? "0 ng" : "maximum"}</sub> − {symbol}
            <sub>{baseline}</sub>
          </span>
        </span>{" "}
        × 100%
      </span>
    );
  }
  return (
    <span className="exp-protocol-formula">
      V = 0.5 × L × W<sup>2</sup>
    </span>
  );
}

/** Preserve manuscript text while displaying its seven equations and source URLs. */
function renderExperimentFormatting(
  text: string,
  fallback: (text: string) => ReactNode,
): ReactNode {
  const tokens = text.split(/(\$[^$]+\$|https?:\/\/\S+)/g);
  return tokens.map((token, index) =>
    token.startsWith("$") ? (
      <span key={index}>{renderProtocolFormula(token.slice(1, -1))}</span>
    ) : token.startsWith("http") ? (
      <a
        key={index}
        className="wiki-prose-link"
        href={token}
        target="_blank"
        rel="noreferrer"
      >
        {token}
      </a>
    ) : (
      <span key={index}>{fallback(token)}</span>
    ),
  );
}

export function renderExperimentText(
  text: string,
  fallback: (text: string) => ReactNode,
  sectionId?: string,
): ReactNode {
  return renderCitations(
    text,
    (segment) => renderExperimentFormatting(segment, fallback),
    sectionId,
  );
}

export function experimentsFeatures(): Record<string, ReactNode> {
  return {
    "exp-protocol-map": <ExperimentProtocolAtlas />,
    "exp-references": (
      <CitationReferenceList
        references={experimentsReferences}
        index={experimentsCitationIndex}
        tint={citationTint}
      />
    ),
  };
}
