/**
 * circRNA 爆炸猫 — 全量卡牌元数据与游戏常量
 * 含 Lucide 图标映射、CirCure 分类色、iGEM 科普背景
 */

import type { LucideIcon } from 'lucide-react';
import {
  Skull, ShieldCheck, Ban, Droplet, Brain, Leaf,
  Shuffle, Eye, Search, ArrowLeftRight,
  Target, ScrollText, Circle, FlaskConical,
} from 'lucide-react';
import type { CardKey, CategoryKey, Lang, Localized, NopeEffect } from '../types/game';

// ───────── 卡牌元数据接口 ─────────

export interface CardMetadata {
  key: CardKey;
  icon: LucideIcon;
  category: CategoryKey;
  name: Localized;
  categoryLabel: Localized;
  description: Localized;
  isComponent: boolean;
  isCore: boolean;
  /** iGEM 科普背景（新增） */
  science: Localized;
}

// ───────── 14 种卡牌完整元数据 ─────────

export const CARD_META: Record<CardKey, CardMetadata> = {
  bomb: {
    key: 'bomb',
    icon: Skull,
    category: 't-tumor',
    name: { cn: '肿瘤爆发', en: 'Tumor Outbreak' },
    categoryLabel: { cn: '免疫逃逸', en: 'Exploding' },
    description: { cn: '抽到即出局，除非打出 circRNA 疫苗', en: 'Draw it & out, unless you defuse' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '三阴性乳腺癌(TNBC)通过 PD-L1 等机制逃逸免疫监视，模拟肿瘤复发爆发。',
      en: 'TNBC escapes immune surveillance via PD-L1, modeling tumor relapse outbreak.',
    },
  },
  defuse: {
    key: 'defuse',
    icon: ShieldCheck,
    category: 't-immune',
    name: { cn: 'circRNA 疫苗', en: 'circRNA Vaccine' },
    categoryLabel: { cn: '拆弹 CTL', en: 'Defuse' },
    description: { cn: '化解肿瘤爆发，秘密塞回牌堆', en: 'Neutralize an outbreak; reinsert it' },
    isComponent: false,
    isCore: false,
    science: {
      cn: 'circRNA 疫苗编码肿瘤抗原表位，激活 CTL 特异性杀伤肿瘤细胞，实现"拆弹"。',
      en: 'circRNA vaccine encodes tumor epitopes, activating CTLs to kill tumor — defusing.',
    },
  },
  nope: {
    key: 'nope',
    icon: Ban,
    category: 't-brand',
    name: { cn: '免疫检查点抑制剂', en: 'Checkpoint (ICI)' },
    categoryLabel: { cn: '否决', en: 'Nope' },
    description: { cn: '别人出功能牌时打出，否决其效果', en: 'Cancel an opponent action' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '免疫检查点抑制剂(anti-PD-1/PD-L1)解除肿瘤诱导的免疫抑制，可"否决"免疫逃逸。',
      en: 'ICIs (anti-PD-1/PD-L1) release tumor-induced suppression — noping immune escape.',
    },
  },
  attack: {
    key: 'attack',
    icon: Droplet,
    category: 't-tumor',
    name: { cn: '肿瘤转移', en: 'Metastasis' },
    categoryLabel: { cn: '攻击', en: 'Attack' },
    description: { cn: '不抽牌，下家连做2回合', en: 'End turn; next player takes 2 turns' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '肿瘤转移增加免疫负担，迫使下一支团队连续应对两轮治疗压力。',
      en: 'Metastasis increases immune burden, forcing the next team into two turns.',
    },
  },
  skip: {
    key: 'skip',
    icon: Brain,
    category: 't-immune',
    name: { cn: '免疫记忆', en: 'Immune Memory' },
    categoryLabel: { cn: '跳过', en: 'Skip' },
    description: { cn: '本回合不抽牌直接结束', en: 'End your turn without drawing' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '记忆 T 细胞形成长期免疫监视，使当前回合无需抽牌即可安全结束。',
      en: 'Memory T cells establish surveillance, ending the turn without drawing.',
    },
  },
  favor: {
    key: 'favor',
    icon: Leaf,
    category: 't-gold',
    name: { cn: '抗原提呈', en: 'Antigen Present.' },
    categoryLabel: { cn: '索要 DC', en: 'Favor' },
    description: { cn: '对手挑一张牌给你', en: 'A player gives you a card' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '树突状细胞(DC)抗原提呈启动适应性免疫，从对手处获取一张"抗原"牌。',
      en: 'DC antigen presentation initiates adaptive immunity — taking a card.',
    },
  },
  shuffle: {
    key: 'shuffle',
    icon: Shuffle,
    category: 't-tumor',
    name: { cn: '肿瘤异质性', en: 'Heterogeneity' },
    categoryLabel: { cn: '洗牌', en: 'Shuffle' },
    description: { cn: '洗混整个抽牌堆', en: 'Shuffle the draw pile' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '肿瘤克隆异质性导致抗原漂移，重洗牌堆模拟治疗进程的不确定性。',
      en: 'Tumor clonal heterogeneity drives antigen drift — reshuffling the pile.',
    },
  },
  future: {
    key: 'future',
    icon: Eye,
    category: 't-violet',
    name: { cn: '新抗原预测', en: 'Neoantigen Pred.' },
    categoryLabel: { cn: '预知', en: 'Future' },
    description: { cn: '查看牌堆顶端3张', en: 'View top 3 cards' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '新抗原预测通过测序与生信分析预判牌堆顶端3张，模拟精准医学的前瞻能力。',
      en: 'Neoantigen prediction foresees the top 3 cards — precision foresight.',
    },
  },
  bottom: {
    key: 'bottom',
    icon: Search,
    category: 't-violet',
    name: { cn: 'ctDNA 深层监测', en: 'Deep MRD Monitoring' },
    categoryLabel: { cn: '抽底', en: 'Draw Bottom' },
    description: { cn: '从牌堆底部抽 1 张并结束回合', en: 'Draw the bottom card and end your turn' },
    isComponent: false,
    isCore: false,
    science: {
      cn: 'ctDNA 深层监测可捕捉微小残留病灶，从常规观察之外寻找隐藏的复发信号。',
      en: 'Deep ctDNA monitoring detects minimal residual disease beyond routine observation.',
    },
  },
  swap: {
    key: 'swap',
    icon: ArrowLeftRight,
    category: 't-gold',
    name: { cn: '免疫突触交换', en: 'Immune Synapse Swap' },
    categoryLabel: { cn: '秘密交换', en: 'Swap' },
    description: { cn: '给对手 1 张，再随机取得其 1 张牌', en: 'Give 1 card, then take 1 at random' },
    isComponent: false,
    isCore: false,
    science: {
      cn: '免疫突触协调抗原呈递细胞与 T 细胞间的信息交换，模拟资源的双向传递。',
      en: 'The immune synapse coordinates two-way information transfer between APCs and T cells.',
    },
  },
  ires: {
    key: 'ires',
    icon: Target,
    category: 't-comp',
    name: { cn: 'IRES', en: 'IRES' },
    categoryLabel: { cn: '核心组件', en: 'Core' },
    description: { cn: '核心组件，拼装构建体', en: 'Core component' },
    isComponent: true,
    isCore: true,
    science: {
      cn: 'IRES(内部核糖体进入位点)是 circRNA 疫苗核心组件，驱动非帽依赖性翻译起始。',
      en: 'IRES drives cap-independent translation — a core construct component.',
    },
  },
  orf: {
    key: 'orf',
    icon: ScrollText,
    category: 't-comp',
    name: { cn: '抗原ORF', en: 'Antigen ORF' },
    categoryLabel: { cn: '核心组件', en: 'Core' },
    description: { cn: '核心组件，拼装构建体', en: 'Core component' },
    isComponent: true,
    isCore: true,
    science: {
      cn: '抗原 ORF(开放阅读框)编码肿瘤特异性抗原，是 circRNA 疫苗核心组件之一。',
      en: 'Antigen ORF encodes tumor-specific antigens — a core component.',
    },
  },
  circ: {
    key: 'circ',
    icon: Circle,
    category: 't-comp',
    name: { cn: '环化元件', en: 'Circular. Elem.' },
    categoryLabel: { cn: '核心组件', en: 'Core' },
    description: { cn: '核心组件，拼装构建体', en: 'Core component' },
    isComponent: true,
    isCore: true,
    science: {
      cn: '环化元件使线性 RNA 首尾共价连接形成环状结构，增强稳定性与翻译持续性。',
      en: 'Circularization element links RNA ends into a stable circular structure.',
    },
  },
  lnp: {
    key: 'lnp',
    icon: FlaskConical,
    category: 't-comp',
    name: { cn: 'LNP递送', en: 'LNP Delivery' },
    categoryLabel: { cn: '递送组件', en: 'Delivery' },
    description: { cn: '递送组件，赋予靶向性', en: 'Delivery — adds targeting' },
    isComponent: true,
    isCore: false,
    science: {
      cn: 'LNP(脂质纳米颗粒)递送系统赋予 circRNA 疫苗靶向能力，集齐4组件即可精准点名。',
      en: 'LNP grants targeted delivery — all 4 components enable precision targeting.',
    },
  },
};

