

import React from 'react'

import { useParams, Link } from 'react-router-dom';
import { FaChevronLeft, FaHeart, FaMinus, FaPlus } from 'react-icons/fa6'
import Loader from '../Componet/Loader';

const Product_details = () => {


     
  const featuredProducts = [
    { 
      id: 1, 
      name: "Hp All-in-one Desktop", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/02/all-in-300x300.jpg",
      description: "The HP All-in-One Desktop combines a sleek, space-saving design with powerful performance. It features a high-resolution display, fast processing speed, and ample storage for all your multimedia needs. Perfect for both home and office environments, this desktop provides a clean and organized workspace without compromising on functionality."
    },
    { 
      id: 2, 
      name: "128 4-in-1 Flash Drive", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/05/Green-Lion-4-in-1-USB-Flash-Drive-128GB-300x300.jpeg",
      description: "This 128GB 4-in-1 Flash Drive is a versatile data storage solution featuring USB, Type-C, Micro-USB, and Lightning connectors. It allows seamless transfer of files across various devices including computers, smartphones, and tablets. Compact and portable, it’s perfect for on-the-go data backup and sharing."
    },
    { 
      id: 3, 
      name: "Premium Headphones", 
      sub: "Electronics", 
      price: 29.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp",
      description: "Experience exceptional sound quality with these Premium Headphones. Designed with advanced noise-cancellation technology and comfortable ear cushions, they provide an immersive audio experience. Whether you're listening to music, watching movies, or taking calls, these headphones deliver crystal-clear sound and reduce ambient noise."
    },
    { 
      id: 4, 
      name: "Suitable Laptop Stand", 
      sub: "Accessories", 
      price: 39.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/04/unnamed-file-46-300x300.jpg",
      description: "Enhance your workspace with this ergonomic Laptop Stand. It’s designed to elevate your laptop to eye level, promoting better posture and reducing neck and back strain. The adjustable height and tilt angles provide a customizable viewing experience, while the sturdy construction ensures stability and durability."
    },
    { 
      id: 5, 
      name: "Canyon Bluetooth", 
      sub: "Accessories", 
      price: 39.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/230309080910252110-300x300.webp",
      description: "The Canyon Bluetooth Speaker combines stylish design with impressive sound quality. It features wireless Bluetooth connectivity, allowing you to stream music from your smartphone or tablet effortlessly. With a long-lasting battery and compact size, it’s perfect for parties, travel, and everyday use."
    },
    { 
      id: 6, 
      name: "Wireless Mouse", 
      sub: "Accessories", 
      price: 30.99, 
      image: "https://shopnest.africa/wp-content/uploads/2024/07/221123150033194311-300x300.webp",
      description: "This Wireless Mouse offers precision and comfort with its ergonomic design and adjustable DPI settings. It’s ideal for both work and gaming, providing smooth and accurate tracking on various surfaces. The wireless connectivity ensures a clutter-free desk, and its battery life is optimized for extended use."
    },
  ];

  const {id } = useParams();
const details = featuredProducts.find(det => det.id  === parseInt(id));
console.log(details);
if (!details) {
  <>
  not found
    </>
}


  return (
    <>
    <Loader/>
    
    <section className="details pt-[10rem] blg-red-500 px-5  pb-8 ">
        <div className="nav flex justify-between pt-2">
            <Link to="/" className="back border  rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">

            <FaChevronLeft className='text-slate-700' />
            </Link>
            <span className="back border  rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">


            <FaHeart className='text-red-500' />
</span>
        </div>

        <section className="detailsCon">

        <figure className="detailsImg flex justify-center">
            <img src={details.image} alt="dtimg" 
            className='w-[200px] h-[200px] object-cover'/>
        </figure>
        <figcaption className='desc pt-6'>


            <h2 className='text-[1.4rem] font-semibold text-slate-700'>{details.name}</h2>
            <span className="price text-[2rem] text-yellow-600 font-semibold">${details.price}</span>
         <p className='text-slate-700'>{details.description}</p>
        </figcaption>
            </section>
       
    </section>
    
    <section className="  px-4 ">
                <div className="carth left-0 right-0 w-full  px-4 flex jus  h-[4rem] ">


<section className="cart-btn  shadow border flex justify-between  w-full h-[3rem] rounded-3xl p-1 space-x-4">
    <button className="add border  border-yellow-600 rounded-3xl w-[50%] flex justify-between items-center px-3 h-[2.5rem] text-yellow-600 font-semibold ">
        
        <span className='block text-[px]'><FaMinus /></span>
        <span className='block'>1</span>
        <span className='block'><FaPlus /></span>
        </button> <button className="add bg-yellow-600 rounded-3xl w-[50%] h-[2.5rem] text-white">Add cart</button>

</section>

                </div>

            </section>
    </>
  )
}

export default Product_details