// src/components/OrderFilters.js

import React from 'react';

const OrderFilters = () => {
  return (
    <div className="w-80 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <form>
        <div className="mb-4">
          <label className="block text-gray-700">Order Status</label>
          <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
            <option>All</option>
            <option>Pending</option>
            <option>Shipped</option>
            <option>Delivered</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Date Range</label>
          <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
          <input type="date" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

export default OrderFilters;
