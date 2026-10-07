import type { WikiPageContent } from "../../components/wiki/wikiPageTypes";

export const visualDesignPage: WikiPageContent = {
  route: "/visual-design",
  category: "project",
  chapter: "Project / 05 of 07",
  eyebrow: "Visual Design · Aesthetic & Identity",
  title: "Visual Design",
  lede: "Visual identity, design philosophy, and scientific illustration system of CirCure.",
  boundary:
    "Design specifications, visual system principles, and scientific communication assets developed for the CirCure project.",
  visual: "resource-library",
  visualLabel: "CirCure visual design and communication system",
  visualSteps: ["philosophy", "identity", "illustration", "experience"],
  facts: [
    { label: "System", value: "Cohesive visual identity across five modules." },
    { label: "Clarity", value: "Standardized biological diagram conventions." },
    { label: "Identity", value: "Warm, accessible palettes rooted in nature." },
    { label: "Motion", value: "Smooth GSAP interactions and tactile UI." },
  ],
  sections: [
    {
      id: "design-philosophy",
      index: "01",
      kicker: "01 / Philosophy",
      navLabel: "Design Philosophy",
      title: "Design Philosophy & Aesthetic Direction",
      summary:
        "Unifying biological rigor with warm, accessible human-centered aesthetics.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "At CirCure, visual design is not mere decoration—it is a core scientific communication tool. Our design philosophy bridges the gap between complex circular RNA biology and intuitive, human-centered visual narratives.",
            "By combining precise molecular representation with organic motifs, soft palettes, and clear informational hierarchy, we ensure that both specialized researchers and the general public can seamlessly navigate and comprehend our scientific innovations.",
          ],
        },
        {
          type: "note",
          label: "Design Principles",
          body: "1. Clarity: Prioritize scientific accuracy and legible hierarchy across all diagrams.\n2. Humanity: Use warm, organic palettes that evoke care, vitality, and clinical accessibility.\n3. Modularity: Build reusable tokens and components across all wiki modules and presentations.",
        },
      ],
    },
    {
      id: "brand-identity",
      index: "02",
      kicker: "02 / Visual Identity",
      navLabel: "Visual Identity",
      title: "Color Tokens & Typography System",
      summary:
        "A harmonious token architecture tailored to the five core project dimensions.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "The CirCure visual identity is anchored by a cohesive token system. Each wiki module—Team, Project, Wet Lab, Dry Lab, and Engagement—features a bespoke color palette derived from nature and clinical care.",
            "Typography pairs modern sans-serif typefaces for sharp heading readability with balanced editorial body fonts for immersive scientific reading.",
          ],
        },
        {
          type: "table",
          caption: "Table 1 | CirCure Module Palette Matrix",
          headers: ["Module", "Dominant Hue", "Accent Hue", "Design Rationale"],
          rows: [
            [
              "Project",
              "Soft Olive (#b7d782)",
              "Tuscan Clay (#84382b)",
              "Reflects living nature, scientific vitality, and grounded evidence.",
            ],
            [
              "Wet Lab",
              "Sage Green (#a9c47f)",
              "Warm Terracotta (#b55d3e)",
              "Evokes laboratory benches, biochemical reagents, and precision assays.",
            ],
            [
              "Dry Lab",
              "Computational Teal (#74b9a8)",
              "Deep Slate (#2c4046)",
              "Represents algorithms, structural models, and quantitative rigour.",
            ],
            [
              "Engagement",
              "Warm Ochre (#d9a74a)",
              "Earthy Amber (#8a4b18)",
              "Highlights community outreach, education, and human practices.",
            ],
            [
              "Team",
              "Muted Coral (#dd8b75)",
              "Deep Maroon (#5e231e)",
              "Celebrates collaboration, passion, and multidisciplinary talent.",
            ],
          ],
        },
      ],
    },
    {
      id: "scientific-illustration",
      index: "03",
      kicker: "03 / Illustration",
      navLabel: "Scientific Illustration",
      title: "Scientific Illustration & Figure Language",
      summary:
        "Visual metaphors and schematics translating multivalent vaccines into clear diagrams.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "Explaining circular RNA circularization, multi-epitope backbones, and immune activation requires tailored visual storytelling. Our diagrams adhere to standardized conventions for RNA topologies, protein domains, and cellular interactions.",
            "Detailed illustrations and vector assets have been crafted to ensure modularity across our wiki pages, presentation slides, and scientific posters.",
          ],
        },
      ],
    },
    {
      id: "ui-motion",
      index: "04",
      kicker: "04 / Interactive UX",
      navLabel: "UI & Interaction",
      title: "Interaction Design & Motion Language",
      summary:
        "Scroll-driven storytelling, responsive layouts, and accessible navigation.",
      blocks: [
        {
          type: "prose",
          paragraphs: [
            "To provide an engaging reading experience, the CirCure wiki incorporates subtle GSAP scroll triggers, interactive 3D protein inspection via Mol*, and tactile custom cursor behaviors.",
            "Every interactive element follows strict accessibility and performance standards, supporting reduced motion preferences and responsive scaling across desktop and mobile viewports.",
          ],
        },
      ],
    },
  ],
  links: [
    { path: "/description", label: "Project Rationale" },
    { path: "/engineering", label: "Engineering Success" },
    { path: "/results", label: "Results & Discussion" },
    { path: "/contribution", label: "Team Contribution" },
  ],
  next: {
    path: "/notebook",
    label: "Notebook",
    title: "Trace the chronological progress and laboratory records.",
  },
};
