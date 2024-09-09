




import React, { useState } from 'react';
import { FaChevronLeft, FaHeart, FaMinus, FaPlus, FaStar, FaTruck, FaExchangeAlt, FaShieldAlt } from 'react-icons/fa'
import { useParams, Link } from 'react-router-dom';
// import Loader from '../Component/Loader';
import { featureProducts } from './Products';

const Product_details = () => {
  const { id } = useParams();
  const details = featureProducts.find(det => det.id === parseInt(id));

  if (!details) {
    return <div>Product not found</div>;
  }

  // State for handling the quantity
  const [quantity, setQuantity] = useState(1);

  // Handler for quantity increment
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };

  // Handler for quantity decrement
  const handleDecrement = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      {/* <Loader /> */}

      <section className="details pt-[10rem] px-5 pb-8">
        <div className="nav flex justify-between pt-2">
          <Link to="/" className="back border rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">
            <FaChevronLeft className='text-slate-700' />
          </Link>
          <span className="back border rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">
            <FaHeart className='text-red-500' />
          </span>
        </div>

        <section className="product-details mt-6">
          <figure className="product-image mb-6">
            <img src={details.image} alt={details.name} 
              className='w-full h-[300px] object-cover rounded-lg '/>
          </figure>

          <div className="product-info space-y-4">
            <h2 className='text-2xl font-bold text-slate-800'>{details.name}</h2>
            <div className="flex items-center space-x-2">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-yellow-500'/>
                ))}
              </div>
              <span className="text-sm text-gray-600">({details.reviews} reviews)</span>
            </div>
            <p className='text-3xl font-bold text-yellow-600'>${details.price.toFixed(2)}</p>
            <p className='text-gray-700'>{details.description}</p>

            <div className="flex flex-col space-y-2 text-sm text-gray-600">
              <div className="flex items-center"><FaTruck className="mr-2" /> Free shipping on orders over $100</div>
              <div className="flex items-center"><FaExchangeAlt className="mr-2" /> 30-day return policy</div>
              <div className="flex items-center"><FaShieldAlt className="mr-2" /> 2-year warranty</div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center border rounded-full">
                <button onClick={() => handleQuantityChange(-1)} className="p-2 hover:bg-gray-100 rounded-l-full">
                  <FaMinus className="text-yellow-600" />
                </button>
                <span className="px-4 font-semibold">{quantity}</span>
                <button onClick={() => handleQuantityChange(1)} className="p-2 hover:bg-gray-100 rounded-r-full">
                  <FaPlus className="text-yellow-600" />
                </button>
              </div>
              <button className="flex-grow bg-yellow-600 text-white py-2 px-6 rounded-full hover:bg-yellow-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        </section>

        <section className="related-products mt-8">
        <h3 className="text-[15px] text-gray-800 font-semibold mb-4">You might also like</h3>
          <div className="flex overflow-x-scroll">
            {featureProducts.filter(p => p.id !== details.id).slice(0, 4).map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="mr-4 flex-shrink-0 w-[200px] border rounded-lg">
                <img src={product.image} alt={product.name} className='w-full h-[150px] object-cover rounded-t-lg' />
                <div className='p-2'>
                  <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className='text-yellow-500 text-[12px] my-2'/>
                ))}
              </div>
                <h4 className='text-[12px] font-semibold text-slate-700'>{product.name}</h4>
                  <span className='text-yellow-600 font-semibold'>${product.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </>
  );
};

export default Product_details;
