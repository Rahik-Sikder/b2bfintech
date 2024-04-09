import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({ height, color, padding = 5, children, justifyContent="center"  }) => {
  return (
    <Paper
      sx={{
        minHeight: height,
        maxWidth: "100%",
        backgroundColor: color,
        padding: padding,
        display: "flex",
        justifyContent: "flex-start", // Changed from center to flex-start
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default SimplePaper;
