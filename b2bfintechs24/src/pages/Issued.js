import React from "react";

import { Typography, Box, Button, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";
import StyledTable from "../components/StyledTable";

const Issued = () => {
  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Issued
        </Typography>
      </Box>
      <Stack spacing={4} marginTop={5} position="relative">
        {/* Button */}
        <Button
          variant="contained"
          color="primary"
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            marginTop: "-30px",
            padding: "8px",
          }}
        >
          New
        </Button>
        {/* Spacer */}
        <Box height="40px" /> {/* Adjust height as needed */}
        {/* Table */}
        <Box border="1px solid #00B981" borderRadius="4px" overflow="hidden"> {/* Added overflow:hidden to prevent double border */}
          <StyledTable numRows={7} numColumns={5} />
        </Box>
        {/* Other components */}
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Issued;
