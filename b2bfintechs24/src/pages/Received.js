import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Received = () => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Received
        </Typography>
      </Box>
      <Stack spacing={4} marginY={5}>
        <SimplePaper height={200} />
        <SimplePaper height={500} />
      </Stack>
    </PageContainer>
  );
};

export default Received;
