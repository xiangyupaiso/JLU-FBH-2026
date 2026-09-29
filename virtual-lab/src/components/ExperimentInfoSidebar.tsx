import { useMemo, useState, type DragEvent } from 'react';
import {
  ArrowLeft,
  Beaker,
  BookOpen,
  Check,
  CheckCircle2,
  CircleHelp,
  FlaskConical,
  Gamepad2,
  GripVertical,
  RotateCcw,
  ShieldCheck,
  X,
  ZoomIn,
} from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from './ui/dialog';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ScrollArea } from './ui/scroll-area';
import { LabeledTubeArtwork, type TubeLabelShape } from './LabeledTubeArtwork';
import { cn } from '../lib/utils';

export interface SidebarQuestion {
  id: string | number;
  question: string;
  options: string[];
  correctIndex: number;
}

export interface SidebarMaterial {
  id: string;
  name: string;
  englishName: string;
  image: string;
  /** 可选：在底图上叠加实验场景同款的试剂标签。 */
  labelOverlay?: {
    color: string;
    shape?: TubeLabelShape;
    aspectRatio?: number;
  };
}

export interface ExperimentInfoSidebarData {
  experimentLabel: string;
  title?: string;
  safety: string[];
  principle: string;
  questions?: SidebarQuestion[];
  instruments: SidebarMaterial[];
  /** 可选：用仪器 id 控制游戏底部图标的排列顺序。 */
  instrumentTrayOrder?: string[];
  reagents: SidebarMaterial[];
}

interface ExperimentInfoSidebarProps {
  data: ExperimentInfoSidebarData;
  className?: string;
}

function MaterialArtwork({
  material,
  className,
  artworkClassName,
  decorative = false,
}: {
  material: SidebarMaterial;
  className?: string;
  artworkClassName?: string;
  decorative?: boolean;
}) {
  const alt = decorative ? '' : material.name;

  return (
    <div className={cn('flex items-center justify-center', className)}>
      {material.labelOverlay ? (
        <LabeledTubeArtwork
          imageSrc={material.image}
          alt={alt}
          labelColor={material.labelOverlay.color}
          labelShape={material.labelOverlay.shape}
          className={cn('max-h-full max-w-full', artworkClassName)}
          style={{ aspectRatio: material.labelOverlay.aspectRatio ?? 185 / 285 }}
          aria-hidden={decorative || undefined}
        />
      ) : (
        <img
          src={material.image}
          alt={alt}
          aria-hidden={decorative || undefined}
          className={cn('max-h-full max-w-full object-contain', artworkClassName)}
          draggable={false}
        />
      )}
    </div>
  );
}

