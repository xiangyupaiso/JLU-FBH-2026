import animalEthicsPdf from "../assets/protocols/animal-ethics.pdf?url";
import animalModelPdf from "../assets/protocols/animal-model.pdf?url";
import cellCountingPdf from "../assets/protocols/cell-counting.pdf?url";
import cellCulturePdf from "../assets/protocols/cell-culture.pdf?url";
import dnaExtractionPdf from "../assets/protocols/dna-extraction.pdf?url";
import flowCytometryPdf from "../assets/protocols/flow-cytometry.pdf?url";
import gelElectrophoresisPdf from "../assets/protocols/gel-electrophoresis.pdf?url";
import immunofluorescencePdf from "../assets/protocols/immunofluorescence.pdf?url";
import injectionGuidePdf from "../assets/protocols/injection-guide.pdf?url";
import nucleicAcidQcPdf from "../assets/protocols/nucleic-acid-qc.pdf?url";
import pcrGuidePdf from "../assets/protocols/pcr-guide.pdf?url";
import plasmidConstructionPdf from "../assets/protocols/plasmid-construction.pdf?url";
import tissueCollectionPdf from "../assets/protocols/tissue-collection.pdf?url";
import transfectionPdf from "../assets/protocols/transfection.pdf?url";
import tumorMeasurementPdf from "../assets/protocols/tumor-measurement.pdf?url";

export type ProtocolCategory = "dna" | "cell" | "animal";

export interface ProtocolManual {
  id: string;
  title: string;
  category: ProtocolCategory | "report";
  description: string;
  pdfUrl: string;
  assetName: string;
  documentType: "SOP" | "Report";
  addedAt: string;
  pages: number;
}

export const protocolCategoryLabels: Record<ProtocolCategory | "report", string> = {
  dna: "DNA",
  cell: "Cell",
  animal: "Animal & Other",
  report: "Report",
};

export const protocolManuals: ProtocolManual[] = [
  {
    id: "PR-01",
    title: "DNA Extraction & Purification",
    category: "dna",
    description:
      "Six-page standard operating procedure for DNA extraction and purification.",
    pdfUrl: dnaExtractionPdf,
    assetName: "dna-extraction.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-02",
    title: "PCR Amplification Guide",
    category: "dna",
    description:
      "Six-page standard operating procedure for PCR amplification records.",
    pdfUrl: pcrGuidePdf,
    assetName: "pcr-guide.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-03",
    title: "Plasmid Construction Record",
    category: "dna",
    description:
      "Six-page standard operating procedure for plasmid construction records.",
    pdfUrl: plasmidConstructionPdf,
    assetName: "plasmid-construction.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-04",
    title: "Agarose Gel Electrophoresis",
    category: "dna",
    description:
      "Six-page standard operating procedure for agarose gel electrophoresis.",
    pdfUrl: gelElectrophoresisPdf,
    assetName: "gel-electrophoresis.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-05",
    title: "Nucleic Acid Quantification & QC",
    category: "dna",
    description:
      "Six-page standard operating procedure for nucleic acid quantification and QC.",
    pdfUrl: nucleicAcidQcPdf,
    assetName: "nucleic-acid-qc.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-06",
    title: "Cell Culture Fundamentals",
    category: "cell",
    description:
      "Six-page standard operating procedure for cell culture fundamentals.",
    pdfUrl: cellCulturePdf,
    assetName: "cell-culture.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-07",
    title: "Cell Counting & Viability",
    category: "cell",
    description:
      "Six-page standard operating procedure for cell counting and viability.",
    pdfUrl: cellCountingPdf,
    assetName: "cell-counting.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-08",
    title: "Cell Transfection Manual",
    category: "cell",
    description:
      "Six-page standard operating procedure for cell transfection documentation.",
    pdfUrl: transfectionPdf,
    assetName: "transfection.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-09",
    title: "Flow Cytometry Workflow",
    category: "cell",
    description:
      "Six-page standard operating procedure for a flow cytometry workflow.",
    pdfUrl: flowCytometryPdf,
    assetName: "flow-cytometry.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-10",
    title: "Immunofluorescence Staining",
    category: "cell",
    description:
      "Six-page standard operating procedure for immunofluorescence staining.",
    pdfUrl: immunofluorescencePdf,
    assetName: "immunofluorescence.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-11",
    title: "Animal Ethics & Records",
    category: "animal",
    description:
      "Six-page standard operating procedure for animal ethics and records.",
    pdfUrl: animalEthicsPdf,
    assetName: "animal-ethics.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-12",
    title: "Animal Model Establishment",
    category: "animal",
    description:
      "Six-page standard operating procedure for animal model establishment.",
    pdfUrl: animalModelPdf,
    assetName: "animal-model.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-13",
    title: "Dosing & Injection Guide",
    category: "animal",
    description:
      "Six-page standard operating procedure for dosing and injection records.",
    pdfUrl: injectionGuidePdf,
    assetName: "injection-guide.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-14",
    title: "Animal Tissue Collection",
    category: "animal",
    description:
      "Six-page standard operating procedure for animal tissue collection.",
    pdfUrl: tissueCollectionPdf,
    assetName: "tissue-collection.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
  {
    id: "PR-15",
    title: "Tumor Volume Measurement",
    category: "animal",
    description:
      "Six-page standard operating procedure for tumor volume measurement.",
    pdfUrl: tumorMeasurementPdf,
    assetName: "tumor-measurement.pdf",
    documentType: "SOP",
    addedAt: "2026-07-29",
    pages: 6,
  },
];
