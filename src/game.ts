const vertical = ["up", "down"];

export function move({
  winnerScore = 2048,
  board,
  direction,
}: {
  winnerScore?: number;
  board: (number | null)[][];
  direction: "up" | "right" | "down" | "left";
}) {
  let maxScore = 0;
  const nextState = [...Array(board.length)].map(() => [
    ...Array(board.length),
  ]);

  for (let index = 0; index < board.length; index++) {
    let line = [];
    for (let count = 0; count < board.length; count++) {
      const next = vertical.includes(direction)
        ? board[count][index]
        : board[index][count];
      if (next !== null) {
        line.push(next);
      }
    }

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

    const empty = new Array(Math.min(3, 3 - sum.length) + 1).fill(null);
    const next = ["down", "right"].includes(direction)
      ? empty.concat(sum)
      : sum.concat(empty);

    for (let count = 0; count < next.length; count++) {
      if (vertical.includes(direction)) {
        nextState[count][index] = next[count];
        continue;
      }
      nextState[index][count] = next[count];
    }
  }

  // const hasEmptyValues = nextState.some((row) =>
  //   row.some((item) => item === null)
  // );

  return {
    board: nextState,
    isWinner: maxScore >= winnerScore,
  };
}
