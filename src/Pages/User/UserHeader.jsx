import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// import { FaLaptop, FaMobileAlt, FaTabletAlt, FaHeadphones, FaCamera, FaTv,  FaServer } from 'react-icons/fa';
import { FaLaptop, FaMobileAlt, FaTabletAlt, FaHeadphones, FaCamera, FaTv,  FaServer, FaDesktop } from 'react-icons/fa';

import { 
  RiHomeSmileLine,
  RiShoppingCartLine,
  RiUserLine,
  RiOrderPlayLine,
  RiHeartLine,
  RiMenu3Line,
  RiSearchLine,
} from "react-icons/ri";
import { SiShopware } from "react-icons/si";
import { GrAppsRounded } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgMenuGridO } from "react-icons/cg";
import { RiMenu5Fill } from "react-icons/ri";
import { GiRunningShoe } from "react-icons/gi";

const UserHeader = () => {
  const [activeLink, setActiveLink] = useState('');
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const [openSide, setOpenSide] =useState(false)
  const handleOpenSide = () => {
    setOpenSide(!openSide)
  }

  // Example counts - replace these with actual state or props
  const cartCount = 3;
  const ordersCount = 5;
  const savedCount = 10; // Add count for saved items

  const navItems = [
    { name: "Home", path: "/", icon: RiHomeSmileLine },
    { name: "Cart", path: "/cart", icon: RiShoppingCartLine, count: cartCount },
    { name: "Orders", path: "/orders", icon: RiOrderPlayLine, count: ordersCount },
    { name: "Saved", path: "/saved", icon: RiHeartLine, count: savedCount },
    { name: "Settings", path: "/settings", icon: IoSettingsOutline  }, // Replaced Notification with Settings
    
  ];





  const products = [
    { name: 'Laptops', icon: <FaLaptop className="text-blue-500" />, link: '/products/laptop' },
    { name: 'Mobile Phones', icon: <FaMobileAlt className="text-green-500" />, link: '/products/mobile' },
    { name: 'Tablets', icon: <FaTabletAlt className="text-purple-500" />, link: '/products/tablet' },
    { name: 'Headphones', icon: <FaHeadphones className="text-red-500" />, link: '/products/headphones' },
    { name: 'Cameras', icon: <FaCamera className="text-yellow-500" />, link: '/products/camera' },
    // { name: 'Televisions', icon: <FaTv className="text-indigo-500" />, link: '/products/tv' },
    // { name: 'Watches', icon: <FaWatch className="text-pink-500" />, link: '/products/watch' },
    { name: 'Servers', icon: <FaServer className="text-orange-500" />, link: '/products/server' },
    { name: 'Monitors', icon: <FaDesktop className="text-cyan-500" />, link: '/products/monitor' },
    { name: 'Sneakers', icon: <GiRunningShoe className="text-blue-500" />, link: '/products/speaker' }
  ];

  return (
    <>
      {/* Normal header */}

      {openSide && (
 <div 
 className="fixed inset-0 bg-black bg-opacity-50 bg-whitw z-50 transition-opacity duration-300 ease-in-out"
 onClick={handleOpenSide}
></div>
      )}
      <section className=" fixed w-full h-[9rem] bg-white z-50  border-b flex flex-col items-center p-4">
        <div className="flex items-center justify-between w-full max-w-4xl">
          < RiMenu5Fill onClick={handleOpenSide} className="text-4xl border bor   sadow p-1 rounded text-yellow-600 borderder-2 cursor-pointer" />
          <Link to ="/" className="flex items-center space-x-2">
            <SiShopware className="text-[28px] w-10 text-yellow-500" />
            <h1 className="text-2xl font-extrabold cap ">
              Techie<span className="text-yellow-500">Cart</span>
            </h1>
          </Link>
          <span className="block border rounded-full border-yellow-600 shadow">

          <img 
            src="https://png.pngtree.com/png-clipart/20230620/original/pngtree-3d-avatar-man-like-teacher-artist-png-image_9192787.png"
            alt="user" 
            className="w-12 h-12 object-cover rounded-full" 
            />
            </span>
        </div>
        <div className="mt-4 w-full max-w-4xl">
          <div className="relative ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 rounded-lg border border-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            />
            <RiSearchLine className="absolute top-2 right-3 text-gray-500" />
          </div>
        </div>
      </section>
    
      {/* Mobile nav */}
      <nav className="bg-white md:hidden shadow border bottom-0 fixed w-full z-30">
        <div className="w-full">
          <div className="h-16">
            <div className="flex justify-between p-2">
              {navItems.map((item, index) => (
                <Link
                  key={index}
                  to={item.path}
                  className={`relative text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md text-sm font-medium flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 flex-shrink-0 ${
                    activeLink === item.path ? 'text-yellow-500' : ''
                  }`}
                >
                  <item.icon className={`text-xl mb-1 ${activeLink === item.path ? 'text-yellow-500' : 'text-gray-500'}`} />
                  {item.count !== undefined && (
                    <span className="absolute top-0 right-0 block w-4 h-4 text-xs text-white bg-red-500 rounded-full flex items-center justify-center">
                      {item.count}
                    </span>
                  )}
                  <span className="relative text-[12px] whitespace-nowrap">
                    {item.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>


      <div className="menur">
        <section 
          className={`fixed inset-x-0 bottom-0 z-50 w-full bg-white shadow-lg transform ${openSide ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-300 ease-in-out`}
        >
          <div className="p-4 h-[24rem]">
            <h2 className="text-[17px] my-2 font-bold">Quick Links</h2>
            <ul className="space-y-4">
            {products.map((product, index) => (
              <li key={index} className="flex items-center space-x-3">
                {product.icon}
                <Link to={product.link} className="text-gray-800 hover:text-blue-500">{product.name}</Link>
              </li>
            ))}
          </ul>
          </div>
        </section>
      </div>
    </>
  );
}

export default UserHeader;
