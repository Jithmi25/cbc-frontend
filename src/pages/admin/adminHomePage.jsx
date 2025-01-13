import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { FaTachometerAlt, FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProduct from "./adminProducts";

export default function AdminHomePage() {
  return (
    <div className="bg-pink-50 w-full h-screen flex">
      {/* Sidebar */}
      <div className="w-[20%] h-screen flex bg-pink-500 flex-col items-center py-4">
        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-black"
          to="/adminHome/dashboard"
        >
          <FaTachometerAlt className="mr-2" />
          Dashboard
        </Link>
        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-black"
          to="/adminHome/products"
        >
          <FaBox className="mr-2" />
          Products
        </Link>
        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-black"
          to="/adminHome/orders"
        >
          <FaShoppingCart className="mr-2" />
          Orders
        </Link>
        <Link
          className="flex flex-row items-center mb-4 text-white hover:text-black"
          to="/adminHome/customers"
        >
          <FaUsers className="mr-2" />
          Customers
        </Link>
      </div>

      {/* Main Content */}
      <div className="bg-pink-200 w-[80%] h-screen p-4">
        <Routes>
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="products" element={<AdminProduct/>} />
          <Route path="orders" element={<h1>Orders</h1>} />
          <Route path="customers" element={<h1>Customers</h1>} />
        </Routes>
      </div>
    </div>
  );
}
