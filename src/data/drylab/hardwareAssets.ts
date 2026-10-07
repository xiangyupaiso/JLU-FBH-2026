/**
 * Hardware page asset registry.
 *
 * Same double-track contract as `wet-lab/designAssets.ts` (see
 * WIKI_ARCHITECTURE_SPEC.md §4.2): every entry carries the local source path it
 * was prepared from, the bundled preview import, and the iGEM static URL it will
 * be served from once uploaded. `uploadUrl` stays an empty string until the
 * asset owner confirms the upload — the resolver then falls back to the bundled
 * file, so nothing here has to change when the CDN copies go live.
 *
 * When the uploads are confirmed, each `uploadUrl` becomes
 * `https://static.igem.wiki/teams/6056/wiki/files/pages/dry-lab/<fileName>`.
 *
 * Both generations are design-stage: Figure 1 and Figure 3 are patent drawings,
 * and Figures 2, 4, 5 and 6 are the team's own process and logic diagrams.
 */

import fig1 from "../../assets/wiki/hardware/hardware-fig1-gen1-overview.webp";
import fig2 from "../../assets/wiki/hardware/hardware-fig2-process-chain.webp";
import fig3 from "../../assets/wiki/hardware/hardware-fig3-gen1-exploded.webp";
import fig4 from "../../assets/wiki/hardware/hardware-fig4-uv-interlock.webp";
import fig5 from "../../assets/wiki/hardware/hardware-fig5-gen2-optical-electrical.webp";
import fig6 from "../../assets/wiki/hardware/hardware-fig6-gen2-process-coverage.webp";

export type HardwareAssetKind = "image";

export interface HardwareAssetEntry {
  kind: HardwareAssetKind;
  fileName: string;
  localSourcePath: string;
  localSrc?: string;
  uploadUrl: string;
  alt: string;
  caption?: string;
  section?: string;
}

export const hardwareAssets = {
  fig1: {
    kind: "image",
    fileName: "hardware-fig1-gen1-overview.webp",
    localSourcePath:
      "src/assets/wiki/hardware/hardware-fig1-gen1-overview.webp",
    localSrc: fig1,
    uploadUrl: "",
    alt: "Patent-style line drawing of the first-generation CirCore device: the sealed reaction chamber with its hinged lid and quick-release fasteners, the sliding support carriage, and the reaction tube held in the clamp",
    caption: "First-generation device, overall structure.",
    section: "Overview",
  },
  fig2: {
    kind: "image",
    fileName: "hardware-fig2-process-chain.webp",
    localSourcePath:
      "src/assets/wiki/hardware/hardware-fig2-process-chain.webp",
    localSrc: fig2,
    uploadUrl: "",
    alt: "Process chain from linearised plasmid through T7 in vitro transcription, DNase I treatment, LiCl precipitation, circularisation, RNase R enrichment and RT-qPCR, with every instrument change and open-tube operation marked",
    caption:
      "The circularisation process chain, with instrument changes and open-tube operations marked.",
    section: "The need",
  },
  fig3: {
    kind: "image",
    fileName: "hardware-fig3-gen1-exploded.webp",
    localSourcePath:
      "src/assets/wiki/hardware/hardware-fig3-gen1-exploded.webp",
    localSrc: fig3,
    uploadUrl: "",
    alt: "Exploded patent drawing of the first-generation device separating the chamber base, support carriage, push-pull clamp assembly, V-groove clamp blocks, heating plate, lid and UV source",
    caption: "Exploded view of the first-generation device",
    section: "First-generation design",
  },
  fig4: {
    kind: "image",
    fileName: "hardware-fig4-uv-interlock.webp",
    localSourcePath: "src/assets/wiki/hardware/hardware-fig4-uv-interlock.webp",
    localSrc: fig4,
    uploadUrl: "",
    alt: "Block diagram of the UV safety interlock: the lid-closure detection switch in series with the UV supply circuit, so opening the lid removes power from the UV source",
    caption:
      "UV interlock logic. The lid-closure switch is wired in series with the UV supply circuit.",
    section: "First-generation design",
  },
  fig5: {
    kind: "image",
    fileName: "hardware-fig5-gen2-optical-electrical.webp",
    localSourcePath:
      "src/assets/wiki/hardware/hardware-fig5-gen2-optical-electrical.webp",
    localSrc: fig5,
    uploadUrl: "",
    alt: "Block diagram of the second-generation optical path and electrical connections: excitation source, filter assembly, photodetector and light shroud around the tube position, with the controller (90) as the central node",
    caption:
      "Optical path and electrical connections of the second generation, with the controller (90) as the central node.",
    section: "Design iteration",
  },
  fig6: {
    kind: "image",
    fileName: "hardware-fig6-gen2-process-coverage.webp",
    localSourcePath:
      "src/assets/wiki/hardware/hardware-fig6-gen2-process-coverage.webp",
    localSrc: fig6,
    uploadUrl: "",
    alt: "Temperature programme of the second generation from 55 °C circularisation through cooling to 4 °C, 37 °C RNase R digestion, 65–70 °C inactivation and return to 4 °C, marking which part of the process chain each generation covers",
    caption:
      "Second-generation temperature programme and process coverage, to be read against Figure 2.",
    section: "Design iteration",
  },
} as const satisfies Record<string, HardwareAssetEntry>;

export type HardwareAssetKey = keyof typeof hardwareAssets;

export type HardwareImageKey = {
  [K in HardwareAssetKey]: (typeof hardwareAssets)[K]["kind"] extends "image"
    ? K
    : never;
}[HardwareAssetKey];

/** Registered image URL: iGEM CDN once uploaded, bundled preview until then. */
export const getHardwareImage = (key: HardwareImageKey): string =>
  hardwareAssets[key].uploadUrl || hardwareAssets[key].localSrc || "";
