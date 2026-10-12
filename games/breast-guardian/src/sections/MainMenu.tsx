import { useGame } from '@/hooks/gameState';
import { SheepSpeech } from '@/components/SheepBubble';
import { assetUrl } from '@/data/assetUrls';
import { Languages } from 'lucide-react';

export default function MainMenu() {
  const { state, dispatch } = useGame();
  const isZh = state.language === 'zh';

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Layer 0: Page background */}
      <img
        src={assetUrl('assets/ui/home-bg.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Top-Right Language Switcher */}
      <div className="absolute top-5 right-5 z-30 flex items-center gap-1 rounded-full border-2 border-[#3E2723]/25 bg-white/90 px-1.5 py-1 shadow-md backdrop-blur-sm">
        <Languages className="ml-1.5 h-4 w-4 text-[#D81B60]" />
        <button
          type="button"
          onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'zh' })}
          className={`rounded-full px-2.5 py-0.5 text-xs font-bold transition-all ${
            isZh
              ? 'bg-[#E91E63] text-white shadow-sm'
              : 'text-[#5D4037] hover:text-[#E91E63]'
          }`}
        >
          中文
        </button>
        <span className="text-xs text-[#8D6E63]/40">|</span>
        <button
          type="button"
          onClick={() => dispatch({ type: 'SET_LANGUAGE', payload: 'en' })}
          className={`rounded-full px-2.5 py-0.5 text-xs font-bold transition-all ${
            !isZh
              ? 'bg-[#E91E63] text-white shadow-sm'
              : 'text-[#5D4037] hover:text-[#E91E63]'
          }`}
        >
          EN
        </button>
      </div>

      {/* Layer 1: Center visual buttons */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center gap-5 px-4 pt-[18vh]">
        <button
          type="button"
          aria-label={isZh ? '开始游戏' : 'Start Game'}
          className="w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'perspectiveSelect' })}
        >
          <img
            src={assetUrl('assets/ui/home-start.png')}
            alt={isZh ? '开始游戏' : 'Start Game'}
            className="w-full drop-shadow-lg"
            draggable={false}
          />
        </button>
        <button
          type="button"
          aria-label={isZh ? '知识手册' : 'Knowledge Handbook'}
          className="w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'knowledgeBook' })}
        >
          <img
            src={assetUrl('assets/ui/home-book.png')}
            alt={isZh ? '知识手册' : 'Knowledge Handbook'}
            className="w-full drop-shadow-lg"
            draggable={false}
          />
        </button>
      </div>

      {/* Layer 2: Bottom stage platform with mascot */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none">
        <img
          src={assetUrl('assets/ui/foreground-1.png')}
          alt="Bottom Stage"
          className="w-full h-auto"
          draggable={false}
        />
        <SheepSpeech className="absolute bottom-[28%] right-[6%] z-20" />
      </div>

      {/* Layer 3: Bottom-left QR code */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-col items-center space-y-2">
        <img
          src={assetUrl('assets/ui/qr-home.png')}
          alt="Guardian Health Survey QR Code"
          className="h-28 w-28 rounded-lg shadow-md md:h-32 md:w-32"
        />
      </div>
    </div>
  );
}