// ───────── 分类色映射（CirCure 色板） ─────────

export const CATEGORY_COLORS: Record<CategoryKey, string> = {
  't-tumor': '#df705b',    // coral — 危险/爆发
  't-immune': '#2f6f68',   // success teal — 免疫/防护
  't-brand': '#173f78',    // navy — 结构性操作
  't-gold': '#c39a55',     // gold — 数据分类
  't-violet': '#667e8c',   // mutedBlue — 预测/信息
  't-comp': '#102f59',     // navyDeep — 组件/构建体
};

// ───────── 游戏常量 ─────────

/** 3 个核心组件（拼装无靶向构建体） */
export const CORE_COMPONENTS: CardKey[] = ['ires', 'orf', 'circ'];

/** 4 个组件（核心 + LNP，拼装靶向构建体） */
export const ALL_COMPONENTS: CardKey[] = ['ires', 'orf', 'circ', 'lnp'];

/** 手牌排序顺序 */
export const HAND_ORDER: CardKey[] = [
  'defuse', 'nope', 'attack', 'skip', 'favor',
  'shuffle', 'future', 'bottom', 'swap',
  'ires', 'orf', 'circ', 'lnp', 'bomb',
];

/** 统一印刷母牌池：按用户确认保留明细数量，总计 63 张。 */
export const PRINTED_DECK_COUNTS: Readonly<Record<CardKey, number>> = {
  bomb: 5,
  defuse: 8,
  nope: 5,
  attack: 4,
  skip: 4,
  favor: 4,
  shuffle: 4,
  future: 5,
  bottom: 2,
  swap: 2,
  ires: 5,
  orf: 5,
  circ: 5,
  lnp: 5,
};

export const PRINTED_DECK_SIZE = Object.values(PRINTED_DECK_COUNTS)
  .reduce((sum, count) => sum + count, 0);

/** 否决条与战报使用的效果名；构建体效果并非实体卡。 */
export function getNopeEffectName(effect: NopeEffect, lang: Lang): string {
  if (effect === 'coreBuild') return lang === 'cn' ? '三组件构建体效果' : '3-component construct';
  if (effect === 'targetedBuild') return lang === 'cn' ? '四组件构建体效果' : '4-component construct';
  return CARD_META[effect].name[lang];
}

/** 玩家头像 */
export const AVATARS: string[] = ['🧑‍🔬', '👩‍🔬', '🧫', '🦠', '💉', '🧪'];

/** 最大玩家数 */
export const MAX_PLAYERS = 6;

/** 机器人队名 */
export const BOT_NAMES: Localized[] = [
  { cn: '清华·B队', en: 'Team B' },
  { cn: '复旦·C队', en: 'Team C' },
  { cn: '浙大·D队', en: 'Team D' },
  { cn: '交大·E队', en: 'Team E' },
  { cn: '中科大·F队', en: 'Team F' },
];
