import React, { useState } from 'react';

// Dummy data for the options and images
const options = [
  {
    name: 'Accurate Results for your Product',
    imageSrc:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZGF0YSUyMGFuZCUyMGdyYXBoc3xlbnwwfHwwfHx8MA%3D%3D',
  },
  { name: 'More than One Format', imageSrc: 'https://images.unsplash.com/photo-1579226905180-636b76d96082?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZGF0YSUyMGFuZCUyMGdyYXBoc3xlbnwwfHwwfHx8MA%3D%3D' },
  { name: 'Saved PDFs', imageSrc: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhdGElMjBhbmQlMjBncmFwaHN8ZW58MHx8MHx8fDA%3D' },
];

const Page = () => {
  const [activeOption, setActiveOption] = useState(options[0].name);
  const [activeImageSrc, setActiveImageSrc] = useState(options[0].imageSrc);

  return (
    <div className="flex h-screen items-stretch overflow-hidden">
      <div className="w-1/2 p-16 bg-white">
        <div className="mb-20">
          <h1 className="text-4xl font-extrabold text-black inline-block">
            What We Have For You
          </h1>
          {/* Decorative Line */}
          <div className="h-1 bg-sky-500" style={{ width: '18rem', marginTop: '0.5rem' }}></div>
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
  );
};

export default Page;
