// src/components/AboutUs.jsx

import React from "react";

const AboutUs = () => {
  return (
    <section className="py-[2rem] bg-gray-100 text-center px-4">
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
        About Us
      </h2>
      <div className="max-w-4xl mx-auto">
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          At E_Shoppy, we believe that shopping should be an enjoyable
          experience. Our mission is to provide you with the best products at
          the best prices, with a focus on quality and customer service.
        </p>
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          Founded in 2023, E_Shoppy has come a long way from its beginnings.
          When we first started out, our passion for providing the best products
          drove us to do tons of research, so that E_Shoppy can offer you the
          world's most advanced shopping experience.
        </p>
        <p className="text-lg md:text-xl mb-4 text-gray-600">
          We now serve customers all over the world and are thrilled that we're
          able to turn our passion into our own website.
        </p>
        
      </div>

      <section className="img border p-2 rounded">
        <img
        className="rounded-[5px]"
          src="https://img.freepik.com/free-photo/high-angle-smiley-colleagues-working-together_23-2149636260.jpg?uid=R83321037&ga=GA1.1.1637151373.1721582865&semt=ais_user"
          alt="img"
        />
      </section>
    </section>
  );
};

export default AboutUs;
