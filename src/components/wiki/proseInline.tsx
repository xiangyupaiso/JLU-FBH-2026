import type { ReactNode } from "react";
import { Link } from "react-router-dom";

/**
 * Inline prose formatting for the shared reader.
 *
 * Lives in its own module so the two renderers that every wiki page depends on
 * can be reasoned about — and exercised — without pulling in the reader
 * template, its sidebar, or the page registry.
 *
 * - `renderInlineFormatting` handles the data layer's `**bold**` markers.
 * - `linkify` layers Markdown links on top and delegates everything else to the
 *   formatter, so a caller never has to choose between the two.
 */

/**
 * Turn an inline Markdown link into an anchor.
 *
 * Several pages are migrated from Markdown drafts whose "Further details are
 * provided in [label](url)" cross-references would otherwise print as literal
 * bracket-and-paren text. Two forms are recognised:
 *
 * - `[text](https://…)` — an external source, opened in a new tab.
 * - `[text](/route)` — another page of this wiki, rendered through the router so
 *   the deployment base path and client-side navigation both stay correct.
 *
 * Anything else — including an existing citation form such as
 * `(Garrido-Castro et al., 2019)`, which `renderInlineFormatting` also leaves
 * alone — is untouched.
 *
 * `WikiRoutePage` hands this to a page-provided `inlineRenderer` as its
 * fallback, so a citation layer inherits Markdown links for free.
 */
const MD_LINK_RE =
  /\[([^\]\n]{1,120})\]\((https?:\/\/[^\s)]+|\/[A-Za-z0-9\-_/]*)\)/g;

export function linkify(text: string): ReactNode {
  if (!text || !text.includes("](")) return renderInlineFormatting(text);

  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  MD_LINK_RE.lastIndex = 0;
  while ((match = MD_LINK_RE.exec(text)) !== null) {
    if (match.index > lastIndex) {
      nodes.push(
        <span key={`t-${lastIndex}`}>
          {renderInlineFormatting(text.slice(lastIndex, match.index))}
        </span>,
      );
    }
    const href = match[2];
    nodes.push(
      href.startsWith("/") ? (
        <Link
          className="wiki-prose-link wiki-prose-link--route"
          key={`l-${match.index}`}
          to={href}
        >
          {match[1]}
        </Link>
      ) : (
        <a
          className="wiki-prose-link"
          href={href}
          key={`l-${match.index}`}
          rel="noreferrer"
          target="_blank"
        >
          {match[1]}
        </a>
      ),
    );
    lastIndex = match.index + match[0].length;
  }

  if (!nodes.length) return renderInlineFormatting(text);
  if (lastIndex < text.length) {
    nodes.push(
      <span key={`t-${lastIndex}`}>
        {renderInlineFormatting(text.slice(lastIndex))}
      </span>,
    );
  }
  return nodes;
}

/** Render the `**bold**` markers the data layer writes. */
export function renderInlineFormatting(text: string): ReactNode {
  if (!text || !text.includes("**")) {
    return text;
  }
  const parts = text.split(/(\*\*(?:[^*]|\*(?!\*))+?\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}
