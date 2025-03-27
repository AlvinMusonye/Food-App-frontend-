import React from "react";
import Nav from "./Nav";
import Main from "./Main";

const Layout = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Nav />
      
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 overflow-auto">
        <Main />
      </div>
    </div>
  );
};

export default Layout;
