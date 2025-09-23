import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export const DoorButton = styled(Button)(() => ({
  width: 90,
  height: 55,
  minWidth: 0, // prevents MUI default minWidth
  borderRadius: 6,
  fontWeight: "bold",
  fontSize: 20,
  color: "#0a1a6a", // dark navy blue
  background: "linear-gradient(#d3d3d3, #c0c0c0)",

  border: "1px solid #a8a8a8ff",
boxShadow: `
  2px 2px 4px rgba(0,0,0,0.3),    /* ✅ outer scattered shadow */
  inset -2px -2px 2px #9c9c9cff,  /* top-left inner highlight */
  inset 2px 2px 5px #f9f9f9ff     /* bottom-right inner shadow */
`,
  "&:hover": {
    background: "linear-gradient(#c0c0c0, #a9a9a9)",
  },
}));