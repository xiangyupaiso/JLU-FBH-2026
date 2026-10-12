import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';

// Playthrough 1 completion → Playthrough 2 transition screen
export default function Week2Transition() {
  const { state, startWeek2, dispatch, openExitMenu } = useGame();
  const isZh = state.language === 'zh';
  const paimon = getCharacterAssetPath('派蒙', '期待');

  const handleContinue = () => {
    startWeek2();
    dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <img src={getSceneAssetPath('大脑记忆中枢')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/75 to-amber-100/90" />
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-amber-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 退出菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-3 py-1.5 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
        title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
      >
        <span className="text-[#C2185B] font-black">✕</span>
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-lg w-full text-center">
        {paimon && <img src={paimon} alt="Paimon" className="mx-auto mb-6 max-h-40 object-contain drop-shadow-md" />}

        {/* Title */}
        <h2 className="text-3xl font-bold text-amber-700 mb-6">
          {isZh ? '时光回溯能力觉醒' : 'Time Travel Ability Awakened'}
        </h2>

        {/* Story Text */}
        <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm border border-amber-200 shadow-lg mb-8">
          <p className="text-lg text-amber-800 leading-relaxed">
            {isZh
              ? '还有未击败的病症BOSS，神经细胞因心情愉悦激活时光回溯能力，记忆点锁定状态重置，即刻开启二次守护之旅！'
              : 'Symptom BOSSes still remain! Uplifted spirits stimulate neural cells, awakening the power of Time Travel. All Memory Point lock states have been reset—commence your second guardian journey now!'}
          </p>
        </div>

        {/* Playthrough 2 Features */}
        <div className="bg-amber-50 rounded-xl p-4 mb-8 border border-amber-200">
          <h4 className="font-bold text-amber-700 mb-3">
            {isZh ? '二周目特性' : 'Playthrough 2 Features'}
          </h4>
          <ul className="space-y-2 text-sm text-amber-600 text-left">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              {isZh ? '记忆点全部解锁，可无限重玩' : 'All Memory Points unlocked with unlimited replays'}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              {isZh ? '新增回退按钮，可返回上一句剧情' : 'Story Back button available to review previous lines'}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              {isZh ? '挑战3个全新BOSS' : 'Confront 3 brand-new Symptom BOSSes'}
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              {isZh ? '解锁专属治愈结局' : 'Unlock exclusive Special HE Healing Endings'}
            </li>
          </ul>
        </div>

        {/* Continue Button */}
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 rounded-xl text-xl"
          onClick={handleContinue}
        >
          {isZh ? '继续探索' : 'Continue Exploration'}
        </Button>
      </div>
    </div>
  );
}
