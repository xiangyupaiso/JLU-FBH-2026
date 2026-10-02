/**
 * CirCure Design System — Button 组件
 * 三变体：Primary Navy / Pink Thread / Ghost
 * 规范：min-height 42px · radius 6px · 13px/700 sans · hover translateY(-2px)
 */

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

// ───────── Props ─────────

export type ButtonVariant = 'primary' | 'pink' | 'ghost';
export type ButtonSize = 'default' | 'big';

export interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit';
}

// ───────── CirCure 常量 ─────────

const EASE_CIRCURE: [number, number, number, number] = [0.22, 1, 0.36, 1];

const variantStyles: Record<ButtonVariant, {
  bg: string;
  color: string;
  hoverBg: string;
  shadow?: string;
}> = {
  primary: {
    bg: 'var(--color-navy-deep, #102f59)',
    color: 'var(--color-paper-bright, #fcf8f1)',
    hoverBg: '#0c2649',
  },
  pink: {
    bg: 'var(--color-pink, #d784b3)',
    color: '#ffffff',
    hoverBg: '#c273a4',
  },
  ghost: {
    bg: 'transparent',
    color: 'var(--color-navy-deep, #102f59)',
    hoverBg: 'rgba(16,47,89,.06)',
    shadow: 'inset 0 0 0 1.5px var(--color-navy-deep, #102f59)',
  },
};

const sizeStyles: Record<ButtonSize, { padding: string; fontSize: string; width?: string }> = {
  default: { padding: '0 22px', fontSize: '13px' },
  big: { padding: '16px 24px', fontSize: '17px', width: '260px' },
};

// ───────── 组件 ─────────

export function Button({
  variant = 'primary',
  size = 'default',
  children,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonProps) {
  const vs = variantStyles[variant];
  const ss = sizeStyles[size];

  return (
    <motion.button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      whileHover={disabled ? undefined : { y: -2, backgroundColor: vs.hoverBg }}
      whileTap={disabled ? undefined : { y: 0 }}
      transition={{ ease: EASE_CIRCURE, duration: 0.26 }}
      className={`inline-flex items-center justify-center gap-2 font-bold rounded-[6px] ${
        disabled ? 'cursor-not-allowed' : 'cursor-pointer'
      } ${className}`}
      style={{
        minHeight: '42px',
        background: disabled ? 'var(--color-map, #e5d9d2)' : vs.bg,
        color: disabled ? 'var(--color-ink-faint, rgba(27,23,25,.46))' : vs.color,
        boxShadow: disabled ? 'none' : vs.shadow,
        letterSpacing: '-0.01em',
        fontFamily: 'var(--font-sans, -apple-system, sans-serif)',
        borderRadius: 'var(--radius-control, 6px)',
        padding: ss.padding,
        fontSize: ss.fontSize,
        ...(ss.width ? { width: ss.width, maxWidth: '80vw' } : {}),
      }}
    >
      {children}
    </motion.button>
  );
}
