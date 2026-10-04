import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { PERSPECTIVES } from '@/types';
import { getBossAssetPath, getSceneAssetPath } from '@/data/assets';

// BE结局（恶性结局）页面
export default function BEEnding() {
  const { state, dispatch } = useGame();
  
  const perspective = state.currentPerspective!;
  const possessive = PERSPECTIVES[perspective].possessive;

  const handleRestart = () => {
    // 根据负面技能来源跳转到对应的记忆点
    const targetMemoryPoint = state.lastUsedNegativeSkillSource || state.currentMemoryPoint;
    
    // 设置当前记忆点为目标记忆点
    dispatch({ type: 'SET_MEMORY_POINT', payload: targetMemoryPoint });
    
    // 重新游玩该记忆点
    dispatch({ type: 'SET_PHASE', payload: 'visualNovel' });
  };

  // 获取目标记忆点的描述
  const getTargetMemoryPointText = () => {
    const targetMemoryPoint = state.lastUsedNegativeSkillSource;
    if (targetMemoryPoint) {
      return `记忆点${targetMemoryPoint}`;
    }
    return '当前记忆点';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 relative overflow-hidden">
      <img src={getSceneAssetPath('乳腺主城（黑雾笼罩）')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-950/90" />
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_rgba(100,100,100,0.3)_0%,_transparent_70%)]" />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center p-6">
        {/* 标题 */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-400 mb-2">遗憾的结局</h1>
          <div className="w-24 h-1 bg-gray-600 mx-auto rounded-full" />
        </div>

        {/* 场景描述 */}
        <div className="max-w-2xl w-full bg-black/40 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
          {/* 场景画面描述 */}
          <div className="text-center mb-6">
            <img src={getBossAssetPath('breastLump', '狰狞')} alt="BOSS" className="mx-auto mb-4 max-h-36 object-contain drop-shadow-lg" />
            <p className="text-gray-400 text-sm">
              医院诊室冷调场景，医生手持报告单轻声讲解
            </p>
          </div>

          {/* 剧情文字 */}
          <div className="space-y-4 text-gray-300 leading-relaxed">
            <p>
              微观乳腺世界的冒险，终究以遗憾收场。
            </p>
            <p>
              一次任性的选择，一次对健康的忽视，让负面的力量不断蔓延，
              黑雾吞噬了家园，BOSS的伤害终是刻进了现实。
            </p>
            <p>
              当「恶性」二字出现在检查报告单上，才懂那些被忽略的小习惯，
              早已成为压垮健康的最后一根稻草。
            </p>
            <p className="text-gray-400 italic border-l-4 border-gray-600 pl-4 my-6">
              但冒险从未真正结束，微观世界的大门仍为你敞开，
              回到记忆的起点，修正每一个选择，重拾守护的力量，
              你依然有机会改写结局，守护好{possessive}乳腺健康。
            </p>
            <p className="text-pink-400 font-medium text-center">
              别放弃，从头再来，一切都还来得及。
            </p>
          </div>
        </div>

        {/* 操作按钮 */}
        <div className="mt-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            将返回{getTargetMemoryPointText()}重新选择
          </p>
          <Button
            size="lg"
            className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-6 rounded-xl text-lg"
            onClick={handleRestart}
          >
            重新游玩该记忆点
          </Button>
        </div>
      </div>

      {/* 装饰元素 */}
      <div className="absolute bottom-8 left-8 opacity-20">
        <div className="w-12 h-12 border-2 border-gray-500 rounded-full" />
      </div>
      <div className="absolute top-12 right-12 opacity-10">
        <div className="w-8 h-8 border-2 border-gray-500 rounded-full" />
      </div>
    </div>
  );
}
