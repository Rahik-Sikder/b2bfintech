import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({ height, color, padding = 5, children, justifyContent="center", width  }) => {
  return (
    <Paper
      sx={{
        minHeight: height,
        minWidth: width,
        maxWidth: "100%",
        backgroundColor: color,
        padding: padding,
        display: "flex",
        justifyContent: justifyContent, 
        alignItems: "center",
      }}
    >
      {children}
    </Paper>
  );
};

export default SimplePaper;
