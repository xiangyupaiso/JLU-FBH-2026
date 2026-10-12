import type { Perspective, Language } from '@/types';

export interface SpecialEndingData {
  title: string;
  scenes: string[];
  paimonDialogues: string[];
  microEffects: string[];
}

// 二周目特殊HE剧情（中文）
export const SPECIAL_ENDINGS_ZH: Record<Perspective, SpecialEndingData> = {
  child: {
    title: '幼年视角·特殊治愈结局',
    scenes: [
      '微观乳腺世界的冒险终于迎来了最温暖的结局。',
      '你用坚定的选择改掉了所有伤害妈妈健康的坏习惯，成功驱散了所有黑雾，守护了妈妈的乳腺家园。',
      '当现实的检查报告单递到手中，"良性"二字是最好的答案。',
      '妈妈紧紧抱着你，眼眶里闪着泪光："宝贝，谢谢你这么懂事……"',
      '你用小手帮妈妈擦去眼泪，笑着说："妈妈，以后我会一直保护你的！"',
      '往后的日子里，你成了妈妈最贴心的小棉袄。',
      '每天提醒妈妈按时休息，陪她散步，给她讲笑话。',
      '妈妈也养成了健康的生活习惯，定期体检，保持好心情。',
      '乳腺主城的派蒙和所有细胞，一直为你们祝福，为你们守护。',
      '岁岁安康，这就是最好的结局。'
    ],
    paimonDialogues: [
      '小主人，你终于通关啦！',
      '你用爱和勇气守护了妈妈的健康！',
      '妈妈一定会为你骄傲的！',
      '小主人太棒了！',
      '以后也要继续保护妈妈哦！',
      '乳腺主城的细胞们都很感谢你！',
      '派蒙会一直陪着你的！',
      '这就是最温暖的结局！',
      '愿你们永远健康快乐！',
      '再见啦，小主人！'
    ],
    microEffects: [
      '乳腺主城的灰雾彻底消散！',
      '天空变回温暖的淡蓝色！',
      '小细胞们欢呼雀跃！',
      '妈妈的乳腺家园恢复了健康！',
      '黑雾再也无法侵入！',
      '乳腺主城充满了欢声笑语！',
      '派蒙开心地飞来飞去！',
      '这就是最完美的结局！',
      '愿健康永远陪伴！',
      '再见啦，乳腺主城！'
    ]
  },
  adult: {
    title: '青壮年视角·特殊治愈结局',
    scenes: [
      '微观乳腺世界的冒险终于迎来了最温暖的结局。',
      '你用坚定的选择改掉了所有伤害自己的坏习惯，成功驱散了所有黑雾，守护了属于自己的乳腺家园。',
      '当现实的检查报告单递到手中，"良性"二字是最好的答案。',
      '你深吸一口气，看着窗外的阳光，心里充满了感激。',
      '从今以后，你养成了健康的生活习惯：拒绝不必要的应酬、规律作息、科学养生。',
      '你把这段经历分享给了身边的同事和朋友，提醒她们关注乳腺健康。',
      '乳腺主城的派蒙和所有细胞，一直为你祝福，为你守护。',
      '好好爱自己，让这份守护延续，岁岁安康。'
    ],
    paimonDialogues: [
      '主人，你终于通关啦！',
      '你用勇气和智慧守护了自己的健康！',
      '这就是最正确的选择！',
      '主人太棒了！',
      '以后也要好好爱自己哦！',
      '乳腺主城的细胞们都很感谢你！',
      '派蒙会一直陪着你的！',
      '这就是最温暖的结局！',
      '愿健康永远陪伴！',
      '再见啦，主人！'
    ],
    microEffects: [
      '乳腺主城的灰雾彻底消散！',
      '天空变回温暖的淡蓝色！',
      '小细胞们欢呼雀跃！',
      '你的乳腺家园恢复了健康！',
      '黑雾再也无法侵入！',
      '乳腺主城充满了欢声笑语！',
      '派蒙开心地飞来飞去！',
      '这就是最完美的结局！',
      '愿健康永远陪伴！',
      '再见啦，乳腺主城！'
    ]
  },
  elder: {
    title: '老年视角·特殊治愈结局',
    scenes: [
      '微观乳腺世界的冒险终于迎来了最温暖的结局。',
      '您用坚定的选择改掉了所有隐瞒病情、拖延就医的坏习惯，成功驱散了所有黑雾，守护了属于自己的乳腺家园。',
      '当现实的检查报告单递到手中，"良性"二字是最好的答案。',
      '儿女们紧紧握着您的手，眼眶里闪着泪光："妈，您终于肯听我们的了……"',
      '您笑着说："妈以后一定按时体检，不让你们担心。"',
      '往后的日子里，您养成了健康的生活习惯：按时体检、相信科学、及时就医。',
      '好好爱自己，也是不让子女担心的最好方式。',
      '乳腺主城的派蒙和所有细胞，一直为您祝福，为您守护。',
      '岁岁安康，这就是最好的结局。'
    ],
    paimonDialogues: [
      '爷爷奶奶，您终于通关啦！',
      '您用勇气和智慧守护了自己的健康！',
      '儿女们一定会为您骄傲的！',
      '爷爷奶奶太棒了！',
      '以后也要好好爱自己哦！',
      '乳腺主城的细胞们都很感谢您！',
      '派蒙会一直陪着您的！',
      '这就是最温暖的结局！',
      '愿健康永远陪伴！',
      '再见啦，爷爷奶奶！'
    ],
    microEffects: [
      '乳腺主城的灰雾彻底消散！',
      '天空变回温暖的淡蓝色！',
      '小细胞们欢呼雀跃！',
      '您的乳腺家园恢复了健康！',
      '黑雾再也无法侵入！',
      '乳腺主城充满了欢声笑语！',
      '派蒙开心地飞来飞去！',
      '这就是最完美的结局！',
      '愿健康永远陪伴！',
      '再见啦，乳腺主城！'
    ]
  }
};

