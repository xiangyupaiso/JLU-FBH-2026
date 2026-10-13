export interface ExperimentProtocolPair {
  key: string;
  section: string;
  sectionNumber: string;
  code: string;
  title: string;
  shortTitle: string;
  targetId: string;
  flowPage?: number;
  inventoryPage?: number;
  flowSize?: [number, number];
  inventorySize?: [number, number];
  boundary?: string;
  hasFigure: boolean;
}

export interface ExperimentProtocolSection {
  index: string;
  name: string;
  subtitle: string;
  nodeKeys: string[];
}

export const experimentProtocolSections: ExperimentProtocolSection[] = [
  {
    index: "01",
    name: "Construct",
    subtitle: "In Vitro Synthesis",
    nodeKeys: ["1-1", "1-2"],
  },
  {
    index: "02",
    name: "Screen",
    subtitle: "Round 1 Screening",
    nodeKeys: ["2-1", "2-2", "2-3", "2-4", "2-5"],
  },
  {
    index: "03",
    name: "Optimise",
    subtitle: "Combined Vaccine",
    nodeKeys: ["3-1", "3-2"],
  },
  {
    index: "04",
    name: "Validate",
    subtitle: "Round 2 Validation",
    nodeKeys: ["4-1", "4-2", "4-3", "4-4", "4-5"],
  },
  {
    index: "05",
    name: "Safety",
    subtitle: "In Vitro Safety",
    nodeKeys: ["5-1", "5-2", "5-3"],
  },
  {
    index: "06",
    name: "Target model",
    subtitle: "Cell Engineering",
    nodeKeys: ["6-1-vector", "6-1-transduction", "6-2", "6-3", "6-4"],
  },
  {
    index: "07",
    name: "In vivo",
    subtitle: "Efficacy & Mechanism",
    nodeKeys: ["7-1", "7-2", "7-3", "7-4", "7-5"],
  },
];

