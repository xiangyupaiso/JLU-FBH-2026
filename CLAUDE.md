# AI 辅助维护说明

简体中文 | [English](CLAUDE.en.md)

先阅读 [README.md](README.md)、[协作约定](CONTRIBUTING.md) 和[仓库地图](docs/repository-layout.md)。命令与构建边界见[开发指南](docs/development.md)，素材来源、上传批次和 CDN 映射见[素材维护](docs/assets.md)。

运行导入器或素材工具前先读[脚本索引](scripts/README.md)，明确是否会覆写正文、资产目录或生成文件。

## 负责任使用

@.claude/RESPONSIBLE_AI_USE.md

## 维护要求

- 保留 `LICENSE`，以及共享 Footer 中的许可证说明与官方 GitLab 仓库链接。
- 按现有部署配置维护 `.gitlab-ci.yml`；调整构建或发布步骤时运行相关检查并说明影响。
