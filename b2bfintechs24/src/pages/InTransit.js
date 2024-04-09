import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const InTransit = () => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          In-Transit
        </Typography>
      </Box>
      <Stack spacing={4} marginTop={5}>
        <SimplePaper height={200} />
        <SimplePaper height={400} />
      </Stack>
    </PageContainer>
  );
};

export default InTransit;
