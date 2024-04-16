import React from "react";
import logoImage from '../logo.png';

import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Typography,
} from "@mui/material";

import { Link } from "react-router-dom";

const links = {
  Dashboard: "/",
  Issued: "/issued",
  "In-Transit": "/intransit",
  Received: "/received",
  Completed: "/completed",
  Profile: "/profile",
};

const NavigationBar = ({ width }) => {

  return (
      <List>
        <ListItem sx={{ marginTop: 2, marginBottom: 8, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Link to="/">
            <img
              src={logoImage}
              alt="Logo"
              style={{ width: 'auto', height: '40px' }} // Adjust the size as needed
            />
          </Link>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Kanit',
              fontWeight: 200,
              fontSize: '28px',
              color: 'white',
              marginLeft: '5px', // Add some space between the image and the text
            }}
          >
            ReClaim
          </Typography>
        </ListItem>
        {["Dashboard", "Issued", "In-Transit", "Received", "Completed", "Profile"].map(
          (item, index) => {
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
          }
        )}
      </List>
  );
};

export default NavigationBar;
