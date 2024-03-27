import React from "react";
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
  "Dashboard" : "/",
  "Issued" : "/",
  "In-Transit" : "/",
  "Recieved" : "/",
  "Compelete" : "/"
}

const NavigationBar = ({ width }) => {
  const drawerStyles = {
    width: width,
  };

  return (
    <Drawer variant="permanent" PaperProps={{ style: drawerStyles }}>
      <List>
        <ListItem sx={{ marginTop: 2, marginBottom: 8 }}>
          <Link to="/">
            <Typography variant="h5" color="white" flexGrow={1}>
              LOGO HERE
            </Typography>
          </Link>
        </ListItem>
        {["Dashboard", "Issued", "In-Transit", "Recieved", "Completed"].map(
          (item, index) => {
            return (
              <ListItemButton
                key={item}
                sx={{
                  "&:hover": { backgroundColor: "primary.main" },
                  marginTop: 1,
                }}
              >
                <Link to={links[item]} style={{ textDecoration: 'none' }}>
                  <ListItemText>
                    <Typography variant="h5" flexGrow={1} color={"white"}>
                      {item}
                    </Typography>
                  </ListItemText>
                </Link>
              </ListItemButton>
            );
          }
        )}
      </List>
    </Drawer>
  );
};

export default NavigationBar;
