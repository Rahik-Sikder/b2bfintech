import React from "react";

import { Paper } from "@mui/material";

const SimplePaper = ({ orderNumber, onConfirm, onReject }) => {
  return (
    <Paper
      sx={{
        height: 50,
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
