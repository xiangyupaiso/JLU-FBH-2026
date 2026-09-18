import { WikiPage } from "../components/wiki/WikiPage";
import { ProtocolBookcase } from "../components/wiki/features/ProtocolBookcase";
import { protocolPage } from "../data/protocolPages";
import "../styles/protocol-bookcase.css";

/**
 * Wet Lab 06 — Protocol Library.
 *
 * Runs through the shared Wet Lab reader shell (`WikiPage`) so the hero, the
 * full-height mat, the paper frame, the section heading, the closing prompt and
 * the footer are byte-for-byte the same components as the other five records.
 * `hideOutline` is the Library layout variant: this page renders without the TOC
 * card and its reader frame takes the released width.
 */
export function Protocol() {
  return (
    <WikiPage
      content={protocolPage}
      heroVisual={null}
      hideOutline
      pageClassName="wiki-page--protocol"
      features={{ "protocol-library": <ProtocolBookcase /> }}
    />
  );
}
