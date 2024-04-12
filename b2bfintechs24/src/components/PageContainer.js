import React from "react";

import {
  Box,
} from "@mui/material";

import NavigationBar from "../components/NavigationBar";

const drawerWidth = 200;

const PageContainer = ({ children }) => {
  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          p: { sm: 3 },
        }}
      >
        <NavigationBar width={drawerWidth} />
      </Box>
      <Box
        component="main"
        flex
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingX: 4,
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default PageContainer;
