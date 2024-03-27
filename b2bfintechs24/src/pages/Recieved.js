import React from "react";

import { Grid, Typography, Container, Button, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Recieved = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h1" color="primary.dark">
          Recieved
        </Typography>
      </Container>
      <Stack spacing={4} marginY={5}>
        <SimplePaper height={200} />
        <SimplePaper height={500} />
      </Stack>
    </PageContainer>
  );
};

export default Recieved;
