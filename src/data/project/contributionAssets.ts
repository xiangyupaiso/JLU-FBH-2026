/**
 * Contribution page — asset registry.
 *
 * One entry per image / document the page renders, in the shape the team's
 * asset workflow expects (`sustainabilityAssets.ts` is the reference model):
 *
 *   semantic key → file name · local source · iGEM upload URL · alt text
 *
 * ## Current state: local sources only, upload URLs blank
 *
 * Every file below was produced from the source drop in
 * `文案集/project/contribution/图片和附件/` (the eight activity `.zip` archives
 * were expanded first). Images were capped at 1800px on the long edge and
 * re-encoded as WebP at q82 — the largest is now ~440 kB, inside the team's
 * 1.5 MB image budget. The four PDFs are copied byte-for-byte into
 * `public/assets/docs/`.
 *
 * `uploadUrl` is intentionally an empty string for all of them: nothing has
 * been pushed to `static.igem.wiki` yet. Once the asset owner uploads the files
 * and returns the CDN URLs, fill in exactly one string per entry here and
 * re-run the asset registry:
 *
 *   node scripts/igem-asset-manager.mjs scan-all
 *   node scripts/igem-asset-manager.mjs export-markdown
 *
 * Because `contributionImage()` prefers `localSrc`, every image renders today
 * from the bundled local copy and will keep rendering if a URL is ever missing
 * — a blank `uploadUrl` is a visible TODO, never a broken page.
 *
 * Naming follows the team convention
 * `contribution-<topic>-<what>[-<n>].webp`, and the upload target mirrors it
 * under `pages/project/`.
 */

import ddlCrisisPosterImg from "../../assets/wiki/contribution/contribution-responsible-ddl-crisis-poster.webp";

import circoreDeviceImg from "../../assets/wiki/contribution/contribution-hardware-circore-device.webp";

import sdgFrameworkImg from "../../assets/wiki/contribution/contribution-sdg-set-develop-grow-framework.webp";

import tamSamSomImg from "../../assets/wiki/contribution/contribution-entrepreneurship-tam-sam-som.webp";

import bioMemoryCoverImg from "../../assets/wiki/contribution/contribution-education-bio-memory-cover.webp";
import bioStrategyArena1Img from "../../assets/wiki/contribution/contribution-education-bio-strategy-arena-1.webp";
import bioStrategyArena2Img from "../../assets/wiki/contribution/contribution-education-bio-strategy-arena-2.webp";

import virtualLab1Img from "../../assets/wiki/contribution/contribution-education-virtual-lab-1.webp";
import virtualLab2Img from "../../assets/wiki/contribution/contribution-education-virtual-lab-2.webp";

import synbioClassroom1Img from "../../assets/wiki/contribution/contribution-education-synbio-classroom-1.webp";
import synbioClassroom2Img from "../../assets/wiki/contribution/contribution-education-synbio-classroom-2.webp";
import synbioClassroom3Img from "../../assets/wiki/contribution/contribution-education-synbio-classroom-3.webp";
import synbioClassroom4Img from "../../assets/wiki/contribution/contribution-education-synbio-classroom-4.webp";

import musicFestival1Img from "../../assets/wiki/contribution/contribution-education-music-festival-1.webp";
import musicFestival2Img from "../../assets/wiki/contribution/contribution-education-music-festival-2.webp";
import musicFestival3Img from "../../assets/wiki/contribution/contribution-education-music-festival-3.webp";
import musicFestival4Img from "../../assets/wiki/contribution/contribution-education-music-festival-4.webp";

import ethicsDebate1Img from "../../assets/wiki/contribution/contribution-education-ethics-debate-1.webp";
import ethicsDebate2Img from "../../assets/wiki/contribution/contribution-education-ethics-debate-2.webp";

import northeastExchange1Img from "../../assets/wiki/contribution/contribution-collab-northeast-exchange-1.webp";
import northeastExchange2Img from "../../assets/wiki/contribution/contribution-collab-northeast-exchange-2.webp";
import northeastExchange3Img from "../../assets/wiki/contribution/contribution-collab-northeast-exchange-3.webp";

