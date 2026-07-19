import { useRef } from "react";
import { useStoryNavAnimation } from "../hooks/useStoryNavAnimation";
import emblemUrl from "../assets/story-nav/circure-emblem.png";
import ribbonUrl from "../assets/story-nav/circure-ribbon.png";
import "../styles/circure-home.css";
 
export function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  const threadGuideRef = useRef<HTMLElement>(null);
  const openingRef = useRef<HTMLElement>(null);
  const historyRef = useRef<HTMLElement>(null);
  const humanRef = useRef<HTMLElement>(null);
  const expansionRef = useRef<HTMLElement>(null);
  const coverageRef = useRef<HTMLElement>(null);
  const evidenceRef = useRef<HTMLElement>(null);
  const engineeringRef = useRef<HTMLElement>(null);
  const listeningRef = useRef<HTMLElement>(null);
  const translationRef = useRef<HTMLElement>(null);
 
  useStoryNavAnimation({
    root: rootRef,
    threadGuide: threadGuideRef,
    sections: {
      opening: openingRef,
      history: historyRef,
      humanChapter: humanRef,
      expansion: expansionRef,
      coverage: coverageRef,
      evidence: evidenceRef,
      engineering: engineeringRef,
      listening: listeningRef,
      translation: translationRef,
    },
  });
 
  return (
    <div className="story-home" ref={rootRef}>
      <aside
        className="thread-guide"
        ref={threadGuideRef}
        aria-label="Drag the pink ribbon to navigate the page"
        role="slider"
        tabIndex={0}
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={0}
        aria-valuetext="Recognition, section 1 of 9"
      >
        <span className="thread-guide-index" aria-hidden="true">
          01 / 09
        </span>
        <span className="thread-guide-name" aria-hidden="true">
          Opening
        </span>
        <span className="thread-guide-track" aria-hidden="true">
          <i />
          <span className="thread-guide-knot">
            <svg className="ribbon-mark" viewBox="0 0 32 46">
              <use href="#circure-ribbon-knot" />
            </svg>
          </span>
        </span>
      </aside>
 
      <main id="top">
        <section
          className="prologue"
          ref={openingRef}
          id="opening"
          aria-labelledby="hero-title"
        >
          <div className="prologue-sticky">
            <div className="prologue-word" aria-hidden="true">
              RECOGNITION
            </div>
 
            <article
              className="pathology-sheet"
              aria-label="Example TNBC biomarker panel"
            >
              <header>
                <span>Pathology / biomarker panel</span>
                <small>Example · not patient data</small>
              </header>
              <p className="report-type">Breast tissue · receptor status</p>
              <h2>Three familiar routes are tested.</h2>
              <dl>
                <div className="report-result result-er">
                  <dt>ER</dt>
                  <dd>Negative</dd>
                  <i aria-hidden="true" />
                </div>
                <div className="report-result result-pr">
                  <dt>PR</dt>
                  <dd>Negative</dd>
                  <i aria-hidden="true" />
                </div>
                <div className="report-result result-her2">
                  <dt>HER2</dt>
                  <dd>Negative</dd>
                  <i aria-hidden="true" />
                </div>
              </dl>
              <p className="report-note">
                This pattern is used to define triple-negative breast cancer.
              </p>
              <svg
                className="ribbon-mark report-ribbon"
                viewBox="0 0 32 46"
                aria-hidden="true"
              >
                <use href="#circure-ribbon-knot" />
              </svg>
            </article>
 
            <div className="prologue-reveal">
              <span>Recognition / Prologue</span>
              <h1 id="hero-title">
                The report stops here.
                <br />A life does not.
              </h1>
              <p>
                CirCure begins where three familiar treatment routes
                disappear—and asks what immune recognition might still be
                possible.
              </p>
              <a href="#history">
                Follow the missing targets <b>↓</b>
              </a>
            </div>
 
            <aside
              className="care-route"
              aria-label="Research and support notice"
            >
              <p>
                <strong>Student research concept</strong>
                <span>Not clinical guidance.</span>
              </p>
              <a
                href="https://tnbcfoundation.org/"
                target="_blank"
                rel="noopener noreferrer"
              >
                TNBC support and helpline ↗
              </a>
            </aside>
          </div>
        </section>
 
        <section
          className="history"
          ref={historyRef}
          id="history"
          aria-labelledby="history-title"
        >
          <div className="history-sticky">
            <div className="history-heading">
              <h2 id="history-title">A history written in receptors.</h2>
              <p>
                Breast cancer treatment changed when molecular features began to
                guide therapy. Each discovery made some tumors more visible—and
                left others outside the new route.
              </p>
            </div>
 
            <div
              className="history-line"
              aria-label="Selected milestones in receptor-guided breast cancer treatment"
            >
              <article>
                <time dateTime="1977">1977</time>
                <h3>Estrogen receptor</h3>
                <p>Tamoxifen turns hormone response into a treatment route.</p>
              </article>
              <article>
                <time>1987 → 1998</time>
                <h3>HER2</h3>
                <p>A growth signal becomes the target of trastuzumab.</p>
              </article>
              <article className="history-negative">
                <time>TNBC</time>
                <h3>ER− · PR− · HER2−</h3>
                <p>A clinically useful name built from three targets not found.</p>
              </article>
            </div>
 
            <div className="history-turn">
              <svg
                className="ribbon-mark history-ribbon-mark"
                viewBox="0 0 32 46"
                aria-hidden="true"
              >
                <use href="#circure-ribbon-knot" />
              </svg>
              <p>
                Clinically useful.
                <br />
                Humanly incomplete.
              </p>
              <span>
                A subtype can guide treatment without defining the person.
              </span>
            </div>
 
            <details className="history-sources">
              <summary>Historical sources</summary>
              <p>
                <a href="https://www.cancer.gov/research/progress/250-years-milestones">
                  NCI cancer milestones
                </a>
                ,{" "}
                <a href="https://www.cancer.gov/research/progress/discovery/her2">
                  NCI HER2 research history
                </a>
                , and the{" "}
                <a href="https://www.accessdata.fda.gov/drugsatfda_docs/appletter/1998/trasgen092598L.htm">
                  FDA trastuzumab approval record
                </a>{" "}
                dated September 25, 1998.
              </p>
            </details>
          </div>
        </section>
 
        <section
          className="human-chapter"
          ref={humanRef}
          id="person"
          aria-labelledby="person-title"
        >
          <div className="human-sticky">
            <header className="human-opening">
              <h2 id="person-title">
                No invented face.
                <br />
                No borrowed voice.
              </h2>
              <p>
                Until someone chooses to speak with us, the person at the center
                of this project will not be reduced to a stock photograph or a
                convenient quotation.
              </p>
            </header>
 
            <div className="unfilled-portrait" aria-hidden="true">
              <svg viewBox="0 0 520 680" role="presentation">
                <path
                  className="portrait-outline"
                  pathLength={1}
                  d="M270 28C399 35 486 145 478 320C468 529 384 648 244 652C111 656 37 543 42 348C47 143 131 20 270 28Z"
                />
                <path
                  className="portrait-thread"
                  pathLength={1}
                  d="M64 463C146 414 180 349 201 271C222 194 258 154 305 163C353 172 365 216 337 257C306 303 253 344 245 412C238 476 279 521 337 567"
                />
              </svg>
              <span>Reserved for a consented voice.</span>
            </div>
 
            <div className="human-questions" aria-hidden="true">
              <p>
                What matters
                <br />
                beyond the diagnosis?
              </p>
              <p>
                What burden
                <br />
                would be unacceptable?
              </p>
              <p>
                What should
                <br />
                research return?
              </p>
            </div>
 
            <p className="human-coda">
              This is not an empty portrait.
              <br />
              It is consent made visible.
            </p>
          </div>
        </section>
 
        <section
          className="expansion"
          ref={expansionRef}
          id="approach"
          aria-labelledby="approach-title"
        >
          <div className="expansion-sticky">
            <div className="expansion-backdrop" aria-hidden="true" />
            <div className="expansion-surface">
              <div className="ambient-grid" aria-hidden="true" />
 
              <div className="brand-emblem" aria-hidden="true">
                <div className="brand-emblem-disc">
                  <img className="brand-emblem-base" src={emblemUrl} alt="" />
                  <img className="brand-emblem-ribbon" src={ribbonUrl} alt="" />
                </div>
                <svg className="brand-emblem-orbit" viewBox="0 0 640 640" role="presentation">
                  <circle className="brand-orbit-track" cx="320" cy="320" r="300" />
                  <path
                    className="brand-orbit-active"
                    pathLength={1}
                    d="M320 20a300 300 0 1 1-.1 0"
                  />
                  <circle className="brand-orbit-node node-one" cx="116" cy="100" r="5" />
                  <circle className="brand-orbit-node node-two" cx="570" cy="486" r="5" />
                </svg>
              </div>
 
              <div className="expansion-copy">
                <h2 id="approach-title">
                  Recognition becomes
                  <br />
                  the design question.
                </h2>
                <p className="expansion-lede">
                  Can one circular transcript carry several candidate epitopes—and
                  can every step toward an immune response be demonstrated?
                </p>
                <a className="surface-cta" href="#evidence">
                  <span>Follow the evidence</span>
                  <svg viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
 
        <section
          className="coverage"
          ref={coverageRef}
          id="coverage"
          aria-labelledby="coverage-title"
        >
          <div className="coverage-sticky">
            <div className="coverage-copy">
              <h2 id="coverage-title">
                One name can hold many landscapes.
              </h2>
              <p>
                Even within one tumor, cells may express and present different
                antigens. One target can illuminate a region without describing
                the whole field.
              </p>
            </div>
 
            <figure className="coverage-map">
              <svg
                viewBox="0 0 760 520"
                role="img"
                aria-labelledby="coverage-map-title coverage-map-desc"
              >
                <title id="coverage-map-title">
                  Heterogeneous tumor antigen map
                </title>
                <desc id="coverage-map-desc">
                  Conceptual illustration of tumor cells carrying different
                  combinations of candidate antigen markers; not patient data.
                </desc>
                <path
                  className="map-route route-one"
                  pathLength={1}
                  d="M62 126C172 52 272 74 354 154S530 272 698 176"
                />
                <path
                  className="map-route route-two"
                  pathLength={1}
                  d="M62 394C194 458 318 416 390 332S552 224 704 338"
                />
 
                <g className="map-cell cell-a" transform="translate(126 174)">
                  <circle className="cell-membrane" r="58" />
                  <circle className="cell-nucleus" r="22" />
                  <circle className="cell-marker marker-a" cx="-38" cy="-43" r="5" />
                  <circle className="cell-marker marker-c" cx="48" cy="18" r="5" />
                </g>
                <g className="map-cell cell-b" transform="translate(292 116)">
                  <circle className="cell-membrane" r="46" />
                  <circle className="cell-nucleus" r="18" />
                  <circle className="cell-marker marker-b" cx="24" cy="-39" r="5" />
                  <circle className="cell-marker marker-a" cx="-39" cy="14" r="5" />
                </g>
                <g className="map-cell cell-c" transform="translate(476 176)">
                  <circle className="cell-membrane" r="68" />
                  <circle className="cell-nucleus" r="26" />
                  <circle className="cell-marker marker-c" cx="46" cy="-50" r="5" />
                  <circle className="cell-marker marker-b" cx="-62" cy="-4" r="5" />
                </g>
                <g className="map-cell cell-a" transform="translate(644 116)">
                  <circle className="cell-membrane" r="43" />
                  <circle className="cell-nucleus" r="16" />
                  <circle className="cell-marker marker-a" cx="31" cy="-29" r="5" />
                </g>
                <g className="map-cell cell-c" transform="translate(196 360)">
                  <circle className="cell-membrane" r="66" />
                  <circle className="cell-nucleus" r="25" />
                  <circle className="cell-marker marker-c" cx="-54" cy="-28" r="5" />
                  <circle className="cell-marker marker-b" cx="48" cy="34" r="5" />
                </g>
                <g className="map-cell cell-b" transform="translate(396 386)">
                  <circle className="cell-membrane" r="50" />
                  <circle className="cell-nucleus" r="19" />
                  <circle className="cell-marker marker-b" cx="-23" cy="-45" r="5" />
                </g>
                <g className="map-cell cell-a" transform="translate(602 366)">
                  <circle className="cell-membrane" r="61" />
                  <circle className="cell-nucleus" r="23" />
                  <circle className="cell-marker marker-a" cx="53" cy="-20" r="5" />
                  <circle className="cell-marker marker-c" cx="-42" cy="41" r="5" />
                </g>
              </svg>
              <div className="scan-lens" aria-hidden="true">
                <i />
              </div>
              <figcaption>
                <strong>Different cells. Different combinations.</strong>
                <span>
                  Conceptual illustration. No single marker describes the whole
                  field.
                </span>
              </figcaption>
            </figure>
          </div>
        </section>
 
        <section
          className="evidence"
          ref={evidenceRef}
          id="evidence"
          aria-labelledby="evidence-title"
        >
          <div className="evidence-sticky">
            <div className="evidence-heading">
              <h2 id="evidence-title">
                A promising circle is not yet recognition.
              </h2>
              <p>
                Every arrow in the hypothesis is a separate claim. Each one can
                fail.
              </p>
            </div>
 
            <div
              className="evidence-sequence"
              aria-label="Evidence required from circular RNA to immune recognition"
            >
              <svg
                className="evidence-thread"
                viewBox="0 0 1200 460"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <path
                  pathLength={1}
                  d="M48 110C260 44 366 174 528 222S852 356 1150 286"
                />
              </svg>
              <article>
                <h3>The RNA must close.</h3>
                <p>Confirm the back-splice junction and stability.</p>
              </article>
              <article>
                <h3>The cell must show it.</h3>
                <p>Measure whether encoded epitopes reach MHC-I.</p>
              </article>
              <article>
                <h3>The response must be specific.</h3>
                <p>
                  Recognition matters only when the intended target explains it.
                </p>
              </article>
            </div>
            <p className="evidence-coda">
              Between each sentence is an experiment.
            </p>
          </div>
        </section>
 
        <section
          className="engineering"
          ref={engineeringRef}
          id="engineering"
          aria-labelledby="engineering-title"
        >
          <div className="engineering-heading">
            <h2 id="engineering-title">
              A result should send the design back changed.
            </h2>
            <p>
              Repeating a cycle is not progress by itself. The next construct
              must carry what the last result taught us.
            </p>
          </div>
 
          <div
            className="lab-notebook"
            aria-label="How evidence changes the next construct"
          >
            <article className="lab-build">
              <h3>Build.</h3>
              <p>Make one sequence decision clear enough to challenge.</p>
            </article>
            <article className="lab-read">
              <h3>Read.</h3>
              <p>Separate expression, presentation, and recognition.</p>
            </article>
            <article className="lab-return">
              <h3>Return.</h3>
              <p>Change the next construct because of what failed.</p>
            </article>
            <svg className="lab-loop" viewBox="0 0 620 620" aria-hidden="true">
              <path
                pathLength={1}
                d="M164 99C60 192 68 414 221 500C356 576 528 478 529 326C530 195 420 105 309 122C205 139 183 253 244 309C299 360 383 325 393 258"
              />
            </svg>
            <svg
              className="ribbon-mark lab-knot"
              viewBox="0 0 32 46"
              aria-hidden="true"
            >
              <use href="#circure-ribbon-knot" />
            </svg>
          </div>
        </section>
 
        <section
          className="listening"
          ref={listeningRef}
          id="listening"
          aria-labelledby="listening-title"
        >
          <div className="listening-heading">
            <h2 id="listening-title">
              A story about patients cannot be written without patients.
            </h2>
            <p>
              No composite testimony appears here. The empty seats are
              intentional.
            </p>
          </div>
 
          <div
            className="listening-room"
            aria-label="Seats reserved for future consented voices"
          >
            <div className="listening-table" aria-hidden="true">
              <i />
              <strong>Consent</strong>
              <small>Ask. Listen. Return.</small>
            </div>
            <article className="voice voice-patient">
              <h3>Patient</h3>
              <p>What would make this work worth pursuing?</p>
            </article>
            <article className="voice voice-caregiver">
              <h3>Caregiver</h3>
              <p>What burden does the design overlook?</p>
            </article>
            <article className="voice voice-clinician">
              <h3>Clinician</h3>
              <p>What would make the evidence credible?</p>
            </article>
            <article className="voice voice-advocate">
              <h3>Advocate</h3>
              <p>Who could still be left outside?</p>
            </article>
          </div>
 
          <div className="listening-status">
            <p>
              No interviews have been conducted for this prototype. Listening is
              the next piece of work—not a decoration added afterward.
            </p>
          </div>
 
          <details className="listening-sources">
            <summary>Why the page does not use a patient quote yet</summary>
            <p>
              <a href="https://breastcancernow.org/about-us/tell-us-your-story">
                Breast Cancer Now
              </a>{" "}
              asks permission each time a personal story is used.{" "}
              <a href="https://responsibility.igem.org/guidance/informed-consent">
                iGEM guidance
              </a>{" "}
              likewise requires respectful methodology and informed consent for
              interviews, surveys, and focus groups.
            </p>
          </details>
        </section>
 
        <section
          className="translation"
          ref={translationRef}
          id="translation"
          aria-labelledby="translation-title"
        >
          <div className="translation-sticky">
            <div className="translation-heading">
              <h2 id="translation-title">A boundary is part of the work.</h2>
            </div>
            <div className="claim-boundary">
              <article>
                <h3>History tells us</h3>
                <p>Targets can change care.</p>
              </article>
              <article>
                <h3>CirCure asks</h3>
                <p>Can several epitopes broaden recognition?</p>
              </article>
              <article>
                <h3>People decide</h3>
                <p>
                  Which questions are worth asking—and what care requires.
                </p>
              </article>
            </div>
            <div className="care-final">
              <svg className="care-seal" viewBox="0 0 240 240" aria-hidden="true">
                <circle pathLength={1} cx="120" cy="120" r="105" />
              </svg>
              <p className="care-statement">
                A pathology report may begin with biomarkers.
                <br />
                Care cannot end there.
              </p>
              <div className="final-tie" aria-hidden="true">
                <i />
                <svg className="ribbon-mark" viewBox="0 0 32 46">
                  <use href="#circure-ribbon-knot" />
                </svg>
                <i />
              </div>
            </div>
          </div>
        </section>
 
        {/* Zero-height marker retained for the story hook's final navy tone. */}
        <div className="closing" aria-hidden="true" />
      </main>
    </div>
  );
}
