import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="text-gray-600 body-font fixed top-0 w-full bg-white z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">ShopSentix</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/home" className={`mr-5 hover:text-gray-900 ${location.pathname === '/home' ? 'font-bold text-blue-600 mb-1' : ''}`}>
            Home
          </Link>
          <Link to="/watchlist" className={`mr-5 hover:text-gray-900 ${location.pathname === '/watchlist' ? 'font-bold text-blue-600 mb-1' : ''}`}>
            Watchlist
          </Link>
          <Link to="/savedfiles" className={`mr-5 hover:text-gray-900 ${location.pathname === '/savedfiles' ? 'font-bold text-blue-600 mb-1' : ''}`}>
            History
          </Link>
        </nav>
      </div>
    </header>
  );
}
