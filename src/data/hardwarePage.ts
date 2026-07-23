import type { WikiPageContent } from "../components/wiki/wikiPageTypes";

/**
 * Hardware-only evidence contract.
 *
 * No verified device, bill of materials, source package, calibration run, or
 * performance record has been supplied. The page therefore exposes the
 * publication structure without presenting the illustrative apparatus as a
 * completed build.
 */
export const hardwareEvidencePage: WikiPageContent = {
  route: "/hardware",
  category: "dry-lab",
  chapter: "Dry Lab / 03 of 03",
  eyebrow: "Hardware · Build record",
  title: "Make hardware reproducible.",
  lede: "Trace need, design, calibration, safety, cost, and reuse in one build record.",
  boundary:
    "Awaiting a verified device, BOM, CAD, firmware, calibration, and performance data.",
  visual: "hardware-schematic",
  visualLabel: "Proposed apparatus and calibration points",
  visualSteps: ["sample path", "measurement", "control"],
  facts: [
    {
      label: "Need",
      value: "A real experimental bottleneck defines the device.",
    },
    {
      label: "Build",
      value: "Versions, components, and assembly are traceable.",
    },
    {
      label: "Test",
      value: "Calibration and performance use relevant standards.",
    },
    {
      label: "Share",
      value: "BOM, CAD, code, cost, safety, and license are open.",
    },
  ],
  sections: [
    {
      id: "hardware-requirements",
      index: "01",
      kicker: "Need & acceptance contract",
      title: "Turn the laboratory bottleneck into measurable requirements.",
      summary:
        "Name the operator, sample, environment, critical function, unit, threshold, and verification method before selecting components.",
      note: {
        label: "Current boundary",
        body: "No representative user, sample specification, or quantitative acceptance threshold has been supplied.",
      },
    },
    {
      id: "hardware-system",
      index: "02",
      kicker: "Sample · measurement · control",
      title:
        "Let the system diagram explain what moves, what is measured, and what can stop.",
      summary:
        "A useful device overview separates the sample path, measurement path, control path, and safety boundary while keeping their interfaces visible.",
    },
    {
      id: "hardware-assembly",
      index: "03",
      kicker: "Composition, interfaces & BOM",
      title: "Show how parts become a buildable system.",
      summary:
        "The exploded assembly and bill of materials should agree on identifiers, quantities, critical specifications, alternatives, costs, source files, and versions.",
      note: {
        label: "Illustrative structure",
        body: "The assembly groups and BOM rows below reserve evidence fields; they are not CAD, purchasing, or fabrication instructions.",
      },
    },
    {
      id: "hardware-iterations",
      index: "04",
      kicker: "Design–Build–Test–Learn",
      title: "Connect every physical change to a measured problem.",
      summary:
        "A credible iteration record preserves the failed state, measurement, diagnosis, change, retest, and consequence instead of showing only a final prototype.",
    },
    {
      id: "hardware-calibration",
      index: "05",
      kicker: "Calibration & performance",
      title: "Compare the device with a reference before claiming performance.",
      summary:
        "Calibration needs standards, units, range, replicates, uncertainty, fitted method, residuals, acceptance criteria, environment, and retained raw records.",
      note: {
        label: "No measured series",
        body: "The chart remains intentionally empty until reference and device measurements are supplied from a named hardware version.",
      },
    },
    {
      id: "hardware-safety",
      index: "06",
      kicker: "Safety, cleaning & maintenance",
      title: "Design the safe state together with the operating state.",
      summary:
        "Hazards should connect cause, harm, detection, prevention, recovery, verification, training, cleaning, disposal, and maintenance ownership.",
    },
    {
      id: "hardware-release",
      index: "07",
      kicker: "Open hardware package",
      title:
        "Another team should be able to source, build, calibrate, operate, and maintain it.",
      summary:
        "Editable sources, tagged exports, assembly instructions, calibration fixtures, expected outputs, safety records, maintenance guidance, attribution, and license form one release contract.",
      note: {
        label: "Release status",
        body: "No repository, tagged source package, independent assembly record, or verified operating guide has been supplied.",
      },
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental need" },
    { path: "/measurement", label: "Calibration standard" },
    { path: "/contribution", label: "Open release" },
  ],
  next: {
    path: "/entrepreneurship",
    label: "Entrepreneurship",
    title: "How would the project fit a real workflow?",
  },
};
