/** Manuscript-provided SDG 17 assets; no generated upload targets. */
import type { StakeholderPhotoSet } from "./sustainabilityPhotos";
import type { LegacyToolPdf } from "./sdgChapterContract";

const SDG17_DOCS = "https://static.igem.wiki/teams/6056/wiki/files/docs/sdg17";

/** Roundtable files supplied by the team; shared modal reader opens each PDF. */
export const sdg17RoundtablePdfs: ReadonlyArray<LegacyToolPdf> = [
  { label: "DM", fileName: "dm.pdf" },
  { label: "Group 01", fileName: "group-01.pdf" },
  { label: "Group 02", fileName: "group-02.pdf" },
  { label: "Group 03", fileName: "group-03.pdf" },
  { label: "Group 04", fileName: "group-04.pdf" },
  { label: "Group 05", fileName: "group-05.pdf" },
  { label: "Group 06", fileName: "group-06.pdf" },
  { label: "Group 07", fileName: "group-07.pdf" },
  { label: "Group 08", fileName: "group-08.pdf" },
  { label: "Other Materials", fileName: "others.pdf" },
  { label: "Round 1 Clues", fileName: "round-1-clues.pdf" },
  { label: "Round 2 Clues", fileName: "round-2-clues.pdf" },
].map((pdf) => ({ ...pdf, url: `${SDG17_DOCS}/${pdf.fileName}` }));

export const sdg17PhotoSets: Record<string, StakeholderPhotoSet> = {
  "sdg17-01-01": [
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-01.avif",
      alt: "Northeast China iGEM Meetup — photograph 1",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-02.avif",
      alt: "Northeast China iGEM Meetup — photograph 2",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-03.avif",
      alt: "Northeast China iGEM Meetup — photograph 3",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-04.avif",
      alt: "Northeast China iGEM Meetup — photograph 4",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-05.avif",
      alt: "Northeast China iGEM Meetup — photograph 5",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-06.avif",
      alt: "Northeast China iGEM Meetup — photograph 6",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-07.avif",
      alt: "Northeast China iGEM Meetup — photograph 7",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-08.avif",
      alt: "Northeast China iGEM Meetup — photograph 8",
      caption: "Northeast China iGEM Meetup",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-01-09.avif",
      alt: "Northeast China iGEM Meetup — photograph 9",
      caption: "Northeast China iGEM Meetup",
    },
  ],
  "sdg17-01-02": [
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-01.avif",
      alt: "China-wide iGEM Exchange — photograph 1",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-02.avif",
      alt: "China-wide iGEM Exchange — photograph 2",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-03.avif",
      alt: "China-wide iGEM Exchange — photograph 3",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-04.avif",
      alt: "China-wide iGEM Exchange — photograph 4",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-05.avif",
      alt: "China-wide iGEM Exchange — photograph 5",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-06.avif",
      alt: "China-wide iGEM Exchange — photograph 6",
      caption: "China-wide iGEM Exchange",
    },
    {
      src: "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/sustainability/sdg17/01-02-07.avif",
      alt: "China-wide iGEM Exchange — photograph 7",
      caption: "China-wide iGEM Exchange",
    },
  ],
};
