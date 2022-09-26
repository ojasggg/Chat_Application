import React from "react";

// Import components
import Sidebar from "./components/Sidebar";
import InsideSidebar from "./components/InsideSidebar";
import Main from "./components/Main";
import Login from "./components/Login";

const App = () => {
  return (
    <div className="flex flex-row">
      {/* Sidebar */}
      {/* <Sidebar /> */}
      {/* Second Sidebar */}
      {/* <InsideSidebar /> */}
      {/* Main*/}
      {/* <Main /> */}
      <Login />
    </div>
  );
};

export default App;
