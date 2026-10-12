import type { MemoryPointData } from '@/types';

export const ELDER_STORIES: Record<number, MemoryPointData> = {
  1: {
    id: 1,
    title: "Concealing Illness to Spare Children",
    description: "Concealing Illness to Spare Children",
    perspective: "elder",
    intro: "Opening: Brain Memory Center → Memory Awakening\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 正常】",
    scenes: [
      {
        id: "s1",
        speaker: "Opening",
        text: "Brain Memory Center → Memory Awakening"
      },
      {
        id: "s2",
        speaker: "Stage Direction",
        text: "【场景切换：大脑记忆中枢】"
      },
      {
        id: "s3",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 正常】"
      },
      {
        id: "s4",
        speaker: "Narrator",
        text: "I stand within the serene, twilight-hued expanse of the senior memory sanctuary. Silvery-violet neuronal halos float like gentle moonlight, evoking the quiet warmth of an autumn evening."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "Three memory portals stand framed in warm sandalwood textures, engraved with golden script: 'Concealing Illness to Spare Children', 'Neglecting Health Screenings & Delaying Care', and 'Delaying Standard Treatment with Folk Remedies'."
      },
      {
        id: "s6",
        speaker: "Narrator",
        text: "I reach out and touch the first gateway: 'Memory Point 1: Concealing Illness to Spare Children'. The portal glows with compassionate amber light, carrying me back to a winter morning when I first felt an alarming lump in my chest."
      },
      {
        id: "s7",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔】"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Grandma, you've carried so much care for your family your entire life. But when you discovered a painless hard lump and skin dimpling while bathing, your first instinct was to hide it, terrified of burdening your children with medical bills and worry."
      },
      {
        id: "s9",
        speaker: "Paimon",
        text: "Silence does not make illness go away. Concealment and delay gave the Breast Lump BOSS and Skin Dimpling BOSS months to expand! True love for your family begins with caring for your own health!"
      },
      {
        id: "s10",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔、分泌细胞 / 衰弱】"
      },
      {
        id: "s11",
        speaker: "Narrator",
        text: "Faint silhouettes of aging mammary tissue float in the mist. Ductal elasticity has waned, fibrous stroma has hardened, and underlying tumors tug deeply against Cooper's ligaments."
      },
      {
        id: "s12",
        speaker: "Secretory Cells",
        text: "Grandma... don't hide it... It's growing bigger every day... If you don't see a doctor, we won't be able to protect this citadel..."
      },
      {
        id: "s13",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 温柔】"
      },
      {
        id: "s14",
        speaker: "Protagonist",
        text: "I thought suffering in silence was being selfless. But if I collapse, my children will only face greater sorrow. This time, I will speak up and seek help!"
      },
      {
        id: "s15",
        speaker: "Act I",
        text: "Family Dinner: Silent Pain or Loving Confession"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【场景切换：社区医院】"
      },
      {
        id: "s17",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、儿子 / 稳重】"
      },
      {
        id: "s18",
        speaker: "Narrator",
        text: "In the warm dining room, my son and daughter-in-law are setting down dishes. As I carry a bowl of soup, a sudden sharp twinge in my breast makes my hand shake, almost spilling the broth."
      },
      {
        id: "s19",
        speaker: "Son",
        text: "Mom, what's wrong? You've been clutching your chest for days. Are you feeling unwell? Let's take you to the hospital tomorrow for a checkup."
      },
      {
        id: "s20",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 隐忍、儿子 / 稳重】"
      },
      {
        id: "s21",
        speaker: "Protagonist",
        text: "My heart races with anxiety: 'My son works overtime every night, and the grandchildren need tuition. If this is a serious tumor, it will cost hundreds of thousands...'"
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Tell your son the truth gently, describe the breast lump and skin changes, and agree to visit the hospital together",
        type: "HE",
        route: "HE",
        paimonDialogue: "Grandma, honesty and early detection are the greatest blessings for the whole family!",
        microEffect: "Emotional relief releases protective neuroendocrine factors.",
        result: "Branch 1: Chose 'Confide honestly in children and seek medical care'\n【立绘：主角 / 释怀、儿子 / 关切】\nProtagonist: Son, thank you for noticing. A few weeks ago, I felt a hard lump in my left breast, and the skin looks a bit dimpled. I was afraid of worrying you, but I know it's best to check it with a doctor early.\nNarrator: My son holds my hands with tears of relief: 'Mom, nothing in the world matters more than your health! We're going first thing tomorrow morning!'\n【立绘：主角 / 温暖、派蒙 / 骄傲】\nPaimon: Beautifully done, Grandma! Early detection caught the lump in its earliest, most curable stage! The Breast Lump and Skin Dimpling threats have been dismantled!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Confide in a trusted retired nurse neighbor first, who immediately encourages and accompanies you to tell your family",
        type: "fake",
        route: "HE",
        paimonDialogue: "Grandma, seeking medical peer advice helped you break the silence!",
        microEffect: "Anxiety softens; early evaluation proceeds.",
        result: "Branch 2: Chose 'Confide in retired nurse neighbor'\n【立绘：主角 / 沧桑、张阿姨 / 关切】\nNarrator: My retired nurse friend firmly urged me to see a breast specialist immediately, offering to accompany me to the clinic. Encouraged, I told my son that evening.\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nPaimon: Professional guidance broke the barrier of fear! Timely intervention is secured!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Force a smile, insist it's just minor arthritis, and secretly hide the condition for another six months",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, hiding symptoms allows the tumor to advance silently!",
        microEffect: "Invasive proliferation accelerates in the dark.",
        result: "Branch 3: Chose 'Force a smile and hide symptoms for months'\n【立绘：主角 / 痛苦、儿子 / 稳重】\nProtagonist: It's nothing, just an old muscle ache from catching a chill. Don't waste money on hospitals.\nNarrator: For six months, I masked the pain with balms. By autumn, the lump had doubled in size, firmly adhering to chest muscles with obvious skin dimpling.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Grandma, the delay has turned an early nodule into an invasive mass! The BOSSes have tightened their stranglehold!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Wear bulky clothing and avoid hugging your grandchildren to prevent anyone from feeling the mass",
        type: "fake",
        route: "BE",
        paimonDialogue: "Grandma, physical avoidance only causes emotional and clinical despair!",
        microEffect: "Pathological progression spreads unchecked.",
        result: "Branch 4: Chose 'Wear bulky clothing to avoid physical contact'\n【立绘：主角 / 隐忍、儿子 / 稳重】\nNarrator: I withdrew from hugging my grandchildren, fearing they would bump my painful chest. The family grew distant, and my isolation hastened physical decline.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Emotional withdrawal cannot stop cellular proliferation! Seek medical help immediately!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Secretly purchase cheap unlabelled painkillers and hide the medical card in the bottom of a trunk",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, masking symptoms with painkillers causes irreversible delay!",
        microEffect: "Unmonitored neoplasia infiltrates surrounding tissue.",
        result: "Branch 5: Chose 'Mask pain with unlabelled pills and hide medical cards'\n【立绘：主角 / 痛苦、儿子 / 稳重】\nNarrator: I took unlabelled painkillers that eroded my stomach lining while the breast tumor grew relentlessly until skin ulceration occurred.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Concealment has invited tragedy! The lesion is advancing into late clinical stages!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Undergo standardized core needle biopsy and clinical staging without fear, trusting oncology specialists",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：社区医院】\n【立绘：主角 / 释怀、儿子 / 稳重】\nNarrator: Under my son's loving encouragement, I completed ultrasound-guided biopsy. Pathological evaluation confirmed a localized early lesion, successfully resected with breast-conserving surgery.\nChoice 1: Trust Standardized Clinical Oncology\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Fast, minimally invasive treatment spared the family immense financial and emotional hardship, restoring vibrant health.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Healthy tissue boundaries are re-established. Cellular architecture remains clean and peaceful.\n【立绘：主角 / 开心、派蒙 / 骄傲、乳房硬块 BOSS / 虚弱、乳房酒窝征 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Glorious victory, Grandma! Honesty and early clinical intervention saved your Mammary Citadel!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! You have unlocked Breast Lump BOSS and Skin Dimpling BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Maintain transparent communication with family regarding all bodily changes, eliminating unnecessary guilt",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：社区医院】\n【立绘：主角 / 释怀、儿子 / 稳重】\nNarrator: I shared daily feelings openly with my children. Surrounded by family love, my immune response flourished and post-treatment recovery was swift.\nChoice 2: Transparent Family Communication\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Emotional harmony and familial solidarity proved to be the strongest medicine.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: The darkness dissolves completely into golden starlight.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Skin Dimpling BOSS!"
      },
      {
        id: "he3",
        text: "Participate in senior health literacy seminars, helping other elderly friends overcome the fear of hospitals",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：社区医院】\n【立绘：主角 / 释怀、儿子 / 稳重】\nNarrator: Having conquered illness through early detection, I joined the community health volunteer team, teaching elderly neighbors that timely checks save lives.\nChoice 3: Lead Senior Health Advocacy\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Empowering others brought profound joy and reinforced personal resilience.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Radiant vitality fills every corridor of the citadel.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Skin Dimpling BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Persist in concealing symptoms until severe skin ulceration and bleeding occur",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：社区医院】\n【立绘：主角 / 痛苦、儿子 / 焦急】\nNarrator: Concealment continued until the tumor ulcerated through the skin, causing severe hemorrhage. Emergency hospitalization revealed Stage IV disease with distant metastases.\nChoice 1: Conceal Until Ulceration Occurs\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: My children broke down in tears of grief, heartbroken that my silence had cost my life.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳房酒窝征 BOSS / 狰狞】\nBreast Lump BOSS: Prolonged silence gave me total control!\nSkin Dimpling BOSS: The tissue is irrevocably distorted!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Skin Dimpling BOSS!"
      },
      {
        id: "be2",
        text: "Refuse clinical biopsy and imaging, fatalistically declaring that 'old people shouldn't seek trouble'",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：社区医院】\n【立绘：主角 / 隐忍、儿子 / 焦急】\nNarrator: Refusing all diagnostic procedures, I let nihilism dictate my fate. Curative opportunities slipped away day by day.\nChoice 2: Fatalistic Refusal of Diagnostic Care\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Unchecked neoplasia invaded local nerves, causing intractable bone and chest wall pain.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳房酒窝征 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Skin Dimpling BOSS!"
      },
      {
        id: "be3",
        text: "Conceal bloody fluid on clothing from laundry, hiding all evidence from children",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：社区医院】\n【立绘：主角 / 隐忍、儿子 / 焦急】\nNarrator: I washed blood-stained singlets in secret at night. Total denial cost the final opportunity for localized therapy.\nChoice 3: Hide Blood-Stained Undergarments\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Widespread metastasis extinguished all therapeutic options.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳房酒窝征 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Skin Dimpling BOSS!"
      }
    ],
    bossUnlocked: [
      "breastLump",
      "skinDimple"
    ],
    skillHE: {
      id: "timelyMedical",
      name: "Timely Consultation",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "hideIllness",
      name: "Concealing Illness",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  },
  2: {
    id: 2,
    title: "Neglecting Health Screenings & Delaying Care",
    description: "Neglecting Health Screenings & Delaying Care",
    perspective: "elder",
    intro: "Opening: Brain Memory Center → Memory Awakening\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 正常】",
    scenes: [
      {
        id: "s1",
        speaker: "Opening",
        text: "Brain Memory Center → Memory Awakening"
      },
      {
        id: "s2",
        speaker: "Stage Direction",
        text: "【场景切换：大脑记忆中枢】"
      },
      {
        id: "s3",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 正常】"
      },
      {
        id: "s4",
        speaker: "Narrator",
        text: "The senior memory chamber reflects a tranquil autumn glow. Pale emerald halos drift softly around the pathways."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "I stand before the second gateway: 'Neglecting Health Screenings & Delaying Care'. Golden letters shimmer upon the frame."
      },
      {
        id: "s6",
        speaker: "Narrator",
        text: "Touching the gateway brings back the rustle of fallen autumn leaves and the cheerful chatter of elderly neighbors in the community park."
      },
      {
        id: "s7",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔】"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Grandma, do you remember when the community health center offered free annual breast cancer screenings? Neighbors spread rumors that mammograms were unbearably painful and dangerous, and you skipped the screening out of fear!"
      },
      {
        id: "s9",
        speaker: "Paimon",
        text: "Mammography and ultrasound detect microcalcifications and early nodal enlargement years before lumps can be felt! Skipping screenings allowed the Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS to incubate in secret!"
      },
      {
        id: "s10",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔、分泌细胞 / 衰弱】"
      },
      {
        id: "s11",
        speaker: "Narrator",
        text: "Dermal lymphatic channels are slowly becoming obstructed by silent microscopic clusters, while axillary nodal tissue becomes congested with unmonitored tumor cells."
      },
      {
        id: "s12",
        speaker: "Secretory Cells",
        text: "Grandma, please don't be afraid of the checkup... The gentle compression of mammography only lasts a few seconds, but it can save your life..."
      },
      {
        id: "s13",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 温柔】"
      },
      {
        id: "s14",
        speaker: "Protagonist",
        text: "Rumors and fear almost blinded me. Free public screenings are a vital lifeline. This time, I will line up proudly and complete my mammogram!"
      },
      {
        id: "s15",
        speaker: "Act I",
        text: "Community Center: Gossip or Medical Courage"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【场景切换：体检中心】"
      },
      {
        id: "s17",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、李阿姨 / 夸张】"
      },
      {
        id: "s18",
        speaker: "Narrator",
        text: "Outside the community health center, dozens of seniors hold screening vouchers. Aunt Li pulls my arm excitedly, whispering dramatic rumors."
      },
      {
        id: "s19",
        speaker: "Aunt Li",
        text: "Old Lin, don't go in there! That mammogram machine clamps down like a vice—it'll crush your chest! Besides, if you don't check, you're fine; check, and you'll invent problems! Let's go square dancing instead!"
      },
      {
        id: "s20",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 犹豫、李阿姨 / 夸张】"
      },
      {
        id: "s21",
        speaker: "Protagonist",
        text: "My voucher is in my pocket. I've felt mild underarm fullness lately. Should I heed the rumors, or walk inside?"
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Decline Aunt Li's advice politely, step into the clinic, and complete both mammography and breast ultrasound",
        type: "HE",
        route: "HE",
        paimonDialogue: "Grandma, clinical courage protects you from hidden threats!",
        microEffect: "Early diagnostic clarity brings immediate peace of mind.",
        result: "Branch 1: Chose 'Reject gossip and complete screening'\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nProtagonist: Aunt Li, early screening is provided for our protection. A few seconds of mild compression is nothing compared to peace of mind. I'm going in!\nNarrator: The mammogram and ultrasound were fast and gentle. The radiologist detected a tiny 5mm benign calcification cluster, advising simple observation.\n【立绘：主角 / 开心、派蒙 / 开心】\nPaimon: Excellent judgment, Grandma! Regular screening caught the issue at ground zero! The Peau d'Orange and Axillary Lymphadenopathy threats never had a chance!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Consult the nurse at the reception desk to clarify compression safety before entering the imaging room",
        type: "fake",
        route: "HE",
        paimonDialogue: "Grandma, asking questions dispelled myths and guided you to safety!",
        microEffect: "Anxiety resolves; screening proceeds smoothly.",
        result: "Branch 2: Chose 'Clarify screening safety with nurse'\n【立绘：主角 / 释怀、派蒙 / 温柔】\nNarrator: The nurse explained that compression immobilizes tissue for sharp images and minimal radiation. Reassured, I finished the exam with ease.\n【立绘：主角 / 开心、派蒙 / 骄傲】\nPaimon: Fact-checking replaced baseless panic! Good health is preserved!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Tear up the screening voucher, follow Aunt Li to square dance, and vow never to undergo breast imaging",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, avoiding screening leaves asymptomatic disease unchecked!",
        microEffect: "Unmonitored lesions proliferate into advanced stages.",
        result: "Branch 3: Chose 'Tear up voucher and abandon screening'\n【立绘：主角 / 犹豫、李阿姨 / 夸张】\nNarrator: I threw away the voucher and joined the dance. Over the next year, an asymptomatic lobular lesion expanded into axillary lymph chains, turning the skin into thick peau d'orange.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Grandma! Avoiding the test didn't avoid the disease! The BOSSes have fully mobilized!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Turn back at the imaging room door after hearing an acquaintance complain of compression discomfort",
        type: "fake",
        route: "BE",
        paimonDialogue: "Grandma, momentary hesitation cost you vital diagnostic protection!",
        microEffect: "Screening opportunity is lost.",
        result: "Branch 4: Chose 'Flee at the imaging door'\n【立绘：主角 / 害怕、李阿姨 / 夸张】\nNarrator: Panicked by hearsay, I slipped away from the waiting line. Years without screening allowed occult carcinoma to advance.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Fear stole your best chance at early cure!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Actively persuade other elderly neighbors to discard their screening vouchers as well",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, spreading screening hesitancy puts entire communities at risk!",
        microEffect: "Widespread diagnostic delay occurs.",
        result: "Branch 5: Chose 'Persuade others to boycott screening'\n【立绘：主角 / 沧桑、李阿姨 / 夸张】\nNarrator: Several neighbors followed my advice and skipped screenings. Two years later, three of us were diagnosed with advanced metastatic cancer simultaneously.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Misinformation harms everyone! Screening saves lives!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Establish an annual breast screening routine, combining clinical exams with digital mammography",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：体检中心】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: Every October, I attend the community screening faithfully. High-resolution imaging guarantees complete peace of mind year after year.\nChoice 1: Establish Annual Screening Routine\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Glandular tissue remains healthy and monitored, with axillary lymphatics functioning smoothly.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Dermal lymph channels flow without hindrance. The tissue maintains supple elasticity.\n【立绘：主角 / 开心、派蒙 / 骄傲、乳房橘皮样改变 BOSS / 虚弱、腋下淋巴结肿大 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Screening vigilance triumphed! The Peau d'Orange and Axillary Lymphadenopathy threats are permanently eradicated!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! You have unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Encourage senior dance troupe friends to participate together in government-sponsored screenings",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：体检中心】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: I organized our entire senior dance group to attend annual screenings together. Mutual encouragement banished all fear of testing.\nChoice 2: Group Screening with Senior Peers\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Community solidarity turned routine checkups into celebratory health outings.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Golden light floods the citadel, securing health for all.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS!"
      },
      {
        id: "he3",
        text: "Learn monthly breast self-examination techniques to monitor personal tissue changes between annual visits",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：体检中心】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: I mastered monthly palpation and visual inspection routines, reporting any subtle variations promptly to community physicians.\nChoice 3: Master Monthly Self-Examinations\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Personal health awareness created an ironclad shield against silent pathology.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: The citadel radiates pure, serene harmony.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Boycott routine screenings for five consecutive years, ignoring palpable axillary swelling",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：体检中心】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Five screening-free years allowed an unmonitored lesion to obstruct all axillary lymph nodes, causing arm lymphedema and massive peau d'orange changes.\nChoice 1: Boycott Screening for Five Years\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Massive lymphatic blockage locked the disease into late systemic progression.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房橘皮样改变 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】\nPeau d'Orange BOSS: Dermal lymph channels are choked forever!\nAxillary Lymphadenopathy BOSS: The lymphatic sentinels have fallen!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS!"
      },
      {
        id: "be2",
        text: "Dismiss swollen axillary nodes as a minor seasonal heat boil, applying hot towels in vain",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：体检中心】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Applying heat to malignant lymphadenopathy accelerated local vascular proliferation, causing inflammatory spread.\nChoice 2: Apply Heat to Malignant Nodes\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Inappropriate home remedies compounded cellular trauma.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房橘皮样改变 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS!"
      },
      {
        id: "be3",
        text: "Ignore physician follow-up letters after a suspicious Category 4 screening result",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：体检中心】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Tearing up the recall notice, I refused secondary evaluation until the primary tumor breached the chest wall.\nChoice 3: Ignore Urgent Recall Notices\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Curative surgical options were lost permanently.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房橘皮样改变 BOSS / 狰狞、腋下淋巴结肿大 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Peau d'Orange BOSS and Axillary Lymphadenopathy BOSS!"
      }
    ],
    bossUnlocked: [
      "orangePeel",
      "lymphNode"
    ],
    skillHE: {
      id: "regularCheckup",
      name: "Regular Health Screening",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "delayCheckup",
      name: "Delayed Screening",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  },
  3: {
    id: 3,
    title: "Delaying Standard Treatment with Folk Remedies",
    description: "Delaying Standard Treatment with Folk Remedies",
    perspective: "elder",
    intro: "Opening: Brain Memory Center → Memory Awakening\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 正常】",
    scenes: [
      {
        id: "s1",
        speaker: "Opening",
        text: "Brain Memory Center → Memory Awakening"
      },
      {
        id: "s2",
        speaker: "Stage Direction",
        text: "【场景切换：大脑记忆中枢】"
      },
      {
        id: "s3",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 正常】"
      },
      {
        id: "s4",
        speaker: "Narrator",
        text: "I stand before the final senior memory gateway, framed by deep crimson lacquered borders. The air carries an astringent, musty odor of dubious herbal pastes."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "The golden plaque reads: 'Delaying Standard Treatment with Folk Remedies'. Touching it pulls me back into my living room, standing beside a table laden with pungent black herbal paste."
      },
      {
        id: "s6",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔】"
      },
      {
        id: "s7",
        speaker: "Paimon",
        text: "Grandma, after the hospital diagnosed a high-risk breast lesion requiring biopsy and surgical resection, fear of operations made you easy prey for fraudulent folk remedies!"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Unregulated caustic pastes cause severe cutaneous necrosis and stimulate tumor proliferation, while delaying gold-standard surgery and systemic therapy! This spawned the Nipple Retraction BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "s9",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、派蒙 / 温柔、分泌细胞 / 衰弱】"
      },
      {
        id: "s10",
        speaker: "Narrator",
        text: "Deep within the breast tissue, lactiferous ducts are eroded by aggressive pathology, discharging dark, necrotic fluid. Fibrotic scar bands drag the nipple deep into the glandular bed."
      },
      {
        id: "s11",
        speaker: "Secretory Cells",
        text: "Grandma... the herbal mud burns so much... It isn't curing anything, it's rotting the skin and feeding the tumor cells..."
      },
      {
        id: "s12",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 温柔】"
      },
      {
        id: "s13",
        speaker: "Protagonist",
        text: "Fear of surgery drove me toward charlatans. True survival lies in clinical science and modern oncology. I will throw out the poisonous paste and trust my doctors!"
      },
      {
        id: "s14",
        speaker: "Act I",
        text: "Crossroads of Healing: Folk Alchemy vs Medical Science"
      },
      {
        id: "s15",
        speaker: "Stage Direction",
        text: "【场景切换：小区花园】"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 沧桑、李阿姨 / 夸张】"
      },
      {
        id: "s17",
        speaker: "Narrator",
        text: "In the apartment courtyard, an unlicensed peddler and Aunt Li push a jar of pungent black salve, promising miracle cures."
      },
      {
        id: "s18",
        speaker: "Aunt Li",
        text: "Old Lin, why go under the knife and lose your breast? This secret mud pack made from centipedes and wild herbs dissolves lumps from the outside within 30 days! Guaranteed cure without chemotherapy!"
      },
      {
        id: "s19",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 犹豫、李阿姨 / 夸张】"
      },
      {
        id: "s20",
        speaker: "Protagonist",
        text: "The surgeon scheduled my biopsy for Thursday. Should I risk everything on painless herbal mud, or undergo clinical surgery?"
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Categorically reject fraudulent folk remedies, trust certified oncology teams, and proceed with standard surgical therapy",
        type: "HE",
        route: "HE",
        paimonDialogue: "Grandma, trusting evidence-based oncology is the true path to healing!",
        microEffect: "Scientific clinical pathways activate; curative defenses take hold.",
        result: "Branch 1: Chose 'Trust certified oncology and reject folk remedies'\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nProtagonist: Aunt Li, tumors are complex biological mutations that cannot be 'dissolved' by external mud. I trust certified oncology specialists and will proceed with clinical treatment.\nNarrator: I threw the herbal jar away and attended my scheduled surgery. The localized lesion was cleanly excised with clear margins. Comprehensive post-op endocrine therapy ensured total remission!\n【立绘：主角 / 开心、派蒙 / 开心】\nPaimon: Triumphant choice, Grandma! Scientific clinical medicine eradicated the tumor completely! The Nipple Retraction and Nipple Discharge threats have vanished forever!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Bring the herbal jar to your surgical oncologist for ingredient evaluation, learning its toxic reality before discarding it",
        type: "fake",
        route: "HE",
        paimonDialogue: "Grandma, professional consultation exposed the danger of the paste!",
        microEffect: "Toxic exposure is averted.",
        result: "Branch 2: Chose 'Consult oncologist about herbal paste'\n【立绘：主角 / 释怀、派蒙 / 温柔】\nNarrator: The oncologist warned that caustic herbal pastes induce severe chemical burns, sepsis, and accelerated metastasis. Relieved, I committed fully to surgical therapy.\n【立绘：主角 / 开心、派蒙 / 骄傲】\nPaimon: Professional guidance saved you from predatory quackery! Healing is achieved!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Spend life savings on the secret herbal mud, applying caustic pastes daily while cancelling all hospital appointments",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, caustic poultices cause ulceration while cancer spreads unchecked!",
        microEffect: "Tissue necrosis and rapid metastasis occur.",
        result: "Branch 3: Chose 'Buy secret herbal paste and cancel surgery'\n【立绘：主角 / 痛苦、李阿姨 / 夸张】\nNarrator: Daily application of the caustic paste corroded the skin into an agonizing, foul-smelling ulcer. Meanwhile, the untreated tumor metastasized to lungs and bones.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Grandma! The paste destroyed your skin while the cancer claimed the citadel! The BOSSes have achieved total conquest!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Delay surgery by three months to 'give the herbal remedy a chance first'",
        type: "fake",
        route: "BE",
        paimonDialogue: "Grandma, a three-month delay allows early cancer to progress past operable windows!",
        microEffect: "Critical therapeutic window is permanently lost.",
        result: "Branch 4: Chose 'Delay surgery by three months to test remedy'\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: In those three months of delay, the primary tumor doubled in size, converting a simple lumpectomy into an inoperable metastatic disease.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Time is life in oncology! Procrastination cost you your health!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Recommend the secret herbal concoction to other cancer patients in the neighborhood",
        type: "BE",
        route: "BE",
        paimonDialogue: "Grandma, promoting unverified quackery compounds catastrophic delay for others!",
        microEffect: "Widespread therapeutic failure spreads across the community.",
        result: "Branch 5: Chose 'Promote herbal paste to fellow patients'\n【立绘：主角 / 痛苦、李阿姨 / 夸张】\nNarrator: Both my neighbor and I suffered catastrophic infection and late-stage progression, overwhelmed with devastating regret.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Medical quackery destroys lives! Always adhere to verified clinical medicine!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Follow the multimodal clinical regimen faithfully: surgery, endocrine therapy, and regular oncology follow-ups",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：小区花园】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: I adhered strictly to standard clinical guidelines. Five years later, regular follow-ups showed zero recurrence, with excellent functional vitality.\nChoice 1: Adhere to Multimodal Clinical Protocol\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Complete remission was achieved through the power of verified clinical science.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Ductal structures are healthy and supple. Secretory balance is pristine.\n【立绘：主角 / 开心、派蒙 / 骄傲、乳头内陷 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Total victory! Evidence-based oncology has vanquished the final BOSSes! Mom's Mammary Realm is permanently secured!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! You have unlocked Nipple Retraction BOSS and Nipple Discharge BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Maintain transparent communication with attending oncologists regarding any complementary dietary supplements",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：小区花园】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: All dietary and recovery choices were coordinated under physician supervision, preventing drug interactions and optimizing recovery.\nChoice 2: Transparent Oncology Coordination\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Harmonious synergy between patient and clinical team provided the gold standard of care.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Radiant starlight illuminates the citadel in eternal tranquility.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Nipple Retraction BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "he3",
        text: "Volunteer in cancer survivor peer support networks to help newly diagnosed elderly patients reject quackery",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：小区花园】\n【立绘：主角 / 释怀、派蒙 / 骄傲】\nNarrator: I shared my recovery story in patient peer groups, dispelling fear of clinical treatments and steering dozens of seniors away from lethal folk remedies.\nChoice 3: Lead Peer Support Advocacy\n【立绘：主角 / 温暖、派蒙 / 开心】\nNarrator: Scientific truth and compassionate advocacy created an enduring ring of defense for the entire community.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Golden light floods the citadel, celebrating absolute triumph.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Nipple Retraction BOSS and Nipple Discharge BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Persist with corrosive herbal mud until full-thickness tissue necrosis, ulceration, and sepsis ensue",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：小区花园】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: The corrosive paste ate through the dermis into pectoral muscle, precipitating septic shock. Massive tumor ulceration rendered palliative care the only remaining option.\nChoice 1: Persist with Corrosive Paste Until Sepsis\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Destructive quackery stole all hope of cure.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\nNipple Retraction BOSS: The architecture has completely collapsed!\nNipple Discharge BOSS: Sepsis and necrotic sludge flow without end!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Nipple Retraction BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "be2",
        text: "Reject all standard clinical interventions, insisting that swelling is just 'negative energy leaving the body'",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：小区花园】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Blind superstition prevented all clinical intervention until metastatic burden caused multi-organ failure.\nChoice 2: Superstitious Rejection of Standard Medicine\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Fatal delay extinguished all survival prospects.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Nipple Retraction BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "be3",
        text: "Delay standard clinical evaluation until distant metastases to bones and liver make cure impossible",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：小区花园】\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: By the time I returned to the hospital, widespread skeletal metastases were causing unbearable fractures. The curative window was gone forever.\nChoice 3: Delay Care Until Distant Metastasis\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: The cost of delay was irreversible and heartbreaking.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳头内陷 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Nipple Retraction BOSS and Nipple Discharge BOSS!"
      }
    ],
    bossUnlocked: [
      "nippleRetraction",
      "nippleDischarge"
    ],
    skillHE: {
      id: "scientificTreatment",
      name: "Evidence-Based Treatment",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "folkRemedy",
      name: "Delay via Folk Remedies",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  }
};