import lettersAcrossIgem1Img from "../../assets/wiki/contribution/contribution-collab-letters-across-igem-1.webp";
import lettersAcrossIgem2Img from "../../assets/wiki/contribution/contribution-collab-letters-across-igem-2.webp";
import lettersAcrossIgem3Img from "../../assets/wiki/contribution/contribution-collab-letters-across-igem-3.webp";

import ccic1Img from "../../assets/wiki/contribution/contribution-collab-ccic-1.webp";
import ccic2Img from "../../assets/wiki/contribution/contribution-collab-ccic-2.webp";
import ccic3Img from "../../assets/wiki/contribution/contribution-collab-ccic-3.webp";
import ccic4Img from "../../assets/wiki/contribution/contribution-collab-ccic-4.webp";

import apic1Img from "../../assets/wiki/contribution/contribution-collab-apic-1.webp";
import apic2Img from "../../assets/wiki/contribution/contribution-collab-apic-2.webp";

import regionalNorthChinaImg from "../../assets/wiki/contribution/contribution-collab-regional-north-china.webp";
import regionalEastChinaImg from "../../assets/wiki/contribution/contribution-collab-regional-east-china.webp";
import regionalSouthChinaImg from "../../assets/wiki/contribution/contribution-collab-regional-south-china.webp";
import regionalCentralChinaImg from "../../assets/wiki/contribution/contribution-collab-regional-central-china.webp";

export type ContributionAssetKind = "image" | "pdf";

export interface ContributionAssetEntry {
  kind: ContributionAssetKind;
  /** File name as the reader sees it (images: also the published name). */
  fileName: string;
  /**
   * Name the file carries on `static.igem.wiki`. Identical to `fileName` for
   * every image; the four documents keep their descriptive Chinese titles as
   * local files but are uploaded under ASCII names so the CDN path stays clean
   * (a URL built from `动物伦理白皮书.pdf` would be a run of percent escapes,
   * and the asset registry's own sanitizer collapses such a stem to nothing).
   */
  uploadFileName?: string;
  /** Where the file lives in the repository. */
  localSourcePath: string;
  /** Bundled local URL (images only — Vite emits a hashed asset URL). */
  localSrc?: string;
  /** Official CDN URL; empty until the file is uploaded. */
  uploadUrl: string;
  /** Figure caption / document label. Also the accessible name. */
  alt: string;
  /** Section the asset belongs to, for the registry export. */
  section: string;
}

/** Published CDN file name — the upload target's own name. */
const publishedName = (entry: ContributionAssetEntry): string =>
  entry.uploadFileName ?? entry.fileName;

const IMG = "https://static.igem.wiki/teams/6056/wiki/files/pages/project";
const DOCS = "https://static.igem.wiki/teams/6056/wiki/files/docs";

const assetDir = "src/assets/wiki/contribution";
const docDir = "public/assets/docs";

/**
 * Reserved upload targets. Kept as named constants rather than inline template
 * strings so filling in the returned CDN URL is a one-line change per asset.
 */
const IMG_TARGET = `${IMG}/`;
const DOC_TARGET = `${DOCS}/`;

