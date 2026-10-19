interface DestinationPreview {
  hint: string;
  summary: string;
}

// Keep next-page previews scoped to the reader routes without changing Home copy.
export const wikiDestinationPreviews: Record<string, DestinationPreview> = {
  "/roster": {
    hint: "The people behind CirCure",
    summary:
      "Meet the students, advisors and mentors working across research, education and engagement.",
  },
  "/attributions": {
    hint: "How we shared the work",
    summary:
      "Explore the official record of team responsibilities, external support and AI tool use.",
  },
  "/activities": {
    hint: "The moments we shared",
    summary:
      "Look back at the shared work, friendships and everyday moments of our iGEM season.",
  },
  "/description": {
    hint: "The question behind CirCure",
    summary:
      "Explore the clinical need and research rationale behind our modular circRNA vaccine strategy for TNBC.",
  },
  "/engineering": {
    hint: "How evidence shapes decisions",
    summary:
      "Follow the four TIME cycles and their DBTL iterations, from research questions to experimental evidence.",
  },
  "/results": {
    hint: "Evidence and its limits",
    summary:
      "Examine RNA quality checks, immune-function assays and tumour-growth measurements alongside their limitations.",
  },
  "/contribution": {
    hint: "Resources other teams can reuse",
    summary:
      "Explore biological parts, protocols, software and educational resources documented for future teams.",
  },
  "/visual-design": {
    hint: "Making the project understandable",
    summary:
      "Explore the visual identity, illustrations and interactive design that help readers navigate CirCure.",
  },
  "/notebook": {
    hint: "The work behind each milestone",
    summary:
      "Follow wet-lab records of planning, experiments, decisions and progress across the project.",
  },
  "/safety-and-security": {
    hint: "How we put safety into practice",
    summary:
      "Explore how SAFE ON connects risk assessment, training, approvals and experimental decisions.",
  },
  "/design": {
    hint: "Inside the molecular blueprint",
    summary:
      "Explore RNA circularisation, translation elements and the multi-epitope payload, alongside questions that still need testing.",
  },
  "/experiments": {
    hint: "The methods behind the design",
    summary:
      "Explore template preparation, RNA circularisation, cell-based assays and the animal-study workflow.",
  },
  "/measurement": {
    hint: "How we interpret measurements",
    summary:
      "Explore circular-fraction estimates, RNA stability and immune readouts, with their controls, calculations and limitations.",
  },
  "/alternative-platform": {
    hint: "What makes the platform reusable",
    summary:
      "Explore the modular backbone, cell-free production workflow and human-cell testing system that other teams can adapt.",
  },
  "/model": {
    hint: "How models guide our choices",
    summary:
      "Explore AEIP for target and epitope selection, Cell2Dose for dose exploration and SST-QN for sustainability assessment.",
  },
  "/software": {
    hint: "Tools for circRNA design and inspection",
    summary:
      "Explore CircuForge and TorusFold, with guides and validation details for construct design and circRNA structure analysis.",
  },
  "/hardware": {
    hint: "CirCore at the design stage",
    summary:
      "Explore the CirCore reaction-device designs for temperature control, mixing and sealed handling during circularisation.",
  },
  "/games": {
    hint: "Different ways to learn through play",
    summary:
      "Explore the virtual laboratory, breast-health RPG, circRNA strategy game and biology memory game.",
  },
  "/entrepreneurship": {
    hint: "What reaching patients would require",
    summary:
      "Explore the proposed business case, development roadmap and adoption pathway for CirCure.",
  },
  "/human-practices": {
    hint: "How listening shapes our decisions",
    summary:
      "Follow conversations with clinicians, researchers, industry partners and the public, and how feedback informed the project.",
  },
  "/education": {
    hint: "Different ways to take part",
    summary:
      "Explore classroom activities, public dialogue, games and virtual laboratory experiences for different communities.",
  },
  "/sustainability": {
    hint: "Current contributions and future impacts",
    summary:
      "Explore CirCure's current contributions, potential impacts and trade-offs across the Sustainable Development Goals.",
  },
};
