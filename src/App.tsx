import React, { useEffect, useState } from "react";
import { Cell } from "./components/Cell";
import { Page } from "./components/Page";
import { Panel } from "./components/Panel";
import { Winner } from "./components/Winner";
import { Direction, move, randomize } from "./game";
import { globalStyles } from "./styles";

const DIRECTION: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

function App() {
  globalStyles();
  const [{ board, isWinner }, setState] = useState<
    Pick<ReturnType<typeof move>, "isWinner" | "board">
  >(() => ({
    isWinner: false,
    board: randomize(
      [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ],
      2
    ),
  }));

  useEffect(() => {
    const listener = async (event: HTMLElementEventMap["keydown"]) => {
      if (!Object.keys(DIRECTION).includes(event.key)) {
        return;
      }

      const result = move({ board, direction: DIRECTION[event.key] });
      setState({
        board: randomize(result.board, 1),
        isWinner: result.isWinner,
      });
    };

    document.body.addEventListener("keydown", listener);
    return () => document.body.removeEventListener("keydown", listener);
  }, [board]);

  return (
    <Page>
      {isWinner ? <Winner /> : null}
      <Panel>
        {board.flat(1).map((item, index) => (
          <Cell
            key={`${item}-${index}`}
            hasValue={Boolean(item)}
            {...(item === 2
              ? {
                  initial: { scale: 0 },
                  animate: { scale: 1 },
                  transition: {},
                }
              : {})}
            {...(item
              ? {
                  value: String(item) as React.ComponentProps<
                    typeof Cell
                  >["value"],
                }
              : {})}
          >
            {item}
          </Cell>
        ))}
      </Panel>
    </Page>
  );
}

export default App;
