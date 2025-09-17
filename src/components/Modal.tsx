import React from "react";
import { Stack, Box, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Components
const Header = styled(Box)(() => ({
  backgroundColor: "white",
  color: "#003056",
  padding: "20px 15px",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif", // small typo: "Roboto"
  fontWeight: 15000, // number (not "px")
  fontSize: "100px",
}));

const Container = styled(Stack)(({ theme }) => ({
  gap: theme.spacing(2),
}));

const BottomRow = styled(Stack)(({ theme }) => ({
  flexDirection: "row",
  gap: theme.spacing(2),
}));

const Section = styled(Stack)(({ theme }) => ({
  flex: 1,
  gap: theme.spacing(1),
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(2),
  borderRadius: theme.shape.borderRadius,
}));

export default function LayoutStyled() {
  return (
    <Container>
      {/* Header */}
      <Header>
        <Typography variant="h6">Enrollment - Team</Typography>
      </Header>

      {/* Bottom: Two side-by-side stacks */}
      <BottomRow>
        <Section>
          <Typography>Stack 1</Typography>
          <Button variant="contained">Button 1</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
        </Section>

        <Section>
          <Typography>Stack 2</Typography>
          <Button variant="outlined">Button A</Button>
          <Button variant="outlined">Button B</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
          <Button variant="contained">Button 2</Button>
        </Section>
      </BottomRow>
    </Container>
  );
}
