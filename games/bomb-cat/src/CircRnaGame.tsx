/**
 * circRNA 细胞防护 — 主入口组件
 * 整合大厅/规则/联机/本地对局全流程，作为唯一 Default 导出。
 * 嵌入方式：<CircRnaGame />
 */

import { useState, useCallback, useEffect } from 'react';
import { ArrowLeft, Globe, Bot, BookOpen } from 'lucide-react';
import { Button } from './components/Button';
import { GameBoard } from './components/GameBoard';
import { HandPanel } from './components/HandPanel';
import { BattleLog } from './components/BattleLog';
import { Dialogs } from './components/Dialogs';
import WikiBridge from './components/WikiBridge';
import { GameEngineContext } from './hooks/gameEngineContext';
import { useGameEngine, type UseGameEngineReturn } from './hooks/useGameEngine';
import { usePeerNetwork, type UsePeerNetworkReturn } from './hooks/usePeerNetwork';
import type { PlayerDef } from './engine/gameEngine';
import { MAX_PLAYERS, BOT_NAMES } from './constants/cards';
import type { GameState, Lang, NetworkAction, Screen } from './types/game';
import coverImg from './assets/cover.webp';

// ───────── 工具 ─────────

const T = (l: { cn: string; en: string }, lang: Lang) => (lang === 'cn' ? l.cn : l.en);

// ───────── 主组件 ─────────

