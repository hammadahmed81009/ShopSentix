import React, { useState } from 'react';
import slideImage1 from '../Resources/slideImagie1.jpg';
import slideImage2 from '../Resources/slideImage2.jpg';
import slideImage3 from '../Resources/slideImage3.jpg';

// Dummy data for the options and images
const options = [
  {
    name: 'Accurate Results for your Product',
    imageSrc: slideImage1,
  },
  {
    name: 'More than One Format',
    imageSrc: slideImage2,
  },
  {
    name: 'Saved PDFs',
    imageSrc: slideImage3,
  },
];

const Page = () => {
  const [activeOption, setActiveOption] = useState(options[0].name);
  const [activeImageSrc, setActiveImageSrc] = useState(options[0].imageSrc);

  return (
    <section id="section2" className="relative h-screen">
      <div className="flex items-stretch overflow-hidden relative h-full">
        {/* Blue circle background */}
        <div className="hidden lg:block absolute inset-0 ">
          <div className="absolute left-12 bottom-10 transform translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-black rounded-full"></div>
          {/* Black circle background */}
          <div className="absolute left-32 bottom-28 transform translate-y-1/2 -translate-x-1/2 w-36 h-36 bg-blue-500 rounded-full"></div>
          {/* Black bars background */}
          <div className="absolute right-1/2 top-1/6 transform -translate-y-1/4 -translate-x-1/2 flex items-center space-x-2">
            <div className="w-2 h-24 bg-blue-600"></div>
            <div className="w-2 h-32 bg-black"></div>
            <div className="w-2 h-40 bg-blue-600"></div>
          </div>
        </div>
        <div className="w-1/2 p-16 bg-white">
          <div className="mb-20">
            <h1 className="text-4xl font-extrabold text-black inline-block">
              What We Have For You
            </h1>
            {/* Decorative Line */}
            <div
              className="h-1 bg-sky-500"
              style={{ width: '18rem', marginTop: '0.5rem' }}
            ></div>
          </div>
          <ul className="space-y-6">
            {options.map((option, index) => (
              <li
                key={index}
                className="text-3xl font-semibold whitespace-nowrap"
                onMouseEnter={() => {
                  setActiveOption(option.name);
                  setActiveImageSrc(option.imageSrc);
                }}
              >
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    activeOption === option.name
                      ? 'bg-sky-500 text-white shadow-sm rounded-2xl px-2.5 py-3'
                      : 'hover:bg-sky-500 hover:text-white hover:shadow-sm hover:rounded-2xl hover:px-2.5 hover:py-3'
                  }`}
                >
                  {option.name}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-1/2 bg-gray-100 flex justify-center items-center">
          <img
            src={activeImageSrc}
            alt="Selected Option"
            className="transition-opacity duration-500 ease-in-out w-full h-full object-cover"
            style={{ opacity: activeImageSrc ? 1 : 0 }}
          />
        </div>
      </div>
    </section>
  );
};

export default Page;
