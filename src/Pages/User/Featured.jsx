import React, { useState } from 'react'
import TopRated from './TopRated'
import OngoingSales from './OngoingSales'

const Featured = () => {
  const tabList = [
    "Featured",
    "Ongoing Sales",
    "Top Rated"
  ]

  const [activeTab, setActiveTab] = useState(0)

  const handleClickTab = (index) => {
    setActiveTab(index)
  }

 
  const featuredProducts = [
    { 
      id: 1, 
      name: "Hp All-in-one Desktop", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/02/all-in-300x300.jpg",
      description: "The HP All-in-One Desktop combines a sleek, space-saving design with powerful performance. It features a high-resolution display, fast processing speed, and ample storage for all your multimedia needs. Perfect for both home and office environments, this desktop provides a clean and organized workspace without compromising on functionality."
    },
    { 
      id: 2, 
      name: "128 4-in-1 Flash Drive", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/05/Green-Lion-4-in-1-USB-Flash-Drive-128GB-300x300.jpeg",
      description: "This 128GB 4-in-1 Flash Drive is a versatile data storage solution featuring USB, Type-C, Micro-USB, and Lightning connectors. It allows seamless transfer of files across various devices including computers, smartphones, and tablets. Compact and portable, it’s perfect for on-the-go data backup and sharing."
    },
    { 
      id: 3, 
      name: "Premium Headphones", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp",
      description: "Experience exceptional sound quality with these Premium Headphones. Designed with advanced noise-cancellation technology and comfortable ear cushions, they provide an immersive audio experience. Whether you're listening to music, watching movies, or taking calls, these headphones deliver crystal-clear sound and reduce ambient noise."
    },
    { 
      id: 4, 
      name: "Suitable Laptop Stand", 
      sub: "Accessories", 
      price: 39.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/04/unnamed-file-46-300x300.jpg",
      description: "Enhance your workspace with this ergonomic Laptop Stand. It’s designed to elevate your laptop to eye level, promoting better posture and reducing neck and back strain. The adjustable height and tilt angles provide a customizable viewing experience, while the sturdy construction ensures stability and durability."
    },
    { 
      id: 5, 
      name: "Canyon Bluetooth", 
      sub: "Accessories", 
      price: 39.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/230309080910252110-300x300.webp",
      description: "The Canyon Bluetooth Speaker combines stylish design with impressive sound quality. It features wireless Bluetooth connectivity, allowing you to stream music from your smartphone or tablet effortlessly. With a long-lasting battery and compact size, it’s perfect for parties, travel, and everyday use."
    },
    { 
      id: 6, 
      name: "Wireless Mouse", 
      sub: "Accessories", 
      price: 30.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/221123150033194311-300x300.webp",
      description: "This Wireless Mouse offers precision and comfort with its ergonomic design and adjustable DPI settings. It’s ideal for both work and gaming, providing smooth and accurate tracking on various surfaces. The wireless connectivity ensures a clutter-free desk, and its battery life is optimized for extended use."
    },
  ];
  




  return (
    <div className="containr  py-8">
      <div className="flex mb-4 px-3 border-b">
        {tabList.map((tab, index ) => (
          <button
            key={index}
            className={`py-2 px-4 font-semibold ${
              activeTab === index
                ? "text-yellow-500 border-b-4 border-yellow-500"
                : "text-gray-500 hover:text-yellow-500"
            }`}
            onClick={() => handleClickTab(index)}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="tantent bg-white s
       rounded-lg hadow-lg">
        {activeTab === 0 && (
          <div className="feature-content">
           
            <div className="grid grid-cols-2 space-x-2 px-3 sm:grid-cols-3 md:grid-cols-4 ">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bgellow-100 border my-2 rounded-lg flex p-2 flex-col">
                  <h3 className="text-[12px]">{product.sub}</h3>
                  <h3 className="text-[12px] font-semibold mb-1">{product.name}</h3>
                  <img src={product.image} alt={product.name} className="w-[140px] h-[140px] object-cover mb-2 rounded" />
                  <p className="text-yellow-500 font-medium text-[18px]">${product.price}</p>
                  <p className="text-gray-600 text-[12px]">{product.description.substring(0,60)}... <span className='text-yellow-500 font-bold'>more</span></p>
                  <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 1 && (
       <OngoingSales />
        )}
        {activeTab === 2 && (
   <TopRated />
        )}
      </div>
    </div>
  )
}

export default Featured