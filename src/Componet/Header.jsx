import React from 'react'
import { GrAppsRounded } from "react-icons/gr";
import { FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
    
    <main className="fixed w-full z-50  bg-white border shadow h-[4rem]">
    <section className="flex items-center  justify-between px-2 h-[4rem] space-x-3">

        <span className="block">
          {/* <FaShoppingCart className="h-10 w-10 " /> */}
      <h1 className="text-2xl font-extrabold text-blue==-500">
        E<span className="text-yellow-500">_</span>Shoppy
      </h1>
        </span>
        <span className="block borde-2 shadow text-gray-800 rounded p-1">
            <GrAppsRounded className="text-3xl  text-re-500" />
        </span>
      
    </section>
    </main>
    
    </>
  )
}

export default Header