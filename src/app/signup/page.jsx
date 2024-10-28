"use client"; // Ensure this is at the top to indicate a client component
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import lspic from "../../../public/images/login&signin.jpg";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation'; // Use 'next/navigation' for app directory

const Page = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/users/new", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: userName, email, password })
      });

      if (response.ok) {
        // Use SweetAlert2 for success message
        Swal.fire({
          title: 'Success!',
          text: 'User created successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          // Redirect to the root path after user confirms the alert
          router.push('/'); // Redirect to the root path
        });

        // Clear input fields
        setUserName('');
        setEmail('');
        setPassword('');
      } else {
        const errorData = await response.json();
        console.log("Error:", errorData.message);
        // Use SweetAlert2 for error message
        Swal.fire({
          title: 'Error!',
          text: errorData.message,
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Use SweetAlert2 for general error message
      Swal.fire({
        title: 'Error!',
        text: 'An error occurred while processing your request.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  return (
    <div className="container mx-auto py-24 lg:px-24 max-sm:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <Image
            src={lspic}
            width={500}
            height={500}
            alt="Farmer theme image"
          />
        </div>
        <div className="border-2 p-12 gap-2 shadow-[0_0_25px_rgba(0,0,0,0.3)]">
          <h3 className="text-lime-500 text-2xl font-bold text-center mb-12">Sign up</h3>
          <form onSubmit={handleFormSubmit}>
            <label className="p-2" htmlFor="name">Name</label><br />
            <input
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              type="text"
              name="name"
              placeholder="Your name"
              className="mt-2 w-full input input-bordered"
            /><br /><br />

            <label className="p-2" htmlFor="email">Email</label><br />
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="Enter your Email"
              className="mt-2 input input-bordered w-full"
            /><br /><br />

            <label className="p-2" htmlFor="password">Password</label><br />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              name="password"
              placeholder="Enter your Password"
              className="mt-2 input input-bordered w-full"
            /><br /><br />

            <button type="submit" className="btn btn-success max-sm:w-full lg:w-80 lg:ml-10">Sign up</button>
          </form>
          <div className="mt-5 text-center">
            <p>Or sign up with</p>
            <button className="text-xl text-lime-500 btn btn-circle mt-2 hover:text-red-500 hover:bg-lime-500 animate-pulse">
              <FaGoogle className="text-green-500 hover:text-red-500" />
            </button>
          </div>
          <p className="mt-5 text-center">
            Already have an account? <Link href="/login"><span className="text-lime-500">Login</span></Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
