import React from 'react';
// Import the image for the developer
import developerImage from '../Resources/Muhammad Ibrahim.jpg'; // Update the path to the actual image location

const DeveloperMessageSection = () => {
  return (
    <div className="relative bg-gray-100  p-10 flex flex-col justify-center">
      {/* Blue circle background */}
      <div className="absolute right-20 top-1/6 transform -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full"></div>

      {/* Black bars background */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/4 flex items-center space-x-2">
        <div className="w-2 h-24 bg-blue-600"></div>
        <div className="w-2 h-32 bg-black"></div>
        <div className="w-2 h-40 bg-blue-600"></div>
      </div>

      {/* Text content */}
      <div className="z-10 max-w-xl text-left ml-10">
        <h2 className="text-4xl font-extrabold mb-4">Message From Developer</h2>
        <div
          className="h-1 bg-sky-500"
          style={{ width: '18rem', marginTop: '0.5rem' }}
        ></div>
        <br></br>
        <p className="text-lg">
          “ShopSentix is more than a tool; it's an exploration into the vast
          landscape of human expression. Join us in the journey of transforming
          words into insights, and sentiments into connections.”
        </p>
      </div>

      {/* Developer image */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/4">
        <img
          src={developerImage}
          alt="Developer"
          className="w-44 h-44 object-cover rounded-full border-0 border-white"
        />
      </div>
    </div>
  );
};

export default DeveloperMessageSection;
