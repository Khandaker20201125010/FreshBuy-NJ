import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServicesCard = ({services}) => {
    const {name, category, variety, season, price, image,rating} = services || {}
    return (
        <div>
            <div className="mx-auto card bg-base-100 w-96 shadow-[0_0_25px_rgba(0,0,0,0.3)] hover:scale-105">
                <figure>
                  
                   <Image className='h-56 mt-5 rounded-xl' width={350} height={300}  src={image} alt={name} />
                   
                  
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                       {name}
                       
                    </h2>
                  <div className='flex justify-between gap-20'>
                  <p className=''>{season}</p>
                  <p className='flex gap-2'>Rating:{rating} <span className='text-xl text-yellow-500'><FaStar></FaStar></span></p>
                  </div>
                  <div>
                    <h3 className='text-xl font-bold'>Price: {price}$</h3>
                  </div>
                    <div className="card-actions justify-end">
                        <button className="badge badge-outline badge-lg border-green-600 hover:bg-green-400">Buy</button>
                        <button className="badge badge-outline badge-lg border-green-600  hover:bg-green-400">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;