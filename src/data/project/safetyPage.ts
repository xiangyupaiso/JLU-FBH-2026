import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const safetyPage: WikiPageContent = {
  route: "/safety-and-security",
  category: "project",
  chapter: "Project / 07 of 07",
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
          body: "Dual-use sequence access, synthesis screening, data transfer, cloud storage, physical access, and public release.",
          status: "planned",
        },
        {
          label: "Community",
          navLabel: "Perception & consent",
          title: "Community and stakeholder risk",
          body: "Stakeholder engagement, informed consent, patient representation, public communication, and unverified medical claims.",
          status: "recorded",
        },
      ],
    },
    {
      id: "safety-controls",
      index: "02",
      kicker: "Hierarchy of controls",
      navLabel: "Control hierarchy",
      title: "Design out the hazard before relying on behavior.",
      summary:
        "Protective equipment is the last line of defense; substitution, engineering controls, and standard operating procedures come first.",
      body: [
        "When an experiment carries risk, the team first considers whether a benign substitute can answer the same question. If the hazard cannot be eliminated, physical containment and supervised protocols take precedence over protective gear.",
      ],
      layout: "steps",
      items: [
        {
          label: "Level 01",
          navLabel: "Eliminate & substitute",
          title: "Eliminate or substitute",
          body: "Replace hazardous chemicals with benign alternatives; use non-pathogenic laboratory strains.",
          status: "recorded",
        },
        {
          label: "Level 02",
          navLabel: "Engineering controls",
          title: "Engineering controls",
          body: "Biosafety cabinets, certified autoclaves, negative pressure rooms, and fume hoods.",
          status: "recorded",
        },
        {
          label: "Level 03",
          navLabel: "Administrative rules",
          title: "Administrative controls",
          body: "Mandatory training, double-sign-off for hazardous procedures, waste tracking, and lone-worker bans.",
          status: "recorded",
        },
        {
          label: "Level 04",
          navLabel: "PPE baseline",
          title: "Personal protective equipment",
          body: "Lab coats, nitrile gloves, eye protection, and specialized barriers for UV and thermal hazards.",
          status: "recorded",
        },
      ],
    },
    {
      id: "safety-boundaries",
      index: "03",
      kicker: "No-go conditions",
      navLabel: "No-go conditions",
      title: "Clear conditions where work must pause.",
      summary:
        "Explicit stop criteria prevent escalation and ensure peer and advisor review before resuming high-uncertainty tasks.",
      body: [
        "A safety system without stop conditions is merely advice. The team maintains explicit thresholds that immediately halt an experiment until an advisor or institutional safety officer signs off.",
      ],
      layout: "ledger",
      items: [
        {
          label: "SAFE–01",
          navLabel: "Unverified chassis",
          title: "Unverified chassis or sequence",
          body: "Do not cultivate or express materials without verified sequence identity and confirmed biosafety tier.",
          status: "boundary",
        },
        {
          label: "SAFE–02",
          navLabel: "Containment failure",
          title: "Containment failure or equipment fault",
          body: "Pause immediately if airflow, temperature, or sealing fails during a procedure.",
          status: "boundary",
        },
        {
          label: "SAFE–03",
          navLabel: "Unsupervised hazard",
          title: "High-hazard work without supervision",
          body: "Never handle high-concentration chemicals or active animal protocols alone.",
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
    { path: "/description", label: "Project Rationale" },
    { path: "/engineering", label: "Engineering Success" },
    { path: "/results", label: "Results & Discussion" },
    { path: "/notebook", label: "Lab Notebook" },
    { path: "/experiments", label: "Wet Lab Experiments" },
  ],
  next: {
    path: "/design",
    label: "Design",
    title: "Step into the wet lab construct design and engineering architecture.",
  },
};
