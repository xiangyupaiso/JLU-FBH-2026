import { useEffect, useId, type CSSProperties, type ReactNode } from "react";
import { descriptionReferences, solutionData } from "../../../../data/project/descriptionPage";
import "../../../../styles/wiki-features.css";
import { citationIndex } from "./citations";
import { Backlinks, flashCitationTarget } from "./CitationLink";
import { CitationPreview } from "./CitationPreview";

/**
 * 8-step central mechanism chain for CirCure.
 * Antigen selection → circRNA engineering → ... → TNBC cell killing.
 *
 * Node semantics rely on the fixed data order in `solutionData.mechanismChain`:
 * step 04 is the QC checkpoint (diamond) and step 08 is the endpoint (filled).
 */
export function MechanismRouteChain() {
  const titleId = useId();
  const steps = solutionData.mechanismChain;

  return (
    <div className="description-mechanism-chain" data-wiki-reveal>
      <header className="description-mechanism-chain__header">
        <h4 id={titleId} className="description-mechanism-chain__title">
          Full-Chain Verification Pipeline
        </h4>
      </header>
      <ol
        className="description-mechanism-chain__list"
        aria-labelledby={titleId}
      >
        {steps.map((step, index) => (
          <li
            key={step}
            className="description-mechanism-chain__step"
            style={{ "--step": index } as CSSProperties}
          >
            {/* Order comes from <ol>; the numeric tick is decorative. */}
            <span
              className="description-mechanism-chain__index"
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="description-mechanism-chain__label">{step}</span>
            {index < steps.length - 1 ? (
              <span
                className="description-mechanism-chain__connector"
                aria-hidden="true"
              >
                <svg viewBox="0 0 10 10" width="10" height="10" focusable="false">
                  <path d="M3.5 2l3 3-3 3" />
                </svg>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </div>
  );
}

/**
 * 4 candidate antigens for TNBC broad-spectrum coverage.
 */
export function AntigenCandidateCards() {
  const candidates = [
    {
      symbol: "Trop-2",
      fullName: "Trophoblast cell-surface antigen 2",
      role: "Epithelial glycoprotein",
      highlight: "High expression in >85% of TNBC tumors; validated ADC target",
    },
    {
      symbol: "LIV-1",
      fullName: "SLC39A6 zinc transporter",
      role: "Metastasis-associated transporter",
      highlight: "Enriched in aggressive, hormone-independent breast cancers",
    },
    {
      symbol: "Nectin-4",
      fullName: "Nectin cell adhesion molecule 4",
      role: "Oncofetal adhesion protein",
      highlight:
        "Overexpressed in solid tumors with minimal normal tissue presence",
    },
    {
      symbol: "B7-H4",
      fullName: "VTCN1 immune checkpoint molecule",
      role: "T-cell negative regulator",
      highlight:
        "Mediates immune evasion; highly specific to tumor microenvironments",
    },
  ];

  return (
    <div className="description-antigen-grid" data-wiki-reveal>
      {candidates.map((candidate) => (
        <article key={candidate.symbol} className="description-antigen-card">
          <div className="description-antigen-card__header">
            <div className="description-antigen-card__title-row">
              <h4 className="description-antigen-card__symbol">
                {candidate.symbol}
              </h4>
              <span className="description-antigen-card__role">
                {candidate.role}
              </span>
            </div>
            <span className="description-antigen-card__fullname">
              {candidate.fullName}
            </span>
          </div>
          <div className="description-antigen-card__evidence">
            <p>{candidate.highlight}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/**
 * Academic reference list with proper hanging indents and journal citations.
 */
export function DescriptionReferenceList() {
  // Deep links (#ref-N) are scrolled by the page motion hook; replay the
  // flash on mount so the landed entry is still highlighted.
  useEffect(() => {
    const hash = window.location.hash.replace(/^#/, "");
    if (!/^ref-\d+$/.test(hash)) return;
    const el = document.getElementById(hash);
    if (!el) return;
    flashCitationTarget(el);
  }, []);

  return (
    <>
      <ol className="description-reference-list" data-wiki-reveal>
        {descriptionReferences.map((ref) => (
          <li
            key={ref.id}
            id={`ref-${ref.id}`}
            tabIndex={-1}
            className="description-reference-item"
          >
            <span className="description-reference-item__index">[{ref.id}]</span>
            <div
              className="description-reference-item__content"
              id={`ref-${ref.id}-body`}
            >
              <span className="description-reference-item__authors">{ref.authors} </span>
              <span className="description-reference-item__title">{ref.title} </span>
              <em className="description-reference-item__journal">{ref.journal} </em>
              <span className="description-reference-item__vol">{ref.volumeYear}</span>
              <Backlinks occs={citationIndex.byRef.get(ref.id) ?? []} />
            </div>
          </li>
        ))}
      </ol>
      <CitationPreview />
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function descriptionFeatures(): Record<string, ReactNode> {
  return {
    "mechanism-route-chain": <MechanismRouteChain />,
    "antigen-candidate-cards": <AntigenCandidateCards />,
    "description-references": <DescriptionReferenceList />,
  };
}
