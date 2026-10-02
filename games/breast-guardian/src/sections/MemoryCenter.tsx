import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Check, Lock, Sparkles, RotateCcw, Package } from 'lucide-react';
import type { Perspective } from '@/types';
import { useState } from 'react';
import { MEMORY_STORIES } from '@/data/stories';
import { SheepSpeech } from '@/components/SheepBubble';
import { assetUrl } from '@/data/assetUrls';

const MEMORY_DATA: Record<Perspective, Array<{
  title: string;
  description: string;
  color: string;
}>> = {
  child: [
    { title: '任性粘人，熬妈陪伴', description: '7岁那年冬夜，缠着妈妈玩到深夜', color: 'bg-amber-100 border-amber-300' },
    { title: '熬夜学习，让妈牵挂', description: '9岁期中考试前，偷偷刷题到凌晨', color: 'bg-blue-100 border-blue-300' },
    { title: '无知嘲笑，健康认知缺失', description: '看到妈妈乳房变化，随口说出伤人的话', color: 'bg-purple-100 border-purple-300' }
  ],
  adult: [
    { title: '职场酒局的被迫应酬', description: '为了项目被迫参加酒局，喝了太多酒', color: 'bg-red-100 border-red-300' },
    { title: '熬夜赶项目的健康透支', description: '为白衣计划连续熬夜，内分泌彻底紊乱', color: 'bg-orange-100 border-orange-300' },
    { title: '私自滥用减肥药与保健品', description: '盲目跟风吃网红减肥药，体内激素爆炸', color: 'bg-pink-100 border-pink-300' }
  ],
  elder: [
    { title: '隐瞒病情，怕连累子女', description: '发现乳房硬块却偷偷忍着，瞒着不说', color: 'bg-teal-100 border-teal-300' },
    { title: '忽视体检，拖延乳腺隐患', description: '儿女催做体检却一拖再拖，忽视小不适', color: 'bg-cyan-100 border-cyan-300' },
    { title: '盲目听信偏方，延误治疗', description: '不信正规医院，听信街坊的民间偏方', color: 'bg-indigo-100 border-indigo-300' }
  ]
};

// 技能名称映射
const SKILL_NAME_MAP: Record<string, string> = {
  cellRepair: '细胞修复术',
  hormoneBalance: '激素平衡',
  immuneBoost: '免疫强化',
  detox: '毒素净化',
  accompanyCare: '陪伴关怀',
  willfulClingy: '任性粘人',
  reasonableSchedule: '合理安排',
  stubbornStudy: '固执熬夜',
  warmComfort: '温暖安慰',
  ignorantMockery: '无知嘲笑',
  refuseAlcohol: '拒绝酒精',
  forcedDrinking: '被迫饮酒',
  adequateSleep: '充足睡眠',
  stayUpLate: '熬夜透支',
  rationalMedication: '理性用药',
  abuseDrugs: '滥用药物',
  timelyMedical: '及时就医',
  hideIllness: '隐瞒病情',
  regularCheckup: '定期体检',
  delayCheckup: '拖延体检',
  scientificTreatment: '科学治疗',
  folkRemedy: '迷信偏方'
};

// 技能描述映射
const SKILL_DESC_MAP: Record<string, string> = {
  cellRepair: '修复受损的乳腺细胞',
  hormoneBalance: '调节内分泌，维持激素稳定',
  immuneBoost: '增强免疫系统，提高抵抗力',
  detox: '清除体内毒素，净化乳腺环境'
};

// 初始技能列表
const INITIAL_SKILLS = ['cellRepair', 'hormoneBalance', 'immuneBoost', 'detox'];

