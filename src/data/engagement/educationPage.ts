import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const educationPage: WikiPageContent = {
  route: "/education",
  category: "engagement",
  chapter: "Engagement / 03 of 05",
  eyebrow: "Education · Two-way learning",
  title: "Education",
  lede: "Explain, listen, and let dialogue change the work.",
  boundary:
    "No completed activity dataset or participant evaluation was supplied. Example activity structures must be replaced with real audiences, dates, materials, consent, feedback, and outcomes.",
  visual: "education-dialogue",
  visualLabel: "Two-way educational dialogue",
  visualSteps: [
    "What is the promise?",
    "Where is the uncertainty?",
    "Who carries risk?",
    "What should change?",
  ],
  facts: [
    {
      label: "Audience",
      value: "Needs and prior knowledge shape the activity.",
    },
    {
      label: "Objective",
      value: "Learning goals are observable and proportionate.",
    },
    {
      label: "Dialogue",
      value: "Participants question and reshape the material.",
    },
    {
      label: "Evaluate",
      value: "Evidence changes the next educational iteration.",
    },
  ],
  sections: [
    {
      id: "education-design",
      index: "01",
      kicker: "Activity design",
      title: "Start from the audience, not the slide deck.",
      summary:
        "The final record should explain who the activity serves, what barriers exist, and why the selected format supports two-way learning.",
      layout: "steps",
      items: [
        {
          label: "Discover",
          title: "Understand the audience.",
          body: "Record age or role, prior knowledge, language, access needs, motivation, concerns, setting, and safeguarding requirements.",
          status: "planned",
        },
        {
          label: "Co-design",
          title: "Build with relevant partners.",
          body: "Review objectives, examples, language, format, timing, and accessibility with educators or community collaborators.",
          status: "planned",
        },
        {
          label: "Facilitate",
          title: "Invite questions and disagreement.",
          body: "Use prompts, scenarios, hands-on materials, and pauses that let participants surface values and uncertainty.",
          status: "planned",
        },
        {
          label: "Revise",
          title: "Let feedback change the material.",
          body: "Document misconceptions, recurring questions, accessibility issues, and the next version of the activity.",
          status: "open",
        },
      ],
    },
    {
      id: "education-activities",
      index: "02",
      kicker: "Working activity set",
      title: "Different audiences need different learning forms.",
      summary:
        "Activities should share a scientific core while changing language, pace, interaction, and evidence for the people in the room.",
      layout: "matrix",
      items: [
        {
          label: "Workshop",
          title: "Recognition and uncertainty",
          body: "A participatory map of biomarkers, TNBC heterogeneity, candidate evidence, and the difference between a hypothesis and a proven therapy.",
          status: "planned",
        },
        {
          label: "Classroom",
          title: "Build the evidence chain",
          body: "A card or physical model activity where learners connect construct, controls, readouts, limitations, and next decisions.",
          status: "planned",
        },
        {
          label: "Public resource",
          title: "Ask better questions",
          body: "An accessible guide to interpreting claims, sources, risk, uncertainty, and responsible synthetic biology communication.",
          status: "open",
        },
      ],
    },
    {
      id: "education-evaluation",
      index: "03",
      kicker: "Evaluation",
      title: "Measure learning without turning people into metrics.",
      summary:
        "Use proportionate quantitative and qualitative evidence, preserve dissent, and state what the activity cannot demonstrate.",
      layout: "ledger",
      items: [
        {
          label: "Before",
          title: "Needs and baseline",
          body: "Questions, concept map, confidence, expectations, or short interviews establish what the audience already knows and values.",
          status: "planned",
        },
        {
          label: "During",
          title: "Dialogue evidence",
          body: "Anonymous questions, observations, recurring themes, and participant-created artifacts reveal engagement and friction.",
          status: "planned",
        },
        {
          label: "After",
          title: "Learning and team reflection",
          body: "Assess changed explanations or reasoning, remaining confusion, participant feedback, team learning, and the next iteration.",
          status: "open",
        },
      ],
    },
  ],
  links: [
    { path: "/human-practices", label: "How feedback changed CirCure" },
    { path: "/inclusivity", label: "Accessible participation" },
    { path: "/contribution", label: "Reusable materials" },
  ],
  next: {
    path: "/inclusivity",
    label: "Inclusivity",
    title: "Who can participate—and who is still missing?",
  },
};
