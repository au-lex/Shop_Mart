import React from 'react';

export const Hero = () => {
  return (
    <section className="relative pt-[4rem] px-4 bg-gradient-to-r from-[#f7f6f0] to[#f3e9cc]"> {/* Updated gradient background */}
      <div className="flex items-center justify-center text-center">
        <section className="pt-[4rem]">
          <span className="text-yellow-500 uppercase tracking-[2px] text-[10px] mb-2 block">Endless Choices, One Click Away</span>
         
          <h1 className="text-[1.5rem] font-extrabold text-blu-500">
          Welcome <span className="text-yellow-500">Crypto_Cart</span>
  </h1>
          <p className="text-[12px] mt-2">Your digital marketplace for endless possibilities</p>
          <div className="">
            <p className="text-[14px]">
              Discover a world of convenience, variety, and unbeatable deals. From fashion to tech, home essentials to unique finds, we've got it all under one virtual roof.
            </p>
          </div>
          <div className="space-x-4 flex w-full my-4 rounded-[10px]">
            <button className="bg-blue-00 border-2 border-yellow-500 flex rounded-[20px] text-[12px] 
            w-[100%] justify-center items-center h-[2.5rem] hover:bg-blue-700 transition duration-300 transform hover:scale-105">
              Start Shopping
            </button>
            <button className="bg-yellow-500 hover:bg-yellow-700 rounded-[20px] text-white text-[12px] w-[100%] justify-center items-center h-[2.5rem] transition duration-300 transform hover:scale-105">
              Explore Categories
            </button>
          </div>
        </section>
      </div>

      <div className="hero w-full borr ">
        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/online-shopping-delivery-8191228-6594626.png" alt="heroimg"
        className='w-[200%] h-[300px] object-cover'
        />
      </div>
    </section>
  );
};
