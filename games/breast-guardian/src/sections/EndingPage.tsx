import { useGame } from '@/hooks/gameState';
import { assetUrl } from '@/data/assetUrls';

// 结尾页 - 背景图已烘焙：左上链条+问卷二维码吊牌、右上链条+「返回主界面」吊牌
export default function EndingPage() {
  const { dispatch } = useGame();

  const handleHome = () => {
    // 终局权限解锁：完成 promotion 联动，开启全视角自由切换
    dispatch({ type: 'COMPLETE_PROMOTION_AND_UNLOCK' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* 背景（含 GAME OVER 标题与两侧吊牌） */}
      <img
        src={assetUrl('assets/ui/ending-bg.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* 右上角「返回主界面」吊牌热区（对位背景烘焙位置，16:9 下误差 <1%） */}
      <button
        onClick={handleHome}
        className="absolute right-[3%] top-[8%] z-30 h-[24%] w-[16.5%] rounded-xl transition hover:bg-white/10 active:scale-95"
        aria-label="返回首页"
        title="返回首页"
      />
    </div>
  );
}
