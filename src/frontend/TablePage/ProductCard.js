import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';

const ProductCard = ({ ImageURL, Title, CurrentPrice, stars, URL }) => {
  const [loading, setLoading] = useState(false);

  const renderStars = () => {
    const starArray = Array.from({ length: stars }, (_, index) => index + 1);

    return starArray.map((star) => (
      <svg
        key={star}
        className="w-4 h-4 text-yellow-300 me-1 ml-0.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 22 20"
      >
        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
      </svg>
    ));
  };

  const handleAnalyzeClick = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:8000/scrape-reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productUrl: URL }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log('DATA IN HANDLE ANALYSE CLICK: ' + data.reviews.reviews);

      const analyzeResponse = await fetch(
        'http://localhost:8000/analyze-reviews',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ reviews: data.reviews.reviews }),
        }
      );

      if (!analyzeResponse.ok) {
        throw new Error(`HTTP error! Status: ${analyzeResponse.status}`);
      }

      const analyzeData = await analyzeResponse.json();
      console.log('Analysis results:', analyzeData);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="transition-transform duration-300 ease-in-out transform hover:scale-105">
      <div className="max-w-screen bg-white shadow-md rounded-md overflow-hidden flex mx-auto hover:border-blue-500 hover:shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="h-32 w-32 object-cover"
            src={ImageURL}
            alt="Product Image"
          />
        </div>

        <div className="p-4 flex-grow">
          <h2 className="text-xl font-bold mb-2 text-gray-800">{Title}</h2>
          <p className="text-gray-500 mb-4">{`${CurrentPrice}`}</p>
        </div>
        <div className="flex-shrink-0 flex items-center justify-center p-4">
          {renderStars()}
          <RouterLink>
            <button
              onClick={handleAnalyzeClick}
              className={`bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 ${
                loading ? 'cursor-not-allowed opacity-50' : ''
              }`}
              disabled={loading}
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
