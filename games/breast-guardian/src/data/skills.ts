import type { Skill, Perspective, Language } from '@/types';

// ==================== 中文技能定义 ====================

export const INITIAL_SKILLS_ZH: Skill[] = [
  {
    id: 'cellRepair',
    name: '细胞修复术',
    description: '修复受损的乳腺细胞，恢复组织健康',
    type: 'positive',
    effect: '修复乳腺细胞损伤',
    icon: 'heal'
  },
  {
    id: 'hormoneBalance',
    name: '激素平衡',
    description: '调节内分泌，维持激素稳定',
    type: 'positive',
    effect: '平衡雌激素水平',
    icon: 'balance'
  },
  {
    id: 'immuneBoost',
    name: '免疫强化',
    description: '增强免疫系统，提高抵抗力',
    type: 'positive',
    effect: '提升免疫细胞活性',
    icon: 'shield'
  },
  {
    id: 'detox',
    name: '毒素净化',
    description: '清除体内毒素，净化乳腺环境',
    type: 'positive',
    effect: '清除有害物质',
    icon: 'cleanse'
  }
];

export const CHILD_SKILLS_ZH: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'accompanyCare',
      name: '陪伴关怀',
      description: '多陪伴妈妈，让她好好休息',
      type: 'positive',
      effect: '缓解妈妈疲劳，驱散BOSS黑雾',
      icon: 'heart',
      source: '幼年线记忆点1·任性粘人'
    },
    be: {
      id: 'willfulClingy',
      name: '任性粘人',
      description: '缠着妈妈熬夜陪伴',
      type: 'negative',
      effect: '让妈妈劳累，BOSS黑雾强化',
      icon: 'danger',
      source: '幼年线记忆点1·任性粘人'
    }
  },
  2: {
    he: {
      id: 'reasonableSchedule',
      name: '合理安排',
      description: '合理规划时间，不让妈妈牵挂',
      type: 'positive',
      effect: '让妈妈安心，BOSS无法靠近',
      icon: 'clock',
      source: '幼年线记忆点2·熬夜学习'
    },
    be: {
      id: 'stubbornStudy',
      name: '固执熬夜',
      description: '偷偷熬夜学习不让妈妈休息',
      type: 'negative',
      effect: '让妈妈牵挂，BOSS黑雾蔓延',
      icon: 'danger',
      source: '幼年线记忆点2·熬夜学习'
    }
  },
  3: {
    he: {
      id: 'warmComfort',
      name: '温暖安慰',
      description: '关心妈妈情绪，给她温暖支持',
      type: 'positive',
      effect: '驱散妈妈心结，BOSS彻底消散',
      icon: 'sparkle',
      source: '幼年线记忆点3·无知嘲笑'
    },
    be: {
      id: 'ignorantMockery',
      name: '无知嘲笑',
      description: '随口说出伤害妈妈的话',
      type: 'negative',
      effect: '让妈妈伤心，BOSS彻底觉醒',
      icon: 'danger',
      source: '幼年线记忆点3·无知嘲笑'
    }
  }
};

export const ADULT_SKILLS_ZH: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'refuseAlcohol',
      name: '拒绝酒精',
      description: '远离酒精刺激，保护乳腺健康',
      type: 'positive',
      effect: '减少激素紊乱，BOSS无法成型',
      icon: 'shield',
      source: '青壮年线记忆点1·职场酒局'
    },
    be: {
      id: 'forcedDrinking',
      name: '被迫饮酒',
      description: '为了工作不得不喝酒',
      type: 'negative',
      effect: '刺激乳腺组织，BOSS黑雾扩散',
      icon: 'danger',
      source: '青壮年线记忆点1·职场酒局'
    }
  },
  2: {
    he: {
      id: 'adequateSleep',
      name: '充足睡眠',
      description: '保持规律作息，维持内分泌稳定',
      type: 'positive',
      effect: '平衡激素水平，BOSS虚弱消散',
      icon: 'moon',
      source: '青壮年线记忆点2·熬夜赶项目'
    },
    be: {
      id: 'stayUpLate',
      name: '熬夜透支',
      description: '为了项目连续熬夜',
      type: 'negative',
      effect: '内分泌紊乱，BOSS黑雾笼罩',
      icon: 'danger',
      source: '青壮年线记忆点2·熬夜赶项目'
    }
  },
  3: {
    he: {
      id: 'rationalMedication',
      name: '理性用药',
      description: '拒绝三无产品，科学管理身材',
      type: 'positive',
      effect: '避免激素风暴，BOSS无法存在',
      icon: 'pill',
      source: '青壮年线记忆点3·滥用减肥药'
    },
    be: {
      id: 'abuseDrugs',
      name: '滥用药物',
      description: '盲目服用三无减肥药',
      type: 'negative',
      effect: '激素风暴，BOSS彻底觉醒',
      icon: 'danger',
      source: '青壮年线记忆点3·滥用减肥药'
    }
  }
};

