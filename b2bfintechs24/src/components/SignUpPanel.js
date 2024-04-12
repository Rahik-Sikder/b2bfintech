import React from "react";

import {
  Link,
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

import { basicSignUp } from "../api/signup-api";

const SignUpPanel = ({ setLoggedIn, setIfLogin }) => {
  const [values, setValues] = React.useState({
    displayName: "",
    email: "",
    password: "",
    passwordConfrim: "",
  });

  const [errorMessage, setErrorMessage] = React.useState("");

  const handleName = (event) => {
    setValues({
      ...values,
      displayName: event.target.value,
    });
  };

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

  const handlePasswordConfirm = (event) => {
    setValues({
      ...values,
      passwordConfrim: event.target.value,
    });
  };

  const onButtonPress = () => {
    if (values.password !== values.passwordConfrim) {
      setErrorMessage("Please confirm password");
    } else {
      basicSignUp(values.displayName, values.email, values.password, setLoggedIn, setErrorMessage);
    }
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
            Sign up!
          </Typography>
        </Box>

        <Stack spacing={2}>
          <TextField
            id="outlined-basic"
            label="Display Name"
            variant="outlined"
            onChange={handleName}
          />
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
          <TextField
            id="outlined-basic"
            label="Re-enter Password"
            variant="outlined"
            onChange={handlePasswordConfirm}
          />
        </Stack>

        <Stack spacing={2}>
          <Box>
            <Divider>
              <Typography variant="body" color="primary.dark">
                or register with
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
            onClick={onButtonPress}
          >
            Create Account
          </Button>
          <Typography variant="body" color="red">
            {errorMessage}
          </Typography>
        </Stack>
        <Box sx={{ justifyContent: "center" }}>
          <Typography variant="body" color="primary.dark">
            Have an account?
            <Link onClick={() => setIfLogin(true)}> Login here! </Link>
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
};

export default SignUpPanel;
