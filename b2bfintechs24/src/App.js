import { useState, React } from "react";

import { Route, Routes, Navigate } from "react-router-dom";

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
import Profile from "./pages/Profile";

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn} />
          }
        />
        <Route path="/login" element={<Login setLoggedIn={setLoggedIn} />} />
        <Route
          path="/issued"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Issued />
            </ProtectedRoute>
          }
        />
        <Route
          path="/intransit"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <InTransit />
            </ProtectedRoute>
          }
        />
        <Route
          path="/received"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Received />
            </ProtectedRoute>
          }
        />
        <Route
          path="/completed"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Completed />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Profile setLoggedIn={setLoggedIn} />
            </ProtectedRoute>
          }
        />
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

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    return <Navigate to={"/"} replace />;
  }
  return children;
};

export default App;
