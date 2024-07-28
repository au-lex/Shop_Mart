import React from 'react';

const RecentlyAdded = () => {
  // Sample data for recently added products
  const recentProducts = [
    { id: 1, name: "New Arrival 1", price: 24.99, image: "https://shopnest.africa/wp-content/uploads/2024/05/61OQKB0-o4L._AC_UF10001000_QL80_-300x300.jpg", date: "2024-07-25" },
    { id: 2, name: "Fresh Product 2", price: 34.99, image: "https://shopnest.africa/wp-content/uploads/2024/04/61icoXyZ8aL._AC_SL1500_-300x300.jpg", date: "2024-07-26" },
    { id: 3, name: "Just In 3", price: 19.99, image: "https://shopnest.africa/wp-content/uploads/2023/11/1-6-300x300.jpg", date: "2024-07-27" },
    { id: 4, name: "Latest Item 4", price: 44.99, image: "https://shopnest.africa/wp-content/uploads/2024/05/IMG_5337-300x300.jpeg", date: "2024-07-27" },
    { id: 5, name: "Latest Item 4", price: 44.99, image: "https://shopnest.africa/wp-content/uploads/2023/12/fe0cddf8df6cc294a8ebee979fda6446-300x300.jpeg", date: "2024-07-27" },
    { id: 6, name: "MTN cart 6 Router", price: 44.99, image: "https://shopnest.africa/wp-content/uploads/2024/06/3654B6EF-0C86-45D2-A278-3E0901E810FF-300x300.jpeg", date: "2024-07-27" },
  ];

  return (
    <div className=" mb-5">
      <h2 className="t text-yellow-600 px-4 mb-5 font-bold">Recently Added</h2>
      <div className="grid grid-cols-2 space-x2 gap-4 px-3 sm:grid-cols-3 md:grid-cols-4 ">
        {recentProducts.map((product) => (
          <div key={product.id} className=" rounded-lg p-2 border shadow-lg transform transition duration-300 hover:scale-105">
            <div className="relative">
              <img src={product.image} alt={product.name} className="w-[140px] h-[140px] object-cover mb-2 rounded" />
              <div className="absolute top-0 right-0 bg-yellow-400 text-white px-2 py-1 rounded-bl-lg text-sm font-semibold">
                New
              </div>
            </div>
            <div className="p">
              <h3 className=" text-gray-800 mb-">{product.name}</h3>
              <p className="text-yellow-600 font-bold ">${product.price}</p>
              {/* <p className="text-sm text-gray-600 mb-3">Added on: {product.date}</p> */}
              <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>

        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;