import React from "react";

// Import icons
import { BiEnvelopeOpen } from "react-icons/bi";
import { MdOutlinePassword, MdAlternateEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex flex-col w-[50%] m-auto lg:mt-[60px] xl:mt-[200px]">
      <div className="text-3xl font-normal">Register</div>
      <form className="flex flex-col mt-10">
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-normal text-white">
            Username
          </label>
          <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
            <BiEnvelopeOpen className="text-xl m-1" />
            <input
              className="input bg-transparent ml-2 placeholder:text-sm  w-full"
              type="text"
              placeholder="Enter Your Username"
              id="username"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="email" className="text-lg font-normal text-white">
            Email
          </label>
          <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
            <MdAlternateEmail className="text-xl m-1" />
            <input
              className="input bg-transparent ml-2 placeholder:text-sm  w-full"
              type="email"
              placeholder="abcd@email.com"
              id="email"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label htmlFor="password" className="text-lg font-normal text-white">
            Password
          </label>
          <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
            <MdOutlinePassword className="text-xl m-1" />
            <input
              className="input bg-transparent ml-2 placeholder:text-sm  w-full"
              type="password"
              placeholder="Enter Your Password"
              id="password"
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label
            htmlFor="conform-password"
            className="text-lg font-normal text-white"
          >
            Conform Password
          </label>
          <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
            <MdOutlinePassword className="text-xl m-1" />
            <input
              className="input bg-transparent ml-2 placeholder:text-sm w-full"
              type="password"
              placeholder="Enter Your Conform Password"
              id="conform-password"
            />
          </div>
        </div>
        <button
          className="flex justify-center max-w-[500px] bg-blue-600/100 rounded-xl p-3 mt-8 cursor-pointer hover:bg-blue-600/80 transition text-lg font-primary"
          type="submit"
        >
          Register
        </button>
        <div className="mt-2 flex justify-start p text-[15px]">
          Already have an account?
          <span className="ml-1">
            <Link
              to="/login"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              Sign in
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
};

export default Register;
