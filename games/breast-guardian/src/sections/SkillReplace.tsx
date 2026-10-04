import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Sparkles, AlertTriangle, Lock } from 'lucide-react';
import { getSkillsByMemory } from '@/data/skills';

// 技能名称映射表（id -> 中文名）
const SKILL_NAME_MAP: Record<string, string> = {
  // 初始技能
  cellRepair: '细胞修复术',
  hormoneBalance: '激素平衡',
  immuneBoost: '免疫强化',
  detox: '毒素净化',
  // 幼年线技能
  accompanyCare: '陪伴关怀',
  willfulClingy: '任性粘人',
  reasonableSchedule: '合理安排',
  stubbornStudy: '固执熬夜',
  warmComfort: '温暖安慰',
  ignorantMockery: '无知嘲笑',
  // 青壮年线技能
  refuseAlcohol: '拒绝酒精',
  forcedDrinking: '被迫饮酒',
  adequateSleep: '充足睡眠',
  stayUpLate: '熬夜透支',
  rationalMedication: '理性用药',
  abuseDrugs: '滥用药物',
  // 老年线技能
  timelyMedical: '及时就医',
  hideIllness: '隐瞒病情',
  regularCheckup: '定期体检',
  delayCheckup: '拖延体检',
  scientificTreatment: '科学治疗',
  folkRemedy: '迷信偏方'
};

// 技能描述映射表
const SKILL_DESC_MAP: Record<string, string> = {
  cellRepair: '修复受损的乳腺细胞，恢复组织健康',
  hormoneBalance: '调节内分泌，维持激素稳定',
  immuneBoost: '增强免疫系统，提高抵抗力',
  detox: '清除体内毒素，净化乳腺环境',
  accompanyCare: '多陪伴妈妈，让她好好休息',
  willfulClingy: '缠着妈妈熬夜陪伴',
  reasonableSchedule: '合理规划时间，不让妈妈牵挂',
  stubbornStudy: '偷偷熬夜学习不让妈妈休息',
  warmComfort: '关心妈妈情绪，给她温暖支持',
  ignorantMockery: '随口说出伤害妈妈的话',
  refuseAlcohol: '远离酒精刺激，保护乳腺健康',
  forcedDrinking: '为了工作不得不喝酒',
  adequateSleep: '保持规律作息，维持内分泌稳定',
  stayUpLate: '为了项目连续熬夜',
  rationalMedication: '拒绝三无产品，科学管理身材',
  abuseDrugs: '盲目服用三无减肥药',
  timelyMedical: '发现异常立即就医，早发现早治疗',
  hideIllness: '独自硬扛，不告诉子女',
  regularCheckup: '按时进行乳腺检查，防患于未然',
  delayCheckup: '把体检当成瞎折腾',
  scientificTreatment: '相信专业医生，坚持正规治疗',
  folkRemedy: '听信民间偏方，延误正规治疗'
};

// 技能效果映射表
const SKILL_EFFECT_MAP: Record<string, string> = {
  cellRepair: '修复乳腺细胞损伤',
  hormoneBalance: '平衡雌激素水平',
  immuneBoost: '提升免疫细胞活性',
  detox: '清除有害物质',
  accompanyCare: '缓解妈妈疲劳，驱散BOSS黑雾',
  willfulClingy: '让妈妈劳累，BOSS黑雾强化',
  reasonableSchedule: '让妈妈安心，BOSS无法靠近',
  stubbornStudy: '让妈妈牵挂，BOSS黑雾蔓延',
  warmComfort: '驱散妈妈心结，BOSS彻底消散',
  ignorantMockery: '让妈妈伤心，BOSS彻底觉醒',
  refuseAlcohol: '减少激素紊乱，BOSS无法成型',
  forcedDrinking: '刺激乳腺组织，BOSS黑雾扩散',
  adequateSleep: '平衡激素水平，BOSS虚弱消散',
  stayUpLate: '内分泌紊乱，BOSS黑雾笼罩',
  rationalMedication: '避免激素风暴，BOSS无法存在',
  abuseDrugs: '激素风暴，BOSS彻底觉醒',
  timelyMedical: '消除早期病灶，BOSS被成功清除',
  hideIllness: '加重病情，BOSS彻底觉醒',
  regularCheckup: '预防疾病发生，BOSS被成功驱散',
  delayCheckup: '错失早期发现机会，BOSS黑雾蔓延',
  scientificTreatment: '阻断病情恶化，BOSS被成功驱散',
  folkRemedy: '病情恶化，BOSS彻底觉醒'
};

