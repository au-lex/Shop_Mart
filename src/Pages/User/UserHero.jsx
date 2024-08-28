import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const Hero = () => {
  const images = [
    {
      src: "https://garamart.com/wp-content/uploads/2024/07/ears-1.png",
      alt: "Wireless Earbuds"
    },
    // Other images can be added here
  ];

  return (
    <section className="banner-section pt-[12rem] py-[4rem] bg-gradient-to-r from-orange-500 to-yellow-600 relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Upgrade Your Tech Arsenal
            </h1>
            <p className="text-xl text-white mb-8">
              Discover cutting-edge gadgets to enhance your digital lifestyle
            </p>
            <div className="flex space-x-4">
              <button className="bg-transparent w-full h-[3rem] flex items-center justify-center border border-white text-white font-bold rounded-full hover:bg-blue-700 transition duration-300 shadow-lg transform hover:scale-105">
                <FaShoppingCart className="mr-2" />
                Shop Now
              </button>
              <button className="bg-white w-full h-[3rem] flex items-center justify-center text-yellow-600 font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300 shadow-lg transform hover:scale-105">
                Explore
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative w-full h-[300px]  flex items-center justify-center">
              {/* Animation container */}
              <div className="absolute flex overflow-hidden justify-center items-center w-full h-full">
                <div className="relative flex  justify-center items-center w-80 h-80">
                  <div className="absolute rounded-full border-1 border-white w-72 h-72 animate-wave1"></div>
                  <div className="absolute rounded-full border-1 border-white w-72 h-72 animate-wave1"></div>
                  <div className="absolute rounded-full border-2 border-white w-56 h-56 animate-wave3"></div>
                  <div className="absolute rounded-full border-2 border-white w-64 h-64 animate-wave2"></div>
                  <div className="absolute rounded-full border-2 border-white w-64 h-64 animate-wave2"></div>
                  <div className="absolute rounded-full border-2 border-white w-48 h-48 animate-wave4"></div>
                  <div className="absolute rounded-full border-2 border-white w-40 h-40 animate-wave5"></div>
                </div>
              </div>

              {/* Image container */}
              <div className="relative z-10">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="bordr-blue-500 stroke-gray-950 rounded-lg p-1  transition duration-300 transform hover:rotate-3 hover:scale-105"
                  >
                    <img
                      src={image.src}
                      className="w-[300px] rounded-lg h-[300px] object-cover"
                      alt={image.alt}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
