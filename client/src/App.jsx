import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import components
import { Register } from "./page/Auth/Register";
import { Home } from "./page/Chat/Chat";
import { Login } from "./page/Auth/Login";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => JSON.parse(localStorage.getItem("user")) || false
  );
  const setAuth = (value) => {
    setIsAuthenticated(value);
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(isAuthenticated));
  }, [isAuthenticated]);
  return (
    <Routes>
      <Route
        path="/chat"
        element={
          isAuthenticated ? (
            <Home user={isAuthenticated} />
          ) : (
            <Navigate replace to="/auth/login" />
          )
        }
      />
      <Route path="/auth">
        <Route index element={<Login setAuth={setAuth} />}></Route>
        <Route path="login" element={<Login setAuth={setAuth} />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
