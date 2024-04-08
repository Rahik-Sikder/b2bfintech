import React from "react";

import {
  Grid,
  Typography,
  Box,
  Container,
  Button,
  Stack,
  TextField,
  Divider,
} from "@mui/material";

import {
  GoogleLoginIcon,
  AppleLoginIcon,
  FacebookLoginIcon,
} from "../components/Icons";
import { basicSignIn } from "../api/login-api";
import { Link } from "react-router-dom";

const LoginPanel = ({ setLoggedIn, setIfLogin }) => {
  const [values, setValues] = React.useState({
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleEmail = (event) => {
    setValues({
      ...values,
      email: event.target.value,
    });
  };

  const handlePassword = (event) => {
    setValues({
      ...values,
      password: event.target.value,
    });
  };

  const onLoginPress = () => {
    basicSignIn(values.email, values.password, setLoggedIn, setErrorMessage);
  };

  return (
    <Container
      sx={{
        height: "100%",
        // backgroundColor: "gray",
        marginY: "auto",
        alignItems: "center",
      }}
    >
      <Stack spacing={4}>
        <Box sx={{ justifyContent: "left" }}>
          <Typography variant="welcome" color="primary.dark">
            Welcome,
          </Typography>
        </Box>

        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            onChange={handleEmail}
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            onChange={handlePassword}
          />
        </Stack>

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
          <Typography variant="body" color="red">
            {errorMessage}
          </Typography>
        </Stack>
        <Box sx={{ justifyContent: "center" }}>
          <Typography variant="body" color="primary.dark">
            Don't have an account? <Link color="primary" onClick={()=> setIfLogin(false)} > Sign up here! </Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default LoginPanel;
