import React, { useState } from "react";
import { Stack } from "@mui/material";
import { CustomButton } from "../styles/Button";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import ForkliftIcon from "@mui/icons-material/Forklift";
import DescriptionIcon from "@mui/icons-material/Description";

/**
 * MainPage - Demonstrates usage of the CustomButton
 *
 * - Active button is tracked in state
 * - Clicking a button highlights it (border, font, background)
 */

export default function MainPage() {
  const [activeButton, setActiveButton] = useState<number | null>(null);

  const buttons = [
    { id: 1, label: "Assign Container", icon: <LocalShippingIcon /> },
    { id: 2, label: "Movements", icon: <ForkliftIcon /> },
    { id: 3, label: "Asn", icon: <DescriptionIcon /> },
  ];

   // handle click: set active button (no toggle off)
  const handleClick = (id: number) => {
    setActiveButton(id);
  };

  return (
    <Stack spacing={2} marginTop={20}>
      {buttons.map(({ id, label, icon }) => (
        <CustomButton
          key={id}
          startIcon={icon}
          active={activeButton === id}   // ✅ only one condition
          onClick={() => handleClick(id)}
        >
          {label}
        </CustomButton>
      ))}
    </Stack>
  );
}
