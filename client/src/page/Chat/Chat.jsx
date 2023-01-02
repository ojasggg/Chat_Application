import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import Sidebar from "../../components/Sidebar/Sidebar";
import ChatSidebar from "../../components/Chat/ChatSidebar/ChatSidebar";
import ChatMessages from "../../components/Chat/ChatMessages/ChatMessages";
import { io } from "socket.io-client";

export const Home = ({ user }) => {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receiveMessage, setReceiveMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    const getConversation = async () => {
      try {
        const { data } = await axios.get(`/api/conversation/${user._id}`);
        setConversations(data.conversation);
      } catch (error) {
        console.log(error.message);
      }
    };
    getConversation();
  }, [user._id]);

  useEffect(() => {
    socket.current = io("ws://localhost:8000");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  // Send message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Receive message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log(data);
      setReceiveMessage(data);
    });
  }, []);

  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <ChatSidebar
        conversations={conversations}
        user={user}
        setCurrentChat={setCurrentChat}
        onlineUsers={onlineUsers}
      />
      <ChatMessages
        currentChat={currentChat}
        currentUserId={user._id}
        setSendMessage={setSendMessage}
        receiveMessage={receiveMessage}
      />
    </div>
  );
};
