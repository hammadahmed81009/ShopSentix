import React from "react";
import { FiLogOut } from "react-icons/fi";
import { FaHome, FaHistory, FaListAlt } from "react-icons/fa";
import logo from '../Resources/shopsentix-logo.png';

const Sidebar = () => {
  return (
    <aside className="h-screen sticky top-0 bg-gray-100 w-64 space-y-6 py-7 px-2 inline-block">
     <div className="sidebar-logo flex items-center justify-center h-16">
        <img
          src={logo}
          alt="ShopSentix"
          className="w-8 h-8 object-cover max-w-full max-h-full"
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
          href="/watchlist"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <FaListAlt className="mr-3" /> Watchlist
        </a>
        <a
          href="/history"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <FaHistory className="mr-3" /> History
        </a>
        <a
          href="/logout"
          className="flex items-center py-2.5 px-4 rounded transition duration-200 hover:bg-blue-500 hover:text-white"
        >
          <FiLogOut className="mr-3" /> Logout
        </a>
      </nav>
    </aside>
  );
};

export default Sidebar;
