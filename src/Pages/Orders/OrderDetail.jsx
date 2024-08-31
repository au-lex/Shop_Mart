// src/components/OrderDetail.js

import React from 'react';

const OrderDetail = () => {
  // Dummy data; replace with dynamic content as needed
  const order = {
    id: 1,
    date: '2024-08-28',
    status: 'Shipped',
    total: '$120.00',
    items: [
      { name: 'Product A', quantity: 2, price: '$30.00' },
      { name: 'Product B', quantity: 1, price: '$60.00' },
    ],
  };

  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Order Details</h2>
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Order ID: {order.id}</h3>
        <p>Date: {order.date}</p>
        <p>Status: {order.status}</p>
        <p>Total: {order.total}</p>
      </div>
      <h3 className="text-lg font-semibold mb-2">Items</h3>
      <ul>
        {order.items.map((item, index) => (
          <li key={index} className="mb-2 border-b pb-2">
            <p>{item.name} - {item.quantity} x {item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetail;
