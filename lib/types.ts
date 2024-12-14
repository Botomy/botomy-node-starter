export type GameObjectType = PlayerType | EnemyType | ItemType | HazardType;

export const ALL_ENEMIES = ["wolf", "ghoul", "minotaur", "tiny"] as const;
export type EnemyTuple = typeof ALL_ENEMIES;
export type EnemyType = EnemyTuple[number];

export type PlayerType = "player";

export type ItemType =
  | "big_potion"
  | "ring"
  | "speed_zapper"
  | "chest"
  | "coin"
  | "power_up";

export type PowerUpType = "freeze" | "bomb" | "shockwave";

export type HazardType = "bomb" | "icicle";

export type Position = {
  x: number;
  y: number;
};

export interface GameObject {
  id: string;
  position: Position;
  type: GameObjectType;
}

export interface Item extends GameObject {
  type: ItemType;
  position: Position;
  value: number;
}

export interface Character extends GameObject {
  attack_damage: number;
  direction: "right" | "left";
  health: number;
  is_attacking: boolean;
  is_frozen: boolean;
  is_pushed: boolean;
  is_zapped: boolean;
}

export interface Enemy extends Character {
  type: EnemyType;
  max_health: number;
}

export interface Collision {
  type: string;
  relative_position: Position;
}

export interface Player extends Character {
  type: PlayerType;
  display_name: string;
  is_dashing: boolean;
  is_zapping: boolean;
  levelling: {
    attack: number;
  };
  score: number;
  shield_raised: boolean;
  special_equipped: string;
  speech: string;
  unleashing_shockwave: boolean;
}

export interface OwnPlayer extends Player {
  collisions: Collision[];
  items: {
    big_potions: { value: number }[];
    speed_zappers: { duration: number; value: number }[];
    rings: { duration: number }[];
  };
  is_cloaked: boolean;
  is_colliding: boolean;
  is_dash_ready: boolean;
  is_shield_ready: boolean;
  is_special_ready: boolean;
  max_health: number;
  levelling: {
    level: number;
    available_skill_points: number;
    attack: number;
    speed: number;
    health: number;
  };
}

export interface Hazard extends GameObject {
  status: "idle" | "active" | "charging";
  type: HazardType;
  attack_damage: number;
}

export interface GameInfo {
  friendly_fire: boolean;
  game_type: string;
  map: string;
  match_id: string;
  state:
    | "WAITING"
    | "STARTING"
    | "STARTED"
    | "ENDING"
    | "ENDED"
    | "MATCH_COMPLETED";
  time_remaining_s: number;
}

export interface PlayerStat {
  id: string;
  score: number;
  kills: number;
  deaths: number;
  kd_ratio: number;
}

export interface LevelData {
  game_info: GameInfo;
  own_player: OwnPlayer;
  items: Item[];
  enemies: Enemy[];
  players: Player[];
  obstacles: Position[];
  hazards: Hazard[];
  stats: PlayerStat[];
}

export type Move =
  | "attack"
  | "special"
  | "dash"
  | { move_to: Position }
  | { speak: string }
  | { use: "ring" | "speed_zapper" | "big_potion" }
  | { redeem_skill_point: "attack" | "health" | "speed" };
