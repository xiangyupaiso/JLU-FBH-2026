import type { ExperimentInfoSidebarData } from '../components/ExperimentInfoSidebar';

const experiment3Image = './images/experiment3';
const experiment6Image = './images/experiment6';
const sharedPptImage = './experiment4_lab/assets/ppt';

export const experiment3SidebarData = {
  experimentLabel: 'Experiment 03',
  title: "Experiment Information",
  safety: [
    "Wear a lab coat, gloves and goggles; avoid contact with strong alkali and ethanol.",
    "Balance the centrifuge and close the lid before use.",
    "Do not look directly at ultraviolet light when viewing gels.",
    "Dispose of bacterial waste as biohazardous material.",
  ],
  principle:
    "Alkaline lysis separates plasmid DNA from chromosomal DNA through their different denaturation and renaturation behavior. During agarose gel electrophoresis, negatively charged DNA migrates toward the positive electrode. Migration depends on fragment size, allowing assessment of plasmid size and integrity.",
  questions: [
    {
      id: 1,
      question: "What enables plasmid separation by alkaline lysis?",
      options: ["Different denaturation and renaturation behavior", "Different DNA colors"],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "In which direction does DNA migrate during electrophoresis?",
      options: ["From the negative to the positive electrode", "From the positive to the negative electrode"],
      correctIndex: 0,
    },
  ],
  instruments: [
    { id: 'centrifuge', name: "High-speed Centrifuge", englishName: 'High Speed Centrifuge', image: `${experiment3Image}/HighSpeedCentrifuge.png` },
    { id: 'vortex', name: "Vortex Mixer", englishName: 'Vortex Oscillator', image: `${experiment3Image}/VortexOscillator.png` },
    { id: 'water-bath', name: "Water Bath", englishName: 'Thermostatic Water Bath', image: `${sharedPptImage}/water-bath.png` },
    { id: 'flask', name: "Erlenmeyer Flask", englishName: 'Erlenmeyer Flask', image: `${experiment3Image}/ErlenmeyerFlask.png` },
    { id: 'microwave', name: "Microwave", englishName: 'Microwave Oven', image: `${experiment3Image}/MicrowaveOvenClosed.png` },
    { id: 'power-supply', name: "Electrophoresis Power Supply", englishName: 'Electrophoresis Power Supply', image: `${experiment3Image}/08251.png` },
    { id: 'gel-comb', name: "Gel Comb", englishName: 'Gel Comb', image: `${experiment3Image}/08252.png` },
    { id: 'chamber', name: "Electrophoresis Tank", englishName: 'Electrophoresis Chamber', image: `${experiment6Image}/08243.png` },
    { id: 'gel-imager', name: "UV Gel Imaging System", englishName: 'UV Gel Imaging System', image: `${experiment3Image}/UVGelImagingSystem.png` },
    { id: 'silica-column', name: "Silica DNA Purification Column", englishName: 'DNA Purification Silica Column', image: `${experiment6Image}/08242.png` },
  ],
  instrumentTrayOrder: [
    'gel-comb',
    'centrifuge',
    'silica-column',
    'microwave',
    'chamber',
    'vortex',
    'power-supply',
    'flask',
    'gel-imager',
    'water-bath',
  ],
  reagents: [
    { id: 'solution-i', name: "Resuspension buffer", englishName: 'Solution I', image: `${experiment3Image}/08241.png` },
    { id: 'solution-ii', name: "Lysis buffer", englishName: 'Solution II', image: `${experiment3Image}/08242.png` },
    { id: 'solution-iii', name: "Neutralization buffer", englishName: 'Solution III', image: `${experiment3Image}/10.png` },
    { id: 'wash-solution', name: "Wash buffer", englishName: 'bleach wash solution', image: `${experiment3Image}/08243.png` },
    { id: 'eluent', name: "Elution buffer", englishName: 'eluent', image: `${experiment3Image}/08244.png` },
    { id: 'agarose', name: "Agarose powder", englishName: 'Agarose powder', image: `${experiment3Image}/08245.png` },
    { id: 'tae', name: "1× TAE electrophoresis buffer", englishName: '1×TAE Electrophoresis Buffer', image: `${experiment3Image}/ReagentCarboyBlue.png` },
    { id: 'gelred', name: "Nucleic acid gel stain", englishName: 'GelRed', image: `${experiment3Image}/08246.png` },
    { id: 'dl2000', name: "DL2000 DNA ladder", englishName: 'DL2000 DNA Marker', image: `${experiment3Image}/08247.png` },
    { id: 'loading-buffer', name: "6× DNA loading buffer", englishName: '6×DNA Loading Buffer', image: `${experiment3Image}/08248.png` },
  ],
} satisfies ExperimentInfoSidebarData;
