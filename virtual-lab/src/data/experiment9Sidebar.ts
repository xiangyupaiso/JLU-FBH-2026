import type { ExperimentInfoSidebarData } from '../components/ExperimentInfoSidebar';

const instruments = './experiment9-assets/processed/Instruments';
const reagents = './experiment9-assets/processed/Reagents';

export const experiment9SidebarData = {
  experimentLabel: 'Experiment 09',
  title: "Experiment Information",
  safety: [
    "Prepare PCR reactions at low temperature and avoid contamination.",
    "Avoid direct eye exposure to the fluorescence microscope light source.",
    "Avoid skin contact with acrylamide and stains.",
    "Wash promptly after handling IPTG.",
    "Sterilize bacterial and experimental waste before disposal.",
  ],
  principle:
    "Colony PCR tests for the target insert. IPTG induction and fluorescence microscopy assess GFP fluorescence. SDS-PAGE separates proteins by molecular weight to check target protein expression. Together these methods evaluate recombinant construction and expression.",
  questions: [
    {
      id: 1,
      question: "What is the main purpose of colony PCR?",
      options: ["Identify whether the target gene is present", "Increase protein expression"],
      correctIndex: 0,
    },
    {
      id: 2,
      question: "What is SDS-PAGE mainly used for?",
      options: ["Separate proteins and assess molecular weight", "Amplify DNA"],
      correctIndex: 0,
    },
  ],
  instruments: [
    { id: 'glass-slide', name: "Microscope Slide", englishName: 'Glass Slide', image: `${instruments}/Glass Slide.png` },
    { id: 'cover-slip', name: "Coverslip", englishName: 'Cover Slip', image: `${instruments}/Cover Slip.png` },
    { id: 'incubator', name: "Incubator", englishName: 'Constant Temperature Incubator', image: `${instruments}/Constant Temperature Incubator.png` },
    { id: 'shaker', name: "Incubator Shaker", englishName: 'Thermostatic Shaker', image: `${instruments}/Thermostatic Shaker.png` },
    { id: 'pcr-amplifier', name: "Thermal Cycler", englishName: 'PCR Amplifier', image: `${instruments}/PCR Amplifier.png` },
    { id: 'chamber', name: "Electrophoresis Tank", englishName: 'Electrophoresis Chamber', image: `${instruments}/Electrophoresis Chamber.png` },
    { id: 'gel-imager', name: "UV Gel Imaging System", englishName: 'UV Gel Imaging System', image: `${instruments}/UV Gel Imaging System.png` },
    { id: 'fluorescence-microscope', name: "Fluorescence Microscope", englishName: 'Fluorescence Microscope', image: `${instruments}/Fluorescence Microscope.png` },
    { id: 'centrifuge', name: "High-speed Centrifuge", englishName: 'High Speed Centrifuge', image: `${instruments}/High Speed Centrifuge.png` },
    { id: 'water-bath', name: "Water Bath", englishName: 'Thermostatic Water Bath', image: `${instruments}/Thermostatic Water Bath.png` },
    { id: 'power-supply', name: "Electrophoresis Power Supply", englishName: 'Electrophoresis Power Supply', image: `${instruments}/Electrophoresis Power Supply.png` },
    { id: 'gel-comb', name: "Gel Comb", englishName: 'Gel Comb', image: `${instruments}/Gel Comb.png` },
    { id: 'staining-tray', name: "Staining Tray", englishName: 'Staining Tray', image: `${instruments}/Staining tray.png` },
  ],
  instrumentTrayOrder: [
    'power-supply', 'glass-slide', 'pcr-amplifier', 'staining-tray',
    'incubator', 'gel-comb', 'centrifuge', 'cover-slip',
    'fluorescence-microscope', 'shaker', 'gel-imager', 'chamber', 'water-bath',
  ],
  reagents: [
    { id: 'positive-template', name: "Positive control reagent (image1)", englishName: 'Positive Control Reagent', image: `${reagents}/image1.png` },
    { id: 'kanamycin-colony', name: "E. coli colonies on kanamycin plates (Experiment 8 product)", englishName: 'Single Colony of Escherichia coli on Kanamycin Resistant Plate (Product of Experiment 8)', image: `${reagents}/Single Colony of Escherichia coli on Kanamycin Resistant Plate__Product of Experiment 8__.png` },
    { id: 'kanamycin-lb', name: "LB broth (with kanamycin)", englishName: 'LB Liquid Medium (containing Kanamycin)', image: `${reagents}/LB Liquid Medium (containing Kanamycin).png` },
    { id: 'taq-pcr-mix', name: "2× Taq PCR Master Mix", englishName: '2×Taq PCR Master Mix', image: `${reagents}/2×Taq PCR Master Mix.png` },
    { id: 'forward-primer', name: "GFP-specific forward primer", englishName: 'GFP Gene-Specific Forward Primer', image: `${reagents}/GFP Gene-Specific Forward Primer.png` },
    { id: 'sterile-water', name: "Sterile deionized water", englishName: 'Sterile Deionized Water (ddH₂O)', image: `${reagents}/Sterile Deionized Water (ddH₂O).png` },
    { id: 'reverse-primer', name: "GFP-specific reverse primer", englishName: 'GFP Gene-Specific Reverse Primer', image: `${reagents}/GFP Gene-Specific Reverse Primer.png` },
    { id: 'dna-marker', name: "DL2000 DNA ladder", englishName: 'DL2000 DNA Marker', image: `${reagents}/DL2000 DNA Marker.png` },
    { id: 'tae-buffer', name: "1× TAE electrophoresis buffer", englishName: '1×TAE Electrophoresis Buffer', image: `${reagents}/1__TAE Electrophoresis Buffer.png` },
    { id: 'agarose', name: "Agarose powder", englishName: 'Agarose Powder', image: `${reagents}/Agarose Powder.png` },
    { id: 'gelred', name: "Nucleic acid gel stain", englishName: 'GelRed', image: `${reagents}/GelRed.png` },
    { id: 'iptg', name: "IPTG inducer", englishName: 'IPTG Inducer', image: `${reagents}/IPTG Inducer.png` },
    { id: 'protein-marker', name: "Protein ladder", englishName: 'Protein Marker', image: `${reagents}/Protein Marker.png` },
    { id: 'sds-loading-buffer', name: "1× SDS loading buffer", englishName: '1×SDS Loading Buffer', image: `${reagents}/1×SDS Loading Buffer.png` },
    { id: 'dna-loading-buffer', name: "6× DNA loading buffer", englishName: '6×DNA Loading Buffer', image: `${reagents}/6__DNA Loading Buffer.png` },
    { id: 'normal-saline', name: "Sterile saline", englishName: 'Sterile Normal Saline', image: `${reagents}/Sterile Normal Saline.png` },
    { id: 'coomassie', name: "Coomassie Brilliant Blue R-250 stain", englishName: 'Coomassie Brilliant Blue R-250 Staining Solution', image: `${reagents}/Coomassie Brilliant Blue R-250 Staining Solution.png` },
    { id: 'destaining', name: "Destaining solution", englishName: 'Destaining Solution', image: `${reagents}/Destaining Solution.png` },
    { id: 'sds-page-gel', name: "SDS-PAGE gel reagents", englishName: 'SDS-PAGE Gel Preparation Reagents', image: `${reagents}/SDS-PAGE Gel Preparation Reagents.png` },
  ],
} satisfies ExperimentInfoSidebarData;
