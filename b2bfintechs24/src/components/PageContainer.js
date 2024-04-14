import React from "react";

import logoImage from '../logo.png';


import {
  Box,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import NavigationBar from "../components/NavigationBar";

const drawerWidth = 200;

const PageContainer = ({ children }) => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <AppBar
        position="fixed"
        sx={{
          display: { xs: "block", sm: "none" },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#260064",
                    color: "#FFF",
        }}
      >
        <Toolbar>
        <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          p: { sm: 3 },
        }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <NavigationBar width={drawerWidth} />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <NavigationBar width={drawerWidth} />
        </Drawer>
      </Box>
      <Box
        component="main"
        flex
        sx={{
          flexGrow: 1,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          paddingX: 4,
          paddingTop: {xs: 4, sm: 0},
        }}
      >
        {children}
        <Box sx={{marginTop:5, height:2}}>

        </Box>
      </Box>
    </Box>
  );
};

export default PageContainer;
