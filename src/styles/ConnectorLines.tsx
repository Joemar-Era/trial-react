import { styled } from "@mui/material/styles";
import { Box, Button, type ButtonOwnProps } from "@mui/material";

{/* Custom border color for the button, fontcolor, backcolor */}
interface ParentQueButton extends ButtonOwnProps {    
  active?: boolean;      // new prop  
}

// ─── Connectors ──────────────────────────────────────────────
export const LConnector = styled(Box)(({ theme }) => ({
  width: 20,
  height: 30,
  borderLeft: `2px solid ${theme.palette.grey[400]}`,
  borderBottom: `2px solid ${theme.palette.grey[400]}`,
  marginBottom: theme.spacing(-4),
}));

export const RConnector = styled(Box)(({ theme }) => ({
  width: 20,
  height: 40,
  borderLeft: `2px solid ${theme.palette.grey[400]}`,
  borderBottom: `2px solid ${theme.palette.grey[400]}`,
  marginTop: theme.spacing(-2),
}));

// ─── Buttons ────────────────────────────────────────────────
export const ParentQueButton = styled(Button)(({ theme }) => ({
  width: 200,
  height: 37,
  borderRadius: 8,
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 550,
  fontSize: 13,
  color: "#130a8aff",
  marginTop: 10,
  position: "relative",
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",
  backgroundColor: "#fff",

  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-2px)",
  },
}));



export const ChildQueButton = styled(Button)(({ theme }) => ({
  width: 160,
  height: 30,
  borderRadius: 8,
  padding: theme.spacing(1, 3),
  textTransform: "none",
  fontWeight: 550,
  fontSize: 13,
  color: "#130a8aff",
  backgroundColor: "#dce5f3ff",
  boxShadow: theme.shadows[3],
  transition: "all 0.3s ease",
  marginRight: theme.spacing(-2),
  marginTop: theme.spacing(2),

  
  "&:hover": {
    boxShadow: theme.shadows[6],
    transform: "translateY(-2px)",
  },
}));

// ─── Badge ──────────────────────────────────────────────────
export const RedBadge = styled(Box)(() => ({
  position: "absolute",
  top: 3,
  right: -6,
  width: 16,
  height: 16,
  backgroundColor: "red",
  borderRadius: "50%",
  border: "2px solid white",
}));

// Black Badge (with number inside)
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
  borderRadius: 6, // slight rounded box
  position: "absolute",
  top: "35%", // adjust depending on parent
  right: -25, // adjust placement
}));