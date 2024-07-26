import React, { useState, useEffect } from 'react';
import { FaClock, FaShoppingCart } from 'react-icons/fa';

const Deals = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const deals = [
    {
      id: 1,
      name: "Premium Wireless Headphones",
      originalPrice: 299.99,
      dealPrice: 199.99,
      image: "https://garamart.com/wp-content/uploads/2022/05/Picun-W16B-TWS-Headphones-300x300.jpg.webp",
      discount: 33
    },
    {
      id: 2,
      name: "Noise-Cancelling Earbuds",
      originalPrice: 199.99,
      dealPrice: 149.99,
      image: "https://garamart.com/wp-content/uploads/2022/04/ANC-03LX-Black-300x300.png.webp",
      discount: 25
    },
    // Add more deals here if you want to test scrolling
  ];

  return (
    <section className="py-12">
      <div className="c">
        <section className="desc ">

      
        <h2 className=" text-center text-yellow-500 font-bold mb-1 ">Today's Hot Deals</h2>
        <div className="">
          <div className="flex items-center justify-center mb4">
            <FaClock className="text-red-500 mr-2" />
            <span className="text-2xl font-bold text-yellow-500">
              {`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}
            </span>
          </div>
          {/* <p className="text-center text-gray-600">Hurry! These deals won't last long</p> */}
        </div>
        </section>
        <div className="">
          <div className=" px-[1rem]   w-full">
            {deals.map(deal => (
              <div key={deal.id} className="bg-white mb-[2rem] w-[100%] p-2 border-yellow-500 rounded-lg border shadow-lg overflow-hidden" >
                <div className="">
                  <img src={deal.image} alt={deal.name} className="w-full h-64 object-cover" />
                  {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg">
                    {deal.discount}% OFF
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-[15px] font-bold mb-2">{deal.name}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-yellow-500">${deal.dealPrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through ml-2">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    {/* <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">Save ${(deal.originalPrice - deal.dealPrice).toFixed(2)}</span> */}
                  </div>
                  <button className="w-full bg-yellow-500 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-full transition duration-300 flex items-center justify-center">
                    <FaShoppingCart className="mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Deals;