function MaterialPreviewDialog({
  material,
  onClose,
}: {
  material: SidebarMaterial | null;
  onClose: () => void;
}) {
  return (
    <Dialog open={material !== null} onOpenChange={(open) => { if (!open) onClose(); }}>
      <DialogContent className="border-blue-400/40 bg-slate-950 text-white sm:max-w-2xl [&_[data-slot=dialog-close]]:text-white">
        {material && (
          <>
            <DialogHeader>
              <DialogTitle>{material.name}</DialogTitle>
              <DialogDescription className="text-blue-200">{material.englishName}</DialogDescription>
            </DialogHeader>
            <div className="flex max-h-[65vh] min-h-64 items-center justify-center overflow-hidden rounded-xl bg-white p-6">
              <MaterialArtwork
                material={material}
                className="h-[58vh] max-h-[58vh] w-full"
                artworkClassName="h-full"
              />
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}

function MaterialThumbnail({
  material,
  onPreview,
}: {
  material: SidebarMaterial;
  onPreview: (material: SidebarMaterial) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onPreview(material)}
      className="group relative flex h-14 w-12 shrink-0 items-center justify-center rounded-md bg-white p-1.5 ring-1 ring-white/20 transition-all hover:scale-105 hover:ring-2 hover:ring-cyan-300"
      aria-label={`Enlarge${material.name}`}
      title={`Enlarge${material.name}`}
    >
      <MaterialArtwork material={material} className="h-full w-full" artworkClassName="h-full" />
      <span className="absolute bottom-0.5 right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-slate-900/80 text-white opacity-80 transition-opacity group-hover:opacity-100">
        <ZoomIn className="h-2.5 w-2.5" />
      </span>
    </button>
  );
}

function SafetySection({ safety }: Pick<ExperimentInfoSidebarData, 'safety'>) {
  return (
    <div className="space-y-3 pr-3 pb-3 text-[11px] leading-[1.7] text-blue-100">
      <div className="flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-emerald-300" />
        <h4 className="text-xs font-semibold text-white">Laboratory Safety</h4>
      </div>
      <div className="space-y-2">
        {safety.map((item, index) => (
          <div key={item} className="flex gap-2.5 rounded-lg border border-white/15 bg-white/[0.06] p-3">
            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-[9px] font-semibold text-emerald-200">
              {index + 1}
            </span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function PrincipleSection({
  principle,
  questions = [],
}: Pick<ExperimentInfoSidebarData, 'principle' | 'questions'>) {
  const [answers, setAnswers] = useState<Record<string, number>>({});

  return (
    <div className="space-y-4 pr-3 pb-3 text-[11px] leading-[1.75] text-blue-100">
      <section>
        <h4 className="mb-1.5 text-xs font-semibold text-white">Experimental Principle</h4>
        {principle.split('\n').map((paragraph, index) => (
          paragraph.trim() ? <p key={index} className="mb-2 last:mb-0">{paragraph}</p> : null
        ))}
      </section>

      {questions.length > 0 && (
        <section className="border-t border-white/15 pt-4">
          <div className="mb-3 flex items-center gap-2">
            <CircleHelp className="h-4 w-4 text-amber-300" />
            <h4 className="text-xs font-semibold text-white">Review Questions</h4>
          </div>

          <div className="space-y-3">
            {questions.map((question, questionIndex) => {
              const answerKey = String(question.id);
              const selected = answers[answerKey];
              const answered = selected !== undefined;
              const correct = selected === question.correctIndex;

              return (
                <div key={question.id} className="rounded-lg border border-white/15 bg-white/[0.07] p-3">
                  <p className="mb-2 font-medium text-white">
                    {questionIndex + 1}. {question.question}
                  </p>
                  <div className="space-y-1.5">
                    {question.options.map((option, optionIndex) => {
                      const isSelected = selected === optionIndex;
                      const isCorrectOption = answered && optionIndex === question.correctIndex;
                      return (
                        <button
                          key={option}
                          type="button"
                          onClick={() => setAnswers((previous) => ({ ...previous, [answerKey]: optionIndex }))}
                          className={cn(
                            'flex w-full items-center gap-2 rounded-md border px-2.5 py-2 text-left transition-colors',
                            isCorrectOption
                              ? 'border-emerald-400/70 bg-emerald-400/15 text-emerald-100'
                              : isSelected
                                ? 'border-rose-400/70 bg-rose-400/15 text-rose-100'
                                : 'border-white/10 bg-slate-950/20 text-blue-100 hover:border-blue-300/50 hover:bg-white/10',
                          )}
                        >
                          <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-current">
                            {isCorrectOption ? <Check className="h-3 w-3" /> : isSelected ? <X className="h-3 w-3" /> : null}
                          </span>
                          <span>{option}</span>
                        </button>
                      );
                    })}
                  </div>
                  {answered && (
                    <p className={cn('mt-2 flex items-center gap-1.5', correct ? 'text-emerald-300' : 'text-amber-200')}>
                      {correct ? <CheckCircle2 className="h-3.5 w-3.5" /> : <CircleHelp className="h-3.5 w-3.5" />}
                      {correct ? "Correct answer" : `Try again. The correct answer is “${question.options[question.correctIndex]}”`}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function InstrumentMatchingGame({
  instruments,
  instrumentTrayOrder,
  onExit,
}: Pick<ExperimentInfoSidebarData, 'instruments' | 'instrumentTrayOrder'> & { onExit: () => void }) {
  const [draggedId, setDraggedId] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [feedback, setFeedback] = useState<{ kind: 'success' | 'error'; text: string } | null>(null);

  const trayItems = useMemo(() => {
    if (!instrumentTrayOrder) return instruments;
    const itemMap = new Map(instruments.map((instrument) => [instrument.id, instrument]));
    const ordered = instrumentTrayOrder
      .map((instrumentId) => itemMap.get(instrumentId))
      .filter((instrument): instrument is SidebarMaterial => Boolean(instrument));
    const orderedIds = new Set(ordered.map((instrument) => instrument.id));
    return [...ordered, ...instruments.filter((instrument) => !orderedIds.has(instrument.id))];
  }, [instrumentTrayOrder, instruments]);

  const matched = new Set(matchedIds);
  const completed = instruments.length > 0 && matchedIds.length === instruments.length;

  const tryMatch = (targetId: string, sourceId = draggedId ?? selectedId) => {
    if (!sourceId || matched.has(sourceId)) return;
    if (sourceId === targetId) {
      setMatchedIds((previous) => [...previous, sourceId]);
      setFeedback({ kind: 'success', text: "Correct match!" });
    } else {
      setFeedback({ kind: 'error', text: "Incorrect match. Please try again." });
    }
    setDraggedId(null);
    setSelectedId(null);
  };

  const handleDragStart = (event: DragEvent<HTMLButtonElement>, instrumentId: string) => {
    event.dataTransfer.effectAllowed = 'move';
    event.dataTransfer.setData('text/plain', instrumentId);
    setDraggedId(instrumentId);
    setSelectedId(instrumentId);
    setFeedback(null);
  };

  const resetGame = () => {
    setDraggedId(null);
    setSelectedId(null);
    setMatchedIds([]);
    setFeedback(null);
  };

  return (
    <div className="space-y-3 pr-3 pb-3 text-[10px] text-blue-100">
      <div className="flex items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <button
            type="button"
            onClick={onExit}
            className="shrink-0 rounded-md border border-white/15 bg-white/[0.07] p-1.5 text-blue-100 transition-colors hover:bg-white/15"
            aria-label="Back to equipment list"
            title="Back to equipment list"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
          </button>
          <div className="min-w-0">
          <h4 className="text-xs font-semibold text-white">Equipment Matching Challenge</h4>
          <p className="mt-0.5 text-blue-200">Drag each icon to its name, or click the icon and then the name.</p>
          </div>
        </div>
        <button
          type="button"
          onClick={resetGame}
          className="shrink-0 rounded-md border border-white/15 bg-white/[0.07] p-1.5 text-blue-100 transition-colors hover:bg-white/15"
          aria-label="Restart equipment matching"
          title="Restart"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
      </div>

      <div>
        <div className="mb-1.5 flex items-center justify-between text-blue-200">
          <span>Matching progress</span>
          <span>{matchedIds.length} / {instruments.length}</span>
        </div>
        <div className="h-1.5 overflow-hidden rounded-full bg-slate-950/40">
          <div
            className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 transition-all duration-300"
            style={{ width: `${instruments.length ? (matchedIds.length / instruments.length) * 100 : 0}%` }}
          />
        </div>
      </div>

      <div className="space-y-1.5">
        {instruments.map((instrument, instrumentIndex) => {
          const isMatched = matched.has(instrument.id);
          return (
            <button
              key={instrument.id}
              type="button"
              onClick={() => tryMatch(instrument.id)}
              onDragOver={(event) => {
                event.preventDefault();
                event.dataTransfer.dropEffect = 'move';
              }}
              onDrop={(event) => {
                event.preventDefault();
                tryMatch(instrument.id, event.dataTransfer.getData('text/plain'));
              }}
              className={cn(
                'flex min-h-12 w-full items-center gap-2 rounded-lg border border-dashed px-3 py-2 text-left transition-all',
                isMatched
                  ? 'border-emerald-400/70 bg-emerald-400/15'
                  : selectedId
                    ? 'border-amber-300/60 bg-amber-300/[0.08] hover:bg-amber-300/15'
                    : 'border-white/25 bg-white/[0.05] hover:border-blue-300/60 hover:bg-white/10',
              )}
            >
              <span className={cn(
                'flex h-6 w-6 shrink-0 items-center justify-center rounded-full',
                isMatched ? 'bg-emerald-400 text-emerald-950' : 'bg-white/10 text-blue-200',
              )}>
                {isMatched ? <Check className="h-4 w-4" /> : <span className="text-[9px]">{instrumentIndex + 1}</span>}
              </span>
              <span className="min-w-0">
                <span className={cn('block font-medium', isMatched ? 'text-emerald-100' : 'text-white')}>{instrument.name}</span>
                <span className={isMatched ? 'text-emerald-300/80' : 'text-blue-300'}>{instrument.englishName}</span>
              </span>
            </button>
          );
        })}
      </div>

      <div className="border-t border-white/15 pt-3">
        <p className="mb-2 text-center text-blue-200">Drag the icons below to the matching names above</p>
        <div className="grid grid-cols-3 gap-2">
          {trayItems.map((instrument) => {
            const isMatched = matched.has(instrument.id);
            const isSelected = selectedId === instrument.id;
            return (
              <div key={instrument.id}>
                <button
                  type="button"
                  draggable={!isMatched}
                  disabled={isMatched}
                  onDragStart={(event) => handleDragStart(event, instrument.id)}
                  onDragEnd={() => setDraggedId(null)}
                  onClick={() => {
                    if (isMatched) return;
                    setSelectedId(instrument.id);
                    setFeedback(null);
                  }}
                  className={cn(
                    'relative flex h-[72px] w-full items-center justify-center overflow-hidden rounded-lg border bg-white p-2 transition-all',
                    isMatched
                      ? 'cursor-not-allowed border-emerald-400/70 opacity-40'
                      : isSelected
                        ? 'cursor-grab border-amber-300 ring-2 ring-amber-300/60'
                        : 'cursor-grab border-slate-200 hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-blue-50 active:cursor-grabbing',
                  )}
                  aria-label="Draggable equipment icons"
                >
                  <GripVertical className="absolute left-0.5 top-1 h-3 w-3 text-slate-400" />
                  <MaterialArtwork
                    material={instrument}
                    className="h-full w-full"
                    artworkClassName="h-full"
                    decorative
                  />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {feedback && !completed && (
        <p className={cn(
          'rounded-md px-2.5 py-2 text-center',
          feedback.kind === 'success' ? 'bg-emerald-400/15 text-emerald-200' : 'bg-rose-400/15 text-rose-200',
        )}>
          {feedback.text}
        </p>
      )}

      {completed && (
        <div className="rounded-lg border border-emerald-400/50 bg-emerald-400/15 p-3 text-center text-emerald-100">
          <CheckCircle2 className="mx-auto mb-1 h-6 w-6 text-emerald-300" />
          <p className="font-semibold">All matches complete!</p>
        </div>
      )}
    </div>
  );
}

function InstrumentOverview({
  instruments,
  onStartGame,
}: Pick<ExperimentInfoSidebarData, 'instruments'> & { onStartGame: () => void }) {
  const [previewMaterial, setPreviewMaterial] = useState<SidebarMaterial | null>(null);

  return (
    <div className="space-y-2 pr-3 pb-3">
      <div>
        <h4 className="text-xs font-semibold text-white">Laboratory Equipment</h4>
        <p className="mt-0.5 text-[10px] text-blue-200">Review the equipment for this experiment, then start the matching challenge.</p>
      </div>
      <button
        type="button"
        onClick={onStartGame}
        className="flex w-full items-center justify-center gap-2 rounded-lg border border-cyan-300/50 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 px-3 py-2.5 text-[11px] font-semibold text-cyan-100 transition-all hover:border-cyan-200 hover:from-cyan-500/30 hover:to-blue-500/30"
      >
        <Gamepad2 className="h-4 w-4" />
        Start Matching Challenge
      </button>
      {instruments.map((instrument) => (
        <div key={instrument.id} className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] p-2.5">
          <MaterialThumbnail material={instrument} onPreview={setPreviewMaterial} />
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-white">{instrument.name}</p>
            <p className="mt-0.5 break-words text-[10px] leading-snug text-blue-200">{instrument.englishName}</p>
          </div>
        </div>
      ))}
      <MaterialPreviewDialog material={previewMaterial} onClose={() => setPreviewMaterial(null)} />
    </div>
  );
}

function InstrumentSection({
  instruments,
  instrumentTrayOrder,
}: Pick<ExperimentInfoSidebarData, 'instruments' | 'instrumentTrayOrder'>) {
  const [gameStarted, setGameStarted] = useState(false);

  if (!gameStarted) {
    return <InstrumentOverview instruments={instruments} onStartGame={() => setGameStarted(true)} />;
  }

  return (
    <InstrumentMatchingGame
      instruments={instruments}
      instrumentTrayOrder={instrumentTrayOrder}
      onExit={() => setGameStarted(false)}
    />
  );
}

function ReagentList({ reagents }: Pick<ExperimentInfoSidebarData, 'reagents'>) {
  const [previewMaterial, setPreviewMaterial] = useState<SidebarMaterial | null>(null);

  return (
    <div className="space-y-2 pr-3 pb-3">
      <div>
        <h4 className="text-xs font-semibold text-white">Laboratory Reagents</h4>
        <p className="mt-0.5 text-[10px] text-blue-200">Reagents are for reference; no matching is required.</p>
      </div>
      {reagents.map((reagent) => (
        <div key={reagent.id} className="flex items-center gap-3 rounded-lg border border-white/15 bg-white/[0.06] p-2.5">
          <MaterialThumbnail material={reagent} onPreview={setPreviewMaterial} />
          <div className="min-w-0">
            <p className="text-[11px] font-medium text-white">{reagent.name}</p>
            <p className="mt-0.5 break-words text-[10px] leading-snug text-blue-200">{reagent.englishName}</p>
          </div>
        </div>
      ))}
      <MaterialPreviewDialog material={previewMaterial} onClose={() => setPreviewMaterial(null)} />
    </div>
  );
}

export function ExperimentInfoSidebar({ data, className }: ExperimentInfoSidebarProps) {
  const instanceKey = data.experimentLabel;

  return (
    <div className={cn(
      'flex h-full min-h-0 flex-col rounded-xl border border-blue-300 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700 p-3 text-white shadow-xl',
      className,
    )}>
      <div className="mb-3 shrink-0">
        <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-blue-300">{data.experimentLabel}</p>
        <h3 className="text-sm font-semibold text-white">{data.title ?? "Experiment Information"}</h3>
      </div>

      <Tabs defaultValue="safety" className="flex min-h-0 flex-1 flex-col">
        <TabsList className="mb-3 grid h-8 w-full shrink-0 grid-cols-4 rounded-sm bg-white/10">
          <TabsTrigger value="safety" className="px-1 text-[10px] text-blue-200 data-[state=active]:bg-white/20 data-[state=active]:text-white">
            <ShieldCheck className="mr-0.5 h-3 w-3" />Safety
          </TabsTrigger>
          <TabsTrigger value="principle" className="px-1 text-[10px] text-blue-200 data-[state=active]:bg-white/20 data-[state=active]:text-white">
            <BookOpen className="mr-0.5 h-3 w-3" />Principle
          </TabsTrigger>
          <TabsTrigger value="instruments" className="px-1 text-[10px] text-blue-200 data-[state=active]:bg-white/20 data-[state=active]:text-white">
            <FlaskConical className="mr-0.5 h-3 w-3" />Equipment
          </TabsTrigger>
          <TabsTrigger value="reagents" className="px-1 text-[10px] text-blue-200 data-[state=active]:bg-white/20 data-[state=active]:text-white">
            <Beaker className="mr-0.5 h-3 w-3" />Reagents
          </TabsTrigger>
        </TabsList>

        <TabsContent value="safety" className="mt-0 min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <SafetySection safety={data.safety} />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="principle" className="mt-0 min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <PrincipleSection key={`principle-${instanceKey}`} principle={data.principle} questions={data.questions} />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="instruments" className="mt-0 min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <InstrumentSection
              key={`instruments-${instanceKey}`}
              instruments={data.instruments}
              instrumentTrayOrder={data.instrumentTrayOrder}
            />
          </ScrollArea>
        </TabsContent>
        <TabsContent value="reagents" className="mt-0 min-h-0 flex-1 overflow-hidden">
          <ScrollArea className="h-full">
            <ReagentList reagents={data.reagents} />
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
}
