# CirCure Wiki 视觉与排版改造方案

> 基于「CirCure Design System」规范（circure-design-system.html / tokens.json）与对全站代码的审查，
> 给出的三阶段改造路线：字体系统升级 → 编辑级排版细节 → 分区主题化。
> 风格定位不变：**Humanist Scientific Editorial（人文科学编辑风）**。

---

## 0. 概要

| 阶段 | 内容 | 改动范围 | 预估工作量 |
| --- | --- | --- | --- |
| Phase 1 | 字体系统升级（自托管字体） | `public/fonts/`（新增）、`circure-tokens.css`、`index.html` | 0.5 天 |
| Phase 2 | 编辑级排版细节（drop cap、图注、引文、数字排版等） | `wiki-rebuild.css` + 各内容页微调 | 1 天 |
| Phase 3 | 分区主题化（Project / Wet Lab / Dry Lab / Engagement 四色体系落地到页面内） | `WikiPage.tsx`、`pages.ts`、`wiki-rebuild.css` | 0.5 天 |

三条硬约束全程有效（来自仓库 CLAUDE.md / README）：

1. **禁用外部 CDN** —— 字体必须自托管，随 GitLab 仓库一起部署；
2. **Footer 的 license 声明 + GitLab 仓库链接不许动**；
3. `.gitlab-ci.yml` 保持原样，不新增构建依赖。

---

## 1. 现状诊断

### 1.1 已经做对的（保留，不推翻）

- 设计 token 体系完整：颜色 / 空间 / 圆角 / 缓动曲线全部变量化，且有 Figma 可消费的 tokens.json；
- 「编辑式衬线标题 + 海军蓝结构 + 暖纸色 + 粉色丝线」的角色分工清晰，克制原则（粉色只做连接、海军蓝不做全页铺底）已写进规范；
- 滚动叙事统一使用 `cubic-bezier(.22,1,.36,1)`，可逆、无过冲，并支持 `prefers-reduced-motion`。

### 1.2 缺什么（本次要补的）

1. **没有品牌级字体记忆点。** 全站依赖系统字体栈，这是「感觉没有艺术字」的直接原因。
2. **跨平台衬线不一致，而且是静默降级。** `--font-editorial` 的前两个字体 `Iowan Old Style`、`Baskerville` 都只存在于 macOS；评委若用 Windows 打开，实际渲染的是 Georgia——字重、字宽、气质全部走样，整个「编辑风」在 Windows 上损失过半。
3. **排版停留在「整齐」，还没到「出版物」。** 缺少 drop cap、图注编号体系、引文样式、数据数字排版这些让页面从"网页"变"刊物"的细节。
4. **四个分区主题色（#a83f69 / #5f9f87 / #7183c5 / #ba7894）只活在导航下拉面板里**，进入页面后分区身份感消失，所有内页长一个样。

---

## 2. 核心判断：别家团队的"艺术字"是怎么来的

2024–2025 优秀团队的 Wiki 之所以有强烈的字体个性，并不是他们违反了 iGEM 的 CDN 禁令，
而是：**iGEM 禁的是外部 CDN 与第三方追踪，不禁止把字体文件放进自己的仓库随站点部署。**
那些团队的 display 字体几乎都是仓库里的 `.woff2` + `@font-face`，从 iGEM 的服务器同源加载。

也就是说：我们完全可以拥有自己的"艺术字"，唯一成本是 250–350KB 的静态资源，且这一步同时解决了
Windows 上的衬线降级问题——这是本方案收益最高、风险最低的一项改动。

**决策：Phase 1 的字体升级是整个方案的基石，优先级最高。**

---

## 3. Phase 1 — 字体系统升级（自托管）

### 3.1 选型

按「人文科学编辑风」的气质（暖纸、粉丝线、海军蓝、克制）逐一过筛：

| 候选 | 判断 |
| --- | --- |
| **Fraunces** ✅ 主选 Display | 软衬线老式风格，带 optical size 轴与可选的 "wonk" 变形，暖调、有人文手作感；与粉色丝线、暖纸色天然同频。Variable 单文件约 120KB（woff2）。 |
| Playfair Display ✗ | 高对比 Didone，气质偏时尚杂志、冷艳，与"人文温度"冲突。 |
| Cormorant Garamond ✗ | 优雅但笔画过细，标题可用、正文可读性差，且屏幕小字号发虚。 |
| **Newsreader** ✅ 主选 Editorial 正文 | Google 出品、专为屏幕长文设计的过渡衬线，自带 opsz 轴，与 Fraunces 同为「软衬线家族」，搭配协调。400/500 两个字重。 |
| Source Serif 4 / EB Garamond ✗ | 前者太中性无个性，后者古典但小字号屏幕表现弱。 |
| **IBM Plex Mono** ✅ 主选 Mono | 有科研仪器气质，契合"序列 / 时间戳 / 实验状态"的用途。400/500。 |
| Sans（控件/数据）保持系统栈 | 控件文本不是品牌记忆点，换 Inter 的收益撑不起 80–120KB 的成本。 |

