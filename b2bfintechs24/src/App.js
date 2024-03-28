import { useState, React } from "react";

import { Route, Routes } from "react-router-dom";

import { CssBaseline, ThemeProvider } from "@mui/material";

import "./App.css";
import theme from "./theme";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Issued from "./pages/Issued";
import InTransit from "./pages/InTransit";
import Received from "./pages/Received";
import Completed from "./pages/Completed";
import Welcome from "./pages/Welcome";

function App() {


  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />} />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route path="/issued" element={<Issued />} />
        <Route path="/intransit" element={<InTransit />} />
        <Route path="/received" element={<Received />} />
        <Route path="/completed" element={<Completed />} />
      </Routes>
    </ThemeProvider>
  );
}

const HomePage = ({ isLoggedIn, setLoggedIn }) => {
  if (isLoggedIn) {
    return <Dashboard setLoggedIn={setLoggedIn} />;
  }
  return <Welcome setLoggedIn={setLoggedIn} />;
};

export default App;