export const experimentProtocolPairs: ExperimentProtocolPair[] = [
  // -------------------------------------------------------------------------
  // 01 Construct
  // -------------------------------------------------------------------------
  {
    key: "1-1",
    section: "Construct",
    sectionNumber: "01",
    code: "1.1",
    title: "Epitope plasmid construction",
    shortTitle: "1.1",
    targetId: "exp-1-1",
    flowPage: 1,
    inventoryPage: 2,
    flowSize: [2100, 1981],
    inventorySize: [1792, 2100],
    hasFigure: true,
  },
  {
    key: "1-2",
    section: "Construct",
    sectionNumber: "01",
    code: "1.2",
    title: "circRNA synthesis and circularity verification",
    shortTitle: "1.2",
    targetId: "exp-1-2",
    flowPage: 3,
    inventoryPage: 4,
    flowSize: [1141, 2100],
    inventorySize: [1482, 2100],
    hasFigure: true,
  },

  // -------------------------------------------------------------------------
  // 02 Screen
  // -------------------------------------------------------------------------
  {
    key: "2-1",
    section: "Screen",
    sectionNumber: "02",
    code: "2.1",
    title: "DC preparation and circRNA delivery",
    shortTitle: "2.1",
    targetId: "exp-2-1",
    flowPage: 5,
    inventoryPage: 6,
    flowSize: [2100, 1682],
    inventorySize: [1779, 2100],
    hasFigure: true,
  },
  {
    key: "2-2",
    section: "Screen",
    sectionNumber: "02",
    code: "2.2",
    title: "T cell isolation and DC–T co-culture",
    shortTitle: "2.2",
    targetId: "exp-2-2",
    flowPage: 7,
    inventoryPage: 8,
    flowSize: [2100, 1099],
    inventorySize: [2100, 1578],
    hasFigure: true,
  },
  {
    key: "2-3",
    section: "Screen",
    sectionNumber: "02",
    code: "2.3",
    title: "ELISpot assay and spot counting",
    shortTitle: "2.3",
    targetId: "exp-2-3",
    flowPage: 9,
    inventoryPage: 10,
    flowSize: [2100, 1501],
    inventorySize: [2100, 1752],
    hasFigure: true,
  },
  {
    key: "2-4",
    section: "Screen",
    sectionNumber: "02",
    code: "2.4",
    title: "Calcein-AM killing assay (K562)",
    shortTitle: "2.4",
    targetId: "exp-2-4",
    flowPage: 11,
    inventoryPage: 12,
    flowSize: [2100, 1539],
    inventorySize: [2100, 1436],
    hasFigure: true,
  },
  {
    key: "2-5",
    section: "Screen",
    sectionNumber: "02",
    code: "2.5",
    title: "Flow validation of TROP2 epitopes",
    shortTitle: "2.5",
    targetId: "exp-2-5",
    boundary:
      "Flow validation of TROP2 epitopes is comprehensively covered in the protocol text below; illustrations are pending for this assay.",
    hasFigure: false,
  },

  // -------------------------------------------------------------------------
  // 03 Optimise
  // -------------------------------------------------------------------------
  {
    key: "3-1",
    section: "Optimise",
    sectionNumber: "03",
    code: "3.1",
    title: "Combined plasmid construction",
    shortTitle: "3.1",
    targetId: "exp-3-1",
    flowPage: 13,
    inventoryPage: 14,
    flowSize: [1940, 2100],
    inventorySize: [1752, 2100],
    hasFigure: true,
  },
  {
    key: "3-2",
    section: "Optimise",
    sectionNumber: "03",
    code: "3.2",
    title: "Combined circRNA synthesis and release testing",
    shortTitle: "3.2",
    targetId: "exp-3-2",
    flowPage: 15,
    inventoryPage: 16,
    flowSize: [2100, 1685],
    inventorySize: [2047, 2100],
    hasFigure: true,
  },

  // -------------------------------------------------------------------------
  // 04 Validate
  // -------------------------------------------------------------------------
  {
    key: "4-1",
    section: "Validate",
    sectionNumber: "04",
    code: "4.1",
    title: "DC maturation",
    shortTitle: "4.1",
    targetId: "exp-4-1",
    flowPage: 17,
    inventoryPage: 18,
    flowSize: [2100, 1564],
    inventorySize: [2100, 1464],
    hasFigure: true,
  },
  {
    key: "4-2",
    section: "Validate",
    sectionNumber: "04",
    code: "4.2",
    title: "Antigen translation by anti-FLAG Western blot",
    shortTitle: "4.2",
    targetId: "exp-4-2",
    flowPage: 19,
    inventoryPage: 20,
    flowSize: [1831, 2100],
    inventorySize: [2100, 1701],
    hasFigure: true,
  },
  {
    key: "4-3",
    section: "Validate",
    sectionNumber: "04",
    code: "4.3",
    title: "T cell activation and memory differentiation",
    shortTitle: "4.3",
    targetId: "exp-4-3",
    flowPage: 21,
    inventoryPage: 22,
    flowSize: [2100, 1080],
    inventorySize: [2100, 1567],
    hasFigure: true,
  },
  {
    key: "4-4",
    section: "Validate",
    sectionNumber: "04",
    code: "4.4",
    title: "Round-2 ELISpot",
    shortTitle: "4.4",
    targetId: "exp-4-4",
    flowPage: 25,
    inventoryPage: 26,
    flowSize: [2100, 1443],
    inventorySize: [2100, 1229],
    hasFigure: true,
  },
  {
    key: "4-5",
    section: "Validate",
    sectionNumber: "04",
    code: "4.5",
    title: "MDA-MB-231 specific killing",
    shortTitle: "4.5",
    targetId: "exp-4-5",
    flowPage: 23,
    inventoryPage: 24,
    flowSize: [2100, 1508],
    inventorySize: [2100, 1360],
    hasFigure: true,
  },

  // -------------------------------------------------------------------------
  // 05 Safety
  // -------------------------------------------------------------------------
  {
    key: "5-1",
    section: "Safety",
    sectionNumber: "05",
    code: "5.1",
    title: "In vitro stability of circRNA versus linear RNA",
    shortTitle: "5.1",
    targetId: "exp-5-1",
    boundary:
      "Gel electrophoretic persistence assay across 0, 24, 48, 72 h. Detailed step instructions are documented in Section 5.1 below.",
    hasFigure: false,
  },
  {
    key: "5-2",
    section: "Safety",
    sectionNumber: "05",
    code: "5.2",
    title: "Off-target cytotoxicity against normal cells",
    shortTitle: "5.2",
    targetId: "exp-5-2",
    boundary:
      "Calcein-AM release cytotoxicity against HCAEC, LX-2, BEAS-2B, MCF12A normal cell panel. Detailed protocol steps are in Section 5.2 below.",
    hasFigure: false,
  },
  {
    key: "5-3",
    section: "Safety",
    sectionNumber: "05",
    code: "5.3",
    title: "Safe dose window of the LNP delivery system",
    shortTitle: "5.3",
    targetId: "exp-5-3",
    boundary:
      "CCK-8 viability assay titration (0–400 ng/well) evaluating empty LNP carrier toxicity. Detailed protocol steps are in Section 5.3 below.",
    hasFigure: false,
  },

  // -------------------------------------------------------------------------
  // 06 Target Model
  // -------------------------------------------------------------------------
  {
    key: "6-1-vector",
    section: "Target model",
    sectionNumber: "06",
    code: "6.1a",
    title: "TROP2 lentiviral vector construction",
    shortTitle: "6.1a",
    targetId: "exp-6-1",
    flowPage: 27,
    inventoryPage: 28,
    flowSize: [2100, 1153],
    inventorySize: [2100, 1943],
    boundary:
      "Supplier-side vector construction shown for context. The team utilized a ready-made commercial lentiviral preparation for subsequent cell transduction.",
    hasFigure: true,
  },
  {
    key: "6-1-transduction",
    section: "Target model",
    sectionNumber: "06",
    code: "6.1b",
    title: "Lentiviral packaging and 4T1 transduction",
    shortTitle: "6.1b",
    targetId: "exp-6-1",
    flowPage: 29,
    inventoryPage: 30,
    flowSize: [1852, 2100],
    inventorySize: [2100, 1920],
    boundary:
      "Packaging stages illustrate supplier production. The team's active laboratory workflow begins with spin-infection and transduction of 4T1 cells using the supplied virus.",
    hasFigure: true,
  },
  {
    key: "6-2",
    section: "Target model",
    sectionNumber: "06",
    code: "6.2",
    title: "Flow sorting of GFP⁺ cells",
    shortTitle: "6.2",
    targetId: "exp-6-2",
    flowPage: 31,
    inventoryPage: 32,
    flowSize: [2400, 1732],
    inventorySize: [2400, 1506],
    hasFigure: true,
  },
  {
    key: "6-3",
    section: "Target model",
    sectionNumber: "06",
    code: "6.3",
    title: "RT-PCR verification of TROP2 mRNA",
    shortTitle: "6.3",
    targetId: "exp-6-3",
    flowPage: 33,
    inventoryPage: 34,
    flowSize: [2400, 1948],
    inventorySize: [2400, 1865],
    hasFigure: true,
  },
  {
    key: "6-4",
    section: "Target model",
    sectionNumber: "06",
    code: "6.4",
    title: "Surface TROP2 by flow cytometry",
    shortTitle: "6.4",
    targetId: "exp-6-4",
    flowPage: 35,
    inventoryPage: 36,
    flowSize: [2400, 1170],
    inventorySize: [2400, 1240],
    hasFigure: true,
  },

  // -------------------------------------------------------------------------
  // 07 In Vivo
  // -------------------------------------------------------------------------
  {
    key: "7-1",
    section: "In vivo",
    sectionNumber: "07",
    code: "7.1",
    title: "Establishing the tumour-bearing model",
    shortTitle: "7.1",
    targetId: "exp-7-1",
    flowPage: 37,
    inventoryPage: 38,
    flowSize: [2400, 1168],
    inventorySize: [2400, 1686],
    hasFigure: true,
  },
  {
    key: "7-2",
    section: "In vivo",
    sectionNumber: "07",
    code: "7.2",
    title: "In vivo antitumour effect",
    shortTitle: "7.2",
    targetId: "exp-7-2",
    flowPage: 39,
    inventoryPage: 40,
    flowSize: [2400, 1533],
    inventorySize: [2400, 1564],
    hasFigure: true,
  },
  {
    key: "7-3",
    section: "In vivo",
    sectionNumber: "07",
    code: "7.3",
    title: "Intratumoural CD8 and Granzyme B",
    shortTitle: "7.3",
    targetId: "exp-7-3",
    flowPage: 41,
    inventoryPage: 42,
    flowSize: [2400, 1940],
    inventorySize: [2400, 1772],
    hasFigure: true,
  },
  {
    key: "7-4",
    section: "In vivo",
    sectionNumber: "07",
    code: "7.4",
    title: "Splenocyte flow cytometry",
    shortTitle: "7.4",
    targetId: "exp-7-4",
    flowPage: 43,
    inventoryPage: 44,
    flowSize: [2400, 2137],
    inventorySize: [2400, 2035],
    boundary:
      "P43 (Workflow) and P44 (Materials) detail the dual splenocyte flow profiling and intracellular cytokine staining (ICS) pipeline across Sections 7.4 and 7.5.",
    hasFigure: true,
  },
  {
    key: "7-5",
    section: "In vivo",
    sectionNumber: "07",
    code: "7.5",
    title: "Intracellular cytokine staining",
    shortTitle: "7.5",
    targetId: "exp-7-5",
    flowPage: 43,
    inventoryPage: 44,
    flowSize: [2400, 2137],
    inventorySize: [2400, 2035],
    boundary:
      "P43 (Workflow) and P44 (Materials) detail the dual splenocyte flow profiling and intracellular cytokine staining (ICS) pipeline across Sections 7.4 and 7.5.",
    hasFigure: true,
  },
];

const BASE_PATH = import.meta.env.BASE_URL || "/";

export function experimentProtocolLocalImage(page: number): string {
  const pad = String(page).padStart(2, "0");
  const normalizedBase = BASE_PATH.endsWith("/") ? BASE_PATH : `${BASE_PATH}/`;
  return `${normalizedBase}assets/experiments/protocol/protocol-${pad}.webp`;
}

export function experimentProtocolCdnImage(page: number): string {
  const pad = String(page).padStart(2, "0");
  return `https://static.igem.wiki/teams/6056/wiki/files/pages/wet-lab/protocol/protocol-${pad}.webp`;
}

export function experimentProtocolImage(page: number): string {
  if (page <= 30) {
    return experimentProtocolCdnImage(page);
  }
  return experimentProtocolLocalImage(page);
}
