// src/components/OrderList.js

import React from 'react';

const orders = [
  { id: 1, date: '2024-08-28', status: 'Shipped', total: '$120.00' },
  { id: 2, date: '2024-08-27', status: 'Pending', total: '$80.00' },
  // Add more orders as needed
];

const OrderList = () => {
  return (
    <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Orders</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200 border-b">
            <th className="py-2 px-4 text-left">Order ID</th>
            <th className="py-2 px-4 text-left">Date</th>
            <th className="py-2 px-4 text-left">Status</th>
            <th className="py-2 px-4 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id} className="border-b hover:bg-gray-50">
              <td className="py-2 px-4">{order.id}</td>
              <td className="py-2 px-4">{order.date}</td>
              <td className="py-2 px-4">{order.status}</td>
              <td className="py-2 px-4">{order.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
