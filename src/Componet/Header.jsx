import React from 'react'
import { GrAppsRounded } from "react-icons/gr";
import { FaShoppingCart } from 'react-icons/fa';
import { SiShopware } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";


const Header = () => {
  return (
    <>
    
    <main className="fixed w-full z-50  bg-white border shadow h-[4rem]">
    <section className="flex items-center  justify-between px-2 h-[4rem] space-x-3">

        <span className="flex">
          <SiShopware className="text-[28px] w-10 text-yellow-500 " />
      <h1 className="text-2xl font-extrabold text-blue==-500">
        E<span className="text-yellow-500">_</span>Shoppy
      </h1>
        </span>
        <span className="block borde-2 shadw    rounded p-[2px]">
            <RxHamburgerMenu className="text-[2.5rem]  border rounded p-2 text-re-500" />
        </span>
      
    </section>
    </main>
    
    </>
  )
}

export default Header