export const ELDER_SKILLS_ZH: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'timelyMedical',
      name: '及时就医',
      description: '发现异常立即就医，早发现早治疗',
      type: 'positive',
      effect: '消除早期病灶，BOSS被成功清除',
      icon: 'hospital',
      source: '老年线记忆点1·隐瞒病情'
    },
    be: {
      id: 'hideIllness',
      name: '隐瞒病情',
      description: '独自硬扛，不告诉子女',
      type: 'negative',
      effect: '加重病情，BOSS彻底觉醒',
      icon: 'danger',
      source: '老年线记忆点1·隐瞒病情'
    }
  },
  2: {
    he: {
      id: 'regularCheckup',
      name: '定期体检',
      description: '按时进行乳腺检查，防患于未然',
      type: 'positive',
      effect: '预防疾病发生，BOSS被成功驱散',
      icon: 'clipboard',
      source: '老年线记忆点2·忽视体检'
    },
    be: {
      id: 'delayCheckup',
      name: '拖延体检',
      description: '把体检当成瞎折腾',
      type: 'negative',
      effect: '错失早期发现机会，BOSS黑雾蔓延',
      icon: 'danger',
      source: '老年线记忆点2·忽视体检'
    }
  },
  3: {
    he: {
      id: 'scientificTreatment',
      name: '科学治疗',
      description: '相信专业医生，坚持正规治疗',
      type: 'positive',
      effect: '阻断病情恶化，BOSS被成功驱散',
      icon: 'stethoscope',
      source: '老年线记忆点3·迷信偏方'
    },
    be: {
      id: 'folkRemedy',
      name: '迷信偏方',
      description: '听信民间偏方，延误正规治疗',
      type: 'negative',
      effect: '病情恶化，BOSS彻底觉醒',
      icon: 'danger',
      source: '老年线记忆点3·迷信偏方'
    }
  }
};

export const ALL_SKILLS_ZH: Record<string, Skill> = {
  cellRepair: INITIAL_SKILLS_ZH[0],
  hormoneBalance: INITIAL_SKILLS_ZH[1],
  immuneBoost: INITIAL_SKILLS_ZH[2],
  detox: INITIAL_SKILLS_ZH[3],
  ...Object.entries(CHILD_SKILLS_ZH).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  ...Object.entries(ADULT_SKILLS_ZH).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  ...Object.entries(ELDER_SKILLS_ZH).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {})
};

// ==================== 英文技能定义 ====================

export const INITIAL_SKILLS_EN: Skill[] = [
  {
    id: 'cellRepair',
    name: 'Cellular Repair',
    description: 'Repair damaged mammary epithelial cells and restore tissue integrity',
    type: 'positive',
    effect: 'Repairs mammary epithelial cellular damage',
    icon: 'heal'
  },
  {
    id: 'hormoneBalance',
    name: 'Hormone Balance',
    description: 'Regulate endocrine signaling and maintain estrogen homeostasis',
    type: 'positive',
    effect: 'Balances estrogen levels and stabilizes hormonal signals',
    icon: 'balance'
  },
  {
    id: 'immuneBoost',
    name: 'Immune Fortification',
    description: 'Strengthen the immune microenvironment and boost cellular resistance',
    type: 'positive',
    effect: 'Enhances immune cell activity and surveillance',
    icon: 'shield'
  },
  {
    id: 'detox',
    name: 'Toxin Purge',
    description: 'Clear metabolic toxins and cleanse the mammary microenvironment',
    type: 'positive',
    effect: 'Clears harmful metabolic toxins and reduces oxidative stress',
    icon: 'cleanse'
  }
];

