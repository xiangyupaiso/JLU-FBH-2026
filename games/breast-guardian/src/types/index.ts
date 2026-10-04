// 游戏类型定义

export type Perspective = 'child' | 'adult' | 'elder';
export type MemoryPoint = 1 | 2 | 3;
export type EndingType = 'HE' | 'BE';
export type Playthrough = 1 | 2;

export type GamePhase = 
  | 'mainMenu'
  | 'perspectiveSelect'
  | 'realityTrigger'
  | 'tutorial'
  | 'microWorldMain'
  | 'memoryCenter'
  | 'visualNovel'
  | 'skillReplace'
  | 'bossEntry'
  | 'bossBattle'
  | 'beEnding'
  | 'heEnding'
  | 'week2Transition'
  | 'specialEnding'
  | 'knowledgeBook'
  | 'promotionVideo'
  | 'endingPage';

// BOSS类型
export type BossType = 
  | 'breastLump'
  | 'lymphNode'
  | 'nippleRetraction'
  | 'nippleDischarge'
  | 'skinDimple'
  | 'orangePeel';

// 技能类型
export interface Skill {
  id: string;
  name: string;
  description: string;
  type: 'positive' | 'negative';
  effect: string;
  icon: string;
  source?: string;
}

// BOSS技能定义
export interface BossSkill {
  name: string;
  description: string;
  feedback: string; // 出招反馈文案
}

// BOSS定义
export interface Boss {
  id: BossType;
  name: string;
  description: string;
  symptoms: string[];
  science: {
    mechanism: string;
    earlySigns: string[];
    medicalAdvice: string;
  };
  skills: BossSkill[];
  week: 1 | 2;
}

// 记忆点定义
export interface MemoryPointData {
  id: number;
  title: string;
  description: string;
  perspective: Perspective;
  intro: string;
  scenes: StoryScene[];
  firstChoices: Choice[];
  secondChoicesHE: Choice[];
  secondChoicesBE: Choice[];
  bossUnlocked: BossType[];
  skillHE: Skill;
  skillBE: Skill;
}

// 场景定义
export interface StoryScene {
  id: string;
  text: string;
  speaker?: string;
  speakerIcon?: string;
  background?: string;
}

// 选项定义
export interface Choice {
  id: string;
  text: string;
  type: 'HE' | 'BE' | 'fake';
  route?: 'HE' | 'BE';
  nextChoices?: Choice[];
  nextSceneId?: string;
  paimonDialogue: string;
  microEffect: string;
  result?: string;
  fakeScene?: {
    text: string;
    speaker?: string;
  };
}

// 各年龄段独立记忆进度
export interface PerspectiveProgress {
  memories: Record<number, EndingType | null>; // 记忆点 1, 2, 3 的结局状态
  completed: boolean; // 该线是否已达成过完整通关
}

// 游戏状态 - 无存档，纯内存
export interface GameState {
  currentPhase: GamePhase;
  currentPerspective: Perspective | null;
  currentMemoryPoint: number;
  currentBoss: BossType | null;

  // ★ 核心解锁状态
  hasWatchedPromotion: boolean; // 是否已完成/跳过 promotion 联动
  allPerspectivesUnlocked: boolean; // 是否已拥有全年龄段自由切换权限

  // ★ 三视角独立存档
  perspectivesData: Record<Perspective, PerspectiveProgress>;

  unlockedBosses: BossType[];
  defeatedBosses: BossType[];

  // ★ 共享技能池（全视角通用）
  unlockedSkills: string[];
  equippedSkills: string[];
  // 记录BE技能来源的记忆点（技能ID -> 记忆点编号）
  beSkillSources: Record<string, number>;

  playthrough: Playthrough;
  skipStory: boolean;
  hasCompletedTutorial: boolean;

  battleState: {
    bossHealth: number;
    usedSkills: string[];
    failed: boolean;
    currentRound: number;
  } | null;
  // 记录战斗中使用的负面技能来源（用于BE结局跳转）
  lastUsedNegativeSkillSource: number | null;
}

// 视角定义
export const PERSPECTIVES: Record<Perspective, { 
  name: string; 
  description: string; 
  age: string; 
  character: string;
  possessive: string;
  color: string;
}> = {
  child: {
    name: '幼年视角',
    description: '守护妈妈的乳腺世界',
    age: '10岁',
    character: '小女孩',
    possessive: '妈妈的',
    color: 'amber'
  },
  adult: {
    name: '青壮年视角',
    description: '守护自己的健康人生',
    age: '32岁',
    character: '职场女性',
    possessive: '自己的',
    color: 'blue'
  },
  elder: {
    name: '老年视角',
    description: '岁月安康，乳腺守护',
    age: '65岁',
    character: '奶奶',
    possessive: '属于你的',
    color: 'purple'
  }
};

