// Header.js
import React from "react";


const Header = () => {
  return (
    <div className="flex items-center bg-gray-200 rounded-lg p-2 mb-6 dark:bg-dark-default">
      <input
        type="text"
        placeholder="Search"
        className="bg-transparent flex-1  dark:text-gray-100 focus:outline-none px-2" width={150}
      />
      <div className="cursor-pointer">
        <img className="w-6 h-6" src="public/Free Vector _ Hand drawn potato cartoon illustration.jpeg" alt="search-button" />
      </div>
     
    </div>
  );
};

export default Header;