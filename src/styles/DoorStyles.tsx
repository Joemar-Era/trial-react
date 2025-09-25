// DoorStyles.tsx
// Centralized styled components for the Docking/Doors UI

import { Box, Button, Card, FormControlLabel, MenuItem, Radio, Select, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

/* ──────────────────────────────── */
/* 🚪 Door Section                  */
/* ──────────────────────────────── */

// ✅ Door button
export const DoorButton = styled(Button)(() => ({
  width: 90,
  height: 50,
  minWidth: 0,
  borderRadius: 6,
  fontWeight: "bold",
  fontSize: 30,
  color: "#0a1a6a",
  background: "linear-gradient(#ffffff, #f1f1f1)",
  border: "1px solid #d0d0d0",
  boxShadow: `
    1px 3px 6px rgba(0,0,0,0.25),
    inset -2px -2px 3px #848484ff,
    inset 2px 2px 5px #f9f9f9
  `,
  position: "relative",
  transition: "transform 0.2s ease, border 0.2s ease",

  // Hover effect (zoom + gradient)
  "&:hover": {
    transform: "scale(1.08)",
    background: "linear-gradient(#f5f5f5, #e0e0e0)",
  },

  // Disabled style (greyed-out button with inset shadow)
  "&.Mui-disabled": {
    background: "#C6C6C6",
    color: "#0a1a6a",
    boxShadow: `
      1px 5px 7px rgba(0,0,0,0.25),
      inset -3px -3px 6px #9c9c9c,
      inset 2px 2px 5px #e0e0e0
    `,
    transform: "none",
  },

  // Selected door highlight
  "&.selected": {
    
    transform: "scale(1.05)",
  },
}));

// ✅ Red badge on active door
export const DoorBadge = styled(Box)(() => ({
  width: 16,
  height: 16,
  borderRadius: "50%",
  backgroundColor: "red",
  position: "absolute",
  top: -6,
  right: -6,
  border: "3px solid white",
}));

// ✅ Clock text (door timer)
export const DoorTime = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: "bold",
  color: "black",
  marginTop: 4,
}));

// ✅ Duration text (door open time)
export const DoorDuration = styled(Typography)(() => ({
  fontSize: 12,
  fontWeight: "bold",
  color: "#34aadc",
}));

// ✅ Section Title (e.g., "Doors")
export const AssignContainerTitle = styled(Typography)(() => ({
  fontWeight: "bold",
  color: "#130a8aff",
  textAlign: "left",
}));

/* ──────────────────────────────── */
/* 📦 Docking Container Section     */
/* ──────────────────────────────── */

// ✅ Container (card-like look for Docking form)
export const DockingContainer = styled(Box)(() => ({
  padding: "25px 60px",
  borderRadius: "10px",
  background: "#ffffff",
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
  maxWidth: "900px",
  margin: "0 auto",
}));

// ✅ Dock Title (card-style title)
export const DockTitle = styled(Card)(() => ({
  backgroundColor: "#0a1a6a",
  color: "#fff",
  borderRadius: "8px",
  fontWeight: "bold",
  fontFamily: "Roboto, Arial, sans-serif",
  width: "190px",
  height: "35px",
  marginBottom: "15px",
  textAlign: "center",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  paddingTop: "15px", // ⬇️ moves content downward
}));

// ✅ Field Label (for form fields)
export const FieldLabel = styled(Typography)(() => ({
  fontSize: "22px",
  marginBottom: "6px",
  color: "#0a1a6a",
  fontFamily: "Roboto, Arial, sans-serif",
}));

/* ──────────────────────────────── */
/* 📝 Form Inputs                   */
/* ──────────────────────────────── */

// ✅ Disabled Input with inner shadow
export const DisabledInput = styled(TextField)(() => ({  
  width: 310,
  "& .MuiInputBase-root": {
    backgroundColor: "#d3d3d3",
    borderRadius: "12px",
    height: "57px",
    boxShadow: "inset 0 3px 3px #fff, inset 0 -2px 4px rgba(0,0,0,0.2)", // bevel shadow
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #b0b0b0",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    textAlign: "center",
    fontSize: "20px",
    fontWeight: "bold",
    color: "#555",
    padding: 0,
    lineHeight: "44px",
    height: "100%",
    boxSizing: "border-box",
  },
}));

// ✅ Standard Dropdown (staging area) with outside shadow
export const DropDown = styled(Select)(() => ({
  width: 310,
  textAlign: "center",
  borderRadius: "12px",
  fontSize: "20px",
  fontWeight: "bold",
  backgroundColor: "#fff",
  boxShadow: "0px 3px 4px rgba(0,0,0,0.15)", // ✅ outside shadow

  "& .MuiOutlinedInput-notchedOutline": {
    border: "1px solid #d0d0d0ff",
  },

  "& .MuiSelect-select": {
    padding: "14px 12px", // keep consistent height
  },

  // ✅ Hover effect
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0,0,0,0.2)",
  },

  // ✅ Focus effect
  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#0068C4",
    borderWidth: "2px",
  },
}));

// ✅ Assign Team Dropdown (with custom color box)
export const AssignTeamDropDown = styled(Select)(() => ({
  background: "#fff",
  borderRadius: "12px",
  fontSize: 20,
  height: 59,
  width: 310,
  fontWeight: "bold",
  boxShadow: "0px 3px 4px rgba(0,0,0,0.15)", // ✅ outside shadow
  "& .MuiSelect-select": {
    display: "flex",
    justifyContent: "left",
    alignItems: "left",
  },
}));

// ✅ Small color square inside dropdown
export const ColorBox = styled(Box)<{ bgcolor: string }>(({ bgcolor }) => ({
  width: 40,
  height: 25,
  borderRadius: 2,
  marginRight: 70,
  backgroundColor: bgcolor,
  border: "1px solid rgba(0,0,0,0.2)",
}));

/* ──────────────────────────────── */
/* 🎛 Controls (Buttons, Radios)    */
/* ──────────────────────────────── */

// ✅ Reset button (outlined style)
export const ResetButton = styled(Button)(() => ({
  fontSize: 16,
  borderRadius: "8px",
  padding: "10px 35px",
  border: "1px solid #c0c0c0",
  fontWeight: "bold",
  color: "#0a1a6a",
  boxShadow: "0px 3px 4px rgba(0,0,0,0.15)", // ✅ outside shadow
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

// ✅ Delegate button (filled style)
export const DelegateButton = styled(Button)(() => ({
  fontSize: 16,
  backgroundColor: "#0a1a6a",
  borderRadius: "8px",
  padding: "8px 30px",
  fontWeight: "bold",
  boxShadow: "0px 4px 6px rgba(0,0,0,0.2)",
  "&:hover": {
    backgroundColor: "#ffffff",
    color: "#0a1a6a",
  },
}));

// ✅ Black Radio button (larger circle)
export const BlackRadio = styled(Radio)(() => ({
  marginTop: -3,
  color: "#474747",
  "&.Mui-checked": {
    color: "#474747",
  },
  "& .MuiSvgIcon-root": {
    fontSize: 25, // Bigger circle size
  },
}));

// ✅ FormControlLabel with larger text
export const CustomFromLabel = styled(FormControlLabel)(() => ({
  "& .MuiFormControlLabel-label": {
    fontSize: "24px",
    color: "#474747",
  },
}));

export const CustomMenuItem = styled(MenuItem)(() => ({
  justifyContent: "center", // ✅ center menu text
  textAlign: "center",
}));
