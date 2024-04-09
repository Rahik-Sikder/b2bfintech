import React from "react";

import { Typography, Box, Button, Stack } from "@mui/material";

import PageContainer from "../components/PageContainer";
import SimplePaper from "../components/SimplePaper";

import { getAuth } from "firebase/auth";

const Profile = ({ setLoggedIn }) => {
  const auth = getAuth();
  const user = auth.currentUser;
  const displayName = user.displayName;

  return (
    <PageContainer>
      <Box sx={{ marginTop: 5, paddingX: 4 }}>
        <Typography variant="h1" color="primary.dark">
          Profile
        </Typography>
        <Stack spacing={4} marginY={5}>
          <SimplePaper marginTop={5} justifyContent="left">
            <SimplePaper padding={3} color="primary.light">
              <Typography variant="h4" color="primary.dark">
                {displayName}
              </Typography>
            </SimplePaper>
          </SimplePaper>
          <SimplePaper marginTop={5}>
            <Button
              variant="contained"
              color="primary"
              sx={{ paddingX: 4 }}
              onClick={() => setLoggedIn(false)}
            >
              Logout
            </Button>
          </SimplePaper>
        </Stack>
      </Box>
    </PageContainer>
  );
};

export default Profile;
