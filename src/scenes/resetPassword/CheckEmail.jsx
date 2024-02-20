// ChekEmail.js
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CheckEmail = () => {
  const [email, setEmail] = useState('');

  const handleVerify = () => {
    // Implement your verification logic here
    console.log(`Verifying email: ${email}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div style={{ width: '30%' }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Verify Email</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FaUser className="absolute text-gray-500 right-2 top-3" />
          </div>
        </div>
        <Link to="/ResetPassword">
          <button
            className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline wider-button"
            style={{ width: '40%' }}
            type="button"
            onClick={handleVerify}
          >
            Vérifier
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CheckEmail;
