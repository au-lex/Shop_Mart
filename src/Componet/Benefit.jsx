import React from 'react';
import { FaShippingFast, FaTag, FaUserFriends, FaMobileAlt } from 'react-icons/fa';

export const BenefitsAndCTA = () => {
  const benefits = [
    {
      icon: <FaShippingFast className="text-4xl text-blue-500" />,
      title: "Free & Fast Delivery",
      description: "Get your items delivered to your doorstep quickly and for free on orders over $50.",
    },
    {
      icon: <FaTag className="text-4xl text-green-500" />,
      title: "Unbeatable Prices",
      description: "We offer competitive prices on our 100,000+ product range.",
    },
    {
      icon: <FaUserFriends className="text-4xl text-purple-500" />,
      title: "Customer-First Approach",
      description: "Our dedicated team is here to assist you every step of the way.",
    },
    {
      icon: <FaMobileAlt className="text-4xl text-red-500" />,
      title: "Shop On-The-Go",
      description: "Download our app and shop anytime, anywhere with ease.",
    },
  ];

  return (
    <section className="py-16 bg-gra-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">Why Choose E_Shoppy?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-6 border border-yellow-500 rounded-lg shado-md text-center">
              <div className="mb-4 text-center flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to experience the E_Shoppy difference?</h3>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Shopping Now
          </button>
        </div>

        <div className="mt-20 bg-yellow-100 p-8 rounded-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">New Customer Special</h3>
              <p className="text-lg">Get 15% off your first order with code: WELCOME15</p>
            </div>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-yellow-600 transition duration-300">
              Claim Offer
            </button>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-green-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Daily Deals</h3>
            <p className="mb-4">Check out our daily deals for savings up to 70% off!</p>
            <button className="bg-green-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-green-600 transition duration-300">
              View Deals
            </button>
          </div>
          <div className="bg-purple-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">Refer a Friend</h3>
            <p className="mb-4">Get $10 off when you refer a friend, and they'll get $10 too!</p>
            <button className="bg-purple-500 text-white px-6 py-2 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300">
              Refer Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};