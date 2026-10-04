import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { PERSPECTIVES } from '@/types';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';

// HE结局（良性结局）页面 - 一周目通关后显示
export default function HEEnding() {
  const { state, dispatch } = useGame();
  
  const perspective = state.currentPerspective!;
  const possessive = PERSPECTIVES[perspective].possessive;
  const paimon = getCharacterAssetPath('派蒙', '欣慰');

  const handleContinue = () => {
    // 一周目通关，进入二周目过渡页面
    dispatch({ type: 'SET_PHASE', payload: 'week2Transition' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 relative overflow-hidden">
      <img src={getSceneAssetPath('正规医院')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-pink-50/75 to-pink-100/90" />
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(255,182,193,0.4)_0%,_transparent_70%)]" />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-2">一周目通关！</h1>
          <div className="w-24 h-1 bg-pink-400 mx-auto rounded-full" />
        </div>

        {/* 场景描述 */}
        <div className="max-w-2xl w-full bg-white/70 rounded-2xl p-8 backdrop-blur-sm border border-pink-200 shadow-lg">
          {/* 场景画面描述 */}
          <div className="text-center mb-6">
            {paimon && <img src={paimon} alt="派蒙" className="mx-auto mb-4 max-h-36 object-contain drop-shadow-md" />}
            <p className="text-pink-500 text-sm">
              医院诊室暖光场景，医生手持报告单微笑递出
            </p>
          </div>

          {/* 剧情文字 */}
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              穿越微观乳腺世界的冒险落幕了，你用坚定的选择改掉了伤害乳腺的坏习惯，
              成功驱散了所有黑雾，守护了{possessive}乳腺家园。
            </p>
            <p>
              当现实的检查报告单递到手中，「良性」二字是最好的答案 —— 
              微观世界的健康，终是照进了现实。
            </p>
            <p className="text-pink-600 italic border-l-4 border-pink-400 pl-4 my-6">
              往后的日子里，愿你始终保持健康的生活习惯，好好爱自己、爱身边人，
              让这份守护延续，岁岁安康，万事顺遂。
            </p>
            <p className="text-pink-500 text-center">
              乳腺主城的派蒙和所有细胞，会一直为你祝福，为你守护～
            </p>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="mt-8">
          <Button
            size="lg"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-6 rounded-xl text-lg"
            onClick={handleContinue}
          >
            继续探索二周目
          </Button>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute bottom-8 left-8 opacity-30">
        <div className="w-12 h-12 bg-pink-300 rounded-full animate-pulse" />
      </div>
      <div className="absolute top-12 right-12 opacity-20">
        <div className="w-8 h-8 bg-pink-400 rounded-full animate-bounce" />
      </div>
    </div>
  );
}
