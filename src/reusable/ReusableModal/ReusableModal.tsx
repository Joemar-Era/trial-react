import {
  Box,
  Divider,
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import type { IReusableModalProps } from "./IReusableModalProps";
import { useEffect, useRef, useState } from "react";

function ReusableModal({
  open,
  onClose,
  children,
  title,
  sm,
  xs,
  md,
  xl,
}: IReusableModalProps) {
  const boxRef = useRef<HTMLDivElement | null>(null);
  const [scale, setScale] = useState(1);
  const [renderKey, setRenderKey] = useState(0);

  const adjustScale = () => {
    if (boxRef.current && boxRef.current.parentElement) {
      const parentHeight = window.innerHeight;
      const contentHeight = boxRef.current.scrollHeight;
      const scaleFactor = (parentHeight / contentHeight) * 0.95;

      if (scaleFactor < 1) {
        setScale(scaleFactor);
      } else {
        setScale(1); // Reset to original size if content fits
      }
    }
  };

  useEffect(() => {
    // Initial check
    adjustScale();
    // Listen for window resize events
    window.addEventListener("resize", adjustScale);

    // Clean up the event listener on unmount
    return () => window.removeEventListener("resize", adjustScale);
  }, [open, children, renderKey]);

  useEffect(() => {
    setRenderKey((prevKey) => prevKey + 1); // Increment key on each component update/save
  }, []);

  return (
    <div style={{ zIndex: 99999 }}>
      <Box>
        <Modal
          closeAfterTransition
          open={open}
          onClose={(_event, reason) => {
            if (reason !== "backdropClick" && reason !== "escapeKeyDown") {
              onClose();
            }
          }}
        >
          {/* Wrapper for modal content to apply positioning */}
          <Box
            ref={boxRef}
            sx={{
              transform: `scale(${scale})`,
              transformOrigin: "top center",
              display: "flex",
              justifyContent: "center", // Horizontal centering only (if needed)
              alignItems: "flex-start", // Align items to the top
              height: "100vh", // Take up the full height of the viewport
              paddingTop: {
                xs: "58px", // Small padding for extra small screens
                sm: "65px", // Slightly more padding for small screens
                md: "80px", // Medium padding for medium screens
                lg: "7%", // Larger padding for large screens
                xl: "4.5%", // Use percentage for extra large screens
              }, // Add the top margin (or padding) you want
              zIndex: 99999,
            }}
          >
            {/* Slide animation from top */}
            <Slide
              direction='down'
              in={open}
              mountOnEnter
              unmountOnExit
              timeout={{ enter: 500, exit: 400 }}
            >
              <Box
                sx={{
                  width: { xs: xs, sm: sm, md: md, xl: xl },
                  maxHeight: "95vh",
                  transform: "translateX(-50%)",
                  //maxWidth: "100vh",
                  bgcolor: "background.paper",
                  border: "0px solid #000",
                  borderRadius: "30px",
                  boxShadow: 24,
                  p: 4,
                  position: "relative",
                }}
              >
                {/* Modal Header */}
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography
                    variant='h6'
                    component='h2'
                    color='primary.main'
                    fontWeight='bold'
                  >
                    {title}
                  </Typography>
                  <IconButton
                    size='small'
                    onClick={onClose}
                    sx={{
                      color: "black",
                      "&:hover": {
                        backgroundColor: "white",
                        color: "primary.main",
                      },
                      mb: 1,
                    }}
                    aria-label='close'
                    color='info'
                  >
                    <CloseIcon />
                  </IconButton>
                </Box>

                <Divider sx={{ mb: 2, mt: 1 }} />

                {/* Modal Content */}
                {children}
              </Box>
            </Slide>
          </Box>
        </Modal>
      </Box>
    </div>
  );
}

export default ReusableModal;