export const contributionAssets = {
  /* --- Responsible research in practice ---------------------------------- */
  ddlCrisisPoster: {
    kind: "image",
    fileName: "contribution-responsible-ddl-crisis-poster.webp",
    localSourcePath: `${assetDir}/contribution-responsible-ddl-crisis-poster.webp`,
    localSrc: ddlCrisisPosterImg,
    uploadUrl: "",
    alt: "Poster of DDL Crisis murder mystery game",
    section: "Responsible Research in Practice",
  },
  animalEthicsHandbook: {
    kind: "pdf",
    fileName: "动物伦理白皮书.pdf",
    uploadFileName: "contribution-animal-ethics-handbook.pdf",
    localSourcePath: `${docDir}/动物伦理白皮书.pdf`,
    uploadUrl: "",
    alt: "Animal Model Research Safety and Ethics Handbook",
    section: "Responsible Research in Practice",
  },
  laboratorySafetyHandbook: {
    kind: "pdf",
    fileName: "实验室规范安全白皮书.pdf",
    uploadFileName: "contribution-laboratory-safety-handbook.pdf",
    localSourcePath: `${docDir}/实验室规范安全白皮书.pdf`,
    uploadUrl: "",
    alt: "Laboratory Safety Handbook",
    section: "Responsible Research in Practice",
  },

  /* --- Accessible computational tools ------------------------------------ */

  /* --- Modular hardware platform ----------------------------------------- */
  circoreDevice: {
    kind: "image",
    fileName: "contribution-hardware-circore-device.webp",
    localSourcePath: `${assetDir}/contribution-hardware-circore-device.webp`,
    localSrc: circoreDeviceImg,
    uploadUrl: "",
    alt: "Schematic diagram of the CirCore circRNA vaccine expression device",
    section: "Modular Hardware Platform",
  },

  /* --- Sustainable innovation framework ---------------------------------- */
  sdgFramework: {
    kind: "image",
    fileName: "contribution-sdg-set-develop-grow-framework.webp",
    localSourcePath: `${assetDir}/contribution-sdg-set-develop-grow-framework.webp`,
    localSrc: sdgFrameworkImg,
    uploadUrl: "",
    alt: "SET-DEVELOP-GROW Impact Framework (SDG Impact Framework)",
    section: "Sustainable Innovation Framework",
  },

  /* --- Translation pathway ----------------------------------------------- */
  tamSamSom: {
    kind: "image",
    fileName: "contribution-entrepreneurship-tam-sam-som.webp",
    localSourcePath: `${assetDir}/contribution-entrepreneurship-tam-sam-som.webp`,
    localSrc: tamSamSomImg,
    uploadUrl: "",
    alt: "TAM-SAM-SOM market size estimation",
    section: "Translation Pathway",
  },

  /* --- Education --------------------------------------------------------- */
  virtualLab1: {
    kind: "image",
    fileName: "contribution-education-virtual-lab-1.webp",
    localSourcePath: `${assetDir}/contribution-education-virtual-lab-1.webp`,
    localSrc: virtualLab1Img,
    uploadUrl: "",
    alt: "Virtual Laboratory operation example, experiment 2 main working page",
    section: "Education",
  },
  virtualLab2: {
    kind: "image",
    fileName: "contribution-education-virtual-lab-2.webp",
    localSourcePath: `${assetDir}/contribution-education-virtual-lab-2.webp`,
    localSrc: virtualLab2Img,
    uploadUrl: "",
    alt: "Virtual Laboratory operation example, experiment 6 reagent addition",
    section: "Education",
  },
  synbioClassroom1: {
    kind: "image",
    fileName: "contribution-education-synbio-classroom-1.webp",
    localSourcePath: `${assetDir}/contribution-education-synbio-classroom-1.webp`,
    localSrc: synbioClassroom1Img,
    uploadUrl: "",
    alt: "Activity photo from SynBio Classroom, students loading samples",
    section: "Education",
  },
  synbioClassroom2: {
    kind: "image",
    fileName: "contribution-education-synbio-classroom-2.webp",
    localSourcePath: `${assetDir}/contribution-education-synbio-classroom-2.webp`,
    localSrc: synbioClassroom2Img,
    uploadUrl: "",
    alt: "Activity photo from SynBio Classroom, students operating equipment",
    section: "Education",
  },
  synbioClassroom3: {
    kind: "image",
    fileName: "contribution-education-synbio-classroom-3.webp",
    localSourcePath: `${assetDir}/contribution-education-synbio-classroom-3.webp`,
    localSrc: synbioClassroom3Img,
    uploadUrl: "",
    alt: "Activity photo from SynBio Classroom, group photo in the laboratory",
    section: "Education",
  },
  synbioClassroom4: {
    kind: "image",
    fileName: "contribution-education-synbio-classroom-4.webp",
    localSourcePath: `${assetDir}/contribution-education-synbio-classroom-4.webp`,
    localSrc: synbioClassroom4Img,
    uploadUrl: "",
    alt: "Activity photo from SynBio Classroom, closing group photo",
    section: "Education",
  },
  bioMemoryCover: {
    kind: "image",
    fileName: "contribution-education-bio-memory-cover.webp",
    localSourcePath: `${assetDir}/contribution-education-bio-memory-cover.webp`,
    localSrc: bioMemoryCoverImg,
    uploadUrl: "",
    alt: "Cover design of the Bio Memory Match game",
    section: "Education",
  },
  bioStrategyArena1: {
    kind: "image",
    fileName: "contribution-education-bio-strategy-arena-1.webp",
    localSourcePath: `${assetDir}/contribution-education-bio-strategy-arena-1.webp`,
    localSrc: bioStrategyArena1Img,
    uploadUrl: "",
    alt: "Design example of the Bio Strategy Arena game, card sheet",
    section: "Education",
  },
  bioStrategyArena2: {
    kind: "image",
    fileName: "contribution-education-bio-strategy-arena-2.webp",
    localSourcePath: `${assetDir}/contribution-education-bio-strategy-arena-2.webp`,
    localSrc: bioStrategyArena2Img,
    uploadUrl: "",
    alt: "Design example of the Bio Strategy Arena game, quorum-sensing card",
    section: "Education",
  },
  musicFestival1: {
    kind: "image",
    fileName: "contribution-education-music-festival-1.webp",
    localSourcePath: `${assetDir}/contribution-education-music-festival-1.webp`,
    localSrc: musicFestival1Img,
    uploadUrl: "",
    alt: "Photo from the Music Festival outreach activity, group photo",
    section: "Education",
  },
  musicFestival2: {
    kind: "image",
    fileName: "contribution-education-music-festival-2.webp",
    localSourcePath: `${assetDir}/contribution-education-music-festival-2.webp`,
    localSrc: musicFestival2Img,
    uploadUrl: "",
    alt: "Photo from the Music Festival outreach activity, event site",
    section: "Education",
  },
  musicFestival3: {
    kind: "image",
    fileName: "contribution-education-music-festival-3.webp",
    localSourcePath: `${assetDir}/contribution-education-music-festival-3.webp`,
    localSrc: musicFestival3Img,
    uploadUrl: "",
    alt: "Photo from the Music Festival outreach activity, activity booth",
    section: "Education",
  },
  musicFestival4: {
    kind: "image",
    fileName: "contribution-education-music-festival-4.webp",
    localSourcePath: `${assetDir}/contribution-education-music-festival-4.webp`,
    localSrc: musicFestival4Img,
    uploadUrl: "",
    alt: "Photo from the Music Festival outreach activity, participants taking part",
    section: "Education",
  },
  ethicsDebate1: {
    kind: "image",
    fileName: "contribution-education-ethics-debate-1.webp",
    localSourcePath: `${assetDir}/contribution-education-ethics-debate-1.webp`,
    localSrc: ethicsDebate1Img,
    uploadUrl: "",
    alt: "Photo from the Ethics Debate, group photo of the participants",
    section: "Education",
  },
  ethicsDebate2: {
    kind: "image",
    fileName: "contribution-education-ethics-debate-2.webp",
    localSourcePath: `${assetDir}/contribution-education-ethics-debate-2.webp`,
    localSrc: ethicsDebate2Img,
    uploadUrl: "",
    alt: "Poster of the Ethics Debate activity",
    section: "Education",
  },

  /* --- Collaboration ----------------------------------------------------- */
  northeastExchange1: {
    kind: "image",
    fileName: "contribution-collab-northeast-exchange-1.webp",
    localSourcePath: `${assetDir}/contribution-collab-northeast-exchange-1.webp`,
    localSrc: northeastExchange1Img,
    uploadUrl: "",
    alt: "Photo from the iGEM Northeast Regional Exchange, group photo",
    section: "Collaboration",
  },
  northeastExchange2: {
    kind: "image",
    fileName: "contribution-collab-northeast-exchange-2.webp",
    localSourcePath: `${assetDir}/contribution-collab-northeast-exchange-2.webp`,
    localSrc: northeastExchange2Img,
    uploadUrl: "",
    alt: "Photo from the iGEM Northeast Regional Exchange, hosted roundtable",
    section: "Collaboration",
  },
  northeastExchange3: {
    kind: "image",
    fileName: "contribution-collab-northeast-exchange-3.webp",
    localSourcePath: `${assetDir}/contribution-collab-northeast-exchange-3.webp`,
    localSrc: northeastExchange3Img,
    uploadUrl: "",
    alt: "Photo from the iGEM Northeast Regional Exchange, registration desk",
    section: "Collaboration",
  },
  lettersAcrossIgem1: {
    kind: "image",
    fileName: "contribution-collab-letters-across-igem-1.webp",
    localSourcePath: `${assetDir}/contribution-collab-letters-across-igem-1.webp`,
    localSrc: lettersAcrossIgem1Img,
    uploadUrl: "",
    alt: "Photo from Letters Across iGEM, JLU-FBH group photo",
    section: "Collaboration",
  },
  lettersAcrossIgem2: {
    kind: "image",
    fileName: "contribution-collab-letters-across-igem-2.webp",
    localSourcePath: `${assetDir}/contribution-collab-letters-across-igem-2.webp`,
    localSrc: lettersAcrossIgem2Img,
    uploadUrl: "",
    alt: "Photo from Letters Across iGEM, a letter from WHU-China",
    section: "Collaboration",
  },
  lettersAcrossIgem3: {
    kind: "image",
    fileName: "contribution-collab-letters-across-igem-3.webp",
    localSourcePath: `${assetDir}/contribution-collab-letters-across-igem-3.webp`,
    localSrc: lettersAcrossIgem3Img,
    uploadUrl: "",
    alt: "Photo from Letters Across iGEM, a letter from TJUSLS_China",
    section: "Collaboration",
  },
  togetherWithIgem: {
    kind: "pdf",
    fileName: "Together With iGEM.pdf",
    uploadFileName: "contribution-together-with-igem.pdf",
    localSourcePath: `${docDir}/Together With iGEM.pdf`,
    uploadUrl: "",
    alt: "Together With iGEM — cross-team science communication handbook",
    section: "Collaboration",
  },
  newTeamHandbook: {
    kind: "pdf",
    fileName: "iGEM 新队伍建设与知识传承手册完整版9.pdf",
    uploadFileName: "contribution-new-team-handbook.pdf",
    localSourcePath: `${docDir}/iGEM 新队伍建设与知识传承手册完整版9.pdf`,
    uploadUrl: "",
    alt: "New Team Development and Knowledge Inheritance Handbook",
    section: "Collaboration",
  },
  ccic1: {
    kind: "image",
    fileName: "contribution-collab-ccic-1.webp",
    localSourcePath: `${assetDir}/contribution-collab-ccic-1.webp`,
    localSrc: ccic1Img,
    uploadUrl: "",
    alt: "Photo from Synbiopunk-CCiC 2026, team group photo",
    section: "Collaboration",
  },
  ccic2: {
    kind: "image",
    fileName: "contribution-collab-ccic-2.webp",
    localSourcePath: `${assetDir}/contribution-collab-ccic-2.webp`,
    localSrc: ccic2Img,
    uploadUrl: "",
    alt: "Photo from Synbiopunk-CCiC 2026, roundtable discussion",
    section: "Collaboration",
  },
  ccic3: {
    kind: "image",
    fileName: "contribution-collab-ccic-3.webp",
    localSourcePath: `${assetDir}/contribution-collab-ccic-3.webp`,
    localSrc: ccic3Img,
    uploadUrl: "",
    alt: "Photo from Synbiopunk-CCiC 2026, poster and project exchange",
    section: "Collaboration",
  },
  ccic4: {
    kind: "image",
    fileName: "contribution-collab-ccic-4.webp",
    localSourcePath: `${assetDir}/contribution-collab-ccic-4.webp`,
    localSrc: ccic4Img,
    uploadUrl: "",
    alt: "Photo from Synbiopunk-CCiC 2026, roundtable game",
    section: "Collaboration",
  },
  apic1: {
    kind: "image",
    fileName: "contribution-collab-apic-1.webp",
    localSourcePath: `${assetDir}/contribution-collab-apic-1.webp`,
    localSrc: apic1Img,
    uploadUrl: "",
    alt: "Photo from the 1st Grand APiC, Shenzhen group photo",
    section: "Collaboration",
  },
  apic2: {
    kind: "image",
    fileName: "contribution-collab-apic-2.webp",
    localSourcePath: `${assetDir}/contribution-collab-apic-2.webp`,
    localSrc: apic2Img,
    uploadUrl: "",
    alt: "Photo from the 1st Grand APiC, Hong Kong group photo",
    section: "Collaboration",
  },
  regionalNorthChina: {
    kind: "image",
    fileName: "contribution-collab-regional-north-china.webp",
    localSourcePath: `${assetDir}/contribution-collab-regional-north-china.webp`,
    localSrc: regionalNorthChinaImg,
    uploadUrl: "",
    alt: "Photo from the North China regional exchange",
    section: "Collaboration",
  },
  regionalEastChina: {
    kind: "image",
    fileName: "contribution-collab-regional-east-china.webp",
    localSourcePath: `${assetDir}/contribution-collab-regional-east-china.webp`,
    localSrc: regionalEastChinaImg,
    uploadUrl: "",
    alt: "Photo from the East China regional exchange",
    section: "Collaboration",
  },
  regionalSouthChina: {
    kind: "image",
    fileName: "contribution-collab-regional-south-china.webp",
    localSourcePath: `${assetDir}/contribution-collab-regional-south-china.webp`,
    localSrc: regionalSouthChinaImg,
    uploadUrl: "",
    alt: "Photo from the South China regional exchange",
    section: "Collaboration",
  },
  regionalCentralChina: {
    kind: "image",
    fileName: "contribution-collab-regional-central-china.webp",
    localSourcePath: `${assetDir}/contribution-collab-regional-central-china.webp`,
    localSrc: regionalCentralChinaImg,
    uploadUrl: "",
    alt: "Photo from the Central China regional exchange",
    section: "Collaboration",
  },
} as const satisfies Record<string, ContributionAssetEntry>;

