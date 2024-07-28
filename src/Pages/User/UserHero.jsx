import React, { useState, useEffect } from 'react';
import { FaLaptop, FaGlasses, FaKeyboard, FaMouse, FaHeadphones, FaShoppingCart, FaInfoCircle } from 'react-icons/fa';

const products = [
  {
    name: 'Headphones',
    icon: FaHeadphones,
    description: 'Immerse yourself in premium sound quality with our cutting-edge headphones',
    image: "https://garamart.com/wp-content/uploads/2024/07/ears-1.png",
    color: 'from-yellow-400 to-yellow-600'
  },

  {
    name: 'Laptop',
    icon: FaLaptop,
    description: 'Unleash your productivity with our cutting-edge laptops',
    image: 'https://shopnest.africa/wp-content/uploads/2023/12/images-49-300x300.jpeg',
    color: 'from-yellow-400 to-yellow-600'
  },
  // {
  //   name: 'Smart Glasses',
  //   icon: FaGlasses,
  //   description: 'Experience the future of wearable technology',
  //   image: 'https://shopnest.africa/wp-content/uploads/2024/05/chrome-heart-sunglass-300x300.jpg',
  //   color: 'from-purple-400 to-purple-600'
  // },
  // {
  //   name: 'Keyboard',
  //   icon: FaKeyboard,
  //   description: 'Type with precision and style on our ergonomic keyboards',
  //   image: 'https://shopnest.africa/wp-content/uploads/2023/11/1-8-300x300.jpg',
  //   color: 'from-green-400 to-green-600'
  // },
  // {
  //   name: 'Mouse',
  //   icon: FaMouse,
  //   description: 'Navigate seamlessly with our high-performance mice',
  //   image: 'https://example.com/mouse-image.png',
  //   color: 'from-red-400 to-red-600'
  // },

];

const Hero = () => {
  const [currentProduct, setCurrentProduct] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProduct((prevProduct) => (prevProduct + 1) % products.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const product = products[currentProduct];

  return (
    <section className={`banner-section py-12 bg-gradient-to-r ${product.color}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 pt-[8rem]">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-white mb-8">
              {product.description}
            </p>
            <div className="flex space-x-4">
              <button className="bg-white text-gray-800 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition duration-300 flex items-center">
                <FaShoppingCart className="mr-2" />
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-full hover:bg-white hover:text-gray-800 transition duration-300 flex items-center">
                <FaInfoCircle className="mr-2" />
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative md:pt-[3rem]">
            <img
              src={product.image}
              className="w-full max-w-md mx-auto"
              alt={product.name}
            />
            <div className="absolute top-4 right-4 bg-white text-gray-800 p-2 rounded-lg flex items-center shadow-lg">
              <product.icon className="mr-2" />
              <span className="font-bold">Featured Product</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-gray-800 text-white p-2 rounded-lg flex items-center shadow-lg">
              <span className="font-bold">Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;