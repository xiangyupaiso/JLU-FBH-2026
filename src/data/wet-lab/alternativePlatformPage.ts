import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
import {
  alternativePlatformAssets,
  getAlternativePlatformImage,
} from "./alternativePlatformAssets";

export const alternativePlatformReferences = [
  {
    "id": 1,
    "authors": "Bardia, A., Hurvitz, S.A., Tolaney, S.M. et al.",
    "title": "Sacituzumab govitecan in metastatic triple-negative breast cancer",
    "journal": "New England Journal of Medicine",
    "volumeYear": "384(16), pp. 1529–1541 (2021)."
  },
  {
    "id": 2,
    "authors": "Bergmann-Leitner, E.S., Duncan, E.H., Leitner, W.W., Neutzner, A., Savranskaya, T., Angov, E. and Tsokos, G.C.",
    "title": "C3d-defined complement receptor-binding peptide p28 conjugated to circumsporozoite protein provides protection against *Plasmodium berghei*",
    "journal": "Vaccine",
    "volumeYear": "25(45), pp. 7732–7736 (2007)."
  },
  {
    "id": 3,
    "authors": "Bianchini, G., De Angelis, C., Licata, L. and Gianni, L.",
    "title": "Treatment landscape of triple-negative breast cancer: expanded options, evolving needs",
    "journal": "Nature Reviews Clinical Oncology",
    "volumeYear": "19(2), pp. 91–113 (2022)."
  },
  {
    "id": 4,
    "authors": "Chen, R., Wang, S.K., Belk, J.A. et al.",
    "title": "Engineering circular RNA for enhanced protein production",
    "journal": "Nature Biotechnology",
    "volumeYear": "41(2), pp. 262–272 (2023).",
    "links": [
      {
        "href": "https://doi.org/10.1038/s41587-022-01393-0",
        "label": "doi:10.1038/s41587-022-01393-0"
      }
    ]
  },
  {
    "id": 5,
    "authors": "Gong, Z., Hu, W., Zhou, C., Guo, J., Yang, L. and Wang, B.",
    "title": "Recent advances and perspectives on the development of circular RNA cancer vaccines",
    "journal": "npj Vaccines",
    "volumeYear": "10, article 41 (2025).",
    "links": [
      {
        "href": "https://doi.org/10.1038/s41541-025-01097-x",
        "label": "doi:10.1038/s41541-025-01097-x"
      }
    ]
  },
  {
    "id": 6,
    "authors": "Gonzalez-Galarza, F.F., McCabe, A., Santos, E.J.M.D. et al.",
    "title": "Allele Frequency Net Database (AFND) 2020 update: gold-standard data classification, open access genotype data and new query tools",
    "journal": "Nucleic Acids Research",
    "volumeYear": "48(D1), pp. D783–D788 (2020)."
  },
  {
    "id": 7,
    "authors": "He, Y., Zhang, W., Chen, N., Wang, W., He, J., Han, Z., Tao, S., Dong, L., He, J., Zhu, F. and Lv, H.",
    "title": "HLA-A, -B and -DRB1 allele and haplotype frequencies of 8333 Chinese Han from the Zhejiang province, China",
    "journal": "International Journal of Immunogenetics",
    "volumeYear": "43(2), pp. 86–95 (2016).",
    "links": [
      {
        "href": "https://doi.org/10.1111/iji.12254",
        "label": "doi:10.1111/iji.12254"
      }
    ]
  },
  {
    "id": 8,
    "authors": "Kreiter, S., Selmi, A., Diken, M. et al.",
    "title": "Increased antigen presentation efficiency by coupling antigens to MHC class I trafficking signals",
    "journal": "Journal of Immunology",
    "volumeYear": "180(1), pp. 309–318 (2008)."
  },
  {
    "id": 9,
    "authors": "Lee, S.Y., Lee, J., Ahn, J.H. et al.",
    "title": "Comparative analysis of expression, immunogenicity, and safety profiles between linear and circular RNA vaccine platforms",
    "journal": "Molecular Therapy — Nucleic Acids",
    "volumeYear": "37(2), article 102954 (2026).",
    "links": [
      {
        "href": "https://doi.org/10.1016/j.omtn.2026.102954",
        "label": "doi:10.1016/j.omtn.2026.102954"
      }
    ]
  },
  {
    "id": 10,
    "authors": "Li, H., Peng, K., Yang, K. et al.",
    "title": "Circular RNA cancer vaccines drive immunity in hard-to-treat malignancies",
    "journal": "Theranostics",
    "volumeYear": "12(14), pp. 6422–6436 (2022)."
  },
  {
    "id": 11,
    "authors": "Mittendorf, E.A., Lu, B., Melisko, M. et al.",
    "title": "Efficacy and safety analysis of nelipepimut-S vaccine to prevent breast cancer recurrence: a randomized, multicenter, phase III clinical trial",
    "journal": "Clinical Cancer Research",
    "volumeYear": "25(14), pp. 4248–4254 (2019).",
    "links": [
      {
        "href": "https://doi.org/10.1158/1078-0432.CCR-18-2867",
        "label": "doi:10.1158/1078-0432.CCR-18-2867"
      }
    ]
  },
  {
    "id": 12,
    "authors": "Percie du Sert, N., Hurst, V., Ahluwalia, A. et al.",
    "title": "The ARRIVE guidelines 2.0: updated guidelines for reporting animal research",
    "journal": "PLoS Biology",
    "volumeYear": "18(7), article e3000410 (2020)."
  },
  {
    "id": 13,
    "authors": "Qu, L., Yi, Z., Shen, Y. et al.",
    "title": "Circular RNA vaccines against SARS-CoV-2 and emerging variants",
    "journal": "Cell",
    "volumeYear": "185(10), pp. 1728–1744.e16 (2022)."
  },
  {
    "id": 14,
    "authors": "Sahin, U., Schmidt, M., Derhovanessian, E. et al.",
    "title": "Individualized mRNA vaccines evoke durable T cell immunity in adjuvant TNBC",
    "journal": "Nature",
    "volumeYear": "651(8107), pp. 1088–1096 (2026).",
    "links": [
      {
        "href": "https://doi.org/10.1038/s41586-025-10004-2",
        "label": "doi:10.1038/s41586-025-10004-2"
      }
    ]
  },
  {
    "id": 15,
    "authors": "Wesselhoeft, R.A., Kowalski, P.S. and Anderson, D.G.",
    "title": "Engineering circular RNA for potent and stable translation in eukaryotic cells",
    "journal": "Nature Communications",
    "volumeYear": "9(1), article 2629 (2018)."
  },
  {
    "id": 16,
    "authors": "Wesselhoeft, R.A., Kowalski, P.S., Parker-Hale, F.C., Huang, Y., Bisaria, N. and Anderson, D.G.",
    "title": "RNA circularization diminishes immunogenicity and can extend translation duration in vivo",
    "journal": "Molecular Cell",
    "volumeYear": "74(3), pp. 508–520.e4 (2019)."
  },
  {
    "id": 17,
    "authors": "Xiao, M.-S. and Wilusz, J.E.",
    "title": "An improved method for circular RNA purification using RNase R that efficiently removes linear RNAs containing G-quadruplexes or structured 3′ ends",
    "journal": "Nucleic Acids Research",
    "volumeYear": "47(16), pp. 8755–8769 (2019).",
    "links": [
      {
        "href": "https://doi.org/10.1093/nar/gkz576",
        "label": "doi:10.1093/nar/gkz576"
      }
    ]
  }
] as const;

export interface AlternativePlatformJudgingCriterion {
  id: string;
  question: string;
  paragraphs: string[];
}

