import { useGame } from '@/hooks/gameState';
import type { GamePhase } from '@/types';
import { Home, Play, Undo2, X } from 'lucide-react';

export function getPreviousPhase(
  phase: GamePhase,
  isZh: boolean
): { phase: GamePhase; label: string } | null {
  switch (phase) {
    case 'visualNovel':
      return { phase: 'memoryCenter', label: isZh ? '记忆回廊' : 'Memory Center' };
    case 'skillReplace':
      return { phase: 'memoryCenter', label: isZh ? '记忆回廊' : 'Memory Center' };
    case 'bossBattle':
      return { phase: 'bossEntry', label: isZh ? 'Boss备战' : 'Boss Preparation' };
    case 'bossEntry':
      return { phase: 'microWorldMain', label: isZh ? '微观主城' : 'Citadel' };
    case 'memoryCenter':
      return { phase: 'microWorldMain', label: isZh ? '微观主城' : 'Citadel' };
    case 'microWorldMain':
      return { phase: 'perspectiveSelect', label: isZh ? '视角选择' : 'Perspective Select' };
    case 'realityTrigger':
      return { phase: 'perspectiveSelect', label: isZh ? '视角选择' : 'Perspective Select' };
    case 'perspectiveSelect':
      return { phase: 'mainMenu', label: isZh ? '游戏主菜单' : 'Main Menu' };
    case 'tutorial':
    case 'knowledgeBook':
    case 'beEnding':
    case 'heEnding':
    case 'specialEnding':
    case 'promotionVideo':
    case 'endingPage':
    case 'week2Transition':
      return { phase: 'mainMenu', label: isZh ? '游戏主菜单' : 'Main Menu' };
    case 'mainMenu':
    default:
      return null;
  }
}

export default function ExitMenuModal() {
  const { state, dispatch, closeExitMenu } = useGame();
  const isZh = state.language === 'zh';

  if (!state.isExitMenuOpen) return null;

  const prev = getPreviousPhase(state.currentPhase, isZh);

  const handleGoPrevious = (targetPhase: GamePhase) => {
    if (state.currentPhase === 'bossBattle') {
      dispatch({ type: 'RESET_BATTLE' });
    }
    dispatch({ type: 'SET_PHASE', payload: targetPhase });
    closeExitMenu();
  };

  const handleGoMainMenu = () => {
    if (state.currentPhase === 'bossBattle') {
      dispatch({ type: 'RESET_BATTLE' });
    }
    dispatch({ type: 'SET_PHASE', payload: 'mainMenu' });
    closeExitMenu();
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm select-none"
      onClick={closeExitMenu}
    >
      <div
        className="w-full max-w-sm rounded-none border-4 border-[#3E2723] bg-[#FFFDF8] p-5 shadow-[0_8px_0_#3E2723] animate-in fade-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="mb-4 flex items-center justify-between border-b-2 border-[#3E2723]/20 pb-3">
          <div className="flex items-center gap-2">
            <span className="flex h-6 w-6 items-center justify-center rounded-none border-2 border-[#3E2723] bg-[#FFE082] text-xs font-black text-[#3E2723]">
              ✕
            </span>
            <h3 className="font-mono text-base font-bold text-[#3E2723]">
              {isZh ? '游戏菜单 / 退出' : 'GAME MENU / EXIT'}
            </h3>
          </div>
          <button
            type="button"
            onClick={closeExitMenu}
            className="flex h-7 w-7 items-center justify-center border-2 border-[#3E2723] bg-[#FFF8E7] text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          {prev && (
            <button
              type="button"
              onClick={() => handleGoPrevious(prev.phase)}
              className="flex w-full items-center justify-between border-2 border-[#3E2723] bg-[#FFF8E7] px-3.5 py-2.5 text-left font-bold text-[#3E2723] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
            >
              <div className="flex items-center gap-3">
                <Undo2 className="h-4 w-4 text-[#D81B60]" />
                <div>
                  <div className="text-xs font-bold leading-tight">
                    {isZh ? '退回上一级' : 'Previous Level'}
                  </div>
                  <div className="text-[11px] font-normal text-[#5D4037]/75">
                    {isZh ? `返回至：${prev.label}` : `Return to: ${prev.label}`}
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs text-[#8D6E63]">↩</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleGoMainMenu}
            className="flex w-full items-center justify-between border-2 border-[#3E2723] bg-[#FFF8E7] px-3.5 py-2.5 text-left font-bold text-[#3E2723] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
          >
            <div className="flex items-center gap-3">
              <Home className="h-4 w-4 text-[#E91E63]" />
              <div>
                <div className="text-xs font-bold leading-tight">
                  {isZh ? '返回游戏主菜单' : 'Return to Main Menu'}
                </div>
                <div className="text-[11px] font-normal text-[#5D4037]/75">
                  {isZh ? '回到标题界面（当前进度已保留）' : 'Return to title (progress is saved)'}
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-[#8D6E63]">⌂</span>
          </button>

          <button
            type="button"
            onClick={closeExitMenu}
            className="mt-1 flex w-full items-center justify-center gap-2 border-2 border-[#3E2723] bg-[#E91E63] px-3.5 py-2.5 text-center text-xs font-bold text-white shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#D81B60] active:translate-y-0.5 active:shadow-none"
          >
            <Play className="h-3.5 w-3.5 fill-white" />
            <span>{isZh ? '继续游戏' : 'RESUME GAME'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