export default function MemoryCenter() {
  const { state, dispatch, equipSkill } = useGame();
  const perspective = state.currentPerspective!;
  const memories = Object.values(MEMORY_STORIES[perspective]).map((story) => ({
    title: story.title,
    description: story.description,
    color: MEMORY_DATA[perspective][story.id - 1]?.color || 'bg-white border-gray-200'
  }));
  
  // 拖拽状态
  const [draggedSkill, setDraggedSkill] = useState<string | null>(null);
  const [dragOverSlot, setDragOverSlot] = useState<number | null>(null);
  const [showSkillLibrary, setShowSkillLibrary] = useState(false);

  const getMemoryStatus = (index: number) => {
    const result = state.perspectivesData[perspective].memories[index + 1] ?? null;
    
    // 二周目：全部解锁，可无限重玩
    if (state.playthrough === 2) {
      if (result === 'HE') return { status: 'completed', label: 'HE通关(可重玩)', color: 'text-green-600 bg-green-100', canReplay: true };
      if (result === 'BE') return { status: 'failed', label: 'BE通关(可重玩)', color: 'text-red-600 bg-red-100', canReplay: true };
      return { status: 'unlocked', label: '可进入', color: 'text-blue-600 bg-blue-100', canReplay: true };
    }
    
    // 一周目：通关后锁定
    if (result === 'HE') return { status: 'completed', label: 'HE通关(已锁定)', color: 'text-green-600 bg-green-100', canReplay: false };
    if (result === 'BE') return { status: 'failed', label: 'BE通关(已锁定)', color: 'text-red-600 bg-red-100', canReplay: false };
    
    // 检查是否解锁
    if (index === 0) return { status: 'unlocked', label: '可进入', color: 'text-blue-600 bg-blue-100', canReplay: true };
    
    const prevResult = state.perspectivesData[perspective].memories[index] ?? null;
    if (prevResult) return { status: 'unlocked', label: '可进入', color: 'text-blue-600 bg-blue-100', canReplay: true };
    
    return { status: 'locked', label: '未解锁', color: 'text-gray-400 bg-gray-100', canReplay: false };
  };

  const handleEnterMemory = (index: number) => {
    const status = getMemoryStatus(index);
    if (status.status === 'locked') return;
    if (!status.canReplay && (status.status === 'completed' || status.status === 'failed')) return;
    
    dispatch({ type: 'SET_MEMORY_POINT', payload: index + 1 });
    dispatch({ type: 'SET_PHASE', payload: 'visualNovel' });
  };

  // 处理拖拽开始
  const handleDragStart = (skillId: string) => {
    setDraggedSkill(skillId);
  };

  // 处理拖拽结束
  const handleDragEnd = () => {
    setDraggedSkill(null);
    setDragOverSlot(null);
  };

  // 处理拖拽经过技能槽
  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    setDragOverSlot(index);
  };

  // 处理拖拽离开技能槽
  const handleDragLeave = () => {
    setDragOverSlot(null);
  };

  // 处理放置到技能槽
  const handleDrop = (e: React.DragEvent, targetIndex: number) => {
    e.preventDefault();
    if (!draggedSkill) return;
    
    const targetSkill = state.equippedSkills[targetIndex];
    
    // 如果拖拽的技能已经在技能栏中，交换位置
    const sourceIndex = state.equippedSkills.indexOf(draggedSkill);
    if (sourceIndex !== -1) {
      // 交换两个技能的位置
      const newEquipped = [...state.equippedSkills];
      newEquipped[sourceIndex] = targetSkill;
      newEquipped[targetIndex] = draggedSkill;
      dispatch({ type: 'EQUIP_SKILL', payload: { newSkill: draggedSkill, oldSkill: targetSkill } });
      // 需要特殊处理交换逻辑，这里简化处理为直接替换
      dispatch({ 
        type: 'SET_EQUIPPED_SKILLS', 
        payload: newEquipped 
      });
    } else {
      // 从技能库拖拽新技能替换
      equipSkill(draggedSkill, targetSkill);
    }
    
    setDraggedSkill(null);
    setDragOverSlot(null);
  };

  // 处理点击替换（移动端/无拖拽支持）
  const handleSkillClick = (skillId: string) => {
    if (!draggedSkill && INITIAL_SKILLS.includes(skillId)) {
      // 点击技能库中的技能，进入选择模式
      setDraggedSkill(skillId);
    } else if (draggedSkill) {
      // 已经有选中的技能，点击目标位置进行替换
      const targetIndex = state.equippedSkills.indexOf(skillId);
      if (targetIndex !== -1) {
        const targetSkill = state.equippedSkills[targetIndex];
        equipSkill(draggedSkill, targetSkill);
      }
      setDraggedSkill(null);
    }
  };

  // 判断技能是否是初始技能
  const isInitialSkill = (skillId: string) => INITIAL_SKILLS.includes(skillId);

  // 获取技能图标
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
        返回主城
      </Button>

      {/* 内容区（居中，z-20，pb-32 留出底部景观台安全距离） */}
      <div className="relative z-20 pb-32">
      {/* 标题 */}
      <div className="text-center pt-16 pb-8">
        <h2 className="text-2xl font-bold text-indigo-100 drop-shadow-[0_1px_4px_rgba(0,0,0,0.8)]">大脑记忆中枢</h2>
        <p className="text-sm text-indigo-200/80 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          {state.playthrough === 1 ? '一周目 · 记忆点通关后锁定' : '二周目 · 时光回溯已开启'}
        </p>
      </div>

      {/* 记忆点列表 */}
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
          <h3 className="font-bold text-gray-700">已装备技能</h3>
          {state.playthrough === 2 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-indigo-600"
              onClick={() => setShowSkillLibrary(!showSkillLibrary)}
            >
              <Package className="w-4 h-4 mr-1" />
              {showSkillLibrary ? '收起技能库' : '打开技能库'}
            </Button>
          )}
        </div>
        
        {/* 技能槽 */}
        <div className="grid grid-cols-2 gap-3">
          {state.equippedSkills.map((skillId, index) => (
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
                    {SKILL_NAME_MAP[skillId] || skillId}
                  </p>
                  <p className="text-xs text-gray-500 truncate">
                    {SKILL_DESC_MAP[skillId] || '记忆点技能'}
                  </p>
                </div>
              </div>
              {draggedSkill && dragOverSlot === index && (
                <div className="absolute inset-0 flex items-center justify-center bg-indigo-100/80 rounded-xl">
                  <span className="text-indigo-600 font-medium text-sm">替换</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 二周目技能库 */}
      {state.playthrough === 2 && showSkillLibrary && (
        <div className="max-w-lg mx-auto mt-4 p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border-2 border-amber-200">
          <div className="flex items-center gap-2 mb-3">
            <Package className="w-5 h-5 text-amber-600" />
            <h3 className="font-bold text-amber-800">技能库</h3>
            <span className="text-xs text-amber-600 bg-amber-100 px-2 py-0.5 rounded-full">
              拖拽替换
            </span>
          </div>
          
          <p className="text-xs text-amber-700 mb-3">
            将下方技能拖拽到上方技能槽，或点击技能后点击目标位置进行替换
          </p>
          
          <div className="grid grid-cols-2 gap-3">
            {INITIAL_SKILLS.map((skillId) => (
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
                      {SKILL_NAME_MAP[skillId]}
                    </p>
                    <p className="text-xs text-gray-500 truncate">
                      {SKILL_DESC_MAP[skillId]}
                    </p>
                  </div>
                </div>
                {draggedSkill === skillId && (
                  <div className="mt-2 text-center">
                    <span className="text-xs text-amber-600">已选中，点击目标位置替换</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* 说明 */}
      <div className="max-w-lg mx-auto mt-6 p-4 bg-indigo-50 rounded-lg">
        <p className="text-xs text-indigo-700">
          <strong>提示：</strong>
          {state.playthrough === 1 
            ? '一周目：通关记忆点可解锁对应BOSS挑战。HE结局获得正向技能，BE结局获得负面技能。记忆点通关后锁定，不可重玩。' 
            : '二周目：时光回溯已开启，所有记忆点均可无限重玩，HE/BE都能反复选择。打开技能库可自由替换初始技能。'}
        </p>
      </div>

      </div>

      {/* 右下角独立景观台（完整小岛，不裁剪：左小熊+咖啡+拐杖，右紫色细胞+小羊） */}
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
