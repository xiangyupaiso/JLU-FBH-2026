# GSAP 重构映射清单 · Home 手写动画深度分析

> 分析对象：`src/hooks/useStoryNavAnimation.ts`（887 行动画内核）、`src/contents/home.tsx`（9 章节结构）、`src/styles/circure-home.css`（68KB，147 处变量消费点）
> 目标：在保持动效保真度的前提下，将原生 `requestAnimationFrame` + 弹簧物理 + CSS 变量驱动重写为 GSAP

---

## 架构总览

当前系统是**单 rAF 循环 + 9 路独立弹簧 + CSS 变量驱动**的纯手写架构：

```
scroll 事件(passive)
   └─→ requestPaint() 置 needsMeasure=true
         └─→ 下一帧 measureProgress()
               ├─ 用缓存布局 + 实时 scrollY 算出 9 个 target*Progress
               └─ paint()
                     ├─ followProgress() 逐路弹簧逼近
                     ├─ smoothstep / clamp 派生子进度
                     └─ 写回 --*-progress CSS 变量
                           └─ CSS calc() 驱动实际属性
```

零 React state 进帧，全部 mutable 闭包变量。

---

## 一、视图与动画分解（Keyframes & Tweens）

### 1.1 区段总表：进度变量与测量方式

| Section      | 驱动变量                                          | 测量方法               | Hold Zone | 弹簧 response(ms)     |
| ------------ | ------------------------------------------------- | ---------------------- | --------- | --------------------- |
| Opening      | `--opening-progress`                            | sticky 进度            | ✅ 0.72   | 110                   |
| History      | `--history-progress`                            | sticky 进度            | ✅ 0.72   | 122                   |
| Human        | `--human-progress`                              | sticky 进度            | ✅ 0.72   | 128                   |
| Expansion    | `--frame/radius/content/label/diagram-progress` | 视口穿越(0.62→-0.11)  | ❌        | 108                   |
| Coverage     | `--coverage-progress`                           | sticky 进度            | ✅ 0.72   | 100                   |
| Evidence     | `--evidence-progress`                           | sticky 进度            | ✅ 0.72   | 120                   |
| Engineering  | `--cycle-progress`                              | 视口穿越(0.88→0.2)    | ❌        | 108                   |
| Listening    | `--listening-progress`                          | 视口穿越(0.9→0.18)    | ❌        | 110                   |
| Translation  | `--translation-progress`                        | sticky 进度            | ✅ 0.72   | 124                   |
| Thread-guide | `--page-progress` / `--final-progress`        | 全页 scrollY/maxScroll | —        | 真·弹簧 stiffness 17 |

> sticky 进度 = `getStickyProgress`：`(scrollY − top + headerH) / (height − vh)`
> Hold Zone = `withCompletionHold(p/0.72)`，动画在 sticky 滚动的 72% 处完成，后 28% 留白静止。

### 1.2 各元素属性变化（from → to）

#### Opening（6 路子进度，阈值错峰）

| 元素                        | 子变量(阈值)                 | 属性变化                                           |
| --------------------------- | ---------------------------- | -------------------------------------------------- |
| `.result-er/.pr/.her2` 条 | er(0.07)/pr(0.18)/her2(0.29) | opacity 0.48→1；translateX 12px→0；width 0→104% |
| `.pathology-sheet`        | report-fold(0.38)            | opacity 0→1（整体揭示）                           |
| `.prologue-reveal`        | life(0.52)                   | opacity 0→1；translateY 34px→0                   |
| `.prologue-word`          | life(0.52)                   | opacity 1→0.62；translateX 0→-4vw                |
| `.report-ribbon`          | thread(0.28)                 | opacity 0.18→0.9；scaleY 0→1；translateY 18px→0 |

#### History

- 标题：opacity(0.34→0 出) + translateY -48px
- milestone `--history-step` 阶梯(0.2/0.34/0.49)：clip-path inset 横向揭示
- `.history-turn` ribbon：0.74 入(opacity + translateY 44px)、0.84 rotate(-18→-5deg)

#### Human

- 标题：0.38 出 + translateY -42px
- `.portrait-outline/.portrait-thread`：stroke-dashoffset 1→0（描线，0.14/0.32 起）
- 3 个 question 阶梯(0.38/0.49/0.64)
- `.human-coda`：0.79 入(translateY 46px)

#### Expansion（5 路同源，均派生自 `renderedProgress`）

| 子变量(阈值)  | 元素                     | 属性变化                                                                          |
| ------------- | ------------------------ | --------------------------------------------------------------------------------- |
| frame         | `.expansion-surface`   | clip-path inset 56px→0，圆角 21px→0                                             |
| radius(0.54)  | 同上                     | 配合 frame 收圆角                                                                 |
| content(0.06) | `.brand-emblem-disc`   | opacity 0.84→1；translateY 22px→0；scale 0.91→1                                |
| label(0.28)   | `.expansion-copy`      | opacity 0→1                                                                      |
| diagram(0.04) | emblem/轨道/ambient-grid | clip-path circle 24%→100%；opacity 阶梯；stroke-dashoffset 描线；rotate -3deg→0 |

