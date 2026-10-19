import { buildNumericCitationIndex } from "./citationIndex";
import {
  visualDesignNarrativeSections,
  visualDesignReferences,
} from "../project/visualDesignNarrative";

export const visualDesignCitationIndex = buildNumericCitationIndex(
  visualDesignNarrativeSections,
  visualDesignReferences,
);

if (visualDesignCitationIndex.issues.length) {
  throw new Error(visualDesignCitationIndex.issues.join("\n"));
}
