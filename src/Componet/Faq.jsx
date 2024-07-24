import React, { useState } from 'react';

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
          src="https://pandamarketors.com/wp-content/uploads/2024/07/Untitled-design-67.png"
          alt="3D illustration"
          className="transform transition-transform duration-500 hover:scale-110"
        />
      </div>
      <div className="max-w-4xl w-full mb-6">
        <h1 className="text-3xl font-extrabold mb-4 text-center text-red-600">FAQs</h1>
        {/* <h2 className="text-xl font-bold mb-4 text-center">Frequently Asked Questions</h2> */}
        {faqData.map((faq, index) => (
          <div key={index} className="mb4 border">
            <button
              className="w-full text-left p-4 bg-white  focus:outline-none"
              onClick={() => toggleFaq(index)}
            >
              <span className="text- font-semibold">{faq.question}</span>
            </button>
            {activeIndex === index && (
              <div className="p-4 bg-white rounded-md shadow-md mt-2">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default FaqComponent;
