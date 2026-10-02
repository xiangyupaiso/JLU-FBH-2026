import { useGame } from '@/hooks/gameState';
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
import { StoryControlBar, StoryLogDrawer, useStoryPlayback } from '@/components/storyControls';

// 场景类型定义
interface Scene {
  speaker?: string;
  text: string;
}

// 二周目特殊治愈结局 - GALGAME模式
export default function SpecialEnding() {
  const { state, dispatch } = useGame();
  const [showSettings, setShowSettings] = useState(false);
  const [showDataPage, setShowDataPage] = useState(false);
  
  const perspective = state.currentPerspective!;

  // 老年线场景数据
  const elderScenes: Scene[] = [
    { speaker: '旁白', text: '老家客厅，夕阳斜照。老人刚挂完和女儿的视频电话，手里摩挲着体检单上"良性"两个字，眼眶微红。' },
    { speaker: '旁白', text: '客厅的木质五斗柜上，摆着一排老物件：女儿小时候抱到掉毛的布娃娃"小花"、1998年拍的全家福相框、儿子儿时玩的铁皮小汽车。' },
    { speaker: '旁白', text: '一缕细碎的暖金色星光从窗外飘进来——是乳腺主城的健康星光，轻轻落在五斗柜上，顺着相框边缘滑到布娃娃小花身上。' },
    { text: '小花的布制小眼睛，竟悄悄眨了一下。' },
    { speaker: '旁白', text: '深夜，老人卧室。老人睡得浅，想伸手摸床头柜的水杯，刚抬胳膊，就听到轻轻的"哒哒"声。' },
    { speaker: '旁白', text: '是铁皮小汽车从五斗柜滑下来，顺着床沿慢慢滚到床头柜边，把水杯推到老人手边。' },
    { speaker: '旁白', text: '布娃娃小花从枕头边坐起来，布制的小手拿着老人的降压药，轻轻放在水杯旁。' },
    { speaker: '老人', text: '是你们啊……我的小宝贝们，来陪奶奶了。' },
    { speaker: '旁白', text: '三天后，女儿推开家门，第一眼就看到客厅的五斗柜——布娃娃小花坐在相框上，两只小手扒着相框边缘，像在跟她打招呼。' },
    { speaker: '旁白', text: '铁皮小汽车停在相框前，车头对着门口，像在等她回家。' },
    { speaker: '女儿', text: '妈，对不起，以前总让你一个人……以后我调回老家，天天陪着你。' },
    { speaker: '旁白', text: '慢慢的，小区里的老人们都知道了老人的"神奇老物件"，每天都有人来跟小花"问健康"。' },
    { speaker: '旁白', text: '小花指一指青菜，就是让多吃蔬菜；铁皮小汽车转一圈，就是让多散步。' },
    { speaker: '旁白', text: '这些老物件，成了社区的"健康小信使"，而老人，成了社区的健康宣传员。' },
    { speaker: '旁白', text: '傍晚，老家小院，夕阳把天空染成暖金色。老人坐在藤椅上，女儿给她剥橘子，布娃娃小花靠在老人腿上，铁皮小汽车在脚边绕圈。' },
    { speaker: '老人', text: '谢谢你们啊，小宝贝们。' },
    { speaker: '旁白', text: '小花的小脑袋蹭了蹭老人的脸，星光落在老人的胸口，轻轻晃了晃——那是乳腺主城的小细胞，在跟老人说："奶奶，要一直健健康康的呀～"' }
  ];

  // 幼年线场景数据
  const childScenes: Scene[] = [
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

  // 青壮年线场景数据
  const adultScenes: Scene[] = [
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

  // 根据视角获取场景数据
  const getScenes = (): Scene[] => {
    switch (perspective) {
      case 'child':
        return childScenes;
      case 'adult':
        return adultScenes;
      case 'elder':
        return elderScenes;
      default:
        return elderScenes;
    }
  };

  const scenes = getScenes();

  // 剧情播放引擎：打字机 / AUTO / SKIP / HIDE / LOG（最后一句停留，由结算浮层接管）
  const pb = useStoryPlayback(scenes, () => {});
  const currentScene = pb.current;
  const isLastScene = pb.isLast;

  const handleShowDataPage = () => {
    setShowDataPage(true);
  };

  const handleFinish = () => {
    // 进入 promotion 联动剧情
    dispatch({ type: 'SET_PHASE', payload: 'promotionVideo' });
  };

  // 获取背景色
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

  // 获取角色头像
  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return null;
    if (speaker === '老人') return '👵';
    if (speaker === '女儿') return '👩';
    if (speaker === '小女孩') return '👧';
    if (speaker === '妈妈') return '👩';
    if (speaker === '小女孩和妈妈') return '👩‍👧';
    if (speaker === '主角') return '👩‍💼';
    if (speaker === '医生') return '👨‍⚕️';
    if (speaker === '妈妈（回忆）') return '👩‍🦳';
    if (speaker === '旁白') return '📖';
    return '👤';
  };

  // 科普数据页面
  if (showDataPage) {
    return (
      <div className="min-h-screen bg-white p-6 flex flex-col">
        {/* 顶部标题 */}
        <div className="text-center pt-8 pb-8">
          <h1 className="text-3xl font-bold text-red-600">乳腺健康科普核心数据</h1>
          <p className="text-gray-500 mt-2">了解三阴性乳腺癌，守护女性健康</p>
        </div>

        {/* 科普内容 */}
        <div className="flex-1 max-w-4xl mx-auto w-full space-y-6 pb-24">
          {/* 什么是三阴性乳腺癌 */}
          <div className="bg-red-50 rounded-xl p-6 border border-red-200">
            <h2 className="text-xl font-bold text-red-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔬</span>
              什么是三阴性乳腺癌？
            </h2>
            <p className="text-gray-700 leading-relaxed">
              三阴性乳腺癌（Triple-Negative Breast Cancer, TNBC）是指雌激素受体（ER）、孕激素受体（PR）和人表皮生长因子受体2（HER2）
              均为阴性的乳腺癌类型，约占所有乳腺癌的<span className="font-bold text-red-600">15%-20%</span>。
            </p>
          </div>

          {/* 核心数据 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">15-20%</div>
              <div className="text-sm text-gray-600 mt-1">占乳腺癌比例</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">40-50岁</div>
              <div className="text-sm text-gray-600 mt-1">高发年龄段</div>
            </div>
            <div className="bg-orange-50 rounded-xl p-5 border border-orange-200 text-center">
              <div className="text-4xl font-bold text-orange-600">3-5年</div>
              <div className="text-sm text-gray-600 mt-1">复发高峰期</div>
            </div>
          </div>

          {/* 特点与风险 */}
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <h2 className="text-xl font-bold text-yellow-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">⚠️</span>
              疾病特点与风险
            </h2>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>侵袭性强：</strong>肿瘤细胞分化差、增殖快，易发生远处转移</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>预后较差：</strong>5年生存率约77%，低于其他类型乳腺癌</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>治疗选择有限：</strong>缺乏内分泌治疗和靶向治疗靶点</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-600 mt-1">•</span>
                <span><strong>复发风险高：</strong>术后3-5年为复发高峰期</span>
              </li>
            </ul>
          </div>

          {/* 早期筛查 */}
          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <h2 className="text-xl font-bold text-green-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">🔍</span>
              早期筛查建议
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">20-39岁</h3>
                <p className="text-sm text-gray-600">每3年进行一次乳腺临床检查</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h3 className="font-bold text-green-700 mb-2">40岁以上</h3>
                <p className="text-sm text-gray-600">每年进行乳腺X线检查和临床检查</p>
              </div>
            </div>
          </div>

          {/* 预防措施 */}
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <h2 className="text-xl font-bold text-blue-700 mb-4 flex items-center gap-2">
              <span className="text-2xl">💪</span>
              预防措施
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl mb-2">😴</div>
                <div className="text-sm text-gray-700">规律作息</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🥗</div>
                <div className="text-sm text-gray-700">健康饮食</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">🏃‍♀️</div>
                <div className="text-sm text-gray-700">适量运动</div>
              </div>
              <div className="text-center">
                <div className="text-3xl mb-2">😊</div>
                <div className="text-sm text-gray-700">保持心情</div>
              </div>
            </div>
          </div>

          {/* 数据来源 */}
          <div className="text-center text-xs text-gray-400">
            数据来源：中国抗癌协会乳腺癌诊治指南、美国癌症协会（ACS）
          </div>
        </div>

        {/* 底部按钮 */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4">
          <div className="max-w-4xl mx-auto">
            <Button
              size="lg"
              className="w-full bg-red-500 hover:bg-red-600 text-white"
              onClick={handleFinish}
            >
              继续
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
      {/* 背景场景 */}
      <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
        <div className="text-9xl">
          {perspective === 'child' && '👩‍👧'}
          {perspective === 'adult' && '💼'}
          {perspective === 'elder' && '🏠'}
        </div>
      </div>

      {/* 标题区域 */}
      <div className="absolute top-8 left-0 right-0 text-center z-10">
        <div className="text-5xl mb-2">🌟</div>
        <h1 className="text-3xl font-bold text-white mb-1">完美通关！</h1>
        <p className="text-white/70 text-sm">
          {perspective === 'child' && '幼年线专属结局'}
          {perspective === 'adult' && '青壮年线专属结局'}
          {perspective === 'elder' && '老年线专属结局'}
        </p>
      </div>

      {/* 环境自适应暗角：保证底部对话框与文字辨识度 */}
      <div className={`${DIALOG_VIGNETTE} z-10`} />

      {/* 复古像素快捷控制栏：回退 / AUTO / SKIP / HIDE / LOG / 设置 */}
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

      {/* 剧情对话框：点击全屏任意区域推进下一句 */}
      <div className={`absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16 ${pb.hiddenUiClass}`}>
          <div className={`${DIALOG_BOX} p-5 md:p-6`}>
            <div className={DIALOG_INNER} />
            {/* 悬浮说话人铭牌（旁白隐藏） */}
            {currentScene?.speaker && currentScene.speaker !== '旁白' && (
              <div className={SPEAKER_TAG}>
                <span className={SPEAKER_AVATAR}>{getSpeakerAvatar(currentScene.speaker)}</span>
                <span>{currentScene.speaker}</span>
              </div>
            )}

            {/* 对话内容（打字机渲染） */}
            <p className={`${DIALOG_TEXT} ${
              currentScene?.speaker === '旁白' ? DIALOG_TEXT_NARRATION : ''
            }`}>
              {pb.displayed}
            </p>

            {/* 进度指示器 */}
            <div className={DIALOG_PROGRESS}>
              <span className="text-xs font-medium text-[#8D6E63]">
                {pb.index + 1} / {scenes.length}
              </span>
              {!isLastScene && (
                <span className={NEXT_HINT_INLINE}>
                  点击继续
                  <span className={NEXT_ARROW}>▼</span>
                </span>
              )}
            </div>
          </div>
      </div>

      {/* 历史台词抽屉 */}
      <StoryLogDrawer open={pb.showLog} onClose={() => pb.setShowLog(false)} entries={pb.log} />

      {/* 剧情结束 - 显示查看科普按钮 */}
      {isLastScene && (
        <div
          className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/60 via-white/50 to-pink-200/70 backdrop-blur-md"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="max-w-md w-full p-6 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-stone-800 mb-2">剧情体验完成！</h2>
            <p className="text-stone-600 mb-6">
              两次穿越微观乳腺世界的冒险，你用智慧和勇气守护了乳腺健康。
            </p>
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-400 hover:from-pink-600 hover:to-rose-500 text-white border-[1.5px] border-white/80 shadow-[0_6px_18px_rgba(236,72,153,0.35)]"
                onClick={handleShowDataPage}
              >
                <BookOpen className="w-5 h-5 mr-2" />
                查看乳腺健康科普
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* 设置对话框 */}
      {showSettings && (
        <div 
          className="absolute inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">设置</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">文字速度</label>
                <input type="range" className="w-full" min="1" max="5" defaultValue="3" />
              </div>
              <div>
                <label className="text-sm text-gray-600">音量</label>
                <input type="range" className="w-full" min="0" max="100" defaultValue="50" />
              </div>
            </div>
            <Button
              className="w-full mt-4"
              onClick={() => setShowSettings(false)}
            >
              关闭
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
