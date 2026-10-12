import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check, Lock, Sparkles, RotateCcw, Package } from 'lucide-react';
import type { Perspective } from '@/types';
import { useState } from 'react';
import { getMemoryStory } from '@/data/stories';
import { SheepSpeech } from '@/components/SheepBubble';
import { assetUrl } from '@/data/assetUrls';
import { getSkillById } from '@/data/skills';

const MEMORY_META: Record<Perspective, Array<{
  titleZh: string;
  titleEn: string;
  descZh: string;
  descEn: string;
  color: string;
}>> = {
  child: [
    { titleZh: '任性粘人·拖累妈妈', titleEn: 'Willful Clinginess, Exhausting Mom', descZh: '7岁冬夜缠着妈妈陪玩到深夜', descEn: 'Winter night at age 7: keeping Mom up playing late into the night', color: 'bg-amber-100 border-amber-300' },
    { titleZh: '熬夜学习·让妈妈牵挂', titleEn: 'Late-Night Study, Mom\'s Concern', descZh: '9岁期中考试前偷偷熬夜复习', descEn: 'Before midterms at age 9: secretly cramming into the early hours', color: 'bg-blue-100 border-blue-300' },
    { titleZh: '无知嘲笑·健康盲区', titleEn: 'Ignorant Mockery, Health Blindspot', descZh: '看见妈妈身体变化随口嘲笑', descEn: 'Seeing changes in Mom\'s body and carelessly uttering hurtful words', color: 'bg-purple-100 border-purple-300' }
  ],
  adult: [
    { titleZh: '职场酒局·被迫饮酒', titleEn: 'Forced Drinking at Work Dinners', descZh: '为了项目不得不参加的应酬', descEn: 'Compelled to drink heavily during business banquets for project quotas', color: 'bg-red-100 border-red-300' },
    { titleZh: '熬夜赶项目·透支身体', titleEn: 'Endless All-Nighters, Health Overdraft', descZh: '连续加班赶进度，内分泌紊乱', descEn: 'Continuous late-night overtime, disrupting hormone & endocrine balance', color: 'bg-orange-100 border-orange-300' },
    { titleZh: '滥用减肥药·盲目跟风', titleEn: 'Abusing Diet Pills & Supplements', descZh: '服用三无减肥药导致激素失衡', descEn: 'Blindly consuming unverified trend diet pills, triggering hormonal chaos', color: 'bg-pink-100 border-pink-300' }
  ],
  elder: [
    { titleZh: '隐瞒病情·怕添麻烦', titleEn: 'Hiding Symptoms, Fear of Burdening Kin', descZh: '发现乳房硬块却独自硬扛不告诉子女', descEn: 'Discovered a hard breast lump but endured silently without telling family', color: 'bg-teal-100 border-teal-300' },
    { titleZh: '忽视体检·拖延逃避', titleEn: 'Neglecting Checkups, Procrastinating Care', descZh: '把体检当成瞎折腾，忽视早期信号', descEn: 'Postponed breast exams despite children\'s urging, brushing off early signs', color: 'bg-cyan-100 border-cyan-300' },
    { titleZh: '迷信偏方·延误治疗', titleEn: 'Blind Faith in Folk Remedies, Delayed Therapy', descZh: '轻信民间偏方，不肯接受正规治疗', descEn: 'Distrusted clinical medicine, turning to hearsay herbal remedies instead', color: 'bg-indigo-100 border-indigo-300' }
  ]
};

const INITIAL_SKILL_IDS = ['cellRepair', 'hormoneBalance', 'immuneBoost', 'detox'];

