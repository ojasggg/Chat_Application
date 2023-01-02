import React from "react";
import { AuthLeft } from "../../components/Auth/AuthLeft";
import { AuthRightLogin } from "../../components/Auth/Login/AuthRightLogin";

export const Login = ({ setAuth }) => {
  return (
    <div className="flex justify-evenly h-full">
      <AuthLeft />
      <AuthRightLogin setAuth={setAuth} />
    </div>
  );
};
