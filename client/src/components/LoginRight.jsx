import React from "react";

// Import icons
import { BiEnvelopeOpen } from "react-icons/bi";
import { MdOutlinePassword } from "react-icons/md";

const LoginRight = () => {
  return (
    <div className="flex-1">
      <div className="flex flex-col w-[50%] m-auto mt-[150px]">
        <div className="text-4xl font-normal">Log in</div>
        <form className="flex flex-col mt-10">
          <div className="flex flex-col">
            <label
              htmlFor="username"
              className="text-lg font-normal text-white"
            >
              Username
            </label>
            <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
              <BiEnvelopeOpen className="text-xl m-1" />
              <input
                className="input bg-transparent ml-2 placeholder:text-sm"
                type="text"
                placeholder="Enter Your Username"
                id="username"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label
              htmlFor="password"
              className="text-lg font-normal text-white"
            >
              Password
            </label>
            <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
              <MdOutlinePassword className="text-xl m-1" />
              <input
                className="input bg-transparent ml-2 placeholder:text-sm"
                type="text"
                placeholder="Enter Your Password"
                id="username"
              />
            </div>
          </div>
          <div className="mt-2 flex justify-end p text-[15px] hover:text-gray-500 transition">
            <a href="#">Forget Password ? </a>
          </div>
          <button className="flex justify-center max-w-[500px] bg-blue-600/100 rounded-xl p-3 mt-8 cursor-pointer hover:bg-blue-600/80 transition text-lg font-primary">
            Login
          </button>
          <div className="mt-2 flex justify-start p text-[15px]">
            Don't have an account?
            <span className="ml-1">
              <a
                href="#"
                className="text-blue-400 hover:text-blue-500 transition"
              >
                Sign up
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginRight;