export default function MemoryCenter() {
  const { state, dispatch, equipSkill, openExitMenu } = useGame();
  const isZh = state.language === 'zh';
  const perspective = state.currentPerspective!;

  const memories = [1, 2, 3].map((mp) => {
    const story = getMemoryStory(perspective, mp, state.language);
    const meta = MEMORY_META[perspective][mp - 1];
    return {
      title: isZh ? meta?.titleZh || story.title : meta?.titleEn || story.title,
      description: isZh ? meta?.descZh || story.description : meta?.descEn || story.description,
      color: meta?.color || 'bg-white border-gray-200'
    };
  });
  
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  const [showSkillLibrary, setShowSkillLibrary] = useState(false);

  const getMemoryStatus = (index: number) => {
    const result = state.perspectivesData[perspective].memories[index + 1] ?? null;
    
    if (state.playthrough === 2) {
      if (result === 'HE') return { status: 'completed', label: isZh ? 'HE已通关 (可重玩)' : 'HE Cleared (Replayable)', color: 'text-green-600 bg-green-100', canReplay: true };
      if (result === 'BE') return { status: 'failed', label: isZh ? 'BE已通关 (可重玩)' : 'BE Cleared (Replayable)', color: 'text-red-600 bg-red-100', canReplay: true };
      return { status: 'unlocked', label: isZh ? '可挑战' : 'Available', color: 'text-blue-600 bg-blue-100', canReplay: true };
    }
    
    if (result === 'HE') return { status: 'completed', label: isZh ? 'HE已通关 (已锁定)' : 'HE Cleared (Locked)', color: 'text-green-600 bg-green-100', canReplay: false };
    if (result === 'BE') return { status: 'failed', label: isZh ? 'BE已通关 (已锁定)' : 'BE Cleared (Locked)', color: 'text-red-600 bg-red-100', canReplay: false };
    
    if (index === 0) return { status: 'unlocked', label: isZh ? '可挑战' : 'Available', color: 'text-blue-600 bg-blue-100', canReplay: true };
    
    const prevResult = state.perspectivesData[perspective].memories[index] ?? null;
    if (prevResult) return { status: 'unlocked', label: isZh ? '可挑战' : 'Available', color: 'text-blue-600 bg-blue-100', canReplay: true };
    
    return { status: 'locked', label: isZh ? '未解锁' : 'Locked', color: 'text-gray-400 bg-gray-100', canReplay: false };
  };

  const handleEnterMemory = (index: number) => {
    const status = getMemoryStatus(index);
    if (status.status === 'locked') return;
    if (!status.canReplay && (status.status === 'completed' || status.status === 'failed')) return;
    
    dispatch({ type: 'SET_MEMORY_POINT', payload: index + 1 });
    dispatch({ type: 'SET_PHASE', payload: 'visualNovel' });
  };

  const handleDragStart = (skillId: string) => {
    setDraggedSkill(skillId);
  };

  const handleDragEnd = () => {
    setDraggedSkill(null);
    setDragOverSlot(null);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverSlot(index);
  };

  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedSkill) return;
    
    const targetSkill = state.equippedSkills[targetIndex];
    const sourceIndex = state.equippedSkills.indexOf(draggedSkill);
    if (sourceIndex !== -1) {
      const newEquipped = [...state.equippedSkills];
      newEquipped[sourceIndex] = targetSkill;
      newEquipped[targetIndex] = draggedSkill;
      dispatch({ type: 'EQUIP_SKILL', payload: { newSkill: draggedSkill, oldSkill: targetSkill } });
      dispatch({ 
        type: 'SET_EQUIPPED_SKILLS', 
        payload: newEquipped 
      });
    } else {
      equipSkill(draggedSkill, targetSkill);
    }
    
    setDraggedSkill(null);
    setDragOverSlot(null);
  };

  const handleSkillClick = (skillId: string) => {
    if (!draggedSkill && INITIAL_SKILL_IDS.includes(skillId)) {
      setDraggedSkill(skillId);
    } else if (draggedSkill) {
      const targetIndex = state.equippedSkills.indexOf(skillId);
      if (targetIndex !== -1) {
        const targetSkill = state.equippedSkills[targetIndex];
        equipSkill(draggedSkill, targetSkill);
      }
      setDraggedSkill(null);
    }
  };

  const isInitialSkill = (skillId: string) => INITIAL_SKILL_IDS.includes(skillId);

  const getSkillIcon = (skillId: string) => {
    if (skillId === 'cellRepair') return '🔧';
    if (skillId === 'hormoneBalance') return '⚖️';
    if (skillId === 'immuneBoost') return '🛡️';
    if (skillId === 'detox') return '💧';
    return '✨';
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-indigo-50 to-purple-50 p-4">
      <img src={assetUrl('assets/ui/memory-bg.jpg')} alt="" className="absolute inset-0 h-full w-full object-cover" />
      
      {/* 返回按钮 */}
      <Button
        variant="ghost"
        className="absolute top-4 left-4 z-30 text-indigo-100 hover:bg-white/10"
        onClick={() => dispatch({ type: 'SET_PHASE', payload: 'microWorldMain' })}
      >
        <ArrowLeft className="w-5 h-5 mr-1" />
        {isZh ? '返回主城' : 'Return to Citadel'}
      </Button>

      {/* 退出菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 right-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-indigo-300/40 bg-black/40 px-3 py-1.5 text-xs font-bold text-indigo-100 shadow-[0_2px_0_rgba(0,0,0,0.5)] transition-all hover:bg-black/60 active:translate-y-0.5 active:shadow-none"
        title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
      >
        <span className="text-pink-400 font-black">✕</span>
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      {/* 内容区域 */}
      <div className="relative z-20 pb-32">
        {/* 标题 */}
        <div className="text-center pt-16 pb-8">
          <h2 className="text-2xl font-bold text-indigo-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">
            {isZh ? '大脑记忆中枢' : 'Brain Memory Center'}
          </h2>
          <p className="text-sm text-indigo-200/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
            {state.playthrough === 1
              ? (isZh ? '一周目 · 记忆点通关后锁定' : 'Playthrough 1 · Memory Points locked after completion')
              : (isZh ? '二周目 · 时光回溯已开启' : 'Playthrough 2 · Time Travel Unlocked')}
          </p>
        </div>

        {/* 记忆点卡片 */}
        <div className="max-w-lg mx-auto space-y-4">
          {memories.map((memory, index) => {
            const status = getMemoryStatus(index);
            const isClickable = status.status !== 'locked' && status.canReplay;

            return (
              <Card
                key={index}
                className={`${memory.color} ${isClickable ? 'cursor-pointer hover:shadow-lg' : 'opacity-70'} 
                  transition-all hover:scale-[1.01]`}
                onClick={() => handleEnterMemory(index)}
              >
                <CardContent className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${status.color}`}>
                      {status.status === 'completed' && <Check className="w-5 h-5" />}
                      {status.status === 'failed' && <Sparkles className="w-5 h-5" />}
                      {status.status === 'unlocked' && <span className="text-lg">{index + 1}</span>}
                      {status.status === 'locked' && <Lock className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-800">{memory.title}</h3>
                      <p className="text-xs text-gray-600">{memory.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {state.playthrough === 2 && (status.status === 'completed' || status.status === 'failed') && (
                      <RotateCcw className="w-4 h-4 text-amber-500" />
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* 已装备技能区 */}
        <div className="max-w-lg mx-auto mt-8 p-4 bg-white/70 rounded-xl">
          <div className="flex items-center justify-between mb-3">
            <h3 className="font-bold text-gray-700">{isZh ? '已装备技能' : 'Equipped Skills'}</h3>
            {state.playthrough === 2 && (
              <Button
                variant="ghost"
                size="sm"
                className="text-indigo-600"
                onClick={() => setShowSkillLibrary(!showSkillLibrary)}
              >
                <Package className="w-4 h-4 mr-1" />
                {showSkillLibrary
                  ? (isZh ? '收起技能库' : 'Collapse Skill Vault')
                  : (isZh ? '打开技能库' : 'Open Skill Vault')}
              </Button>
            )}
          </div>
          
          {/* 技能槽 */}
          <div className="grid grid-cols-2 gap-3">
            {state.equippedSkills.map((skillId, index) => {
              const skill = getSkillById(skillId, state.language);
              return (
                <div
                  key={index}
                  className={`relative p-3 rounded-xl border-2 transition-all ${
                    dragOverSlot === index
                      ? 'border-indigo-500 bg-indigo-50 scale-105'
                      : draggedSkill && !isInitialSkill(skillId)
                      ? 'border-dashed border-gray-300 bg-gray-50'
                      : 'border-gray-200 bg-white'
                  } ${state.playthrough === 2 ? 'cursor-pointer' : ''}`}
                  onDragOver={(e) => state.playthrough === 2 && handleDragOver(e, index)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => state.playthrough === 2 && handleDrop(e, index)}
                  onClick={() => state.playthrough === 2 && handleSkillClick(skillId)}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getSkillIcon(skillId)}</span>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-gray-800 text-sm truncate">
                        {skill?.name || skillId}
                      </p>
                      <p className="text-xs text-gray-500 truncate">
                        {skill?.description || (isZh ? '记忆点技能' : 'Memory Point Skill')}
                      </p>
                    </div>
                  </div>
                  {draggedSkill && dragOverSlot === index && (
                    <div className="absolute inset-0 flex items-center justify-center bg-indigo-100/80 rounded-xl">
                      <span className="text-indigo-600 font-medium text-sm">{isZh ? '替换' : 'Replace'}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 二周目技能库 */}
        {state.playthrough === 2 && showSkillLibrary && (
          <div className="max-w-lg mx-auto mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200">
            <div className="flex items-center gap-2 mb-3">
              <Package className="w-5 h-5 text-amber-600" />
              <h3 className="font-bold text-amber-800">{isZh ? '技能库' : 'Skill Vault'}</h3>
              <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
                {isZh ? '拖拽替换' : 'Drag to Replace'}
              </span>
            </div>
            
            <p className="text-xs text-amber-700 mb-3">
              {isZh
                ? '将下方技能拖拽到上方技能槽，或点击技能后点击目标位置进行替换'
                : 'Drag a skill below to an equipped slot above, or click a skill then click a target slot to replace.'}
            </p>
            
            <div className="grid grid-cols-2 gap-3">
              {INITIAL_SKILL_IDS.map((skillId) => {
                const skill = getSkillById(skillId, state.language);
                return (
                  <div
                    key={skillId}
                    draggable
                    className={`p-3 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all ${
                      draggedSkill === skillId
                        ? 'border-amber-500 bg-amber-100 scale-105 shadow-lg'
                        : 'border-amber-200 bg-white hover:border-amber-400 hover:shadow-md'
                    }`}
                    onDragStart={() => handleDragStart(skillId)}
                    onDragEnd={handleDragEnd}
                    onClick={() => handleSkillClick(skillId)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{getSkillIcon(skillId)}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-gray-800 text-sm truncate">
                          {skill?.name || skillId}
                        </p>
                        <p className="text-xs text-gray-500 truncate">
                          {skill?.description || ''}
                        </p>
                      </div>
                    </div>
                    {draggedSkill === skillId && (
                      <div className="mt-2 text-center">
                        <span className="text-xs text-amber-600">
                          {isZh ? '已选中，点击目标位置替换' : 'Selected. Click target slot to replace.'}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* 说明 */}
        <div className="max-w-lg mx-auto mt-6 p-4 bg-indigo-50 rounded-lg">
          <p className="text-xs text-indigo-700">
            <strong>{isZh ? '提示：' : 'Tip: '}</strong>
            {state.playthrough === 1 
              ? (isZh
                  ? '一周目：通关记忆点可解锁对应BOSS挑战。HE结局获得正向技能，BE结局获得负面技能。记忆点通关后锁定，不可重玩。'
                  : 'Playthrough 1: Clearing Memory Points unlocks corresponding BOSS encounters. HE outcomes grant positive skills; BE outcomes grant negative skills. Memory Points are locked once cleared.')
              : (isZh
                  ? '二周目：时光回溯已开启，所有记忆点均可无限重玩，HE/BE都能反复选择。打开技能库可自由替换初始技能。'
                  : 'Playthrough 2: Time Travel unlocked. All Memory Points are freely replayable with HE/BE choice exploration. Open the Skill Vault to swap initial skills.')}
          </p>
        </div>

      </div>

      {/* 独立景观台 */}
      <div className="absolute bottom-0 right-0 z-20 pointer-events-none flex flex-col items-end">
        <SheepSpeech className="mb-2 mr-6" bubbleClassName="max-w-xs" />
        <img
          src={assetUrl('assets/ui/foreground-2.png')}
          alt="Stage Platform"
          className="w-[380px] h-auto max-w-[88vw] object-contain md:w-[460px]"
          draggable={false}
        />
      </div>
    </div>
  );
}
