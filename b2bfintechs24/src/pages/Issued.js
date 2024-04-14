import React from "react";
import { Typography, Container, Stack, Button, Box } from "@mui/material";
import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";
import StyledTable from "../components/StyledTable";

const Issued = () => {
  return (
    <PageContainer>
      <Container maxWidth="lg" sx={{ marginTop: 5 }}>
        <Typography variant="h1" color="primary.dark">
          Issued
        </Typography>
      </Container>
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
        <StyledTable numRows={7} numColumns={5} />
        {/* Other components */}
        <SimplePaper height={200} />
      </Stack>
    </PageContainer>
  );
};

export default Issued;
