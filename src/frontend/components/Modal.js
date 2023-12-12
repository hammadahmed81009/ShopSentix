import React from "react";

const Modal = ({ isOpen, closeModal, messageType }) => {
  const getTitle = () => {
    switch (messageType) {
      case "Wrong Password":
        return "Wrong Password";
      case "User Not Found":
        return "User Not Found";
      case "Unexpected Error":
        return "Unexpected Error Occurred";
      case "Please agree to the Terms of Use and Privacy Policy":
        return "Error";
      case "Wrong Details":
        return "Error";
      default:
        return "Modal Title";
    }
  };

  const getMessage = () => {
    switch (messageType) {
      case "Wrong Password":
        return "The password you entered is incorrect.";
      case "User Not Found":
        return "User not found. Please check your credentials.";
      case "Unexpected Error":
        return "An unexpected error occurred. Please try again later.";
      case "Please agree to the Terms of Use and Privacy Policy":
        return "Please agree to the Terms of Use and Privacy Policy";
      case "Wrong Details":
        return "Wrong Details";
      default:
        return "Default message goes here.";
    }
  };

  return (
    <div
      id="popup-modal"
      tabIndex="-1"
      className={`${
        isOpen ? "fixed" : "hidden"
      } overflow-y-auto overflow-x-hidden top-0 right-0 bottom-0 left-0 z-50 flex items-center justify-center`}
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={closeModal}
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <svg
              className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
            <h3 className="mb-5 text-lg font-normal text-white dark:text-white">
              {getTitle()}
            </h3>
            <p className="text-white">{getMessage()}</p>
            <button
              data-modal-hide="popup-modal"
              type="button"
              className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              onClick={closeModal}
            >
              Okay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
