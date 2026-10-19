import type { WikiSection } from "../../components/wiki/wikiPageTypes";
import type { CitationReference } from "../citations/citationTypes";

/** Design intentions followed by implementation cases and their evidence. */
export const visualDesignNarrativeSections: WikiSection[] = [
  {
    id: "human-centered-experience",
    index: "08",
    kicker: "08 / Humanistic Care",
    navLabel: "Humanistic Care",
    title: "Humanistic Care & Narrative Design",
    summary:
      "Start with the person, connect the science, and leave room for the reader to choose a pace.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "“What if it comes back?” gives the CirCure home story its starting point. We organize the journey around three design intentions: keep the person visible as the science becomes more detailed, make molecular relationships available through simple actions, and let readers choose their own pace. The five choices below carry that approach from the first patient scene to the closing wish for ordinary days.",
        ],
      },
      {
        type: "subheading",
        id: "person-behind-the-question",
        index: "8.1",
        title: "Start with the Person",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "A molecular platform needs a reason to matter to someone encountering it for the first time. We introduce a woman before the research: illustrations of anxiety, surgery and hair loss surround her, then recede as the view approaches. **“Behind every diagnosis, there is a person”** remains beside her silhouette. This change of emphasis keeps the person at the center of the composition.",
          "In the ward, **“What if it comes back?”** gives the research a question to address. Clinical challenges, vaccine approaches and circular RNA follow from that concern. This attention to the lived experience of illness draws on **narrative medicine**.[1] The scene establishes the human motivation for the work without presenting the proposed platform as an assured outcome.",
        ],
      },
      {
        type: "feature",
        key: "design-study-01-patient-question",
      },
      {
        type: "subheading",
        id: "carrying-meaning-between-scenes",
        index: "8.2",
        title: "Connect the Human and Molecular Scales",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The story moves from one patient to a wider population, then into molecular design. We use two kinds of visual continuity to make those changes of scale traceable.",
          "First, the patient’s question rests within a tear. Its pigment disperses and gathers into a cloud as the map appears. The watercolor carries a trace of the ward into the wider breast-cancer context, linking an individual concern with the clinical problem.",
          "Later, a recognizable RNA ring connects the vaccine candidates, circRNA explanation and platform composition. Its backbone stays identifiable as the context and antigen-coding sequence change. The tear-to-cloud transition carries the concern forward; the persistent ring gives the scientific explanation a stable object to follow.",
        ],
      },
      {
        type: "feature",
        key: "design-study-02-visual-continuity",
      },
      {
        type: "subheading",
        id: "understanding-through-participation",
        index: "8.3",
        title: "Make the Design Choice Visible",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Modularity can be difficult to picture from a sentence alone. **“Like changing a key”** turns it into a visible relationship: the reader selects or drags an antigen-coding segment into the circular construct. The highlighted sequence and illustrative target change together, while the backbone stays in place. This reversible action applies **direct manipulation** to one conceptual design choice.[4]",
          "The mechanism view then follows translation, antigen presentation and immune recognition. A, B and C are **conceptual examples**. Nearby notes retain the limits of the analogy: human leukocyte antigen (**HLA**) compatibility matters, recognition differs from killing, and a new target requires validation. The interaction is intended to make the relationship inspectable; it does not establish therapeutic effectiveness.",
        ],
      },
      {
        type: "feature",
        key: "design-study-03-modular-interaction",
      },
      {
        type: "subheading",
        id: "room-to-read-and-choose",
        index: "8.4",
        title: "Leave Room to Read and Choose",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "A scientific explanation asks readers to divide attention between an image, unfamiliar terms and a changing scene. We keep text away from the main action, emphasize the current explanation and let completed compositions settle into stillness. Movement introduces a relationship; the pause gives readers time to examine it.",
          "The authored route also leaves room for local choices, an approach discussed in **narrative visualization**.[2] Readers can change a selection, replay a sequence, open a note, pause the guide or return to an earlier scene. Reduced motion offers a quieter presentation. On research pages, stable headings, an outline and citation return links support longer reading. Section 9 explains how these controls preserve pace and position.",
        ],
      },
      {
        type: "subheading",
        id: "for-more-ordinary-days",
        index: "8.5",
        title: "Return to Ordinary Life",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The closing brings the scientific journey back to the life that motivated it. The woman returns with **“If it comes back, can we give her more options?”** The supporting hands from the loading illustration now hold the patient. **“For more ordinary days”** names the purpose of that return: time with family, plans for tomorrow and a future beyond illness.",
          "The team photograph then identifies the people doing the work. **“A note from us”** opens a longer message on request, allowing the photograph and the letter to occupy separate reading moments. The letter repeats the patient and hands; **“Our work is a beginning”** keeps the closing connected to research that continues. The figures below pair the team with that optional message.",
        ],
      },
      {
        type: "feature",
        key: "design-study-04-people-behind-circure",
      },
    ],
  },
  {
    id: "interaction-craft",
    index: "09",
    kicker: "09 / Interaction Craft",
    navLabel: "Interaction Craft",
    title: "Interaction Craft & Technical Design",
    summary:
      "Six reader needs connect the opening, motion, navigation, destination links and closing sequence.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Section 8 sets out the human and narrative intentions. Here, six reader needs organize their implementation: enter a prepared page, follow motion at a readable pace, keep a sense of location, discover the next step, choose how to close, and retain continuity when input or layout changes. Each case connects a visible behavior to its mechanism; expandable technical notes preserve the finer implementation details.",
        ],
      },
      {
        type: "subheading",
        id: "opening-with-readiness",
        index: "9.1",
        title: "Reliable Entry",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The first scene should arrive with its artwork and layout prepared. The loading screen is available as **HTML and CSS before the application bundle**, and its departure depends on actual page preparation. Status messages distinguish preparation, an extended wait and failure, applying **visibility of system status** to the opening.[10]",
          "The signature begins as the loader leaves, so its first strokes are visible. After the final subtitle word settles, a reading hold keeps the complete sentence available before the patient appears. The wordmark then travels toward its measured position in the header, connecting the introduction with the interface that follows.",
          "Skip resolves the introduction to its completed state. Reduced motion presents the finished title with a Continue control. Resource readiness, animation time and reader input therefore determine different transitions.",
        ],
      },
      {
        type: "feature",
        key: "design-study-05-opening-sequence",
      },
      {
        type: "feature",
        key: "design-details-entry",
      },
      {
        type: "subheading",
        id: "keyframes-and-reading-holds",
        index: "9.2",
        title: "Readable Motion",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "A **keyframe** defines a readable composition: what is visible, which sentence is available and what relationship the scene explains. In the RNA sequence, the ring is established before moving into the platform. Keeping its outline recognizable supports **object constancy**; stable intervals reflect coherence, signaling and segmenting principles in multimedia learning.[3][5]",
          "**Staging** sets the order of changes, **easing** shapes their speed, and a **reading hold** leaves the completed state still. For a single transition, scroll position supplies progress:",
        ],
      },
      {
        type: "code",
        code: "p = clamp((s - s0) / (s1 - s0), 0, 1)\nu = E(p)\nx(p) = (1 - u) * x0 + u * x1",
        label: "From scroll position to one changing property",
      },
      {
        type: "prose",
        paragraphs: [
          "Here, s is scroll position, s0 and s1 bound the segment, and E is the easing function. The amount u interpolates a property x between its endpoints. During a hold, the relevant properties stay unchanged. On a scroll-controlled timeline, duration allocates scroll distance; the automatic guide uses separate travel and hold times.[7]",
          "The study below separates establishing the ring, carrying it, settling it and reading the completed relationship. Intermediate states matter during slow scrolling, reversal and scene jumps, as animation-comprehension research also emphasizes.[6]",
        ],
      },
      {
        type: "feature",
        key: "motion-score-study",
      },
      {
        type: "prose",
        paragraphs: [
          "The story controller puts pace in the reader’s hands. Opening the scene list pauses the guide; choosing a scene moves there and closes the list. Wheel, touch or scrolling-key input transfers control to the reader. Escape dismisses the list and returns focus to its entry. Playback, scene choice and progress remain together in one compact rail.[8][9]",
        ],
      },
      {
        type: "feature",
        key: "design-study-06a-story-controls",
      },
      {
        type: "feature",
        key: "design-details-motion",
      },
      {
        type: "subheading",
        id: "navigation-with-a-landmark",
        index: "9.3",
        title: "Orientation and Return",
        level: 3,
        anchorIds: ["reading-with-context"],
      },
      {
        type: "prose",
        paragraphs: [
          "Readers need to distinguish their place in the story, their current page and the route back from supporting evidence. The global navigation keeps its crest recognizable while its surrounding controls change. It stays full during the opening, becomes compact after that scene leaves the viewport and returns near the closing. Expanding the compact entrance exposes page choices on request, applying **progressive disclosure**.[11]",
          "The same principle guides local feedback: a current-page marker remains distinct from a temporary hover or focus cue. When navigation changes direction mid-transition, it continues from the state already visible. Controls that are fading out become unavailable, and keyboard focus returns to the crest when necessary.",
        ],
      },
      {
        type: "feature",
        key: "design-study-06b-navigation",
      },
      {
        type: "prose",
        paragraphs: [
          "On research pages, the outline, in-page search and citation returns share a positioning convention within the reading frame. A citation opens its full reference entry; **individual backlinks return to the citing sentences**, including separate return points for repeated uses. These routes let readers inspect supporting material while keeping a place in the argument.",
        ],
      },
      {
        type: "feature",
        key: "design-details-navigation",
      },
      {
        type: "subheading",
        id: "small-responses-shared-character",
        index: "9.4",
        title: "Discovering the Next Step",
        level: 3,
        anchorIds: [
          "measuring-artwork-and-layout",
          "ribbon-guided-continuation",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "A destination should be easy to identify before the illustration responds. In the home exploration area, three links sit on each side of the central artwork. Aligned titles provide a common reading edge; selecting one adds its arrow, short topic hint and a single greeting from the corresponding lamb. The other entries stay still.",
          "Hints describe concrete topics, such as **“Why we chose circRNA”** and **“Tools for circular RNA design.”** Hover and keyboard focus share the preview. Scrolling dismisses a pointer preview while retaining a focused entry’s description. Optical alignment uses the visible lamb silhouettes, so their resting sizes and positions remain balanced despite different transparent canvases.",
        ],
      },
      {
        type: "feature",
        key: "design-study-08a-exploration",
      },
      {
        type: "prose",
        paragraphs: [
          "At the end of a research page, the **next-page ribbon** extends this relationship between illustration and destination. Scrolling carries the lamb along the painted surface until it rests beside the explicit page name and arrow. The link remains the navigation target. Hover or keyboard focus reveals its topic without moving the surrounding composition.",
        ],
      },
      {
        type: "feature",
        key: "design-study-08b-ribbon",
      },
      {
        type: "feature",
        key: "design-details-destinations",
      },
      {
        type: "subheading",
        id: "photo-reveal-craft",
        index: "9.5",
        title: "A Deliberate Closing",
        level: 3,
        anchorIds: ["keepsake-on-request"],
      },
      {
        type: "prose",
        paragraphs: [
          "The closing gives readers two successive choices of attention: meet the team, then open its message if they wish. We adapted the clipping and sticky-positioning structure studied on **Wolverine Worldwide’s website** so the photograph appears as the preceding content moves away.[15] An outer window clips a sticky stage; inside it, the photo scales from 1.3 to 1.[13]",
        ],
      },
      {
        type: "code",
        code: "p = clamp((V - y) / H, 0, 1)\nscale = 1.3 - 0.3 * p",
        label: "The same scroll position restores the same photo scale",
      },
      {
        type: "prose",
        paragraphs: [
          "V is viewport height, y the window’s top and H its measured height. At progress 0.5, the scale is 1.15. Reversing the scroll restores the corresponding composition. Reserved height and viewport-specific cropping keep this reveal connected to the page and the people in the image. Frame-scheduled transform updates follow browser animation guidance.[12]",
          "The longer message stays behind **“A note from us”** so it can be read without covering the group by default. The paper opens from that button and returns to it on closing. The photo-reveal sequence and the optional letter are shown together below.",
        ],
      },
      {
        type: "feature",
        key: "design-study-07-footer-reveal",
      },
      {
        type: "prose",
        paragraphs: [
          "The native modal **dialog** moves focus to its labelled heading and returns it to the opening button on close.[14] The letter scrolls inside its own sheet, with the return action in a separate row. Escape can reverse opening; resizing settles the panel into a defined state. Reduced motion uses a short fade. The background photograph retains its geometry throughout the reading session.",
        ],
      },
      {
        type: "feature",
        key: "design-details-closing",
      },
      {
        type: "subheading",
        id: "continuity-across-design-states",
        index: "9.6",
        title: "Shared Design Rules",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Across the cases, three questions describe continuity: **what stays recognizable, what changes, and what supplies progress?** The RNA outline preserves an object while its context changes; the crest anchors a changing menu; the photograph keeps its relationship to scroll position. These are complementary applications of the same design concern.",
        ],
      },
      {
        type: "table",
        headers: ["Reader need", "Stable reference", "Source of change"],
        rows: [
          [
            "Enter the page",
            "Title and header destination",
            "Resource readiness, then animation time or explicit input",
          ],
          [
            "Follow the explanation",
            "RNA outline and readable composition",
            "Scroll position or guide travel and hold times",
          ],
          [
            "Keep a place",
            "Crest, current marker and citing sentence",
            "Navigation state or a selected destination",
          ],
          [
            "Discover the next step",
            "Aligned labels and painted path",
            "Hover, focus or scroll position",
          ],
          [
            "Choose the closing",
            "Team photograph and note button",
            "Scroll position, then an explicit opening or closing action",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Each mechanism also defines what happens when its input changes. Reversal continues from the visible state, layout changes refresh measured geometry, and keyboard focus identifies the available action. Reduced motion keeps the destination and information available with less movement. These rules organize the implementation; they do not by themselves demonstrate comprehension gains or full accessibility compliance.",
        ],
      },
      {
        type: "feature",
        key: "design-details-shared",
      },
      {
        type: "subheading",
        id: "from-the-sketchbook",
        index: "9.A",
        title: "Design Archive",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The archive supplements the six cases with preserved prototypes, composition studies and revisions. July concepts are shown as parallel directions; later comparisons identify the issue under review and the form retained. Interpretive labels and expandable source records provide successive levels of detail, informed by gallery-text and figure-panel guidance.[16][17]",
        ],
      },
      {
        type: "feature",
        key: "design-history-archive",
      },
      {
        type: "subheading",
        id: "design-references",
        index: "9.B",
        title: "Design References",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Sources for Sections 8 and 9 include research concepts, interaction guidance, implementation documentation and the identified reference-site study. Citation backlinks return to the individual passages above.",
        ],
      },
      {
        type: "feature",
        key: "supplement-references",
      },
    ],
  },
];

