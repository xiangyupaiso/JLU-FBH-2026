/**
 * circRNA 细胞防护 — P2P WebRTC 通信 Hook (PeerJS 封装)
 * Host 端：权威主机，收集 Client Input → 引擎结算 → 广播 State
 * Client 端：接收 Host State → 渲染；用户操作打包发送至 Host
 */

import { useState, useRef, useCallback, useEffect } from 'react';
import type Peer from 'peerjs';
import type { DataConnection, PeerJSOption } from 'peerjs';
import type {
  GameState, NetworkAction, NetMessage,
  Lobby, NetMode,
} from '../types/game';
import { MAX_PLAYERS, BOT_NAMES } from '../constants/cards';

// ───────── 类型 ─────────

export interface PeerOptions {
  host?: string;
  port?: number;
}

export interface UsePeerNetworkOptions {
  /** Host 收到 Client 操作时回调 */
  onRemoteInput?: (from: number, action: NetworkAction) => void;
  /** Client 收到 Host 广播状态时回调 */
  onRemoteState?: (state: GameState) => void;
  /** 游戏中 Client 断线（Host 端回调） */
  onPeerLeft?: (playerIdx: number) => void;
  /** 语言 */
  lang?: 'cn' | 'en';
}

export interface UsePeerNetworkReturn {
  mode: NetMode;
  isHost: boolean;
  me: number;
  room: string | null;
  started: boolean;
  lobby: Lobby | null;
  error: string | null;
  /** Host: 创建房间 */
  createRoom: (nick: string, opts?: PeerOptions) => void;
  /** Client: 加入房间 */
  joinRoom: (nick: string, code: string, opts?: PeerOptions) => void;
  /** 离开 / 断开 */
  leaveRoom: () => void;
  /** Host: 添加机器人 */
  addBot: () => void;
  /** Host: 开始联机对局 */
  startOnline: (playerDefs: PlayerDef[]) => void;
  /** Host: 广播全量状态 */
  broadcastState: (state: GameState) => void;
  /** Client/Local: 发送操作（本地直接走 onRemoteInput，远程发给 Host） */
  sendInput: (action: NetworkAction) => void;
}

// ponytail: 复用 gameEngine 的 PlayerDef，避免重复定义
import type { PlayerDef } from '../engine/gameEngine';

// ───────── PeerJS 懒加载 ─────────

// 动态 import 避免构建/SSR 时加载；仅在实际联网时拉取
let PeerCtor: typeof Peer | null = null;
async function loadPeer(): Promise<typeof Peer> {
  if (!PeerCtor) PeerCtor = (await import('peerjs')).default;
  return PeerCtor;
}

// ───────── 工具 ─────────

const CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
function randCode(): string {
  let c = '';
  for (let i = 0; i < 4; i++) c += CODE_CHARS[Math.floor(Math.random() * CODE_CHARS.length)];
  return c;
}
function pid(code: string): string { return 'circrnabzm-' + code; }

function buildPeerOpts(opts?: PeerOptions): PeerJSOption | undefined {
  if (opts?.host) {
    return { host: opts.host, port: opts.port ? parseInt(String(opts.port)) : 9000, path: '/', secure: false };
  }
  return undefined; // 公共云
}

/**
 * 为指定客户端生成最小可见状态：
 * - 只保留其本人手牌牌面，对手仅保留 handCount
 * - 不下发抽牌堆顺序，仅提供总张数与炸弹总量
 * - 预测结果只对使用者本人可见
 */
export function redactGameStateForPlayer(state: GameState, viewer: number): GameState {
  const pending = state.pending && state.pending.kind === 'future' && state.pending.player !== viewer
    ? { ...state.pending, cards: [] }
    : state.pending;

  return {
    ...state,
    players: state.players.map(player => player.id === viewer
      ? { ...player, hand: [...player.hand], handCount: player.hand.length }
      : { ...player, hand: [], handCount: player.hand.length }),
    draw: [],
    drawCount: state.draw.length,
    remainingBombs: state.draw.filter(card => card === 'bomb').length,
    discard: [...state.discard],
    exile: [],
    pending: pending ? { ...pending } : null,
    nope: state.nope ? { ...state.nope } : null,
    log: [...state.log],
    cfg: { ...state.cfg },
  };
}

// ───────── Hook ─────────

