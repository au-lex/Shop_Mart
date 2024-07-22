import React from 'react';
import { FaCcVisa, FaCcMastercard, FaCcPaypal, FaCcApplePay, FaCcAmex } from 'react-icons/fa';
import { SiKlarna } from 'react-icons/si';

export const TrustBadges = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Shop with Confidence</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center justify-items-center">
          {/* Secure Payment */}
          <div className="text-center border border-black p-4 rounded-[5px]">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h3 className="font-semibold">Secure Payments</h3>
            <p className="text-sm text-gray-600">SSL Encrypted</p>
          </div>

          {/* Money Back Guarantee */}
          <div className="text-center border border-black p-4 rounded-[5px]">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <h3 className="font-semibold">Money-Back Guarantee</h3>
            <p className="text-sm text-gray-600">30-Day Returns</p>
          </div>

          {/* Verified Seller */}
          <div className="text-center border border-black p-4 rounded-[5px]">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <h3 className="font-semibold">Verified Seller</h3>
            <p className="text-sm text-gray-600">Trusted Marketplace</p>
          </div>

          {/* 24/7 Support */}
          <div className="text-center border border-black p-4 rounded-[5px]">
            <svg className="w-12 h-12 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
            </svg>
            <h3 className="font-semibold">24/7 Support</h3>
            <p className="text-sm text-gray-600">Always Here to Help</p>
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
          </div>
        </div>

      
      </div>
    </section>
  );
};