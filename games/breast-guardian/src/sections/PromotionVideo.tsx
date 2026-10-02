import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { SkipForward } from 'lucide-react';
import { getSceneAssetPath, getCharacterAssetPath } from '@/data/assets';
import { StoryControlBar, StoryLogDrawer, useStoryPlayback } from '@/components/storyControls';

// promotion 场景类型定义
interface PromoScene {
  bg?: string; // 场景切换（继承上一场景）
  speaker: string;
  text: string;
  state?: string; // 派蒙立绘状态（继承上一状态）
}

// 三阴性乳腺癌工程研发联动剧情 - GALGAME 模式
export default function PromotionVideo() {
  const { dispatch } = useGame();

  const scenes: PromoScene[] = [
    { bg: '碎片化记忆中枢', speaker: '旁白', text: '熟悉的神经元光晕在四周缓缓漂浮，记忆的余温还未完全散去。' },
    { speaker: '派蒙', state: '认真', text: '你刚刚走完了这一段人生旅程，完成了属于这个阶段的守护。' },
    { speaker: '派蒙', state: '温柔', text: '其实，关于乳腺健康的考验，散落在人生的每一个时期。' },
    { speaker: '派蒙', text: '童年时对家人的牵挂，成年后对自己的关照，年老时对疾病的直面…… 它们都是守护的一部分。' },
    { speaker: '派蒙', text: '此刻你的记忆，正和另外两个人生阶段轻轻共振。' },
    { speaker: '派蒙', text: '而所有当下的守护，最终都指向同一个方向——那就是未来，更多的治疗可能。' },
    { speaker: '派蒙', text: '你看，这些正在闪光的，就是和此刻共振的、未来的记忆碎片。' },
    { speaker: '派蒙', text: '它们连在一起，就是研究者们为三阴性乳腺癌寻找答案的路径。' },
    { bg: '生信筛选研究像素背景图', speaker: '研究员A', text: '我们先通过大量文献挖掘与生物信息学筛选，锁定了三阴性乳腺癌细胞表面多种高表达、特异性较强的抗原表位。' },
    { speaker: '研究员A', text: '后续生信数据验证也证明，这类抗原能够顺利被人体免疫细胞识别、加工并呈递，是精准治疗的核心突破口。' },
    { bg: '环状 RNA 载体像素背景图', speaker: '研究员B', text: '找到靶点后，我们需要稳定可靠的递送载体，为此我们选择了环状 RNA 作为全新运载工具。' },
    { speaker: '研究员B', text: '我们摒弃传统单一靶点设计，搭建了可同时搭载多种抗原的 "即插即用" 模块化多靶点平台。' },
    { bg: '免疫通路像素背景图', speaker: '研究员C', text: '和线性 RNA 不同，环状 RNA 结构更稳定，能够持续在体内合成肿瘤抗原。' },
    { speaker: '研究员C', text: '稳定表达的抗原可以充分激活树突状细胞，进而唤醒杀伤性 T 细胞，诱发强效的抗肿瘤免疫应答。' },
    { bg: '多癌种拓展平台像素背景图', speaker: '研究员D', text: '这套 "即插即用" 模块化平台的价值，并不局限于三阴性乳腺癌。' },
    { speaker: '研究员D', text: '仅替换靶点模块，我们就能定制适配多种实体肿瘤的个性化疫苗，帮助更多患者远离肿瘤复发，重获生活的希望。' },
    { bg: '激活的碎片化记忆中枢', speaker: '派蒙', state: '雀跃', text: '哇塞！工程化的齿轮已经开始转动了！' },
    { speaker: '派蒙', state: '认真', text: '从靶点筛选、载体构建、免疫机制验证到广谱平台拓展，完整的工程研发闭环已经成型。' },
    { speaker: '派蒙', state: '温柔', text: '今天，你守护的是当下的健康。' },
    { speaker: '派蒙', text: '未来，我们希望能守护每一位患者，重新拥抱生活的机会。' },
    { speaker: '派蒙', state: '期待', text: '守护，永远从了解开始。' },
    { speaker: '派蒙', text: '如果可以的话，请在结束时填写问卷留下你的感受吧。' },
    { speaker: '派蒙', text: '你的每一份反馈，都会让这份守护变得更完整。' },
    { speaker: '派蒙', state: '欣慰', text: '点击「返回主界面」，回到最初的开始。' },
    { speaker: '派蒙', text: '也许下一次，我们还会在守护的旅途中再见。' }
  ];

  // 剧情播放引擎：打字机 / AUTO / SKIP / HIDE / LOG（最后一句停留，由结算浮层接管）
  const pb = useStoryPlayback(scenes, () => {});
  const currentScene = pb.current;
  const isLastScene = pb.isLast;

  // 向后扫描：当前背景（继承）
  const getCurrentBg = (idx: number): string => {
    let bg = '碎片化记忆中枢';
    for (let i = 0; i <= idx; i++) {
      if (scenes[i].bg) bg = scenes[i].bg!;
    }
    return bg;
  };

  // 向后扫描：当前派蒙立绘状态（继承）
  const getCurrentPaimonState = (idx: number): string => {
    let st = '认真';
    for (let i = 0; i <= idx; i++) {
      if (scenes[i].state) st = scenes[i].state!;
    }
    return st;
  };

  const bgPath = getSceneAssetPath(getCurrentBg(pb.index));
  const paimonPath = getCharacterAssetPath('派蒙', getCurrentPaimonState(pb.index));
  const showPaimon = currentScene?.speaker === '派蒙';

  const handleSkip = () => {
    dispatch({ type: 'SET_PHASE', payload: 'endingPage' });
  };

  // 研究员无独立立绘，复用 medical 组白大褂立绘做头像
  const getSpeakerAvatar = (speaker: string) => {
    if (speaker === '研究员A') return getCharacterAssetPath('社区医生', '专业');
    if (speaker === '研究员B') return getCharacterAssetPath('药店店员', '友善');
    if (speaker === '研究员C') return getCharacterAssetPath('乳腺科医生（专家）', '专业');
    if (speaker === '研究员D') return getCharacterAssetPath('营养师', '专业');
    return undefined;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-900/80 to-pink-950 relative overflow-hidden"
      onClick={pb.handleScreenClick}
    >
      {/* 背景场景 */}
      {bgPath && (
        <img src={bgPath} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      {/* 上下压暗蒙层：保证顶部标题与底部对话框可读 */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-pink-950/10 to-black/35" />

      {/* 派蒙立绘（半身像，右侧站立、下缘藏入对话框后） */}
      {showPaimon && paimonPath && (
        <img
          src={paimonPath}
          alt="派蒙"
          className="absolute bottom-24 right-2 z-10 h-[50%] max-h-[420px] object-contain drop-shadow-2xl md:right-6"
        />
      )}

      {/* 标题区域 */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-4xl mb-2 drop-shadow-md">🔬</div>
        <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">未来 · 治疗的可能</h1>
        <p className="text-white/80 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">三阴性乳腺癌工程研发联动剧情</p>
      </div>

      {/* 复古像素快捷控制栏：跳过科普 / 回退 / AUTO / SKIP / HIDE / LOG */}
      <StoryControlBar
        className={pb.hiddenUiClass}
        extra={
          <button
            className="flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-2.5 py-1 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all select-none hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
            onClick={(e) => { e.stopPropagation(); handleSkip(); }}
          >
            <SkipForward className="h-3.5 w-3.5" />
            跳过科普
          </button>
        }
        canBack={pb.index > 0}
        onBack={pb.back}
        isAuto={pb.isAuto}
        onToggleAuto={pb.toggleAuto}
        onSkip={pb.skip}
        onHide={pb.hideUi}
        onShowLog={() => pb.setShowLog(true)}
      />

      {/* 对话框 - GALGAME 经典布局（打字机渲染） */}
      <div className={`absolute bottom-16 left-4 right-4 z-20 ${pb.hiddenUiClass}`}>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          {/* 角色名和头像 */}
          {currentScene?.speaker && (
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-lg bg-pink-400/30">
                {currentScene.speaker === '派蒙' && paimonPath ? (
                  <img src={paimonPath} alt="派蒙" className="h-full w-full object-cover" />
                ) : getSpeakerAvatar(currentScene.speaker) ? (
                  <img src={getSpeakerAvatar(currentScene.speaker)!} alt={currentScene.speaker} className="h-full w-full object-cover" />
                ) : (
                  <span>📖</span>
                )}
              </div>
              <span className="text-pink-300 font-medium">{currentScene.speaker}</span>
            </div>
          )}

          {/* 对话内容 */}
          <p className={`text-white text-lg leading-relaxed ${
            currentScene?.speaker === '旁白' ? 'text-gray-300' : ''
          }`}>
            {pb.displayed}
          </p>

          {/* 进度指示器 */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
            <span className="text-white/50 text-xs">
              {pb.index + 1} / {scenes.length}
            </span>
            {!isLastScene && (
              <span className="text-white/50 text-xs animate-pulse">点击继续 →</span>
            )}
          </div>
        </div>
      </div>

      {/* 历史台词抽屉 */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* 剧情结束 - 进入结尾页 */}
      {isLastScene && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold text-white mb-2">工程研发之旅结束</h2>
            <p className="text-white/70 mb-6">
              从靶点筛选到广谱平台，三阴性乳腺癌的治疗路径已在你眼前展开。
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                onClick={handleSkip}
              >
                进入结尾页
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
