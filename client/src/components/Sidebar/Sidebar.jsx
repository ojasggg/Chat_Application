import React from "react";

// Import Logo
import Logo from "/assets/img/logo.png";
import Avatar1 from "/assets/img/avatar1.jpg";

// Import Icons
import { TbMessages } from "react-icons/tb";
import {
  HiOutlineUsers,
  HiOutlineBookmark,
  HiOutlinePlusSm,
} from "react-icons/hi";
import {
  IoCallOutline,
  IoVideocamOutline,
  IoSettingsOutline,
} from "react-icons/io5";

const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between gap-y-10 bg-light_dark lg:max-w-[80px] h-screen shadow-primary">
      <div className="items-center">
        <img src={Logo} alt="" />
      </div>
      <nav className="flex flex-col">
        <ul className="flex flex-col items-center text-white text-xl gap-y-1">
          <li className="list">
            <a href="#">
              <TbMessages />
            </a>
          </li>
          <li className="list">
            <a href="#">
              <HiOutlineUsers />
            </a>
          </li>
          <li className="list">
            <a href="#">
              <IoCallOutline />
            </a>
          </li>
          <li className="list">
            <a href="#">
              <IoVideocamOutline />
            </a>
          </li>
          <li className="list">
            <a href="#">
              <HiOutlineBookmark />
            </a>
          </li>
          <li className="list">
            <a href="#">
              <IoSettingsOutline />
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <ul className="flex flex-col items-center mb-5 gap-y-1">
          <li className="list bg-gray-500">
            <a href="#">
              <HiOutlinePlusSm />
            </a>
          </li>
          <li className="list p-0 bg-none">
            <img
              src={Avatar1}
              alt=""
              className="rounded-full w-[50px] h-[50px] object-cover"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
