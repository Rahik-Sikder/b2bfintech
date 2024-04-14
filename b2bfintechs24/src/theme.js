import { createTheme } from "@mui/material";

const theme = createTheme({

    palette: {
        primary: {
            main: "#6100FF",
            light: "#EFE4FF",
            dark: "#260064",
            contrastText: "FFF"
        },
        secondary: {
            main: "#00FFB2",
            light: "#33FFC1",
            dark: "#00B27C",
            contrastText: "FFF"
        },
        dark_primary: {
            main: "#260064",
            contrastText: "FFF"
        },
        gray_paper: {
            main: "B9B9B9",
            contrastText: "000"
        },
        background: {
            default: "#F5F5F5"
        },
    },

    typography: {
        fontFamily: ["Rubik", "Kanit"],
        welcome: {
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: "4rem"
        },
        h1: {
            fontFamily: "Rubik",
            fontWeight: 400,
            fontSize: "3rem"
        },
        h3: {
            fontFamily: "Kanit",
            fontWeight: 200,
            fontSize: "2.25rem"
        },
        h4: {
            fontFamily: "Kanit",
            fontWeight: 200,
            fontSize: "2rem"
        },
        h5: {
            fontFamily: "Kanit",
            fontWeight: 200,
            fontSize: "1.25rem"
        },
        h6: {
            fontFamily: "Kanit",
            fontWeight: 300,
            fontSize: "1.40rem"
        }
    },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#FFF', // Set text color to white for buttons
                },
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: {
                    backgroundColor: "#260064",
                    color: "#FFF"
                }
            }
        },
    }
});


export default theme;
