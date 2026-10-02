import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';

// 一周目结束 → 二周目开启 过渡页面
export default function Week2Transition() {
  const { startWeek2, dispatch } = useGame();
  const paimon = getCharacterAssetPath('派蒙', '期待');

  const handleContinue = () => {
    startWeek2();
    dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 to-amber-100 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      <img src={getSceneAssetPath('大脑记忆中枢')} alt="" className="absolute inset-0 h-full w-full object-cover opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-b from-amber-50/75 to-amber-100/90" />
      {/* 背景效果 */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-48 h-48 bg-amber-300 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-40 h-40 bg-yellow-300 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* 主内容 */}
      <div className="relative z-10 max-w-lg w-full text-center">
        {/* 图标 */}
        {paimon && <img src={paimon} alt="派蒙" className="mx-auto mb-6 max-h-40 object-contain drop-shadow-md" />}

        {/* 标题 */}
        <h2 className="text-3xl font-bold text-amber-700 mb-6">
          时光回溯能力觉醒
        </h2>

        {/* 剧情文字 */}
        <div className="bg-white/70 rounded-2xl p-6 backdrop-blur-sm border border-amber-200 shadow-lg mb-8">
          <p className="text-lg text-amber-800 leading-relaxed">
            还有未击败的病症BOSS，神经细胞因心情愉悦激活时光回溯能力，记忆点锁定状态重置，即刻开启二次守护之旅！
          </p>
        </div>

        {/* 二周目特性说明 */}
        <div className="bg-amber-50 rounded-xl p-4 mb-8 border border-amber-200">
          <h4 className="font-bold text-amber-700 mb-3">二周目特性</h4>
          <ul className="space-y-2 text-sm text-amber-600 text-left">
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              记忆点全部解锁，可无限重玩
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              新增回退按钮，可返回上一句剧情
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              挑战3个全新BOSS
            </li>
            <li className="flex items-center gap-2">
              <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
              解锁专属治愈结局
            </li>
          </ul>
        </div>

        {/* 继续按钮 */}
        <Button
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-6 rounded-xl text-xl"
          onClick={handleContinue}
        >
          继续探索
        </Button>
      </div>
    </div>
  );
}
