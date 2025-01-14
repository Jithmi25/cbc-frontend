import axios from "axios";
import { useEffect, useState } from "react";
import { FaPlus, FaTrash, FaPencilAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

export default function AdminProduct() {
    const [products, setProducts] = useState([]);
  
    // Fetch products from backend
    const fetchProducts = () => {
      axios
        .get("http://localhost:3000/api/product")
        .then((res) => {
          setProducts(res.data); // Ensure backend returns an array of products
        })
        .catch((err) => {
          console.error("Error fetching products:", err);
          toast.error("Failed to fetch products.");
        });
    };
  
    useEffect(() => {
      fetchProducts(); // Fetch products on component mount
    }, []);
  
    // Delete product handler
    const deleteProduct = async (productId) => {
      try {
        const token = localStorage.getItem("token");
  
        const response = await axios.delete(
          `http://localhost:3000/api/product/${productId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        toast.success(response.data.message || "Product deleted successfully!");
        fetchProducts(); // Refetch products after deletion
      } catch (error) {
        console.error("Error deleting product:", error);
        toast.error("Failed to delete product.");
      }
    };
    return (
    <div className="p-8 bg-gray-100 min-h-screen relative">
      <Link
        to="/adminHome/products/addProducts"
        className="absolute right-[25px] bottom-[25px] text-[25] bg-pink-600 p-5 text-white rounded-lg hover:bg-pink-400 hover:text-black"
      >
        <FaPlus />
      </Link>
      <h1 className="text-2xl font-bold text-gray-800 mb-6">
        Admin Product Page
      </h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-left text-gray-700">
              <th className="py-3 px-4 font-semibold">Product Id</th>
              <th className="py-3 px-4 font-semibold">Product Name</th>
              <th className="py-3 px-4 font-semibold">Price</th>
              <th className="py-3 px-4 font-semibold">Last Price</th>
              <th className="py-3 px-4 font-semibold">Description</th>
              <th className="py-3 px-4 font-semibold">Stock Count</th>
              <th className="py-3 px-4 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={product._id}
                className={`${index % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-gray-100`}
              >
                <td className="py-3 px-4">{product.productId}</td>
                <td className="py-3 px-4">{product.productName}</td>
                <td className="py-3 px-4 text-green-600 font-bold">
                  ${product.price?.toFixed(2) || "0.00"}
                </td>
                <td className="py-3 px-4 line-through text-gray-500">
                  ${product.lastPrice?.toFixed(2) || "0.00"}
                </td>
                <td className="py-3 px-4">{product.description}</td>
                <td className="py-3 px-4">{product.stockCount}</td>
                <td className="py-3 px-4 flex space-x-2">
                  <button
                    className="p-2 bg-red-500 text-white rounded hover:bg-red-600"
                    onClick={() => deleteProduct(product.productId)} >

                    <FaTrash />
                  </button>
                  <button className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    <FaPencilAlt />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
}
