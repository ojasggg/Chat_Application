import React from "react";

// Import Avatar
import Avatar1 from "../assets/img/avatar1.jpg";
import Avatar2 from "../assets/img/avatar2.jpg";
import Avatar3 from "../assets/img/avatar3.jpg";
import Avatar5 from "../assets/img/avatar5.jpg";

// Import icon
import { BiDotsVerticalRounded, BiChevronRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";

const InsideSidebar = () => {
  return (
    <div className="bg-light_dark w-[400px] h-screen flex-2 flex flex-col border-l border-gray-600">
      {/* Top Profile */}
      <div className="flex flex-row justify-between items-center p-4 border-b border-gray-600">
        <div className="flex flex-row items-center gap-x-2">
          <div className="">
            <img src={Avatar1} alt="" className="avatar" />
          </div>
          <div>
            <h3 className="h3">Hira Kumari</h3>
            <p className="p">My Account</p>
          </div>
        </div>
        <div className="p-3 mr-5 rounded-full text-xl border-2 border-gray-500 cursor-pointer hover:bg-gray-500 transition">
          <BiDotsVerticalRounded />
        </div>
      </div>
      {/* Search Input */}
      <div className="flex flex-row items-center p-2 bg-gray-900/50 mx-4 my-5 rounded-xl shadow-primary">
        {/* Search Icon */}
        <FiSearch className="text-4xl p-2 text-gray-400" />
        {/* Input box */}
        <input
          type="text"
          placeholder="Search or start new chat..."
          className="input flex-auto bg-transparent text-sm p-2 placeholder:text-gray-400"
        />
      </div>

      {/* Online and more option */}
      <div className="flex flex-row justify-between mx-2 mt-1">
        {/* Top text */}
        <h3 className="h3">Online now</h3>
        <div className="flex items-center text-sm text-gray-400">
          More
          <span>
            <BiChevronRight className="text-[15px] text-gray-400 ml-1" />
          </span>
        </div>
      </div>
      {/* Online Avatar Icons */}
      <div className="flex flex-row items-center gap-x-1 ml-2 mt-2">
        {/* One Profile */}
        <div className="flex flex-col items-center">
          {/* avatar */}
          <div className="relative">
            <img src={Avatar1} alt="" className="avatar m-2 mb-0" />
            <div className="online"></div>
          </div>
          {/* user name */}
          <h6 className="h6 mt-1">Loki</h6>
        </div>

        {/* Second Profile */}
        <div className="flex flex-col items-center">
          {/* avatar */}
          <div className="relative">
            <img src={Avatar2} alt="" className="avatar m-2 mb-0" />
            <div className="online"></div>
          </div>
          {/* user name */}
          <h6 className="h6 mt-1">Weekend</h6>
        </div>

        {/* Third Profile */}
        <div className="flex flex-col items-center">
          {/* avatar */}
          <div className="relative">
            <img src={Avatar3} alt="" className="avatar m-2 mb-0" />
            <div className="online"></div>
          </div>
          {/* user name */}
          <h6 className="h6 mt-1">John</h6>
        </div>

        {/* Fifth Profile */}
        <div className="flex flex-col items-center">
          {/* avatar */}
          <div className="relative">
            <img src={Avatar5} alt="" className="avatar m-2 mb-0" />
            <div className="online"></div>
          </div>
          {/* user name */}
          <h6 className="h6 mt-1">Eminem</h6>
        </div>
      </div>
      {/* Messages */}
      <div className="flex flex-col mx-2 mt-6">
        <div>
          <h3 className="flex h3 items-center text-center">
            Messages
            <span className="px-2 ml-1 bg-teal rounded-xl text-[12px] font-light">
              20
            </span>
          </h3>
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          {/* One Profile */}
          <div className="flex flex-row items-center mt-2">
            {/* avatar */}
            <div className="relative">
              <img src={Avatar2} alt="" className="avatar m-2 mb-0" />
              <div className="online"></div>
            </div>
            {/* User Message */}
            <div className="flex flex-1 justify-between gap-x-35">
              <div className="flex flex-col">
                <h3 className="h3">Weekend</h3>
                <p className="p">Wanna travel to Japan tomorrow?</p>
              </div>

              <div className="p mr-2">Yesterday</div>
            </div>
          </div>

          {/* Second Profile */}
          <div className="flex flex-row items-center mt-2">
            {/* avatar */}
            <div className="relative">
              <img src={Avatar5} alt="" className="avatar m-2 mb-0" />
              <div className="online"></div>
            </div>
            {/* User Message */}
            <div className="flex flex-1 justify-between gap-x-35">
              <div className="flex flex-col">
                <h3 className="h3">Eminem</h3>
                <p className="p">Hello..</p>
              </div>

              <div className="p mr-2">1.02 AM</div>
            </div>
          </div>
          {/* One Profile */}
          <div className="flex flex-row items-center mt-2">
            {/* avatar */}
            <div className="relative">
              <img src={Avatar3} alt="" className="avatar m-2 mb-0" />
              <div className="online"></div>
            </div>
            {/* User Message */}
            <div className="flex flex-1 justify-between gap-x-35">
              <div className="flex flex-col">
                <h3 className="h3">John</h3>
                <p className="p">I will find you</p>
              </div>

              <div className="p mr-2">5.10 PM</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsideSidebar;
