import React from 'react';

const WordCloudBulb = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 p-5">
      <div className="relative w-64 h-96">
        {/* Bulb background image */}
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center"
          style={{ backgroundImage: 'url(path-to-your-bulb-image.png)' }}
        ></div>

        {/* Semi-transparent overlay with text */}
        <div className="absolute inset-0 flex flex-wrap items-center justify-center p-4">
          {/* Your words here, manually positioned if needed */}
          <span className="text-xs">IDEA</span>
          <span className="text-sm">SOLUTION</span>
          {/* ... more words */}
        </div>
      </div>
    </div>
  );
};

export default WordCloudBulb;
