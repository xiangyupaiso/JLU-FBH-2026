import { modelReferences, modelReferenceLabels } from "./modelPage";
import type { CitationReference } from "../citations/citationTypes";

/** Manuscript sources verified via Crossref, plus the Tao source supplied by the user. */
const supplementalReferences = [{
  name: "Son et al.",
  year: "2025",
  authors: "Son, D.-S., Obot, J.E., Campbell, K. and Lee, E.-S.",
  title: "Differential Effects of Afatinib on Cytokine- and Oncology-Related Profiles in Mesenchymal and Basal-Like 1 Triple-Negative Breast Cancer Cells",
  journal: "Journal of Inflammatory and Infectious Medicine",
  volumeYear: "1(3). (2025).",
  links: [{ href: "https://doi.org/10.53941/jiim.2025.100013", label: "doi:10.53941/jiim.2025.100013" }],
}, {
  name: "Gong et al.",
  year: "2022",
  authors: "Gong, T.-Q., Jiang, Y.-Z., Shao, C. et al.",
  title: "Proteome-centric cross-omics characterization and integrated network analyses of triple-negative breast cancer",
  journal: "Cell Reports",
  volumeYear: "38(9), 110460. (2022).",
  links: [{ href: "https://doi.org/10.1016/j.celrep.2022.110460", label: "doi:10.1016/j.celrep.2022.110460" }],
}, {
  name: "Tao et al.",
  year: "2008",
  authors: "Tao, K., Fang, M., Alroy, J. and Sahagian, G.G.",
  title: "Imagable 4T1 model for the study of late stage breast cancer",
  journal: "BMC Cancer",
  volumeYear: "8, 228. (2008).",
  links: [{ href: "https://doi.org/10.1186/1471-2407-8-228", label: "doi:10.1186/1471-2407-8-228" }],
}];

// The manuscript now supplies its own expanded bibliography. Reuse sources
// already present there and allocate unused numbers to supplemental sources.
// Keep the verified source IDs for citations and deep links, while displaying
// consecutive bibliography numbers after manuscript additions and deletions.
export const modelCitationReferences: CitationReference[] = modelReferences.map(
  (reference, index) => ({ ...reference, displayNumber: index + 1 }),
);
export const modelCitationLabels = [...modelReferenceLabels];
let nextId = Math.max(0, ...modelReferences.map((reference) => reference.id)) + 1;
for (const { name, year, ...source } of supplementalReferences) {
  const existing = modelCitationReferences.find((reference) =>
    reference.links?.some((link) => link.href === source.links[0].href),
  );
  const id = existing?.id ?? nextId++;
  if (!existing) modelCitationReferences.push({
    id, ...source, displayNumber: modelCitationReferences.length + 1,
  });
  if (!modelCitationLabels.some((label) => label.id === id && label.name === name && label.year === year)) {
    modelCitationLabels.push({ id, name, year });
  }
}
