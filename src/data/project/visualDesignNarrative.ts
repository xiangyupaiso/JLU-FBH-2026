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
      "A patient’s question guides the scientific explanation and keeps the life behind the clinical problem in view.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "**“What if it comes back?”** gives the CirCure homepage its direction. A woman’s concern leads into the clinical problem and our proposed circRNA platform; the story then returns to the ordinary life that motivates the work. By following her question through the science, we wanted to keep the purpose of the research in view.",
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
          "Before introducing circRNA, we give the reader time to meet the woman at the center of the story. Anxiety, surgery and hair loss appear as illustrations around her. As the view moves closer, those images recede and **“Behind every diagnosis, there is a person”** remains beside her silhouette. The change in emphasis introduces the person whose concern will guide the explanation.",
          "That concern becomes a question in the ward: **“What if it comes back?”** Written for the illustrated story, the line leads into treatment challenges, vaccine approaches and our circular RNA platform. This attention to a person’s experience draws on **narrative medicine** (Charon, 2001). It also gives the scientific discussion a clear starting point: the uncertainty she is living with.",
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
        title: "Connect the Science to the Story",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "Her question also matters at a wider scale. The story considers the population affected by breast cancer, then examines molecular design. Familiar visual elements connect these changes in scale, helping readers carry the earlier idea into the next explanation.",
          "**Watercolor connects the ward to the wider clinical picture.** Her question rests inside a tear. When the map appears, the tear’s pigment disperses and gathers into a cloud above it. A trace of the earlier scene therefore remains in the new one, keeping her concern present as the view widens.",
          "**The RNA ring provides continuity within the scientific explanation.** It appears among the vaccine candidates, in the circRNA explanation and again in the platform. Here, keeping the outline intact matters: the reader is following one object through different relationships. The same backbone becomes a reference for the modularity interaction, where the coding segment can change.",
        ],
      },
      {
        type: "feature",
        key: "design-study-02-visual-continuity",
      },
      {
        type: "subheading",
        id: "understanding-through-participation",
        index: "",
        title: "Try the Modular Design",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "With the backbone established, **“Like changing a key” lets the reader try a modular design choice.** Selecting or dragging an antigen-coding segment into the circular construct changes the highlighted segment and its illustrative target together. Because the backbone stays visible, successive selections can be compared against the same structure. This use of **direct manipulation** makes the relationship between shared and replaceable parts visible (Shneiderman, 1983).",
          "The mechanism view then follows translation, antigen presentation and immune recognition. Antigens A, B and C serve as **conceptual examples**, with nearby notes providing the biological context: human leukocyte antigen (**HLA**) compatibility, the distinction between recognition and killing, and the need to validate each new target.",
        ],
      },
      {
        type: "feature",
        key: "design-study-03-modular-interaction",
      },
      {
        type: "subheading",
        id: "room-to-read-and-choose",
        index: "8.3",
        title: "Leave the Pace to the Reader",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "An explanation that is familiar to one reader may be new to another. Readers also differ in how much time they want to spend with an illness-related story. We therefore pair a clear narrative sequence with opportunities to pause, revisit an explanation or move ahead. This balance between guidance and reader choice draws on **narrative visualization** (Segel et al., 2010).",
        ],
      },
      {
        type: "list",
        items: [
          "**Time to read.** Text has its own space beside the illustration. Once the elements have settled, a **reading hold** leaves the complete explanation in view.",
          "**A choice of pace.** Pause, replay and scene selection let readers return to a moment or move ahead.",
          "**Respect for motion settings.** The story offers a quieter presentation when the device requests reduced motion.",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "This choice extends to the closing letter, which opens when readers ask for the longer personal message. Section 9 explains how the playback controls and letter support these different ways of moving through the page.",
        ],
      },
      {
        type: "subheading",
        id: "for-more-ordinary-days",
        index: "8.4",
        title: "Return to Ordinary Life",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "When the story returns to the clinic, the question changes hands. The patient asks, **“What if it comes back?”** We ask, **“If it comes back, can we give her more options?”** Putting our response beside her concern expresses the responsibility we wanted to take on, and the reason to pursue this research.",
          "The team photograph introduces the people taking up that work. Readers can then open **“A note from us”**, where the woman and supporting hands return beside **“For more ordinary days.”** Time with family and plans for tomorrow bring the story back to everyday life. We end with **“Our work is a beginning”** because the question that started the project is also a reason to keep working.",
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
    anchorIds: ["our-wiki-contribution"],
    index: "09",
    kicker: "09 / Our Wiki Contribution",
    navLabel: "Our Wiki Contribution",
    title: "Our Wiki Contribution",
    summary:
      "How our artwork, motion, reading pages and navigation developed through successive versions of the wiki.",
    blocks: [
      {
        type: "prose",
        paragraphs: [
          "Advances in artificial intelligence are making it easier to turn design ideas into web interfaces, including for teams with limited programming experience. Creating a coherent reading experience also requires attention to how visual elements communicate scientific concepts, how much time readers have to follow an explanation, and how easily they can navigate between pages. These details call for careful observation and repeated revision.",
          "In developing the CirCure wiki, we considered what each scene needed to communicate and how readers would move through it. We refined transitions to preserve the RNA ring’s outline, extended pauses to allow more time for reading, and adjusted navigation to make page names easier to scan. We then read through the page again to assess how these changes worked together. The drawings, comparisons, and implementation notes below document what we tried, the reasons for our revisions, and what we learned in the process. We hope this record offers future iGEM teams practical ideas to adapt and refine in their own wikis.",
        ],
      },
      {
        type: "subheading",
        id: "artwork-and-opening",
        index: "9.1",
        title: "Prepare the Artwork and Opening",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "A scene needs a reliable composition before it can move. We begin with aligned artwork layers, then prepare the resources and introduction that bring the reader into that scene. These two stages connect the illustrated source to its first appearance on screen.",
        ],
      },
      {
        type: "subheading",
        id: "prepare-painted-layers",
        index: "",
        title: "Prepare the Painted Layers",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "**The way an element moves determines how we prepare it.** Backgrounds, characters, objects and annotations belong to one composition, with separate layers wherever their timing or movement differs. The patient can remain still while the medical student enters; the RNA ring can move while its explanation stays in place. Exporting those layers on a shared canvas preserves their alignment when the page assembles them.",
        ],
      },
      {
        type: "feature",
        key: "design-painted-layers",
      },
      {
        type: "prose",
        paragraphs: [
          "The [supporting paintings and layer exports](#artwork-layer-exports) show how the scenes are built. The notes below explain our canvas choices and how the exported layers find their positions on screen.",
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
        id: "opening-with-readiness",
        index: "",
        title: "Introduce the Project",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "The opening begins with a practical need: the first scene takes time to prepare. Our loading screen is available as **HTML and CSS before the application bundle**, so its messages can explain preparation, a longer wait or a failure. This follows the principle of **visibility of system status** (Harley, 2018). Readiness checks and a waiting limit determine the handoff to the introduction.",
          "Once the loader leaves, the CirCure signature introduces the project. The subtitle appears word by word, but its reading hold starts after the final word settles. The complete sentence therefore has time on screen before the patient appears. Finally, the wordmark moves into its measured header position, linking the introduction to the navigation.",
          "Readers can use Skip to reach the completed introduction. With reduced motion enabled, the finished title appears with a Continue control, leaving the next step to the reader.",
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
        title: "Give Motion a Reading Rhythm",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "With the artwork aligned and the opening in place, timing determines what readers meet together. We arrange complete explanations, connect them through transitions and give readers control of the pace. Movement and stillness are planned as parts of the same sequence.",
        ],
      },
      {
        type: "subheading",
        id: "build-readable-states",
        index: "",
        title: "Make Time for a Complete Explanation",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "Once the layers are assembled, we decide what the reader needs to see together. If an object moves while its explanation changes, both demand attention. We therefore build **readable states**, where the object is visible, the sentence is complete and the composition pauses. Establishing the RNA ring before moving it into the platform preserves **object constancy**, a recognizable identity through change (Heer et al., 2007). Keeping the explanation focused and dividing it into stages also draws on coherence, signaling and segmenting principles (Mayer et al., 2003).",
          "Within that sequence, **staging** sets the order of events, **easing** shapes their speed and a **reading hold** leaves the completed scene still. Duration on a scroll timeline allocates scroll distance; automatic playback assigns separate times to travel and reading (GSAP, n.d.). The circRNA explanation and project-advantages panels in Section 8.2 show two of the settled compositions this produces.",
          "Animation research also informs the timing: each change needs to be visible long enough for the reader to follow it (Tversky et al., 2002). We give the important movements room to unfold before the next explanation begins.",
        ],
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
        type: "subheading",
        id: "choose-scene-transitions",
        index: "",
        title: "Connect One Scene to the Next",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "Between readable states, **the relationship determines the transition**. Dispersing pigment connects the tear to the cloud above the map. In the clinical sequence, the doctor takes over the explanation after the nurse introduces the treatment challenges; smaller illustrations then gather into keywords as a research direction emerges. Each movement links related ideas before settling into original artwork or native text.",
          "When the reader is following **the same object into a new context**, we preserve its outline throughout the move. The magnifier and RNA ring use this continuous treatment. The distinction follows Section 8.2: an associative transition can connect scenes through shared pigment, while a continuous outline keeps an object recognizable as its surroundings change.",
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
        id: "refine-scroll-continuity",
        index: "",
        title: "Refine How the Page Moves",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "Following these transitions through the page reveals details that a still image cannot show. **AI assistance helps us assemble an early version; the movement needs further work once the pieces come together.** Individual sections can bring their own scroll updates and animation timings. As the page grows, those pieces can repeat work or hand over at different moments, leaving a brief hesitation or a jump between otherwise complete scenes.",
          "Some of that unevenness comes from the work of drawing the page. Repeatedly measuring positions after changing styles can make the browser calculate the layout again; large painted layers and effects add to what it must redraw (web.dev, n.d.). We group measurements, reuse prepared artwork and favor transforms and opacity for moving layers. In the RNA ring transition, for example, prepared variations of the painting let its contour change without sampling its pixels again on every scroll update.",
          "Other moments need a closer adjustment to the movement itself. We tune where a handoff begins, how its speed changes and when the incoming artwork becomes fully visible. A reversal should continue from the view already on screen, and a resized page should keep the reader’s place. Working through short stretches at different speeds helps us find these small interruptions and try the adjustment again. These small adjustments remain part of the design, helping the separate pieces feel like one continuous page.",
        ],
      },
      {
        type: "feature",
        key: "design-details-scroll-continuity",
      },
      {
        type: "subheading",
        id: "control-story-playback",
        index: "",
        title: "Let the Reader Change the Pace",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "These prepared sequences give the automatic guide a starting pace, which readers can adjust. The mouse wheel, touch or scrolling keys return control to the reader; playback can also be paused or a scene revisited. Opening the scene list pauses the guide while a chapter is chosen. Selection moves to that chapter and closes the list, while Escape closes it and returns focus to its button. Pause controls and reduced-motion alternatives follow guidance on making animated content controllable (W3C Web Accessibility Initiative, n.d.-a; W3C Web Accessibility Initiative, n.d.-b). The example below brings these controls together.",
        ],
      },
      {
        type: "feature",
        key: "design-study-06a-story-controls",
      },
      {
        type: "subheading",
        id: "reading-surfaces",
        index: "9.3",
        title: "Make Room for Sustained Reading",
        level: 3,
      },
      {
        type: "prose",
        paragraphs: [
          "The research subpages give readers space to examine the ideas introduced in the story. Longer explanations call for a calmer visual rhythm: color establishes the opening, then recedes around the article, while typography organizes the title, explanation and smaller labels. The studies below develop these two parts of the reading surface, building on the palettes in Section 2 and cover illustrations in Section 6.",
        ],
      },
      {
        type: "subheading",
        id: "subpage-color-studies",
        index: "",
        title: "Let Color Recede Around the Text",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "Earlier subpage studies explored **soft gradients and broad, wave-like bands of color**. Blurred edges and fine grain give the static backgrounds a gentle sense of movement, with open areas for the title and introduction. We were drawn to this restraint: color and texture give the page character while leaving a clear place for the words.",
          "The five backgrounds below vary that approach by module. Blue and cyan appear in the Dry Lab studies, apricot and lilac in the Wet Lab studies, and rose in the Project previews. Shared placement and text hierarchy connect the pages as the palettes change. Toward the article, the background fades into a plain surface, carrying the opening into the reading area without an abrupt edge.",
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
        index: "",
        title: "Give Each Kind of Text a Role",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "On that quieter surface, **typography gives the text its reading order**. A title introduces the subject, body text develops the explanation and smaller labels identify destinations or technical details. Fraunces and Lexend form the main title–body pairing, with other families assigned to specific roles. The specimens below first compare the typefaces, then use the same words at different sizes and weights to show how hierarchy changes the composition.",
        ],
      },
      {
        type: "feature",
        key: "design-typography-study",
      },
      {
        type: "subheading",
        id: "image-corners-and-reading-rhythm",
        index: "",
        title: "Give Images a Softer Edge",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "The edge of an image is a small part of the reading page, but it repeats throughout a long article. We use **16 px corners for the ordinary images on this page** to carry a little of the illustrations’ softness into the layout. Most of each edge stays straight, so the picture still sits neatly beside the text. Repeating that quiet detail helps photographs, drawings and interface examples feel at home on the same page.",
        ],
      },
      {
        type: "feature",
        key: "design-details-image-corners",
      },
      {
        type: "subheading",
        id: "navigation-with-a-landmark",
        index: "9.4",
        title: "Keep the Route Clear",
        level: 3,
        anchorIds: ["reading-with-context"],
      },
      {
        type: "prose",
        paragraphs: [
          "After entering a research page, readers need ways to locate an explanation, check its sources and choose where to go next. The navigation connects pages; the outline, search and citation backlinks support movement within them. We keep these routes recognizable while allowing their controls to recede around the content.",
        ],
      },
      {
        type: "split",
        id: "navigation-editorial",
        aside: {
          type: "feature",
          key: "design-study-06b-navigation",
        },
        prose: [
          {
            type: "prose",
            paragraphs: [
              "On the homepage, the crest gives the changing navigation a familiar point of reference. A full bar presents the page choices at the opening, with a transparent background and soft text shadows that leave the illustration visible. Later, it folds around the crest to make room for the story. The choices return when needed, applying **progressive disclosure** to the navigation (Nielsen, 2006).",
              "In the middle of the story, **scrolling up opens the navigation; scrolling down folds it into the circular entrance**. A movement threshold filters small changes in direction. Near the opening and ending, however, scene position controls the transition, keeping the bar’s handoff coordinated with the illustration.",
            ],
          },
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "**The labels are timed around the background that holds them.** They enter after the capsule begins opening and leave before it finishes folding, so the lettering has room throughout the transition. Reversing direction continues from the visible position. Within the open menu, the current-page marker remains distinct from temporary hover and focus cues; when the controls fold away, keyboard focus returns to the crest if needed.",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Once readers enter a research page, the outline and in-page search help them locate a particular explanation. Citations provide a further route into its sources, with a **backlink to the sentence that cited each reference**. Checking a source can therefore lead back to the argument at the point where it was left. Section 4 describes this citation system in more detail.",
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
        index: "",
        title: "Make the Destinations Readable",
        level: 4,
        anchorIds: [
          "measuring-artwork-and-layout",
          "ribbon-guided-continuation",
          "readable-destination-labels",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "The same concern for orientation extends to the page links themselves. On the homepage, six destinations offer different routes through the project. At an article’s ending, Next page suggests one continuation. In both places, a clear name establishes the destination before illustration and feedback draw attention to it.",
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
        index: "",
        title: "Give the Next Step Its Own Space",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "At the end of a research page, we wanted to give readers a moment to finish the article and decide where to go next. A short closing thought sits above the ribbon, followed by the small **“Next page”** label, the destination name and an arrow.",
          "**We left a large gap between the ribbon and the university and hospital logos.** When Next page sits near the middle of a desktop screen, that space keeps the logos below the screen’s lower edge. Placing them closer would bring their strong blue shapes into the same view and draw attention away from the next-page link. With the gap, the ending has a screen to itself; the logos come into view as the reader scrolls further down.",
        ],
      },
      {
        type: "feature",
        key: "design-white-space",
      },
      {
        type: "prose",
        paragraphs: [
          "Within this open space, **Lumi’s movement leads toward the destination**. Her feet follow the painted edge of the ribbon as the reader scrolls, then settle beside the page name and arrow. The movement connects a familiar character to the next action and gives the eye a path across the composition.",
          "Scrolling back retraces the path. On smaller screens, Lumi rests in a static composition; reduced motion shows the desktop arrival state. The destination stays visible as a text link throughout.",
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
        index: "",
        title: "Keep Feedback Beside the Choice",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "The two layouts also share a way of offering detail: **hover or keyboard focus adds context beside the active link**. In exploration, the title changes color and gains an arrow and short topic hint, accompanied by a greeting from its lamb. The Next page control darkens and turns its arrow toward continuation. In both, the response stays close to the choice being considered.",
          "To keep that response from shifting the layout, the hint has a reserved position below the label. Opacity and a slight movement bring it into view while the title, ribbon and neighboring content stay still. Escape dismisses the hint. On touch screens, the visible page name remains a normal link, with the destination clear before selection.",
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
        title: "Meet the Team, Open the Letter",
        level: 3,
        anchorIds: ["keepsake-on-request"],
      },
      {
        type: "prose",
        paragraphs: [
          "Beyond the page’s last links, the closing introduces the people behind CirCure. The team photograph emerges as the preceding content moves away: a sticky stage holds the scene while a clipping window reveals it (MDN Web Docs, n.d.). We adapted this structure from a study of **Wolverine Worldwide’s website** (Wolverine Worldwide, n.d.).",
          "As more of the photograph appears, its scale follows scroll position; moving back restores the corresponding earlier view. The framing adapts to the viewport to retain the group, with transform updates scheduled on the browser’s animation frames (web.dev, n.d.). A light shade and soft shadows separate **CirCure** from the photographic detail while leaving the faces visible.",
          "The photograph also provides a setting for **“A note from us”**. Readers can open this longer message when they want to stay. The paper moves out from its button and returns there on closing, connecting the letter to the scene where it was found.",
        ],
      },
      {
        type: "feature",
        key: "design-study-07-footer-reveal",
      },
      {
        type: "prose",
        paragraphs: [
          "The letter opens in a native modal **dialog**, with focus moving to its heading and returning to the button on close (W3C Web Accessibility Initiative, n.d.-c). Its sheet scrolls independently while the photograph stays in place. Escape closes the letter or reverses its opening; reduced motion uses a short fade. Closing brings the reader back to the same photograph and page position.",
        ],
      },
      {
        type: "feature",
        key: "design-details-closing",
      },
      {
        type: "subheading",
        id: "design-record",
        index: "9.6",
        title: "Refine the Details, Keep the Record",
        level: 3,
        anchorIds: ["continuity-across-design-states"],
      },
      {
        type: "feature",
        key: "design-craft-principle",
      },
      {
        type: "prose",
        paragraphs: [
          "Across the story, reading pages and controls, we return to three concerns: **keep something recognizable, make the next step clear and leave a way back**. The RNA outline, persistent crest, loading messages and citation backlinks address these concerns in different places. They also give us concrete details to revisit when a sequence feels difficult to follow.",
        ],
      },
      {
        type: "prose",
        paragraphs: [
          "Lumi connects these places through a familiar character, while labels and controls explain her different roles. We check those roles across reverse scrolling, scene changes, resizing, keyboard input and reduced motion. The implementation note below gathers the shared conventions and source files.",
        ],
      },
      {
        type: "feature",
        key: "design-details-shared",
      },
      {
        type: "subheading",
        id: "from-the-sketchbook",
        index: "",
        title: "Sketches and Revisions",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "The archive records this work in drawings and interface studies. **Eleven initial drafts** explore the patient’s question, the molecular explanation and the closing gestures of care. Supporting layers show how the paintings are assembled, while **six design folios** collect the interface studies and revisions. Brief labels leave room to examine the images; each can be opened at full size (Shepherd, 2019; Nature Research, n.d.).",
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
        type: "prose",
        paragraphs: [
          "We kept this record because the reasons for a change can be useful alongside the finished result. The drawings and comparisons show the choices we made for CirCure; the notes explain how we put them into practice. We hope another team facing a similar question can find something here to try, and adjust it to suit their own project.",
          "Working through these revisions taught us to pay closer attention to the person reading the page. A longer pause can give someone time to finish an explanation; a clearer label can help them find the next page. For us, refining these details is one way of respecting the time and attention people give to understanding our work.",
          "The drawings and revisions preserve the steps between our first ideas and the finished pages. We hope future iGEM teams find something useful in that process: an idea to develop, a difficulty to avoid, or a detail worth looking at again. If sharing our experience helps another team begin with a little more confidence and carry its own ideas further, we will be glad to have passed it on.",
        ],
      },
      {
        type: "subheading",
        id: "design-references",
        index: "",
        title: "Design References",
        level: 4,
      },
      {
        type: "prose",
        paragraphs: [
          "These sources informed our approach to storytelling, interaction and implementation. Each citation links back to the passage where we used it.",
        ],
      },
      {
        type: "feature",
        key: "supplement-references",
      },
    ],
  },
];

