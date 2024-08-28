



import React from 'react';
import { MdRemove, MdAdd, MdShoppingCart, MdArrowBack } from 'react-icons/md';

const CartItem = ({ name, category, price, quantity }) => (
  <div className="flex items-center justify-between py-4 border-b">
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gray-200 borde rounded-md mr-4">
        
      </div>
      <div>
        <h3 className="font-medium text-[12px]">{name}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </div>
    <div className="flex items-center">
      <span className="mr-4">${price.toFixed(2)}</span>
      <div className="flex items-center border border-orange-700 rounded-md">
        <button className="p-1"><MdRemove size={16} /></button>
        <span className="px-2">{quantity}</span>
        <button className="p-1"><MdAdd size={16} /></button>
      </div>
    </div>
  </div>
);

const Cart = () => {
  const cartItems = [
    { name: 'Woman Sweater', category: 'Woman Fashion', price: 70.00, quantity: 1 },
    { name: 'Smart Watch', category: 'Electronics', price: 55.00, quantity: 1 },
    { name: 'W Headphone', category: 'Electronics', price: 120.00, quantity: 1 },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="max-w-md mx-auto pt-[10rem] bg-white p-2 rounded-3xl shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <button className="text-gray-600">
          <MdArrowBack size={24} />
        </button>
        <h2 className="text-xl font-semibold">My Cart</h2>
        <div className="w-6"></div>
      </div>

      <div className="space-y-4">
        {cartItems.map((item, index) => (
          <CartItem key={index} {...item} />
        ))}
      </div>

      <div className="mt-6">
        <div className="flex items-center border rounded-md p-2">
          <input
            type="text"
            placeholder="Enter Discount Code"
            className="flex-grow outline-none text-sm"
          />
          <button className="text-orange-500 font-medium text-sm">Apply</button>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between">
          <span className="text-gray-600">Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-orange-500 text-white py-3 rounded-full mt-6 flex items-center justify-center">
        <MdShoppingCart className="mr-2" size={20} />
        Checkout
      </button>
    </section>
  );
};

export default Cart;