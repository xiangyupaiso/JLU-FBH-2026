# 开发指南

简体中文 | [English](development.en.md)

## 主站环境与安装

建议 Node.js 22.12+ 的 22.x 环境，Yarn Classic 1.22.22。官方 CI 使用 `node:22`；主站包管理器声明在 `package.json`。

从仓库根目录运行：

```sh
yarn install --frozen-lockfile
yarn dev
```

默认访问 `http://localhost:5173/jlu-fbh/`；以终端实际输出为准。Vite 从现有配置读取队名并生成 base 路径，开发和预览服务器会规范化尾部斜杠。

仓库同时保留根目录 `package-lock.json`。npm 工作流可用 `npm ci` 和 `npm run dev`，但不要在同一依赖目录交替安装。依赖有变更时单独处理锁文件的一致性；目录整理不更新依赖。

## 日常验证

```sh
yarn lint
yarn test:page-loading
yarn build
yarn preview
```

- `lint`：现有 ESLint 检查，任何警告都会导致失败。
- `test:page-loading`：共享页面图片准备与加载器行为回归测试（regression tests）。
- `build`：主站 TypeScript 检查 → Vite 多入口构建 → `scripts/postbuild-slug.mjs` 生成发布路径映射。
- `preview`：查看刚构建的 `dist/`；修改源码后需要重新构建才能验证生产产物。
- `format`：全仓库匹配范围的 Prettier 写操作，日常只对本次修改的文件运行格式化。

专项脚本及运行条件见 [scripts/README.md](../scripts/README.md)。涉及页面行为的修改，还需在浏览器中检查实际状态变化、完整结束状态、快速反向操作、键盘、320px/390px 窄屏和 reduced motion。构建结果无法代替这些检查。

## 修改一篇正文页

从 `src/pages.ts` 定位路由，再进入对应 `src/contents/*.tsx`，追踪页面数据和 feature 组件的 import。

1. 正文与章节维护在对应 `src/data/` 文件；核对 `文案集/` 中的来源。
2. 图片及附件使用对应资产字典；维护来源路径与实际 CDN URL 的关系。
3. 交互和可视化维护在 `src/components/wiki/features/`。
4. 共享阅读器的版式、引用与图片准备按[页面规范](../WIKI_ARCHITECTURE_SPEC.md)处理。

新页面会继承 `WikiRoutePage` 的 Hero 与正文图片准备规则。弹窗或未激活标签中的图片通过 `preloadImages` 或 `PageImagePreloads` 声明；不得另建一套相互竞争的加载器。

## 小游戏

见 [games/README.md](../games/README.md)。两个游戏均为独立 npm 项目：

```sh
cd games/breast-guardian
npm ci
npm run build
npm run preview
```

Bomb Cat 使用 `games/bomb-cat/`。上述命令只构建子项目，不会替换主站 `public/game-assets/` 中的运行文件；替换时需分别核对入口、资源路径与来源记录。

## 虚拟实验室

见 [virtual-lab/README.md](../virtual-lab/README.md)。

```sh
cd virtual-lab
npm ci
npm run dev
```

生产检查运行 `npm run build`。主站嵌入官方独立部署，根目录安装与构建不覆盖实验室的依赖或产物。实验室 URL、消息来源校验和焦点返回需要一起验证。

## 只整理文件时

先记录基线，再移动并更新引用。检查构建配置、脚本中的 `import.meta.url` / `__file__` 相对定位、动态 glob、上传清单和文档链接。

对纯整理变更比较移动文件的内容哈希，并对构建产物做逐文件哈希比较。不要运行导入器或素材生成器来“顺便同步”，这些工具可能覆写已经人工维护的内容。
