import { useCallback, useEffect, useState } from 'react';

import { SHEEP_LINES } from '@/data/sheepLines';
import { cn } from '@/lib/utils';

const SWITCH_MS = 5000;

interface SheepBubbleProps {
  /** 前景贴图路径（内含 IP 小羊） */
  src: string;
  alt?: string;
  /** 父级传入整体尺寸/定位，例如 absolute bottom-0 right-0 w-[38%] */
  className?: string;
  /**
   * 气泡定位。需对照前景贴图里小羊的实际位置传入锚点，
   * 例如 foreground-1 小羊在右下：bottom-[30%] right-[2%]。
   */
  bubbleClassName?: string;
  /** 贴图自身裁切/定位，例如 overflow-hidden 容器内 w-[167%] max-w-none absolute */
  imgClassName?: string;
}

interface SheepSpeechProps {
  /** 气泡外框的定位 / 布局，例如 absolute bottom-[28%] right-[6%] */
  className?: string;
  /** 气泡本体的尺寸 / 样式覆盖 */
  bubbleClassName?: string;
}

function pickNext(current: number) {
  if (SHEEP_LINES.length < 2) return current;
  let next = current;
  while (next === current) {
    next = Math.floor(Math.random() * SHEEP_LINES.length);
  }
  return next;
}

/**
 * 小羊话术状态：随机初始句 + 每 5s 自动切换 + 手动切换。
 * 供「小羊+气泡」一体组件与「独立气泡」组件复用。
 */
export function useSheepLine() {
  const [index, setIndex] = useState(() => Math.floor(Math.random() * SHEEP_LINES.length));

  const next = useCallback(() => setIndex((i) => pickNext(i)), []);

  useEffect(() => {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(() => setIndex((i) => pickNext(i)), SWITCH_MS);
    return () => window.clearInterval(id);
  }, []);

  return { line: SHEEP_LINES[index], next };
}

/**
 * 独立气泡组件（与角色装饰图分离渲染）。
 * 仅渲染话术气泡本体，不含角色图片，外层无任何背景色。
 */
export function SheepSpeech({ className = '', bubbleClassName = '' }: SheepSpeechProps) {
  const { line } = useSheepLine();

  return (
    <div className={cn('pointer-events-none', className)}>
      <div
        className={cn(
          'relative w-max max-w-[min(280px,72vw)] rounded-2xl border-2 border-pink-300 bg-pink-100/95 px-3 py-2 text-[13px] font-bold leading-snug text-pink-950 shadow-md sm:text-sm',
          bubbleClassName
        )}
      >
        {line}
        <span className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 rounded-sm border-b-2 border-r-2 border-pink-300 bg-pink-100" />
      </div>
    </div>
  );
}

/**
 * IP 小羊：点击随机切换一句话术，不点则每 5s 自动切换。
 * 气泡锚在小羊头部上方，用突出的粉红底色。
 */
export default function SheepBubble({
  src,
  alt = 'IP 小羊',
  className = '',
  bubbleClassName = '-top-2',
  imgClassName = '',
}: SheepBubbleProps) {
  const { line, next } = useSheepLine();

  return (
    // 外层容器保持透明：不添加任何 bg-white / 背景色，避免遮挡页面全局背景。
    <div className={cn('relative bg-transparent', className)}>
      <div
        className={cn(
          // 仅保留气泡框本体的圆角与粉色背景；气泡本身不拦截点击。
          'pointer-events-none absolute right-0 z-10 max-w-[85%] rounded-2xl border-2 border-pink-300 bg-pink-100/95 px-3 py-2 text-[13px] font-bold leading-snug text-pink-950 shadow-md sm:text-sm',
          bubbleClassName
        )}
      >
        {line}
        <span className="absolute -bottom-1.5 right-5 h-3 w-3 rotate-45 rounded-sm border-b-2 border-r-2 border-pink-300 bg-pink-100" />
      </div>
      <button
        type="button"
        onClick={next}
        className="block h-full w-full cursor-pointer border-0 bg-transparent p-0"
        title="点击小羊换一句"
      >
        <img src={src} alt={alt} className={cn('w-full select-none', imgClassName)} draggable={false} />
      </button>
    </div>
  );
}
