import { Stack } from "@mui/material";
import { useState } from "react";
import { AssignContainerTitle, DoorBadge, DoorButton, DoorDuration, DoorTime, } from "../../styles/DoorStyles";




export default function LayoutStyled() {
  const [selectedDoor, setSelectedDoor] = useState<number | null>(null);

  // ✅ Example: first 10 active, last 7 inactive
  const doors = Array.from({ length: 17 }, (_, i) => ({
    id: i + 1,
    clock: "14:12:02",
    duration: "2H 38M",
    active: i < 10,
  }));

  return (
    <Stack>

     {/* ✅ Title */}
      <AssignContainerTitle variant="h6">
        Doors
      </AssignContainerTitle>
    <Stack spacing={5} mt={1}>
    <Stack
      direction="row"
      spacing={3}
      useFlexGap
      flexWrap="wrap"
      justifyContent="flex-start"
      >
        
   
      
      {doors.map((door) => (
        <Stack key={door.id} alignItems="center">
          <Stack position="relative" display="inline-flex">
            <DoorButton
              disabled={!door.active}
              className={selectedDoor === door.id ? "selected" : ""}
              onClick={() => setSelectedDoor(door.id)}
            >
              {door.id}
            </DoorButton>
            {door.active && <DoorBadge />}
          </Stack>

          {door.active && (
            <>
              <DoorTime>{door.clock}</DoorTime>
              <DoorDuration>{door.duration}</DoorDuration>
            </>
          )}
        </Stack>
      ))}
    </Stack>

   
      
      </Stack>
    </Stack>
  );
}
