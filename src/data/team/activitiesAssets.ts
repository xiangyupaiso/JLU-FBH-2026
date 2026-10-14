const CDN_BASE = "https://static.igem.wiki/teams/6056/wiki/files/pages/team";
const photoNames = [
  "act-1",
  "act-2",
  "act-3",
  "act-4",
  "act-5-1",
  "act-10",
  "act-11",
  "act-12",
  "act-13",
  "act-14",
  "act-15",
  "act-16",
  "act-17",
  "act-18",
  "act-19",
  "act-20",
  "act-21",
  "act-22",
  "act-23",
  "act-24",
  "act-25",
  "act-26",
  "act-27",
  "xjz-campusrun",
  "xjz-ccic1",
  "xjz-ccic2",
  "xjz-ccic3",
  "xjz-eastpre",
  "xjz-eastxjq",
  "xjz-flag",
  "xjz-northwest",
  "xjz-professorguan",
  "xjz-pv-film",
  "xjz-sc-group",
  "xjz-sc-ihp",
  "xjz-sc-plasmid",
  "xjz-sc",
  "xjz-teamclothes",
] as const;

/** CDN-only originals: the local manuscript is the source of the supplied URLs. */
export const activitiesAssets = photoNames.map((name, index) => ({
  id: name,
  fileName: `${name}.avif`,
  localSourcePath: "文案集/team/activities/2.3 Activities.md",
  uploadUrl: `${CDN_BASE}/${name}.avif`,
  alt: `JLU-FBH team activity photograph ${index + 1}`,
}));

export const getActivitiesImage = (index: number): string =>
  activitiesAssets[index]?.uploadUrl ?? "";

export const activitiesPhotos = activitiesAssets.map((asset, index) => ({
  id: asset.id,
  src: getActivitiesImage(index),
  alt: asset.alt,
}));
