import React, { useState, useEffect } from 'react';

const getPath = (letter) => {
  const paths = {
    'G': 'M30 10 Q10 10 10 30 Q10 50 30 50 L30 30 L20 30',
    'e': 'M30 30 L10 30 M30 15 Q10 15 10 30 Q10 45 30 45',
    't': 'M20 15 L20 45 M10 15 L30 15',
    'A': 'M10 45 L20 15 L30 45 M13 35 L27 35',
    'u': 'M10 15 L10 40 Q10 45 20 45 Q30 45 30 40 L30 15',
    'T': 'M20 15 L20 45 M10 15 L30 15',
    'c': 'M30 15 Q10 15 10 30 Q10 45 30 45',
    'h': 'M10 45 L10 15 M30 45 L30 30 Q30 15 20 15 L10 15'
  };
  return paths[letter] || `M20 15 L20 45`; 
};

const Loader = () => {
  const letters = "GetAuTech".split('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
      window.scrollTo(0, 0);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`flex items-center justify-center fixed inset-0 bg-slate-900 z-50 ${isLoading ? 'block' : 'hidden'}`}>
      {/* <div className="flex">
        {letters.map((letter, index) => (
          <svg
            key={index}
            className="w-4 md:w-12 h-12 mx-1"
            viewBox="0 0 40 60"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d={getPath(letter)}
              fill="none"
              stroke="#FFFFFF"
              strokeWidth="6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <animate
                attributeName="stroke-dasharray"
                from="0 100"
                to="100 0"
                dur="1.8s"
                begin={`${index * 0.1}s`}
                fill="freeze"
              />
            </path>
          </svg>
        ))}
      </div> */}


<span>
<div className="block bor">
       <img src="https://res.cloudinary.com/dmhvsyzch/image/upload/v1725191559/image_prev_ui_vypamu.png" alt="logo" className="w-[180px] h-[75px] object-cover cursor-pointer animate-bounce" />
          </div>

          <h1 className='text-yellow-500 mt-5 text-center'>loadding.....</h1>
</span>
    </div>
  );
};

export default Loader;