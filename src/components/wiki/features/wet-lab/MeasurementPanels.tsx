import { JudgingCriteria } from "../shared/JudgingCriteria";
import { measurementJudgingCriteria, measurementReferences } from "../../../../data/wet-lab/measurementPage";
import { renderInlineFormatting } from "../../proseInline";
import { CitationReferenceList } from "../../citations/CitationRegister";
import { citationIndex, renderMeasurementCitedText, WET_LAB_CITATION_FLASH } from "./measurementCitations";
import "../../../../styles/features/measurement-panels.css";

export function MeasurementReferenceList() {
  return (
    <CitationReferenceList
      references={measurementReferences}
      index={citationIndex}
      tint={WET_LAB_CITATION_FLASH}
    />
  );
}

export function MeasurementJudgingCriteria() {
  return (
    <JudgingCriteria
      items={measurementJudgingCriteria}
      renderParagraph={(paragraph) =>
        renderMeasurementCitedText(paragraph, renderInlineFormatting)
      }
    />
  );
}
