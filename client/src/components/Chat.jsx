import React, { useState, useEffect } from "react";

// Import Avatar Image
import Avatar2 from "/assets/img/avatar2.jpg";

// Import Icons
import { IoCallOutline, IoVideocamOutline } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { BsFillMicFill, BsLink45Deg } from "react-icons/bs";
import axios from "axios";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";

const Chat = ({ currentUserId, currentChat }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessages, setNewMessages] = useState("");

  useEffect(() => {
    const userId = currentChat?.members?.find((id) => id !== currentUserId);
    const getUserData = async () => {
      try {
        const { data } = await axios.get(`/api/user/single/${userId}`);
        setUserData(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentChat !== null) getUserData();
  }, [currentChat, currentUserId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const { data } = await axios.get(
          `/api/message/get/${currentChat?._id}`
        );
        setMessages(data.messages);
      } catch (error) {
        console.log(error.message);
      }
    };
    if (currentChat !== null) getMessages();
  }, [currentChat]);

  const sendMessage = () => {
    
  }

  return (
    <main className="relative flex-auto bg-dark h-screen">
      {currentChat ? (
        <>
          <header className="flex flex-row justify-between items-center p-4 bg-light_dark border-l border-b border-gray-600/40">
            <div className="flex flex-row items-center gap-x-2">
              <div className="relative">
                <img src={Avatar2} alt="" className="avatar" />
                <div className="online-top"></div>
              </div>
              <div>
                <h3 className="h3">{userData?.username}</h3>
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

            {messages.map((m) =>
              m.senderId === currentUserId ? (
                <div className="flex flex-col items-end w-full my-7 ">
                  <div className="relative mr-3 bg-teal rounded-xl rounded-tr-none max-w-[300px] p-3 cursor-text">
                    <p className="p ml-2 text-[15px] text-black/70">
                      {m.message}
                    </p>
                    <div className="absolute bottom-[-20px]">
                      <p className="h6">{format(m.createdAt)}</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="my-7">
                  <div className="relative ml-3 bg-light_dark rounded-xl rounded-tl-none max-w-[300px] p-4 cursor-text">
                    <p className="p ml-5 text-[15px] text-white/60">
                      {m.message}
                    </p>
                    <div className="absolute bottom-[-20px] right-3">
                      <p className="h6">{format(m.createdAt)}</p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Bottom */}
          <div className="absolute bottom-0 h-[70px] w-full flex items-center p-3 bg-light_dark text-center justify-center">
            <div className="text-3xl p-1 cursor-pointer">
              {/* Mic */}
              <BsLink45Deg />
            </div>
            <div className="flex-auto ml-3 p-3 bg-gray-900/50 border border-gray-600 rounded-xl hover:bg-gray-900/30 transition">
              <input
                type="text"
                placeholder="Type your message"
                className="input ml-4 bg-transparent  w-full"
                value={newMessages}
                onChange={(e) => setNewMessages(e.target.value)}
              />
            </div>

            <div className="text-2xl p-3 cursor-pointer">
              {/* Mic */}
              <BsFillMicFill />
            </div>
            <div
              className="text-lg px-4 p-2 cursor-pointer bg-teal rounded-xl hover:bg-teal/80 transition"
              onClick={sendMessage}
            >
              {/* Mic */}
              Send
            </div>
          </div>
        </>
      ) : (
        <div>Tap on the profile to Start the conversation</div>
      )}
    </main>
  );
};

export default Chat;
