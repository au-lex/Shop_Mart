import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is your return policy?",
    answer: "Our return policy lasts 30 days. If 30 days have gone by since your purchase, unfortunately, we can’t offer you a refund or exchange."
  },
  {
    question: "How do I track my order?",
    answer: "You can track your order through the link provided in the confirmation email or by logging into your account on our website."
  },
  {
    question: "Can I change my shipping address?",
    answer: "Yes, you can change your shipping address before the order is shipped. Please contact our support team as soon as possible."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship internationally. Shipping costs and delivery times vary depending on the destination."
  },
  {
    question: "How can I contact customer service?",
    answer: "You can contact our customer service through the contact form on our website, via email, or by calling our support number."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including credit/debit cards, PayPal, and bank transfers."
  },
  // Add more FAQs as needed
];

const FaqComponent = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-center px-4 pt-2 bg-white min-h-screen">
      <div className="mt-10">
        <img
          src="https://img.freepik.com/premium-photo/3d-faq-illustration_541443-4056.jpg"
          alt="3D illustration"
          className="transform transition-transform h-[150px] w-full object-cover duration-500 hover:scale-110"
        />
      </div>
      <div className="max-w-4xl w-full mb-6">
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4 border-b">
            <button
              className="w-full flex justify-between items-center text-left p-4 bg-white focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="text-lg font-semibold">{faq.question}</span>
              <FaChevronDown className={`transition-transform duration-300 ${activeIndex === index ? 'transform rotate-180 text-yellow-500' : 'text-yellow-500'}`} />
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white rounded-md shadow-md mt-2">
                <p className="text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FaqComponent;
