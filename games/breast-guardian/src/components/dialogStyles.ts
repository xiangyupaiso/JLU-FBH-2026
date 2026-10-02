// 复古像素 RPG 羊皮纸/象牙白对话框共享样式（VisualNovel / TutorialGuide / RealityTrigger / SpecialEnding 统一使用）
// 交互约定：点击全屏任意区域推进下一句，无独立大按钮

// 主对话框底板：象牙米白不透明底 + 4px 深咖啡外框 + 像素硬阴影
export const DIALOG_BOX =
  'relative rounded-none bg-[#FFFDF8] border-4 border-[#3E2723] shadow-[0_8px_0_rgba(0,0,0,0.35)]';

// 像素内镶嵌线（浅金），需作为 DIALOG_BOX 的直接子元素渲染
export const DIALOG_INNER =
  'pointer-events-none absolute inset-1 border-2 border-[#D4A373]';

// 底部环境暗角：压住立绘底脚，保证画面辨识度
export const DIALOG_VIGNETTE =
  'absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none';

// 复古像素木牌铭牌：深酒红底 + 金字（仅非旁白时渲染）
export const SPEAKER_TAG =
  'absolute -top-5 left-4 z-10 flex items-center gap-1.5 rounded-none border-2 border-[#3E2723] bg-[#6B2D5C] px-4 py-0.5 text-sm font-bold tracking-wider text-[#FFE082] shadow-[0_2px_0_#3E2723] select-none';

// 铭牌内头像位（像素方框）
export const SPEAKER_AVATAR =
  'flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-none border border-[#3E2723] bg-[#4A2040] text-[10px]';

// 对话正文：深咖高对比，任何背景 100% 清晰
export const DIALOG_TEXT = 'min-h-[52px] text-[#2B1B17] text-base md:text-lg leading-relaxed font-medium';

// 旁白正文（斜体弱化，无铭牌）
export const DIALOG_TEXT_NARRATION = 'italic text-[#5D4037] font-normal';

// 进度行：像素虚线分隔
export const DIALOG_PROGRESS =
  'mt-4 flex items-center justify-between border-t-2 border-dashed border-[#D4A373] pt-2';

// 右下角继续指引容器（绝对定位版）
export const NEXT_HINT =
  'absolute bottom-2 right-3 flex items-center gap-1 text-xs font-bold text-[#8D6E63] select-none';

// 继续指引（行内版）
export const NEXT_HINT_INLINE =
  'flex items-center gap-1 text-xs font-bold text-[#8D6E63] select-none';

// 跳动像素小箭头
export const NEXT_ARROW = 'inline-block animate-bounce text-[#D81B60]';

// 控制按钮（回退/自动/隐藏/快进/设置统一像素风）
export const CONTROL_BUTTON =
  'flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8] p-2 text-[#3E2723] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#F3E5CE] active:translate-y-0.5 active:shadow-none';

// 控制按钮禁用态（回退到头）
export const CONTROL_BUTTON_DISABLED =
  'flex items-center gap-1 rounded-none border-2 border-[#3E2723]/40 bg-[#E8E0D4] p-2 text-[#3E2723]/40 shadow-none cursor-not-allowed';

// 控制按钮激活态（自动播放开启）
export const CONTROL_BUTTON_ACTIVE =
  'flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#6B2D5C] p-2 text-[#FFE082] shadow-[0_3px_0_#3E2723] transition-all hover:bg-[#7A3568] active:translate-y-0.5 active:shadow-none';

// 分支选项遮罩：柔和粉雾
export const CHOICE_OVERLAY =
  'absolute inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md';

// 选项层标题
export const CHOICE_TITLE = 'text-center text-lg font-bold text-stone-800 mb-4 drop-shadow-sm md:text-xl';

// 选项卡片
export const CHOICE_BUTTON =
  'w-full max-w-xl bg-white/95 border-2 border-pink-200 text-stone-700 shadow-lg px-6 py-3.5 rounded-xl text-left transition-all duration-200 cursor-pointer hover:border-pink-400 hover:bg-pink-50/90 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(244,114,182,0.35)]';

// 选项序号徽章
export const CHOICE_BADGE =
  'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400 text-sm font-bold text-white shadow-sm mr-3';
