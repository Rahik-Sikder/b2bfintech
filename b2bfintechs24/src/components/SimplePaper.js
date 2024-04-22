import React from "react";
import { Paper } from "@mui/material";

const SimplePaper = ({
  height,
  color,
  padding = 5,
  children,
  justifyContent = "center",
  width,
  textColor,
  textAlign,
}) => {
  return (
    <Paper
      sx={{
        minHeight: height,
        minWidth: width,
        maxWidth: "100%",
        color: textColor,
        backgroundColor: color,
        padding: padding,
        display: "flex",
        justifyContent: justifyContent,
        alignItems: "center",
        textAlign: textAlign
      }}
    >
      {children}
    </Paper>
  );
};

export default SimplePaper;
