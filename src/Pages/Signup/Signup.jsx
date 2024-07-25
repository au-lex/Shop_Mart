import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail, MdLock } from 'react-icons/md';
import { SiShopware } from 'react-icons/si';
import { Link } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-white">
        <span className="flex items-center justify-center">
          <SiShopware className="text-[28px] w-10 text-yellow-500" />
          <h1 className="text-2xl font-extrabold text-blue0">
            Crypto<span className="text-yellow-500">Cart</span>
          </h1>
        </span>
        <h2 className="text-2xl font-bold text-center">Create Account</h2>
        <p className="text-center text-gray-600">
          Sign up to create a new account.
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
          <div className="relative">
            <MdLock className="absolute w-6 h-6 text-gray-400 top-2.5 left-3" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              className="w-full px-10 py-3 text-sm border rounded-lg focus:outline-none focus:border-yellow-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className='w-full px-4 py-3 text-sm font-semibold text-white bg-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-600'
            >
              Sign Up
            </button>
          </div>
          <div className="flex items-center justify-between">
            <hr className="w-full border-gray-300" />
            <span className="px-2 text-gray-500">or</span>
            <hr className="w-full border-gray-300" />
          </div>
          <div>
            <button
              type="button"
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold border border-yellow-500 rounded-lg hover:bg-red-600"
            >
              <FcGoogle className="mr-2 text-[1.5rem]" />
              Sign Up with Google
            </button>
          </div>
          <div className="text-center mt-4">
            <p className="text-gray-600 text-sm">
              Already have an account? <Link to="/login" className="text-blue-500 border-b-2 border-transparent hover:border-blue-500">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
