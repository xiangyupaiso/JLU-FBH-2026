import { useEffect, useMemo, useState } from 'react';
import { useGame } from '@/hooks/gameState';
import { Button } from '@/components/ui/button';
import { Undo } from 'lucide-react';
import { getMemoryStory } from '@/data/stories';
import type { Choice, EndingType, StoryScene } from '@/types';
import { getCharacterAssetPath, getSceneAssetPath } from '@/data/assets';
import {
  CHOICE_BADGE,
  CHOICE_BUTTON,
  CHOICE_OVERLAY,
  CHOICE_TITLE,
  DIALOG_BOX,
  DIALOG_INNER,
  DIALOG_TEXT,
  DIALOG_TEXT_NARRATION,
  DIALOG_VIGNETTE,
  NEXT_ARROW,
  NEXT_HINT,
  SPEAKER_AVATAR,
  SPEAKER_TAG
} from '@/components/dialogStyles';
import { StoryControlBar, StoryLogDrawer } from '@/components/storyControls';

type VisualState = {
  background?: string;
  portraits: Array<{ role: string; state: string; path: string }>;
};

type DisplayScriptEntry = {
  text: string;
  rawIndex: number;
};

type InlineChoiceOption = {
  text: string;
  entries: DisplayScriptEntry[];
};

type ScriptPlayback = {
  entries: DisplayScriptEntry[];
  beforeEntries: DisplayScriptEntry[];
  afterEntries: DisplayScriptEntry[];
  inlineChoices: InlineChoiceOption[];
};

function guessRoute(choice: Choice): EndingType {
  if (choice.type === 'HE' || choice.type === 'BE') return choice.type;
  if (choice.route === 'HE' || choice.route === 'BE') return choice.route;
  const text = `${choice.result || ''}${choice.paimonDialogue || ''}`;
  return text.includes('BE 主线') || text.includes('BE Mainline') || text.includes('BOSS 彻底觉醒') || text.includes('任性') || text.includes('Awakened') ? 'BE' : 'HE';
}

function isDirectiveLine(line: string) {
  const trimmed = line.trim();
  return (
    trimmed === '————' ||
    trimmed === '----' ||
    /^(?:旁白|Narrator)[：:].*(?:跳过科普|Skip Science|appears|button)/i.test(trimmed) ||
    /^【(?:场景切换|立绘|特殊|剧情跳转|剧情汇流)：/.test(trimmed) ||
    /^【脚本结束】$/.test(trimmed) ||
    /^\[End of Script\]$/i.test(trimmed) ||
    /^(?:开场|第[一二三四五六七八九十]+幕|主线\s*\d+|主线剧情|结局\s*\d+|HE 主线|BE 主线|HE 结局|BE 结局|拒酒周旋主线|妥协饮酒主线|合理下班主线|熬夜透支主线|科学控药主线|滥用药物主线|及时就医主线|隐瞒拖延主线|按时体检主线|拖延体检主线|科学治疗主线|偏方延误主线)(?:（.*）)?(?:[：:].*)?$/.test(trimmed) ||
    /^(?:Opening|Act\s+[IVX\d]+|Main Story\s*\d*|Mainline\s*\d*|HE Mainline|BE Mainline|HE Ending|BE Ending|Ending\s*\d*)(?:（.*）)?(?:[：:].*)?$/i.test(trimmed) ||
    /^[^：:]{1,40}(?:结局|Ending)(?:对应版)?(?:（.*）)?(?:[：:].*)?$/i.test(trimmed) ||
    /^(?:分支|Branch)\s*\d+[：:]/i.test(trimmed) ||
    /^(?:互动|Interaction)\s*\d+[：:]/i.test(trimmed) ||
    /^(?:选|Choice)\s*\d+[：:]/i.test(trimmed) ||
    /^(?:选项|Option)\s*[A-Za-z0-9]+[：:]/i.test(trimmed)
  );
}

function parseScriptLine(line?: string) {
  if (!line) return { speaker: undefined, text: '' };
  const match = line.match(/^([^：:]{1,24})[：:](.*)$/);
  if (!match || line.startsWith('选项') || line.startsWith('Option') || line.startsWith('Choice')) return { speaker: undefined, text: line };
  return { speaker: match[1].trim(), text: match[2].trim() };
}

function isDisplayableScene(scene?: StoryScene) {
  if (!scene) return false;
  if (/^(开场|第[一二三四五六七八九十]+幕|HE 主线|BE 主线|Opening|Act\s+[IVX\d]+|HE Mainline|BE Mainline)$/i.test(scene.speaker || '')) return false;
  const visibleLines = scene.text.split('\n').filter((line) => line.trim() && !isDirectiveLine(line));
  return visibleLines.length > 0 && scene.speaker !== '舞台指示' && scene.speaker !== 'Stage Direction';
}

