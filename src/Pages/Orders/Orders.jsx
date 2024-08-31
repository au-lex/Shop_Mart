import React, { useState } from 'react';
import {   FaBell, FaUser, FaHome, FaChevronLeft } from 'react-icons/fa'; // Importing icons from react-icons
import { FaCalendar } from 'react-icons/fa6';

const OrderCard = ({ service, assigned, scheduled }) => (
  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
    <h3 className="font-semibold text-lg">{service}</h3>
    <div className="text-sm text-gray-500">
      <p>Assigned: {assigned}</p>
      <p>Scheduled: {scheduled}</p>
    </div>
  </div>
);

const OrderSummary = ({ order }) => (
  <div className="space-y-4">
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <p>Order Placed on {order.placedDate}</p>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <p>Order Accepted on {order.acceptedDate}</p>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <p>Processing Order and Assigning Vendor</p>
    </div>
    <div className="flex items-center space-x-2">
      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
      <p>Completed</p>
    </div>
    <div className="mt-6">
      <h3 className="font-semibold text-lg">{order.service}</h3>
      <p className="text-sm text-gray-500">Assigned: {order.assigned}</p>
      <p className="text-sm font-semibold">{order.price}</p>
    </div>
  </div>
);

const OrdersPage = () => {
  const [activeTab, setActiveTab] = useState('Completed');
  const [showSummary, setShowSummary] = useState(true);

  const orders = [
    { service: 'Carpenters', assigned: 'Bindu Partner', scheduled: '26 July 11 AM to 12:30 PM' },
    { service: 'Car Wash', assigned: 'Bindu Partner', scheduled: '26 July 11 AM to 12:30 PM' },
    { service: 'Kitchen Cleaning', assigned: 'Bindu Partner', scheduled: '26 July 11 AM to 12:30 PM' },
    { service: 'Carpenters', assigned: 'Bindu Partner', scheduled: '26 July 11 AM to 12:30 PM' },
  ];

  const sampleOrder = {
    service: 'Kitchen Cleaning',
    assigned: 'Bindu Partner',
    price: '100/-',
    placedDate: '26 July',
    acceptedDate: '26 July',
  };

  return (
    <div className="font-sans bg-gray-100 h-screen pt-[10rem]">
      {!showSummary ? (
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4">My Orders</h1>
          <div className="flex space-x-4 mb-6">
            {['Completed', 'Cancelled', 'Requested'].map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 rounded-full ${
                  activeTab === tab ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="space-y-4">
            {orders.map((order, index) => (
              <OrderCard key={index} {...order} />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-6">
          <button onClick={() => setShowSummary(false)} className="flex items-center text-blue-500 mb-4">
           
            <FaChevronLeft />
            <span>Back</span>
          </button>
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          <OrderSummary order={sampleOrder} />
        </div>
      )}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-4">
     <FaHome />
      
        <FaCalendar />
   
        <FaBell />
        <FaUser />
      </div>
    </div>
  );
};

export default OrdersPage;
