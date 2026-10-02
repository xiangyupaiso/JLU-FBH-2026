import { useState, useEffect } from 'react';
import { useGame } from '@/hooks/gameState';
import { BOSSES_BY_PLAYTHROUGH } from '@/data/bossProgression';
import { Button } from '@/components/ui/button';
import { ALL_SKILLS } from '@/data/skills';
import { BOSSES } from '@/types';
import type { BossType, Skill } from '@/types';
import { getBossAssetPath, getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';

// 反馈类型
type FeedbackType = 'player' | 'boss' | 'negative' | null;

interface FeedbackState {
  show: boolean;
  text: string;
  type: FeedbackType;
}

// 宝可梦风格战斗页面 - 完整修复版
export default function BossBattle() {
  const { state, dispatch, useSkillInBattle, defeatBoss } = useGame();
  const [boss] = useState<BossType>(state.currentBoss!);
  const [showResult, setShowResult] = useState(false);
  const [battleResult, setBattleResult] = useState<'win' | 'lose' | null>(null);
  const [currentRound, setCurrentRound] = useState(0);
  const [feedback, setFeedback] = useState<FeedbackState>({ show: false, text: '', type: null });
  const [isPlayerTurn, setIsPlayerTurn] = useState(false);
  const [showNegativeContinue, setShowNegativeContinue] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [hasDefeatedBoss, setHasDefeatedBoss] = useState(false);

  const bossData = BOSSES[boss];
  const bossSkills = bossData.skills;
  const guardianState = state.currentPerspective === 'child' ? '懂事' : '坚定';
  const activeBosses = BOSSES_BY_PLAYTHROUGH[state.playthrough];
  const defeatedCount = state.defeatedBosses.filter((item) => activeBosses.includes(item)).length;

  // 获取玩家当前装备的技能
  const playerSkills = state.equippedSkills.map(id => ALL_SKILLS[id]).filter(Boolean);

  // 获取负面技能来源的记忆点
  const getNegativeSkillSource = (skillId: string): number | undefined => {
    return state.beSkillSources[skillId];
  };

  // 战斗开始 - BOSS先手
  useEffect(() => {
    if (!gameStarted) {
      setGameStarted(true);
      // BOSS先手攻击
      setTimeout(() => {
        const skill = bossSkills[0];
        setFeedback({
          show: true,
          text: `${bossData.name} 使用了 ${skill?.name}！\n${skill?.feedback}`,
          type: 'boss'
        });
        setIsPlayerTurn(false);
      }, 500);
    }
  }, [gameStarted, bossData, bossSkills]);

  // 点击继续反馈
  const handleContinueFeedback = () => {
    if (!feedback.show) return;
    
    setFeedback({ show: false, text: '', type: null });
    
    if (feedback.type === 'boss') {
      // BOSS攻击后，切换到玩家回合
      setIsPlayerTurn(true);
    } else if (feedback.type === 'player') {
      // 玩家攻击后，检查战斗结果
      // 必须使用全部4个技能才能击败BOSS
      const usedSkillCount = (state.battleState?.usedSkills.length || 0);
      
      // 需要4个技能全部使用才能击败BOSS
      if (usedSkillCount >= 4) {
        // 击败BOSS - 只调用一次defeatBoss
        if (!hasDefeatedBoss) {
          setHasDefeatedBoss(true);
          defeatBoss(boss);
        }
        setBattleResult('win');
        setShowResult(true);
      } else {
        // BOSS回合 - 继续战斗
        const nextRound = currentRound + 1;
        setCurrentRound(nextRound);
        setTimeout(() => {
          const skill = bossSkills[nextRound];
          setFeedback({
            show: true,
            text: `${bossData.name} 使用了 ${skill?.name}！\n${skill?.feedback}`,
            type: 'boss'
          });
          setIsPlayerTurn(false);
        }, 300);
      }
    } else if (feedback.type === 'negative') {
      // 负面技能，显示"继续"按钮让玩家主动跳转到BE结局
      setShowNegativeContinue(true);
    }
  };

  // 负面技能后点击继续跳转到BE结局
  const handleNegativeContinue = () => {
    setShowNegativeContinue(false);
    // 直接跳转到BE结局页面
    dispatch({ type: 'SET_PHASE', payload: 'beEnding' });
  };

  const handleUseSkill = (skill: Skill) => {
    if (state.battleState?.usedSkills.includes(skill.id) || battleResult || !isPlayerTurn) return;

    setIsPlayerTurn(false);

    if (skill.type === 'negative') {
      // 使用负面技能 - 显示深红色反馈
      setFeedback({
        show: true,
        text: `你使用了负面技能【${skill.name}】！\n${skill.effect}\n\n眼前一黑，你感到一阵眩晕...`,
        type: 'negative'
      });
      // 获取负面技能来源的记忆点
      const negativeSkillSource = getNegativeSkillSource(skill.id);
      useSkillInBattle(skill.id, true, negativeSkillSource);
    } else {
      // 使用正向技能 - 显示蓝色反馈
      setFeedback({
        show: true,
        text: `你使用了【${skill.name}】！\n${skill.effect}\n\n${skill.description}`,
        type: 'player'
      });
      useSkillInBattle(skill.id, false);
    }
  };

  const handleGiveUp = () => {
    if (confirm('是否放弃战斗？')) {
      dispatch({ type: 'SET_PHASE', payload: 'bossEntry' });
    }
  };

  const handleEndBattle = () => {
    if (battleResult === 'win') {
      // 检查是否击败全部BOSS才能通关
      // defeatedBosses已经包含了当前击败的BOSS（在handleContinueFeedback中已调用）
      if (defeatedCount >= activeBosses.length) {
        // 通关当前周目
        if (state.playthrough === 1) {
          // 一周目通关，进入HE结局
          dispatch({ type: 'SET_PHASE', payload: 'heEnding' });
        } else {
          // 二周目通关，标记当前线完整通关并进入特殊结局
          dispatch({ type: 'COMPLETE_PERSPECTIVE' });
          dispatch({ type: 'SET_PHASE', payload: 'specialEnding' });
        }
      } else {
        // 还没击败全部BOSS，返回BOSS入口继续挑战
        dispatch({ type: 'SET_PHASE', payload: 'bossEntry' });
      }
    }
  };

  // 计算BOSS血量百分比 - 4个技能全部用完才归零
  const bossHealthPercent = state.battleState 
    ? Math.max(0, 100 - state.battleState.usedSkills.length * 25)
    : 100;

  // 获取反馈框样式
  const getFeedbackStyle = () => {
    switch (feedback.type) {
      case 'player':
        return 'bg-blue-900/90 border-blue-500 text-blue-100';
      case 'boss':
        return 'bg-red-900/90 border-red-500 text-red-100';
      case 'negative':
        return 'bg-red-950/95 border-red-700 text-red-200';
      default:
        return 'bg-gray-900/90 border-gray-500';
    }
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-b from-gray-900 via-red-950 to-gray-900 p-4 relative"
      onClick={feedback.show && !showNegativeContinue ? handleContinueFeedback : undefined}
    >
      {/* 战斗场景背景 */}
      <img
        src={getSceneAssetPath('乳腺主城（黑雾笼罩）')}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/60 via-red-950/40 to-gray-950/90" />

      {/* 负面技能后的"继续"按钮界面 */}
      {showNegativeContinue && (
        <div className="fixed inset-0 bg-black/90 z-[60] flex items-center justify-center">
          <div className="text-center max-w-md p-8">
            <div className="text-6xl mb-4 animate-pulse">😵</div>
            <p className="text-red-500 text-2xl mb-2">眼前一黑...</p>
            <p className="text-red-400 text-lg mb-8">你感到一阵眩晕</p>
            <p className="text-gray-400 mb-8">你使用了负面技能，黑雾强化了BOSS，乳腺主城受到了严重损伤...</p>
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
              onClick={handleNegativeContinue}
            >
              继续
            </Button>
          </div>
        </div>
      )}

      {/* 战斗区域 */}
      <div className="relative z-10 h-screen flex flex-col">
        {/* 上方：BOSS信息 */}
        <div className="flex justify-end p-4">
          <div className="bg-black/50 rounded-xl p-4 max-w-xs">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-purple-800 rounded-full flex items-center justify-center animate-pulse overflow-hidden">
                <img
                  src={getBossAssetPath(boss, bossHealthPercent < 50 ? '虚弱' : '狰狞')}
                  alt={bossData.name}
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-red-400 font-bold">{bossData.name}</h3>
                <p className="text-xs text-gray-400">{bossData.description}</p>
              </div>
            </div>
            {/* 血条 */}
            <div className="mt-2">
              <div className="flex justify-between text-xs text-gray-400 mb-1">
                <span>HP</span>
                <span>{bossHealthPercent}%</span>
              </div>
              <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-red-500 to-red-600 transition-all duration-500"
                  style={{ width: `${bossHealthPercent}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 中间：玩家形象 */}
        <div className="flex-1 flex items-end p-4">
          <div className="bg-black/50 rounded-xl p-4">
            <div className="flex items-center gap-3">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={getCharacterAssetPath('主角', guardianState, state.currentPerspective || 'adult')}
                  alt="守护者"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-blue-400 font-bold">守护者</h3>
                <p className="text-xs text-gray-400">健康状态</p>
              </div>
            </div>
          </div>
        </div>

        {/* 下方：全屏宽度反馈对话框或技能选择区 */}
        {feedback.show ? (
          /* 全屏宽度反馈对话框 */
          <div 
            className={`mx-4 mb-4 rounded-2xl p-6 border-2 ${getFeedbackStyle()} backdrop-blur-sm animate-in slide-in-from-bottom duration-300`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start gap-4">
              {/* 图标 */}
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                feedback.type === 'player' ? 'bg-blue-500' :
                feedback.type === 'boss' ? 'bg-red-500' :
                'bg-red-700'
              }`}>
                <span className="text-2xl">
                  {feedback.type === 'player' ? '✨' :
                   feedback.type === 'boss' ? '👹' : '⚠️'}
                </span>
              </div>
              
              {/* 反馈内容 */}
              <div className="flex-1">
                <p className={`text-sm font-medium mb-2 ${
                  feedback.type === 'player' ? 'text-blue-300' :
                  feedback.type === 'boss' ? 'text-red-300' :
                  'text-red-400'
                }`}>
                  {feedback.type === 'player' ? '我方行动' :
                   feedback.type === 'boss' ? 'BOSS攻击' :
                   '危险！使用了负面技能'}
                </p>
                <p className="text-white text-lg leading-relaxed whitespace-pre-line">
                  {feedback.text}
                </p>
              </div>
            </div>
            
            {/* 点击继续提示 - 负面技能时不显示，因为有专门的继续按钮 */}
            {feedback.type !== 'negative' && (
              <div className="mt-6 text-center">
                <p className="text-white/60 text-sm animate-pulse">
                  点击任意位置继续
                </p>
              </div>
            )}
          </div>
        ) : (
          /* 技能选择区 */
          <div className="bg-black/60 rounded-t-2xl p-4">
            {/* 回合提示 */}
            <div className="text-center mb-3">
              <span className={`text-sm px-4 py-1 rounded-full ${
                isPlayerTurn 
                  ? 'bg-blue-500/30 text-blue-300' 
                  : 'bg-red-500/30 text-red-300'
              }`}>
                {isPlayerTurn ? '◆ 你的回合' : '◆ BOSS回合'}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {playerSkills.map((skill) => {
                const isUsed = state.battleState?.usedSkills.includes(skill.id);
                
                return (
                  <button
                    key={skill.id}
                    disabled={isUsed || battleResult !== null || !isPlayerTurn}
                    className={`p-4 rounded-xl text-left transition-all ${
                      isUsed
                        ? 'bg-gray-700 opacity-50 cursor-not-allowed'
                        : skill.type === 'negative'
                        ? 'bg-red-900/50 hover:bg-red-800/50 border border-red-700'
                        : 'bg-blue-900/50 hover:bg-blue-800/50 border border-blue-700'
                    } ${!isPlayerTurn && !isUsed ? 'opacity-50 cursor-not-allowed' : ''}`}
                    onClick={() => handleUseSkill(skill)}
                  >
                    <div className="flex items-center justify-between">
                      <span className={`font-medium ${
                        skill.type === 'negative' ? 'text-red-300' : 'text-blue-300'
                      }`}>
                        {skill.name}
                      </span>
                      {skill.type === 'negative' && (
                        <span className="text-xs text-red-500">⚠️</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-400 mt-1">{skill.description}</p>
                  </button>
                );
              })}
            </div>

            {/* 放弃战斗按钮 */}
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white"
                onClick={handleGiveUp}
                disabled={battleResult !== null}
              >
                放弃战斗
              </Button>
            </div>
          </div>
        )}
      </div>

      {/* 战斗胜利结果弹窗 */}
      {showResult && battleResult === 'win' && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-md text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-bold text-green-400 mb-2">战斗胜利！</h3>
            <p className="text-gray-300 mb-4">
              你成功驱散了{bossData.name}的黑雾！
              <br />
              乳腺主城的细胞们安全了。
            </p>
            <p className="text-gray-400 text-sm mb-4">
              已击败BOSS: {defeatedCount}/{activeBosses.length}
            </p>
            <Button
              className="bg-green-500 hover:bg-green-600"
              onClick={handleEndBattle}
            >
              继续冒险
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
