import React from 'react'
import { FaCreditCard, FaChevronRight,FaMapMarkerAlt } from 'react-icons/fa'

const Payment = () => {
  return (
    <>
    
    
    
    <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-[15px] font-semibold mb-4 flex items-center text-gray-700">
          <FaCreditCard className="mr-2 text-yellow-600" /> Payment Methods
        </h2>
        <button className="w-full py-2 px-4 border rounded flex justify-between items-center">
          Manage Payment Methods
          <FaChevronRight className="ml-2 h-4 w-4  text-yellow-600" />
        </button>
      </div>

      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-[15px] font-semibold mb-4 flex items-center text-gray-700">
          <FaMapMarkerAlt className="mr-2 text-yellow-600" /> Shipping Addresses
        </h2>
        <button className="w-full py-2 px-4 border rounded flex justify-between items-center">
          Manage Addresses
          <FaChevronRight className="ml-2 h-4 w-4 text-yellow-600" />
        </button>
      </div>
    </>
  )
}

export default Payment