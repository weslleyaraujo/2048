import { styled } from "../styles";

export const Panel = styled("div", {
  display: "grid",
  backgroundColor: "$background",
  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  gridGap: "$small",
  padding: "$small",
  borderRadius: "$small",
});
