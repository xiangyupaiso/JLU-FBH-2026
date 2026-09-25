import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const inclusivityPage: WikiPageContent = {
  route: "/inclusivity",
  category: "engagement",
  chapter: "Engagement / 04 of 05",
  eyebrow: "Inclusivity · Access and representation",
  title: "Inclusivity",
  lede: "Access, voice, and representation belong inside the design.",
  boundary:
    "The page defines an inclusion audit. It must not claim representation of a community from a small number of participants or describe accessibility measures that were only planned.",
  visual: "inclusion-network",
  visualLabel: "Access, voice, and representation network",
  visualSteps: ["language", "format", "voice", "privacy"],
  facts: [
    {
      label: "Access",
      value: "Language, format, place, cost, time, and technology.",
    },
    {
      label: "Voice",
      value: "Affected people can influence a relevant decision.",
    },
    {
      label: "Safety",
      value: "Consent and privacy match vulnerability and use.",
    },
    {
      label: "Limit",
      value: "Missing voices restrict what the team can conclude.",
    },
  ],
  sections: [
    {
      id: "inclusion-barriers",
      index: "01",
      kicker: "Barrier map",
      title: "Name the default that excludes people.",
      summary:
        "The audit begins with a concrete activity, tool, meeting, publication, or decision and asks who cannot participate on equal terms.",
      layout: "matrix",
      items: [
        {
          label: "Communication",
          title: "Language and scientific literacy",
          body: "Translation, jargon, reading level, visual explanation, captioning, alt text, and non-text alternatives.",
          status: "planned",
        },
        {
          label: "Participation",
          title: "Place, time, cost, technology",
          body: "Travel, schedule, connectivity, device, caregiving, compensation, venue, sensory, and mobility constraints.",
          status: "planned",
        },
        {
          label: "Representation",
          title: "Power and privacy",
          body: "Who sets the agenda, who is asked to disclose, who can disagree safely, and whose perspective one participant cannot represent.",
          status: "open",
        },
      ],
    },
    {
      id: "inclusion-actions",
      index: "02",
      kicker: "Action record",
      title: "Match each measure to a documented barrier.",
      summary:
        "Accessibility is an iterative design requirement, not a list of universal accommodations copied into every activity.",
      layout: "steps",
      items: [
        {
          label: "Find",
          title: "Ask before choosing the format.",
          body: "Use partner review, participant preference, accessibility checks, and missing-voice analysis to identify barriers.",
          status: "planned",
        },
        {
          label: "Change",
          title: "Modify the artifact or process.",
          body: "Adapt language, timing, venue, interface, media, consent, facilitation, data collection, or decision authority.",
          status: "planned",
        },
        {
          label: "Check",
          title: "Evaluate actual access.",
          body: "Record who participated, what still failed, qualitative feedback, unintended burden, and whether the measure changed engagement.",
          status: "open",
        },
        {
          label: "Share",
          title: "Publish reusable accessibility notes.",
          body: "Release editable materials, alt-text and caption practices, translation notes, and context-specific limitations.",
          status: "planned",
        },
      ],
    },
    {
      id: "inclusion-consent",
      index: "03",
      kicker: "Consent and evidence tiers",
      title: "Visibility is not always inclusion.",
      summary:
        "People can influence the project without having their identity, image, health context, or raw notes published.",
      layout: "ledger",
      items: [
        {
          label: "Public",
          title: "Approved attribution",
          body: "Name, role, quotation, image, and intended use are explicitly approved.",
          status: "recorded",
        },
        {
          label: "Role",
          title: "Limited attribution",
          body: "Approved role and summary or quotation are public; identity and full notes remain internal.",
          status: "recorded",
        },
        {
          label: "Anonymized",
          title: "Influence without identity",
          body: "Only a non-identifying influence summary is public; identifiable raw notes remain restricted.",
          status: "recorded",
        },
        {
          label: "Restricted",
          title: "No public content",
          body: "The record supports internal learning only and is protected according to the agreed access rule.",
          status: "recorded",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "Consent and stakeholder method" },
    { path: "/education", label: "Accessible education" },
    { path: "/sustainability", label: "Equitable impact" },
  ],
  next: {
    path: "/sustainability",
    label: "Sustainability",
    title: "Which impacts persist beyond the project year?",
  },
};
