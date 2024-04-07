import React from "react";

import { Typography, Container, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Completed = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h1" color="primary.dark">
          Completed
        </Typography>
      </Container>
      <Stack spacing={4} marginY={5}>
        <SimplePaper height={600} />
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Completed;
