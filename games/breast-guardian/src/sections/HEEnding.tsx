import { useGame } from '@/hooks/gameContext';
import { Button } from '@/components/ui/button';
import { getPerspectiveData } from '@/types';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';

// HE Ending (Benign Outcome) Screen - Displayed after Playthrough 1 completion
export default function HEEnding() {
  const { state, dispatch, openExitMenu } = useGame();

  const perspective = state.currentPerspective!;
  const isZh = state.language === 'zh';
  const possessive = getPerspectiveData(perspective, state.language).possessive;
  const paimon = getCharacterAssetPath('派蒙', '欣慰');

  const handleContinue = () => {
    // Playthrough 1 complete, proceed to Playthrough 2 transition screen
    dispatch({ type: 'SET_PHASE', payload: 'week2Transition' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden">
      <img src={getSceneAssetPath('正规医院')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/75 to-pink-100/90" />
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.4)_0%,_transparent_70%)]" />
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
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* Title */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">
            {isZh ? '一周目通关！' : 'Playthrough 1 Complete!'}
          </h1>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" />
        </div>

        {/* Scene Card */}
        <div className="max-w-2xl w-full bg-white/70 rounded-2xl p-8 backdrop-blur-sm border border-pink-200 shadow-lg">
          {/* Scene Visual Caption */}
          <div className="text-center mb-6">
            {paimon && <img src={paimon} alt="Paimon" className="mx-auto mb-4 max-h-36 object-contain drop-shadow-md" />}
            <p className="text-pink-500 text-sm">
              {isZh
                ? '医院诊室暖光场景，医生手持报告单微笑递出'
                : 'Warm light illuminates the clinic consultation room; the physician smiles, handing over the medical report.'}
            </p>
          </div>

          {/* Narrative Text */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              {isZh
                ? `穿越微观乳腺世界的冒险落幕了，你用坚定的选择改掉了伤害乳腺的坏习惯，成功驱散了所有黑雾，守护了${possessive}乳腺家园。`
                : `The adventure through the micro mammary world comes to a close. Through resolute choices, you shed harmful habits that damaged breast health, dispersed all dark mist, and safeguarded ${possessive} mammary sanctuary.`}
            </p>
            <p>
              {isZh
                ? '当现实的检查报告单递到手中，「良性」二字是最好的答案 —— 微观世界的健康，终是照进了现实。'
                : 'When the real-world diagnostic report is placed into your hands, the word "Benign" is the most reassuring answer—the health fostered in the micro world has truly illuminated reality.'}
            </p>
            <p className="text-pink-600 italic border-l-4 border-pink-400 pl-4 my-6">
              {isZh
                ? '往后的日子里，愿你始终保持健康的生活习惯，好好爱自己、爱身边人，让这份守护延续，岁岁安康，万事顺遂。'
                : 'In the days ahead, may you uphold mindful living habits, cherish yourself and those around you, and let this protection endure—wishing you peace, health, and well-being year after year.'}
            </p>
            <p className="text-pink-500 text-center">
              {isZh
                ? '乳腺主城的派蒙和所有细胞，会一直为你祝福，为你守护～'
                : 'Paimon and every cell in the Mammary Citadel will forever bless and protect you!'}
            </p>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-xl text-lg"
            onClick={handleContinue}
          >
            {isZh ? '继续探索二周目' : 'Begin Playthrough 2'}
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <div className="w-12 h-12 bg-pink-300 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-12 right-12 opacity-20">
        <div className="w-8 h-8 bg-pink-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
