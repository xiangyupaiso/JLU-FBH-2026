import { assetUrl } from '@/data/assetUrls';

export type AssetCategory = 'character' | 'scene' | 'boss' | 'cell' | 'support';

export interface VisualAssetVariant {
  id: string;
  name: string;
  state: string;
  category: AssetCategory;
  path: string | undefined;
}

export interface SceneAsset {
  id: string;
  name: string;
  group: 'common' | 'child' | 'adult' | 'elder' | 'medical' | 'macro';
  path: string | undefined;
}

/**
 * Characters/cells/bosses live at `characters/<group>/<name>-<state>.png`.
 * The path is resolved to an official iGEM URL through `assetUrl`.
 */
const toAssetPath = (group: string, name: string, state: string) =>
  assetUrl(`assets/characters/${group}/${name}-${state}.png`);

const toScenePath = (group: string, name: string) =>
  assetUrl(`assets/scenes/${group}/${name}.png`);

const variants = (group: string, name: string, states: string[], category: AssetCategory = 'character'): VisualAssetVariant[] =>
  states.map((state) => ({
    id: `${group}-${name}-${state}`,
    name,
    state,
    category,
    path: toAssetPath(group, name, state)
  }));

export const CHARACTER_ASSETS: VisualAssetVariant[] = [
  ...variants('child-protagonist', '幼年主角', ['正常', '懵懂', '任性', '懂事', '愧疚', '开心', '害怕', '心疼', '焦急', '固执']),
  ...variants('adult-protagonist', '青壮年主角', ['正常', '焦虑', '坚定', '疲惫', '懊悔', '轻松', '好奇', '温暖', '心疼', '紧张', '恐惧']),
  ...variants('elder-protagonist', '老年主角', ['正常', '焦虑', '坚定', '懊悔', '疲惫', '期待', '执迷', '恐惧', '温暖', '愧疚', '固执', '安心']),
  ...variants('paimon', '派蒙', ['开心', '心疼', '郑重', '哽咽', '焦急', '无奈', '软糯', '雀跃', '赞许', '严肃', '傲娇', '期待', '骄傲', '认真', '撇嘴', '愤怒', '绝望', '温柔', '担忧', '欣慰']),
  ...variants('family', '妈妈', ['温柔', '疲惫', '苍白', '感动', '难过', '委屈', '开心', '消沉', '麻木', '失落', '欣慰', '疼痛', '担忧'], 'support'),
  ...variants('family', '爸爸', ['稳重', '严肃'], 'support'),
  ...variants('family', '儿子', ['心疼', '焦急', '担忧', '愤怒', '疲惫', '诚恳'], 'support'),
  ...variants('family', '女儿', ['担忧', '温柔', '无奈', '恳求', '委屈', '哭泣'], 'support'),
  ...variants('family', '儿媳', ['温柔', '细心', '担忧', '贴心'], 'support'),
  ...variants('family', '小孙女', ['活泼', '软糯'], 'support'),
  ...variants('workplace', '经理', ['威严', '缓和', '满意', '愣住', '愤怒'], 'support'),
  ...variants('workplace', '小李', ['苦相', '谨慎', '疲惫', '同情'], 'support'),
  ...variants('workplace', '张总', ['随和', '笑意'], 'support'),
  ...variants('workplace', '甲方总负责人', ['严肃', '满意'], 'support'),
  ...variants('workplace', '王哥', ['友善'], 'support'),
  ...variants('workplace', '同事', ['同情', '起哄', '担忧'], 'support'),
  ...variants('medical', '乳腺科医生（专家）', ['专业', '严肃', '温和'], 'support'),
  ...variants('medical', '社区医生', ['专业'], 'support'),
  ...variants('medical', '营养师', ['专业'], 'support'),
  ...variants('medical', '药店店员', ['友善', '随意'], 'support'),
  ...variants('medical', '民间老郎中', ['神秘'], 'support'),
  ...variants('neighbors', '张阿姨', ['热心'], 'support'),
  ...variants('neighbors', '李阿姨', ['附和'], 'support'),
  ...variants('neighbors', '王阿姨', ['热心'], 'support'),
  ...variants('neighbors', '刘阿姨', ['附和'], 'support'),
  ...variants('neighbors', '邻居', ['热心'], 'support'),
  ...variants('neighbors', '群友', ['友善'], 'support')
];

export const CELL_ASSETS: VisualAssetVariant[] = [
  ...variants('cells', '分泌细胞', ['健康', '虚弱', '愉悦', '委屈', '疲惫', '胀痛', '恐惧', '肿胀', '异常', '干瘪'], 'cell'),
  ...variants('cells', '巨噬细胞', ['爽朗', '疲惫', '虚弱', '小巧', '活泼', '醉酒'], 'cell'),
  ...variants('cells', '淋巴细胞', ['活泼', '无助', '欢快', '肿大', '傲娇', '期待', '急促', '警惕'], 'cell'),
  ...variants('cells', '内分泌调节细胞', ['正常', '紊乱', '疲惫'], 'cell'),
  ...variants('cells', '雌激素调节细胞', ['正常', '紊乱'], 'cell')
];

