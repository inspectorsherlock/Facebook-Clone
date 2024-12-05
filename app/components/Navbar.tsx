import React from "react";
import {
  AiOutlineSearch,
  AiFillHome,
  AiOutlineUsergroupAdd,
  AiOutlineVideoCamera,
  AiOutlineShop,
  AiOutlinePlus,
} from "react-icons/ai";
import { FaFacebook, FaBell, FaUserCircle } from "react-icons/fa";
import { BsMessenger } from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-16 bg-gray-800 flex items-center justify-between px-4 shadow-md z-50">
      {/* Left Section: Logo and Search */}
      <div className="flex items-center space-x-4">
        {/* Facebook Logo */}
        <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full">
          <FaFacebook className="text-white text-2xl" />
        </div>
        {/* Search Bar */}
        <div className="flex items-center bg-gray-700 rounded-full px-3 py-1">
          <AiOutlineSearch className="text-gray-400 text-xl" />
          <input
            type="text"
            placeholder="Search Facebook"
            className="ml-2 bg-transparent outline-none text-gray-300 text-sm"
          />
        </div>
      </div>

      {/* Center Section: Navigation Icons */}
      <div className="flex space-x-6">
        <AiFillHome className="text-blue-500 text-2xl cursor-pointer" />
        <AiOutlineUsergroupAdd className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <AiOutlineVideoCamera className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <AiOutlineShop className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <AiOutlinePlus className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
      </div>

      {/* Right Section: Actions */}
      <div className="flex items-center space-x-4">
        <BsMessenger className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
        <div className="relative">
          <FaBell className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
          {/* Notification Badge */}
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
            16
          </div>
        </div>
        <FaUserCircle className="text-gray-400 text-2xl cursor-pointer hover:text-blue-500" />
      </div>
    </div>
  );
};

export default Navbar;
