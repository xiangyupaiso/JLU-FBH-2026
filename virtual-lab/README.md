# 虚拟实验室

简体中文 | [English](README.en.md)

Games 页面通过 iframe 嵌入[官方实验室部署](https://virtual-lab-208fd4.igem.wiki/)，其发布源码与 CI 位于[官方软件仓库](https://gitlab.igem.org/2026/software/jlu-fbh/virtual-lab)。

本目录保留完整应用源码、课程播放器、配置与固定依赖锁文件。原有同步记录对应软件部署提交 `4b161de7d4bd9490d2b46e8b5438e7e3b2005b2b`。图片与字体从官方 `static.igem.wiki` CDN 加载。

## 从 Wiki 仓库构建实验室

```sh
cd virtual-lab
npm ci
npm run build
npm run preview
```

实验室生成自身忽略的 `virtual-lab/dist/`，依赖与 Wiki 主站分开安装。根目录构建只生成 Wiki，通过 iframe 接入实验室的独立部署；实验室产物留在子项目中。

`public/` 保存课程播放器的 HTML、CSS 和 JavaScript。构建对实验 9 的元数据使用与官方软件仓库相同的压缩处理。`src/` 保存界面源码，主站 iframe 容器位于 `../src/components/VirtualLaboratory/index.tsx`。

## 托管与集成

按[官方 Wiki 要求](https://teams.igem.org/go/deliverables/wiki/requirements)，iframe 内容使用 iGEM 基础设施托管，团队 Wiki 仓库保留 HTML 与源码。两个仓库都从源码和已提交的依赖锁文件构建。主仓库保持原许可证，实验室子项目保留官方软件许可证。

父窗口只接受配置的 Pages 来源及对应 iframe 窗口发送的关闭消息。实验室将 Escape 关闭消息发往 `https://2026.igem.wiki`。更换部署 URL 时同步更新来源校验，并检查打开、交互、关闭和焦点返回，同时保留 iframe 的自动播放与全屏权限。
