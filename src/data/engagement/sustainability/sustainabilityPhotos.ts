/**
 * Sustainability — SDG 3 engagement photos.
 *
 * Source drop: `sustain-overview-SDG3/02-SDG Impact Franmework/01-SDG3/
 * 01-stakeholders/<NN>-<person>/*.avif` (cameras, ward visits, lab and conference
 * records). Every file was capped at 1800px on the long edge and re-encoded as
 * WebP; the original AVIFs stay untouched in the team archive.
 *
 * Two consumers, one source of truth:
 *   - `StakeholderPhotoReel` — the slow crossfade bleeding off the card's right
 *     edge (only the 3–4 strongest frames per person, in narrative order);
 *   - the "Click more" article — the full set, laid out inline at body width.
 *
 * A person with no `photos` entry simply renders without a photo layer, so the
 * mechanism stays identical across all twelve SDG 3 cards.
 */

export interface StakeholderPhoto {
  src: string;
  alt: string;
  /** Serif italic line that fades in over the photo. */
  caption: string;
}

export type StakeholderPhotoSet = ReadonlyArray<StakeholderPhoto>;

/* ----------------------------------------------------------------------------
 * Local sources — Vite emits a hashed URL per import, so these are referenced
 * through the module graph rather than by path string.
 * -------------------------------------------------------------------------- */

import liChengli1 from "../../../assets/wiki/sustainability/sustainability-sdg3-li-chengli-1.webp";
import liChengli2 from "../../../assets/wiki/sustainability/sustainability-sdg3-li-chengli-2.webp";
import liChengli3 from "../../../assets/wiki/sustainability/sustainability-sdg3-li-chengli-3.webp";
import liChengli4 from "../../../assets/wiki/sustainability/sustainability-sdg3-li-chengli-4.webp";
import tnbcPatients1 from "../../../assets/wiki/sustainability/sustainability-sdg3-tnbc-patients-1.webp";
import tnbcPatients2 from "../../../assets/wiki/sustainability/sustainability-sdg3-tnbc-patients-2.webp";
import tnbcPatients3 from "../../../assets/wiki/sustainability/sustainability-sdg3-tnbc-patients-3.webp";
import wenJing1 from "../../../assets/wiki/sustainability/sustainability-sdg3-wen-jing-1.webp";
import wenJing2 from "../../../assets/wiki/sustainability/sustainability-sdg3-wen-jing-2.webp";
import yangShujuan1 from "../../../assets/wiki/sustainability/sustainability-sdg3-yang-shujuan-1.webp";
import yangShujuan2 from "../../../assets/wiki/sustainability/sustainability-sdg3-yang-shujuan-2.webp";
import yangShujuan3 from "../../../assets/wiki/sustainability/sustainability-sdg3-yang-shujuan-3.webp";
import yangShujuan4 from "../../../assets/wiki/sustainability/sustainability-sdg3-yang-shujuan-4.webp";
import yangShujuan5 from "../../../assets/wiki/sustainability/sustainability-sdg3-yang-shujuan-5.webp";
import jiaLin1 from "../../../assets/wiki/sustainability/sustainability-sdg3-jia-lin-1.webp";
import jiaLin2 from "../../../assets/wiki/sustainability/sustainability-sdg3-jia-lin-2.webp";
import jiaLin3 from "../../../assets/wiki/sustainability/sustainability-sdg3-jia-lin-3.webp";
import jiaLin4 from "../../../assets/wiki/sustainability/sustainability-sdg3-jia-lin-4.webp";
import jiaLin5 from "../../../assets/wiki/sustainability/sustainability-sdg3-jia-lin-5.webp";
import zhaoGang1 from "../../../assets/wiki/sustainability/sustainability-sdg3-zhao-gang-1.webp";
import zhaoGang2 from "../../../assets/wiki/sustainability/sustainability-sdg3-zhao-gang-2.webp";
import zhaoGang3 from "../../../assets/wiki/sustainability/sustainability-sdg3-zhao-gang-3.webp";
import zhaoGang4 from "../../../assets/wiki/sustainability/sustainability-sdg3-zhao-gang-4.webp";
import zhaoGang5 from "../../../assets/wiki/sustainability/sustainability-sdg3-zhao-gang-5.webp";
import globalYouth1 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-1.webp";
import globalYouth2 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-2.webp";
import globalYouth3 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-3.webp";
import globalYouth4 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-4.webp";
import globalYouth5 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-5.webp";
import globalYouth6 from "../../../assets/wiki/sustainability/sustainability-sdg3-global-youth-6.webp";

