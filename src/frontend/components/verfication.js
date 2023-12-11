import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const VerificationPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // Hook to navigate to different pages
  const { email } = useParams();

  const verifyOtp = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/verify-otp-and-register', {
        email,
        password: '',
        otp,
      });

      if (response.status === 200) {
        // Navigate to the Hero page
        navigate('/home');
      }
    } catch (err) {
      setError('Invalid OTP');
      console.error(err);
    }
  };

  return (
    <div>
      <body className="bg-gray-100 flex items-center justify-center h-screen">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6">Verification Code</h1>

          <p className="text-gray-700 mb-4">
            A 6-digit verification code has been sent to your email.
          </p>

          <form action="#" method="post" onSubmit={verifyOtp}>
            <div className="mb-4">
              <label
                htmlFor="verificationCode"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Verification Code
              </label>
              <input
                type="text"
                id="verificationCode"
                name="verificationCode"
                className="w-full border rounded px-3 py-2 focus:outline-none focus:border-blue-500"
                maxLength="6"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              ></input>
            </div>

            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
            >
              Verify
            </button>
          </form>

          {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
      </body>
    </div>
  );
};

export default VerificationPage;
