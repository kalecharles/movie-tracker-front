import React from 'react';

function LoginPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="bg-white bg-opacity-10 p-8 rounded-lg w-96">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">Login to Movie Tracker</h2>

        <div className="mb-4">
          <input
            type="text"
            placeholder="Username or Email"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
          />
        </div>

        <div className="mb-6">
          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
          />
        </div>

        <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-full">
          Login
        </button>

        <div className="flex justify-between mt-4 text-sm text-gray-400">
          <a href="#" className="hover:text-white">Forgot Password?</a>
          <a href="#" className="hover:text-white">Register</a>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;