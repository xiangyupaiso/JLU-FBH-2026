/** The manuscript's five sentences, in their original order, without additions. */
export const activitiesPage = {
  route: "/activities",
  title: "Activities",
  opening: [
    "Looking back at these moments fills our hearts with warmth and gratitude.",
    "Behind every photo is a story of laughter, hard work, and the little moments that brought us closer together.",
  ],
  closing: [
    "To every member of JLU-FBH, thank you for the passion, dedication, and heart you brought to this journey.",
    "We feel incredibly lucky to be part of iGEM, and even luckier to have shared this experience with such an amazing team.",
    "What we have created together goes far beyond a project — these are friendships and memories we will cherish for years to come.",
  ],
  next: {
    path: "/description",
    label: "Description",
    title: "The Question That Brought Us Together",
    description: "Our shared journey began with a clinical question. Explore why we chose triple-negative breast cancer and how a modular circRNA vaccine became the focus of CirCure.",
  },
} as const;

export type ActivitiesPageContent = typeof activitiesPage;
