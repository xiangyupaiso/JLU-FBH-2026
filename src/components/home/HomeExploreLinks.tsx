import { useEffect, useId, useRef, useState, type PointerEvent } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { homeDestinations, type HomeDestination } from "../../data/homeDestinations";
import "../../styles/home-explore.css";

export function HomeExploreLinks() {
  const [preview, setPreview] = useState<string | null>(null);
  const [selected, setSelected] = useState<HomeDestination | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const backdropPress = useRef(false);
  const id = useId();

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog) return;
    if (!dialog.open) dialog.showModal();
    return () => {
      if (dialog.open) dialog.close();
    };
  }, [selected]);

  // Dismiss the hover hint when the reader scrolls away from its source.
  useEffect(() => {
    const dismiss = () => setPreview(null);
    window.addEventListener("scroll", dismiss, { passive: true });
    return () => window.removeEventListener("scroll", dismiss);
  }, []);

  const outsideDialog = (event: PointerEvent<HTMLDialogElement>) => {
    if (event.target !== event.currentTarget) return false;
    const bounds = event.currentTarget.getBoundingClientRect();
    return event.clientX < bounds.left || event.clientX > bounds.right ||
      event.clientY < bounds.top || event.clientY > bounds.bottom;
  };

  return (
    <>
      <nav
        className="story-hope-links"
        aria-label="Continue exploring CirCure"
        onKeyDown={(event) => {
          if (event.key === "Escape") setPreview(null);
        }}
      >
        {["left", "right"].map((side, groupIndex) => (
          <div className={`story-hope-group story-hope-group--${side}`} key={side}>
            {homeDestinations.slice(groupIndex * 3, groupIndex * 3 + 3).map((destination) => {
              const { key, label, summary } = destination;
              const showingPreview = preview === key && !selected;
              return (
                <div
                  className={`story-hope-entry${showingPreview ? " is-previewing" : ""}`}
                  data-hope-card={key}
                  key={key}
                  onPointerEnter={(event) => {
                    if (event.pointerType === "mouse") setPreview(key);
                  }}
                  onPointerLeave={() => setPreview(null)}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setPreview(null);
                  }}
                >
                  <button
                    className="story-hope-card"
                    type="button"
                    aria-haspopup="dialog"
                    aria-expanded={selected?.key === key}
                    aria-controls={`${id}-dialog`}
                    aria-describedby={showingPreview ? `${id}-${key}-preview` : undefined}
                    onFocus={() => setPreview(key)}
                    onClick={() => {
                      setPreview(null);
                      setSelected(destination);
                    }}
                  >
                    {label} <span aria-hidden="true">↗</span>
                  </button>
                  <div
                    className="home-explore-preview"
                    id={`${id}-${key}-preview`}
                    role="tooltip"
                    aria-hidden={!showingPreview}
                  >
                    <p>{summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        ))}
      </nav>
      {createPortal(
        <dialog
          className="home-explore-dialog"
          id={`${id}-dialog`}
          ref={dialogRef}
          aria-labelledby={`${id}-title`}
          aria-describedby={`${id}-summary`}
          onClose={(event) => {
            // A queued close event must not dismiss a freshly reopened dialog.
            if (event.currentTarget.open) return;
            setSelected(null);
            setPreview(null);
          }}
          onPointerDown={(event) => { backdropPress.current = outsideDialog(event); }}
          onPointerCancel={() => { backdropPress.current = false; }}
          onPointerUp={(event) => {
            if (backdropPress.current && outsideDialog(event)) event.currentTarget.close();
            backdropPress.current = false;
          }}
        >
          {selected && (
            <>
              <button
                className="home-explore-close"
                type="button"
                aria-label="Close section preview"
                autoFocus
                onClick={() => dialogRef.current?.close()}
              >
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>
              </button>
              <h2 id={`${id}-title`}>{selected.label}</h2>
              <p className="home-explore-summary" id={`${id}-summary`}>{selected.summary}</p>
              <div className="home-explore-topics">
                <h3>Inside this chapter</h3>
                <ul>{selected.topics.map((topic) => <li key={topic}>{topic}</li>)}</ul>
              </div>
              <Link className="home-explore-action" to={selected.path} onClick={() => dialogRef.current?.close()}>
                {selected.action} <span aria-hidden="true">↗</span>
              </Link>
            </>
          )}
        </dialog>,
        document.body,
      )}
    </>
  );
}
