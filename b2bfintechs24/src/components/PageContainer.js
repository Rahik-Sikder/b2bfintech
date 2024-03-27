import React from "react";

import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Stack,
  Paper,
} from "@mui/material";

import NavigationBar from "../components/NavigationBar";

const drawerWidth = 200;

const PageContainer = ({ children }) => {
  return (
    <div style={{ height: "100vh" }}>
      <Box sx={{ display: "flex" }}>
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
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            paddingX: 4,
          }}
        >
          {children}
        </Box>
      </Box>
    </div>
  );
};

export default PageContainer;