/* ----------------------------------------------------------------------------
 * Per-person photo sets
 * -------------------------------------------------------------------------- */

const liChengli: StakeholderPhotoSet = [
  {
    src: liChengli1,
    alt: "Project pitch shared on screen during the video consultation with Dr. Chengli Li",
    caption: "Presenting the CirCure concept",
  },
  {
    src: liChengli2,
    alt: "Video consultation gallery view with our team and Dr. Chengli Li",
    caption: "Video consultation",
  },
  {
    src: liChengli3,
    alt: "Team members joining the consultation from their own rooms",
    caption: "Joining from Jilin",
  },
  {
    src: liChengli4,
    alt: "Later stage of the video consultation with Dr. Chengli Li",
    caption: "Reordering our priorities",
  },
];

const tianRunhui: StakeholderPhotoSet = [];

const tnbcPatients: StakeholderPhotoSet = [
  {
    src: tnbcPatients1,
    alt: "Ward visit at the Cancer Center of the First Bethune Hospital of Jilin University",
    caption: "Ward visit",
  },
  {
    src: tnbcPatients2,
    alt: "Talking with a patient at her bedside while a team member takes notes",
    caption: "Listening at the bedside",
  },
  {
    src: tnbcPatients3,
    alt: "Interview continuing with two patients seated on adjacent beds",
    caption: "Recurrence, cost, trust",
  },
];

const wenJing: StakeholderPhotoSet = [
  {
    src: wenJing1,
    alt: "Voice call with Jing Wen, commercial health insurance specialist",
    caption: "Voice consultation",
  },
  {
    src: wenJing2,
    alt: "Team member with Jing Wen at a youth podcast dialogue event",
    caption: "Meeting in person",
  },
];

const yangShujuan: StakeholderPhotoSet = [
  {
    src: yangShujuan1,
    alt: "Team members with Yang Shujuan holding the team banner in her office",
    caption: "First Bethune Hospital",
  },
  {
    src: yangShujuan2,
    alt: "Yang Shujuan in conversation with three team members at her desk",
    caption: "Discussing prevention and screening",
  },
  {
    src: yangShujuan3,
    alt: "Yang Shujuan reading her notes during the discussion",
    caption: "Beyond treatment alone",
  },
  {
    src: yangShujuan4,
    alt: "Yang Shujuan holding up printed materials for the visiting team",
    caption: "Reviewing our printed records",
  },
  {
    src: yangShujuan5,
    alt: "Yang Shujuan smiling at her desk as the team takes notes",
    caption: "Closing the discussion",
  },
];

const jiaLin: StakeholderPhotoSet = [
  {
    src: jiaLin1,
    alt: "Team members reviewing project material with Lin Jia in the laboratory",
    caption: "Laboratory discussion",
  },
  {
    src: jiaLin2,
    alt: "Six people in the laboratory seated around a laptop",
    caption: "Clinical needs review",
  },
  {
    src: jiaLin3,
    alt: "Lin Jia in a white coat seated with team members taking notes",
    caption: "From pathology to design",
  },
  {
    src: jiaLin4,
    alt: "Lin Jia addressing five team members gathered in the laboratory",
    caption: "What problem should we solve?",
  },
  {
    src: jiaLin5,
    alt: "Wider view of the laboratory discussion with Lin Jia gesturing",
    caption: "Clarifying the unmet need",
  },
];

const zhaoGang: StakeholderPhotoSet = [
  {
    src: zhaoGang1,
    alt: "Zhao Gang speaking with the team in a clinical office",
    caption: "Clinical management",
  },
  {
    src: zhaoGang2,
    alt: "Zhao Gang talking across his desk to a team member taking notes",
    caption: "Fitting into the care pathway",
  },
  {
    src: zhaoGang3,
    alt: "Team members holding iGEM and JLU-FBH emblems beside Zhao Gang",
    caption: "A shared goal",
  },
  {
    src: zhaoGang4,
    alt: "Five team members listening while one takes notes on a tablet",
    caption: "From lab bench to ward",
  },
  {
    src: zhaoGang5,
    alt: "Full team group photo with Zhao Gang and the team banner",
    caption: "Visit complete",
  },
];

