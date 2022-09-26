import React from "react";
import LoginLeft from "./LoginLeft";
import LoginRight from "./LoginRight";

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-evenly">
      <LoginLeft />
      <LoginRight />
    </div>
  );
};

export default Login;
