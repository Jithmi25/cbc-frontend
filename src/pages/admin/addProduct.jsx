import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast"; // Correct import for react-hot-toast
import { useNavigate } from "react-router-dom";

export default function AddProducts() {
    const [productId, setProductId] = useState("");
    const [productName, setProductName] = useState("");
    const [alternativeNames, setAlternativeNames] = useState("");
    const [images, setImages] = useState("");
    const [price, setPrice] = useState("");
    const [lastPrice, setLastPrice] = useState("");
    const [description, setDescription] = useState("");
    const [stockCount, setStockCount] = useState("");
    const navigate = useNavigate()

    async function submitHaddle(e) {
        e.preventDefault(); // Prevent page reload
        const altnames = alternativeNames.split(",");
        const imageUrl = images.split(",");

        const product = {
            productId: productId,
            productName: productName,
            altName: altnames,
            images: imageUrl,
            price: price,
            lastPrice: lastPrice,
            description: description,
            stockCount: stockCount,
        };

        const token = localStorage.getItem("token");
        try {
            await axios.post("http://localhost:3000/api/product", product, {
                headers: {
                    Authorization: "Bearer " + token,
                },
            });
            navigate("/adminHome/products")
            toast.success("Product added successfully! 🏆"); // Display success notification
        } catch (err) {
            console.error(err);
            toast.error("Failed to add product! 🙄"); // Display error notification
        }
    }

    return (
        <div className="w-[100%] h-[100%] overflow-y-auto scroll-smooth scrollbar-thin">
            <h1 className="text-2xl font-bold text-center">Add Product Form</h1>
            <div className="flex flex-col items-center">
                <form
                    className="space-y-4 bg-white p-6 shadow-md rounded-md w-[700px]"
                    onSubmit={submitHaddle}
                >
                    <div className="flex flex-col">
                        <label htmlFor="productId" className="mb-1 font-medium">
                            Product ID
                        </label>
                        <input
                            id="productId"
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product ID"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="productName" className="mb-1 font-medium">
                            Product Name
                        </label>
                        <input
                            id="productName"
                            type="text"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product Name"
                            value={productName}
                            onChange={(e) => setProductName(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="alternativeNames" className="mb-1 font-medium">
                            Alternative Names
                        </label>
                        <textarea
                            id="alternativeNames"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Alternative Names (comma-separated)"
                            value={alternativeNames}
                            onChange={(e) => setAlternativeNames(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="images" className="mb-1 font-medium">
                            Images (URLs)
                        </label>
                        <textarea
                            id="images"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Image URLs (comma-separated)"
                            value={images}
                            onChange={(e) => setImages(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="price" className="mb-1 font-medium">
                            Price
                        </label>
                        <input
                            id="price"
                            type="number"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="lastPrice" className="mb-1 font-medium">
                            Last Price
                        </label>
                        <input
                            id="lastPrice"
                            type="number"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Last Price"
                            value={lastPrice}
                            onChange={(e) => setLastPrice(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="description" className="mb-1 font-medium">
                            Description
                        </label>
                        <textarea
                            id="description"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Product Description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="stockCount" className="mb-1 font-medium">
                            Stock Count
                        </label>
                        <input
                            id="stockCount"
                            type="number"
                            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter Stock Count"
                            value={stockCount}
                            onChange={(e) => setStockCount(e.target.value)}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}
