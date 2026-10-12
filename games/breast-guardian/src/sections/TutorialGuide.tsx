import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Brain, Sword } from 'lucide-react';
import { getBossAssetPath, getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';
import {
  DIALOG_BOX,
  DIALOG_INNER,
  DIALOG_PROGRESS,
  DIALOG_TEXT,
  DIALOG_TEXT_NARRATION,
  DIALOG_VIGNETTE,
  NEXT_ARROW,
  NEXT_HINT_INLINE,
  SPEAKER_AVATAR,
  SPEAKER_TAG
} from '@/components/dialogStyles';
import { StoryControlBar, StoryLogDrawer, useStoryPlayback } from '@/components/storyControls';

// Scene type definition
interface Scene {
  speaker?: string;
  text: string;
  background: 'main' | 'memory' | 'boss';
}

// Tutorial narrative scenes (ZH)
const tutorialScenesZh: Scene[] = [
  // 第一阶段：微观主城（场景1-7）
  { speaker: '旁白', text: '当你再次睁开眼睛时，发现自己来到了一个奇妙的世界...', background: 'main' },
  { speaker: '旁白', text: '主角在朦胧中醒来，脚下温润，光点漂浮，远处黑雾弥漫，茫然道："我这是在哪？好陌生……"', background: 'main' },
  { speaker: '派蒙', text: '主人！你终于来了，我们被症状BOSS欺负惨了！', background: 'main' },
  { speaker: '主角', text: '你是谁？这里是……我的体内？', background: 'main' },
  { speaker: '派蒙', text: '我是乳腺主城守护精灵派蒙！这里就是你的乳腺，BOSS在黑雾里作乱，你的习惯也在悄悄伤害我们。', background: 'main' },
  { speaker: '主角', text: '我？怎么会？', background: 'main' },
  { speaker: '派蒙', text: '先去核心区域，我帮你弄明白怎么守护这里！', background: 'main' },
  
  // 第二阶段：大脑记忆中枢（场景8-11）
  { speaker: '旁白', text: '场景切换至大脑记忆中枢，派蒙指着发光神经元："这里是大脑记忆中枢，能回看你的过往选择哦！"', background: 'memory' },
  { speaker: '派蒙', text: '我们可以通过神经元进入记忆点，重新经历过去的事情，改写曾经的做法～', background: 'memory' },
  { speaker: '派蒙', text: '不同的选择会触发不一样的结局，中枢还会根据结局教你专属技能呢！', background: 'memory' },
  { speaker: '派蒙', text: '不管结局是HE还是BE，只要通关记忆点，就能解锁对应的BOSS挑战～这可是拯救乳腺主城的唯一捷径哦！', background: 'memory' },
  
  // 第三阶段：病变乳腺组织（场景12-19）
  { speaker: '旁白', text: '场景切换至病变乳腺组织边界，BOSS挑战界面浮现，三个锁定图标排列。', background: 'boss' },
  { speaker: '派蒙', text: '这里是病变乳腺组织，就是坏家伙BOSS们的战场啦！远处的黑雾全是它们搞的鬼～', background: 'boss' },
  { speaker: '派蒙', text: '你看这三个暗戳戳的BOSS图标，它们分别对应记忆点1、2、3哦！', background: 'boss' },
  { speaker: '派蒙', text: '通关记忆点1→解锁BOSS1；通关记忆点2→解锁BOSS2，以此类推啦！', background: 'boss' },
  { speaker: '派蒙', text: '只要打败当前所有BOSS，就能把我们从苦难里救出来啦！冲鸭～', background: 'boss' },
  { speaker: '派蒙', text: '送你4个基础技能，帮你开局对抗BOSS！', background: 'boss' },
  { speaker: '派蒙', text: '【细胞修复术】修细胞，【激素平衡】稳状态，【免疫强化】增战力，【毒素净化】清污染。', background: 'boss' },
  { speaker: '派蒙', text: '用记忆点的技能+基础技能，打败所有BOSS，守护乳腺主城！', background: 'boss' },
  { speaker: '派蒙', text: '准备好，冒险开始！', background: 'boss' },
];

// Tutorial narrative scenes (EN)
const tutorialScenesEn: Scene[] = [
  // Stage 1: Micro Citadel
  { speaker: 'Narrator', text: 'When you open your eyes again, you find yourself transported into a wondrous world...', background: 'main' },
  { speaker: 'Narrator', text: 'The protagonist awakens in a haze. Beneath their feet is a gentle warmth, specks of light drift gently, and dark mist gathers in the distance. Dazed, they murmur: "Where am I? Everything feels so unfamiliar..."', background: 'main' },
  { speaker: 'Paimon', text: 'Master! You are finally here! The Symptom BOSSes have been terrorizing us relentlessly!', background: 'main' },
  { speaker: 'Protagonist', text: 'Who are you? Is this place... inside my body?', background: 'main' },
  { speaker: 'Paimon', text: 'I am Paimon, Guardian Sprite of the Mammary Citadel! This is your breast tissue. BOSSes run amok within the dark mist, and harmful habits have been silently damaging our world.', background: 'main' },
  { speaker: 'Protagonist', text: 'Me? How could that happen?', background: 'main' },
  { speaker: 'Paimon', text: 'Let\'s head to the Core Sector first! I will help you figure out how to defend this citadel!', background: 'main' },
  
  // Stage 2: Brain Memory Center
  { speaker: 'Narrator', text: 'Scene transitions to the Brain Memory Center. Paimon points toward the luminous neurons: "This is the Brain Memory Center. It lets you reflect on your past life choices!"', background: 'memory' },
  { speaker: 'Paimon', text: 'We can enter Memory Points through these neural synapses, relive past events, and rewrite previous decisions!', background: 'memory' },
  { speaker: 'Paimon', text: 'Different choices lead to different endings. The center will also bestow exclusive skills based on your outcomes!', background: 'memory' },
  { speaker: 'Paimon', text: 'Whether you reach an HE or BE, clearing a Memory Point unlocks its corresponding BOSS challenge! That is the only path to salvaging our Mammary Citadel!', background: 'memory' },
  
  // Stage 3: Diseased Mammary Tissue
  { speaker: 'Narrator', text: 'Scene transitions to the perimeter of the Diseased Mammary Tissue. The BOSS Arena interface manifests, displaying three locked icons in line.', background: 'boss' },
  { speaker: 'Paimon', text: 'This is the Diseased Mammary Tissue—the battlefield of those villainous BOSSes! The dense dark mist in the distance is entirely their doing!', background: 'boss' },
  { speaker: 'Paimon', text: 'See these three ominous BOSS icons? They correspond directly to Memory Points 1, 2, and 3!', background: 'boss' },
  { speaker: 'Paimon', text: 'Clear Memory Point 1 → Unlock BOSS 1; Clear Memory Point 2 → Unlock BOSS 2, and so forth!', background: 'boss' },
  { speaker: 'Paimon', text: 'Defeat all current BOSSes, and you will rescue us from this crisis! Let\'s go!', background: 'boss' },
  { speaker: 'Paimon', text: 'Here are 4 foundational skills to empower you against the BOSSes!', background: 'boss' },
  { speaker: 'Paimon', text: '[Cellular Repair] heals cells, [Hormone Balance] stabilizes regulation, [Immune Fortification] boosts combat power, and [Toxin Purge] expels impurities.', background: 'boss' },
  { speaker: 'Paimon', text: 'Combine your Memory Point skills with foundational skills to defeat every BOSS and safeguard the Mammary Citadel!', background: 'boss' },
  { speaker: 'Paimon', text: 'Get ready—the adventure begins!', background: 'boss' },
];

export default function TutorialGuide() {
  const { state, dispatch } = useGame();
  const [showSettings, setShowSettings] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

  const isZh = state.language === 'zh';
  const tutorialScenes = isZh ? tutorialScenesZh : tutorialScenesEn;

  const pb = useStoryPlayback(tutorialScenes, () => setShowComplete(true));

  const currentScene = pb.current!;
  const isLastScene = pb.isLast;
  const paimonPortrait = getCharacterAssetPath('派蒙', '开心');
  const protagonistPortrait = getCharacterAssetPath('主角', '坚定', state.currentPerspective || 'adult');
  const backgroundImage =
    currentScene.background === 'memory'
      ? getSceneAssetPath('大脑记忆中枢')
      : currentScene.background === 'boss'
        ? getSceneAssetPath('乳腺主城（黑雾笼罩）')
        : getSceneAssetPath('乳腺主城（正常）');

  const handleComplete = () => {
    dispatch({ type: 'COMPLETE_TUTORIAL' });
    dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' });
  };

  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === 'Paimon' || speaker === '派蒙') return '🧚';
    if (speaker === 'Protagonist' || speaker === '主角') return '👤';
    if (speaker === 'Narrator' || speaker === '旁白') return '📖';
    return '👤';
  };

  const renderBackground = () => {
    switch (currentScene.background) {
      case 'main':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200">
            {/* Micro Citadel background mockup */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-pink-700">
                {isZh ? '微观乳腺主城' : 'Micro Mammary Citadel'}
              </h2>
              <p className="text-sm text-pink-600/70">
                {isZh ? '一周目 · 核心区域' : 'Playthrough 1 · Central Nexus'}
              </p>
            </div>
            
            {/* Paimon dialog preview */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-white/80 rounded-2xl p-4 border border-pink-200 shadow-sm text-center">
                <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full font-medium">
                  {isZh ? '守护精灵派蒙' : 'Guardian Sprite Paimon'}
                </span>
                <p className="text-sm text-pink-800 mt-2">
                  {isZh
                    ? '欢迎来到乳腺主城！这里是守护健康的第一站～'
                    : 'Welcome to the Mammary Citadel! The first frontier of health guardianship~'}
                </p>
              </div>
            </div>

            {/* Micro world entrance preview */}
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 flex gap-4">
              <div className="bg-white/60 rounded-xl p-4 border border-pink-200 text-center w-36">
                <Brain className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <span className="text-xs font-bold text-pink-700">
                  {isZh ? '大脑记忆中枢' : 'Memory Center'}
                </span>
                <p className="text-[10px] text-pink-500">
                  {isZh ? '回溯过往生活' : 'Review past life'}
                </p>
              </div>
              <div className="bg-white/60 rounded-xl p-4 border border-pink-200 text-center w-36">
                <Sword className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                <span className="text-xs font-bold text-pink-700">
                  {isZh ? '症状BOSS' : 'Symptom BOSS'}
                </span>
                <p className="text-[10px] text-pink-500">
                  {isZh ? '驱散病症黑雾' : 'Disperse dark mist'}
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'memory':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-900 to-purple-950">
            {/* Brain memory center mockup */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-indigo-200">
                {isZh ? '大脑记忆中枢' : 'Brain Memory Center'}
              </h2>
              <p className="text-sm text-indigo-300/70">
                {isZh ? '回溯过往 · 改写选择' : 'Retrace the Past · Rewrite Decisions'}
              </p>
            </div>

            {/* Neural connection line */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-72 h-1 bg-gradient-to-r from-indigo-500 via-purple-400 to-pink-500 rounded-full opacity-60" />

            {/* 3 Memory points preview */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-80 space-y-3">
              {[
                {
                  title: isZh ? '记忆点1: 习惯重塑' : 'Memory 1: Habit Reshaping',
                  boss: isZh ? '解锁肿块BOSS' : 'Unlocks Lump BOSS',
                  color: 'indigo'
                },
                {
                  title: isZh ? '记忆点2: 情绪调适' : 'Memory 2: Emotional Balance',
                  boss: isZh ? '解锁分泌BOSS' : 'Unlocks Discharge BOSS',
                  color: 'purple'
                },
                {
                  title: isZh ? '记忆点3: 科学认知' : 'Memory 3: Scientific Awareness',
                  boss: isZh ? '解锁皮肤BOSS' : 'Unlocks Peau BOSS',
                  color: 'pink'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-white/60">{item.boss}</p>
                    </div>
                  </div>
                  <span className="text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded">
                    {isZh ? '未解锁' : 'Locked'}
                  </span>
                </div>
              ))}
            </div>

            {/* Tip box */}
            <div className="absolute bottom-36 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-indigo-950/60 rounded-xl p-3 border border-indigo-700/50">
                <p className="text-xs text-indigo-200/80 text-center">
                  {isZh
                    ? '💡 通关每个记忆点，即可获得专属技能并解锁对应BOSS'
                    : '💡 Clear each Memory Point to gain exclusive skills & unlock the corresponding BOSS'}
                </p>
              </div>
            </div>
          </div>
        );
      
      case 'boss':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-red-950">
            {/* Diseased tissue title */}
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-red-300">
                {isZh ? '病变乳腺组织 · 症状BOSS挑战区' : 'Diseased Mammary Tissue · BOSS Challenge Area'}
              </h2>
              <p className="text-sm text-red-400/70">
                {isZh ? '击败所有BOSS · 驱散黑雾' : 'Defeat All BOSSes · Disperse Dark Mist'}
              </p>
            </div>

            {/* 3 BOSS cards */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-80 space-y-3">
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('breastLump', '狰狞')} alt="BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">
                    {isZh ? '肿块BOSS' : 'Breast Lump BOSS'}
                  </h3>
                  <p className="text-xs text-red-300/70">
                    {isZh ? '解锁条件: 通关记忆点1' : 'Unlock: Clear Memory Point 1'}
                  </p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> {isZh ? '未解锁' : 'Locked'}
                </span>
              </div>
              
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('nippleDischarge', '狰狞')} alt="BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">
                    {isZh ? '乳头溢液BOSS' : 'Nipple Discharge BOSS'}
                  </h3>
                  <p className="text-xs text-red-300/70">
                    {isZh ? '解锁条件: 通关记忆点2' : 'Unlock: Clear Memory Point 2'}
                  </p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> {isZh ? '未解锁' : 'Locked'}
                </span>
              </div>
              
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('orangePeel', '狰狞')} alt="BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">
                    {isZh ? '橘皮样改变BOSS' : "Peau d'Orange BOSS"}
                  </h3>
                  <p className="text-xs text-red-300/70">
                    {isZh ? '解锁条件: 通关记忆点3' : 'Unlock: Clear Memory Point 3'}
                  </p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> {isZh ? '未解锁' : 'Locked'}
                </span>
              </div>
            </div>

            {/* Challenge Progress */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-red-900/60 rounded-xl p-4 border border-red-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-red-200">
                    {isZh ? '挑战进度' : 'Challenge Progress'}
                  </span>
                  <span className="text-sm text-red-400">
                    {isZh ? '0 / 3 已击败' : '0 / 3 Defeated'}
                  </span>
                </div>
                <div className="w-full h-2 bg-red-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-0" />
                </div>
              </div>
            </div>

            {/* Tip */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-red-800/40 rounded-xl p-3 border border-red-700/50">
                <p className="text-xs text-red-300/80 text-center">
                  {isZh
                    ? '提示：通关对应记忆点即可挑战对应BOSS。击败全部3个BOSS即可触发结局。'
                    : 'Tip: Clear each Memory Point to unlock its corresponding BOSS. Defeating all 3 BOSSes triggers the ending.'}
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      onClick={pb.handleScreenClick}
    >
      {/* Background */}
      {renderBackground()}

      {backgroundImage && (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 z-[1] h-full w-full object-cover opacity-25 pointer-events-none"
        />
      )}
      <div className="absolute inset-0 z-[2] bg-gradient-to-b from-transparent via-transparent to-black/20 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-40 z-[3] hidden md:flex items-end justify-between px-8 pointer-events-none">
        {protagonistPortrait && (
          <img src={protagonistPortrait} alt="Protagonist" className="max-h-[44vh] max-w-[30vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]" />
        )}
        {(currentScene.speaker === '派蒙' || currentScene.speaker === 'Paimon') && paimonPortrait && (
          <img src={paimonPortrait} alt="Paimon" className="max-h-[42vh] max-w-[28vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]" />
        )}
        {currentScene.background === 'boss' && (
          <img src={getBossAssetPath('breastLump', '狰狞')} alt="BOSS" className="max-h-[36vh] max-w-[24vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]" />
        )}
      </div>

      <div className={`${DIALOG_VIGNETTE} z-[4]`} />

      {/* Story controls */}
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

      {/* Story dialog box */}
      {!showComplete && (
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
        <div className={`${DIALOG_BOX} p-5 md:p-6`}>
          <div className={DIALOG_INNER} />
          {currentScene?.speaker && currentScene.speaker !== '旁白' && currentScene.speaker !== 'Narrator' && (
            <div className={SPEAKER_TAG}>
              <span className={SPEAKER_AVATAR}>
                {(currentScene.speaker === '派蒙' || currentScene.speaker === 'Paimon') && paimonPortrait ? (
                  <img src={paimonPortrait} alt="Paimon" className="h-full w-full object-cover" />
                ) : (currentScene.speaker === '主角' || currentScene.speaker === 'Protagonist') && protagonistPortrait ? (
                  <img src={protagonistPortrait} alt="Protagonist" className="h-full w-full object-cover" />
                ) : (
                  getSpeakerAvatar(currentScene.speaker)
                )}
              </span>
              <span>{currentScene.speaker}</span>
            </div>
          )}

          <p className={`${DIALOG_TEXT} ${currentScene?.speaker === '旁白' || currentScene?.speaker === 'Narrator' ? DIALOG_TEXT_NARRATION : ''}`}>
            {pb.displayed}
          </p>

          {/* Progress */}
          <div className={DIALOG_PROGRESS}>
            <span className="text-xs font-medium text-[#8D6E63]">
              {pb.index + 1} / {tutorialScenes.length}
            </span>
            {!isLastScene && (
              <span className={NEXT_HINT_INLINE}>
                {isZh ? '点击继续' : 'Click to continue'}
                <span className={NEXT_ARROW}>▼</span>
              </span>
            )}
          </div>
        </div>
      </div>
      )}

      {/* Story log drawer */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* Tutorial complete modal */}
      {showComplete && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              {isZh ? '新手引导完成！' : 'Tutorial Complete!'}
            </h2>
            <p className="text-stone-600 mb-6">
              {isZh
                ? '你已经了解了游戏的基本玩法。现在，开始你的乳腺守护冒险吧！'
                : 'You now grasp the core mechanics. Embark on your breast guardian journey!'}
            </p>
            <div className="rounded-xl bg-white/60 border border-pink-200/80 p-4 mb-6">
              <p className="text-sm text-stone-700">
                {isZh
                  ? '💡 提示：通关记忆点解锁BOSS，击败所有BOSS触发结局'
                  : '💡 Tip: Clear Memory Points to unlock BOSSes; defeat all BOSSes to achieve endings.'}
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]"
              onClick={handleComplete}
            >
              {isZh ? '开始冒险' : 'Begin Adventure'}
            </Button>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div 
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">
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
