import type { MemoryPointData } from '@/types';

export const ADULT_STORIES: Record<number, MemoryPointData> = {
  1: {
    id: 1,
    title: "Forced Social Drinking in the Workplace",
    description: "Forced Social Drinking in the Workplace",
    perspective: "adult",
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
        text: "I stand on the deep azure periphery of the adult memory corridor. Streamlined neuron halos flash with cool electric blue, floating in rhythmic, high-frequency pulses like the tireless heartbeat of a modern metropolis."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "Three memory portals stand framed like contemporary crystal glass tablets, etched with sleek silver script: 'Forced Social Drinking in the Workplace', 'Overtime Exhaustion on Tight Deadlines', and 'Abuse of Diet Pills and Hormonal Supplements'."
      },
      {
        id: "s6",
        speaker: "Narrator",
        text: "I reach out and touch the first tablet: 'Memory Point 1: Forced Social Drinking in the Workplace'. Cold crystal shatters into vibrant starlight, pulling me straight into a crowded corporate banquet hall redolent of tobacco smoke, rich liquor, and suffocating workplace politics."
      },
      {
        id: "s7",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃】"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Be careful here! In adulthood, career demands often collide violently with bodily limits. That business banquet where your boss pressured you into binge drinking inflicted massive chemical trauma on your breast tissue!"
      },
      {
        id: "s9",
        speaker: "Paimon",
        text: "Alcohol metabolism spikes circulating estrogen levels and generates carcinogenic acetaldehyde, directly battering mammary epithelial cells. That night spawned the Breast Lump BOSS and Nipple Discharge BOSS! You must learn to stand firm and protect your health!"
      },
      {
        id: "s10",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃、分泌细胞 / 虚弱】"
      },
      {
        id: "s11",
        speaker: "Narrator",
        text: "Distressed cell signals drift out. Under toxic alcohol exposure, secretory cells are dehydrating rapidly, mammary duct walls tremble under inflammatory irritation, and atypical secretions begin accumulating."
      },
      {
        id: "s12",
        speaker: "Secretory Cells",
        text: "It burns so much... The alcohol toxins are scorching through the ducts... We can't maintain fluid balance..."
      },
      {
        id: "s13",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 严肃】"
      },
      {
        id: "s14",
        speaker: "Protagonist",
        text: "I thought drinking along was the only way to survive corporate culture. But sacrificing my health for empty approval was a fatal mistake. This time, I will draw the line!"
      },
      {
        id: "s15",
        speaker: "Act I",
        text: "Banquet Pressure: Compromise or Principle"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【场景切换：职场办公室】"
      },
      {
        id: "s17",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、经理 / 严肃】"
      },
      {
        id: "s18",
        speaker: "Narrator",
        text: "The private dining room is loud with boisterous toasts. At the head of the table sits Client Director Wang, with Manager Li standing by his side, brandishing a heavy liquor glass filled with 52-degree baijiu."
      },
      {
        id: "s19",
        speaker: "Manager",
        text: "Xiao Lin! Director Wang has honored us by attending tonight. Down this glass to show our team's sincerity! If you don't drink, you're not giving face to our client or our company!"
      },
      {
        id: "s20",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、经理 / 严肃】"
      },
      {
        id: "s21",
        speaker: "Protagonist",
        text: "Manager, the doctor explicitly warned me that my breast nodules are sensitive and alcohol consumption is strictly forbidden..."
      },
      {
        id: "s22",
        speaker: "Manager",
        text: "Come on, one drink won't hurt! The entire quarterly bonus rides on this contract! Don't be a party pooper!"
      },
      {
        id: "s23",
        speaker: "Narrator",
        text: "All eyes around the table turn onto me. The glass feels like lead in my hand, the sharp fumes burning my nostrils."
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Politely but firmly decline the liquor, propose a toast with warm tea, and articulate clinical reasons calmly",
        type: "HE",
        route: "HE",
        paimonDialogue: "Master, standing by medical boundaries sets the true HE route in motion.",
        microEffect: "The defensive perimeter of the Mammary Citadel reinforces.",
        result: "Branch 1: Chose 'Decline liquor firmly and toast with hot tea'\n【立绘：主角 / 坚定、经理 / 严肃】\nProtagonist: Director Wang, Manager Li, I sincerely value our partnership and will personally guarantee the flawless execution of this project. However, my physician has placed me on strict medical orders against alcohol. Please allow me to toast to Director Wang's good health with hot tea as a token of my genuine dedication!\nNarrator: Seeing my calm, composed professionalism and unwavering resolve, Director Wang nods with appreciation: 'Health comes first. I respect someone who stands by their principles. Let's drink to cooperation!'\n【立绘：主角 / 开心、派蒙 / 骄傲】\nPaimon: Splendidly handled! You defended your boundaries without compromising professional dignity. Alcohol toxins have been successfully barred from your Mammary Realm!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Discreetly pour the liquor into a cup of water or napkin while pretending to sip",
        type: "fake",
        route: "HE",
        paimonDialogue: "Master, avoiding ingestion shields the tissue, but direct communication is safer.",
        microEffect: "Toxic influx was largely averted; memories continue to merge.",
        result: "Branch 2: Chose 'Discreetly spit alcohol into napkin'\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Raising the glass, I pretend to drink while subtly letting the liquor soak into a wet napkin in my hand, quickly swapping my cup for warm water.\n【立绘：主角 / 坚定、派蒙 / 严肃】\nPaimon: A clever emergency evasion, but remember that establishing clear boundaries is the only lasting defense against toxic drinking culture!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Yield to workplace peer pressure, downing three consecutive glasses of baijiu to please the client",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, chemical toxicity is flooding the duct system!",
        microEffect: "Dark mist thickens rapidly over the glandular network.",
        result: "Branch 3: Chose 'Gulp down three glasses of strong baijiu'\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Fearing workplace ostracization, I shut my eyes and down three glasses of baijiu in rapid succession. Fire scorches down my throat and stomach. Within minutes, my cheeks burn, dizziness overwhelms me, and a sharp, throbbing ache flares across my breasts.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Master, stop! The alcohol is accelerating estrogen synthesis and triggering intense glandular inflammation! The BOSSes are feasting on the metabolic damage!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Try to substitute baijiu with beer, drinking five bottles instead",
        type: "fake",
        route: "BE",
        paimonDialogue: "Master, high total alcohol volume remains equally harmful!",
        microEffect: "Inflammatory mediators flood the epithelial walls.",
        result: "Branch 4: Chose 'Substitute baijiu with excessive beer'\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: I agreed to drink beer instead, but ended up consuming five full bottles under relentless toasting. Severe bloating and metabolic strain left my breast tissue aching with congestion.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Total alcohol intake is what matters! Beer still delivers severe endocrine disruption!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Lose temper, slam the glass onto the table, and storm out in a fit of extreme rage",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, extreme emotional fury causes acute hormonal surges!",
        microEffect: "Vascular spasm and ductal constriction spike across the citadel.",
        result: "Branch 5: Chose 'Slam glass down and storm out in intense fury'\n【立绘：主角 / 愤怒、经理 / 严肃】\nNarrator: Overwhelmed by humiliation, I slammed the glass onto the table and stormed out. Heavy adrenaline and cortisol surges constricted mammary microvasculature, causing agonizing spasms in my chest.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Emotional explosions cause severe neuroendocrine dysregulation! Clear, composed boundaries protect health far better than explosive rage!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Establish clear workplace boundaries: announce health-first principles and refuse alcohol permanently",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: From that day forward, I made my medical boundaries unmistakable in all professional engagements. True business partnerships flourished on competence and reliability, not liver damage.\nChoice 1: Establish Permanent Alcohol-Free Boundary\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Free of alcohol toxins, breast microcirculation cleared. The glandular nodules remained benign and stable without inflammatory flare-ups.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Secretory cells thrive in balanced nutrient streams. Macrophages patrol peacefully, removing normal metabolic residues.\n【立绘：主角 / 开心、派蒙 / 骄傲、乳房硬块 BOSS / 虚弱、乳头溢液 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Remarkable! Healthy choices keep ductal integrity solid! The Breast Lump and Nipple Discharge threats have completely vanished!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! You have unlocked Breast Lump BOSS and Nipple Discharge BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Demonstrate value through technical excellence and project deliverables rather than banquet drinking",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I focused all energy on client value and product quality. The client renewed our contract based on outstanding performance, setting a new healthy standard for the department.\nChoice 2: Focus on Professional Excellence\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Balanced lifestyle and reduced toxic burden kept hormonal parameters within optimal ranges.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Mammary ducts flow freely, free from inflammatory discharge.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "he3",
        text: "Share scientific evidence on alcohol carcinogenicity with colleagues, promoting healthy dining options",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I shared medical literature demonstrating that alcohol is a Group 1 carcinogen that elevates breast cancer risk. Several coworkers joined me in adopting alcohol-free business dinners.\nChoice 3: Promote Evidence-Based Health Culture\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: A supportive corporate microclimate shields both individual health and communal wellbeing.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Golden light floods the citadel, restoring harmony.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Nipple Discharge BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Continue drinking at client dinners week after week, normalizing heavy alcohol consumption",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: I normalized social drinking as part of work. Months of chronic alcohol abuse led to painful fibroadenomatous lumps and persistent bloody nipple discharge.\nChoice 1: Continue Regular Binge Drinking\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Biopsy results revealed atypical ductal hyperplasia, placing breast tissue on the brink of malignant transformation.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\nBreast Lump BOSS: Carcinogenic acetaldehyde fuels our reign! The glandular fortress is crumbling!\nNipple Discharge BOSS: Pathological discharge will never cease!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "be2",
        text: "Take gastric mucosal protectants before banquets just to drink even more alcohol",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Believing stomach protectors made me immune, I increased alcohol intake. While gastric pain was muted, systemic estrogen surges inflicted unchecked destruction on my breast lobules.\nChoice 2: Use Stomach Medicine to Drink More\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Glandular lesions advanced rapidly under continuous hormonal bombardment.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Nipple Discharge BOSS!"
      },
      {
        id: "be3",
        text: "Drown career stress in late-night solitary drinking after getting home",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Depressed by workplace pressure, I turned to drinking alone at night. Sleep architecture collapsed, and unmitigated oxidative stress drove breast cellular mutations.\nChoice 3: Solitary Late-Night Drinking\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Both mental health and cellular defenses fell into severe disrepair.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房硬块 BOSS / 狰狞、乳头溢液 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 1 cleared! Unlocked Breast Lump BOSS and Nipple Discharge BOSS!"
      }
    ],
    bossUnlocked: [
      "breastLump",
      "nippleDischarge"
    ],
    skillHE: {
      id: "refuseAlcohol",
      name: "Tactful Alcohol Refusal",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "forcedDrinking",
      name: "Compromised Drinking",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  },
  2: {
    id: 2,
    title: "Overtime Exhaustion on Tight Deadlines",
    description: "Overtime Exhaustion on Tight Deadlines",
    perspective: "adult",
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
        text: "Returning to the adult memory nexus, dark cobalt ripples pulse through the neuron networks like flashing warning indicators across a server cluster."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "I approach the second memory gateway: 'Overtime Exhaustion on Tight Deadlines'. Its surface glows with cold, incandescent white light."
      },
      {
        id: "s6",
        speaker: "Narrator",
        text: "The moment my hand touches the glass, the frantic clatter of mechanical keyboards and hum of air conditioning drown my senses. I am pulled back to that fateful midnight in the corporate office."
      },
      {
        id: "s7",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃】"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Look at the time! It's already 11:30 PM! Working around the clock under chronic stress suppresses immune surveillance and triggers severe neuroendocrine chaos!"
      },
      {
        id: "s9",
        speaker: "Paimon",
        text: "Melatonin production drops sharply while cortisol remains elevated, leading to axillary lymphadenopathy and ductal retraction! Today, we must reclaim our right to adequate rest!"
      },
      {
        id: "s10",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃、分泌细胞 / 虚弱】"
      },
      {
        id: "s11",
        speaker: "Narrator",
        text: "Under continuous sleeplessness, lymphatics are engorged and sluggish. Secretory cells cry out in exhaustion, and fibrous bands pull tensely against the nipple architecture."
      },
      {
        id: "s12",
        speaker: "Secretory Cells",
        text: "Our circadian rhythm is broken... We cannot repair damaged DNA without sleep... The tumor seeds are taking root..."
      },
      {
        id: "s13",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 严肃】"
      },
      {
        id: "s14",
        speaker: "Protagonist",
        text: "No project is worth irreversible bodily harm. I must choose health and rest!"
      },
      {
        id: "s15",
        speaker: "Act I",
        text: "Midnight Cubicle: Deadline vs Vitality"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【场景切换：职场办公室】"
      },
      {
        id: "s17",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、经理 / 严肃】"
      },
      {
        id: "s18",
        speaker: "Narrator",
        text: "The office is nearly empty at 11:45 PM, bathed in pale fluorescent light. My eyes sting with strain, my heartbeat flutters irregularly, and deep aching pain radiates from my left breast to my armpit."
      },
      {
        id: "s19",
        speaker: "Narrator",
        text: "My phone pings with an urgent message from Manager Li: 'The client moved the review to 9:00 AM tomorrow! Revise the entire pitch deck tonight before you leave!'"
      },
      {
        id: "s20",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、经理 / 严肃】"
      },
      {
        id: "s21",
        speaker: "Protagonist",
        text: "My body is at its limit. If I pull another all-nighter, my health will collapse..."
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Stop working at midnight, communicate reasonably with the manager to finalize edits in the morning, and rest immediately",
        type: "HE",
        route: "HE",
        paimonDialogue: "Master, establishing healthy boundaries is essential for cellular repair!",
        microEffect: "Circadian rhythm stabilization signals propagate through the tissue.",
        result: "Branch 1: Chose 'Set work boundaries and prioritize rest'\n【立绘：主角 / 坚定、经理 / 严肃】\nProtagonist: Manager Li, I have completed the core structural updates and saved them on the cloud. Continuing past midnight with severe cognitive fatigue risks critical errors. I will arrive at 7:30 AM fully recharged to finalize the polish with peak precision.\nNarrator: Realizing the logic and professional responsibility in my response, Manager Li relents: 'Fair point. Get some rest and finalize it first thing in the morning.'\n【立绘：主角 / 开心、派蒙 / 骄傲】\nPaimon: Splendid decision! Deep sleep restores natural killer cell activity and allows lymphatic clearance! The Axillary Lymphadenopathy and Nipple Retraction threats are averted!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Take a 30-minute power nap in the rest area before finishing only the essential slides, logging off by 1:00 AM",
        type: "fake",
        route: "HE",
        paimonDialogue: "Master, a partial compromise, but complete sleep remains vital.",
        microEffect: "Stress signals attenuate partially.",
        result: "Branch 2: Chose 'Take short rest before wrapping up essentials'\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: I set a timer for a 30-minute nap, completed the urgent slides, and headed straight home before 1:00 AM.\n【立绘：主角 / 坚定、派蒙 / 严肃】\nPaimon: Better than pulling an all-nighter, but remember: chronic compromise still taxes your glands!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Chug energy drinks and coffee, working through the night until 6:00 AM without a wink of sleep",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, severe sleep deprivation is causing acute tissue distress!",
        microEffect: "Inflammatory cytokines and oxidative stress spike.",
        result: "Branch 3: Chose 'Chug energy drinks and work until 6:00 AM'\n【立绘：主角 / 痛苦、经理 / 严肃】\nNarrator: Downing two energy drinks and double espressos, I forced my trembling fingers to type until 6:00 AM. Palpitations hammered my chest, and my axillary lymph nodes swelled into painful nodules under sustained hormonal exhaustion.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Master, your immune defenses are crumbling! Without sleep, DNA mutations cannot be corrected! The BOSSes have seized the sector!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Bring the laptop home and continue working in bed until dawn breaks",
        type: "fake",
        route: "BE",
        paimonDialogue: "Master, blue light and working in bed ruin sleep architecture completely!",
        microEffect: "Melatonin secretion drops to zero.",
        result: "Branch 4: Chose 'Work in bed until dawn'\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: I worked under the covers on my laptop until morning. Straining in poor posture exacerbated lymphatic congestion, leaving my breasts stiff and tender.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Working in bed corrupts both posture and biological rhythms, worsening breast stasis!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Work all night, skip breakfast, and rely on excessive pain relievers to mask symptoms",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, masking pain with painkillers leads to dangerous diagnostic delay!",
        microEffect: "Pathological progression accelerates under silent masking.",
        result: "Branch 5: Chose 'Work all night and take painkillers to suppress pain'\n【立绘：主角 / 痛苦、经理 / 严肃】\nNarrator: I popped pain relievers to dull breast throbbing and powered through without breakfast. Suppressing early warning signs allowed subclinical pathology to worsen unchecked.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Pain is the body's warning signal! Muting it with pills while overworking invites catastrophe!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Institute a non-negotiable bedtime rule, guaranteeing at least 7.5 hours of restorative sleep",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I established a strict personal rule: screens off by 10:30 PM, lights out by 11:00 PM. Restorative sleep cleared brain fog and allowed immune cells to eliminate damaged tissue.\nChoice 1: Institute Non-Negotiable Rest Schedule\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Axillary lymph node tenderness disappeared, and breast tissue regained normal softness.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Lymphatic vessels flow with crystal clarity. Fibrous architecture remains resilient and healthy.\n【立绘：主角 / 开心、派蒙 / 骄傲、腋下淋巴结肿大 BOSS / 虚弱、乳头内陷 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Glorious triumph! Consistent sleep is the premier medicine for breast health!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! You have unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Optimize daytime work efficiency with Pomodoro intervals to avoid late-night carryover",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: By tightening daytime focus and declining non-essential busywork, I completed all critical deliverables before 6:30 PM every single day.\nChoice 2: Optimize Daytime Work Efficiency\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Work stress dissipated, and endocrine biomarkers stabilized completely.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: The threat dissolves into glowing stardust.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS!"
      },
      {
        id: "he3",
        text: "Engage in gentle yoga and stretching breaks during workdays to boost lymphatic return",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：职场办公室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I practiced chest-opening stretches and deep diaphragmatic breathing between meetings, promoting lymphatic drainage and muscular relaxation.\nChoice 3: Practice Daily Lymphatic Stretches\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Physical comfort and emotional serenity shielded mammary architecture against chronic tension.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Full vitality returns to the citadel!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Normalize chronic 2:00 AM overtime as an unavoidable requirement of career success",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: I treated midnight overtime as normal routine. Prolonged circadian disruption caused severe fibrotic retraction around the lactiferous ducts, locking the nipple in an inverted deformity.\nChoice 1: Normalize Chronic Overtime\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Axillary lymph nodes became matted and fixed, heralding advanced lymphadenopathy.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、腋下淋巴结肿大 BOSS / 狰狞、乳头内陷 BOSS / 狰狞】\nAxillary Lymphadenopathy BOSS: Sleep deprivation has paralyzed your immune defenses!\nNipple Retraction BOSS: Rigid fibrous bands hold complete dominion!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS!"
      },
      {
        id: "be2",
        text: "Rely on sleeping pills mixed with high-potency caffeine to force artificial schedules",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Shuttling between sedatives at night and stimulants by day wrecked neuroendocrine feedback, driving mammary hyperplasia into overdrive.\nChoice 2: Mix Sleeping Pills with Stimulants\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Severe hormonal fluctuations provoked rapid tissue dysregulation.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、腋下淋巴结肿大 BOSS / 狰狞、乳头内陷 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS!"
      },
      {
        id: "be3",
        text: "Ignore worsening underarm lumps and nipple inversion, dismissing them as ordinary fatigue",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：职场办公室】\n【立绘：主角 / 疲惫、经理 / 严肃】\nNarrator: Despite noticing visible retraction and palpable masses, I procrastinated on seeing a doctor for over six months, missing the optimal window for early intervention.\nChoice 3: Dismiss Critical Symptoms as Fatigue\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Silent neglect allowed early lesions to progress into invasive disease.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、腋下淋巴结肿大 BOSS / 狰狞、乳头内陷 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 2 cleared! Unlocked Axillary Lymphadenopathy BOSS and Nipple Retraction BOSS!"
      }
    ],
    bossUnlocked: [
      "lymphNode",
      "nippleRetraction"
    ],
    skillHE: {
      id: "adequateSleep",
      name: "Adequate Rest",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "stayUpLate",
      name: "All-Night Exhaustion",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  },
  3: {
    id: 3,
    title: "Abuse of Diet Pills and Hormonal Supplements",
    description: "Abuse of Diet Pills and Hormonal Supplements",
    perspective: "adult",
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
        text: "I stand before the third adult memory portal, shimmering with an alluring yet deceptively toxic violet sheen."
      },
      {
        id: "s5",
        speaker: "Narrator",
        text: "The silver script reads: 'Abuse of Diet Pills and Hormonal Supplements'. As I touch its surface, the scent of artificial chemical perfume and deceptive advertisements engulfs my senses."
      },
      {
        id: "s6",
        speaker: "Narrator",
        text: "I am pulled back into my bedroom two years ago, standing before a vanity cluttered with unverified 'anti-aging ovarian serums' and 'fast-acting estrogen slimming capsules'."
      },
      {
        id: "s7",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃】"
      },
      {
        id: "s8",
        speaker: "Paimon",
        text: "Stop! Don't take that! In pursuit of quick weight loss and anti-aging, you bought uncertified health supplements packed with clandestine exogenous estrogens!"
      },
      {
        id: "s9",
        speaker: "Paimon",
        text: "Exogenous estrogen overstimulation triggers abnormal proliferation of mammary epithelial cells, causing Cooper's ligament contracture and lymphatic blockage! This gave birth to Skin Dimpling BOSS and Peau d'Orange BOSS!"
      },
      {
        id: "s10",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃、分泌细胞 / 虚弱】"
      },
      {
        id: "s11",
        speaker: "Narrator",
        text: "Within the microscopic field, excessive hormonal signaling forces cells into frantic, disorganized divisions. Cooper's ligaments thicken and shorten, pulling the overlying skin into dimples, while superficial dermal lymphatics choke with cellular sludge."
      },
      {
        id: "s12",
        speaker: "Secretory Cells",
        text: "Hormone overload... We are forced to multiply out of control... The skin is caving in, and the surface looks like orange peel..."
      },
      {
        id: "s13",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 坚定、派蒙 / 严肃】"
      },
      {
        id: "s14",
        speaker: "Protagonist",
        text: "I was blinded by vanity and anxiety over aging. True wellness cannot come from unregulated chemical cocktails. I will toss these pills and listen to science!"
      },
      {
        id: "s15",
        speaker: "Act I",
        text: "Vanity Dilemma: Chemical Illusion vs Biological Balance"
      },
      {
        id: "s16",
        speaker: "Stage Direction",
        text: "【场景切换：卧室】"
      },
      {
        id: "s17",
        speaker: "Stage Direction",
        text: "【立绘：主角 / 疲惫、派蒙 / 严肃】"
      },
      {
        id: "s18",
        speaker: "Narrator",
        text: "On the bedroom vanity table sit several unlabelled bottles sent by an aggressive social media vendor, boasting 'miraculous youth restoration and breast firming via natural botanical extracts'."
      },
      {
        id: "s19",
        speaker: "Narrator",
        text: "My breasts already ache with tender nodules from recent doses, and examining the mirror reveals subtle dimpling on the upper outer quadrant."
      },
      {
        id: "s20",
        speaker: "Protagonist",
        text: "The vendor claims this soreness is just 'active cellular renewal', but my clinical instincts tell me this is dangerous hormonal overstimulation..."
      }
    ],
    firstChoices: [
      {
        id: "c1",
        text: "Immediately discard all unverified supplements, report the illicit vendor, and schedule an endocrine and breast ultrasound exam",
        type: "HE",
        route: "HE",
        paimonDialogue: "Master, cutting off exogenous hormones immediately stops pathological cellular drive!",
        microEffect: "Hormone receptor overactivation ceases; restorative pathways activate.",
        result: "Branch 1: Chose 'Discard unverified supplements and seek medical evaluation'\n【立绘：主角 / 坚定、派蒙 / 开心】\nProtagonist: Health is too precious for unregulated gambles. These bottles belong in the medical disposal bin!\nNarrator: I throw all unverified capsules into the trash and immediately book an appointment with a specialist. Clinical tests confirm that stopping exogenous estrogen in time reversed early epithelial hyperplasia!\n【立绘：主角 / 开心、派蒙 / 骄傲】\nPaimon: Brilliant scientific conviction! Halting toxic hormone exposure prevented malignant transformation! The Skin Dimpling and Peau d'Orange BOSSes have withered away!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c2",
        text: "Stop taking the capsules temporarily and send sample ingredients to a certified testing laboratory",
        type: "fake",
        route: "HE",
        paimonDialogue: "Master, scientific verification is praiseworthy, but never resume ingestion!",
        microEffect: "Further toxic intake is prevented.",
        result: "Branch 2: Chose 'Stop intake and send samples for chemical testing'\n【立绘：主角 / 疲惫、派蒙 / 严肃】\nNarrator: Lab testing revealed illicit synthetic estrogens exceeding safety thresholds by 300 times. Terrified, I permanently destroyed the product.\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nPaimon: Testing exposed the fraud! Now trust verified medical science for long-term health!\n【剧情跳转：直接进入第二幕 HE 主线 \"懂事守护・让妈安歇\"】"
      },
      {
        id: "c3",
        text: "Double the dosage to accelerate cosmetic results, dismissing breast tenderness as 'effective action'",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, massive estrogen overload will ignite uncontrolled proliferation!",
        microEffect: "Atypical hyperplasia and stromal infiltration escalate sharply.",
        result: "Branch 3: Chose 'Double the dosage of unverified hormone pills'\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Swallowing double doses, I watched in horror as breast skin dimpling deepened into profound retraction. The surrounding skin thickened into classical peau d'orange with choked lymphatic edema.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Master! Exogenous estrogen has catalyzed aggressive tumor proliferation! The BOSSes have achieved absolute dominance!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c4",
        text: "Switch to another uncertified 'herbal breast enhancement cream' without medical clearance",
        type: "fake",
        route: "BE",
        paimonDialogue: "Master, transdermal absorption of illicit steroids is equally hazardous!",
        microEffect: "Dermal lymphatic congestion worsens.",
        result: "Branch 4: Chose 'Switch to uncertified breast enhancement cream'\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Topical steroid absorption caused severe cutaneous allergic dermatitis layered over advancing glandular disease.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Creams carry identical hormone risks! Avoid all unregulated cosmetic claims!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      },
      {
        id: "c5",
        text: "Recommend the pills to friends and coworkers, taking them together despite evident symptoms",
        type: "BE",
        route: "BE",
        paimonDialogue: "Master, spreading dangerous practices compounds harm for everyone!",
        microEffect: "Pathological progression spreads unchecked.",
        result: "Branch 5: Chose 'Share unverified pills with friends'\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Both my coworker and I developed severe breast lumps requiring emergency core needle biopsy. Remorse weighed heavily on my conscience.\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nPaimon: Never promote unregulated medicines! Health decisions must rest on clinical evidence!\n【剧情跳转：直接进入第二幕 BE 主线 \"任性依旧・熬坏妈妈\"】"
      }
    ],
    secondChoicesHE: [
      {
        id: "he1",
        text: "Adopt balanced nutrition, regular exercise, and natural lifestyle habits for authentic vitality",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：卧室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I embraced natural, nourishing meals, consistent strength training, and sound sleep. My skin regained genuine radiant glow without artificial stimulants.\nChoice 1: Commit to Natural Lifestyle and Nutrition\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Hormone profiles normalized, and breast ultrasound showed complete resolution of early glandular congestion.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nNarrator: A 'Skip Science' button appears at the top right of the screen. Click to jump directly to the Act IV ending, or continue reading.\n【立绘：主角 / 好奇、派蒙 / 软糯】\nNarrator: Dermal lymphatic networks drain freely. Connective tissue planes remain supple and resilient.\n【立绘：主角 / 开心、派蒙 / 骄傲、乳房酒窝征 BOSS / 虚弱、乳房橘皮样改变 BOSS / 虚弱】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nPaimon: Magnificently done! Rejecting deceptive chemicals saved your Mammary Citadel from malignant ruin!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! You have unlocked Skin Dimpling BOSS and Peau d'Orange BOSS! Challenge them in the Lesion Sector!"
      },
      {
        id: "he2",
        text: "Consult certified gynecologists and endocrinologists for any legitimate hormone regulation needs",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：卧室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I underwent standardized endocrine panel testing under professional medical guidance, ensuring any clinical needs were met with certified pharmacotherapy.\nChoice 2: Seek Certified Medical Consultation\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Evidence-based clinical care guaranteed safe, monitored bodily balance.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Golden light cleanses all remaining shadows.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Skin Dimpling BOSS and Peau d'Orange BOSS!"
      },
      {
        id: "he3",
        text: "Organize consumer awareness workshops to expose fraudulent anti-aging supplement marketing",
        type: "HE",
        route: "HE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "HE Mainline: Thoughtful Care, Letting Mom Rest\n【场景切换：卧室】\n【立绘：主角 / 坚定、派蒙 / 骄傲】\nNarrator: I wrote an investigative article breaking down the medical risks of illicit hormone supplements, helping hundreds of women avoid catastrophic medical delays.\nChoice 3: Raise Public Consumer Awareness\n【立绘：主角 / 开心、派蒙 / 开心】\nNarrator: Championing health education strengthened communal resilience against predatory marketing.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nHE Ending: Thoughtful Safeguard: The Threat Disperses\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 开心、派蒙 / 开心、分泌细胞 / 愉悦】\nNarrator: Pure radiant harmony returns to the citadel.\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（HE 版）」】\nHE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 懂事、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Skin Dimpling BOSS and Peau d'Orange BOSS!"
      }
    ],
    secondChoicesBE: [
      {
        id: "be1",
        text: "Persist in consuming high-dose illicit hormone capsules despite worsening skin dimpling and breast pain",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：卧室】\n【立绘：主角 / 疲惫、派蒙 / 严肃】\nNarrator: I ignored clinical warnings and continued taking the pills. Within four months, a solid malignant tumor formed, infiltrating Cooper's ligaments and choking cutaneous lymphatics into widespread peau d'orange.\nChoice 1: Continue High-Dose Hormone Consumption\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Core needle biopsy confirmed invasive ductal carcinoma requiring immediate radical mastectomy.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】\nSkin Dimpling BOSS: Infiltration is absolute! Cooper's ligaments are permanently contracted!\nPeau d'Orange BOSS: Dermal lymphatic drainage is choked—this fortress belongs to cancer!\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Skin Dimpling BOSS and Peau d'Orange BOSS!"
      },
      {
        id: "be2",
        text: "Purchase unapproved black-market injections claiming to dissolve lumps and boost estrogen simultaneously",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：卧室】\n【立绘：主角 / 疲惫、派蒙 / 严肃】\nNarrator: Black-market injections caused severe necrotic abscesses layered over malignant neoplasia, requiring emergency surgical debridement.\nChoice 2: Inject Black-Market Hormonal Cocktails\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Invasive quackery triggered catastrophic systemic collapse.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Skin Dimpling BOSS and Peau d'Orange BOSS!"
      },
      {
        id: "be3",
        text: "Conceal supplement abuse from doctors during physical examinations, delaying accurate clinical assessment",
        type: "BE",
        route: "BE",
        paimonDialogue: "Choice recorded.",
        microEffect: "The memory branch continues to converge.",
        result: "BE Mainline: Willful as Ever, Wrecking Mom's Health\n【场景切换：卧室】\n【立绘：主角 / 疲惫、派蒙 / 严肃】\nNarrator: Hiding supplement history misled diagnostic interpretation, allowing estrogen-receptor-positive tumor proliferation to progress past curative windows.\nChoice 3: Conceal Supplement Usage from Clinicians\n【立绘：主角 / 痛苦、派蒙 / 哽咽】\nNarrator: Diagnostic delays allowed metastasis into regional lymph chains.\n【剧情汇流：进入第三幕通用衔接】\nAct III: Bridge & Microscopic Science\n【场景切换：乳腺主城（正常）】\n【立绘：主角 / 正常、派蒙 / 软糯】\nBE Ending: Persistent Willfulness: The BOSS Awakens Completely\n【场景切换：乳腺主城（黑雾笼罩）】\n【立绘：主角 / 害怕、派蒙 / 哽咽、乳房酒窝征 BOSS / 狰狞、乳房橘皮样改变 BOSS / 狰狞】\n【剧情汇流：进入结局「记忆汇流・回归大脑中枢（BE 版）」】\nBE Ending\n【场景切换：大脑记忆中枢】\n【立绘：主角 / 愧疚、派蒙 / 郑重】\nNarrator: Memory Point 3 cleared! Unlocked Skin Dimpling BOSS and Peau d'Orange BOSS!"
      }
    ],
    bossUnlocked: [
      "skinDimple",
      "orangePeel"
    ],
    skillHE: {
      id: "rationalMedication",
      name: "Rational Medication",
      description: "Positive Memory Skill",
      type: "positive",
      effect: "Disperses dark mist and stabilizes the Mammary Citadel.",
      icon: "heart"
    },
    skillBE: {
      id: "abuseDrugs",
      name: "Drug Abuse",
      description: "Negative Memory Skill",
      type: "negative",
      effect: "Deepens dark mist and accelerates BOSS awakening.",
      icon: "danger"
    }
  }
};
