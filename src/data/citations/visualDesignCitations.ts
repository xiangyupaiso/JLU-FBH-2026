import { buildLabelCitationIndex } from "./citationIndex";
import {
  visualDesignNarrativeSections,
  visualDesignReferences,
  visualDesignCitationLabels,
} from "../project/visualDesignNarrative";

export const visualDesignCitationIndex = buildLabelCitationIndex(
  visualDesignNarrativeSections,
  visualDesignReferences,
  visualDesignCitationLabels,
);

if (visualDesignCitationIndex.issues.length) {
  throw new Error(visualDesignCitationIndex.issues.join("\n"));
}
