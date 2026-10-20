import { HomeImage, HomeSvgImage } from "./HomeArtwork";
const dnaBoard = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-dna-board.webp";
const mrnaBoard = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-mrna-board.webp";
const circRnaBoard = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-circrna-board.webp";
const proteinBoard = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-protein-board.webp";
const dnaLabel = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-dna-label.webp";
const mrnaLabel = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-mrna-label.webp";
const circRnaLabel = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-circrna-label.webp";
const proteinLabel = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-protein-label.webp";
const dnaIllustration = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-dna-illustration.webp";
const mrnaIllustration = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-mrna-illustration.webp";
const proteinIllustration = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-protein-illustration.webp";
const ring = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-ring.webp";
const title = "https://static.igem.wiki/teams/6056/wiki/files/pages/home/vaccine-candidates-title.webp";

const candidates = [
  {
    key: "dna",
    board: dnaBoard,
    label: dnaLabel,
    labelWidth: 52,
    illustration: dnaIllustration,
    detail: "DNA vaccines",
  },
  {
    key: "mrna",
    board: mrnaBoard,
    label: mrnaLabel,
    labelWidth: 74,
    illustration: mrnaIllustration,
    detail: "Linear mRNA vaccines",
  },
  {
    key: "circrna",
    board: circRnaBoard,
    label: circRnaLabel,
    labelWidth: 78,
    illustration: null,
    detail: "circRNA vaccines",
  },
  {
    key: "protein",
    board: proteinBoard,
    label: proteinLabel,
    labelWidth: 78,
    illustration: proteinIllustration,
    detail: "Protein- and\ncell-based vaccines",
  },
] as const;

export function HomeVaccineCandidates() {
  return (
    <div className="home-molecule-gallery__artwork">
      <HomeImage
        className="home-molecule-gallery__title"
        src={title}
        alt=""
        aria-hidden="true"
        decoding="async"
      />
      <div className="home-molecule-gallery__choices" aria-hidden="true">
        {candidates.map((candidate, index) => (
          <div
            className={`home-molecule-gallery__card${index === 2 ? " home-molecule-gallery__card--chosen" : ""}`}
            data-gallery-card={index}
            key={candidate.key}
          >
            <div className="home-molecule-gallery__card-visual">
              <svg
                className="home-molecule-gallery__card-art"
                viewBox="0 0 574 1186"
                aria-hidden="true"
              >
                <HomeSvgImage
                  href={candidate.board}
                  width="574"
                  height="1186"
                  data-gallery-ink=""
                />
                <HomeSvgImage
                  href={candidate.label}
                  x={`${(100 - candidate.labelWidth) / 2 + (candidate.key === "circrna" ? 1.5 : 0)}%`}
                  y="18%"
                  width={`${candidate.labelWidth}%`}
                  height="20%"
                  preserveAspectRatio="xMidYMid meet"
                  data-gallery-layer="labels"
                />
                {candidate.illustration && (
                  <HomeSvgImage
                    href={candidate.illustration}
                    x={index === 3 ? "11%" : "17%"}
                    y="45%"
                    width={index === 3 ? "78%" : "66%"}
                    height="40%"
                    data-gallery-layer="symbols"
                    data-gallery-symbols=""
                  />
                )}
              </svg>
              {candidate.key === "circrna" && (
                <svg
                  className="home-molecule-gallery__ring"
                  data-gallery-ring=""
                  viewBox="0 0 436 436"
                  style={{
                    left: "13%",
                    top: "47%",
                    width: "74%",
                    aspectRatio: "1",
                  }}
                  aria-hidden="true"
                >
                  <HomeSvgImage href={ring} width="436" height="436" />
                </svg>
              )}
            </div>
            <span
              className="home-molecule-gallery__caption"
              data-gallery-layer="labels"
            >
              {candidate.detail}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
