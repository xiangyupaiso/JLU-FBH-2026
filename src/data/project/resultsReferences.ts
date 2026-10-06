/**
 * Results page — bibliography.
 *
 * Field-ised for the shared citation register (WIKI_ARCHITECTURE_SPEC.md §4.5):
 * `authors` / `title` / `journal` / `volumeYear` / `links`. The manuscript is
 * numbered, so `resultsPage.ts` builds a numeric index from the in-text `[n]`
 * markers and the ids below.
 *
 * House rules applied here, and only here:
 *
 * - `volumeYear` keeps the manuscript's own punctuation (`2005;57:33–41.`) —
 *   the register unifies slots and typography, it does not rewrite the data.
 * - The italic journal is the `journal` slot. Where the manuscript did not
 *   italicise a title (entries 5, 6, 11, 12, 15, 16) the register still sets the
 *   journal in its italic element, because that is the field's meaning.
 * - Identifiers (DOI / PMID / PMC / URL) become `links` with the `https://`
 *   prefix stripped from the label, matching the rest of the wiki.
 * - `*…*` is the register's italic marker inside a field, so entry 8 keeps
 *   `*Plasmodium berghei*` italic in its title. Entry 9's trailing note is an
 *   author annotation, not a bibliographic field; it is carried in `volumeYear`
 *   with its bold markers removed (the register has no bold slot).
 */

import type { CitationReference } from "../citations/citationTypes";

const doi = (suffix: string, label = `doi:${suffix}`) => ({
  href: `https://doi.org/${suffix}`,
  label,
});

const pmid = (id: string) => ({
  href: `https://pubmed.ncbi.nlm.nih.gov/${id}/`,
  label: `PMID: ${id}`,
});

const pmc = (id: string) => ({
  href: `https://www.ncbi.nlm.nih.gov/pmc/articles/${id}/`,
  label: id,
});