// 负面技能列表
const NEGATIVE_SKILLS = [
  'willfulClingy', 'stubbornStudy', 'ignorantMockery',
  'forcedDrinking', 'stayUpLate', 'abuseDrugs',
  'hideIllness', 'delayCheckup', 'folkRemedy'
];

export default function SkillReplace() {
  const { state, dispatch, equipSkill, unlockSkill } = useGame();
  const perspective = state.currentPerspective!;
  const memoryPoint = state.currentMemoryPoint;
  
  // 获取本次记忆点的结果
  const result = state.perspectivesData[perspective].memories[memoryPoint] ?? null;
  
  // 获取新技能
  const skills = getSkillsByMemory(perspective, memoryPoint);
  const newSkill = result === 'HE' ? skills.he : skills.be;
  
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showLockDialog, setShowLockDialog] = useState(false);

  // 检查当前携带的4个技能中是否已有该技能（二周目重玩时）
  const alreadyHasSkill = state.equippedSkills.includes(newSkill.id);

  // 检查技能是否是负面技能
  const isNegativeSkill = (skillId: string): boolean => {
    return NEGATIVE_SKILLS.includes(skillId);
  };

  // 检查技能是否被锁定（一周目时，BE技能只能被对应记忆点的HE技能替换）
  const isSkillLocked = (skillId: string): boolean => {
    // 仅在一周目生效
    if (state.playthrough !== 1) return false;
    
    // 检查是否是负面技能
    if (!isNegativeSkill(skillId)) return false;
    
    // 检查该技能是否有BE来源记录
    const beSourceMemoryPoint = state.beSkillSources[skillId];
    if (!beSourceMemoryPoint) return false;
    
    // 如果当前新技能是HE结局且来自同一个记忆点，则可以替换
    if (result === 'HE' && beSourceMemoryPoint === memoryPoint) {
      return false;
    }
    
    // 其他情况都锁定
    return true;
  };

  const handleSkillClick = (skillId: string) => {
    // 检查技能是否被锁定
    if (isSkillLocked(skillId)) {
      setShowLockDialog(true);
      return;
    }
    
    setSelectedSkill(skillId);
  };

  const handleConfirm = () => {
    if (!selectedSkill) return;
    
    // 解锁新技能
    unlockSkill(newSkill.id);
    
    // 如果是BE结局，记录技能来源
    if (result === 'BE') {
      dispatch({ type: 'RECORD_BE_SKILL_SOURCE', payload: { skillId: newSkill.id, memoryPoint } });
    }
    
    // 替换技能
    equipSkill(newSkill.id, selectedSkill);
    
    setConfirmed(true);
  };

  const handleContinue = () => {
    dispatch({ type: 'SET_PHASE', payload: 'memoryCenter' });
  };

  // 如果已拥有该技能，显示跳过提示
  if (alreadyHasSkill && !confirmed) {
    return (
      <div 
        className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center p-4"
        onClick={handleContinue}
      >
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Sparkles className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-xl font-bold text-blue-700 mb-2">技能已拥有</h3>
            <p className="text-gray-600 mb-6">
              你已经拥有此技能 <strong>{SKILL_NAME_MAP[newSkill.id] || newSkill.name}</strong>
              <br />
              <span className="text-sm text-gray-500">点击任意处跳过学习阶段</span>
            </p>
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={handleContinue}
            >
              继续冒险
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (confirmed) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardContent className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="w-8 h-8 text-green-500" />
            </div>
            <h3 className="text-xl font-bold text-green-700 mb-2">技能学习成功！</h3>
            <p className="text-gray-600 mb-6">
              你已学会 <strong>{SKILL_NAME_MAP[newSkill.id] || newSkill.name}</strong>
              <br />
              <span className="text-sm text-gray-500">{SKILL_DESC_MAP[newSkill.id] || newSkill.description}</span>
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={handleContinue}
            >
              继续冒险
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 relative">
      {/* 标题 */}
      <div className="text-center pt-8 pb-6">
        <h2 className="text-2xl font-bold text-blue-700">技能学习</h2>
        <p className="text-sm text-blue-600/70">通关记忆点获得新技能</p>
      </div>

      <div className="max-w-lg mx-auto">
        {/* 新技能 */}
        <Card className={`mb-6 ${newSkill.type === 'negative' ? 'border-red-300 bg-red-50' : 'border-green-300 bg-green-50'}`}>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                newSkill.type === 'negative' ? 'bg-red-100' : 'bg-green-100'
              }`}>
                {newSkill.type === 'negative' ? (
                  <AlertTriangle className="w-8 h-8 text-red-500" />
                ) : (
                  <Sparkles className="w-8 h-8 text-green-500" />
                )}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-lg">{SKILL_NAME_MAP[newSkill.id] || newSkill.name}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    newSkill.type === 'negative' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'
                  }`}>
                    {newSkill.type === 'negative' ? '负面' : '正向'}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{SKILL_DESC_MAP[newSkill.id] || newSkill.description}</p>
                <p className="text-xs text-gray-500 mt-1">效果: {SKILL_EFFECT_MAP[newSkill.id] || newSkill.effect}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 选择要替换的技能 */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 mb-3">选择要替换的技能</h3>
          <p className="text-sm text-gray-500 mb-4">
            你最多只能携带4个技能，请选择要替换的技能
          </p>
          
          <div className="space-y-2">
            {state.equippedSkills.map((skillId) => {
              const skillName = SKILL_NAME_MAP[skillId] || skillId;
              const skillDesc = SKILL_DESC_MAP[skillId] || '';
              const isSelected = selectedSkill === skillId;
              const locked = isSkillLocked(skillId);

              return (
                <button
                  key={skillId}
                  className={`w-full p-4 rounded-xl text-left transition-all border-2 relative overflow-hidden ${
                    locked
                      ? 'border-red-300 bg-red-50 cursor-not-allowed'
                      : isSelected 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-200 bg-white hover:border-blue-300'
                  }`}
                  onClick={() => handleSkillClick(skillId)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {/* 小恶魔标志（锁定技能） */}
                      {locked && (
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-sm">😈</span>
                        </div>
                      )}
                      <div>
                        <span className={`font-medium ${locked ? 'text-red-700' : 'text-gray-800'}`}>
                          {skillName}
                        </span>
                        <p className={`text-xs ${locked ? 'text-red-500' : 'text-gray-500'}`}>
                          {skillDesc}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {/* 铁链图标（锁定技能） */}
                      {locked && (
                        <div className="flex items-center gap-1 text-red-500">
                          <Lock className="w-5 h-5" />
                          <span className="text-xs">已锁定</span>
                        </div>
                      )}
                      {/* 选中标记 */}
                      {!locked && isSelected && (
                        <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 按钮 - 强制替换，无取消选项 */}
        <div className="flex gap-4">
          <Button
            className="flex-1 bg-blue-500 hover:bg-blue-600"
            disabled={!selectedSkill}
            onClick={handleConfirm}
          >
            确认替换
          </Button>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          必须从当前携带的4个技能中替换1个
        </p>
      </div>

      {/* 锁定提示弹窗 */}
      {showLockDialog && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowLockDialog(false)}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full" onClick={(e) => e.stopPropagation()}>
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-lg font-bold text-red-700 mb-2">技能已锁定</h3>
              <p className="text-gray-600 text-sm mb-6">
                该负面技能只能被其对应记忆点的正面技能替换哦~不管如何...快去打BOSS吧！
              </p>
              <Button
                className="w-full bg-red-500 hover:bg-red-600"
                onClick={() => setShowLockDialog(false)}
              >
                知道了
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
