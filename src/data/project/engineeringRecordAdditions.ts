import type {
  WikiSection,
  WikiDbTLStageKey,
} from "../../components/wiki/wikiPageTypes";
import type { EngineeringIterationDatum } from "./engineeringPage";

// Transcribed from Engineering改2.md; editorial notes are not published copy.
export const cycle2Iterations: EngineeringIterationDatum[] = [
  {
    id: "eng-i-2-1",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.1",
    label: "Iteration 2.1｜Defining a traceable epitope-prediction route",
    short: "Defining a traceable epitope-prediction route",
    teams: [],
  },
  {
    id: "eng-i-2-2",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.2",
    label:
      "Iteration 2.2｜Adding structural review before experimental construction",
    short: "Adding structural review before experimental construction",
    teams: [],
  },
  {
    id: "eng-i-2-3",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.3",
    label:
      "Iteration 2.3｜Converting overlapping epitopes into continuous coding designs",
    short: "Converting overlapping epitopes into continuous coding designs",
    teams: [],
  },
  {
    id: "eng-i-2-4",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.4",
    label:
      "Iteration 2.4｜Connecting coding designs to transcribable DNA templates",
    short: "Connecting coding designs to transcribable DNA templates",
    teams: [],
  },
  {
    id: "eng-i-2-5",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.5",
    label:
      "Iteration 2.5｜Producing comparable circRNA inputs for the first screen",
    short: "Producing comparable circRNA inputs for the first screen",
    teams: [],
  },
  {
    id: "eng-i-2-6",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.6",
    label:
      "Iteration 2.6｜Selecting two responsive modules from each antigen source",
    short: "Selecting two responsive modules from each antigen source",
    teams: [],
  },
  {
    id: "eng-i-2-7",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.7",
    label: "Iteration 2.7｜Translating recognition into Vaccine Classroom",
    short: "Translating recognition into Vaccine Classroom",
    teams: [],
  },
  {
    id: "eng-i-2-8",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.8",
    label:
      "Iteration 2.8｜Making a complete experimental workflow transferable",
    short: "Making a complete experimental workflow transferable",
    teams: [],
  },
  {
    id: "eng-i-2-9",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.9",
    label:
      "Iteration 2.9｜Extending the first-round evidence from secretion to cellular action",
    short:
      "Extending the first-round evidence from secretion to cellular action",
    teams: [],
  },
  {
    id: "eng-i-2-10",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.10",
    label: "Iteration 2.10｜Integrating eight selected modules into Combined",
    short: "Integrating eight selected modules into Combined",
    teams: [],
  },
  {
    id: "eng-i-2-11",
    cycle: 2,
    cycleId: "engineering-cycle-2",
    index: "2.11",
    label:
      "Iteration 2.11｜Turning the integration route into a traceable CircuForge workflow",
    short: "Turning the integration route into a traceable CircuForge workflow",
    teams: [],
  },
];