export const alternativePlatformJudgingCriteria: AlternativePlatformJudgingCriterion[] = [
  {
    "id": "q1",
    "question": "How strong is the evidence that the team successfully engineered their biological system?",
    "paragraphs": [
      "Sixteen plasmid designs share one backbone: 13 single-epitope constructs, the empty vector, TROP2-CTL1+2, and Combined. The plasmids were ordered from a commercial gene-synthesis supplier, and they were supplied endotoxin-free. We assessed sequence identity by comparing the supplier's sequencing reports with the submitted design files. We linearised and purified the supplied plasmids for T7 in vitro transcription. For Round 2, we checked the plasmid target region by PCR and agarose gel electrophoresis before template preparation.",
      "The Combined vaccine was checked by RT-PCR across the back-splice junction, followed by Sanger sequencing. The trace showed a clean junction with a flat baseline and single sharp peaks on either side. RT-qPCR on the representative Combined preparation reported a circular fraction of 99.30 ± 0.17%, corresponding to a circular-to-linear ratio of about 146:1.",
      "Function was assessed through DC maturation, anti-FLAG translation, T-cell activation, effector-memory differentiation, IFN-γ ELISpot, and MDA-MB-231 killing. The immune-function assays used an empty-vector circRNA control: the same backbone with the antigen window empty. The anti-FLAG Western blot used a no-RNA control subjected to the same electroporation and subsequent procedures. In vivo, tumor volume was measured blind on coded animals. All three pairwise group comparisons were specified in the NC3Rs Experimental Design Assistant before the study and included in the Holm correction. Combined reduced endpoint tumor volume by 73.2% relative to the empty vector (Holm P = 2.0 × 10⁻⁵).",
      "These assays provide complementary evidence for vaccine production and function. The Evidence strength block states the scope and limitations of each result.",
      "See [Section 4](#evidence), the [Results page](/results), and the [Experiments page](/experiments)."
    ]
  },
  {
    "id": "q2",
    "question": "Is the team's chosen platform meaningfully suited to the problem they are tackling?",
    "paragraphs": [
      "The end point of our mechanism is a 9-mer displayed on HLA-A*02:01 at the surface of a human dendritic cell and recognized by an autologous human CD8⁺ T cell. Proteasomal processing, TAP transport, ER loading, and a thymically selected TCR repertoire have no bacterial or yeast counterparts, and no standard chassis offers a simplified version of this experiment.",
      "We used a cell-free route to produce circRNA from a permuted intron–exon precursor. Commercially synthesized plasmids were linearised and purified for T7 transcription, followed by DNase treatment, RNA purification, self-splicing, and RNase R enrichment. RT-qPCR assessed the representative preparation from each round, and BSJ Sanger sequencing checked the Combined vaccine. Our laboratory workflow did not include bacterial transformation, culture, or plasmid amplification.",
      "See [Sections 1](#the-gap) and [2](#why-this-platform)."
    ]
  },
  {
    "id": "q3",
    "question": "How tightly are the team's outputs coupled to the platform?",
    "paragraphs": [
      "Our outputs are platform components: the backbone with its cartridge interface, a documented cell-free production process with a release criterion, a human primary DC/T-cell immunogenicity pipeline, a mammalian antigen-positive target model, and a cassette-design tool.",
      "[Section 3](#inside-the-backbone) tags every element of the plasmid individually as Platform-critical, Platform-specific, or Generic, each with the counterfactual that justifies the tag. The vector backbone, the T7 transcription signals, the spare cloning sites, the FLAG tag and the HBA1 3′ UTR are tagged Generic, and one output, the dry-lab tool, is backbone-agnostic. Those are labeled as such.",
      "The coupling is machine-checkable. The 30 deposited parts have boundaries that exactly match the plasmid annotation. Seven of the eight GSGGS linker occurrences encode the same peptide from different codons, which is deliberate, so only the eighth matches the Registry record at DNA level; everything else is an exact sequence match, so the platform can be rebuilt element by element and verified against our map. We tested this with our own software: given the reference plasmid, the Registry matcher recovered all 21 team-defined basic parts present in it and returned no false hits on three negative-control sequences.",
      "See [Sections 2](#why-this-platform) and [3](#inside-the-backbone), and the [Parts page](https://registry.igem.org/organisations/d1b6aa0f-bfc0-4f6b-9c69-33347e7ea510)."
    ]
  },
  {
    "id": "q4",
    "question": "Has the team documented what didn't work, why, and what others should watch out for?",
    "paragraphs": [
      "Five named failures with the reason and what we would do differently, in [Section 5](#what-didn-t-work). Four of them weaken our own conclusions.",
      "Our Round-1 ELISpot and K562 killing assays ranked the 13 constructs differently (Spearman ρ = 0.43, P = 0.14), and we state which readout guided selection. Round 1 was a ranking screen and was built as one, so its raw SFC values order the candidates rather than measure antigen-specific frequencies; K562 killing ran with release controls and three technical replicate wells per condition. In vivo, empty-vector circRNA-LNP reached 61.3% tumor growth inhibition relative to PBS, which is why all three pairwise comparisons were prespecified and why we quote the vaccine-against-vector figure wherever we refer to what the epitopes add. BSJ sequencing was performed on Combined and RT-qPCR on one representative preparation per round, so the remaining preparations have lower-grade circularity evidence than those two.",
      "Also reported: haplotype mismatch in the animal model. [Section 4.6](#evidence-evidence-strength) names, claim by claim, the controls that would raise each one.",
      "See [Section 5](#what-didn-t-work)."
    ]
  }
];

