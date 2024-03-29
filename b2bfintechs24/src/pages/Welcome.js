import React from "react";

import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Stack,
  CssBaseline,
  TextField,
  Divider,
} from "@mui/material";

import {
  GoogleLoginIcon,
  AppleLoginIcon,
  FacebookLoginIcon,
} from "../components/Icons";

const Welcome = ({ setLoggedIn }) => {
  const onLoginPress = () => {
    setLoggedIn(true);
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <CssBaseline />
      <Grid container flex={1}>
        <Grid item xs={0} md={6}></Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ paddingY: 20, paddingX: 12, backgroundColor: "white" }}
        >
          <Container
            sx={{
              height: "100%",
              // backgroundColor: "gray",
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ justifyContent: "left" }}>
                <Typography variant="h1" color="primary.dark">
                  Welcome,
                </Typography>
              </Box>

              <Stack spacing={2}>
                <TextField
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                />
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                />
              </Stack>

              <Container>
                <Stack spacing={2}>
                  <Box>
                    <Divider>
                      <Typography variant="body" color="primary.dark">
                        or continue with
                      </Typography>
                    </Divider>
                    <Stack
                      direction="row"
                      spacing={1}
                      sx={{ display: "flex", justifyContent: "center" }}
                    >
                      <AppleLoginIcon />
                      <GoogleLoginIcon />
                      <FacebookLoginIcon />
                    </Stack>
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{ padding: 2, borderRadius: 10 }}
                    onClick={onLoginPress}
                  >
                    Login
                  </Button>
                </Stack>
              </Container>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
