import { useState } from "react";
import { Button, Container, Stack } from "@mui/material";

import ReusableModal from "../reusable/ReusableModal/ReusableModal";
import { StyledTextfield } from "../styles/ModalStyles";

export default function LayoutStyled() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Button variant="contained" onClick={() => setIsModalOpen(true)}>Open Modal</Button>

      <ReusableModal open={isModalOpen} onClose={() => setIsModalOpen(false)} title="Enrollment - Team">
        <Stack direction={{ xs: "column", sm: "row" }} spacing={4} justifyContent="space-evenly">
          <Stack spacing={1} flex={1}>
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            
          </Stack>
          <Stack spacing={1} flex={1}>
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
            <StyledTextfield label="Team Name" placeholder="Input" variant="outlined"  />
          </Stack>
        </Stack>
      </ReusableModal>
    </Container>
  );
}