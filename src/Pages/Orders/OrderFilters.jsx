import React, { useState } from 'react';
import { IoMdCube } from 'react-icons/io';
import { MdCheckCircle } from 'react-icons/md';
import { IoMdAlert } from 'react-icons/io';
import { FaTruck } from 'react-icons/fa';


const OrderFilters = ({setActiveOrderStatus}) => {
  const orderFilters = [
    { name: "Processing", icon: IoMdCube  },
    { name: "Shipped", icon: FaTruck },
    { name: "Delivered", icon: MdCheckCircle },
    { name: "Returned", icon: IoMdAlert}
  ];
  const [activeOrder, setActiveOrder] = useState(0);

  const handleOrder = (idx) => {

    setActiveOrder(idx);
    setActiveOrderStatus(orderFilters[idx].name)
  };

  return (
    <div className="   ">
 
      <div className="flex justify-between  p-4 ">
        {orderFilters.map((filter, idx) => (
          <button
            key={idx}
            onClick={() => handleOrder(idx)}
            className={`flex flex-col items-center px-3 py-1 rounded-lg transition-all duration-300 ${
              activeOrder === idx
                ? "bg-yellow-400 text-white shadow-lg transform -translate-y-1"
                : "bg-white text-gray-700 hover:bg-yellow-100"
            }`}
          >
            <filter.icon className={`w-6 h-6 ${activeOrder === idx ? 'text-white' : 'text-yellow-500'}`} />
            <span className="mt-2 font-medium text-[12px]">{filter.name}</span>
          </button>
        ))}
      </div>





      <div className="p-6 bg-gradient-to-b from-yellow-50 to-white min-h-[200px]">
        {activeOrder === 0 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-semibold text-yellow-700">Processing Orders</h3>
            <p className="text-gray-600">Your orders are being carefully prepared for shipment.</p>
            <div className="flex items-center space-x-2 text-yellow-600">
              <IoMdCube  className="w-5 h-5" />
              <span>5 orders in progress</span>
            </div>
          </div>
        )}
        {activeOrder === 1 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-semibold text-yellow-700">Shipped Orders</h3>
            <p className="text-gray-600">Your packages are on their way to you!</p>
            <div className="flex items-center space-x-2 text-yellow-600">
              <FaTruck className="w-5 h-5" />
              <span>3 orders en route</span>
            </div>
          </div>
        )}
        {activeOrder === 2 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-semibold text-yellow-700">Delivered Orders</h3>
            <p className="text-gray-600">These orders have reached their destination.</p>
            <div className="flex items-center space-x-2 text-green-600">
              <MdCheckCircle className="w-5 h-5" />
              <span>10 orders successfully delivered</span>
            </div>
          </div>
        )}
        {activeOrder === 3 && (
          <div className="animate-fade-in space-y-4">
            <h3 className="text-xl font-semibold text-yellow-700">Returned Orders</h3>
            <p className="text-gray-600">These orders have been returned or require attention.</p>
            <div className="flex items-center space-x-2 text-red-600">
              {/* <AlertTriangle className="w-5 h-5" /> */}
              <span>2 orders returned</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderFilters;