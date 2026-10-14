const SHARED_CDN =
  "https://static.igem.wiki/teams/6056/wiki/files/pages/shared";
const biorender = `${SHARED_CDN}/sponsor-biorender.webp`;
const grammarly = `${SHARED_CDN}/sponsor-grammarly.avif`;
const charlesRiver = `${SHARED_CDN}/sponsor-charles-river-english.webp`;
const igem = `${SHARED_CDN}/sponsor-igem.avif`;
const lark = `${SHARED_CDN}/sponsor-lark.avif`;
const mathworks = `${SHARED_CDN}/sponsor-mathworks.avif`;
const schrodinger = `${SHARED_CDN}/sponsor-schrodinger.avif`;
const jluWordmark = `${SHARED_CDN}/jlu-wordmark-bilingual.webp`;
const teachingSeal = `${SHARED_CDN}/bethune-teaching-department.webp`;
const coreFacility = `${SHARED_CDN}/sponsor-jlu-core-facility.webp`;
const itm = `${SHARED_CDN}/sponsor-jlu-itm.webp`;

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

export const FOOTER_MARK_TEACHING: FooterMark = {
  src: teachingSeal,
  width: 84,
  alt: "Department of Teaching, The First Bethune School of Clinical Medicine, Jilin University",
};

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

/**
 * Each organisation is represented by its main signature in the logo ribbons.
 * The first ribbon holds the sponsors and the hospital's two supporting
 * institutes; the second holds everyone else we thank.
 */
export const FOOTER_SPONSOR_ROWS: ReadonlyArray<
  ReadonlyArray<FooterOrganisation>
> = [
  [
    {
      // Vital River (维通利华) is Charles River's company in China.
      name: "Charles River",
      marks: [{ src: charlesRiver, width: 240, alt: "Charles River" }],
    },
    {
      name: "MathWorks",
      marks: [{ src: mathworks, width: 300, alt: "MathWorks" }],
    },
    {
      // Schrödinger publishes PyMOL.
      name: "Schrödinger",
      marks: [{ src: schrodinger, width: 310, alt: "Schrödinger" }],
    },
    {
      name: "Lark",
      marks: [{ src: lark, width: 230, alt: "Lark" }],
    },
    {
      name: "Core Facility",
      marks: [
        {
          src: coreFacility,
          width: 88,
          alt: "Core Facility of the First Hospital of Jilin University",
        },
      ],
    },
    {
      name: "ITM",
      marks: [
        {
          src: itm,
          width: 88,
          alt: "Institute of Translational Medicine, the First Hospital of Jilin University",
        },
      ],
    },
  ],
  [
    {
      name: "Grammarly",
      marks: [{ src: grammarly, width: 290, alt: "Grammarly" }],
    },
    {
      name: "BioRender",
      marks: [{ src: biorender, width: 105, alt: "BioRender" }],
    },
    {
      name: "iGEM",
      marks: [{ src: igem, width: 128, alt: "iGEM" }],
    },
  ],
];