function getNextDisplaySceneIndex(scenes: StoryScene[], startIndex: number) {
  for (let index = startIndex + 1; index < scenes.length; index += 1) {
    if (isDisplayableScene(scenes[index])) return index;
  }
  return null;
}

function getPreviousDisplaySceneIndex(scenes: StoryScene[], startIndex: number) {
  for (let index = startIndex - 1; index >= 0; index -= 1) {
    if (isDisplayableScene(scenes[index])) return index;
  }
  return null;
}

function getDisplayScriptEntries(text?: string): DisplayScriptEntry[] | null {
  if (!text) return null;
  const entries = text
    .split('\n')
    .map((line, rawIndex) => ({ text: line.trim(), rawIndex }))
    .filter((entry) => entry.text && !isDirectiveLine(entry.text));
  return entries.length > 0 ? entries : null;
}

function getDisplayEntriesFromRange(lines: string[], start: number, end: number) {
  return lines
    .slice(start, end)
    .map((line, index) => ({ text: line.trim(), rawIndex: start + index }))
    .filter((entry) => entry.text && !isDirectiveLine(entry.text));
}

function getOptionText(line: string) {
  const match = line.trim().match(/^(?:选项|Option)\s*\d+[：:](.*)$/i);
  return match?.[1]?.trim() || line.trim();
}

function getScriptPlayback(text?: string): ScriptPlayback {
  const empty: ScriptPlayback = { entries: [], beforeEntries: [], afterEntries: [], inlineChoices: [] };
  if (!text) return empty;

  const lines = text.split('\n');
  const allEntries = getDisplayScriptEntries(text) ?? [];
  const optionStart = lines.findIndex((line, index) =>
    (line.trim().match(/^选项\s*1[：:]/) || line.trim().match(/^Option\s*1[：:]/i)) &&
    (lines[index + 1]?.trim().match(/^选项\s*2[：:]/) || lines[index + 1]?.trim().match(/^Option\s*2[：:]/i)) &&
    (lines[index + 2]?.trim().match(/^选项\s*3[：:]/) || lines[index + 2]?.trim().match(/^Option\s*3[：:]/i))
  );
  if (optionStart < 0) return { ...empty, entries: allEntries };

  const branchStarts = [1, 2, 3].map((number) =>
    lines.findIndex((line, index) =>
      index > optionStart &&
      (line.trim().match(new RegExp(`^互动\\s*${number}[：:]`)) || line.trim().match(new RegExp(`^Interaction\\s*${number}[：:]`, 'i')))
    )
  );
  if (branchStarts.some((index) => index < 0)) return { ...empty, entries: allEntries };

  const commonStart = lines.findIndex((line, index) =>
    index > Math.max(...branchStarts) &&
    (
      line.trim().startsWith('主线剧情') ||
      line.trim().toLowerCase().startsWith('main story') ||
      line.includes('所有互动选项汇流后') ||
      line.toLowerCase().includes('after all interaction choices') ||
      line.toLowerCase().includes('converge after all interaction choices')
    )
  );
  if (commonStart < 0) return { ...empty, entries: allEntries };

  const beforeEntries = getDisplayEntriesFromRange(lines, 0, optionStart);
  const afterEntries = getDisplayEntriesFromRange(lines, commonStart, lines.length);
  const inlineChoices = branchStarts.map((branchStart, index) => {
    const branchEnd = index < branchStarts.length - 1 ? branchStarts[index + 1] : commonStart;
    return {
      text: getOptionText(lines[optionStart + index]),
      entries: getDisplayEntriesFromRange(lines, branchStart, branchEnd)
    };
  });

  return {
    entries: allEntries,
    beforeEntries,
    afterEntries,
    inlineChoices
  };
}

function getDisplayScriptLines(text?: string) {
  return getDisplayScriptEntries(text)?.map((entry) => entry.text) ?? null;
}

function formatScriptText(text?: string) {
  const lines = getDisplayScriptLines(text);
  if (!lines) return null;
  return lines.map((line, index) => (
    <p key={index} className="mb-3 last:mb-0">
      {parseScriptLine(line).text || line}
    </p>
  ));
}

