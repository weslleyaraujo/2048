import { styled } from "../styles";

const Wrapper = styled("div", {
  position: "fixed",
  left: 0,
  top: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Alert = styled("div", {
  backgroundColor: "white",
  minWidth: "20vw",
  minHeight: "10vh",
  borderRadius: "$small",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export function Winner() {
  return (
    <Wrapper>
      <Alert>
        <p>You won!</p>
      </Alert>
    </Wrapper>
  );
}