const sections = [
  {
    "id": "judging-criteria",
    "index": "01",
    "kicker": "",
    "navLabel": "Judging Criteria",
    "title": "Judging Criteria",
    "summary": "",
    "blocks": [
      {
        "type": "feature",
        "key": "alternative-platform-judging-criteria"
      }
    ]
  },
  {
    "id": "key-achievements",
    "index": "02",
    "kicker": "",
    "navLabel": "Key Achievements",
    "title": "Key Achievements",
    "summary": "",
    "blocks": [
      {
        "type": "feature",
        "key": "alternative-platform-achievement-navigation"
      }
    ],
    "anchorIds": [
      "key-achievements-the-backbone",
      "key-achievements-thirty-registry-parts",
      "key-achievements-an-encoded-adjuvant",
      "key-achievements-a-documented-production-process",
      "key-achievements-a-human-cell-test-rig",
      "key-achievements-the-cassette-design-tool",
      "key-achievements-a-record-of-what-failed"
    ]
  },
  {
    "id": "overview",
    "index": "03",
    "kicker": "",
    "navLabel": "Overview",
    "title": "Overview",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "CirCure is a standardized, release-tested circRNA vaccine backbone that another team can load its own antigens into. It is a 5,267 bp plasmid in which antigen identity occupies 336 bp (bases 1606–1941), and the remaining 4,931 bp never change. We validated it through two design–build–test–learn cycles and then in tumor-bearing mice. We deposited it as 30 Registry parts whose boundaries match the plasmid annotation exactly, wrote down the cell-free production process with a numerical release criterion, and built a tool to design the next cassette. Triple-negative breast cancer is where we validated the platform.",
          "No step of this work runs in a microbial chassis, and the molecule is what forces that. A covalently closed circle forms by self-splicing of a permuted intron–exon precursor, a template arrangement that exists only by design and that no living cell supplies. Production is therefore cell-free: T7 transcription, followed by permuted-intron self-splicing and RNase R enrichment, starting from commercially synthesized plasmid DNA, with no bacterial transformation, culture, or plasmid amplification in our laboratory workflow. The read-out forces the other end of the platform: a vaccine whose whole mechanism is a 9-mer peptide reaching HLA-A*02:01 on a human dendritic cell cannot be expressed or even measured in *E. coli*, *S. cerevisiae* or *B. subtilis*, so every functional assay runs in human primary immune cells and mammalian tumor cells."
        ]
      }
    ]
  },
  {
    "id": "the-gap",
    "index": "01",
    "kicker": "",
    "navLabel": "The gap",
    "title": "The gap",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "The circularization chemistry has been public since 2018 (Wesselhoeft et al., 2018), circRNA vaccines have been demonstrated against an infectious disease (Qu et al., 2022) and in oncology (Li et al., 2022), and the platform’s advantages over linear mRNA have now been measured head-to-head (Lee et al., 2026).",
          "The gap is downstream of the molecule. No one has published a standardized, release-tested, documented backbone that another team can load its own antigens into, with the protocols, the acceptance criteria, and the failure record that make a platform usable. Nothing in the iGEM Registry provided one."
        ]
      },
      {
        "type": "subheading",
        "id": "the-gap-the-clinical-opening",
        "index": "1.1",
        "level": 3,
        "title": "The clinical opening"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Triple-negative breast cancer is defined by three absences, ER, PR, and HER2, and those absences remove the three drug classes that organize breast-cancer care. Chemotherapy remains the backbone; checkpoint blockade helps a PD-L1-positive subset; and the most consequential recent advance has come from antibody–drug conjugates, which established that TNBC does carry abundant, tumor-enriched, druggable surface antigens (Bianchini et al., 2022; Bardia et al., 2021). TROP2, Nectin-4, LIV-1, and B7-H4 have been validated in this way.",
          "Those four antigens are already known to be present, accessible, and tolerable as targets. But an ADC engages one of them at a time, kills the cells it reaches, and leaves nothing behind: no memory, no coverage of cells expressing a different member of the set, and a fresh infusion is required each cycle. Turning that same validated antigen set into a cytotoxic T-cell target set, several antigens at once and with immunological memory, is the problem this project takes on, and it is the problem that selects the platform."
        ]
      },
      {
        "type": "subheading",
        "id": "the-gap-where-each-platform-stops",
        "index": "1.2",
        "level": 3,
        "title": "Where each platform stops"
      },
      {
        "type": "figure",
        "assetKey": "platformComparison",
        "alt": "Five platforms against the problem's requirements, with the failure point of each marked.",
        "caption": "Five platforms against the problem's requirements, with each failure point marked."
      },
      {
        "type": "prose",
        "paragraphs": [
          "Single-epitope peptide vaccines have an instructive failure in this exact disease. Nelipepimut-S (NeuVax) is an HER2-derived single peptide whose phase III PRESENT trial in node-positive breast cancer was halted after a futility review, and the published analysis found no disease-free survival benefit (Mittendorf et al., 2019). These reasons generalize to the whole class: free peptides are quickly proteolyzed, weakly immunogenic without a strong co-delivered adjuvant, restricted to one HLA allele, and present the immune system with a single epitope, so a tumor escapes by losing or downregulating one antigen.",
          "Autologous dendritic-cell vaccines work immunologically, and they are proof that a DC loaded with tumor antigen can prime a CTL response. The product, though, is manufactured per patient from that patient's own cells. Only one such vaccine has ever been approved anywhere, and the manufacturing burden is why the approach did not generalize.",
          "DNA vaccines face a nuclear-entry step. A plasmid must reach the nucleus to be transcribed, which limits potency in humans, and genomic integration remains a regulatory concern for a product intended for repeated dosing.",
          "Viral vectors are potent, but the vector itself is immunogenic. Anti-vector immunity rises with each dose, which is the wrong property for a five-dose vaccine schedule.",
          "Linear mRNA is the platform we had to argue against most carefully, because mRNA is not speculative in this disease. A first-in-human trial of individualized neoantigen mRNA vaccines in adjuvant TNBC induced vaccine-specific T-cell responses in all 14 evaluable patients, with neoantigen-specific CD8⁺ T cells persisting for one to six years without boosters and 10 of 14 patients recurrence-free at a median of 62 months (Sahin et al., 2026). That is the benchmark, and two of its constraints define the space we work in.",
          "The first is manufacturing. Encoding up to 20 patient-specific mutations means a separate product per patient, the same burden that kept autologous dendritic-cell vaccines from generalizing. CirCure trades neoantigen specificity for four shared ADC-validated antigens, which buys an off-the-shelf cassette at the cost of individualization. That is a real trade and we state it as one.",
          "The second is structural. A linear transcript needs a 5′ cap and, to avoid innate sensing, nucleoside modification with N¹-methylpseudouridine, both of which require costly synthesis inputs. Its half-life is reported at under 20 hours, compared with sustained circRNA expression of up to 168 hours (Gong et al., 2025). Short expression means more doses for the same integrated antigen exposure, and more doses mean more cumulative exposure to the carrier."
        ]
      },
      {
        "type": "subheading",
        "id": "the-gap-what-circrna-already-does",
        "index": "1.3",
        "level": 3,
        "title": "What circRNA already does"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Our platform choice is not novel in itself, and the page should say so plainly. Three results define the ground we build on.",
          "The chemistry is solved and public. The permuted intron–exon system (Wesselhoeft et al., 2018) established engineering a covalently closed circRNA that translates in eukaryotic cells: a precursor whose group I intron halves are placed at the two ends splices itself shut, joining the flanking exons head to tail. This is the reaction our backbone uses.",
          "Circularization changes the molecule's immune behavior as well as its stability. It reduces innate immunogenicity and extends in vivo translation duration (Wesselhoeft et al., 2019), which are the two properties that make circRNA a vaccine platform.",
          "It has been shown to work as a vaccine in both directions. A circRNA vaccine raised protective responses against SARS-CoV-2 and its variants (Qu et al., 2022), and circRNA cancer vaccines have driven immunity in hard-to-treat malignancies (Li et al., 2022)."
        ]
      },
      {
        "type": "subheading",
        "id": "the-gap-the-gap-we-took",
        "index": "1.4",
        "level": 3,
        "title": "The gap we took"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The circRNA field's own reviews name the unsolved problems: circularization efficiency is limited, particularly for longer constructs; nicked circRNA is hard to remove completely; the IRES–ORF configuration is not yet optimized; and delivery needs work. No circRNA cancer vaccine has regulatory approval anywhere, and human evidence remains limited (Gong et al., 2025).",
          "Three problems sit at the intersection of that list and the TNBC problem. **Multivalency**: the peptide-vaccine failure argues for several epitopes at once, but multi-epitope cassettes on a circRNA backbone are not standardized. **Translation from a circle**: the IRES–ORF configuration is one of the unsolved items above, and a molecule with neither a cap nor a poly(A) tail needs an initiation route built for it. **Reusability**: nothing in the iGEM Registry provided a documented, release-tested circRNA vaccine backbone that another team could load its own antigens into."
        ]
      }
    ]
  },
  {
    "id": "why-this-platform",
    "index": "02",
    "kicker": "",
    "navLabel": "Why this platform",
    "title": "Why this platform",
    "summary": "",
    "blocks": [
      {
        "type": "subheading",
        "id": "why-this-platform-the-necessity-chain",
        "index": "2.1",
        "level": 3,
        "title": "The necessity chain"
      },
      {
        "type": "figure",
        "assetKey": "necessityChain",
        "alt": "Host, modality and production as three stacked layers, with the forcing constraint on each arrow.",
        "caption": "Host, modality and production as three stacked layers, with the forcing constraint on each arrow."
      },
      {
        "type": "prose",
        "paragraphs": [
          "The award covers work done in plant chassis, mammalian cells, cell-free platforms and non-model organisms. Our platform is two of those at once, cell-free production and mammalian primary cells, and neither was chosen. Both fall out of the problem in a fixed order.",
          "**Host.** The mechanism ends with a 9-mer peptide displayed on HLA-A*02:01 at the surface of a human dendritic cell and recognized by an autologous human CD8⁺ T cell. Everything in that sentence is mammalian: proteasomal processing, TAP transport, ER loading onto MHC class I, and a T-cell receptor repertoire thymically selected against human self. *E. coli*, *S. cerevisiae* and *B. subtilis* possess none of it. There is no bacterial or yeast version of this read-out at any efficiency.",
          "Modality. Within nucleic-acid vaccines, the choice of circRNA is argued under Why circRNA, below.",
          "**Production.** Once circRNA is chosen, the production route is fixed. A covalently closed circle is made by self-splicing of a *permuted* intron–exon precursor (Wesselhoeft et al., 2018), a template arrangement that exists only by design, in a reaction requiring T7 polymerase, a linear template, GTP and Mg²⁺. No living cell supplies that precursor, and a cell would degrade the product, so cell-free synthesis is the only route to the molecule. In practice, that means commercially supplied plasmids linearised and purified for T7 transcription, followed by DNase treatment, LiCl purification, circularisation, and RNase R digestion. RT-qPCR with the circular channel (SJ3910F + SJ3909R) and the residual-linear channel (SJ3911F + SJ3909R) assessed one representative preparation from each round, and Combined also underwent BSJ RT-PCR and Sanger sequencing.",
          "So the read-out forces mammalian and the molecule forces cell-free, and CirCure is both at once. Plasmid synthesis was outsourced and our laboratory work begins with the supplied plasmid DNA."
        ]
      },
      {
        "type": "subheading",
        "id": "why-this-platform-why-circrna",
        "index": "2.2",
        "level": 3,
        "title": "Why circRNA"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Where each platform stops, in Section 1, rules out four of the five modalities that can deliver a tumor antigen.",
          "Five modalities can deliver a tumor antigen, and the problem in Section 1 rules out four of them. Three properties then decide it in circRNA's favor. Sustained expression gives roughly an order of magnitude more antigen-hours per dose than a linear transcript, so dose, dosing frequency and cumulative carrier exposure can all be lower. The circle needs no cap and no modified nucleoside because it achieves low innate sensing structurally by having no free ends, so it doesn't require the two most expensive inputs in mRNA synthesis (Lee et al., 2026; Wesselhoeft et al., 2019). And it carries multivalency without a per-patient step: the peptide-vaccine failure says use several epitopes, the dendritic-cell-vaccine history says do not build a per-patient product, and circRNA is the only option that satisfies both.",
          "And the honest entry: of the five, circRNA is the least clinically proven. No circRNA cancer vaccine has regulatory approval anywhere and human evidence remains limited (Gong et al., 2025), while linear mRNA already has a first-in-human result in this exact disease (Sahin et al., 2026)."
        ]
      },
      {
        "type": "subheading",
        "id": "why-this-platform-what-the-backbone-encodes-besides-the-antigen",
        "index": "2.3",
        "level": 3,
        "title": "What the backbone encodes besides the antigen"
      },
      {
        "type": "figure",
        "assetKey": "backboneArchitecture",
        "alt": "The circRNA in translation order, with the four encoded elements highlighted.",
        "figureLabel": "Fig 3",
        "caption": "The circRNA in translation order, with the four encoded elements highlighted."
      },
      {
        "type": "prose",
        "paragraphs": [
          "A circular RNA that encodes an antigen produces a protein; four additional elements take that protein into the presentation pathway and allow the circle to be translated at all.",
          "Four tandem copies of mC3dP28. A 28-residue peptide derived from complement C3d sits in frame downstream of the epitope cassette, so it is translated as part of the same polypeptide.",
          "**Two trafficking signals in series.** A tPA signal and pro-peptide leader at the N-terminus route the nascent polypeptide into the ER–Golgi secretory pathway, enabling cross-presentation by neighboring antigen-presenting cells. The MHC class I trafficking domain at the C-terminus then directs the product into the vesicular pathway shared by MHC-I and MHC-II, increasing cross-presentation efficiency (Kreiter et al., 2008). Neither element functions in prokaryotes; their function depends on eukaryotic trafficking machinery.",
          "**Translation initiation built for a circle.** synIRES-RC25 drives cap-independent initiation, with an eIF4G-binding aptamer embedded in its domain V to recruit eIF4G and eIF4A directly, bypassing the eIF4E–cap requirement (Chen et al., 2023). Upstream of it, a PABP-binding spacer recruits poly(A)-binding protein to a molecule that lacks a cap and a poly(A) tail and contains a stop codon in each of the three reading frames to terminate any aberrant translation initiated at the back-splice junction.",
          "CD69 and CD28 activation, CD45RO⁺CCR7⁻ effector-memory differentiation, IFN-γ ELISpot, and MDA-MB-231 killing assess the function of the complete vaccine. The individual contributions of the encoded elements were not isolated in these experiments."
        ]
      },
      {
        "type": "subheading",
        "id": "why-this-platform-backbone-and-software",
        "index": "2.4",
        "level": 3,
        "title": "Backbone and software"
      },
      {
        "type": "prose",
        "paragraphs": [
          "The cassette interface came first, and the software exists because of it. Once antigen identity is confined to one restriction-bounded window and everything else is fixed, loading a new antigen set becomes a mechanical, checkable operation: reading-frame continuity from the tPA leader through to the GSGGS–4×mC3dP28 fusion, no newly created restriction sites, no internal stop codons. Our dry lab built CircuForge to perform it, and the Software page sets out what it does, what we validated it against, and where its coupling is strong and where it is not."
        ]
      },
      {
        "type": "subheading",
        "id": "why-this-platform-what-it-costs-us",
        "index": "2.5",
        "level": 3,
        "title": "What it costs us"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**HLA restriction narrows the eligible population.** Our epitopes are HLA-A*02:01-restricted. That allele has an allele frequency of roughly 0.15–0.16 in Chinese Han populations and 0.26–0.29 in European populations (Gonzalez-Galarza et al., 2020; He et al., 2016), so about a quarter to a half of patients carry it, depending on ancestry. A vaccine configured as ours addresses those patients only. The cassette interface is what makes this tractable rather than fatal: the pipeline's HLA allele is user-selectable, so covering a second allele is a cassette redesign on an unchanged backbone.",
          "**The one-step performance of the circularization chemistry is outside what we measured.** The field names limited circularization efficiency as an open problem, particularly for longer constructs (Gong et al., 2025). Our assay quantifies the composition of the released material, which is what the release decision needs, and it is measured on RNase R–purified product. Separating the yield of the circularization reaction itself from the contribution of the purification step requires quantifying the undigested reaction alongside it, which is a different measurement and process work for future preparation."
        ]
      }
    ]
  },
  {
    "id": "inside-the-backbone",
    "index": "03",
    "kicker": "",
    "navLabel": "Inside the backbone",
    "title": "Inside the backbone",
    "summary": "",
    "blocks": [
      {
        "type": "feature",
        "key": "alternative-platform-backbone"
      }
    ]
  },
  {
    "id": "evidence",
    "index": "04",
    "kicker": "",
    "navLabel": "Evidence",
    "title": "Evidence",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "Protocols are on the Experiments page, and the reagent-level detail is not repeated here."
        ]
      },
      {
        "type": "figure",
        "assetKey": "evidenceDependencyMap",
        "alt": "The evidence chain from DC maturation to tumour-cell killing, each link with its read-out and its control.",
        "caption": "The evidence chain from DC maturation to tumor-cell killing, each link with its read-out and its control."
      },
      {
        "type": "subheading",
        "id": "evidence-construction-and-release",
        "index": "4.1",
        "level": 3,
        "title": "Construction and release"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Sixteen plasmid designs share one backbone: 13 single-epitope constructs, the empty vector, TROP2-CTL1+2 and Combined. We ordered the plasmids from a commercial gene-synthesis supplier, which supplied them endotoxin-free. Sequence identity was assessed from the supplier's sequencing reports against the submitted design files. We linearised and purified the supplied plasmids for T7 in vitro transcription. For Round 2, PCR and agarose gel electrophoresis checked the plasmid target region before template preparation.",
          "Eighteen RNA preparations followed the same route: linearisation and purification of the supplied plasmid, T7 transcription, DNase treatment, LiCl precipitation, PIE circularisation at 55 °C and RNase R digestion. Thirteen preparations were the Round-1 single-epitope constructs. The five Round-2 preparations were empty vector, TROP2-CTL1, TROP2-CTL2, TROP2-CTL1+2 and Combined. TROP2-CTL1 and TROP2-CTL2 were transcribed again for Round 2, giving 18 preparations from 16 plasmid designs.",
          "Circularity is quantified on one representative preparation per round. The thirteen Round-1 constructs share one backbone, the same T4 *td* chemistry and the same workflow, and differ only in a short cassette of near-identical length, so the round was quantified on TROP2-CTL1 across a 2, 4 and 6 µL loading series in three replicate wells per volume. Round 2 was quantified on the Combined vaccine, the construct used in every Round-2 and in vivo experiment, at the 4 µL input established in the Round-1 series."
        ]
      },
      {
        "type": "table",
        "headers": [
          "Preparation",
          "Input",
          "ΔCq",
          "Circular : linear",
          "Circular fraction"
        ],
        "rows": [
          [
            "Round 1 · TROP2-CTL1",
            "2 µL",
            "3.70 ± 0.02",
            "13.0 : 1",
            "92.85 ± 0.08%"
          ],
          [
            "4 µL",
            "5.02 ± 0.37",
            "32.5 : 1",
            "96.96 ± 0.70%"
          ],
          [
            "6 µL",
            "4.72 ± 0.45",
            "26.4 : 1",
            "96.25 ± 1.14%"
          ],
          [
            "all nine wells",
            "4.48 ± 0.67",
            "22.4 : 1",
            "**95.35 ± 2.01%**"
          ],
          [
            "Round 2 · Combined",
            "4 µL, n = 3",
            "7.19 ± 0.39",
            "145.7 : 1",
            "**99.30 ± 0.17%**"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The loading series informed the choice of 4 µL for subsequent circularity measurements. The circular-fraction estimate at 2 µL was lower than at 4 and 6 µL, while the two higher inputs agreed within replicate variation. Round 2 therefore used 4 µL with three technical replicate wells per primer set. Both primer sets were assayed on the same cDNA and plate, with a no-template control. If the material or primer sets change, the loading series should be repeated.",
          "Round 2 added a release framework around the same chemistry. PCR and agarose gel electrophoresis checked the target region in a plasmid aliquot; that PCR product was used only for verification. The IVT template was prepared separately by linearising and purifying the supplied plasmid. The stated release criterion was a circular fraction of at least 90% after RNase R, with failed preparations remade from transcription and recorded. RT-qPCR was reported for the representative Combined preparation, and BSJ Sanger sequencing was performed on Combined only. RNase R amount and digestion time were fixed across the batch."
        ]
      },
      {
        "type": "figure",
        "assetKey": "releaseWorkflow",
        "alt": "The cell-free production route and the release gate that returns a failed preparation to transcription.",
        "caption": "The cell-free production route and the release gate that returns a failed preparation to transcription."
      },
      {
        "type": "prose",
        "paragraphs": [
          "For the Combined vaccine, we went past RNase R resistance to direct structural proof. RT-PCR across the back-splice junction followed by Sanger sequencing returned"
        ]
      },
      {
        "type": "feature",
        "key": "alternative-platform-bsj-sequence"
      },
      {
        "type": "figure",
        "assetKey": "backSpliceJunction",
        "alt": "Sanger trace across the back-splice junction of the Combined vaccine.",
        "caption": "The back-splice junction of the Combined vaccine, read across the ligation site."
      },
      {
        "type": "prose",
        "paragraphs": [
          "The precursor’s 3′ sequence joins head-to-tail with its 5′ sequence, with a flat baseline and single sharp peaks on either side, indicating one homogeneous splice product. Both halves are in the deposited map: the left is bases 2714–2735 and the right is bases 723–746, the two retained T4 *td* intron scars."
        ]
      },
      {
        "type": "quote",
        "text": "Scope. Combined, the vaccine used in the animal study, is the preparation assessed by both RT-qPCR and BSJ sequencing, so the molecule behind every headline claim on this page carries both grades of evidence. Round-1 RT-qPCR was run on TROP2-CTL1 as that round's representative preparation. All 18 preparations came through the same RNase R enrichment route and are circular on that basis, which is a grade below a sequenced junction. A team that wants the structural grade on every construct can run junction PCR on each one, a single reaction per preparation."
      },
      {
        "type": "prose",
        "paragraphs": [
          "Post-digestion RT-qPCR values estimate the composition of the enriched material. They do not measure the efficiency of the circularisation reaction itself, because RNase R removes linear molecules without converting them into circles. Structured linear RNAs can survive RNase R treatment (Xiao and Wilusz, 2019). Non-specific amplification of uncircularised precursor adds further uncertainty to the assay."
        ]
      },
      {
        "type": "subheading",
        "id": "evidence-why-the-platform-includes-a-wet-screen",
        "index": "4.2",
        "level": 3,
        "title": "Why the platform includes a wet screen"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Computational prediction can narrow the candidate set but cannot guarantee that its ranking reflects true immune responses, so this platform requires a wet screening step.",
          "All 13 single-epitope candidates had already cleared the in silico filter, an IEDB pMHC immunogenicity score above 0 and a NetMHCpan 4.1 BA predicted IC50 below 500 nM. Electroporated separately into HLA-A*02:01 human monocyte-derived dendritic cells and co-cultured with autologous T cells, they spread 5.8-fold on IFN-γ ELISpot, from 47 to 271 SFC per 10⁵ cells. Without the wet step, all 13 would have entered the cassette at equal weight.",
          "The K562 assay showed consistency among its technical replicate wells: mean within-construct SD was 1.28 percentage points and CV was 3.4%, with pairwise rank correlations of ρ = 0.81, 0.85 and 0.96 (all P < 0.001). The reported one-way ANOVA gave F = 18.8, P = 8.1 × 10⁻¹⁰. These results reflect precision on a single plate, without replication across effector-cell batches. Flow cytometry provided a separate activation readout for two TROP2 constructs: within the lymphocyte gate, CD8⁺CD69⁺ double positives were 31.07% for TROP2-CTL1 and 25.39% for TROP2-CTL2, consistent with their ELISpot order of 271 and 217 SFC.",
          "The two functional readouts produced different rankings. ELISpot varied 5.8-fold, while K562 killing varied 1.41-fold, from 31.37% to 44.15%; their rank correlation was ρ = 0.43 (P = 0.14). K562 reports overall effector activity against an HLA-null target, while Round-1 ELISpot reports raw IFN-γ spot counts without a negative-control baseline. The ELISpot ranking was not replicated, so we cannot yet separate the disagreement from assay and sampling variation. We selected ELISpot. Selection by killing would have favored LIV1-CTL5 and LIV1-CTL4 over LIV1-CTL2 and LIV1-CTL3, replacing a candidate with 118 SFC with one at 58. Future screens should define the selection readout in advance and include controls and independent replication."
        ]
      },
      {
        "type": "figure",
        "assetKey": "roundOneRanking",
        "className": "platform-figure--reduced platform-figure--fig07",
        "alt": "Round-1 ELISpot rank against K562 killing rank for all 13 constructs.",
        "caption": "Round-1 ELISpot rank against K562 killing rank for all 13 constructs."
      },
      {
        "type": "prose",
        "paragraphs": [
          "The selected fragments can be checked against the sequence. Per antigen, TROP2 gave 271, 217 and 52 SFC; B7-H4 gave 143 and 82; Nectin-4 gave 97, 74 and 51; and LIV-1 gave 118, 78, 73, 58 and 47. The cassette contains the two highest-SFC fragments from each antigen, which are also the eight highest across the full panel. Nectin4-CTL1 is a merged 14-residue fragment spanning two overlapping predicted epitopes, so the eight fragments represent nine predicted epitopes. LIV1-CTL4 at 73 SFC sat just below Nectin4-CTL1 at 74, and this one-spot difference should be read in the context of an unreplicated screen."
        ]
      },
      {
        "type": "figure",
        "assetKey": "roundOneElispot",
        "className": "platform-figure--reduced",
        "alt": "Round-1 IFN-γ ELISpot wells for all 13 single-epitope constructs.",
        "caption": "Round-1 IFN-γ ELISpot wells for all 13 single-epitope constructs."
      },
      {
        "type": "quote",
        "text": "**Scope of the ranking.** Round 1 was a ranking screen designed to order 13 candidates so the best eight could enter the cassette, and the wells were laid out to support that question. Round-1 ELISpot ran without an empty-vector, antigen-free, or PHA well and with no replicate-well count on file, so its raw SFC values ordered the candidates rather than measured antigen-specific frequencies. K562 killing ran with spontaneous- and maximum-release controls and three technical replicate wells per condition, and CD69 flow cytometry agreed on the relative order of the two TROP2 constructs tested. From Round 2 onward, where the numbers carry absolute claims, every group runs against an empty-vector circRNA control. A team that wants its screening numbers to stand as frequencies as well as an ordering can seed the vector and antigen-free wells on the first plate."
      },
      {
        "type": "subheading",
        "id": "evidence-round-2-the-chain",
        "index": "4.3",
        "level": 3,
        "title": "Round 2: the chain"
      },
      {
        "type": "prose",
        "paragraphs": [
          "DC maturation, T-cell activation and memory differentiation, ELISpot and killing assays compared five groups: empty-vector circRNA, TROP2-CTL1, TROP2-CTL2, TROP2-CTL1+2 and Combined. The empty-vector control was the same backbone with the antigen window empty. The anti-FLAG Western blot used a separate no-RNA control, with electroporation and all subsequent procedures performed in the same way as for the RNA-treated groups."
        ]
      },
      {
        "type": "table",
        "headers": [
          "Link",
          "Read-out",
          "Control treatment",
          "Control result",
          "Combined",
          "Effect",
          "Statistics"
        ],
        "rows": [
          [
            "DC maturation",
            "CD80⁺CD86⁺ (%)",
            "Empty-vector circRNA",
            "10.30",
            "**22.37 ± 0.31**",
            "2.16×",
            "ANOVA F(4,10) = 378.2; Holm P = 2.5 × 10⁻⁵"
          ],
          [
            "Antigen translation",
            "anti-FLAG Western",
            "Mock electroporation, no RNA",
            "near-absent",
            "**band at ~50 kDa**",
            "—",
            "β-actin (42 kDa) matched across lanes"
          ],
          [
            "T-cell activation",
            "CD69, CD28",
            "Empty-vector circRNA",
            "—",
            "—",
            "all groups above control",
            "CD69 F(4,10) = 872.7; CD28 F = 185.8; both P < 0.001"
          ],
          [
            "Effector memory",
            "CD45RO⁺CCR7⁻ within CD8⁺ (%)",
            "Empty-vector circRNA",
            "1.10 ± 0.36",
            "**21.90 ± 0.72**",
            "**19.9×**",
            "F(4,10) = 701.1; Holm P = 6.0 × 10⁻⁶"
          ],
          [
            "Cytokine secretion",
            "ELISpot (SFC/10⁵)",
            "Empty-vector circRNA",
            "32",
            "**367**",
            "11.5×",
            "single determination, compared with empty vector"
          ],
          [
            "Specific killing",
            "MDA-MB-231 at 80:1 (%)",
            "Empty-vector circRNA",
            "26.20 ± 3.28",
            "**83.57 ± 1.68**",
            "**+57 pp**",
            "Holm P = 3.4 × 10⁻⁵"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "The translation link closes the mechanism. Until the anti-FLAG blot, translation could only be inferred from downstream immunology. A FLAG-specific band at about 50 kDa, matched to β-actin, indicates the antigen is synthesized inside a human dendritic cell. It does not demonstrate MHC-I surface presentation, which remains supported indirectly by the ELISpot, activation, and killing data downstream.",
          "At an E:T ratio of 80:1, empty-vector-primed effectors killed 26.20% of targets, while combined-primed effectors killed 83.57%. The epitope insert is the only designed sequence difference between those two groups, and the two differ by 57 percentage points at this ratio. The gap against the single-epitope construct widened with effector dose, from about 19 percentage points at 20:1 to about 36 at 80:1, suggesting higher killing per effector cell rather than simply more effector cells. An HLA-matched antigen-negative target would show how much of that difference depends on recognition of the intended antigen.",
          "Multivalency saturates on one readout and not on others. Combined beat the dual-epitope construct on DC maturation at Holm *P* = 1.5 × 10⁻⁴, CD69 at *P* = 4.5 × 10⁻⁴, CD28 at *P* = 0.008, and killing at 80 : 1 at *P* = 0.0006, but not on effector-memory differentiation, *P* = 0.52. Two epitopes already push CD45RO⁺CCR7⁻ to a plateau. We report the null, because it supports multivalency while showing diminishing returns from stacking epitopes on that metric."
        ]
      },
      {
        "type": "subheading",
        "id": "evidence-safety-bounded",
        "index": "4.4",
        "level": 3,
        "title": "Safety, bounded"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Two in vitro assays define the working limits tested here. At 80:1, vaccine-primed effectors gave pooled killing of 2.02 ± 0.95% across four HLA-matched normal cell lines, with a maximum single-well value of 3.29%, compared with 83.57% for MDA-MB-231. The pooled n = 12 comprises three technical wells for each of four cell lines, rather than independent effector-cell batches. The reported tumour-versus-normal comparisons gave P = 1.3 to 1.5 × 10⁻⁶. Increasing E: T from 80:1 to 100:1 changed normal-line killing by at most ±0.7 percentage points, with no significant difference reported. In the empty-LNP assay, which used four wells per dose, relative DC viability was 1.030 ± 0.016 at 200 ng per 10⁴ cells (P = 0.43) and 0.572 ± 0.058 at 400 ng (P = 7.6 × 10⁻⁵). These replicate wells describe precision under the tested culture conditions."
        ]
      },
      {
        "type": "quote",
        "text": "**Scope.** Both assays set boundaries in vitro. ng per 10⁴ cells does not convert to mg/kg because the denominators are different, and the dose–viability assay uses empty LNP, so that window describes the carrier. The carrier is a commercial product about 120 nm in size with an undisclosed composition, so the delivery step can be repeated with the same product and cannot be rebuilt from our description. A repeat-dose in vivo toxicity study with organ histopathology is what turns these limits into a statement about the whole animal."
      },
      {
        "type": "subheading",
        "id": "evidence-in-vivo",
        "index": "4.5",
        "level": 3,
        "title": "In vivo"
      },
      {
        "type": "prose",
        "paragraphs": [
          "We generated the TROP2-positive 4T1 model using a ready-made human-TROP2 lentiviral preparation ordered from a commercial supplier. We transduced 4T1 cells, sorted GFP-positive cells, maintained puromycin selection, and checked TROP2 by RT-PCR and surface flow cytometry. Tumor cells were implanted in the right axillary subcutaneous fat pad of BALB/c mice. Dosing began on the day of implantation, with five weekly 10 µg circRNA-LNP doses given subcutaneously at the base of the tail on days 0, 7, 14, 21 and 28. The endpoint was day 35, with five mice per group.",
          "The design was specified in the NC3Rs Experimental Design Assistant before the study and reported under ARRIVE 2.0 (Percie du Sert et al., 2020). Tumor measurements were blinded on coded animals in randomized order. Endpoint tumor volume was the primary outcome, and we prespecified all three pairwise group comparisons, with Holm correction across the three. The minimum biologically important effect was set at TGI ≥ 50%. Ethics approval was JDYY20261369; the animal use license was SYXK (Ji) 2023-0011."
        ]
      },
      {
        "type": "table",
        "headers": [
          "Group",
          "Endpoint (D35) tumor volume",
          "TGI against PBS",
          "Holm-corrected *P*"
        ],
        "rows": [
          [
            "PBS",
            "233.64 ± 28.33 mm³",
            "—",
            "—"
          ],
          [
            "Empty-vector circRNA-LNP",
            "90.36 ± 13.51 mm³",
            "61.3%",
            "1.5 × 10⁻⁵"
          ],
          [
            "**Combined vaccine**",
            "**24.20 ± 9.72 mm³**",
            "**89.6%**",
            "**8.4 × 10⁻⁷**"
          ]
        ]
      },
      {
        "type": "prose",
        "paragraphs": [
          "One-way ANOVA on endpoint volume gave F(2,12) = 159.2, P = 2.3 × 10⁻⁹. Reported assumption checks were Shapiro–Wilk P = 0.69, 0.79 and 0.77, and Levene P = 0.24, so the pre-specified ANOVA was used without transformation. On day 7, the first time point with measurable tumors, no group difference was detected (P = 0.81). This was after the first dose, not a pretreatment baseline. No animal was tumor-free, so the prespecified rule for analyzing tumor-free animals at 0 mm³ was not invoked.",
          "All three pairwise comparisons were prespecified and all three were met. Against PBS, Combined reached 89.6% TGI, which is the total effect of the administered formulation. Empty-vector circRNA-LNP reached 61.3% on its own, so the carrier and the backbone together are substantially active without an epitope insert. Combined against empty vector isolates what the epitope insert adds: 73.2% at Holm *P* = 2.0 × 10⁻⁵, and that is the figure this page quotes wherever it refers to the epitope contribution. The two figures have different reference groups and are not subtracted from one another. On the common PBS denominator the empty vector accounts for 61.3% and the step from the empty vector to the vaccine is a further 28.3 percentage points of the PBS mean.",
          "The mechanism was examined by intratumoural CD8 and Granzyme B immunofluorescence and by splenic flow cytometry with intracellular cytokine staining."
        ]
      },
      {
        "type": "figure",
        "assetKey": "inVivoResults",
        "className": "platform-figure--reduced platform-figure--fig09",
        "alt": "Tumour growth curves to day 35 and excised tumours at endpoint.",
        "caption": "Tumor growth curves to day 35 and excised tumors at endpoint."
      },
      {
        "type": "subheading",
        "id": "evidence-evidence-strength",
        "index": "4.6",
        "level": 3,
        "title": "Evidence strength"
      },
      {
        "type": "figure",
        "assetKey": "evidenceTiers",
        "alt": "Every claim on this page placed in one of six evidence tiers, with the read-out that supports it.",
        "caption": "Every claim on this page is placed in one of six evidence tiers, with the read-out that supports it."
      },
      {
        "type": "prose",
        "paragraphs": [
          "Structural evidence is available for the Combined vaccine: BSJ RT-PCR and Sanger sequencing showed the expected head-to-tail junction with a clean trace. Plasmid sequence identity rests on the supplier's sequencing reports against the submitted design files. Our PCR and agarose gel check assessed the plasmid target region before Round-2 transcription; it was not an independent full-length sequence check.",
          "RT-qPCR showed a 96.96 ± 0.70% circular fraction for the Round-1 TROP2-CTL1 preparation at the adopted 4 µL input and 99.30 ± 0.17% for the Round-2 Combined preparation, each representing its round. Anti-FLAG Western blotting detected a band at about 50 kDa against a no-RNA control that went through the same electroporation and the same subsequent handling, with β-actin as the loading control, which places translation inside a human DC; peptide–MHC-I surface presentation stays supported indirectly through the ELISpot, activation, and killing data downstream. DC maturation and the three T-cell flow panels used three independently electroporated wells per group, with the T-cell panels on separate co-cultures, within one donor. Round-2 ELISpot used one well per group and is read as a comparison against the empty-vector baseline. MDA-MB-231 killing was 83.57% for Combined vs. 26.20% for empty vector at 80:1, with three replicate wells per condition across three E:T ratios; a matched antigen-negative target line would increase this. In vivo, Combined reached 73.2% TGI against empty vector under the prespecified endpoint-volume analysis with blinded measurement, which is the highest grade this design can reach.",
          "Two results sit lower on the ladder, and the route to raising either one is short. The Round-1 ELISpot ranking is quantitative but uncontrolled and unreplicated; CD69 flow cytometry agreed on the order of the two TROP2 constructs tested, while K562 measured overall effector activity and ordered the full panel differently. Vector and positive controls, replicate wells and independent effector-cell batches would raise it. Circularity of the other Round-1 preparations rests on representative RT-qPCR together with their shared backbone and preparation route; per-construct BSJ sequencing would raise it.",
          "Intratumoural CD8 and Granzyme B staining is descriptive, from three animals per group with one field acquired per animal and judged representative, and group labels coded during field selection and image review. Systematic sampling of several fields per animal and recorded segmentation would make this a quantitative comparison.",
          "Two claims lie outside what this design reaches, and the experiments that would reach them are specified. Antigen specificity of the in vivo inhibition needs a matched HLA-A*02:01 transgenic or humanized model, tetramer staining, peptide-restimulated ELISpot, antigen-positive and antigen-negative targets, and an irrelevant-epitope circRNA-LNP arm alongside the empty vector; the current 4T1 model overexpresses TROP2 only, so the other three antigens await their own target model. A whole-animal safety statement requires repeat-dose toxicity studies with organ histopathology, whereas what we have sets in vitro limits."
        ]
      }
    ]
  },
  {
    "id": "what-didn-t-work",
    "index": "05",
    "kicker": "",
    "navLabel": "What didn't work",
    "title": "What didn't work",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "On an alternative platform, the hardest knowledge to come by is what goes wrong, and it is the part nobody publishes. The five entries below are where our design made a trade, written for the next team as the places to spend differently. Four of them bear on how far our own conclusions reach, and each one carries what we would do with another round."
        ]
      },
      {
        "type": "subheading",
        "id": "what-didn-t-work-production",
        "index": "5.1",
        "level": 3,
        "title": "Production"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**1 · BSJ sequencing was performed on Combined only.** All 18 RNA preparations followed the same RNase R enrichment route, and RT-qPCR was run on TROP2-CTL1 in Round 1 and on Combined in Round 2, each as its round's representative preparation. The remaining preparations carry circularity on that basis, a grade below a sequenced junction. *Run the junction PCR on every construct you intend to compare, or state the grade difference as we do. One reaction per preparation buys the structural grade across the board.*"
        ]
      },
      {
        "type": "subheading",
        "id": "what-didn-t-work-screening-design",
        "index": "5.2",
        "level": 3,
        "title": "Screening design"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**2 · Two Round-1 read-outs ranked the same constructs differently**, ρ = 0.43 and *P* = 0.14, as set out with the data under [Why the platform includes a wet screen](#evidence-why-the-platform-includes-a-wet-screen). *Decide before the screen which read-out selects, and say so.*",
          "**3 · Round-1 ELISpot lacked control wells and documented replication.** No empty-vector, antigen-free, or PHA well was run, and no replicate-well count was recorded. K562 killing used spontaneous- and maximum-release controls with three technical replicate wells per condition. *Seed the vector control on the first plate. It costs a few wells, and it is what lets a screening number stand as a frequency rather than only as a rank.*"
        ]
      },
      {
        "type": "subheading",
        "id": "what-didn-t-work-in-vivo-and-scope",
        "index": "5.3",
        "level": 3,
        "title": "In vivo and scope"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**4 · Empty-vector circRNA-LNP gave 61.3% TGI relative to PBS**, Holm *P* = 1.5 × 10⁻⁵. That effect belongs to the control formulation as a whole, and this design does not split it between the carrier and the circRNA backbone. *Run both a PBS and an empty-vector arm, specify every planned comparison before the experiment, and report the total formulation effect separately from the increment the epitope insert adds.*",
          "**5 · Haplotype mismatch.** Human HLA-A*02:01-restricted epitopes were tested in wild-type BALB/c, H-2d, so in vivo inhibition is platform proof of concept and is not yet attributable to antigen-specific CTLs. *Use* HLA-A*02:01 *transgenic or humanized mice for specificity studies, with tetramer staining and peptide-restimulated ELISpot.*",
          "The present 4T1 model overexpresses TROP2 only, so the other three antigens need their own target model. Splenic intracellular cytokine staining uses PMA/ionomycin restimulation, which reports effector capacity rather than peptide-specific recognition. Animals were housed by treatment group, so cages sit with treatment; mixed-cage housing is the fix and costs nothing."
        ]
      }
    ]
  },
  {
    "id": "reuse-it",
    "index": "06",
    "kicker": "",
    "navLabel": "Reuse it",
    "title": "Reuse it",
    "summary": "",
    "blocks": [
      {
        "type": "prose",
        "paragraphs": [
          "Four things are needed to point the CirCure backbone at a different tumor, and all four exist.",
          "**1 · The parts.** Thirty parts are deposited in the [iGEM Registry](https://registry.igem.org/organisations/d1b6aa0f-bfc0-4f6b-9c69-33347e7ea510): thirteen backbone elements, eight epitope fragments, three target-model parts and six composites. Start with `BBa_26DTP41G`, the payload-free chassis: the T7–PIE–IRES cassette with an empty antigen window. `BBa_26DQL85I` is our TNBC payload for that chassis, and `BBa_26QYL2YH` is the assembled plasmid, so a team can take the empty platform, our worked example, or both. Element boundaries match the plasmid annotation exactly, so any single element can be lifted on its own: the PIE halves as a matched circularization unit, or Apt-eIF4G for grafting onto another IRES.",
          "The studio below runs on the real plasmid. Pick a window, empty it, and rebuild it from our parts or sequences you type in; the map and the length readouts update with every change, and the bases outside the window stay where they are. It reports lengths and reading frames for whatever you assemble. Choosing and compiling a cassette is what CircuForge does, in point 4 below.",
          "Three nested windows define how much of the design can be replaced. The antigen window runs from BamHI 1600 to XhoI 1957 and contains the eight epitope fragments with their seven internal linkers, 336 bp in our version. NcoI 1502 to ClaI 2587 spans the 1,083 bp fusion coding region, including the leader, adjuvant, trafficking domain and tag. The KpnI 838 opening also includes the IRES. Our commercially synthesized constructs varied at the antigen window; the larger replacement windows were not experimentally tested."
        ]
      },
      {
        "type": "feature",
        "key": "alternative-platform-reuse-studio"
      },
      {
        "type": "prose",
        "paragraphs": [
          "**2 · The production process.** The Experiments page describes plasmid sourcing, linearisation and purification, T7 transcription, DNase treatment, LiCl precipitation, PIE circularisation and RNase R enrichment. Plasmid-target PCR is a verification step and does not supply the IVT template. The stated release criterion is at least 90% circular fraction after RNase R, with failed preparations remade and recorded. Our reported RT-qPCR results are representative measurements, one per round, and BSJ Sanger sequencing was performed on Combined only. A team adopting the process should document release measurements for each preparation it intends to compare.",
          "**3 · The test system.** The pipeline starts with HLA-typed human PBMCs, CD14⁺ monocyte isolation, and GM-CSF/IL-4 differentiation to moDCs. It then uses circRNA electroporation, autologous CD3⁺ T-cell co-culture, IFN-γ ELISpot, multicolor flow cytometry and Calcein-AM killing. The downstream FLAG tag provides a translation readout across payload variants. The Experiments page, Sections 2 and 4, gives protocols and controls. A new cassette requires RNA quality and translation confirmation before interpreting its immune readouts.",
          "**4 · CircuForge, the tool that designs the next cassette.** Our dry lab built CircuForge, a browser-based workflow that carries an antigen choice from evidence through to a compiled construct.",
          "*It starts wherever the team already is.* An expression matrix with sample metadata, a UniProt identifier or protein sequence, a set of peptides already supported by evidence, or an annotated backbone file are each valid entry points. Differential expression uses limma 3.66.0, with edgeR 4.8.2 low-count filtering and TMM normalization followed by limma-voom when the input is raw RNA-seq counts. Target screening draws on GTEx and UniProt; epitope analysis runs through NetMHCpan 4.1 EL/BA and NetMHCIIpan EL/BA on the IEDB Next-Generation Tools MHC-I and MHC-II routes, with the HLA allele user-selectable and HLA-A*02:01 as the default. Binding evidence and immunogenicity evidence are held as separate layers, and versioned quality-control rules label each candidate KEEP, REVIEW or REJECT for the researcher to confirm. The binding filter applies class-specific disjunctions (MHC-I: percentile rank ≤ 1% or IC50 ≤ 500 nM; MHC-II: percentile rank ≤ 10% or IC50 ≤ 1000 nM), and the immunogenicity check is optional and disabled by default. The epitopes in our own cassette were selected earlier, on a NetMHCpan 4.1 BA predicted IC50 below 500 nM together with an IEDB pMHC immunogenicity score above 0, with EL percentile rank and processing score kept as supporting evidence. Ranking uses a fixed-weight composite of the best percentile rank, number of supporting HLA alleles, allele coverage within the candidate pool, and whether both MHC classes are represented.",
          "*It compiles against a real backbone and blocks a failing construct.* The cassette is placed into a supplied SnapGene `.dna` or GenBank record in one of four ways: replacing an annotated feature, replacing the region between two features, inserting adjacent to a feature, or by explicit coordinates. For our plasmid, the operation replaces bases 1606–1941. The compiler checks that the backbone has been confirmed by the user, that the target region is valid and in range, strand orientation, reading-frame continuity, that the translation matches the selected peptides, that protected features survive, that the DNA contains no illegal characters, GC content and homopolymer runs, and whether any user-listed restriction site has been newly created. Critical failures stop the compile; items needing judgment are labeled REVIEW with the reason. If an edit invalidates a primer binding site, the tool marks that site invalid. Codon generation uses a fixed human codon-preference table and is not a general multi-host optimizer. On our plasmid, the compiler also verified the full fusion coding region, bases 1504–2586, confirming the translation matched the reference with no internal stop codons and that the BamHI, XhoI, NotI and PmeI counts stayed at 1, 1, 1 and 0. The slot count is a parameter, so a cassette is not limited to eight fragments.",
          "*It hands over a package, and we checked the package.* Each compiled design receives a deterministic construct identity and a manifest recording the payload, backbone identity, sequence features, quality-control results, software versions, and file hashes. Exports are GenBank, SBOL3, native SnapGene `.dna`, FASTA, JSON, and a Workbook, with a validation archive. The formats do not carry identical information: FASTA holds sequence without the map annotations, which is a property of the format. Re-reading the exported files and comparing them against the source object returned matching sequence and matching feature attributes; the native SnapGene file's DNA, eight fragment annotations, and seven linker annotations all passed read-back; and the eleven packaged files passed SHA-256 verification. That confirms the content we tested survived the round trip.",
          "*It annotates against the Registry.* Construct features are compared against iGEM Registry records and separated into exact matches, similar evidence and records not found, writing `db_xref=\"iGEM:BBa_...\"` into the GenBank file only on a confirmed exact DNA match, alongside the accession, URL, match type, identity and coverage. Multiple exact matches are kept for the user to choose between, because an identical sequence can legitimately correspond to several accessions. Local similarity matching defaults to 90% identity over 80% of the query, with a minimum of 8 bp for direct DNA input; the separate path that imports official Registry BLAST results defaults to 95% identity and full subject coverage. A 15 bp linker will match many records, and the tool does not treat that as evidence of a single origin.",
          "*What we validated it against.* Our plasmid contains 21 team-defined basic parts. Matched against the original map annotation, the tool identified 17; the four it missed were cases where the Registry entry covers a complete region that our map had annotated as several separate sub-regions. After adding those four complete-region annotations, with the plasmid DNA unchanged, it identified all 21. Three full negative-control sequences, the complete TROP2 coding sequence, 3×FLAG, and copGFP, returned no false hits. So the statement this supports is narrow: on this reference plasmid and this team's known parts, all 21 basic parts were identified once complete-region annotations existed, and three controls returned nothing.",
          "In a separate check, we gave the tool our eight selected fragments and asked it to assemble them in the original order and write them back into the real plasmid. The eight fragments came out in order, the seven GSGGS linkers were preserved, the 112-amino-acid payload was identical, the 4,931 bp outside the modified window were unchanged, and the full fusion coding region translated identically. Because the tool regenerated the DNA from the human codon-preference table, 54 codons and 67 bases differ from ours, all synonymous. This shows the tool can assemble and deliver a chosen design correctly.",
          "*Coupling.* The compiler is backbone-agnostic because the user supplies the vector, and pCirCure-circMEV is its reference case, so it is the least platform-bound output we have. The tool is a first-pass design and checking aid; researchers choose the antigens and peptides, and the wet lab measures circularization, expression and immune response. The software prepares designs for testing, and the experiment determines how a design actually performs.",
          "CircuForge is released under the Apache License 2.0 in the team's iGEM GitLab repository, with a demonstration dataset that does not require the full GTEx files, English and Chinese interface options, and Docker Compose deployment in three commands. Methods, benchmarks and installation are on the Software page."
        ]
      },
      {
        "type": "subheading",
        "id": "reuse-it-start-here",
        "index": "",
        "level": 3,
        "title": "Start here"
      },
      {
        "type": "prose",
        "paragraphs": [
          "Start by using CircuForge to shortlist targets and epitopes, then check those choices against the literature and the intended HLA context. Place the selected cassette in the BamHI–XhoI antigen window in the design file and order the complete plasmid from a commercial supplier. Compare the supplier's sequencing report to that file, then use plasmid-target PCR and a gel check for verification. Linearise and purify a separate plasmid aliquot for T7 transcription; the verification PCR product is not the IVT template.",
          "After transcription, remove the DNA template, purify the precursor RNA, circularise it and perform RNase R enrichment. Document RT-qPCR release results against the ≥90% criterion, and use BSJ RT-PCR followed by Sanger sequencing to confirm the final vaccine junction. Confirm translation in HLA-matched moDCs by anti-FLAG Western blotting, then run the immune assays with empty-vector controls and replicate wells from the first screen.",
          "The first two entries under What didn't work are the two to read first."
        ]
      }
    ]
  },
  {
    "id": "references",
    "index": "07",
    "kicker": "",
    "navLabel": "References",
    "title": "References",
    "summary": "",
    "blocks": [
      {
        "type": "feature",
        "key": "alternative-platform-references"
      }
    ]
  }
] as const;

