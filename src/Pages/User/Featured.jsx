import React from 'react';
import { FaStar, FaShoppingCart, FaEnvelope } from 'react-icons/fa';

// Featured Products Component
const FeaturedProducts = () => {
  const products = [
    { id: 1, name: 'Wireless Earbuds', price: 99.99, rating: 4.5, image: 'https://garamart.com/wp-content/uploads/2022/04/fabric-wireless-bluetooth-speaker1-300x300.png.webp' },
    { id: 2, name: 'Over-Ear Headphones', price: 199.99, rating: 4.8, image: 'https://example.com/headphones.jpg' },
    { id: 3, name: 'Noise-Cancelling Headset', price: 249.99, rating: 4.7, image: 'https://example.com/headset.jpg' },
  ];

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <div className="flex items-center mb-2">
                  <FaStar className="text-yellow-400 mr-1" />
                  <span>{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold">${product.price}</span>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300">
                    <FaShoppingCart className="inline-block mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Categories Section Component
const CategoriesSection = () => {
  const categories = [
    { id: 1, name: 'Earbuds', image: 'https://example.com/earbuds-category.jpg' },
    { id: 2, name: 'Headphones', image: 'https://garamart.com/wp-content/uploads/2022/05/3-%E7%99%BD%E5%BA%95-%E9%BB%91-300x300.jpg.webp' },
    { id: 3, name: 'Speakers', image: 'https://example.com/speakers-category.jpg' },
    { id: 4, name: 'Accessories', image: 'https://example.com/accessories-category.jpg' },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="relative group cursor-pointer">
              <img src={category.image} alt={category.name} className="w-full h-40 object-cover rounded-lg" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <span className="text-white text-xl font-semibold">{category.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Special Offer Banner Component
const SpecialOfferBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12">
      <div className="container mx-auto px-4 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Special Offer!</h2>
        <p className="text-xl mb-6">Get 20% off on all headphones. Use code: AUDIO20</p>
        <button className="bg-white text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  );
};

// Newsletter Signup Component
const NewsletterSignup = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-lg mb-6">Stay updated with our latest products and offers!</p>
        <form className="max-w-md mx-auto flex">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-grow px-4 py-2 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-full hover:bg-blue-600 transition duration-300">
            <FaEnvelope className="inline-block mr-2" />
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

// Main App Component
const Ok = () => {
  return (
    <div>
      <FeaturedProducts />
      {/* <CategoriesSection /> */}
      <SpecialOfferBanner />
      <NewsletterSignup />
    </div>
  );
};

export default Ok;