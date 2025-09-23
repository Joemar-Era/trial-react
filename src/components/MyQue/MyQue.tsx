import { Stack } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import {
  BlackBadge,
  ChildConnector,
  ChildQueButton,
  EndIcon,
  ParentConnector,
  ParentQueButton,
  MyQueTitle,
  ParentRedBadge,
  ChildRedBadge,
} from "../../styles/ConnectorLines";
import { useState } from "react";

interface ContainerProps {
conNum: number;
sKu: number;
doorID: number;
}

export default function MyQue({conNum,sKu}: ContainerProps) {
  //------------------------ STATE ------------------------
  const [activeParents, setActiveParents] = useState<number[]>([]);
  const [activeChild, setActiveChild] = useState<{ parentId: number; childIndex: number } | null>(null);

  //------------------------ TOGGLE HANDLERS ------------------------
  const toggleParent = (id: number) => {
    setActiveParents((prev) => {
      const isActive = prev.includes(id);

      if (isActive) {
        // 🔑 If parent is being closed, reset child if it belongs to this parent
        if (activeChild?.parentId === id) {
          setActiveChild(null);
        }
        return prev.filter((p) => p !== id);
      } else {
        return [...prev, id];
      }
    });
  };

  const toggleChild = (parentId: number, childIndex: number) => {
    setActiveChild((prev) =>
      prev && prev.parentId === parentId && prev.childIndex === childIndex
        ? null // unselect if clicked again
        : { parentId, childIndex }
    );
  };

  //------------------------ RENDER ------------------------
  return (
    <Stack alignItems="center" spacing={1}>
      {/* Section Title */}
      <MyQueTitle variant="h6">My Queue</MyQueTitle>

      {/* Parents List */}
      {[1, 2, 3].map((parentId) => {
        const isActive = activeParents.includes(parentId);

        return (
          <Stack key={parentId} alignItems="center">
            {/* Parent card with badge */}
            <Stack position="relative" display="inline-flex">
              <ParentQueButton
                active={isActive}
                onClick={() => toggleParent(parentId)}
                endIcon={
                  <EndIcon active={isActive}>
                    <ArrowDropDownIcon />
                  </EndIcon>
                }
              >
                {conNum}
              </ParentQueButton>
              <ParentRedBadge />
              <BlackBadge>1</BlackBadge>
            </Stack>

            {/* Children only visible when parent is active */}
            {isActive && (
              <>
                {[0, 1, 2, 3, 4, 5].map((i) => {
                  const childIsActive =
                    activeChild?.parentId === parentId && activeChild?.childIndex === i;

                  return (
                    <Stack key={i} direction="row" alignItems="flex-start">
                      {i === 0 ? <ParentConnector /> : <ChildConnector />}

                      {/* Child with RedBadge */}
                      <Stack position="relative" display="inline-flex">
                        <ChildQueButton
                          active={childIsActive}
                          onClick={() => toggleChild(parentId, i)}
                        >
                          {sKu}
                        </ChildQueButton>
                        <ChildRedBadge />
                      </Stack>
                    </Stack>
                  );
                })}
              </>
            )}
          </Stack>
        );
      })}
    </Stack>
  );
}
