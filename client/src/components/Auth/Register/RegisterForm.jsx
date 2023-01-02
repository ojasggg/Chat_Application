import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import Axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Import icons
import { BiEnvelopeOpen } from "react-icons/bi";
import { MdOutlinePassword, MdAlternateEmail } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";

const RegisterForm = () => {
  const [passwordType, setPasswordType] = useState("password");
  const [conformPasswordType, setConformPasswordType] = useState("password");

  const [user, setUser] = useState({
    username: undefined,
    email: undefined,
    password: undefined,
    conformPassword: undefined,
  });

  // Toggle Function to change input type
  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const toggleConformPasswordType = () => {
    if (conformPasswordType === "password") {
      setConformPasswordType("text");
      return;
    }
    setConformPasswordType("password");
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Function to change state
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (
        user.username === undefined ||
        user.email === undefined ||
        user.password === undefined ||
        user.conformPassword === undefined
      ) {
        console.log("Cannot leave input field empty.");
        toast.error("Cannot leave input fields empty.", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        return;
      }
      const newUser = await Axios.post(`/api/auth/register`, user);
      toast.success(newUser.data.message, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
      setTimeout(() => <Navigate replace to="/auth/login" />, 3000);
    } catch (error) {
      console.log(error.response.data.message);
      const errorMsg = error.response.data.message;
      const errorArr = errorMsg.split(",");
      for (let errors of errorArr) {
        toast.error(errors, {
          position: "bottom-right",
          pauseOnHover: false,
        });
      }
    }
  };
  return (
    <div className="flex flex-col w-[50%] m-auto lg:mt-[60px] xl:mt-[200px] h-full">
      <div className="text-3xl font-normal">Register</div>
      <form className="flex flex-col mt-10" onSubmit={handleRegister}>
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
              name="username"
              value={user.username}
              onChange={handleChange}
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
              name="email"
              value={user.email}
              onChange={handleChange}
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
              type={passwordType}
              placeholder="Enter Your Password"
              id="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            {passwordType && passwordType === "password" ? (
              <AiOutlineEyeInvisible
                className="text-2xl text-gray-600 cursor-pointer hover:text-gray-400 transition"
                onClick={togglePasswordType}
              />
            ) : (
              <AiOutlineEye
                className="text-2xl text-gray-600 cursor-pointer hover:text-gray-400 transition"
                onClick={togglePasswordType}
              />
            )}
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
              type={conformPasswordType}
              placeholder="Enter Your Conform Password"
              id="conform-password"
              name="conformPassword"
              value={user.conformPassword}
              onChange={handleChange}
            />
            {conformPasswordType && conformPasswordType === "password" ? (
              <AiOutlineEyeInvisible
                className="text-2xl text-gray-600 cursor-pointer hover:text-gray-400 transition"
                onClick={toggleConformPasswordType}
              />
            ) : (
              <AiOutlineEye
                className="text-2xl text-gray-600 cursor-pointer hover:text-gray-400 transition"
                onClick={toggleConformPasswordType}
              />
            )}
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
              to="/auth/login"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              Sign in
            </Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default RegisterForm;
