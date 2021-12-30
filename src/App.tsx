import { createStitches, globalCss } from "@stitches/react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Direction, move, randomize } from "./game";

const globalStyles = globalCss({
  "@import":
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
  "html,body,#root": {
    margin: 0,
    padding: 0,
    fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serifhtml, body',
  },
});

const DIRECTION: Record<string, Direction> = {
  ArrowUp: "up",
  ArrowDown: "down",
  ArrowLeft: "left",
  ArrowRight: "right",
};

const { styled } = createStitches({
  theme: {
    space: {
      small: "4px",
      medium: "6px",
    },
    colors: {
      background: "#bbac9f",
      backgroundAccent: "#ccc0b2",
    },
    radii: {
      small: "4px",
    },
  },
});

const Cell = styled(motion.div, {
  backgroundColor: "$backgroundAccent",
  fontSize: 18,
  width: 50,
  height: 50,
  fontWeight: 700,
  borderRadius: "$small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  variants: {
    hasValue: {
      true: {
        backgroundColor: "#aa60a6",
        color: "#f9f8f6",
      },
    },
    value: {
      2: {
        backgroundColor: "#eee4da",
        color: "#746b62",
      },
      4: {
        backgroundColor: "#eee1c9",
        color: "#776e65",
      },
      8: {
        backgroundColor: "#f3b27a",
        color: "#f9f6f2",
      },
      16: {
        color: "#f9f6f2",
        backgroundColor: "#f69664",
      },
      32: {
        color: "#f9f6f2",
        backgroundColor: "#f77c5f",
      },
      64: {
        color: "#f9f6f2",
        backgroundColor: "#f75f3b",
      },
      128: {
        color: "#f9f6f2",
        backgroundColor: "#edd073",
      },
      256: {
        color: "#f9f6f2",
        backgroundColor: "#edcc62",
      },
      512: {
        color: "#f9f6f2",
        backgroundColor: "#edc950",
      },
      1024: {
        color: "#f9f6f2",
        backgroundColor: "#edc53f",
      },
      2048: {
        color: "#f9f6f2",
        backgroundColor: "#edc22e",
      },
      4096: {
        backgroundColor: "#b784ab",
      },
    },
  },
  defaultVariants: {
    value: "default",
  },
});

const Panel = styled("div", {
  display: "grid",
  backgroundColor: "$background",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: "$small",
  padding: "$small",
  borderRadius: "$small",
});

const Page = styled("div", {
  display: "flex",
  width: "100vw",
  height: "100vh",
  justifyContent: "center",
  alignItems: "center",
});

function App() {
  globalStyles();
  const [board, setState] = useState(() =>
    randomize(
      [
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
        [null, null, null, null],
      ],
      2
    )
  );

  useEffect(() => {
    const listener = async (event: HTMLElementEventMap["keydown"]) => {
      if (!Object.keys(DIRECTION).includes(event.key)) {
        return;
      }

      const result = move({ board, direction: DIRECTION[event.key] });

      if (result.isWinner) {
        // Do something
      }

      setState(randomize(result.board, 1));
    };

    document.body.addEventListener("keydown", listener);
    return () => document.body.removeEventListener("keydown", listener);
  }, [board]);

  return (
    <Page>
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
