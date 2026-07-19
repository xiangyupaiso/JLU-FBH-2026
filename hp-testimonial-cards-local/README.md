# CirCure Wiki Local Prototypes

Local prototypes for the CirCure project, Human Practices, Dry Lab, and Wet Lab pages.

The section is designed around iGEM HP logic: stakeholder signal, design
decision, and project impact.

## Run

```bash
python3 -m http.server 5188
```

Open:

```text
http://localhost:5188/index.html
http://localhost:5188/project.html
http://localhost:5188/dry-lab.html
http://localhost:5188/wet-lab.html
```

## Project Description

- `project.html` uses the project-specific **The Living Ring** visual system:
  a circRNA hero, a scroll-reactive TNBC heterogeneity field, a five-stage
  ring-building narrative, one continuous mechanism drawing, and an
  experiment-led evidence ledger.
- The third-round refinement removes glass navigation, marketing gradients,
  repeated dashboard chips, and uniformly oversized headings. Figure numbers,
  revision marks, serif reading text, a DR-01 design record, and five distinct
  hand-drawn SVG sketches make the page read more like a team research record.
- The Project page deliberately avoids the previous landing-page card grid.
  Long-form scientific content returns to a restrained editorial layout with
  a sticky reading outline, margin notes, explicit claim boundaries, and a
  direct route into Integrated Human Practices.
- `PROJECT_PAGE_RESEARCH.md` records the official iGEM criteria, reviewed team
  examples, reusable layout patterns, and the reasoning behind the page design.
- The scientific content distinguishes design rationale, planned validation,
  and claims that are not yet supported. Replace prototype language with team
  constructs, results, citations, and Registry links before publication.

## Dry Lab

- `dry-lab.html` keeps the Human Practices paper, ink, wine, and teal visual
  language while switching to a paper-like model manuscript with a sticky
  outline, numbered figures/tables/equations, and restrained technical folds.
- `dry-lab-paper.css` and `dry-lab-paper.js` isolate the manuscript layout and
  reading interactions from the Human Practices implementation.
- `DRY_LAB_RESEARCH.md` records the official 2022–2025 Best Model results,
  representative winner/nominee page audits, judging criteria, and the design
  rationale behind the manuscript structure.
- Technical panels are evidence slots, not illustrative results. Replace them
  with team data, equations, parameters, validation, decisions, and release
  links before publication.

## Human Practices notes

- Single-file prototype in `index.html`.
- `HP_BEST_PRACTICES_RESEARCH.md` records the official 2022–2025 Best
  Integrated Human Practices winners and nominees, representative page audits,
  recurring judging patterns, and the rationale for the latest optimization.
- `HP_FIELD_KIT.md` is a reusable stakeholder, consent, decision-ledger,
  conflict, return-loop, and publication-gate template for future teams.
- The opening is deliberately concise: thesis, judge quick view, then the visual
  impact story. The five-layer decision proof table is preserved later in the
  page with the full method and evidence content.
- Top section is a phased data snapshot plus Webflow-style horizontal impact cards.
- The full HP timeline appears below as scroll-revealed cards with expandable modal notes,
  inspired by timeline-style HP pages and "Read More" interview entries.
- The analysis dossier uses a sticky left outline, progress bar, right-side content, images,
  and accordion details.
- Uses the generated project-local image `assets/hp-domain-contact-sheet.png`
  for consistent domain-specific backgrounds.
- Content is placeholder HP evidence and should be replaced with real interview
  notes, consent-safe quotes, and design log links.
