import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const designPage: WikiPageContent = {
  route: "/design",
  category: "wet-lab",
  chapter: "Wet Lab / 01 of 04",
  eyebrow: "Construct Design · Molecular Blueprint",
  title: "Design",
  lede: "Molecular construct engineering, multi-antigen cassettes, and circRNA circularization architecture.",
  boundary:
    "This section details the genetic construct design, codon optimization, self-splicing group I intron frameworks, and multi-epitope layout for CirCure. Full functional assays and protocol verification are documented in the subsequent Experiments section.",
  visual: "platform-orbit",
  visualLabel: "Multi-antigen circRNA construct blueprint",
  visualSteps: [
    "antigen selection",
    "backbone topology",
    "cleavage spacers",
    "circularization",
  ],
  facts: [
    { label: "Targeting", value: "Four complementary TNBC surface tumor antigens." },
    { label: "Backbone", value: "Group I Permuted Intron-Exon (PIE) circularization." },
    { label: "Expression", value: "High-efficiency internal ribosome entry and 2A self-cleaving peptides." },
    { label: "Safety", value: "Non-integrating, non-replicating, cytoplasmic circRNA." },
  ],
  sections: [
    {
      id: "target-strategy",
      index: "01",
      kicker: "01 / Strategy",
      navLabel: "Target Strategy",
      title: "Rationale Behind Multi-Antigen circRNA Architecture",
      summary:
        "Targeting clonal heterogeneity in TNBC through synergistic multi-epitope presentation.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Triple-negative breast cancer (TNBC) exhibits remarkable intra-tumoral heterogeneity and rapid therapeutic resistance. Conventional monovalent therapies frequently succumb to antigen escape. To surmount this barrier, CirCure was conceived as a multi-antigen circular RNA vaccine encoding four key tumor-associated antigens (Trop-2, LIV-1, Nectin-4, and B7-H4).",
            "By consolidating four clinically validated antigens into a single continuous reading frame separated by self-cleaving peptide linkers, our design ensures balanced, simultaneous expression of all target immunogens in antigen-presenting cells.",
          ],
        },
        {
          type: "note",
          label: "Design Principles",
          body: "1. Clonal Coverage: Target multiple independent tumor markers to prevent single-antigen immune escape.\n2. Sustained Kinetics: Leverage circular RNA topology to achieve prolonged intracellular half-life compared to linear mRNA.\n3. Modular Exchange: Construct cassette junctions using standard restriction/homology adapters for rapid reprogramming.",
        },
      ],
    },
    {
      id: "circularization-system",
      index: "02",
      kicker: "02 / Circularization",
      navLabel: "Circularization System",
      title: "Group I Permuted Intron-Exon (PIE) Framework",
      summary:
        "Engineering autocatalytic RNA circularization with minimal sequence scar.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Circularization of our in vitro transcribed (IVT) precursor RNA is mediated by an engineered T4 bacteriophage thymidylate synthase (td) group I permuted intron-exon (PIE) system. In this arrangement, the 3' intron splice site and flanking exon precede the 5' intron splice site in the linear precursor.",
            "Upon addition of GTP and magnesium ions, a two-step transesterification reaction spontaneously circularizes the intervening coding region, releasing linear intron fragments that are subsequently removed by RNase R digestion.",
          ],
        },
        {
          type: "table",
          caption: "Table 1 | Circularization Construct Elements and Specifications",
          headers: ["Element", "Origin / Type", "Length", "Functional Role"],
          rows: [
            [
              "T7 Promoter",
              "Bacteriophage T7",
              "17 bp",
              "Drives high-yield in vitro transcription from linearized plasmid template",
            ],
            [
              "5' Homology Arm",
              "Engineered duplex",
              "35 bp",
              "Brings 5' and 3' splice junctions into close spatial proximity",
            ],
            [
              "Group I Intron 3'",
              "T4 phage td gene",
              "248 bp",
              "Provides nucleophilic attack site for initiating transesterification",
            ],
            [
              "Internal Ribosome Entry (IRES)",
              "CVB3 / EMCV variant",
              "738 bp",
              "Mediates cap-independent initiation of translation in host cytoplasm",
            ],
            [
              "Multi-Antigen ORF",
              "Synthetic polyprotein",
              "~2,400 bp",
              "Encodes Trop-2, LIV-1, Nectin-4, and B7-H4 linked by 2A peptides",
            ],
            [
              "Group I Intron 5'",
              "T4 phage td gene",
              "180 bp",
              "Completes circular splicing and releases intact closed circular RNA",
            ],
          ],
        },
      ],
    },
    {
      id: "translation-elements",
      index: "03",
      kicker: "03 / Translation",
      navLabel: "Translation Architecture",
      title: "Polycistronic Cleavage and IRES Kinetics",
      summary:
        "Dual-mechanism translation initiation and stoichiometric antigen release.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Because circular RNA lacks free 5' cap and 3' poly(A) tail structures, ribosomal recruitment relies on an engineered Internal Ribosome Entry Site (IRES). We screened multiple viral and cellular IRES candidates, selecting a modified Coxsackievirus B3 (CVB3) IRES sequence optimized for robust expression in mammalian dendritic cells and macrophages.",
            "Between individual antigen domains, high-efficiency P2A and T2A self-cleaving peptide sequences (flanked by flexible GSG linkers) facilitate ribosomal 'skipping'. This mechanism allows independent folding and distinct MHC processing for each of the four encoded antigens from a single translation event.",
          ],
        },
      ],
    },
    {
      id: "sequence-optimization",
      index: "04",
      kicker: "04 / Optimization",
      navLabel: "Sequence Optimization",
      title: "Codon Optimization, Secondary Structure & Quality Gates",
      summary:
        "In silico modeling of secondary folding free energy and RNA stability.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Every nucleotide of the CirCure construct was computationally optimized to balance human codon usage frequency, reduce GC-rich secondary structure knots, and eliminate spurious cryptic splice sites or internal termination motifs.",
            "Free energy folding profiles computed via LinearFold and RNAfold guided the placement of spacer regions, ensuring that splice site homology stems form with high thermodynamic preference without disturbing the IRES tertiary structure.",
          ],
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental Protocols" },
    { path: "/measurement", label: "Measurement Strategy" },
    { path: "/alternative-platform", label: "Alternative Platform" },
    { path: "/engineering", label: "Engineering Success" },
  ],
  next: {
    path: "/experiments",
    label: "Experiments",
    title: "Follow the evidence into the lab.",
  },
};