export const resultsReferences: CitationReference[] = [
  {
    id: 1,
    authors: "Gong Z, Hu W, Zhou C, Guo J, Yang L, Wang B.",
    title:
      "Recent advances and perspectives on the development of circular RNA cancer vaccines.",
    journal: "npj Vaccines.",
    volumeYear: "2025;10:41.",
    links: [doi("10.1038/s41541-025-01097-x")],
  },
  {
    id: 2,
    authors: "Jeck WR, Sorrentino JA, Wang K, et al.",
    title:
      "Circular RNAs are abundant, conserved, and associated with ALU repeats.",
    journal: "RNA.",
    volumeYear: "2013;19(2):141–157.",
    links: [pmid("23249763")],
  },
  {
    id: 3,
    authors:
      "Enuka Y, Lauriola M, Feldman ME, Sas-Chen A, Ulitsky I, Yarden Y.",
    title:
      "Circular RNAs are long-lived and display only minimal early alterations in response to a growth factor.",
    journal: "Nucleic Acids Res.",
    volumeYear: "2016;44(3):1370–1383.",
    links: [pmid("26657629")],
  },
  {
    id: 4,
    authors: "",
    title:
      "Trop2-Based Antibody–Drug Conjugates: Emerging Strategy and Progress in Triple-Negative Breast Cancer Therapy.",
    journal: "Curr Oncol.",
    volumeYear: "",
    links: [doi("10.3390/curroncol33020092"), pmid("41744856")],
  },
  {
    id: 5,
    authors:
      "Corti C, Boscolo Bielo L, Carnevale Schianca A, Taurelli Salimbeni B, Criscitiello C, Curigliano G.",
    title:
      "Future potential targets of antibody-drug conjugates in breast cancer.",
    journal: "Breast.",
    volumeYear: "2023;69:312-322.",
    links: [doi("10.1016/j.breast.2023.03.007")],
  },
  {
    id: 6,
    authors: "Eroles P, Dawid de Vera MT, Lago V.",
    title:
      "TROP2-targeting antibody-drug conjugates in breast cancer and ovarian carcinoma: therapeutic advances and resistance mechanisms.",
    journal: "Cancer Drug Resist.",
    volumeYear: "2026;9:6.",
    links: [doi("10.20517/cdr.2025.195"), pmid("42040770"), pmc("PMC13103265")],
  },
  {
    id: 7,
    authors: "Kreiter S, Selmi A, Diken M, et al.",
    title:
      "Increased antigen presentation efficiency by coupling antigens to MHC class I trafficking signals.",
    journal: "J Immunol.",
    volumeYear: "2008;180(1):309–318.",
    links: [pmid("18097032")],
  },
  {
    id: 8,
    authors:
      "Bergmann-Leitner ES, Duncan EH, Leitner WW, Neutzner A, Savranskaya T, Angov E, Tsokos GC.",
    title:
      "C3d-defined complement receptor-binding peptide p28 conjugated to circumsporozoite protein provides protection against *Plasmodium berghei*.",
    journal: "Vaccine.",
    volumeYear: "2007;25(45):7732–7736.",
    links: [pmid("17931754")],
  },
  {
    id: 9,
    authors: "Nielsen M, Lundegaard C, Lund O, Keşmir C.",
    title:
      "The role of the proteasome in generating cytotoxic T cell epitopes: insights obtained from improved predictions of proteasomal cleavage.",
    journal: "Immunogenetics.",
    volumeYear: "2005;57:33–41. (The citation requested by IEDB for NetChop.)",
    links: [pmid("15744535")],
  },
  {
    id: 10,
    authors: "",
    title:
      "In silico design and in vitro validation of a multi-epitope peptide vaccine targeting triple-negative breast cancer.",
    journal: "Front Oncol.",
    volumeYear: "2025;15:1611991.",
    links: [doi("10.3389/fonc.2025.1611991"), pmid("40626008")],
  },
  {
    id: 11,
    authors:
      "Sahin U, Schmidt M, Derhovanessian E, Cortini A, Vogler I, Omokoko T, et al.",
    title:
      "Individualized mRNA vaccines evoke durable T cell immunity in adjuvant TNBC.",
    journal: "Nature.",
    volumeYear: "2026;651:1088-1096.",
    links: [doi("10.1038/s41586-025-10004-2"), pmid("41708868")],
  },
  {
    id: 12,
    authors: "Zeng S, Wang L, Zeng W, Sun L.",
    title:
      "Neoantigens in cancer immunoediting: from mechanisms to personalized vaccines in breast cancer.",
    journal: "Front Cell Dev Biol.",
    volumeYear: "2026;13:1733549.",
    links: [
      doi("10.3389/fcell.2025.1733549"),
      pmid("41567982"),
      pmc("PMC12816192"),
    ],
  },
  {
    id: 13,
    authors: "Gao G, Wang Z, Qu X, Zhang Z.",
    title:
      "Prognostic value of tumor-infiltrating lymphocytes in patients with triple-negative breast cancer: a systematic review and meta-analysis.",
    journal: "BMC Cancer.",
    volumeYear: "2020;20:179.",
    links: [doi("10.1186/s12885-020-6668-z")],
  },
  {
    id: 14,
    authors: "Hou X, Zaks T, Langer R, Dong Y.",
    title: "Lipid nanoparticles for mRNA delivery.",
    journal: "Nat Rev Mater.",
    volumeYear: "2021;6(12):1078–1094.",
    links: [pmid("34394960")],
  },
  {
    id: 15,
    authors: "Wang J, Ding Y, Chong K, Cui M, Cao Z, Tang C, et al.",
    title:
      "Recent Advances in Lipid Nanoparticles and Their Safety Concerns for mRNA Delivery.",
    journal: "Vaccines (Basel).",
    volumeYear: "2024;12(10):1148.",
    links: [doi("10.3390/vaccines12101148"), pmid("39460315")],
  },
  {
    id: 16,
    authors: "Tremblay-McLean A, Coenraads S, Kiani Z, Dupuy FP, Bernard NF.",
    title:
      "Expression of ligands for activating natural killer cell receptors on cell lines commonly used to assess natural killer cell function.",
    journal: "BMC Immunol.",
    volumeYear: "2019;20:8.",
    links: [doi("10.1186/s12865-018-0272-x")],
  },
  {
    id: 17,
    authors: "Holm S.",
    title: "A simple sequentially rejective multiple test procedure.",
    journal: "Scand J Stat.",
    volumeYear: "1979;6:65–70",
  },
  {
    id: 18,
    authors: "Percie du Sert N, Hurst V, Ahluwalia A, et al.",
    title:
      "The ARRIVE guidelines 2.0: updated guidelines for reporting animal research.",
    journal: "PLoS Biol.",
    volumeYear: "2020;18(7):e3000410.",
    links: [pmid("32663219")],
  },
  {
    id: 19,
    authors: "",
    title: "IEDB Population Coverage tool.",
    journal: "",
    volumeYear: "",
    links: [
      {
        href: "https://tools.iedb.org/population/",
        label: "tools.iedb.org/population/",
      },
    ],
  },
];
