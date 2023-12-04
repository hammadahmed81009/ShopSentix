import React from "react";
import {
  AiOutlineDashboard,
  AiOutlineTable,
  AiOutlineUser,
} from "react-icons/ai";
import { IoMapOutline } from "react-icons/io5";
import { FiLogIn, FiUserPlus } from "react-icons/fi";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 bg-gray-100 w-64 space-y-6 py-7 px-2 inline-block">
      <div className="sidebar-logo flex items-center justify-center h-16">
        {/* Include the React logo */}
        <img
          src="/images/react-logo.png"
          alt="React Logo"
          className="w-8 h-8"
        />
      </div>
      <nav>
        <a
          href="/dashboard"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <FaHome className="mr-3" /> Home
        </a>
        <a
          href="/icons"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <AiOutlineUser className="mr-3" /> Watchlist
        </a>
        <a
          href="/maps"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <IoMapOutline className="mr-3" /> History
        </a>
        <a
          href="/user"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <AiOutlineTable className="mr-3" /> Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
