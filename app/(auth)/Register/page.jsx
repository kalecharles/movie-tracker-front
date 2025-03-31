import React from 'react';

 function RegisterPage() {
  return (
  <div className="flex items-center justify-center h-screen bg-gray-800">
  <div className="bg-white bg-opacity-10 p-8 rounded-lg w-96">
  <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">Register for Movie Tracker</h2>

  <div className="mb-4">
  <input
  type="text"
  placeholder="Username or Email"
  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
  />
  </div>

  <div className="mb-4">
  <input
  type="password"
  placeholder="Password"
  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
  />
  </div>

  <div className="mb-6">
  <input
  type="password"
  placeholder="Confirm Password"
  className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
  />
  </div>

  <button className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-2 rounded-full">
  Register
  </button>

  <div className="mt-4 text-sm text-gray-400 text-center">
  <a href="#" className="hover:text-white">Already have an account? Login</a>
  </div>
  </div>
  </div>
  );
 }

 export default RegisterPage;