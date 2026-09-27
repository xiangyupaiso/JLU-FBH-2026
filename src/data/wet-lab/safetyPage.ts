import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";
export const safetyPage: WikiPageContent = {
  route: "/safety-and-security",
  category: "wet-lab",
  chapter: "Wet Lab / 05 of 05",
  eyebrow: "Safety and security · Design boundaries",
  title: "Safety and Security",
  lede: "Risk controls begin before every experiment.",
  boundary:
    "This page is a planning framework and does not replace institutional review, iGEM forms, local regulation, supervision, or project-specific risk assessment.",
  visual: "safety-boundary",
  visualLabel: "Risk and no-go boundary map",
  visualSteps: ["biological", "chemical", "physical", "misuse"],
  facts: [
    {
      label: "Identify",
      value: "Hazard, exposure route, affected party, and uncertainty.",
    },
    { label: "Reduce", value: "Elimination and design controls before PPE." },
    {
      label: "Monitor",
      value: "Training, records, incidents, and review points.",
    },
    {
      label: "Stop",
      value: "Explicit no-go conditions and escalation routes.",
    },
  ],
  sections: [
    {
      id: "safety-risks",
      index: "01",
      kicker: "Risk inventory",
      navLabel: "Risk inventory",
      title: "Name who or what could be harmed.",
      summary:
        "Risk descriptions should be specific enough to change a construct, protocol, access rule, claim, or implementation plan.",
      body: [
        "Each risk statement identifies a hazard, an exposure or misuse pathway, the affected people or environment, existing controls, residual uncertainty, and the owner of the next review. Generic statements that cannot change a decision are not treated as completed assessment.",
      ],
      layout: "matrix",
      items: [
        {
          label: "Biological",
          navLabel: "Material & host",
          title: "Material and host risk",
          body: "Chassis, payload, expression product, off-target activity, environmental release, cell line handling, and waste.",
          status: "planned",
        },
        {
          label: "Operational",
          navLabel: "Chemical & physical",
          title: "Chemical and physical risk",
          body: "Reagents, sharps, heat, UV, centrifugation, electrical equipment, transport, storage, and disposal.",
          status: "planned",
        },
        {
          label: "Security",
          navLabel: "Information & misuse",
          title: "Information and misuse risk",
          body: "Access to materials, sequences, data, code, dual-use interpretation, medical misinformation, and unauthorized claims.",
          status: "open",
        },
        {
          label: "Governance",
          navLabel: "Consent & access",
          title: "Consent, access, and communication",
          body: "Stakeholder records, identifiable material, restricted information, public-facing claims, review authority, and the route for correction or withdrawal.",
          status: "planned",
        },
      ],
    },
    {
      id: "safety-controls",
      index: "02",
      kicker: "Control hierarchy",
      navLabel: "Control hierarchy",
      title: "Mitigation should be visible in the artifact.",
      summary:
        "Where possible, the project changes the design or removes the hazard instead of relying only on procedural reminders.",
      body: [
        "Mitigations are ordered by reliability. Elimination and design constraints are considered first, followed by physical or technical controls, documented responsibility, and finally task-specific PPE; every layer names how its effectiveness will be checked.",
      ],
      layout: "steps",
      items: [
        {
          label: "Eliminate",
          navLabel: "Eliminate hazard",
          title: "Avoid unnecessary hazard.",
          body: "Choose non-pathogenic systems, safer materials, limited functionality, and the minimum data or material access required.",
          status: "planned",
        },
        {
          label: "Engineer",
          navLabel: "Built-in constraints",
          title: "Build constraints into the system.",
          body: "Use design boundaries, containment, access control, fail-safe operation, and assays that reveal unacceptable cell stress.",
          status: "planned",
        },
        {
          label: "Administer",
          navLabel: "Responsibility",
          title: "Define responsibility.",
          body: "Training, supervision, inventories, labels, storage, transport, deviation reporting, and incident escalation must be documented.",
          status: "planned",
        },
        {
          label: "Protect",
          navLabel: "Task-specific PPE",
          title: "Use task-specific PPE.",
          body: "PPE remains the final layer and is tied to the actual procedure rather than listed generically.",
          status: "recorded",
        },
      ],
    },
    {
      id: "safety-boundaries",
      index: "03",
      kicker: "Claim and continuation gates",
      navLabel: "No-go gates",
      title: "A no-go condition is an engineering output.",
      summary:
        "The team should predefine when a construct, dose, assay, publication, or implementation claim will not advance.",
      body: [
        "A no-go decision is logged with the triggering evidence, responsible reviewer, immediate containment action, and conditions required for reconsideration. Stopping is presented as a designed outcome rather than an unexplained absence of progress.",
      ],
      layout: "ledger",
      items: [
        {
          label: "SAFE–01",
          navLabel: "Unexpected product",
          title: "Unexpected product or unresolved topology",
          body: "Stop downstream interpretation and return to construct identity, purification, or geometry.",
          status: "boundary",
        },
        {
          label: "SAFE–02",
          navLabel: "Cell stress",
          title: "Signal coupled to unacceptable cell stress",
          body: "Reject the condition; do not optimize only for maximum expression or activation.",
          status: "boundary",
        },
        {
          label: "SAFE–03",
          navLabel: "Medical claims",
          title: "Evidence cannot support medical readiness",
          body: "Keep therapeutic efficacy, safety, dosing, and clinical claims outside the published conclusion.",
          status: "boundary",
        },
        {
          label: "SAFE–04",
          navLabel: "Consent & access",
          title: "Consent or access is unclear",
          body: "Do not publish identifiable stakeholder material or restricted records.",
          status: "boundary",
        },
      ],
    },
  ],
  links: [
    { path: "/experiments", label: "Experimental controls" },
    { path: "/human-practices", label: "Responsible design" },
    { path: "/inclusivity", label: "Consent and access" },
  ],
  next: {
    path: "/model",
    label: "Model",
    title: "Which designs deserve the first experiment?",
  },
};
