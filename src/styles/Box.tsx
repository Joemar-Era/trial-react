import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// 🔹 Reusable styled Box
export const StyledBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center", // center children horizontally
  alignItems: "center",     // center children vertically
  height: "600px",
  backgroundColor: "skyblue",
  width: "80%",
  maxWidth: "2000px",
  margin: "0 auto",         // center the box itself
  borderRadius: "8px",      // optional: rounded corners
  boxShadow: "0px 5px 15px rgba(0,0,0,0.2)", // optional shadow
}));
