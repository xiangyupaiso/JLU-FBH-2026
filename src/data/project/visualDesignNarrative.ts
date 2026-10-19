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
          "**“What if it comes back?”** is the question that connects the CirCure homepage. The story begins with a person, widens to the clinical problem, introduces the proposed circRNA platform, and returns to the ordinary life that motivates the research. Readers can pause, revisit a scene or continue at their own pace. This section explains the purpose of that sequence; Section 9 describes the interactions that support it.",
        ],
      },
      {
        type: "subheading",
        id: "person-behind-the-question",
        index: "8.1",
        title: "Begin with the Person",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Before introducing circRNA, we show the person whose concern gives the research a purpose. Illustrations of anxiety, surgery and hair loss surround a woman, then recede as the view approaches. **“Behind every diagnosis, there is a person”** remains beside her silhouette, establishing a human reference for the scientific explanation that follows.",
          "In the ward, **“What if it comes back?”** leads into the treatment challenges, vaccine approaches and circular RNA platform. This attention to the lived experience of illness draws on **narrative medicine**.[1] The dialogue belongs to the illustrated story and is not attributed to an individual patient. It introduces the motivation for the research while leaving its outcome open.",
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
        title: "Carry Meaning Across Changes in Scale",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The narrative changes scale from a patient to a wider population, then to molecular design. Each change needs a connection to the view the reader has just left. We use two forms of continuity for these different tasks.",
          "**Emotional continuity connects the wider problem to the patient’s concern.** Her question rests within a tear; its pigment disperses and gathers into a cloud as the map appears. The watercolor carries a trace of the ward into the population view. This transition is a narrative metaphor.",
          "**Object continuity keeps a scientific subject recognizable in a new context.** The RNA ring appears across the vaccine candidates, circRNA explanation and platform composition. Retaining its outline gives the reader the same object to follow as new relationships are introduced. The next interaction uses that reference to show which part of the construct can change.",
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
        title: "Make Modularity Visible",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "**“Like changing a key” makes one aspect of modularity visible.** The reader selects or drags an antigen-coding segment into the circular construct. The backbone stays visible while the highlighted segment and illustrative target change together. Switching between selections allows the reader to compare the shared and replaceable parts, applying **direct manipulation** to a conceptual design choice.[4]",
          "The mechanism view then follows translation, antigen presentation and immune recognition. A, B and C are **conceptual examples**. Nearby notes explain the limits of the analogy: human leukocyte antigen (**HLA**) compatibility matters, recognition differs from killing, and each new target requires validation. The interaction explains a design relationship; therapeutic effectiveness requires separate scientific evidence.",
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
        title: "Leave the Pace to the Reader",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Readers differ in scientific familiarity, reading speed and their response to an illness-related story. A guided sequence therefore needs opportunities to pause, revisit an explanation or move on. This balance between an authored route and local choice draws on **narrative visualization**.[2]",
        ],
      },
      {
        type: "list",
        items: [
          "**Time to understand.** Text stays away from the main action, the current explanation receives emphasis, and a completed composition settles into a **reading hold**.",
          "**Choice of route.** Pause, replay and scene selection let readers revisit or leave a moment.",
          "**Choice of movement.** Reduced motion offers a quieter presentation.",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "The closing letter follows the same principle: the longer personal message opens only when requested. Section 9 explains the timing, controls and optional reading states behind these choices.",
        ],
      },
      {
        type: "feature",
        key: "design-reader-choice",
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
          "The return to the clinical scene changes who asks the question. **“What if it comes back?”** expresses the patient’s uncertainty. **“If it comes back, can we give her more options?”** asks how the research team can respond. The word **“we”** introduces their responsibility; **“more options”** gives the work a direction without resolving the uncertainty.",
          "The team photograph identifies the people taking up that question. Readers can then open **“A note from us”**, where the woman and supporting hands return beside **“For more ordinary days.”** Time with family, plans for tomorrow and a future that feels like her own give the project a human purpose. **“Our work is a beginning”** closes the story with a commitment to further inquiry, while therapeutic outcomes remain subject to scientific evaluation.",
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
      "Five interaction cases, subpage color studies and a typography system connect reader needs with visual choices and implementation details.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Section 8 explains why the story follows the patient’s question. The five interaction cases below show how a reader enters that story, follows its changing representations, stays oriented, chooses a destination and meets the team. Separate color and typography studies consider the quieter reading space of subpages. Each case connects a reading need with a design response; figures show the relevant states, and expandable notes explain their mechanisms. Historical comparisons are identified where they are used.",
        ],
      },
      {
        type: "subheading",
        id: "opening-with-readiness",
        index: "9.1",
        title: "Prepare the Opening",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The opening needs to make waiting understandable and give the first scene time to prepare. The loading screen is available as **HTML and CSS before the application bundle**. Its messages distinguish preparation, an extended wait and failure, applying **visibility of system status** to the loading interval.[10] Readiness checks and a bounded waiting period govern its departure.",
          "Once the loader leaves, the CirCure signature introduces the project. The subtitle’s reading hold begins after its final word settles, so the complete sentence is available before the patient appears. The wordmark then moves to its measured position in the header, carrying the project identity into the interface.",
          "Skip takes the introduction to its completed state. Reduced motion presents the finished title with a Continue control. These alternatives give the reader a way forward while keeping resource preparation, animation timing and reader input as separate transition conditions.",
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
        title: "Stage Motion for Reading",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Motion needs both a prepared composition and a clear reading sequence. We first separate the painted elements that need independent control, then decide when each one moves, appears and remains still. The following steps connect the artwork handoff to the reader’s experience.",
        ],
      },
      {
        type: "subheading",
        id: "prepare-painted-layers",
        index: "9.2.1",
        title: "Prepare the Painted Layers",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "**Separate elements according to how they need to move, overlap or be reused.** Backgrounds, characters, objects and annotations begin as parts of one shared composition. Keeping them separate lets a patient remain still while a medical student enters, or lets the RNA ring move while its explanation waits. A common canvas, transparent edges and original layer positions preserve their alignment when the frontend assembles the scene.",
        ],
      },
      {
        type: "feature",
        key: "design-painted-layers",
      },
      {
        type: "table",
        headers: [
          "Artwork unit",
          "What separation enables",
          "Example in CirCure",
        ],
        rows: [
          [
            "Background and setting",
            "Hold the setting while foreground elements change",
            "The ward background remains separate from the patient and medical student",
          ],
          [
            "Characters",
            "Position people separately and control their overlap",
            "The closing clinic scene places the doctor and patient on distinct layers",
          ],
          [
            "Objects and annotations",
            "Reveal, carry and explain an object at different moments",
            "The circRNA ring, heading and benefit sketches have separate animation targets",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "The [supporting paintings and layer exports](#artwork-layer-exports) show the source parts behind these compositions. The notes below distinguish the desktop artwork format from the coordinates used to assemble and animate existing layers.",
        ],
      },
      {
        type: "feature",
        key: "design-details-artwork",
      },
      {
        type: "feature",
        key: "design-details-layers",
      },
      {
        type: "subheading",
        id: "build-readable-states",
        index: "9.2.2",
        title: "Build Readable States",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "When an object moves and its explanation changes at once, the reader has to follow both. We therefore plan **readable states**: compositions with a visible object, a complete explanation and a relationship to examine. Establishing the RNA ring before moving it into the platform supplies a recognizable reference. Still intervals draw on object constancy, coherence, signaling and segmenting principles.[3][5]",
          "**Staging** sets the order of changes, **easing** shapes their speed, and a **reading hold** keeps a completed composition still. On a scroll-controlled timeline, duration allocates scroll distance; the automatic guide uses separate travel and hold times.[7] The four-state study below separates introduction, movement, arrival and reading.",
          "A readable endpoint also needs a coherent route into and out of it. Slow scrolling, reversal and scene jumps should resolve to a clear composition. Animation research informs this design question; the examples here do not measure comprehension.[6]",
        ],
      },
      {
        type: "feature",
        key: "motion-score-study",
      },
      {
        type: "feature",
        key: "design-revision-ring",
      },
      {
        type: "feature",
        key: "design-details-motion",
      },
      {
        type: "prose",
        paragraphs: [
          "**A fixed reading position extends the same idea to a sequence of people.** In the early Human Practices prototype CircularEvidenceTimeline, a central card keeps its position while its portrait, role and account change. A record list and circular progress line show which conversation is selected. The reader can compare contributions in one place.",
          "The recovered prototype replaces the record fields directly. A restrained **fade → read → fade** rhythm is a proposed refinement: the account would change at the same position, then remain still for reading. The note below separates the behavior preserved in the source from that future direction. Its demonstration records are separate from verified stakeholder interview evidence.",
        ],
      },
      {
        type: "feature",
        key: "design-details-fixed-focus",
      },
      {
        type: "subheading",
        id: "choose-scene-transitions",
        index: "9.2.3",
        title: "Choose the Transition for the Relationship",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "**Use the transition to explain why the view changes.** In the tear-to-cloud sequence, pigment from the watercolor connects the patient’s concern with the map. In the clinical sequence, the nurse illustration gives way to the doctor as the story moves from treatment challenges toward a research direction. Smaller challenge illustrations gather into their written keywords. These are visual and editorial relationships, without implying a physical or biological transformation.",
          "**End with stable artwork or readable text.** Original images and native text take over as the particles settle. Where the reader needs to follow the same object into a new context, the magnifier and RNA ring retain their recognizable outlines. Choosing between these treatments connects the implementation to the emotional and object continuity described in Section 8.2.",
        ],
      },
      {
        type: "feature",
        key: "design-particle-endpoints",
      },
      {
        type: "feature",
        key: "design-details-particles",
      },
      {
        type: "subheading",
        id: "control-story-playback",
        index: "9.2.4",
        title: "Keep the Reader in Control",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "Readable states still need controls for readers who want a different pace. Opening the scene list pauses the guide; selecting a scene moves there and closes the list. Wheel, touch or scrolling-key input transfers control to the reader, and Escape returns focus to the scene-list entry. Pause controls stop playback, while reduced-motion alternatives limit interaction-triggered movement.[8][9] The component study below lets readers try the controls separately from the full story.",
        ],
      },
      {
        type: "feature",
        key: "design-study-06a-story-controls",
      },
      {
        type: "subheading",
        id: "navigation-with-a-landmark",
        index: "9.3",
        title: "Keep the Reader Oriented",
        level: 3,
        anchorIds: ["reading-with-context"],
      },
      {
        type: "prose",
        paragraphs: [
          "Orientation involves three questions: **where am I in the story, which page am I on, and where do I return after checking evidence?** The scene controller answers the first. Global navigation supports movement between pages, while the outline, search and citation backlinks support movement within a page.",
        ],
      },
      {
        type: "split",
        id: "navigation-editorial",
        aside: { type: "feature", key: "design-study-06b-navigation" },
        prose: [
          {
            type: "prose",
            paragraphs: [
              "The navigation keeps its crest recognizable as the surrounding controls change. A full bar supplies context at the opening; a transparent surface and soft text shadows allow the illustration to remain visible behind it. Later, a compact crest leaves more space for the story, and expansion restores page choices on request: an application of **progressive disclosure**.[11]",
              "In the middle of the home story, **scrolling up unfolds the navigation; scrolling down folds it into the circular entrance**. Small movements are filtered before changing state. Near the opening and closing, scene position takes priority so that a brief direction change cannot interrupt the handoff.",
            ],
          },
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**The order of entry and exit keeps the controls clear of the illustration.** Full-bar labels lift and fade as the opening passes; capsule labels enter after its surface starts expanding and retire before it finishes closing. The crest remains the visual reference, and reversals continue from the current composition. A persistent current-page marker stays distinct from temporary hover or focus cues. Hidden controls become unavailable, with focus returning to the crest when necessary.",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "On research pages, the outline and in-page search locate material within the argument. A reference’s **backlink returns to the citing sentence**, so checking evidence has a defined return route. Section 4 describes the citation system; its role here is to preserve the reader’s place through that detour.",
        ],
      },
      {
        type: "feature",
        key: "design-details-navigation",
      },
      {
        type: "feature",
        key: "design-details-navigation-motion",
      },
      {
        type: "subheading",
        id: "small-responses-shared-character",
        index: "9.4",
        title: "Guide the Eye, Leave Room to Read",
        level: 3,
        anchorIds: [
          "measuring-artwork-and-layout",
          "ribbon-guided-continuation",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "A destination should be recognizable before the reader interacts with it. We apply that principle at two points: the homepage exploration area presents several routes, and the **Next page** composition offers one continuation after a research page. Labels identify the route; spacing, artwork and local feedback support the choice.",
        ],
      },
      {
        type: "subheading",
        id: "readable-destination-labels",
        index: "9.4.1",
        title: "Make Each Destination Readable",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "In the exploration area, **aligned titles form stable reading edges** around the central illustration. The lambs sit outside those edges, and space between entries keeps the six choices distinct. Optical adjustments follow each lamb’s visible silhouette and feet, so transparent canvas margins do not determine its apparent size.",
          "The page names identify the routes, while Lumi connects them visually. Short hints add concrete topics such as **“Why we chose circRNA”** and **“Tools for circular RNA design.”** At rest, these explanations stay hidden, leaving the names and illustration clear. Feedback appears beside the selected entry, applying progressive disclosure.[11]",
        ],
      },
      {
        type: "feature",
        key: "design-study-08a-exploration",
      },
      {
        type: "feature",
        key: "design-revision-labels",
      },
      {
        type: "subheading",
        id: "continue-to-next-page",
        index: "9.4.2",
        title: "Lead Toward the Next Page",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "A research-page ending first offers a closing thought, then a continuation. The small **“Next page”** label introduces the larger destination name and its circular arrow. The difference in scale establishes the reading order; the open space lets the reader finish the closing explanation before choosing the next route.",
          "**Less is more here means giving one reading moment room to stand on its own.** Generous space around and below the ribbon lets the closing thought and next destination occupy a quiet, page-like scene. As scrolling continues, the institutional footer enters later. Showing article content, continuation and institutional marks together would ask the reader to divide attention between finishing, choosing and identifying the team. Spacing separates those tasks and limits how much information competes within one view.",
          "**Restraint depends on hierarchy, not empty area alone.** The closing sentence, destination name and arrow remain available; secondary hints appear on request. Space gives those few elements emphasis and room to absorb one thought before moving on. The amount must suit the viewport: narrow screens reflow the content rather than preserving desktop-sized gaps. This balances information density and attention as a design intention; comprehension and information retention have not been measured.",
          "**The lamb follows the painted ribbon toward that destination.** As the reader scrolls, its feet track the watercolor surface and settle beside the page name and arrow. The artwork supplies both a recurring character and the geometry of the route. This is an intended visual cue; its effect on readers’ gaze has not been measured.",
          "Scrolling back retraces the path. On smaller screens, the lamb stays in a static composition; reduced motion presents the desktop arrival state. The destination remains a text link in each presentation.",
        ],
      },
      {
        type: "feature",
        key: "design-study-08b-ribbon",
      },
      {
        type: "feature",
        key: "design-revision-ribbon",
      },
      {
        type: "subheading",
        id: "destination-hints-on-request",
        index: "9.4.3",
        title: "Reveal Supporting Detail on Request",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "**Hover or keyboard focus reveals information beside the active link.** In exploration, the title gains emphasis, an arrow and a short topic hint, accompanied by one greeting from its lamb. At the Next page link, the circular surface darkens and the arrow turns toward continuation. Neighboring entries remain still.",
          "The hint occupies a prepared position below the label. Opacity and a slight entrance movement reveal it without moving the label, ribbon or surrounding content. Escape dismisses the hint. The permanently visible page name and ordinary link action keep the route available without requiring the preview.",
        ],
      },
      {
        type: "feature",
        key: "design-study-08c-on-demand-hints",
      },
      {
        type: "feature",
        key: "design-details-destinations",
      },
      {
        type: "subheading",
        id: "photo-reveal-craft",
        index: "9.5",
        title: "Reveal the Team, Offer the Letter",
        level: 3,
        anchorIds: ["keepsake-on-request"],
      },
      {
        type: "prose",
        paragraphs: [
          "The closing gives readers two choices in sequence: meet the team, then decide whether to read its message. We adapted a photo-reveal structure studied on **Wolverine Worldwide’s website**.[15] A clipping window and sticky stage let the photograph emerge as the preceding content moves away.[13]",
          "The photo’s scale follows scroll position, so returning to a position restores the corresponding composition. Reserved space and viewport-specific framing retain the group as the page moves. Frame-scheduled transform updates follow browser animation guidance.[12] A light shade and soft wordmark shadows keep **CirCure** legible while leaving the people visible; the technical note records the geometry and styling values.",
          "The longer message opens through **“A note from us”**. Its paper moves out from the button and returns there on closing, giving the letter a clear entry and return point. Keeping it optional lets the reader choose how long to stay with the closing, continuing the principle described in Section 8.4.",
        ],
      },
      {
        type: "feature",
        key: "design-study-07-footer-reveal",
      },
      {
        type: "prose",
        paragraphs: [
          "A native modal **dialog** moves focus to its labelled heading and returns it to the opening button on close.[14] The letter has its own scrollable sheet and a separate return action. Escape can close or reverse the opening, and reduced motion uses a short fade. Keeping the background photograph’s geometry stable gives the reading session a defined place to return to.",
        ],
      },
      {
        type: "feature",
        key: "design-details-closing",
      },
      {
        type: "subheading",
        id: "subpage-color-studies",
        index: "9.6",
        title: "A Quieter Language for Subpages",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The earlier subpage studies address a different reading task: moving from an expressive opening into sustained research text. **Flowing color fields frame a quiet reading area.** Broad bands of blue, cyan, rose, apricot and lilac have soft edges and fine grain; their sense of movement comes from the composition of a static image.",
          "The five backgrounds below vary their palettes while keeping open areas for text. Cool blue and cyan shape the Dry Lab studies, apricot and lilac soften the Wet Lab studies, and rose connects the Project previews. These preserved directions are design references. Their practical lesson is to place atmosphere around the entrance and give the main text a calm surface.",
        ],
      },
      {
        type: "feature",
        key: "design-study-10-subpage-color",
      },
      {
        type: "feature",
        key: "design-details-subpage-color",
      },
      {
        type: "subheading",
        id: "typography-and-reading-hierarchy",
        index: "9.7",
        title: "Choosing Type for Different Reading Tasks",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Our typography begins with **the task of each piece of text**: introduce a scientific story, sustain a long explanation, identify a destination or mark a technical detail. Fraunces and Lexend form the main title–body pairing. Additional families serve specific interface and editorial roles. The specimens below show the fonts used in the current styles and explain the visual reasoning behind that division.",
        ],
      },
      {
        type: "feature",
        key: "design-typography-study",
      },
      {
        type: "subheading",
        id: "continuity-across-design-states",
        index: "9.8",
        title: "Continual Refinement & Shared Principles",
        level: 3,
      },
      {
        type: "feature",
        key: "design-craft-principle",
      },
      {
        type: "prose",
        paragraphs: [
          "The interaction cases return to three questions: **what remains recognizable, what advances the change, and how does the reader return?** The table connects these questions to specific mechanisms, giving the next revision something concrete to check.",
        ],
      },
      {
        type: "split",
        id: "lumi-editorial",
        aside: { type: "feature", key: "design-lumi-roles" },
        prose: [
          {
            type: "prose",
            paragraphs: [
              "Lumi appears in the loading screen, cursor, exploration links, next-page ribbon and team note. Her artwork connects these moments; labels, status messages and controls explain the action at each one. The shared conventions and their component boundaries are recorded in the implementation note below.",
            ],
          },
        ],
      },
      {
        type: "table",
        headers: ["Shared principle", "Across the cases", "Review question"],
        rows: [
          [
            "Keep a recognizable reference",
            "RNA outline, navigation crest and aligned destination labels",
            "Can the reader identify what persists as the surrounding view changes?",
          ],
          [
            "Make progress explicit",
            "Resource readiness, scroll-linked composition and the optional note button",
            "What advances this transition, and can the completed state be inspected?",
          ],
          [
            "Preserve a route back",
            "Reversible motion, letter dismissal and citation backlinks",
            "After changing direction or checking something, where does reading resume?",
          ],
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Review includes reverse scrolling, scene jumps, layout changes, keyboard input and reduced motion. The technical notes describe the implementation; the archive identifies preserved studies and revisions. This evidence can document behavior and design decisions. Claims about comprehension, attention or full accessibility compliance require separate evaluation.",
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
          "The archive supplies the wider record behind the selected comparisons. **Eleven initial drafts** are grouped by subject: the patient’s question, treatment concerns, page composition, molecular explanation and care. Supporting layers show how those paintings can be assembled, and **six design folios** preserve interface studies and revisions. Grouping by subject does not establish the drawing order. Short labels lead to the complete images, following gallery-text and figure-panel guidance.[16][17]",
        ],
      },
      {
        type: "feature",
        key: "design-study-09-artwork-archive",
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

/** The motto is expressed through concrete review questions, not a claim of perfection. */
export const visualDesignCraftPrinciple = {
  label: "Our approach to craft",
  motto: "精益求精，止于至善",
  translation: "Pursue excellence through continual refinement.",
  description:
    "For CirCure, this commitment takes the form of observation, revision and review. A change earns its place when it clarifies a relationship, preserves a usable state or removes a distraction. The work remains open to further correction.",
  steps: [
    {
      title: "Observe",
      body: "Identify the point where an object becomes hard to follow, a label competes with its neighbors or an action loses its destination.",
    },
    {
      title: "Refine",
      body: "Revise the detail responsible: preserve the outline, align the reading edge or fit the movement to the original artwork.",
    },
    {
      title: "Recheck",
      body: "Compare the revised state, inspect reversal and alternative inputs, and keep the conclusion within the evidence available.",
    },
  ],
};

export const visualDesignArchiveHighlights = [
  {
    key: "design-revision-ring",
    title: "Keep the object recognizable",
    body: "The earlier transfer disperses the ring into particles. The revision retains a continuous outline, giving the changing scene a recognizable object to follow. The choice favors a stable reference during the transition. These saved views compare representations; their animation progress is not matched.",
    target: "archive-ring-revision",
    images: [
      {
        label: "Earlier · particle transfer",
        path: "history/images/08-ring-particles.jpg",
        alt: "Saved earlier frame with a particle-based ring transfer.",
        width: 1440,
        height: 900,
      },
      {
        label: "Revision · continuous outline",
        path: "history/images/09-ring-solid.jpg",
        alt: "Saved revised frame retaining the continuous RNA outline.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    key: "design-revision-labels",
    title: "Give labels a common reading edge",
    body: "Curved rows give the earlier layout a flowing composition, but leave titles on different reading edges. The revision aligns the labels and reveals one local hint on selection. It gives up the curved arrangement to keep scanning positions stable and concentrate feedback on one choice.",
    target: "archive-reading-edge",
    images: [
      {
        label: "Earlier · curved rows",
        path: "history/images/10-explore-arc-standard.jpg",
        alt: "Earlier exploration layout with curved labels and all descriptions shown.",
        width: 1440,
        height: 900,
      },
      {
        label: "Revision · aligned labels",
        path: "history/images/11-explore-aligned-standard.jpg",
        alt: "Revised exploration layout with aligned labels and a local hint.",
        width: 1440,
        height: 900,
      },
    ],
  },
  {
    key: "design-revision-ribbon",
    title: "Let the artwork supply the route",
    body: "Replacing the smooth band with a watercolor ribbon changes the surface beneath the lamb. Resampling that painted edge lets the foot contact follow its irregular shape. The revision keeps the handmade contour and adapts the motion to it, while retaining an explicit next-page destination.",
    target: "archive-painted-route",
    images: [
      {
        label: "Earlier · smooth band",
        path: "history/images/14-ribbon-before.jpg",
        alt: "Earlier smooth ribbon beneath the next-page destination.",
        width: 1265,
        height: 889,
      },
      {
        label: "Revision · painted path",
        path: "history/images/15-ribbon-after.jpg",
        alt: "Revised watercolor ribbon with the lamb placed on its painted surface.",
        width: 1265,
        height: 889,
      },
    ],
  },
];

/** Reconstruct the team's framing trials within one consistent display frame. */
export const visualDesignArtworkRatios = [
  {
    ratio: "4:3",
    variant: "initial",
    label: "Initial canvas",
    detail: "Side gaps occupy 8.3% of the frame on each side.",
  },
  {
    ratio: "16:9",
    variant: "wide",
    label: "Wider trial",
    detail: "Top and bottom gaps each occupy 5% of the frame height.",
  },
  {
    ratio: "16:10",
    variant: "standard",
    label: "Artwork delivery standard",
    detail: "Fills the frame. This 16:9 source loses 5% from each side.",
  },
] as const;

/** Optional implementation detail stays beside its case without lengthening the main argument. */
export const visualDesignTechnicalNotes: Record<
  string,
  {
    title: string;
    description: string;
    sections: { title: string; paragraphs: string[] }[];
    code?: string;
    codeLabel?: string;
  }
> = {
  "design-details-subpage-color": {
    title: "Technical details · Color fields and reading surfaces",
    description:
      "How the preserved subpage implementation separates a textured opening from the reading area.",
    sections: [
      {
        title: "One structure, several palettes",
        paragraphs: [
          "The preserved Dry Lab stylesheet places the original bitmap on the hero’s ::before layer. A route-specific --dry-lab-art value selects the image, while the title and introduction remain HTML above it. Project previews reuse that structure and supply their own rose-colored backgrounds. Shared placement and typography keep the layout consistent as the palette changes.",
          "The image uses background-size: cover and a vertical CSS mask that fades its lower edge into the reading surface. This lets a textured opening meet a plain content area without a hard boundary. The image itself is static. The flowing impression comes from the painted bands and their direction, with no continuous background animation required.",
        ],
      },
      {
        title: "Adapting the color composition",
        paragraphs: [
          "When adapting this direction, check the title against its actual crop at each viewport, keep the main reading area quiet, and retain text labels alongside palette differences. These are review criteria for future use; the studies do not establish measured readability or accessibility outcomes.",
        ],
      },
    ],
  },
  "design-details-layers": {
    title: "Technical details · From painted layers to animated components",
    description:
      "Follow the layered master through aligned exports, component assembly and animation control.",
    sections: [
      {
        title: "Prepare the layered handoff",
        paragraphs: [
          "Delivery starts with a layered master and a reference composite. Split elements when their motion, overlap or reuse needs to differ. Export related layers against the same canvas origin and dimensions, preserve transparency, and identify their scene, role and stacking order. Keep parts that always move together grouped. For new artwork handoffs, paint enough background and hidden character detail to cover the regions that movement will expose; a flattened composite cannot supply those missing pixels.",
        ],
      },
      {
        title: "Restore the original coordinates",
        paragraphs: [
          "Runtime images can trim transparent margins while retaining their position on the master canvas. For a canvas W × H and a layer’s bounding rectangle (x0, y0, x1, y1), normalized left, top, width and height recover its placement. The equations below use canvas-relative percentages. Cropping the bitmap and centering each crop independently would lose that registration.",
        ],
      },
      {
        title: "Assemble cropped layers in components",
        paragraphs: [
          "The story and supplement manifests record each layer’s file, number, position, size and source hash. prepare-home-supplements.py writes lossless WebP crops and normalized coordinates. home-story.tsx and CircRnaArtwork.tsx read those coordinates into positioned layers. Source framing stays distinct from the 16:10 delivery guidance above: existing scenes retain their own aspect metadata, and responsive layouts still need composition checks.",
        ],
      },
      {
        title: "Separate layout from animation",
        paragraphs: [
          "Components assemble the artwork; animation controllers schedule its changes. The data-layer attributes identify individual targets. CircRnaArtwork keeps the ring, heading and benefit sketches separate, while PaintedReveal reveals original painted pixels through an SVG mask. animateCircRnaSequence controls the ring’s handoff to the platform as the outgoing annotations fade. Give layout and motion separate responsibilities so that two controllers do not compete for the same transform on the same element.",
        ],
      },
      {
        title: "Check the assembled scene and reading alternatives",
        paragraphs: [
          "Declare a transform origin appropriate to the gesture, preserve the intended stacking order, and check the assembled pose before adding motion. Text explanations and controls retain their HTML semantics; a composed artwork can have one accessible description while its decorative image layers are hidden from assistive technology. Review the completed composition, reverse motion, resize and reduced-motion states against the same visual reference.",
        ],
      },
      {
        title: "Keep performance claims within the evidence",
        paragraphs: [
          "Layer separation enables independent control and reuse; it does not by itself guarantee a higher frame rate. Cropped runtime assets reduce empty bitmap area, but extra decoded images, overlapping transparent surfaces, masks and filters still have costs. Inspect decoding, rendering and actual device behavior separately. This note documents the asset and animation workflow; it does not report a device performance benchmark.",
        ],
      },
    ],
    code: "left   = 100 * x0 / W\ntop    = 100 * y0 / H\nwidth  = 100 * (x1 - x0) / W\nheight = 100 * (y1 - y0) / H",
    codeLabel:
      "Restore a cropped layer on its original canvas using percentage coordinates",
  },
  "design-details-artwork": {
    title: "Technical details · From 4:3 and 16:9 to a 16:10 artwork standard",
    description:
      "Compare the canvas trials, the delivery standard and the cropping applied to existing originals.",
    sections: [
      {
        title: "Why the frame changed",
        paragraphs: [
          "Our early 4:3 compositions left unused space beside the scene in the desktop layout. A wider 16:9 trial reduced that mismatch, but still left space above and below in the chosen frame. Enlarging the illustration and trimming its side edges gave us a 16:10 composition that filled the frame and aligned with its companion scenes. This sequence records our team's layout trials.",
        ],
      },
      {
        title: "Preparing new artwork",
        paragraphs: [
          "We therefore use 16:10 as the art team's delivery standard for new desktop narrative illustrations: for example, 4000 × 2500 px. Separate painted layers should share the same canvas dimensions and alignment. Keep faces, important objects and lettering clear of trim edges so that responsive framing has room to adjust.",
        ],
      },
      {
        title: "Framing existing originals",
        paragraphs: [
          "Source artwork and its display frame remain separate. Existing 16:9 originals can stay intact while a 16:10 cover view trims their sides; the image viewer retains the complete original. The standard guides composition for this project's desktop scenes. Browser proportions, navigation space and narrow-screen layouts still require their own framing checks.",
        ],
      },
    ],
  },
  "design-details-entry": {
    title: "Technical details · Loading and title handoff",
    description:
      "What releases the loader, when reading time begins, and how the title reaches the header.",
    sections: [
      {
        title: "Readiness before departure",
        paragraphs: [
          "The loader waits for its entrance and the route’s styles, fonts, nearby images and registered scene work. After styles become available, the remaining checks share a bounded waiting period.",
        ],
      },
      {
        title: "Lettering, reading time and handoff",
        paragraphs: [
          "SVG masks uncover the CirCure lettering along measured paths, with a glowing tip following each stroke. The subtitle appears word by word. Its reading hold starts after the final word settles; the header wordmark supplies the measured handoff destination.",
        ],
      },
    ],
  },
  "design-details-motion": {
    title: "Technical details · Timeline states and story controls",
    description:
      "Follow scroll progress through an eased transition, a reading hold and reader-controlled playback.",
    sections: [
      {
        title: "Progress and interpolation",
        paragraphs: [
          "For one scroll-controlled transition, s is scroll position, s0 and s1 bound the segment, and E is an easing function. Normalized progress p supplies u, which interpolates a property x between its endpoints. During a reading hold, the relevant properties stay unchanged even as timeline progress continues.",
        ],
      },
      {
        title: "Readable states and timing",
        paragraphs: [
          "Named timeline labels such as stability-readable, why-readable and advantages-readable locate states. The tweens and still intervals create the composition. The shared helper currently uses a 0.22-second scrub to smooth catch-up; reading time comes from hold intervals and the reader’s pace.",
        ],
      },
      {
        title: "Scene selection and playback",
        paragraphs: [
          'The current scene is marked with aria-current="step". Hover or keyboard focus moves a scene title 2 px and reveals its arrow. CSS transitions keep this list responsive while narrative playback is paused. Playback speed is available in the list; travel and reading holds keep separate timings.',
        ],
      },
    ],
    code: "p = clamp((s - s0) / (s1 - s0), 0, 1)\nu = E(p)\nx(p) = (1 - u) * x0 + u * x1",
    codeLabel: "Scroll progress and property interpolation",
  },
  "design-details-fixed-focus": {
    title: "Technical details · A fixed place to read each person",
    description:
      "The recovered Human Practices prototype and the case for a restrained fade, reading hold and fade.",
    sections: [
      {
        title: "What the early prototype preserves",
        paragraphs: [
          "The retained July project contains CircularEvidenceTimeline in Official-wiki/src/components/wiki/features/EngagementFeatures.tsx, with its layout in src/styles/wiki-features.css. A tall section supplies scroll distance. Its inner stage uses position: sticky; the portrait card sits at the center of the circular indicator. Scrolling updates the active record and the indicator's stroke-dashoffset. The card has no scroll-driven translation or rotation. The other archived studies use an alternating vertical sequence, a rotating dial or a horizontal strip; they explore different motion choices.",
        ],
      },
      {
        title: "Use scroll to select a record",
        paragraphs: [
          "The controller normalizes the section's position into progress p, then selects record k with floor(p × N), clamped to the last record. requestAnimationFrame groups scroll notifications. Between record boundaries the content remains unchanged, allowing a reading hold; stopping the scroll keeps the selected account in place. The record list offers direct selection and identifies the active entry. Small screens and reduced-motion preferences bypass the scroll-driven record listener in this prototype.",
        ],
      },
      {
        title: "Let visibility mark the handoff",
        paragraphs: [
          "A fade refinement would keep the reading position steady while the outgoing account recedes and the incoming account becomes visible. The portrait, role and account should change together, followed by a still interval for reading. Keeping the text clear during that interval matters more than prolonging the transition. Sequential fading can avoid placing two readable paragraphs over one another; rapid reversal should resolve from the current visible state. These are criteria for a future refinement, with a direct change available for reduced motion.",
          "The restraint serves a specific reading task: compare what successive people contributed while retaining the same place to look. The record list and progress line provide orientation, leaving the central account as the primary subject. This is the design rationale; no eye-tracking or comprehension study has established a measured attention benefit.",
        ],
      },
      {
        title: "Keep the historical claim precise",
        paragraphs: [
          "The recovered React component renders one article and replaces its record fields directly. Its card styles do not define an opacity transition for that change. The evidence therefore supports a stationary reading stage with record replacement. A complete outgoing-to-incoming dissolve remains a proposed refinement. Its records and portraits are demonstration material, separate from verified stakeholder interview evidence.",
        ],
      },
    ],
    code: "p = clamp(-sectionTop / max(1, sectionHeight - viewportHeight), 0, 1)\nk = min(N - 1, floor(p * N))\nringDashOffset = 1 - p",
    codeLabel:
      "Recovered scroll-to-record mapping; the card keeps its reading position",
  },
  "design-details-particles": {
    title: "Technical details · Particle morphing and scene continuity",
    description:
      "From watercolor pixels to paired trajectories, reversible progress and a readable destination.",
    sections: [
      {
        title: "Sample the artwork and its destination",
        paragraphs: [
          "An offscreen Canvas samples painted pixels from the original images, retaining position, color and transparency. Transparent regions are excluded. For illustration-to-keyword transitions, DOM character ranges and computed font styles locate the target letters, including the browser's line wrapping. This ties the particle endpoints to the artwork and text actually displayed.",
        ],
      },
      {
        title: "Pair points and evaluate their paths",
        paragraphs: [
          "The clinical morph pairs source and target samples in reading order, spreading correspondence across both point sets when their sizes differ. Each pair retains fixed delay, bend and phase values. Scroll-driven progress interpolates position and color; a sinusoidal arc adds displacement during travel and returns to zero at the endpoints. These paths are authored motion, without a physical particle simulation.",
        ],
      },
      {
        title: "Coordinate the scene handoff",
        paragraphs: [
          "The outgoing image, travelling pigment, incoming artwork and background have coordinated opacity ranges. In the tear-to-cloud bridge, pigment disperses first; the map appears while the cloud gathers. Both scene stages share viewport coordinates during the bridge. As the transition finishes, the temporary particle layer yields to the original artwork. Keyword morphs likewise restore native text, and reading ink returns to selectable DOM text after its reveal.",
        ],
      },
      {
        title: "Reverse from the same progress",
        paragraphs: [
          "Fixed point correspondence and index-derived variation make each path deterministic: with prepared geometry unchanged, the same progress produces the same particle composition. Reverse scrolling retraces that path. Endpoint visibility also follows progress, allowing a scene jump to resolve to the appropriate original image or text. Clinical resize handling repositions cached points within newly measured image bounds; chapter-boundary guards coordinate the tear bridge with its neighboring timelines.",
        ],
      },
      {
        title: "Bound preparation and rendering work",
        paragraphs: [
          "The tear, clinical and challenge morphs share a WebGL point renderer. Prepared positions are uploaded to buffers; the vertex shader evaluates travel and the fragment shader softens each point's edge. Canvas 2D provides an alternate rendering path. Sampling density and pixel-ratio limits bound work on compact viewports; challenge preparations are queued one per animation frame. Reading ink caches sampled text and renders on progress changes. These mechanisms limit repeated work; they do not establish a measured frame rate across devices.",
        ],
      },
      {
        title: "Keep the content available",
        paragraphs: [
          "If sampling is unavailable, the clinical and challenge transitions retain an original-image or text dissolve. The tear bridge selects particles or crossfade for the current pass, so late readiness does not introduce particles halfway through it. The main story timelines are registered only when reduced motion is not requested. Decorative canvases are hidden from assistive technology, and cleanup releases their graphics resources, listeners and scheduled preparation frames.",
        ],
      },
      {
        title: "Implementation source",
        paragraphs: [
          "The active implementations are animateTearCloud.ts, createClinicalParticleMorph.ts, animateChallengeMorph.ts, challengeParticleRenderer.ts and readingInk.ts; useHomeStoryAnimation.ts connects them to the story. The current magnifier and ring handoffs are implemented separately in animateThinkingGallery.ts, animateGalleryWhy.ts and createRnaRingMorph.ts.",
        ],
      },
    ],
  },
  "design-details-navigation": {
    title: "Technical details · Transparent navigation, shadows and search",
    description:
      "Opening contrast, menu feedback and finding a passage; the next note follows the folding transition.",
    sections: [
      {
        title: "Opening contrast",
        paragraphs: [
          "At the home opening, the full-width surface has zero opacity, leaving the illustration visible behind the navigation. Opening text uses two shadows in the same warm-dark RGB color, (20, 17, 23): a close layer defines the letter edges and a broader layer softens their separation from the image. In the CSS below, each shadow lists horizontal offset, vertical offset, blur radius and color with alpha. The opening-state selector limits these shadows to the wordmark, folio, navigation labels and mobile menu toggle; inner pages retain their route palettes.",
          "The opening labels use pale #f8e9e8, with the folio at 62% alpha and navigation-link backgrounds at 10%. The crest, carets and mobile-menu SVG receive a separate drop-shadow(0 1px 3px rgb(20 17 23 / 25%)). text-shadow follows the text; drop-shadow follows the visible image or SVG silhouette. These local shadows support readability while preserving the illustration around each control.",
        ],
      },
      {
        title: "Menu timing and input feedback",
        paragraphs: [
          "A 70 ms opening delay filters brief category crossings; a 170 ms closing delay leaves time to enter the menu. A critically damped follower carries the tray’s position and velocity through reversals. Icon-and-label groups use a separate 180 ms handoff, and inactive panels are inert.",
          "Menu rows stay in place. A category tint and chevron signal an available link; mouse hover raises only the illustration by 1 px. Keyboard focus adds an outline and the same directional cue. The current page retains its persistent marker.",
        ],
      },
      {
        title: "Finding and returning to a passage",
        paragraphs: [
          "The outline and inline links convert a target in the reading frame into the corresponding document scroll position. In-page search uses ranges in rendered text and the CSS Custom Highlight API where supported, preserving application-managed text nodes. A selection-based fallback navigates the current match. Controls and hidden content are excluded; ranges refresh after layout changes rebuild home-story word wrappers.",
        ],
      },
      {
        title: "Implementation source and contrast limits",
        paragraphs: [
          "Source: Navbar.tsx controls the measured geometry and transition progress; circure-nav.css scopes the opening shadows, transparent surface and compact capsule. The shadow alpha values specify styling strength; the underlying illustration still determines the resulting local contrast.",
        ],
      },
    ],
    code: `.site-header.is-home-page[data-home-opening="true"]
  :is(.logo-word-full, .wordmark-folio, .nav-link, .mobile-menu-toggle) {
  text-shadow:
    0 1px 2px rgb(20 17 23 / 42%),
    0 3px 8px rgb(20 17 23 / 24%);
}

/* Navbar.tsx sets this opacity to 0 at the opening. */
.site-header.is-home-page::before,
.site-header.is-home-page[data-home-opening]::before {
  background: var(--home-bar-base);
  opacity: var(--home-bar-opacity);
  transition: none;
}`,
    codeLabel:
      "Opening navigation text shadows and scroll-controlled surface opacity",
  },
  "design-details-navigation-motion": {
    title:
      "Technical details · Scroll direction, folding and clear entry / exit",
    description:
      "How the full bar becomes a circular landmark, and how direction, clearance and staggered timing govern its return.",
    sections: [
      {
        title: "Two triggers with distinct responsibilities",
        paragraphs: [
          "Navbar.tsx separates the scene handoff from expansion of the floating capsule. Scene position determines the transition between the full bar and the compact entrance. Once compact mode has settled in the middle of the home story, scroll direction determines whether that entrance expands to show controls. Keeping these decisions separate gives scene boundaries priority over a brief change in scroll direction.",
          "The direction accumulator uses changes in window.scrollY. More than 18 px of downward displacement folds the capsule; more than 18 px upward unfolds it. Changing direction resets the previous accumulation before adding the new displacement. Direction control is enabled only when the target handoff progress is 1, rendered progress exceeds 0.999, no preparation is active, and both scene boundaries are clear. With header height H, the opening’s lower edge must be above −(H + 168 px), and the closing anchor must be below H + 168 px. Outside this region the accumulator resets. This threshold and clearance band keep minor scroll jitter and boundary transitions from repeatedly toggling the controls.",
        ],
      },
      {
        title: "Full bar to circle: retire text before the scene arrives",
        paragraphs: [
          "The opening exit is measured from the illustration’s lower edge b. A 56 px band ends at the header height H: q = clamp((H + 56 − b) / 56, 0, 1). The smoothstep function S(t) = t²(3 − 2t) softens both ends. If p is the rendered handoff progress, label opacity is min(1 − S(p), 1 − S(q)) during the opening. The scene-edge term forces text to retire on time even while the crest is still easing toward its target. Labels lift by up to 24 px as they fade, keeping the approaching artwork clear.",
          "A shared progress value coordinates the crest transform, circular surface and labels. The same 44 px crest image stays in place as its CSS scale changes from 1 to about 0.682, giving a visible size of about 30 px inside the 48 px entrance. The CSS keeps the crest anchor stable; it does not translate the full row of menu labels into the emblem. Compact layout is selected at p ≥ 0.999 while the controls are hidden. The ending uses the pinned scene’s document placeholder to measure its approach, establishes the matching opaque bar surface before the labels return, and retains the outgoing palette until its labels have retired.",
        ],
      },
      {
        title: "Circle to capsule: give lettering room to appear",
        paragraphs: [
          "The collapsed surface measures 48 × 48 px with a 24 px corner radius and an rgba(253, 248, 242, 0.97) background. Above 980 px, its expanded width is measured from visible controls and capped by the navigation shell; at narrower widths it uses the shell width and mobile menu. ResizeObserver and font-loading notifications refresh that measurement. The crest also provides an explicit click target to expand or fold the controls.",
          "Ordinary capsule width changes take 480 ms: power3.out for expansion and power3.inOut for folding. On expansion, lettering moves from −6 px to 0 over 420 ms with cubic-bezier(0.22, 1, 0.36, 1); its 180 ms fade starts after a 240 ms delay, once the surface has opened far enough. On folding, lettering fades over 140 ms, its translation takes 300 ms, and visibility becomes hidden after 300 ms while the surface continues toward the circle. These separate timings give the surface an initial lead on entry and clear the text early on exit.",
        ],
      },
      {
        title: "Return to the full bar through a cleared intermediate state",
        paragraphs: [
          "When an expanded capsule approaches the opening or ending, a preparation state closes its menus and retires its labels over 180 ms. After that delay, the surface narrows to 48 px over 200 ms using sine.inOut. A 410 ms preparation window covers the 380 ms sequence with a 30 ms allowance before the scene handoff resumes. The same preparation also handles a capsule still wider than 49 px after a recent close. This prevents the expanded capsule and full-bar layouts from occupying the crest’s surroundings at the same time.",
          "Scene-progress catch-up uses power1.out and a duration of 0.16 + 0.12 × |target − current| seconds, giving a 160–280 ms range. GSAP overwrite replaces the active target while retaining the rendered value, so a reversal continues from the visible composition. requestAnimationFrame combines scroll updates and layout reads precede style writes. The principle is to tune intermediate frames as well as endpoints: entering elements need clearance, retiring elements must leave on time, and the crest supplies continuity through the change.",
        ],
      },
      {
        title: "Match interaction to the visible state",
        paragraphs: [
          "Collapsed, preparing and handoff controls receive inert and aria-hidden. Before hiding a focused control, focus returns to the wordmark with preventScroll; folding also closes open menus. Escape, the collapse button and an outside pointer press provide explicit ways back. Reduced motion removes the capsule-width and label transitions and settles the scene handoff to an endpoint. These rules keep an invisible or changing control group from remaining available to the keyboard.",
        ],
      },
    ],
    code: `// Direction control is gated by settled compact mode and scene clearance.
if (delta > 0) {
  if (scrollDeltaRef.current < 0) scrollDeltaRef.current = 0;
  scrollDeltaRef.current += delta;
  if (scrollDeltaRef.current > 18) setIsBallExpanded(false);
} else if (delta < 0) {
  if (scrollDeltaRef.current > 0) scrollDeltaRef.current = 0;
  scrollDeltaRef.current += delta;
  if (scrollDeltaRef.current < -18) setIsBallExpanded(true);
}

// Opening clearance and shared rendered progress.
// H: header height; b: opening bottom; p: rendered progress.
q = clamp((H + 56 - b) / 56, 0, 1)
S(t) = t * t * (3 - 2 * t)
labelOpacity = min(1 - S(p), 1 - S(q))
labelLift = -24 * (1 - labelOpacity) // px
catchUp = 0.16 + 0.12 * abs(target - p) // seconds`,
    codeLabel: "Direction-control source excerpt and opening handoff equations",
  },
  "design-details-destinations": {
    title: "Technical details · Destination layout and motion",
    description:
      "Follow the closing scene from spacing and the measured ribbon path to optional hints.",
    sections: [
      {
        title: "White space as a reading interval",
        paragraphs: [
          "The broad gap can look unusually large when viewed as an isolated strip. In the scrolling page, it gives the next-page invitation room to appear as a scene of its own. This is our application of less is more: retain a clear destination and action, reduce simultaneous visual demands, and leave space for the reader to absorb the current message before continuing. The paired screenshots below show the surrounding context and a viewport containing only that invitation in its reading area.",
          "The amount of visible information must be balanced against the attention it asks for. If article text, explanatory hints, navigation choices and institutional marks compete at once, readers may have to switch focus before finishing a message and may overlook part of it. We separate these reading tasks through spacing and reveal secondary detail on request, aiming for a calmer experience and a clearer information hierarchy. These are design goals; comprehension and retention have not been measured.",
          "The page-like closing scene comes from the composition and its surrounding spacing. WikiNextRecord keeps its height content-driven: its base desktop padding is clamp(64px, 6vw, 88px) above and 88px below, with a 40px row gap. The route skin extends the section surface across the page while capping its inner content at 1120px. No fixed one-viewport height or scroll lock is imposed on this component.",
          "The shared footer continues the interval with padding-top: clamp(156px, 17vw, 248px). A gradient with height clamp(220px, 25vw, 360px) carries the route color into the footer paper. These rules keep the institutional marks away from the destination while joining the surfaces gently. The visible quiet interval spans the closing section and the footer entrance; a tight component crop omits part of it.",
          "Review the whole viewport as well as the component: can the reader finish the closing thought and identify the next page without adjacent information dominating? Then scroll through the boundary to check when institutional marks enter. At widths of 760px and below, the component uses 48px top and 72px bottom padding and a 22px row gap, allowing text to wrap in normal flow. The goal is a clear sequence with proportionate breathing room; these dimensions do not establish a universal optimum for density or comprehension.",
        ],
      },
      {
        title: "A closing thought and a separate destination",
        paragraphs: [
          "WikiNextRecord uses a two-row desktop grid: closing copy spans the first row; the companion and the destination occupy the second. The content is capped at 1120 px, with responsive insets and gaps. An 11 px eyebrow introduces a destination name sized from 38 to 60 px, beside a 64 px arrow. The ribbon sits behind the content at 0.42 opacity, keeping its painted route secondary to the text.",
          "At 760 px and below, the grid places the static lamb beside the closing title, the explanation below, and the destination across the available width. Font sizes, insets and arrow size adapt to that arrangement. The reading order remains closing thought, explanation and next destination.",
        ],
      },
      {
        title: "Selection and alternative inputs",
        paragraphs: [
          "Each exploration selection coordinates title emphasis, arrow, hint and a single 780 ms greeting. Gestures vary between a nod, peek, hop and bow, then return to rest. Hints are absolutely positioned; a longer description is associated through aria-describedby. Escape dismisses a hint, and inert story layers suppress hints and greetings.",
          "Keyboard-visible focus takes priority over pointer entry. Deliberate pointer movement may select another entry; leaving restores the focused entry where present. Reduced motion preserves the title, arrow and hint while removing the greeting.",
        ],
      },
      {
        title: "Hints without layout displacement",
        paragraphs: [
          "Both hint containers are absolutely positioned below their labels, so opening one does not add a row or change the label’s layout box. Both use a 4 px entrance offset with 180 ms opacity and 280 ms transform transitions. Title color changes take 240 ms on Home and 220 ms on Next page. The reserved gaps keep the added line apart from the next entry.",
          "The visible hint is brief; aria-describedby connects the link with its fuller summary. Mouse entry and keyboard focus can reveal it. Escape dismisses it, and scrolling clears a pointer preview while retaining a keyboard-selected description. On touch screens, the visible label and normal link action carry the route; the preview supplies optional context.",
        ],
      },
      {
        title: "Aligning the visible artwork",
        paragraphs: [
          "Resting alignment uses visible silhouettes and feet. Engineering is shifted and slightly enlarged; Contribution is slightly reduced. CSS scale and translation for framing remain separate from the greeting animation. The custom cursor likewise separates its stable input coordinate from the follower’s tilt and lag; the native pointer returns around the next-page action.",
        ],
      },
      {
        title: "Measuring the painted route",
        paragraphs: [
          "Ten normalized samples on the ribbon’s upper painted surface are joined by cubic Hermite interpolation. Layout measurements map them through the ribbon rectangle and place the lamb’s foot anchor on the curve. The starting point clears closing text; the endpoint is measured relative to the next-page link.",
          "Travel starts as the head enters the viewport and approaches completion as the section reaches the center. Scroll position supplies target progress; an exponential follower settles displayed progress p toward it. The mapping below has a nonzero entry derivative and a zero arrival derivative. h(x) is the measured painted contact curve.",
        ],
      },
      {
        title: "Arrival, reversal and responsive states",
        paragraphs: [
          "The lamb’s body sits above the curve by its foot-anchor offset. Tilt follows the local tangent, capped at 14 degrees and multiplied by sin(πq), so both endpoints are level. Reverse scrolling follows the same curve; large jumps settle directly. Layout and font changes trigger fresh measurements. Below the desktop breakpoint the companion is static; reduced motion places desktop travel at its endpoint.",
          "On hover or focus at the destination, the circular arrow surface darkens and the arrow rotates 45 degrees. The reserved hint position and input rules are described in “Hints without layout displacement” above.",
        ],
      },
    ],
    code: "q(p) = p + p² - p³\nx(p) = x_start + (x_end - x_start) * q(p)\ny_foot(p) = h(x(p))",
    codeLabel: "Ribbon travel equations",
  },
  "design-details-closing": {
    title:
      "Technical details · Photo shading, wordmark shadows and the optional letter",
    description:
      "Read the scroll geometry first, then the photograph’s treatment and the optional letter transition.",
    sections: [
      {
        title: "Scroll position and photo scale",
        paragraphs: [
          "For the photo reveal, V is viewport height, y the clipping window’s top and H its measured height. Progress p maps to a scale from 1.3 to 1; at p = 0.5 the scale is 1.15. Returning to a scroll position restores its corresponding scale. The formula below applies to the photo, while the optional letter uses a separate transition.",
          "The photo hook writes transform directly. requestAnimationFrame combines scroll notifications; intersection and resize observers limit nearby updates and refresh the window height. Bottom alignment reduces excess wall while retaining the group. Narrow windows derive their height from photo width; wide, shallow screens keep a centered group and fill edges from the same photograph. Reduced motion fixes the final scale.",
        ],
      },
      {
        title: "Photo shading and wordmark contrast",
        paragraphs: [
          "The photograph, shade and wordmark occupy separate layers: .keepsake-photo-shade is at z-index 1 and .keepsake-brand at 2; the note button remains above both at 3. The shade uses RGB (20, 17, 23) with alpha stops of 6% at the top, 9% at 46% height, 23% at 82% and 12% at the bottom. This places the strongest darkening near the lower wordmark area while keeping the group visible. These percentages describe overlay opacity at each stop. The photograph’s scroll transform remains independent of the shade.",
          "The wordmark uses #fffdf9 and two shadows: 0 2px 8px at 28% alpha and 0 10px 28px at 16%, both in RGB (20, 17, 23). The closer shadow defines the lettering against fine photographic detail; the wider, lighter shadow spreads that separation without a hard outline. Its emblem is converted to white with brightness(0) invert(1), followed by a 0 3px 8px shadow at 25%. The restrained shade and shadows let the photograph and lettering share the closing frame.",
        ],
      },
      {
        title: "Desktop and narrow-screen framing",
        paragraphs: [
          "The desktop wordmark uses font-weight 600 and font-size clamp(48px, 11.5cqw, 164px), centered above a bottom offset of clamp(20px, 4cqw, 56px). The cqw unit is 1% of the query container’s width. At viewport widths of 720 px or less, the brand moves to left: 14px and bottom: 12px, with font-size clamp(30px, 10.5cqw, 64px). Its text shadows remain unchanged; the smaller emblem gains a 0.35 px white silhouette reinforcement and a tighter 0 2px 3px dark shadow at 35%. These rules are recorded in footer-photo-scene.css and used by FooterPhotoScene.tsx.",
        ],
      },
      {
        title: "Opening, reversing and closing the letter",
        paragraphs: [
          "The note button and paper rectangles are measured when the transition begins. Thirty-three keyframes interpolate translation, horizontal and vertical scale, opacity and corner radius along a shallow arc. Opening takes 540 ms and closing 380 ms. Radius compensation keeps soft edges through scaling.",
          "Escape during opening reverses the active animation from its current frame. If resizing invalidates the geometry, the panel settles open or completes closing according to direction. Closing restores focus with preventScroll; reopening resets the letter to its beginning.",
        ],
      },
      {
        title: "Reading inside the letter",
        paragraphs: [
          "Wheel, touch and scrolling-key input are intercepted at the sheet boundaries without changing page overflow. The underlying sticky geometry, viewport width and photo scale stay stable. The desktop two-column letter becomes one column on narrow screens and stays within the available viewport height.",
        ],
      },
    ],
    code: `.keepsake-photo-shade {
  /* Decorative overlay; controls remain available above it. */
  z-index: 1;
  background: linear-gradient(
    to bottom,
    rgb(20 17 23 / 6%) 0%,
    rgb(20 17 23 / 9%) 46%,
    rgb(20 17 23 / 23%) 82%,
    rgb(20 17 23 / 12%) 100%
  );
  pointer-events: none;
}

.keepsake-brand {
  z-index: 2;
  color: #fffdf9;
  text-shadow:
    0 2px 8px rgb(20 17 23 / 28%),
    0 10px 28px rgb(20 17 23 / 16%);
}

/* Photo scale: p = clamp((V - y) / H, 0, 1)
   scale = 1.3 - 0.3 * p */`,
    codeLabel:
      "Photo shade and wordmark shadow CSS excerpts, followed by the reveal equation",
  },
  "design-details-shared": {
    title: "Implementation notes · Measured content and source files",
    description:
      "Locate the shared content, component boundaries and native-input alternatives behind these cases.",
    sections: [
      {
        title: "Content and component boundaries",
        paragraphs: [
          "HomeExploreLinks.tsx maps homeDestinations and its six illustrations into repeated links. WikiNextRecord.tsx receives route-specific copy and delegates measured travel to useWikiNextCompanion.ts. The loader, SheepCursor.tsx and FooterPhotoScene.tsx use their own state and layout rules. These distinct implementations share a character family and interaction conventions.",
        ],
      },
      {
        title: "Pointer and assistive-technology behavior",
        paragraphs: [
          "The pointer illustration is enabled for a fine mouse with hover support and no reduced-motion preference. Text-entry controls, embedded content and dialogs without explicit opt-in retain native cursors. Decorative lamb images are hidden from assistive technology; the surrounding links, status text and note button carry the meaning and action.",
        ],
      },
      {
        title: "Where to inspect the implementation",
        paragraphs: [
          "HomeIntro.tsx, Navbar.tsx and useFooterPhotoReveal.ts contain the opening, navigation and photo-reveal mechanisms. home-explore.css records optical corrections; useWikiNextCompanion.ts records the ribbon path. The design archive below preserves the corresponding visual studies.",
        ],
      },
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
