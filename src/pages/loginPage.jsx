import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!email.trim() || !password.trim()) {
      alert("Please fill in both fields.");
      return;
    }
    
    axios.post("http://localhost:3000/api/user/Login", {
      email: email,
      password: password,
    }, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    .then((res) => {
      console.log(res)
      // Check if res.data.statusText exists and display it in an alert
      if (res.data && res.data.statusText) {
        alert(res.data.statusText);
      } else {
        alert("Login successful!");
      }
    })
    .catch((err) => {
      // Handle error and alert a relevant message
      console.error(err);
      alert("Login failed. Please check your credentials.");})
    
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      {/* Semi-transparent overlay to lighten the background */}
      <div className="absolute inset-0 bg-white bg-opacity-20"></div>

      <div
        className="relative p-10 bg-white rounded-lg shadow-lg w-full max-w-md"
        style={{
          backgroundImage: "url('https://via.placeholder.com/600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
        <div className="absolute inset-0 bg-white bg-opacity-90 rounded-lg"></div>

        <div className="relative z-10">
          <h1 className="text-3xl font-bold text-center text-purple-700 mb-6">Login</h1>

          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaUser className="text-gray-500 mx-3" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter Your User Email"
              aria-label="User Email"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          <div className="flex items-center mb-4 bg-gray-100 rounded-lg">
            <FaLock className="text-gray-500 mx-3" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Your Password"
              aria-label="Password"
              className="w-full p-2 bg-transparent border-none focus:outline-none"
            />
          </div>

          <button
            className="w-full px-4 py-2 mb-4 text-white bg-purple-700 rounded-lg hover:bg-purple-800"
            onClick={login}>
            Login
          </button>

          <div className="flex justify-between">
            <button className="text-sm text-blue-500 hover:underline">Forget Password</button>
            <button className="text-sm text-blue-500 hover:underline">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
}
