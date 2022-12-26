import { createStitches, globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "@import":
    "https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&display=swap",
  "html,body,#root": {
    margin: 0,
    padding: 0,
    fontFamily: '"Open Sans", "Helvetica Neue", Arial, sans-serifhtml, body',
  },
});

export const { styled } = createStitches({
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
