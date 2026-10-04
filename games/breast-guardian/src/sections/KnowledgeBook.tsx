import { useGame } from '@/hooks/gameState';
import { ChevronLeft, Skull, Sparkles, TriangleAlert } from 'lucide-react';
import { BOSSES } from '@/types';
import { ALL_SKILLS } from '@/data/skills';
import { useState } from 'react';
import { assetUrl } from '@/data/assetUrls';

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

// 毛玻璃纸片容器：呼应背景柔焦水彩质感
const paperCard =
  'rounded-2xl border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(139,100,140,0.10)] backdrop-blur-md';

// 知识手册 - 开局全解锁，无需收集
export default function KnowledgeBook() {
  const { dispatch } = useGame();
  const [activeTab, setActiveTab] = useState<'boss' | 'skill'>('boss');
  const [selectedBoss, setSelectedBoss] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const bossList = Object.values(BOSSES);
  const skillList = Object.values(ALL_SKILLS);

  return (
    <div className="relative min-h-screen isolate p-4 md:p-6">
      <img src={assetUrl('assets/ui/book-bg.png')} alt="" className="absolute inset-0 h-full w-full object-cover -z-10" />

      {/* 返回按钮 */}
      <button
        type="button"
        className="absolute top-4 left-4 z-10 flex items-center gap-1 rounded-full border border-white/60 bg-white/60 px-4 py-2 text-sm font-medium text-[#9C4674] shadow-[0_4px_16px_rgba(139,100,140,0.12)] backdrop-blur-md transition-all hover:bg-white/80 active:scale-95"
        onClick={() => dispatch({ type: 'SET_PHASE', payload: 'mainMenu' })}
      >
        <ChevronLeft className="h-4 w-4" />
        返回
      </button>

      {/* 标题 */}
      <div className="flex flex-col items-center gap-2 pt-14 pb-6 md:pt-16">
        <h2 className="font-serif text-3xl font-bold tracking-wide text-[#5A4868] md:text-4xl">知识手册</h2>
        <div className="flex w-56 items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A2C8]/70" />
          <Sparkles className="h-3.5 w-3.5 text-[#C878A8]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A2C8]/70" />
        </div>
        <p className="text-sm text-[#857497]">乳腺健康知识图鉴</p>
      </div>

      {/* 标签切换 */}
      <div className="mx-auto mb-6 flex max-w-md gap-3">
        <button
          className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
            activeTab === 'boss'
              ? 'bg-[#9C4674] text-white shadow-[0_6px_18px_rgba(156,70,116,0.35)]'
              : 'border border-white/60 bg-white/55 text-[#5A4868] backdrop-blur-sm hover:bg-white/75'
          }`}
          onClick={() => {
            setActiveTab('boss');
            setSelectedSkill(null);
          }}
        >
          <Skull className="h-4 w-4" />
          BOSS图鉴
        </button>
        <button
          className={`flex flex-1 items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all duration-300 active:scale-95 ${
            activeTab === 'skill'
              ? 'bg-[#9C4674] text-white shadow-[0_6px_18px_rgba(156,70,116,0.35)]'
              : 'border border-white/60 bg-white/55 text-[#5A4868] backdrop-blur-sm hover:bg-white/75'
          }`}
          onClick={() => {
            setActiveTab('skill');
            setSelectedBoss(null);
          }}
        >
          <Sparkles className="h-4 w-4" />
          技能图鉴
        </button>
      </div>

      {/* BOSS图鉴内容 */}
      {activeTab === 'boss' && (
        <div className="mx-auto max-w-4xl">
          {!selectedBoss ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {bossList.map((boss) => (
                <div
                  key={boss.id}
                  className={`${paperCard} group cursor-pointer p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(139,100,140,0.20)]`}
                  onClick={() => setSelectedBoss(boss.id)}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#E8A4C8]/30 ring-1 ring-white/60">
                      <Skull className="h-6 w-6 text-[#96497E]" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-lg font-bold text-[#5A4868]">{boss.name}</h3>
                      <span
                        className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs ${
                          boss.week === 1
                            ? 'bg-[#C4B0E0]/35 text-[#6B5878]'
                            : 'bg-[#E8A4C8]/40 text-[#96497E]'
                        }`}
                      >
                        {boss.week === 1 ? '一周目' : '二周目'}
                      </span>
                    </div>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-[#6B5878]">{boss.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${paperCard} p-6 md:p-8`}>
              <button
                type="button"
                className="mb-6 flex items-center gap-1 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-sm font-medium text-[#5A4868] backdrop-blur-sm transition-all hover:bg-white/80 active:scale-95"
                onClick={() => setSelectedBoss(null)}
              >
                <ChevronLeft className="h-4 w-4" />
                返回列表
              </button>
              {(() => {
                const boss = bossList.find(b => b.id === selectedBoss);
                if (!boss) return null;
                return (
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-[#E8A4C8]/30 ring-1 ring-white/60">
                        <Skull className="h-8 w-8 text-[#96497E]" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#5A4868]">{boss.name}</h3>
                        <span
                          className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs ${
                            boss.week === 1
                              ? 'bg-[#C4B0E0]/35 text-[#6B5878]'
                              : 'bg-[#E8A4C8]/40 text-[#96497E]'
                          }`}
                        >
                          {boss.week === 1 ? '一周目BOSS' : '二周目BOSS'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">症状表现</h4>
                        <ul className="list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]">
                          {boss.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">发病机制</h4>
                        <p className="leading-relaxed text-[#6B5878]">{boss.science.mechanism}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">早期征兆</h4>
                        <ul className="list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]">
                          {boss.science.earlySigns.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">医疗建议</h4>
                        <p className="leading-relaxed text-[#6B5878]">{boss.science.medicalAdvice}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-[#9C4674]">BOSS技能</h4>
                        <div className="space-y-3">
                          {boss.skills.map((skill, i) => (
                            <div key={i} className="rounded-xl bg-[#F7EDF4]/80 p-3.5">
                              <p className="font-medium text-[#5A4868]">{skill.name}</p>
                              <p className="mt-0.5 text-sm text-[#6B5878]">{skill.description}</p>
                              <p className="mt-1 text-xs text-[#857497]">{skill.feedback}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}

      {/* 技能图鉴内容 */}
      {activeTab === 'skill' && (
        <div className="mx-auto max-w-4xl">
          {!selectedSkill ? (
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {skillList.map((skill) => (
                <div
                  key={skill.id}
                  className={`${paperCard} cursor-pointer p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_40px_rgba(139,100,140,0.20)]`}
                  onClick={() => setSelectedSkill(skill.id)}
                >
                  <div className="mb-3 flex items-center gap-3">
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ring-1 ring-white/60 ${
                        skill.type === 'positive' ? 'bg-[#7A9AE8]/20' : 'bg-[#A878C8]/20'
                      }`}
                    >
                      {skill.type === 'positive' ? (
                        <Sparkles className="h-6 w-6 text-[#4A68B0]" />
                      ) : (
                        <TriangleAlert className="h-6 w-6 text-[#7A5298]" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <h3 className="truncate font-serif text-lg font-bold text-[#5A4868]">
                        {SKILL_NAME_MAP[skill.id] || skill.name}
                      </h3>
                      <span
                        className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs ${
                          skill.type === 'positive'
                            ? 'bg-[#7A9AE8]/20 text-[#4A68B0]'
                            : 'bg-[#A878C8]/20 text-[#7A5298]'
                        }`}
                      >
                        {skill.type === 'positive' ? '正向技能' : '负面技能'}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6B5878]">{SKILL_DESC_MAP[skill.id] || skill.description}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className={`${paperCard} p-6 md:p-8`}>
              <button
                type="button"
                className="mb-6 flex items-center gap-1 rounded-full border border-white/60 bg-white/55 px-4 py-1.5 text-sm font-medium text-[#5A4868] backdrop-blur-sm transition-all hover:bg-white/80 active:scale-95"
                onClick={() => setSelectedSkill(null)}
              >
                <ChevronLeft className="h-4 w-4" />
                返回列表
              </button>
              {(() => {
                const skill = skillList.find(s => s.id === selectedSkill);
                if (!skill) return null;
                return (
                  <div>
                    <div className="mb-6 flex items-center gap-4">
                      <div
                        className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full ring-1 ring-white/60 ${
                          skill.type === 'positive' ? 'bg-[#7A9AE8]/20' : 'bg-[#A878C8]/20'
                        }`}
                      >
                        {skill.type === 'positive' ? (
                          <Sparkles className="h-8 w-8 text-[#4A68B0]" />
                        ) : (
                          <TriangleAlert className="h-8 w-8 text-[#7A5298]" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#5A4868]">
                          {SKILL_NAME_MAP[skill.id] || skill.name}
                        </h3>
                        <span
                          className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs ${
                            skill.type === 'positive'
                              ? 'bg-[#7A9AE8]/20 text-[#4A68B0]'
                              : 'bg-[#A878C8]/20 text-[#7A5298]'
                          }`}
                        >
                          {skill.type === 'positive' ? '正向技能' : '负面技能'}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">技能描述</h4>
                        <p className="leading-relaxed text-[#6B5878]">{SKILL_DESC_MAP[skill.id] || skill.description}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">技能效果</h4>
                        <p className="leading-relaxed text-[#6B5878]">{SKILL_EFFECT_MAP[skill.id] || skill.effect}</p>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
