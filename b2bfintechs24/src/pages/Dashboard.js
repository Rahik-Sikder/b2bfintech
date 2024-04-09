import React from "react";

import { Box, Grid, Typography, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Dashboard = ({ setLoggedIn }) => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Dashboards
        </Typography>
      </Box>
      <MainContent />
    </PageContainer>
  );
};

const MainContent = () => {
  return (
    <Grid container sx={{ marginTop: 2 }} spacing={4}>
      <Grid item xs={12} md={5}>
        <Stack spacing={4}>
          <SimplePaper height={300} />
          <ReturnsAwaiting />
        </Stack>
      </Grid>
      <Grid item xs={12} md={7}>
        <Stack spacing={4}>
          <SimplePaper height={450} />
          <SimplePaper height={250} />
        </Stack>
      </Grid>
    </Grid>
  );
};

const ReturnsAwaiting = () => {
  return (
    <SimplePaper height={400}>
      <Typography variant="h3">Returns Awaiting Review</Typography>
    </SimplePaper>
  );
};

export default Dashboard;
