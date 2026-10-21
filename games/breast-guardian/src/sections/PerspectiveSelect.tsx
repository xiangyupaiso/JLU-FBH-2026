import { useGame } from '@/hooks/gameContext';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Baby, User, UserRound, ArrowLeft } from 'lucide-react';
import type { Perspective } from '@/types';
import { getCharacterAssetPath } from '@/data/assets';
import { assetUrl } from '@/data/assetUrls';

const PERSPECTIVE_CONFIG: Record<Perspective, {
  nameZh: string;
  nameEn: string;
  descZh: string;
  descEn: string;
  icon: React.ReactNode;
  color: string;
  bgColor: string;
}> = {
  child: {
    nameZh: '幼年视角',
    nameEn: 'Child Perspective',
    descZh: '10岁小女孩 · 守护妈妈的乳腺健康世界',
    descEn: "10-Year-Old Girl · Safeguard Mom's Breast Health World",
    icon: <Baby className="w-10 h-10" />,
    color: 'text-amber-600',
    bgColor: 'bg-amber-50 hover:bg-amber-100'
  },
  adult: {
    nameZh: '青壮年视角',
    nameEn: 'Adult Perspective',
    descZh: '32岁职场女性 · 守护自己的健康生命旅途',
    descEn: '32-Year-Old Career Woman · Protect Your Own Vitality',
    icon: <User className="w-10 h-10" />,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 hover:bg-blue-100'
  },
  elder: {
    nameZh: '老年视角',
    nameEn: 'Elder Perspective',
    descZh: '65岁奶奶 · 晚年安康，关爱乳腺健康',
    descEn: '65-Year-Old Grandmother · Golden Years of Wellness',
    icon: <UserRound className="w-10 h-10" />,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 hover:bg-purple-100'
  }
};

export default function PerspectiveSelect() {
  const { state, dispatch, startNewGame } = useGame();
  const isZh = state.language === 'zh';

  const handleSelectPerspective = (perspective: Perspective) => {
    startNewGame(perspective);
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-b from-pink-50 to-white p-4 flex flex-col items-center justify-center">
      <img src={assetUrl('assets/ui/perspective-bg.png')} alt="" className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover" />

      {/* 返回按钮 */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-20 text-gray-600 hover:text-pink-600"
        onClick={() => dispatch({ type: 'SET_PHASE', payload: 'mainMenu' })}
      >
        <ArrowLeft className="w-4 h-4 mr-1" />
        {isZh ? '返回主菜单' : 'Back to Menu'}
      </Button>

      {/* 标题 */}
      <div className="relative z-10 mb-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          {isZh ? '选择你的视角' : 'Choose Your Perspective'}
        </h2>
        <p className="text-gray-500 mt-2">
          {isZh ? '每个视角都有独特的记忆点、选择和健康知识' : 'Each perspective presents unique memories, choices, and clinical insights'}
        </p>
      </div>

      {/* 视角卡片 */}
      <div className="relative z-10 grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        {(Object.keys(PERSPECTIVE_CONFIG) as Perspective[]).map((perspective) => {
          const data = PERSPECTIVE_CONFIG[perspective];
          const name = isZh ? data.nameZh : data.nameEn;
          const desc = isZh ? data.descZh : data.descEn;
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
                    <img src={portrait} alt={name} className="max-h-28 object-contain drop-shadow-md" />
                  ) : (
                    data.icon
                  )}
                </div>
                <h3 className={`text-xl font-bold ${data.color} mb-3`}>
                  {name}
                </h3>
                <p className="text-sm text-gray-600">
                  {desc}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* 说明文字 */}
      <div className="relative z-10 mx-auto mt-12 max-w-2xl rounded-lg bg-pink-50 p-4">
        <p className="text-sm text-pink-700 text-center">
          {isZh
            ? '选择一个视角开始完整剧情体验，包含一周目与二周目'
            : 'Selecting a perspective begins a full storyline experience across Playthrough 1 & Playthrough 2'}
        </p>
      </div>
    </div>
  );
}
