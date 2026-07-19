# CirCure visual system

## Style definition

**Humanist Scientific Editorial / 人文科学编辑风**

CirCure should feel like a carefully edited scientific publication with a clear
human reason behind it. The site is not a generic biotech dashboard, a hospital
portal, or a decorative awareness campaign.

## Narrative spine

The homepage is organized around **Recognition**:

1. breast cancer treatment learned to recognize ER, PR, and HER2;
2. TNBC is clinically recognized through the absence of all three;
3. tumor heterogeneity makes a single antigen an incomplete view;
4. CirCure asks whether several epitopes can create broader paths to immune recognition;
5. every transition—circle, presentation, specific response—must stand as a separate claim;
6. a result matters only when it changes the next design;
7. the project must also recognize the limits of its evidence and the person beyond the subtype.

The story uses nine scroll chapters: report, history, person, design, heterogeneity,
evidence, iteration, listening, and responsibility. Their motion verbs are deliberately
different—fold, open, trace, expand, focus, connect, return, gather, and seal.
The heterogeneity chapter adds a field-scan gesture: the previous navy surface leaves
with a curved edge, then a restrained pink lens follows the antigen route. The lens is
an explanatory focus device, not a decorative cursor.

Historical statements are factual anchors, not nostalgic decoration. Human care is
expressed through humility, limits, and refusal to reduce a person to biomarkers—never
through invented patient quotations or sentimental stock imagery.

When no consented story is available, an intentionally unfilled portrait may make that
absence visible. It must explain why the space is reserved and must never imply that a
generic silhouette represents a real person.

## Support, consent, and listening

- A visible notice distinguishes the student research concept from clinical guidance
  and provides a route to an independent TNBC support organization.
- Patient and caregiver stories require explicit, informed permission. Never invent a
  composite speaker or detach a quotation from the context in which it was offered.
- Human Practices follows **Ask → Listen → Return**. Engagement is incomplete until the
  project documents what changed, what did not, and why.
- Describe the present status honestly. Secondary research is not presented as stakeholder
  engagement, and planned conversations are not described as completed work.
- Quiet space is functional: it gives difficult information room and avoids the visual
  pressure of a fundraising or product-conversion page.

## Three visual roles

1. **Editorial** — serif display type, sans-serif evidence text, thin rules,
   asymmetric whitespace, and answer-first content hierarchy.
2. **Scientific** — navy structural surfaces, open circles, junction nodes, evidence
   paths, and reversible scroll-linked motion.
3. **Humanist** — warm paper surfaces, the pink ribbon thread, consented voices or
   intentionally empty seats, and soft curves used with restraint.

## Color roles

- `#1b1719` — primary text only.
- `#eee7dc` / `#fcf8f1` — paper and raised paper surfaces.
- `#173f78` / `#102f59` — scientific structure, primary actions, dark sections.
- `#d784b3` — Pink Thread, ribbon icon, current path, human connection.
- `#ddcbd3` — large blush section surface.
- Coral, muted blue, and gold are reserved for data categories; they do not become
  general interface colors.

## Type roles

- Display headings: Iowan/Baskerville-style serif, regular weight, restrained tracking.
- Narrative copy and human-facing statements: Iowan/Baskerville-style serif.
- Data, navigation, controls, and evidence labels: system sans.
- Micro labels are limited to navigation, timestamps, and experimental state. They are
  not used as decorative eyebrows or card numbering.

Do not add generic uppercase eyebrow text above sections unless it carries essential
navigation or experimental meaning.

## Navigation system

- At the top of the story, navigation stays visually light so it does not compete with
  the pathology report. After meaningful scroll, it contracts into one navy surface.
- Opening a category expands that same surface; it must feel like one object changing
  state, not a detached dropdown appearing below a bar.
- Each category contains one editorial premise and three routes. The premise explains
  why the section matters; imagery provides orientation rather than generic decoration.
- Pink marks the active route, ribbon junction, and directional detail. It never fills
  the whole navigation surface.
- Desktop supports pointer and keyboard use. Mobile replaces the image menu with large,
  readable links rather than squeezing the desktop layout into a smaller viewport.

## Geometry

- Content panels: `28px` radius, `20px` on small screens.
- Buttons and controls: `6px` radius.
- Identity and status labels: pill or circle geometry only.
- Open circles and interrupted paths represent circular RNA and back-splice junctions.

## Pink Thread icon

The ribbon knot is the project icon. It may be used for:

- identity and signatures;
- page or section navigation;
- a meaningful connection, junction, or evidence path;
- a single signature at the close of the page.

It should not be repeated as a decorative watermark on every card. All instances must
reference the shared `#circure-ribbon-knot` SVG symbol.

Across the homepage, the thread changes role rather than appearance: navigation track,
historical break, unfilled portrait, evidence route, engineering return, consent circle,
and final tie. At the ending, the navigation knot must yield before the two horizontal
ends meet in the central knot; never show both knots competing at full opacity.

## Editorial restraint

- Use project-specific statements instead of balanced marketing formulas such as
  “One X / More Y” or “A X / A Y”.
- Keep one dominant expressive animation in a viewport. Supporting motion should only
  reveal state or direction.
- Avoid equal-width card rows when the information does not have equal weight.
- An icon must identify, navigate, or explain a relationship. It is not punctuation.
- A page does not need to look “complete” in every gap; quiet space is part of the hierarchy.

## Homepage information density

- The homepage explains the project question, its rationale, and the evidence chain
  from circularization to specific recognition.
  Full protocols, control matrices, and literature detail belong on inner pages.
- Prefer one short paragraph per visual module. If a paragraph needs multiple claims,
  split the content across pages instead of shrinking the type.
- Narrative and component body copy should remain at least `15px`; micro labels are
  reserved for navigation, sequence, and experimental state.
- Removing text must not remove scientific boundaries: uncertainty and the distinction
  between expression, presentation, and recognition remain visible.
- Avoid repeating “heading + paragraph + equal cards.” Change the spatial form when the
  relationship changes: a path for evidence, a return loop for iteration, a table for consent.

## Motion

- Motion is scroll-driven, reversible, and settles without overshoot.
- Sticky chapters use generous scroll tracks and a capped follow rate. History, the
  unfilled portrait, evidence, and responsibility move more slowly than supporting
  diagrams. Never intercept the wheel or force scroll snapping to create this pacing.
- A scroll sequence must reveal a relationship: the evidence path turns one premise into
  three testable claims, the engineering loop makes Build → Read → Return directional,
  and the listening seats converge only when consent becomes the shared center.
- Let each section have its own motion verb—fold, draw, focus, return, gather—while the
  timing and damping remain shared. Repeating the same fade-up treatment is not a system.
- No continuous floating, pulsing, spinning, or attention-seeking loops.
- Hover movement is limited to `4–5px` and uses the shared ease-out curve.
- The Pink Thread guide uses a critically damped spring and a real gap around its knot.
- The Pink Thread knot is also the page-progress handle: drag vertically on desktop or
  horizontally below `620px`. While held, position maps directly to document progress;
  do not add a second easing layer between the pointer and the page.
- Keep its invisible hit target at least `28px` wide on desktop and `44px` high on touch
  screens. Preserve slider semantics and Arrow, Page, Home, and End key controls.
- `prefers-reduced-motion` must preserve all content and identity.

## Component test

Before adding a new component, check:

1. Does it use an existing surface, radius, type, and motion role?
2. Is pink communicating a connection, not merely decoration?
3. Is navy structural rather than an all-page tint?
4. Can the component be understood without animation?
5. Does it still feel like an edited scientific story rather than a UI template?
