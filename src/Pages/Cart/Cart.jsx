import React from 'react';
import { MdRemove, MdAdd, MdShoppingCart, MdArrowBack, MdDelete, MdLocalOffer } from 'react-icons/md';
import Loader from '../../Componet/Loader';

const Cart = () => {
  const cartItems = [
    { id: 1, name: 'Wireless Earbuds', category: 'Electronics', price: 79.99, quantity: 1, image: "https://transvelo.github.io/electro-html/2.0/assets/img/380X350/img1.jpg" },
    { id: 2, name: 'Laptop Backpack', category: 'Accessories', price: 49.99, quantity: 1, image: "https://transvelo.github.io/electro-html/2.0/assets/img/212X200/img2.jpg" },
    { id: 3, name: 'Smart Watch', category: 'Electronics', price: 199.99, quantity: 1, image: "https://shopnest.africa/wp-content/uploads/2024/07/230309080910252110-300x300.webp" },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discount = subtotal * 0.1;
  const total = subtotal - discount;

  const CartItem = ({ name, category, price, quantity, image }) => (
    <div className="flex items-center justify-between py-4 border-b border-yellow-300 relative">
      <div className="flex items-center">
        <div className="w-[80px] p-1 border-2 border-yellow-300 rounded-md mr-4 overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className='w-[80%]'>
          <h3 className="font-medium text-sm text-gray-800">{name}</h3>
          <p className="text-xs text-gray-500">{category}</p>
          <span className="mr-4 font-semibold text-gray-900">${price.toFixed(2)}</span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center border border-yellow-300 rounded-md p-1 mt-2">
          <button className="p-1 text-yellow-600 hover:text-yellow-800"><MdRemove size={16} /></button>
          <span className="px-2 text-gray-800">{quantity}</span>
          <button className="p-1 text-yellow-600 hover:text-yellow-800"><MdAdd size={16} /></button>
        </div>
        <button className="text-red-500 hover:text-red-700">
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );

  return (

    <>
    <Loader/>

    <section className="max-w-2xl mx-auto pt-[12rem] bg-white p-4 rounded-lg shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <button className="text-gray-600 hover:text-yellow-600 p-1">
          <MdArrowBack size={20} />
        </button>
        <h2 className="text-2xl font-semibold text-gray-800">Shopping Cart</h2>
        <div className="w-6"></div>
      </div>

      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <MdShoppingCart size={48} className="mx-auto text-gray-400 mb-4" />
          <p className="text-gray-600">Your cart is empty</p>
          <p className="text-sm text-gray-500 mt-2">Add some items to your cart and they will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      )}

      <div className="mt-8">
        <div className="flex items-center border rounded-md p-2 border-yellow-300">
          <MdLocalOffer className="text-gray-400 mr-2" size={20} />
          <input
            type="text"
            placeholder="Enter discount code"
            className="flex-grow outline-none text-sm text-gray-800"
          />
          <button 
            className="bg-yellow-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:bg-yellow-600"
          >
            Apply
          </button>
        </div>
      </div>

      <div className="mt-8 space-y-2">
        <div className="flex justify-between text-sm text-gray-600">
          <span>Subtotal</span>
          <span>${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm text-yellow-600">
          <span>Discount (10%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg pt-2 border-t border-gray-200">
          <span>Total</span>
          <span>${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white py-3 rounded-md mt-8 flex items-center justify-center font-semibold">
        <MdShoppingCart className="mr-2" size={20} />
        Proceed to Checkout
      </button>
    </section>
    </>
  );
};

export default Cart;
