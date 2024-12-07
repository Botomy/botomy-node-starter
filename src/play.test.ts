import play from "./play";

describe("play", () => {
  it("should return the default message when the level data is empty", () => {
    const testLevelData = {
      items: [],
      enemies: [],
      players: [],
      own_player: {
        levelling: {},
      },
    };
    const moves = play(testLevelData);
    expect(moves).toEqual([{ speak: "hi" }]);
  });
});
