import React from "react";

// Import Avatar Image
import Avatar2 from "../assets/img/avatar2.jpg";

// Import Icons
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillMicFill, BsLink45Deg } from "react-icons/bs";

const Chat = () => {
  return (
    <main className="relative flex-auto bg-dark h-screen">
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

      {/* Mid */}
      <div>
        <div>
          <h3 className="p text-center mt-2">Today</h3>
        </div>

        {/* Left or Other Message */}
        <div className="my-7">
          <div className="relative ml-3 bg-light_dark rounded-xl rounded-tl-none max-w-[300px] p-4 cursor-text">
            <p className="p ml-5 text-[15px] text-white/60">
              Wanna travel to Japan tomorrow?
            </p>
            <div className="absolute bottom-[-20px] right-3">
              <p className="h6">12.02 PM</p>
            </div>
          </div>
        </div>

        {/* Right or Self Message */}
        <div className="flex flex-col items-end w-full my-7 ">
          <div className="relative mr-3 bg-teal rounded-xl rounded-tr-none max-w-[300px] p-3 cursor-text">
            <p className="p ml-2 text-[15px] text-black/70">
              Sorry man I gotta go to Dubai to meet prince, You continue I will
              Catch up with you in tokyo.
            </p>
            <div className="absolute bottom-[-20px]">
              <p className="h6">12.05 PM</p>
            </div>
          </div>
        </div>
        {/* Left or Other Message */}
        <div className="my-7">
          <div className="relative ml-3 bg-light_dark rounded-xl rounded-tl-none max-w-[300px] p-4 cursor-text">
            <p className="p ml-5 text-[15px] text-white/60">
              Wanna travel to Japan tomorrow?
            </p>
            <div className="absolute bottom-[-20px] right-3">
              <p className="h6">12.02 PM</p>
            </div>
          </div>
        </div>

        {/* Right or Self Message */}
        <div className="flex flex-col items-end w-full my-7 ">
          <div className="relative mr-3 bg-teal rounded-xl rounded-tr-none max-w-[300px] p-3 cursor-text">
            <p className="p ml-2 text-[15px] text-black/70">
              Sorry man I gotta go to Dubai to meet prince, You continue I will
              Catch up with you in tokyo.
            </p>
            <div className="absolute bottom-[-20px]">
              <p className="h6">12.05 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="absolute bottom-0 h-[70px] w-full flex items-center p-3 bg-light_dark">
        <div className="text-3xl p-1 cursor-pointer">
          {/* Mic */}
          <BsLink45Deg />
        </div>
        <div className="flex-auto ml-3 p-3 bg-gray-900/50 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
          <input
            type="text"
            placeholder="Type your message"
            className="input ml-4 bg-transparent  w-full"
          />
        </div>
        <div className="text-2xl p-3 cursor-pointer">
          {/* Mic */}
          <BsFillMicFill />
        </div>
      </div>
    </main>
  );
};

export default Chat;