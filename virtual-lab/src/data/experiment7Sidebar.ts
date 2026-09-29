import type { ExperimentInfoSidebarData } from '../components/ExperimentInfoSidebar';

export const experiment7SidebarData = {
  experimentLabel: 'Experiment 07',
  title: "Experiment Information",
  safety: [
    "Store T4 ligase at low temperature.",
    "Avoid repeated freezing and thawing of the buffer.",
    "Prevent DNA contamination during the experiment.",
  ],
  principle:
    "T4 DNA ligase catalyzes phosphodiester bond formation between DNA fragments, joining a vector and a target insert to construct a recombinant plasmid. Ligation efficiency depends on the fragment ratio and reaction conditions.",
  questions: [
    {
      id: 1,
      question: "Which chemical bond forms during DNA ligation?",
      options: ["Phosphodiester bond", "Hydrogen bond"],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "Which step is essential for constructing a recombinant plasmid?",
      options: ["DNA fragment ligation", "DNA degradation"],
      correctIndex: 0,
    },
  ],
  instruments: [
    {
      id: 'metal-bath',
      name: "Cooling Dry Bath (16°C)",
      englishName: 'Low Temperature Metal Bath (16℃)',
      image: './images/experiment7/image20.png',
    },
    {
      id: 'microcentrifuge',
      name: "Microcentrifuge",
      englishName: 'Microcentrifuge',
      image: './images/experiment7/image17.png',
    },
    {
      id: 'ice-box',
      name: "Ice Box",
      englishName: 'Ice Box',
      image: './images/experiment7/image18.png',
    },
    {
      id: 'ep-tube',
      name: "Microcentrifuge Tube",
      englishName: 'EP Tube',
      image: './images/experiment7/reactionTube.webp',
    },
    {
      id: 'pipette',
      name: "Pipette",
      englishName: 'Pipette',
      image: './images/experiment7/pipette.webp',
    },
  ],
  instrumentTrayOrder: ['ep-tube', 'metal-bath', 'pipette', 'ice-box', 'microcentrifuge'],
  reagents: [
    {
      id: 'vector-dna',
      name: "Double-digested pET-28a vector (vector DNA)",
      englishName: 'Double Digested pET-28a Vector (Vector DNA)',
      image: './images/experiment7/image19.png',
    },
    {
      id: 'gfp-fragment',
      name: "Double-digested GFP fragment (insert DNA)",
      englishName: 'Double Digested GFP Fragment (Insert Fragment)',
      image: './images/experiment7/image22.png',
    },
    {
      id: 'sterile-water',
      name: "Sterile deionized water",
      englishName: 'Sterile Deionized Water (ddH₂O)',
      image: './images/experiment7/image13.png',
    },
    {
      id: 'ligase-buffer',
      name: "T4 DNA ligase buffer",
      englishName: '10× T4 DNA Ligase Buffer (containing ATP)',
      image: './images/experiment7/image15.png',
    },
    {
      id: 't4-dna-ligase',
      name: "T4 DNA ligase",
      englishName: 'T4 DNA Ligase',
      image: './images/experiment7/image14.png',
    },
  ],
} satisfies ExperimentInfoSidebarData;
