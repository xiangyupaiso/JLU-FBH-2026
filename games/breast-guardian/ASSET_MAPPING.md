# Breast Guardian — asset URL mapping

Generated from [`IGEM_ASSET_REGISTRY.md`](../../IGEM_ASSET_REGISTRY.md), the
team's single source of truth for uploaded media. Every row below is a 1:1
transcription: the local path the game used to reference, and the official
`static.igem.wiki` URL for that exact file. No URL was inferred from a filename,
and no remote extension was assumed to match the local one (iGEM serves AVIF
regardless of the uploaded format).

- Mapped local paths: **201**
- Distinct official URLs: **200**
- No runtime reference points at `./assets/…` any more; every image resolves
  through `src/data/assetUrls.ts`.

## Commands

```bash
npm run assets:regen   # rebuild src/data/assetUrls.ts + this file
npm run check:assets   # verify the map matches the registry
npm run check:runtime  # exercise every real call site, assert it resolves
```

## Unmapped / unused assets

### Never referenced by the game (safe to keep uploaded)

These are in the registry and load with HTTP 200, but no code path asks for
them. They are deliberately **not** preloaded and not mapped into any call
site; they exist for content work, not for this build.

- `assets/loading/loading-1.png`
- `assets/loading/loading-2.png`
- `assets/loading/loading-3.png`
- `assets/ui/ending-chain.png`
- `assets/ui/ending-home-btn.png`
- `assets/ui/ending-plate.png`
- `assets/ui/qr-ending.png`

### Requested by code but missing from the registry

None at the time of writing. `npm run check:runtime` fails the build if a code
path resolves to `undefined`, so this list cannot silently grow.

### Deduplicated uploads

The iGEM upload tool deduplicated byte-identical files, so these local paths
legitimately share one URL (confirmed identical on disk by SHA-256):

- `https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif`
  - `assets/characters/paimon/派蒙-严肃.png`
  - `assets/characters/paimon/派蒙-郑重.png`

## Full map

