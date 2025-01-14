import { useEffect, useState } from "react";

export default function AddProducts(){

    const [productId,setProductId] = useState("");
    const [productName,setProductName] = useState("");
    const [alternativeNames,setAlternativeNames] = useState("");
    const [images,setImages] = useState("");
    const [price,setPrice] = useState("");
    const [lastPrice,setLastPrice] = useState("");
    const [description,setDescription] = useState("");
    const [stockCount,setStockCount] = useState("");


    return(
        <div className="w-[100%] h-[100%] overflow-y-auto scroll-smooth scroll crollbar-none ">
      <h1 className="text-2xl font-bold text-center">Add Product Form</h1>
      <div className="flex flex-col items-center">
        <form className="space-y-4 bg-white p-6 shadow-md rounded-md w-[400px]">
          <div className="flex flex-col">
                <label className="mb-1 font-medium">Product Id</label>
                <input type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Product ID"/></div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Product Name</label>
                <input type="text"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"placeholder="Enter Product Name"/> </div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Alternative Names</label>
                <textarea
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Alternative Names (comma-separated)" ></textarea>
            </div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Images (URLs)</label>
                <textarea
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Image URLs (comma-separated)" ></textarea>
            </div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Price</label>
                <input type="number"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Product Price"/></div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Last Price</label>
                <input type="number"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Last Price"/></div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Description</label>
                <textarea
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Product Description"></textarea>
            </div>
            <div className="flex flex-col">
                <label className="mb-1 font-medium">Stock Count</label>
                <input type="number"
                className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter Stock Count"/>
            </div>
            <button type="submit" className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600" >
                Submit</button>
            </form>
             </div>
        </div>
    )
}