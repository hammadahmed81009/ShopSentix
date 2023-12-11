import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import image from '../Resources/Register-Background.png'; // Replace with the correct path to your image
import googleSVG from '../Resources/google.svg';
import { Link as RouterLink } from 'react-router-dom';

const LoginComponent = () => {
  const history = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post('http://localhost:8000/login', {
          email,
          password,
        })
        .then((res) => {
          if (res.data == 'exist') {
            history('/home', { state: { id: email } });
          } else if (res.data === 'notexist') {
            alert('User has not signed up');
          } else if (res.data === 'wrongpassword') {
            alert('Incorrect password');
          } else {
            alert('Unknown error occurred');
          }
        })
        .catch((e) => {
          alert('wrong details');
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-100"
      style={{ backgroundImage: 'linear-gradient(115deg, #3498db, #8e44ad)' }}
    >
      <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
        {/* Left side */}
        <form
          action="POST"
          className="flex flex-col justify-center p-8 md:p-14"
        >
          <span className="mb-3 text-4xl font-bold">Welcome back</span>
          <span className="font-light text-gray-400 mb-8">
            Welcome back! Please enter your details
          </span>
          <div className="py-4">
            <span className="mb-2 text-md">Email</span>
            <input
              type="email"
              className="w-full p-2 border border-gray-300 rounded-md placeholder:font-light placeholder:text-gray-500"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              name="email"
              id="email"
            />
          </div>
          <div className="py-4">
            <span className="mb-2 text-md">Password</span>
            <input
              type="password"
              name="pass"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
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
          <RouterLink>
            <button onClick={submit} className="w-full bg-blue-600 text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-blue-600 hover:border hover:border-blue-600">
              Sign in
            </button>
          </RouterLink>
          <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-blue-600 hover:text-white">
            <img src={googleSVG} alt="img" className="w-6 h-6 inline mr-2" />
            Sign in with Google
          </button>
          <div className="text-center text-gray-400">
            Don't have an account?
            <RouterLink to="/signup" className="font-bold text-blue-600">
              Sign up for free
            </RouterLink>
          </div>
        </form>
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
