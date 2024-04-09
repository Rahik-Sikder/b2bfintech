import React from "react";

import { Paper } from "@mui/material";

const SimplePaper = ({ height, color, padding = 5, children, justifyContent="center"  }) => {
  return (
    <Paper
      sx={{
        minHeight: height,
        maxWidth: "100%",
        backgroundColor: color,
        // justifyItems: "center",
        // alignItems: "center",
        padding: padding,
      }}
    >
      {children}
    </Paper>
  );
};

export default SimplePaper;
