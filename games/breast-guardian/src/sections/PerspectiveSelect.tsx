import { useGame } from '@/hooks/gameState';
import { Card, CardContent } from '@/components/ui/card';
import { Baby, User, UserRound } from 'lucide-react';
import type { Perspective } from '@/types';
import { getCharacterAssetPath } from '@/data/assets';
import { assetUrl } from '@/data/assetUrls';

const PERSPECTIVE_DATA: Record<Perspective, {
  name: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}> = {
  child: {
    name: '幼年视角',
    description: '10岁女孩 · 守护妈妈的乳腺世界',
    icon: <Baby className="w-10 h-10" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 hover:bg-amber-100'
  },
  adult: {
    name: '青壮年视角',
    description: '32岁职场女性 · 守护自己的健康人生',
    icon: <User className="w-10 h-10" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100'
  },
  elder: {
    name: '老年视角',
    description: '65岁奶奶 · 岁月安康，乳腺守护',
    icon: <UserRound className="w-10 h-10" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100'
  }
};

export default function PerspectiveSelect() {
  const { startNewGame } = useGame();

  const handleSelectPerspective = (perspective: Perspective) => {
    // 选择后直接开始游戏，无返回
    startNewGame(perspective);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-pink-50 to-white p-4 flex flex-col items-center justify-center">
      <img src={assetUrl('assets/ui/perspective-bg.png')} alt="" className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover" />
      {/* 标题 */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          请选择你的冒险视角
        </h2>
        <p className="text-gray-500 mt-2">
          每个视角都有独特的记忆与故事
        </p>
      </div>

      {/* 视角卡片 */}
      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {(Object.keys(PERSPECTIVE_DATA) as Perspective[]).map((perspective) => {
          const data = PERSPECTIVE_DATA[perspective];
          const portrait = getCharacterAssetPath(
            '主角',
            perspective === 'child' ? '正常' : perspective === 'elder' ? '安心' : '坚定',
            perspective
          );

          return (
            <Card
              key={perspective}
              className={`cursor-pointer transition-all hover:scale-105 ${data.bgColor} border-2 border-transparent hover:border-pink-300`}
              onClick={() => handleSelectPerspective(perspective)}
            >
              <CardContent className="p-8 flex flex-col items-center text-center">
                <div className={`${data.color} mb-6 h-28 flex items-end justify-center`}>
                  {portrait ? (
                    <img src={portrait} alt={data.name} className="max-h-28 object-contain drop-shadow-md" />
                  ) : (
                    data.icon
                  )}
                </div>
                <h3 className={`text-xl font-bold ${data.color} mb-3`}>
                  {data.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {data.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 说明文字 */}
      <div className="relative z-10 mx-auto mt-12 max-w-2xl rounded-lg bg-pink-50 p-4">
        <p className="text-sm text-pink-700 text-center">
          选择后将进入该视角的完整剧情体验，包括一周目和二周目
        </p>
      </div>
    </div>
  );
}
