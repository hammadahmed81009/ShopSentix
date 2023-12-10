// tablePage.js
import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { scrapeDarazProducts } from "../../../WebScrapper"; 

export default function TablePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Pass the search term to the scraper function
        const scrapedData = await scrapeDarazProducts(searchTerm);
        setProductData(scrapedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      fetchData();
    }
  }, [searchTerm]);

  const renderStars = (stars) => {
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

  const filteredProducts = productData.filter((product) =>
    product.Title.toLowerCase().includes(searchTerm.toLowerCase())
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
            <ProductCard
              imageUrl={product.ImageURL}  // Update with the actual attribute names from your scraper
              productName={product.Title}
              price={product.CurrentPrice}
              stars={product.StarRating}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
