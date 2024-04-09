import React from "react";

import { Typography, Box, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

const Issued = () => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Issued
        </Typography>
      </Box>
      <Stack spacing={4} marginTop={5}>
        <SimplePaper height={300} />
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Issued;
