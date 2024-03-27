import React from "react";

import { Route, Routes } from "react-router-dom";

import {
  CssBaseline,
  ThemeProvider,
} from "@mui/material";

import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import "./App.css";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
