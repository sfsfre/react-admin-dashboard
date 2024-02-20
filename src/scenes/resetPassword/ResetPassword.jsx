// ResetPassword.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = () => {
    // Implement your reset password logic here
    console.log('Resetting password...');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-800">
      <div style={{ width: '30%' }}>
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Reset Password</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
            New Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="newPassword"
              type="password"
              placeholder="New Password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <FaLock className="absolute text-gray-500 right-2 top-3" />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
            Confirm Password
          </label>
          <div className="relative">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <FaLock className="absolute text-gray-500 right-2 top-3" />
          </div>
        </div>
        <Link to="/Login">
        <button
          className="bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline wider-button"
          style={{ width: '40%' }}
          type="button"
          onClick={handleResetPassword}
        >
          Reset Password
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ResetPassword;
