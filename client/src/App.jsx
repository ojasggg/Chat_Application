import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Import components
import { Register } from "./page/Register";
import { Home } from "./page/Home";
import { Login } from "./page/Login";

const App = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Routes>
      <Route
        index
        path="/"
        element={user ? <Home user={user} /> : <Navigate to="../login" />}
      />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={user ? <Navigate to="../" /> : <Login />} />
    </Routes>
  );
};

export default App;
