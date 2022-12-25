import React from "react";
import { AuthLeft } from "../components/AuthLeft";
import { AuthRightLogin } from "../components/AuthRightLogin";

export const Login = () => {
  return (
    <div className="flex justify-evenly h-full">
      <AuthLeft />
      <AuthRightLogin />
    </div>
  );
};
