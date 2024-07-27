import React, { useState } from 'react'

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

  // Sample product data (you should replace this with your actual data)
  const featuredProducts = [
    { id: 1, name: "Premium headphones", sub :"Electronics", price: 29.99, image: "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp" },
    { id: 2, name: " Suitable Laptop stand", sub :"Accessories", price: 39.99, image: "https://shopnest.africa/wp-content/uploads/2024/04/unnamed-file-46-300x300.jpg" },
  ];

  const saleProducts = [
    { id: 1, name: "Sale Item 1", originalPrice: 49.99, salePrice: 39.99, image: "https://placekitten.com/202/202" },
    { id: 2, name: "Sale Item 2", originalPrice: 59.99, salePrice: 44.99, image: "https://placekitten.com/203/203" },
  ];

  const topRatedProducts = [
    { id: 1, name: "Top Rated 1", price: 34.99, rating: 4.5, reviewCount: 120, image: "https://placekitten.com/204/204" },
    { id: 2, name: "Top Rated 2", price: 54.99, rating: 5, reviewCount: 89, image: "https://placekitten.com/205/205" },
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
            {/* <h2 className="text-2xl font-bold mb-4">Featured Products</h2> */}
            <div className="grid grid-cols-2 space-x-2 px-3 sm:grid-cols-3 md:grid-cols-4 ">
              {featuredProducts.map((product) => (
                <div key={product.id} className="bgellow-100 border  rounded-lg flex p-2 flex-col">
                  <h3 className="text-[12px]">{product.sub}</h3>
                  <h3 className="text-[12px] font-semibold mb-1">{product.name}</h3>
                  <img src={product.image} alt={product.name} className="w-[140px] h-[140px] object-cover mb-2 rounded" />
                  <p className="text-gray-600 font-medium">${product.price}</p>
                  <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 1 && (
          <div className="ongoing-sales-content">
            <h2 className="text-2xl font-bold mb-4">Ongoing Sales</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {saleProducts.map((product) => (
                <div key={product.id} className="bg-yellow-100 rounded-lg p-4 flex flex-col">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600 line-through">${product.originalPrice}</p>
                  <p className="text-red-600 font-bold">${product.salePrice}</p>
                  <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
        {activeTab === 2 && (
          <div className="top-rated-content">
            <h2 className="text-2xl font-bold mb-4">Top Rated Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {topRatedProducts.map((product) => (
                <div key={product.id} className="bg-yellow-100 rounded-lg p-4 flex flex-col">
                  <img src={product.image} alt={product.name} className="w-full h-40 object-cover mb-2 rounded" />
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-600">${product.price}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                    <span className="ml-1 text-sm text-gray-600">({product.reviewCount})</span>
                  </div>
                  <button className="mt-2 bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Featured