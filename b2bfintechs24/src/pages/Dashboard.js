import React from "react";

import {
  Grid,
  Typography,
  Container,
  Button,
  Stack,
} from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Dashboard = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Grid container flex={1} alignItems="center" justifyContent="right">
          <Grid item xs={10}>
            <Typography variant="h1" color="primary.dark">
              Dashboard
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained" color="primary" sx={{ paddingX: 4 }}>
              Create New
            </Button>
          </Grid>
        </Grid>
      </Container>
      <MainContent />
    </PageContainer>
  );
};

const MainContent = () => {
  return (
    <Grid container sx={{ marginTop: 2 }} spacing={4}>
      <Grid item xs={5}>
        <Stack spacing={4}>
          <SimplePaper height={300} />
          <SimplePaper height={200} />
        </Stack>
      </Grid>
      <Grid item xs={7}>
        <Stack spacing={4}>
          <SimplePaper height={150} />
          <SimplePaper height={350} />
        </Stack>
      </Grid>
    </Grid>
  );
};



export default Dashboard;