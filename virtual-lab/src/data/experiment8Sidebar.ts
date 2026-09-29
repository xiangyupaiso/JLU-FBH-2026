import type { ExperimentInfoSidebarData } from '../components/ExperimentInfoSidebar';

const sidebarImage = './images/experiment8/sidebar';

export const experiment8SidebarData = {
  experimentLabel: 'Experiment 08',
  title: "Experiment Information",
  safety: [
    "Keep cells in an ice bath throughout competent cell preparation.",
    "Control heat-shock time and temperature precisely.",
    "Sterilize and cool the spreader before plating.",
    "Sterilize waste containing bacteria or plasmids before disposal.",
    "Wear a lab coat and gloves during the experiment.",
  ],
  principle:
    "CaCl₂ treatment increases membrane permeability to facilitate DNA uptake. Heat shock promotes plasmid entry into cells. Antibiotic selection allows plasmid-bearing cells to grow on kanamycin plates and isolates candidate transformants.",
  questions: [
    {
      id: 1,
      question: "What is the main effect of competent cell treatment?",
      options: ["Increase cell membrane permeability", "Reduce cell metabolism"],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "Why are antibiotic plates used after transformation?",
      options: ["Select cells carrying a plasmid", "Increase bacterial growth rate"],
      correctIndex: 0,
    },
  ],
  instruments: [
    { id: 'pcr-amplifier', name: "Thermal Cycler", englishName: 'PCR Amplifier', image: `${sidebarImage}/pcr-amplifier.png` },
    { id: 'pipette', name: "Pipette", englishName: 'Pipette', image: `${sidebarImage}/pipette.png` },
    { id: 'power-supply', name: "Electrophoresis Power Supply", englishName: 'Electrophoresis Power Supply', image: `${sidebarImage}/power-supply.png` },
    { id: 'microwave', name: "Microwave", englishName: 'Microwave Oven', image: `${sidebarImage}/microwave.png` },
    { id: 'pipette-tip', name: "Pipette Tips", englishName: 'Pipette Tip', image: `${sidebarImage}/pipette-tip.png` },
    { id: 'gel-comb', name: "Gel Comb", englishName: 'Gel Comb', image: `${sidebarImage}/gel-comb.png` },
    { id: 'chamber', name: "Electrophoresis Tank", englishName: 'Electrophoresis Chamber', image: `${sidebarImage}/chamber.png` },
    { id: 'gel-imager', name: "UV Gel Imaging System", englishName: 'UV Gel Imaging System', image: `${sidebarImage}/gel-imager.png` },
    { id: 'spatula', name: "Spatula", englishName: 'Spatula', image: `${sidebarImage}/spatula.png` },
    { id: 'ep-tube', name: "Microcentrifuge Tube", englishName: 'EP Tube', image: `${sidebarImage}/ep-tube.png` },
    { id: 'ep-tube-rack', name: "Microcentrifuge Tube Rack", englishName: 'EP Tube Rack', image: `${sidebarImage}/ep-tube-rack.png` },
  ],
  instrumentTrayOrder: [
    'gel-comb',
    'pcr-amplifier',
    'ep-tube',
    'microwave',
    'pipette-tip',
    'power-supply',
    'spatula',
    'gel-imager',
    'chamber',
    'pipette',
    'ep-tube-rack',
  ],
  reagents: [
    {
      id: 'recombinant-plasmid',
      name: "Recombinant pET-28a-GFP plasmid (Experiment 7 product)",
      englishName: 'Recombinant Plasmid pET-28a-GFP (Product of Experiment 7)',
      image: `${sidebarImage}/recombinant-plasmid.png`,
    },
    {
      id: 'dh5a-colony',
      name: "Activated E. coli DH5α colony (Experiment 1 product)",
      englishName: 'Activated Single Colony of Escherichia coli DH5α (Product of Experiment 1)',
      image: `${sidebarImage}/dh5a-colony.png`,
    },
    {
      id: 'lb-liquid-medium',
      name: "LB broth (without antibiotics)",
      englishName: 'LB Liquid Medium (Antibiotic-Free)',
      image: `${sidebarImage}/lb-liquid-medium.png`,
    },
    {
      id: 'glycerol-cacl2',
      name: "Calcium chloride solution (with 15% sterile glycerol)",
      englishName: 'CaCl₂ Solution (containing 15% Sterile Glycerol)',
      image: `${sidebarImage}/glycerol-cacl2.png`,
    },
    {
      id: 'kanamycin-lb-plate',
      name: "LB agar plate with kanamycin",
      englishName: 'Kanamycin Resistant LB Solid Medium Plate',
      image: `${sidebarImage}/kanamycin-lb-plate.png`,
    },
    {
      id: 'cacl2',
      name: "Calcium chloride solution",
      englishName: 'CaCl₂ Solution',
      image: `${sidebarImage}/cacl2.png`,
    },
  ],
} satisfies ExperimentInfoSidebarData;
