import React from "react";

import { Typography, Container, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Received = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h1" color="primary.dark">
          Received
        </Typography>
      </Container>
      <Stack spacing={4} marginY={5}>
        <SimplePaper height={200} />
        <SimplePaper height={500} />
      </Stack>
    </PageContainer>
  );
};

export default Received;
