import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({ height, children }) => {
  return (
    <Paper
      sx={{
        height: height,
        maxWidth: "100%",
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
