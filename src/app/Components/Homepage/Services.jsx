"use client";
import React from 'react';
import { services } from '../../lib/services'
import ServicesCard from '../Cards/ServicesCard';
const Services = () => {
    console.log(services);
    return (
        <div className='text-slate-800 min-h-screen mt-40'>
        <div className='text-center container mx-auto'>
            <h3 className='text-4xl uppercase font-bold text-lime-600'>
                --- Fruits & Vegetables ---
            </h3>
            <div className='divider w-3/5 divider-success mx-auto'></div>
            <p className='w-2/5 mx-auto'>
                Healthy food is essential for good health. It provides the body with the nutrients it needs to function effectively.
            </p>
        </div>
        <div className='container mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {
                services.map((service) => (
                    <ServicesCard key={service._id} services={service} />
                ))
            }
        </div>
    </div>
    );
};

export default Services;