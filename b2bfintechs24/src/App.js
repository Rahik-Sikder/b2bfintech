import { React } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Styling
import "./App.css";
import theme from "./theme";

// Pages
import Dashboard from "./pages/Dashboard";
import Issued from "./pages/Issued";
import InTransit from "./pages/InTransit";
import Received from "./pages/Received";
import Completed from "./pages/Completed";
import Welcome from "./pages/Welcome";
import Profile from "./pages/Profile";

// Hooks
// TODO: Needs encrypting once actual users are created
// Also can delete useBoolStorageState later, and verify logged in 
// by setting user with useStorageState and seeing if user == null
import { useBoolStorageState } from "./hooks/useStorageState";

function App() {

  const [isLoggedIn, setLoggedIn] = useBoolStorageState("isUserLoggedIn", false);

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
