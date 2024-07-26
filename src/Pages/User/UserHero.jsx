import React from 'react';
import { FaHotjar } from 'react-icons/fa';

const UserHero = () => {
  return (
    <section className="hero-section pt-[8rem] pb-[6rem] ">
      <div className=" bg-gradent-to-r from-blue-500 to-purple-600 mx-auto p-4">
        <div className="flex flex-col items-center">
          <div className="rlative mb-">
            <img
              src="https://garamart.com/wp-content/uploads/2024/07/ears-1.png" 
              className="w-[300px] h-[300px] object-cover"
              alt="Headphone"
            />
           <section className="relative z-20">
            <div className="absolute top-0 h right-0 z-10 bg-red-500 text-white p-2 rounded-bl-lg flex items-center">
              <FaHotjar className="mr-2" />
              <span className="font-bold">Hot Deal</span>
            </div>
           </section>
          </div>
          <h1 className="text-4xl font-bold textwhite mb-4">Premium Headphones</h1>
          <p className="text-xl text-hite mb-8">Experience crystal-clear sound like never before</p>
          <button className="bg-yellow-500 w-full text-white font-bold py-3 px-6 rounded-full hover:bg-blue-100 transition duration-300">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default UserHero;