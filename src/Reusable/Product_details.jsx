

import React from 'react'

import { FaChevronLeft, FaHeart, FaMinus, FaPlus } from 'react-icons/fa6'

const Product_details = () => {
  return (
    <>
    
    <section className="details pt-8 blg-red-500 px-5  pb-8 ">
        <div className="nav flex justify-between pt-2">
            <span className="back border  rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">

            <FaChevronLeft className='text-slate-700' />
            </span>
            <span className="back border  rounded-full flex justify-center items-center shadow h-[2rem] w-[2rem]">


            <FaHeart className='text-red-500' />
</span>
        </div>

        <section className="detailsCon">

        <figure className="detailsImg flex justify-center">
            <img src= "https://shopnest.africa/wp-content/uploads/2024/07/220916160021352331-300x300.webp" alt="dtimg" 
            className='w-[200px] h-[200px] object-cover'/>
        </figure>
        <figcaption className='desc pt-6'>


            <h2 className='text-[1.4rem] font-semibold text-slate-700'>Premium Headphones</h2>
            <span className="price text-[2rem] text-yellow-600 font-semibold">$520</span>
         <p className='text-slate-700'>Experience exceptional sound quality with these Premium Headphones. Designed with advanced noise-cancellation technology and comfortable ear cushions, they provide an immersive audio experience. Whether you're listening to music, watching movies, or taking calls, these headphones deliver crystal-clear sound and reduce ambient noise.</p>
        </figcaption>
            </section>
       
    </section>
    
    <section className="  px-4 ">
                <div className="carth left-0 right-0 w-full  px-4 flex justify-center items-center fixed  h-[4rem] ">


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