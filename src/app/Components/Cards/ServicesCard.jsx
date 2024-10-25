import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServicesCard = ({services}) => {
    const {name, category, variety, season, price, image,rating} = services || {}
    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure>
                  
                   <Image className='h-56 p-2 rounded-xl' width={300} height={300}  src={image} alt={name} />
                   
                  
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
                        <button className="badge badge-outline border-green-600 hover:bg-green-400">Buy</button>
                        <button className="badge badge-outline border-green-600  hover:bg-green-400">Details</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ServicesCard;