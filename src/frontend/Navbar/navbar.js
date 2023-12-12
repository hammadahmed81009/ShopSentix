import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../Resources/logo3.png';

export default function Navbar() {
  const location = useLocation();

  const handleLogout = () => {
    console.log(sessionStorage.getItem('userEmail'))
    console.log(sessionStorage.getItem('userFirstName'))
    console.log(sessionStorage.getItem('userSurname'))
    sessionStorage.removeItem('userEmail');
    sessionStorage.removeItem('userFirstName')
    sessionStorage.removeItem('userSurname')
    console.log(sessionStorage.getItem('userEmail'),"ABCD")
    console.log(sessionStorage.getItem('userFirstName'),"ABCD")
    console.log(sessionStorage.getItem('userSurname'),"ABCD")

  };

  return (
    <header className="text-gray-600 body-font fixed top-0 w-full bg-white z-10 shadow-lg">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/home" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <img
                src={Logo}
                alt="ShopSentix Logo"
                className="max-w-[100px] max-h-[55px] mr-4"
              />
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
          <Link to="/" onClick={handleLogout} className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">
            Logout
          </Link>
        </nav>
      </div>
    </header>
  );
}
