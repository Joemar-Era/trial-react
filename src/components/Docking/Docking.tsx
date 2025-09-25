import { FormControl, MenuItem, RadioGroup, Stack } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";
import {
  AssignTeamDropDown,
  BlackRadio,
  ColorBox,
  CustomFromLabel,
  CustomMenuItem,
  DelegateButton,
  DisabledInput,
  DockingContainer,
  DockTitle,
  DropDown,
  FieldLabel,
  ResetButton,
} from "../../styles/DoorStyles";

export default function Docking() {
  return (
    <Stack alignContent="center">
      <DockingContainer alignItems="center">
        <DockTitle>Dock At Door 1</DockTitle>

        <Stack spacing={2}>
          {/* Container Number + ASN Type */}
          <Stack direction="row" spacing={3} alignItems="flex-start">
            <Stack>
              <FieldLabel>Container Number</FieldLabel>
              <DisabledInput fullWidth disabled value="CNT-123456" />
            </Stack>
            <FormControl>
              <RadioGroup defaultValue="Asn">
                {["Asn", "Transfer", "Rtv"].map(v => (
                  <CustomFromLabel key={v} value={v} control={<BlackRadio />} label={v} />
                ))}
              </RadioGroup>
            </FormControl>
          </Stack>

          {/* Assign Team + ASN Number */}
          <Stack direction="row" spacing={4}>
            <Stack flex={1}>
              <FieldLabel>Assign Team</FieldLabel>
              <AssignTeamDropDown fullWidth defaultValue="">
                {[
                  { v: "Peach", c: "#ffe5b4" },
                  { v: "Green", c: "green" },
                  { v: "Red", c: "red" },
                  { v: "Blue", c: "blue" },
                  { v: "Orange", c: "orange" },
                  { v: "Gray", c: "gray" },
                ].map(({ v, c }) => (
                  <MenuItem key={v} value={v}>
                    <ColorBox bgcolor={c} /> {v}
                  </MenuItem>
                ))}
              </AssignTeamDropDown>
            </Stack>
            <Stack flex={1}>
              <FieldLabel>ASN Number</FieldLabel>
              <DisabledInput fullWidth disabled value="ASN-TEST888" />
            </Stack>
          </Stack>

          {/* Assign Staging Area + Seal Number */}
          <Stack direction="row" spacing={4}>
            <Stack flex={1}>
              <FieldLabel>Assign Staging Area</FieldLabel>
              <DropDown fullWidth defaultValue="">
                {["111", "112", "113"].map(v => (
                  <CustomMenuItem key={v} value={`Stage ${v}`}>{v}</CustomMenuItem>
                ))}
              </DropDown>
            </Stack>
            <Stack flex={1}>
              <FieldLabel>Seal Number</FieldLabel>
              <DisabledInput fullWidth disabled value="SEAL-98765" />
            </Stack>
          </Stack>

          {/* Buttons */}
          <Stack direction="row" justifyContent="flex-end" spacing={2}>
            <ResetButton variant="outlined" startIcon={<ReplayIcon />}>Reset</ResetButton>
            <DelegateButton variant="contained">Delegate</DelegateButton>
          </Stack>
        </Stack>
      </DockingContainer>
    </Stack>
  );
}