#### Coverage

- `--coverage-reveal`(0起) / `--coverage-content`(0.16起) 总控
- 2 条 `.map-route`：stroke-dashoffset 1→0
- 7 个 `.map-cell` 阶梯(0.02→0.5，每 0.08)
- `.scan-lens`：0.27 起扫过
- figcaption：0.64 入(translateY 24px)

#### Evidence

- `.evidence-thread`：translateY -32vh + scale 1→0.88（视差）+ stroke-dashoffset 描线(0.16)
- 3 篇 article `--evidence-step`(0.18/0.36/0.54)
- 标题 0.2 出、0.28 淡
- coda 0.7 入

#### Engineering

- 3 卡 `--lab-step`(0/0.06/0.3)
- `.lab-loop`：rotate -8deg→0 + stroke-dashoffset 描线
- `.lab-knot`：0.72 入

#### Listening

- `.listening-table`：0.14 入
- 4 个 voice `--voice-step`(0/0.2/0.27/0.34/0.41 错峰)
- status：0.68 入(translateY 32px)

#### Translation

- 标题：0.72 出(translateX -36px)
- 3 boundary 阶梯(0.12/0.27/0.42)
- `.care-seal`：stroke-dashoffset 描线(0.7) + rotate -24deg→0
- `.final-tie`：scaleX(0.73 起)
- ribbon：0.85 入(rotate + scale)

#### Thread-guide

- knot `top`/`height` = `page-progress*100%`（沿轨道滑动）+ rotate((0.5-p)*3deg) 微倾
- `--final-progress` 控制深浅色调切换

---

## 二、物理与缓动映射（Easings）

当前存在**两层运动模型**，必须分别映射：

### 2.1 输入层：`followProgress`（指数逼近弹簧）

```
delta * (1 - exp(-elapsed / response))，并经 maxStep*(elapsed/16.67) 限速
```

这是对**滚动输入的低通滤波**（制造 lag 与抖动平滑），不是动画缓动。9 路各自 response（100–128ms）造成"不同章节以不同速率追上目标"的差异感。

| 现状                                   | GSAP 映射                                                  | 说明                                                                          |
| -------------------------------------- | ---------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `followProgress` 整体 lag            | `scrub: true`（直接）或 `scrub: <秒>`（带追赶延迟）    | scrub 的数值即"追赶秒数"，与 response 概念同源但不等价                        |
| 9 路 response 差异                     | **每 section 独立 ScrollTrigger，各自 `scrub` 值** | 无法用一个 timeline 复现 per-section 差异；这是手写版的特色，需决策保留或统一 |
| `maxStep` 限速防甩                   | scrub 天生平滑                                             | 可丢弃                                                                        |
| page 真弹簧(stiffness 17，带 velocity) | `InertiaPlugin`（拖拽惯性）+ `ScrollToPlugin`          | 拖拽 thread-guide 的抛投惯性是唯一真弹簧场景                                  |

### 2.2 属性层：`smoothstep` + `clamp` 窗口

`smoothstep(t) = 3t² − 2t³`（对称 S 曲线）作用于每个子进度；`clamp((p-offset)/range)` 制造错峰窗口。

| 现状                          | GSAP 映射                                                            |
| ----------------------------- | -------------------------------------------------------------------- |
| `smoothstep`                | `sine.inOut`（曲线几乎重合）或 `power2.inOut`                    |
| `clamp((p-0.07)/0.15)` 错峰 | timeline`position` 参数 / `stagger`                              |
| 单 section 内多子动画         | 合并为**一个 `gsap.timeline()`**，子动画用 position 参数排布 |
| `withCompletionHold(0.72)`  | timeline 中 tweens 占总时长 0–72%，72%–100% 留空 = Hold Zone       |

> 关键：`STICKY_ANIMATION_END = 0.72` 已是 Hold Zone 机制。重构时用 timeline position parameter 显式留白即可，无需重造。

---

## 三、触发与时序链（ScrollTrigger & Timelines）

### 3.1 现状触发链

```
scroll(passive) ─┐
resize/load ─────┼─→ requestPaint() ─→ needsMeasure=true
fonts.ready ─────┘
details.toggle ──→ handleResize() ─→ cacheLayout() 重测全部 getBoundingClientRect
rAF paint() ←────┘
  ├─ measureProgress()：算 9 个 target + updateHeaderTheme + updateThreadGuide
  ├─ followProgress() ×9 平滑
  ├─ smoothstep/clamp 派生
  └─ shouldPaint 脏检查 → setProperty 写 CSS 变量
```