/** Optional implementation detail stays beside its case without lengthening the main argument. */
export const visualDesignTechnicalNotes: Record<
  string,
  { title: string; paragraphs: string[]; code?: string }
> = {
  "design-details-entry": {
    title: "Technical details · Loading and title handoff",
    paragraphs: [
      "The loader waits for its entrance and the route’s styles, fonts, nearby images and registered scene work. After styles become available, the remaining checks share a bounded waiting period.",
      "SVG masks uncover the CirCure lettering along measured paths, with a glowing tip following each stroke. The subtitle appears word by word. Its reading hold starts after the final word settles; the header wordmark supplies the measured handoff destination.",
    ],
  },
  "design-details-motion": {
    title: "Technical details · Timeline states and story controls",
    paragraphs: [
      "Named timeline labels such as stability-readable, why-readable and advantages-readable locate states. The tweens and still intervals create the composition. The shared helper currently uses a 0.22-second scrub to smooth catch-up; reading time comes from hold intervals and the reader’s pace.",
      "The tear-to-cloud revision balances sequential change with usable paused frames: pigment disperses first, then the map fades in while the cloud gathers. A crossfade handles a pass when image sampling is not ready.",
      'The current scene is marked with aria-current="step". Hover or keyboard focus moves a scene title 2 px and reveals its arrow. CSS transitions keep this list responsive while narrative playback is paused. Playback speed is available in the list; travel and reading holds keep separate timings.',
    ],
  },
  "design-details-navigation": {
    title: "Technical details · Navigation geometry and text search",
    paragraphs: [
      "The compact-navigation trigger waits until the dark opening has left the viewport. The closing trigger uses the pinned scene’s document placeholder, because the visible scene’s screen position remains fixed during pinning. Shared transition progress coordinates the circle, crest, bar and labels; expanded width is measured from the visible controls.",
      "A 70 ms opening delay filters brief category crossings; a 170 ms closing delay leaves time to enter the menu. A critically damped follower carries the tray’s position and velocity through reversals. Icon-and-label groups use a separate 180 ms handoff, and inactive panels are inert.",
      "Menu rows stay in place. A category tint and chevron signal an available link; mouse hover raises only the illustration by 1 px. Keyboard focus adds an outline and the same directional cue. The current page retains its persistent marker.",
      "The outline and inline links convert a target in the reading frame into the corresponding document scroll position. In-page search uses ranges in rendered text and the CSS Custom Highlight API where supported, preserving application-managed text nodes. A selection-based fallback navigates the current match. Controls and hidden content are excluded; ranges refresh after layout changes rebuild home-story word wrappers.",
    ],
  },
  "design-details-destinations": {
    title: "Technical details · Artwork alignment and ribbon travel",
    paragraphs: [
      "Each exploration selection coordinates title emphasis, arrow, hint and a single 780 ms greeting. Gestures vary between a nod, peek, hop and bow, then return to rest. Hints are absolutely positioned; a longer description is associated through aria-describedby. Escape dismisses a hint, and inert story layers suppress hints and greetings.",
      "Keyboard-visible focus takes priority over pointer entry. Deliberate pointer movement may select another entry; leaving restores the focused entry where present. Reduced motion preserves the title, arrow and hint while removing the greeting.",
      "Resting alignment uses visible silhouettes and feet. Engineering is shifted and slightly enlarged; Contribution is slightly reduced. CSS scale and translation for framing remain separate from the greeting animation. The custom cursor likewise separates its stable input coordinate from the follower’s tilt and lag; the native pointer returns around the next-page action.",
      "Ten normalized samples on the ribbon’s upper painted surface are joined by cubic Hermite interpolation. Layout measurements map them through the ribbon rectangle and place the lamb’s foot anchor on the curve. The starting point clears closing text; the endpoint is measured relative to the next-page link.",
      "Travel starts as the head enters the viewport and approaches completion as the section reaches the center. Scroll position supplies target progress; an exponential follower settles displayed progress p toward it. The mapping below has a nonzero entry derivative and a zero arrival derivative. h(x) is the measured painted contact curve.",
      "The body sits above the curve by its foot-anchor offset. Tilt follows the local tangent, capped at 14 degrees and multiplied by sin(πq), so both endpoints are level. Reverse scrolling follows the same curve; large jumps settle directly. Layout and font changes trigger fresh measurements. Below the desktop breakpoint the companion is static; reduced motion places desktop travel at its endpoint.",
      "At the destination, the arrow surface darkens and rotates 45 degrees. An absolutely positioned hint leaves the label and artwork in place. Scrolling clears a mouse preview; visible keyboard focus retains it, and Escape closes it.",
    ],
    code: "q(p) = p + p² - p³\nx(p) = x_start + (x_end - x_start) * q(p)\ny_foot(p) = h(x(p))",
  },
  "design-details-closing": {
    title: "Technical details · Photo geometry and the optional letter",
    paragraphs: [
      "The photo hook writes transform directly. requestAnimationFrame combines scroll notifications; intersection and resize observers limit nearby updates and refresh the window height. Bottom alignment reduces excess wall while retaining the group. Narrow windows derive their height from photo width; wide, shallow screens keep a centered group and fill edges from the same photograph. Reduced motion fixes the final scale.",
      "The note button and paper rectangles are measured when the transition begins. Thirty-three keyframes interpolate translation, horizontal and vertical scale, opacity and corner radius along a shallow arc. Opening takes 540 ms and closing 380 ms. Radius compensation keeps soft edges through scaling.",
      "Escape during opening reverses the active animation from its current frame. If resizing invalidates the geometry, the panel settles open or completes closing according to direction. Closing restores focus with preventScroll; reopening resets the letter to its beginning.",
      "Wheel, touch and scrolling-key input are intercepted at the sheet boundaries without changing page overflow. The underlying sticky geometry, viewport width and photo scale stay stable. The desktop two-column letter becomes one column on narrow screens and stays within the available viewport height.",
      "Footer social tiles lift 4 px and scale to 1.06 on hover, then compress on press. Text links use underlining; source and licence links strengthen their existing underline. Keyboard focus outlines each target.",
    ],
  },
  "design-details-shared": {
    title: "Implementation notes · Measured content and source files",
    paragraphs: [
      "The sponsor strip derives duration from one group’s measured width to keep drift speed consistent after resize. Repeated groups fill the track; only the first is exposed to assistive technology. Reduced motion stops the track and removes duplicates.",
      "HomeIntro.tsx, Navbar.tsx and useFooterPhotoReveal.ts contain the opening, navigation and photo-reveal mechanisms. home-explore.css records optical corrections; useWikiNextCompanion.ts records the ribbon path. The design archive below preserves the corresponding visual studies.",
    ],
  },
};

