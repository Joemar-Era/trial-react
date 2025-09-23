import { Stack } from "@mui/material";
import { DoorButton } from "../../styles/DoorStyles";

export default function LayoutStyled() {
  const totalDoors = 17;
  const doors = Array.from({ length: totalDoors }, (_, i) => i + 1);

  // group into rows [6,6,5]
  const rowSizes = [10, 7];
  const rows: number[][] = [];
  let start = 0;

  rowSizes.forEach((size) => {
    rows.push(doors.slice(start, start + size));
    start += size;
  });

  return (
    <Stack spacing={2} alignItems="left">
      {rows.map((row, rowIndex) => (
        <Stack key={rowIndex} direction="row" spacing={2}>
          {row.map((num) => (
            <DoorButton key={num}>{num}</DoorButton>
          ))}
        </Stack>
      ))}
    </Stack>
  );
}
