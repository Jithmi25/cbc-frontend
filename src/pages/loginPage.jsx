import React from "react";
import { FaUser, FaLock } from "react-icons/fa";

export default function LoginPage() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
    >
      {/* Semi-transparent overlay to lighten the background */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      {/* Login Box */}
      <div
        className="relative p-10 bg-white rounded-lg shadow-lg w-full max-w-md"
        style={{
          backgroundImage: "url('https://via.placeholder.com/600')", // Add your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay inside the login box for better text visibility */}
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Login
          </h1>

          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              placeholder="Enter Your User Name"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          <button className="w-full px-4 py-2 mb-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800">
            Login
          </button>

          <div className="flex justify-between">
            <button className="text-sm text-blue-500 hover:underline">
              Forget Password
            </button>
            <button className="text-sm text-blue-500 hover:underline">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
