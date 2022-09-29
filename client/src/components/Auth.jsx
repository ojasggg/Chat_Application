import React from "react";
import AuthLeft from "./AuthLeft";
import AuthRight from "./AuthRight";

const Auth = () => {
  return (
    <div className="w-full h-screen flex justify-evenly">
      <AuthLeft />
      <AuthRight />
    </div>
  );
};

export default Auth;