export const CHILD_SKILLS_EN: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'accompanyCare',
      name: 'Loving Companionship',
      description: "Stay gently by Mom's side and let her rest peacefully",
      type: 'positive',
      effect: "Relieves Mom's exhaustion and disperses BOSS dark mist",
      icon: 'heart',
      source: 'Childhood Memory 1: Clinging Demands'
    },
    be: {
      id: 'willfulClingy',
      name: 'Willful Clinging',
      description: 'Stubbornly pestering Mom to stay awake past midnight',
      type: 'negative',
      effect: "Depletes Mom's physical stamina; BOSS dark mist intensifies",
      icon: 'danger',
      source: 'Childhood Memory 1: Clinging Demands'
    }
  },
  2: {
    he: {
      id: 'reasonableSchedule',
      name: 'Balanced Schedule',
      description: "Manage study hours mindfully so Mom doesn't worry",
      type: 'positive',
      effect: "Brings Mom peace of mind; BOSS cannot draw near",
      icon: 'clock',
      source: 'Childhood Memory 2: Midnight Study'
    },
    be: {
      id: 'stubbornStudy',
      name: 'Stubborn Midnight Study',
      description: 'Secretly studying late into the night, depriving Mom of rest',
      type: 'negative',
      effect: "Keeps Mom anxious and sleepless; BOSS dark mist spreads",
      icon: 'danger',
      source: 'Childhood Memory 2: Midnight Study'
    }
  },
  3: {
    he: {
      id: 'warmComfort',
      name: 'Heartfelt Solace',
      description: "Comfort Mom's feelings and offer loving emotional reassurance",
      type: 'positive',
      effect: "Disperses Mom's inner sorrow; BOSS dissolves completely",
      icon: 'sparkle',
      source: 'Childhood Memory 3: Thoughtless Taunt'
    },
    be: {
      id: 'ignorantMockery',
      name: 'Thoughtless Ridicule',
      description: 'Speaking hurtful, insensitive words that break your mother’s heart',
      type: 'negative',
      effect: "Grieves your mother deeply; BOSS awakens in full wrath",
      icon: 'danger',
      source: 'Childhood Memory 3: Thoughtless Taunt'
    }
  }
};

export const ADULT_SKILLS_EN: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'refuseAlcohol',
      name: 'Alcohol Abstinence',
      description: 'Decline alcoholic beverages to protect mammary health',
      type: 'positive',
      effect: 'Reduces hormonal disruption; BOSS cannot materialize',
      icon: 'shield',
      source: 'Adult Memory 1: Corporate Drinking'
    },
    be: {
      id: 'forcedDrinking',
      name: 'Compelled Drinking',
      description: 'Reluctantly binge drinking for workplace expectations',
      type: 'negative',
      effect: 'Irritates mammary parenchyma; BOSS dark mist expands',
      icon: 'danger',
      source: 'Adult Memory 1: Corporate Drinking'
    }
  },
  2: {
    he: {
      id: 'adequateSleep',
      name: 'Restorative Sleep',
      description: 'Maintain regular sleep cycles and stabilize endocrine rhythms',
      type: 'positive',
      effect: 'Rebalances hormone levels; BOSS weakens and fades away',
      icon: 'moon',
      source: 'Adult Memory 2: Project Crunch'
    },
    be: {
      id: 'stayUpLate',
      name: 'Exhaustive All-Nighters',
      description: 'Working late through continuous sleepless nights for project deadlines',
      type: 'negative',
      effect: 'Triggers severe endocrine chaos; BOSS dark mist envelops the citadel',
      icon: 'danger',
      source: 'Adult Memory 2: Project Crunch'
    }
  },
  3: {
    he: {
      id: 'rationalMedication',
      name: 'Rational Health Choices',
      description: 'Reject uncertified weight-loss pills and manage body fitness safely',
      type: 'positive',
      effect: 'Prevents hormonal surges; BOSS cannot sustain form',
      icon: 'pill',
      source: 'Adult Memory 3: Illicit Diet Pills'
    },
    be: {
      id: 'abuseDrugs',
      name: 'Medication Abuse',
      description: 'Blindly consuming unverified counterfeit slimming pills',
      type: 'negative',
      effect: 'Induces estrogenic storm; BOSS awakens into a frenzy',
      icon: 'danger',
      source: 'Adult Memory 3: Illicit Diet Pills'
    }
  }
};

