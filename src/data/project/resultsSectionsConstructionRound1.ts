/** Verbatim Results manuscript data; Markdown escapes and typography only are resolved. */
import type { WikiSection } from "../../components/wiki/wikiPageTypes";
import { resultsFigure } from "./resultsAssets";
export const resultsSectionsConstructionRound1: WikiSection[] = [
  {
    id: "results-building",
    index: "04",
    kicker: "",
    navLabel: "Construction & QC",
    title: "Building the Vaccine: Construction and Quality Control",
    summary: "",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We designed 13 single-epitope circRNA constructs from the fifteen peptides that left the dry lab and ordered the corresponding plasmids from a commercial gene-synthesis supplier for Round 1 screening. Each epitope-coding sequence sits in a shared backbone between the BamHI and XhoI sites, in frame downstream of the tPA signal sequence and upstream of the 4×mC3dP28 block (Experiments 1.1). We linearised and purified the plasmids for T7 in vitro transcription, removed the DNA template with DNase I and purified the precursor RNA before circularisation through the T4 td permuted intron. After RNase R digestion, we assessed circularity by RT-qPCR on TROP2-CTL1 as the representative Round 1 preparation, reading a circular channel against a residual-linear channel.",
        ],
      },
      {
        type: "subheading",
        id: "results-2-1",
        index: "4.1",
        title:
          "4.1 Epitope plasmid construction: the 13-construct Round 1 library",
        anchorIds: ["results-section-4-1"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Set out the construct library that Round 1 was run on: how many constructs, from which antigens, and what they share. Every between-construct comparison in Section 5 depends on these 13 plasmids differing only in their epitope cassette.",
          "**Design & Readout:** The 13 single-epitope plasmids were ordered from a commercial gene-synthesis supplier and supplied endotoxin-free. Each plasmid was linearised and purified before use as a template for T7 in vitro transcription (Experiments 1.1).",
          "**Result:**",
        ],
      },
      {
        type: "table",
        caption: "Table 8. The Round 1 construct library.",
        headers: ["Target antigen", "Single-epitope constructs", "Subtotal"],
        rows: [
          ["TROP2", "CTL1, CTL2, CTL3", "3"],
          ["B7-H4", "CTL1, CTL2", "2"],
          ["Nectin-4", "CTL1, CTL2, CTL3", "3"],
          ["LIV-1", "CTL1, CTL2, CTL3, CTL4, CTL5", "5"],
          ["**Total**", "", "**13**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Epitope numbering follows the CTL series assigned at construction; how the dry-lab screen's 15 sequences became these 13 constructs is set out in Experiments 1.1.",
          "**Interpretation:** The 13 constructs share one backbone and one preparation route, and differ only in a short epitope cassette of near-identical length. That is what makes the Round 1 screen in Section 5 a comparison between epitope sequences rather than a collection of unrelated measurements.",
          "**Limitations:** B7-H4 entered Round 1 with only two candidate epitopes, so for that antigen the screen had nothing to select between — see §4.4.",
        ],
      },
      {
        type: "subheading",
        id: "results-2-2",
        index: "4.2",
        title:
          "4.2 Circularity of the Round 1 material: RT-qPCR quantification on a representative construct",
        anchorIds: ["results-section-4-2"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Confirm that the covalently closed circular species dominates the product of in vitro transcription and circularisation, and fix the RT-qPCR input volume used for all subsequent circularity measurements.",
          "**Design & Readout:** The thirteen Round 1 plasmids share one backbone and differ in a short epitope cassette. TROP2-CTL1 was measured as the representative preparation; the remaining twelve were not quantified individually. Following transcription, self-splicing circularisation and RNase R treatment, the treated preparation was reverse-transcribed for RT-qPCR. The circular channel used **SJ3910F + SJ3909R**, and the residual-linear channel used **SJ3911F + SJ3909R**, which detects the assayed precursor-associated interval. Each channel was measured at **2, 4 and 6 µL cDNA input**, with **three technical wells per input**, giving nine wells per channel and eighteen target-assay wells in total. For each well i, ΔCq_i = Cq(residual-linear)_i − Cq(circular)_i, and the circular fraction of that well is F_i = 100 ÷ (1 + 2^−ΔCq_i) per cent. Circular fractions are reported as the mean ± SD of F_i over the three wells at each input, and the circular: linear ratio as 2 raised to the mean ΔCq (Experiments 1.1).",
          "**Result:**",
        ],
      },
      {
  "type": "table",
  "caption": "Table 9. Circular fraction of the purified TROP2-CTL1 preparation by RT-qPCR.",
  "headers": [
    "Input volume",
    "ΔCq (linear − circular)",
    "Circular: linear",
    "Circular fraction"
  ],
  "rows": [
    [
      "2 µL",
      "3.70 ± 0.02",
      "13.0: 1",
      "92.85 ± 0.08%"
    ],
    [
      "**4 µL**",
      "**5.02 ± 0.37**",
      "**32.5: 1**",
      "**96.96 ± 0.70%**"
    ],
    [
      "6 µL",
      "4.72 ± 0.45",
      "26.4: 1",
      "96.25 ± 1.14%"
    ]
  ]
},
      {
        type: "prose",
        paragraphs: [
          "**Interpretation: The circular species dominates the preparation at every input volume tested, including the lowest.** The 4 µL and 6 µL arms return closely matching estimates — 96.96% and 96.25%, 0.71 percentage points apart — placing the circular: linear ratio at roughly **30: 1**. The 2 µL arm returns 92.85%, about four percentage points below both. **4 µL was adopted as the working input for all subsequent circularity measurements**, including the combined vaccine release assay in §4.5, as the lower of the two inputs whose estimates agree. The choice rests on the agreement between those two arms across the three inputs tested. The 2 µL measurement is reported in full above and is set aside only as an input volume for later work.",
          "**Limitations and scope:**",
          "**One construct, not thirteen.** Circularity was measured on **TROP2-CTL1 alone**. The justification is that all thirteen constructs share the same backbone, the same T4 *td* permuted-intron chemistry and the same preparation workflow, and differ only in a short cassette; the inference is reasonable, but it is an inference. **TROP2-CTL1 is this round's representative preparation, so the circular fraction above stands for the batch on the strength of the shared backbone and route. Running the same assay on each construct would give a per-preparation figure.** No per-construct comparison of circularisation efficiency is available, and none is made anywhere on this page. This is also one of the reasons TROP2-CTL1 was carried forward as a Round 2 comparator (§4.4): it is the only single-epitope construct with its own circularity record.",
          "**What the figures describe.** The RNase R step removes linear precursor rather than converting it into circles, so these values characterize the composition of the material used downstream. Since the unpurified reaction was not measured, the one-step yield of the circularisation condition itself remains unquantified. A small amount of highly structured linear RNA can survive digestion, so the circular fraction is best read as a close upper estimate. The two channels have not been calibrated against standards of known concentration, so the base-2 calculation gives an estimate of the circular fraction rather than a molar ratio.",
          "**Structural confirmation.** Sanger sequencing across the back-splice junction, which reads covalent closure directly, was performed on the **combined vaccine** (§4.5). The Round 1 material rests on the RT-qPCR evidence above.",
        ],
      },
    ],
  },
  {
    id: "results-round1",
    index: "05",
    kicker: "",
    navLabel: "Round 1",
    title: "Round 1: Screening Single-Epitope Immunogenicity",
    summary: "",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "We screened all 13 constructs for immunogenicity and used the results to choose the eight epitopes that went into the combined vaccine. Each single-epitope circRNA was electroporated separately into monocyte-derived dendritic cells and co-cultured with autologous T cells at **DC : T = 1: 20**, then read out three independent ways — **IFN-γ ELISpot**, **Calcein-AM killing of K562**, and **CD8⁺CD69⁺ flow cytometry**. This section reports those three datasets and the design decisions drawn from them.",
        ],
      },
      {
        type: "subheading",
        id: "results-3-1",
        index: "5.1",
        title: "5.1 Round 1 IFN-γ ELISpot — the primary criterion",
        anchorIds: ["results-section-5-1"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Count, at single-cell resolution, the IFN-γ-secreting T cells each construct elicits in the DC–T co-culture. This is our primary selection criterion.",
          "**Design & Readout:** Round 1 ELISpot across all 13 constructs, reported as **SFC per 1×10⁵ cells**, one determination per construct. **Controls: none — neither negative nor positive.** No empty-vector or antigen-free well was seeded and the kit's PHA well was not run, so this round is a **pure between-construct comparison** with no floor and no plate-functionality check (Experiments 2.3).",
          "**Result:**",
        ],
      },
      resultsFigure("fig13"),
      {
        type: "prose",
        paragraphs: [
          "Numbers above each well are **raw SFC per 10⁵ cells — no background has been subtracted**, because no background well was run.",
        ],
      },
      {
        type: "table",
        caption:
          "Table 10. Round 1 ELISpot, **raw** SFC per 10⁵ cells across all 13 constructs.",
        headers: ["Target", "CTL1", "CTL2", "CTL3", "CTL4", "CTL5"],
        rows: [
          ["TROP2", "**271**", "**217**", "52", "—", "—"],
          ["B7-H4", "**143**", "**82**", "—", "—", "—"],
          ["Nectin-4", "**74**", "**97**", "51", "—", "—"],
          ["LIV-1", "47", "**118**", "**78**", "73", "58"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          'Values are single determinations. "—" marks a position that does not exist — that antigen yielded fewer constructs — not a missing measurement. Bold marks the two epitopes of each antigen carried into the combined vaccine (§4.4).',
          "**Interpretation:** Three observations matter.",
        ],
      },
      {
        type: "list",
        ordered: true,
        start: 1,
        items: [
          "**The 47–271 spread is what the in silico stage could not resolve.** Every one of these 13 sequences had already cleared the dry-lab filter, yet the filter could not rank them: nothing in the prediction scores distinguished LIV1-CTL1, which returned **47 SFC**, from TROP2-CTL1, which returned **271** — a **5.8-fold** gap. Without the wet-lab screen all 13 would have entered the vaccine at equal weight.",
          "**TROP2-CTL1 (271) and CTL2 (217) lead by a clear margin**, and both belong to the same antigen. This directly determined our choice of TROP2 as the **representative antigen** and as the target for the in vivo model.",
          '**No antigen is uniformly immunogenic — every one of the four contains both a stronger and a weaker epitope.** The within-antigen spread is **5.2-fold for TROP2** (271 → 52), **1.7-fold for B7-H4** (143 → 82), **1.9-fold for Nectin-4** (97 → 51) and **2.5-fold for LIV-1** (118 → 47). TROP2 is the clearest case: it supplies the strongest epitope of the whole panel (271) and one of the weaker ones (52). **Selection therefore has to be made epitope by epitope, not antigen by antigen** — choosing "the best antigen" and taking its whole repertoire would have carried weak sequences into the vaccine alongside strong ones. This is the observation that set the Round 2 selection rule (§4.4).',
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**Limitations and scope:**",
          "**What this round was built to answer.**",
          "Round 1 is a ranking screen, laid out to put 13 constructs in order so the strongest could enter the cassette. Every construct shares the same backbone, electroporation and donor cells and differs only in epitope sequence, so an internal comparison answers that question. No empty-vector, antigen-free or PHA well was seeded, so the SFC values order the candidates against one another; the Round 2 plate adds the empty-vector baseline. A team that wants its first-round counts to be readable against background can seed a vector well and an antigen-free well on the first plate.",
          "**What the table still supports.** The ordering and the relative magnitudes, from TROP2-CTL1 at 271 SFC down to LIV1-CTL1 at 47. The ELISpot ranking drove the Round 2 design. The K562 assay in §4.2 confirmed measurable killing capacity but did not reproduce the ELISpot ranking across the panel (Spearman ρ = 0.43, P = 0.14). The CD8⁺CD69⁺ flow results in §4.3 supported the CTL1 > CTL2 ordering for the two TROP2 constructs tested.",
          "**This gap was closed in Round 2**, whose Blank group is an **empty-vector circRNA** control (see the opening of Section 5) — which is why every quantitative attribution on this page comes from Round 2 and later, never from Round 1.",
        ],
      },
      {
        type: "subheading",
        id: "results-3-2",
        index: "5.2",
        title: "5.2 Calcein-AM killing assay (K562)",
        anchorIds: ["results-section-5-2"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Round 1 was originally designed to assess immunogenicity by ELISpot alone. Advice received during Human Practices was that IFN-γ secretion does not by itself establish that the primed cells can kill, and that a cytotoxicity assay should be added. We added a Calcein-AM killing assay across all 13 constructs, using **K562**, the standard reference target for this assay format. This section reports what that assay settled and what it did not.",
          "**Design & Readout:** Calcein-AM release from K562 at **E: T 80: 1**, all 13 constructs assayed in parallel, **3 replicate wells** per construct on one plate — technical replicates, not biological ones (Experiments 2.4).",
          "**Result:**",
        ],
      },
      resultsFigure("fig14"),
      {
        type: "table",
        caption: "Table 11. Round 1 killing of K562 at E: T 80: 1.",
        headers: ["Construct", "Killing (%)", "Construct", "Killing (%)"],
        rows: [
          [
            "**TROP2-CTL1**",
            "**44.15 ± 2.61**",
            "Nectin4-CTL2",
            "34.83 ± 0.47",
          ],
          [
            "**TROP2-CTL2**",
            "**42.15 ± 1.16**",
            "Nectin4-CTL3",
            "34.00 ± 0.77",
          ],
          ["TROP2-CTL3", "34.80 ± 0.37", "LIV1-CTL1", "32.85 ± 0.18"],
          ["B7H4-CTL1", "35.79 ± 2.30", "LIV1-CTL2", "31.37 ± 1.52"],
          ["B7H4-CTL2", "34.97 ± 0.28", "LIV1-CTL3", "33.33 ± 1.65"],
          ["Nectin4-CTL1", "37.53 ± 1.89", "LIV1-CTL4", "37.57 ± 0.66"],
          ["", "", "**LIV1-CTL5**", "**41.53 ± 2.84**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Killing is reported as %, mean ± SD, **n = 3 replicate wells**, across all 13 constructs. Statistics are given in the Interpretation.",
          "**Every one of the 13 constructs cleared the gate.** Killing runs from **31.37% to 44.15%**, the three highest being **TROP2-CTL1 (44.15%), TROP2-CTL2 (42.15%) and LIV1-CTL5 (41.53%)**.",
          "**Interpretation:** Three things follow from this dataset.",
          "First, every construct produced effector cells that killed. Each of the 13 primed T-cell populations lysed a substantial fraction of K562 targets, so no preparation came out of the co-culture without cytotoxic activity. That matters for how §4.1 is read: a low ELISpot count is not explained by a preparation with no cytotoxic activity at all.",
          "**Second, the measurement is precise.** The three replicate wells agree closely — mean within-construct SD **1.28 percentage points (CV 3.4%)**, pooled SD **1.56 points** — and they agree on the ordering (pairwise **Spearman ρ = 0.81 / 0.85 / 0.96**, all P < 0.001). A one-way ANOVA across the 13 constructs gives **F(12,26) = 18.8, P = 8.1 × 10⁻¹⁰**, and **85.6% of the total variance sits between constructs rather than between wells** (ICC = 0.856). The Round 1 readout pipeline is therefore reproducible within the plate; these are measurements, not noise.",
          "**Third, the result identified K562 as the wrong target for this question.** Killing sits in a narrow **1.41-fold band** across all 13 constructs, while ELISpot over the same constructs spans **5.8-fold**. K562 is MHC-I negative and carries none of the four target antigens, so it cannot distinguish between T-cell populations primed against different epitopes: what it reports is baseline, non-antigen-restricted killing capacity. The assay therefore answered the question that prompted it — the primed cells do kill — without being able to answer it epitope by epitope. That is the observation that set the Round 2 target: **MDA-MB-231, HLA-A*02:01⁺ and TROP2⁺** (§4.4, §5.6).",
          "**The two readouts measure different quantities, and the data show it directly.** Across the 13 constructs the rank correlation between ELISpot SFC and K562 killing is **Spearman ρ = 0.43, P = 0.14 — no correlation**. Two constructs show the separation most clearly:",
        ],
      },
      {
        type: "table",
        caption:
          "Table 12. Two constructs whose ranking differs between the two readouts.",
        headers: ["Construct", "ELISpot rank", "K562 killing rank"],
        rows: [
          ["LIV1-CTL2", "4th of 13 (118 SFC)", "**13th of 13** (31.37%)"],
          ["LIV1-CTL5", "10th of 13 (58 SFC)", "**3rd of 13** (41.53%)"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Selecting on K562 killing would have given LIV-1 **CTL5 and CTL4 in place of CTL2 and CTL3**, so **LIV1-CTL2 — the fourth-strongest epitope of the whole panel at 118 SFC — would have given way to LIV1-CTL5 at 58 SFC**. The Round 2 cassette therefore follows the ELISpot ranking (§4.4), with this assay in the gating role set out above. Two considerations decide that division of labor.",
          "**What each target can report.** K562 carries neither MHC-I nor any of the four target antigens, so its killing value is insensitive to which epitope the T cells were primed against; the limitation sits in the target cell, and adding controls would not remove it. ELISpot reads IFN-γ release on re-encounter with the DC presenting that epitope, which is the readout the Round 2 selection required.",
          "**How much there is to select on.** Killing spans **1.41-fold** across the 13 constructs, with within-construct SDs of **0.18–2.84 percentage points**, so most neighboring pairs sit within a few standard deviations of one another. ELISpot spans **5.8-fold** over the same constructs. Selecting on the narrower readout would have meant selecting largely on measurement noise.",
          "**Limitations and scope:**",
          "**What this assay is scoped to answer.** K562 is **MHC-I negative** and **carries none of our four target antigens**, so it is killed largely through NK-like, non-MHC-restricted mechanisms (Tremblay-McLean et al., 2019). It therefore reports the overall killing capacity of the effector population rather than antigen specificity. Antigen specificity is addressed in §5.6, on MDA-MB-231 (HLA-A*02:01⁺, TROP2⁺), a target chosen on the strength of this result. We do not read the present dataset as evidence that the epitopes induced specific killing.",
          "**What ρ = 0.43 reflects.** The two readouts measure different things, and the target-cell biology predicts that they diverge: an MHC-I-negative target reports general effector capacity, while specificity requires a target with the correct HLA restriction and the correct antigen (§5.6). Close tracking between the two would have indicated that the ELISpot signal was largely non-specific effector activity.",
          "**The precision established here is within-plate.** With 3 wells on a single plate and no biological replication, the 1–3 percentage-point gaps between individual constructs are not claimed to be biologically meaningful, and no epitope was selected or rejected on them. Adding **three independent experiments with fresh effector-cell batches** would put those gaps on a testable footing; it is the cheapest available upgrade to this section.",
        ],
      },
      {
        type: "subheading",
        id: "results-3-3",
        index: "5.3",
        title:
          "5.3 Flow validation of TROP2 epitopes: CD8⁺CD69⁺ early activation",
        anchorIds: ["results-section-5-3"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Provide an **independent, mechanistically earlier** line of functional evidence for the ELISpot conclusion: did TROP2-CTL1 and CTL2 really trigger TCR signaling in CD8⁺ T cells?",
          "**Design & Readout:** CD8⁺CD69⁺ double-positive events within the FSC/SSC lymphocyte gate by multicolor flow, for TROP2-CTL1 and TROP2-CTL2 (Experiments 2.5).",
          "**Result:**",
        ],
      },
      resultsFigure("fig15"),
      {
        type: "prose",
        paragraphs: [
          'This is a **two-level nested gating**: the left panel of each pair is the FSC/SSC lymphocyte gate (red ellipse), whose percentage is that gate as a fraction of **all acquired events**; the right panel shows CD8 (PE) vs CD69 (PerCP) **within** that gate, with the green box marking the double-positive population, whose denominator is the lymphocyte gate rather than all events. The two numbers belong to different levels and **do not constitute a "before → after" change**.',
        ],
      },
      {
        type: "table",
        caption: "Table 13. Round 1 CD8⁺CD69⁺ frequencies.",
        headers: ["Construct", "Lymphocyte gate", "CD8⁺CD69⁺ (within gate)"],
        rows: [
          ["TROP2-CTL1", "7.33%", "**31.07%**"],
          ["TROP2-CTL2", "8.18%", "25.39%"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**Interpretation:** The ranking by CD8⁺CD69⁺ (CTL1 > CTL2) **agrees in direction** with the ELISpot ranking (271 > 217). Two mechanistically independent readouts — one measuring the **earliest TCR signaling event**, the other **downstream effector cytokine secretion** — converge on the same ranking, with TROP2-CTL1 above TROP2-CTL2 in this round.",
          "**Limitations:** Only the two TROP2 epitopes were compared, not the full panel; and the same single-donor constraint applies.",
        ],
      },
      {
        type: "subheading",
        id: "results-3-4",
        index: "5.4",
        title: "5.4 Round 1 → Round 2: what we learned (Learn → Design)",
        anchorIds: ["results-section-5-4"],
      },
      {
        type: "prose",
        paragraphs: [
          "This is the pivot point of our engineering cycle. The three Round 1 datasets together produced three explicit design inputs:",
        ],
      },
      {
        type: "table",
        caption:
          "Table 14. Round 1 observations and resulting Round 2 design changes.",
        headers: ["Observation", "Our reading", "Resulting design change"],
        rows: [
          [
            "SFC spanning **47–271** across the 13 constructs",
            "In silico prediction **cannot substitute** for immunogenicity validation",
            "Only wet-lab-validated strong epitopes carried forward",
          ],
          [
            "**B7-H4 contributed only two** constructs, against three to five for each other antigen",
            "If all four antigens are to be **equally represented** in the cassette, the per-antigen ceiling is **two**",
            "Take each antigen's **two highest-SFC epitopes** — eight in all",
          ],
          [
            "K562 killing spanned only **1.41-fold** across the 13 constructs and did not correlate with ELISpot (ρ = 0.43)",
            "A **MHC-I-negative, antigen-negative** target cannot resolve epitopes; a killing assay needs a target carrying both the antigen and the matching HLA type",
            "Round 2 switched to **MDA-MB-231** (HLA-A*02:01⁺, TROP2⁺)",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**Why insist on equal representation of all four antigens rather than simply taking the eight highest-SFC epitopes overall.** Triple-negative breast cancer is antigenically heterogeneous: target expression varies between cells within one tumor, and sustained pressure on a single antigen invites antigen-loss escape (Eroles et al., 2026). Covering four antigens in parallel hedges against that. It does **not** broaden population coverage — **every epitope in this project is HLA-A*02:01-restricted, so population coverage is bounded by that restriction and is independent of how many antigens are included** (see §2.2.1, Limitations and scope).",
          "The cost of the rule can be stated exactly, and it turns out to be **zero**. Selecting the eight highest-SFC epitopes without regard to antigen gives **exactly the same eight** (271, 217, 143, 118, 97, 82, 78, 74 — total 1080 SFC): on this dataset the equal-representation rule and the pure ranking rule coincide. The rule would only have bitten one place further down — the ninth epitope by SFC is LIV1-CTL4 at **73**, one point below Nectin4-CTL1 at **74** — so the two criteria were separated here by a single SFC count. We state this because on this dataset the rule did not have to do any work.",
          "Two epitopes per antigen rather than one builds in redundancy at the **epitope** level: processing and presentation of any single epitope vary between individuals and can be evaded by a point mutation, so a second epitope from the same antigen provides a fallback. **We did not test this** — no one-epitope-per-antigen control cassette was ever built.",
          "On this basis we designed the **combined multi-epitope vaccine plasmid**, **pCirCure-circMEV (5267 bp)**, and ordered the complete construct from a commercial gene-synthesis supplier. The two highest-SFC constructs from each antigen were retained: **TROP2-CTL1/CTL2, B7H4-CTL1/CTL2, Nectin4-CTL1/CTL2 and LIV1-CTL2/CTL3**. **Nectin4-CTL1** **is the merged fragment** FQARLRLRVLVPPL, spanning the overlapping predicted epitopes FQARLRLRV and RLRVLVPPL (§2.2.2), so the cassette contains **nine predicted epitopes in eight fragments**. Flexible linkers separate the fragments, and the reading frame was checked across every junction in the design. Five preparations were made for Round 2: **empty vector, TROP2-CTL1, TROP2-CTL2, TROP2-CTL1+2 and combined**. The corresponding commercially supplied plasmids were linearised and purified for T7 in vitro transcription. After DNA-template removal and RNA purification, the precursor RNAs were circularised and treated with RNase R. The release data are in §4.5.",
          "**Two elements of this architecture come from the literature rather than from our own data.** The **flexible linkers** and the **proteasomal-cleavage-guided ordering** are standard practice in multi-epitope vaccine design (Nielsen et al., 2005; Zhou et al., 2025): linkers are intended to prevent junctional neo-epitopes and to preserve cleavage at each epitope boundary. We adopted both, and confirmed computationally that the chosen linkers introduce no novel predicted epitopes — but **we never built a linker-free or differently-ordered version of this cassette, so we have no experimental measurement of what either element contributes.** What our own data do establish is the *selection rule* — which epitopes, and how many per antigen — and that rule is traceable to Table 10. Where a design element rests on the literature rather than on our bench, this page says so.",
          "The final plasmid is composed as follows. The epitope cassette lies between **BamHI (1600) and XhoI (1957)**, with the eight fragments joined by flexible linkers in the order **TROP2-CTL1 → TROP2-CTL2 → B7H4-CTL1 → B7H4-CTL2 → Nectin4-CTL1 (merged fragment) → Nectin4-CTL2 → LIV-1-CTL2 → LIV-1-CTL3**. Upstream lie the tPA signal/pro sequence and a human rhinovirus IRES; downstream, in order, a GS linker, the 4×mC3dP28 block (mC3dP28-1 to -4), the MITD membrane-targeting signal, a FLAG tag, the full HBA1 3′ UTR and a polyA25 spacer (Kreiter et al., 2008; Bergmann-Leitner et al., 2007). Circularisation is mediated by the **T4 td permuted intron** with inner and outer homology arms; transcription is driven by the **T7 promoter**.",
        ],
      },
      resultsFigure("fig16"),
      {
        type: "subheading",
        id: "results-3-5",
        index: "5.5",
        title:
          "5.5 The combined batch: release testing and direct proof of circularity",
        anchorIds: ["results-section-5-5"],
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim:** Five Round 2 preparations were made from commercially supplied plasmids: empty vector, TROP2-CTL1, TROP2-CTL2, TROP2-CTL1+2 and combined. This section reports the target-fragment PCR gel for the four epitope-encoding constructs, RT-qPCR on the representative combined preparation, and Sanger sequencing of its back-splice junction. The empty-vector construct is not shown in the PCR gel. The RNA measurements describe the RNase R-treated combined preparation used in the Round 2 functional assays, the stability experiment and the in vivo study.",
          "**Design & Readout:** The circRNA preparations were made from commercially supplied plasmids by restriction linearisation and DNA purification, followed by T7 in vitro transcription, DNase I treatment, RNA purification, circularisation and RNase R digestion. The estimated circular fraction was measured in the representative combined preparation at the **4 µL cDNA input selected in §3.2**, with three technical wells per target assay. The circular channel used **SJ3910F + SJ3909R**, and the residual-linear channel used **SJ3911F + SJ3909R**. Fractions were calculated from the two channels' target Cq values, using the formula in §3.2. For combined, an **RT-PCR product spanning the back-splice junction** was submitted for Sanger sequencing as a separate junction-sequence check (Experiments 3.1). The target-fragment PCR gel separately verified the four epitope-encoding plasmids; those PCR products were not used as transcription templates.",
          "**Result:**",
        ],
      },
      resultsFigure("fig17"),
      {
        type: "prose",
        paragraphs: [
          "The lanes are labeled TROP2-CTL1, TROP2-CTL2, TROP2-CTL1+2 and combined. The marker is labeled at 500, 750 and 1000 bp. The sample bands are broad and intense, with trailing and material retained near the wells, which limits assessment of PCR-product size and homogeneity. These bands document amplification of the target fragments. The transcription templates were prepared separately by restriction linearisation and purification of the corresponding plasmids (Experiments 3.1)",
        ],
      },
      {
        type: "table",
        caption:
          "Table 15. Circularity of the purified combined vaccine batch.",
        headers: ["Measure", "Value"],
        rows: [
          ["ΔCq (linear − circular)", "7.19 ± 0.39"],
          ["Circular : linear", "**145.7: 1**"],
          ["Circular fraction", "**99.30 ± 0.17%**"],
        ],
      },
      resultsFigure("fig18"),
      {
        type: "prose",
        paragraphs: [
          "The sequence read is **CTCAGTAGATGTTTTCTTGGGT : CTACCGTTTAATATTGCGTCATAT**: the marker indicates the ligation site, with the 3′ sequence of the precursor to its left and the 5′ sequence to its right, joined head-to-tail in the circular molecule. Both flanks are the retained segments of the T4 *td* permuted intron, at positions 2714–2735 and 723–746 of pCirCure-circMEV, so the junction read here is the one the construct predicts. The flat baseline, single sharp peaks, and absence of overlapping peaks either side of the junction indicate a **homogeneous single sequence** rather than a mixture of splice products.",
          "**Interpretation:** The purified combined vaccine batch is **99.3% circular**, with the circular species roughly **146-fold** more abundant than the linear precursor (mean ± SD of 3 technical wells at 4 µL input). The batch clears the ≥ 90% release criterion set in Experiments 3.1 with substantial margin and clears the ≥ 90% release criterion set in Experiments 3.1. Each round's figure stands for its own representative preparation; the two are not a paired comparison. Covalent closure is confirmed independently by the back-splice junction sequence above, giving this construct two lines of evidence for circularity.",
          "**Limitations and scope:**",
          "**The scope of the BSJ result.** BSJ sequencing was performed on the **combined vaccine**, the construct that goes into every Round 2 and in vivo experiment. The 13 Round 1 constructs (§3.1–3.2, §4.1–4.3) and the other preparations of this batch rest on the RT-qPCR evidence together with the fact that they were made by the same T4 *td* self-splicing chemistry from the same backbone — an inference from shared chemistry rather than a measurement on each preparation.",
          "**The scope of the circular-fraction measurement.** Round 1 quantification used TROP2-CTL1 as **the representative preparation** (§3.2). Here, the combined preparation was measured at 4 µL input in 3 technical replicate wells. The other Round 2 preparations, including the empty vector, followed the same route from commercially supplied plasmids through linearisation, DNA purification, transcription, circularisation and RNase R digestion. The combined value was used as the representative batch release measurement; the other preparations were not quantified individually. Empty-vector circRNA supplies the Blank control in Section 5 and the empty-vector arm of the in vivo study in Section 8.",
          "**What Table 15 describes.** The circular fraction is measured on the RNase R–purified product. Purification removes the molecules that failed to circularise rather than rescuing them, so Table 15 describes the composition of the **released material**. The one-step performance of the circularisation chemistry is a separate quantity: Mg²⁺ concentration, temperature and digestion time were adopted empirically, and titrating them as a gradient is process work for a future preparation (Experiments 3.1, note 3).",
        ],
      },
    ],
  },
];
