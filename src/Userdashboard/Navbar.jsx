import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiUser, CiSearch } from "react-icons/ci";
import { IoMenu, IoClose } from "react-icons/io5";
import { GiShoppingCart } from "react-icons/gi";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useAuth } from "../AuthContext";
import { MdOutlineReviews } from "react-icons/md";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme, user, logout } = useAuth();

  if (location.pathname === "/admin-dashboard") {
    return null;
  }

  return (
    <header className="w-full shadow-md text-black px-2 md:px-10 lg:px-30 dark:text-gray-200 dark:bg-dark-contrast">
      <div className="flex justify-between items-center">

        {/* Logo */}
        <div className="flex-1">
          <img
            src="/Free_Vector___Hand_drawn_potato_cartoon_illustration-removebg-preview.png"
            alt="My Logo"
            className="w-24 cursor-pointer hover:scale-105 transition-transform"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex flex-1 justify-center gap-4 font-semibold text-base">
          <Link to="/" className="p-3 hover:underline hover:text-orange-500 rounded-md transition-all">
            Home
          </Link>
          <Link to="/restaurant" className="p-3 hover:underline hover:text-orange-500 rounded-md transition-all">
            Restaurants
          </Link>
          <Link to="/offers" className="p-3 hover:underline hover:text-orange-500 rounded-md transition-all">
            Offers
          </Link>
          
        </nav>

        {/* Right Side Icons & Authentication Buttons */}
        <div className="hidden xl:flex flex-1 justify-end gap-6">
          <Link to="/search" className="hover:underline hover:text-orange-500 rounded-md transition-all p-3">
          <MdOutlineReviews className="text-2xl" />
          </Link>

          <Link to="/cart" className="hover:underline hover:text-orange-500 rounded-md transition-all p-3">
            <GiShoppingCart className="text-2xl" />
          </Link>

          <button
            className='hidden md:inline text-lg dark:bg-white text-black bg-purple-default dark:text-dark-contrast px-3 lg:px-4 rounded-full cursor-pointer'
            onClick={toggleTheme}
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>

          {/* Authentication Buttons */}
          {user ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button className="xl:hidden text-3xl cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="xl:hidden absolute top-0 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 text-lg font-semibold">

          <button className="self-end text-3xl p-4" onClick={() => setIsMenuOpen(false)}>
            <IoClose />
          </button>
          

          <Link to="/" className="p-3 hover:bg-orange-400 hover:text-white w-full text-center transition-all" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <Link to="/menu" className="p-3 hover:bg-orange-400 hover:text-white w-full text-center transition-all" onClick={() => setIsMenuOpen(false)}>
            Menu
          </Link>
          <Link to="/restaurants" className="p-3 hover:bg-orange-400 hover:text-white w-full text-center transition-all" onClick={() => setIsMenuOpen(false)}>
            Restaurants
          </Link>

          <Link to="/search" className="hover:underline hover:text-orange-500 rounded-md transition-all p-3">
            <CiSearch className="text-2xl" />
          </Link>

          <Link to="/cart" className="hover:underline hover:text-orange-500 rounded-md transition-all p-3">
            <GiShoppingCart className="text-2xl" />
          </Link>

          {/* Authentication Buttons */}
          {user ? (
            <button onClick={logout} className="bg-red-500 px-4 py-2 rounded hover:bg-red-600">
              Logout
            </button>
          ) : (
            <Link to="/login" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition">
              <CiUser />
            </Link>
          )}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
