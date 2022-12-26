const vertical = ["up", "down"];

export type Board = (number | null)[][];
export type Direction = "up" | "right" | "down" | "left";

export function move({
  winnerScore = 2048,
  board,
  direction,
}: {
  winnerScore?: number;
  board: Board;
  direction: Direction;
}) {
  let maxScore = 0;
  const nextState = [...Array(board.length)].map(() => Array(board.length));
  const lines = [];
  const prev = [];
  for (let index = 0; index < board.length; index++) {
    let line = [];
    let items = [];
    for (let count = 0; count < board.length; count++) {
      const next = vertical.includes(direction)
        ? board[count][index]
        : board[index][count];
      items.push(next);
      if (next !== null) {
        line.push(next);
      }
    }

    prev.push(items);

    const sum = [];
    const values: typeof board[0] = line.filter(Boolean);
    for (let count = 0; count < values.length; count++) {
      const current = values[count];
      const next = values[count + 1];
      if (current === next && current !== null && next !== null) {
        const nextValue = current + next;
        maxScore = Math.max(maxScore, nextValue);
        sum.push(nextValue);
        values[count] = null;
        values[count + 1] = null;
      } else if (current !== null) {
        sum.push(current);
      }
    }

    const boardSize = board[0].length - 1;
    const empty = new Array(
      Math.min(boardSize, boardSize - sum.length) + 1
    ).fill(null);

    const next = ["down", "right"].includes(direction)
      ? empty.concat(sum)
      : sum.concat(empty);

    lines.push(next);
    for (let count = 0; count < next.length; count++) {
      if (vertical.includes(direction)) {
        nextState[count][index] = next[count];
        continue;
      }
      nextState[index][count] = next[count];
    }
  }

  return {
    lines,
    prev,
    board: nextState,
    // isWinner: maxScore >= winnerScore,
    isWinner: true,
  };
}

export function randomize(board: Board, times: number = 1) {
  const hasEmptyValues = board.some((row) => row.some((item) => item === null));
  if (!hasEmptyValues) {
    return board;
  }

  let added = 0;
  while (added !== times) {
    const row = random(board.length);
    const index = random(board.length);
    if (board?.[row]?.[index] === null) {
      board[row][index] = 2;
      added++;
    }
  }

  return board;
}

const random = (value: number) => Math.round(Math.random() * value);
