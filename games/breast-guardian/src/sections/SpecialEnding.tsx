import { useGame } from '@/hooks/gameContext';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { BookOpen } from 'lucide-react';
import {
  DIALOG_BOX,
  DIALOG_INNER,
  DIALOG_PROGRESS,
  DIALOG_TEXT,
  DIALOG_TEXT_NARRATION,
  DIALOG_VIGNETTE,
  NEXT_ARROW,
  NEXT_HINT_INLINE,
  SPEAKER_AVATAR,
  SPEAKER_TAG
} from '@/components/dialogStyles';
import { StoryControlBar, StoryLogDrawer } from '@/components/storyControls';
import { useStoryPlayback } from '@/hooks/useStoryPlayback';

// Scene type definition
interface Scene {
  speaker?: string;
  text: string;
}

// Playthrough 2 Special Healing Endings - Visual Novel Mode
export default function SpecialEnding() {
  const { state, dispatch } = useGame();
  const [showSettings, setShowSettings] = useState(false);
  const [showDataPage, setShowDataPage] = useState(false);

  const perspective = state.currentPerspective!;
  const isZh = state.language === 'zh';

  // Elder perspective scenes (ZH)
  const elderScenesZh: Scene[] = [
    { speaker: '旁白', text: '老家客厅，夕阳斜斜照进来，老人刚挂断和女儿的视频通话，轻轻摸着报告单上的"良性"两个字，眼角泛起微光。' },
    { speaker: '旁白', text: '五斗柜上摆着老物件：女儿小时候抱掉毛的布娃娃"小花"，1998年的全家福照片，还有儿子小时候玩的铁皮小汽车。' },
    { speaker: '旁白', text: '一缕暖金色的星光从窗外飘进来——那是乳腺主城的健康星光，落在五斗柜上，顺着相框，落在了布娃娃小花身上。' },
    { text: '小花的布眼睛，偷偷眨了眨。' },
    { speaker: '旁白', text: '深夜，老人的卧室。老人睡眠浅，伸手想去够床头柜上的水杯，刚抬手，就听见细微的"嗒嗒"声。' },
    { speaker: '旁白', text: '铁皮小汽车从五斗柜上滑下来，顺着床沿，把水杯推到了老人手边。' },
    { speaker: '旁白', text: '布娃娃小花坐在枕头边，两只布小手把老人的降压药推到了水杯旁。' },
    { speaker: '老人', text: '是你们啊……小宝贝们，来陪奶奶了。' },
    { speaker: '旁白', text: '三天后，女儿推开家门。第一眼看见的就是五斗柜——布娃娃小花坐在相框上，小手搭在相框边，像是在跟她打招呼。' },
    { speaker: '旁白', text: '铁皮小汽车停在全家福前，车头冲着大门，像是在等她回家。' },
    { speaker: '女儿', text: '妈，对不起，以前总让你一个人……以后我调回老家，天天陪着你。' },
    { speaker: '旁白', text: '慢慢的，小区里的老人们都知道了老人的"神奇老物件"，每天都有人来跟小花"问健康"。' },
    { speaker: '旁白', text: '小花指一指青菜，就是让多吃蔬菜；铁皮小汽车转一圈，就是让多散步。' },
    { speaker: '旁白', text: '这些老物件，成了社区的"健康小信使"，而老人，成了社区的健康宣传员。' },
    { speaker: '旁白', text: '傍晚，老家小院，夕阳把天空染成暖金色。老人坐在藤椅上，女儿给她剥橘子，布娃娃小花靠在老人腿上，铁皮小汽车在脚边绕圈。' },
    { speaker: '老人', text: '谢谢你们啊，小宝贝们。' },
    { speaker: '旁白', text: '小花的小脑袋蹭了蹭老人的脸，星光落在老人的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟老人说："奶奶，要一直健健康康的呀～"' }
  ];

  // Elder perspective scenes (EN)
  const elderScenesEn: Scene[] = [
    { speaker: 'Narrator', text: 'In the living room of the hometown home, the setting sun casts long, slanted rays. Having just hung up a video call with her daughter, the elder gently caresses the word "Benign" on her medical report, eyes glistening with slight tears.' },
    { speaker: 'Narrator', text: 'On the wooden chest of drawers rests a row of cherished keepsakes: "Xiao Hua", the cloth doll her daughter clutched till its fur wore thin; the framed family portrait taken in 1998; and the tin toy car her son drove in his boyhood.' },
    { speaker: 'Narrator', text: 'A warm golden starlight drifts through the window—the health starlight of the Mammary Citadel, settling tenderly onto the chest of drawers and slipping along the photo frame onto the cloth doll Xiao Hua.' },
    { text: 'Xiao Hua\'s tiny fabric eyes secretly blinked.' },
    { speaker: 'Narrator', text: 'Late at night, in the elder\'s bedroom. A light sleeper, she reaches toward the nightstand for her water cup, only to hear a soft "tap-tap" sound as she lifts her arm.' },
    { speaker: 'Narrator', text: 'The tin toy car rolled down from the chest of drawers, gliding along the bedside to nudge the water cup right into her hand.' },
    { speaker: 'Narrator', text: 'Sitting up beside the pillow, the cloth doll Xiao Hua gently places the elder\'s blood pressure medication next to the cup with her tiny cloth hands.' },
    { speaker: 'Elder', text: 'It\'s you... my little sweethearts, here to keep Grandma company.' },
    { speaker: 'Narrator', text: 'Three days later, the daughter opened the front door. The first sight to greet her was the chest of drawers—Xiao Hua sat atop the photo frame, tiny hands resting on its edge as if waving hello.' },
    { speaker: 'Narrator', text: 'The tin toy car sat before the portrait, nose pointed at the doorway, as though waiting for her arrival home.' },
    { speaker: 'Daughter', text: 'Mom, I\'m so sorry for leaving you alone so often before... I\'m transferring back home. I will be by your side every single day.' },
    { speaker: 'Narrator', text: 'Gradually, the elders across the neighborhood learned of her "magical vintage keepsakes," visiting every day to consult Xiao Hua about wellness.' },
    { speaker: 'Narrator', text: 'When Xiao Hua pointed to greens, it meant eat more vegetables; when the tin car spun a circle, it was time for an evening stroll.' },
    { speaker: 'Narrator', text: 'These keepsakes became the neighborhood\'s "Health Messengers," and the elder became the community\'s health advocate.' },
    { speaker: 'Narrator', text: 'At dusk in the courtyard, the sunset paints the sky in radiant gold. The elder rests in a rattan armchair while her daughter peels oranges for her. Xiao Hua leans on her knee, and the tin car rolls around her feet.' },
    { speaker: 'Elder', text: 'Thank you, my little darlings.' },
    { speaker: 'Narrator', text: 'Xiao Hua nuzzled gently against her cheek. Starlight shimmered over the elder\'s chest—the tiny cells of the Mammary Citadel whispered: "Grandma, stay happy and healthy forever~"' }
  ];

  // Child perspective scenes (ZH)
  const childScenesZh: Scene[] = [
    { speaker: '旁白', text: '医院乳腺科病房，清晨的阳光斜斜洒在白色病床上。小女孩猛地睁开眼，额头还带着一点薄汗。' },
    { speaker: '旁白', text: '梦里的画面还清晰着：乳腺主城里粉色的小精灵围着她，一起打碎了黑乎乎的硬块BOSS。' },
    { speaker: '旁白', text: '她扑到妈妈的病床边，妈妈刚做完良性乳腺结节切除手术，正靠在床头看着她，眼里带着温柔的笑意。' },
    { speaker: '小女孩', text: '妈妈！我梦见我去了你身体里的小城堡，好多粉色小精灵和我一起，打跑了让你疼的怪物！你有没有感觉好一点？' },
    { speaker: '妈妈', text: '宝贝，妈妈也做了一模一样的梦。梦见我的小宝贝变成小战士，跟着亮晶晶的小精灵，把那些硬块都赶走了。' },
    { speaker: '旁白', text: '一缕细碎的暖粉色星光，从病房的窗户缝里飘进来，轻轻落在妈妈的胸口纱布上——那是乳腺主城里的小精灵，跟着母女共梦的纽带，从梦境飘到了现实。' },
    { speaker: '妈妈', text: '宝贝，妈妈胸口突然不疼了，暖暖的，像有小太阳贴在上面。' },
    { speaker: '小女孩', text: '妈妈！你看！小精灵真的来了！它们变成星光了！' },
    { speaker: '旁白', text: '接下来的几天，星光小精灵就一直守在病房里——小女孩给妈妈喂水，星光会绕着水杯转一圈；妈妈躺着无聊，小女孩给她唱儿歌，星光会跟着歌声的节奏飘。' },
    { speaker: '旁白', text: '星光在病房里摆成小星星、小花朵的样子，给妈妈带来欢乐。' },
    { speaker: '旁白', text: '小女孩回到学校，想起之前嘲笑过小雨（小雨的妈妈也有乳腺问题），主动找到小雨道歉。' },
    { speaker: '小女孩', text: '小雨，对不起，我之前不该嘲笑你。乳腺不舒服不是丢人的事，有好多粉色星光小精灵，会保护我们的妈妈。' },
    { speaker: '旁白', text: '小女孩把星光精灵和妈妈的故事，悄悄告诉了班里的同学们，大家都听得入了迷。' },
    { speaker: '旁白', text: '班里的孩子们自发成立了"妈妈守护小队"，每天提醒妈妈规律作息、少生气、定期体检。' },
    { speaker: '旁白', text: '傍晚的阳台，夕阳把天空染成暖橙色，妈妈坐在藤椅上，小女孩趴在她的腿上。无数缕粉色的星光小精灵，绕着母女俩慢悠悠地飘。' },
    { speaker: '妈妈', text: '谢谢我的小宝贝，谢谢星光小精灵。以后妈妈会一直健健康康的，陪着我的小宝贝长大。' },
    { speaker: '小女孩和妈妈', text: '我们一起，守护彼此，一直在一起～' }
  ];

  // Child perspective scenes (EN)
  const childScenesEn: Scene[] = [
    { speaker: 'Narrator', text: 'In the hospital breast surgery ward, morning sunlight slants across the white bed. The young girl opens her eyes, light perspiration on her brow.' },
    { speaker: 'Narrator', text: 'The dream remains vivid: in the Mammary Citadel, pink sprites gathered around her, shattering the shadowy lump BOSS together.' },
    { speaker: 'Narrator', text: 'She rushes to Mom\'s bedside. Mom, having just completed excision surgery for a benign nodule, leans against the pillows with gentle tenderness in her eyes.' },
    { speaker: 'Little Girl', text: 'Mom! I dreamed I went inside the little castle in your body! So many pink sprites teamed up with me to drive away the monsters that hurt you! Do you feel any better?' },
    { speaker: 'Mom', text: 'Sweetheart, Mom had the exact same dream. I dreamed my little girl became a brave knight, guided by sparkling sprites to chase all the lumps away.' },
    { speaker: 'Narrator', text: 'A soft stream of warm pink starlight drifts through the window frame, landing gently upon the gauze over Mom\'s chest—the sprites of the Mammary Citadel followed their shared mother-daughter dream from slumber into reality.' },
    { speaker: 'Mom', text: 'Sweetheart, the pain in my chest suddenly vanished. It feels so warm, like a tiny sun resting gently on me.' },
    { speaker: 'Little Girl', text: 'Mom! Look! The sprites really came! They turned into starlight!' },
    { speaker: 'Narrator', text: 'Over the following days, the starlight sprites remained in the ward—swirling around the cup as the girl offered water, drifting to the rhythm of children\'s songs as she sang to ease Mom\'s boredom.' },
    { speaker: 'Narrator', text: 'Forming glowing stars and flowers in the air, the starlight brought continuous warmth and joy to Mom.' },
    { speaker: 'Narrator', text: 'Returning to school, the girl remembered how she once teased Xiao Yu (whose mother also faced breast illness) and approached her earnestly to apologize.' },
    { speaker: 'Little Girl', text: 'Xiao Yu, I\'m sorry. I shouldn\'t have mocked you before. Having breast illness is nothing to be ashamed of. Many pink starlight sprites protect our moms.' },
    { speaker: 'Narrator', text: 'She shared the tale of the starlight sprites and Mom with her classmates, who listened in pure wonder.' },
    { speaker: 'Narrator', text: 'Spontaneously, the class formed a "Mothers\' Guardian Squad," reminding their mothers daily to rest well, stay cheerful, and attend health screenings.' },
    { speaker: 'Narrator', text: 'At dusk on the balcony, bathed in warm orange light, Mom relaxes on the rattan chair as the little girl rests on her lap. Countless pink sprites drift lazily around them.' },
    { speaker: 'Mom', text: 'Thank you, my little angel. Thank you, starlight sprites. Mom will stay healthy and strong to watch you grow up.' },
    { speaker: 'Little Girl & Mom', text: 'Together, we will protect each other, forever and always~' }
  ];

  // Adult perspective scenes (ZH)
  const adultScenesZh: Scene[] = [
    { speaker: '旁白', text: '医院乳腺科病房，白色床单被罩，阳光透过窗户洒在床头。主角从乳腺主城的梦境中醒来，胸口的闷痛已消失不见，取而代之的是淡淡的暖意。' },
    { speaker: '医生', text: '恭喜你，结节是良性的，以后保持健康习惯，定期复查就行。' },
    { speaker: '旁白', text: '一缕柔白星光从窗外飘进来，轻轻落在她的手背上。星光顺着手臂往上爬，落在她的胸口。' },
    { speaker: '旁白', text: '眼前突然闪过童年的画面：小时候，她摔倒哭着回家，妈妈也是这样轻轻揉着她的伤口，说"疼了就说，不用硬扛"。' },
    { speaker: '旁白', text: '星光映出童年的小院：小时候，她因为考试没考好，躲在院子里哭，妈妈走过来，轻轻擦去她的眼泪。' },
    { speaker: '妈妈（回忆）', text: '宝贝，努力就好，不用逼自己做第一名，你开心健康，比什么都重要。' },
    { speaker: '旁白', text: '她想起自己为了业绩熬夜、对着家人发脾气，不就是怕"不够好"吗？而妈妈从小教她的，从来都不是"必须优秀"，而是"好好爱自己"。' },
    { speaker: '旁白', text: '「回溯记忆点2：职场边界的建立」星光映出童年的餐桌。' },
    { speaker: '妈妈（回忆）', text: '宝贝，以后不管做什么工作，都要守住自己的底线，身体是自己的，不用为了讨好别人委屈自己。' },
    { speaker: '旁白', text: '她想起职场酒局上，自己一次次被迫拼酒的样子——妈妈早就教过她要守边界，是她自己为了"合群"，慢慢丢了底线。' },
    { speaker: '旁白', text: '「回溯记忆点3：理性养生的觉醒」星光映出童年的厨房。' },
    { speaker: '妈妈（回忆）', text: '宝贝，健康不是靠吃保健品，是靠好好吃饭、好好睡觉。' },
    { speaker: '旁白', text: '她想起自己跟风买的三无减肥药——妈妈早就教过她科学养生，是她自己被"快速变美"的噱头冲昏了头。' },
    { speaker: '旁白', text: '病房门被推开，妈妈提着保温桶走进来。主角扑进妈妈怀里，放声大哭。' },
    { speaker: '主角', text: '妈，对不起，我以后再也不熬夜、不喝酒、不乱吃保健品了，我要好好爱自己，不让你担心。' },
    { speaker: '妈妈', text: '傻孩子，知道错了就好，妈妈从来没指望你多优秀，只希望你健健康康、开开心心的。' },
    { speaker: '旁白', text: '出院后，主角回到职场，开始了一系列"小改变"：拒绝无意义的酒局、按时下班、每周健身三次、定期体检。' },
    { speaker: '旁白', text: '她把自己的经历写成一篇《乳腺健康日记》，发在公司内网，没想到引发了全公司的关注。' },
    { speaker: '旁白', text: '公司开始推行"健康工作制"：禁止强制加班、提供健身补贴、每年组织全员体检。' },
    { speaker: '旁白', text: '傍晚，主角站在公司楼下，夕阳把天空染成暖橙色。无数缕柔白的星光小精灵，绕着她慢悠悠地飘。' },
    { speaker: '主角', text: '谢谢星光小精灵，谢谢妈妈，更谢谢那个终于学会爱自己的我。' },
    { speaker: '旁白', text: '星光落在她的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟她说："你终于学会爱自己了，以后也要一直健健康康的呀～"' }
  ];

  // Adult perspective scenes (EN)
  const adultScenesEn: Scene[] = [
    { speaker: 'Narrator', text: 'In the hospital breast surgery ward, white sheets glow under sunlight pouring through the window. The protagonist wakes from the dream of the Mammary Citadel. The dull chest ache has faded, replaced by gentle warmth.' },
    { speaker: 'Physician', text: 'Congratulations. The nodule is benign. Just keep up healthy living habits and attend regular follow-ups.' },
    { speaker: 'Narrator', text: 'A beam of soft white starlight drifts through the window, resting gently on the back of her hand and climbing upward to settle over her chest.' },
    { speaker: 'Narrator', text: 'Childhood memories flash before her eyes: years ago, when she fell and came home crying, Mom had massaged her scrape just like this, whispering: "If it hurts, say so. You don\'t have to bear it all alone."' },
    { speaker: 'Narrator', text: 'The starlight illuminates the childhood courtyard: weeping after a poor exam score, Mom had wiped away her tears with loving hands.' },
    { speaker: 'Mom (Memory)', text: 'Sweetheart, giving your best is enough. You never have to force yourself to be number one. Your happiness and health matter more than anything.' },
    { speaker: 'Narrator', text: 'She recalls the nights sacrificed for work metrics, the impatience vented at family—wasn\'t it all born from the dread of "not being good enough"? Yet Mom had never taught her to "be flawless"; she had taught her to "love herself deeply."' },
    { speaker: 'Narrator', text: '"Revisiting Memory Point 2: Establishing Professional Boundaries." Starlight reflects the childhood dinner table.' },
    { speaker: 'Mom (Memory)', text: 'Sweetheart, whatever career you pursue, honor your personal boundaries. Your body is your own; never compromise yourself just to appease others.' },
    { speaker: 'Narrator', text: 'She remembers drinking under coercion at corporate dinners—Mom had taught her to defend boundaries, yet she had surrendered them in pursuit of "fitting in."' },
    { speaker: 'Narrator', text: '"Revisiting Memory Point 3: Awakening Rational Wellness." Starlight mirrors the childhood kitchen.' },
    { speaker: 'Mom (Memory)', text: 'Sweetheart, true wellness isn\'t found in pills; it\'s nurtured through nourishing meals and sound sleep.' },
    { speaker: 'Narrator', text: 'She recalls the dubious online diet pills—Mom had taught her scientific balance, yet superficial promises of "instant beauty" had clouded her judgment.' },
    { speaker: 'Narrator', text: 'The door swings open as Mom walks in carrying a thermal food flask. The protagonist bursts into tears in Mom\'s embrace.' },
    { speaker: 'Protagonist', text: 'Mom, I\'m so sorry. I will never pull all-nighters, drink recklessly, or abuse supplements again. I will love myself and never worry you again.' },
    { speaker: 'Mom', text: 'Silly child, as long as you understand, that\'s all that matters. Mom never expected you to be extraordinary—only healthy and genuinely happy.' },
    { speaker: 'Narrator', text: 'After discharge, she returned to work and initiated mindful changes: declining pointless drinking banquets, leaving on time, exercising three times weekly, and scheduling annual screenings.' },
    { speaker: 'Narrator', text: 'She shared her experience in a "Breast Health Journal" on the company intranet, sparking widespread awareness across the company.' },
    { speaker: 'Narrator', text: 'The company launched "Healthy Work Initiatives": barring forced overtime, providing fitness allowances, and funding comprehensive annual checkups.' },
    { speaker: 'Narrator', text: 'At dusk beneath her office building, sunset paints the sky in glowing amber. Countless white starlight sprites dance slowly around her.' },
    { speaker: 'Protagonist', text: 'Thank you, starlight sprites. Thank you, Mom. And thank you to myself, who finally learned to love who I am.' },
    { speaker: 'Narrator', text: 'The starlight rests against her chest, pulsing softly—the cells of the Mammary Citadel whisper: "You have finally learned to cherish yourself. Stay vibrant and healthy always~"' }
  ];

  const getScenes = (): Scene[] => {
    if (isZh) {
      switch (perspective) {
        case 'child':
          return childScenesZh;
        case 'adult':
          return adultScenesZh;
        case 'elder':
          return elderScenesZh;
        default:
          return elderScenesZh;
      }
    }
    switch (perspective) {
      case 'child':
        return childScenesEn;
      case 'adult':
        return adultScenesEn;
      case 'elder':
        return elderScenesEn;
      default:
        return elderScenesEn;
    }
  };

  const scenes = getScenes();

  const pb = useStoryPlayback(scenes, () => {});
  const currentScene = pb.current;
  const isLastScene = pb.isLast;

  const handleShowDataPage = () => {
    setShowDataPage(true);
  };

  const handleFinish = () => {
    dispatch({ type: 'SET_PHASE', payload: 'promotionVideo' });
  };

  const getBackgroundColor = () => {
    switch (perspective) {
      case 'child':
        return 'from-pink-900/80 to-pink-950';
      case 'adult':
        return 'from-blue-900/80 to-blue-950';
      case 'elder':
        return 'from-amber-900/80 to-amber-950';
      default:
        return 'from-amber-900/80 to-amber-950';
    }
  };

  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === 'Elder' || speaker === '老人') return '👵';
    if (speaker === 'Daughter' || speaker === '女儿') return '👩';
    if (speaker === 'Little Girl' || speaker === '小女孩') return '👧';
    if (speaker === 'Mom' || speaker === '妈妈') return '👩';
    if (speaker === 'Little Girl & Mom' || speaker === '小女孩和妈妈') return '👩‍👧';
    if (speaker === 'Protagonist' || speaker === '主角') return '👩‍💼';
    if (speaker === 'Physician' || speaker === '医生') return '👨‍⚕️';
    if (speaker === 'Mom (Memory)' || speaker === '妈妈（回忆）') return '👩‍🦳';
    if (speaker === 'Narrator' || speaker === '旁白') return '📖';
    return '👤';
  };

  // Health Science Educational Data Modal
  if (showDataPage) {
    return (
      <div className="min-h-screen bg-white p-6 flex flex-col">
        {/* Title */}
        <div className="text-center pt-8 pb-8">
          <h1 className="text-3xl font-bold text-red-600">
            {isZh ? '乳腺健康科普核心数据' : 'Breast Health Core Clinical Data'}
          </h1>
          <p className="text-gray-500 mt-2">
            {isZh ? '认识三阴性乳腺癌，科学守护健康' : 'Understand Triple-Negative Breast Cancer, Safeguarding Health'}
          </p>
        </div>

        {/* Content */}
        <div className="flex-1 max-w-4xl mx-auto w-full space-y-6 pb-24">
          {/* What is TNBC */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔬</span>
              {isZh ? '什么是三阴性乳腺癌？' : 'What is Triple-Negative Breast Cancer?'}
            </h2>
            <p className="text-gray-700 leading-relaxed">
              {isZh ? (
                <>
                  三阴性乳腺癌是指雌激素受体（ER）、孕激素受体（PR）和人表皮生长因子受体2（HER2）均为阴性的乳腺癌，约占所有乳腺癌的{' '}
                  <span className="font-bold text-red-600">15%–20%</span>。
                </>
              ) : (
                <>
                  Triple-negative breast cancer (TNBC) is defined by the absence of estrogen receptor (ER), progesterone receptor (PR), and human epidermal growth factor receptor 2 (HER2) expression, accounting for approximately{' '}
                  <span className="font-bold text-red-600">15%–20%</span> of all breast cancers.
                </>
              )}
            </p>
          </div>

          {/* Core metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">15–20%</div>
              <div className="text-sm text-gray-600 mt-1">
                {isZh ? '占所有乳腺癌' : 'Of All Breast Cancers'}
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">
                {isZh ? '40–50岁' : '40–50 yrs'}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {isZh ? '高发年龄段' : 'Peak Incidence Age'}
              </div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">
                {isZh ? '3–5年' : '3–5 yrs'}
              </div>
              <div className="text-sm text-gray-600 mt-1">
                {isZh ? '复发高风险期' : 'Peak Recurrence Window'}
              </div>
            </div>
          </div>

          {/* Characteristics and risks */}
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              {isZh ? '临床特征与风险' : 'Clinical Characteristics & Risks'}
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>
                  <strong>{isZh ? '侵袭性强：' : 'High Invasiveness: '}</strong>
                  {isZh
                    ? '肿瘤细胞分化差，生长迅速，容易发生内脏转移。'
                    : 'Poor tumor cell differentiation, rapid proliferation, and increased likelihood of visceral metastasis.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>
                  <strong>{isZh ? '预后相对较差：' : 'Challenging Prognosis: '}</strong>
                  {isZh
                    ? '相比其他类型乳腺癌，5年生存率相对较低。'
                    : '5-year survival rates are comparatively lower than receptor-positive subtypes.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>
                  <strong>{isZh ? '治疗手段有限：' : 'Limited Targeted Options: '}</strong>
                  {isZh
                    ? '对内分泌治疗和HER2靶向治疗均不敏感。'
                    : 'Lacks conventional endocrine therapy and HER2 targeted drug sensitivity.'}
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span>
                  <strong>{isZh ? '复发风险高：' : 'Recurrence Profile: '}</strong>
                  {isZh
                    ? '术后3至5年为复发高峰期。'
                    : 'Postoperative recurrence rates peak within 3 to 5 years.'}
                </span>
              </li>
            </ul>
          </div>

          {/* Early screening */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              {isZh ? '早期筛查建议' : 'Early Screening Recommendations'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">
                  {isZh ? '20-39岁' : 'Ages 20–39'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isZh ? '每3年进行一次乳腺临床检查' : 'Undergo clinical breast examination every 3 years'}
                </p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">
                  {isZh ? '40岁以上' : 'Ages 40+'}
                </h3>
                <p className="text-sm text-gray-600">
                  {isZh ? '每年进行乳腺X线检查和临床检查' : 'Annual mammography and clinical breast examination'}
                </p>
              </div>
            </div>
          </div>

          {/* Prevention guidelines */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💪</span>
              {isZh ? '预防措施' : 'Preventive Guidelines'}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">😴</div>
                <div className="text-sm text-gray-700">
                  {isZh ? '规律作息' : 'Regular Sleep'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🥗</div>
                <div className="text-sm text-gray-700">
                  {isZh ? '健康饮食' : 'Nutritious Diet'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏃‍♀️</div>
                <div className="text-sm text-gray-700">
                  {isZh ? '适量运动' : 'Regular Exercise'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">😊</div>
                <div className="text-sm text-gray-700">
                  {isZh ? '保持心情' : 'Mental Well-being'}
                </div>
              </div>
            </div>
          </div>

          {/* Data sources */}
          <div className="text-center text-xs text-gray-400">
            {isZh
              ? '数据来源：中国抗癌协会乳腺癌诊治指南、美国癌症协会（ACS）'
              : 'Data sources: Breast Cancer Guidelines from Oncology Societies, American Cancer Society (ACS)'}
          </div>
        </div>

        {/* Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-4xl mx-auto">
            <Button
              size="lg"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
              onClick={handleFinish}
            >
              {isZh ? '继续' : 'Continue'}
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${getBackgroundColor()} relative overflow-hidden`}
      onClick={pb.handleScreenClick}
    >
      {/* Background icon */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="text-9xl">
          {perspective === 'child' && '👩‍👧'}
          {perspective === 'adult' && '💼'}
          {perspective === 'elder' && '🏠'}
        </div>
      </div>

      {/* Header title */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-5xl mb-2">🌟</div>
        <h1 className="text-3xl font-bold text-white mb-1">
          {isZh ? '完美通关！' : 'Perfect Clear!'}
        </h1>
        <p className="text-white/70 text-sm">
          {perspective === 'child' && (isZh ? '幼年线专属结局' : 'Child Perspective Exclusive Ending')}
          {perspective === 'adult' && (isZh ? '青壮年线专属结局' : 'Adult Perspective Exclusive Ending')}
          {perspective === 'elder' && (isZh ? '老年线专属结局' : 'Elder Perspective Exclusive Ending')}
        </p>
      </div>

      <div className={`${DIALOG_VIGNETTE} z-10`} />

      {/* Story controls */}
      <StoryControlBar
        className={pb.hiddenUiClass}
        canBack={pb.index > 0}
        onBack={pb.back}
        isAuto={pb.isAuto}
        onToggleAuto={pb.toggleAuto}
        onSkip={pb.skip}
        onHide={pb.hideUi}
        onShowLog={() => pb.setShowLog(true)}
        onSettings={() => setShowSettings(true)}
      />

      {/* Story dialog box */}
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
        <div className={`${DIALOG_BOX} p-5 md:p-6`}>
          <div className={DIALOG_INNER} />
          {currentScene?.speaker && currentScene.speaker !== 'Narrator' && currentScene.speaker !== '旁白' && (
            <div className={SPEAKER_TAG}>
              <span className={SPEAKER_AVATAR}>{getSpeakerAvatar(currentScene.speaker)}</span>
              <span>{currentScene.speaker}</span>
            </div>
          )}

          <p className={`${DIALOG_TEXT} ${
            currentScene?.speaker === 'Narrator' || currentScene?.speaker === '旁白' ? DIALOG_TEXT_NARRATION : ''
          }`}>
            {pb.displayed}
          </p>

          {/* Progress */}
          <div className={DIALOG_PROGRESS}>
            <span className="text-xs font-medium text-[#8D6E63]">
              {pb.index + 1} / {scenes.length}
            </span>
            {!isLastScene && (
              <span className={NEXT_HINT_INLINE}>
                {isZh ? '点击继续' : 'Click to continue'}
                <span className={NEXT_ARROW}>▼</span>
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Story log drawer */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* Story finish modal */}
      {isLastScene && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">
              {isZh ? '剧情体验完成！' : 'Story Experience Complete!'}
            </h2>
            <p className="text-stone-600 mb-6">
              {isZh
                ? '两次穿越微观乳腺世界的冒险，你用智慧和勇气守护了乳腺健康。'
                : 'Through dual journeys in the micro mammary world, your wisdom and courage successfully safeguarded breast health.'}
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]"
                onClick={handleShowDataPage}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                {isZh ? '查看乳腺健康科普' : 'View Breast Health Education'}
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Settings modal */}
      {showSettings && (
        <div
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">
              {isZh ? '设置' : 'Settings'}
            </h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">
                  {isZh ? '文字速度' : 'Text Speed'}
                </label>
                <input type="range" className="w-full" min="1" max="5" defaultValue="3" />
              </div>
              <div>
                <label className="text-sm text-gray-600">
                  {isZh ? '音量' : 'Volume'}
                </label>
                <input type="range" className="w-full" min="0" max="100" defaultValue="50" />
              </div>
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => setShowSettings(false)}
            >
              {isZh ? '关闭' : 'Close'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
