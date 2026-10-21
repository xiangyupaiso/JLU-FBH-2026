import blankTemplateUrl from "../../../assets/wiki/sustainability/tracker/blank_template.html?url";
import teamExampleUrl from "../../../assets/wiki/sustainability/tracker/team_example.html?url";
import blankTemplateHtml from "../../../assets/wiki/sustainability/tracker/blank_template.html?raw";
import teamExampleHtml from "../../../assets/wiki/sustainability/tracker/team_example.html?raw";

/** Self-contained tools supplied with the second SDG review. */
export const stakeholderTrackerEmbeds = {
  blank: {
    title: "Stakeholder Sustainability Tracker - Blank Template",
    url: blankTemplateUrl,
    html: blankTemplateHtml,
    fileName: "blank_template.html",
  },
  example: {
    title: "CirCure Tracker Records",
    url: teamExampleUrl,
    html: teamExampleHtml,
    fileName: "team_example.html",
  },
} as const;
