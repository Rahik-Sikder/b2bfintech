import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const History = () => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Completed
        </Typography>
      </Box>
      <Stack spacing={4} marginY={5}>
        <SimplePaper height={600} />
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default History;
