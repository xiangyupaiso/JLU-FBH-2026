import { WikiRoutePage } from "../components/wiki/WikiRoutePage";
import { getWetLabHeroImage } from "../components/wiki/wetLabHeroAssets";
import { ProtocolBookcase } from "../components/wiki/features/ProtocolBookcase";
import { protocolPage } from "../data/protocolPages";
import "../styles/route-palette-wetlab.css";
import "../styles/protocol-bookcase.css";

/**
 * Wet Lab 06 — Protocol Library.
 *
 * Runs through the shared reader-route shell (`WikiRoutePage`) so the hero, the
 * full-height mat, the paper frame, the section heading, the closing prompt and
 * the footer are byte-for-byte the same components as the other five records.
 * `hideOutline` is the Library layout variant: this page renders without the TOC
 * card and its reader frame takes the released width.
 */
export function Protocol() {
  return (
    <WikiRoutePage
      content={protocolPage}
      heroImage={getWetLabHeroImage(protocolPage.route)}
      theme="wet-lab"
      pageClassName="wiki-page--wet-lab wiki-page--protocol"
      hideOutline
      features={{ "protocol-library": <ProtocolBookcase /> }}
    />
  );
}
