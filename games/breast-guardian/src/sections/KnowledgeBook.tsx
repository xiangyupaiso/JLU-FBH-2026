import { useGame } from '@/hooks/gameState';
import { ChevronLeft, Skull, Sparkles, TriangleAlert } from 'lucide-react';
import { BOSSES_ZH, BOSSES_EN } from '@/types';
import { getAllSkills } from '@/data/skills';
import { useState } from 'react';
import { assetUrl } from '@/data/assetUrls';

// 毛玻璃纸片容器：呼应背景柔焦水彩质感
const paperCard =
  'rounded-2xl border border-white/60 bg-white/70 shadow-[0_8px_30px_rgba(139,100,140,0.10)] backdrop-blur-md';

// 知识手册 - 开局全解锁，无需收集
export default function KnowledgeBook() {
  const { state, dispatch } = useGame();
  const isZh = state.language === 'zh';
  const [activeTab, setActiveTab] = useState<'boss' | 'skill'>('boss');
  const [selectedBoss, setSelectedBoss] = useState<string | null>(null);
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);

  const bossList = Object.values(isZh ? BOSSES_ZH : BOSSES_EN);
  const skillList = Object.values(getAllSkills(state.language));

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
        {isZh ? '返回' : 'Back'}
      </button>

      {/* 标题 */}
      <div className="flex flex-col items-center gap-2 pt-14 pb-6 md:pt-16">
        <h2 className="font-serif text-3xl font-bold tracking-wide text-[#5A4868] md:text-4xl">
          {isZh ? '知识手册' : 'Knowledge Handbook'}
        </h2>
        <div className="flex w-56 items-center gap-3">
          <span className="h-px flex-1 bg-gradient-to-r from-transparent to-[#C8A2C8]/70" />
          <Sparkles className="h-3.5 w-3.5 text-[#C878A8]" />
          <span className="h-px flex-1 bg-gradient-to-l from-transparent to-[#C8A2C8]/70" />
        </div>
        <p className="text-sm text-[#857497]">
          {isZh ? '乳腺健康临床科普全书' : 'Breast Health Clinical Encyclopedia'}
        </p>
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
          {isZh ? '症状BOSS图鉴' : 'BOSS Codex'}
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
          {isZh ? '技能图鉴' : 'Skill Codex'}
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
                        {isZh
                          ? (boss.week === 1 ? '一周目BOSS' : '二周目BOSS')
                          : (boss.week === 1 ? 'Week 1 BOSS' : 'Week 2 BOSS')}
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
                {isZh ? '返回列表' : 'Back to Codex'}
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
                          {isZh
                            ? (boss.week === 1 ? '一周目BOSS' : '二周目BOSS')
                            : (boss.week === 1 ? 'Week 1 BOSS' : 'Week 2 BOSS')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '症状表现' : 'Clinical Symptoms'}
                        </h4>
                        <ul className="list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]">
                          {boss.symptoms.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '发病机制' : 'Pathological Mechanism'}
                        </h4>
                        <p className="leading-relaxed text-[#6B5878]">{boss.science.mechanism}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '早期征兆' : 'Early Warning Signs'}
                        </h4>
                        <ul className="list-inside list-disc space-y-1 text-[#6B5878] marker:text-[#C8A2C8]">
                          {boss.science.earlySigns.map((s, i) => <li key={i}>{s}</li>)}
                        </ul>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '医疗建议' : 'Clinical Advice'}
                        </h4>
                        <p className="leading-relaxed text-[#6B5878]">{boss.science.medicalAdvice}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-3 text-sm font-semibold text-[#9C4674]">
                          {isZh ? 'BOSS技能' : 'BOSS Abilities'}
                        </h4>
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
                        {skill.name}
                      </h3>
                      <span
                        className={`mt-1 inline-block rounded-full px-2.5 py-0.5 text-xs ${
                          skill.type === 'positive'
                            ? 'bg-[#7A9AE8]/20 text-[#4A68B0]'
                            : 'bg-[#A878C8]/20 text-[#7A5298]'
                        }`}
                      >
                        {isZh
                          ? (skill.type === 'positive' ? '正向技能' : '负面技能')
                          : (skill.type === 'positive' ? 'Positive Skill' : 'Negative Skill')}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed text-[#6B5878]">{skill.description}</p>
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
                {isZh ? '返回列表' : 'Back to Codex'}
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
                          {skill.name}
                        </h3>
                        <span
                          className={`mt-1 inline-block rounded-full px-3 py-0.5 text-xs ${
                            skill.type === 'positive'
                              ? 'bg-[#7A9AE8]/20 text-[#4A68B0]'
                              : 'bg-[#A878C8]/20 text-[#7A5298]'
                          }`}
                        >
                          {isZh
                            ? (skill.type === 'positive' ? '正向技能' : '负面技能')
                            : (skill.type === 'positive' ? 'Positive Skill' : 'Negative Skill')}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '技能描述' : 'Skill Description'}
                        </h4>
                        <p className="leading-relaxed text-[#6B5878]">{skill.description}</p>
                      </div>

                      <div className="border-t border-[#C8A2C8]/25 pt-4">
                        <h4 className="mb-2 text-sm font-semibold text-[#9C4674]">
                          {isZh ? '技能效果' : 'Skill Effect'}
                        </h4>
                        <p className="leading-relaxed text-[#6B5878]">{skill.effect}</p>
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
