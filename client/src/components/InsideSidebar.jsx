import React from "react";

// Import icon
import { BiDotsVerticalRounded, BiChevronRight } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import InsideSidebarConversation from "./InsideSidebarConversation";
import InsideSidebarOnlineStats from "./InsideSidebarOnlineStats";

const InsideSidebar = ({ conversations, user, setCurrentChat }) => {
  return (
    <div className="bg-light_dark w-[400px] h-screen flex-2 flex flex-col border-x border-gray-600/40 shadow-primary">
      {/* Top Profile */}
      <div className="flex flex-row justify-between items-center p-4 border-b border-gray-600/40">
        <div className="flex flex-row items-center gap-x-2">
          <div className="">
            <img
              src={
                user?.profilePicture !== ""
                  ? user?.profilePicture
                  : "/assets/img/avatar1.jpg"
              }
              alt=""
              className="avatar"
            />
          </div>
          <div>
            <h3 className="h3">{user?.username}</h3>
            <p className="p">My Account</p>
          </div>
        </div>
        <div className="header-list">
          <BiDotsVerticalRounded />
        </div>
      </div>
      {/* Search Input */}
      <div className="flex flex-row items-center p-2 bg-gray-900/50 mx-4 my-5 rounded-xl shadow-primary hover:bg-gray-900/30 transition">
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
        {conversations.map((conversation) => (
          <div
            onClick={() => setCurrentChat(conversation)}
            key={conversation._id}
          >
            <InsideSidebarOnlineStats
              conversation={conversation}
              currentUserId={user._id}
            />
          </div>
        ))}
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
          {conversations.map((conversation) => (
            <div
              onClick={() => setCurrentChat(conversation)}
              key={conversation._id}
            >
              <InsideSidebarConversation
                conversation={conversation}
                currentUserId={user._id}
                key={conversation._id}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InsideSidebar;
