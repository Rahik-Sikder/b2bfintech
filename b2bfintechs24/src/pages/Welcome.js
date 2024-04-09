import React from "react";

import { Grid, Typography, Box, CssBaseline } from "@mui/material";

import LoginPanel from "../components/LoginPanel";
import SignUpPanel from "../components/SignUpPanel";

const firstSvgString = `
<svg width="943" height="487" viewBox="0 0 943 487" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M-25.9796 95.6966C93.5654 50.4626 454.01 65.2201 939.43 486.123L942.519 -102.928L-24.9117 -108L-25.9796 95.6966Z" fill="#EFE4FF"/>
  <path d="M0 66.6202C112.099 41.9407 450.837 48.8653 909 274V-43H0V66.6202Z" fill="#260064"/>
</svg>
`;

const secondSvgString = `
<svg width="862" height="746" viewBox="0 0 862 746" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M838.001 650.651C664.735 569.684 141.162 592.402 -567 1331.01V291.014H838.001V650.651Z" fill="#7825FF"/>
<path d="M803.826 568.395C683.944 516.077 321.688 530.757 -168.283 1008.01V336.014H803.826V568.395Z" fill="#EFE4FF"/>
<path d="M-250.24 848.504C758.483 102.601 250.65 763.607 854.107 430.647L593.04 4.4097e-06L-511.306 417.857L-250.24 848.504Z" fill="#260064"/>
</svg>
`;

const encodedFirstSvg = `url('data:image/svg+xml;base64,${btoa(
  unescape(encodeURIComponent(firstSvgString))
)}')`;
const encodedSecondSvg = `url('data:image/svg+xml;base64,${btoa(
  unescape(encodeURIComponent(secondSvgString))
)}')`;

const Welcome = ({ setLoggedIn }) => {
  const [notSignUp, setNotSignUp] = React.useState(true);

  return (
    <Box sx={{ display: "flex", height: "100vh", backgroundColor: "white" }}>
      <CssBaseline />
      <Grid container flex={1}>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            paddingY: 20,
            paddingX: 12,
            backgroundImage: `${encodedFirstSvg}, ${encodedSecondSvg}`,
            backgroundSize: "150%, 110%",
            backgroundPosition: "left -5%, left -15% bottom",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundColor: "#260064",
            height: "100vh",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Kanit",
              fontWeight: 200,
              fontSize: "96px",
              color: "white",
              justifyContent: "center",
              paddingLeft: "20%",
            }}
          >
            ReClaim
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{ marginY: "auto", paddingX: 20, backgroundColor: "white" }}
        >
            {notSignUp ? (
              <LoginPanel setLoggedIn={setLoggedIn} setIfLogin={setNotSignUp} />
            ) : (
              <SignUpPanel
                setLoggedIn={setLoggedIn}
                setIfLogin={setNotSignUp}
              />
            )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default Welcome;
