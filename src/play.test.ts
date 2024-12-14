import { LevelData } from "../lib/types";
import play from "./play";

describe("play", () => {
  it("should return the default message when the level data is empty", () => {
    const testLevelData: LevelData = {
      items: [],
      enemies: [],
      players: [],
      own_player: {
        id: "player_1",
        display_name: "TestPlayer",
        direction: "left",
        attack_damage: 15,
        collisions: [],
        health: 100,
        max_health: 100,
        position: {
          x: 100,
          y: 200,
        },
        items: {
          big_potions: [],
          rings: [],
          speed_zappers: [],
        },
        is_attacking: false,
        is_cloaked: false,
        is_colliding: false,
        is_dash_ready: true,
        is_dashing: false,
        is_frozen: false,
        is_pushed: false,
        is_shield_ready: true,
        is_special_ready: true,
        is_zapped: false,
        is_zapping: false,
        shield_raised: false,
        special_equipped: "",
        speech: "",
        levelling: {
          attack: 1,
          health: 1,
          speed: 1,
          level: 1,
          available_skill_points: 0,
        },
        score: 0,
        unleashing_shockwave: false,
        type: "player",
      },
      hazards: [],
      game_info: {
        friendly_fire: false,
        game_type: "rpg",
        map: "basic",
        match_id: "test_id",
        state: "WAITING",
        time_remaining_s: 1800,
      },
      obstacles: [],
      stats: [],
    };
    const moves = play(testLevelData as LevelData);
    expect(moves).toEqual([{ speak: "hi" }]);
  });
});
