import type { Skill } from '@/types';

// 初始4个技能
export const INITIAL_SKILLS: Skill[] = [
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

// 幼年线技能（6个）
export const CHILD_SKILLS: Record<number, { he: Skill; be: Skill }> = {
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

// 青壮年线技能（6个）
export const ADULT_SKILLS: Record<number, { he: Skill; be: Skill }> = {
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

// 老年线技能（6个）
export const ELDER_SKILLS: Record<number, { he: Skill; be: Skill }> = {
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

// 获取所有技能
export const ALL_SKILLS: Record<string, Skill> = {
  // 初始技能
  cellRepair: INITIAL_SKILLS[0],
  hormoneBalance: INITIAL_SKILLS[1],
  immuneBoost: INITIAL_SKILLS[2],
  detox: INITIAL_SKILLS[3],
  // 幼年线技能
  ...Object.entries(CHILD_SKILLS).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  // 青壮年线技能
  ...Object.entries(ADULT_SKILLS).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {}),
  // 老年线技能
  ...Object.entries(ELDER_SKILLS).reduce((acc, [, val]) => ({
    ...acc,
    [val.he.id]: val.he,
    [val.be.id]: val.be
  }), {})
};

// 根据视角和记忆点获取技能
export function getSkillsByMemory(perspective: 'child' | 'adult' | 'elder', memoryPoint: number): { he: Skill; be: Skill } {
  switch (perspective) {
    case 'child':
      return CHILD_SKILLS[memoryPoint];
    case 'adult':
      return ADULT_SKILLS[memoryPoint];
    case 'elder':
      return ELDER_SKILLS[memoryPoint];
    default:
      return CHILD_SKILLS[1];
  }
}

// 根据技能ID获取技能
export function getSkillById(skillId: string): Skill | undefined {
  return ALL_SKILLS[skillId];
}
