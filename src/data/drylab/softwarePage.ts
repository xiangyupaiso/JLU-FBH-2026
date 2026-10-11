import type { WikiPageContent, WikiContentBlock } from "../../components/wiki/wikiPageTypes";
import type { CitationReference } from "../citations/citationTypes";
import { getSoftwareImage, softwareFigures } from "./softwareAssets";

const blocks = (value: unknown[]): WikiContentBlock[] => value.map((block) => {
  if ((block as { type?: string }).type === "figure") {
    const key = (block as { asset: keyof typeof softwareFigures }).asset;
    const asset = softwareFigures[key];
    const figureMatch = asset.caption.match(/^Figure\s+([0-9]+[A-Z]?)(?:\.|\s)/i);
    return {
      type: "figure",
      src: getSoftwareImage(key),
      alt: asset.alt,
      caption: asset.caption.replace(/^Figure\s+[0-9]+[A-Z]?\.\s*/i, ""),
      figureLabel: figureMatch ? `FIG. ${figureMatch[1]}` : undefined,
    };
  }
  return block as WikiContentBlock;
});

/** Sources cited on this page, ordered by first appearance in the manuscript. */
export const softwareReferences: CitationReference[] = [
  {
    id: 1,
    authors: "McLaughlin JA, Beal J, Mısırlı G, et al.",
    title:
      "The Synthetic Biology Open Language (SBOL) Version 3: Simplified Data Exchange for Bioengineering.",
    journal: "Frontiers in Bioengineering and Biotechnology.",
    volumeYear: "2020;8:1009.",
    links: [
      {
        href: "https://doi.org/10.3389/fbioe.2020.01009",
        label: "doi:10.3389/fbioe.2020.01009",
      },
    ],
  },
  {
    id: 2,
    authors: "Robertson MP, Scott WG.",
    title: "The structural basis of ribozyme-catalyzed RNA assembly.",
    journal: "Science.",
    volumeYear: "2007;315:1549–1553.",
    links: [
      {
        href: "https://doi.org/10.1126/science.1136231",
        label: "doi:10.1126/science.1136231",
      },
    ],
  },
  {
    id: 3,
    authors: "Vita R, Mahajan S, Overton JA, et al.",
    title: "The Immune Epitope Database (IEDB): 2018 update.",
    journal: "Nucleic Acids Research.",
    volumeYear: "2019;47:D339–D343.",
    links: [
      {
        href: "https://doi.org/10.1093/nar/gky1006",
        label: "doi:10.1093/nar/gky1006",
      },
    ],
  },
  {
    id: 4,
    authors: "Altschul SF, Gish W, Miller W, Myers EW, Lipman DJ.",
    title: "Basic local alignment search tool.",
    journal: "Journal of Molecular Biology.",
    volumeYear: "1990;215:403–410.",
    links: [
      {
        href: "https://doi.org/10.1016/S0022-2836(05)80360-2",
        label: "doi:10.1016/S0022-2836(05)80360-2",
      },
    ],
  },
  {
    id: 5,
    authors: "Hofacker IL.",
    title: "Vienna RNA secondary structure server.",
    journal: "Nucleic Acids Research.",
    volumeYear: "2003;31:3429–3431.",
    links: [
      {
        href: "https://doi.org/10.1093/nar/gkg599",
        label: "doi:10.1093/nar/gkg599",
      },
    ],
  },
  {
    id: 6,
    authors: "Shen T, Hu Z, Sun S, et al.",
    title:
      "Accurate RNA 3D structure prediction using a language model-based deep learning approach.",
    journal: "Nature Methods.",
    volumeYear: "2024;21:2287–2298.",
    links: [
      {
        href: "https://doi.org/10.1038/s41592-024-02487-0",
        label: "doi:10.1038/s41592-024-02487-0",
      },
    ],
  },
  {
    id: 7,
    authors: "Wang W, Peng Z, Yang J.",
    title:
      "Predicting RNA 3D structure and conformers using a pre-trained secondary structure model and structure-aware attention.",
    journal: "Nature Machine Intelligence.",
    volumeYear: "2026;8:722–734.",
    links: [
      {
        href: "https://doi.org/10.1038/s42256-026-01223-x",
        label: "doi:10.1038/s42256-026-01223-x",
      },
    ],
  },
  {
    id: 8,
    authors: "Tarafder S, Bhattacharya D.",
    title:
      "RNAbpFlow: base pair-augmented SE(3) flow matching for conditional RNA 3D structure generation.",
    journal: "Nature Methods.",
    volumeYear: "2026;23:1349–1358.",
    links: [
      {
        href: "https://doi.org/10.1038/s41592-026-03128-4",
        label: "doi:10.1038/s41592-026-03128-4",
      },
    ],
  },
  {
    id: 9,
    authors: "Chang W, Cheng J, Allaire JJ, et al.",
    title: "*shiny: Web Application Framework for R*",
    journal: "R package documentation.",
    volumeYear: "",
    links: [
      {
        href: "https://doi.org/10.32614/CRAN.package.shiny",
        label: "doi:10.32614/CRAN.package.shiny",
      },
    ],
  },
  {
    id: 10,
    authors: "Ritchie ME, Phipson B, Wu D, et al.",
    title:
      "limma powers differential expression analyses for RNA-sequencing and microarray studies.",
    journal: "Nucleic Acids Research.",
    volumeYear: "2015;43:e47.",
    links: [
      {
        href: "https://doi.org/10.1093/nar/gkv007",
        label: "doi:10.1093/nar/gkv007",
      },
    ],
  },
  {
    id: 11,
    authors: "Chen Y, Chen L, Lun ATL, Baldoni PL, Smyth GK.",
    title:
      "edgeR v4: powerful differential analysis of sequencing data with expanded functionality and improved support for small counts and larger datasets.",
    journal: "Nucleic Acids Research.",
    volumeYear: "2025;53:gkaf018.",
    links: [
      {
        href: "https://doi.org/10.1093/nar/gkaf018",
        label: "doi:10.1093/nar/gkaf018",
      },
    ],
  },
  {
    id: 12,
    authors: "Omnes L, Angel E, Tahi F.",
    title:
      "DivideFold+: an AI-based tool for RNA secondary structure prediction with subdomains identification and visualization and data augmentation.",
    journal: "Journal of Molecular Biology.",
    volumeYear: "2026;438(18):169865.",
    links: [
      {
        href: "https://doi.org/10.1016/j.jmb.2026.169865",
        label: "doi:10.1016/j.jmb.2026.169865",
      },
    ],
  },
];