export const alternativePlatformPage: WikiPageContent = {
  route: "/alternative-platform",
  category: "wet-lab",
  chapter: "Wet Lab / 04 of 04",
  eyebrow: "",
  title: "Alternative_Platform",
  lede: "",
  boundary: "",
  visual: "platform-orbit",
  visualLabel: "",
  visualSteps: [],
  facts: [],
  sections: sections.map((section) => ({
    ...section,
    blocks: section.blocks.map((block) =>
      block.type === "figure"
        ? {
            type: "figure" as const,
            src: getAlternativePlatformImage(block.assetKey),
            alt: block.alt,
            width: alternativePlatformAssets[block.assetKey].width,
            height: alternativePlatformAssets[block.assetKey].height,
            ...(block.caption ? { caption: block.caption } : {}),
            ...("className" in block ? { className: block.className } : {}),
            ...("figureLabel" in block ? { figureLabel: block.figureLabel } : {}),
          }
        : block,
    ),
  })) as unknown as WikiPageContent["sections"],
  links: [
    { path: "/measurement", label: "Measurement & Quality" },
    { path: "/design", label: "Construct Design" },
    { path: "/model", label: "Mathematical Modeling" },
    { path: "/hardware", label: "CirCore Reaction Platform" },
  ],
  next: {
    path: "/model",
    label: "Model",
    title: "How Models Guide the Next Decision",
    description: "A modular platform still needs evidence-based choices. Explore AEIP for target and epitope selection, Cell2Dose for dose exploration, and SST-QN for sustainability assessment.",
  },
};
