import { Stack } from "@mui/material";
import {

  BlackBadge,
  ChildQueButton,
  LConnector,
  ParentQueButton,
  RedBadge,

} from "../../styles/ConnectorLines";

export default function DemoTree() {
  return (
    
    <Stack alignItems="center">
       {/* Parent card with badge */}
      <Stack position="relative" display="inline-flex">
        <ParentQueButton >CON-TEST888</ParentQueButton>
        <RedBadge /> 
        <BlackBadge>1</BlackBadge>
      </Stack>

<Stack direction="row" alignItems="flex-start">
  {/* Stack for LConnector */}
  <Stack>
    <LConnector />
  </Stack>

  {/* Stack for ChildQueButton */}
  <Stack>
    <ChildQueButton>27743</ChildQueButton>
  </Stack>
</Stack>

<Stack direction="row" alignItems="flex-start">
  {/* Stack for LConnector */}
  <Stack>
    <LConnector />
  </Stack>

  {/* Stack for ChildQueButton */}
  <Stack>
    <ChildQueButton>27743</ChildQueButton>
  </Stack>
</Stack>




    </Stack>
  );
}