import React, { useState } from 'react';
// Import your images here
import image1 from '../Resources/Hero1.jpg';
import image2 from '../Resources/Hero1.jpg';
// ... import other images as needed

// Dummy data for the options and images
const options = [
  { name: 'Accurate Results for your Product', image: 'image1' },
  { name: 'More than One Format', image: 'image2' },
  // ... add more options as needed
];

const Page = () => {
  const [activeOption, setActiveOption] = useState(options[0].name);
  const [activeImage, setActiveImage] = useState(options[0].image);

  // Function to handle option click
  const handleOptionClick = (option) => {
    setActiveOption(option.name);
    setActiveImage(option.image);
  };

  // Function to render the active image
  const renderActiveImage = () => {
    switch (activeImage) {
      case 'image1':
        return <img src={image1} alt="Description" />;
      case 'image2':
        return <img src={image2} alt="Description" />;
      // ... handle other cases as needed
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen bg-white flex">
      {/* Blue and Black Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full">
        {/* Add decorative elements here */}
        <div className="absolute top-5 left-10 w-16 h-16 bg-blue-500 rounded-full"></div>
        <div className="absolute top-20 left-20 w-10 h-10 bg-black rounded-full"></div>
        {/* ... more shapes */}
      </div>

      {/* Sidebar for Navigation Links */}
      <div className="w-64 bg-white p-8 space-y-4">
        {options.map((option, index) => (
          <div
            key={index}
            className={`cursor-pointer p-2 text-lg font-medium ${
              activeOption === option.name ? 'border-l-4 border-blue-500 bg-blue-100' : 'hover:bg-blue-50'
            }`}
            onClick={() => handleOptionClick(option)}
          >
            {option.name}
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex items-center justify-center p-8">
        <div className="w-3/4 h-3/4 bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Animated Image Area */}
          <div className="w-full h-full transition-opacity duration-500 ease-in-out">
            {renderActiveImage()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
