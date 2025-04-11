import { LevelData, Move } from "../lib/types";

function play(levelData: LevelData): Move[] {
  const moves: Move[] = [];
  const ownPlayer = levelData.own_player;
  const players = levelData.players;
  const items = levelData.items;
  const enemies = levelData.enemies;

  moves.push({ speak: "Hello Botomy!" });

  moves.push({
    debug_info: {
      message: "oh hai",
    },
  });

  return moves;
}
export default play;
