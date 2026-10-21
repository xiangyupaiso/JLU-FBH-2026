import { useState } from 'react';
import { useGame } from '@/hooks/gameContext';
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
import { StoryControlBar, StoryLogDrawer } from '@/components/storyControls';
import { useStoryPlayback } from '@/hooks/useStoryPlayback';

// Scene type definition
interface Scene {
  speaker?: string;
  text: string;
}

// Dimension leap trigger narrative per perspective (ZH)
const TRIGGER_SCENES_ZH: Record<Perspective, Scene[]> = {
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

// Dimension leap trigger narrative per perspective (EN)
const TRIGGER_SCENES_EN: Record<Perspective, Scene[]> = {
  child: [
    { speaker: 'Narrator', text: 'In the hospital hallway, the scent of antiseptic hangs thick in the air.' },
    { speaker: 'Narrator', text: 'At 10 years old, you sit quietly on the folding cot in Mom\'s hospital room, tightly clutching a picture book.' },
    { speaker: 'Narrator', text: 'Mom just finished her examination. The doctor said she needs further observation.' },
    { speaker: 'Narrator', text: 'Looking at Mom\'s pale face, your heart fills with fear and worry...' },
    { speaker: 'Narrator', text: 'Suddenly, a warm, radiant light envelops you...' },
    { speaker: 'Narrator', text: 'When you open your eyes again, you find yourself transported into a wondrous world...' }
  ],
  adult: [
    { speaker: 'Narrator', text: 'In the hallway of the health checkup center, you grip your newly issued physical examination report.' },
    { speaker: 'Narrator', text: 'The words "Breast Nodule" on the report cause your heart to sink abruptly.' },
    { speaker: 'Narrator', text: 'At 32, you always believed you were young and that health crises were far removed from your life.' },
    { speaker: 'Narrator', text: 'The doctor\'s words echo in your ears: "Regular follow-ups are needed. Mind your lifestyle habits..."' },
    { speaker: 'Narrator', text: 'Sitting in the waiting lounge chair, countless anxious thoughts flood your mind...' },
    { speaker: 'Narrator', text: 'Suddenly, a warm, radiant light envelops you...' },
    { speaker: 'Narrator', text: 'When you open your eyes again, you find yourself transported into a wondrous world...' }
  ],
  elder: [
    { speaker: 'Narrator', text: 'In the consultation room of the community clinic, you sit across from the doctor.' },
    { speaker: 'Narrator', text: 'At 65, you always felt your health was relatively robust.' },
    { speaker: 'Narrator', text: 'Yet the persistent hard lump in your chest recently compelled you to come for an examination.' },
    { speaker: 'Narrator', text: 'The physician\'s advice leaves you unsettled: "I strongly recommend visiting a major hospital for advanced diagnostics..."' },
    { speaker: 'Narrator', text: 'Stepping out of the clinic, you tightly hold the cloth doll your daughter gave you years ago...' },
    { speaker: 'Narrator', text: 'Suddenly, a warm, radiant light envelops you...' },
    { speaker: 'Narrator', text: 'When you open your eyes again, you find yourself transported into a wondrous world...' }
  ]
};

// Perspective titles (ZH)
const PERSPECTIVE_TITLES_ZH: Record<Perspective, { title: string; icon: string }> = {
  child: { title: '幼年视角·穿越触发', icon: '🏥' },
  adult: { title: '青壮年视角·穿越触发', icon: '📋' },
  elder: { title: '老年视角·穿越触发', icon: '🧸' }
};

// Perspective titles (EN)
const PERSPECTIVE_TITLES_EN: Record<Perspective, { title: string; icon: string }> = {
  child: { title: 'Child Perspective · Dimension Leap', icon: '🏥' },
  adult: { title: 'Adult Perspective · Dimension Leap', icon: '📋' },
  elder: { title: 'Elder Perspective · Dimension Leap', icon: '🧸' }
};

export default function RealityTrigger() {
  const { state, dispatch } = useGame();
  const perspective = state.currentPerspective!;
  const isZh = state.language === 'zh';

  const scenes = isZh ? TRIGGER_SCENES_ZH[perspective] : TRIGGER_SCENES_EN[perspective];
  const titleInfo = isZh ? PERSPECTIVE_TITLES_ZH[perspective] : PERSPECTIVE_TITLES_EN[perspective];

  const [showSettings, setShowSettings] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const pb = useStoryPlayback(scenes, () => {
    // Show leap transition animation
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

  // Background color gradient
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

  // Avatar lookup
  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === 'Narrator' || speaker === '旁白') return '📖';
    return '👤';
  };

  // Leap animation
  if (showTransition) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center animate-pulse">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">✨</div>
          <p className="text-xl text-pink-600">
            {isZh ? '正在穿越至微观世界...' : 'Leaping into the Micro World...'}
          </p>
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
          alt="Protagonist"
          className="absolute bottom-40 right-8 hidden max-h-[52vh] max-w-[34vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)] md:block"
        />
      )}
      {/* Background scene icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 pointer-events-none">
        <div className="text-9xl">
          {titleInfo.icon}
        </div>
      </div>

      {/* Header title */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-5xl mb-2">{titleInfo.icon}</div>
        <h1 className="text-2xl font-bold text-white/80 mb-1">{titleInfo.title}</h1>
      </div>

      {/* Retro Pixel Story Control Bar */}
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

      {/* Dialog box */}
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
        <div className={`${DIALOG_BOX} p-5 md:p-6`}>
          <div className={DIALOG_INNER} />
          {/* Speaker tag (hidden for narrator) */}
          {currentScene?.speaker && currentScene.speaker !== 'Narrator' && currentScene.speaker !== '旁白' && (
            <div className={SPEAKER_TAG}>
              <span className={SPEAKER_AVATAR}>{getSpeakerAvatar(currentScene.speaker)}</span>
              <span>{currentScene.speaker}</span>
            </div>
          )}

          {/* Dialog text (typewriter rendering) */}
          <p className={`${DIALOG_TEXT} ${
            currentScene?.speaker === 'Narrator' || currentScene?.speaker === '旁白' ? DIALOG_TEXT_NARRATION : ''
          }`}>
            {pb.displayed}
          </p>

          {/* Progress indicator */}
          <div className={DIALOG_PROGRESS}>
            <span className="text-xs font-medium text-[#8D6E63]">
              {pb.index + 1} / {scenes.length}
            </span>
            {!isLastScene && (
              <span className={NEXT_HINT_INLINE}>
                {isZh ? '点击继续' : 'Click to continue'}
                <span className={NEXT_ARROW}>▼</span>
              </span>
            )}
            {isLastScene && (
              <span className="text-xs font-medium text-[#D81B60] animate-pulse">
                {isZh ? '即将穿越...' : 'Leaping imminent...'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Story log drawer */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* Settings modal */}
      {showSettings && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Settings className="w-4 h-4" />
              {isZh ? '设置' : 'Settings'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">
                  {isZh ? '文字速度' : 'Text Speed'}
                </label>
                <input type="range" className="w-full" min="1" max="5" defaultValue="3" />
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  {isZh ? '音量' : 'Volume'}
                </label>
                <input type="range" className="w-full" min="0" max="100" defaultValue="50" />
              </div>
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => setShowSettings(false)}
            >
              {isZh ? '关闭' : 'Close'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
