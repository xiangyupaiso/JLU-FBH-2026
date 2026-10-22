# JLU-FBH / CirCure: Visual Design methods for future iGEM teams

[简体中文](visual-design-guide.md) | English · [Repository homepage](../README.md#readme-en) · [Documentation index](README.en.md)

JLU-FBH (also written JLUFBH) is the iGEM 2026 team from the First Bethune Hospital of Jilin University, China. CirCure explores circular RNA (circRNA) vaccine research for triple-negative breast cancer (TNBC). This guide documents the Wiki's visual design, science communication, and interactive storytelling methods, with particular attention to **Visual Design, Section 8: Humanistic Care & Narrative Design** and **Section 9: Our Wiki Contribution**.

> **Open the original Wiki and explore it as you read, especially Sections 8 and 9.**
>
> **[Open the complete interactive Visual Design page ↗](https://2026.igem.wiki/jlu-fbh/visual-design)**
>
> The original page includes interactive components, animated comparisons, and technical details that are initially collapsed. Try clicking, dragging, or playing the demonstrations, and expand the relevant **Technical details** to read the visual changes alongside their design rationale and implementation.
>
> **[Section 8: Humanistic Care & Narrative Design](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)** introduces the narrative and reader participation; **[Section 9: Our Wiki Contribution](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)** develops the methods, revision comparisons, and implementation details.

Source and release links: [GitHub source repository](https://github.com/xiangyupaiso/Official-wiki) · [Official iGEM GitLab](https://gitlab.igem.org/2026/jlu-fbh).

This Markdown guide expresses the methods from the interactive page as standalone text, letting researchers and AI-assisted research tools follow a problem, approach, case, and source. It is derived from the repository's current page data; consult the Wiki for original artwork, animated comparisons, and design references. The design intentions and implementation cases here do not establish measured improvements in comprehension or learning.

## Where to start

- Planning a Wiki: read the narrative intentions in Section 8, then the implementation process in Section 9.
- Preparing an illustration-to-frontend handoff: start with 9.1, especially shared canvases, crop coordinates, and ownership of layers.
- Investigating a page that runs but is difficult to read: use 9.2, 9.3, and 9.4 to inspect complete explanations, reading holds, and clear routes.
- Adapting code: use the source map below, then read the [architecture specification](../WIKI_ARCHITECTURE_SPEC.md) (Chinese) and [development guide](development.en.md).

## All nine Visual Design sections

The first seven sections are defined in [visualDesignPage.ts](../src/data/project/visualDesignPage.ts). Sections 8 and 9, their technical notes, and design references are defined in [visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts).

| Section                                                                     | Page title                              | What future teams can study                                                                                             |
| --------------------------------------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| [1](https://2026.igem.wiki/jlu-fbh/visual-design#brand-identity)            | Brand Identity                          | Connect the research topic, team context, and people the project concerns to a logo, crest, flag, and mascot.           |
| [2](https://2026.igem.wiki/jlu-fbh/visual-design#color-system)              | Cross-Module Palette Architecture       | Distinguish five modules within a shared reading structure, separating heading accents from article backgrounds.        |
| [3](https://2026.igem.wiki/jlu-fbh/visual-design#interactive-experience)    | Interactive Aesthetics & Motion         | Study the mascot cursor, watercolor components, Mol* molecular viewer, and GSAP animation within the visual system.     |
| [4](https://2026.igem.wiki/jlu-fbh/visual-design#engineering-rigor)         | Decoupled Web Engineering Architecture  | Separate content, assets, interaction, and route assembly; share citation and media-readiness behavior.                 |
| [5](https://2026.igem.wiki/jlu-fbh/visual-design#core-interfaces)           | Core Interfaces & Narrative Experience  | Connect loading status, the title introduction, and the homepage story.                                                 |
| [6](https://2026.igem.wiki/jlu-fbh/visual-design#subpage-illustrations)     | Wiki Subpage Illustration System        | Organize covers for different subjects through a common illustration language.                                          |
| [7](https://2026.igem.wiki/jlu-fbh/visual-design#educational-games)         | Educational Games & Hands-On Experience | Explore the connections between science-communication games, the virtual laboratory, and the main Wiki.                 |
| [8](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience) | Humanistic Care & Narrative Design      | Begin with a person's question, connect explanations across scales, and leave room for reader choice and participation. |
| [9](https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft)         | Our Wiki Contribution                   | Preserve concrete approaches and revision reasons for artwork, motion, reading, navigation, endings, and iteration.     |

## Section 8: the narrative starting point

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#human-centered-experience)**

Try the antigen-switching and reading-control examples on the original page, and follow the illustrations linking the narrative to the scientific explanation.

CirCure introduces its research motivation through an illustrated character's question: “What if it comes back?” The page connects a patient, the clinical problem, molecular explanation, and ordinary life. This line was written for the illustrated story; describe that creative context when quoting it.

Across changes in scale, watercolor from a tear becomes a cloud above a map, carrying the theme and emotion forward. An RNA ring retains a recognizable shape across vaccine candidates, the circRNA explanation, and the platform. An antigen-switching interaction lets readers compare a shared backbone with replaceable segments. Antigens A, B, and C are conceptual examples; the interface does not establish target efficacy, immune killing, or clinical benefit.

For another project, first write down the question readers bring, the relationships they need to understand, and where they can inspect the evidence. Use that sequence to decide on scenes and motion.

## Section 9: Our Wiki Contribution

### 9.1 Prepare the Artwork and Opening

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#artwork-and-opening)**

View the layered artwork and opening demonstrations, then expand the technical details on canvas choices, layer coordinates, and resource preparation.

**Problem.** Once a complete illustration becomes an animation, characters, backgrounds, and annotations may need to move independently. Cropped layers lose their alignment if their original coordinates are discarded. The opening must also wait for styles, fonts, and first-scene resources.

**CirCure's approach.** Separate layers according to independent movement, overlap, and reuse. Retain a reference composition, shared canvas, transparency, and stacking order. When transparent margins are cropped, keep the position, dimensions, and source information in a manifest. For a canvas `W × H` and crop bounds `(x0, y0, x1, y1)`, restore the placement with:

```text
left   = 100 × x0 / W %
top    = 100 × y0 / H %
width  = 100 × (x1 - x0) / W %
height = 100 × (y1 - y0) / H %
```

Layout restores the composition; animation controls movement. This gives each transform a clear owner. New desktop artwork uses 16:10 as a preparation reference, with crop margins around faces, lettering, and key objects. Existing originals retain their recorded proportions and complete versions.

An HTML/CSS loader presents preparation, waiting, and failure states before the application script. The subtitle's reading hold begins after its last word appears, and the wordmark then moves into the measured header position. The introduction offers Skip and reduced-motion paths.

**When adapting it.** Align the still composition with the original before adding motion. Inspect areas newly exposed by moving layers. Choose the artwork ratio for your own viewports, subjects, and text.

### 9.2 Give Motion a Reading Rhythm

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#keyframes-and-reading-holds)**

Try the transition, playback, and chapter-selection examples, then expand the technical details to examine object continuity, reading holds, and scroll handoffs.

**Problem.** When an object moves, its explanation changes, and the scene transitions simultaneously, readers may have too little time to establish the relationship. A timeline can advance without ever presenting a complete explanation long enough to read.

**CirCure's approach.** Define readable states first: the object is visible, the text is complete, and the composition is still. Then arrange staging, easing, and reading holds. Scroll progress and property interpolation follow:

```text
p = clamp((s - s0) / (s1 - s0), 0, 1)
u = E(p)
x(p) = (1 - u) × x0 + u × x1
```

Here `s` is scroll position; `s0` and `s1` bound the interval; `p` is normalized progress; `E` is the easing function; and `x0` and `x1` are the property's endpoints. During a reading hold, progress continues while the composition stays unchanged. Timeline duration allocates relative scroll distance; automatic playback separately assigns travel time and reading time. Check both modes.

**Concrete cases.** The RNA ring retains its outline while entering the platform, preserving object constancy. Watercolor particles associate the tear with the cloud. The ward background previously used a JavaScript counter-transform to cancel scrolling; differences between browser scroll and script timing caused jumps. Native `position: sticky` now holds the background. In another handoff, a copy retained a scale of `1.005`, differing from the original by 0.5%; position, scale, crop, and opacity needed to match.

Performance work includes reusing prepared artwork variations, grouping measurements, and combining updates through `requestAnimationFrame`. Readers can pause, select chapters, change speed, and take over by scrolling manually.

**When adapting it.** Follow the same passage downward, upward, through rapid reversal, and by direct chapter selection, then resize. Check that a complete explanation holds, handoffs align, and controls still work when paused. Investigate rendering cost and motion timing separately.

### 9.3 Make Room for Sustained Reading

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#reading-surfaces)**

Explore the color and typography comparisons, then expand the technical details to relate the reading surfaces and image edges to the actual layout.

**Problem.** Carrying the homepage's visual density into a research article makes backgrounds, headings, images, and paragraphs compete for attention.

**CirCure's approach.** Let opening colors recede into a calmer article surface. Assign separate typographic roles to titles, body text, labels, and technical details. The typography study compares Fraunces and Lexend, sizes, and weights. Ordinary images on this page repeat 16 px corners to give photographs, drawings, and interface studies related edges.

**When adapting it.** Use real long headings, captions, and paragraphs to check hierarchy, line length, and space. Section 9 includes earlier palette studies whose colors may differ from the current module themes; consult Section 2 and the actual styles for current themes. The 16 px radius is a page-specific choice to compare against your own image sizes.

### 9.4 Keep the Route Clear

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#navigation-with-a-landmark)**

Try the navigation, destination hints, and ribbon demonstrations, then expand the technical details to examine opening, folding, reversal, and keyboard focus.

**Problem.** Folding navigation changes control positions, illustration can obscure destinations, and readers need to return to an argument after checking its references.

**CirCure's approach.** The homepage crest remains a landmark as navigation transitions between a full bar and a circular entrance. In the middle of the story, scroll direction and a movement threshold control expansion; the opening and ending coordinate handoffs with scene position. Labels enter after their surface has space and leave before it folds away. Reversal continues from the visible state. Current-page markers remain distinct from temporary hover and focus feedback.

Articles provide outlines, in-page search, and citation backlinks. Homepage destinations and Next page show clear names before illustration and nearby hints add detail. Reserved hint positions avoid shifting the layout. White space separates the next-page choice from institution logos. Lumi follows a measured ribbon path, while small screens use a static composition and the text link remains available.

**When adapting it.** Complete the same task with Tab, Enter, Escape, and touch. Check focus during folding, current-page identification, long destination names, rapid reversal, and narrow screens. Give destinations clear text alongside icons, color, and motion.

### 9.5 Meet the Team, Open the Letter

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#photo-reveal-craft)**

Explore the photograph reveal and open and close the letter, then expand the technical details on scroll position, animation reversal, and focus return.

**Problem.** A team photograph and longer message need room after the article. Losing focus or scroll position when closing a modal interrupts reading.

**CirCure's approach.** A sticky stage and clipping window gradually reveal the photograph. Its scale follows scroll progress and returns to the corresponding state on reversal. An optional letter uses a native modal dialog with opening and closing motion connected to its button. The sheet scrolls independently; closing returns focus to the button while retaining the photograph and page position. Reduced motion uses a short fade.

The page records its reference to Wolverine Worldwide's website. Consult and credit the [original page's design sources](https://2026.igem.wiki/jlu-fbh/visual-design#design-references) when adapting this approach.

**When adapting it.** Press Escape during opening, repeatedly open and close, and change window height. Check keyboard focus, internal scrolling for a long letter, background position, and photograph framing on narrow screens.

### 9.6 Refine the Details, Keep the Record

**[Open this section on the Wiki: explore demonstrations and expandable details ↗](https://2026.igem.wiki/jlu-fbh/visual-design#design-record)**

Inspect the sketches, earlier versions, and comparisons, and expand the implementation notes to follow the reasons behind the revisions.

**Problem.** A final screenshot preserves the result, while revision reasons, unsuccessful attempts, and applicable conditions can disappear. Future teams then have little basis for deciding what to adapt.

**CirCure's approach.** Preserve sketches, layers, interface studies, comparisons, and technical notes. Revisit three concrete questions: does the object remain recognizable, is the next step clear, and can the reader return? Lumi connects loading, the cursor, destinations, and the ending, while each component owns its own state and controls.

**When documenting your work.** Record the difficulty, its cause, the change, the comparison, and the conditions checked. Record desktop, narrow screens, reverse scrolling, rapid reversal, resize, keyboard input, and reduced motion separately. Screenshots, successful builds, and browser checks each support conclusions within their own scope.

## Source map

| Question to investigate                                               | Entry points                                                                                                                                                                                                                                                        |
| --------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Sections 1–7; Sections 8–9 narrative, technical notes, and references | [visualDesignPage.ts](../src/data/project/visualDesignPage.ts), [visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts)                                                                                                                            |
| Page assembly and interactive demonstrations                          | [visual-design.tsx](../src/contents/visual-design.tsx), [VisualDesignNarrativePanels.tsx](../src/components/wiki/features/project/VisualDesignNarrativePanels.tsx), [visual-design-studies/](../src/components/wiki/features/project/visual-design-studies/)        |
| Layered artwork and composition                                       | [Story manifest](../src/assets/home/story/manifest.json), [supplements manifest](../src/assets/home/supplements/manifest.json), [CircRnaArtwork.tsx](../src/components/home/CircRnaArtwork.tsx), [layer preparation script](../scripts/prepare-home-supplements.py) |
| Homepage assembly, scrolling, and reading holds                       | [home-story.tsx](../src/contents/home-story.tsx), [useHomeStoryAnimation.ts](../src/hooks/useHomeStoryAnimation.ts), [homeMotion.ts](../src/hooks/homeMotion.ts), [useHomePlayback.ts](../src/hooks/useHomePlayback.ts)                                             |
| Continuous RNA ring transition                                        | [animateCircRnaSequence.ts](../src/hooks/animateCircRnaSequence.ts), [createRnaRingMorph.ts](../src/hooks/createRnaRingMorph.ts)                                                                                                                                    |
| Title introduction and skip behavior                                  | [HomeIntro.tsx](../src/components/home/HomeIntro.tsx)                                                                                                                                                                                                               |
| Folding navigation and in-page search                                 | [Navbar.tsx](../src/components/Navbar.tsx), [PageSearch.tsx](../src/components/PageSearch.tsx)                                                                                                                                                                      |
| Article reader, outline, and citations                                | [WikiRoutePage.tsx](../src/components/wiki/WikiRoutePage.tsx), [citations/](../src/components/wiki/citations/), [architecture specification](../WIKI_ARCHITECTURE_SPEC.md) (Chinese)                                                                                |
| Destination hints and ribbon path                                     | [HomeExploreLinks.tsx](../src/components/home/HomeExploreLinks.tsx), [WikiNextRecord.tsx](../src/components/wiki/WikiNextRecord.tsx), [useWikiNextCompanion.ts](../src/hooks/useWikiNextCompanion.ts)                                                               |
| Photograph reveal and letter                                          | [FooterPhotoScene.tsx](../src/components/FooterPhotoScene.tsx), [useFooterPhotoReveal.ts](../src/hooks/useFooterPhotoReveal.ts)                                                                                                                                     |
| Sketches, studies, and historical images                              | [Visual Design assets](../src/assets/visual-design/), [page demonstrations and supporting material](../src/data/project/visual-design/)                                                                                                                             |

These entry points include shared components and dependent resources. Trace imports, styles, asset manifests, and loading contracts before adapting them. The layer preparation script generates files; reading the code does not require running it.

## Reuse and citation

When citing a design case, name **JLU-FBH, CirCure, iGEM 2026, Visual Design, and the specific section**. For code, also provide the repository URL, file path, and the commit SHA actually used. Record an access date for online pages. You can use this format and add your access date or revision:

> JLU-FBH. CirCure — Visual Design, Section 9: Our Wiki Contribution. iGEM 2026. https://2026.igem.wiki/jlu-fbh/visual-design#interaction-craft. Source repository: https://github.com/xiangyupaiso/Official-wiki.

The main repository uses [CC BY 4.0](../LICENSE). Retain attribution and a license link, and indicate changes. Third-party assets, references, and standalone applications retain their own licensing and source requirements. See [Attributions](https://2026.igem.wiki/jlu-fbh/attributions) for work attribution.

Design references are collected under [Section 9, Design References](https://2026.igem.wiki/jlu-fbh/visual-design#design-references). Repository entries and citation mappings are in [visualDesignNarrative.ts](../src/data/project/visualDesignNarrative.ts) and [visualDesignCitations.ts](../src/data/citations/visualDesignCitations.ts). Read and cite the original sources for claims about cognition, animation, or accessibility. Distinguish those sources' findings, CirCure's design intentions, and results actually validated by the project.

Maintain both language editions, the README summaries, and the documentation indexes together. Check sections and links against page data. Historical demonstrations and early studies may use different layouts or palettes; current behavior is defined by the actual components and styles.