// 二周目特殊HE剧情（英文）
export const SPECIAL_ENDINGS_EN: Record<Perspective, SpecialEndingData> = {
  child: {
    title: 'Child Perspective · Special Healing Ending',
    scenes: [
      'The adventure in the microscopic breast world has finally arrived at its warmest conclusion.',
      "With steadfast choices, you broke all the harmful habits that exhausted Mom, dispelled the dark mist, and safeguarded Mom's mammary sanctuary.",
      'When the clinical diagnostic report is handed over in reality, the word "Benign" is the most beautiful answer.',
      'Mom embraces you tightly, tears shining in her eyes: "Sweetheart, thank you for being so caring and sensible..."',
      'Wiping away Mom\'s tears with your little hands, you smile: "Mom, I will always protect you from now on!"',
      "In the days that follow, you become Mom's most devoted little guardian angel.",
      'Reminding Mom to rest on time every day, walking with her, and sharing laughter.',
      'Mom has also built healthy daily habits, attending regular screenings with a peaceful and bright heart.',
      'Paimon and every cell in the mammary citadel will forever bless and protect you both.',
      'May every year be filled with health and peace—this is the most perfect ending.'
    ],
    paimonDialogues: [
      'Little Master, you finally cleared the game!',
      "You safeguarded Mom's health with pure love and courage!",
      'Mom is so proud of you!',
      'You were absolutely wonderful!',
      'Remember to keep taking great care of Mom in the future!',
      'Every cell in the mammary citadel sends their deepest gratitude!',
      'Paimon will always be right here beside you!',
      'This is truly the warmest ending!',
      'May you both stay healthy and joyous forever!',
      'Farewell for now, Little Master!'
    ],
    microEffects: [
      'The gray miasma over the mammary citadel has completely cleared!',
      'The sky returns to a radiant, gentle azure blue!',
      'Tiny cells cheer and dance with pure joy!',
      "Mom's breast ecosystem has fully regained its vibrant health!",
      'Dark mist can never infiltrate this haven again!',
      'The mammary citadel resounds with laughter and serenity!',
      'Paimon flutters and loops happily through the air!',
      'This is truly the most flawless ending!',
      'May enduring health accompany you always!',
      'Farewell for now, beloved Mammary Citadel!'
    ]
  },
  adult: {
    title: 'Adult Perspective · Special Healing Ending',
    scenes: [
      'The adventure in the microscopic breast world has finally arrived at its warmest conclusion.',
      'With unwavering determination, you abandoned habits that strained your well-being, dispersed all dark mist, and reclaimed your own healthy breast citadel.',
      'When the real-world diagnostic report is handed to you, the word "Benign" is the sweetest reward.',
      'Taking a deep breath as sunlight streams through the window, your heart fills with profound gratitude.',
      'From now on, you embrace a balanced life: declining unnecessary drinking parties, observing circadian sleep, and caring for your body scientifically.',
      'You share this journey with friends and colleagues, inspiring them to prioritize breast health and self-care.',
      'Paimon and every cell in the mammary citadel will forever bless and safeguard you.',
      'Love yourself deeply and carry this protection forward—peace and health in every passing season.'
    ],
    paimonDialogues: [
      'Master, you finally completed your journey!',
      'With wisdom and bravery, you safeguarded your own vital wellness!',
      'This was absolutely the right path to take!',
      'You did an incredible job!',
      'Continue loving yourself and keeping this commitment in days ahead!',
      'Every single cell in the citadel honors you with heartfelt gratitude!',
      'Paimon will forever stay by your side!',
      'This is the warmest and sweetest conclusion!',
      'May radiant vitality stay with you through all years!',
      'Farewell for now, Master!'
    ],
    microEffects: [
      'The oppressive haze over the citadel has entirely dissolved!',
      'The horizon glows with soothing, tranquil sky-blue brilliance!',
      'All living cells rejoice with triumphant celebration!',
      'Your mammary realm is restored to flourishing harmony!',
      'Shadows of illness can never take root here again!',
      'Joyous harmony resonates through every pathway of the citadel!',
      'Paimon glides excitedly amidst cheerful laughter!',
      'This stands as the ultimate, flawless conclusion!',
      'May wellness remain your lifelong companion!',
      'Farewell for now, vibrant Mammary Citadel!'
    ]
  },
  elder: {
    title: 'Elder Perspective · Special Healing Ending',
    scenes: [
      'The adventure in the microscopic breast world has finally arrived at its warmest conclusion.',
      'With resolute devotion, you left behind the habit of concealing symptoms and delaying care, successfully sweeping away all gloom to preserve your mammary sanctuary.',
      'When the tangible medical examination report is placed into your hands, the word "Benign" is the most reassuring verdict.',
      'Your children hold your hands tenderly, eyes moist with emotion: "Mom, thank you for finally listening to us and seeing the doctor..."',
      'You smile gently and reply: "From now on, I will always go for regular checkups on time, so you never have to worry."',
      'Through all the tranquil days ahead, you embrace mindful living: attending routine screenings, trusting medical science, and seeking prompt care.',
      'Loving yourself genuinely is the greatest gift of peace you can offer your loved ones.',
      'Paimon and every cellular inhabitant of the citadel will constantly watch over and bless you.',
      'May all your golden years be peaceful and hale—this is the truest, warmest conclusion.'
    ],
    paimonDialogues: [
      'Grandmother and Grandfather, you have triumphantly completed your journey!',
      'You protected your precious health with wisdom and quiet bravery!',
      'Your children and family are so very proud of you!',
      'You were truly wonderful!',
      'Please keep cherishing your well-being in all the days to come!',
      'Every microscopic cell across the citadel expresses boundless thanks!',
      'Paimon will always cherish and accompany you!',
      'This is indeed the most comforting ending!',
      'Wishing you long life, joy, and unbroken health!',
      'Farewell for now, dear elders!'
    ],
    microEffects: [
      'The dark fog engulfing the citadel has completely vanished!',
      'The heavens shine with serene and warm turquoise clarity!',
      'Lively cells celebrate in ecstatic harmony!',
      'Your mammary haven is replenished with vitality and health!',
      'Dark miasma will never trouble this peaceful city again!',
      'Melodic warmth and joyful cheers echo through the citadel!',
      'Paimon dances across the sky with boundless delight!',
      'This represents the most fulfilling and peaceful conclusion!',
      'May wellness accompany you through every golden year!',
      'Farewell for now, tranquil Mammary Citadel!'
    ]
  }
};

export const SPECIAL_ENDINGS = SPECIAL_ENDINGS_ZH;

export function getSpecialEnding(
  perspective: Perspective,
  lang: Language = 'zh'
): SpecialEndingData {
  const store = lang === 'en' ? SPECIAL_ENDINGS_EN : SPECIAL_ENDINGS_ZH;
  return store[perspective];
}
