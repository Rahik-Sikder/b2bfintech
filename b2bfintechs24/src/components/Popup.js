import React from "react";
import { Box, Button, Typography } from "@mui/material";

const Popup = ({ width, height, orderNumber, onClose }) => {
    return (
        <Box
            sx={{
                position: "absolute",
                top: "20%", // Adjust as needed
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "white",
                width: width,
                height: height,
                borderRadius: 4,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: 2,
            }}
        >
            {/* Close button */}
            <Box
                sx={{
                    position: "absolute",
                    top: "5px",
                    right: "5px",
                }}
            >
                <Button onClick={onClose} sx={{ color: "purple" }}>X</Button>
            </Box>
            {/* Title */}
            <Typography variant="h2" color="text.primary" sx={{ fontFamily: "Rubik", fontSize: 48 }}>
                Order #{orderNumber}
            </Typography>
            {/* Additional content can be added here */}
        </Box>
    );
};

export default Popup;