export default function VisualNovel() {
  const { state, dispatch, completeMemoryPoint } = useGame();
  const perspective = state.currentPerspective!;
  const memoryPoint = state.currentMemoryPoint;
  const isZh = state.language === 'zh';
  const story = getMemoryStory(perspective, memoryPoint, state.language);
  const firstSceneIndex = useMemo(() => getNextDisplaySceneIndex(story.scenes, -1) ?? 0, [story.scenes]);

  const [sceneIndex, setSceneIndex] = useState(firstSceneIndex);
  const [showChoices, setShowChoices] = useState(false);
  const [selectedFirstChoice, setSelectedFirstChoice] = useState<Choice | null>(null);
  const [showFirstResult, setShowFirstResult] = useState(false);
  const [showBranchChoices, setShowBranchChoices] = useState(false);
  const [showSecondChoices, setShowSecondChoices] = useState(false);
  const [selectedSecondChoice, setSelectedSecondChoice] = useState<Choice | null>(null);
  const [showSecondResult, setShowSecondResult] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [ending, setEnding] = useState<EndingType | null>(null);
  const [dialogHidden, setDialogHidden] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [showLog, setShowLog] = useState(false);

  const currentScene = story.scenes[sceneIndex];
  const defaultVisualState = useMemo(() => getDefaultVisualState(perspective, memoryPoint), [perspective, memoryPoint]);
  const visualState = useMemo(
    () => mergeVisualState(defaultVisualState, getVisualState(story.scenes.slice(0, sceneIndex + 1), perspective)),
    [defaultVisualState, story.scenes, sceneIndex, perspective]
  );
  const secondChoices = useMemo(
    () => (ending === 'HE' ? story.secondChoicesHE : story.secondChoicesBE),
    [ending, story.secondChoicesBE, story.secondChoicesHE]
  );
  const secondChoiceVisual = useMemo(
    () => getInitialVisualStateFromText(secondChoices[0]?.result, perspective, visualState),
    [secondChoices, perspective, visualState]
  );
  const secondResultVisual = useMemo(
    () => getVisualStateFromText(selectedSecondChoice?.result, perspective, visualState),
    [selectedSecondChoice?.result, perspective, visualState]
  );

  useEffect(() => {
    setSceneIndex(firstSceneIndex);
    setShowChoices(false);
    setSelectedFirstChoice(null);
    setShowFirstResult(false);
    setShowBranchChoices(false);
    setShowSecondChoices(false);
    setSelectedSecondChoice(null);
    setShowSecondResult(false);
    setShowFeedback(false);
    setEnding(null);
    setDialogHidden(false);
  }, [firstSceneIndex, memoryPoint, perspective]);

  // AUTO：延迟 = 1500ms + 当前句字数 * 45ms（选项层弹出时自动暂停）
  useEffect(() => {
    if (autoPlay && !showChoices && !showFirstResult && !showBranchChoices && !showSecondChoices && !showSecondResult && !showFeedback) {
      const timer = window.setTimeout(() => {
        handleNextScene();
      }, 1500 + (currentScene?.text.length ?? 0) * 45);
      return () => window.clearTimeout(timer);
    }
  });

  const handleNextScene = () => {
    if (dialogHidden) {
      setDialogHidden(false);
      return;
    }

    const nextSceneIndex = getNextDisplaySceneIndex(story.scenes, sceneIndex);
    if (nextSceneIndex !== null) {
      setSceneIndex(nextSceneIndex);
    } else {
      setShowChoices(true);
    }
  };

  const handleBack = () => {
    if (state.playthrough === 1) return;
    const previousSceneIndex = getPreviousDisplaySceneIndex(story.scenes, sceneIndex);
    if (previousSceneIndex !== null) setSceneIndex(previousSceneIndex);
  };

  const handleFirstChoice = (choice: Choice) => {
    setSelectedFirstChoice(choice);
    setEnding(guessRoute(choice));
    setShowChoices(false);
    setShowFirstResult(true);
  };

  const continueAfterFirstResult = () => {
    setShowFirstResult(false);
    if (selectedFirstChoice?.nextChoices?.length) {
      setShowBranchChoices(true);
      return;
    }
    setShowSecondChoices(true);
  };

  const handleBranchChoice = (choice: Choice) => {
    setSelectedFirstChoice(choice);
    setEnding(guessRoute(choice));
    setShowBranchChoices(false);
    setShowFirstResult(true);
  };

  const handleSecondChoice = (choice: Choice) => {
    setSelectedSecondChoice(choice);
    setShowSecondChoices(false);
    setShowSecondResult(true);
  };

  const continueAfterSecondResult = () => {
    handleContinue();
  };

  const handleContinue = () => {
    if (!ending) return;
    completeMemoryPoint(memoryPoint, ending);
    dispatch({ type: 'SET_PHASE', payload: 'skillReplace' });
  };

  const handleTimeTravel = () => {
    if (state.playthrough === 1) return;
    setSceneIndex(firstSceneIndex);
    setShowChoices(false);
    setSelectedFirstChoice(null);
    setShowFirstResult(false);
    setShowBranchChoices(false);
    setShowSecondChoices(false);
    setSelectedSecondChoice(null);
    setShowSecondResult(false);
    setShowFeedback(false);
    setEnding(null);
  };

  const getBackgroundColor = () => {
    if (perspective === 'child') return 'from-amber-900/80 to-amber-950';
    if (perspective === 'adult') return 'from-blue-900/80 to-blue-950';
    return 'from-purple-900/80 to-purple-950';
  };

  const getSpeakerAvatar = (speaker?: string) => {
    if (!speaker) return '◆';
    if (speaker.includes('派蒙') || speaker.includes('Paimon')) return 'P';
    if (speaker.includes('妈妈') || speaker.includes('Mom')) return 'M';
    if (speaker.includes('爸爸') || speaker.includes('Dad')) return 'F';
    if (speaker.includes('医生') || speaker.includes('Doctor') || speaker.includes('Physician')) return 'D';
    if (speaker.includes('BOSS')) return '!';
    if (speaker.includes('旁白') || speaker.includes('Narrator')) return 'N';
    return speaker.slice(0, 1);
  };
  const currentSceneIsNarration = currentScene?.speaker === '旁白' || currentScene?.speaker === 'Narrator';

  return (
    <div
      className={`min-h-screen bg-gradient-to-b ${getBackgroundColor()} relative overflow-hidden`}
      onClick={() => {
        setAutoPlay(false);
        handleNextScene();
      }}
    >
      {visualState.background && (
        <img
          src={visualState.background}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-55 pointer-events-none"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/70 pointer-events-none" />

      <div className={`absolute inset-0 flex items-center justify-center ${visualState.background ? 'opacity-0' : 'opacity-20'} pointer-events-none`}>
        <div className="text-8xl md:text-9xl">
          {perspective === 'child' && ['🧸', '📚', '🎀'][memoryPoint - 1]}
          {perspective === 'adult' && ['🍷', '💻', '💊'][memoryPoint - 1]}
          {perspective === 'elder' && ['🏠', '🩺', '🌿'][memoryPoint - 1]}
        </div>
      </div>

      {visualState.portraits.length > 0 && (
        <div className="absolute inset-x-0 bottom-40 z-10 flex items-end justify-center gap-2 px-4 pointer-events-none md:gap-8">
          {visualState.portraits.map((portrait, index) => (
            <img
              key={`${portrait.role}-${portrait.state}-${index}`}
              src={portrait.path}
              alt={`${portrait.role} / ${portrait.state}`}
              className={`max-h-[46vh] md:max-h-[58vh] object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] ${
                visualState.portraits.length === 1 ? 'max-w-[72vw]' : visualState.portraits.length > 3 ? 'max-w-[20vw]' : 'max-w-[33vw]'
              }`}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>
      )}

      <div className="absolute top-4 left-4 right-4 z-20 text-white/80">
        <div className="text-sm">{story.title}</div>
        <div className="text-xs text-white/55">{story.description}</div>
      </div>

      {/* Retro Pixel Controls: BACK / AUTO / SKIP / HIDE / LOG / SETTINGS / Rewind */}
      <StoryControlBar
        canBack={state.playthrough === 2 && sceneIndex !== firstSceneIndex}
        onBack={state.playthrough === 2 ? handleBack : undefined}
        isAuto={autoPlay}
        onToggleAuto={() => setAutoPlay(!autoPlay)}
        onSkip={handleNextScene}
        onHide={() => setDialogHidden(true)}
        onShowLog={() => setShowLog(true)}
        onSettings={() => setShowSettings(true)}
        extra={
          state.playthrough === 2 ? (
            <button
              className="flex items-center gap-1 rounded-none border-2 border-[#3E2723] bg-[#FFFDF8]/90 px-2.5 py-1 text-xs font-bold text-[#3E2723] shadow-[0_2px_0_#3E2723] transition-all select-none hover:bg-[#FFE082] active:translate-y-0.5 active:shadow-none"
              onClick={(event) => { event.stopPropagation(); handleTimeTravel(); }}
            >
              <Undo className="h-3.5 w-3.5" />
              Rewind
            </button>
          ) : undefined
        }
      />

      {/* Story log drawer */}
      <StoryLogDrawer
        open={showLog}
        onClose={() => setShowLog(false)}
        entries={story.scenes
          .slice(0, sceneIndex + 1)
          .filter(isDisplayableScene)
          .map((scene) => ({ speaker: scene.speaker, text: scene.text }))}
      />

      {!dialogHidden && (
        <div className="absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16">
          <div className={`${DIALOG_BOX} p-5 md:p-6`}>
            <div className={DIALOG_INNER} />
            {currentScene?.speaker && currentScene.speaker !== '旁白' && currentScene.speaker !== 'Narrator' && (
              <div className={SPEAKER_TAG}>
                <span className={SPEAKER_AVATAR}>
                  {getSpeakerAvatarPath(currentScene.speaker, perspective, visualState) ? (
                    <img
                      src={getSpeakerAvatarPath(currentScene.speaker, perspective, visualState)}
                      alt={currentScene.speaker}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    getSpeakerAvatar(currentScene.speaker)
                  )}
                </span>
                <span>{currentScene.speaker}</span>
              </div>
            )}
            <div
              className={`${DIALOG_TEXT} ${currentSceneIsNarration ? DIALOG_TEXT_NARRATION : ''} max-h-[42vh] overflow-y-auto pr-1`}
            >
              {formatScriptText(currentScene?.text)}
            </div>
            <div className={NEXT_HINT}>
              <span className={NEXT_ARROW}>▼</span>
            </div>
          </div>
        </div>
      )}

      {showChoices && (
        <ChoiceLayer title={isZh ? '你将做出怎样的选择？' : 'What will you choose?'}>
          {story.firstChoices.map((choice) => (
            <ChoiceButton key={choice.id} choice={choice} onClick={() => handleFirstChoice(choice)} />
          ))}
        </ChoiceLayer>
      )}

      {showFirstResult && selectedFirstChoice && (
        <ScriptLayer
          title={isZh ? '分支故事' : 'Branch Story'}
          action={selectedFirstChoice.nextChoices?.length ? (isZh ? '继续选择' : 'Continue to Choose') : (isZh ? '进入最终抉择' : 'Proceed to Decisions')}
          baseVisual={visualState}
          perspective={perspective}
          onContinue={continueAfterFirstResult}
          scriptText={selectedFirstChoice.result}
        >
        </ScriptLayer>
      )}

      {showBranchChoices && selectedFirstChoice?.nextChoices?.length && (
        <ChoiceLayer title={isZh ? '接下来你将做什么？' : 'What will you do next?'} visual={getInitialVisualStateFromText(selectedFirstChoice.result, perspective, visualState)}>
          {selectedFirstChoice.nextChoices.map((choice) => (
            <ChoiceButton key={choice.id} choice={choice} onClick={() => handleBranchChoice(choice)} />
          ))}
        </ChoiceLayer>
      )}

      {showSecondChoices && ending && (
        <ChoiceLayer title={ending === 'HE' ? (isZh ? 'HE线：你将如何守护？' : 'HE Route: How will you safeguard her?') : (isZh ? 'BE线：事情将如何发展？' : 'BE Route: How will events unfold?')} visual={secondChoiceVisual}>
          {secondChoices.map((choice) => (
            <ChoiceButton key={choice.id} choice={choice} onClick={() => handleSecondChoice(choice)} />
          ))}
        </ChoiceLayer>
      )}

      {showSecondResult && selectedSecondChoice && (
        <ScriptLayer
          title={isZh ? '后续剧情' : 'Subsequent Story'}
          action={isZh ? '继续' : 'Continue'}
          baseVisual={visualState}
          perspective={perspective}
          onContinue={continueAfterSecondResult}
          scriptText={selectedSecondChoice.result}
        >
        </ScriptLayer>
      )}

      {showFeedback && selectedFirstChoice && (
        <ScriptLayer title={ending === 'HE' ? (isZh ? 'HE反馈' : 'HE Feedback') : (isZh ? 'BE反馈' : 'BE Feedback')} action={isZh ? '继续' : 'Continue'} visual={secondResultVisual} onContinue={handleContinue}>
          <p className="mb-3 font-medium text-pink-600">{isZh ? '派蒙：' : 'Paimon: '}{selectedFirstChoice.paimonDialogue}</p>
          <p className="rounded-lg bg-pink-100/80 p-3 text-stone-700">{selectedFirstChoice.microEffect}</p>
        </ScriptLayer>
      )}

      {showSettings && (
        <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-40" onClick={(event) => event.stopPropagation()}>
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-bold mb-4">{isZh ? '设置' : 'Settings'}</h3>
            <div className="space-y-4">
              <label className="block text-sm text-gray-600">
                {isZh ? '文字速度' : 'Text Speed'}
                <input type="range" className="w-full" min="1" max="5" defaultValue="3" />
              </label>
              <label className="block text-sm text-gray-600">
                {isZh ? '音量' : 'Volume'}
                <input type="range" className="w-full" min="0" max="100" defaultValue="50" />
              </label>
            </div>
            <Button className="w-full mt-4" onClick={() => setShowSettings(false)}>
              {isZh ? '关闭' : 'Close'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function getDefaultVisualState(perspective: 'child' | 'adult' | 'elder', memoryPoint: number) {
  const defaultScenes: Record<'child' | 'adult' | 'elder', Record<number, string>> = {
    child: {
      1: '妈妈的卧室',
      2: '书房',
      3: '妈妈的卧室'
    },
    adult: {
      1: '职场办公室',
      2: '职场办公室',
      3: '卧室'
    },
    elder: {
      1: '社区医院',
      2: '体检中心',
      3: '小区花园'
    }
  };

  const paimonState = perspective === 'child' ? '软糯' : perspective === 'elder' ? '温柔' : '严肃';
  const protagonistPath = getCharacterAssetPath('主角', '正常', perspective);
  const paimonPath = getCharacterAssetPath('派蒙', paimonState);
  return {
    background: getSceneAssetPath(defaultScenes[perspective][memoryPoint]),
    portraits: [
      protagonistPath ? { role: '主角', state: '正常', path: protagonistPath } : null,
      paimonPath ? { role: '派蒙', state: paimonState, path: paimonPath } : null
    ].filter((item): item is { role: string; state: string; path: string } => Boolean(item))
  };
}

function mergeVisualState(
  fallback: { background?: string; portraits: Array<{ role: string; state: string; path: string }> },
  parsed: { background?: string; portraits: Array<{ role: string; state: string; path: string }> }
) {
  return {
    background: parsed.background || fallback.background,
    portraits: parsed.portraits.length > 0 ? parsed.portraits : fallback.portraits
  };
}

function getVisualState(scenes: Array<{ text: string; speaker?: string }>, perspective: 'child' | 'adult' | 'elder') {
  let background: string | undefined;
  let portraits: Array<{ role: string; state: string; path: string }> = [];

  for (const scene of scenes) {
    const sceneMatch = scene.text.match(/【场景切换：([^】]+)】/);
    if (sceneMatch) {
      background = getSceneAssetPath(sceneMatch[1]);
    }

    const portraitMatch = scene.text.match(/【立绘：([^】]+)】/);
    if (portraitMatch) {
      portraits = portraitMatch[1]
        .split(/[、,，]/)
        .map((item) => {
          const [role, state] = item.split('/').map((part) => part.trim());
          const path = role && state ? getCharacterAssetPath(role, state, perspective) : undefined;
          return path ? { role, state, path } : null;
        })
        .filter((item): item is { role: string; state: string; path: string } => Boolean(item))
        .slice(0, 5);
    }
  }

  return { background, portraits };
}

function getSpeakerAvatarPath(
  speaker: string | undefined,
  perspective: 'child' | 'adult' | 'elder',
  visualState: { portraits: Array<{ role: string; state: string; path: string }> }
) {
  if (!speaker) return undefined;
  if (speaker.includes('派蒙') || speaker.includes('Paimon')) return getCharacterAssetPath('派蒙', '开心');
  if (speaker.includes('主角') || speaker.includes('Protagonist') || speaker.includes('Player')) {
    return visualState.portraits.find((portrait) => portrait.role === '主角')?.path ||
      getCharacterAssetPath('主角', '正常', perspective);
  }
  const speakerRoleMap: Record<string, string> = {
    'Mom': '妈妈', 'Mother': '妈妈',
    'Dad': '爸爸', 'Father': '爸爸',
    'Son': '儿子',
    'Daughter': '女儿',
    'Manager': '经理',
    'Aunt Zhang': '张阿姨',
    'Aunt Li': '李阿姨',
    'Secretory Cell': '分泌细胞'
  };
  const targetRole = Object.entries(speakerRoleMap).find(([en]) => speaker.includes(en))?.[1] || speaker;
  const portrait = visualState.portraits.find((item) => speaker.includes(item.role) || targetRole.includes(item.role));
  return portrait?.path;
}

function getVisualStateFromText(
  text: string | undefined,
  perspective: 'child' | 'adult' | 'elder',
  fallback: VisualState
) {
  if (!text) return fallback;
  const scenes = text.split('\n').map((line) => ({ text: line }));
  const parsed = getVisualState(scenes, perspective);
  return {
    background: parsed.background || fallback.background,
    portraits: parsed.portraits.length > 0 ? parsed.portraits : fallback.portraits
  };
}

function getVisualStateFromTextUntil(
  text: string | undefined,
  rawIndex: number | undefined,
  perspective: 'child' | 'adult' | 'elder' | undefined,
  fallback: VisualState
) {
  if (!text || rawIndex === undefined || !perspective) return fallback;
  const scenes = text
    .split('\n')
    .slice(0, rawIndex + 1)
    .map((line) => ({ text: line }));
  return mergeVisualState(fallback, getVisualState(scenes, perspective));
}

function getInitialVisualStateFromText(
  text: string | undefined,
  perspective: 'child' | 'adult' | 'elder',
  fallback: VisualState
) {
  if (!text) return fallback;
  const lines = text.split('\n');
  const firstDisplayIndex = lines.findIndex((line) => line.trim() && !isDirectiveLine(line));
  const rawIndex = firstDisplayIndex >= 0 ? firstDisplayIndex : lines.length - 1;
  return getVisualStateFromTextUntil(text, rawIndex, perspective, fallback);
}

function getScienceSkipTarget(text: string | undefined, entries: DisplayScriptEntry[] | null) {
  if (!text || !entries) return null;
  const lines = text.split('\n');
  const scienceStart = lines.findIndex((line) =>
    line.includes('第三幕') ||
    line.includes('插入式微观科普') ||
    line.toLowerCase().includes('act iii') ||
    line.toLowerCase().includes('microscopic science')
  );
  if (scienceStart < 0) return null;

  const routeStart = lines.findIndex((line, index) =>
    index > scienceStart &&
    !line.trim().startsWith('【') &&
    (
      line.includes('结局') ||
      line.toLowerCase().includes('ending') ||
      /^HE 结局/i.test(line.trim()) ||
      /^BE 结局/i.test(line.trim()) ||
      /^HE Ending/i.test(line.trim()) ||
      /^BE Ending/i.test(line.trim()) ||
      /^(?:结局|Ending)\s*[12]/i.test(line.trim())
    )
  );
  if (routeStart < 0) return null;
  return entries.find((entry) => entry.rawIndex > routeStart) ?? null;
}

function ChoiceLayer({ title, children, visual }: { title: string; children: React.ReactNode; visual?: VisualState }) {
  return (
    <div className={CHOICE_OVERLAY} onClick={(event) => event.stopPropagation()}>
      {visual?.background && <img src={visual.background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-35" />}
      {visual && visual.portraits.length > 0 && (
        <div className="absolute inset-x-0 bottom-24 flex items-end justify-center gap-3 px-4 pointer-events-none opacity-80">
          {visual.portraits.map((portrait, index) => (
            <img
              key={`${portrait.role}-${portrait.state}-${index}`}
              src={portrait.path}
              alt=""
              className={`${visual.portraits.length > 3 ? 'max-h-[38vh] max-w-[19vw]' : 'max-h-[44vh] max-w-[34vw]'} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>
      )}
      <div className="relative z-30 max-w-2xl w-full p-4">
        <p className={CHOICE_TITLE}>{title}</p>
        <div className="flex flex-col gap-3.5 items-center max-h-[72vh] overflow-y-auto pr-1 w-full">{children}</div>
      </div>
    </div>
  );
}

function ChoiceButton({ choice, onClick }: { choice: Choice; onClick: () => void }) {
  return (
    <button
      className={CHOICE_BUTTON}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
    >
      <span className={CHOICE_BADGE}>{choice.id.replace(/^(c|he|be)/, '')}</span>
      {choice.text}
    </button>
  );
}

function ScriptLayer({
  title,
  action,
  visual,
  baseVisual,
  perspective,
  children,
  onContinue,
  scriptText
}: {
  title: string;
  action?: string;
  visual?: VisualState;
  baseVisual?: VisualState;
  perspective?: 'child' | 'adult' | 'elder';
  children?: React.ReactNode;
  onContinue?: () => void;
  scriptText?: string;
}) {
  const { state } = useGame();
  const isZh = state?.language === 'zh';
  const playback = useMemo(() => getScriptPlayback(scriptText), [scriptText]);
  const [selectedInlineChoice, setSelectedInlineChoice] = useState<number | null>(null);
  const [waitingForInlineChoice, setWaitingForInlineChoice] = useState(false);
  const scriptEntries = useMemo(() => {
    if (playback.inlineChoices.length === 0) return playback.entries;
    if (selectedInlineChoice === null) return playback.beforeEntries;
    return [
      ...playback.beforeEntries,
      ...playback.inlineChoices[selectedInlineChoice].entries,
      ...playback.afterEntries
    ];
  }, [playback, selectedInlineChoice]);
  const [lineIndex, setLineIndex] = useState(0);
  const currentEntry = scriptEntries?.[lineIndex];
  const parsedLine = parseScriptLine(currentEntry?.text);
  const isNarration = parsedLine.speaker === '旁白' || parsedLine.speaker === 'Narrator' || (!parsedLine.speaker && Boolean(currentEntry));
  const scienceSkipTarget = useMemo(() => getScienceSkipTarget(scriptText, scriptEntries), [scriptText, scriptEntries]);
  const canSkipScience =
    scienceSkipTarget !== null &&
    currentEntry !== undefined &&
    currentEntry.rawIndex < scienceSkipTarget.rawIndex;
  const liveVisual = useMemo(
    () => getVisualStateFromTextUntil(scriptText, currentEntry?.rawIndex, perspective, baseVisual || visual || { portraits: [] }),
    [scriptText, currentEntry?.rawIndex, perspective, baseVisual, visual]
  );
  const isLastLine = !scriptEntries || lineIndex >= scriptEntries.length - 1;

  useEffect(() => {
    setLineIndex(0);
    setSelectedInlineChoice(null);
    setWaitingForInlineChoice(false);
  }, [scriptText]);

  const handleAction = () => {
    if (scriptEntries && !isLastLine) {
      setLineIndex((index) => index + 1);
      return;
    }
    if (playback.inlineChoices.length > 0 && selectedInlineChoice === null) {
      setWaitingForInlineChoice(true);
      return;
    }
    onContinue?.();
  };

  const handleSkipScience = () => {
    if (!scriptEntries || scienceSkipTarget === null) return;
    const targetIndex = scriptEntries.findIndex((entry) => entry.rawIndex === scienceSkipTarget.rawIndex);
    if (targetIndex >= 0) setLineIndex(targetIndex);
  };

  const handleInlineChoice = (choiceIndex: number) => {
    setSelectedInlineChoice(choiceIndex);
    setWaitingForInlineChoice(false);
    setLineIndex(playback.beforeEntries.length);
  };

  return (
    <div
      className="absolute inset-0 z-40 flex items-center justify-center bg-gradient-to-b from-pink-200/50 via-white/40 to-pink-200/60 backdrop-blur-md"
      onClick={(event) => { event.stopPropagation(); handleAction(); }}
    >
      {liveVisual.background && (
        <img src={liveVisual.background} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" />
      )}
      <div className="absolute inset-0 bg-white/25" />
      {liveVisual.portraits.length > 0 && (
        <div className="absolute inset-x-0 bottom-40 flex items-end justify-center gap-3 px-4 pointer-events-none">
          {liveVisual.portraits.map((portrait, index) => (
            <img
              key={`${portrait.role}-${portrait.state}-${index}`}
              src={portrait.path}
              alt={`${portrait.role} / ${portrait.state}`}
              className={`${liveVisual.portraits.length > 3 ? 'max-h-[38vh] max-w-[19vw]' : 'max-h-[44vh] max-w-[34vw]'} object-contain drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]`}
              onError={(event) => {
                event.currentTarget.style.display = 'none';
              }}
            />
          ))}
        </div>
      )}
      <div className={`${DIALOG_VIGNETTE} z-10`} />
      {currentEntry ? (
        <>
          <div className="absolute bottom-6 left-4 right-4 z-30 md:left-16 md:right-16">
            <div className={`${DIALOG_BOX} p-5 md:p-6`}>
              <div className={DIALOG_INNER} />
              {parsedLine.speaker && parsedLine.speaker !== '旁白' && parsedLine.speaker !== 'Narrator' && (
                <div className={SPEAKER_TAG}>
                  <span>{parsedLine.speaker || title}</span>
                </div>
              )}
              <p className={`${DIALOG_TEXT} ${isNarration ? DIALOG_TEXT_NARRATION : ''} whitespace-pre-wrap`}>
                {parsedLine.text || currentEntry.text}
              </p>
              <div className={NEXT_HINT}>
                <span className={NEXT_ARROW}>▼</span>
              </div>
            </div>
          </div>
          {canSkipScience && (
            <Button
              variant="secondary"
              className="rounded-none border-2 border-[#3E2723] bg-[#FFFDF8] text-[#6B2D5C] shadow-[0_3px_0_#3E2723] hover:bg-[#F3E5CE] hover:text-[#6B2D5C] absolute right-4 top-4 z-20"
              onClick={(event) => { event.stopPropagation(); handleSkipScience(); }}
            >
              {isZh ? '跳过科普' : 'Skip Science'}
            </Button>
          )}
          {waitingForInlineChoice && playback.inlineChoices.length > 0 && (
            <div className={`${CHOICE_OVERLAY}`} onClick={(event) => event.stopPropagation()}>
              <div className="relative z-30 w-[min(760px,calc(100vw-2rem))] px-4">
                <p className={CHOICE_TITLE}>{isZh ? '你将做出怎样的选择？' : 'What will you choose?'}</p>
                <div className="flex flex-col gap-3.5 items-center">
                  {playback.inlineChoices.map((choice, index) => (
                    <button
                      key={`${choice.text}-${index}`}
                      className={CHOICE_BUTTON}
                      onClick={() => handleInlineChoice(index)}
                    >
                      <span className={CHOICE_BADGE}>{index + 1}</span>
                      {choice.text}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <div className="relative z-10 w-full max-w-3xl p-4">
          <div className={`${DIALOG_BOX} p-5 md:p-6`}>
            <div className={DIALOG_INNER} />
            <h3 className="mb-4 font-bold text-[#6B2D5C]">{title}</h3>
            <div className="max-h-[64vh] overflow-y-auto pr-2 leading-relaxed text-[#2B1B17]">{children}</div>
            {action && onContinue && (
              <div className="mt-4 flex justify-end">
                <span className="text-xs font-bold text-[#8D6E63]">Click anywhere to continue</span>
                <span className={`${NEXT_ARROW} ml-1`}>▼</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
