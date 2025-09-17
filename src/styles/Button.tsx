import { styled } from "@mui/material/styles";
import { Button, type ButtonOwnProps } from "@mui/material";

{/* Custom border color for the button, fontcolor, backcolor */}
interface CustomButtonProps extends ButtonOwnProps {    
  active?: boolean;      // new prop
  circleback?: string;   // circle background color
  circlecolor?: string;  // icon color inside circle
}



export const CustomButton = styled(Button, {
  shouldForwardProp: (prop) => !["active", "circleback"].includes(prop as string)
})<CustomButtonProps>(({ active, circleback}) => ({
  backgroundColor: active ? "#f8a34d" : "#ffffff",
  border: active ? "2px solid #ee8900" : "2px solid #e0e0e0",
  color: active ? "#ffffff" : "#003056",
  borderRadius: "4px",
  padding: "8px 24px",
  width: "250px",  
  textTransform: "none",
  boxShadow: "0px 5px 12px rgb(0, 0, 0, 0.38)",
  fontFamily: "Roboto, Arial, sans-serif",
  fontWeight: "bold",
  fontSize: "17px",
  display: "flex",
  justifyContent: "flex-start",
  textWrap: "nowrap",
  transition: "all 0.2s ease",

  "&:hover": {
    border: "2px solid #ee8900",
  },

  // 🔹 Circle for startIcon
  "& .MuiButton-startIcon": {
    marginRight: "10px",
    backgroundColor: circleback || "#f0f0f0",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "5px solid #ffba8b",
    color: "#003056",
    "& svg": {
      color: "#003056",
      fontSize: "30px",
    },
  },


  
}));
    
