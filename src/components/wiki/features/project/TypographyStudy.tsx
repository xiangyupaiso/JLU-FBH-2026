import "../../../../styles/features/visual-design-typography.css";

const coreFonts = [
  {
    family: "Fraunces",
    fallback: "Georgia, serif",
    role: "01 / Titles & editorial emphasis",
    reason:
      "Expressive serifs give the scientific story an editorial voice. We reserve this contrast for titles and selected statements, giving each section a recognizable entrance.",
  },
  {
    family: "Lexend",
    fallback: "sans-serif",
    role: "02 / Body text & explanations",
    reason:
      "Open, rounded forms carry the longer explanations. A consistent body family keeps paragraphs, lists and tables visually connected as the research becomes more detailed.",
  },
];

const supportingFonts = [
  {
    family: "Outfit",
    fallback: "sans-serif",
    weight: 600,
    role: "Figure labels",
    reason:
      "A geometric sans marks figure numbers and panel labels. Its compact role separates the figure identifier from the Lexend caption that explains it.",
  },
  {
    family: "Manrope",
    fallback: "sans-serif",
    weight: 600,
    role: "Navigation wordmark detail",
    reason:
      "The small Wiki label beside the CirCure signature uses Manrope. This restrained sans supports the identity at a small size without adding another display voice.",
  },
  {
    family: "Fredoka",
    fallback: "sans-serif",
    weight: 600,
    role: "Navigation cards & loading cues",
    reason:
      "Rounded, fuller shapes connect short destination titles and loading messages with Lumi’s illustrated world. We keep this playful voice in brief interface moments.",
  },
  {
    family: "Newsreader",
    fallback: "Georgia, serif",
    weight: 600,
    role: "Editorial studies & team quotations",
    reason:
      "A quieter serif appears in the design archive and selected team quotations. It gives these reading moments a letter-like tone; it also sits behind Fraunces in the heading fallback stack.",
  },
  {
    family: "IBM Plex Mono",
    fallback: "monospace",
    weight: 400,
    role: "Code, references & technical labels",
    reason:
      "Equal character widths distinguish code and technical identifiers from prose. The supplied face has a regular 400 weight, which is the weight shown here.",
  },
];

export function TypographyStudy() {
  return (
    <div className="design-type-study">
      <div className="design-type-study__intro">
        <span className="design-type-study__eyebrow">
          Reading task → typeface → hierarchy
        </span>
        <p>
          <strong>
            Establish the voice. Support the reading. Mark the detail.
          </strong>{" "}
          Family creates a visual voice; size and weight tell the reader where
          to begin. The same words below make those differences visible.
        </p>
      </div>

      <div className="design-type-study__pair">
        {coreFonts.map((font) => (
          <section className="design-type-study__core" key={font.family}>
            <span className="design-type-study__eyebrow">{font.role}</span>
            <h4>{font.family}</h4>
            <div
              className="design-type-study__specimen"
              style={{ fontFamily: `${font.family}, ${font.fallback}` }}
            >
              <span className="design-type-study__large">
                Science, with care.
              </span>
              <span className="design-type-study__small">
                Follow the question. Explore the evidence.
              </span>
              <span className="design-type-study__bold">
                Keep the patient in view.
              </span>
            </div>
            <span className="design-type-study__metrics">
              42 px / 400 · 16 px / 400 · 16 px / 700
            </span>
            <p>{font.reason}</p>
          </section>
        ))}
      </div>

      <p className="design-type-study__comparison-note">
        <strong>Compare the pair:</strong> both specimens use the same words,
        sizes and weights. Fraunces brings serif contrast; Lexend carries the
        explanation with a more even sans-serif texture. These are display
        specimens, with responsive title sizes on narrow screens.
      </p>

      <div className="design-type-study__supporting">
        {supportingFonts.map((font) => (
          <section className="design-type-study__row" key={font.family}>
            <div>
              <h4>{font.family}</h4>
              <span className="design-type-study__eyebrow">{font.role}</span>
            </div>
            <div>
              <span
                className="design-type-study__sample"
                style={{
                  fontFamily: `${font.family}, ${font.fallback}`,
                  fontWeight: font.weight,
                }}
              >
                Science, with care.
              </span>
              <span className="design-type-study__metrics">
                28 px / {font.weight}
              </span>
              <p>{font.reason}</p>
            </div>
          </section>
        ))}
      </div>

      <div className="design-type-study__hierarchy">
        <div className="design-type-study__flat">
          <span className="design-type-study__eyebrow">
            A / One size, one weight
          </span>
          <div className="design-type-study__reading">
            <span>OUR RESEARCH</span>
            <span>Keep the patient in view.</span>
            <span>Follow the question. Explore the evidence.</span>
            <span>Figure 01 · A circular RNA platform.</span>
          </div>
          <p>
            Equal emphasis leaves the section title, explanation and figure note
            competing for the same attention.
          </p>
        </div>
        <div className="design-type-study__layered">
          <span className="design-type-study__eyebrow">
            B / Size, weight & a clear sequence
          </span>
          <div className="design-type-study__reading">
            <span>OUR RESEARCH</span>
            <span>Keep the patient in view.</span>
            <span>
              Follow the question. <strong>Explore the evidence.</strong>
            </span>
            <span>Figure 01 · A circular RNA platform.</span>
          </div>
          <p>
            A small label introduces the context, a large title opens the
            section, body text explains it and a quieter note supports the
            figure.
          </p>
        </div>
      </div>

      <details className="design-type-study__implementation">
        <summary>
          Implementation notes · Font roles, loading & fallbacks
        </summary>
        <p>
          Shared CSS tokens assign Fraunces to headings, Lexend to body text,
          Outfit to figure labels and IBM Plex Mono to technical text.
          Navigation adds Manrope and Fredoka for the roles shown above. The
          archive loads Newsreader under a local ArchiveNewsreader alias; this
          is the same family, rather than an additional typeface.
        </p>
        <p>
          Variable font files provide the supported weight ranges. IBM Plex Mono
          is supplied as a 400 face, so requesting heavier weights elsewhere can
          produce browser-synthesized bold. Font declarations use swap with
          fallback stacks so text can appear while the web font loads. Serif,
          sans-serif and monospace fallbacks retain the broad role of each face;
          their metrics can still change wrapping and need checking.
        </p>
        <p>
          The hierarchy comparison illustrates our layout reasoning. Its sample
          sizes are local to this study. These visual choices document design
          intent; reading speed, comprehension and accessibility outcomes would
          need separate evaluation.
        </p>
      </details>
    </div>
  );
}
