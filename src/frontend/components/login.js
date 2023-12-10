import React from 'react';
import image from '../Resources/Register-Background.png'; // Replace with the correct path to your image
import googleSVG from '../Resources/google.svg'
import { Link as RouterLink } from 'react-router-dom';

const LoginComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100" style={{ backgroundImage: 'linear-gradient(115deg, #3498db, #8e44ad)' }}>
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left side */}
        <div className="flex flex-col justify-center p-8 md:p-14">
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              id="pass"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
            />
          </div>
          <div className="flex justify-between w-full py-4">
            <div className="mr-24">
              <input type="checkbox" name="ch" id="ch" className="mr-2" />
              <span className="text-md">Remember for 30 days</span>
            </div>
            <span className="font-bold text-md">Forgot password</span>
          </div>
          <RouterLink to="/home">
          <button
            className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600"
          >
            Sign in
          </button>
          </RouterLink>
          <button
            className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-600 hover:text-white"
          >
            <img src={googleSVG} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <RouterLink to="/signup" className="font-bold text-blue-600">Sign up for free</RouterLink>
          </div>
        </div>
        {/* Right side */}
        <div className="relative">
          <img
            src={image}
            alt="img"
            className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