export default function CircRnaGame() {
  const [lang, setLang] = useState<Lang>('en');
  const [screen, setScreen] = useState<Screen>('menu');
  const [nick, setNick] = useState('');
  const [joinCode, setJoinCode] = useState('');
  const [srvHost, setSrvHost] = useState('');
  const [srvPort, setSrvPort] = useState('');
  const [showAdv, setShowAdv] = useState(false);
  const [localCountModal, setLocalCountModal] = useState(false);
  const [remoteState, setRemoteState] = useState<GameState | null>(null);

  // ── Hook 实例化 ──
  const engine = useGameEngine({
    onStateChange: (state) => {
      if (net.isHost && net.mode === 'online') net.broadcastState(state);
    },
  });

  const net = usePeerNetwork({
    onRemoteInput: (from, action) => {
      engine.dispatchAction(from, action);
    },
    onRemoteState: (state) => setRemoteState(state),
    // ponytail: peer-left-during-game 未处理，断线玩家仍显示存活但不行动；加 eliminatePlayer 到 engine 后可完善
    lang,
  });

  // ── 有效游戏状态：Client 用 remoteState，本地/Host 用 engine.gameState ──
  const gameState: GameState | null =
    net.mode === 'online' && !net.isHost ? remoteState : engine.gameState;

  // ── 统一操作入口 ──
  const dispatchAction = useCallback(
    (action: NetworkAction) => {
      if (net.mode === 'online' && !net.isHost) {
        net.sendInput(action);
      } else {
        engine.dispatchAction(net.me, action);
      }
    },
    [net, engine],
  );

  const canAct = !!gameState && !gameState.over && gameState.turn === net.me && !gameState.pending && !gameState.nope?.open;

  // ── 开始本地对局 ──
  const startLocal = (n: number) => {
    const defs: PlayerDef[] = [
      { name: T({ cn: '你（A队）', en: 'You (Team A)' }, lang), isBot: false },
    ];
    for (let i = 0; i < n - 1; i++) {
      defs.push({
        name: T(BOT_NAMES[i % BOT_NAMES.length], lang),
        isBot: true,
      });
    }
    engine.startGame(defs);
    setLocalCountModal(false);
    setScreen('game');
  };

  // ── 开始联机对局（Host） ──
  const startOnlineGame = () => {
    if (!net.lobby || net.lobby.players.length < 2) return;
    const defs: PlayerDef[] = net.lobby.players.map((p) => ({ name: p.name, isBot: p.isBot }));
    net.startOnline(defs);
    engine.startGame(defs);
    setScreen('game');
  };

  // ── 退出游戏 ──
  const exitGame = () => {
    engine.resetGame();
    setRemoteState(null);
    net.leaveRoom();
    setScreen('menu');
  };

  // ── 切换语言 ──
  const toggleLang = () => setLang((l) => (l === 'cn' ? 'en' : 'cn'));

  const peerOpts = srvHost ? { host: srvHost, port: srvPort ? parseInt(srvPort) : 9000 } : undefined;

  // ── 屏幕自动切换（副作用，避免 render 内 setState） ──
  useEffect(() => {
    if (net.mode !== 'online' || !net.lobby) return;
    if (net.isHost && screen === 'online') setScreen('lobby');
    else if (!net.isHost && screen === 'join') setScreen('wait');
  }, [net.mode, net.isHost, net.lobby, screen]);

  useEffect(() => {
    if (net.started && screen !== 'game' && gameState) setScreen('game');
  }, [net.started, screen, gameState]);

  // ────────────── 渲染 ──────────────

  // 语言按钮
  const LangBtn = () => (
    <button
      onClick={toggleLang}
      className="absolute right-4 top-4 rounded-[6px] px-3 py-1.5 text-[13px] font-bold"
      style={{ background: 'transparent', border: '1px solid rgba(27,23,25,.18)', color: 'var(--navy-deep, #102f59)' }}
    >
      {lang === 'cn' ? 'EN' : '中'}
    </button>
  );

  // 返回按钮
  const BackBtn = ({ to }: { to: Screen }) => (
    <button
      onClick={() => (screen === 'game' && gameState && !gameState.over ? exitGame() : setScreen(to))}
      className="absolute left-4 top-4 flex items-center gap-1 rounded-[6px] px-3 py-1.5 text-[13px] font-bold"
      style={{ background: 'transparent', border: '1px solid rgba(27,23,25,.18)', color: 'var(--navy-deep, #102f59)' }}
    >
      <ArrowLeft size={16} />
      {T({ cn: '返回', en: 'Back' }, lang)}
    </button>
  );

  return (
    <GameEngineContext.Provider value={engine}>
      <WikiBridge me={net.me} />
      <div
        className="relative min-h-screen"
        style={{
          background: 'var(--paper, #eee7dc)',
          color: 'var(--ink-primary, #1b1719)',
          fontFamily: 'var(--font-sans, -apple-system, sans-serif)',
        }}
      >
      <LangBtn />

      {/* ════════ 菜单 ════════ */}
      {screen === 'menu' && (
        <div className="flex min-h-screen flex-col items-center justify-center px-5 py-8 text-center">
          <div className="relative mb-3 w-full max-w-[360px] overflow-hidden rounded-2xl border border-stone-800/15 shadow-lg">
            <img
              src={coverImg}
              alt="circRNA Bomb Cat"
              className="w-full h-auto object-cover"
            />
          </div>
          <h1
            className="text-[32px] font-bold"
            style={{ fontFamily: 'var(--font-editorial, serif)', letterSpacing: '-0.02em', color: 'var(--navy-deep, #102f59)' }}
          >
            {T({ cn: 'circRNA 爆炸猫', en: 'circRNA Bomb Cat' }, lang)}
          </h1>
          <div className="mt-1 text-[13px] font-medium opacity-75" style={{ color: 'var(--navy-deep, #102f59)' }}>
            {T({ cn: 'TNBC 免疫防御 · 策略卡牌', en: 'TNBC Immune Defense · Strategy Card Duel' }, lang)}
          </div>
          <div className="mt-5 flex flex-col gap-2.5 w-full max-w-[260px]">
            <Button variant="pink" size="big" onClick={() => setScreen('online')}>
              <Globe size={18} /> {T({ cn: '在线联机对局', en: 'Online Play' }, lang)}
            </Button>
            <Button variant="primary" size="big" onClick={() => setLocalCountModal(true)}>
              <Bot size={18} /> {T({ cn: '本地人机对局', en: 'Local Bot Play' }, lang)}
            </Button>
            <Button variant="ghost" size="big" onClick={() => setScreen('rules')}>
              <BookOpen size={18} /> {T({ cn: '查看游戏规则', en: 'View Rules' }, lang)}
            </Button>
          </div>
        </div>
      )}

      {/* ════════ 规则 ════════ */}
      {screen === 'rules' && (
        <div className="relative mx-auto max-w-[640px] px-6 pb-12 pt-20">
          <BackBtn to="menu" />
          <h2 className="mb-4 text-center text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            📖 {T({ cn: '游戏规则', en: 'Game Rules' }, lang)}
          </h2>
          <div className="text-[14px] leading-relaxed" dangerouslySetInnerHTML={{ __html: rulesHtml(lang) }} />
        </div>
      )}

      {/* ════════ 在线菜单 ════════ */}
      {screen === 'online' && (
        <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-6 pb-12 pt-24">
          <BackBtn to="menu" />
          <h2 className="mb-6 text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🌐 {T({ cn: '在线游玩', en: 'Online Play' }, lang)}
          </h2>
          <div className="flex w-[260px] flex-col gap-1.5">
            <label className="text-[13px] opacity-80">
              {T({ cn: '你的昵称 / Nickname', en: 'Your Nickname' }, lang)}
            </label>
            <input
              value={nick}
              onChange={(e) => setNick(e.target.value.slice(0, 12))}
              placeholder={lang === 'cn' ? 'A队' : 'Team A'}
              className="rounded-[9px] px-3 py-2.5 text-[15px]"
              style={{
                background: 'var(--paper-bright, #fcf8f1)',
                border: '1px solid rgba(27,23,25,.18)',
                color: 'var(--ink-primary, #1b1719)',
              }}
            />
          </div>
          <div className="mt-5 flex flex-col gap-3">
            <Button variant="pink" size="big" onClick={() => net.createRoom(nick || 'Player', peerOpts)}>
              ➕ {T({ cn: '创建房间', en: 'Create Room' }, lang)}
            </Button>
            <Button variant="primary" size="big" onClick={() => setScreen('join')}>
              🔑 {T({ cn: '加入房间', en: 'Join Room' }, lang)}
            </Button>
          </div>
          <div
            className="mt-5 cursor-pointer text-[12px] opacity-70 underline"
            onClick={() => setShowAdv((s) => !s)}
          >
            ⚙ {T({ cn: '局域网 / 自建服务器设置', en: 'LAN / custom server' }, lang)}
          </div>
          {showAdv && (
            <div className="mt-3 w-[300px] rounded-[12px] p-4 text-left" style={{ background: 'var(--paper-bright, #fcf8f1)', border: '1px solid rgba(27,23,25,.12)' }}>
              <div className="flex flex-col gap-1.5">
                <label className="text-[13px] opacity-80">
                  {T({ cn: '信令服务器 Host', en: 'Signal Host' }, lang)}
                </label>
                <input value={srvHost} onChange={(e) => setSrvHost(e.target.value)} placeholder="192.168.1.5"
                  className="rounded-[9px] px-3 py-2 text-[14px]" style={{ background: 'var(--paper, #eee7dc)', border: '1px solid rgba(27,23,25,.18)' }} />
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                <label className="text-[13px] opacity-80">{T({ cn: '端口 Port', en: 'Port' }, lang)}</label>
                <input value={srvPort} onChange={(e) => setSrvPort(e.target.value)} placeholder="9000"
                  className="rounded-[9px] px-3 py-2 text-[14px]" style={{ background: 'var(--paper, #eee7dc)', border: '1px solid rgba(27,23,25,.18)' }} />
              </div>
              <div className="mt-2 text-[11px] opacity-70">
                {T({
                  cn: '局域网联机：在一台机器运行 npx peerjs --port 9000，同一 WiFi 下所有人填该机 IP 与端口。',
                  en: 'LAN: run npx peerjs --port 9000 on one machine, others fill that IP + port.',
                }, lang)}
              </div>
            </div>
          )}
          {net.error && <div className="mt-4 text-[13px]" style={{ color: 'var(--danger, #df705b)' }}>{net.error}</div>}
        </div>
      )}

      {/* ════════ 大厅（Host） ════════ */}
      {screen === 'lobby' && net.isHost && net.lobby && (
        <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-6 pb-12 pt-20">
          <BackBtn to="menu" />
          <h2 className="mb-2 text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🏠 {T({ cn: '房间大厅', en: 'Lobby' }, lang)}
          </h2>
          <p className="mb-3 text-[13px] opacity-80">
            {T({ cn: '把房间号发给朋友，让他们加入', en: 'Share the room code' }, lang)}
          </p>
          <div
            className="my-2 rounded-[12px] px-6 py-3 text-[34px] font-bold tracking-[0.18em]"
            style={{
              color: 'var(--success, #2f6f68)',
              background: 'var(--paper-bright, #fcf8f1)',
              border: '1px dashed rgba(47,111,104,.5)',
            }}
          >
            {net.room}
          </div>
          <LobbySlots lobby={net.lobby} me={net.me} lang={lang} />
          <div className="mt-5 flex gap-2.5">
            <Button variant="ghost" onClick={net.addBot}>
              ➕ {T({ cn: '添加人机', en: 'Add bot' }, lang)}
            </Button>
            <Button variant="pink" onClick={startOnlineGame} disabled={net.lobby.players.length < 2}>
              🚀 {T({ cn: '开始游戏', en: 'Start' }, lang)}
            </Button>
          </div>
        </div>
      )}

      {/* ════════ 加入房间 ════════ */}
      {screen === 'join' && (
        <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-6 pb-12 pt-24">
          <BackBtn to="online" />
          <h2 className="mb-6 text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🔑 {T({ cn: '加入房间', en: 'Join Room' }, lang)}
          </h2>
          <div className="flex w-[260px] flex-col gap-1.5">
            <label className="text-[13px] opacity-80">{T({ cn: '你的昵称 / Nickname', en: 'Your Nickname' }, lang)}</label>
            <input value={nick} onChange={(e) => setNick(e.target.value.slice(0, 12))} placeholder={lang === 'cn' ? 'B队' : 'Team B'}
              className="rounded-[9px] px-3 py-2.5 text-[15px]" style={{ background: 'var(--paper-bright, #fcf8f1)', border: '1px solid rgba(27,23,25,.18)' }} />
          </div>
          <div className="mt-3 flex w-[260px] flex-col gap-1.5">
            <label className="text-[13px] opacity-80">{T({ cn: '输入房间号 / Room code', en: 'Room code' }, lang)}</label>
            <input value={joinCode} onChange={(e) => setJoinCode(e.target.value.slice(0, 4).toUpperCase())}
              placeholder="ABCD" maxLength={4}
              className="rounded-[9px] px-3 py-2.5 text-center text-[20px] tracking-[0.12em]"
              style={{ background: 'var(--paper-bright, #fcf8f1)', border: '1px solid rgba(27,23,25,.18)' }} />
          </div>
          <div className="mt-5">
            <Button variant="pink" size="big" onClick={() => { net.joinRoom(nick || 'Player', joinCode, peerOpts); setScreen('wait'); }}>
              {T({ cn: '加入 Join', en: 'Join' }, lang)}
            </Button>
          </div>
          {net.error && <div className="mt-4 text-[13px]" style={{ color: 'var(--danger, #df705b)' }}>{net.error}</div>}
        </div>
      )}

      {/* ════════ 客户端等待 ════════ */}
      {screen === 'wait' && !net.isHost && net.lobby && (
        <div className="relative mx-auto flex max-w-[640px] flex-col items-center px-6 pb-12 pt-20">
          <BackBtn to="menu" />
          <h2 className="mb-2 text-[24px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
            🕓 {T({ cn: '已加入房间', en: 'Joined room' }, lang)}
          </h2>
          <div className="my-2 rounded-[12px] px-6 py-3 text-[34px] font-bold tracking-[0.18em]"
            style={{ color: 'var(--success, #2f6f68)', background: 'var(--paper-bright, #fcf8f1)', border: '1px dashed rgba(47,111,104,.5)' }}>
            {net.room}
          </div>
          <LobbySlots lobby={net.lobby} me={net.me} lang={lang} />
          <div className="mt-4 text-[13px] opacity-80">
            {T({ cn: '等待房主开始游戏…', en: 'Waiting for host to start…' }, lang)}
          </div>
          {net.error && <div className="mt-3 text-[13px]" style={{ color: 'var(--danger, #df705b)' }}>{net.error}</div>}
        </div>
      )}

      {/* ════════ 游戏画面 ════════ */}
      {screen === 'game' && gameState && (
        <GameScreen
          gameState={gameState}
          me={net.me}
          lang={lang}
          engine={engine}
          canAct={canAct}
          dispatchAction={dispatchAction}
          onExit={exitGame}
        />
      )}

      {/* ════════ 本地人数选择弹窗 ════════ */}
      {localCountModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ background: 'rgba(16,47,89,.78)' }}>
          <div className="w-full max-w-[460px] rounded-[16px] p-6 text-center"
            style={{ background: 'var(--wet-paper-light, #fbfaf7)', border: '1px solid rgba(27,23,25,.14)' }}>
            <h2 className="text-[20px] font-bold" style={{ fontFamily: 'var(--font-editorial, serif)' }}>
              {T({ cn: '选择玩家人数', en: 'How many players?' }, lang)}
            </h2>
            <p className="mt-1.5 text-[13px] opacity-70">
              {T({
                cn: '你 + 若干 AI 队伍（共 2–6 人）',
                en: 'You + AI teams (2–6)',
              }, lang)}
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {[2, 3, 4, 5, 6].map((n) => (
                <Button key={n} variant={n === 4 ? 'pink' : 'primary'} onClick={() => startLocal(n)}>
                  {n} {T({ cn: '人', en: 'P' }, lang)}
                </Button>
              ))}
            </div>
          </div>
        </div>
      )}

      </div>
    </GameEngineContext.Provider>
  );
}

