import React from 'react';

export const Hero = () => {
  return (
    <section className="relative pt-[4rem]">
      <img
        src="https://img.freepik.com/free-photo/side-view-people-store_23-2150627993.jpg?uid=R83321037&ga=GA1.1.1637151373.1721582865&semt=ais_user"
        alt="Shopping"
        className="w-full h-[300px] object-cover"
      />
      
      <div className="absolute inset-0 bg-gray-900 bg-opacity-80 flex items-center justify-center text-center text-white px-4">
        <section className="pt-[4rem]">
          <span className="text-yellow-500 uppercase tracking-[2px] text-[10px] mb-2 block">Endless Choices, One Click Away</span>
          <h1 className="text-2xl md:text-6xl font-bold">Welcome to E_Shoppy</h1>
          <p className="text-[12px] mt-2">Your digital marketplace for endless possibilities</p>
          <div className="">
            <p className="text-[12px]">
              Discover a world of convenience, variety, and unbeatable deals. From fashion to tech, home essentials to unique finds, we've got it all under one virtual roof.
            </p>
          </div>
          <div className="space-x-4 flex w-full my-4 rounded-[10px]">
            <button className="bg-bl border-2 border-yellow-500 flex rounded-[20px] text-[12px] w-[100%] justify-center items-center h-[2.5rem] hover:bg-blue-700 text-white transition duration-300 transform hover:scale-105">
              Start Shopping
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 rounded-[20px] text-white text-[12px] w-[100%] justify-center items-center h-[2.5rem] transition duration-300 transform hover:scale-105">
              Explore Categories
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};