import React from 'react';
import { MdEmail } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-white">
        <span className="flex items-center justify-center">
          <SiShopware className="text-[28px] w-10 text-yellow-500" />
          <h1 className="text-2xl font-extrabold text-be-500">
            Crypto<span className="text-yellow-500">Cart</span>
          </h1>
        </span>
        <h2 className="text-2xl font-bold text-center">Forgot Password</h2>
        <p className="text-center text-gray-600">
          Enter your email address to reset your password.
        </p>
        <form className="mt-8 space-y-6">
          <div className="relative">
            <MdEmail className="absolute w-6 h-6 text-gray-400 top-2.5 left-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-10 py-3 text-sm border rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className='w-full px-4 py-3 text-sm font-semibold text-white bg-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-600'
            >
              Reset Password
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Remember your password? <Link to="/login" className="text-blue-500 border-b-2 border-transparent hover:border-blue-500">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;