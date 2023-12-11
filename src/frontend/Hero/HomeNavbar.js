import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../Resources/logo3.png';

const Navbar = () => {
  const [active, setActive] = useState('Highlights'); // State to track active item

  // Function to update the active state
  const handleSetActive = (item) => {
    setActive(item);
  };

  const sectionIds = ['section2', 'section3', 'section4', 'section6'];
  return (
    <nav className="bg-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-8xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo or Brand Name */}

          <div>
            <ScrollLink to="/" smooth={true} duration={500}>
              <img
                src={Logo}
                alt="ShopSentix Logo"
                className="max-w-[100px] max-h-[55px] ml-12"
              />
            </ScrollLink>
          </div>

          {/* Primary Navbar items centered */}
          <div className="flex-grow md:flex items-center justify-center space-x-1">
            {['Highlights', 'Explore', 'Offer', 'Contact Us'].map(
              (item, index) => (
                <ScrollLink
                  key={item}
                  to={sectionIds[index]}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`py-5 px-3 text-gray-700 hover:text-gray-900 ${
                    active === item ? 'border-b-2 border-blue-500' : ''
                  }`}
                  onClick={() => handleSetActive(item)}
                >
                  {item}
                </ScrollLink>
              )
            )}
          </div>

          {/* Secondary Navbar Items */}
          <div className="hidden md:flex items-center space-x-1 ml-auto">
            <RouterLink
              to="/signup"
              className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300"
            >
              Sign Up
            </RouterLink>
            <a
              href="/login"
              className="py-2 px-3 text-blue-500 hover:text-blue-600"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
