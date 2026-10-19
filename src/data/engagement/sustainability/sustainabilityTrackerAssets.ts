import blankTemplateUrl from "../../../assets/wiki/sustainability/tracker/blank_template.html?url";
import teamExampleUrl from "../../../assets/wiki/sustainability/tracker/team_example.html?url";

/** Self-contained tools supplied with the second SDG review. */
export const stakeholderTrackerEmbeds = {
  blank: {
    title: "Stakeholder Sustainability Tracker — Blank Template",
    url: blankTemplateUrl,
    fileName: "blank_template.html",
  },
  example: {
    title: "CirCure Tracker Records",
    url: teamExampleUrl,
    fileName: "team_example.html",
  },
} as const;
