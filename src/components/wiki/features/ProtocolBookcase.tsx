import { useEffect, useRef, useState } from "react";
import protocolContent from "../../../data/protocolContent.json";

// This HTML is generated from the checked-in Markdown, never from runtime input.
function ProtocolText({ html }: { html: string }) {
  return (
    <div
      className="protocol-prose"
      data-protocol-source
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export function ProtocolBookcase() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [query, setQuery] = useState("");
  const search = query.trim().toLowerCase();
  const matches = (protocol: { id: string; title: string }) =>
    !search ||
    (/^[mca]\d+$/.test(search)
      ? protocol.id.toLowerCase() === search
      : `${protocol.id} ${protocol.title}`.toLowerCase().includes(search));
  const resultCount = protocolContent.labs.reduce(
    (count, lab) => count + lab.protocols.filter(matches).length,
    0,
  );

  useEffect(() => {
    const openLinkedProtocol = () => {
      const id = window.location.hash.slice(1);
      const target = document.getElementById(id);
      if (
        target instanceof HTMLDetailsElement &&
        rootRef.current?.contains(target)
      ) {
        target.open = true;
        target.scrollIntoView({ block: "start" });
      }
    };
    openLinkedProtocol();
    window.addEventListener("hashchange", openLinkedProtocol);
    return () => window.removeEventListener("hashchange", openLinkedProtocol);
  }, []);

  return (
    <div className="protocol-bookcase wiki-record" ref={rootRef}>
      <section
        className="protocol-overview"
        aria-labelledby="protocol-overview-title"
      >
        <header>
          <p className="protocol-source-title" data-protocol-source>
            {protocolContent.title}
          </p>
          <h2 id="protocol-overview-title">Overview</h2>
        </header>
        <ProtocolText html={protocolContent.introHtml} />
      </section>

      <div className="protocol-index" id="protocol-index">
        <nav className="protocol-lab-nav" aria-label="Protocol laboratories">
          {protocolContent.labs.map((lab) => (
            <a href={`#${lab.id}`} key={lab.id} onClick={() => setQuery("")}>
              <span>{lab.title}</span>
              <span>{lab.protocols.length} SOPs</span>
            </a>
          ))}
        </nav>
        <div className="protocol-search" role="search">
          <label htmlFor="protocol-search">Find a protocol</label>
          <div className="protocol-search__field">
            <input
              id="protocol-search"
              type="search"
              value={query}
              placeholder="ID or title, e.g. M1 or PCR"
              onChange={(event) => setQuery(event.target.value)}
            />
            {query ? (
              <button type="button" onClick={() => setQuery("")}>
                Clear
              </button>
            ) : null}
          </div>
        </div>
      </div>
      <div className="protocol-index__status">
        <p aria-live="polite">
          {resultCount} of 43 protocols
          {search ? " match your search" : " · Select a card to read"}
        </p>
        {resultCount === 0 ? (
          <p>Try another title or an exact protocol ID, such as C12.</p>
        ) : null}
      </div>

      {protocolContent.labs.map((lab) => (
        <section
          className="protocol-lab"
          id={lab.id}
          aria-labelledby={`${lab.id}-title`}
          data-wiki-section
          hidden={!lab.protocols.some(matches)}
          key={lab.id}
        >
          <div className="protocol-lab__intro">
            <header className="protocol-lab__heading">
              <p>
                {lab.protocols[0].id}–
                {lab.protocols[lab.protocols.length - 1].id}
              </p>
              <h2 id={`${lab.id}-title`} data-protocol-source>
                {lab.title}
              </h2>
            </header>
            <ProtocolText html={lab.introHtml} />
          </div>
          <div className="protocol-folds">
            {lab.protocols.map((protocol) => (
              <details
                id={protocol.id}
                key={protocol.id}
                hidden={!matches(protocol)}
              >
                <summary>
                  <span className="protocol-fold__title" data-protocol-source>
                    <span className="protocol-fold__id">{protocol.id}. </span>
                    <span>{protocol.title}</span>
                  </span>
                </summary>
                <ProtocolText html={protocol.html} />
                <div className="protocol-fold__footer">
                  <button
                    type="button"
                    onClick={(event) => {
                      const detail = event.currentTarget.closest("details");
                      if (!detail) return;
                      detail.open = false;
                      detail
                        .querySelector("summary")
                        ?.focus({ preventScroll: true });
                      detail.scrollIntoView({ block: "nearest" });
                    }}
                  >
                    Close {protocol.id} ↑
                  </button>
                </div>
              </details>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