export const cycle2Section: WikiSection = {
  summary: "",
  id: "engineering-cycle-2",
  index: "02",
  kicker: "Cycle 2 — Integration",
  navLabel: "Cycle 2 — Integration",
  title: "From epitope exploration to Combined",
  blocks: [
    {
      type: "prose",
      paragraphs: [
        "TIME continues with **I—Integration**. Cycle 1 defined four antigen sources and a common human DC–T-cell context; this cycle connected those starting points to an experimentally selected multi-antigen design. Dry Lab first reduced the peptide search through sequence prediction and structural review. Wet Lab then converted retained epitope sequences into traceable coding designs, corresponding circRNA preparations and a shared first-round screen. ELISpot, cellular activation and overall effector-activity measurements supplied complementary evidence for selecting modules and building Combined. Education and Visual Design translated recognition and experimental continuity into accessible learning experiences, while CircuForge developed the record structure needed to preserve decisions across a longer design workflow.",
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-1",
      index: "2.1",
      title: "Iteration 2.1｜Defining a traceable epitope-prediction route",
    },
    {
      type: "dbtl",
      id: "dbtl-2-1",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The four antigen sources from Cycle 1 defined the proteins to examine, but they did not yet specify which short sequences should enter an HLA-A*02:01-focused screen. Our earlier consultation with Associate Professor Qingtian Guan separated two questions that had to remain distinct: antigen selection established *where* to search, whereas epitope prediction estimated *which peptide sequences* merited experimental comparison. We therefore required every predicted candidate epitope to retain its source protein, coordinates, HLA context, prediction outputs and selection rationale. Literature research then identified canonical UniProt sequences as the common reference and the IEDB environment as the prediction entry point (The UniProt Consortium, 2025; Yan et al., 2024).",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1093/nar/gkae1010",
                  text: "The UniProt Consortium. UniProt: the Universal Protein Knowledgebase in 2025. Nucleic Acids Research. 2025;53:D609–D617.",
                  href: "https://doi.org/10.1093/nar/gkae1010",
                  hrefLabel: "doi:10.1093/nar/gkae1010",
                },
                {
                  label: "doi:10.1093/nar/gkae407",
                  text: "Yan Z, Kim K, Kim H, et al. Next-generation IEDB tools: a platform for epitope prediction and analysis. Nucleic Acids Research. 2024;52:W526–W532.",
                  href: "https://doi.org/10.1093/nar/gkae407",
                  hrefLabel: "doi:10.1093/nar/gkae407",
                },
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We used IEDB to predict overlapping nine-amino-acid peptides from the canonical sequences of the four proteins and organised the peptides entering review into a unified screening record. For each peptide, the record linked its sequence and source coordinates with predicted HLA-A*02:01 binding, sequence-based immunogenicity and processing-related outputs. Binding and immunogenicity guided the principal ranking, while processing outputs, UniProt topology annotations and published evidence supported the review of individual sequences and boundary cases (Reynisson et al., 2020; Calis et al., 2013; Peters et al., 2003; Tenzer et al., 2005). This format kept the basis for retaining each epitope visible and produced a traceable shortlist for subsequent structural assessment.",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1093/nar/gkaa379",
                  text: "Reynisson B, Alvarez B, Paul S, Peters B, Nielsen M. NetMHCpan-4.1 and NetMHCIIpan-4.0: improved predictions of MHC antigen presentation by concurrent motif deconvolution and integration of MS MHC eluted ligand data. Nucleic Acids Research. 2020;48:W449–W454.",
                  href: "https://doi.org/10.1093/nar/gkaa379",
                  hrefLabel: "doi:10.1093/nar/gkaa379",
                },
                {
                  label: "doi:10.1371/journal.pcbi.1003266",
                  text: "Calis JJA, Maybeno M, Greenbaum JA, et al. Properties of MHC class I presented peptides that enhance immunogenicity. PLoS Computational Biology. 2013;9:e1003266.",
                  href: "https://doi.org/10.1371/journal.pcbi.1003266",
                  hrefLabel: "doi:10.1371/journal.pcbi.1003266",
                },
                {
                  label: "doi:10.4049/jimmunol.171.4.1741",
                  text: "Peters B, Bulik S, Tampé R, Van Endert PM, Holzhütter HG. Identifying MHC class I epitopes by predicting the TAP transport efficiency of epitope precursors. Journal of Immunology. 2003;171:1741–1749.",
                  href: "https://doi.org/10.4049/jimmunol.171.4.1741",
                  hrefLabel: "doi:10.4049/jimmunol.171.4.1741",
                },
                {
                  label: "doi:10.1007/s00018-005-4528-2",
                  text: "Tenzer S, Peters B, Bulik S, et al. Modeling the MHC class I pathway by combining predictions of proteasomal cleavage, TAP transport and MHC class I binding. Cellular and Molecular Life Sciences. 2005;62:1025–1037.",
                  href: "https://doi.org/10.1007/s00018-005-4528-2",
                  hrefLabel: "doi:10.1007/s00018-005-4528-2",
                },
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We first retained peptides with a predicted HLA-A*02:01 binding IC50 below 500 nM, reducing the overlapping nine-amino-acid peptide space to 83 sequences. Requiring a positive IEDB immunogenicity score further reduced this set to 51. We then compared their source coordinates with UniProt signal-peptide and transmembrane annotations and reviewed the remaining sequences alongside published evidence. Processing-related scores were retained as supporting information rather than applied as an independent cutoff. This staged assessment produced 17 candidate epitopes for structural review, each linked to its antigen source, protein coordinates and prediction outputs.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-01 · IEDB prediction and prioritisation of candidate epitopes",
              instruction: "Reserved for the team's original figure.",
              caption:
                "IEDB-based prediction and literature review reduced the peptide search across four antigen sources to 17 traceable candidate epitopes for structural review.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Sequence prediction gave us a reviewable shortlist and a common HLA context, but the next decision required a different type of evidence: whether each peptide could occupy the HLA-A*02:01 groove with plausible anchoring and interface geometry. We therefore retained all prediction records and added structural review as the next prioritisation layer. Further details are provided in [Bioinformatics: epitope prediction](https://2026.igem.wiki/jlu-fbh/bioinformatics) and [Integrated Human Practices: Dry Lab route](https://2026.igem.wiki/jlu-fbh/human-practices).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-2",
      index: "2.2",
      title:
        "Iteration 2.2｜Adding structural review before experimental construction",
    },
    {
      type: "dbtl",
      id: "dbtl-2-2",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Iteration 2.1 produced 17 candidate epitopes with favourable sequence-based prediction results. Before passing these sequences to Wet Lab, we needed to examine whether they could be accommodated within the HLA-A*02:01 binding groove in a consistent spatial arrangement. We therefore designed a structural review of the 17 peptide–HLA complexes, focusing on whether each peptide remained within the groove, whether its termini approached the expected anchor regions and whether repeated models showed consistent interface contacts without recurrent displacement or severe clashes. The review would determine which sequences were sufficiently supported to enter experimental construction; their immune activity would subsequently be assessed in the biological screening system.",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1038/s41586-024-07487-w",
                  text: "Abramson J, Adler J, Dunger J, et al. Accurate structure prediction of biomolecular interactions with AlphaFold 3. Nature. 2024;630:493–500.",
                  href: "https://doi.org/10.1038/s41586-024-07487-w",
                  hrefLabel: "doi:10.1038/s41586-024-07487-w",
                },
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We built an AlphaFold 3 review route for peptide–HLA-A*02:01 complexes. Each candidate epitope was modelled with the HLA heavy chain and β2-microglobulin, and repeated predictions were compared through peptide placement, terminal anchoring, conserved interface contacts and agreement across models. The resulting record joined structural observations to the source coordinates and sequence-prediction history already retained in Iteration 2.1 (Bouvier and Wiley, 1994; Harndahl et al., 2012).",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1126/science.8023162",
                  text: "Bouvier M, Wiley DC. Importance of peptide amino and carboxyl termini to the stability of MHC class I molecules. Science. 1994;265:398–402.",
                  href: "https://doi.org/10.1126/science.8023162",
                  hrefLabel: "doi:10.1126/science.8023162",
                },
                {
                  label: "doi:10.1002/eji.201141774",
                  text: "Harndahl M, Rasmussen M, Roder G, et al. Peptide–MHC class I stability is a better predictor than peptide affinity of CTL immunogenicity. European Journal of Immunology. 2012;42:1405–1416.",
                  href: "https://doi.org/10.1002/eji.201141774",
                  hrefLabel: "doi:10.1002/eji.201141774",
                },
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Structural review removed the Nectin-4 sequences `HILHVSFLA` and `FLAEASVRG` from the experimental set. The remaining 15 candidate epitopes retained their original prediction records and structural observations, forming the sequence set passed to Wet Lab for coding design.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-02 · Structural review of peptide–HLA complexes",
              instruction: "Reserved for the team's original figure.",
              caption:
                "Structural review compared peptide placement, terminal anchoring and interface geometry before 15 candidate epitopes were retained for coding design.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The structural layer converted the sequence shortlist into a smaller experimental set while preserving the evidence behind every decision. Wet Lab could now work from 15 retained candidate epitopes, but two pairs occupied overlapping coordinates within their source proteins. The next design therefore addressed how to preserve both intended sequences without carrying redundant encoded segments into the first screen. Further details are provided in [Bioinformatics: AlphaFold structural review](https://2026.igem.wiki/jlu-fbh/bioinformatics).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-3",
      index: "2.3",
      title:
        "Iteration 2.3｜Converting overlapping epitopes into continuous coding designs",
    },
    {
      type: "dbtl",
      id: "dbtl-2-3",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Wet Lab compared the source coordinates of the 15 retained candidate epitopes. Two pairs overlapped within their native proteins: `TLIYYLDEI` with `YLDEIPPKF` in TROP2, and `FQARLRLRV` with `RLRVLVPPL` in Nectin-4. Encoding every nine-amino-acid sequence separately would duplicate their shared residues. We therefore designed one continuous coding segment for each pair, preserving the native order and complete sequence of both source epitopes.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Wet Lab converted the two overlapping pairs into overlap-preserving continuous segments. `TLIYYLDEI` and `YLDEIPPKF` became TROP2 CTL3 (`TLIYYLDEIPPKF`); `FQARLRLRV` and `RLRVLVPPL` became NECTIN4 CTL1 (`FQARLRLRVLVPPL`). The other retained candidate epitopes remained separately encoded. This produced three TROP2, two B7-H4, three Nectin-4 and five LIV-1 coding designs for the first experimental comparison.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Sequence mapping confirmed that each continuous segment contained both intended source epitopes in the correct native order. Every retained candidate epitope was represented once across the resulting set. The coding-design stage therefore transformed 15 retained candidate-epitope sequences into 13 experimental coding designs without losing either member of an overlapping pair.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-03 · Overlap-preserving coding of TROP2 and Nectin-4 epitopes",
              instruction: "Reserved for the team's original figure.",
              caption:
                "Two pairs of overlapping candidate epitopes were represented as continuous coding segments that preserved both source sequences in their native order.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The overlap decision established the physical coding objects required by the first screen: 13 designs representing all 15 retained candidate epitopes. The next requirement was to connect those designs to experimental material without confusing sequence design with plasmid assembly. We therefore moved from coding records to commercially assembled recombinant plasmids and the DNA-template workflow used for transcription. Further details are provided in [Experiments: first-round coding designs](https://2026.igem.wiki/jlu-fbh/experiments) and [Parts: epitope-encoding sequences](https://2026.igem.wiki/jlu-fbh/parts).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-4",
      index: "2.4",
      title:
        "Iteration 2.4｜Connecting coding designs to transcribable DNA templates",
    },
    {
      type: "dbtl",
      id: "dbtl-2-4",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The 13 coding designs needed corresponding DNA material that could enter one common transcription route. This handoff required three identities to remain aligned: the intended insert sequence, the recombinant plasmid supplied for that design and the Wet Lab sample label used during template processing. Establishing this correspondence was the purpose of the iteration.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We converted the 13 coding designs into physical DNA templates through a coordinated handoff between Wet Lab and a commercial service provider. Wet Lab finalised the insert sequences and their corresponding construct identities, while the provider completed plasmid synthesis and assembly. Once the plasmids were delivered, we aligned the accompanying plasmid maps, sequence files and sample labels with the design records before introducing each template into the project’s template-processing and transcription workflow. This handoff preserved a continuous connection from the biological design decision to the DNA material used for circRNA preparation.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We checked whether every delivered sample could be assigned to one intended coding design through the supplier documents and Wet Lab labels, and whether the assigned material could continue into the recorded DNA-template preparation and T7 transcription route. This document-to-sample check established a complete handoff for all 13 coding designs without adding an unsupported in-house cloning or sequencing claim.",
              ],
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The 13 coding designs were now connected to identifiable plasmid materials and a common transcription route. The next engineering question shifted from DNA identity to preparation comparability: could all 13 designs be converted into circRNA inputs under shared conditions and introduced into the same DC–T-cell system?",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-5",
      index: "2.5",
      title:
        "Iteration 2.5｜Producing comparable circRNA inputs for the first screen",
    },
    {
      type: "dbtl",
      id: "dbtl-2-5",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "A meaningful first-round comparison required the encoded epitope segment to be the principal difference among the 13 inputs. We therefore fixed a shared route from DNA template to circRNA preparation, DC electroporation and DC–T-cell co-culture. The RNA measurements were reported at their actual scale, with RNase R-related and primer-based results describing preparation composition and consistency.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Wet Lab prepared transcription templates from the delivered plasmids, generated precursor RNA by T7 in vitro transcription, removed the DNA template and purified the RNA. The precursors then entered the selected self-splicing and circularisation conditions, followed by purification and the recorded RNase R-related check. Discussion with Ruohan Yang helped align the preparation steps and the wording used for the RNA readout. Each circRNA preparation was introduced into immature DCs with the same Nucleofector II programme and RNA input, and the DCs were co-cultured with autologous T cells under the common ratio established in Cycle 1 (Wesselhoeft et al., 2018; New England Biolabs, n.d.; LGC Biosearch Technologies, n.d.; Lonza, n.d.).",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1038/s41467-018-05096-6",
                  text: "Wesselhoeft RA, Kowalski PS, Anderson DG. Engineering circular RNA for potent and stable translation in eukaryotic cells. Nature Communications. 2018;9:2629.",
                  href: "https://doi.org/10.1038/s41467-018-05096-6",
                  hrefLabel: "doi:10.1038/s41467-018-05096-6",
                },
                {
                  label: "Source",
                  text: "New England Biolabs. Standard RNA synthesis with HiScribe T7 Quick High Yield RNA Synthesis Kit, E2050.",
                  href: "https://www.neb.com/en/protocols/standard-rna-synthesis-with-hiscribe-t7-quick-high-yield-rna-synthesis-kit-neb-e2050",
                  hrefLabel: "Source",
                },
                {
                  label: "Source",
                  text: "LGC Biosearch Technologies. Ribonuclease R Manual, NRR07250.",
                  href: "https://biosearchtech.a.bigcontent.io/v1/static/manual_RNR07250_RNase-R",
                  hrefLabel: "Source",
                },
                {
                  label: "Source",
                  text: "Lonza. Human Dendritic Cell Nucleofector Kit, VPA-1004, Optimized Protocol U-002.",
                  href: "https://bioscience.lonza.com/lonza_bs/US/en/Transfection/p/000000000000191773/Human-Dendritic-Cell-Nucleofector-Kit",
                  hrefLabel: "Source",
                },
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Nucleic-acid analysis recorded the expected contrast between the circRNA-associated and linear-RNA-associated readouts and provided a shared preparation check before cellular screening. All 13 circRNA preparations then entered DCs using the same electroporation programme, RNA input, cell number and culture conditions. Their downstream identities remained linked to the original coding designs and to the corresponding ELISpot conditions.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-04 · Preparation check for first-round circRNA inputs",
              instruction: "Reserved for the team's original figure.",
              caption:
                "The recorded nucleic-acid readout provided a common preparation check before the 13 circRNA inputs entered the first DC–T-cell screen.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The shared preparation route produced 13 traceable circRNA inputs under matched molecular and cellular conditions. This made a within-run immune-response comparison possible. The next Design therefore fixed the selection rule before examining the ELISpot results: retain two responsive modules from each antigen source so that the four-antigen strategy established in Cycle 1 remained represented in Combined. Further details are provided in [Experiments: circRNA preparation and DC–T-cell culture](https://2026.igem.wiki/jlu-fbh/experiments) and [Integrated Human Practices: circRNA preparation](https://2026.igem.wiki/jlu-fbh/human-practices).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-6",
      index: "2.6",
      title:
        "Iteration 2.6｜Selecting two responsive modules from each antigen source",
    },
    {
      type: "dbtl",
      id: "dbtl-2-6",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Cycle 1 supported retaining four antigen sources because they contributed complementary protein-, malignant-cell- and patient-level evidence. The first ELISpot screen therefore needed to decide which epitope-encoding circRNA preparations would represent each source in Combined. Before comparing the spot counts, we set a quota of two modules per antigen. A single module would place the representation of an antigen on one epitope and one screening result, whereas two modules preserved two recognition opportunities within each antigen source. Limiting the selection to two per source also fixed the final design at eight modules, keeping the length and experimental comparison of Combined tractable. We therefore compared preparations within each antigen source and selected the two with the most prominent recorded IFN-γ-associated responses.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The 13 epitope-encoding circRNA preparations were compared through the same human DC–T-cell route and IFN-γ ELISpot procedure. Equalised cell inputs, the shared culture route and consistent plate handling allowed the spot counts to serve as a within-run ranking measure. A methods consultation with **[Name to be added]** addressed whether ELISpot alone was sufficient for the next design decision and established the need for complementary activation and effector-activity measurements (Dakewe Biotech, n.d.).",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "Instruction manual",
                  text: "Dakewe Biotech. Human IFN-γ Precoated ELISPOT Kit (strips), Cat. 2110005.",
                  href: "https://files.dakewe.cn/crm/instruction/dy/2110005.pdf",
                  hrefLabel: "Instruction manual",
                },
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The spot-count comparison identified two modules from each antigen source and reduced the 13 first-round circRNA inputs to eight selected modules. TROP2 CTL1 and TROP2 CTL2 produced the two highest TROP2 counts. Both B7-H4 modules were retained, together with the two leading Nectin-4 modules and LIV-1 CTL2 and CTL3. As a shared-run comparison, the screen supplied the relative ranking required to determine Combined’s composition.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-05 · First-round ELISpot selection of eight modules",
              instruction: "Reserved for the team's original figure.",
              caption:
                "First-round IFN-γ ELISpot compared 13 epitope-encoding circRNA preparations and selected two responsive modules from each of the four antigen sources.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "ELISpot supplied the eight modules required for Combined and also clarified the next evidence step. IFN-γ secretion recorded a recognition-associated cellular response; the project still needed to observe early CD8 T-cell activation and overall effector activity before assembling the first-round evidence. We retained that scientific requirement and first translated the idea of recognition into an age-appropriate educational experience. Further details are provided in [Results: first-round ELISpot](https://2026.igem.wiki/jlu-fbh/results) and [Integrated Human Practices: extending the ELISpot evidence](https://2026.igem.wiki/jlu-fbh/human-practices).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-7",
      index: "2.7",
      title: "Iteration 2.7｜Translating recognition into Vaccine Classroom",
    },
    {
      type: "dbtl",
      id: "dbtl-2-7",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The ELISpot screen gave the project a concrete example of how biological information can guide recognition. For primary-school learners, we began with experiences already familiar to them: receiving an injection, feeling pain or fever and hearing that vaccination helps the body prepare. These everyday memories became a bridge to the idea of advance recognition, allowing immunological concepts to unfold through situations that children could readily understand.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "For approximately 50 students at the Primary School Affiliated to Jilin University, Education built a four-part lesson: personal experience, scientific foundations, group judgement and a return to scientific explanation. Visual Design produced the wanted-poster and clue materials for two rounds of a recognition game. One round offered limited identifying information; the other supplied clear clues, allowing students to compare how information changed their group decisions.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The two-round comparison produced a clear classroom change: students identified more targets when the wanted-poster clues were available and explained their choices to group members. Their discussion then returned to vaccination, protection and why outcomes can differ among people. The activity showed that recognition could be experienced through comparison, while the final scientific explanation connected the metaphor back to immune preparation and response.",
              ],
            },
            {
              type: "image-placeholder",
              filename: "Figure C2-06 · Vaccine Classroom recognition activity",
              instruction: "Reserved for the team's original figure.",
              caption:
                "Primary-school students compared target recognition with and without identifying clues during the two-round Vaccine Classroom activity.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We retained the four-part structure, two-round game and scientific return in a reusable Teaching Pack. The classroom also gave us a transferable design principle: understanding improved when learners could see what information entered a decision and how that information changed the next action. We next applied this principle to a longer educational problem—making a multi-step experimental workflow visible and repeatable in the Virtual Laboratory. Further details are provided in [Education: Vaccine Classroom](https://2026.igem.wiki/jlu-fbh/education).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-8",
      index: "2.8",
      title:
        "Iteration 2.8｜Making a complete experimental workflow transferable",
    },
    {
      type: "dbtl",
      id: "dbtl-2-8",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "School laboratory learning is limited by equipment, consumables, safety requirements and class time. Beginners may encounter PCR, electrophoresis, digestion, ligation or transformation as isolated activities without seeing how one result becomes the input to the next experiment. We therefore designed the Virtual Laboratory for students, teachers and first-time learners who needed access to the logic of a complete workflow before, during or after real laboratory practice.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Education worked with the Wiki team to connect nine experiments into one continuous GFP cloning and verification route. The first-person interactive environment was built from approximately 160 experimental illustrations and allowed learners to operate instruments and reagents directly with a mouse. Step navigation and yellow visual prompts indicated the current action, while Theory, Safety, Instruments and Reagents remained accessible throughout the process. Delivered through a computer-based environment, the Virtual Laboratory allowed learners to enter, revisit and connect experimental steps beyond the time and equipment limits of a single classroom session.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "During a follow-up activity at Hailun No. 1 High School, a teacher introduced the Virtual Laboratory through the classroom display and continued using it during later self-study periods while the development team was absent. This independent deployment tested whether the resource contained sufficient guidance and internal structure for a teacher to organise learning after handoff. The programme supported continued classroom use and extended the relationship established during Winter Outreach into a new digital-learning setting.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-07 · Teacher-led deployment of the Virtual Laboratory",
              instruction: "Reserved for the team's original figure.",
              caption:
                "A teacher used the Virtual Laboratory independently after handoff, allowing students to follow the connected experimental route without the development team present.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The independent classroom use showed that a complex workflow becomes transferable when each step exposes its purpose, input and next consequence. This lesson supplied a clearer way to organise continuity. When the engineering route returned to the first-round screen, we applied the same staged structure to the scientific requirement from Iteration 2.6: follow IFN-γ secretion with an early activation readout and an effector-activity readout. Further details are provided in [Education: Virtual Laboratory](https://2026.igem.wiki/jlu-fbh/education).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-9",
      index: "2.9",
      title:
        "Iteration 2.9｜Extending the first-round evidence from secretion to cellular action",
    },
    {
      type: "dbtl",
      id: "dbtl-2-9",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Iteration 2.6 identified eight modules through IFN-γ-associated responses. To complete the planned first-round evidence, we added two complementary questions: whether TROP2 CTL1 and CTL2 initiated early CD8 T-cell activation, and whether the first-round effector preparations displayed measurable overall cytotoxic activity. Consultation with Jia Lin helped us place the K562 result at the correct level: it could inform overall effector activity, while a TNBC target carrying the relevant antigen and HLA context would be required later for target-specific interpretation (Cibrián and Sánchez-Madrid, 2017; Lichtenfels et al., 1994; Neri et al., 2001).",
              ],
            },
            {
              type: "references",
              items: [
                {
                  label: "doi:10.1002/eji.201646837",
                  text: "Cibrián D, Sánchez-Madrid F. CD69: from activation marker to metabolic gatekeeper. European Journal of Immunology. 2017;47:946–953.",
                  href: "https://doi.org/10.1002/eji.201646837",
                  hrefLabel: "doi:10.1002/eji.201646837",
                },
                {
                  label: "PubMed",
                  text: "Lichtenfels R, Biddison WE, Schulz H, Vogt AB, Martin R. CARE-LASS (calcein-release-assay), an improved fluorescence-based test system to measure cytotoxic T lymphocyte activity. Journal of Immunological Methods. 1994;172:227–239.",
                  href: "https://pubmed.ncbi.nlm.nih.gov/7518485/",
                  hrefLabel: "PubMed",
                },
                {
                  label: "PubMed",
                  text: "Neri S, Mariani E, Meneghetti A, Cattini L, Facchini A. Calcein-acetoxymethyl cytotoxicity assay: standardization of a method allowing additional analyses on recovered effector cells and supernatants. Clinical and Diagnostic Laboratory Immunology. 2001;8:1131–1135.",
                  href: "https://pubmed.ncbi.nlm.nih.gov/11687452/",
                  hrefLabel: "PubMed",
                },
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "We built a two-part functional-evaluation workflow to extend the ELISpot measurement from cytokine secretion to cellular activation and effector action. The first arm used flow cytometry to quantify CD8⁺CD69⁺ cells under the TROP2 CTL1 and CTL2 conditions, providing an early T-cell activation readout. The second arm used Calcein-AM-labelled K562 cells to measure the overall cytotoxic activity of the first-round effector preparations at an effector-to-target ratio of 80:1. Spontaneous- and maximum-release controls defined the fluorescence range used to calculate normalised cytotoxicity. Together, the two arms connected T-cell activation status with a quantitative measurement of effector-cell killing activity.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The CD8/CD69 comparison recorded early activation under both leading TROP2 conditions, while the K562 assay detected effector activity across the first-round preparations. These results complemented the ELISpot ranking through distinct cellular readouts. K562 therefore supplied overall effector-activity evidence; the later TNBC target-cell assay would add the corresponding antigen–HLA context.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-08 · Early T-cell activation and K562 effector-activity readouts",
              instruction: "Reserved for the team's original figure.",
              caption:
                "CD8/CD69 flow cytometry and K562 Calcein-AM release supplied complementary early-activation and overall effector-activity evidence for the first-round screen.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "ELISpot established the eight selected modules, while CD8/CD69 and K562 extended the evidence from cytokine secretion to cellular activation and overall effector action. The four antigen sources remained represented, and TROP2 CTL1 and CTL2 supplied the strongest single-antigen reference pair. These decisions defined the next Build: assemble the eight selected modules into Combined and create a five-group comparison that could distinguish vector background, single TROP2 modules, their within-antigen combination and the complete multi-antigen design. Further details are provided in [Results: first-round flow cytometry and K562 assay](https://2026.igem.wiki/jlu-fbh/results) and [Integrated Human Practices: defining the K562 evidence boundary](https://2026.igem.wiki/jlu-fbh/human-practices).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-10",
      index: "2.10",
      title: "Iteration 2.10｜Integrating eight selected modules into Combined",
    },
    {
      type: "dbtl",
      id: "dbtl-2-10",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "The eight-module endpoint was predetermined by the stratified ELISpot rule: two modules from each of the four antigen sources. Wet Lab now designed their order and linker arrangement within one multi-antigen coding sequence. To evaluate what the complete design added, the second-round comparison was organised as Blank, TROP2 CTL1, TROP2 CTL2, TROP2 CTL1+2 and Combined. This hierarchy separated vector background, the two strongest TROP2 modules, their within-antigen combination and the complete four-antigen design.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Wet Lab built a five-group comparison centred on Combined. The eight selected modules from four antigen sources were arranged with defined linkers to form the Combined coding sequence. Blank, TROP2 CTL1, TROP2 CTL2 and TROP2 CTL1+2 provided stepwise references for the shared background, individual modules and their within-antigen combination. A commercial service provider assembled the corresponding recombinant plasmids, and the delivered DNA templates entered the same transcription, circularisation and purification workflow to produce comparable circRNA preparations for the second-round experiments.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Wet Lab checked the supplier-provided sequence information and sample identities against the intended five-group design, with particular attention to the order of the eight selected modules and the linker boundaries in Combined. This completed the documented handoff from first-round selection to five defined second-round preparations.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-09 · Combined design and the five second-round preparations",
              instruction: "Reserved for the team's original figure.",
              caption:
                "Eight ELISpot-selected modules were arranged in Combined, and five preparations were defined for the second-round molecular and cellular comparison.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Integration now had a physical endpoint: Combined and four comparison preparations whose roles were defined before testing. The next cycle could therefore measure the molecules that had actually been prepared, beginning with their RNA-level properties and continuing through translation, DC activation, T-cell phenotype, cytokine secretion and TNBC target-cell activity. Before entering that Measurement cycle, we used the completed integration route to refine how such decisions could be recorded and handed to another researcher. Further details are provided in [Experiments: Combined construction](https://2026.igem.wiki/jlu-fbh/experiments) and [Parts: Combined design](https://2026.igem.wiki/jlu-fbh/parts).",
              ],
            },
          ],
        },
      ],
    },
    {
      type: "subheading",
      id: "eng-i-2-11",
      index: "2.11",
      title:
        "Iteration 2.11｜Turning the integration route into a traceable CircuForge workflow",
    },
    {
      type: "dbtl",
      id: "dbtl-2-11",
      stages: [
        {
          key: "design",
          title: "Design",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "But the completed route exposed a general handoff problem: an epitope could move from prediction to review, coding design and construct preparation while its origin and selection rationale remained distributed across different files. CircuForge V1.0 had connected data import, target screening and epitope prediction, and feedback from a five-team software exchange clarified that users also needed to distinguish software recommendations from researcher decisions. Biological review with Associate Professor Qingtian Guan supported an intermediate Design Cart for confirmed entries. Professor Xiangyu Meng’s software-engineering review then added clearer module responsibilities, visible states for long-running tasks and a reproducible execution environment.",
              ],
            },
          ],
        },
        {
          key: "build",
          title: "Build",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "CircuForge V2.0 reorganised these requirements into a guided browser workflow. Stage-specific identifiers and Evidence Cards preserved source information; KEEP, REVIEW and REJECT represented software review states, while researcher confirmation determined whether an entry entered the Design Cart. Stable Cart IDs, deduplication and retained order supported later assembly. External resources were connected through adapters, longer tasks displayed visible progress states, and reviewed designs could be exported together with their sequences and evidence records. In this way, decisions about sequence overlap, module selection and Combined arrangement remained traceable as confirmed researcher choices throughout the workflow.",
              ],
            },
          ],
        },
        {
          key: "test",
          title: "Test",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "Automated tests examined identifiers, review states, Cart behaviour, task progression, external-response parsing and export readback. Task-based user testing then followed the workflow from data import and target or epitope review to junction inspection and export. Early sessions identified unclear task-status messages and export guidance. After these elements were revised, participants completed the workflow more independently and efficiently, supporting the usability and transferability of CircuForge V2.0.",
              ],
            },
            {
              type: "image-placeholder",
              filename:
                "Figure C2-10 · CircuForge V2.0 workflow and task-based testing",
              instruction: "Reserved for the team's original figure.",
              caption:
                "CircuForge V2.0 separated software review from researcher confirmation, connected reviewed entries through the Design Cart and exposed task and export states for traceable handoff.",
            },
          ],
        },
        {
          key: "learn",
          title: "Learn",
          blocks: [
            {
              type: "prose",
              paragraphs: [
                "CircuForge converted the lessons of Integration into a reusable design workflow: later users could preserve source evidence, review state and researcher decisions without rebuilding the process across separate scripts. The software retained and transferred the biological decisions made by Dry Lab and Wet Lab. With Combined and its four comparison preparations already defined experimentally, the engineering story could now enter **M—Measurement** and test their molecular and cellular performance. Further details are provided in [Software: CircuForge](https://2026.igem.wiki/jlu-fbh/software) and [Integrated Human Practices: software workflow reviews](https://2026.igem.wiki/jlu-fbh/human-practices).",
              ],
            },
          ],
        },
      ],
    },
  ],
  note: {
    label: "Cycle 2 outcome",
    body: "Integration began with four antigen sources and ended with one defined multi-antigen design. Sequence prediction established a traceable epitope shortlist; structural review refined it; Wet Lab converted overlapping sequences into continuous coding designs and connected the resulting materials to a common circRNA and DC–T-cell route. First-round ELISpot retained two modules from every antigen source, while CD8/CD69 and K562 supplied complementary activation and overall effector-activity evidence. These decisions produced Combined and four comparison preparations for the next cycle. Vaccine Classroom and the Virtual Laboratory extended the same ideas of recognition and continuity into Education, and CircuForge turned the completed handoff logic into a reusable Dry Lab workflow.\n\nCycle 3 therefore begins from a concrete measurement problem rather than another selection problem: under matched preparation and comparison conditions, what molecular and cellular evidence supports Combined? The next TIME stage follows the five second-round preparations from RNA-level characterisation through translation, immune-cell responses and TNBC target-cell function.",
  },
};

