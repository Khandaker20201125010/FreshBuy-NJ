// components/Page.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { MdOutlineSystemUpdateAlt } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";
import Swal from "sweetalert2";

const Page = () => {
  const [products, setProducts] = useState([]);

  // Fetch the products from the server
  const fetchProduct = async () => {
    const response = await fetch("/api/users"); // Adjust to your correct API endpoint
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

 const handleDelete = async (product) => {
    const confirmed = await Swal.fire({
        title: "Are you sure?",
        text: "This action cannot be undone!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    });

    if (confirmed.isConfirmed) {
        try {
            await fetch(`/api/users/${product._id}`, {
                method: "DELETE",
            });

            // Filter out the deleted product from the state
            const filteredProducts = products.filter((item) => item._id !== product._id);
            setProducts(filteredProducts); // Update the state with the new product list

            // Optionally, you can fetch the products again
            // fetchProduct(); // Uncomment if you want to fetch the latest products again
            
            Swal.fire("Deleted!", "Your product has been deleted.", "success");
        } catch (error) {
            console.error(error);
            Swal.fire("Error!", "There was an error deleting the product.", "error");
        }
    }
};

  return (
    <div>
      <div className="container mx-auto">
        <div>
          <h1 className="text-3xl">Management</h1>
        </div>
        <div className="flex justify-between mt-2">
          <h3>Total Selected Items: {products.length}</h3>
        </div>
        <div className="overflow-x-auto mt-5">
          <table className="table">
            <thead>
              <tr>
                <th>No</th>
                <th>Image</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Update</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={100}
                            height={100}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <Link href={"/updates"}>
                      <button className="btn btn-ghost btn-md hover:bg-black rounded-full">
                        <MdOutlineSystemUpdateAlt color="green" size={25} />
                      </button>
                    </Link>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDelete(item)}
                      className="btn btn-ghost btn-md hover:bg-black rounded-full"
                    >
                      <RiDeleteBin6Fill color="red" size={25} />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
