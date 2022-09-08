import React from "react";

// Import Avatar Image
import Avatar2 from "../assets/img/avatar2.jpg";

// Import Icons
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";

const Main = () => {
  return (
    <main className="flex-auto bg-dark h-screen">
      <header className="flex flex-row justify-between items-center p-4 bg-light_dark border-l border-b border-gray-600/40">
        <div className="flex flex-row items-center gap-x-2">
          <div className="relative">
            <img src={Avatar2} alt="" className="avatar" />
            <div className="online-top"></div>
          </div>
          <div>
            <h3 className="h3">Weekend</h3>
            <p className="p">Online</p>
          </div>
        </div>
        <ul className="flex flex-row justify-evenly items-center text-white  gap-y-1">
          <li className="header-list">
            <a href="#">
              <IoCallOutline />
            </a>
          </li>
          <li className="header-list">
            <a href="#">
              <IoVideocamOutline />
            </a>
          </li>
          <li className="header-list">
            <a href="#">
              <BiDotsVerticalRounded />
            </a>
          </li>
        </ul>
      </header>
    </main>
  );
};

export default Main;
