const CDN_BASE = "https://static.igem.wiki/teams/6056/wiki/files/pages/team";
const photoIds = [
  "1",
  "2",
  "3",
  "4",
  "5-1",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
] as const;

/** CDN-only originals: the local manuscript is the source of the supplied URLs. */
export const activitiesAssets = photoIds.map((id, index) => ({
  id: `act-${id}`,
  fileName: `act-${id}.avif`,
  localSourcePath: "文案集/team/activities/2.3 Activities.md",
  uploadUrl: `${CDN_BASE}/act-${id}.avif`,
  alt: `JLU-FBH team activity photograph ${index + 1}`,
}));

export const getActivitiesImage = (index: number): string =>
  activitiesAssets[index]?.uploadUrl ?? "";

export const activitiesPhotos = activitiesAssets.map((asset, index) => ({
  id: asset.id,
  src: getActivitiesImage(index),
  alt: asset.alt,
}));
