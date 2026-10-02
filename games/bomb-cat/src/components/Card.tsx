/**
 * CirCure Design System — Card 卡牌组件
 * 规范：paperBright bg · 28px radius · 1px border
 * Hover：translateY(-3px) + 底部 3px pinkThread 强调条 scaleX(0→1)
 * 变体：正面 / 背面 / 选中态
 */

import { motion } from 'framer-motion';
import { CARD_META, CATEGORY_COLORS } from '../constants/cards';
import type { CardKey, Lang } from '../types/game';

// ───────── Props ─────────

export interface CardProps {
  cardKey: CardKey;
  selected?: boolean;
  faceDown?: boolean;
  lang?: Lang;
  onClick?: () => void;
  className?: string;
}

// ───────── CirCure 常量 ─────────

const EASE_CIRCURE: [number, number, number, number] = [0.22, 1, 0.36, 1];

// ───────── variants ─────────

const cardVariants = {
  rest: { y: 0 },
  hover: { y: -3 },
};

const lineVariants = {
  rest: { scaleX: 0 },
  hover: { scaleX: 1 },
};

// ───────── 组件 ─────────

export function Card({
  cardKey,
  selected = false,
  faceDown = false,
  lang = 'cn',
  onClick,
  className = '',
}: CardProps) {
  const meta = CARD_META[cardKey];
  const categoryColor = CATEGORY_COLORS[meta.category];
  const Icon = meta.icon;
  const t = (l: { cn: string; en: string }) => (lang === 'cn' ? l.cn : l.en);

  // 背面：navy 深色简洁背面
  if (faceDown) {
    return (
      <div
        onClick={onClick}
        className={`flex flex-col items-center justify-center ${
          onClick ? 'cursor-pointer' : ''
        } ${className}`}
        style={{
          width: 126,
          height: 178,
          borderRadius: 'var(--radius-panel, 28px)',
          background: 'var(--color-navy-deep, #102f59)',
          border: '1px solid rgba(252,248,241,.1)',
          color: 'rgba(252,248,241,.3)',
        }}
      >
        <Icon size={28} style={{ opacity: 0.3 }} />
      </div>
    );
  }

  return (
    <motion.article
      onClick={onClick}
      initial="rest"
      animate={selected ? 'hover' : 'rest'}
      whileHover="hover"
      variants={cardVariants}
      transition={{ ease: EASE_CIRCURE, duration: 0.42 }}
      className={`relative flex flex-col overflow-hidden ${
        onClick ? 'cursor-pointer' : ''
      } ${className}`}
      style={{
        width: 126,
        minHeight: 178,
        borderRadius: 'var(--radius-panel, 28px)',
        background: 'var(--color-paper-bright, #fcf8f1)',
        border: `1px solid ${
          selected
            ? 'var(--color-pink-strong, #754356)'
            : 'rgba(27,23,25,.18)'
        }`,
        boxShadow: selected
          ? '0 0 0 2px var(--color-pink, #d784b3)'
          : '0 5px 18px rgba(66,45,54,.025)',
      }}
    >
      {/* 顶部分类条 */}
      <div className="px-2.5 py-2 text-white" style={{ background: categoryColor }}>
        <p
          className="text-[9px] font-extrabold uppercase tracking-wider opacity-90"
          style={{ fontFamily: 'var(--font-mono, monospace)' }}
        >
          {t(meta.categoryLabel)}
        </p>
        <p
          className="mt-0.5 text-[14.5px] font-extrabold leading-tight"
          style={{ fontFamily: 'var(--font-editorial, "Iowan Old Style", Baskerville, Georgia, serif)' }}
        >
          {t(meta.name)}
        </p>
      </div>

      {/* 图标区 */}
      <div className="flex flex-1 items-center justify-center py-2">
        <Icon size={30} style={{ color: categoryColor }} />
      </div>

      {/* 描述 */}
      <p
        className="px-2.5 pb-2 text-[10.5px] leading-snug"
        style={{
          fontFamily: 'var(--font-sans, -apple-system, sans-serif)',
          color: 'rgba(27,23,25,.7)',
        }}
      >
        {t(meta.description)}
      </p>

      {/* 底部粉色强调条 — hover/selected 时 scaleX(1) */}
      <motion.span
        variants={lineVariants}
        transition={{ ease: EASE_CIRCURE, duration: 0.36 }}
        className="absolute bottom-0 left-0 right-0 h-[3px] origin-left"
        style={{ background: 'var(--color-pink, #d784b3)' }}
      />
    </motion.article>
  );
}
