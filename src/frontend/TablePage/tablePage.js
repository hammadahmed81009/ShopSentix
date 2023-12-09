// tablePage.js
import React, { useState } from "react";
import ProductCard from "./ProductCard";

export default function TablePage() {
  const [searchTerm, setSearchTerm] = useState("");

  // Replace the sample product data with your actual product data
  const productData = [
    {
      imageUrl: "your-product-image.jpg",
      productName: "Product 1",
      price: "99.99",
      stars: 4, // Add the stars prop here
    },
    {
      imageUrl: "your-product-image.jpg",
      productName: "Product 2",
      price: "49.99",
      stars: 5, // Add the stars prop here
    },
    // Add more product data as needed
  ];

  const filteredProducts = productData.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="text-gray-400 bg-white body-font relative">
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
        {filteredProducts.map((product, index) => (
          <div className="mb-8" key={index}>
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
