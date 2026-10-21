import { useGame } from '@/hooks/gameContext';
import { BOSSES_BY_PLAYTHROUGH } from '@/data/bossProgression';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Lock, Sword, Check } from 'lucide-react';
import { getBossData } from '@/types';
import type { BossType } from '@/types';
import { getBossAssetPath } from '@/data/assets';
import { SheepSpeech } from '@/components/SheepBubble';
import { assetUrl } from '@/data/assetUrls';

export default function BossEntry() {
  const { state, dispatch, startBattle, getBossesForMemory, openExitMenu } = useGame();
  const isZh = state.language === 'zh';
  const activeBosses = BOSSES_BY_PLAYTHROUGH[state.playthrough];

  const getUnlockMemoryPoint = (boss: BossType) => {
    for (const memoryPoint of [1, 2, 3]) {
      if (getBossesForMemory(memoryPoint).includes(boss)) return memoryPoint;
    }
    return null;
  };

  const getBossStatus = (boss: BossType) => {
    const memoryPoint = getUnlockMemoryPoint(boss);
    const isUnlocked = state.unlockedBosses.includes(boss);
    const isDefeated = state.defeatedBosses.includes(boss);
    const canChallenge = isUnlocked && !isDefeated;

    return { isUnlocked, isDefeated, canChallenge, memoryPoint };
  };

  const handleChallenge = (boss: BossType) => {
    const { isUnlocked, canChallenge } = getBossStatus(boss);
    if (!isUnlocked || !canChallenge) return;

    startBattle(boss);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-red-950 to-gray-900 p-4">
      <img src={assetUrl('assets/ui/necrotic-bg.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-red-950/55" />

      {/* 返回按钮 */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-30 text-gray-400 hover:text-white"
        onClick={() => dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' })}
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        {isZh ? '返回主城' : 'Back to Citadel'}
      </Button>

      {/* 退出菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-red-800/60 bg-black/50 px-3 py-1.5 text-xs font-bold text-red-200 shadow-[0_2px_0_rgba(0,0,0,0.5)] transition-all hover:bg-black/70 active:translate-y-0.5 active:shadow-none"
        title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
      >
        <span className="text-red-400 font-black">✕</span>
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      {/* 内容区 */}
      <div className="relative z-20 pb-32">
      {/* 标题 */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-2xl font-bold text-red-400">
          {isZh ? '病变的乳腺组织' : 'Diseased Mammary Tissue'}
        </h2>
        <p className="text-sm text-red-300/70">
          {isZh ? `BOSS挑战区 · 第${state.playthrough}周目` : `BOSS Arena · Playthrough ${state.playthrough}`}
        </p>
      </div>

      {/* BOSS列表 */}
      <div className="max-w-lg mx-auto space-y-4">
        {activeBosses.map((boss) => {
          const bossData = getBossData(boss, state.language);
          const status = getBossStatus(boss);
          const isClickable = status.isUnlocked && status.canChallenge && !status.isDefeated;

          return (
            <Card
              key={boss}
              className={`${status.isDefeated ? 'bg-green-100 border-green-300' : 'bg-red-100 border-red-300'}
                ${isClickable ? 'cursor-pointer hover:shadow-lg' : 'opacity-70'}
                transition-all hover:scale-[1.01]`}
              onClick={() => handleChallenge(boss)}
            >
              <CardContent className="p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={getBossAssetPath(boss, status.isDefeated ? '虚弱' : '狰狞')}
                      alt={bossData.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">{bossData.name}</h3>
                    <p className="text-xs text-gray-600">{bossData.description}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {isZh
                        ? `解锁条件: 通关记忆点${status.memoryPoint || '-'}`
                        : `Unlock: Complete Memory ${status.memoryPoint || '-'}`}
                    </p>
                  </div>
                </div>
                <div>
                  {status.isDefeated ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-500 text-white text-xs rounded-full">
                      <Check className="w-3 h-3" />
                      {isZh ? '已击败' : 'Defeated'}
                    </span>
                  ) : isClickable ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-500 text-white text-xs rounded-full">
                      <Sword className="w-3 h-3" />
                      {isZh ? '可挑战' : 'Challenge'}
                    </span>
                  ) : status.isUnlocked ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-500 text-white text-xs rounded-full">
                      <Lock className="w-3 h-3" />
                      {isZh ? '需通关记忆点' : 'Locked'}
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-gray-500 text-white text-xs rounded-full">
                      <Lock className="w-3 h-3" />
                      {isZh ? '未解锁' : 'Locked'}
                    </span>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 进度统计 */}
      <div className="max-w-lg mx-auto mt-8 p-4 bg-black/30 rounded-xl">
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-400">{isZh ? '挑战进度' : 'Arena Progress'}</span>
          <span className="text-red-400">
            {state.defeatedBosses.filter((boss) => activeBosses.includes(boss)).length} / {activeBosses.length} {isZh ? '已击败' : 'Defeated'}
          </span>
        </div>
        <div className="mt-2 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-red-500 to-orange-500 transition-all"
            style={{ width: `${(state.defeatedBosses.filter((boss) => activeBosses.includes(boss)).length / activeBosses.length) * 100}%` }}
          />
        </div>
      </div>

      {/* 说明 */}
      <div className="max-w-lg mx-auto mt-4 p-4 bg-red-900/20 rounded-lg">
        <p className="text-xs text-red-300">
          <strong>{isZh ? '提示：' : 'Hint: '}</strong>
          {isZh
            ? '通关对应记忆点后即可挑战本周目的症状BOSS。击败本周目全部3个BOSS即可进入下一阶段。'
            : 'Complete the corresponding Memory Point to unlock each symptom BOSS. Defeating all 3 BOSSes in this playthrough unlocks the next phase!'}
        </p>
      </div>
      </div>

      {/* 右下角独立景观台 */}
      <div className="absolute bottom-0 right-0 z-20 pointer-events-none flex flex-col items-end">
        <SheepSpeech className="mb-2 mr-6" bubbleClassName="max-w-xs" />
        <img
          src={assetUrl('assets/ui/foreground-2.png')}
          alt="Stage Platform"
          className="w-[380px] h-auto max-w-[88vw] object-contain md:w-[460px]"
          draggable={false}
        />
      </div>
    </div>
  );
}
