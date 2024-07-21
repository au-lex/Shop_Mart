// src/components/AboutUs.jsx

import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-16 bg-gray-100 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        About Us
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          At E_Shoppy, we believe that shopping should be an enjoyable experience. 
          Our mission is to provide you with the best products at the best prices, 
          with a focus on quality and customer service.
        </p>
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          Founded in 2023, E_Shoppy has come a long way from its beginnings. 
          When we first started out, our passion for providing the best products 
          drove us to do tons of research, so that E_Shoppy can offer you the world's most advanced shopping experience.
        </p>
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          We now serve customers all over the world and are thrilled that we're able to turn our passion into our own website.
        </p>
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          We hope you enjoy our products as much as we enjoy offering them to you. 
          If you have any questions or comments, please don't hesitate to contact us.
        </p>
        <p className="text-lg md:text-xl text-gray-600">
          Sincerely, <br />
          The E_Shoppy Team
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