// ───────── 游戏画面子组件 ─────────

function GameScreen({
  gameState, me, lang, engine, canAct, dispatchAction, onExit,
}: {
  gameState: GameState;
  me: number;
  lang: Lang;
  engine: UseGameEngineReturn;
  canAct: boolean;
  dispatchAction: (a: NetworkAction) => void;
  onExit: () => void;
}) {
  return (
    <div className="min-h-screen">
      {/* 顶部栏 */}
      <header className="flex items-center justify-between px-[76px] py-3"
        style={{ borderBottom: '1px solid rgba(27,23,25,.08)' }}>
        <h1 className="text-[16px] font-bold">🧬 {T({ cn: 'circRNA 爆炸猫', en: 'circRNA Bomb Cat' }, lang)}</h1>
        <button onClick={onExit}
          className="flex items-center gap-1 rounded-[6px] px-3 py-1.5 text-[13px] font-bold"
          style={{ border: '1px solid rgba(27,23,25,.18)', color: 'var(--navy-deep, #102f59)' }}>
          <ArrowLeft size={16} /> {T({ cn: '退出', en: 'Exit' }, lang)}
        </button>
      </header>

      {/* 主体：左游戏区 + 右战报 */}
      <div className="mx-auto flex max-w-[1320px] gap-11 p-4 pb-11">
        {/* 主游戏区 */}
        <div className="flex flex-1 flex-col items-center">
          <GameBoard state={gameState} me={me} lang={lang}
            onDraw={canAct ? () => dispatchAction({ kind: 'draw' }) : undefined} />
          <HandPanel
            state={gameState}
            me={me}
            lang={lang}
            sel={engine.sel}
            setSel={engine.setSel}
            onPlay={() => {
              if (engine.sel.length > 0) {
                dispatchAction({ kind: 'play', cards: [...engine.sel] });
                engine.setSel([]);
              }
            }}
            onDraw={() => dispatchAction({ kind: 'draw' })}
            canAct={canAct}
          />
        </div>

        {/* 侧边栏战报 */}
        <aside className="w-[328px] flex-shrink-0">
          <BattleLog state={gameState} me={me} lang={lang} />
        </aside>
      </div>

      {/* 弹窗与否决条 */}
      <Dialogs state={gameState} me={me} lang={lang} onAction={dispatchAction} onExit={onExit} />
    </div>
  );
}