中文处理：iGEM Wiki 正文为英文，中文零星出现时回退系统字体（PingFang / 微软雅黑）即可，
**不自托管中文字体**（动辄 5–10MB，不值）。

### 3.2 落地步骤

1. 下载 latin subset 的 `.woff2`（OFL 许可，可在仓库附一份 OFL 文本副本），放入 `public/fonts/`；
   建议清单：
   - `fraunces-var.woff2`（variable：opsz 9–144 + wght）
   - `newsreader-400.woff2`、`newsreader-500-italic.woff2`（引文用斜体）
   - `plexmono-400.woff2`、`plexmono-500.woff2`
2. 在 `circure-tokens.css` 顶部（或新建 `circure-fonts.css` 并在 tokens 之前引入）声明 `@font-face`，
   全部 `font-display: swap`；
3. token 改为「自托管字体在前、系统栈殿后」，跨平台兜底不丢：

```css
--font-display: "Fraunces", "Avenir Next", "Helvetica Neue", Arial, sans-serif;
--font-editorial: "Newsreader", "Iowan Old Style", Baskerville, Georgia, serif;
--font-mono: "IBM Plex Mono", "SFMono-Regular", Consolas, monospace;
--font-sans: -apple-system, BlinkMacSystemFont, "SF Pro Text", "Helvetica Neue", Arial, sans-serif; /* 不变 */
```

4. `index.html` 内 `<link rel="preload" as="font" crossorigin>` 预加载 Fraunces 与 Newsreader 400，
   压缩 FOUT 窗口；
5. 字号 token 微调（Fraunces 的 x-height 与 Newsreader 与旧栈不同）：
   - `type/display/pageTitle` 的 tracking 从 `-0.04em` 收到 `-0.03em`（Fraunces 本身收紧）；
   - `type/body/base` 行高从 1.72 微调至 1.66–1.70 之间实测取值（Newsreader 的默认行距比 Georgia 松）。

### 3.3 验收标准

- DevTools Network 面板：字体请求全部同源（本站 / iGEM 部署域），零外部 CDN；
- Windows（无 Iowan/Baskerville 的环境）与 macOS 截图对比，标题字形一致；
- 字体总体积 ≤ 350KB；弱网下 swap 无长时间空白文本。

---

## 4. Phase 2 — 编辑级排版细节

目标：让页面从「整齐的网页」变成「被编辑过的刊物」。全部基于既有 token，不新增颜色。

1. **Drop cap（首字下沉）**：章节第一段 `::first-letter`，Fraunces、约 3 行高、`--ink` 色，
   右侧留 `space/2`。全站每个页面最多出现一次（仅章节开篇），避免装饰化。
2. **断行质量**：标题 `text-wrap: balance`，正文段落 `text-wrap: pretty`（防孤行）；
   正文保持左对齐 ragged right，**不用 justify**（编辑风的呼吸感来自不齐边）。
3. **数字排版**：Notebook、Measurement、Results 中所有动态数字 / 日期 / 编号统一
   `font-variant-numeric: tabular-nums`，消除跳动。
4. **图注体系**：`figure + figcaption` 标准化——左上 mono 小标签 `FIG. 01`（`--care`，UPPER，0.06em），
   说明文字用 sans `type/body/small`（`--muted`）；图片加 `1px rgba(0,0,0,.1)` outline（细节质感）。
5. **引文样式（pull quote）**：Fraunces 500 斜体、clamp(20,2vw,28)px、`--brand-navy`，
   左侧 3px 粉色丝线（复用 callout 的做法），行尾可引用共享 SVG `#circure-ribbon-knot` 收尾——
   品牌符号只在此处出现一次，不水印化。
6. **分节编号延伸到正文**：导航已用 `01 / CONTEXT` 这类 meta，正文 h2 同步带 mono 编号
   （`--faint`），页面内形成「01→02→03」的证据链节奏，与叙事主线呼应。
7. **首段 lead 与正文的层次**：lead 保持 editorial serif + navy，正文起用 Newsreader 后，
   两者字号差会自然拉开，无需再加大对比。
8. **行内代码 / 序列**：mono token 换 Plex Mono 后，序列块加 `letter-spacing: 0.02em`，
   长序列允许断行但禁止连字符拆开碱基。

---

## 5. Phase 3 — 分区主题化

现状：四个分区主题色只作用于导航下拉。方案：让分区身份**跟随用户进入页面**，
但严格遵守「一次强调」原则。

