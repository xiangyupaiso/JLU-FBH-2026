import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const humanPracticesPage: WikiPageContent = {
  route: "/human-practices",
  category: "engagement",
  chapter: "Engagement / 02 of 05",
  eyebrow: "Integrated Human Practices · Decision trace",
  title: "Human Practices",
  lede: "Outside voices return as visible design decisions.",
  boundary:
    "Dates, stakeholder identities, quotations, images, and evidence codes in the original prototype are placeholders. Only consent-cleared, auditable records may replace them.",
  visual: "human-thread",
  visualLabel: "Stakeholder signal to design decision thread",
  visualSteps: ["ask", "listen", "change", "return"],
  facts: [
    {
      label: "Purpose",
      value: "Test whether the project is responsible and worthwhile.",
    },
    {
      label: "Input",
      value: "Relevant, affected, dissenting, and missing perspectives.",
    },
    {
      label: "Change",
      value: "A visible construct, assay, model, claim, or workflow revision.",
    },
    { label: "Return", value: "The changed artifact goes back for critique." },
  ],
  sections: [
    {
      id: "hp-changes",
      index: "01",
      kicker: "Judge the changes",
      title: "Count decisions, not meetings.",
      summary:
        "The strongest record shows an original assumption, stakeholder signal, team decision, changed artifact, primary evidence, and return step.",
      layout: "steps",
      items: [
        {
          label: "Purpose",
          title: "A single-target story became a portfolio question.",
          body: "Clinical and biological critique should resolve to a versioned change in project framing and candidate strategy.",
          status: "planned",
        },
        {
          label: "Design",
          title: "Risk notes became hard boundaries.",
          body: "Delivery, safety, off-target, and feasibility concerns should create acceptance rules and explicit no-go conditions.",
          status: "planned",
        },
        {
          label: "Execution",
          title: "Generic readouts became disease-relevant tests.",
          body: "Mentor and stakeholder questions should map to assay purpose, controls, interpretation, and evidence dependencies.",
          status: "planned",
        },
        {
          label: "Implementation",
          title: "An ideal user became a real workflow.",
          body: "Labor, training, storage, access, governance, and adoption constraints should change the implementation chapter.",
          status: "open",
        },
      ],
    },
    {
      id: "hp-timeline",
      index: "02",
      kicker: "Evidence timeline",
      title: "Every conversation must move the work—or explain why it did not.",
      summary:
        "The final timeline should include accepted, rejected, deferred, conflicting, and unresolved input without turning stakeholder stories into decoration.",
      layout: "timeline",
      items: [
        {
          label: "HP–01 · replace date",
          title: "Clinical boundary review",
          body: "Record the original claim, the reviewer’s consent-safe concern, the decision, the changed public language or validation gate, and return feedback.",
          status: "planned",
        },
        {
          label: "HP–02 · replace date",
          title: "Mechanism and delivery review",
          body: "Record which attractive route was narrowed or archived, the evidence behind the decision, and the technical artifact changed.",
          status: "planned",
        },
        {
          label: "HP–03 · replace date",
          title: "Community explanation and questions",
          body: "Turn repeated public questions into communication requirements, new interview targets, and revisions to uncertainty or risk framing.",
          status: "planned",
        },
        {
          label: "HP–04 · replace date",
          title: "Return loop",
          body: "Bring the revised design back to earlier contributors and record agreement, disagreement, new concerns, and remaining gaps separately.",
          status: "open",
        },
      ],
    },
    {
      id: "hp-method",
      index: "03",
      kicker: "Method, ethics, and limits",
      title: "A credible loop explains how input was handled.",
      summary:
        "Selection, consent, analysis, conflict, bias, publication, and missing voices are part of the method, not an appendix added after the story.",
      layout: "matrix",
      items: [
        {
          label: "Select",
          title: "Map power and missing voices.",
          body: "Choose for relevance, affectedness, disagreement, and perspective diversity—not prestige—and state who remains absent.",
          status: "recorded",
        },
        {
          label: "Engage",
          title: "Ask for challenge, not approval.",
          body: "State the decision under review, select a consent tier, invite no-go conditions, and separate lived experience from technical authority.",
          status: "recorded",
        },
        {
          label: "Decide and return",
          title: "Keep conflict visible.",
          body: "Document accepted and rejected advice, the decision rule, minority views, changed artifact, return review, and current limitation.",
          status: "recorded",
        },
      ],
      note: {
        label: "Publication gate",
        body: "Every public quotation, image, role, date, number, and evidence code must be accurate, consent-cleared, and traceable. Restricted records remain restricted.",
      },
    },
  ],
  links: [
    { path: "/description", label: "Project change" },
    { path: "/engineering", label: "Design iterations" },
    { path: "/education", label: "Public dialogue" },
  ],
  next: {
    path: "/education",
    label: "Education",
    title: "How did dialogue change what everyone learned?",
  },
};
