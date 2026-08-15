import { Fragment, Suspense, lazy, useMemo, useState } from "react";
import {
  protocolCategoryLabels,
  protocolManuals,
  type ProtocolCategory,
  type ProtocolManual,
} from "../../../data/protocolPages";

const PdfViewerModal = lazy(() =>
  import("./PdfViewerModal").then((m) => ({ default: m.PdfViewerModal })),
);

type CategoryFilter = "all" | ProtocolCategory;

const categoryFilters: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All manuals" },
  { value: "dna", label: "DNA" },
  { value: "cell", label: "Cell" },
  { value: "animal", label: "Animal & Other" },
];

function ProtocolCard({
  manual,
  onOpen,
}: {
  manual: ProtocolManual;
  onOpen: (manual: ProtocolManual) => void;
}) {
  return (
    <button
      className="protocol-card"
      type="button"
      data-category={manual.category}
      aria-haspopup="dialog"
      aria-label={`Preview ${manual.title}`}
      onClick={() => onOpen(manual)}
    >
      <span className="protocol-card__cover" aria-hidden="true">
        <span>{manual.id}</span>
        <i />
        <b>{protocolCategoryLabels[manual.category]}</b>
      </span>

      <span className="protocol-card__meta">
        <span>{manual.documentType}</span>
        <span>{manual.pages} pages</span>
      </span>

      <strong className="protocol-card__title">{manual.title}</strong>
      <span className="protocol-card__description">{manual.description}</span>

      <span className="protocol-card__footer">
        <span>{manual.assetName}</span>
        <b aria-hidden="true">Open ↗</b>
      </span>
    </button>
  );
}

function ProtocolDnaSticker({ side }: { side: "left" | "right" }) {
  return (
    <span
      className="protocol-grid__decoration"
      data-side={side}
      aria-hidden="true"
    >
      <span className="protocol-dna-sticker">
        <svg
          width="84"
          height="220"
          viewBox="0 0 84 220"
          fill="none"
          stroke="currentColor"
          focusable="false"
        >
          <path d="M22 8c53 28 53 70 0 99s-53 74 0 105" />
          <path d="M62 8C9 36 9 78 62 107s53 74 0 105" />
          <path d="M33 22h18M51 49H33M54 78H30M27 119h30M30 148h24M33 177h18M35 202h14" />
        </svg>
        <small>DNA / archive</small>
      </span>
    </span>
  );
}

export function ProtocolBookcase() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeManual, setActiveManual] = useState<ProtocolManual | null>(null);
  const visibleManuals = useMemo(
    () =>
      activeCategory === "all"
        ? protocolManuals
        : protocolManuals.filter(
            (manual) => manual.category === activeCategory,
          ),
    [activeCategory],
  );
  const hasCenteredTail = visibleManuals.length % 3 === 2;
  const centeredTailStart = visibleManuals.length - 2;

  return (
    <div className="protocol-bookcase" data-wiki-reveal>
      <div className="protocol-bookcase__bar">
        <div
          className="wet-measurement__tabs protocol-bookcase__tabs"
          aria-label="Filter protocol manuals"
        >
          {categoryFilters.map((category) => (
            <button
              className={
                activeCategory === category.value ? "is-active" : undefined
              }
              type="button"
              aria-pressed={activeCategory === category.value}
              onClick={() => setActiveCategory(category.value)}
              key={category.value}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p aria-live="polite">
          <strong>{String(visibleManuals.length).padStart(2, "0")}</strong>
          <span> manuals indexed</span>
        </p>
      </div>

      <div
        className={`protocol-grid${hasCenteredTail ? " protocol-grid--centered-tail" : ""}`}
      >
        {visibleManuals.map((manual, index) => (
          <Fragment key={manual.id}>
            {hasCenteredTail && index === centeredTailStart ? (
              <ProtocolDnaSticker side="left" />
            ) : null}
            <ProtocolCard manual={manual} onOpen={setActiveManual} />
            {hasCenteredTail && index === visibleManuals.length - 1 ? (
              <ProtocolDnaSticker side="right" />
            ) : null}
          </Fragment>
        ))}
      </div>

      <Suspense fallback={null}>
        <PdfViewerModal
          manual={activeManual}
          onClose={() => setActiveManual(null)}
        />
      </Suspense>
    </div>
  );
}
