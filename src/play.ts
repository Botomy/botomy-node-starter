import { LevelData, Move, Position, SkillTypes } from "../lib/types";

function distSquaredTo(
  a: { x: number; y: number },
  b: { x: number; y: number }
): number {
  // c^2 = a^2 + b^2
  return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
}

function getClosestItem(position: Position, items: { position: Position }[]) {
  let minDist = Number.POSITIVE_INFINITY;
  let target: {
    position: { x: number; y: number };
    [key: string]: any;
  } | null = null;

  for (const item of items) {
    const dist = distSquaredTo(position, item.position);
    if (dist < minDist) {
      minDist = dist;
      target = item;
    }
  }
  return target;
}

function play(levelData: LevelData): Move[] {
  const moves: Move[] = [];
  const ownPlayer = levelData.own_player;
  const players = levelData.players;
  const items = levelData.items;

  // Build a list of potential targets (items, enemies, etc.)
  let potentialTargets = [...items, ...levelData.enemies];

  // Get the closest item to your own player's position
  const target = getClosestItem(ownPlayer.position, potentialTargets);

  if (target) {
    if (target.health !== undefined) {
      if (distSquaredTo(ownPlayer.position, target.position) < 15625) {
        moves.push("attack");
        moves.push("shield");
      }
    }
    moves.push({ move_to: target.position });
  } else {
    console.log("no target found");
  }

  if (ownPlayer.health / ownPlayer.max_health < 0.51) {
    // health is less than 50% so use the potion to heal
    moves.push({ use: "big_potion" });
  }

  if (ownPlayer.levelling.available_skill_points > 0) {
    // skill points available - level up
    let skill = (["attack", "health", "speed"] as SkillTypes[])[
      Math.floor(Math.random() * 3)
    ];
    moves.push({ redeem_skill_point: skill });
  }

  moves.push({ speak: "Hello Botomy!" });

  moves.push({
    debug_info: {
      target_id: target?.id,
      message: "oh hai",
    },
  });

  return moves;
}
export default play;
