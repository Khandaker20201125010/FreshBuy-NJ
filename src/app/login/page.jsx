"use client";
import Image from "next/image";
import React, { useState } from "react"; // Import useState to manage form input
import lspic from "../../../public/images/login&signin.jpg";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";
import Swal from "sweetalert2"; // Import SweetAlert2 for alerts

const Page = () => {
  const [email, setEmail] = useState(''); // State for email
  const [password, setPassword] = useState(''); // State for password

  const handelLogin = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Implement your login logic here
    try {
      const response = await fetch("/api/login", { // Adjust the API endpoint as needed
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Send email and password
      });

      if (response.ok) {
        // Assuming the response contains user info on successful login
        const userData = await response.json();
        console.log("Login successful:", userData);
        // Redirect user to home page or perform any other actions
        window.location.href = "/"; // Redirect to root after successful login
      } else {
        const errorData = await response.json();
        console.error("Login error:", errorData.message);
        if (errorData.message === "User not found") {
          Swal.fire({
            title: 'Error!',
            text: 'User not found. Please check your email or sign up.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
        } else {
          // Handle other errors
          Swal.fire({
            title: 'Error!',
            text: errorData.message,
            icon: 'error',
            confirmButtonText: 'OK'
          });
        }
      }
    } catch (error) {
      console.error("An error occurred:", error);
      // Handle fetch error (e.g., show alert)
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
          <h3 className="text-lime-500 text-2xl font-bold text-center mb-12">
            Login
          </h3>
          <form onSubmit={handelLogin}> {/* Fixed the typo here */}
            <label className="p-2" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="email" // Changed to email type for validation
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered w-full max-w-sm"
              value={email} // Controlled input
              onChange={(e) => setEmail(e.target.value)} // Update state on change
            />
            <br />
            <br />
            <label className="p-2" htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="password" // Changed to password type for security
              name="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full max-w-sm"
              value={password} // Controlled input
              onChange={(e) => setPassword(e.target.value)} // Update state on change
            />
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-success max-sm:w-full lg:w-80 lg:ml-10"
            >
              Login
            </button>
          </form>
          <div className="mt-5 text-center">
            <p>Or Login with</p>
            <button className="text-xl text-lime-500 btn btn-circle mt-2 hover:text-red-500 hover:bg-lime-500 animate-pulse">
              <FaGoogle className="text-green-500 hover:text-red-500" />
            </button>
          </div>
          <p className="mt-5 text-center">
            Don't have an account?
            <Link href={"/signup"}>
              <span className="text-lime-500"> Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