// ───────── 大厅席位 ─────────

function LobbySlots({ lobby, me, lang }: { lobby: NonNullable<UsePeerNetworkReturn['lobby']>; me: number; lang: Lang }) {
  return (
    <div className="my-4 flex flex-wrap justify-center gap-3">
      {Array.from({ length: MAX_PLAYERS }).map((_, i) => {
        const p = lobby.players[i];
        return (
          <div key={i} className="w-[104px] rounded-[12px] px-2 py-3.5 text-center"
            style={{
              background: p ? 'rgba(47,111,104,.08)' : 'var(--paper-bright, #fcf8f1)',
              border: `1px solid ${p ? 'var(--success, #2f6f68)' : 'rgba(27,23,25,.12)'}`,
            }}>
            {p ? (
              <>
                <div className="text-[26px]">{p.isBot ? '🤖' : i === 0 ? '🧑‍🔬' : i === me ? '⭐' : '🧑‍🔬'}</div>
                <div className="mt-1 text-[13px] font-bold">{p.name}</div>
                <div className="text-[11px] opacity-60">
                  {i === 0 ? T({ cn: '房主', en: 'Host' }, lang) : i === me ? T({ cn: '你', en: 'You' }, lang) : T({ cn: '已加入', en: 'joined' }, lang)}
                </div>
              </>
            ) : (
              <>
                <div className="text-[26px]">❔</div>
                <div className="mt-1 text-[13px] font-bold opacity-50">{T({ cn: '空位', en: 'Open' }, lang)}</div>
                <div className="text-[11px] opacity-40">{T({ cn: '等待…', en: '…' }, lang)}</div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ───────── 规则 HTML ─────────

function rulesHtml(lang: Lang): string {
  if (lang === 'cn') return `
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🎯 目标</h3>
  <p>你是一支 iGEM 团队，为三阴性乳腺癌患者研发 circRNA 疫苗。牌堆代表治疗进程，藏着<b>肿瘤爆发</b>。<b>活到最后</b>的团队获胜。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🧪 63 张母牌池与 Setup</h3>
  <p>本游戏用同一套 63 张卡支持 2–6 人。移出全部炸弹和疫苗，洗混 50 张普通牌；每人发 <b>7 张普通牌＋1 张疫苗</b>。随后洗入 <b>N−1 张炸弹</b>；2 人局只加 1 张备用疫苗，3–6 人局加入其余全部疫苗。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🔁 回合流程</h3>
  <p>轮到你时可打出任意数量的牌，最后<b>必须抽 1 张</b>结束回合（除非打出跳过/攻击）。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">☠️ 肿瘤爆发（炸弹）</h3>
  <p>抽到就<b>出局</b>——除非立刻打出 <b>circRNA 疫苗</b> 拆弹，然后把炸弹秘密塞回牌堆任意位置。用过的疫苗进入<b>免疫记忆区</b>，永不洗回。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">♻️ 牌堆重洗</h3>
  <p>当抽牌堆抽空时，只把弃牌堆中的<b>普通功能卡和组件卡</b>重新洗回；免疫记忆区不参与重洗。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🧩 组件拼装</h3>
  <p>组件单张无效果，要<b>拼成构建体</b>才有用：</p>
  <p>· 集齐 <b>3 个核心组件</b>（IRES＋抗原ORF＋环化元件）→ <b>随机</b>抢对手 1 张牌。</p>
  <p>· 再加 <b>LNP 递送</b> 集齐 <b>4 组件</b> → 可<b>点名索要</b>一张指定牌。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">⚙️ 功能卡</h3>
  <p>🩸转移(攻击) · 🧠记忆(跳过) · 🔮预测(看顶3张) · 🔀异质性(洗牌) · 🌿提呈(由对手选牌交出) · 🔬ctDNA 深层监测(抽底) · 🔁免疫突触交换(给1张、随机取1张) · 🚫检查点抑制剂(否决)。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🚫 否决链</h3>
  <p>ICI 可否决<b>所有普通功能卡和 3/4 组件构建体效果</b>，但绝不能否决肿瘤爆发或疫苗。下一个人可继续反否决；最终否决牌数为<b>奇数</b>则效果取消、为<b>偶数</b>则效果生效。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🔐 私密信息与风险</h3>
  <p>对手只公开手牌总数，不公开疫苗或其他牌种。牌堆旁公开残余爆发数，以及“残余爆发数 ÷ 当前牌堆张数”的实时触爆率。</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🏆 胜负</h3>
  <p>其他团队的患者都复发出局，只剩你 → 你赢得研发竞赛！</p>`;
  return `
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🎯 Goal</h3>
  <p>You are an iGEM team developing a circRNA vaccine for TNBC. The deck hides <b>Tumor Outbreaks</b>. Be the <b>last team standing</b>.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🧪 63-card pool & Setup</h3>
  <p>One 63-card set supports 2–6 players. Remove all outbreaks and vaccines, shuffle the 50 ordinary cards, and deal each player <b>7 ordinary cards + 1 vaccine</b>. Shuffle in <b>N−1 outbreaks</b>; add 1 reserve vaccine for 2 players, or all remaining vaccines for 3–6.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🔁 Turn</h3>
  <p>Play any number of cards, then you <b>must draw 1</b> to end your turn (unless you played Skip/Attack).</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">☠️ Outbreak (bomb)</h3>
  <p>Draw it & you're <b>out</b> — unless you use a <b>circRNA Vaccine</b>, then secretly reinsert the outbreak. The used vaccine enters the <b>Immune Memory Zone</b> and never returns.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">♻️ Reshuffle</h3>
  <p>When the draw pile is exhausted, only ordinary action and component cards in the discard pile are shuffled back. The Immune Memory Zone never returns.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🧩 Assemble the construct</h3>
  <p>Components do nothing alone — assemble them:</p>
  <p>· Collect <b>all 3 core components</b> → steal a <b>random</b> card.</p>
  <p>· Add <b>LNP delivery</b> for all <b>4</b> → targeting → <b>name</b> a specific card to take.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">⚙️ Action cards</h3>
  <p>🩸Metastasis · 🧠Memory · 🔮Prediction · 🔀Heterogeneity · 🌿Presentation · 🔬Deep MRD Monitoring(draw bottom) · 🔁Immune Synapse Swap · 🚫ICI.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🚫 Nope chain</h3>
  <p>ICI can cancel <b>every ordinary action and either construct effect</b>, but never an Outbreak or Vaccine. Players may counter a Nope; an <b>odd</b> number cancels the effect and an <b>even</b> number lets it through.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🔐 Privacy & risk</h3>
  <p>Only an opponent's total hand size is public. The panel beside the deck shows outbreaks remaining and live risk: outbreaks divided by draw-pile size.</p>
  <h3 style="color:var(--navy,#173f78);font-size:16px;margin:18px 0 6px">🏆 Win</h3>
  <p>All rival patients relapse; you remain → you win the race!</p>`;
}
