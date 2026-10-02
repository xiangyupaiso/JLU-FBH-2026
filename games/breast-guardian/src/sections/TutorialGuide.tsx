import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Brain, Sword } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
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

// 场景类型定义
interface Scene {
  speaker?: string;
  text: string;
  background: 'main' | 'memory' | 'boss';
}

// 新手引导剧情数据
const tutorialScenes: Scene[] = [
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

// 技能名称映射
const SKILL_NAME_MAP: Record<string, string> = {
  cellRepair: '细胞修复术',
  hormoneBalance: '激素平衡',
  immuneBoost: '免疫强化',
  detox: '毒素净化'
};

export default function TutorialGuide() {
  const { state, dispatch } = useGame();
  const [showSettings, setShowSettings] = useState(false);
  const [showComplete, setShowComplete] = useState(false);

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
    // 完成新手引导
    dispatch({ type: 'COMPLETE_TUTORIAL' });
    // 跳转到微观主城
    dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' });
  };

  // 获取角色头像
  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === '派蒙') return '🧚';
    if (speaker === '主角') return '👤';
    if (speaker === '旁白') return '📖';
    return '👤';
  };

  // 渲染背景内容
  const renderBackground = () => {
    switch (currentScene.background) {
      case 'main':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-pink-100 to-pink-200">
            {/* 微观主城背景元素 */}
            <div className="absolute top-20 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-pink-700">微观乳腺主城</h2>
              <p className="text-sm text-pink-600/70">一周目 · 核心枢纽</p>
            </div>
            
            {/* 派蒙提示区域 */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-white/80 rounded-xl p-4 flex items-start gap-3 shadow-sm">
                <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center flex-shrink-0">
                  {paimonPortrait ? (
                    <img src={paimonPortrait} alt="派蒙" className="h-full w-full rounded-full object-cover" />
                  ) : (
                    <span className="text-2xl">🧚</span>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium text-pink-700">派蒙</p>
                  <p className="text-xs text-gray-600 mt-1">
                    这里是你的乳腺主城，那些黑雾和怪物，都是你的不良生活习惯催生的，快去探索一下吧。
                  </p>
                </div>
              </div>
            </div>

            {/* 功能入口 */}
            <div className="absolute top-72 left-1/2 -translate-x-1/2 w-80 space-y-4">
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 opacity-60">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-blue-400 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-blue-700">大脑记忆中枢</h3>
                    <p className="text-xs text-blue-600/70">回溯记忆，学习技能</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-red-50 to-red-100 border-red-200 opacity-60">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-14 h-14 bg-red-400 rounded-xl flex items-center justify-center">
                    <Sword className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-red-700">病变的乳腺组织</h3>
                    <p className="text-xs text-red-600/70">挑战症状BOSS (0个已解锁)</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* 装饰元素 */}
            <div className="absolute bottom-20 left-4 opacity-20">
              <div className="w-8 h-8 bg-pink-400 rounded-full animate-pulse" />
            </div>
            <div className="absolute top-24 right-4 opacity-15">
              <div className="w-6 h-6 bg-pink-500 rounded-full animate-bounce" />
            </div>
          </div>
        );
      
      case 'memory':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-indigo-100 to-purple-100">
            {/* 大脑记忆中枢背景 */}
            <div className="absolute top-4 left-4">
              <span className="text-indigo-600 text-sm">← 返回主城</span>
            </div>
            
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-indigo-700">大脑记忆中枢</h2>
              <p className="text-sm text-indigo-600/70">一周目 · 记忆点通关后锁定</p>
            </div>

            {/* 记忆点列表 */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3">
              <div className="bg-yellow-100 rounded-xl p-4 border border-yellow-300 flex items-center gap-3">
                <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center text-white font-bold">1</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">记忆点标题</h3>
                  <p className="text-xs text-gray-600">记忆点描述</p>
                </div>
                <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded">可进入</span>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">2</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">记忆点标题</h3>
                  <p className="text-xs text-gray-600">记忆点描述</p>
                </div>
                <span className="text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded">未解锁</span>
              </div>
              
              <div className="bg-gray-100 rounded-xl p-4 border border-gray-200 flex items-center gap-3 opacity-60">
                <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-bold">3</div>
                <div className="flex-1">
                  <h3 className="font-bold text-gray-800">记忆点标题</h3>
                  <p className="text-xs text-gray-600">记忆点描述</p>
                </div>
                <span className="text-xs bg-gray-200 text-gray-500 px-2 py-1 rounded">未解锁</span>
              </div>
            </div>

            {/* 已装备技能 */}
            <div className="absolute bottom-32 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-white/80 rounded-xl p-4">
                <h4 className="text-sm font-medium text-gray-700 mb-3">已装备技能</h4>
                <div className="flex flex-wrap gap-2">
                  {state.equippedSkills.map((skillId) => (
                    <span key={skillId} className="text-xs bg-pink-100 text-pink-600 px-2 py-1 rounded">
                      {SKILL_NAME_MAP[skillId] || skillId}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'boss':
        return (
          <div className="absolute inset-0 bg-gradient-to-b from-red-900 to-red-950">
            {/* 病变乳腺组织背景 */}
            <div className="absolute top-4 left-4">
              <span className="text-red-300 text-sm">← 返回主城</span>
            </div>
            
            <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center">
              <h2 className="text-2xl font-bold text-red-400">病变的乳腺组织</h2>
              <p className="text-sm text-red-300/70">BOSS挑战区 · 第1周目</p>
            </div>

            {/* BOSS列表 */}
            <div className="absolute top-36 left-1/2 -translate-x-1/2 w-80 space-y-3">
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('breastLump', '狰狞')} alt="乳房硬块BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">乳房硬块BOSS</h3>
                  <p className="text-xs text-red-300/70">解锁条件: 通关记忆点1</p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> 未解锁
                </span>
              </div>
              
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('nippleDischarge', '狰狞')} alt="乳头溢液BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">乳头溢液BOSS</h3>
                  <p className="text-xs text-red-300/70">解锁条件: 通关记忆点2</p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> 未解锁
                </span>
              </div>
              
              <div className="bg-red-800/60 rounded-xl p-4 border border-red-700 flex items-center gap-3">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center overflow-hidden">
                  <img src={getBossAssetPath('orangePeel', '狰狞')} alt="橘皮样改变BOSS" className="h-full w-full object-cover" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-red-200">橘皮样改变BOSS</h3>
                  <p className="text-xs text-red-300/70">解锁条件: 通关记忆点3</p>
                </div>
                <span className="text-xs bg-gray-600 text-gray-300 px-2 py-1 rounded flex items-center gap-1">
                  <span>🔒</span> 未解锁
                </span>
              </div>
            </div>

            {/* 挑战进度 */}
            <div className="absolute bottom-40 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-red-900/60 rounded-xl p-4 border border-red-700">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-red-200">挑战进度</span>
                  <span className="text-sm text-red-400">0 / 3 已击败</span>
                </div>
                <div className="w-full h-2 bg-red-800 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-0" />
                </div>
              </div>
            </div>

            {/* 提示 */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 w-80">
              <div className="bg-red-800/40 rounded-xl p-3 border border-red-700/50">
                <p className="text-xs text-red-300/80 text-center">
                  提示：通关对应记忆点即可挑战对应BOSS。击败全部3个BOSS即可触发结局。
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
      {/* 背景 */}
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
          <img src={protagonistPortrait} alt="主角" className="max-h-[44vh] max-w-[30vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.35)]" />
        )}
        {currentScene.speaker === '派蒙' && paimonPortrait && (
          <img src={paimonPortrait} alt="派蒙" className="max-h-[42vh] max-w-[28vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.28)]" />
        )}
        {currentScene.background === 'boss' && (
          <img src={getBossAssetPath('breastLump', '狰狞')} alt="BOSS" className="max-h-[36vh] max-w-[24vw] object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.45)]" />
        )}
      </div>

      {/* 环境自适应暗角：压立绘底脚，保证对话框区域辨识度 */}
      <div className={`${DIALOG_VIGNETTE} z-[4]`} />

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
      {!showComplete && (
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
        <div className={`${DIALOG_BOX} p-5 md:p-6`}>
          <div className={DIALOG_INNER} />
          {currentScene?.speaker && currentScene.speaker !== '旁白' && (
            <div className={SPEAKER_TAG}>
              <span className={SPEAKER_AVATAR}>
                {currentScene.speaker === '派蒙' && paimonPortrait ? (
                  <img src={paimonPortrait} alt="派蒙" className="h-full w-full object-cover" />
                ) : currentScene.speaker === '主角' && protagonistPortrait ? (
                  <img src={protagonistPortrait} alt="主角" className="h-full w-full object-cover" />
                ) : (
                  getSpeakerAvatar(currentScene.speaker)
                )}
              </span>
              <span>{currentScene.speaker}</span>
            </div>
          )}

          <p className={`${DIALOG_TEXT} ${currentScene?.speaker === '旁白' ? DIALOG_TEXT_NARRATION : ''}`}>
            {pb.displayed}
          </p>

          {/* 进度指示器 */}
          <div className={DIALOG_PROGRESS}>
            <span className="text-xs font-medium text-[#8D6E63]">
              {pb.index + 1} / {tutorialScenes.length}
            </span>
            {!isLastScene && (
              <span className={NEXT_HINT_INLINE}>
                点击继续
                <span className={NEXT_ARROW}>▼</span>
              </span>
            )}
          </div>
        </div>
      </div>
      )}

      {/* 历史台词抽屉 */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* 引导完成界面 */}
      {showComplete && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">新手引导完成！</h2>
            <p className="text-stone-600 mb-6">
              你已经了解了游戏的基本玩法。现在，开始你的乳腺守护冒险吧！
            </p>
            <div className="rounded-xl bg-white/60 border border-pink-200/80 p-4 mb-6">
              <p className="text-sm text-stone-700">
                💡 提示：通关记忆点解锁BOSS，击败所有BOSS触发结局
              </p>
            </div>
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white px-8 border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]"
              onClick={handleComplete}
            >
              开始冒险
            </Button>
          </div>
        </div>
      )}

      {/* 设置对话框 */}
      {showSettings && (
        <div 
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">设置</h3>
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
