# Story Timeline 半圆旋转重构 Spec

## Why
当前时间轴采用左右交替卡片 + 中心竖线的经典布局，用户希望将其升级为**左侧引导时间线 + 右侧大圆转盘**的反馈闭环视觉：8 个人物卡片均匀分布在圆周上，滚动时整个圆盘旋转，把当前人物卡片转到视觉中心，前后卡片以高斯模糊形式可见，从而强化 "Every conversation must move the work" 的递进与闭环关系。

## What Changes
- 替换 `.story-timeline` 区域（`#evidenceTimeline`）的现有 DOM 与样式
- **左侧**：固定垂直引导时间线，8 个阶段节点，当前激活项高亮，未激活项灰色
- **右侧**：大尺寸完整圆盘，贴靠区域最右侧，8 个人物卡片均匀分布在圆周上
- 滚动时圆盘旋转，当前卡片转到圆盘左侧/视觉中心位置；非当前卡片可见但带高斯模糊、透明度降低、轻微缩小
- 滚动到底后自然回到第 1 阶段，形成 **1→8→1 反馈闭环**
- 圆环线使用现有 wine → teal 渐变，线宽加粗
- 保留现有卡片样式（头像、日期、角色、类型、标题、描述、"View evidence" 按钮）
- 保留现有弹窗（dialog）证据详情交互与数据属性
- 动画遵循 12 principles of animation（timing / easing / physics / staging）
- 响应式降级：窄屏改为垂直堆叠的简化时间线，并支持 `prefers-reduced-motion`

## Impact
- Affected code: `index.html` 的 `.story-timeline` HTML、CSS、JS
- Affected specs: 滚动动画、dialog 详情
- 不影响其它 section（`impact-scroll`、`loop-board`、`dossier` 等）

## ADDED Requirements

### Requirement: 左侧引导时间线高亮
The system SHALL display a vertical guide timeline on the left side with 8 stages, highlighting the current stage and graying out inactive stages.

#### Scenario: 阶段切换
- **WHEN** the active stage changes due to scroll
- **THEN** the corresponding guide item gains active color styling and inactive items become muted/gray

### Requirement: 右侧大圆转盘与人物卡片
The system SHALL display a large full-circle dial on the right side with 8 interviewee cards evenly distributed along its circumference.

#### Scenario: 滚动旋转
- **WHEN** user scrolls into and through `#evidenceTimeline`
- **THEN** the dial rotates so that the active card moves to the visual center (leftmost point of the circle), while preceding/following cards remain visible with Gaussian blur

### Requirement: 1→8→1 反馈闭环
The system SHALL rotate the dial through a full cycle so that after stage 8 the rotation continues back to stage 1, visually closing the feedback loop.

#### Scenario: 到达末尾
- **WHEN** user scrolls to the end of the timeline section
- **THEN** the dial shows stage 8 and then returns to stage 1, completing the loop

### Requirement: 动画符合 12 principles of animation
The system SHALL apply the timing/easing/physics/staging rules from the 12-principles-of-animation skill.

#### Scenario: 卡片切换与交互
- **WHEN** cards rotate, become active, or the user hovers/clicks a button
- **THEN** motion uses ease-out for entrances, ease-in for exits, durations under 300 ms for hover/active feedback, active states use scale 0.95–1.05, and only one focal element animates prominently at a time

## MODIFIED Requirements

### Requirement: 现有时间轴布局
- 原 `.timeline-list` 的左右交替卡片布局将被替换为左侧引导线 + 右侧大圆转盘布局
- 保留 `.timeline-card` 的样式变量与视觉语言
- 保留 `.timeline-open` 按钮点击打开 `#timelineDialog` 的交互

## REMOVED Requirements

### Requirement: 中心竖线 + 左右交替节点
**Reason**: 用户明确要求替换当前时间轴为左侧引导线 + 右侧大圆转盘
**Migration**: 时间节点信息迁移到左侧引导轴与卡片内部日期
