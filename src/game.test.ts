import { move } from "./game";

const input = [
  [2, 4, 2, 2],
  [2, null, 2, null],
  [2, null, null, 2],
  [2, 4, null, null],
];

describe("game", () => {
  it("moves the board right", () => {
    const { board } = move({ direction: "right", board: input });
    expect(board).toStrictEqual([
      [null, 2, 4, 4],
      [null, null, null, 4],
      [null, null, null, 4],
      [null, null, 2, 4],
    ]);
  });

  it("moves the board left", () => {
    const { board } = move({ direction: "left", board: input });
    expect(board).toStrictEqual([
      [2, 4, 4, null],
      [4, null, null, null],
      [4, null, null, null],
      [2, 4, null, null],
    ]);
  });
  it("moves the board up", () => {
    const { board } = move({ direction: "up", board: input });
    expect(board).toStrictEqual([
      [4, 8, 4, 4],
      [4, null, null, null],
      [null, null, null, null],
      [null, null, null, null],
    ]);
  });

  it("moves the board down", () => {
    const { board } = move({ direction: "down", board: input });
    expect(board).toStrictEqual([
      [null, null, null, null],
      [null, null, null, null],
      [4, null, null, null],
      [4, 8, 4, 4],
    ]);
  });

  describe("when not reaching a winner position", () => {
    it("returns isWinner as false", () => {
      const { isWinner } = move({
        direction: "down",
        board: input,
        winnerScore: 2048,
      });
      expect(isWinner).toBe(false);
    });
  });

  describe("when reaching a winner position", () => {
    it("returns isWinner as true", () => {
      const { isWinner } = move({
        direction: "up",
        winnerScore: 2048,
        board: [
          [1024, null, null, null],
          [1024, null, null, null],
          [null, null, null, null],
          [null, null, null, null],
        ],
      });
      expect(isWinner).toBe(true);
    });
  });
});
