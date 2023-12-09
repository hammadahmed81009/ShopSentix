import React from 'react';

export default function Section4() {
  return (
    <section id="section4">
      <div className="flex flex-col items-center">
        <div className="bg-black min-h-[1px] w-full max-md:max-w-full" />
        <div className="bg-neutral-700 flex w-full flex-col items-stretch pt-12 px-5 max-md:max-w-full">
          <div className="text-sky-500 text-4xl font-extrabold self-center whitespace-nowrap">
            Our Offers
          </div>
          <div className="self-center w-full max-w-[1000px] mt-10 max-md:max-w-full">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div className="flex flex-col items-stretch w-full max-md:w-full max-md:ml-0 mb-8">
                <div className="shadow-sm bg-white flex-grow flex-col items-center w-full pl-5 pr-5 md:pr-10 py-8 rounded-lg border-0 border-solid border-black max-md:max-w-full max-md:pr-5 transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="text-black text-4xl font-extrabold whitespace-nowrap">
                    Free User
                  </div>
                  <div className="text-black text-2xl font-light w-full max-w-[500px] mt-5 self-start max-md:mt-5">
                    <ul>
                      <li>10 Trials / 1 Hour</li>
                      <li>Only One Result Dynamic</li>
                      <li>No Saved File </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-stretch w-full max-md:w-full ml-0 md:ml-0 mb-8">
                <div className="shadow-sm bg-sky-500 flex-grow flex-col items-center w-full pl-5 pr-5 md:pr-10 py-8 rounded-lg border-0 border-solid border-black max-md:max-w-full max-md:pr-5 transition duration-300 ease-in-out transform hover:scale-105">
                  <div className="text-white text-4xl font-extrabold whitespace-nowrap">
                    Premium User
                  </div>
                  <div className="text-white text-2xl font-light w-full max-w-[500px] mt-5 self-start max-md:mt-5">
                    <ul>
                      <li>Unlimited Usage</li>
                      <li>Access to every Result Dynamic</li>
                      <li>Access to Saved File as PDFs </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black min-h-[1px] w-full mt-14 max-md:max-w-full max-md:mt-10" />
        </div>
      </div>
    </section>
  );
}
