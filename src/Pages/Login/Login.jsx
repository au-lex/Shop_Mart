import React from 'react';
import { FaGoogle } from 'react-icons/fa';
import { MdEmail, MdLock } from 'react-icons/md';
import 'tailwindcss/tailwind.css';

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-full max-w-md p-8 space-y-8 bg-white">
        <div className="flex justify-center mb-4">
          <img
            src="https://img.freepik.com/free-photo/3d-render-secure-login-password-illustration_107791-16640.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=ais_user"
            alt="Logo"
            className="w-full h-[400px] object-cover"
          />
        </div>
        <h2 className="text-2xl font-bold text-center">Welcome Back!</h2>
        <p className="text-center text-gray-600">
          Please login to your account to continue. If you don't have an account, you can create one.
        </p>
        <form className="mt-8 space-y-6">
          <div className="relative">
            <MdEmail className="absolute w-6 h-6 text-gray-400 top-2.5 left-3" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="w-full px-10 py-3 text-sm border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="relative">
            <MdLock className="absolute w-6 h-6 text-gray-400 top-2.5 left-3" />
            <input
              type="password"
              name="passwor"
              placeholder="Password"
              required
              className="w-full px-10 py-3 text-sm border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-3 text-sm font-semibold text-white bg-yellow-500 border border-yellow-500 rounded-lg hover:bg-yellow-600"
            >
              Login
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
              className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold text-white bg-red-500 border border-red-500 rounded-lg hover:bg-red-600"
            >
              <FaGoogle className="mr-2" />
              Login with Google
            </button>
          </div>
          <div className="flex justify-between mt-4">
            <a href="#" className="text-sm font-semibold text-blue-500 border-b-2 border-transparent hover:border-blue-500">
              Forgot Password?
            </a>
            <a href="#" className="text-sm font-semibold text-blue-500 border-b-2 border-transparent hover:border-blue-500">
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
