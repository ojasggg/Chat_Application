import React from "react";
import Chat from "../components/Chat";
import InsideSidebar from "../components/InsideSidebar";
import Sidebar from "../components/Sidebar";

import { useCookies } from "react-cookie";
import Cookies from "universal-cookie";

export const Home = () => {
  const [cookies, setCookies, removeCookies] = useCookies();
  console.log(cookies["access_token"]);
  return (
    <div className="flex flex-row h-full">
      <Sidebar />
      <InsideSidebar />
      <Chat />
    </div>
  );
};
