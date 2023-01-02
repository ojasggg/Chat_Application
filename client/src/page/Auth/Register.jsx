import React from "react";
import { AuthLeft } from "../../components/Auth/AuthLeft";
import { AuthRightRegister } from "../../components/Auth/Register/AuthRightRegister";

export const Register = () => {
  return (
    <div className="flex justify-evenly h-full">
      <AuthLeft />
      <AuthRightRegister />
    </div>
  );
};
