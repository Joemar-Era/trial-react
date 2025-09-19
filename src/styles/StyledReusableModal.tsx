import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";

// Modal wrapper
export const ModalContainer = styled(Box)(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "400px",
  maxHeight: "90vh",
  backgroundColor: "#fff",
  borderRadius: "16px",
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.25)",
  padding: "24px",
  display: "flex",
  flexDirection: "column",
}));

// Header
export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "16px",
}));

// Close Button
export const CloseButton = styled(IconButton)(() => ({
  color: "#444",
  "&:hover": {
    backgroundColor: "#f0f0f0",
  },
}));

// Footer
export const ModalFooter = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  gap: "8px",
  marginTop: "24px",
}));
