import React, { useState, useEffect } from 'react';
import { FaClock, FaShoppingCart } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';

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
      discount: 33,
      description: "Experience crystal-clear sound with our Premium Wireless Headphones. Featuring active noise cancellation, 30-hour battery life, and comfortable over-ear design for all-day listening."
    },
    {
      id: 2,
      name: "Noise-Cancelling Earbuds",
      originalPrice: 199.99,
      dealPrice: 149.99,
      image: "https://garamart.com/wp-content/uploads/2022/04/ANC-03LX-Black-300x300.png.webp",
      discount: 25,
      description: "Immerse yourself in your music with these compact Noise-Cancelling Earbuds. Enjoy true wireless freedom, advanced noise cancellation, and up to 8 hours of playtime on a single charge."
    },
  ];

  return (
    <section className="py-12">
      <div className="c">
        <div className="">
          <div className="px-[1rem] w-full">
            {deals.map(deal => (
              <div key={deal.id} className="bg-white mb-[2em] w-[100%] p-2 border-yellow-500 rounded-lg border shadow-lg overflow-hidden">
                <section className="desc">
                  <section className="">
                    <div className="z-10 bg-yellow-500 text-white p-2 rounded-bl-lg rounded-t-lg flex justify-center space-x-4 items-center">
                      <span className="block"></span>
                      <FaHotjar className="mr-2" />
                      <span className="font-bold"> Today's Hot Deal</span>
                      <div className="">
                        <div className="flex items-center  justify-end mb4">
                          {/* <FaClock className="text-red-500 mr-2" /> */}
                          <span className="text-xl font-bold text-white">
                            {`${timeLeft.hours.toString().padStart(2, '0')}:${timeLeft.minutes.toString().padStart(2, '0')}:${timeLeft.seconds.toString().padStart(2, '0')}`}
                          </span>
                        </div>
                      </div>
                    </div>
                  </section>
                </section>
                <div className="flex justify-center">
                  <img src={deal.image} alt={deal.name} className="w-[200px] h-[200px] object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-[18px] font-bold mb-2">{deal.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{deal.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <span className="text-3xl font-bold text-yellow-500">${deal.dealPrice.toFixed(2)}</span>
                      <span className="text-gray-500 line-through ml-2">${deal.originalPrice.toFixed(2)}</span>
                    </div>
                    {/* <span className="bg-green-500 text-white px-2 py-1 rounded-full text-sm">Save ${(deal.originalPrice - deal.dealPrice).toFixed(2)}</span> */}
                  </div>
                  <button className="w-full bg-yellow-500 text-white border-yellow-500 border hover:bg-yellow-600 font-bold py-3 px-4 rounded-full transition duration-300 flex items-center justify-center">
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