# Known portrait-state resolution limits

The archived source reproduces the current published game. Its scene renderer
filters out portrait paths that do not resolve; a dialogue or story can therefore
continue with fewer portraits. No new image is substituted here.

The portable `npm run check:runtime` diagnostic covers 201 map entries, 176 preload
URLs, 169 distinct role/state pairs and 182 exercised official URLs. It reports
these 18 unresolved role/state/perspective combinations and correctly exits 1:

| Role | State | Perspective |
| --- | --- | --- |
| 经理 | 严肃 | any |
| 主角 | 开心 | adult |
| 主角 | 愤怒 | adult |
| 主角 | 懂事 | adult |
| 主角 | 懂事 | elder |
| 主角 | 害怕 | adult |
| 主角 | 害怕 | elder |
| 主角 | 愧疚 | adult |
| 主角 | 叛逆 | child |
| 主角 | 沧桑 | elder |
| 分泌细胞 | 衰弱 | any |
| 儿子 | 稳重 | any |
| 主角 | 隐忍 | elder |
| 主角 | 释怀 | elder |
| 儿子 | 关切 | any |
| 张阿姨 | 关切 | any |
| 李阿姨 | 夸张 | any |
| 主角 | 犹豫 | elder |

All resolved URLs use the official iGEM CDN and appear in the archived registry.
These unresolved state names do not identify a verified replacement image. An
author should confirm the intended portrait or upload the missing art before
changing these mappings. The archive preserves the published behavior and story
data. A successful build or map-regeneration check does not mean this diagnostic
has passed.
