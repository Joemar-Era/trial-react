import React from "react";
import { Modal, Typography, Button, Box } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Import styles
import {
  ModalContainer,
  ModalHeader,
  CloseButton,
  ModalFooter,
} from "../../styles/StyledReusableModal";

interface ReusableModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const ReusableModal: React.FC<ReusableModalProps> = ({
  open,
  onClose,
  title,
  children,
}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <ModalContainer>
        {/* Header */}
        <ModalHeader>
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", fontSize: "18px", color: "#003056" }}
          >
            {title}
          </Typography>
          <CloseButton onClick={onClose} aria-label="close">
            <CloseIcon />
          </CloseButton>
        </ModalHeader>

        {/* Body */}
        <Box flex={1}>{children}</Box>

        {/* Footer */}
        <ModalFooter>
          <Button
            variant="outlined"
            onClick={onClose}
            sx={{ borderColor: "#ccc", color: "#333" }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#003056",
              color: "#fff",
              "&:hover": { backgroundColor: "#005080" },
            }}
          >
            Save
          </Button>
        </ModalFooter>
      </ModalContainer>
    </Modal>
  );
};

export default ReusableModal;