/** The motto connects observation and revision to concrete design decisions. */
export const visualDesignCraftPrinciple = {
  label: "Our approach to craft",
  motto: "精益求精，止于至善",
  translation: "Pursue excellence through continual refinement.",
  description:
    "For us, refinement starts with noticing where the reading becomes difficult: an object loses its outline, a title drifts out of alignment or too many details ask for attention together. We return to those moments, change the detail that causes the problem and try the sequence again.",
  steps: [
    {
      title: "Observe",
      body: "Notice where an object becomes hard to follow, labels compete for attention or the next action is unclear.",
    },
    {
      title: "Refine",
      body: "Change the detail causing the difficulty: keep the outline whole, align the titles or fit the movement to the painting.",
    },
    {
      title: "Recheck",
      body: "Read through the revised sequence, reverse direction and try the keyboard and smaller screens. Check whether the same problem still appears.",
    },
  ],
};

export const visualDesignArchiveHighlights = [
  {
    key: "design-revision-ring",
    title: "Keep the object recognizable",
    body: "In the earlier transfer, the ring disperses into particles and its outline is lost along the way. We kept the circle whole in the revision so readers could follow it into the platform. The saved frames below show the two treatments at different points in their journeys.",
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
    body: "The curved layout gave the links a flowing arrangement, with each title starting at a different position. We aligned the titles along straight edges and kept the extra description beside the active choice. The revision gives the reader a consistent place to scan while leaving more space around the illustrations.",
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
    body: "The watercolor ribbon brought the page ending closer to the painted story, and its uneven edge needed a new motion path. We sampled that edge again so Lumi’s feet would follow the actual surface. The painting keeps its handmade contour, and the movement leads to the page name beside it.",
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
  "design-details-image-corners": {
    title: "Technical details · Why we use 16 px image corners",
    description:
      "Compare four corner sizes on the same illustration, then see how the shared rule reaches images and their frames.",
    sections: [
      {
        title: "A small curve, repeated across the page",
        paragraphs: [
          "A square corner gives the picture a crisp boundary. At 8 px, that boundary softens slightly; at 32 px, the curve becomes a more noticeable part of the frame and hides more of each corner. The examples below keep the illustration, dimensions and placement identical so the corner treatment can be compared on its own. We made this comparison to show how the current choice changes the image’s edge.",
        ],
      },
      {
        title: "Why 16 px fits this page",
        paragraphs: [
          "We wanted the edge to feel gentle beside the watercolor and rounded lettering, while leaving the image itself in charge. At the sizes used in our articles, 16 px gives us that balance: the turn is visible, and long straight edges still hold the picture in the text column. Using the same radius also avoids an incidental change of frame every time the article moves from a drawing to a photograph or screenshot.",
          "This is a visual judgment for these layouts. A fixed radius looks more pronounced on a small image, so narrow-screen examples need checking too. We keep labels, axes and other important details clear of the clipped corners; an image that needs its full rectangular boundary should keep it.",
        ],
      },
      {
        title: "Let the frame and image share the edge",
        paragraphs: [
          "CSS applies the shared --visual-design-image-radius value to article images without changing their source files. A display with a background, border or layered artwork also needs its outer frame rounded and its overflow clipped, so a square background cannot peek out behind a curved image. Inner layers can stay square when that frame supplies the final outline.",
          "The manuscript area uses a local 10 px value, keeping the smaller sketchbook frames more restrained. The shared rule gives the page a consistent starting point, with that local adjustment for a different scale and character.",
        ],
      },
    ],
  },
  "design-details-subpage-color": {
    title: "Technical details · Color fields and reading surfaces",
    description:
      "How the earlier subpages use color at the opening and leave a quieter area for the article.",
    sections: [
      {
        title: "One structure, several palettes",
        paragraphs: [
          "In the earlier Dry Lab pages, the background sits on the cover’s ::before layer, beneath the HTML title and introduction. A route selects its image through --dry-lab-art. Project previews use the same structure with rose-colored backgrounds, allowing the palette to change while the text keeps a consistent position.",
          "To connect the cover with the article, background-size: cover fills the opening and a vertical CSS mask fades its lower edge into the plain reading surface. The painted bands supply the sense of flow; the mask carries their color gradually out of the text area.",
        ],
      },
      {
        title: "Adapting the color composition",
        paragraphs: [
          "That transition also depends on the crop. The title needs an open part of the image behind it, so adapting a background means checking its placement at each screen size. The main text stays on a plain surface, and written module names accompany the colors to identify the pages as their compositions change.",
        ],
      },
    ],
  },
  "design-details-layers": {
    title: "Technical details · Assembling and animating painted layers",
    description:
      "How separate paintings keep their alignment as they become an animated scene.",
    sections: [
      {
        title: "Prepare the layered handoff",
        paragraphs: [
          "The handoff begins with a layered master and a reference image showing the complete composition. Independent movement, overlap or reuse determines which elements need their own layers; parts that always move together can remain grouped. Exports share the master canvas’s origin and dimensions, preserve transparency and identify each element’s scene, role and stacking order.",
          "A complete still image is the starting point for this preparation. As its layers move, they can uncover background or character details that were previously hidden. New paintings therefore need those areas filled in as well.",
        ],
      },
      {
        title: "Restore the original coordinates",
        paragraphs: [
          "The page uses cropped images to avoid carrying large transparent margins, but each crop retains its position on the master canvas. For a canvas W × H and bounding rectangle (x0, y0, x1, y1), the equations below express left, top, width and height as canvas-relative percentages. Applying them restores the smaller image to the composition’s original alignment.",
        ],
      },
      {
        title: "Assemble cropped layers in components",
        paragraphs: [
          "The story and supplement manifests carry that alignment into the code, recording each layer’s file, number, position, size and source hash. prepare-home-supplements.py produces the lossless WebP crops and normalized coordinates, which home-story.tsx and CircRnaArtwork.tsx use to place the layers. Existing scenes keep their recorded proportions; the 16:10 standard guides new desktop artwork. In either case, the assembled composition is checked at its intended screen sizes.",
        ],
      },
      {
        title: "Separate layout from animation",
        paragraphs: [
          "Once the layers are placed, animation controllers schedule their changes through data-layer targets. CircRnaArtwork exposes the ring, heading and benefit sketches separately. PaintedReveal uncovers the original paint through an SVG mask, and animateCircRnaSequence moves the ring into the platform as annotations fade. Separating placement from movement gives each transform a clear owner and keeps the two responsibilities from competing.",
        ],
      },
      {
        title: "Check the scene before and after motion",
        paragraphs: [
          "The reference image remains useful after assembly: we use it to check the pose, stacking order and pivot points before adding motion, then return to it when checking the finished scene, reversals, resizing and reduced motion. Explanations and controls stay in semantic HTML. A composed illustration can have one accessible description, with its decorative layers hidden from assistive technology.",
        ],
      },
      {
        title: "Account for rendering work",
        paragraphs: [
          "This layer structure also shapes the rendering work. Cropping reduces empty bitmap area, and reuse lets the same painting appear in several compositions. Image decoding, transparent overlaps, masks and filters still contribute separate costs, which can be examined when profiling the scene on a device.",
        ],
      },
    ],
    code: "left   = 100 * x0 / W\ntop    = 100 * y0 / H\nwidth  = 100 * (x1 - x0) / W\nheight = 100 * (y1 - y0) / H",
    codeLabel:
      "Restore a cropped layer on its original canvas using percentage coordinates",
  },
  "design-details-artwork": {
    title: "Technical details · Choosing a 16:10 canvas for the artwork",
    description:
      "Why we chose a wider canvas, and how existing paintings fit that frame.",
    sections: [
      {
        title: "Why the frame changed",
        paragraphs: [
          "The canvas ratio came from fitting the paintings to the desktop scene. Our early 4:3 compositions left side gaps. A 16:9 trial reduced that mismatch, although space remained above and below the chosen frame. Enlarging the painting and trimming its sides gave a 16:10 view that filled the frame and aligned with the companion scenes.",
        ],
      },
      {
        title: "Preparing new artwork",
        paragraphs: [
          "These trials led us to choose 16:10 for new desktop story illustrations, for example 4000 × 2500 px. Related layers share the canvas and alignment. We also leave room around faces, key objects and lettering so a responsive crop can adjust without cutting into the scene’s focus.",
        ],
      },
      {
        title: "Framing existing originals",
        paragraphs: [
          "For existing 16:9 paintings, the complete original is retained and available in the image viewer. The page can display a 16:10 cover crop that trims the sides. Its framing is then adjusted for the browser proportions, navigation space and narrow-screen layout, keeping the important parts of the scene in view.",
        ],
      },
    ],
  },
  "design-details-entry": {
    title: "Technical details · Loading and title handoff",
    description:
      "How resource preparation, lettering and reading time lead into the first scene.",
    sections: [
      {
        title: "Preparing the first scene",
        paragraphs: [
          "The loader’s entrance runs alongside preparation of the route’s styles, fonts, nearby images and registered scene initialization. Styles form the first readiness gate. Once they are available, the remaining checks share a waiting limit before the introduction continues.",
        ],
      },
      {
        title: "Lettering, reading time and handoff",
        paragraphs: [
          "The title sequence then traces CirCure through SVG masks, with a glowing tip following each stroke. The subtitle appears word by word and holds once its final word has settled. Measuring the header wordmark supplies the final destination, so the large title can move into its place in the navigation.",
        ],
      },
    ],
  },
  "design-details-motion": {
    title: "Technical details · Timeline states and story controls",
    description:
      "How scroll distance becomes movement, stillness and time to read.",
    sections: [
      {
        title: "Progress and interpolation",
        paragraphs: [
          "A scroll-controlled transition occupies the interval [s0, s1]. Normalizing scroll position s over that interval gives progress p; the easing function E maps p to u, which interpolates a property x between its starting and ending values. During a reading hold, those properties stay unchanged while progress moves through the reserved interval. The reader can therefore continue scrolling through a still composition.",
        ],
      },
      {
        title: "Readable states and timing",
        paragraphs: [
          "Labels such as stability-readable, why-readable and advantages-readable mark the completed explanations, with movement and hold intervals arranged around them. The shared helper uses a 0.22-second scrub, meaning the animation briefly eases toward the requested scroll position. Reading holds serve a separate purpose: they reserve distance over which the completed composition remains still.",
        ],
      },
      {
        title: "Scene selection and playback",
        paragraphs: [
          'For automatic playback, travel and reading holds have separate timings, with a speed choice in the scene list. That list marks the current chapter with aria-current="step". Hover or keyboard focus shifts a title by 2 px and reveals its arrow through CSS transitions, keeping the controls responsive while the narrative animation is paused.',
        ],
      },
    ],
    code: "p = clamp((s - s0) / (s1 - s0), 0, 1)\nu = E(p)\nx(p) = (1 - u) * x0 + u * x1",
    codeLabel: "Scroll progress and property interpolation",
  },
  "design-details-scroll-continuity": {
    title: "Technical details · Frame updates and scroll continuity",
    description:
      "How preparation, positioning and scene handoffs keep the page steady as the reader moves.",
    sections: [
      {
        title: "Do the preparation once",
        paragraphs: [
          "In the map sequence, the note destinations are measured together and kept until the layout needs refreshing. The animation can then use those positions without measuring between each layer’s changes. The RNA ring uses a related approach for its watercolor: a small set of prepared variations carries its changing color and stroke thickness through the move. Nearby variations blend together, keeping pixel sampling out of the scroll callback.",
          "The navigation and footer photograph use requestAnimationFrame to combine incoming scroll notifications into one pending update. The photograph only schedules these scroll-driven updates near the viewport. Each treatment leaves less repeated work to do while the reader is moving.",
        ],
      },
      {
        title: "Keep the parts in step",
        paragraphs: [
          "A page can still feel uneven when it has enough time to draw. If one layer finishes before its replacement is ready, the reader sees a gap or a sudden change. Shared progress coordinates related elements: the navigation’s crest, surface and labels follow the same handoff, and a new direction replaces the animation’s target from its current value. The navigation study below explains how their entrances and exits are fitted together.",
          "The background jump returned in several scenes, which helped us look beyond the timing of an individual animation. We needed to check who was controlling each layer’s position, when that position was updated and whether the next layer began with the same view. These questions separated the work of drawing a frame from the work of keeping consecutive frames aligned.",
        ],
      },
      {
        title: "Let the browser hold the room still",
        paragraphs: [
          "At the ward entrance, scrolling moved the rounded reveal window upward while a JavaScript transform moved the room in the opposite direction. The two movements were meant to cancel out. The browser could apply the scroll before the next transform update, briefly showing the room at the wrong position. This made a stationary background appear to jump, especially when the reader changed direction.",
          "We extended the room’s positioning container one viewport above the clipped track. Native position: sticky now holds the room while the rounded window uncovers it. The track keeps its original height and scroll distance, and JavaScript continues to animate the people inside the room. Giving the background’s position to the browser removes the need for a second movement to catch up with scrolling.",
        ],
      },
      {
        title: "Match the view at the handoff",
        paragraphs: [
          "Another small jump came from the room’s transition into the tear. A copied room takes over for that movement, but its background retained a scale of 1.005 after the original room’s camera zoom had been removed. That half-percent difference changed the size of the painted features at the moment of exchange. Letting the copy inherit the original transform brought the two views back into alignment.",
          "For these exchanges, we check position, scale, crop and opacity together. We also follow the transition back to the original scene. A short scrub can leave the animation behind a fast scroll, so the carried layer settles to its endpoint before returning the view to the native scene. Matching both ends gives forward movement, reverse movement and a direct scene jump the same place to arrive.",
        ],
      },
      {
        title: "Let the layout change without losing the place",
        paragraphs: [
          "Resizing changes the space available to the illustration and text. The story saves the current reading position, waits briefly for the resize to settle, then rebuilds the relevant timelines and restores the view. Small height changes from mobile browser controls are ignored to avoid unnecessary rebuilding. Compact particle scenes also use lower sampling and pixel-ratio limits, as described in the particle note above.",
          "We work through the same short stretch downward, upward and with a quick reversal, then repeat it after resizing. Fixed details in the painting, such as the doorway and bed edge, make unwanted movement easier to see. When those details shift while the room should be still, we inspect positioning and handoff geometry before adjusting the pace. This gives each repeated jump a concrete cause to work on.",
        ],
      },
    ],
  },
  "design-details-particles": {
    title: "Technical details · Particle morphing and scene continuity",
    description:
      "How sampled watercolor travels between scenes and settles back into artwork or text.",
    sections: [
      {
        title: "Sample the artwork and its destination",
        paragraphs: [
          "The transition starts by sampling its two ends. An offscreen Canvas records the position, color and transparency of visible paint in the source images. When the destination is a keyword, DOM character ranges and computed font styles locate the letters using the browser’s actual line breaks. This ties the sampled geometry to the artwork and text being displayed.",
        ],
      },
      {
        title: "Pair points and evaluate their paths",
        paragraphs: [
          "After sampling, the clinical transition pairs source and target points in reading order, distributing the correspondence across both sets when their sizes differ. Each pair retains its delay, bend and phase values. Scroll progress then interpolates position and color, with a sinusoidal offset that bends the path during travel and returns to zero at both ends.",
        ],
      },
      {
        title: "Coordinate the scene handoff",
        paragraphs: [
          "The images and particles also need a shared handoff. In the tear sequence, pigment disperses before gathering into a cloud as the map appears. Both scenes use viewport coordinates during this bridge, and coordinated opacity ranges determine when the outgoing image, particles, incoming artwork and background are visible.",
          "As the transition finishes, the particle layer gives way to the original painting. Keyword transitions restore native text, and the reading-ink reveal returns to selectable DOM text. The movement therefore ends in the image or sentence the reader needs to examine.",
        ],
      },
      {
        title: "Reverse from the same progress",
        paragraphs: [
          "Because point pairs stay fixed and their variation comes from their indices, the prepared transition is deterministic: the same geometry and progress produce the same composition. Reverse scrolling can therefore retrace the path. Image and text visibility follow that progress too, letting scene jumps resolve to the appropriate endpoint.",
          "When the viewport is resized, the point pairs keep their correspondence. In the clinical scene, cached points are repositioned within newly measured image bounds. Chapter-boundary guards separately coordinate the tear bridge with its adjacent timelines.",
        ],
      },
      {
        title: "Bound preparation and rendering work",
        paragraphs: [
          "To draw these sampled points, the tear, clinical and challenge transitions share a WebGL renderer. Prepared positions are uploaded to buffers; a vertex shader calculates their travel, and a fragment shader softens their edges. Canvas 2D provides an alternative rendering path.",
          "Preparation is spread out or reused where possible. Compact viewports have sampling-density and pixel-ratio limits, and challenge preparations are queued one per animation frame. Reading ink keeps its sampled text in a cache and redraws when progress changes, so the scene can use the same preparation as scrolling continues.",
        ],
      },
      {
        title: "Fallbacks, motion preferences and cleanup",
        paragraphs: [
          "When sampling is unavailable, the clinical and challenge scenes use a dissolve between the original images or text. The tear bridge chooses particles or crossfade at the start of a pass and retains that choice, keeping the treatment consistent throughout the transition.",
          "Reduced motion leaves the main story timelines unregistered, while decorative canvases are hidden from assistive technology. When a transition is removed, cleanup releases its graphics resources, listeners and queued preparation frames.",
        ],
      },
      {
        title: "Implementation source",
        paragraphs: [
          "animateTearCloud.ts, createClinicalParticleMorph.ts and animateChallengeMorph.ts define the scene transitions, with rendering in challengeParticleRenderer.ts and readingInk.ts. useHomeStoryAnimation.ts connects them to the story. The magnifier and ring use animateThinkingGallery.ts, animateGalleryWhy.ts and createRnaRingMorph.ts for their continuous handoffs.",
        ],
      },
    ],
  },
  "design-details-navigation": {
    title: "Technical details · Transparent navigation, shadows and search",
    description:
      "How the navigation stays legible over the illustration and helps readers find their place.",
    sections: [
      {
        title: "Opening contrast",
        paragraphs: [
          "A transparent opening bar leaves the illustration visible, which makes local contrast around the letters important. The full-width background has zero opacity, while two warm-dark RGB (20, 17, 23) shadows separate the text from the painting. One defines the letter edges; the broader shadow softens the separation. In the CSS, each shadow specifies horizontal offset, vertical offset, blur radius and color with alpha. The opening selector applies them to the wordmark, folio, navigation labels and mobile menu toggle; inner pages retain their route palettes.",
          "The labels use pale #f8e9e8, with the folio at 62% alpha and link backgrounds at 10%. Images need a corresponding treatment: the crest, carets and mobile-menu SVG use drop-shadow(0 1px 3px rgb(20 17 23 / 25%)). text-shadow follows letter shapes, and drop-shadow follows the visible image or SVG outline. Both keep the shading local to the controls.",
        ],
      },
      {
        title: "Menu timing and input feedback",
        paragraphs: [
          "Opening and closing use different delays because the pointer makes different journeys. The 70 ms opening delay filters brief crossings between categories; the 170 ms closing delay leaves time to enter the tray. A critically damped follower preserves the tray’s position and velocity through direction changes, with icon-and-label groups using a separate 180 ms transition. Inactive panels are inert.",
          "Within the open menu, feedback stays attached to the link. Rows retain their positions, a category tint and chevron identify the destination, and hover lifts the illustration by 1 px. Keyboard focus adds an outline and the same directional cue, while the current-page marker remains distinct.",
        ],
      },
      {
        title: "Finding and returning to a passage",
        paragraphs: [
          "Inside an article, the outline and inline links translate the target’s position in the reading frame into the document scroll position needed to reach it. Search works from ranges in the rendered text. Where supported, the CSS Custom Highlight API marks those ranges while preserving the application’s text nodes; a selection-based fallback navigates the current match.",
          "These matches need to follow the displayed content as it changes. Search therefore excludes controls and hidden material, and refreshes its ranges when layout changes rebuild the homepage’s word wrappers.",
        ],
      },
      {
        title: "Source files and contrast checks",
        paragraphs: [
          "Navbar.tsx measures the navigation and controls transition progress; circure-nav.css defines its shadows, transparent background and compact capsule. The illustration behind the lettering changes with scrolling, so the contrast needs to be checked across the sequence.",
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
    title: "Technical details · Folding navigation and continuous transitions",
    description:
      "How the bar folds around the crest, with room for labels to enter and leave.",
    sections: [
      {
        title: "Scene position and scroll direction",
        paragraphs: [
          "The bar’s overall form and the capsule’s expansion respond to different information. Scene position controls the move between full bar and compact crest. After that compact state settles in the middle of the homepage, scroll direction opens or folds its controls. Scene position takes priority again near the opening and ending, where navigation must coordinate with the illustration.",
          "An accumulator tracks movement in window.scrollY, folding the capsule after more than 18 px downward and expanding it after more than 18 px upward. A direction change resets the previous accumulation before adding the new movement. Together, the reset and threshold filter small reversals before they change the visible state.",
          "This direction control becomes active after the scene handoff has settled: target progress is 1, rendered progress exceeds 0.999, preparation is finished and both scene boundaries are clear. For header height H, the opening’s lower edge must be above −(H + 168 px), and the closing anchor below H + 168 px. Outside that region, the accumulator resets so the scene transition can take over.",
        ],
      },
      {
        title: "Folding the full bar around the crest",
        paragraphs: [
          "The opening’s lower edge b sets the exit timing. A 56 px band ends at header height H, giving q = clamp((H + 56 − b) / 56, 0, 1). The smoothstep function S(t) = t²(3 − 2t) softens the beginning and end. With rendered handoff progress p, label opacity is min(1 − S(p), 1 − S(q)). This lets the approaching scene fade the labels on time while the crest catches up. The labels lift by up to 24 px as they leave.",
          "Alongside the fading labels, a shared progress value coordinates the crest and circular background. The 44 px crest stays anchored while its CSS scale decreases, starting at 1 and reaching about 0.682. Its visible size is then about 30 px within the 48 px entrance. Compact layout takes over at p ≥ 0.999, with the labels hidden during the switch.",
          "The ending reverses this relationship between the scene and the bar. Its pinned scene is measured through a document placeholder; the opaque bar background is established before full-bar labels return. During the handoff, an outgoing set of labels keeps its palette until it has left, so its colors remain consistent with its background.",
        ],
      },
      {
        title: "Expanding the compact navigation",
        paragraphs: [
          "Within compact mode, selecting the crest expands or folds the controls. The resting circle measures 48 × 48 px, with a 24 px corner radius and rgba(253, 248, 242, 0.97) background. Above 980 px, visible controls determine the expanded width, capped by the navigation shell; narrower layouts use the shell width and mobile menu. ResizeObserver and font-loading notifications keep the measurement up to date.",
          "The background leads the opening. Its width changes over 480 ms, using power3.out to expand and power3.inOut to fold. On expansion, the lettering’s offset begins at −6 px and reaches 0 over 420 ms with cubic-bezier(0.22, 1, 0.36, 1). A 240 ms delay precedes the 180 ms fade-in, allowing the background to open around the text.",
          "Closing changes that order: lettering fades over 140 ms, completes its movement over 300 ms and becomes hidden after 300 ms. The background then finishes narrowing to the circle. This stagger keeps each label inside a surface with enough room to hold it.",
        ],
      },
      {
        title: "Returning to the full bar",
        paragraphs: [
          "As an expanded capsule approaches the opening or ending, it first closes menus and fades its labels over 180 ms. The background then narrows to 48 px over 200 ms with sine.inOut. A 410 ms preparation window covers this 380 ms sequence plus a 30 ms allowance before the scene handoff resumes. The same preparation applies if a recently closed capsule is still wider than 49 px. This leaves clear space around the crest before the full bar returns.",
          "A reader can change direction before that sequence has finished, so new movement starts from the rendered state. Scene progress catches up with power1.out over 0.16 + 0.12 × |target − current| seconds, a range of 160–280 ms. GSAP overwrite replaces the target while preserving the current value. requestAnimationFrame combines scroll updates, with layout reads preceding style writes. These choices coordinate the frames between endpoints as well as the endpoints themselves.",
        ],
      },
      {
        title: "Match interaction to the visible state",
        paragraphs: [
          "Controls become inert and aria-hidden while collapsed, preparing or handing over between layouts. If a focused control is about to disappear, focus returns to the wordmark with preventScroll. Folding closes any open menu; Escape, the collapse button and an outside pointer press also dismiss it. With reduced motion enabled, width and label transitions settle directly, and the scene handoff uses its endpoint.",
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
      "How the layout, painted ribbon and small hints work together at the end of a page.",
    sections: [
      {
        title: "Spacing values",
        paragraphs: [
          "The open composition is built from content spacing. WikiNextRecord grows with its text, using desktop padding of clamp(64px, 6vw, 88px) above and 88px below, plus a 40px row gap. The route background spans the page, while the content is capped at 1120px. This places the closing and destination within a wider field of color.",
          "The interval continues into the footer through padding-top: clamp(156px, 17vw, 248px), with a gradient of height clamp(220px, 25vw, 360px) blending the route color into the footer paper. On widths of 760px and below, the component uses 48px top padding, 72px bottom padding and a 22px row gap. Smaller spacing accommodates the narrower layout as the text wraps.",
        ],
      },
      {
        title: "A closing thought and a separate destination",
        paragraphs: [
          "On desktop, the closing copy spans the first grid row; Lumi and the destination share the second. Within the 1120 px content width, an 11 px label introduces a destination name sized at 38–60 px beside a 64 px arrow. The ribbon runs behind them at 0.42 opacity, giving the movement a path while keeping the text prominent.",
          "At 760 px and below, the static lamb sits beside the closing title, followed by the explanation and a destination link across the available width. Type, gaps and arrow size adapt together, preserving the order of closing thought, explanation and next step.",
        ],
      },
      {
        title: "Selection and alternative inputs",
        paragraphs: [
          "An active exploration entry brings together title emphasis, arrow, hint and one 780 ms greeting. Its lamb nods, peeks, hops or bows, then returns to rest. When a story layer becomes inactive, hints and greetings are suppressed together.",
          "Pointer and keyboard selection follow a shared priority. Keyboard-visible focus stays active until deliberate pointer movement selects another entry; leaving then restores the focused entry when one exists. Reduced motion retains the title, arrow and hint, with the lamb at rest.",
        ],
      },
      {
        title: "Making room for hints",
        paragraphs: [
          "The extra line needs space before it appears. Both exploration and Next page reserve a position below the label through absolute positioning, keeping the title and neighboring entries still. The hints enter from a 4 px offset, with a 180 ms opacity transition and 280 ms transform transition. Title color changes take 240 ms on Home and 220 ms on Next page.",
          "Hover or keyboard focus reveals the short line, and aria-describedby connects the link to its fuller summary. Escape dismisses the hint. Scrolling clears a pointer preview while keeping a keyboard-selected description visible. On touch screens, the visible page name works as a normal link.",
        ],
      },
      {
        title: "Aligning the visible artwork",
        paragraphs: [
          "Alignment follows the visible artwork, including the feet, so transparent margins are accounted for. Engineering is shifted and slightly enlarged; Contribution is slightly reduced. CSS scale and translation handle those framing adjustments separately from the greeting. A similar separation keeps the custom cursor’s input coordinate stable while its illustration tilts and follows with a lag. Around the next-page action, the native pointer returns.",
        ],
      },
      {
        title: "Measuring the painted route",
        paragraphs: [
          "The path begins with the painting: ten normalized samples mark the ribbon’s upper edge, and cubic Hermite interpolation joins them into a smooth curve. Layout measurements place that curve on the displayed ribbon. Lumi’s foot anchor follows it, starting clear of the closing text and ending beside the next-page link.",
          "Scroll position determines where Lumi is along that path. Travel starts as the section head enters the viewport and nears completion as the section reaches the center. An exponential follower brings displayed progress p toward the target. The mapping below has a nonzero entry derivative and a zero arrival derivative, giving the journey a prompt start and gradual arrival. h(x) is the measured contact curve.",
        ],
      },
      {
        title: "Arrival, reversal and responsive states",
        paragraphs: [
          "The body sits above the curve by the foot-anchor offset. Its tilt follows the local tangent, capped at 14 degrees and multiplied by sin(πq) to leave both endpoints level. Reversing scroll retraces the curve; large jumps settle directly. Layout and font changes trigger a new measurement. Below the desktop breakpoint, Lumi stays still; reduced motion places desktop travel at the destination.",
          "Hovering or focusing the destination darkens the circular control and rotates its arrow by 45 degrees. Its hint uses the reserved position and input behavior described above.",
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
      "How the photograph comes into view, the title stays legible and the letter opens from its button.",
    sections: [
      {
        title: "Scroll position and photo scale",
        paragraphs: [
          "The photograph’s reveal is tied to position on the page. V denotes viewport height, y the clipping window’s top and H its measured height. The scale starts at 1.3 and reaches 1 as progress p increases; at p = 0.5 it is 1.15. Because position determines the scale, scrolling back restores the corresponding view. The letter uses a separate opening and closing animation.",
          "The photo hook applies that scale through transform, with requestAnimationFrame combining scroll notifications. Intersection and resize observers limit updates to nearby views and refresh the window height. Framing then adapts the same photograph to the available shape: bottom alignment retains more of the group, narrow windows derive their height from photo width, and wide, shallow screens center the group and fill the edges from the image. Reduced motion holds the final scale.",
        ],
      },
      {
        title: "Photo shading and wordmark contrast",
        paragraphs: [
          "To keep the title legible as the photograph changes scale, shade and lettering occupy separate layers above it. .keepsake-photo-shade uses z-index 1, .keepsake-brand uses 2 and the note button uses 3. The RGB (20, 17, 23) shade has opacity stops of 6% at the top, 9% at 46% height, 23% at 82% and 12% at the bottom. Its strongest darkening sits near the lower wordmark; the group remains visible above it as the photograph scales beneath the stationary shade.",
          "The wordmark uses #fffdf9 with two shadows in RGB (20, 17, 23): 0 2px 8px at 28% alpha and 0 10px 28px at 16%. The close shadow defines the letters against fine photographic detail, while the wider shadow gives them a softer separation. brightness(0) invert(1) turns the emblem white, followed by a 0 3px 8px shadow at 25%. Together, these details let the title sit clearly over the photograph.",
        ],
      },
      {
        title: "Desktop and narrow-screen framing",
        paragraphs: [
          "On desktop, the wordmark is centered with font-weight 600, font-size clamp(48px, 11.5cqw, 164px) and a bottom offset of clamp(20px, 4cqw, 56px). One cqw equals 1% of the query container’s width, so the lettering responds to the photograph’s available space.",
          "At viewport widths of 720 px or less, the brand moves to left: 14px and bottom: 12px, with font-size clamp(30px, 10.5cqw, 64px). The text keeps its shadows. The smaller emblem gains a 0.35 px white edge and a tighter 0 2px 3px dark shadow at 35%. footer-photo-scene.css defines these treatments for FooterPhotoScene.tsx.",
        ],
      },
      {
        title: "Opening, reversing and closing the letter",
        paragraphs: [
          "The letter’s transition uses the button as its point of origin. We measure the button and paper rectangles, then interpolate position, horizontal and vertical scale, opacity and corner radius through thirty-three keyframes along a shallow arc. Opening takes 540 ms and closing takes 380 ms, with radius compensation preserving the soft corners during scaling.",
          "Pressing Escape during opening reverses the animation from its current frame. If a resize changes the measured geometry, the panel settles open or finishes closing according to its direction. Closing returns focus with preventScroll, and reopening starts the letter from the beginning.",
        ],
      },
      {
        title: "Reading inside the letter",
        paragraphs: [
          "Once open, the letter needs its own reading space while retaining its place over the photograph. The sheet contains wheel, touch and scrolling-key input at its boundaries and leaves page overflow unchanged, preserving the photograph’s sticky position, viewport width and scale. Illustration and text occupy two columns on desktop, then become one column within the available height on narrow screens.",
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
    title: "Implementation notes · A shared character across the interface",
    description:
      "How Lumi’s different roles share a visual language while keeping their own controls.",
    sections: [
      {
        title: "One character, different tasks",
        paragraphs: [
          "The shared character appears through components suited to each task. HomeExploreLinks.tsx pairs the six homeDestinations with their illustrations; WikiNextRecord.tsx supplies route-specific closing text, with useWikiNextCompanion.ts handling the measured ribbon journey. The loader, SheepCursor.tsx and FooterPhotoScene.tsx manage their own state and layout. Visual continuity comes from the character and responses, while each component controls the behavior it needs.",
        ],
      },
      {
        title: "Keeping the controls clear",
        paragraphs: [
          "The illustrated cursor appears for a fine mouse with hover support when reduced motion is off. Text-entry controls, embedded content and dialogs keep native cursors unless explicitly opted in. Decorative lambs are hidden from assistive technology, with meaning and actions supplied by the links, status messages and note button around them.",
        ],
      },
      {
        title: "Following the source files",
        paragraphs: [
          "The main sequences live in HomeIntro.tsx, Navbar.tsx and useFooterPhotoReveal.ts. home-explore.css contains the optical adjustments to the destination illustrations, and useWikiNextCompanion.ts defines the ribbon path. The archive below shows the drawings and studies behind these choices.",
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

export const visualDesignCitationLabels: Readonly<Record<string, number>> = {
  "Charon, 2001": 1,
  "Segel et al., 2010": 2,
  "Heer et al., 2007": 3,
  "Shneiderman, 1983": 4,
  "Mayer et al., 2003": 5,
  "Tversky et al., 2002": 6,
  "GSAP, n.d.": 7,
  "W3C Web Accessibility Initiative, n.d.-a": 8,
  "W3C Web Accessibility Initiative, n.d.-b": 9,
  "Harley, 2018": 10,
  "Nielsen, 2006": 11,
  "web.dev, n.d.": 12,
  "MDN Web Docs, n.d.": 13,
  "W3C Web Accessibility Initiative, n.d.-c": 14,
  "Wolverine Worldwide, n.d.": 15,
  "Shepherd, 2019": 16,
  "Nature Research, n.d.": 17
};
