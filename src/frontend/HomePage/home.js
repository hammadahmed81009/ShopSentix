import React from "react";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../Resources/logo3.png";
import { useState , useEffect } from "react";

const imageContext = require.context('../Resources/products', false, /\.(jpg|jpeg|png)$/);
const productImages = imageContext.keys().map(imageContext);

export default function Home() {
  useEffect(() => {
    document.title = "Home"
  }, []);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <section className="text-gray-400 bg-white body-font min-h-screen relative overflow-hidden">
      {/*Blue Decorative Circle*/}
      <div className="absolute right-12 top-20 transform -translate-y-1/2 translate-x-1/2 w-64 h-64 bg-blue-500 rounded-full overflow-hidden">
        <div className="absolute left-0 right-0 bottom-0 h-64 bg-blue-500"></div>
      </div>

      <div className="absolute right-32 top-44 transform -translate-y-1/2 translate-x-1/2 w-32 h-32 bg-blue-500 rounded-full overflow-hidden">
        <div className="absolute left-0 right-0 bottom-0 h-64 bg-black"></div>
      </div>

      {/* Black bars background */}
      <div className="absolute left-8 top-20 transform -translate-y-1/4 flex items-center space-x-2">
        <div className="w-2 h-40 bg-blue-600"></div>
        <div className="w-2 h-32 bg-black"></div>
        <div className="w-2 h-24 bg-blue-600"></div>
      </div>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center text-center w-full mb-4">
          <img
            src={Logo}
            alt="ShopSentix Logo"
            className="max-w-[100px] max-h-[100px] mb-4 mx-auto mt-12"
          />
          <p className="lg:w-2/3 mx-auto text-6xl text-neutral-950 mb-6">
            ShopSentix
          </p>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Discover sentiments on-demand. Enter a product name to unveil
            real-time insights
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex items-center">
            <div className="relative flex-grow">
              <input
                type="text"
                id="name"
                name="name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white bg-opacity-40 rounded border border-gray-700 focus:border-blue-400 focus:bg-white focus:ring-2 focus:ring-blue-400 text-base outline-none text-gray-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <RouterLink
              to={`/home/table?searchTerm=${encodeURIComponent(searchTerm)}`}
            >
              {/* Include search term as a query parameter */}
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 me-2 ml-1 mb-2 mt-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none"
              >
                Search
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div className="flex items-center ml-8">
        <span className="mr-2">Your Interests</span>
        <div className="flex-1 border-t border-gray-800 mr-8"></div>
      </div>

      <section className="text-gray-400 bg-white body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
              <img
        src={productImages[0]} // Use the image with the name "airpods.jpeg"
        alt="Airpods" // Provide a meaningful alt text
        className="w-full h-auto mt-2" // Adjust the classes as needed
      />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Airpods
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[1]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Battery
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[2]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Battery
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[3]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Bottle
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[4]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Samsung
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[5]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Q-Mobile
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[6]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  Speaker
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <img
                  alt="ecommerce"
                  className="object-cover object-center w-full h-full block"
                  src={productImages[8]}
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xl tracking-widest title-font mb-1">
                  TCL
                </h3>
                <h2 className="text-white title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
