import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { ArrowRight, Download, RotateCcw, X } from "lucide-react";
import { Link } from "react-router-dom";
import lambUrl from "../assets/loading/lamb.webp";
import manropeFontUrl from "../assets/fonts/manrope-latin-variable.woff2";
import manropeOfl from "../assets/fonts/manrope-OFL.txt?raw";
import newsreaderFontUrl from "../assets/fonts/newsreader-variable.woff2";
import { useFooterEasterEgg } from "../hooks/useFooterEasterEgg";
import "../styles/footer-easter-egg.css";

const FooterPhotoScene = lazy(() => import("./FooterPhotoScene"));

async function assetAsDataUrl(url: string): Promise<string> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("The keepsake font could not be loaded.");
  const blob = await response.blob();
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () =>
      reject(new Error("The keepsake font could not be read."));
    reader.readAsDataURL(blob);
  });
}

/** Keep the downloaded ticket independent of installed or network fonts. */
function keepsakeSvg(newsreader: string, manrope: string): string {
  const fontLicense = manropeOfl.replace(
    /^Copyright 2018 The Manrope Project Authors[^\n]*\n/,
    "Copyright 2020 The Newsreader Project Authors (http://github.com/productiontype/Newsreader)\nCopyright 2018 The Manrope Project Authors (https://github.com/googlefonts/manrope)\n",
  );
  return [
    '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="554" viewBox="0 0 1200 554">',
    "<metadata><![CDATA[",
    fontLicense,
    "]]></metadata>",
    '<style>@font-face{font-family:TicketNewsreader;src:url("',
    newsreader,
    '") format("woff2");font-weight:200 800}',
    '@font-face{font-family:TicketManrope;src:url("',
    manrope,
    '") format("woff2");font-weight:200 800}</style>',
    '<defs><linearGradient id="main" x2="1" y2="1"><stop stop-color="#382c35"/><stop offset="1" stop-color="#30242d"/></linearGradient>',
    '<mask id="cut"><rect width="1200" height="554" rx="15" fill="white"/><circle cx="910" cy="0" r="16" fill="black"/><circle cx="910" cy="554" r="16" fill="black"/></mask></defs>',
    '<g mask="url(#cut)">',
    '<rect width="1200" height="554" fill="url(#main)"/>',
    '<rect x="910" width="290" height="554" fill="#efe7de"/>',
    '<path d="M910 32V522" stroke="#aa858a" stroke-width="1.5" stroke-dasharray="3 5"/>',
    '<rect x="0.75" y="0.75" width="1198.5" height="552.5" rx="14.25" fill="none" stroke="#a78a90" stroke-width="1.5"/>',
    "</g>",
    '<text x="64" y="83" fill="#fff9f4" font-family="TicketNewsreader,Georgia,serif" font-size="45">CirCure</text>',
    '<text x="846" y="78" text-anchor="end" fill="#d4c5c7" font-family="TicketManrope,Arial,sans-serif" font-size="21">After the last page</text>',
    '<text x="64" y="220" fill="#f7e7e5" font-family="TicketNewsreader,Georgia,serif" font-size="54">You found</text>',
    '<text x="60" y="326" fill="#e5b3b9" font-family="TicketNewsreader,Georgia,serif" font-size="94">the extra loop.</text>',
    '<path d="M64 462H846" stroke="#786b73" stroke-width="1.2"/>',
    '<text x="64" y="508" fill="#e4d4d7" font-family="TicketManrope,Arial,sans-serif" font-size="21">JLU-FBH · iGEM 2026</text>',
    '<circle cx="1055" cy="195" r="108" fill="none" stroke="#b58c8b" stroke-width="1.4"/>',
    '<text x="1055" y="243" text-anchor="middle" fill="#6f4456" font-family="TicketNewsreader,Georgia,serif" font-size="130">01</text>',
    '<text x="1055" y="339" text-anchor="middle" fill="#6f5a62" font-family="TicketManrope,Arial,sans-serif" font-size="21">Hidden edition</text>',
    "</svg>",
  ].join("");
}

