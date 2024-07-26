import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";


import { 
  RiMenu5Fill, 
  RiCloseLine,
  RiHomeSmileLine,
  RiChatSmile3Line,
  RiUserLine,
  RiBookmarkLine,
  RiNotification3Line,
  RiCoinLine,
  RiExchangeDollarLine,
  RiCalendarCheckLine,
  RiLoginCircleLine,
  RiUserAddLine,
  RiInformationLine,
  RiCustomerService2Line,
  RiSettings4Line,
  RiLogoutCircleLine
} from "react-icons/ri";
import { GrAppsRounded } from "react-icons/gr";
import { FaShoppingCart } from 'react-icons/fa';
import { SiShopware } from "react-icons/si";
import { RxHamburgerMenu } from "react-icons/rx";
import { HiOutlineShoppingBag } from "react-icons/hi";


const Header = () => {
  const sidebarItems = [
    { name: "Fund Account", path: "/fund-account", icon: RiCoinLine },
    // { name: "Transactions", path: "/transactions", icon: RiExchangeDollarLine },
    { name: "Shop", path: "/shop", icon:  HiOutlineShoppingBag },
    // { name: "Cards", path: "/cards", icon: FaCreditCard },
    { name: "Login", path: "/login", icon: RiLoginCircleLine },
    { name: "Signup", path: "/signup", icon: RiUserAddLine },
    { name: "About", path: "/about", icon: RiInformationLine },
    { name: "Contact Us", path: "/contact", icon: RiCustomerService2Line },
    { name: "Settings", path: "/settings", icon: RiSettings4Line },
    { name: "Logout", path: "/logout", icon: RiLogoutCircleLine },
  ];

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };


  const [activeLink, setActiveLink] = useState('');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", icon: RiHomeSmileLine },
    { name: "Chat", path: "/chat", icon: RiChatSmile3Line },
    { name: "Saved", path: "/saved", icon: RiBookmarkLine },
    { name: "Notification", path: "/notification", icon: RiNotification3Line },
    { name: "Profile", path: "/profile", icon: RiUserLine },
  ];

  return (
    <>
        <header>
     

      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ease-in-out"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div className={`fixed inset-y-0 right-0 z-50 w-64 
         bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'} 
         transition-transform duration-300 ease-in-out`}>
        <div className="p-5 pt-[5rem]">
          <button onClick={toggleSidebar} className="absolute top-4 outline-0 right-4">
            <RiCloseLine className="text-2xl text-gray-600" />
          </button>
         
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="mb-4">
                <Link
                  to={item.path}
                  className="flex items-center text-gray-600 hover:text-green-500 transition duration-300"
                  onClick={toggleSidebar}
                >
                  <item.icon className="mr-3 text-xl" />
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="bg-white md:hidden hidden shadow border bottom-0 fixed w-full z-30">
        <div className="bg-red00 w-full">
          <div className="h-16">
            <div className="">
              <div className="flex justify-between p-2">
                {navItems.map((item, index) => (
                  <Link
                    key={index}
                    to={item.path}
                    className={`text-gray-600 hover:text-gray-900 px-3 py-1 rounded-md text-sm font-medium flex flex-col items-center transition duration-300 ease-in-out transform hover:scale-105 flex-shrink-0 ${
                      activeLink === item.path ? 'text-green-500' : ''
                    }`}
                  >
                    <item.icon className={`text-xl mb-1 ${activeLink === item.path ? 'text-green-500' : 'text-gray-500'}`} />
                    <span className="relative text-[12px] whitespace-nowrap">
                      {item.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
    
    <main className="fixed w-full z-50  bg-white border shadow h-[4rem]">
    <section className="flex items-center  justify-between px-2 h-[4rem] space-x-3">

    <span className="flex items-center">
  <SiShopware className="text-[28px] w-10 text-yellow-500" />
  <h1 className="text-2xl font-extrabold text-blu-500">
    Crypto<span className="text-yellow-500">Cart</span>
  </h1>
</span>

        <section className="flex items-center pt-1 space-x-4">
              {/* <button className="bg-white text-[#198754] px-3 py-2 rounded-md font-medium hover:bg-opacity-90 transition duration-300 flex items-center">
                <RiCoinLine className="mr-2" />
                Fund
              </button> */}
              <button onClick={toggleSidebar} className="logo block border outline-0 rounded-[5px] p-1">
                <RiMenu5Fill className="text-[1.8rem] tex-white" />
              </button>
            </section>
      
    </section>
    </main>
    
    </>
  )
}

export default Header



