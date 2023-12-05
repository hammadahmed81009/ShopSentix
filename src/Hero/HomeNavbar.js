import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [active, setActive] = useState("Highlights"); // State to track active item

    // Function to update the active state
    const handleSetActive = (item) => {
        setActive(item);
    };

    const sectionIds = ["section2", "section3", "section4", "section6"];
    return (
        <nav className="bg-white fixed top-0 left-0 w-full z-50">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo or Brand Name */}
                    <div>
                        {/* Put your logo or brand name here */}
                    </div>

                    {/* Primary Navbar items centered */}
                    <div className="flex-grow md:flex items-center justify-center space-x-1">
                    {["Highlights", "Explore", "Offer", "Contact Us"].map((item, index) => (
                            <Link
                                key={item}
                                to={sectionIds[index]}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className={`py-5 px-3 text-gray-700 hover:text-gray-900 ${active === item ? 'border-b-2 border-blue-500' : ''}`}
                                onClick={() => handleSetActive(item)}
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Secondary Navbar Items */}
                    <div className="hidden md:flex items-center space-x-1">
                        <a href="#" className="py-2 px-3 bg-blue-500 hover:bg-blue-600 text-white rounded transition duration-300">Sign Up</a>
                        <a href="#" className="py-2 px-3 text-blue-500 hover:text-blue-600">Login</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
