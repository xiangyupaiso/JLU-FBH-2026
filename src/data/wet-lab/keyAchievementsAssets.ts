import overview from "../../assets/wiki/wet-lab/key-achievements-overview.png";

export const keyAchievementFigures = {
  overview: {
    fileName: "key-achievements-overview.png",
    localSourcePath: "src/assets/wiki/wet-lab/key-achievements-overview.png",
    localSrc: overview,
    uploadUrl: "",
    width: 1394,
    height: 2097,
    alt: "Visual overview of the seven CirCure platform achievements.",
    section: "Key Achievements",
  },
} as const;

export const getKeyAchievementsImage = (): string =>
  keyAchievementFigures.overview.uploadUrl ||
  keyAchievementFigures.overview.localSrc;

export const keyAchievementsAssets = {
  overview: getKeyAchievementsImage(),
} as const;
export const keyAchievementPreloadImages = [keyAchievementsAssets.overview];
