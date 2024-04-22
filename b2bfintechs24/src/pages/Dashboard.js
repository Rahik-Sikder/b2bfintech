import React, { useEffect, useState } from "react";

import { Box, Grid, Typography, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";
import OrderItem from "../components/OrderItem";
import {
  getDeliveryData,
  getPendingData,
  getRecievedData,
} from "../api/get-data";
import { BarChart, Bar } from "recharts";

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
  const [pending, setPending] = useState([]);
  const [deliveries, setDeliveries] = useState([]);
  const [received, setReceived] = useState([]);

  useEffect(() => {
    const getData = async () => {
      getDeliveryData(setDeliveries);
      getRecievedData(setReceived);
      getPendingData(setPending);
    };
    getData();
  });

  return (
    <Grid container sx={{ marginTop: 2 }} spacing={4}>
      <Grid item xs={12} md={12} lg={4}>
        <Stack spacing={4}>
          <SimplePaper height={300}>
            <PendingRequests pending={pending} />
          </SimplePaper>
          <ReturnsAwaiting received={received} />
        </Stack>
      </Grid>
      <Grid item xs={12} md={12} lg={8}>
        <Stack spacing={4}>
          <SimplePaper marginTop={5} padding={2}>
            <SimplePaper height={250} padding={3} color="primary.light">
              <Box textAlign="center">
                <Typography gutterBottom variant="h4" color="primary.dark">
                  Deliviers En Route
                </Typography>
                <Typography variant="h2" color="primary.dark">
                  {deliveries.length}
                </Typography>
              </Box>
            </SimplePaper>
            <DeliversEnroute deliveries={deliveries} />
          </SimplePaper>
          <SimplePaper height={450} />
        </Stack>
      </Grid>
    </Grid>
  );
};

const PendingRequests = ({ pending }) => {
  return (
    <Stack spacing={2} width={500}>
      <Box textAlign="center">
        <Typography gutterBottom variant="h4" color="primary.dark">
          Pending Requests
        </Typography>
        <Typography variant="h2" color="primary.dark">
          {pending.length}
        </Typography>

        <Typography variant="h5" color="primary.dark" marginY={2}>
          Frequent reasons for return:
        </Typography>

        <Box textAlign="left" sx={{ borderLeft: 2, paddingLeft: 2 }}>
          <Stack spacing={1}>
            <Box paddingRight={20}>
              <SimplePaper color="#00B981" textColor="white" padding={1}>
                "Damaged on arrival"
              </SimplePaper>
            </Box>
            <Box paddingRight={5}>
              <SimplePaper color="#00B981" textColor="white" padding={1}>
                "Color mismatch"
              </SimplePaper>
            </Box>
            <Box paddingRight={30}>
              <SimplePaper color="#00B981" textColor="white" padding={1}>
                "Missing Part"
              </SimplePaper>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Stack>
  );
};

const ReturnsAwaiting = ({ received }) => {
  return (
    <SimplePaper height={400} color="#B9B9B9" >
      <Stack spacing={2} width={500}>
        <Box sx={{ justifyItems: "center", textAlign: "center" }}>
          <Typography variant="h3">Returns Awaiting Review</Typography>
        </Box>
        {received.slice(0, 6).map((item) => {
          return <OrderItem orderNumber={item.id} />;
        })}
      </Stack>
    </SimplePaper>
  );
};

const DeliversEnroute = ({ deliveries }) => {
  return (
    <Box marginLeft={3}>
      <SimplePaper color="#B9B9B9">
        <Stack spacing={2}>
          {deliveries.slice(0, 3).map((item) => {
            return (
              <OrderItem orderNumber={item.id} backgroundColor="#DEFFF5" />
            );
          })}
        </Stack>
      </SimplePaper>
    </Box>
  );
};

export default Dashboard;
