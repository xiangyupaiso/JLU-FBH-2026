# 使用指南 PDF 的 Wiki 放置说明

两份 PDF 已放在本文件夹的图片和附件目录。英文 Wiki 主文档已加入两个默认收起的折叠框。

| 位置 | 折叠框名称 | 文件 |
| --- | --- | --- |
| 4.1 CircuForge 标题下方，正文说明之前 | CircuForge User Guide | CircuForge-Usage-Guide.pdf，39 页 |
| 4.2 TorusFold 标题下方，正文说明之前 | TorusFold User Guide | TorusFold-Usage-Guide.pdf，20 页 |

展开后，先显示简短介绍和打开、下载链接，再显示 PDF 预览。手机或浏览器无法预览时，读者仍可通过链接打开文件。两份 PDF 都保留已确认的字体和配图，不含封面、页脚和页码。

## 上线时的处理

1. 将两份 PDF 上传到团队的 Wiki 附件存储，保留当前文件名。
2. 主文档使用的是相对路径。上线时，把各折叠框中两个链接的 href 和预览框的 src 改为对应 PDF 的正式地址。src 后可保留 #view=FitH。
3. 使用网页现有的折叠框样式设置外观。主文档中的 class 是 usage-guide-pdf，也可换成团队已有组件。
4. 保留默认收起状态和预览上方的打开、下载链接。分别检查桌面和手机上的展开、预览及下载。

两份指南均使用英文正文。CircuForge PDF 包含带黄色箭头和文字提示的新版截图。TorusFold PDF 包含 Wiki 和仓库配图，以及当前界面截图。