// Original reference placement in the brief, including Cycle 1's bibliography.
export const engineeringReferenceStages: Record<
  string,
  Record<string, WikiDbTLStageKey>
> = {
  "1.1": {
    "https://doi.org/10.1158/2159-8290.CD-18-1177": "design",
  },
  "1.2": {
    "https://doi.org/10.1016/j.molcel.2017.05.022": "build",
    "https://doi.org/10.1038/s41467-018-05096-6": "build",
    "https://doi.org/10.1016/j.molcel.2019.02.015": "build",
  },
  "1.5": {
    "https://doi.org/10.1158/1078-0432.CCR-09-0737": "build",
  },
  "1.6": {
    "https://doi.org/10.1038/s41467-022-28524-0": "design",
    "https://doi.org/10.1016/j.celrep.2022.110460": "design",
    "https://doi.org/10.1093/nar/gkv007": "build",
    "https://doi.org/10.1111/j.2517-6161.1995.tb02031.x": "build",
  },
  "1.7": {
    "https://doi.org/10.1038/s41588-021-00911-1": "design",
    "https://doi.org/10.1186/s13059-019-1874-1": "build",
    "https://doi.org/10.1038/s41592-019-0619-0": "build",
    "https://doi.org/10.1093/bioinformatics/btp616": "build",
  },
  "1.8": {
    "https://doi.org/10.1158/2159-8290.CD-12-0095": "build",
    "https://doi.org/10.1126/scisignal.2004088": "build",
  },
  "1.10": {
    "https://www.miltenyibiotec.com/upload/assets/IM0001260.PDF": "build",
    "https://www.miltenyibiotec.com/upload/assets/IM0001261.PDF": "build",
    "https://doi.org/10.1084/jem.179.4.1109": "build",
  },
  "2.1": {
    "https://doi.org/10.1093/nar/gkae1010": "design",
    "https://doi.org/10.1093/nar/gkae407": "design",
    "https://doi.org/10.1093/nar/gkaa379": "build",
    "https://doi.org/10.1371/journal.pcbi.1003266": "build",
    "https://doi.org/10.4049/jimmunol.171.4.1741": "build",
    "https://doi.org/10.1007/s00018-005-4528-2": "build",
  },
  "2.2": {
    "https://doi.org/10.1038/s41586-024-07487-w": "design",
    "https://doi.org/10.1126/science.8023162": "build",
    "https://doi.org/10.1002/eji.201141774": "build",
  },
  "2.5": {
    "https://doi.org/10.1038/s41467-018-05096-6": "build",
    "https://www.neb.com/en/protocols/standard-rna-synthesis-with-hiscribe-t7-quick-high-yield-rna-synthesis-kit-neb-e2050":
      "build",
    "https://biosearchtech.a.bigcontent.io/v1/static/manual_RNR07250_RNase-R":
      "build",
    "https://bioscience.lonza.com/lonza_bs/US/en/Transfection/p/000000000000191773/Human-Dendritic-Cell-Nucleofector-Kit":
      "build",
  },
  "2.6": {
    "https://files.dakewe.cn/crm/instruction/dy/2110005.pdf": "build",
  },
  "2.9": {
    "https://doi.org/10.1002/eji.201646837": "design",
    "https://pubmed.ncbi.nlm.nih.gov/7518485/": "design",
    "https://pubmed.ncbi.nlm.nih.gov/11687452/": "design",
  },
};
