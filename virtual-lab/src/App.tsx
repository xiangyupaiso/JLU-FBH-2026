// src/App.tsx
import { useState } from 'react';
import { CatalogPage, ExperimentPage1, ExperimentPage2, ExperimentPage3, ExperimentPage4, ExperimentPage5, ExperimentPage6, ExperimentPage7, ExperimentPage8, ExperimentPage9 } from './pages';

const experimentComponents: Record<string, React.ComponentType<any>> = {
  '1': ExperimentPage1,
  'exp1': ExperimentPage1,
  '2': ExperimentPage2,
  'exp2': ExperimentPage2,
  '3': ExperimentPage3,
  'exp3': ExperimentPage3,

  '4': ExperimentPage4,
  'exp4': ExperimentPage4,
  '5': ExperimentPage5,
  'exp5': ExperimentPage5,
  '6': ExperimentPage6,
  'exp6': ExperimentPage6,
  '7': ExperimentPage7,
  'exp7': ExperimentPage7,
  '8': ExperimentPage8,
  'exp8': ExperimentPage8,
  '9': ExperimentPage9,
  'exp9': ExperimentPage9,
};

type Page = 'catalog' | 'experiment';

function App() {
  const [experimentRevision, setExperimentRevision] = useState(0);
  const [currentPage, setCurrentPage] = useState<Page>('catalog');
  const [selectedExperiment, setSelectedExperiment] = useState<string | null>(null);

  const handleSelectExperiment = (id: string) => {
    setSelectedExperiment(id);
    setCurrentPage('experiment');
  };

  const handleBackToCatalog = () => {
    setCurrentPage('catalog');
    setSelectedExperiment(null);
  };

  const ExperimentComponent = selectedExperiment ? experimentComponents[selectedExperiment] : null;

  return (
    <div className="virtual-lab-theme min-h-screen bg-background text-foreground">
      {currentPage === 'catalog' && (
        <CatalogPage onSelectExperiment={handleSelectExperiment} />
      )}

      {currentPage === 'experiment' && ExperimentComponent && (
        <ExperimentComponent 
          key={`${selectedExperiment}-${experimentRevision}`}
          experimentId={selectedExperiment}
          onBack={handleBackToCatalog} 
          onRestart={() => setExperimentRevision((revision) => revision + 1)} 
        />
      )}
    </div>
  );
}

export default App;