export function usePeerNetwork(opts: UsePeerNetworkOptions = {}): UsePeerNetworkReturn {
  const lang = opts.lang ?? 'cn';
  const [mode, setMode] = useState<NetMode>('local');
  const [isHost, setIsHost] = useState(true);
  const [me, setMe] = useState(0);
  const [room, setRoom] = useState<string | null>(null);
  const [started, setStarted] = useState(false);
  const [lobby, setLobby] = useState<Lobby | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Refs（PeerJS 实例不可序列化，不放 state）
  const peerRef = useRef<Peer | null>(null);
  const connsRef = useRef<{ conn: DataConnection; idx: number }[]>([]);   // Host 端连接列表
  const hostConnRef = useRef<DataConnection | null>(null);               // Client 端到 Host 的连接
  const meRef = useRef(0);
  const isHostRef = useRef(true);
  const startedRef = useRef(false);
  const lobbyRef = useRef<Lobby | null>(null);
  const nickRef = useRef<string>('');

  // 回调 refs（避免重建函数）
  const onRemoteInputRef = useRef(opts.onRemoteInput);
  const onRemoteStateRef = useRef(opts.onRemoteState);
  const onPeerLeftRef = useRef(opts.onPeerLeft);
  useEffect(() => {
    onRemoteInputRef.current = opts.onRemoteInput;
    onRemoteStateRef.current = opts.onRemoteState;
    onPeerLeftRef.current = opts.onPeerLeft;
  });

  // ───────── Host: 广播 ─────────

  const broadcastState = useCallback((state: GameState) => {
    if (mode !== 'online' || !isHostRef.current) return;
    connsRef.current.forEach(c => {
      const msg: NetMessage = { t: 'state', G: redactGameStateForPlayer(state, c.idx) };
      try { c.conn.send(msg); } catch { /* 连接已断 */ }
    });
  }, [mode]);

  const pushLobby = useCallback(() => {
    const lb = lobbyRef.current;
    if (!lb) return;
    const msg: NetMessage = {
      t: 'lobby',
      players: lb.players.map(p => ({ name: p.name, isBot: p.isBot, connId: p.connId })),
      code: lb.code,
    };
    connsRef.current.forEach(c => {
      try { c.conn.send(msg); } catch { /* */ }
    });
  }, []);

  // ───────── Host: 连接事件处理 ─────────

  const handleHostData = useCallback((conn: DataConnection, data: NetMessage) => {
    if (data.t === 'join') {
      const rec = connsRef.current.find(c => c.conn === conn);
      if (!rec) return;
      const lb = lobbyRef.current;
      if (!lb) return;
      // 游戏已开始或已满 → 拒绝
      if (startedRef.current || lb.players.length >= MAX_PLAYERS) {
        try { conn.send({ t: 'full' }); } catch { /* */ }
        setTimeout(() => conn.close(), 300);
        return;
      }
      lb.players[rec.idx] = { name: data.name || `Player${rec.idx}`, isBot: false, connId: rec.idx };
      setLobby({ ...lb, players: [...lb.players] });
      try { conn.send({ t: 'welcome', me: rec.idx, code: lb.code }); } catch { /* */ }
      pushLobby();
    } else if (data.t === 'input') {
      onRemoteInputRef.current?.(data.from, data.action);
    }
  }, [pushLobby]);

  const handlePeerLeft = useCallback((conn: DataConnection) => {
    const rec = connsRef.current.find(c => c.conn === conn);
    if (!rec) return;
    connsRef.current = connsRef.current.filter(c => c.conn !== conn);

    const lb = lobbyRef.current;
    if (!startedRef.current && lb) {
      // 大厅阶段：直接移除
      lb.players = lb.players.filter((_, i) => i !== rec.idx);
      // 重新索引 conns
      connsRef.current.forEach(c => {
        if (c.idx > rec.idx) c.idx--;
      });
      setLobby({ ...lb, players: [...lb.players] });
      pushLobby();
    } else {
      // 游戏中：通知组件层处理（标记出局等）
      onPeerLeftRef.current?.(rec.idx);
    }
  }, [pushLobby]);

  // ───────── Host: 创建房间 ─────────

  const createRoom = useCallback(async (nick: string, peerOpts?: PeerOptions) => {
    setError(null);
    nickRef.current = nick;
    const code = randCode();
    try {
      const Peer = await loadPeer();
      const peer = new Peer(pid(code), buildPeerOpts(peerOpts));
      peerRef.current = peer;
      setMode('online');
      setIsHost(true);
      isHostRef.current = true;
      setMe(0);
      meRef.current = 0;
      setRoom(code);
      setStarted(false);
      startedRef.current = false;
      connsRef.current = [];

      const lb: Lobby = { code, players: [{ name: nick, isBot: false, connId: null }] };
      lobbyRef.current = lb;
      setLobby(lb);

      peer.on('open', () => { /* 就绪 */ });
      peer.on('error', (e) => setError(`⚠️ ${e.type || e.message}`));
      peer.on('connection', (conn) => {
        conn.on('open', () => {
          const lb = lobbyRef.current;
          if (!lb) return;
          if (startedRef.current || lb.players.length >= MAX_PLAYERS) {
            try { conn.send({ t: 'full' }); } catch { /* */ }
            setTimeout(() => conn.close(), 300);
            return;
          }
          const idx = lb.players.length;
          // 占位：等 join 消息填充 name
          lb.players.push({ name: `Player${idx}`, isBot: false, connId: idx });
          connsRef.current.push({ conn, idx });
          conn.on('data', (d) => handleHostData(conn, d as NetMessage));
          conn.on('close', () => handlePeerLeft(conn));
        });
      });
    } catch (e) {
      setError(`Peer error: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, [handleHostData, handlePeerLeft]);

  // ───────── Client: 加入房间 ─────────

  const joinRoom = useCallback(async (nick: string, code: string, peerOpts?: PeerOptions) => {
    setError(null);
    nickRef.current = nick;
    code = code.toUpperCase();
    try {
      const Peer = await loadPeer();
      const peer = new Peer(buildPeerOpts(peerOpts) ?? {});
      peerRef.current = peer;
      setMode('online');
      setIsHost(false);
      isHostRef.current = false;
      setRoom(code);

      peer.on('open', () => {
        const conn = peer.connect(pid(code), { reliable: true });
        hostConnRef.current = conn;
        conn.on('open', () => {
          conn.send({ t: 'join', name: nick });
        });
        conn.on('data', (message) => {
          const d = message as NetMessage;
          if (d.t === 'welcome') {
            setMe(d.me);
            meRef.current = d.me;
            setRoom(d.code);
          } else if (d.t === 'full') {
            setError(lang === 'cn' ? '房间已满或已开始' : 'Room full or started');
          } else if (d.t === 'lobby') {
            lobbyRef.current = { code: d.code, players: d.players };
            setLobby({ code: d.code, players: d.players });
          } else if (d.t === 'start') {
            setMe(d.me);
            meRef.current = d.me;
            setStarted(true);
            startedRef.current = true;
          } else if (d.t === 'state') {
            onRemoteStateRef.current?.(d.G);
          }
        });
        conn.on('error', () => setError(lang === 'cn' ? '连接失败' : 'Connection failed'));
        conn.on('close', () => {
          if (!startedRef.current) {
            setError(lang === 'cn' ? '房间已关闭' : 'Room closed');
          }
        });
      });
      peer.on('error', (e) => {
        const msg = e.type === 'peer-unavailable'
          ? (lang === 'cn' ? '房间号错误或房主离线' : 'Bad code / host offline')
          : (e.type || e.message || String(e));
        setError(`⚠️ ${msg}`);
      });
    } catch (e) {
      setError(`Peer error: ${e instanceof Error ? e.message : String(e)}`);
    }
  }, [lang]);

  // ───────── Host: 添加机器人 ─────────

  const addBot = useCallback(() => {
    const lb = lobbyRef.current;
    if (!lb || lb.players.length >= MAX_PLAYERS) return;
    const botCount = lb.players.filter(p => p.isBot).length;
    const name = lang === 'cn'
      ? BOT_NAMES[botCount % BOT_NAMES.length].cn
      : BOT_NAMES[botCount % BOT_NAMES.length].en;
    lb.players.push({ name, isBot: true, connId: null });
    setLobby({ ...lb, players: [...lb.players] });
    pushLobby();
  }, [lang, pushLobby]);

  // ───────── Host: 开始联机对局 ─────────

  const startOnline = useCallback(() => {
    const lb = lobbyRef.current;
    if (!lb || lb.players.length < 2) return;
    startedRef.current = true;
    setStarted(true);
    // 通知所有客户端
    connsRef.current.forEach(c => {
      try { c.conn.send({ t: 'start', me: c.idx }); } catch { /* */ }
    });
  }, []);

  // ───────── 发送操作 ─────────

  const sendInput = useCallback((action: NetworkAction) => {
    if (mode === 'local' || isHostRef.current) {
      // 本地 / Host：直接走引擎回调
      onRemoteInputRef.current?.(meRef.current, action);
    } else if (hostConnRef.current) {
      // Client：发给 Host
      const msg: NetMessage = { t: 'input', from: meRef.current, action };
      try { hostConnRef.current.send(msg); } catch { /* */ }
    }
  }, [mode]);

  // ───────── 离开 / 清理 ─────────

  const leaveRoom = useCallback(() => {
    connsRef.current.forEach(c => {
      try { c.conn.close(); } catch { /* */ }
    });
    connsRef.current = [];
    if (hostConnRef.current) {
      try { hostConnRef.current.close(); } catch { /* */ }
      hostConnRef.current = null;
    }
    if (peerRef.current) {
      try { peerRef.current.destroy(); } catch { /* */ }
      peerRef.current = null;
    }
    lobbyRef.current = null;
    startedRef.current = false;
    isHostRef.current = true;
    meRef.current = 0;
    setMode('local');
    setIsHost(true);
    setMe(0);
    setRoom(null);
    setStarted(false);
    setLobby(null);
    setError(null);
  }, []);

  // 卸载时清理
  useEffect(() => {
    return () => {
      if (peerRef.current) {
        try { peerRef.current.destroy(); } catch { /* */ }
      }
    };
  }, []);

  return {
    mode, isHost, me, room, started, lobby, error,
    createRoom, joinRoom, leaveRoom, addBot, startOnline, broadcastState, sendInput,
  };
}
