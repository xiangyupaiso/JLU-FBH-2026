import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { BOSSES_BY_PLAYTHROUGH } from '@/data/bossProgression';
import { Card, CardContent } from '@/components/ui/card';
import { Brain, Compass, Sword, X } from 'lucide-react';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';
import { SheepSpeech } from '@/components/SheepBubble';
import { getPerspectiveData } from '@/types';
import type { Perspective } from '@/types';
import { assetUrl } from '@/data/assetUrls';

const PERSPECTIVE_CARD_STYLE: Record<Perspective, string> = {
  child: 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-300',
  adult: 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-300',
  elder: 'bg-gradient-to-br from-purple-50 to-purple-100 border-purple-300'
};

const PERSPECTIVE_TEXT_STYLE: Record<Perspective, string> = {
  child: 'text-amber-700',
  adult: 'text-blue-700',
  elder: 'text-purple-700'
};

export default function MicroWorldMain() {
  const { state, dispatch, openExitMenu } = useGame();
  const [showTimeTravel, setShowTimeTravel] = useState(false);
  const isZh = state.language === 'zh';

  const perspective = state.currentPerspective || 'child';
  const activeBosses = BOSSES_BY_PLAYTHROUGH[state.playthrough];
  const defeatedCount = state.defeatedBosses.filter((boss) => activeBosses.includes(boss)).length;
  const memoryCount = Object.values(state.perspectivesData[perspective].memories).filter(Boolean).length;
  const paimonPortrait = getCharacterAssetPath('派蒙', '开心');
  const protagonistPortrait = getCharacterAssetPath('主角', '坚定', perspective);
  const mainCityBackground = getSceneAssetPath('乳腺主城（正常）');
  const currentPersp = getPerspectiveData(perspective, state.language);

  const unlockedCount = state.unlockedBosses.filter((boss) => activeBosses.includes(boss)).length;

  const handleSwitchPerspective = (target: Perspective) => {
    dispatch({ type: 'SWITCH_PERSPECTIVE', payload: target });
    setShowTimeTravel(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 to-pink-200 p-4 relative overflow-hidden">
      {mainCityBackground && (
        <img
          src={mainCityBackground}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/75 via-pink-100/70 to-pink-200/85" />

      {/* 退出 / 菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 left-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-3 py-1.5 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
        title={isZh ? '游戏菜单 / 退出' : 'Game Menu / Exit'}
      >
        <X className="h-3.5 w-3.5 text-[#C2185B]" />
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      <div className="relative z-20 pb-32">
      {/* 顶部标题 */}
      <div className="text-center pt-4 pb-6">
        <h2 className="text-2xl font-bold text-pink-700">
          {isZh ? '乳腺微观主城' : 'Microscopic Mammary Citadel'}
        </h2>
        <p className="text-sm text-pink-600/70">
          {isZh ? `第${state.playthrough}周目 · 主城核心区` : `Playthrough ${state.playthrough} · Core Citadel Hub`}
          {state.allPerspectivesUnlocked && ` · ${currentPersp.name}`}
        </p>
      </div>

      {/* 时光回溯 · 视角切换入口（全视角解锁后显示） */}
      {state.allPerspectivesUnlocked && (
        <button
          className="absolute top-4 right-4 z-30 flex items-center gap-2 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/95 px-3 py-2 text-xs font-bold text-[#3E2723] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
          onClick={() => setShowTimeTravel(true)}
        >
          <Compass className="h-4 w-4 text-[#6B2D5C]" />
          {isZh ? '切换视角 · 时光回溯' : 'Switch Perspective · Time Travel'}
        </button>
      )}

      {/* 派蒙提示 */}
      <div className="max-w-md mx-auto mb-6">
        <div className="bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm">
          <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
            {paimonPortrait ? (
              <img src={paimonPortrait} alt="Paimon" className="h-full w-full object-cover" />
            ) : (
              <span className="text-2xl">🧚</span>
            )}
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-pink-700">{isZh ? '派蒙' : 'Paimon'}</p>
            <p className="text-xs text-gray-600 mt-1">
              {isZh
                ? '这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。'
                : 'This is your mammary citadel! That dark mist and those monsters were spawned by unhealthy lifestyle habits. Go forth and explore!'}
            </p>
          </div>
          {protagonistPortrait && (
            <img
              src={protagonistPortrait}
              alt={currentPersp.name}
              className="h-14 w-14 flex-shrink-0 rounded-full border-2 border-pink-300 object-cover"
            />
          )}
        </div>
      </div>

      {/* 核心功能入口 */}
      <div className="max-w-md mx-auto space-y-4">
        <Card 
          className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'memoryCenter' })}
        >
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center">
              <Brain className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-blue-700">
                {isZh ? '大脑记忆中枢' : 'Brain Memory Center'}
              </h3>
              <p className="text-xs text-blue-600/70">
                {isZh ? '回溯记忆，学习技能' : 'Recall memories & master skills'}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card 
          className="cursor-pointer hover:shadow-lg transition-all hover:scale-[1.02] bg-gradient-to-r from-red-50 to-red-100 border-red-200"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'bossEntry' })}
        >
          <CardContent className="p-5 flex items-center gap-4">
            <div className="w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center">
              <Sword className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-red-700">
                {isZh ? '病变的乳腺组织' : 'Diseased Mammary Tissue'}
              </h3>
              <p className="text-xs text-red-600/70">
                {isZh
                  ? `挑战症状BOSS (${unlockedCount}个已解锁)`
                  : `Confront Symptom BOSSes (${unlockedCount} unlocked)`}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 进度展示 */}
      <div className="max-w-md mx-auto mt-6 p-4 bg-white/60 rounded-xl">
        <h4 className="text-sm font-medium text-gray-700 mb-3">
          {isZh ? '当前进度' : 'Current Progress'}
        </h4>
        <div className="space-y-2 text-xs">
          <div className="flex justify-between">
            <span className="text-gray-600">{isZh ? '记忆点进度' : 'Memory Points Explored'}</span>
            <span className="text-pink-600">{memoryCount}/3</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{isZh ? 'BOSS解锁进度' : 'BOSS Unlocked'}</span>
            <span className="text-pink-600">{unlockedCount}/{activeBosses.length}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">{isZh ? '已击败BOSS' : 'BOSSes Defeated'}</span>
            <span className="text-pink-600">{defeatedCount}/{activeBosses.length}</span>
          </div>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="fixed bottom-4 left-4 opacity-20 pointer-events-none">
        <div className="w-8 h-8 bg-pink-400 rounded-full animate-pulse" />
      </div>
      <div className="fixed top-20 right-4 opacity-15 pointer-events-none">
        <div className="w-6 h-6 bg-pink-500 rounded-full animate-bounce" />
      </div>
      </div>

      {/* 底部全宽石阶装饰层 */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none">
        <img
          src={assetUrl('assets/ui/foreground-1.png')}
          alt="Bottom Stage"
          className="w-full h-auto"
          draggable={false}
        />
        <SheepSpeech className="absolute bottom-[28%] right-[6%] z-20" />
      </div>

      {/* 时光回溯 · 视角切换弹窗 */}
      {showTimeTravel && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#2B1B17]/60 p-4 backdrop-blur-sm"
          onClick={() => setShowTimeTravel(false)}
        >
          <div
            className="w-full max-w-lg rounded-none border-4 border-[#3E2723] bg-[#FFFDF8] p-5 shadow-[0_6px_0_#3E2723]"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-4 flex items-center justify-between border-b-2 border-[#D4A373] pb-3">
              <h3 className="flex items-center gap-2 text-base font-bold text-[#3E2723]">
                <Compass className="h-5 w-5 text-[#6B2D5C]" />
                {isZh ? '时光回溯 · 视角切换' : 'Time Travel · Switch Perspective'}
              </h3>
              <button
                className="flex h-7 w-7 items-center justify-center border-2 border-[#3E2723] bg-[#6B2D5C] text-[#FFE082] shadow-[0_2px_0_#3E2723]"
                onClick={() => setShowTimeTravel(false)}
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mb-4 text-xs leading-relaxed text-[#8D6E63]">
              {isZh
                ? '记忆与技能背包跨视角共享，各视角的 HE / BE 记忆点进度完全保留。'
                : 'Memories and skill loadouts are shared across perspectives. HE / BE memory progress for each perspective is fully preserved.'}
            </p>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {(['child', 'adult', 'elder'] as Perspective[]).map((key) => {
                const progress = state.perspectivesData[key];
                const explored = Object.values(progress.memories).filter(Boolean).length;
                const isCurrent = key === perspective;
                const pInfo = getPerspectiveData(key, state.language);
                const ageLabel = isZh
                  ? (key === 'child' ? '幼年 · 10岁' : key === 'adult' ? '青壮年 · 32岁' : '老年 · 65岁')
                  : (key === 'child' ? 'Child · Age 10' : key === 'adult' ? 'Adult · Age 32' : 'Elder · Age 65');

                return (
                  <button
                    key={key}
                    className={`rounded-none border-2 p-3 text-left shadow-[0_3px_0_#3E2723] transition-all active:translate-y-0.5 active:shadow-none ${PERSPECTIVE_CARD_STYLE[key]} ${
                      isCurrent ? 'border-[#6B2D5C] ring-2 ring-[#E91E63]' : 'border-[#3E2723] hover:brightness-105'
                    }`}
                    onClick={() => handleSwitchPerspective(key)}
                  >
                    <p className={`text-sm font-bold ${PERSPECTIVE_TEXT_STYLE[key]}`}>
                      {pInfo.name}
                    </p>
                    <p className="mt-0.5 text-xs text-[#5D4037]">{ageLabel}</p>
                    <p className="mt-2 text-xs font-medium text-[#8D6E63]">
                      {isZh ? `记忆已探索: ${explored}/3` : `Memories Explored: ${explored}/3`}
                    </p>
                    {progress.completed && (
                      <p className="mt-1 text-xs font-bold text-[#E91E63]">
                        {isZh ? '已完整通关' : 'Completed'}
                      </p>
                    )}
                    {isCurrent && (
                      <p className="mt-1 text-xs font-bold text-[#6B2D5C]">
                        {isZh ? '当前视角' : 'Current'}
                      </p>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