export const visualDesignReferences: CitationReference[] = [
  {
    id: 1,
    authors: "Charon R.",
    title:
      "Narrative Medicine: A Model for Empathy, Reflection, Profession, and Trust.",
    journal: "JAMA.",
    volumeYear: "286(15):1897–1902 (2001).",
    links: [
      {
        href: "https://doi.org/10.1001/jama.286.15.1897",
        label: "DOI",
      },
    ],
  },
  {
    id: 2,
    authors: "Segel E, Heer J.",
    title: "Narrative Visualization: Telling Stories with Data.",
    journal: "IEEE Transactions on Visualization and Computer Graphics.",
    volumeYear: "16(6) (2010).",
    links: [
      {
        href: "https://vis.stanford.edu/files/2010-Narrative-InfoVis.pdf",
        label: "Author paper",
      },
      {
        href: "https://scivis.github.io/courses/visualstorytelling/segel_heer_2010.pdf",
        label: "Open copy",
      },
    ],
  },
  {
    id: 3,
    authors: "Heer J, Robertson GG.",
    title: "Animated Transitions in Statistical Data Graphics.",
    journal: "IEEE Transactions on Visualization and Computer Graphics.",
    volumeYear: "13(6):1240–1247 (2007).",
    links: [
      {
        href: "https://doi.org/10.1109/TVCG.2007.70539",
        label: "DOI",
      },
      {
        href: "https://sites.stat.columbia.edu/gelman/communication/HeerRobertson2007.pdf",
        label: "Open paper",
      },
    ],
  },
  {
    id: 4,
    authors: "Shneiderman B.",
    title: "Direct Manipulation: A Step Beyond Programming Languages.",
    journal: "Computer.",
    volumeYear: "16(8):57–69 (1983).",
    links: [
      {
        href: "https://doi.org/10.1109/MC.1983.1654471",
        label: "DOI",
      },
      {
        href: "https://www.cs.umd.edu/~ben/papers/Shneiderman1983Direct.pdf",
        label: "Author paper",
      },
    ],
  },
  {
    id: 5,
    authors: "Mayer RE, Moreno R.",
    title: "Nine Ways to Reduce Cognitive Load in Multimedia Learning.",
    journal: "Educational Psychologist.",
    volumeYear: "38(1):43–52 (2003).",
    links: [
      {
        href: "https://doi.org/10.1207/S15326985EP3801_6",
        label: "DOI",
      },
    ],
  },
  {
    id: 6,
    authors: "Tversky B, Morrison JB, Betrancourt M.",
    title: "Animation: Can It Facilitate?",
    journal: "International Journal of Human-Computer Studies.",
    volumeYear: "57:247–262 (2002).",
    links: [
      {
        href: "https://www.tc.columbia.edu/faculty/bt2158/faculty-profile/files/_Morrison_Betrancourt_AnimationCanitfacilitate.pdf",
        label: "Author-hosted paper",
      },
    ],
  },
  {
    id: 7,
    authors: "GSAP.",
    title: "ScrollTrigger, timeline labels and easing.",
    journal: "Official documentation.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://gsap.com/docs/v3/Plugins/ScrollTrigger/",
        label: "ScrollTrigger",
      },
      {
        href: "https://gsap.com/docs/v3/GSAP/Timeline/addLabel%28%29/",
        label: "Timeline labels",
      },
      {
        href: "https://gsap.com/docs/v3/Eases/",
        label: "Easing",
      },
    ],
  },
  {
    id: 8,
    authors: "W3C Web Accessibility Initiative.",
    title:
      "Understanding Success Criterion 2.3.3: Animation from Interactions.",
    journal: "WCAG 2.2 Understanding documents.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html",
        label: "W3C",
      },
    ],
  },
  {
    id: 9,
    authors: "W3C Web Accessibility Initiative.",
    title: "Understanding Success Criterion 2.2.2: Pause, Stop, Hide.",
    journal: "WCAG 2.2 Understanding documents.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html",
        label: "W3C",
      },
    ],
  },
  {
    id: 10,
    authors: "Harley A.",
    title: "Visibility of System Status (Usability Heuristic #1).",
    journal: "Nielsen Norman Group.",
    volumeYear: "3 June 2018.",
    links: [
      {
        href: "https://www.nngroup.com/articles/visibility-system-status/",
        label: "Article",
      },
    ],
  },
  {
    id: 11,
    authors: "Nielsen J.",
    title: "Progressive Disclosure.",
    journal: "Nielsen Norman Group.",
    volumeYear: "3 December 2006.",
    links: [
      {
        href: "https://www.nngroup.com/articles/progressive-disclosure/",
        label: "Article",
      },
    ],
  },
  {
    id: 12,
    authors: "web.dev.",
    title: "How to create high-performance CSS animations.",
    journal: "Browser implementation guidance.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://web.dev/articles/animations-guide",
        label: "Guide",
      },
    ],
  },
  {
    id: 13,
    authors: "MDN Web Docs.",
    title: "position: sticky.",
    journal: "CSS reference.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/position",
        label: "Reference",
      },
    ],
  },
  {
    id: 14,
    authors: "W3C Web Accessibility Initiative.",
    title: "Dialog (Modal) Pattern.",
    journal: "ARIA Authoring Practices Guide.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/",
        label: "Pattern",
      },
    ],
  },
  {
    id: 15,
    authors: "Wolverine Worldwide.",
    title: "Website: closing photo-reveal reference.",
    journal:
      "Visual and implementation reference studied during our footer iteration.",
    volumeYear: "Study recorded 17 October 2026.",
    links: [
      {
        href: "https://wolverineworldwide.com/",
        label: "Reference site",
      },
    ],
  },
  {
    id: 16,
    authors: "Shepherd B. / Victoria and Albert Museum.",
    title: "Getting it write! Re-vamped V&A gallery text writing guidelines.",
    journal: "V&A Blog.",
    volumeYear: "26 November 2019.",
    links: [
      {
        href: "https://www.vam.ac.uk/blog/museum-life/getting-it-write",
        label: "Gallery-text guidance",
      },
    ],
  },
  {
    id: 17,
    authors: "Nature Research.",
    title: "Building and exporting figure panels.",
    journal: "Research figure guide.",
    volumeYear: "Accessed 19 October 2026.",
    links: [
      {
        href: "https://research-figure-guide.nature.com/figures/building-and-exporting-figure-panels/",
        label: "Figure-panel guidance",
      },
    ],
  },
];
