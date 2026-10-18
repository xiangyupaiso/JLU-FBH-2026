import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import type { NotebookAssetKey } from "./notebookAssets";

export type NotebookBlock =
  | { type: "prose"; text: string }
  | { type: "discussion"; label: string; title: string; text: string }
  | {
      type: "figure";
      label: string;
      title: string;
      assets: NotebookAssetKey[];
      caption: string;
    }
  | {
      type: "table";
      label: string;
      title: string;
      headers: string[];
      rows: string[][];
      caption: string;
    };

export interface NotebookEntry {
  id: string;
  start: string;
  end: string;
  title: string;
  blocks: NotebookBlock[];
}

/** English copy transcribed from 文案集/project/notebook/Notebook新.md. */
export const wetLabEntries: NotebookEntry[] = [
  {
    id: "wet-2025-12-06-1",
    start: "2025-12-06",
    end: "2025-12-20",
    title: "Team formation and initial brainstorming",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "From project ideas to testable questions",
        text: "Discussion focus: Which health problems could be addressed within our experimental resources, and what constructs and readouts could make a project testable?",
      },
      {
        type: "prose",
        text: "We completed recruitment and team formation and began discussing possible project directions, laboratory resources and measurable outcomes.",
      },
    ],
  },
  {
    id: "wet-2025-12-21-2",
    start: "2025-12-21",
    end: "2026-01-20",
    title: "Final examinations",
    blocks: [
      {
        type: "prose",
        text: "Team members prepared for and took final examinations, pausing coordinated project work.",
      },
    ],
  },
  {
    id: "wet-2026-01-21-3",
    start: "2026-01-21",
    end: "2026-04-29",
    title: "Project discussions and experimental planning",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Planning a connected validation route",
        text: "Discussion focus: How should RNA identity and quality, protein expression, immune responses and functional comparisons connect? Align sequence handoff, sample labels and approval requirements with Dry Lab.",
      },
      {
        type: "prose",
        text: "After examinations, we resumed project discussions and developed the circRNA vaccine direction, outlining material preparation, expression and immune-function validation, resource needs and approvals.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure1",
        title: "Selected slides from early project discussions",
        assets: ["wetFigure01", "wetFigure02", "wetFigure03", "wetFigure04"],
        caption: "Selected slides from early project discussions.",
      },
    ],
  },
  {
    id: "wet-2026-06-15-4",
    start: "2026-06-15",
    end: "2026-06-15",
    title: "Laboratory preparation",
    blocks: [
      {
        type: "prose",
        text: "We began laboratory work, prepared materials and reviewed operating procedures.",
      },
    ],
  },
  {
    id: "wet-2026-06-20-5",
    start: "2026-06-20",
    end: "2026-06-20",
    title: "Sequence handoff and label checks",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Comparing the first-round designs",
        text: "Discussion focus: Check the mapping from 17 candidates to 15 retained epitopes and 13 coding designs, including the two overlapping pairs. Discuss common RNA inputs and controls for screening.",
      },
      {
        type: "prose",
        text: "We received the Dry Lab candidate sequences and checked the two overlapping epitope pairs against the 13 first-round coding designs. Merging the two pairs connected 15 retained epitopes to 13 designs, with labels linked to their continuous coding sequences.",
      },
    ],
  },
  {
    id: "wet-2026-06-21-6",
    start: "2026-06-21",
    end: "2026-08-08",
    title: "Materials, experimental planning and form preparation",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Preparing the first-round comparisons",
        text: "Discussion focus: Discuss RNA identity, circularisation-related quality readouts, consistent inputs and controls. Outline the PBMC, DC and T-cell workflow and the records needed to link each construct with its readouts.",
      },
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Planning the animal evaluation",
        text: "Discussion focus: Outline the proposed model, comparison groups, administration arrangements, welfare criteria and endpoint collection. Keep the early evaluation framework distinct from the module composition that would later be selected experimentally.",
      },
      {
        type: "prose",
        text: "We organised sequence versions, material and procurement requirements, sample identifiers, comparison plans and record sheets. We also prepared the initial cell-experiment and animal-study plans for the first Check-in and Animal Use Form submissions.",
      },
    ],
  },
  {
    id: "wet-2026-08-09-7",
    start: "2026-08-09",
    end: "2026-08-09",
    title: "Initial Check-in and Animal Use Form submissions",
    blocks: [
      {
        type: "prose",
        text: "We submitted the initial Check-in and Animal Use Form, recording the experimental plans available at that stage.",
      },
    ],
  },
  {
    id: "wet-2026-08-10-8",
    start: "2026-08-10",
    end: "2026-08-16",
    title: "Implementation preparation and record checks",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Aligning the plan and implementation",
        text: "Discussion focus: Review material readiness, sample labels, comparison conditions, record sheets and handoffs between operations.",
      },
      {
        type: "prose",
        text: "We continued checking materials, sample identifiers, operating arrangements and record sheets for the forthcoming experiments.",
      },
    ],
  },
  {
    id: "wet-2026-08-17-9",
    start: "2026-08-17",
    end: "2026-08-17",
    title: "PBMC Check-in approval",
    blocks: [
      {
        type: "prose",
        text: "The PBMC-related Check-in was approved, and the corresponding cell operations began within its approved scope.",
      },
    ],
  },
  {
    id: "wet-2026-08-17-10",
    start: "2026-08-17",
    end: "2026-08-19",
    title: "PBMC, dendritic-cell and T-cell preparation",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Connecting the DC–T-cell workflow",
        text: "Discussion focus: Align cell batches, comparison groups and sample identifiers across DC preparation, T-cell preparation and functional readouts.",
      },
      {
        type: "prose",
        text: "We began work with commercial PBMC material and prepared the DC and T-cell conditions for first-round screening.",
      },
    ],
  },
  {
    id: "wet-2026-08-20-11",
    start: "2026-08-20",
    end: "2026-08-24",
    title: "First-round electroporation, co-culture and screening",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Linking material quality to the screen",
        text: "Discussion focus: Keep representative-preparation quality results linked to the tested sample. Compare modules within each antigen source while retaining cell-batch and control records.",
      },
      {
        type: "prose",
        text: "We carried out the first-round electroporation, co-culture and screening using quality-checked circRNA materials.",
      },
      {
        type: "prose",
        text: "The quality record for the first-round screening material showed the following representative-preparation result. At a 4 µL input, the representative TROP2-CTL1 preparation had a recorded circular-to-linear-associated signal ratio of 32.5:1 and an estimated circular fraction of 96.96±0.70% across three technical replicate wells. This readout describes that representative preparation, rather than an identical fraction measured separately for all 13 preparations.",
      },
      {
        type: "table",
        label: "Table Wet-Table1",
        title: "First-round RNA circularity assessment",
        headers: [
          "Input volume",
          "ΔCq (linear − circular)",
          "Circular : linear",
          "Estimated circular fraction",
        ],
        rows: [
          ["2 µL", "3.70 ± 0.02", "13.0∶1", "92.85 ± 0.08%"],
          ["4 µL", "5.02 ± 0.37", "32.5∶1", "96.96 ± 0.70%"],
          ["6 µL", "4.72 ± 0.45", "26.4∶1", "96.25 ± 1.14%"],
          ["All nine wells", "4.48 ± 0.67", "22.4∶1", "95.35 ± 2.01%"],
        ],
        caption:
          "RT-qPCR assessment of representative TROP2-CTL1 RNA; three technical wells per input volume. The pooled nine wells span three input conditions, not nine biological replicates.",
      },
    ],
  },
  {
    id: "wet-2026-08-24-12",
    start: "2026-08-24",
    end: "2026-08-24",
    title: "First-round results and Combined selection",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Selecting and combining eight modules",
        text: "Discussion focus: How can two modules from each antigen source preserve the four-antigen design? Discuss the Combined arrangement, linkers and second-round groups with Dry Lab, and review their connection with the earlier animal-evaluation framework.",
      },
      {
        type: "prose",
        text: "We tested 13 first-round preparations in the DC–T-cell system using ELISpot. The within-run comparison supported selecting two modules from each antigen source. TROP2 CTL1 and CTL2 recorded 271 and 217 spots, respectively.",
      },
      {
        type: "prose",
        text: "We supplemented first-round CD8/CD69 and K562 killing measurements to document cell activation and overall effector activity.",
      },
      {
        type: "prose",
        text: "We reviewed the first-round screen and selected two modules from each antigen source. The eight selected modules were TROP2 CTL1/CTL2, B7-H4 CTL1/CTL2, Nectin-4 CTL1/CTL2 and LIV-1 CTL2/CTL3 for the subsequent Combined design.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure2",
        title: "First-round ELISpot",
        assets: ["wetFigure05"],
        caption: "ELISpot comparison of the 13 first-round preparations.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure3",
        title: "First-round CD8/CD69",
        assets: ["wetFigure06"],
        caption:
          "Representative CD8/CD69 plots for the two leading TROP2 conditions.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure4",
        title: "First-round K562 killing",
        assets: ["wetFigure07"],
        caption: "K562 killing by first-round effector-cell preparations.",
      },
    ],
  },
  {
    id: "wet-2026-08-25-13",
    start: "2026-08-25",
    end: "2026-08-27",
    title: "Combined sequence verification and second-round preparation",
    blocks: [
      {
        type: "prose",
        text: "We checked the Combined sequence version with Dry Lab, organised the materials for the second round of experiments and initiated plasmid identity verification and quality control.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure5",
        title: "Combined plasmid map",
        assets: ["wetFigure08"],
        caption:
          "Plasmid map of the construct integrating eight selected modules.",
      },
    ],
  },
  {
    id: "wet-2026-08-27-14",
    start: "2026-08-27",
    end: "2026-08-30",
    title: "Second-round quality control, electroporation and co-culture",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "From molecular identity to functional readouts",
        text: "Discussion focus: Connect DNA-template and junction checks with RNA persistence, protein expression, DC maturation and T-cell functional comparisons. Keep the five preparations and their sample labels consistent.",
      },
      {
        type: "prose",
        text: "We checked second-round DNA templates, RNA circularisation and the Combined junction alongside preparation for the functional comparisons. Junction sequencing identified the expected head-to-tail connection. Purified Combined had a circular-to-linear-associated signal ratio of 145.7:1 and an estimated circular fraction of 99.30±0.17%.",
      },
      {
        type: "prose",
        text: "We carried out second-round electroporation and co-culture, preparing the effector-cell conditions for the functional comparisons.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure6",
        title: "Second-round DNA templates",
        assets: ["wetFigure09"],
        caption:
          "Gel electrophoresis of four antigen-encoding DNA transcription templates.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure7",
        title: "Combined junction sequencing",
        assets: ["wetFigure10"],
        caption:
          "Sanger sequencing of the junction-spanning amplification product identified the expected head-to-tail connection.",
      },
    ],
  },
  {
    id: "wet-2026-08-28-15",
    start: "2026-08-28",
    end: "2026-08-31",
    title: "CCK-8 viability assay",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Separating carrier effects from target-cell killing",
        text: "Discussion focus: Empty-LNP effects on DC viability and effector-cell killing address different questions. Keep the cell identity, input units and controls explicit for each assay.",
      },
      {
        type: "prose",
        text: "We assessed immature moDC viability after 24 h of empty-LNP exposure at nominal inputs of 0, 50, 100, 200 and 400 ng per well, with four wells per dose. Viability remained near baseline at 50–200 ng and decreased to 57.2±5.8% at 400 ng. The dataset was completed by 31 August for Cell2Dose calibration.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure8",
        title: "Empty-LNP DC viability",
        assets: ["wetFigure11"],
        caption: "DC viability across the tested nominal empty-LNP inputs.",
      },
    ],
  },
  {
    id: "wet-2026-08-28-16",
    start: "2026-08-28",
    end: "2026-09-03",
    title: "Molecular and cellular supplementary readouts",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Connecting the evidence chain",
        text: "Discussion focus: What does each RNA, protein, DC, T-cell and ELISpot measurement establish? Compare the roles of expression, maturation-associated phenotypes and functional outputs without treating them as interchangeable readouts.",
      },
      {
        type: "prose",
        text: "We measured RNA persistence at 37 ℃. circRNA retained 71.9% and 39.5% of its own 0 h signal at 24 h and 72 h; the corresponding linear precursor retained 5.9% and 2.7%. This time course ran alongside the cell comparisons.",
      },
      {
        type: "prose",
        text: "We assessed protein expression and compared DC maturation. Anti-FLAG Western blotting detected a band near 50 kDa in the circRNA-electroporated lane, supporting expression of the encoded protein. CD80⁺CD86⁺ DCs increased from 10.33±0.55% in Blank to 22.37±0.31% in Combined, a 2.16-fold difference.",
      },
      {
        type: "prose",
        text: "We completed second-round T-cell phenotyping and the five-group ELISpot comparison. Combined showed relatively high values in the CD8/CD69, CD8/CD28 and CD45RO/CCR7 comparisons. Spot counts were 32 for Blank, 198 for TROP2 CTL1, 227 for TROP2 CTL2, 298 for TROP2 CTL1+2 and 367 for Combined.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure9",
        title: "RNA persistence gel",
        assets: ["wetFigure12"],
        caption:
          "circRNA and linear precursor signals at 0, 24, 48 and 72 h at 37 ℃.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure10",
        title: "Relative RNA band intensity",
        assets: ["wetFigure13"],
        caption:
          "Band intensities normalised to each RNA form’s own 0 h signal.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure11",
        title: "Anti-FLAG Western blot",
        assets: ["wetFigure14"],
        caption: "Anti-FLAG signal near 50 kDa after circRNA electroporation.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure12",
        title: "DC maturation flow cytometry",
        assets: ["wetFigure15"],
        caption:
          "Representative CD80/CD86 flow-cytometry plots for the five preparations.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure13",
        title: "DC maturation quantification",
        assets: ["wetFigure16"],
        caption: "Comparison of CD80⁺CD86⁺ DC proportions across five groups.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure14",
        title: "T-cell activation phenotype",
        assets: ["wetFigure17"],
        caption:
          "Representative CD8/CD69 plots and corresponding quantification.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure15",
        title: "T-cell co-stimulation phenotype",
        assets: ["wetFigure18"],
        caption:
          "Representative CD8/CD28 plots and corresponding quantification.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure16",
        title: "Effector-memory-associated phenotype",
        assets: ["wetFigure19"],
        caption:
          "Representative CD45RO/CCR7 plots and corresponding quantification.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure17",
        title: "Second-round ELISpot",
        assets: ["wetFigure20"],
        caption:
          "IFN-γ ELISpot comparison of the five second-round preparations.",
      },
    ],
  },
  {
    id: "wet-2026-08-30-17",
    start: "2026-08-30",
    end: "2026-08-31",
    title: "Three-ratio cytotoxicity assay",
    blocks: [
      {
        type: "prose",
        text: "We completed MDA-MB-231 target-cell killing measurements at E:T ratios of 20:1, 40:1 and 80:1. Blank and Combined each had three records per ratio; Combined showed the highest recorded killing across the tested preparations at all three ratios. The Blank and Combined data were organised for background correction and Cell2Dose calibration.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure18",
        title: "MDA-MB-231 killing",
        assets: ["wetFigure21"],
        caption: "Target-cell killing at three effector-to-target ratios.",
      },
    ],
  },
  {
    id: "wet-2026-08-31-18",
    start: "2026-08-31",
    end: "2026-08-31",
    title: "Core cell-data handoff",
    blocks: [
      {
        type: "prose",
        text: "We handed the CCK8 and three-ratio cytotoxicity datasets to Dry Lab, together with sample identifiers, dose and E:T labels, controls and replicate records. These two datasets formed the core response-curve calibration inputs available before 1 September.",
      },
    ],
  },
  {
    id: "wet-2026-09-01-19",
    start: "2026-09-01",
    end: "2026-09-03",
    title: "In vitro construction and validation of TROP2-expressing 4T1 cells",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Preparing the model-cell input",
        text: "Discussion focus: Align cell identity, GFP sorting, transcript detection and surface TROP2 records with the population used for the animal study.",
      },
      {
        type: "prose",
        text: "We constructed and validated the TROP2-overexpressing 4T1 cell line in vitro from 1 to 3 September, alongside the vaccine-screening work. GFP signals were recorded during transduction and sorting; 84.1% of events within the singlet gate were GFP-positive. The final cell population was 99.9% surface-TROP2-positive, compared with 0% in wild-type 4T1. Semi-quantitative RT-PCR supported an order-of-magnitude increase in transcript signal; its 75.83±3.27-fold readout is not treated as a calibrated exact expression ratio.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure19",
        title: "TROP2 transcript detection",
        assets: ["wetFigure22"],
        caption:
          "Semi-quantitative TROP2 transcript comparison in the model cells.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure20",
        title: "Surface TROP2 expression",
        assets: ["wetFigure23"],
        caption:
          "Surface TROP2 staining in wild-type and engineered 4T1 cells.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure21",
        title: "GFP fluorescence",
        assets: ["wetFigure24"],
        caption: "GFP fluorescence recorded after lentiviral transduction.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure22",
        title: "GFP sorting gates",
        assets: ["wetFigure25"],
        caption: "Flow-cytometry gates used to select GFP-positive cells.",
      },
    ],
  },
  {
    id: "wet-2026-09-04-20",
    start: "2026-09-04",
    end: "2026-09-04",
    title: "Animal Use approval and dose confirmation",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Translating the plan into an animal study",
        text: "Discussion focus: Review groups, administration arrangements, welfare criteria and endpoint records together with the practical dose choice.",
      },
      {
        type: "prose",
        text: "The Animal Use Form was approved. We reviewed the preliminary Cell2Dose comparison and experimental plan with Dry Lab and the supervisors and confirmed 10 µg for the animal study.",
      },
    ],
  },
  {
    id: "wet-2026-09-06-22",
    start: "2026-09-06",
    end: "2026-10-03",
    title: "Animal-study implementation and longitudinal monitoring",
    blocks: [
      {
        type: "prose",
        text: "We initiated the TROP2-expressing 4T1 tumour study in three groups: PBS, empty-vector circRNA–LNP and Combined circRNA–LNP, with five mice per group. Five administrations were completed during this period, with a Combined dose of 10 µg per administration. Animal condition and tumour growth were monitored and recorded throughout.",
      },
    ],
  },
  {
    id: "wet-2026-09-17-21",
    start: "2026-09-17",
    end: "2026-09-19",
    title: "Normal-cell safety Check-ins and comparison",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Interpreting target preference within the panel",
        text: "Discussion focus: Compare tumour and normal targets under the same tested E:T conditions and distinguish this panel comparison from empty-LNP DC viability and the earlier model-calibration assay.",
      },
      {
        type: "prose",
        text: "The normal-cell safety Check-ins were approved on 17 September. The corresponding experiments began after approval and were completed over three days, in parallel with the animal study. We compared HCAEC, LX-2, BEAS-2B and MCF-12A with the MDA-MB-231 tumour target. At E:T 80:1, tumour-target killing was 59.24±2.10%, versus 0.78%–2.77% for the four normal targets; at 100:1, the values were 62.07±3.58% and 1.31%–3.47%. These records were separate from the earlier three-ratio Cell2Dose calibration data.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure23",
        title: "Tumour and non-tumour targets",
        assets: ["wetFigure26"],
        caption: "Killing of tumour and non-tumour targets at 80:1 and 100:1.",
      },
    ],
  },
  {
    id: "wet-2026-10-04-23",
    start: "2026-10-04",
    end: "2026-10-09",
    title: "Continued observations and endpoint preparation",
    blocks: [
      {
        type: "prose",
        text: "We continued tumour-growth and animal-condition observations and prepared the endpoint sample identifiers and collection records.",
      },
    ],
  },
  {
    id: "wet-2026-10-09-24",
    start: "2026-10-09",
    end: "2026-10-09",
    title: "Endpoint assessment and tissue collection",
    blocks: [
      {
        type: "discussion",
        label: "Brainstorming",
        title: "Interpreting tumour and immune observations together",
        text: "Discussion focus: Connect tumour control with systemic immune readouts under the same group and animal identifiers, and organise the samples for local tissue imaging.",
      },
      {
        type: "prose",
        text: "We completed endpoint assessment, tumour and spleen collection and the splenic immune measurements. Mean endpoint tumour volumes were 233.64±28.33 mm³ for PBS, 90.36±13.51 mm³ for empty vector and 24.20±9.72 mm³ for Combined (five animals per group). Combined volumes were 89.6% lower than PBS and 73.2% lower than empty vector. The splenic panels assessed DC maturation, CD8 activation, memory-associated phenotype, intracellular IFN-γ and Granzyme B; quantification used three animals per group.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure24",
        title: "Tumour growth curves",
        assets: ["wetFigure27"],
        caption: "Mean tumour growth in PBS, empty-vector and Combined groups.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure25",
        title: "Excised tumours at the endpoint",
        assets: ["wetFigure28"],
        caption:
          "Excised tumours from the three comparison groups at the endpoint.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure26",
        title: "Splenic DC maturation",
        assets: ["wetFigure29"],
        caption:
          "Representative splenic DC plots and quantification across three groups.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure27",
        title: "Splenic CD8 activation",
        assets: ["wetFigure30"],
        caption: "Splenic CD8 activation-associated plots and quantification.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure28",
        title: "Splenic memory-associated phenotype",
        assets: ["wetFigure31"],
        caption:
          "Splenic memory-associated phenotype plots and quantification.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure29",
        title: "Splenic intracellular IFN-γ",
        assets: ["wetFigure32"],
        caption:
          "Intracellular IFN-γ in splenic CD8 T cells after stimulation.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure30",
        title: "Splenic intracellular Granzyme B",
        assets: ["wetFigure33"],
        caption:
          "Intracellular Granzyme B in splenic CD8 T cells after stimulation.",
      },
    ],
  },
  {
    id: "wet-2026-10-10-25",
    start: "2026-10-10",
    end: "2026-10-13",
    title: "Tumour immunofluorescence and result organisation",
    blocks: [
      {
        type: "prose",
        text: "We stained and imaged the tumour sections and organised the CD8 and Granzyme B channels with the endpoint records. Representative fields showed stronger CD8-associated signals in Combined; the tissue images were interpreted qualitatively.",
      },
      {
        type: "figure",
        label: "Figure Wet-Figure31",
        title: "Tumour immune-signal imaging",
        assets: ["wetFigure34"],
        caption:
          "Representative tumour CD8 and Granzyme B channels, interpreted qualitatively.",
      },
    ],
  },
  {
    id: "wet-2026-10-13-26",
    start: "2026-10-13",
    end: "2026-10-13",
    title: "Wet Lab completion and handoff",
    blocks: [
      {
        type: "prose",
        text: "We completed Wet Lab work, checked sample and figure correspondence and handed the final experimental materials to Dry Lab and Wiki.",
      },
    ],
  },
];

export const notebookPage: WikiPageContent = {
  route: "/notebook",
  category: "project",
  chapter: "Project / 06 of 07",
  eyebrow: "Notebook",
  title: "Notebook",
  lede: "",
  boundary: "",
  visual: "notebook-trace",
  visualLabel: "Wet Lab notebook",
  visualSteps: [],
  facts: [],
  sections: [
    {
      id: "notebook-wet-lab",
      index: "01",
      kicker: "",
      title: "Wet Lab",
      summary: "",
      hideHeading: true,
      blocks: [{ type: "feature", key: "wet-lab-notebook" }],
    },
  ],
  links: [],
  next: {
    path: "/safety-and-security",
    label: "Safety and Security",
    title: "Where Must Innovation Draw the Line?",
  },
};
