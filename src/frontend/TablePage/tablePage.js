import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import { useLocation } from 'react-router-dom';

export default function TablePage() {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(5);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const term = searchParams.get('searchTerm');

    if (term) {
      setSearchTerm(term);
      handleSearchClick(term);
    }
  }, [location.search]);

  const handleLoadMore = () => {
    setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 5);
  };

  const handleSearchClick = async (term) => {
    setLoading(true);
  
    try {
      const response = await fetch('http://localhost:8000/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ searchTerm: term }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON data from the response
      
      //console.log(data);
      setProducts(data.products || []);

    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const visibleProductsArray = Array.isArray(products)
    ? products.slice(0, visibleProducts)
    : [];

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
              onClick={() => handleSearchClick(searchTerm)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-1 mb-2 mt-12 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center ml-8">
        <span className="mr-2">
          Your Results ({visibleProductsArray.length} of {products.length})
        </span>
        <div className="flex-1 border-t border-gray-800 mr-8"></div>
      </div>

      <br />

      <div className="container mx-auto">
        {loading ? (
          <div class="flex justify-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-pink-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only text-gray-950">Loading...</span>
            </div>
          </div>
        ) : visibleProductsArray.length > 0 ? (
          visibleProductsArray.map((product, index) => (
            <div className="mb-8" key={index}>
              <ProductCard {...product} />
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            No products found. Try a different search.
          </p>
        )}

        {visibleProductsArray.length < products.length && (
          <div className="text-center mt-4">
            <button
              onClick={handleLoadMore}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mb-10"
            >
              Load More
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
