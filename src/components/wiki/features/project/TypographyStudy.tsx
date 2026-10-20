import "../../../../styles/features/visual-design-typography.css";

const coreFonts = [
  {
    family: "Fraunces",
    fallback: "Georgia, serif",
    role: "01 / Titles & editorial emphasis",
    reason:
      "Fraunces’ contrasting strokes and shaped serifs distinguish headings from the body text. We use it to introduce a section or give a selected statement emphasis.",
  },
  {
    family: "Lexend",
    fallback: "sans-serif",
    role: "02 / Body text & explanations",
    reason:
      "Lexend’s open, rounded forms provide a consistent texture for longer explanations. Keeping the same family across paragraphs, lists and tables connects the different forms of research text.",
  },
];

const supportingFonts = [
  {
    family: "Outfit",
    fallback: "sans-serif",
    weight: 600,
    role: "Figure labels",
    reason:
      "Outfit sets figure numbers and panel letters in compact geometric forms. This marks the figure’s identity before the Lexend caption develops its explanation.",
  },
  {
    family: "Manrope",
    fallback: "sans-serif",
    weight: 600,
    role: "Navigation wordmark detail",
    reason:
      "The small Wiki label beside the CirCure signature uses Manrope. Its simple sans-serif forms suit a supporting label that needs to sit beside a more expressive wordmark.",
  },
  {
    family: "Fredoka",
    fallback: "sans-serif",
    weight: 600,
    role: "Navigation cards & loading cues",
    reason:
      "Fredoka’s full, rounded shapes suit the short destination titles and loading messages that appear alongside Lumi. We keep this playful character in brief interface moments.",
  },
  {
    family: "Newsreader",
    fallback: "Georgia, serif",
    weight: 600,
    role: "Editorial studies & team quotations",
    reason:
      "Newsreader brings a softer, letter-like tone to the design archive and selected team quotations. It also serves as a fallback for Fraunces headings.",
  },
  {
    family: "IBM Plex Mono",
    fallback: "monospace",
    weight: 400,
    role: "Code, references & technical labels",
    reason:
      "IBM Plex Mono uses equal character widths to set code and technical identifiers apart from the surrounding prose. The specimen shows its regular 400 weight.",
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
          <strong>Give each piece of text a clear role.</strong> The typeface
          establishes its character, while size, weight and spacing place it in
          the reading order. Using the same words in each specimen lets us
          compare these choices directly.
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
        <strong>Compare the pair:</strong> the wording, sizes and weights match,
        so the main difference is the typeface. Fraunces’ serifs and stroke
        contrast give the words a different rhythm from Lexend’s more even
        sans-serif forms. On narrow screens, the larger samples scale down.
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
            When the title, explanation and figure note share one size and
            weight, they receive equal emphasis. Their different roles are
            present in the wording, with fewer visual cues about where to begin.
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
            With a hierarchy, the small label gives context before the larger
            title opens the section. Body text then develops the idea, followed
            by a smaller caption for the figure. The roles become visible in the
            arrangement as well as the words.
          </p>
        </div>
      </div>

      <details className="design-type-study__implementation">
        <summary>
          Implementation notes · Font roles, loading & fallbacks
        </summary>
        <p>
          CSS tokens carry these roles across the site: Fraunces for headings,
          Lexend for body text, Outfit for figure labels and IBM Plex Mono for
          technical text. Manrope and Fredoka handle the navigation roles shown
          above, and the archive loads Newsreader as ArchiveNewsreader.
        </p>
        <p>
          Weight choices follow the available font files. Variable fonts supply
          their supported ranges; IBM Plex Mono uses a 400 face. Its specimen
          keeps that regular weight, since a heavier request can make the
          browser synthesize bold.
        </p>
        <p>
          The layout also needs to work before the chosen font arrives. With
          swap, text first appears in a fallback of the same broad category:
          serif, sans-serif or monospace. Because character widths differ
          between families, we check line breaks in both the fallback and loaded
          states.
        </p>
      </details>
    </div>
  );
}
