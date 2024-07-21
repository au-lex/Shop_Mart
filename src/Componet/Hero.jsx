// src/components/Hero.jsx

import React from 'react';

export const Hero = () => {
  return (
    <section className="relative pt-[4rem]">
      <img 
        src="https://img.freepik.com/free-photo/side-view-people-store_23-2150627993.jpg?uid=R83321037&ga=GA1.1.1637151373.1721582865&semt=ais_user" 
        alt="Shopping"
        className="w-full h-[300px] object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to E_Shoppy</h1>
        <p className="text-lg md:text-xl mb-8">Your one-stop shop for all your needs</p>
        <div className="space-x-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Shop Now
          </button>
          <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};
