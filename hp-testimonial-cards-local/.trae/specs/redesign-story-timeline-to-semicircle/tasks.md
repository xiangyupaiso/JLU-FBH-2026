# Tasks

- [x] Task 1: 重构 `.story-timeline` 为左侧引导 + 右侧大圆转盘 HTML 结构
  - [x] SubTask 1.1: 保留 `.story-timeline__head`，替换主体为 `.semicircle-timeline`，包含左侧 `.guide-axis` 和右侧 `.dial-stage`
  - [x] SubTask 1.2: 在 `.guide-axis` 内生成 8 个 `.guide-item`，包含编号、日期、角色、类型
  - [x] SubTask 1.3: 在 `.dial-stage` 内生成大尺寸完整圆盘 `.dial`，以及 8 个 `.dial-card.timeline-card` 均匀分布在圆周上
  - [x] SubTask 1.4: 每个 `.dial-card` 完整保留卡片内容、头像、按钮及所有 `data-*` 证据属性

- [x] Task 2: 实现大圆转盘样式
  - [x] SubTask 2.1: `.dial-stage` 贴靠最右侧，`.dial` 为大尺寸完整圆（`--dial-size: min(78vh, 44vw)`）
  - [x] SubTask 2.2: 圆环线使用现有 wine → teal 渐变，线宽 12 px
  - [x] SubTask 2.3: 8 张卡片通过极坐标定位均匀分布在圆周上，并保持正向（不随圆盘旋转而倾斜）
  - [x] SubTask 2.4: 当前激活卡片位于圆盘左侧/视觉中心；非激活卡片可见但带 `filter: blur(4px)`、透明度 0.55、轻微缩小
  - [x] SubTask 2.5: 实现 1→8→1 闭环视觉（滚动到底回到 01，并显示 `08 → 01` 闭环徽章）

- [x] Task 3: 实现滚动同步
  - [x] SubTask 3.1: 基于 `#evidenceTimeline` 滚动进度计算圆盘旋转角度（180° → -180°）
  - [x] SubTask 3.2: 根据当前激活卡片索引同步高亮左侧 `.guide-item`
  - [x] SubTask 3.3: 切换 `.dial-card.is-active`，并应用模糊/透明/缩放状态到非激活卡片
  - [x] SubTask 3.4: 使用 `requestAnimationFrame` + 滚动监听优化

- [x] Task 4: 添加交互动效（12 principles of animation）
  - [x] SubTask 4.1: 卡片激活/失活状态切换使用 ease-out 入场 / ease-in 退场，时长 <= 300 ms
  - [x] SubTask 4.2: 圆盘旋转使用类弹簧 cubic-bezier，避免线性
  - [x] SubTask 4.3: 左侧引导项切换使用淡入淡出 + 轻微位移
  - [x] SubTask 4.4: 按钮 active 状态符合 `physics-active-state`（scale 0.95–1.05、时长 < 300 ms）

- [x] Task 5: 响应式与无障碍降级
  - [x] SubTask 5.1: 窄屏（<= 900 px）改为垂直简化时间线（guide + stacked cards，隐藏 dial）
  - [x] SubTask 5.2: 确保触控设备可滑动浏览
  - [x] SubTask 5.3: 保留 `prefers-reduced-motion` 媒体查询，禁用非必要动画

- [x] Task 6: 保留并验证 dialog 交互
  - [x] SubTask 6.1: 确认 `.timeline-open` 按钮仍可打开 `#timelineDialog`
  - [x] SubTask 6.2: 确认 dialog `::backdrop` 保持 dim 效果
  - [x] SubTask 6.3: 验证所有 `data-*` 属性完整传递并正确渲染

# Task Dependencies
- Task 2 依赖 Task 1
- Task 3 依赖 Task 2
- Task 4 依赖 Task 2 与 Task 3
- Task 5 依赖 Task 2 与 Task 3
- Task 6 依赖 Task 1