// 6大BOSS定义 - 新版技能
export const BOSSES: Record<BossType, Boss> = {
  breastLump: {
    id: 'breastLump',
    name: '乳房硬块BOSS',
    description: '乳腺异常增生的具象化，坚硬的肿块压迫着乳腺组织',
    symptoms: ['乳房出现无痛性硬块', '肿块边界不清', '质地较硬'],
    science: {
      mechanism: '乳腺细胞异常增殖形成结节，可能由激素紊乱、遗传因素等引起',
      earlySigns: ['乳房出现无痛肿块', '皮肤凹陷', '乳头溢液'],
      medicalAdvice: '发现硬块应立即就医，进行乳腺超声或钼靶检查'
    },
    skills: [
      { name: '硬结侵噬', description: '硬结在乳房组织中无声蔓延', feedback: 'BOSS凝聚黑雾，一枚质地坚硬、边缘不规则的硬结正在乳房组织中无声蔓延...' },
      { name: '硬结增殖', description: '原有硬块迅速增大', feedback: 'BOSS释放暗能，原有硬块迅速增大，表面凸起更多细小硬结，与周围组织粘连愈发紧密...' },
      { name: '深层浸润', description: '硬块向深层组织浸润', feedback: 'BOSS穿透乳腺浅筋膜，硬块向深层组织浸润，牵拉周围神经，引发持续性放射性胀痛...' },
      { name: '隐匿扩散', description: '在乳房其他象限形成隐匿硬块', feedback: 'BOSS释放隐形孢子，在乳房其他象限形成微小隐匿硬块，仅通过影像学检查可发现...' }
    ],
    week: 1
  },
  skinDimple: {
    id: 'skinDimple',
    name: '酒窝征BOSS',
    description: '乳腺皮肤牵拉的具象化，皮肤出现凹陷如酒窝',
    symptoms: ['乳房皮肤凹陷', '呈现酒窝样改变', '皮肤与深层组织粘连'],
    science: {
      mechanism: '肿瘤侵犯Cooper韧带，牵拉皮肤形成凹陷',
      earlySigns: ['皮肤局部凹陷', '站立时明显', '平躺可能减轻'],
      medicalAdvice: '酒窝征是乳腺癌的典型表现，需立即就医'
    },
    skills: [
      { name: '韧带挛缩术', description: '皮肤中央缓缓凹陷形成酒窝', feedback: 'BOSS牵动暗紫色的Cooper韧带，皮肤中央缓缓凹陷，形成一个诡异的"酒窝"...' },
      { name: '多灶凹陷', description: '乳房皮肤出现多个散在凹陷', feedback: 'BOSS缠绕多处Cooper韧带，乳房皮肤出现多个散在凹陷，如星点分布，活动时牵拉感加剧...' },
      { name: '筋膜粘连', description: '韧带与胸壁筋膜粘连', feedback: 'BOSS将Cooper韧带与胸壁筋膜粘连，凹陷部位固定不动，按压时伴随牵拉痛...' },
      { name: '凹陷破溃', description: '凹陷中心皮肤破溃', feedback: 'BOSS持续收缩韧带，凹陷中心皮肤因缺血坏死，出现浅表破溃，渗出淡黄色液体...' }
    ],
    week: 2
  },
  orangePeel: {
    id: 'orangePeel',
    name: '橘皮样改变BOSS',
    description: '淋巴回流障碍的具象化，皮肤呈现橘皮样外观',
    symptoms: ['乳房皮肤粗糙', '毛孔明显凹陷', '呈现橘皮样改变'],
    science: {
      mechanism: '淋巴回流受阻，真皮层水肿，毛囊口明显凹陷',
      earlySigns: ['皮肤毛孔粗大', '皮肤增厚粗糙', '呈现橘皮样'],
      medicalAdvice: '橘皮样改变是乳腺癌晚期表现，需紧急就医'
    },
    skills: [
      { name: '淋巴淤阻咒', description: '皮肤形成橘皮样纹理', feedback: 'BOSS堵塞皮下淋巴管，皮肤逐渐增厚、水肿，毛孔处凹陷形成密集的橘皮样纹理...' },
      { name: '水肿蔓延', description: '水肿从乳房蔓延至胸壁', feedback: 'BOSS扩大淋巴管阻塞范围，水肿从乳房蔓延至胸壁、腋窝，皮肤紧绷发亮，按压无凹陷...' },
      { name: '毛孔角化', description: '毛孔扩大变硬', feedback: 'BOSS刺激水肿皮肤的毛囊角质增生，毛孔扩大变硬，橘皮纹理加粗，伴随皮肤瘙痒...' },
      { name: '淋巴管栓堵', description: '彻底阻塞主淋巴管', feedback: 'BOSS形成实性淋巴栓，彻底阻塞主淋巴管，乳房呈球形肿胀，皮肤温度升高...' }
    ],
    week: 1
  },
  lymphNode: {
    id: 'lymphNode',
    name: '腋下淋巴结肿大BOSS',
    description: '淋巴系统异常的化身，肿胀的淋巴结堵塞淋巴回流',
    symptoms: ['腋下出现肿块', '淋巴结肿大', '可能伴有压痛'],
    science: {
      mechanism: '淋巴系统免疫功能异常，淋巴结反应性增生或转移',
      earlySigns: ['腋下无痛肿块', '淋巴结质地变硬', '活动度差'],
      medicalAdvice: '腋下淋巴结肿大需警惕乳腺癌转移，应及时检查'
    },
    skills: [
      { name: '淋巴粘连术', description: '淋巴结融合成团', feedback: 'BOSS向腋窝扩散，淋巴结由小变大、由少变多，质地坚硬如石，最终融合成团并与周围组织粘连...' },
      { name: '淋巴结破溃', description: '淋巴结破溃流脓', feedback: 'BOSS侵蚀肿大淋巴结，皮肤表面破溃，流出暗红色血性脓液，伴随恶臭...' },
      { name: '区域扩散', description: '肿大淋巴结蔓延', feedback: 'BOSS沿淋巴链扩散，肿大淋巴结从腋窝蔓延至锁骨上、胸骨旁，形成串珠状硬块...' },
      { name: '淋巴压迫', description: '压迫腋静脉与神经', feedback: 'BOSS融合的淋巴结团压迫腋静脉与神经，导致上臂肿胀、麻木，活动受限...' }
    ],
    week: 2
  },
  nippleDischarge: {
    id: 'nippleDischarge',
    name: '乳头溢液BOSS',
    description: '乳腺分泌异常的化身，异常分泌物从乳头流出',
    symptoms: ['乳头有异常分泌物', '分泌物可能带血', '单侧单孔溢液'],
    science: {
      mechanism: '乳腺导管内病变刺激分泌细胞异常分泌',
      earlySigns: ['乳头溢液', '溢液带血', '自发性溢液'],
      medicalAdvice: '乳头溢液尤其是血性溢液需及时就医检查'
    },
    skills: [
      { name: '导管逆流', description: '暗红色液体从乳头渗出', feedback: 'BOSS腐蚀乳腺导管，暗红色液体从乳头单孔渗出，在非哺乳期异常流淌...' },
      { name: '溢液增多', description: '溢液变为持续性', feedback: 'BOSS扩张病变导管，乳头溢液从间断性变为持续性，液体量增多，呈鲜红色血性...' },
      { name: '多管溢液', description: '多个乳孔同时渗出', feedback: 'BOSS侵犯多个乳腺导管，乳头多个乳孔同时渗出溢液，液体混合黏液与凝血块...' },
      { name: '导管闭塞', description: '导管内形成癌栓', feedback: 'BOSS在导管内形成癌栓，溢液突然停止，乳头出现胀痛，触摸可及导管内硬块...' }
    ],
    week: 1
  },
  nippleRetraction: {
    id: 'nippleRetraction',
    name: '乳头内陷BOSS',
    description: '乳腺导管挛缩的具象化，牵拉乳头向内凹陷',
    symptoms: ['乳头向内凹陷', '乳头位置异常', '可能伴有分泌物'],
    science: {
      mechanism: '乳腺导管周围纤维组织挛缩，牵拉乳头向内',
      earlySigns: ['乳头逐渐内陷', '乳晕皮肤皱缩', '乳头方向改变'],
      medicalAdvice: '突然出现乳头内陷需警惕乳腺癌，应及时就医'
    },
    skills: [
      { name: '纤维牵拉', description: '乳头被牵向一侧', feedback: 'BOSS收缩乳管纤维，乳头被无形之力牵向一侧，逐渐扁平、回缩，最终陷入乳晕后方...' },
      { name: '乳头固定', description: '乳头与乳晕组织粘连', feedback: 'BOSS将乳头与乳晕组织粘连固定，内陷乳头无法手动拉出，伴随乳晕皮肤增厚...' },
      { name: '乳头破溃', description: '乳头顶端破溃结痂', feedback: 'BOSS持续牵拉乳管，内陷乳头因摩擦与缺血，顶端出现破溃、结痂，反复不愈...' },
      { name: '乳晕浸润', description: '乳晕出现硬质斑块', feedback: 'BOSS向乳晕扩散，乳晕出现硬质斑块，与内陷乳头连成一体，边界模糊...' }
    ],
    week: 2
  }
};

// 一周目BOSS顺序（全视角统一）
export const WEEK1_BOSSES: BossType[] = ['breastLump', 'nippleDischarge', 'orangePeel'];

// 二周目BOSS顺序（全视角统一）
export const WEEK2_BOSSES: BossType[] = ['lymphNode', 'nippleRetraction', 'skinDimple'];
