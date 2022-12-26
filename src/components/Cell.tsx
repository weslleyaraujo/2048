import { motion } from "framer-motion";
import { styled } from "../styles";

export const Cell = styled(motion.div, {
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