function TicketStub({ back = false }: { back?: boolean }) {
  return (
    <div className="finale-ticket__stub" aria-hidden="true">
      <svg
        className="finale-ticket__stub-loop"
        viewBox="0 0 200 200"
        focusable="false"
      >
        <circle cx="100" cy="100" r="84" />
      </svg>
      <span className="finale-ticket__stub-number">01</span>
      {!back && (
        <span className="finale-ticket__stub-label">Hidden edition</span>
      )}
      {back && (
        <span className="finale-ticket__lamb">
          <img src={lambUrl} alt="" decoding="async" />
        </span>
      )}
    </div>
  );
}

export function FooterEasterEgg() {
  const rootRef = useRef<HTMLElement>(null);
  const seamRef = useRef<HTMLButtonElement>(null);
  const artRef = useRef<HTMLDivElement>(null);
  const { revealed, reveal, close } = useFooterEasterEgg(rootRef, seamRef);
  const [started, setStarted] = useState(false);
  const [flipped, setFlipped] = useState(false);
  const [take, setTake] = useState(0);
  const [downloadState, setDownloadState] = useState<
    "idle" | "saving" | "saved" | "error"
  >("idle");
  const [downloadAttempt, setDownloadAttempt] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);

  useEffect(() => {
    if (!revealed || !artRef.current) return;
    const art = artRef.current;
    if (!("IntersectionObserver" in window)) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(art);
    return () => observer.disconnect();
  }, [revealed]);

  useEffect(() => {
    if (!revealed) return;
    let cancelled = false;
    let objectUrl: string | null = null;
    setDownloadState("saving");
    Promise.all([
      assetAsDataUrl(newsreaderFontUrl),
      assetAsDataUrl(manropeFontUrl),
    ])
      .then(([newsreader, manrope]) => {
        const svg = keepsakeSvg(newsreader, manrope);
        objectUrl = URL.createObjectURL(
          new Blob([svg], { type: "image/svg+xml;charset=utf-8" }),
        );
        if (cancelled) {
          URL.revokeObjectURL(objectUrl);
          return;
        }
        setDownloadUrl(objectUrl);
        setDownloadState("idle");
      })
      .catch(() => {
        if (!cancelled) setDownloadState("error");
      });
    return () => {
      cancelled = true;
      if (objectUrl) URL.revokeObjectURL(objectUrl);
    };
  }, [revealed, downloadAttempt]);

  const closeKeepsake = () => {
    setStarted(false);
    setFlipped(false);
    setDownloadState("idle");
    setDownloadAttempt(0);
    setDownloadUrl(null);
    close();
  };

  const replay = () => {
    setFlipped(false);
    setTake((value) => value + 1);
  };

  const turnKeepsake = () => {
    setFlipped((value) => !value);
    if (window.matchMedia("(max-width: 720px)").matches) {
      rootRef.current?.scrollIntoView({
        block: "start",
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
    }
  };

  const downloadKeepsake = () => {
    if (!downloadUrl) return;
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "circure-extra-loop.svg";
    document.body.append(link);
    link.click();
    link.remove();
    setDownloadState("saved");
  };

  const saveOrRetry = () => {
    if (downloadState === "error") {
      setDownloadAttempt((value) => value + 1);
      return;
    }
    downloadKeepsake();
  };

  return (
    <>
      <div className="finale-seam">
        <button
          ref={seamRef}
          type="button"
          className="finale-gate"
          aria-expanded={revealed}
          aria-controls="circure-hidden-finale"
          onClick={reveal}
        >
          <span className="finale-gate__line" aria-hidden="true" />
          <span>One more turn</span>
          <span className="finale-gate__arrow" aria-hidden="true">
            ↓
          </span>
          <span className="visually-hidden">
            {" "}
            — keep scrolling or activate to reveal the team photograph and
            hidden keepsake
          </span>
        </button>
      </div>
      <section
        ref={rootRef}
        id="circure-hidden-finale"
        className={"circure-hidden-finale" + (revealed ? " is-revealed" : "")}
        aria-label="Team photograph and hidden CirCure keepsake"
        aria-hidden={!revealed}
        inert={!revealed || undefined}
        tabIndex={-1}
        data-theme="dark"
      >
        {revealed && (
          <>
            <Suspense
              fallback={
                <div className="finale-photo-loading" role="status">
                  Preparing the team photograph…
                </div>
              }
            >
              <FooterPhotoScene onClose={closeKeepsake} />
            </Suspense>
            <div className={"finale-stage" + (started ? " is-ready" : "")}>
              <button
                className="finale-close"
                type="button"
                onClick={closeKeepsake}
                aria-label="Return to footer"
              >
                <X aria-hidden="true" size={20} strokeWidth={1.6} />
              </button>
              <div ref={artRef} className="finale-art" key={take}>
                <div className="finale-ticket-shell">
                  <div
                    className={"finale-ticket" + (flipped ? " is-flipped" : "")}
                  >
                    <div
                      className="finale-ticket__face finale-ticket__front"
                      aria-hidden={flipped}
                      inert={flipped || undefined}
                    >
                      <div className="finale-ticket__body">
                        <div className="finale-ticket__masthead">
                          <span>CirCure</span>
                          <span>After the last page</span>
                        </div>
                        <div className="finale-ticket__copy">
                          <h2>
                            <span>You found</span>
                            <strong>the extra loop.</strong>
                          </h2>
                        </div>
                        <div className="finale-ticket__signature">
                          JLU-FBH · iGEM 2026
                        </div>
                      </div>
                      <TicketStub />
                    </div>
                    <div
                      className="finale-ticket__face finale-ticket__back"
                      aria-hidden={!flipped}
                      inert={!flipped || undefined}
                    >
                      <div className="finale-ticket__body">
                        <div className="finale-ticket__masthead">
                          <span>CirCure</span>
                          <span>After the last page</span>
                        </div>
                        <div className="finale-ticket__copy finale-ticket__copy--back">
                          <h2>
                            <span>The question</span>
                            <strong>stays with us.</strong>
                          </h2>
                          <p>
                            “What if it comes back?” That question led to
                            CirCure. Thank you for looking one page further.
                          </p>
                        </div>
                        <div className="finale-ticket__signature">
                          JLU-FBH · iGEM 2026
                        </div>
                      </div>
                      <TicketStub back />
                    </div>
                  </div>
                </div>
              </div>
              <div className="finale-actions">
                <button
                  className="finale-action finale-action--primary"
                  type="button"
                  onClick={turnKeepsake}
                  aria-label={
                    flipped
                      ? "Show the front of the keepsake"
                      : "Turn the keepsake over"
                  }
                >
                  <RotateCcw aria-hidden="true" size={18} strokeWidth={1.7} />
                  {flipped ? "Show the front" : "Turn the card"}
                </button>
                {flipped ? (
                  <Link
                    className="finale-action finale-action--secondary"
                    to="/description"
                  >
                    Explore the story
                    <ArrowRight
                      aria-hidden="true"
                      size={18}
                      strokeWidth={1.7}
                    />
                  </Link>
                ) : (
                  <button
                    className="finale-action finale-action--secondary"
                    type="button"
                    onClick={saveOrRetry}
                    disabled={!downloadUrl && downloadState !== "error"}
                  >
                    <Download aria-hidden="true" size={18} strokeWidth={1.7} />
                    {downloadState === "saving"
                      ? "Preparing..."
                      : downloadState === "error"
                        ? "Retry save"
                        : "Save the keepsake"}
                  </button>
                )}
                <button
                  className="finale-action finale-action--quiet"
                  type="button"
                  onClick={replay}
                >
                  Replay reveal
                </button>
              </div>
              <p className="visually-hidden" role="status">
                {flipped
                  ? "The back of the keepsake is showing."
                  : "The front of the keepsake is showing."}
                {downloadState === "saved"
                  ? " The keepsake download was requested."
                  : ""}
                {downloadState === "error"
                  ? " The keepsake could not be saved. Try again."
                  : ""}
              </p>
            </div>
          </>
        )}
      </section>
    </>
  );
}
