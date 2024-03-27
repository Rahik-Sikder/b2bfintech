import React from "react";

import { Grid, Typography, Box, Container } from "@mui/material";

import NavigationBar from "../components/NavigationBar";

const drawerWidth = 200;

const Dashboard = () => {
  return (
    <div style={{ height: "100vh" }}>
      <Box sx={{ display: "flex" }}>
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 }, p:{sm:3}}}
        >
          <NavigationBar width={drawerWidth}/>
        </Box>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box paddingTop={5}>
                <Typography variant="h1" color="primary.dark" >Dashboard</Typography>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;
