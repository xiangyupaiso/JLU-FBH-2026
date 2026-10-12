import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { getPerspectiveData } from '@/types';
import { getBossAssetPath, getSceneAssetPath } from '@/data/assets';

// BE Ending (Malignant Outcome) Screen
export default function BEEnding() {
  const { state, dispatch, openExitMenu } = useGame();
  
  const perspective = state.currentPerspective!;
  const isZh = state.language === 'zh';
  const possessive = getPerspectiveData(perspective, state.language).possessive;

  const handleRestart = () => {
    // Jump to corresponding Memory Point based on last negative skill source
    const targetMemoryPoint = state.lastUsedNegativeSkillSource || state.currentMemoryPoint;
    
    dispatch({ type: 'SET_MEMORY_POINT', payload: targetMemoryPoint });
    dispatch({ type: 'SET_PHASE', payload: 'visualNovel' });
  };

  const getTargetMemoryPointText = () => {
    const targetMemoryPoint = state.lastUsedNegativeSkillSource;
    if (targetMemoryPoint) {
      return isZh ? `记忆点${targetMemoryPoint}` : `Memory Point ${targetMemoryPoint}`;
    }
    return isZh ? '当前记忆点' : 'current Memory Point';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <img src={getSceneAssetPath('乳腺主城（黑雾笼罩）')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-950/90" />
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.3)_0%,_transparent_70%)]" />
      </div>

      {/* 退出菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-gray-600 bg-black/60 px-3 py-1.5 text-xs font-bold text-gray-200 shadow-[0_2px_0_rgba(0,0,0,0.5)] transition-all hover:bg-black/80 active:translate-y-0.5 active:shadow-none"
        title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
      >
        <span className="text-pink-400 font-black">✕</span>
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-400 mb-2">
            {isZh ? '遗憾的结局' : 'A Regretful Outcome'}
          </h1>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full" />
        </div>

        {/* Scene Card */}
        <div className="max-w-2xl w-full bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          {/* Scene Visual Caption */}
          <div className="text-center mb-6">
            <img src={getBossAssetPath('breastLump', '狰狞')} alt="BOSS" className="mx-auto mb-4 max-h-36 object-contain drop-shadow-lg" />
            <p className="text-gray-400 text-sm">
              {isZh
                ? '医院诊室冷调场景，医生手持报告单轻声讲解'
                : 'Subdued, cool lighting fills the hospital room; the physician gently explains the diagnosis while holding the examination sheet.'}
            </p>
          </div>

          {/* Narrative Text */}
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              {isZh
                ? '微观乳腺世界的冒险，终究以遗憾收场。'
                : 'The adventure in the micro mammary world has ended in regret.'}
            </p>
            <p>
              {isZh
                ? '一次任性的选择，一次对健康的忽视，让负面的力量不断蔓延，黑雾吞噬了家园，BOSS的伤害终是刻进了现实。'
                : 'A reckless choice, a careless neglect of health allowed negative forces to spread unchecked. Dark mist consumed the citadel, and the wounds inflicted by the BOSS cut into reality.'}
            </p>
            <p>
              {isZh
                ? '当「恶性」二字出现在检查报告单上，才懂那些被忽略的小习惯，早已成为压垮健康的最后一根稻草。'
                : 'When the word "Malignant" surfaces on the diagnostic report, one finally realizes that overlooked daily habits had long since become the straw that broke the back of health.'}
            </p>
            <p className="text-gray-400 italic border-l-4 border-gray-600 pl-4 my-6">
              {isZh
                ? `但冒险从未真正结束，微观世界的大门仍为你敞开，回到记忆的起点，修正每一个选择，重拾守护的力量，你依然有机会改写结局，守护好${possessive}乳腺健康。`
                : `Yet your journey has never truly finished. The gateway to the micro world remains open for you. Return to the genesis of memories, rectify each decision, reclaim the mantle of guardianship, and rewrite this destiny to safeguard ${possessive} breast health.`}
            </p>
            <p className="text-pink-400 font-medium text-center">
              {isZh
                ? '别放弃，从头再来，一切都还来得及。'
                : 'Never surrender. Begin anew—it is not yet too late.'}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            {isZh
              ? `将返回${getTargetMemoryPointText()}重新选择`
              : `Will return to ${getTargetMemoryPointText()} to make new choices`}
          </p>
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-xl text-lg"
            onClick={handleRestart}
          >
            {isZh ? '重新游玩该记忆点' : 'Replay This Memory Point'}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="w-12 h-12 border-2 border-gray-500 rounded-full" />
      </div>
      <div className="absolute top-12 right-12 opacity-10">
        <div className="w-8 h-8 border-2 border-gray-500 rounded-full" />
      </div>
    </div>
  );
}
