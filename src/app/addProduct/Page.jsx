'use client';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

const Page = () => {
    const [productData, setProductData] = useState({
        name: '',
        category: '',
        variety: '',
        season: '',
        price: '',
        rating: '',
        image: ''
    });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch("/api/users/new", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(productData)
            });

            if (response.ok) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Product created successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                }).then(() => router.push('/'));
                setProductData({
                    name: '',
                    category: '',
                    variety: '',
                    season: '',
                    price: '',
                    rating: '',
                    image: ''
                });
            } else {
                const errorData = await response.json();
                Swal.fire({
                    title: 'Error!',
                    text: errorData.message,
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred while processing your request.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    };

    return (
        <form onSubmit={handleFormSubmit} className="max-w-lg mx-auto p-4">
            {/* Form fields for each input */}
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
                Add Product
            </button>
        </form>
    );
};

export default Page;
