import React from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function SignupPage() {
  return (
    <div 
      className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
    >
      {/* Semi-transparent overlay to lighten the background */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      {/* Signup Box */}
      <div
        className="relative p-10 bg-white rounded-lg shadow-lg w-full max-w-md"
        style={{
          backgroundImage: "url('https://via.placeholder.com/600')", // Add your image URL
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay inside the signup box for better text visibility */}
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Signup
          </h1>

          {/* Email Input */}
          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaEnvelope className="text-gray-500 mx-3" />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          {/* First Name Input */}
          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              placeholder="Enter Your First Name"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          {/* Last Name Input */}
          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="text"
              placeholder="Enter Your Last Name"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          {/* Password Input */}
          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          {/* Confirm Password Input */}
          <div className="flex items-center mb-6 bg-gray-100 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          {/* Signup Button */}
          <button className="w-full px-4 py-2 mb-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800">
            Sign Up
          </button>

          {/* Redirect to Login */}
          <div className="flex justify-center">
            <p className="text-sm">
              Already have an account?{" "}
              <a href="/login" className="text-blue-500 hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
