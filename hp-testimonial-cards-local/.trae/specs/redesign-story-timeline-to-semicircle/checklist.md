# Checklist

- [x] `.story-timeline` 为左侧引导 + 右侧大圆转盘结构
- [x] 左侧引导时间线有 8 个 `.guide-item`，当前项高亮、未激活项灰色
- [x] 右侧 `.dial-stage` 包含大尺寸完整圆盘 `.dial` 和 8 个 `.dial-card`
- [x] 8 张卡片均匀分布在圆周上，并保持正向
- [x] 当前激活卡片位于圆盘左侧/视觉中心，非激活卡片可见但带高斯模糊、透明度降低、轻微缩小
- [x] 滚动时圆盘旋转，卡片按 1→8 顺序依次转到激活位置
- [x] 滚动到底后回到第 1 阶段，形成 1→8→1 反馈闭环
- [x] 动画时长、缓动、active 状态符合 12 principles of animation 规则
  - [x] 用户触发的 hover/active 动画时长 <= 300 ms
  - [x] 入场使用 ease-out，退场使用 ease-in
  - [x] 变形范围保持在 0.95–1.05 之间
  - [x] 无多个元素同时抢占视觉焦点
- [x] 窄屏（<= 900 px）布局正常降级为垂直时间线
- [x] `prefers-reduced-motion` 下禁用非必要动画
- [x] "View evidence" 弹窗仍可正常打开并显示对应内容
- [x] 无视觉回归到其它 section（`impact-scroll`、`loop-board`、`dossier` 等）