### 5.1 机制

- `WikiPage` 读取 `pages.ts` 中所属 folder 的 `nav.key`（project / wet-lab / dry-lab / engagement），
  在页面根元素输出 `data-section="{key}"`；
- `wiki-rebuild.css` 定义 `--section-accent`，默认值 = `--care`（粉），四个分区各覆盖一次：

```css
.wiki-page { --section-accent: var(--care); }
.wiki-page[data-section="project"]    { --section-accent: #a83f69; }
.wiki-page[data-section="wet-lab"]    { --section-accent: #5f9f87; }
.wiki-page[data-section="dry-lab"]    { --section-accent: #7183c5; }
.wiki-page[data-section="engagement"] { --section-accent: #ba7894; }
```

### 5.2 主题色只允许出现在三个位置

1. 页面 eyebrow（`circure-page-eyebrow`）及其前导短线；
2. `WikiLineSidebar` 当前小节的活跃节点标记；
3. 页内卡片 hover 的底部强调条与 `:focus-visible` ring。

其余一切（正文、结构、Pink Thread 丝线系统）保持全局品牌语言不变——
分区色是「这一章的封面色」，不是皮肤。超过三处就会滑向彩虹站，明确禁止。

### 5.3 与导航的呼应

用户从某分区下拉点击进入页面时，eyebrow 颜色与刚才悬停的导航色一致，
形成「点击前看到什么颜色、落地后就是什么颜色」的连续性，这是成本低但体验增益明显的一笔。

---

## 6. 实施顺序与涉及文件

| 步骤 | 文件 | 动作 |
| --- | --- | --- |
| 1 | `public/fonts/`（新增目录） | 放入 5 个 woff2 + OFL 许可证副本 |
| 2 | `src/styles/circure-tokens.css` | @font-face 声明 + 三个 font token 更新 |
| 3 | `index.html` | preload 两个关键字体 |
| 4 | `src/styles/wiki-rebuild.css` | Phase 2 全部细节 + Phase 3 的 data-section 规则 |
| 5 | `src/components/wiki/WikiPage.tsx` | 透传 `data-section` |
| 6 | `src/pages.ts` | 确认 folder key 与 CSS 映射一致（现有 key 直接可用，预计零改动） |
| 7 | 各内容页（`src/contents/*`） | drop cap 的首段标记、figure 语义化——仅在需要的页面微调 |

不改动：`Footer` 组件（license + GitLab 链接）、`.gitlab-ci.yml`、`package.json`（零新依赖）。

---

## 7. 验证清单

- [ ] `yarn build` 通过，产物体积增量 ≤ 350KB（字体）；
- [ ] Network 面板确认无任何外部域名请求（字体同源加载）；
- [ ] Windows + macOS + 移动端各过一遍：Home / Description / Experiments / Model / Human Practices / Sustainability；
- [ ] 150%、200% 缩放下 drop cap 不溢出、eyebrow 不折行；
- [ ] `prefers-reduced-motion` 下全部内容可读；
- [ ] 键盘 Tab 遍历：分区主题色的 focus ring 正常可见；
- [ ] Footer 的 CC license 声明与 GitLab 仓库链接完好；
- [ ] 打印样式（@media print）抽查一页，图注与编号不破碎。

---

## 8. 风险与对策

| 风险 | 对策 |
| --- | --- |
| 字体子集缺字符（如特殊符号、变音字母） | 下载时选 latin subset 并本地用页面真实文案过一遍渲染检查 |
| FOUT 期间布局跳动（新旧字体字宽差异） | preload 关键字重；swap 前后行高差异通过 3.2 第 5 条的 token 微调吸收 |
| iGEM 合规疑问 | 自托管静态文件随仓库部署，同源加载，无第三方请求与追踪，符合规则；不放 CDN 即可 |
| 分区色被滥用 | 5.2 的「三处上限」写进规范；code review 时按 checklist 检查 |
| OFL 合规 | 保留许可证文本副本于 `public/fonts/OFL.txt`；不修改字体文件本身 |

---

## 9. 与既有交付物的关系

- 本方案是 **circure-design-system.html / tokens.json** 的执行路线，不推翻其中任何 token 定义；
  Phase 1 落地后需同步回写该文档第 3 节（Typography）的 font stack 表与 tokens.json 的
  `type/font/*` 条目，保持「规范 = 代码」的单一事实源；
- Pink Thread 丝线、海军蓝结构、暖纸基底等品牌基因全部保留；
  本次改造只回答一个问题：**如何让这套已经很好的系统，拥有一眼可辨的字体身份与刊物级完成度。**

---

*CirCure iGEM 2026 · Humanist Scientific Editorial · Redesign Plan v1*
