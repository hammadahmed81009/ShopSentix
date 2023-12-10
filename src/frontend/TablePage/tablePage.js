import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function TablePage() {
  const [searchTerm, setSearchTerm] = useState("");  // State to store the current search term
  const [products, setProducts] = useState([]);     // State to store the fetched product data

  // Function to handle the search button click
  const handleSearchClick = () => {
    fetch('http://localhost:3001/search', {         // Make sure to use the correct URL for your Node.js server
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ searchTerm }),         // Send the current search term
    })
    .then(response => response.json())
    .then(data => {
      setProducts(data.products);                   // Update the products state with the received data
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  return (
    <section className="text-gray-400 bg-white body-font min-h-screen relative">
      <div className="container px-5 mt-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                id="name"
                name="name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white bg-opacity-40 rounded border border-indigo-800 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-white text-base outline-none text-indigo-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out mt-10"
              />
            </div>
            <button
              type="button"
              onClick={handleSearchClick}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-1 mb-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-8">
        <span className="mr-2">Your Results</span>
        <div className="flex-1 border-t border-gray-800 mr-8"></div>
      </div>

      <br />

      <div className="container mx-auto">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div className="mb-8" key={index}>
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products found. Try a different search.</p>
        )}
      </div>
    </section>
  );
}
