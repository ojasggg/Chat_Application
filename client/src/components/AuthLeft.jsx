import React from "react";

// Import Logo
import Logo from "../assets/img/logo.png";

const AuthLeft = () => {
  return (
    <div className="flex-1 bg-blue-600/90 w-full">
      <div className="items-center m-3">
        <img src={Logo} alt="" />
      </div>
      <div className="flex flex-col gap-y-1 m-12 ml-24">
        <div className="mt-5 text-6xl font-bold max-w-[900px] leading-tight text-white/200">
          Let every conversation flow - without compromise
        </div>
        <div className="p text-xl max-w-[700px] leading-[25px] mt-4 text-white/60">
          Secure and compliant communications platform. Own your data, customize
          anything, integrate everything.
        </div>
      </div>
    </div>
  );
};

export default AuthLeft;
