import React from 'react';
import { FaLaptop, FaHeadphones, FaShoppingCart } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="banner-section py-12 bg-gadient-to-r from-blue-400 to-blue-600">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 pt-[8rem]">
            <h1 className="text-4xl md:text-5xl font-bold text-hite mb-4">
              Upgrade Your Tech Arsenal
            </h1>
            <p className="text-xl txt-white mb-8">
              Discover cutting-edge gadgets to enhance your digital lifestyle
            </p>
            <div className="flex space-x-4">
              <button className="bg-yellow-500 w-full h-[3rem] justify-center text-white font-bold  rounded-full hover:bg-blue-100 transition
               duration-300 flex items-center">
                <FaShoppingCart className="mr-2" />
                Shop Now
              </button>
              <button className="bg-yellow-500 w-full h-[3rem] justify-center text-white font-bold  py-3 px-6 rounded-full hover:bg-white hover:text-blue-600 transition duration-300">
                Explore 
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative md:pt-[3rem]">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative bg-white border border-yellow-500 rounded-lg">
                <img
                  src="https://garamart.com/wp-content/uploads/2024/07/ears-1.png"
                  className="w-[160px] rounded-lg h-[160px] object-cover"
                  alt="Wireless Earbuds"
                />
              </div>
              <div className="relative border border-yellow-500 rounded-lg p-1">
                <img
                  src="https://shopnest.africa/wp-content/uploads/2023/11/dell-3310-2n1.jpg"
                  className="w-[160px] rounded-lg h-[160px] object-cover"
                  alt="Laptop"
                />
              </div>
              <div className='border border-yellow-500 rounded-lg p-1'>
                <img
                  src="https://shopnest.africa/wp-content/uploads/2024/04/unnamed-file-46-300x300.jpg"
                  className="w-[160px] rounded-lg h-[160px] object-cover"
                  alt="Smartwatch"
                />
              </div>
              <div className='border border-yellow-500 rounded-lg '>
                <img
                  src="https://shopnest.africa/wp-content/uploads/2024/05/chrome-heart-sunglass-300x300.jpg"
                  className="w-[160px] rounded-lg h-[160px] object-cover"
                  alt="Smart Glasses"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;