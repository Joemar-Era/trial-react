
import { Stack,     
 } from "@mui/material";
 import { StyledBox } from "../styles/Box"; // import your custom box
 import { CustomButton } from "../styles/Button"; // import your custom button

/**
 * MainPage - Demonstrates usage of the CustomButton
 *
 * - Active button is tracked in state
 * - Clicking a button highlights it (border, font, background)
 */

export default function DoorsButton() {
  

  return (
     <Stack spacing={2} marginTop={1}>
     <StyledBox>
        <Stack
          spacing={2}
          direction="row"
          style={{
            width: "100%",
            justifyContent: "center",
          }}
        >
          <CustomButton variant="contained" color="primary">
            Primary
          </CustomButton>
          <CustomButton variant="contained" color="secondary">
            Secondary
          </CustomButton>
          <CustomButton variant="contained" color="error">
            Error
          </CustomButton>
        </Stack>
      </StyledBox>      
    </Stack>
  );
}
