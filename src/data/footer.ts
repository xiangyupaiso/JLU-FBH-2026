import grammarly from "../assets/partners/sponsor-grammarly.png";
import charlesRiver from "../assets/partners/sponsor-charles-river-english.svg";
import igem from "../assets/partners/sponsor-igem.png";
import lark from "../assets/partners/sponsor-lark.png";
import mathworks from "../assets/partners/sponsor-mathworks.png";
import schrodinger from "../assets/partners/sponsor-schrodinger.png";
import jluWordmark from "../assets/partners/jlu-wordmark-bilingual.webp";

/**
 * Footer — single source of truth for the closing panel.
 *
 * Two rules govern this file:
 *   1. Nothing here is derived from the route. The panel's colour comes from the
 *      module palette (`route-palette-<module>.css`), not from a value below.
 *   2. Artwork is kept as supplied by the team. CSS sets its displayed size
 *      and preserves the marks' proportions.
 *
 * The panel is warm off-white paper. Institutional marks retain their supplied
 * colours; sponsor marks are softened to neutral grey by the ribbon CSS.
 *   - `jlu-crest`               solid, not the outline cut (L2) — hairlines
 *                                break up when reduced to 92px.
 *   - `jlu-wordmark-bilingual`  right-hand crop of the team's supplied blue
 *                                Chinese/English signature, without redrawing.
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
  /** Accessible name; marks beside a written institution name are decorative. */
  alt: string;
}

const SHARED_CDN =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/shared";
const jluCrest = `${SHARED_CDN}/jlu-crest.avif`;
const collegeWordmark = `${SHARED_CDN}/bethune-clinical-college.avif`;
const hospitalSeal = `${SHARED_CDN}/bethune-hospital-seal.avif`;
const cancerCenter = `${SHARED_CDN}/cancer-center.avif`;

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
  { src: jluWordmark, width: 160, alt: "吉林大学 · Jilin University" },
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
export const FOOTER_LICENSE_URL =
  "https://creativecommons.org/licenses/by/4.0/";

/** The Cancer Center is part of the clinical institution, not a sponsor tier. */
export const FOOTER_MARK_CANCER_CENTER: FooterMark = {
  src: cancerCenter,
  width: 132,
  alt: "Cancer Center, The First Bethune Hospital of Jilin University",
};

export interface FooterOrganisation {
  name: string;
  marks: ReadonlyArray<FooterMark>;
}

/** Each organisation is represented by its main signature in the logo ribbons. */
export const FOOTER_ORGANISATIONS: ReadonlyArray<FooterOrganisation> = [
  {
    name: "MathWorks",
    marks: [{ src: mathworks, width: 300, alt: "MathWorks" }],
  },
  {
    name: "Charles River",
    marks: [{ src: charlesRiver, width: 240, alt: "Charles River" }],
  },
  {
    name: "Lark",
    marks: [{ src: lark, width: 230, alt: "Lark" }],
  },
  {
    name: "Grammarly",
    marks: [{ src: grammarly, width: 290, alt: "Grammarly" }],
  },
  {
    name: "Schrödinger",
    marks: [{ src: schrodinger, width: 310, alt: "Schrödinger" }],
  },
  {
    name: "iGEM",
    marks: [{ src: igem, width: 128, alt: "iGEM" }],
  },
];
