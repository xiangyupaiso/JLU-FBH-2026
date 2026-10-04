import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import type { Perspective } from '@/types';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';
import {
  DIALOG_BOX,
  DIALOG_INNER,
  DIALOG_PROGRESS,
  DIALOG_TEXT,
  DIALOG_TEXT_NARRATION,
  NEXT_ARROW,
  NEXT_HINT_INLINE,
  SPEAKER_AVATAR,
  SPEAKER_TAG
} from '@/components/dialogStyles';
import { StoryControlBar, StoryLogDrawer, useStoryPlayback } from '@/components/storyControls';

// 场景类型定义
interface Scene {
  speaker?: string;
  text: string;
}

// 各视角穿越剧情数据
const TRIGGER_SCENES: Record<Perspective, Scene[]> = {
  child: [
    { speaker: '旁白', text: '医院的走廊里，消毒水的味道弥漫在空气中。' },
    { speaker: '旁白', text: '10岁的你坐在妈妈病房的陪护小床上，手里紧紧攥着一本绘本。' },
    { speaker: '旁白', text: '妈妈刚做完检查，医生说需要进一步观察。' },
    { speaker: '旁白', text: '你看着妈妈苍白的脸，心里又害怕又担心...' },
    { speaker: '旁白', text: '突然，一阵温暖的光芒包裹了你...' },
    { speaker: '旁白', text: '当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...' }
  ],
  adult: [
    { speaker: '旁白', text: '体检中心的走廊里，你手里攥着刚拿到的体检报告。' },
    { speaker: '旁白', text: '报告单上"乳腺结节"四个字让你的心猛地一沉。' },
    { speaker: '旁白', text: '32岁的你，一直以为自己还年轻，健康问题离自己很远。' },
    { speaker: '旁白', text: '医生的话在耳边回响："需要定期复查，注意生活习惯..."' },
    { speaker: '旁白', text: '你坐在休息区的椅子上，思绪万千...' },
    { speaker: '旁白', text: '突然，一阵温暖的光芒包裹了你...' },
    { speaker: '旁白', text: '当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...' }
  ],
  elder: [
    { speaker: '旁白', text: '社区医院的诊室里，你坐在医生对面。' },
    { speaker: '旁白', text: '65岁的你，一直觉得自己身体还算硬朗。' },
    { speaker: '旁白', text: '但最近胸口的硬块让你不得不来医院检查。' },
    { speaker: '旁白', text: '医生的话让你心里七上八下："建议去大医院做进一步检查..."' },
    { speaker: '旁白', text: '你走出诊室，手里紧紧攥着女儿小时候送的布娃娃...' },
    { speaker: '旁白', text: '突然，一阵温暖的光芒包裹了你...' },
    { speaker: '旁白', text: '当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...' }
  ]
};

// 视角标题
const PERSPECTIVE_TITLES: Record<Perspective, { title: string; icon: string }> = {
  child: { title: '幼年视角·穿越触发', icon: '🏥' },
  adult: { title: '青壮年视角·穿越触发', icon: '📋' },
  elder: { title: '老年视角·穿越触发', icon: '🧸' }
};

export default function RealityTrigger() {
  const { state, dispatch } = useGame();
  const perspective = state.currentPerspective!;
  const scenes = TRIGGER_SCENES[perspective];
  const titleInfo = PERSPECTIVE_TITLES[perspective];

  const [showSettings, setShowSettings] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const pb = useStoryPlayback(scenes, () => {
    // 显示穿越动画
    setShowTransition(true);
    setTimeout(() => {
      dispatch({ type: 'SET_PHASE', payload: 'tutorial' });
    }, 3000);
  });

  const currentScene = pb.current;
  const isLastScene = pb.isLast;
  const background = getSceneAssetPath(
    perspective === 'child' ? '正规医院' : perspective === 'adult' ? '体检中心' : '社区医院'
  );
  const protagonist = getCharacterAssetPath(
    '主角',
    perspective === 'child' ? '害怕' : '焦虑',
    perspective
  );

  // 获取背景颜色
  const getBackgroundColor = () => {
    switch (perspective) {
      case 'child':
        return 'from-amber-900/80 to-amber-950';
      case 'adult':
        return 'from-blue-900/80 to-blue-950';
      case 'elder':
        return 'from-purple-900/80 to-purple-950';
      default:
        return 'from-gray-900/80 to-gray-950';
    }
  };

  // 获取角色头像
  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === '旁白') return '📖';
    return '👤';
  };

  // 穿越动画
  if (showTransition) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center animate-pulse">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">✨</div>
          <p className="text-xl text-pink-600">正在穿越到微观世界...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${getBackgroundColor()} relative overflow-hidden`}
      onClick={pb.handleScreenClick}
    >
      {background && (
        <img src={background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/70" />
      {protagonist && (
        <img
          src={protagonist}
          alt="主角"
          className="absolute bottom-40 right-8 hidden max-h-[52vh] max-w-[34vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] md:block"
        />
      )}
      {/* 背景场景 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
        <div className="text-9xl">
          {titleInfo.icon}
        </div>
      </div>

      {/* 标题区域 */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-5xl mb-2">{titleInfo.icon}</div>
        <h1 className="text-2xl font-bold text-white/80 mb-1">{titleInfo.title}</h1>
      </div>

      {/* 复古像素快捷控制栏：回退 / AUTO / SKIP / HIDE / LOG / 设置 */}
      <StoryControlBar
        className={pb.hiddenUiClass}
        canBack={pb.index > 0}
        onBack={pb.back}
        isAuto={pb.isAuto}
        onToggleAuto={pb.toggleAuto}
        onSkip={pb.skip}
        onHide={pb.hideUi}
        onShowLog={() => pb.setShowLog(true)}
        onSettings={() => setShowSettings(true)}
      />

      {/* 剧情对话框：点击全屏任意区域推进下一句 */}
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
        <div className={`${DIALOG_BOX} p-5 md:p-6`}>
          <div className={DIALOG_INNER} />
          {/* 悬浮说话人铭牌（旁白隐藏） */}
          {currentScene?.speaker && currentScene.speaker !== '旁白' && (
            <div className={SPEAKER_TAG}>
              <span className={SPEAKER_AVATAR}>{getSpeakerAvatar(currentScene.speaker)}</span>
              <span>{currentScene.speaker}</span>
            </div>
          )}

          {/* 对话内容（打字机渲染） */}
          <p className={`${DIALOG_TEXT} ${
            currentScene?.speaker === '旁白' ? DIALOG_TEXT_NARRATION : ''
          }`}>
            {pb.displayed}
          </p>

          {/* 进度指示器 */}
          <div className={DIALOG_PROGRESS}>
            <span className="text-xs font-medium text-[#8D6E63]">
              {pb.index + 1} / {scenes.length}
            </span>
            {!isLastScene && (
              <span className={NEXT_HINT_INLINE}>
                点击继续
                <span className={NEXT_ARROW}>▼</span>
              </span>
            )}
            {isLastScene && (
              <span className="text-xs font-medium text-[#D81B60] animate-pulse">即将穿越...</span>
            )}
          </div>
        </div>
      </div>

      {/* 历史台词抽屉 */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* 设置对话框 */}
      {showSettings && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              设置
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">文字速度</label>
                <input type="range" className="w-full" min="1" max="5" defaultValue="3" />
              </div>
              <div>
                <label className="text-sm text-gray-600">音量</label>
                <input type="range" className="w-full" min="0" max="100" defaultValue="50" />
              </div>
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => setShowSettings(false)}
            >
              关闭
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
