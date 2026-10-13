import type { Language } from '@/types';

/**
 * IP 小羊内置话术库（中文 15 句）
 */
export const SHEEP_LINES_ZH: string[] = [
  '欢迎来到乳腺守护者的世界，准备好开启你的守护之旅了吗？',
  '每月一次乳房自查很重要，早发现、早就医，是最靠谱的健康习惯！',
  '酒精会刺激乳腺组织增生，能少喝就少喝，健康永远排在第一位～',
  '坏情绪可不会自己跑掉，多给自己一点放松的时间，也是在守护乳腺主城呀。',
  '中老年女性也要坚持每年做乳腺体检，很多早期病变都是没有痛感的哦。',
  '每条故事线都有 HE 和 BE 两种结局，不同的选择会走向不一样的结果哦～',
  '二周目会开启时光回溯功能，可以无限重玩记忆点，去解锁更圆满的结局吧！',
  '首页的知识手册里藏着所有 BOSS 图鉴和科普内容，随时都能查看哦。',
  '二周目通关后会解锁未来医院彩蛋，里面藏着关于癌症治疗的未来展望哦。',
  '你知道吗？三阴性乳腺癌缺少三类经典治疗靶点，一直是临床里的难题。',
  '和线性 RNA 不一样，环状 RNA 的闭环结构更稳定，能更持久地激活免疫系统。',
  '三阴性乳腺癌的治疗虽然有难度，但科学家们一直都在寻找新的方向哦。',
  '游戏结束后记得填写守护者评估报告，看看自己收获了多少知识吧～',
  '你的每一份反馈都很珍贵，会让《乳腺守护者》变得越来越好哦！',
  '嘿！别总熬夜啦，规律作息才是乳腺健康的最佳守护盾哦！'
];

/**
 * IP Mascot Sheep Dialogue Database (English 15 lines)
 */
export const SHEEP_LINES_EN: string[] = [
  'Welcome to the world of Breast Guardian! Are you ready to embark on your journey of protection?',
  'Monthly breast self-examinations are vital: early detection and prompt consultation are your most reliable health habits!',
  'Alcohol stimulates abnormal mammary tissue proliferation—minimize intake, because your health always comes first~',
  "Negative emotions won't simply vanish on their own; giving yourself time to unwind also safeguards your mammary citadel!",
  'Middle-aged and elderly women should maintain annual clinical breast screenings; many early-stage lesions are completely painless!',
  'Every storyline features both HE (Happy Ending) and BE (Bad Ending) paths—each choice leads to a distinct destiny~',
  'Playthrough 2 unlocks Time-Travel recollection, allowing unlimited replays to discover the most fulfilling endings!',
  'The Knowledge Handbook on the home screen compiles all BOSS profiles and clinical science facts—accessible anytime!',
  'Completing Playthrough 2 unlocks the Future Hospital easter egg, showcasing cutting-edge visions of cancer therapy!',
  'Did you know? Triple-Negative Breast Cancer (TNBC) lacks three classic therapeutic receptors, remaining a formidable clinical challenge.',
  'Unlike linear RNA, circular RNA (circRNA) possesses a closed-loop structure that is far more stable, sustaining prolonged immune activation.',
  'While treating Triple-Negative Breast Cancer is challenging, synthetic biologists and scientists are continually pioneering novel breakthroughs!',
  'Remember to complete the Guardian Evaluation Report after the game to review the medical insights you have gained~',
  'Every piece of your feedback is invaluable and helps make Breast Guardian even better!',
  'Hey! Stop pulling all-nighters—a regular sleep schedule is your greatest biological shield for breast wellness!'
];

export const SHEEP_LINES = SHEEP_LINES_ZH;

export function getSheepLines(lang: Language = 'en'): string[] {
  return lang === 'en' ? SHEEP_LINES_EN : SHEEP_LINES_ZH;
}
