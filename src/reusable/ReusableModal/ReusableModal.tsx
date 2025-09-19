import { Modal } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { IReusableModalProps } from "./IReusableModalProps";
import {CloseButton, ModalHeader, ScaledBox, StyledSlide, StyledStack, TitleText, ModalWrapper, StyledDivider } from "../../styles/ModalStyles";

function ReusableModal({ open, onClose, children, title }: IReusableModalProps) {
  return (
    <ModalWrapper>
      <Modal
        open={open}
        closeAfterTransition
        onClose={(_event, reason) => {
          if (reason !== "backdropClick" && reason !== "escapeKeyDown") onClose();
        }}
      >
        <ScaledBox>
          <StyledSlide direction="down" in={open} mountOnEnter unmountOnExit timeout={{ enter: 500, exit: 400 }}>
            <StyledStack>
              <ModalHeader>
                <TitleText>{title}</TitleText>
                <CloseButton onClick={onClose}><CloseIcon /></CloseButton>
              </ModalHeader>
              <StyledDivider />
              {children}
            </StyledStack>
          </StyledSlide>
        </ScaledBox>
      </Modal>
    </ModalWrapper>
  );
}

export default ReusableModal;