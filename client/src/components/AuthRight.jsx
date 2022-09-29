import React from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./Login";
import Register from "./Register";

const AuthRight = () => {
  return (
    <div className="flex-1">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      {/* <Register /> */}
    </div>
  );
};

export default AuthRight;
