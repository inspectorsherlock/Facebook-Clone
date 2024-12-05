import React from "react";
import Image from "next/image";
import {
  AiOutlineClockCircle,
  AiOutlineUser,
  AiOutlineVideoCamera,
  AiOutlineShop,
  AiOutlineAppstore,
} from "react-icons/ai";
import { BiBookBookmark } from "react-icons/bi";
import { MdOutlineFeed } from "react-icons/md";
import { BsThreeDots } from "react-icons/bs";

const Sidebar = () => {
  return (
    <div className="w-72 h-[calc(100vh-4rem)] bg-gray-900 text-gray-300 p-4 shadow-md fixed top-16 left-0 overflow-y-auto">
      {/* User Info */}
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
          <AiOutlineUser className="text-gray-400 text-xl" />
        </div>
        <span className="font-medium text-gray-100">Fawwaz Chowdhury</span>
      </div>

      {/* Navigation Links */}
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineUser className="text-blue-500 text-xl" />
          <span>Friends</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineClockCircle className="text-blue-500 text-xl" />
          <span>Memories</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <BiBookBookmark className="text-blue-500 text-xl" />
          <span>Saved</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineAppstore className="text-blue-500 text-xl" />
          <span>Groups</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineVideoCamera className="text-blue-500 text-xl" />
          <span>Video</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <AiOutlineShop className="text-blue-500 text-xl" />
          <span>Marketplace</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <MdOutlineFeed className="text-blue-500 text-xl" />
          <span>Feeds</span>
        </li>
        <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
          <BsThreeDots className="text-gray-400 text-xl" />
          <span>See more</span>
        </li>
      </ul>

      {/* Shortcuts Section */}
      <div className="mt-6">
        <h2 className="text-gray-400 text-sm font-medium mb-3">
          Your shortcuts
        </h2>
        <ul className="space-y-4">
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/8 Ball Pool Logo.png"
              alt="8 Ball Pool"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>8 Ball Pool</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/candy crush saga.png"
              alt="Candy Crush Saga"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Candy Crush Saga</span>
          </li>
          <li className="flex items-center space-x-3 p-2 rounded-md hover:bg-gray-800 cursor-pointer">
            <Image
              src="/words with friends logo.jpeg"
              alt="Words With Friends"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span>Words With Friends</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
