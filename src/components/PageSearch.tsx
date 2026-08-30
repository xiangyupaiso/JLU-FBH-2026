import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type ChangeEvent,
  type KeyboardEvent,
  type MouseEvent,
} from "react";
import { useLocation } from "react-router-dom";

// Elements whose text is never part of a page search. The search runs over the
// rendered page DOM, so we skip the chrome (header/footer/back-to-top), any
// element that is inert or hidden to assistive tech, and form/media nodes.
const SKIP_SELECTOR = [
  "script",
  "style",
  "noscript",
  "svg",
  "input",
  "textarea",
  "select",
  "mark",
  "button",
  ".site-header",
  ".circure-footer",
  ".circure-back-to-top",
  ".page-search",
  ".circure-mega-menu",
  ".circure-mobile-menu",
  // React state-driven text (outline counts, live regions): splitting these
  // nodes detaches them from React's fiber refs, freezing later updates.
  ".wiki-outline",
  "[aria-live]",
  "[aria-hidden='true']",
  "[inert]",
  "[hidden]",
].join(",");

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

/**
 * Walk the rendered page and wrap every case-insensitive match of `query` in a
 * <mark class="page-search-hit">. Returns the created marks so the caller can
 * navigate and later restore the original text nodes.
 */
function collectMatches(root: ParentNode, query: string): HTMLElement[] {
  // Case-insensitive: both the needle and the page text are folded with
  // `.toLowerCase()` (locale-independent) before comparing.
  const needle = query.toLowerCase();
  const marks: HTMLElement[] = [];

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node: Node): number {
      const parent = node.parentElement;
      const value = node.nodeValue;
      if (!parent || !value) return NodeFilter.FILTER_REJECT;
      if (parent.closest(SKIP_SELECTOR)) return NodeFilter.FILTER_REJECT;
      return value.toLowerCase().includes(needle)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  // Snapshot text nodes before mutating the DOM.
  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);

  for (const textNode of textNodes) {
    const text = textNode.nodeValue ?? "";
    const lower = text.toLowerCase();
    const parent = textNode.parentNode;
    if (!parent) continue;

    const fragment = document.createDocumentFragment();
    let cursor = 0;
    let index = lower.indexOf(needle);
    while (index !== -1) {
      if (index > cursor) {
        fragment.appendChild(document.createTextNode(text.slice(cursor, index)));
      }
      const mark = document.createElement("mark");
      mark.className = "page-search-hit";
      mark.textContent = text.slice(index, index + query.length);
      fragment.appendChild(mark);
      marks.push(mark);
      cursor = index + query.length;
      index = lower.indexOf(needle, cursor);
    }
    if (cursor < text.length) {
      fragment.appendChild(document.createTextNode(text.slice(cursor)));
    }
    parent.replaceChild(fragment, textNode);
  }

  return marks;
}

function clearMarks(marks: HTMLElement[]): void {
  const parents = new Set<Node>();
  for (const mark of marks) {
    const parent = mark.parentNode;
    if (parent) {
      parent.replaceChild(document.createTextNode(mark.textContent ?? ""), mark);
      parents.add(parent);
    }
  }
  // Merge the fragmented text nodes back so the DOM tree matches what React
  // rendered before highlighting.
  parents.forEach((parent) => parent.normalize());
}

export function PageSearch() {
  const reactId = useId().replace(/:/g, "");
  const filterId = `page-search-goo-${reactId}`;
  const { pathname } = useLocation();

  const inputRef = useRef<HTMLInputElement>(null);
  const marksRef = useRef<HTMLElement[]>([]);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(0);
  const [current, setCurrent] = useState(0);

  const clearHighlights = useCallback(() => {
    clearMarks(marksRef.current);
    marksRef.current = [];
    setCount(0);
    setCurrent(0);
  }, []);

  const applyIndex = useCallback((index: number, shouldScroll: boolean) => {
    const marks = marksRef.current;
    if (marks.length === 0) return;
    const wrapped = ((index % marks.length) + marks.length) % marks.length;
    for (let i = 0; i < marks.length; i += 1) {
      marks[i].classList.toggle("is-active", i === wrapped);
    }
    setCurrent(wrapped + 1);
    if (shouldScroll) {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      marks[wrapped].scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "center",
      });
    }
  }, []);

  const runSearch = useCallback(
    (value: string) => {
      clearHighlights();
      const trimmed = value.trim();
      setQuery(value);
      if (!trimmed) return;
      const marks = collectMatches(document.body, trimmed);
      marksRef.current = marks;
      setCount(marks.length);
      if (marks.length > 0) applyIndex(0, false);
    },
    [clearHighlights, applyIndex],
  );

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    clearHighlights();
    inputRef.current?.blur();
  }, [clearHighlights]);

  // Focus the input once the pill expands (after it is no longer read-only).
  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // A route change replaces the page DOM — drop stale highlights and reset.
  useEffect(() => {
    setOpen(false);
    setQuery("");
    clearHighlights();
  }, [pathname, clearHighlights]);

  // Never leak <mark> nodes into the page on unmount.
  useEffect(() => {
    return () => clearMarks(marksRef.current);
  }, []);

  const handleOpen = useCallback(() => setOpen(true), []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      runSearch(event.target.value);
    },
    [runSearch],
  );

  const handleBlur = useCallback(() => {
    if (!query.trim()) {
      setOpen(false);
      clearHighlights();
    }
  }, [query, clearHighlights]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        // `current` is 1-based; next match is index `current`, previous is
        // index `current - 2`.
        applyIndex(event.shiftKey ? current - 2 : current, true);
      } else if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    },
    [applyIndex, current, close],
  );

  const preventBlur = useCallback((event: MouseEvent) => {
    event.preventDefault();
  }, []);

  const countLabel =
    count > 0 ? `${current}/${count}` : query.trim() ? "No matches" : "";

  return (
    <div
      className={`page-search${open ? " is-open" : ""}`}
      role="search"
      aria-label="Search this page"
    >
      <svg className="page-search__filter" aria-hidden="true" focusable="false">
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>

      <div className="page-search__goo" style={{ filter: `url(#${filterId})` }}>
        <div className="page-search__pill" onClick={handleOpen}>
          <SearchIcon className="page-search__pill-icon" />
          <input
            ref={inputRef}
            className="page-search__input"
            type="search"
            enterKeyHint="search"
            autoComplete="off"
            spellCheck={false}
            placeholder="Search…"
            aria-label="Search this page"
            value={query}
            readOnly={!open}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
            onFocus={handleOpen}
          />
          <span className="page-search__meta" aria-live="polite">
            <span className="page-search__count">{countLabel}</span>
            {count > 1 ? (
              <>
                <button
                  type="button"
                  className="page-search__nav"
                  aria-label="Previous match"
                  onMouseDown={preventBlur}
                  onClick={() => applyIndex(current - 2, true)}
                >
                  ↑
                </button>
                <button
                  type="button"
                  className="page-search__nav"
                  aria-label="Next match"
                  onMouseDown={preventBlur}
                  onClick={() => applyIndex(current, true)}
                >
                  ↓
                </button>
              </>
            ) : null}
          </span>
        </div>
        <span className="page-search__bubble" aria-hidden="true">
          <SearchIcon />
        </span>
      </div>
    </div>
  );
}
