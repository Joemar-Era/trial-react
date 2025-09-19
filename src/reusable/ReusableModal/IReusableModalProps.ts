import type { DialogProps } from "@mui/material";
import type { ReactNode } from "react";


export interface IReusableModalProps extends DialogProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSave?: () => void;

  disable?: boolean;
  open: boolean;
  md?: number;
  sm?: number;
  xs?: number;
  xl?: number;
}

