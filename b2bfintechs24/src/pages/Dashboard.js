import React from "react";

import { Box, Grid, Typography, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";
import OrderItem from "../components/OrderItem";

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
      <Grid item xs={12} md={12} lg={5}>
        <Stack spacing={4}>
          <SimplePaper height={300} />
          <ReturnsAwaiting />
        </Stack>
      </Grid>
      <Grid item xs={12} md={12} lg={7}>
        <Stack spacing={4}>
          <SimplePaper marginTop={5}>
            <SimplePaper height={250} padding={3} color="primary.light">
              <Box textAlign="center">
                <Typography gutterBottom variant="h4" color="primary.dark">
                  Deliviers En Route
                </Typography>
                <Typography variant="h2" color="primary.dark">
                  15
                </Typography>
              </Box>
            </SimplePaper>
            <DeliversEnroute />
          </SimplePaper>
          <SimplePaper height={450} />
        </Stack>
      </Grid>
    </Grid>
  );
};

const ReturnsAwaiting = () => {
  return (
    <SimplePaper height={400} color="#B9B9B9">
      <Stack spacing={2} width={500}>
        <Box sx={{ justifyItems: "center" }}>
          <Typography variant="h3">Returns Awaiting Review</Typography>
        </Box>
        {[236, 311, 298, 309, 312, 500, 412, 770].map((item) => {
          return <OrderItem orderNumber={item} />;
        })}
      </Stack>
    </SimplePaper>
  );
};

const DeliversEnroute = () => {
  return (
    <Box marginLeft={3}>
      <SimplePaper color="#B9B9B9">
        <Stack spacing={2}>
          {[236, 311, 298].map((item) => {
            return <OrderItem orderNumber={item} backgroundColor="#DEFFF5"/>;
          })}
        </Stack>
      </SimplePaper>
    </Box>
  );
};

export default Dashboard;