export const BOSS_ASSETS: VisualAssetVariant[] = [
  ...variants('bosses', '乳头内陷 BOSS', ['虚弱', '狰狞'], 'boss'),
  ...variants('bosses', '乳头溢液 BOSS', ['虚弱', '狰狞'], 'boss'),
  ...variants('bosses', '腋下淋巴结肿大 BOSS', ['虚弱', '狰狞', '嚣张'], 'boss'),
  ...variants('bosses', '乳房硬块 BOSS', ['虚弱', '狰狞', '嚣张'], 'boss'),
  ...variants('bosses', '酒窝征 BOSS', ['虚弱', '狰狞'], 'boss'),
  ...variants('bosses', '橘皮样改变 BOSS', ['虚弱', '狰狞'], 'boss')
];

export const SCENE_ASSETS: SceneAsset[] = [
  ...['大脑记忆中枢', '卧室', '客厅', '厨房', '乳腺主城（正常）', '乳腺主城（黑雾笼罩）'].map((name) => ({
    id: `common-${name}`,
    name,
    group: 'common' as const,
    path: toScenePath('common', name)
  })),
  ...['妈妈的卧室', '书房', '公园'].map((name) => ({
    id: `child-${name}`,
    name,
    group: 'child' as const,
    path: toScenePath('child', name)
  })),
  ...['职场办公室', '酒店包厢'].map((name) => ({
    id: `adult-${name}`,
    name,
    group: 'adult' as const,
    path: toScenePath('adult', name)
  })),
  ...['小区花园', '正规医院', '社区医院', '三甲医院', '体检中心'].map((name) => ({
    id: `elder-${name}`,
    name,
    group: 'elder' as const,
    path: toScenePath('elder', name)
  })),
  ...['办公室', '家里', '医院', '社区'].map((name) => ({
    id: `macro-${name}`,
    name,
    group: 'macro' as const,
    path: toScenePath('macro', name)
  }))
];

export const VISUAL_ASSET_DATABASE = {
  characters: CHARACTER_ASSETS,
  cells: CELL_ASSETS,
  bosses: BOSS_ASSETS,
  scenes: SCENE_ASSETS
};

const safeAssetName = (value: string) =>
  value
    .replaceAll('（', '(')
    .replaceAll('）', ')')
    .replaceAll(' ', '-')
    .replaceAll('/', '-')
    .replaceAll('：', '-')
    .replaceAll(':', '-')
    .replaceAll('--', '-');

/**
 * Scene name -> the local asset path it used to load from.
 * Kept as local paths (not URLs) so the file stays a readable 1:1 record;
 * `getSceneAssetPath` resolves each entry through `assetUrl` at call time.
 */
const SCENE_PATHS: Record<string, string> = {
  大脑记忆中枢: 'assets/scenes/common/大脑记忆中枢.png',
  '乳腺主城（正常）': 'assets/scenes/common/乳腺主城(正常).jpg',
  '乳腺主城（黑雾笼罩）': 'assets/scenes/common/乳腺主城(黑雾笼罩).png',
  卧室: 'assets/scenes/common/卧室.jpg',
  客厅: 'assets/scenes/common/客厅.jpg',
  家庭客厅: 'assets/scenes/common/客厅.jpg',
  厨房: 'assets/scenes/common/厨房.jpg',
  妈妈的卧室: 'assets/scenes/child-adult/妈妈的卧室.jpg',
  书房: 'assets/scenes/child-adult/书房.jpg',
  公园: 'assets/scenes/child-adult/公园.jpg',
  职场办公室: 'assets/scenes/child-adult/职场办公室.png',
  酒店包厢: 'assets/scenes/child-adult/酒店包厢.png',
  小区花园: 'assets/scenes/elder/小区花园.jpg',
  正规医院: 'assets/scenes/elder/正规医院.png',
  社区医院: 'assets/scenes/elder/社区医院.jpg',
  三甲医院: 'assets/scenes/elder/三甲医院.png',
  体检中心: 'assets/scenes/elder/体检中心.png',
  办公室: 'assets/scenes/child-adult/职场办公室.png',
  家里: 'assets/scenes/common/客厅.jpg',
  医院: 'assets/scenes/elder/正规医院.png',
  社区: 'assets/scenes/elder/小区花园.jpg',
  '碎片化记忆中枢': 'assets/scenes/promo/碎片化记忆中枢.png',
  '生信筛选研究像素背景图': 'assets/scenes/promo/生信筛选研究像素背景图.jpg',
  '环状 RNA 载体像素背景图': 'assets/scenes/promo/环状 RNA 载体像素背景图.jpg',
  '免疫通路像素背景图': 'assets/scenes/promo/免疫通路像素背景图.jpg',
  '多癌种拓展平台像素背景图': 'assets/scenes/promo/多癌种拓展平台像素背景图.jpg',
  '激活的碎片化记忆中枢': 'assets/scenes/promo/激活的碎片化记忆中枢.png',
  结尾页: 'assets/ui/ending-bg.jpg'
};

