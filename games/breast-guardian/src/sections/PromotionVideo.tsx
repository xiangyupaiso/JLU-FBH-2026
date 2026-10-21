import { useGame } from '@/hooks/gameContext';
import { Button } from '@/components/ui/button';
import { SkipForward } from 'lucide-react';
import { getSceneAssetPath, getCharacterAssetPath } from '@/data/assets';
import { StoryControlBar, StoryLogDrawer } from '@/components/storyControls';
import { useStoryPlayback } from '@/hooks/useStoryPlayback';

// Promotion scene type definition
interface PromoScene {
  bg?: string; // Scene switch (inherits previous if omitted)
  speaker: string;
  text: string;
  state?: string; // Paimon portrait mood (inherits previous if omitted)
}

// Triple-negative breast cancer synthetic biology R&D narrative - Visual Novel mode
export default function PromotionVideo() {
  const { state, dispatch } = useGame();
  const isZh = state.language === 'zh';

  const scenesZh: PromoScene[] = [
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

  const scenesEn: PromoScene[] = [
    { bg: '碎片化记忆中枢', speaker: 'Narrator', text: 'Familiar neural halos drift gently around you; the lingering warmth of memories has yet to fully dissipate.' },
    { speaker: 'Paimon', state: '认真', text: 'You have just walked this passage of life, fulfilling the guardianship that belongs to this chapter.' },
    { speaker: 'Paimon', state: '温柔', text: 'In truth, challenges to breast health are scattered across every phase of life.' },
    { speaker: 'Paimon', text: 'Concern for family in childhood, mindful self-care in adulthood, courage facing illness in elderhood... each is an essential part of guardianship.' },
    { speaker: 'Paimon', text: 'Right now, your memories resonate softly with the other two phases of life.' },
    { speaker: 'Paimon', text: 'And all present acts of care ultimately point in one unified direction: toward the future, and greater therapeutic possibilities.' },
    { speaker: 'Paimon', text: 'Look! These shimmering lights are fragments of future memories resonating with this very moment.' },
    { speaker: 'Paimon', text: 'Connected together, they trace the precise path researchers are charting to solve triple-negative breast cancer.' },
    { bg: '生信筛选研究像素背景图', speaker: 'Researcher A', text: 'First, through extensive literature mining and bioinformatics screening, we identified multiple highly expressed, tumor-specific antigenic epitopes on the surface of triple-negative breast cancer cells.' },
    { speaker: 'Researcher A', text: 'Subsequent bioinformatics validation confirmed that these antigens can be efficiently recognized, processed, and presented by host immune cells, serving as key breakthroughs for targeted immunotherapy.' },
    { bg: '环状 RNA 载体像素背景图', speaker: 'Researcher B', text: 'Having identified targets, we required a stable and reliable delivery vehicle. For this, we chose circular RNA (circRNA) as an innovative platform.' },
    { speaker: 'Researcher B', text: 'Departing from conventional single-target constructs, we engineered a plug-and-play modular multi-epitope platform capable of co-delivering multiple antigens simultaneously.' },
    { bg: '免疫通路像素背景图', speaker: 'Researcher C', text: 'Unlike linear mRNA, circular RNA possesses a covalently closed loop with superior structural stability, enabling sustained expression of tumor antigens in vivo.' },
    { speaker: 'Researcher C', text: 'Sustained antigen expression robustly activates dendritic cells, which in turn prime cytotoxic CD8+ T cells to trigger potent antitumor immune responses.' },
    { bg: '多癌种拓展平台像素背景图', speaker: 'Researcher D', text: 'The value of this plug-and-play modular platform extends far beyond triple-negative breast cancer.' },
    { speaker: 'Researcher D', text: 'By simply interchanging target cassettes, we can formulate tailored personalized vaccines against diverse solid tumors, helping patients prevent recurrence and reclaim renewed hope in life.' },
    { bg: '激活的碎片化记忆中枢', speaker: 'Paimon', state: '雀跃', text: 'Wow! The gears of synthetic engineering have begun turning!' },
    { speaker: 'Paimon', state: '认真', text: 'From target screening and vector construction to immune mechanism validation and broad-spectrum platform expansion, a complete translational engineering cycle has taken shape!' },
    { speaker: 'Paimon', state: '温柔', text: 'Today, you safeguard your health in the present.' },
    { speaker: 'Paimon', text: 'In the future, we aspire to safeguard every patient, granting them the chance to embrace life anew.' },
    { speaker: 'Paimon', state: '期待', text: 'Guardianship always begins with understanding.' },
    { speaker: 'Paimon', text: 'If you would like, please share your thoughts by filling out the feedback survey at the end.' },
    { speaker: 'Paimon', text: 'Every insight you provide makes this mission of guardianship more complete.' },
    { speaker: 'Paimon', state: '欣慰', text: 'Click "Return to Main Menu" to return to the beginning.' },
    { speaker: 'Paimon', text: 'Perhaps on the next leg of our guardian journey, we shall meet again.' }
  ];

  const scenes = isZh ? scenesZh : scenesEn;

  // Story playback engine
  const pb = useStoryPlayback(scenes, () => {});
  const currentScene = pb.current;
  const isLastScene = pb.isLast;

  const getCurrentBg = (idx: number): string => {
    let bg = '碎片化记忆中枢';
    for (let i = 0; i <= idx; i++) {
      if (scenes[i].bg) bg = scenes[i].bg!;
    }
    return bg;
  };

  const getCurrentPaimonState = (idx: number): string => {
    let st = '认真';
    for (let i = 0; i <= idx; i++) {
      if (scenes[i].state) st = scenes[i].state!;
    }
    return st;
  };

  const bgPath = getSceneAssetPath(getCurrentBg(pb.index));
  const paimonPath = getCharacterAssetPath('派蒙', getCurrentPaimonState(pb.index));
  const showPaimon = currentScene?.speaker === 'Paimon' || currentScene?.speaker === '派蒙';

  const handleSkip = () => {
    dispatch({ type: 'SET_PHASE', payload: 'endingPage' });
  };

  const getSpeakerAvatar = (speaker: string) => {
    if (speaker === 'Researcher A' || speaker === '研究员A') return getCharacterAssetPath('社区医生', '专业');
    if (speaker === 'Researcher B' || speaker === '研究员B') return getCharacterAssetPath('药店店员', '友善');
    if (speaker === 'Researcher C' || speaker === '研究员C') return getCharacterAssetPath('乳腺科医生（专家）', '专业');
    if (speaker === 'Researcher D' || speaker === '研究员D') return getCharacterAssetPath('营养师', '专业');
    return undefined;
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-b from-pink-900/80 to-pink-950 relative overflow-hidden"
      onClick={pb.handleScreenClick}
    >
      {/* Background image */}
      {bgPath && (
        <img src={bgPath} alt="" className="absolute inset-0 h-full w-full object-cover" />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-pink-950/10 to-black/35" />

      {/* Paimon sprite */}
      {showPaimon && paimonPath && (
        <img
          src={paimonPath}
          alt="Paimon"
          className="absolute bottom-24 right-2 z-10 h-[50%] max-h-[420px] object-contain drop-shadow-2xl md:right-6"
        />
      )}

      {/* Header title */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-4xl mb-2 drop-shadow-md">🔬</div>
        <h1 className="text-2xl font-bold text-white mb-1 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
          {isZh ? '向未来 · 探寻更多治疗可能' : 'The Future · Therapeutic Possibilities'}
        </h1>
        <p className="text-white/80 text-sm drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
          {isZh
            ? '三阴性乳腺癌合成生物学工程研发联动'
            : 'Triple-Negative Breast Cancer Synthetic Biology R&D Narrative'}
        </p>
      </div>

      {/* Retro Pixel Controls */}
      <StoryControlBar
        className={pb.hiddenUiClass}
        extra={
          <button
            className="flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-2.5 py-1 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all select-none hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
            onClick={(e) => { e.stopPropagation(); handleSkip(); }}
          >
            <SkipForward className="h-3.5 w-3.5" />
            {isZh ? '跳过宣讲' : 'Skip Epilogue'}
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

      {/* Dialog box */}
      <div className={`absolute bottom-16 left-4 right-4 z-20 ${pb.hiddenUiClass}`}>
        <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          {/* Speaker and avatar */}
          {currentScene?.speaker && (
            <div className="flex items-center gap-2 mb-2">
              <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center text-lg bg-pink-400/30">
                {(currentScene.speaker === 'Paimon' || currentScene.speaker === '派蒙') && paimonPath ? (
                  <img src={paimonPath} alt="Paimon" className="h-full w-full object-cover" />
                ) : getSpeakerAvatar(currentScene.speaker) ? (
                  <img src={getSpeakerAvatar(currentScene.speaker)!} alt={currentScene.speaker} className="h-full w-full object-cover" />
                ) : (
                  <span>📖</span>
                )}
              </div>
              <span className="text-pink-300 font-medium">{currentScene.speaker}</span>
            </div>
          )}

          {/* Dialog text */}
          <p className={`text-white text-lg leading-relaxed ${
            currentScene?.speaker === 'Narrator' || currentScene?.speaker === '旁白' ? 'text-gray-300' : ''
          }`}>
            {pb.displayed}
          </p>

          {/* Progress */}
          <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10">
            <span className="text-white/50 text-xs">
              {pb.index + 1} / {scenes.length}
            </span>
            {!isLastScene && (
              <span className="text-white/50 text-xs animate-pulse">
                {isZh ? '点击继续 →' : 'Click to continue →'}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Story log drawer */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* Completion Modal */}
      {isLastScene && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-40"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🔬</div>
            <h2 className="text-2xl font-bold text-white mb-2">
              {isZh ? '工程研发宣讲体验完成' : 'Synthetic Engineering Journey Concluded'}
            </h2>
            <p className="text-white/70 mb-6">
              {isZh
                ? '从靶点筛选到广谱平台拓展，三阴性乳腺癌的破局之路已展现在你面前。'
                : 'From target screening to broad-spectrum platforms, the therapeutic trajectory for TNBC has unfolded before you.'}
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                onClick={handleSkip}
              >
                {isZh ? '前往最终尾页' : 'Proceed to Finale'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
