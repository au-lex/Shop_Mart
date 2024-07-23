import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaCcAmex, FaBitcoin } from 'react-icons/fa';
import { SiKlarna, SiEthereum, SiLitecoin } from 'react-icons/si';

export const TrustBadges = () => {
  return (
    <section className="bg-gra py-12">
      <div className="container mx-auto px-4">
      <div className="text-center mb-8">
  <h2 className="text-2xl font-bold">Shop with Confidence</h2>
  <p className="text-base mt-4 text-gray-600">
    Enjoy a seamless shopping experience with our trusted platform. Your satisfaction is our priority.
  </p>
</div>

        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Secure Payment */}
          <div className="text-center border border-yellow-500 p-4 rounded-[5px]">
          <div className="flex justify-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="cart"
                className="w-[80px] h-[70px] object-cover"
              />
            </div>
            <h3 className="font-semibold">Secure Payments</h3>
            <p className="text-sm text-gray-600">SSL Encrypted</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center border border-yellow-500 p-4 rounded-[5px]">
          <div className="flex justify-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="cart"
                className="w-[80px] h-[70px] object-cover"
              />
            </div>
            <h3 className="font-semibold">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600">30-Day Returns</p>
          </div>

          {/* Verified Seller */}
          <div className="text-center border border-yellow-500 p-4 rounded-[5px]">
           
<div className="flex justify-center">
              <img
                src="data:image/jpeg;base64,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"
                alt="cart"
                className="w-[80px] h-[70px] object-cover"
              />
            </div>
            <h3 className="font-semibold">Verified Seller</h3>
            <p className="text-sm text-gray-600">Trusted Marketplace</p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center border border-yellow-500 p-4 rounded-[5px]">
          <div className="flex justify-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5p4riVUFjy7nHHsHwNzFMC9iVin--uEY-Tw&s"
                alt="cart"
                className="w-[80px] h-[70px] object-cover"
              />
            </div>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always Here to Help</p>
          
          </div>
        </div>

        {/* Payment Methods */}
        <div className="mt-12 text-center">
  <h3 className="font-semibold mb-4">Accepted Payment Methods</h3>
  <div className="flex justify-center space-x-4">
    <FaCcVisa className="text-4xl text-blue-600" />
    <FaCcMastercard className="text-4xl text-red-500" />
    <FaCcPaypal className="text-4xl text-blue-800" />
    <FaCcApplePay className="text-4xl text-black" />
    <FaCcAmex className="text-4xl text-blue-500" />
    <SiKlarna className="text-4xl text-pink-500" />
    <FaBitcoin className="text-4xl text-orange-500" />
    <SiEthereum className="text-4xl text-gray-600" />
    <SiLitecoin className="text-4xl text-blue-700" />
  </div>
</div>

      
      </div>
    </section>
  );
};