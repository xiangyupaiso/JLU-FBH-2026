import { useGame } from '@/hooks/gameState';
import { SheepSpeech } from '@/components/SheepBubble';
import { assetUrl } from '@/data/assetUrls';

export default function MainMenu() {
  const { dispatch } = useGame();

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Layer 0: 页面背景（home-bg.jpg 已含主标题「乳腺守护者」） */}
      <img
        src={assetUrl('assets/ui/home-bg.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Layer 1: 居中主视觉（副标题 + 按钮组，置于主标题下方） */}
      <div className="relative z-20 flex min-h-screen flex-col items-center justify-center gap-5 px-4 pt-[18vh]">
        <button
          type="button"
          className="w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'perspectiveSelect' })}
        >
          <img
            src={assetUrl('assets/ui/home-start.png')}
            alt="开始游戏"
            className="w-full drop-shadow-lg"
            draggable={false}
          />
        </button>
        <button
          type="button"
          className="w-[min(320px,72vw)] transition-transform hover:scale-105 active:scale-95"
          onClick={() => dispatch({ type: 'SET_PHASE', payload: 'knowledgeBook' })}
        >
          <img
            src={assetUrl('assets/ui/home-book.png')}
            alt="知识手册"
            className="w-full drop-shadow-lg"
            draggable={false}
          />
        </button>
      </div>

      {/* Layer 2: 底部全宽石阶装饰层（透明 PNG：左小熊+咖啡+拐杖，右小羊+紫色细胞，与主城一致） */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-10 select-none">
        <img
          src={assetUrl('assets/ui/foreground-1.png')}
          alt="Bottom Stage"
          className="w-full h-auto"
          draggable={false}
        />
        {/* 小羊话术气泡（锚定在小羊头顶上方：小羊头顶位于全宽地台约 28% 高度处） */}
        <SheepSpeech className="absolute bottom-[28%] right-[6%] z-20" />
      </div>

      {/* Layer 3: 左下角二维码入口（层级在石阶装饰之上） */}
      <div className="absolute bottom-6 left-6 z-20 flex flex-col items-center space-y-2">
        <img
          src={assetUrl('assets/ui/qr-home.png')}
          alt="守护者健康档案问卷二维码"
          className="h-28 w-28 rounded-lg shadow-md md:h-32 md:w-32"
        />
      </div>
    </div>
  );
}
