"use client";
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';

// Import Swiper modules
import { Autoplay, Navigation } from 'swiper/modules';

const Banner = () => {
    const swiperRef = useRef(null);

    return (
        <div className="relative w-full">
            <Swiper
                ref={swiperRef}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                navigation={true} // Enables navigation buttons
                modules={[Autoplay, Navigation]}
                className="h-[600px]"
            >
                {banner.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-full overflow-hidden flex items-center justify-center">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out transform scale-100 hover:scale-105"
                                style={{
                                    backgroundImage: `linear-gradient(45deg, rgba(7, 25, 82, 0.7), rgba(0, 0, 0, 0.5)), url('/bannerimages/${index + 1}.jpg')`,
                                }}
                            ></div>
                            <div className="relative z-10 p-5 text-center text-white">
                                <h1 className="text-4xl font-bold">{item.title}</h1>
                                <p className="mt-2">{item.deserialize}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            
            {/* Custom Navigation Buttons */}
     
        </div>
    );
};

export default Banner;

const banner = [
    {
        title: "Welcome to FreshBuy",
        deserialize: "The ultimate online shopping destination for fresh produce, gourmet ingredients, and everyday essentials.",
    },
    {
        title: "Explore Our Fresh Produce",
        deserialize: "Find the freshest fruits and vegetables sourced from local farms.",
    },
    {
        title: "Gourmet Ingredients Just for You",
        deserialize: "Shop a variety of gourmet ingredients for all your cooking needs.",
    },
];
