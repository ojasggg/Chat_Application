import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Axios from "axios";

// Import icons
import { BiEnvelopeOpen } from "react-icons/bi";
import { MdOutlinePassword } from "react-icons/md";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";

const LoginForm = () => {
  const [username, setUsername] = useState(undefined);
  const [password, setPassword] = useState(undefined);
  const [passwordType, setPasswordType] = useState("password");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      if (username === undefined || password === undefined) {
        toast.error("Please fillout every input field", {
          position: "bottom-right",
          autoClose: 3000,
          pauseOnHover: false,
        });
        return;
      }
      const user = await Axios.post(
        `/api/auth/login`,
        { username, password },
        { withCredentials: true }
      );
      // console.log(user.data);
      localStorage.setItem("user", JSON.stringify(user.data));
      toast.success("User Logged in", {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message, {
        position: "bottom-right",
        autoClose: 3000,
        pauseOnHover: false,
      });
    }
  };

  // Password visible function
  const togglePasswordType = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };
  return (
    <div className="flex flex-col w-[50%] m-auto mt-[150px] h-full ">
      <div className="text-4xl font-normal">Log in</div>
      <form className="flex flex-col mt-10" onSubmit={handleLogin}>
        <div className="flex flex-col">
          <label htmlFor="username" className="text-lg font-normal text-white">
            Username
          </label>
          <div className="flex items-center mt-2 max-w-[500px] px-5 py-2 pl-2 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
            <BiEnvelopeOpen className="text-xl m-1" />
            <input
              className="input bg-transparent ml-2 placeholder:text-sm w-full"
              type="text"
              placeholder="Enter Your Username"
              id="username"
              onChange={(e) => setUsername(e.target.value)}
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
              className="input bg-transparent ml-2 placeholder:text-sm w-full"
              type={passwordType}
              placeholder="Enter Your Password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
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
        <div className="mt-2 flex justify-end p text-[15px] hover:text-gray-500 transition">
          <a href="#">Forget Password ? </a>
        </div>
        <button
          className="flex justify-center max-w-[500px] bg-blue-600/100 rounded-xl p-3 mt-8 cursor-pointer hover:bg-blue-600/80 transition text-lg font-primary"
          type="submit"
        >
          Login
        </button>
        <div className="mt-2 flex justify-start p text-[15px]">
          Don't have an account?
          <span className="ml-1">
            <Link
              to="/register"
              className="text-blue-400 hover:text-blue-500 transition"
            >
              Sign up
            </Link>
          </span>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginForm;
