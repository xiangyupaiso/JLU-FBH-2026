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
  title: "Hardware",
  lede: "One Wet Lab bottleneck, translated into an open build.",
  boundary:
    "No completed CirCure device is claimed here; a verified build, BOM, CAD, firmware, calibration series, and performance record are still required.",
  visual: "hardware-schematic",
  visualLabel: "Proposed apparatus and calibration points",
  visualSteps: ["sample path", "measurement", "control"],
  facts: [
    {
      label: "Need",
      value:
        "A named CirCure experiment and measurement bottleneck define the device.",
    },
    {
      label: "Build",
      value:
        "Sample interfaces, components, versions, and assembly remain traceable.",
    },
    {
      label: "Test",
      value:
        "Calibration and performance use standards relevant to the intended readout.",
    },
    {
      label: "Share",
      value:
        "BOM, CAD, code, cost, safety, maintenance, and license are released together.",
    },
  ],
  sections: [
    {
      id: "hardware-requirements",
      index: "01",
      kicker: "Need & acceptance contract",
      navLabel: "Requirements",
      title: "Experimental need and design requirements.",
      summary:
        "The device begins with one CirCure operator, sample type, experimental environment, critical function, measurable threshold, and verification method—not with a preferred component.",
      note: {
        label: "Current boundary",
        body: "No representative user, sample specification, or quantitative acceptance threshold has been supplied.",
      },
    },
    {
      id: "hardware-system",
      index: "02",
      kicker: "Sample · measurement · control",
      navLabel: "System boundary",
      title: "System boundary and functional architecture.",
      summary:
        "The architecture separates the CirCure sample path, measurement path, control path, and safety boundary while showing where each interface can alter the experimental evidence.",
    },
    {
      id: "hardware-assembly",
      index: "03",
      kicker: "Composition, interfaces & BOM",
      navLabel: "Assembly & BOM",
      title: "Assembly, interfaces, and bill of materials.",
      summary:
        "The exploded assembly and bill of materials use the same identifiers for sample-contact parts, measurement components, control modules, quantities, alternatives, costs, source files, and versions.",
      note: {
        label: "Illustrative structure",
        body: "The assembly groups and BOM rows below reserve evidence fields; they are not CAD, purchasing, or fabrication instructions.",
      },
    },
    {
      id: "hardware-iterations",
      index: "04",
      kicker: "Design–Build–Test–Learn",
      navLabel: "Build iteration",
      title: "Design–Build–Test iteration.",
      summary:
        "Each hardware revision preserves the failed CirCure workflow state, observed measurement, diagnosis, physical change, retest, and consequence instead of presenting only a final prototype.",
    },
    {
      id: "hardware-calibration",
      index: "05",
      kicker: "Calibration & performance",
      navLabel: "Calibration",
      title: "Calibration and analytical performance.",
      summary:
        "Reference standards, units, range, replicates, uncertainty, fitted method, residuals, acceptance criteria, environment, and raw records determine whether the device can support its intended CirCure measurement.",
      note: {
        label: "No measured series",
        body: "The chart remains intentionally empty until reference and device measurements are supplied from a named hardware version.",
      },
    },
    {
      id: "hardware-safety",
      index: "06",
      kicker: "Safety, cleaning & maintenance",
      navLabel: "Safety & maintenance",
      title: "Safety, cleaning, and maintenance.",
      summary:
        "Biological sample handling, electrical and mechanical hazards, cleaning, disposal, recovery, verification, training, and maintenance ownership are designed alongside normal operation.",
    },
    {
      id: "hardware-release",
      index: "07",
      kicker: "Open hardware package",
      navLabel: "Open release",
      title: "Open-hardware release and independent reuse.",
      summary:
        "Another team should be able to source, build, calibrate, operate, and maintain the CirCure device from editable sources, tagged exports, expected outputs, safety records, attribution, and an open license.",
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
