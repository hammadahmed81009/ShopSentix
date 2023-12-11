// Loader.js
import React from "react";

const Loader = () => {
  return (
    <button
      type="button"
      className="bg-indigo-500 text-white px-4 py-2 rounded disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
      disabled
    >
      <svg
        className="animate-spin h-5 w-5 mr-3 border-t-2 border-b-2 border-white rounded-full"
        viewBox="0 0 24 24"
      ></svg>
      Processing...
    </button>
  );
};

export default Loader;
