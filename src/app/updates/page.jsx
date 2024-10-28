'use client';
import React, { useState, useEffect } from "react";

const Page = ({ productId }) => { // Pass productId as prop
    const [productData, setProductData] = useState({
        name: '',
        category: '',
        variety: '',
        season: '',
        price: '',
        rating: '',
        image: ''
    });

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`/api/products/${productId}`); // Fetch the product details
            if (!response.ok) {
                console.error('Failed to fetch product data:', response.statusText);
                return;
            }
            const data = await response.json();
            setProductData(data);
        };
        
        fetchProduct();
    }, [productId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/products/${productId}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(productData)
            });
    
            // Log the response for debugging
            const responseData = await response.json();
            console.log("Response Data:", responseData); // Log response
    
            if (!response.ok) {
                throw new Error(responseData.message || 'Failed to update the product');
            }
    
            alert(responseData.message);
        } catch (error) {
            console.error('Error:', error);
            alert('An unexpected error occurred: ' + error.message);
        }
    };
    

    return (
        <div>
            <form onSubmit={handleUpdate} className="max-w-lg mx-auto p-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        name="name"
                        value={productData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        value={productData.category}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Variety</label>
                    <input
                        type="text"
                        name="variety"
                        value={productData.variety}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Season</label>
                    <input
                        type="text"
                        name="season"
                        value={productData.season}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Price</label>
                    <input
                        type="number"
                        name="price"
                        value={productData.price}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Rating</label>
                    <input
                        type="number"
                        name="rating"
                        step="0.1"
                        max="5"
                        value={productData.rating}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Image URL</label>
                    <input
                        type="url"
                        name="image"
                        value={productData.image}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded mt-1"
                    />
                </div>
                <button
                    type="submit"
                    className="mt-4 w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default Page;
