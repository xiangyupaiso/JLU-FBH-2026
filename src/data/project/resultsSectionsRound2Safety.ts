/**
 * Results page — Part III: Round 2 (§4) and Safety (§5).
 *
 * Same contract as the other parts: pure data, manuscript copy verbatim.
 */

import type { WikiSection } from "../../components/wiki/wikiPageTypes";
import { getResultsImage, resultsAssets } from "./resultsAssets";

export const resultsSectionsRound2Safety: WikiSection[] = [
  {
    id: "results-round2",
    index: "06",
    kicker: "",
    navLabel: "Round 2 validation",
    title: "IV. Round 2: Functional Validation of the Combined Vaccine",
    summary: "",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "The Round 1 screen showed that the selected constructs differed in their measured immune responses, providing an experimental basis for choosing epitopes for the Combined vaccine. The selected sequences were assembled into the multi-epitope construct, and its RNA preparation was assessed before functional testing. We next tested the **Combined vaccine** against three comparators — empty vector, TROP2-CTL1 and TROP2-CTL2, plus the dual-epitope TROP2-CTL1+2 — along the whole immune chain, one link at a time: **DC maturation (CD80/CD86)** → **antigen translation (anti-FLAG Western blot)** → **T-cell activation and co-stimulation (CD69, CD28)** → **effector-memory differentiation (CD45RO⁺CCR7⁻)** → **cytokine secretion (ELISpot)** → **specific killing of MDA-MB-231**. Every group is baselined against an **empty-vector circRNA** control. This section reports the six datasets in that order.",
          "**Why TROP2-CTL1 and TROP2-CTL2 are the comparators, and not some other epitope.** They are the **two strongest single epitopes in the entire Round 1 panel** — 271 and 217 SFC against a panel median of 78 (Table 3). Choosing them sets the comparison at its hardest: a Combined vaccine that beat a mid-range or weak single epitope would prove very little, because almost any multi-epitope construct would do that. The claim we want to test is stronger — that combining epitopes adds something beyond taking the best one — and that claim can only be tested against the best one. The dual-epitope **TROP2-CTL1+2** group then supplies the intermediate rung, so the four epitope-carrying groups form a ladder of increasing epitope content — **single → dual → eight-epitope Combined** — at constant backbone, constant adjuvant and constant electroporation. Read in that order, the series answers two questions at once: whether the Combined vaccine works at all (against the Blank), and whether multivalency itself is worth the extra construction (against the best single epitope and the best pair).",
          "**A key control choice for this whole section.** Every group is baselined against the **Blank group**, and the Blank group was electroporated with an **empty backbone circRNA encoding no epitopes (empty vector)** — not untreated cells, and not electroporation buffer alone.",
          'This choice makes the Blank group subtract three backgrounds at once: **electroporation stress itself**, **innate stimulation by the circRNA backbone through cytosolic sensors such as RIG-I/MDA5**, and **the effect of the 4×mC3dP28 adjuvant module**. Consequently, **the entire increment from Blank to Combined can only come from the epitope-encoding sequence**. This is not a "blank" control but a strict **vector control**, and it is what allows the in vitro results on this page to be attributed to antigen at all. Cell number, volume and programme (Nucleofector II, Program U-002) were identical across all groups.',
        ],
      },

      /* ------------------------------------------------------ §4.1 */
      {
        type: "subheading",
        id: "results-4-1",
        index: "4.1",
        title: "4.1 DC maturation: upregulation of CD80/CD86",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜To prime T cells effectively, DCs must not only present antigen (signal 1) but also upregulate co-stimulatory molecules (signal 2). This step tests each construct's ability to drive DC maturation — a **precondition** for everything downstream.",
          "**Design & Readout**｜**CD80⁺CD86⁺** double positives on moDCs by flow across five groups (Blank / TROP2-1 / TROP2-2 / TROP2-1+2 / Combined), **n = 3** (Experiments 4.1).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig07"),
        alt: resultsAssets.fig07.alt,
        caption: resultsAssets.fig07.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "The X-axis is CD80 and the Y-axis CD86; the boxed number is the double-positive percentage.",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig08"),
        alt: resultsAssets.fig08.alt,
        caption: resultsAssets.fig08.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Error bars are SD; *** denotes P < 0.001 for Blank vs Combined.",
        ],
      },
      {
        type: "table",
        caption: "Table 14. DC maturation frequencies.",
        headers: [
          "Group",
          "CD80⁺CD86⁺ (%)",
          "Increase over Blank",
          "vs Blank (Holm)",
        ],
        rows: [
          ["Blank", "10.33 ± 0.55", "—", "—"],
          ["TROP2-1", "15.57 ± 0.35", "+51%", "2.7 × 10⁻⁴"],
          ["TROP2-2", "15.80 ± 0.36", "+53%", "2.7 × 10⁻⁴"],
          ["TROP2-1+2", "17.50 ± 0.30", "+69%", "1.5 × 10⁻⁴"],
          ["**Combined**", "**22.37 ± 0.31**", "**+117%**", "**2.5 × 10⁻⁵**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are mean ± SD, n = 3.",
          "One-way ANOVA F(4,10) = 378.2, P < 0.0001. **Combined vs TROP2-1+2 also reaches significance** (Holm-corrected[17] P = 1.5 × 10⁻⁴), so eight epitopes still add over two. The representative flow values in Figure 7 (10.9 / 15.6 / 15.9 / 17.2 / 22.1) differ slightly from these means, as expected — the former is a single representative sample, the latter the mean of three replicates.",
          "**Interpretation**｜All epitope-encoding groups exceeded the empty-vector Blank, following a clear **epitope-complexity gradient**: single-epitope < dual-epitope < Combined, with Combined at **2.16× Blank** (Holm-corrected P = 2.5 × 10⁻⁵).",
          "**The attribution here is clean.** Because the Blank group already carries the complete circRNA backbone and the 4×mC3dP28 adjuvant, backbone innate stimulation and adjuvant activity are **identical across all four groups** and are subtracted at baseline. The rise from 10.33% to 22.37% can therefore **only come from the epitope-encoding sequence** — the translated antigenic peptides themselves promote DC maturation. This is consistent with the classical mechanism whereby increased antigen load drives uptake and processing of more exogenous protein and upregulation of co-stimulatory molecules.",
        ],
      },

      /* ------------------------------------------------------ §4.2 */
      {
        type: "subheading",
        id: "results-4-2",
        index: "4.2",
        title: "4.2 Antigen translation: anti-FLAG Western blot",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜For the vaccine to work, the circRNA must first be **translated into protein inside DCs**. This step provides direct evidence at the protein level.",
          "**Design & Readout**｜Anti-FLAG Western blot of electroporated DCs against the **FLAG tag** carried downstream of the epitope cassette, with **β-actin** as loading control and mock-electroporated DCs as the negative control (Experiments 4.2).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig09"),
        alt: resultsAssets.fig09.alt,
        caption: resultsAssets.fig09.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "The circRNA-electroporated lane shows a distinct band at **~50 kDa**, near-absent in the blank control; **β-actin (42 kDa) is comparable across lanes**, confirming equal loading.",
          '**Interpretation**｜A **FLAG-specific band at ~50 kDa with comparable β-actin across lanes** indicates that the band derives from translation of the circRNA-encoded sequence rather than from a loading difference. This closes the link "**the antigen is actually synthesised inside the cell**" — until this point, translation could only be inferred indirectly from downstream function.',
          "**Limitations and scope**",
          "**The scope of the anti-FLAG result.** The anti-FLAG blot demonstrates **translation/expression**. It does **not** directly demonstrate that the antigen is processed and presented on MHC-I at the cell surface. Presentation is supported only **indirectly**, by the downstream ELISpot, T-cell activation and specific killing data. Direct proof would require pMHC multimer staining or surface peptide elution mass spectrometry, which we could not complete within the project timeline — this is listed as future work.",
        ],
      },

      /* ------------------------------------------------------ §4.3 */
      {
        type: "subheading",
        id: "results-4-3",
        index: "4.3",
        title: "4.3 T-cell activation and co-stimulation: CD69 and CD28",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜Test whether antigen presentation actually translates into **CD8⁺ T-cell activation**, and whether those cells receive co-stimulatory support — which determines whether effector cells survive and expand.",
          "**Design & Readout**｜**CD8⁺CD69⁺** (early activation) and **CD8⁺CD28⁺** (co-stimulation) by flow after DC–T co-culture at 1 : 20, four constructs plus Blank, **n = 3** (Experiments 4.3).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig10"),
        alt: resultsAssets.fig10.alt,
        caption: resultsAssets.fig10.caption,
      },
      {
        type: "figure",
        src: getResultsImage("fig11"),
        alt: resultsAssets.fig11.alt,
        caption: resultsAssets.fig11.caption,
      },
      {
        type: "figure",
        src: getResultsImage("fig12"),
        alt: resultsAssets.fig12.alt,
        caption: resultsAssets.fig12.caption,
      },
      {
        type: "figure",
        src: getResultsImage("fig13"),
        alt: resultsAssets.fig13.alt,
        caption: resultsAssets.fig13.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Error bars in Figures 13 and 15 are SD; *** denotes P < 0.001 for Blank vs Combined.",
        ],
      },
      {
        type: "table",
        caption:
          "Table 15. T-cell activation and co-stimulatory marker expression.",
        headers: ["Group", "CD8⁺CD69⁺ (%)", "CD8⁺CD28⁺ (%)"],
        rows: [
          ["Blank", "27.33 ± 0.40", "2.77 ± 0.60"],
          ["TROP2-1", "37.07 ± 0.25", "15.10 ± 0.70"],
          ["TROP2-2", "42.00 ± 0.62", "14.53 ± 1.19"],
          ["TROP2-1+2", "42.43 ± 0.40", "15.50 ± 0.56"],
          ["**Combined**", "**45.53 ± 0.31**", "**17.53 ± 0.45**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are mean ± SD, n = 3.",
          "One-way ANOVA: CD69 F(4,10) = 872.7, P < 0.0001; CD28 F(4,10) = 185.8, P < 0.0001. All four circRNA groups differ from Blank at P < 0.001 after Holm correction (largest Holm P: CD69 1.1 × 10⁻⁵, CD28 2.2 × 10⁻⁴). Combined vs TROP2-1+2 is also significant on both (CD69 Holm P = 4.5 × 10⁻⁴; CD28 Holm P = 0.008).",
          "**Interpretation**｜Both dimensions agree: all circRNA groups significantly exceed Blank (CD69: P < 0.001), and **Combined is highest on both**.",
          "Worth singling out: **the fold-increase in CD28 is far larger than in CD69.** CD69 rises from 27.33% to 45.53% (**1.67-fold**), while CD28 rises from 2.77% to 17.53% (**6.34-fold**). This suggests the vaccine does more than switch on an immediate activation signal — it drives a substantial fraction of CD8⁺ T cells to express **co-stimulatory receptors**, and CD28 signalling is precisely what allows effector T cells to survive, expand and avoid anergy. This sets up mechanistically the memory differentiation observed in the next section.",
          "**Limitation.** CD28 is downregulated during terminal effector differentiation, so the chosen time point affects the readout; this is a single-time-point snapshot with no kinetic time course.",
        ],
      },

      /* ------------------------------------------------------ §4.4 */
      {
        type: "subheading",
        id: "results-4-4",
        index: "4.4",
        title: "4.4 Effector-memory differentiation: CD45RO⁺CCR7⁻",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜A high-quality CTL response must not only activate but **differentiate towards an effector/memory phenotype** — this determines whether the response persists.",
          "**Design & Readout**｜**CD45RO⁺CCR7⁻ (effector memory)** within the CD8⁺ gate, same five groups, **n = 3** (Experiments 4.3).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig14"),
        alt: resultsAssets.fig14.alt,
        caption: resultsAssets.fig14.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Left to right: Blank, TROP2-1, TROP2-2, TROP2-1+2, Combined.",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig15"),
        alt: resultsAssets.fig15.alt,
        caption: resultsAssets.fig15.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Error bars are SD; *** denotes P < 0.001 for Blank vs Combined.",
        ],
      },
      {
        type: "table",
        caption: "Table 16. Effector-memory differentiation by group.",
        headers: ["Group", "CD45RO⁺CCR7⁻ (%)", "Fold vs Blank"],
        rows: [
          ["Blank", "1.10 ± 0.36", "—"],
          ["TROP2-1", "11.03 ± 0.32", "10.0×"],
          ["TROP2-2", "12.07 ± 0.15", "11.0×"],
          ["**TROP2-1+2**", "**21.43 ± 0.90**", "**19.5×**"],
          ["**Combined**", "**21.90 ± 0.72**", "**19.9×**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are mean ± SD, n = 3.",
          "One-way ANOVA F(4,10) = 701.1, P < 0.0001; all four circRNA groups exceed Blank at P < 0.001 (largest Holm-corrected P = 1.0 × 10⁻⁵). **Combined vs TROP2-1+2 is not significant (P = 0.52)** — two epitopes already saturate this readout, and eight add nothing further.",
          "**Interpretation**｜The separation between groups is the largest in this section: Blank at 1.10 ± 0.36% versus Combined at 21.90 ± 0.72% — a **19.9-fold difference** (Holm P = 6.0 × 10⁻⁶).",
          "More informative still is a clear **step change**: single-epitope groups (11.03%, 12.07%) sit at roughly half the level of the dual/multi-epitope groups (21.43%, 21.90%), and TROP2-1+2 vs Combined is statistically indistinguishable (P = 0.52). The pattern suggests that **what drives effector-memory differentiation is not the absolute number of epitopes but whether more than one epitope is present** — two epitopes already push differentiation to a plateau. This has direct design value: it supports multivalency, but also indicates diminishing returns from simply stacking more epitopes on this particular metric.",
          "**Limitations.** This is a phenotypic readout; functional memory (rapid recall on re-stimulation) was not tested.",
        ],
      },

      /* ------------------------------------------------------ §4.5 */
      {
        type: "subheading",
        id: "results-4-5",
        index: "4.5",
        title:
          "4.5 Round 2 ELISpot: the immunogenicity advantage of multi-epitope design",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜Repeat the ELISpot on the four optimised constructs to **directly test whether multi-epitope combination outperforms single epitopes** — the core evidence for the vaccine design.",
          "**Design & Readout**｜Round 2 ELISpot, same kit and format as §3.1, reported as SFC per 10⁵ cells. **Unlike Round 1, this round carries a real vector control**: the Blank group is DC electroporated with empty-vector circRNA, and it defines the background against which every other group is read (Experiments 4.4).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig16"),
        alt: resultsAssets.fig16.alt,
        caption: resultsAssets.fig16.caption,
      },
      {
        type: "table",
        caption: "Table 17. Round 2 ELISpot results.",
        headers: ["Group", "SFC / 10⁵ cells", "Fold vs Blank"],
        rows: [
          ["Blank", "32", "—"],
          ["TROP2-1", "198", "6.2×"],
          ["TROP2-2", "227", "7.1×"],
          ["TROP2-1+2", "298", "9.3×"],
          ["**Combined**", "**367**", "**11.5×**"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**Interpretation**｜The response is **strictly monotonic**: Blank < single < dual < Combined. Two features deserve emphasis:",
          "**TROP2-1+2 (298) exceeds both TROP2-1 (198) and TROP2-2 (227)**, and also exceeds their arithmetic mean (212.5) — indicating that combining two strong epitopes from the same antigen produces a **genuinely additive effect**.",
          "**Combined (367) exceeds TROP2-1+2 (298)**, showing that **extending the epitope repertoire across antigens further raises the overall response frequency**. This is precisely what multivalent design is meant to achieve, and it directly supports the rationale of broadening the response and reducing the risk of single-antigen immune escape[11][12].",
          "Read alongside the Round 2 ELISpot (§4.4), this curve yields the project's central design lesson, and it is worth stating in the narrowest form the data support: **multivalency delivers, and it delivers cumulatively.** Two validated epitopes from one antigen beat either alone **and beat their arithmetic mean** (TROP2-1+2 at 298 SFC against 198 and 227, mean 212.5); eight epitopes across four antigens beat those two (Combined at 367). Both comparisons come from Round 2, which carries an **empty-vector Blank control**, so unlike Round 1 they support quantitative attribution.",
          '**Limitations.** Stimulation was polyclonal co-culture rather than **peptide re-stimulation**, so although between-group differences can be attributed to "epitope-encoding or not", SFC cannot be resolved down to any individual epitope.',
        ],
      },

      /* ------------------------------------------------------ §4.6 */
      {
        type: "subheading",
        id: "results-4-6",
        index: "4.6",
        title: "4.6 Specific killing of TNBC target cells: MDA-MB-231",
      },
      {
        type: "prose",
        paragraphs: [
          '**Aim**｜Demonstrate that vaccine-primed T cells specifically kill genuine triple-negative breast cancer cells, and test whether the advantage of multi-epitope design converts from "stronger immune response" into "actual killing capacity".',
          "**Design & Readout**｜Calcein-AM killing of **MDA-MB-231 (human TNBC, HLA-A*02:01⁺, TROP2⁺)** — unlike the K562 target of Round 1 it carries both the correct HLA type and the target antigen — at **three E:T ratios (20 : 1 / 40 : 1 / 80 : 1)**, five groups, **3 replicate wells** per condition (Experiments 4.5).",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig17"),
        alt: resultsAssets.fig17.alt,
        caption: resultsAssets.fig17.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Each point is one replicate well, with points of the same group connected; the X-axis is the E:T ratio and the Y-axis the percentage of cell death.",
        ],
      },
      {
        type: "table",
        caption: "Table 18. Killing of MDA-MB-231.",
        headers: [
          "E:T ratio",
          "Blank",
          "TROP2-1",
          "TROP2-2",
          "TROP2-1+2",
          "Combined",
        ],
        rows: [
          [
            "20 : 1",
            "6.93 ± 1.55",
            "15.03 ± 4.61",
            "18.70 ± 0.96",
            "25.63 ± 4.37",
            "**33.83 ± 4.26**",
          ],
          [
            "40 : 1",
            "12.60 ± 2.72",
            "27.53 ± 2.04",
            "26.67 ± 1.35",
            "46.77 ± 3.80",
            "**55.20 ± 2.36**",
          ],
          [
            "**80 : 1**",
            "26.20 ± 3.28",
            "47.37 ± 3.21",
            "46.60 ± 2.29",
            "68.70 ± 1.40",
            "**83.57 ± 1.68**",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are %, mean ± SD, n = 3 replicate wells.",
          "One-way ANOVA is P < 0.0001 at all three ratios (F = 25.5 / 130.9 / 236.5). Blank vs Combined after Holm correction: P = 0.0015 / 0.0001 / 3.4 × 10⁻⁵. **TROP2-1 and TROP2-2 do not differ at any ratio** (P = 0.25 / 0.57 / 0.75). Combined vs TROP2-1+2 reaches significance only at 80 : 1 (Holm P = 0.0006).",
          "**Interpretation**｜",
          "**First, a dose–response relationship holds.** Killing rises monotonically with E:T ratio in all five groups, with no plateau or inversion. A genuine cytotoxic effect should show exactly this dose dependence; an erratic curve would more likely indicate systematic error in the assay itself.",
          "**Second, the advantage of multi-epitope design is realised functionally, and it widens with effector dose.** At all three ratios the group ordering is **Blank < TROP2-1 ≈ TROP2-2 < TROP2-1+2 < Combined**, matching the Round 2 ELISpot ordering (32 < 198 ≈ 227 < 298 < 367) **at the level of tiers**.",
          "To be precise: **the two single epitopes cannot be distinguished by killing** — TROP2-1 vs TROP2-2 is non-significant at all three ratios (P = 0.25 / 0.57 / 0.75) and the direction actually flips between 20 : 1 and 40 : 1/80 : 1. What is consistent across the two independent readouts is the tier ordering **Blank < single < dual < eight-epitope**, not the exact four-way ranking. More telling is how the gap changes: at 20 : 1, Combined exceeds TROP2-1 by roughly 19 percentage points; by 80 : 1 the gap widens to about **36 percentage points**. This indicates that the multivalent vaccine does not merely generate *more* effector cells — the **killing efficiency per cell is also higher**, so the difference amplifies as effector numbers increase.",
          '**Third, the Blank group defines the "backbone + adjuvant" baseline, letting the antigen contribution be read off directly.** Blank-group T cells were primed by DCs carrying the **empty-vector circRNA** — they have received the full stimulus of the circRNA backbone and 4×mC3dP28 adjuvant, only without epitopes. Such effectors still kill 26.20 ± 3.28% of targets at 80 : 1 (NK-like activity plus backbone/adjuvant-driven non-specific killing). Subtracting that baseline from the Combined group\'s 83.57 ± 1.68% leaves roughly **57 percentage points attributable to the epitope-encoding sequence**. The attribution is direct: the only difference between the two groups is the presence or absence of epitopes.',
        ],
      },
    ],
  },
  {
    id: "results-safety",
    index: "07",
    kicker: "",
    navLabel: "Safety",
    title: "V. Safety: Defining the Boundaries",
    summary: "",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "The Round 2 assays assessed immune activation and tumour-cell killing, but functional activity alone does not define the boundaries of the platform. We measured three quantities that bound how CirCure can be used: **how long the circRNA survives** relative to its linear precursor, **whether vaccine-activated T cells kill normal cells**, and **what dose of the LNP carrier cells tolerate**. This section reports the degradation curves, the off-target killing panel across four normal cell lines, and the dose–viability data.",
        ],
      },

      /* ------------------------------------------------------ §5.1 */
      {
        type: "subheading",
        id: "results-5-1",
        index: "5.1",
        title:
          "5.1 In vitro resistance of circRNA to degradation, compared with its linear precursor",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜Test the platform's core assumption — that circularity confers resistance to degradation — and inform **dosing frequency**: the longer the molecule persists, the lower the nucleic-acid dose and the fewer administrations needed for equivalent antigen expression, and the smaller the systemic exposure.",
          "**Design & Readout**｜Equal masses of purified circRNA and its linear precursor incubated in parallel at 37 °C, sampled at **0, 24, 48 and 72 h**, run side by side on one gel and quantified by densitometry against each RNA's own 0 h lane (Experiments 5.1). **The material was the Combined batch** — the same preparation as the circRNA used throughout Sections IV–VI (§3.5) — so the conclusion is a platform-level claim measured on the vaccine itself, not carried over from a Round 1 construct.",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig18a"),
        alt: resultsAssets.fig18a.alt,
        caption: resultsAssets.fig18a.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Top row circRNA, bottom row linear precursor; lanes left to right are 0, 24, 48 and 72 h. The 2000 nt marker position is indicated.",
        ],
      },
      { type: "feature", key: "results-plate-fig18b" },
      {
        type: "prose",
        paragraphs: [
          "X-axis: incubation time (h). Y-axis: fraction remaining (each RNA's 0 h = 1.0), from densitometric integration of Figure 18A. **Each timepoint is a single lane measured once, so there are no error bars; the lines simply join consecutive data points and are not a fitted curve.**",
        ],
      },
      {
        type: "table",
        caption: "Table 19. Fraction of each RNA remaining.",
        headers: [
          "Time",
          "circRNA remaining",
          "Linear RNA remaining",
          "circRNA / linear",
        ],
        rows: [
          ["0 h", "1.000", "1.000", "1.0×"],
          ["24 h", "**0.719**", "0.059", "12.2×"],
          ["48 h", "0.616", "0.091", "6.8×"],
          ["72 h", "**0.395**", "0.027", "14.6×"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Densitometric values normalised to the DNA ladder lane; n = 1 per timepoint.",
          "**Interpretation**｜The difference in shape between the two traces is the point of this section, and it is **fully established within the first 24 h**:",
          "**Linear RNA loses 94.1% by 24 h (0.059 remaining) and then sits near baseline, while circRNA still retains 71.9% at the same timepoint.** By 72 h circRNA is still at 39.5% against 2.7% for linear RNA — a **14.6-fold difference**. Put another way: **what remains of the circRNA after three days is still more than six times what was left of the linear RNA after one.**",
          'This matches the mechanistic expectation — circRNA lacks free 5′/3′ ends and is intrinsically resistant to exonucleases[2][3] — and supports the platform\'s "low-frequency dosing, sustained expression" design rationale[1]: the longer the molecule persists, the lower the dose and the fewer administrations needed for equivalent antigen expression.',
          "**Three boundaries of this experiment that we do not cross**",
          '1. **We report only the fraction remaining at each timepoint — no half-life, decay constant or any other kinetic parameter.** Each timepoint is **a single lane with no biological replicate**, and four points are not enough to fit and test a kinetic model. Turning "39.5% remaining at 72 h" into "a half-life of X hours" would be an **extrapolation the data do not support**, so we do not make it. The lines in Figure 18B join consecutive data points and **do not represent the real trajectory between measurements**.',
          '2. **The linear RNA value at 48 h (0.091) exceeds that at 24 h (0.059) — it is non-monotonic**, visible in Figure 18B as a distinct upward kink. Real degradation cannot rebound, so this must be **densitometric noise in the low-signal regime**: the band is near background and integration error is substantially amplified. We report the raw values without smoothing or exclusion, but accordingly **the three linear-RNA values after 24 h should be read only as "degraded to near the limit of detection" and not interpreted point by point**.',
          '3. **Circular RNA migrates anomalously in native gels** (usually slower than linear RNA of the same length), so **band position cannot be used to establish circularity**; circular identity is established in §2.2 and §3.5, and this experiment answers only "how much is left".',
        ],
      },

      /* ------------------------------------------------------ §5.2 */
      {
        type: "subheading",
        id: "results-5-2",
        index: "5.2",
        title:
          "5.2 Off-target cytotoxicity: do vaccine-activated T cells harm normal cells?",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜The most serious concern for any tumour vaccine is **on-target / off-tumour toxicity** — activated CTLs damaging normal tissues that express low levels of the cognate antigen. This experiment measures that risk directly.",
          "**Design & Readout**｜The same Calcein-AM system as the efficacy assay, with Combined-primed effector T cells against four normal human cell lines of different tissue origin, **3 replicate wells** per condition at **E:T 80 : 1 and 100 : 1** (Experiments 5.2):",
        ],
      },
      {
        type: "table",
        headers: ["Cell line", "Tissue origin"],
        rows: [
          ["HCAEC", "coronary artery endothelium"],
          ["LX-2", "hepatic stellate"],
          ["BEAS-2B", "bronchial epithelium"],
          ["MCF12A", "normal mammary epithelium"],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**MDA-MB-231 served as the positive control target** (high killing expected). Spontaneous- and maximum-release wells were included for every target, at **E:T ratios of 80 : 1 and 100 : 1**. Spontaneous-release, maximum-release and experimental wells were each set up **in 3 replicate wells**, so the three values recorded per cell line per ratio are **technical replicates on the same plate**.",
          "**All four normal lines were confirmed HLA-A*02:01 positive** — critical to the interpretability of this experiment; see below.",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig19"),
        alt: resultsAssets.fig19.alt,
        caption: resultsAssets.fig19.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "Purple bars are E:T 80 : 1, blue bars 100 : 1; **** denotes P < 0.0001. Note the **broken y-axis** (0–35% and 35–70% segments).",
        ],
      },
      {
        type: "table",
        caption: "Table 20. Off-target cytotoxicity.",
        headers: [
          "Target",
          "Tissue origin",
          "80 : 1",
          "100 : 1",
          "Specificity ratio (80 : 1)",
        ],
        rows: [
          [
            "HCAEC",
            "Coronary artery endothelium",
            "2.77 ± 0.32",
            "3.47 ± 1.35",
            "21.4×",
          ],
          ["LX-2", "Hepatic stellate", "0.78 ± 0.58", "1.31 ± 0.46", "76.1×"],
          [
            "BEAS-2B",
            "Bronchial epithelium",
            "2.67 ± 0.65",
            "2.37 ± 1.10",
            "22.2×",
          ],
          [
            "MCF12A",
            "Normal breast epithelium",
            "1.86 ± 0.48",
            "2.26 ± 0.60",
            "31.8×",
          ],
          [
            "**MDA-MB-231**",
            "**TNBC (positive control)**",
            "**59.24 ± 2.10**",
            "**62.07 ± 3.58**",
            "—",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are killing %, mean ± SD, **n = 3 replicate wells on one plate**. Specificity ratio = MDA-MB-231 killing ÷ that line's killing.",
          "MDA-MB-231 versus each normal line is **P < 10⁻⁵ at both ratios** (P = 1.3–1.5 × 10⁻⁶ at 80 : 1). Pooling the four normal lines at 80 : 1 gives **2.02 ± 0.95% (n = 12), maximum single well 3.29%**.",
          "**Interpretation**｜",
          "**First, all four normal lines fall below 5%, against 59–62% for MDA-MB-231 — a 21- to 76-fold separation.** Not merely on average: **every line, every ratio, every one of the three replicate wells** is low. The highest single normal-cell measurement across all 24 wells (4 lines × 2 ratios × 3 replicate wells) is **4.90%**, in HCAEC at 100 : 1; the highest at 80 : 1 is 3.29%. The lowest MDA-MB-231 measurement is **57.11%**, so the two distributions do not overlap. The three values per condition are replicate wells on one plate, so this separation is established at plate level and has not been tested across effector-cell batches.",
          '**Second, all four normal lines are HLA-A*02:01 positive, so the low killing cannot be explained by HLA mismatch.** This matters because if the normal cells did not present HLA-A*02:01, "not killed" might simply mean the CTLs could not see them, which says nothing about antigen discrimination. With HLA typing confirmed positive, these cells **are visible to HLA-A*02:01-restricted CTLs and were nonetheless spared** — so the low killing must arise at the level of **target-antigen discrimination**, not presentation-molecule invisibility. That upgrades this section from suggestive to a genuine negative control.',
          "**Third, MCF12A is the most informative line.** It shares **tissue origin with the tumour target** (both breast epithelium) and is HLA-A*02:01⁺, making it the line most likely to express low levels of cognate antigen and be mistakenly killed. It was killed at only 1.86–2.26%, a specificity ratio of 31.8×. This is the most direct available test of on-target / off-tumour risk.",
          "**Fourth, raising the effector dose does not cost safety.** From 80 : 1 to 100 : 1 the normal lines move by at most ±0.7 percentage points, **all non-significant** (P = 0.28–0.70), while tumour killing continues to rise.",
        ],
      },

      /* ------------------------------------------------------ §5.3 */
      {
        type: "subheading",
        id: "results-5-3",
        index: "5.3",
        title: "5.3 Safe dose window of the LNP delivery system",
      },
      {
        type: "prose",
        paragraphs: [
          "**Aim**｜circRNA requires lipid nanoparticles (LNPs) for efficient cellular entry, but ionisable lipids are themselves cytotoxic at high doses[14][15]. This step asks how much of the **carrier alone** cells tolerate, so that the delivery vehicle can be ruled out as a source of toxicity before any cargo is added.",
          "**Design & Readout**｜**Empty LNPs carrying no circRNA** applied to immature moDCs at **0 / 50 / 100 / 200 / 400 ng of LNP per well** for 24 h and read by CCK-8, **4 replicate wells per dose** with 0 ng as the 100% baseline (Experiments 5.3). No well contained cargo, so what is measured is the cytotoxicity of the lipid formulation itself.",
          "**Result**",
        ],
      },
      {
        type: "figure",
        src: getResultsImage("fig20"),
        alt: resultsAssets.fig20.alt,
        caption: resultsAssets.fig20.caption,
      },
      {
        type: "prose",
        paragraphs: [
          "(Empty LNP, no circRNA cargo; n ≥ 3; error bars = SD.) Viability holds at baseline across 0–200 ng, then falls sharply at 400 ng.",
        ],
      },
      {
        type: "table",
        caption: "Table 21. Dose–viability relationship for empty LNP.",
        headers: [
          "Empty-LNP dose",
          "Relative viability (mean ± SD)",
          "vs 0 ng (Holm)",
          "Assessment",
        ],
        rows: [
          ["0 ng (baseline)", "1.000 ± 0.040", "—", "—"],
          ["50 ng", "1.017 ± 0.037", "P = 0.56 (ns)", "no toxicity"],
          ["100 ng", "1.063 ± 0.047", "P = 0.26 (ns)", "no toxicity"],
          [
            "**200 ng**",
            "**1.030 ± 0.016**",
            "**P = 0.43 (ns)**",
            "**no toxicity (safe upper bound)**",
          ],
          [
            "400 ng",
            "**0.572 ± 0.058**",
            "**P = 7.6 × 10⁻⁵**",
            "clear toxicity",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Values are n = 4 wells.",
          "One-way ANOVA F(4,15) = 95.3, P < 0.0001. **None of the 0–200 ng doses differs from baseline**; only 400 ng falls significantly.",
          "**Interpretation**｜The curve has a **plateau-then-cliff** shape, which is more informative than a slow monotonic decline:",
          "1. **Viability does not fall at all between 0 and 200 ng** (fluctuating between 100% and 106%; all three doses non-significant vs baseline, Holm P = 0.26–0.56), indicating that the LNP carrier itself produces **no measurable toxicity** to DCs across this range. The slightly above-baseline reading at 100 ng (≈106%) is normal variation for a colorimetric CCK-8 readout at this scale and should not be interpreted as a proliferative effect.",
          "2. **At 400 ng viability drops to 57.2 ± 5.8%** (P = 7.6 × 10⁻⁵) — doubling the dose from 200 ng (103.0%) costs 44% of viability. This sharp fall is characteristic of the threshold behaviour of ionisable lipid cytotoxicity: the membrane tolerates the load below a critical concentration and decompensates rapidly above it.",
          "3. We therefore set **200 ng of LNP per 10⁴ DCs as the in vitro safe upper bound for the carrier**, and chose a working dose below that bound so that delivery efficiency and cell survival are secured simultaneously.",
          "**Known limitations.** This is a **single cell type, single time point (24 h)** in vitro viability assay of the **empty carrier**. It does **not** cover repeat-dose toxicity, immunotoxicity or systemic toxicology. In addition, CCK-8 measures mitochondrial dehydrogenase activity (metabolic viability), which is not strictly equivalent to cell survival, and does not distinguish apoptosis from necrosis.",
          "**Limitations and scope**",
          "**What this experiment does and does not bound.** Every well in this assay contained **LNP only**. The formulated vaccine — the same LNP loaded with circRNA — was **never put through a viability assay**, so this section bounds the toxicity of the **delivery vehicle**, not of the product actually administered. The distinction matters in one direction specifically: circRNA is itself sensed by cytosolic receptors such as RIG-I/MDA5 (§4.1), so a loaded particle delivers a stimulus an empty one does not, and the loaded formulation could in principle be tolerated less well than the 200 ng bound established here. We therefore describe 200 ng as **the carrier's** safe upper bound and do not extend it to the vaccine.",
          "**Why the in vitro and in vivo dose units are not interconvertible.** The dose unit here is **ng of empty LNP per 10⁴ DCs**; the in vivo dose is **10 µg of loaded circRNA-LNP per animal**. The denominators are entirely different (a defined number of cells versus the distribution volume and total cell count of a whole animal), so the two **cannot be converted into or compared with one another**. This experiment defines an upper bound for the in vitro working dose; the safety of the in vivo dose must be answered by an independent animal toxicology study. We state this explicitly because juxtaposing nanogram-scale in vitro data with microgram-scale in vivo doses is a common but serious interpretive error.",
        ],
      },
    ],
  },
];
