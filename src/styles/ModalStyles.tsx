import { styled } from "@mui/material/styles";
import { Box, Divider, IconButton, Slide, Stack, TextField, Typography } from "@mui/material";

{/* -----------------------------------------------------------------------------------Modal Title */}
export const TitleText = styled(Typography)(() => ({
  color: "#003056",
  fontWeight: "bold",  
}));

{/* -----------------------------------------------------------------------------------Modal Stack */}
export const StyledStack = styled(Stack)(({ theme }) => ({
  flexDirection: "column", 
  gap: theme.spacing(2),  
  alignItems: "stretch", 
  maxHeight: "50vh",
  backgroundColor: theme.palette.background.paper,
  borderRadius: "22px",
  boxShadow: theme.shadows[2],
  padding: theme.spacing(2),
  position: "relative",
  width: "60%",
  border: "5px solid #e8e7e9", // 👇 Border color here
  [theme.breakpoints.up("sm")]: { width: "70%" },
  [theme.breakpoints.up("md")]: { width: "55%" },
  [theme.breakpoints.up("xl")]: { width: "28%" },
}));

{/* ----------------------------------------------------------------------------------  Modal Transition */}
export const StyledSlide = styled(Slide)(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "16px",
    boxShadow: theme.shadows[6],
  },
}));

{/*------------------------------------------------------------------------------------ Modal Content Positioning */}
export const ScaledBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  height: "100vh",
  paddingTop: theme.spacing(20),
  zIndex: 99999,
  "& > *": {
    maxHeight: "95vh",
    transformOrigin: "top center",
    transform: "scale(0.95)", // fixed scale (no resize listener)
  },
}));

{/* ------------------------------------------------------------------------------------Modal Header */}
export const ModalHeader = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "2px",     
  marginBottom: "2px",  
}));

{/* ----------------------------------------------------------------------------------- Modal Close Icon */}
export const CloseButton = styled(IconButton)(({ theme }) => ({
  color: "#A6A6A6",
  marginBottom: theme.spacing(1),
  "&:hover": {
    backgroundColor: "#F2F2F2",
    color: "#A6A6A6",
  },
}));

{/* ----------------------------------------------------------------------------------- Modal Wrapper */}
export const ModalWrapper = styled(Stack)(() => ({

  position: "relative",
}));

{/* ----------------------------------------------------------------------------------- Modal Divider */}
export const StyledDivider = styled(Divider)(() => ({}));

{/* ----------------------------------------------------------------------------------- Custom TextField */}
export const StyledTextfield = styled(TextField)(({theme}) => ({
  fontSize: theme.typography.fontSize, // use theme-defined font size
  fontWeight: "bold", // directly assign bold

  
  "& .MuiOutlinedInput-root": {
    borderRadius: "10px",
    "& fieldset": {
      borderColor: "#d1d1d1ff", // default border
      height: "46px",
      width: "fit-content, min-content",
      boxShadow: theme.shadows[2], // 👈 small shadow
      
    },
    "&:hover fieldset": {
      
       // 👈 stronger shadow on hover // hover border color
    },
    "&.Mui-focused fieldset": {
       // active border color
      borderWidth: 2,
      
      
    },
  },
  "& .MuiInputLabel-root": {
    color: "#6D6C70", // label color
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#A2A1A6", // label color when focused
  },
}));

{/* ----------------------------------------------------------------------------------- Responsive Stack for Modal Content */}
export const ResponsiveStack = styled(Stack)(({ theme }) => ({
  width: "100%", // default xs full width
  [theme.breakpoints.up("sm")]: {
    width: "50%", // sm and above = half width
  },
}));