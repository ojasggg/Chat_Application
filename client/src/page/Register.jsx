import React from "react";
import { AuthLeft } from "../components/AuthLeft";
import { AuthRightRegister } from "../components/AuthRightRegister";

export const Register = () => {
  return (
    <div className="flex justify-evenly h-full">
      <AuthLeft />
      <AuthRightRegister />
    </div>
  );
};
