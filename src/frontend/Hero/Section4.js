import React from 'react';

export default function Section4() {
  return (
    <section
      id="section4"
      className="flex items-center justify-center mt-10 pb-10"
    >
      <div
        className="p-4 sm:px-10 flex flex-col justify-center items-center text-base h-100vh mx-auto"
        id="pricing"
      >
        <h3 className="text-5xl font-bold text-center flex gap-2 justify-center mb-10">
          Pay once, use forever
        </h3>
        <div
          className="h-1 bg-sky-500"
          style={{ width: '18rem', marginTop: '-1rem' }}
        ></div>
        <br></br>
        <div className="isolate mx-auto grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="ring-1 ring-gray-200 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-standard"
                className="text-gray-900 text-2xl font-semibold leading-8"
              >
                Standard
              </h3>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              1 license for only 1 activation
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
                $39
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $29
              </span>
            </p>
            <a
              href=""
              aria-describedby="tier-standard"
              className="text-blue-600 ring-1 ring-inset ring-blue-200 hover:ring-blue-300 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              Buy now
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Lifetime access
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                All AI features
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Use your own OpenAI key
              </li>
            </ul>
          </div>
          <div className="ring-2 ring-blue-600 rounded-3xl p-8 xl:p-10">
            <div className="flex items-center justify-between gap-x-4">
              <h3
                id="tier-extended"
                className="text-blue-600 text-2xl font-semibold leading-8"
              >
                Extended
              </h3>
              <p className="rounded-full bg-blue-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-blue-600">
                Most popular
              </p>
            </div>
            <p className="mt-4 text-base leading-6 text-gray-600">
              1 license for up to 3 activations
            </p>
            <p className="mt-6 flex items-baseline gap-x-1">
              <span className="line-through text-2xl font-sans text-gray-500/70">
                $59
              </span>
              <span className="text-5xl font-bold tracking-tight text-gray-900">
                $39
              </span>
            </p>
            <a
              href=""
              aria-describedby="tier-extended"
              className="bg-blue-600 text-white shadow-sm hover:bg-blue-500 mt-6 block rounded-md py-2 px-3 text-center text-base font-medium leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              target="_blank"
            >
              Buy now
            </a>
            <ul
              role="list"
              className="mt-8 space-y-3 text-sm leading-6 text-gray-600 xl:mt-10"
            >
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Lifetime access
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                All AI features
              </li>
              <li className="flex gap-x-3 text-base">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  className="h-6 w-5 flex-none text-blue-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                Use your own OpenAI key
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}