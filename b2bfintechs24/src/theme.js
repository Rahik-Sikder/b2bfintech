import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: "#6100FF",
            light: "#8033FF",
            dark: "#260064",
            contrastText: "FFF"
        },
        secondary: {
            main: "#00FFB2",
            light: "#33FFC1",
            dark: "#00B27C",
            contrastText: "FFF"
        }
    },

    typography: {
        fontFamily: ["Rubik", "Kanit"],
        h1: {
            fontFamily: "Rubik",
            fontWeight: 300,
            fontSize: "4rem"
        },
        h5: {
            fontFamily: "Kanit",
            fontWeight: 200,
            fontSize: "1.25rem"
        }
    },

    components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: "#260064",
              color: "#FFF"
            }
          }
        }
      }
});


export default theme;
