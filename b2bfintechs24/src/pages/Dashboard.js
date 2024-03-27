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

const Dashboard = () => {
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
          <Container maxWidth="lg" sx={{ marginTop: 5 }}>
            <Grid container flex={1} alignItems="center" justifyContent="right">
              <Grid item xs={9}>
                <Typography variant="h1" color="primary.dark">
                  Dashboard
                </Typography>
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="primary" sx={{paddingX: 4}}>
                  Create New
                </Button>
              </Grid>
            </Grid>
          </Container>
          <MainContent />
        </Box>
      </Box>
    </div>
  );
};

const MainContent = () => {
  return (
    <Grid container sx={{marginTop: 2}} spacing={4}>
      <Grid item xs={5}>
        <Stack spacing={4}>
          <SimplePaper height={300}/>
          <SimplePaper height={200}/>
        </Stack>
      </Grid>
      <Grid item xs={7}>
      <Stack spacing={4}>
          <SimplePaper height={150}/>
          <SimplePaper height={350}/>
        </Stack>
      </Grid>
    </Grid>
  );
};

const SimplePaper = ({height}) => {
  return (
    <Paper
    sx={{
      height: height,
      maxWidth: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >

    </Paper>
  );
}

export default Dashboard;
