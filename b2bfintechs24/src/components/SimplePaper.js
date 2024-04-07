import React from "react";

import { Paper } from "@mui/material";

const SimplePaper = ({ height, color, padding = 5, children }) => {
  return (
    <Paper
      sx={{
        height: height,
        maxWidth: "100%",
        display: "flex",
        backgroundColor: color,
        // justifyContent: "center",
        // alignItems: "center",
        padding: padding,
      }}
    >
      {children}
    </Paper>
  );
};

export default SimplePaper;
