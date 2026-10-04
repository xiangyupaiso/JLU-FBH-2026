import { GameProvider, useGame } from '@/hooks/gameState';
import MainMenu from '@/sections/MainMenu';
import PerspectiveSelect from '@/sections/PerspectiveSelect';
import RealityTrigger from '@/sections/RealityTrigger';
import TutorialGuide from '@/sections/TutorialGuide';
import MicroWorldMain from '@/sections/MicroWorldMain';
import MemoryCenter from '@/sections/MemoryCenter';
import VisualNovel from '@/sections/VisualNovel';
import SkillReplace from '@/sections/SkillReplace';
import BossEntry from '@/sections/BossEntry';
import BossBattle from '@/sections/BossBattle';
import BEEnding from '@/sections/BEEnding';
import HEEnding from '@/sections/HEEnding';
import Week2Transition from '@/sections/Week2Transition';
import SpecialEnding from '@/sections/SpecialEnding';
import KnowledgeBook from '@/sections/KnowledgeBook';
import PromotionVideo from '@/sections/PromotionVideo';
import EndingPage from '@/sections/EndingPage';
import AssetPreloader from '@/components/AssetPreloader';
import WikiBridge from '@/components/WikiBridge';
import './App.css';

function GameContent() {
  const { state } = useGame();

  switch (state.currentPhase) {
    case 'mainMenu':
      return <MainMenu />;
    case 'perspectiveSelect':
      return <PerspectiveSelect />;
    case 'realityTrigger':
      return <RealityTrigger />;
    case 'tutorial':
      return <TutorialGuide />;
    case 'microWorldMain':
      return <MicroWorldMain />;
    case 'memoryCenter':
      return <MemoryCenter />;
    case 'visualNovel':
      return <VisualNovel />;
    case 'skillReplace':
      return <SkillReplace />;
    case 'bossEntry':
      return <BossEntry />;
    case 'bossBattle':
      return <BossBattle />;
    case 'beEnding':
      return <BEEnding />;
    case 'heEnding':
      return <HEEnding />;
    case 'week2Transition':
      return <Week2Transition />;
    case 'specialEnding':
      return <SpecialEnding />;
    case 'knowledgeBook':
      return <KnowledgeBook />;
    case 'promotionVideo':
      return <PromotionVideo />;
    case 'endingPage':
      return <EndingPage />;
    default:
      return <MainMenu />;
  }
}

function App() {
  return (
    <GameProvider>
      <WikiBridge />
      <AssetPreloader />
      <GameContent />
    </GameProvider>
  );
}

export default App;
