import { styled } from "@mui/material/styles";
import { Box, Button, Typography, type ButtonOwnProps } from "@mui/material";

//
// ─── INTERFACES ──────────────────────────────────────────────
//
interface ParentQueButtonProps extends ButtonOwnProps {
  active?: boolean; // custom prop to mark the button as active
}

//
// ─── CONNECTORS ──────────────────────────────────────────────
//

// Connector from parent down to the first child
export const ParentConnector = styled(Box)(({ theme }) => ({
  width: 20,
  height: 30,
  borderLeft: `2px solid ${theme.palette.grey[400]}`,
  borderBottom: `2px solid ${theme.palette.grey[400]}`,
  marginBottom: theme.spacing(-4),
}));

// Connector between siblings (child levels)
export const ChildConnector = styled(Box)(({ theme }) => ({
  width: 20,
  height: 46,
  borderLeft: `2px solid ${theme.palette.grey[400]}`,
  borderBottom: `2px solid ${theme.palette.grey[400]}`,
  marginTop: theme.spacing(-2),
  marginBottom: theme.spacing(),
}));

//
// ─── PARENT BUTTON ───────────────────────────────────────────
//
export const ParentQueButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active", // prevents invalid "active" prop on DOM
})<ParentQueButtonProps>(({ theme, active }) => ({
  width: 200,
  height: 37,
  borderRadius: 8,
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 550,
  fontSize: 13,
  marginTop: 10,
  position: "relative",
  justifyContent: "center",
  border: active ? "3px solid #f1ad4dff" : "#e6e6e6ff",

  // Dynamic styling depending on active state
  color: active ? "#fff" :"#130a8aff",
  backgroundColor: active ? "#ec8f32ff" : "#fff",
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-2px)",
    color: "#130a8aff", // keep text readable on hover
  },
}));

//
// ─── CHILD BUTTON ────────────────────────────────────────────
//
export const ChildQueButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(({ theme, active }) => ({
  width: 160,
  height: 30,
  borderRadius: 8,
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 550,
  fontSize: 13,
  marginRight: theme.spacing(-2),
  marginTop: theme.spacing(2),

  // Dynamic styling when active
  color: active ? "#fff" : "#130a8aff",
  backgroundColor: active ? "#139e38ff" : "#dce5f3ff",
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",
  border: active ? "3px solid #4cab54ff" : "#e6e6e6ff",

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-2px)",
    color: "#130a8aff",
  },
}));

//
// ─── BADGES ─────────────────────────────────────────────────
//

// Small red dot (e.g., unread indicator)
export const ParentRedBadge = styled(Box)(() => ({
  position: "absolute",
  top: 3,
  right: -6,
  width: 16,
  height: 16,
  backgroundColor: "red",
  borderRadius: "50%",
  border: "2px solid white",
}));

//------------------------ CHILD RED BADGE ------------------------
export const ChildRedBadge = styled(Box)(() => ({
  position: "absolute",
  top: 10,         // adjusted for smaller ChildQueButton (30px height)
  right: -20,       // aligned to right edge
  width: 12,       // slightly smaller than parent badge
  height: 12,
  backgroundColor: "red",
  borderRadius: "50%",
  border: "2px solid white",
}));

// Black rectangular badge with text/number inside
export const BlackBadge = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 22,
  height: 22,
  backgroundColor: "black",
  color: "white",
  fontSize: 12,
  fontWeight: "bold",
  borderRadius: 6,
  position: "absolute",
  top: "35%", // adjust depending on parent
  right: -25, // adjust placement
}));

//
// ─── END ICON (ROTATING ARROW) ──────────────────────────────
//
export const EndIcon = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active", // block "active" from leaking
})<{ active?: boolean }>(({ active }) => ({
  position: "absolute",
  right: 9, // distance from right edge
  top: "50%", // vertically center
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: 20,
  height: 20,
  color: "black",
  fontSize: 18,
  pointerEvents: "none", // clicks pass through to button

  // Rotate arrow when active
  transform: active
    ? "translateY(-50%) rotate(180deg)"
    : "translateY(-50%) rotate(0deg)",
  transition: "transform 0.3s ease",
}));

export const MyQueTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  color: "#130a8aff",
  textAlign: "center",   // center the title
  marginBottom: 2,       // spacing below the title
}));