### 3.2 GSAP 映射建议

#### 应合并为单 timeline 的（section 内子动画）

- **Opening** → 1 个 timeline：er/pr/her2/report/life/thread 6 个 tween，position = 0.07/0.18/0.29/0.38/0.52（映射阈值）
- **Expansion** → 1 个 timeline：frame/content/label/diagram 4 个 tween，position = 0.04/0.06/0.28
- **Coverage / Evidence / Engineering / Listening / Translation** → 各自 1 个 timeline 装 stagger
- 每个 timeline 末尾留 28% 空白（Hold Zone）

#### 应绑独立 ScrollTrigger 的（每 section 一个）

| Section          | trigger             | start       | end                                            | pin   | scrub    |
| ---------------- | ------------------- | ----------- | ---------------------------------------------- | ----- | -------- |
| 6 个 sticky+hold | section             | `top top` | `bottom bottom`（或 `+=sectionHeight-vh`） | true  | 各自秒数 |
| Expansion        | section             | `top 62%` | `top -11%`                                   | true  | 0.3      |
| Engineering      | section             | `top 88%` | `top 20%`                                    | false | 0.3      |
| Listening        | `.listening-room` | `top 90%` | `top 18%`                                    | false | 0.3      |

#### 独立于 section 的全局触发

- **Thread-guide knot**：`ScrollTrigger.create({trigger: document.body, start:0, end:'max', scrub:true, onUpdate: self => knot.style.top = self.progress*100%})`
- **Header `data-tone`**：用 `onEnter`/`onLeaveBack` 回调切换，或 `toggleClass`，或 `ScrollTrigger.batch`
- **Header theme 的 coverage 特例**（`targetCoverageProgress<0.24` 覆盖为 navy）→ `onUpdate` 内按 progress 条件判断

#### 响应式

3 布局断点（默认 / 900px / 620px）下 min-height 不同 → ScrollTrigger 的 `end` 用**函数形式**或依赖 `ScrollTrigger.refresh()`（resize 自动 debounce 200ms）；用 `gsap.matchMedia()` 替代手写 `matchMedia` 分支。

#### 清理

用 `@gsap/react` 的 `useGSAP()` 自动 revert，等价当前手写的 `cancelAnimationFrame` + 全量 `removeEventListener` + `fontsReadyCancelled` 守卫。

---

## 四、性能 / 内存隐患（GSAP 可修复）

| # | 隐患                                                                                          | 现状代码                                                        | GSAP 修复                                                   |
| - | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------------------------------------- |
| 1 | **维护成本**：9 spring + 9 painted + 9 shouldPaint + 手动续帧判断 `sectionsAreMoving` | `paint()` 末尾自续 rAF                                        | ticker + scrub 全自动                                       |
| 2 | **图片懒加载致缓存过期**：仅靠 `load`+`fonts.ready` 重测                            | `cacheLayout` 一次性                                          | 图片 onload 后`ScrollTrigger.refresh()`，且 ST 监听更鲁棒 |
| 3 | **details.toggle 触发全量重测**：每次展开/收起都 `getBoundingClientRect` 全 section   | `onDetailsToggle→handleResize`                               | 改 debounce 或局部`refresh()`                             |
| 4 | **measureProgress 每帧跑 headerTheme+threadGuide 数组遍历**                             | `updateHeaderTheme`/`updateThreadGuide` 每次 measure 都调用 | ST 回调仅在跨越阈值时触发                                   |
| 5 | **reduced-motion 分支硬编码**：每加一 section 需补一行 `setProperty(...,'1')`         | `paint()` 内 20+ 行                                           | `gsap.matchMedia()` 统一降级                              |
| 6 | **per-section response 差异难复现**：scrub 统一 lag                                     | 9 路 response 100–128ms                                        | 决策：保留→per-section scrub 值；放弃→统一                |
| 7 | **拖拽跳转 `window.scrollTo` + 手写弹簧**                                             | `setPageProgressFromGuide`                                    | `InertiaPlugin` + `ScrollToPlugin` 更稳                 |

### 做得好、需在 GSAP 保持的

- cleanup 完整无泄漏（rAF 取消、listener 全移除、`fontsReadyCancelled` 守卫、header tone 重置回 `bright`）
- passive scroll
- `Math.min(64, elapsed)` 帧间隔截断
- aria 写入节流（`ariaPageProgress` 比较）

---

## 五、待确认的决策点

1. **per-section response 差异**是否保留？
   - 影响：是否每 section 独立 scrub 值
2. **Expansion 的 5 路同源子动画**确认合并为单 timeline（position 参数排布）？
3. **Hold Zone** 当前是 0.72（28% 留白），是否沿用此比例还是调整为 150vh / 200%？

确认后即可进入第二阶段生成 GSAP 代码。