export type ContributionAssetKey = keyof typeof contributionAssets;

/** Keys whose entry is an image (i.e. has a bundled local source). */
export type ContributionImageAssetKey = {
  [K in ContributionAssetKey]: (typeof contributionAssets)[K]["kind"] extends "image"
    ? K
    : never;
}[ContributionAssetKey];

/** Keys whose entry is a document served from `public/assets/docs/`. */
export type ContributionDocAssetKey = {
  [K in ContributionAssetKey]: (typeof contributionAssets)[K]["kind"] extends "pdf"
    ? K
    : never;
}[ContributionAssetKey];

/**
 * Resolve one image: the bundled local copy today, the CDN URL once uploads
 * land. `localSrc` wins so the page never depends on an unfinished upload, and
 * the fallback keeps a URL-only entry working after the local file is retired.
 */
export const contributionImage = (key: ContributionImageAssetKey): string =>
  contributionAssets[key].localSrc || contributionAssets[key].uploadUrl;

/**
 * Local URL of a document kept in `public/assets/docs/`.
 *
 * `public/` is served from the deployment base, not from the site root, so the
 * path has to be built off `import.meta.env.BASE_URL` — the same rule
 * `designAssets.ts` uses. A bare `/assets/docs/...` resolves in neither the dev
 * server (which serves under a team slug) nor the deployed wiki, so the browser
 * PDF plugin shows Vite's "did you mean to visit …?" notice instead of the
 * document. The file name is percent-encoded because several titles contain
 * spaces.
 */
const localDocUrl = (fileName: string): string =>
  `${import.meta.env.BASE_URL}assets/docs/${encodeURIComponent(fileName)}`;

/**
 * iGEM docs URL of a hosted PDF, with the local copy as the fallback.
 *
 * `uploadUrl` is blank while the files await upload, so the page renders from
 * the copy in `public/`; once a CDN URL is filled in, production uses it.
 */
export const contributionDocUrl = (key: ContributionDocAssetKey): string => {
  const entry = contributionAssets[key];
  const local = localDocUrl(entry.fileName);
  if (import.meta.env.DEV) return local;
  return entry.uploadUrl || local;
};

/** Upload targets still waiting for a CDN URL. */
export const contributionPendingUploads = (
  Object.entries(contributionAssets) as Array<
    [ContributionAssetKey, ContributionAssetEntry]
  >
)
  .filter(([, entry]) => entry.uploadUrl === "")
  .map(([key, entry]) => ({
    key,
    target: `${
      entry.kind === "image" ? IMG_TARGET : DOC_TARGET
    }${publishedName(entry)}`,
  }));
