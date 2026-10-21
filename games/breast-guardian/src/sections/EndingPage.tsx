import { useGame } from '@/hooks/gameContext';
import { assetUrl } from '@/data/assetUrls';

// Ending Page - Background image has pre-baked graphics
export default function EndingPage() {
  const { state, dispatch } = useGame();
  const isZh = state.language === 'zh';

  const handleHome = () => {
    // Final unlock: complete promotion linkage and unlock perspective switching
    dispatch({ type: 'COMPLETE_PROMOTION_AND_UNLOCK' });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-black">
      {/* Background */}
      <img
        src={assetUrl('assets/ui/ending-bg.jpg')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Top-right "Return to Main Menu" click hotspot */}
      <button
        onClick={handleHome}
        className="absolute right-[3%] top-[8%] z-30 h-[24%] w-[16.5%] rounded-xl transition hover:bg-white/10 active:scale-95"
        aria-label={isZh ? "返回主界面" : "Return to Main Menu"}
        title={isZh ? "返回主界面" : "Return to Main Menu"}
      />
    </div>
  );
}
