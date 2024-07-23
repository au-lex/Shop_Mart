
import React from 'react';
import { FaShoppingCart, FaUsers, FaGlobe } from 'react-icons/fa';

export const About = () => {
  return (
    <section className="py-16 bg-white">

      
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold t mb-5">About <span className="bg-yellow-500 text-white p-2">E_Shoppy</span> </h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
        
          <div className="md:w-1/2">
            <p className="text-[14px] mb-">
              E_Shoppy was founded in 2020 with a simple mission: to make online shopping easier, more affordable, and more enjoyable for everyone. Our passion for technology and customer satisfaction drives us to constantly innovate and improve our services.
            </p>
            {/* <p className=" text-[14px] mb-4">
              We believe in the power of e-commerce to connect people with the products they love, no matter where they are in the world. Our team of dedicated professionals works tirelessly to ensure that every E_Shoppy customer has an exceptional shopping experience.
            </p> */}
          </div>

         
        </div> <div className="md:w-1/2 mb-8 border md:mb-0 md:pr-8">
            <img src="https://cdn3d.iconscout.com/3d/premium/thumb/people-discussion-about-business-8659916-6909666.png" alt="E_Shoppy Team" className="rounded-lg shadow-lg w-full" />
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaShoppingCart className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vast Selection</h3>
            <p>Over 1 million products from thousands of trusted sellers worldwide.</p>
          </div>
          <div>
            <FaUsers className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p>Serving over 5 million satisfied customers and counting.</p>
          </div>
          <div>
            <FaGlobe className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p>Delivering to over 100 countries, bringing the world to your doorstep.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-4">Join us in our journey to revolutionize online shopping!</p>
        <button className=" text-yellow-500 border border-yellow-500 px-8 py-3 rounded-full text-l fond hover:bg-blue-700 transition duration-300">
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
};