| Local path (was `public/assets/…`) | Official URL |
| :--- | :--- |
| `assets/characters/adult-protagonist/主角-坚定.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-86e003dbc7e71a48.avif |
| `assets/characters/adult-protagonist/主角-好奇.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f4119406020d66cd.avif |
| `assets/characters/adult-protagonist/主角-心疼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1533f0ae21cf7fde.avif |
| `assets/characters/adult-protagonist/主角-恐惧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d648cfc06b123afb.avif |
| `assets/characters/adult-protagonist/主角-懊悔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8792713b8bb4d74c.avif |
| `assets/characters/adult-protagonist/主角-正常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-10fb50c4535a5605.avif |
| `assets/characters/adult-protagonist/主角-温暖.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ce91a8150b6aee2.avif |
| `assets/characters/adult-protagonist/主角-焦虑.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5f6d12c8370c0111.avif |
| `assets/characters/adult-protagonist/主角-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67c3a7f2747590a1.avif |
| `assets/characters/adult-protagonist/主角-紧张.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a6a01fe0aa316f61.avif |
| `assets/characters/adult-protagonist/主角-轻松.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1ada2d37a61820e.avif |
| `assets/characters/bosses/乳头内陷-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d625d7ceefbf2aea.avif |
| `assets/characters/bosses/乳头内陷-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb764dc56227cb9.avif |
| `assets/characters/bosses/乳头溢液-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d946498aef50c20c.avif |
| `assets/characters/bosses/乳头溢液-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-257df97dd619fb0f.avif |
| `assets/characters/bosses/乳房硬块-BOSS-嚣张.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-df6a796e340e1f8f.avif |
| `assets/characters/bosses/乳房硬块-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5906d5be24ee758a.avif |
| `assets/characters/bosses/乳房硬块-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-57c102f32f289e4c.avif |
| `assets/characters/bosses/橘皮样改变-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f45398ae0ef9b7e7.avif |
| `assets/characters/bosses/橘皮样改变-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-37ed08d784a9721e.avif |
| `assets/characters/bosses/腋下淋巴结肿大-BOSS-嚣张.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-776d4d18307889ec.avif |
| `assets/characters/bosses/腋下淋巴结肿大-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-76283d3dea7d4b0f.avif |
| `assets/characters/bosses/腋下淋巴结肿大-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-24af81f51cdf9563.avif |
| `assets/characters/bosses/酒窝征-BOSS-狰狞.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a1098c0cb94adc62.avif |
| `assets/characters/bosses/酒窝征-BOSS-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-513cd0422c2cd7ad.avif |
| `assets/characters/cells/内分泌调节细胞-正常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebab765466ad83e9.avif |
| `assets/characters/cells/内分泌调节细胞-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f389fbf6e6a6e55e.avif |
| `assets/characters/cells/内分泌调节细胞-紊乱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-59b91126a020c951.avif |
| `assets/characters/cells/分泌细胞-健康.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-14522979c06b60c8.avif |
| `assets/characters/cells/分泌细胞-委屈.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-70e8d1bc6c1aeb8a.avif |
| `assets/characters/cells/分泌细胞-干瘪.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-13923cf19c0c9c4b.avif |
| `assets/characters/cells/分泌细胞-异常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b4a0cd60215d9386.avif |
| `assets/characters/cells/分泌细胞-恐惧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2ab70e0610e183b8.avif |
| `assets/characters/cells/分泌细胞-愉悦.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b3b3b1d3e3ab3faa.avif |
| `assets/characters/cells/分泌细胞-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-eb097512eb1518e2.avif |
| `assets/characters/cells/分泌细胞-肿胀.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-49defde4be69e2b4.avif |
| `assets/characters/cells/分泌细胞-胀痛.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fd837499afb179a7.avif |
| `assets/characters/cells/分泌细胞-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-81a7d25336d89b86.avif |
| `assets/characters/cells/巨噬细胞-小巧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-31706bf5d6583076.avif |
| `assets/characters/cells/巨噬细胞-活泼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cbd60ed9c8db9dd2.avif |
| `assets/characters/cells/巨噬细胞-爽朗.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eaf2d5a4619f726.avif |
| `assets/characters/cells/巨噬细胞-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1dd2b638c568c40b.avif |
| `assets/characters/cells/巨噬细胞-虚弱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-878d31eb185b4a56.avif |
| `assets/characters/cells/巨噬细胞-醉酒.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75fd4d95accb0356.avif |
| `assets/characters/cells/淋巴细胞-傲娇.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab36ca8e501cdf4e.avif |
| `assets/characters/cells/淋巴细胞-急促.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-23f6acc2255fdbcf.avif |
| `assets/characters/cells/淋巴细胞-无助.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e9151dc84a31a684.avif |
| `assets/characters/cells/淋巴细胞-期待.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3748ac9e82fa8eff.avif |
| `assets/characters/cells/淋巴细胞-欢快.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-868d49516b57aae8.avif |
| `assets/characters/cells/淋巴细胞-活泼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-62655366ff6fceb7.avif |
| `assets/characters/cells/淋巴细胞-肿大.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f68caa64596ca8c1.avif |
| `assets/characters/cells/淋巴细胞-警惕.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6f125d789d735ef.avif |
| `assets/characters/cells/雌激素调节细胞-正常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed632e4bf5e8c396.avif |
| `assets/characters/cells/雌激素调节细胞-紊乱.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-836b24a9358ee394.avif |
| `assets/characters/child-protagonist/主角-任性.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7588b25a156888e0.avif |
| `assets/characters/child-protagonist/主角-固执.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5467d6289edad5a.avif |
| `assets/characters/child-protagonist/主角-害怕.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-be646ea140412020.avif |
| `assets/characters/child-protagonist/主角-开心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7decf36a003b8ca3.avif |
| `assets/characters/child-protagonist/主角-心疼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c0f5c636da1209c.avif |
| `assets/characters/child-protagonist/主角-愧疚.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-99be70d57cca4253.avif |
| `assets/characters/child-protagonist/主角-懂事.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a8d55f1b642610c8.avif |
| `assets/characters/child-protagonist/主角-懵懂.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5da085f644ce2b3.avif |
| `assets/characters/child-protagonist/主角-正常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4d8df5ef1eb47283.avif |
| `assets/characters/child-protagonist/主角-焦急.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9223322784865f85.avif |
| `assets/characters/elder-protagonist/主角-固执.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64813de5038fa6d9.avif |
| `assets/characters/elder-protagonist/主角-坚定.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ad46082606151a5f.avif |
| `assets/characters/elder-protagonist/主角-安心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4ccde2f2d81cc09c.avif |
| `assets/characters/elder-protagonist/主角-恐惧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9387c4949776fbf9.avif |
| `assets/characters/elder-protagonist/主角-愧疚.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8c3d3e3e04015ec9.avif |
| `assets/characters/elder-protagonist/主角-懊悔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ebc388bc163d79ba.avif |
| `assets/characters/elder-protagonist/主角-执迷.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-812e6836b7ef9dcd.avif |
| `assets/characters/elder-protagonist/主角-期待.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-995ef28eaf212680.avif |
| `assets/characters/elder-protagonist/主角-正常.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-15a293efb50caaae.avif |
| `assets/characters/elder-protagonist/主角-温暖.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-77032cbe91e14b38.avif |
| `assets/characters/elder-protagonist/主角-焦虑.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-927830818ebd25ec.avif |
| `assets/characters/elder-protagonist/主角-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7b0e65986d41fac.avif |
| `assets/characters/family/儿媳-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1af45dc9d3ac1b07.avif |
| `assets/characters/family/儿媳-温柔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f2a9fe2f7d70e20c.avif |
| `assets/characters/family/儿媳-细心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5ee2ae82de57338.avif |
| `assets/characters/family/儿媳-贴心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3cfc41dad36b8979.avif |
| `assets/characters/family/儿子-心疼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ec1eb2a2a58748c.avif |
| `assets/characters/family/儿子-愤怒.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-58a8a94ded629bde.avif |
| `assets/characters/family/儿子-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-efb3e5d87952f4f2.avif |
| `assets/characters/family/儿子-焦急.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-514766616060b217.avif |
| `assets/characters/family/儿子-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1c6ff47aea8b76d6.avif |
| `assets/characters/family/儿子-诚恳.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f741731ba9e7fd4e.avif |
| `assets/characters/family/女儿-哭泣.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-39899006093fcdf0.avif |
| `assets/characters/family/女儿-委屈.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3eb83ce65c99efa.avif |
| `assets/characters/family/女儿-恳求.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-87a78a6fd3915cfc.avif |
| `assets/characters/family/女儿-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc6bf73316efd4c7.avif |
| `assets/characters/family/女儿-无奈.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2fdb69c8ea39147c.avif |
| `assets/characters/family/女儿-温柔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-75826a24895f9f29.avif |
| `assets/characters/family/妈妈-失落.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-67d0c9360f6f5605.avif |
| `assets/characters/family/妈妈-委屈.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ca285093db58783f.avif |
| `assets/characters/family/妈妈-开心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a41329458428c310.avif |
| `assets/characters/family/妈妈-感动.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ce1d885abcba8ad4.avif |
| `assets/characters/family/妈妈-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3edc7ee9dc02db29.avif |
| `assets/characters/family/妈妈-欣慰.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dd5bfc96c4ba934f.avif |
| `assets/characters/family/妈妈-消沉.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-45710fa50b1ae7dc.avif |
| `assets/characters/family/妈妈-温柔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9eb3b4fd4578df4f.avif |
| `assets/characters/family/妈妈-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3067c7af3bc4879c.avif |
| `assets/characters/family/妈妈-疼痛.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7109dffa3b1ae3b5.avif |
| `assets/characters/family/妈妈-苍白.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c9e7fbceee8e81e2.avif |
| `assets/characters/family/妈妈-难过.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d59356fa52676baa.avif |
| `assets/characters/family/妈妈-麻木.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-84565938e126791e.avif |
| `assets/characters/family/小孙女-活泼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-64526baa4723e711.avif |
| `assets/characters/family/小孙女-软糯.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ab02ee09784ddc90.avif |
| `assets/characters/family/爸爸-严肃.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8019bbe9966becac.avif |
| `assets/characters/family/爸爸-稳重.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc14808f2f3ef297.avif |
| `assets/characters/medical/乳腺科医生(专家)-专业.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5b7c6fdf5fad0e9e.avif |
| `assets/characters/medical/乳腺科医生(专家)-严肃.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-297fc1025a328e31.avif |
| `assets/characters/medical/乳腺科医生(专家)-温和.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-bed21f5a0ef01527.avif |
| `assets/characters/medical/民间老郎中-神秘.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a5bcb190fc6f3bec.avif |
| `assets/characters/medical/社区医生-专业.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-194c173967057a2b.avif |
| `assets/characters/medical/药店店员-友善.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f432d7283d569e04.avif |
| `assets/characters/medical/药店店员-随意.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1f7e1d736c3f06ce.avif |
| `assets/characters/medical/营养师-专业.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3b026af7443238fa.avif |
| `assets/characters/neighbors/刘阿姨-附和.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-708369a36bad567e.avif |
| `assets/characters/neighbors/张阿姨-热心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5cb85c40decc488e.avif |
| `assets/characters/neighbors/李阿姨-附和.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-0ef7b571b0efdca2.avif |
| `assets/characters/neighbors/王阿姨-热心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2ab13e8a593eac8.avif |
| `assets/characters/neighbors/群友-友善.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8af297d0665588bf.avif |
| `assets/characters/neighbors/群友-友善.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3ceeac5f6d649527.avif |
| `assets/characters/neighbors/邻居-热心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-4c887dd4577b09e0.avif |
| `assets/characters/paimon/派蒙-严肃.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif |
| `assets/characters/paimon/派蒙-傲娇.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-434bb619e66a69c9.avif |
| `assets/characters/paimon/派蒙-哽咽.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d792a22d27151718.avif |
| `assets/characters/paimon/派蒙-开心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a430f89a8ff59a13.avif |
| `assets/characters/paimon/派蒙-心疼.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-473bda5e4b004f41.avif |
| `assets/characters/paimon/派蒙-愤怒.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883732e8c72dedfb.avif |
| `assets/characters/paimon/派蒙-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-cb740afc662bc583.avif |
| `assets/characters/paimon/派蒙-撇嘴.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f8744d5a7c3a8626.avif |
| `assets/characters/paimon/派蒙-无奈.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-883afbad87e62248.avif |
| `assets/characters/paimon/派蒙-期待.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1a24f9c59d4a0018.avif |
| `assets/characters/paimon/派蒙-欣慰.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-82fd993980e0290f.avif |
| `assets/characters/paimon/派蒙-温柔.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c5eb634862b1fe07.avif |
| `assets/characters/paimon/派蒙-焦急.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-dc83f760eafb6b42.avif |
| `assets/characters/paimon/派蒙-绝望.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e2e8ac5350b65d04.avif |
| `assets/characters/paimon/派蒙-认真.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d00a5925b7918c2c.avif |
| `assets/characters/paimon/派蒙-赞许.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9f0b19fb0cc9f960.avif |
| `assets/characters/paimon/派蒙-软糯.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-c3a549d6cb5f1889.avif |
| `assets/characters/paimon/派蒙-郑重.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-669df96c3aff296c.avif |
| `assets/characters/paimon/派蒙-雀跃.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-425fe5b22cfb2243.avif |
| `assets/characters/paimon/派蒙-骄傲.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f6941a93e304d1d4.avif |
| `assets/characters/workplace/同事-同情.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7b3bda239c9c5da2.avif |
| `assets/characters/workplace/同事-担忧.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ff34e6102ea44186.avif |
| `assets/characters/workplace/同事-起哄.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3106a1e4133d514b.avif |
| `assets/characters/workplace/小李-同情.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d748911d9095622c.avif |
| `assets/characters/workplace/小李-疲惫.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-711333d4ba556996.avif |
| `assets/characters/workplace/小李-苦相.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-79c3c20642c0cbba.avif |
| `assets/characters/workplace/小李-谨慎.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6b02189d88b08cc2.avif |
| `assets/characters/workplace/张总-笑意.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a653b84c58e06521.avif |
| `assets/characters/workplace/张总-随和.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-22dfa8ca0964136f.avif |
| `assets/characters/workplace/王哥-友善.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-a4cf97f5a2a770ba.avif |
| `assets/characters/workplace/甲方总负责人-严肃.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7f1491f0b3263f67.avif |
| `assets/characters/workplace/甲方总负责人-满意.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-83ec1fa58f392e1e.avif |
| `assets/characters/workplace/经理-威严.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2eb8b1b33b04ee1d.avif |
| `assets/characters/workplace/经理-愣住.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3526f88489aa29b9.avif |
| `assets/characters/workplace/经理-愤怒.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6c7319b0feb951d0.avif |
| `assets/characters/workplace/经理-满意.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e7dab67333e0683a.avif |
| `assets/characters/workplace/经理-缓和.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2e0f4755029434c7.avif |
| `assets/loading/loading-1.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8f186094407d9c6f.avif |
| `assets/loading/loading-2.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7fa40ddbd4448803.avif |
| `assets/loading/loading-3.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-819d0baf4b0f6860.avif |
| `assets/scenes/child-adult/书房.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fc9077dbf6389410.avif |
| `assets/scenes/child-adult/公园.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e8e7751527b1e320.avif |
| `assets/scenes/child-adult/妈妈的卧室.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-88a1c210c220473e.avif |
| `assets/scenes/child-adult/职场办公室.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-332ab15a0b610546.avif |
| `assets/scenes/child-adult/酒店包厢.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b2f9bd8242411076.avif |
| `assets/scenes/common/乳腺主城(正常).jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-412f3a7b8b24775d.avif |
| `assets/scenes/common/乳腺主城(黑雾笼罩).png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-047e67c9be1efcde.avif |
| `assets/scenes/common/卧室.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed30c8f4302fa91a.avif |
| `assets/scenes/common/厨房.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-9d3e37ef1e6c3b30.avif |
| `assets/scenes/common/大脑记忆中枢.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-fcf3e5b58aeb3ce5.avif |
| `assets/scenes/common/客厅.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d5c4f8664a1c54ca.avif |
| `assets/scenes/elder/三甲医院.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-b927d70cbba32aba.avif |
| `assets/scenes/elder/体检中心.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-6fbc1501d5ab275c.avif |
| `assets/scenes/elder/小区花园.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b431430bab60140.avif |
| `assets/scenes/elder/正规医院.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-74104c96eb5cb995.avif |
| `assets/scenes/elder/社区医院.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1d251cb2c515bb19.avif |
| `assets/scenes/promo/免疫通路像素背景图.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-e0ca2290d4c1fffd.avif |
| `assets/scenes/promo/多癌种拓展平台像素背景图.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-35e8815df3a72e5c.avif |
| `assets/scenes/promo/激活的碎片化记忆中枢.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-5faa2658424ec329.avif |
| `assets/scenes/promo/环状 RNA 载体像素背景图.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-2b8cf9fbacba24d1.avif |
| `assets/scenes/promo/生信筛选研究像素背景图.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3b594860f39b1556.avif |
| `assets/scenes/promo/碎片化记忆中枢.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d86801d4bb250a80.avif |
| `assets/ui/book-bg.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-17d4e78208d018f2.avif |
| `assets/ui/ending-bg.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-3245b6e388a3a048.avif |
| `assets/ui/ending-chain.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-f2061a7b109704ac.avif |
| `assets/ui/ending-home-btn.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-445756f39cb9b525.avif |
| `assets/ui/ending-plate.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-d1da96f0b439f169.avif |
| `assets/ui/foreground-1.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-ed2843093104553e.avif |
| `assets/ui/foreground-2.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-1362a7dd5a2da203.avif |
| `assets/ui/home-bg.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-bg.avif |
| `assets/ui/home-book.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-book.avif |
| `assets/ui/home-start.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/home/home-start.avif |
| `assets/ui/memory-bg.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-7ca05375bcf1f7f2.avif |
| `assets/ui/necrotic-bg.jpg` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-de2fbe3bfd45475e.avif |
| `assets/ui/perspective-bg.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-135d89785bcf245d.avif |
| `assets/ui/qr-ending.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/games/breast-guardian/asset-8a91e1eda28d2b5c.avif |
| `assets/ui/qr-home.png` | https://static.igem.wiki/teams/6056/wiki/files/pages/home/qr-home.avif |