export const ELDER_SKILLS_EN: Record<number, { he: Skill; be: Skill }> = {
  1: {
    he: {
      id: 'timelyMedical',
      name: 'Prompt Consultation',
      description: 'Consult physicians immediately upon finding abnormalities for early cure',
      type: 'positive',
      effect: 'Eliminates early lesions; BOSS is purged successfully',
      icon: 'hospital',
      source: 'Elder Memory 1: Concealed Illness'
    },
    be: {
      id: 'hideIllness',
      name: 'Concealing Illness',
      description: 'Silently bearing symptoms alone without telling children',
      type: 'negative',
      effect: 'Aggravates pathology; BOSS awakens into full ferocity',
      icon: 'danger',
      source: 'Elder Memory 1: Concealed Illness'
    }
  },
  2: {
    he: {
      id: 'regularCheckup',
      name: 'Routine Screening',
      description: 'Undergo periodic clinical breast exams to stop disease before onset',
      type: 'positive',
      effect: 'Prevents disease onset; BOSS is successfully repelled',
      icon: 'clipboard',
      source: 'Elder Memory 2: Skipped Checkups'
    },
    be: {
      id: 'delayCheckup',
      name: 'Neglecting Screenings',
      description: 'Dismissing clinical checkups as unnecessary fuss',
      type: 'negative',
      effect: 'Misses golden window for early detection; BOSS dark mist spreads',
      icon: 'danger',
      source: 'Elder Memory 2: Skipped Checkups'
    }
  },
  3: {
    he: {
      id: 'scientificTreatment',
      name: 'Evidence-Based Care',
      description: 'Trust accredited clinical professionals and adhere to standard regimens',
      type: 'positive',
      effect: 'Blocks disease progression; BOSS is eradicated',
      icon: 'stethoscope',
      source: 'Elder Memory 3: Folk Remedies'
    },
    be: {
      id: 'folkRemedy',
      name: 'Unverified Folk Remedies',
      description: 'Putting faith in dubious folklore remedies, delaying standard treatment',
      type: 'negative',
      effect: 'Disease deteriorates rapidly; BOSS completely awakens',
      icon: 'danger',
      source: 'Elder Memory 3: Folk Remedies'
    }
  }
};

export const ALL_SKILLS_EN: Record<string, Skill> = {
  cellRepair: INITIAL_SKILLS_EN[0],
  hormoneBalance: INITIAL_SKILLS_EN[1],
  immuneBoost: INITIAL_SKILLS_EN[2],
  detox: INITIAL_SKILLS_EN[3],
  ...Object.entries(CHILD_SKILLS_EN).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  ...Object.entries(ADULT_SKILLS_EN).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  ...Object.entries(ELDER_SKILLS_EN).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {})
};

// ==================== 默认兼容导出与查询辅助函数 ====================

export const INITIAL_SKILLS = INITIAL_SKILLS_ZH;
export const CHILD_SKILLS = CHILD_SKILLS_ZH;
export const ADULT_SKILLS = ADULT_SKILLS_ZH;
export const ELDER_SKILLS = ELDER_SKILLS_ZH;
export const ALL_SKILLS = ALL_SKILLS_EN;

export function getAllSkills(lang: Language = 'en'): Record<string, Skill> {
  return lang === 'en' ? ALL_SKILLS_EN : ALL_SKILLS_ZH;
}

export function getSkillsByMemory(
  perspective: Perspective,
  memoryPoint: number,
  lang: Language = 'en'
): { he: Skill; be: Skill } {
  const store =
    lang === 'en'
      ? { child: CHILD_SKILLS_EN, adult: ADULT_SKILLS_EN, elder: ELDER_SKILLS_EN }
      : { child: CHILD_SKILLS_ZH, adult: ADULT_SKILLS_ZH, elder: ELDER_SKILLS_ZH };

  return store[perspective]?.[memoryPoint] ?? store.child[1];
}

export function getSkillById(skillId: string, lang: Language = 'en'): Skill | undefined {
  return (lang === 'en' ? ALL_SKILLS_EN : ALL_SKILLS_ZH)[skillId];
}