export const softwarePage: WikiPageContent = 
{
  "route": "/software",
  "category": "dry-lab",
  "chapter": "Dry Lab / Software",
  "eyebrow": "Software",
  "title": "CircuForge and TorusFold",
  "lede": "Designing, reviewing, exporting, and structurally inspecting circular RNA vaccine constructs.",
  "boundary": "",
  "visual": "software-console",
  "visualLabel": "CircuForge and TorusFold",
  "visualSteps": [],
  "facts": [],
  "sections": [
    {
      "id": "software-overview",
      "index": "1",
      "kicker": "",
      "navLabel": "Overview",
      "title": "Overview",
      "summary": "",
      "blocks": blocks([
        {
          "type": "prose",
          "paragraphs": [
            "Designing a circular RNA (circRNA) vaccine for triple-negative breast cancer (TNBC) meant turning candidate targets and epitopes into constructs we could test in the lab. Which epitopes should enter experiments? Should we also review the new peptides formed at the junctions when epitopes are combined? Answering these questions required us to connect target analysis, epitope prediction, sequence assembly, and experimental results. The information was spread across different tools. At each step, we needed to check where a candidate came from, record why we selected it, and make sure the sequence used downstream matched the team's design.",
            "We developed CircuForge so researchers could **review candidates and design constructs in one browser**. Its Design Cart stores selected epitopes and their sources for human-protein similarity review and open reading frame (ORF) assembly. After assembly, the software checks peptides formed at the junctions and reads exported files back to verify them against the design. We used this workflow in our vaccine experiments. We reviewed **17 candidate epitopes**, tested the 15 retained candidates as single-epitope circRNAs, and then selected eight epitopes based on the experimental responses. CircuForge helped us assemble these into the Combined design.",
            "Once the sequence was ready, we needed to examine the overall spatial structure of the mature circRNA. Our sequence is 2,013 nt long, and the 3D predictors we selected could not model the entire sequence directly under our project configuration. After predicting fragments, we still needed to recover their relative positions, join the RNA ends, and resolve fragment joins and steric clashes. We developed TorusFold for these tasks. It aligns fragment models through their overlapping regions, **reconstructs and refines a full-length circular model**, and saves intermediate structures and geometric checks. This lets our team inspect the arrangement of the whole molecule, its circular junction, and the joins between fragments, and compare structures before and after reconstruction and refinement.",
            "**The mature circRNA sequence connects the two tools**, allowing candidate selection, construct design, and structural inspection to continue from the same design. Other teams can run the documented workflows with their own expression data, antigens, HLA backgrounds, and mature RNA sequences. They can also modify external-tool connections or add export formats. We provide source code under the Apache License 2.0, examples, and running instructions on iGEM GitLab so future teams can use and extend the software.",
            "First-time visitors can open the TorusFold example viewer to rotate and inspect the saved 2,013 nt model. To work with your own sequence, follow the usage guide below.",
            "- [Get the CircuForge source code](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge)",
            "- [Get the TorusFold source code](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid)"
          ]
        },
        {
          "type": "figure",
          "asset": "figure-01-integration-overview"
        }
      ])
    },
    {
      "id": "software-judging-q-a",
      "index": "2",
      "kicker": "",
      "navLabel": "Judging Q&A",
      "title": "Judging Q&A",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-judging-q-a-how-compatible-is-the-software-with-existing-synthetic-biology-standards-such-as-sbol-other-rfcs-and-data-formats-does-it-make-full-use-of-these-standards",
          "index": "2.1",
          "title": "How compatible is the software with existing synthetic biology standards, such as SBOL, other RFCs, and data formats? Does it make full use of these standards?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge supports **SBOL3, GenBank, FASTA, and JSON** for saving and transferring reviewed construct designs. SBOL3 preserves relationships between components and sequences. GenBank and FASTA allow common sequence tools to read the design, while JSON stores the information needed to reconstruct it [1]. Exported files are read back and checked against the source construct to reduce the risk of changes to sequences or annotations during transfer.",
            "TorusFold accepts mature RNA sequences and outputs **PDB models and JSON diagnostic files**. Molecular viewers and analysis scripts can read these files, allowing researchers to continue inspecting and analyzing the structures.",
            "See [Verifiable design exports](#cf-verified-export) and [Integration and API](#integration-api)."
          ]
        },
        {
          "type": "subheading",
          "id": "software-judging-q-a-has-the-software-been-validated-experimentally",
          "index": "2.2",
          "title": "Has the software been validated experimentally?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "We used CircuForge to review 17 candidate epitopes retrieved from IEDB, retained 15 after screening, and tested these candidates as single-epitope circRNA constructs. Based on the IFN-γ ELISpot results, we selected the two strongest-response epitopes from each antigen. CircuForge organized and assembled these **eight epitopes into the Combined design**. Subsequent sequencing, protein-expression, and functional experiments tested the resulting software-supported design.",
            "We checked TorusFold's refinement settings against the L1 ribozyme structure determined by X-ray crystallography, PDB 2OIU [2]. After **refinement starting from the crystal coordinates**, the model had an **RMSD of 1.83 Å** relative to the experimental structure. This comparison provided a reproducible check for calibrating the refinement parameters.",
            "See [Validation](#validation)."
          ]
        },
        {
          "type": "subheading",
          "id": "software-judging-q-a-can-the-software-be-applied-to-other-projects",
          "index": "2.3",
          "title": "Can the software be applied to other projects?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Other teams can use **their own expression data, antigens, HLA backgrounds, and backbones** to run CircuForge's candidate-review and construct-design workflow. They can rerun human-protein similarity review and junction checks for their own peptide combinations.",
            "TorusFold can accept mature circRNA sequences from other design workflows, organize fragment predictions, and reconstruct circular models. Teams can use either tool according to their inputs and research questions, or use them together by **transferring the mature RNA file**.",
            "See [User testing and community reuse](#community-reuse)."
          ]
        },
        {
          "type": "subheading",
          "id": "software-judging-q-a-how-well-does-the-software-integrate-with-external-tools-or-software-applications-including-apis-and-packages",
          "index": "2.4",
          "title": "How well does the software integrate with external tools or software applications, including APIs and packages?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge retrieves protein, epitope, alignment, and Part information from **UniProt, IEDB, NCBI BLASTP, and the iGEM Registry** for candidate and construct review [3][4].",
            "TorusFold uses ViennaRNA to predict possible base pairs and passes this information to later modeling stages as constraints [5]. For 3D modeling, TorusFold can call **RhoFold+, trRosettaRNA2, and RNAbpFlow** to generate models for overlapping RNA fragments [6][7][8]. It then aligns neighboring models through their overlaps, reconstructs the full-length circular structure, and uses physical relaxation and refinement to resolve joins and steric clashes.",
            "The **mature RNA exported by CircuForge** can be used directly as TorusFold's sequence input. Researchers can also use local APIs and standard files to bring designs and models into their own analysis workflows.",
            "See [Architecture and design choices](#architecture) and [Integration and API](#integration-api)."
          ]
        },
        {
          "type": "subheading",
          "id": "software-judging-q-a-is-the-software-easy-to-use",
          "index": "2.5",
          "title": "Is the software easy to use?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge provides a built-in example and a browser workflow organized around research tasks. First-time users can **complete the design workflow without writing scripts**. Software recommendations, user confirmation, and task status are displayed separately, so users can see what they are deciding and what the program is doing.",
            "TorusFold's example viewer supports **rotation, display changes, and circular-junction marking**, giving users a way to start by inspecting a structure. They can then follow the usage guide to run a full prediction with their own sequence.",
            "See [Usage guide](#usage) and [User testing and community reuse](#community-reuse)."
          ]
        },
        {
          "type": "subheading",
          "id": "software-judging-q-a-how-well-is-the-software-written-and-documented-so-future-teams-can-extend-and-improve-it",
          "index": "2.6",
          "title": "How well is the software written and documented so future teams can extend and improve it?"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge's architecture diagrams and module descriptions help future teams locate the implementations of candidate review, external connections, construct compilation, and export. TorusFold documents **external-tool configuration, run entry points, checkpoints, and intermediate outputs** so teams can modify individual stages and inspect their results.",
            "Repository examples, dependency records, running instructions, and test materials provide a starting point for **reproducing results and checking changes**. Teams can first run the documented example, then use the module descriptions to identify the parts they need to modify.",
            "See [Architecture and design choices](#architecture), [Installation and API](#installation), and [Open source and reuse](#open-source)."
          ]
        }
      ])
    },
    {
      "id": "software-workflow-overview",
      "index": "3",
      "kicker": "",
      "navLabel": "Workflow overview",
      "title": "Workflow overview",
      "summary": "",
      "blocks": blocks([
        {
          "type": "prose",
          "paragraphs": [
            "Users first import project data, screen targets, and review candidate epitopes. Confirmed candidates enter the Design Cart, and selected epitopes can undergo **human-protein similarity review** before assembly. Once the epitopes are assembled in the confirmed order, CircuForge checks newly formed junction peptides and inserts the payload into a reviewed backbone. After annotation and export checks, researchers obtain the design files and mature RNA sequence.",
            "TorusFold takes this mature RNA as input, uses pairing information to guide modeling, and generates candidate structures for overlapping fragments. Residues shared by neighboring fragments provide the references for alignment. The program then reconstructs and refines the full-length circular structure. **PDB models, diagnostic files, and intermediate structures** are saved together so researchers can inspect the final result or revisit a specific computational stage."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-02-candidate-workflow"
        }
      ])
    },
    {
      "id": "software-usage-guide",
      "index": "4",
      "kicker": "",
      "navLabel": "Usage guide",
      "title": "Usage guide",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-usage-guide-circuforge",
          "index": "4.1",
          "title": "CircuForge"
        },
        {
          "type": "feature",
          "key": "software-circuforge-guide"
        },
        {
          "type": "prose",
          "paragraphs": [
            "This walkthrough uses the built-in **hepatocellular carcinoma proteomics demo**. The sidebar has six steps: Prepare data, Screen targets, Select epitopes, Assemble peptides, Build construct, and Download files. Selected targets and epitopes are saved in the **Design list** for use in later steps.",
            "If you already have a target protein or candidate peptides, choose the **Target protein or Candidate peptides** entry point on Overview. The walkthrough below starts from expression data and completes a design workflow."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-1-prepare-data",
          "index": "4.1.1",
          "title": "Step 1. Prepare data"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Open **Prepare data** and click **Load demo data**, or upload your own **Expression matrix**. The software accepts CSV and XLSX files. To provide sample information, download the template and fill in **SampleID** and **Group**. Paired analysis also requires **Subject** information.",
            "Check **Assay type** and the input settings, then click **Process data**. Inspect the processing results and sample groups before continuing to Screen targets."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-03-prepare-data"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-2-screen-and-save-targets",
          "index": "4.1.2",
          "title": "Step 2. Screen and save targets"
        },
        {
          "type": "prose",
          "paragraphs": [
            "On **Screen targets**, check the comparison design. This example uses **Unpaired**, with eight tumor samples and eight normal samples. Click **Run Differential Analysis** first. Once the analysis is complete, set the screening criteria. In this example, select **Higher in tumor**, set the minimum `|log2FC|` threshold to **1** and the FDR threshold to **0.05**, then click **Apply screening criteria**.",
            "Inspect the candidate table and the **Evidence Card** below it. Check differential expression, GTEx annotations, UniProt status, and sequence information. This example selects **P16401**. Click **Add Selected Targets to Cart** to save it in the Design list."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-04a-comparison-design"
        },
        {
          "type": "figure",
          "asset": "figure-04b-evidence-card"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-3-predict-and-review-epitopes",
          "index": "4.1.3",
          "title": "Step 3. Predict and review epitopes"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Open **Select epitopes**, choose a saved target under **Load from design list**, and click **Load target**. This example loads H1-5 / P16401. Check the **Protein sequence**. You can also enter a UniProt accession or gene name and click **Get protein sequence**.",
            "Under **Prediction settings**, set the MHC class, **Peptide Length**, and **HLA Alleles**. This example uses **MHC-I, 9 aa, and HLA-A*02:01**. Check the input that will be submitted to IEDB, then click **Predict epitopes**.",
            "When the prediction finishes, inspect fields such as Peptide, HLA allele, and **median binding percentile**. Use the column filters to narrow the candidate list. This example selects **SLVSKGTLV and ALAAGGYDV**. Click **Add to design list** to save the selected epitopes for further review and ORF assembly."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-05a-epitope-prediction"
        },
        {
          "type": "figure",
          "asset": "figure-05b-candidate-epitopes"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Before assembly, you can click **Review human similarity** to review the selected peptides against human proteins. Select **NCBI online human BLAST**, **confirm consent to submit the selected peptides to NCBI**, and click **Start review**. Inspect the returned results and request records, then save the alignment evidence. To check results later, use the saved job ID."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-4-assemble-peptides-and-check-junctions",
          "index": "4.1.4",
          "title": "Step 4. Assemble peptides and check junctions"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Open **Assemble peptides**, check the epitopes and their order in the current input list, enter an **ORF Name**, and choose the linkers. This example keeps the **GSGGS** setting. Click **Generate and check ORF** to generate and inspect the assembled sequence.",
            "Under **Review junction peptides**, select the HLA-I alleles, **confirm consent to submit the assembled ORF amino-acid sequence to IEDB**, and click **Run Junction MHC-I Scan**. The screenshot shows the settings and peptide windows before the scan. If the status is `not run`, start the scan, then inspect the returned results and review any flagged junction peptides."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-06a-assembly"
        },
        {
          "type": "figure",
          "asset": "figure-06b-junction-review"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-5-generate-and-review-the-construct",
          "index": "4.1.5",
          "title": "Step 5. Generate and review the construct"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Open **Build construct** and import your team's backbone under **Upload and Read Backbone**. You can use a SnapGene `.dna` file, GenBank file, or backbone JSON. Once the file has been read, choose the insertion or replacement method under **Feature Map and Editing Method**. Check the editing range, orientation, and reading frame.",
            "Under **Mature circRNA region**, check the **Boundary method**. This example shows an automatically identified candidate region at **723 to 2735 bp, with a length of 2,013 nt**. **Check the boundary against your team's backbone records**, confirm it, and fill in **Backbone Version** and **Confirmed By / Experimental Record**.",
            "After reviewing the backbone and editing settings, click **Apply ORF and Generate New DNA Construct**. Inspect the construct-check results under **Construct and checks**."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-07-boundary-confirmation"
        },
        {
          "type": "prose",
          "paragraphs": [
            "For Registry annotations, open **Registry review** and complete **Query, Compare, and Annotate** in order. Check the DNA matches for candidate Parts, confirm the selected Registry IDs, and click **Write Selected IDs to Construct** to write the annotations."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-6-download-and-save-files",
          "index": "4.1.6",
          "title": "Step 6. Download and save files"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Open **Download files**. After reviewing the construct checks, choose the files needed for your next task."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Download control",
            "Use"
          ],
          "rows": [
            [
              "Results workbook",
              "Save result tables for further review"
            ],
            [
              "FASTA",
              "Continue sequence analysis"
            ],
            [
              "GenBank, SBOL3",
              "Transfer sequences and annotations to downstream design tools"
            ],
            [
              "JSON, Validation ZIP",
              "Save construct records and verification materials"
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "For a native SnapGene DNA file, check the backbone's **Native write-back** status first. After completing Registry annotations, you can also download the corresponding Annotated files."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-08-downloads"
        },
        {
          "type": "prose",
          "paragraphs": [
            "To save your current work, open **Design list** and click **Save project**. To resume an existing project, choose the project file and click **Check and load**. **Activity** shows result status for the current session. **Service status** shows the status of computing services and external resources."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-torusfold",
          "index": "4.2",
          "title": "TorusFold"
        },
        {
          "type": "feature",
          "key": "software-torusfold-guide"
        },
        {
          "type": "prose",
          "paragraphs": [
            "For a first look, open the **example viewer**. Drag to rotate the saved model, change its colors and display style, and use the BSJ marking control to inspect the circular junction. Clear the marker to return to the whole-model view."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-09-viewer-overview"
        },
        {
          "type": "prose",
          "paragraphs": [
            "A full prediction starts with sequence preparation. Follow these six steps."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-1-prepare-the-mature-circrna-sequence",
          "index": "4.2.1",
          "title": "Step 1. Prepare the mature circRNA sequence"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Prepare your own mature circRNA sequence or use the project's 2,013 nt example sequence. Save it in the input file required by the runner. For a sequence exported from CircuForge, retain the **construct ID and sequence hash** with it."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-2-configure-the-prediction-environment",
          "index": "4.2.2",
          "title": "Step 2. Configure the prediction environment"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Follow the installation guide to configure TorusFold, ViennaRNA, and the required external predictors. Check **predictor paths and model-weight settings** before starting the full calculation."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-10-one-click-setup"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-3-start-the-prediction",
          "index": "4.2.3",
          "title": "Step 3. Start the prediction"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Start the local service and submit the mature RNA, or use the sequence-running script described in the documentation. Check the **job ID or run log** to confirm that the calculation has started."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-11-run-console"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-4-monitor-progress",
          "index": "4.2.4",
          "title": "Step 4. Monitor progress"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Check progress through the local interface or status endpoint. If a run is interrupted, follow the [reproduction guide](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/docs/REPRODUCTION_RESOURCES.md) to **inspect the saved state and resume the calculation**."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-12-status-panel"
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-5-inspect-the-model",
          "index": "4.2.5",
          "title": "Step 5. Inspect the model"
        },
        {
          "type": "prose",
          "paragraphs": [
            "When the run finishes, open the **final PDB** in a molecular viewer. Inspect the circular junction and the regions identified in the diagnostic files. Use the pairing diagnostics and stage structures in the output directory to compare the reconstructed and refined models."
          ]
        },
        {
          "type": "subheading",
          "id": "software-usage-guide-step-6-save-and-share-the-results",
          "index": "4.2.6",
          "title": "Step 6. Save and share the results"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Save the **input sequence, software version, run parameters, PDB model, and diagnostic files**. Include the construct ID and sequence hash when sharing the model so the recipient can find the original design."
          ]
        }
      ]),
      "anchorIds": [
        "usage"
      ]
    },
    {
      "id": "software-architecture-and-design-choices",
      "index": "5",
      "kicker": "",
      "navLabel": "Architecture and design choices",
      "title": "Architecture and design choices",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-circuforge",
          "index": "5.1",
          "title": "CircuForge"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge organizes statistical analysis, external-data retrieval, candidate review, and sequence design around research tasks. The **Design Cart stores confirmed targets and epitopes**, connecting analysis results to later assembly."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-13-circuforge-modules"
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-1-a-guided-browser-workflow",
          "index": "5.1.1",
          "title": "Choice 1. A guided browser workflow"
        },
        {
          "type": "prose",
          "paragraphs": [
            "We chose Shiny to put analysis tables, plots, and design controls in a browser that researchers can use directly [9]. limma, edgeR, and the sequence-handling and visualization packages support analysis, data processing, and result review [10][11].",
            "The guided workflow **reduces the need to write scripts**. We accepted the interface's limits on freely changing analysis steps to prioritize reviewing results and completing designs through research tasks."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-2-separating-interactive-analysis-from-longer-tasks",
          "index": "5.1.2",
          "title": "Choice 2. Separating interactive analysis from longer tasks"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Longer prediction jobs need status tracking, while interactive result review needs to remain responsive. Shiny handles interactive analysis, and **a local FastAPI service** manages tasks that benefit from separate tracking. Docker Compose starts both services together. This makes jobs easier to track, but requires developers to maintain two runtime environments."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-3-transferring-confirmed-candidates-through-the-design-cart",
          "index": "5.1.3",
          "title": "Choice 3. Transferring confirmed candidates through the Design Cart"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Candidates need to retain their peptide sequences, HLA alleles, sources, and review records as they move to the next stage. The Design Cart uses **stable IDs, deduplication, and preserved order** to transfer confirmed candidates. Project Bundles support saving and restoring work across sessions.",
            "We keep **user confirmation as a separate step** so software recommendations and researchers' design decisions are recorded separately. KEEP, REVIEW, and REJECT display QC recommendations. Researchers confirm which candidates to use before proceeding to assembly."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-4-retaining-sources-and-retrieval-records",
          "index": "5.1.4",
          "title": "Choice 4. Retaining sources and retrieval records"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Candidate review draws on biological resources that return information in different formats. Source adapters organize the required fields and retain available **source identifiers, request states, and raw records**. Saved responses support later review, while retrieval times and refresh controls help users decide when to update the information."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-5-verifiable-design-exports",
          "index": "5.1.5",
          "title": "Choice 5. Verifiable design exports",
          "anchorIds": [
            "cf-verified-export"
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "Other software must be able to read the sequence and features correctly after export. CircuForge **reads core export formats back** and checks the information each format preserves against the source design. Each format needs its own verification logic. This extra work makes the outputs easier to pass to other researchers for continued use."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-torusfold",
          "index": "5.2",
          "title": "TorusFold"
        },
        {
          "type": "prose",
          "paragraphs": [
            "TorusFold organizes its modules around **pairing information, fragment prediction, full-length reconstruction, and refinement**. This lets long-RNA modeling run and be checked one stage at a time. Our reconstruction module uses fragment positions and shared residues to place local coordinates on the same circular RNA molecule."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-14-torusfold-stages"
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-1-retaining-full-sequence-pairing-information-during-fragment-modeling",
          "index": "5.2.1",
          "title": "Choice 1. Retaining full-sequence pairing information during fragment modeling"
        },
        {
          "type": "prose",
          "paragraphs": [
            "We need to retain **pairing information for the whole sequence** when dividing it into fragments, so later stages can use it to model the full molecule. We integrate ViennaRNA and configurable DivideFold+ information, passing candidate base pairs and their supporting information into modeling [5][12]. We retain the sources of the proposed pairs and records of which pairs were used. Researchers can compare suggestions from different sources and inspect the modeling settings."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-2-using-overlapping-fragments-as-alignment-references",
          "index": "5.2.2",
          "title": "Choice 2. Using overlapping fragments as alignment references"
        },
        {
          "type": "prose",
          "paragraphs": [
            "To let 3D prediction tools process a long input, we divide the sequence into **overlapping fragments** and use their overlaps as alignment references. The example run uses fragments of up to 200 nt with 30 nt overlaps. Configured predictors generate candidate structures for these fragments.",
            "The overlaps add some repeated computation, but give neighboring fragments shared residues that the program can use to recover their relative positions."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-3-repairing-joins-and-refining-the-reconstructed-structure",
          "index": "5.2.3",
          "title": "Choice 3. Repairing joins and refining the reconstructed structure"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Joining fragment models requires us to handle fragment boundaries, circular closure, and steric clashes. TorusFold aligns shared residues and reconstructs full-length coordinates. It then uses **structural constraints and physical refinement** to repair joins and resolve clashes.",
            "We save the reconstructed coordinates and their check results so researchers can locate joins and compare structures before and after repair."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-choice-4-saving-stage-results-and-checkpoints",
          "index": "5.2.4",
          "title": "Choice 4. Saving stage results and checkpoints"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Long-RNA modeling has several time-consuming stages. Researchers need to monitor progress and reuse completed results after an interruption. TorusFold saves **intermediate structures, diagnostic files, and checkpoints** to support stage comparisons and run recovery. We allocate additional storage and file management for these records so future teams can inspect or modify individual stages."
          ]
        },
        {
          "type": "subheading",
          "id": "software-architecture-and-design-choices-continuing-from-construct-design-to-structural-modeling",
          "index": "5.3",
          "title": "Continuing from construct design to structural modeling"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Researchers pass the mature RNA file exported by CircuForge to TorusFold to model the same construct. Saving the **construct ID and sequence hash** with the sequence links the model and its run records to the original design."
          ]
        }
      ]),
      "anchorIds": [
        "architecture"
      ]
    },
    {
      "id": "software-engineering-iterations",
      "index": "6",
      "kicker": "",
      "navLabel": "Engineering iterations",
      "title": "Engineering iterations",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-engineering-iterations-circuforge",
          "index": "6.1",
          "title": "CircuForge"
        },
        {
          "type": "prose",
          "paragraphs": [
            "V1.0 brought data import, target screening, and epitope prediction into one application. When testing it with project data, we found that the prediction table did not clearly distinguish software recommendations from final selections."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-15-workflow-evolution"
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-1-improving-candidate-review-through-an-igem-software-exchange",
          "index": "6.1.1",
          "title": "Iteration 1. Improving candidate review through an iGEM software exchange"
        },
        {
          "type": "prose",
          "paragraphs": [
            "After a software exchange involving five teams, we added **stage-specific IDs and Evidence Cards** to display candidate identities and supporting information. KEEP, REVIEW, and REJECT summarize QC recommendations, while researchers confirm which candidates they will continue to use."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-16-software-exchange"
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-2-adding-the-design-cart",
          "index": "6.1.2",
          "title": "Iteration 2. Adding the Design Cart"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Associate Professor Qingtian Guan suggested saving selected records before taking further action. In the second iteration, we **added the Design Cart** so users could compare candidates, remove duplicates, and pass them to assembly in a confirmed order."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-17-consultation"
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-3-revising-module-responsibilities-and-task-management",
          "index": "6.1.3",
          "title": "Iteration 3. Revising module responsibilities and task management"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Professor Xiangyu Meng then recommended clarifying module responsibilities, displaying the status of long-running jobs, and providing a reproducible runtime environment. We separated interactive operations from task services and added **status records, container startup, and export checks**."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-18-team-discussion"
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-torusfold",
          "index": "6.2",
          "title": "TorusFold"
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-1-preparing-long-sequences-for-fragment-prediction",
          "index": "6.2.1",
          "title": "Iteration 1. Preparing long sequences for fragment prediction"
        },
        {
          "type": "prose",
          "paragraphs": [
            "With a 2,013 nt mature circRNA, our first obstacle was that the local predictors could not process the complete input directly. We added **overlapping segmentation and recorded fragment positions** so prediction could run on the fragments and provide references for later reconstruction."
          ]
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-2-correcting-coordinate-reconstruction",
          "index": "6.2.2",
          "title": "Iteration 2. Correcting coordinate reconstruction"
        },
        {
          "type": "prose",
          "paragraphs": [
            "When joining fragment results, we found that missing templates and alignment references affected coordinate reconstruction. We **corrected the anchors, rebuilt local coordinate frames**, and retained pairing information throughout full-length reconstruction."
          ]
        },
        {
          "type": "subheading",
          "id": "software-engineering-iterations-iteration-3-calibrating-refinement-settings",
          "index": "6.2.3",
          "title": "Iteration 3. Calibrating refinement settings"
        },
        {
          "type": "prose",
          "paragraphs": [
            "During refinement, we checked the scale of the base-pair guiding forces and **adjusted `K_BPP` from 600 to 13.4**. We then checked the refinement settings against the experimental PDB 2OIU structure, testing the parameter changes and structural comparison in the same engineering iteration.",
            "These changes are recorded in the [engineering repair log](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/docs/timeline.md). The structure-comparison result is described in the Judging Q&A."
          ]
        }
      ])
    },
    {
      "id": "software-user-testing-and-community-reuse",
      "index": "7",
      "kicker": "",
      "navLabel": "User testing and community reuse",
      "title": "User testing and community reuse",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-user-testing-and-community-reuse-circuforge-user-testing",
          "index": "7.1",
          "title": "CircuForge user testing"
        },
        {
          "type": "prose",
          "paragraphs": [
            "After completing CircuForge V2.0, we invited five independent participants: two wet-lab researchers, two students with limited bioinformatics experience, and one experienced computational user. Each participant completed seven representative tasks: importing a dataset, reviewing a candidate target, screening and selecting epitopes, running NCBI BLASTP review, inspecting a linker-junction scan, compiling a circRNA construct, and exporting a validation package.",
            "In the first round, the five participants completed **29 of 35 tasks without help**, with a **median completion time of 27 minutes**. The most common difficulty was **NCBI BLASTP review**. Some users could not immediately distinguish a submitted query from a result still being processed or a completed result ready for review and export.",
            "Based on this feedback, we replaced the separate submission, status-checking, and download controls with a guided panel divided into three stages. The revised interface presents **query submission, processing status, and result review** in a fixed order. It also provides clearer status messages and a direct option to export alignment evidence.",
            "In a second round with three participants, users completed **20 of 21 tasks without help**, and the **median completion time fell to 19 minutes**. All three **independently completed BLASTP review and found the exported evidence file**."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-19-circuforge-user-testing"
        },
        {
          "type": "subheading",
          "id": "software-user-testing-and-community-reuse-torusfold-user-testing",
          "index": "7.2",
          "title": "TorusFold user testing"
        },
        {
          "type": "prose",
          "paragraphs": [
            "We invited five users who had not previously participated in TorusFold development for independent testing. Their backgrounds matched the composition of the CircuForge user-test group: two wet-lab researchers, two students with limited bioinformatics experience, and one user with a computational background. The test covered the full TorusFold workflow from input preparation to result inspection, including interaction with the generated RNA model.",
            "Participants used the project's 2,013 nt mature circRNA example. They followed the documentation to prepare the sequence and check the prediction environment, then started a prediction and monitored its status. After completion, they located the final PDB model, rotated it and changed the structural display in the viewer, and located the back-splice junction (BSJ). They also used stage structures and diagnostic files to compare the full-length reconstruction with the refined structure. Finally, they located and saved the model, diagnostic files, and corresponding construct and sequence information. We recorded whether users completed each step independently and where they paused, returned to the documentation, or asked for help.",
            "The main difficulty was **finding and understanding the outputs after prediction**. TorusFold saves the reconstructed model, refined model, final PDB, diagnostics, and several intermediate results. Experienced computational users could use these files to inspect individual stages, but first-time users found their relationships unclear. They had to determine which file represented the final structure and then locate the corresponding diagnostics before comparing reconstruction and refinement. The software had generated the information they needed, but users still had to understand the output directory's organization.",
            "We reorganized the result controls by computational stage, clearly separating **Final model, Reconstructed model, Refined model, and Diagnostics**. The results page prioritizes the final model while retaining stage structures for further inspection. We also placed BSJ inspection within the final-model viewing workflow. Users could then move from a completed task to inspecting the final model and locating the circular junction without first learning the internal file structure.",
            "After these changes, participants checked the prediction results again with the same goals. The retest focused on whether they could answer three practical questions: **where to find the final model**, what changed between reconstruction and refinement, and where the circular junction was. We retained all intermediate structures and diagnostics, but changed the order in which first-time users encountered them. This kept the full computational record available and made the main results easier to find."
          ]
        },
        {
          "type": "figure",
          "asset": "figure-20-torusfold-user-testing"
        },
        {
          "type": "subheading",
          "id": "software-user-testing-and-community-reuse-getting-started-as-another-team",
          "index": "7.3",
          "title": "Getting started as another team"
        },
        {
          "type": "prose",
          "paragraphs": [
            "The official iGEM GitLab repositories provide source code, pinned dependency records, Docker configuration, automated tests, example inputs, result schemas, and detailed README instructions. Other teams can **first reproduce a documented run** and then adapt the workflow to their own project.",
            "Teams can replace example inputs with compatible data, inspect recorded parameters and decisions, and continue working on the resulting designs through the standard files described above. They can rerun BLASTP review for their own candidate peptides and rescan the linker contexts produced by their own ORF order. The BLASTP Evidence ZIP and construct validation package retain the corresponding **requests, results, file inventories, and checksums**. Recipients can verify the transferred evidence before reviewing or modifying a design."
          ]
        }
      ]),
      "anchorIds": [
        "community-reuse"
      ]
    },
    {
      "id": "software-validation",
      "index": "8",
      "kicker": "",
      "navLabel": "Validation",
      "title": "Validation",
      "summary": "",
      "blocks": blocks([
        {
          "type": "prose",
          "paragraphs": [
            "Using CircuForge, we reviewed 17 candidate epitopes retrieved from IEDB and retained 15 after bioinformatic screening. We also carried out an AlphaFold-based structural review. The 15 retained candidates were then **tested as single-epitope circRNA constructs**. IFN-γ ELISpot detected responses of different magnitudes across the candidates, supporting the practical use of the screening workflow in our experimental vaccine design.",
            "We used the experimental ranking to select the **two strongest-response epitopes from each antigen**. CircuForge organized these eight epitopes, retained their source information, and supported their assembly into the Combined design. This step focused the final construct on the stronger candidates while keeping the selection records and assembly order available for review.",
            "We then tested the software-supported design through construction and expression experiments. **Sanger sequencing** confirmed that the Combined plasmid matched the intended sequence. **BSJ sequencing** recovered the expected head-to-tail RNA junction, and **anti-FLAG Western blot** detected the encoded fusion protein. **Second-round ELISpot and target-cell killing assays** further tested the biological function of the resulting construct.",
            "TorusFold extends this workflow to **structural examination of mature circRNA**. It reconstructs a full-length circular model and saves intermediate structures and geometric checks so researchers can inspect the circular junction and fragment joins. CircuForge supports candidate selection and construct design, while TorusFold provides a structural view of the mature RNA. Other teams can follow the documented workflow with their own candidates and sequences.",
            "See the [Results page](https://2026.igem.wiki/jlu-fbh/results) for the experimental results."
          ]
        }
      ]),
      "anchorIds": [
        "validation"
      ]
    },
    {
      "id": "software-installation-and-api",
      "index": "9",
      "kicker": "",
      "navLabel": "Installation and API",
      "title": "Installation and API",
      "summary": "",
      "blocks": blocks([
        {
          "type": "subheading",
          "id": "software-installation-and-api-before-installation",
          "index": "9.1",
          "title": "Before installation"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Check that you have the browser, container tools, or environment needed for your chosen workflow. **The example viewer requires only a browser**. A new TorusFold prediction requires Python, external predictors, and the corresponding computing resources."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Workflow",
            "Requirements",
            "Entry point after startup"
          ],
          "rows": [
            [
              "CircuForge container deployment",
              "Docker and Docker Compose",
              "Browser interface and local API"
            ],
            [
              "TorusFold example viewer",
              "Modern browser",
              "Saved 2,013 nt model"
            ],
            [
              "New TorusFold prediction",
              "Python environment, ViennaRNA, configured external predictors, and model weights",
              "Local prediction interface or sequence-running script"
            ]
          ]
        },
        {
          "type": "subheading",
          "id": "software-installation-and-api-circuforge",
          "index": "9.2",
          "title": "CircuForge"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Clone the [official CircuForge repository](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge). In the repository directory, copy the environment configuration and start the services using the commands for your operating system.",
            "On Windows PowerShell:"
          ]
        },
        {
          "type": "code",
          "language": "PowerShell",
          "code": "Copy-Item .env.example .env\ndocker compose up --build"
        },
        {
          "type": "prose",
          "paragraphs": [
            "On macOS and Linux:"
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "cp .env.example .env\ndocker compose up --build"
        },
        {
          "type": "prose",
          "paragraphs": [
            "After startup, open these addresses and **use the example workflow to check the installation**.",
            "- CircuForge interface: `http://localhost:3838`",
            "- FastAPI documentation: `http://localhost:8000/docs`",
            "- OpenAPI specification: `http://localhost:8000/openapi.json`"
          ]
        },
        {
          "type": "subheading",
          "id": "software-installation-and-api-torusfold",
          "index": "9.3",
          "title": "TorusFold"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Clone the [official TorusFold repository](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid), create a Python environment, and install the core package and ViennaRNA from the repository directory."
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "pip install -e .\nconda install -c conda-forge viennarna"
        },
        {
          "type": "prose",
          "paragraphs": [
            "Follow the [deployment guide](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/docs/DEPLOY_EXTERNAL.md) to configure the required predictors, model weights, and paths. First check that the package imports successfully, then follow the usage guide to run the example or your own mature RNA sequence."
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "python -c \"import torusfold; print(torusfold.__file__)\""
        },
        {
          "type": "prose",
          "paragraphs": [
            "Start the local prediction service, then open `http://127.0.0.1:8877` in your browser."
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "python serve.py"
        },
        {
          "type": "prose",
          "paragraphs": [
            "The documented 2,013 nt runner uses `sequence.txt` as its input file. Start it with:"
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "python run_2013nt.py"
        },
        {
          "type": "subheading",
          "id": "software-installation-and-api-integration-and-api",
          "index": "9.4",
          "title": "Integration and API",
          "anchorIds": [
            "integration-api"
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge's local API supports construct compilation and junction-window checks. The OpenAPI documentation describes the request fields."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Software",
            "Endpoint",
            "Purpose"
          ],
          "rows": [
            [
              "CircuForge",
              "`POST /v1/constructs/compile`",
              "Compile a peptide cassette or construct"
            ],
            [
              "CircuForge",
              "`POST /v1/constructs/junction-windows`",
              "Generate junction-spanning peptide windows"
            ],
            [
              "TorusFold",
              "`POST /api/predict`",
              "Submit a mature RNA prediction job"
            ],
            [
              "TorusFold",
              "`GET /api/status`",
              "Check job progress and completion status"
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "The following CircuForge request uses two demo peptides."
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "curl -X POST http://localhost:8000/v1/constructs/compile \\\n-H \"Content-Type: application/json\" \\\n-d '{\"project_id\":\"demo-project\",\"construct_name\":\"TROP2_demo\",\"epitopes\":[{\"id\":\"EPI-001\",\"sequence_aa\":\"SLYNTVATL\",\"mhc_class\":\"I\"},{\"id\":\"EPI-002\",\"sequence_aa\":\"KLTQDLFL\",\"mhc_class\":\"II\"}],\"linkers\":{\"mhci\":\"AAY\",\"mhcii\":\"GPGPG\"}}'"
        },
        {
          "type": "prose",
          "paragraphs": [
            "The demo request **does not include a backbone**, so it returns a peptide cassette with the status `CASSETTE_ONLY_BACKBONE_NOT_PROVIDED`. To request a complete construct, add the backbone fields defined in `http://localhost:8000/docs`.",
            "TorusFold's prediction endpoint accepts mature RNA and **returns a job ID**. Use the status endpoint to monitor progress. After running `python serve.py`, the following short request demonstrates job submission."
          ]
        },
        {
          "type": "code",
          "language": "Bash",
          "code": "curl -X POST http://127.0.0.1:8877/api/predict \\\n-H \"Content-Type: application/json\" \\\n-d '{\"sequence\":\"AUGCUAGCUAGCUAGCUAGC\"}'"
        },
        {
          "type": "prose",
          "paragraphs": [
            "See the [server implementation](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/serve.py) for request fields and status handling."
          ]
        },
        {
          "type": "subheading",
          "id": "software-installation-and-api-network-modes-and-service-status",
          "index": "9.5",
          "title": "Network modes and service status"
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge's network mode and Service Status page show which functions are available and which local or external resources they need. Before startup, set `CIRCURE_NETWORK_MODE` to `auto`, `online`, or `offline`. The default is `auto`. In `offline` mode, **new NCBI and IEDB requests are disabled**. Users can check the currently available dependencies and functions on Service Status."
          ]
        }
      ]),
      "anchorIds": [
        "installation"
      ]
    },
    {
      "id": "software-planned-improvements",
      "index": "10",
      "kicker": "",
      "navLabel": "Planned improvements",
      "title": "Planned improvements",
      "summary": "",
      "blocks": blocks([
        {
          "type": "prose",
          "paragraphs": [
            "In the next round, we will expand CircuForge's task testing and invite independent users to test TorusFold's viewing and installation tasks. We will improve **BLASTP job recovery and later result queries** to reduce the effect of public-queue waiting times on users' work.",
            "For TorusFold, we will compare different **long-range pairing and cross-fragment reconstruction strategies** and record how parameter changes affect structures at each stage. We also plan to add a transfer command between the two tools that checks the sequence hash and saves the construct ID."
          ]
        }
      ])
    },
    {
      "id": "software-open-source-and-reuse",
      "index": "11",
      "kicker": "",
      "navLabel": "Open source and reuse",
      "title": "Open source and reuse",
      "summary": "",
      "blocks": blocks([
        {
          "type": "prose",
          "paragraphs": [
            "The source code for each tool is stored in the team's iGEM GitLab software repository. Each README explains the software's purpose, intended users, installation, operation, and how to reproduce the main results. The code is released under the **Apache License 2.0**, with the license file included alongside the source."
          ]
        },
        {
          "type": "table",
          "headers": [
            "Software",
            "Source code",
            "Usage and running instructions",
            "License"
          ],
          "rows": [
            [
              "CircuForge",
              "[iGEM GitLab](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge)",
              "[README](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge/-/blob/main/README.md)",
              "[Apache License 2.0](https://gitlab.igem.org/2026/software/jlu-fbh/circuforge/-/blob/main/LICENSE)"
            ],
            [
              "TorusFold",
              "[iGEM GitLab](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid)",
              "[README](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/README.md)",
              "[Apache License 2.0](https://gitlab.igem.org/2026/software/jlu-fbh/torusfold-hybrid/-/blob/main/LICENSE)"
            ]
          ]
        },
        {
          "type": "prose",
          "paragraphs": [
            "CircuForge uses committed R and Python dependency records to restore its environment and provides container build and startup commands. TorusFold's installation, predictor-configuration, and result-reproduction instructions help future teams prepare new runs.",
            "Third-party predictors and weights must be obtained **under their own terms**. Future teams can provide compatible inputs or develop new adapters to continue using and improving the relevant modules."
          ]
        }
      ]),
      "anchorIds": [
        "open-source"
      ]
    },
    {
      "id": "software-references",
      "index": "12",
      "kicker": "",
      "navLabel": "References",
      "title": "References",
      "summary": "",
      "blocks": blocks([
        {
          "type": "feature",
          "key": "software-references"
        }
      ])
    }
  ],
  "links": [
    { "path": "/model", "label": "Model" },
    { "path": "/hardware", "label": "Hardware" },
    { "path": "/games", "label": "Games" }
  ],
  "next": {
    "path": "/hardware",
    "label": "Hardware",
    "title": "Hardware"
  }
};
