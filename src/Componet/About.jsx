// // src/components/AboutUs.jsx

// import React from "react";

// const AboutUs = () => {
//   return (
//     <section className="py-[2rem] bg-gray-100 text-center px-4">
//       <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
//         About Us
//       </h2>
//       <div className="max-w-4xl mx-auto">
//         <p className="text-lg md:text-xl mb-4 text-gray-600">
//           At E_Shoppy, we believe that shopping should be an enjoyable
//           experience. Our mission is to provide you with the best products at
//           the best prices, with a focus on quality and customer service.
//         </p>
//         <p className="text-lg md:text-xl mb-4 text-gray-600">
//           Founded in 2023, E_Shoppy has come a long way from its beginnings.
//           When we first started out, our passion for providing the best products
//           drove us to do tons of research, so that E_Shoppy can offer you the
//           world's most advanced shopping experience.
//         </p>
//         <p className="text-lg md:text-xl mb-4 text-gray-600">
//           We now serve customers all over the world and are thrilled that we're
//           able to turn our passion into our own website.
//         </p>
        
//       </div>

//       <section className="img border p-2 rounded">
//         <img
//         className="rounded-[5px]"
//           src=""
//           alt="img"
//         />
//       </section>
//     </section>
//   );
// };

// export default AboutUs;
import React from 'react';
import { FaShoppingCart, FaUsers, FaGlobe } from 'react-icons/fa';

export const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold t mb-2">About E_Shoppy</h2>
        
        <div className="flex flex-col md:flex-row items-center mb-12">
        
          <div className="md:w-1/2">
            <p className="text-[14px] mb-4">
              E_Shoppy was founded in 2020 with a simple mission: to make online shopping easier, more affordable, and more enjoyable for everyone. Our passion for technology and customer satisfaction drives us to constantly innovate and improve our services.
            </p>
            <p className=" text-[14px] mb-4">
              We believe in the power of e-commerce to connect people with the products they love, no matter where they are in the world. Our team of dedicated professionals works tirelessly to ensure that every E_Shoppy customer has an exceptional shopping experience.
            </p>
          </div>

          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <img src="https://img.freepik.com/free-photo/high-angle-smiley-colleagues-working-together_23-2149636260.jpg?uid=R83321037&ga=GA1.1.1637151373.1721582865&semt=ais_user" alt="E_Shoppy Team" className="rounded-lg shadow-lg w-full" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <FaShoppingCart className="text-5xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Vast Selection</h3>
            <p>Over 1 million products from thousands of trusted sellers worldwide.</p>
          </div>
          <div>
            <FaUsers className="text-5xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Happy Customers</h3>
            <p>Serving over 5 million satisfied customers and counting.</p>
          </div>
          <div>
            <FaGlobe className="text-5xl text-purple-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p>Delivering to over 100 countries, bringing the world to your doorstep.</p>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-semibold mb-4">Join us in our journey to revolutionize online shopping!</p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Shopping Now
          </button>
        </div>
      </div>
    </section>
  );
};