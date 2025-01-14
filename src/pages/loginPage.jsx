import React, { useState } from "react";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
      if (!email.trim() || !password.trim()) {
      toast.error("Please fill in both fields.");
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
        console.log(res);
    
        if (res.data.user == null) {
          toast.error(res.data.message || "Invalid credentials.");
          return;
        }
      localStorage.setItem("token", res.data.token);
      
      if (res.data.user.type == "admin") {
        window.location.href = "/adminHome";
      } else {
        window.location.href = "/";
      }
      
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Login successful! 😊</p>
                <p className="mt-1 text-sm text-gray-500">Welcome</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    })
    .catch((err) => {
      console.error(err);
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? 'animate-enter' : 'animate-leave'
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-gray-900">Login failed.😔</p>
                <p className="mt-1 text-sm text-gray-500">Please check your credentials.</p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >Close</button>
          </div>
        </div>
      ))

    });
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
