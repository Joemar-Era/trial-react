import { styled } from "@mui/material/styles";
import { Box, IconButton, Slide, Stack, Typography } from "@mui/material";

{/* -----------------------------------------------------------------------------------Title header */}
export const TitleText = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontWeight: "bold",
}));

{/* -----------------------------------------------------------------------------------StyledStack for modal */}
export const StyledStack = styled(Stack)(({ theme }) => ({
  maxHeight: "95vh",
  transform: "translateX(-50%)",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "30px",
  boxShadow: theme.shadows[6],
  padding: theme.spacing(4),
  position: "relative",
  width: "90%", // default
  [theme.breakpoints.up("sm")]: { width: "70%" },
  [theme.breakpoints.up("md")]: { width: "60%" },
  [theme.breakpoints.up("xl")]: { width: "40%" },
}));

{/* ----------------------------------------------------------------------------------  Custom styled Slide (just adds styling, not behavior */}
export const StyledSlide = styled(Slide)(({ theme }) => ({
  // Example custom style (optional)
  "& .MuiPaper-root": {
    borderRadius: "16px",
    boxShadow: theme.shadows[6],
  },
}));

{/*------------------------------------------------------------------------------------ Wrapper for modal content to apply positioning */}
export const ScaledBox = styled(Box)<{ scale: number }>(({ theme, scale }) => ({
  transform: `scale(${scale})`,
  transformOrigin: "top center",
  display: "flex",
  justifyContent: "center", // Horizontal centering only (if needed)
  alignItems: "flex-start", // Align items to the top
  height: "100vh", // Full viewport height
  zIndex: 99999,
  paddingTop: "58px", // default (xs)

  [theme.breakpoints.up("sm")]: {
    paddingTop: "65px",
  },
  [theme.breakpoints.up("md")]: {
    paddingTop: "80px",
  },
  [theme.breakpoints.up("lg")]: {
    paddingTop: "7%",
  },
  [theme.breakpoints.up("xl")]: {
    paddingTop: "4.5%",
  },
}));

{/* ------------------------------------------------------------------------------------Modal Header Format */}
export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

{/* ----------------------------------------------------------------------------------- Clsoe icon format */}
export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "black",
  marginBottom: theme.spacing(1),
  "&:hover": {
    backgroundColor: "white",
    color: theme.palette.primary.main,
  },
}));

