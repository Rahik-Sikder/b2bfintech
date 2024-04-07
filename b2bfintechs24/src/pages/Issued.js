import React from "react";

import { Typography, Container, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Issued = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h1" color="primary.dark">
          Issued
        </Typography>
      </Container>
      <Stack spacing={4} marginTop={5}>
        <SimplePaper height={300} />
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Issued;
