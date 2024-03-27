import React from "react";

import { Route, Routes } from "react-router-dom";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import "./App.css";
import theme from "./theme";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Issued from "./pages/Issued";
import InTransit from "./pages/InTransit";
import Recieved from "./pages/Recieved";
import Completed from "./pages/Completed";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>

        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/issued" element={<Issued />} />
        <Route path="/intransit" element={<InTransit />} />
        <Route path="/recieved" element={<Recieved />} />
        <Route path="/completed" element={<Completed />} />

      </Routes>
    </ThemeProvider>
  );
}

export default App;
