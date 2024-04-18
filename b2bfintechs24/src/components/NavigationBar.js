import React from "react";
import logoImage from "../logo.png";

import {
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import { Link, useNavigate } from "react-router-dom";

const links = {
  Dashboard: "/",
  Pending: "/pending",
  Delivery: "/delivery",
  Received: "/received",
  History: "/history",
  Profile: "/profile",
};

const useStyles = makeStyles({
  button: {
    textTransform: "none",
  },
});

const NavigationBar = ({ width }) => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleLogoPress = () => {
    navigate("/");
  };
  return (
    <List>
      <ListItem
        sx={{
          marginTop: 2,
          marginBottom: 8,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button className={classes.button} onClick={handleLogoPress}>
          <img
            src={logoImage}
            alt="Logo"
            style={{ width: "auto", height: "40px" }} // Adjust the size as needed
          />
          <Typography
            variant="h1"
            sx={{
              fontFamily: "Kanit",
              fontWeight: 200,
              fontSize: "28px",
              color: "white",
              marginLeft: "5px", // Add some space between the image and the text
            }}
          >
            ReClaim
          </Typography>
        </Button>
      </ListItem>
      {[
        "Dashboard",
        "Pending",
        "Delivery",
        "Received",
        "History",
        "Profile",
      ].map((item, index) => {
        return (
          <Link to={links[item]} style={{ textDecoration: "none" }} key={item}>
            <ListItemButton
              key={item}
              sx={{
                "&:hover": { backgroundColor: "primary.main" },
                marginTop: 1,
              }}
            >
              <ListItemText>
                <Typography variant="h5" flexGrow={1} color={"white"}>
                  {item}
                </Typography>
              </ListItemText>
            </ListItemButton>
          </Link>
        );
      })}
    </List>
  );
};

export default NavigationBar;
