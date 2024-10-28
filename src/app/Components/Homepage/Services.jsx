"use client";
import React, { useEffect, useState } from "react";
import ServicesCard from "../Cards/ServicesCard";
const Services = () => {
  const [products, setProducts] = useState([]);

  const fetchProduct = async () => {
    const response = await fetch("/api/users");
    const data = await response.json();
    setProducts(data);
  };
  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <div className="text-slate-800 min-h-screen mt-40">
      <div className="text-center container mx-auto">
        <h3 className="text-4xl uppercase font-bold text-lime-600">
          --- Fruits & Vegetables ---
        </h3>
        <div className="divider w-3/5 divider-success mx-auto"></div>
        <p className="w-2/5 mx-auto">
          Healthy food is essential for good health. It provides the body with
          the nutrients it needs to function effectively.
        </p>
      </div>
       <div className="container mx-auto">
       Total item:{products.length}
       </div>
      <div className="container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
       
        {products.map((product, index) => (
          <ServicesCard key={product.name || index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Services;