const CHARACTER_GROUPS: Record<string, string> = {
  派蒙: 'paimon',
  妈妈: 'family',
  爸爸: 'family',
  儿子: 'family',
  女儿: 'family',
  儿媳: 'family',
  小孙女: 'family',
  经理: 'workplace',
  小李: 'workplace',
  张总: 'workplace',
  甲方总负责人: 'workplace',
  王哥: 'workplace',
  同事: 'workplace',
  '乳腺科医生（专家）': 'medical',
  乳腺科医生: 'medical',
  医生: 'medical',
  社区医生: 'medical',
  营养师: 'medical',
  药店店员: 'medical',
  民间老郎中: 'medical',
  张阿姨: 'neighbors',
  李阿姨: 'neighbors',
  王阿姨: 'neighbors',
  刘阿姨: 'neighbors',
  邻居: 'neighbors',
  群友: 'neighbors',
  分泌细胞: 'cells',
  巨噬细胞: 'cells',
  淋巴细胞: 'cells',
  内分泌调节细胞: 'cells',
  雌激素调节细胞: 'cells'
};

const ROLE_ALIASES: Record<string, string> = {
  乳腺科医生: '乳腺科医生（专家）',
  乳腺科专家: '乳腺科医生（专家）',
  医生: '乳腺科医生（专家）',
  民间郎中: '民间老郎中',
  '乳房酒窝征 BOSS': '酒窝征 BOSS',
  '酒窝综合征 BOSS': '酒窝征 BOSS',
  '乳房橘皮样改变 BOSS': '橘皮样改变 BOSS',
  '橘皮样皮肤改变 BOSS': '橘皮样改变 BOSS',
  '乳房硬结节 BOSS': '乳房硬块 BOSS'
};

const STATE_ALIASES: Record<string, Record<string, string>> = {
  主角: {
    窘迫: '焦虑',
    慌乱: '焦虑',
    眩晕: '疲惫',
    绝望: '恐惧',
    痛苦: '恐惧',
    虚弱: '疲惫'
  },
  派蒙: {
    正常: '开心'
  },
  经理: {
    紧张: '威严',
    尴尬: '愣住'
  },
  小李: {
    紧张: '谨慎'
  },
  女儿: {
    心疼: '担忧'
  },
  儿子: {
    开心: '心疼',
    轻松: '诚恳'
  },
  '乳房硬块 BOSS': {
    败退: '虚弱'
  },
  '腋下淋巴结肿大 BOSS': {
    败退: '虚弱'
  },
  '乳头内陷 BOSS': {
    败退: '虚弱',
    嚣张: '狰狞'
  },
  '乳头溢液 BOSS': {
    败退: '虚弱',
    嚣张: '狰狞'
  },
  '酒窝征 BOSS': {
    败退: '虚弱',
    嚣张: '狰狞'
  },
  '橘皮样改变 BOSS': {
    败退: '虚弱',
    嚣张: '狰狞'
  }
};

const BOSS_NAME_BY_ID: Record<string, string> = {
  breastLump: '乳房硬块 BOSS',
  lymphNode: '腋下淋巴结肿大 BOSS',
  nippleRetraction: '乳头内陷 BOSS',
  nippleDischarge: '乳头溢液 BOSS',
  skinDimple: '酒窝征 BOSS',
  orangePeel: '橘皮样改变 BOSS'
};

export function getSceneAssetPath(sceneName?: string) {
  if (!sceneName) return undefined;
  return assetUrl(SCENE_PATHS[sceneName.trim()]);
}

export function getCharacterAssetPath(role: string, state: string, perspective?: 'child' | 'adult' | 'elder') {
  const normalizedRole = role.replace('（意识音）', '').trim();
  const normalizedState = state.trim();
  const assetRole = ROLE_ALIASES[normalizedRole] || normalizedRole;
  const assetState =
    normalizedRole === '主角' && perspective === 'child' && normalizedState === '好奇'
      ? '懵懂'
      : normalizedRole === '主角' && perspective === 'child' && normalizedState === '坚定'
        ? '懂事'
        : normalizedRole === '主角' && perspective === 'adult' && normalizedState === '期待'
          ? '好奇'
          : normalizedRole === '主角' && perspective === 'elder' && normalizedState === '好奇'
            ? '期待'
            : normalizedRole === '主角' && perspective === 'elder' && normalizedState === '开心'
              ? '安心'
              : normalizedRole === '主角' && perspective === 'elder' && normalizedState === '轻松'
                ? '温暖'
                : STATE_ALIASES[assetRole]?.[normalizedState] || normalizedState;
  let group = CHARACTER_GROUPS[assetRole];
  if (normalizedRole === '主角') {
    group = `${perspective || 'child'}-protagonist`;
  }
  if (normalizedRole.includes('BOSS')) {
    group = 'bosses';
  }
  if (!group) return undefined;
  return assetUrl(`assets/characters/${group}/${safeAssetName(assetRole)}-${safeAssetName(assetState)}.png`);
}

export function getBossAssetPath(bossId: string, state = '狰狞') {
  const name = BOSS_NAME_BY_ID[bossId];
  if (!name) return undefined;
  return assetUrl(`assets/characters/bosses/${safeAssetName(name)}-${safeAssetName(state)}.png`);
}
