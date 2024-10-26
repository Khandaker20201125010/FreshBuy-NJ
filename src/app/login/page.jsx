"use client";
import Image from "next/image";
import React from "react";
import lspic from "../../../public/images/login&signin.jpg";
import { FaGoogle } from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const handelLogin = async () => {};
  return (
    <div className="container mx-auto py-24 lg:px-24 max-sm:px-5">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
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
          <from onSubmit={handelLogin}>
            <label className="p-2" htmlFor="email">
              Email
            </label>
            <br />
            <input
              type="text"
              name="email"
              placeholder="Enter your Email"
              className="input input-bordered w-full max-w-sm"
            />
            <br />
            <br />
            <label className="p-2 " htmlFor="password">
              Password
            </label>
            <br />
            <input
              type="text"
              name="password"
              placeholder="Enter your Password"
              className="input input-bordered w-full max-w-sm "
            />
            <br />
            <br />
            <button
              type="submit"
              className="btn btn-success max-sm:w-full lg:w-80 lg:ml-10"
            >
              Login
            </button>
          </from>
          <div className="mt-5 text-center">
            <p>Or Login with</p>
            <button className="text-xl text-lame-500 btn btn-circle mt-2 hover:text-red-500 hover:bg-lime-500 animate-pulse ">
              <FaGoogle className="text-green-500 hover:text-red-500" />
            </button>
          </div>
          <p className="mt-5 text-center">
            Don't have an account?{" "}
            <Link href={"/signup"}>
              <span className="text-lime-500">Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
