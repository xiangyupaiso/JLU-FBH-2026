# CirCure Story Navigation — 版本管理文档

> 本项目是 CirCure iGEM 团队的叙事型官网原型，以"Recognition"为核心线索，串联分子识别与人文关怀的双重含义。
> 
> 版本：v1.0.0 | 最后更新：2026-07-18

---

## 项目简介

本项目是一个零依赖的本地静态网站原型，讲述 CirCure iGEM 项目通过受体引导的乳腺癌治疗历史，探索多表位 circRNA 疫苗概念在三阴性乳腺癌（TNBC）中的应用可能。

页面包含九大滚动章节：病理报告、历史沿革、人文关怀、设计思路、肿瘤异质性、证据链、工程迭代、利益相关者倾听、责任边界。视觉系统采用"人文科学编辑风"（Humanist Scientific Editorial），平衡科学严谨与人文温度。

---

## 技术栈分析

### 核心技术

| 层级 | 技术 | 说明 |
|------|------|------|
| 标记语言 | **HTML5** | 语义化标签、ARIA 无障碍属性、SVG 图标精灵 |
| 样式层 | **CSS3** | CSS 变量、clip-path、transform、渐变、网格与弹性布局 |
| 交互层 | **JavaScript (ES6+)** | 原生 JS，零框架、零动画库、零构建步骤 |
| 服务端 | **Node.js 原生 http** | 极简静态文件服务器，无 Express/Fastify 等框架 |

### 工程特点

- **KISS / YAGNI**：纯原生技术栈，无 Webpack/Vite/Rollup 等构建工具
- **DRY**：单一滚动进度值驱动多元素动画（clip-path、transform、opacity）
- **SOLID**：测量、插值、渲染逻辑分离，职责清晰
- **性能优先**：每帧仅写入一次 CSS 变量，使用 `requestAnimationFrame` + 插值尾部，不阻塞原生滚动

### 关键实现细节

| 功能 | 实现方式 |
|------|----------|
| 滚动驱动动画 | `IntersectionObserver` + `requestAnimationFrame` + CSS 变量 |
| 导航状态切换 | 三种可逆状态：顶部轻量栏 → 滚动后紧凑海军蓝栏 → 四列图片菜单 |
| 粉线导航器 | 临界阻尼弹簧（critically damped spring）平滑双向移动，无过冲 |
| 轨道徽章动画 | SVG `pathLength` + stroke-dashoffset 逐帧绘制 |
| 肿瘤异质性图 | SVG 路径 + 扫描透镜跟随滚动进度 |
| 无障碍支持 | `prefers-reduced-motion` 保留全部内容，`aria-*` 语义完整 |

### 文件结构

```
circure-story-nav-local/
├── index.html          # 主页面（单页应用结构）
├── styles.css          # 全局样式（~93KB，含 CSS 变量与设计令牌）
├── script.js           # 交互逻辑（~29KB，模块化函数组织）
├── server.mjs          # Node.js 静态服务器（ES Module，零依赖）
├── package.json        # 项目元数据（仅含 dev 脚本）
├── STYLE_GUIDE.md      # 视觉系统规范（色彩、字体、动效、组件）
├── README.md           # 本文档
└── assets/             # 静态资源
    ├── circure-emblem.png         # 项目徽章底图
    ├── circure-ribbon.png         # 粉红丝带图层
    ├── nav-drylab-engagement-v2.webp  # 导航卡片图
    ├── nav-project-wetlab-v2.webp     # 导航卡片图
    └── nav-team-award-v2.webp         # 导航卡片图
```

---

## 本地运行

```bash
# 进入项目目录
cd circure-story-nav-local

# 启动开发服务器（默认端口 5183）
npm run dev

# 或指定端口
node server.mjs 8080
```

访问 `http://127.0.0.1:5183/`

---

## 视觉系统速览

| 角色 | 色值 | 用途 |
|------|------|------|
| 主文本 | `#1b1719` | 正文、标题 |
| 纸张色 | `#eee7dc` / `#fcf8f1` | 背景、面板 |
| 科学结构 | `#173f78` / `#102f59` | 深色区块、导航、主操作 |
| 粉线纽带 | `#d784b3` | 丝带图标、当前路径、人文关怀 |
|  blush 面 | `#ddcbd3` | 大面积柔和区块 |

**字体策略**：展示标题使用 Iowan/Baskerville 风格衬线体；数据与导航使用系统无衬线体。

---

## 版本历史

| 版本 | 日期 | 说明 |
|------|------|------|
| v1.0.0 | 2026-07-18 | 初始版本，完整首页九大章节、导航系统、粉线引导器 |

---

## 许可

内容采用 [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/) 协议授权。

---

*CirCure — iGEM 2026*
