import React, { useEffect, useState } from "react";
import Axios from "axios";
import Chat from "../components/Chat";
import InsideSidebar from "../components/InsideSidebar";
import Sidebar from "../components/Sidebar";

export const Home = ({ user }) => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  useEffect(() => {
    const getConversation = async () => {
      try {
        const chat = await Axios.get(`/api/conversation/${user?._id}`);
        setConversations(chat.data.conversation);
      } catch (error) {
        console.log(error.message);
      }
    };
    getConversation();
  }, [user]);

  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <InsideSidebar
        conversations={conversations}
        user={user}
        setCurrentChat={setCurrentChat}
      />
      <Chat currentChat={currentChat} currentUserId={user._id} />
    </div>
  );
};
