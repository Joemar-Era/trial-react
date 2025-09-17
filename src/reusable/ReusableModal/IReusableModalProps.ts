import type { DialogProps } from "@mui/material";
import type { ReactNode } from "react";


type Mode = "Create" | "Edit" | "Delete";




export interface IReusableModalProps extends DialogProps {
  title: string;
  children: ReactNode;
  onClose: () => void;
  onSave?: () => void;
  mode: Mode;
  disable?: boolean;
  open: boolean;
  md?: number;
  sm?: number;
  xs?: number;
  xl?: number;
}

