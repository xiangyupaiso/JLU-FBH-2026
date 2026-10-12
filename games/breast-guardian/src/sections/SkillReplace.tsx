import { useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Check, Sparkles, AlertTriangle, Lock } from 'lucide-react';
import { getSkillsByMemory, getSkillById } from '@/data/skills';

// List of negative skill IDs
const NEGATIVE_SKILLS = [
  'willfulClingy', 'stubbornStudy', 'ignorantMockery',
  'forcedDrinking', 'stayUpLate', 'abuseDrugs',
  'hideIllness', 'delayCheckup', 'folkRemedy'
];

export default function SkillReplace() {
  const { state, dispatch, equipSkill, unlockSkill, openExitMenu } = useGame();
  const isZh = state.language === 'zh';
  const perspective = state.currentPerspective!;
  const memoryPoint = state.currentMemoryPoint;
  
  // Get current Memory Point result
  const result = state.perspectivesData[perspective].memories[memoryPoint] ?? null;
  
  // Get new skill (by current language)
  const skills = getSkillsByMemory(perspective, memoryPoint, state.language);
  const newSkill = result === 'HE' ? skills.he : skills.be;
  
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);
  const [showLockDialog, setShowLockDialog] = useState(false);

  // Check if current loadout already has this skill
  const alreadyHasSkill = state.equippedSkills.includes(newSkill.id);

  const isNegativeSkill = (skillId: string): boolean => {
    return NEGATIVE_SKILLS.includes(skillId);
  };

  const isSkillLocked = (skillId: string): boolean => {
    if (state.playthrough !== 1) return false;
    if (!isNegativeSkill(skillId)) return false;
    
    const beSourceMemoryPoint = state.beSkillSources[skillId];
    if (!beSourceMemoryPoint) return false;
    
    if (result === 'HE' && beSourceMemoryPoint === memoryPoint) {
      return false;
    }
    
    return true;
  };

  const handleSkillClick = (skillId: string) => {
    if (isSkillLocked(skillId)) {
      setShowLockDialog(true);
      return;
    }
    setSelectedSkill(skillId);
  };

  const handleConfirm = () => {
    if (!selectedSkill) return;
    
    unlockSkill(newSkill.id);
    
    if (result === 'BE') {
      dispatch({ type: 'RECORD_BE_SKILL_SOURCE', payload: { skillId: newSkill.id, memoryPoint } });
    }
    
    equipSkill(newSkill.id, selectedSkill);
    setConfirmed(true);
  };

  const handleContinue = () => {
    dispatch({ type: 'SET_PHASE', payload: 'memoryCenter' });
  };

  const localizedNewSkill = getSkillById(newSkill.id, state.language) || newSkill;
  const newSkillName = localizedNewSkill.name;
  const newSkillDesc = localizedNewSkill.description;
  const newSkillEffect = localizedNewSkill.effect;

  // If already possessed, show skip notice
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
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {isZh ? '技能已拥有' : 'Skill Already Learned'}
            </h3>
            <p className="text-gray-600 mb-6">
              {isZh ? '你已经拥有此技能 ' : 'You already possess '}
              <strong>{newSkillName}</strong>
              <br />
              <span className="text-sm text-gray-500">
                {isZh ? '点击任意处跳过学习阶段' : 'Click anywhere to skip and continue'}
              </span>
            </p>
            <Button
              className="bg-blue-500 hover:bg-blue-600"
              onClick={handleContinue}
            >
              {isZh ? '继续冒险' : 'Continue Adventure'}
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
            <h3 className="text-xl font-bold text-green-700 mb-2">
              {isZh ? '技能学习成功！' : 'Skill Learned Successfully!'}
            </h3>
            <p className="text-gray-600 mb-6">
              {isZh ? '你已学会 ' : 'You have mastered '}
              <strong>{newSkillName}</strong>
              <br />
              <span className="text-sm text-gray-500">{newSkillDesc}</span>
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={handleContinue}
            >
              {isZh ? '继续冒险' : 'Continue Adventure'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white p-4 relative">
      {/* 退出菜单按钮 */}
      <button
        type="button"
        onClick={openExitMenu}
        className="absolute top-4 left-4 z-30 flex items-center gap-1.5 rounded-none border-2 border-[#3E2723] bg-white/90 px-3 py-1.5 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
        title={isZh ? '退出 / 菜单' : 'Exit / Menu'}
      >
        <span className="text-blue-600 font-black">✕</span>
        <span>{isZh ? '菜单 / 退出' : 'Exit / Menu'}</span>
      </button>

      {/* 标题 */}
      <div className="text-center pt-8 pb-6">
        <h2 className="text-2xl font-bold text-blue-700">
          {isZh ? '技能学习' : 'Skill Learning'}
        </h2>
        <p className="text-sm text-blue-600/70">
          {isZh ? '通关记忆点获得新技能' : 'Clear Memory Points to acquire new skills'}
        </p>
      </div>

      <div className="max-w-lg mx-auto">
        {/* 新技能卡片 */}
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
                  <h3 className="font-bold text-lg">{newSkillName}</h3>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    newSkill.type === 'negative' ? 'bg-red-200 text-red-700' : 'bg-green-200 text-green-700'
                  }`}>
                    {newSkill.type === 'negative' ? (isZh ? '负面' : 'Negative') : (isZh ? '正向' : 'Positive')}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{newSkillDesc}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {isZh ? '效果: ' : 'Effect: '}
                  {newSkillEffect}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 技能替换选择 */}
        <div className="mb-6">
          <h3 className="font-bold text-gray-700 mb-3">
            {isZh ? '选择要替换的技能' : 'Select Skill to Replace'}
          </h3>
          <p className="text-sm text-gray-500 mb-4">
            {isZh
              ? '你最多只能携带4个技能，请选择要替换的技能'
              : 'You can equip at most 4 skills. Choose one to replace with the new skill.'}
          </p>
          
          <div className="space-y-2">
            {state.equippedSkills.map((skillId) => {
              const skill = getSkillById(skillId, state.language);
              const skillName = skill?.name || skillId;
              const skillDesc = skill?.description || '';
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
                      {locked && (
                        <div className="flex items-center gap-1 text-red-500">
                          <Lock className="w-5 h-5" />
                          <span className="text-xs">{isZh ? '已锁定' : 'Locked'}</span>
                        </div>
                      )}
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

        {/* 确认按钮 */}
        <div className="flex gap-4">
          <Button
            className="flex-1 bg-blue-500 hover:bg-blue-600"
            disabled={!selectedSkill}
            onClick={handleConfirm}
          >
            {isZh ? '确认替换' : 'Confirm Replacement'}
          </Button>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-4">
          {isZh
            ? '必须从当前携带的4个技能中替换1个'
            : 'Must replace 1 skill from your current loadout of 4'}
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
              <h3 className="text-lg font-bold text-red-700 mb-2">
                {isZh ? '技能已锁定' : 'Skill Locked'}
              </h3>
              <p className="text-gray-600 text-sm mb-6">
                {isZh
                  ? '该负面技能只能被其对应记忆点的正面技能替换哦~不管如何...快去打BOSS吧！'
                  : 'This negative skill can only be replaced by the positive skill from its corresponding Memory Point. For now... let\'s confront the BOSS!'}
              </p>
              <Button
                className="w-full bg-red-500 hover:bg-red-600"
                onClick={() => setShowLockDialog(false)}
              >
                {isZh ? '知道了' : 'Got It'}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
