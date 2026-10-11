import grammarly from "../assets/partners/sponsor-grammarly.png";
import igem from "../assets/partners/sponsor-igem.png";
import lark from "../assets/partners/sponsor-lark.png";
import schrodinger from "../assets/partners/sponsor-schrodinger.png";

/**
 * Footer — single source of truth for the closing panel.
 *
 * Two rules govern this file:
 *   1. Nothing here is derived from the route. The panel's colour comes from the
 *      module palette (`route-palette-<module>.css`), not from a value below.
 *   2. Artwork is kept as supplied by the team. CSS sets its displayed size
 *      and preserves the marks' proportions.
 *
 * The panel is warm off-white paper. Institutional wordmarks use their dark
 * versions; sponsor marks retain their supplied colours. The zip shipped a
 * black and a white cut of each institutional wordmark; the white knock-outs
 * are invisible here and the outline cuts lose their hairlines at this size.
 *   - `jlu-crest`               solid, not the outline cut (L2) — hairlines
 *                                break up when reduced to 92px.
 *   - `jlu-wordmark-black`       the black knock-out (L4), not the white one
 *                                (L5). Verified: 11,119 dark opaque pixels
 *                                against 6 light ones, so L5 would have
 *                                rendered as an empty box on paper.
 *   - `bethune-clinical-college` solid, not the outline cut (L1).
 *   - `bethune-hospital-seal`   the only version that exists.
 */

/**
 * A mark rendered in the footer from the team's hosted or bundled assets.
 */
export interface FooterMark {
  src: string;
  /** Display width in pixels; responsive CSS can scale the artwork down. */
  width: number;
  /** Accessible name; the mark is decorative next to the address it labels. */
  alt: string;
}

const SHARED_CDN = "https://static.igem.wiki/teams/6056/wiki/files/pages/shared";
const jluCrest = `${SHARED_CDN}/jlu-crest.avif`;
const jluWordmark = `${SHARED_CDN}/jlu-wordmark-black.avif`;
const collegeWordmark = `${SHARED_CDN}/bethune-clinical-college.avif`;
const hospitalSeal = `${SHARED_CDN}/bethune-hospital-seal.avif`;
const cancerCenter = `${SHARED_CDN}/cancer-center.avif`;
const charlesRiver = `${SHARED_CDN}/sponsor-charles-river.avif`;
const mathworks = `${SHARED_CDN}/sponsor-mathworks.avif`;
const simulink = `${SHARED_CDN}/sponsor-simulink.avif`;
const polyspace = `${SHARED_CDN}/sponsor-polyspace.avif`;

/**
 * Institution names are written in the component, so these assets are
 * decorative signatures rather than the only source of a name.
 */
export const FOOTER_CLINICAL_COLLEGE_NAME =
  "The First Bethune Clinical Medical College of Jilin University";
export const FOOTER_CLINICAL_HOSPITAL_NAME =
  "The First Bethune Hospital of Jilin University";

export const FOOTER_MARK_UNIVERSITY: ReadonlyArray<FooterMark> = [
  { src: jluCrest, width: 96, alt: "Jilin University crest" },
  { src: jluWordmark, width: 235, alt: "吉林大学" },
];

export const FOOTER_MARK_CLINICAL: ReadonlyArray<FooterMark> = [
  { src: hospitalSeal, width: 82, alt: FOOTER_CLINICAL_HOSPITAL_NAME },
  { src: collegeWordmark, width: 238, alt: FOOTER_CLINICAL_COLLEGE_NAME },
];

export const FOOTER_INSTITUTION_LINES: ReadonlyArray<string> = [
  FOOTER_CLINICAL_COLLEGE_NAME,
  "Xinmin Street 71, Chaoyang District, Changchun, Jilin, PRC",
];

/**
 * Split so the footer can underline the local part alone. Underlining the whole
 * address lets the browser treat `jlu-fbh.cn` as a top-level domain.
 */
export const FOOTER_EMAIL_LOCAL = "team";
export const FOOTER_EMAIL_DOMAIN = "jlu-fbh.cn";
export const FOOTER_EMAIL = `${FOOTER_EMAIL_LOCAL}@${FOOTER_EMAIL_DOMAIN}`;

/**
 * The CC BY 4.0 notice and the gitlab.igem.org repository link are required on
 * every page by iGEM; they are rendered by `Footer.tsx` from these values and
 * must never be removed.
 */
export const FOOTER_LICENSE_LABEL =
  "Creative Commons Attribution 4.0 International license";
export const FOOTER_LICENSE_URL = "https://creativecommons.org/licenses/by/4.0/";

/** The Cancer Center is part of the clinical institution, not a sponsor tier. */
export const FOOTER_MARK_CANCER_CENTER: FooterMark = {
  src: cancerCenter,
  width: 132,
  alt: "Cancer Center, The First Bethune Hospital of Jilin University",
};

export interface FooterOrganisation {
  name: string;
  marks: ReadonlyArray<FooterMark>;
  products: ReadonlyArray<FooterMark>;
}

/** Alternate language marks and product artwork stay with their organisation. */
export const FOOTER_ORGANISATIONS: ReadonlyArray<FooterOrganisation> = [
  {
    name: "MathWorks",
    marks: [{ src: mathworks, width: 158, alt: "MathWorks" }],
    products: [
      { src: simulink, width: 50, alt: "Simulink" },
      { src: polyspace, width: 60, alt: "Polyspace" },
    ],
  },
  {
    name: "Charles River · 维通利华",
    marks: [{ src: charlesRiver, width: 214, alt: "Charles River 维通利华" }],
    products: [],
  },
  {
    name: "Lark",
    marks: [{ src: lark, width: 156, alt: "Lark" }],
    products: [],
  },
  {
    name: "Grammarly",
    marks: [{ src: grammarly, width: 190, alt: "Grammarly" }],
    products: [],
  },
  {
    name: "Schrödinger",
    marks: [{ src: schrodinger, width: 204, alt: "Schrödinger" }],
    products: [],
  },
  {
    name: "iGEM",
    marks: [{ src: igem, width: 100, alt: "iGEM" }],
    products: [],
  },
];
