/**
 * Footer — single source of truth for the closing panel.
 *
 * Two rules govern this file:
 *   1. Nothing here is derived from the route. The panel's colour comes from the
 *      module palette (`route-palette-<module>.css`), not from a value below.
 *   2. Every mark keeps its own intrinsic pixel size. The crest is 4195px, the
 *      hospital seal is 295px; CSS decides how much of that is *shown*, never
 *      this file. Nothing is upscaled beyond its source resolution.
 *
 * The panel is warm off-white paper, so every mark below is a *dark* ink
 * version. The zip shipped a black and a white cut of each wordmark; the white
 * knock-outs are invisible here and the outline cuts lose their hairlines when
 * reduced to this size.
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
 * A mark rendered in the footer. `src` is a Vite import, never a path string.
 */
export interface FooterMark {
  src: string;
  /**
   * Rendered width in px at the desktop breakpoint. This is a *display size*,
   * always <= the asset's own pixel width. It is intentionally per-mark: the
   * panel is a contact card, not a normalised logo grid.
   */
  width: number;
  /** Accessible name; the mark is decorative next to the address it labels. */
  alt: string;
}

import jluCrest from "../assets/footer/jlu-crest.png";
import jluWordmark from "../assets/footer/jlu-wordmark-black.png";
import collegeWordmark from "../assets/footer/bethune-clinical-college.png";
import hospitalSeal from "../assets/footer/bethune-hospital-seal.png";
import cancerCenter from "../assets/partners/cancer-center.png";
import charlesRiver from "../assets/partners/sponsor-charles-river.png";
import mathworks from "../assets/partners/sponsor-mathworks.png";
import simulink from "../assets/partners/sponsor-simulink.png";
import polyspace from "../assets/partners/sponsor-polyspace.png";

/**
 * Institution wordmarks retain their artwork and display widths. The college
 * asset is cropped to its alpha bounds so its visible ink shares the university
 * wordmark's left edge. CSS centres both seals in one shared column.
 */
export const FOOTER_CLINICAL_COLLEGE_NAME =
  "The First Bethune Clinical Medical College of Jilin University";

export const FOOTER_MARK_UNIVERSITY: ReadonlyArray<FooterMark> = [
  { src: jluCrest, width: 96, alt: "Jilin University crest" },
  { src: jluWordmark, width: 235, alt: "吉林大学" },
];

export const FOOTER_MARK_CLINICAL: ReadonlyArray<FooterMark> = [
  { src: hospitalSeal, width: 82, alt: "The First Bethune Hospital of Jilin University" },
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

/**
 * Partners — the Cancer Center mark and the supporting companies.
 *
 * Two tiers, because the sources are not comparable at one size:
 *   - `FOOTER_PARTNER_PRIMARY` is the Cancer Center. Its artwork is three
 *     stacked lines (four-colour ring, the hospital lockup, 肿瘤中心 / CANCER
 *     CENTER) and is illegible below ~100px, so it is set apart at 132px.
 *   - `FOOTER_PARTNER_SUPPORT` are single-line marks shown as bare icons — no
 *     captions, no per-item labels.
 *
 * Each row pairs one long lockup with one compact glyph. The source set is
 * two of each — two wide lockups (Charles River, MathWorks) and two square
 * product marks (Simulink, Polyspace) — so a 2×2 block split by shape would
 * give two rows of one kind, which reads as a wide row with a stub under it
 * rather than as a set. One of each per row makes the two rows mirror each
 * other and keeps the block's silhouette even.
 *
 * L-Membrane was dropped. Its mark is the same black triangle as the MathWorks
 * logo, so beside it the row just repeated one shape; `sponsor-l-membrane.png`
 * stays in `src/assets/partners/` if it is ever needed.
 *
 * Every `width` is a display size at the desktop breakpoint and never exceeds
 * the asset's own pixel width. All marks are transparent PNGs with their ink
 * left in the source colour, so they read on the panel's paper ground directly.
 *
 * The archive supplied as `维通利华.zip` actually contains Charles River (the
 * CRO); `charles-river` is named for what is inside the file rather than for
 * the archive it arrived in.
 */
export const FOOTER_PARTNER_PRIMARY: FooterMark = {
  src: cancerCenter,
  width: 132,
  alt: "Cancer Center, The First Bethune Hospital of Jilin University",
};

export const FOOTER_PARTNER_SUPPORT: ReadonlyArray<
  ReadonlyArray<FooterMark>
> = [
  [
    { src: mathworks, width: 158, alt: "MathWorks" },
    { src: simulink, width: 50, alt: "Simulink" },
  ],
  [
    { src: charlesRiver, width: 214, alt: "Charles River" },
    { src: polyspace, width: 60, alt: "Polyspace" },
  ],
];

export const FOOTER_PARTNERS_LABEL = "Sponsors & Teammates";