const globalYouth: StakeholderPhotoSet = [
  {
    src: globalYouth1,
    alt: "Opening ceremony of the 2026 Acceleration Week for Global Youth Development Programs",
    caption: "Acceleration Week, June 2026",
  },
  {
    src: globalYouth2,
    alt: "Team members with fellow participants at the Lin-Gang reception",
    caption: "Meeting peers from other regions",
  },
  {
    src: globalYouth3,
    alt: "Two team members during a workshop session at Acceleration Week",
    caption: "Workshop session",
  },
  {
    src: globalYouth4,
    alt: "Young practitioners from different countries seated in the session audience",
    caption: "Health and Well-being group",
  },
  {
    src: globalYouth5,
    alt: "Team member presenting the project at the Good Health and Well-being forum",
    caption: "Project pitch",
  },
  {
    src: globalYouth6,
    alt: "Team member in front of the Acceleration Week backdrop",
    caption: "Shenzhen and Wuhan",
  },
];

/**
 * Named sets, so article copy can drop a specific frame between two sections
 * without hard-coding asset paths into the prose layer.
 */
export const sdg3PhotoSets = {
  "sdg3-li-chengli": liChengli,
  "sdg3-tian-runhui": tianRunhui,
  "sdg3-tnbc-patients": tnbcPatients,
  "sdg3-wen-jing": wenJing,
  "sdg3-yang-shujuan": yangShujuan,
  "sdg3-jia-lin": jiaLin,
  "sdg3-zhao-gang": zhaoGang,
  "sdg3-global-youth": globalYouth,
} as const satisfies Record<string, StakeholderPhotoSet>;

/**
 * `StakeholderProfile.id` → photos. Only the seven profiles with field
 * documentation appear; 04 / 05 / 07 / 10 have no images on file and therefore
 * render no photo layer at all.
 */
export const sdg3StakeholderPhotos: Readonly<Record<string, StakeholderPhotoSet>> =
  sdg3PhotoSets;

/** Every SDG 3 engagement photo, ordered for the inline article galleries. */
export const sdg3AllPhotos: ReadonlyArray<StakeholderPhoto> = [
  ...liChengli,
  ...tianRunhui,
  ...tnbcPatients,
  ...wenJing,
  ...yangShujuan,
  ...jiaLin,
  ...zhaoGang,
  ...globalYouth,
];

/** Photos of one profile, or an empty list when nothing was documented. */
export const stakeholderPhotos = (id: string): StakeholderPhotoSet =>
  sdg3StakeholderPhotos[id] ?? [];

/* ----------------------------------------------------------------------------
 * SDG 9 — iGEM-hosted interview photo sets
 * -------------------------------------------------------------------------- */

const hostedSdg9PhotoSet = (
  slug: string,
  count: number,
  label: string,
): StakeholderPhotoSet =>
  Array.from({ length: count }, (_, index) => ({
    src: `https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg9/${slug}-${index + 1}.avif`,
    alt: `${label} interview photo ${index + 1}`,
    caption: label,
  }));

/** The source manuscript supplied iGEM-hosted images rather than local files. */
export const sdg9PhotoSets = {
  "sdg9-01": hostedSdg9PhotoSet("01-yishu-wang", 5, "Interview with Professor Yishu Wang"),
  "sdg9-02": [
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg9/02-qingtian-guan.avif",
      alt: "Interview with Mr. Guan Qingtian interview photo 1",
      caption: "Interview with Mr. Guan Qingtian",
    },
  ],
  "sdg9-03": hostedSdg9PhotoSet("03-jifan-hu", 6, "Interview with Professor Jifan Hu"),
  "sdg9-04": hostedSdg9PhotoSet("04-tiesuo-zhao", 5, "Interview with Professor Tiesuo Zhao"),
  "sdg9-05": hostedSdg9PhotoSet("05-junqi-niu", 6, "Interview with Professor Junqi Niu"),
  "sdg9-06": hostedSdg9PhotoSet("06-yuning-zhang", 7, "Interview with Professor Yuning Zhang"),
  "sdg9-07": hostedSdg9PhotoSet("07-di-wu", 6, "Interview with Professor Wu Di"),
  "sdg9-08": hostedSdg9PhotoSet(
    "08-shanghai-lin-gang-research-center-for-medical-equipment",
    6,
    "Visit to the Shanghai Lingang Research Center for Medical Equipment",
  ),
  "sdg9-09": hostedSdg9PhotoSet("09-hualan-bio", 6, "Discussion with Hualan Bio"),
} as const satisfies Record<string, StakeholderPhotoSet>;
