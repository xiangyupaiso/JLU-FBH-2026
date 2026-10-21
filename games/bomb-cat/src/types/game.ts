/**
 * circRNA 爆炸猫 — 完整 TypeScript 类型定义
 * 1:1 映射原始 HTML 游戏的全局 G 对象、网络消息与动作类型
 */

// ───────── 基础类型 ─────────

export type Lang = 'cn' | 'en';

export interface Localized {
  cn: string;
  en: string;
}

/** 14 种实体卡牌 */
export type CardKey =
  | 'bomb' | 'defuse' | 'nope' | 'attack' | 'skip'
  | 'favor' | 'shuffle' | 'future' | 'bottom' | 'swap'
  | 'ires' | 'orf' | 'circ' | 'lnp';

/** 可被 ICI 否决的功能或构建体效果 */
export type NopeEffect =
  | Exclude<CardKey, 'bomb' | 'defuse' | 'nope'>
  | 'coreBuild' | 'targetedBuild';

/** 6 种卡牌分类 */
export type CategoryKey =
  | 't-tumor' | 't-immune' | 't-brand'
  | 't-gold' | 't-violet' | 't-comp';

// ───────── 玩家与状态 ─────────

export interface Player {
  id: number;
  name: string;
  isBot: boolean;
  hand: CardKey[];
  /** 联机脱敏状态中用于展示对手手牌总数；具体牌面不会下发 */
  handCount?: number;
  alive: boolean;
  avatar: string;
}

export interface GameConfig {
  /** 起手总张数（含每人 1 张疫苗） */
  hand: number;
  bombs: number;
  defuse: number;
  printedDeck: number;
}

export interface LogEntry {
  /** 双语事件文本；string 仅用于兼容热更新前的旧对局状态。 */
  m: Localized | string;
  c: '' | 'hl' | 'bad';
  a: number | null;
}

// ───────── PendingState ─────────

export type PendingState =
  | { kind: 'steal'; mode: 'random'; player: number }
  | { kind: 'named'; mode: 'named'; player: number }
  | { kind: 'future'; player: number; cards: CardKey[] }
  | { kind: 'favorPick'; player: number }
  | { kind: 'favorGive'; player: number; actor: number }
  | { kind: 'swapPick'; player: number }
  | { kind: 'swapGive'; player: number; target: number }
  | { kind: 'reinsert'; player: number }
  | { kind: 'nameCard'; player: number; target: number };

// ───────── NopeState ─────────

export interface NopeState {
  open: boolean;
  actor: number;
  card: NopeEffect;
  stack: number;
  lastActor: number;
}

// ───────── GameState（映射原始 G 对象） ─────────

export interface GameState {
  players: Player[];
  draw: CardKey[];
  /** 联机脱敏状态使用；权威主机仍以 draw 数组为准 */
  drawCount?: number;
  remainingBombs?: number;
  discard: CardKey[];
  /** 疫苗使用后与已触发炸弹进入此区，永不参与弃牌重洗 */
  exile: CardKey[];
  turn: number;
  turnsLeft: number;
  pendingExtra: number;
  over: boolean;
  pending: PendingState | null;
  nope: NopeState | null;
  winner: number | null;
  log: LogEntry[];
  cfg: GameConfig;
  botActed: boolean;
}

// ───────── NetworkAction ─────────

export type NetworkAction =
  | { kind: 'nope' }
  | { kind: 'play'; cards: number[] }
  | { kind: 'draw' }
  | { kind: 'future_ack' }
  | { kind: 'reinsert'; where: 'top' | 'bottom' | 'rand' }
  | { kind: 'pickTarget'; target: number }
  | { kind: 'giveCard'; cardIndex: number }
  | { kind: 'nameCard'; card: CardKey };

/** Shared action name used by local controls and online messages. */
export type GameAction = NetworkAction;

// ───────── 网络通信 ─────────

export interface LobbyPlayer {
  name: string;
  isBot: boolean;
  connId: number | null;
}

export interface Lobby {
  code: string;
  players: LobbyPlayer[];
}

/** PeerJS 消息判别联合（7 种 t 类型） */
export type NetMessage =
  | { t: 'join'; name: string }
  | { t: 'welcome'; me: number; code: string }
  | { t: 'full' }
  | { t: 'lobby'; players: LobbyPlayer[]; code: string }
  | { t: 'start'; me: number }
  | { t: 'state'; G: GameState }
  | { t: 'input'; from: number; action: NetworkAction };

// ───────── 网络运行时状态 ─────────

/**
 * PeerJS 实例类型桩 — 避免在纯类型文件中引入运行时依赖。
 * 网络层 Hook 负责实际 PeerJS 实例管理与类型收窄。
 */
export interface PeerInstance {
  on(event: string, cb: (...args: unknown[]) => void): void;
  destroy(): void;
  connect(id: string, options?: unknown): unknown;
  [key: string]: unknown;
}

export interface DataConn {
  on(event: string, cb: (...args: unknown[]) => void): void;
  send(data: unknown): void;
  close(): void;
  [key: string]: unknown;
}

export interface ConnRecord {
  conn: DataConn;
  idx: number;
}

export type NetMode = 'local' | 'online';

export interface NetState {
  mode: NetMode;
  isHost: boolean;
  me: number;
  peer: PeerInstance | null;
  conns: ConnRecord[];
  hostConn: DataConn | null;
  room: string | null;
  started: boolean;
}

// ───────── UI 路由 ─────────

export type Screen =
  | 'menu' | 'rules' | 'online'
  | 'lobby' | 'join' | 'wait' | 'game';
