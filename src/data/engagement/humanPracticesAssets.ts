// The team uploaded these files together under the IHP directory.
// Keep the filename mapping here so portraits and interview photographs stay paired.
const ihp = "https://static.igem.wiki/teams/6056/wiki/files/pages/engagement/ihp/";
const image = (file: string) => `${ihp}${file}.avif`;

export type StakeholderMedia = {
  portrait?: string;
  interview?: string[];
  followup?: string[];
};

export const originMedia: StakeholderMedia[] = [
  { portrait: image("yaobohui"), interview: [image("2025-changchun-pharmaceutical-and-healthcare-industry-expo1")] },
  { portrait: image("kou"), interview: [image("kou2")] },
  {},
  { portrait: image("jia-lin"), interview: [image("jl1")], followup: [image("jl2"), image("jl3")] },
  { portrait: image("wanglei"), interview: [image("wanglei-cai1")], followup: [image("wanglei-cai2")] },
  { portrait: image("lichengli") },
  { portrait: image("tianrunhui"), interview: [image("trh2")] },
];

export const stageMedia: Record<string, Record<string, StakeholderMedia>> = {
  plasmid: {
    hu: { portrait: image("hujifan"), interview: [image("hjf1")], followup: [image("hjf2")] },
    niu: { portrait: image("niujinqi"), interview: [image("njq1"), image("njq2")] },
    wang: { portrait: image("wangyishu"), interview: [image("wys1")] },
    guan: { portrait: image("guanqingtian"), interview: [image("gqt1")], followup: [image("gqt2")] },
    wu: { portrait: image("wudi"), interview: [image("wd1")] },
    meng: { portrait: image("mengxiangyu"), interview: [image("mxy1")] },
  },
  "in-vitro": {
    yang: { portrait: image("yangruohan"), interview: [image("yrh1")], followup: [image("yrh2")] },
    niu: { portrait: image("niujinqi"), interview: [image("njq1")] },
    jia: { portrait: image("jia-lin"), interview: [image("jl1")], followup: [image("jl2")] },
    miao: { portrait: image("miaolei"), interview: [image("miaolei-cai1")] },
  },
  "in-vivo": {
    hu: { portrait: image("huzheng"), interview: [image("hz1")] },
    zhang: { portrait: image("zhangyuning"), interview: [image("zyn1")] },
    song: { portrait: image("songhaiming"), interview: [image("shm1")] },
    tianmeng: { portrait: image("suntianmeng"), interview: [image("stm1")] },
    cui: { portrait: image("cuijiuwei"), interview: [image("cjw1")], followup: [image("cjw2")] },
    zhao: { portrait: image("zhaotiesuo"), interview: [image("zts1")] },
  },
  return: {
    yang: { portrait: image("yangshujuan"), interview: [image("ysj1")], followup: [image("ysj2")] },
    hu: { portrait: image("huyuanchao"), interview: [image("huyuanchao-cai1")] },
    tian: { portrait: image("tianrunhui"), interview: [image("trh2")] },
    wang: { portrait: image("wangjianguo"), interview: [image("wjg1"), image("wjg2")] },
    patients: { interview: [image("huanzhe-cai2")] },
    jing: { portrait: image("wenjing") },
    jia: { portrait: image("jiayongli-cai1"), interview: [image("jiayongli-cai1")], followup: [image("jiayongli-cai2")] },
    qiao: { portrait: image("qjh") },
    yu: { portrait: image("yushuangcheng"), interview: [image("yushuangcheng-cai1")] },
  },
};
