import React from "react";
import { Routes, Route } from "react-router-dom";

// Import components
import { Register } from "./page/Register";
import { Home } from "./page/Home";
import { Login } from "./page/Login";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
