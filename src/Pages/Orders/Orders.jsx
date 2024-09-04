import React, { useState } from 'react';

import { orders } from './OrderList'
import { FaTruckFast } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import OrderFilters from './OrderFilters'

const Orders = () => {

  const [activeOrderStatus,setActiveOrderStatus] =useState("Processing");
  const filterOrders = orders.filter(order => order.orderStatus === activeOrderStatus)
  return (
    <>

      <div className=" pt-[10rem]">
        <h1 className="text-xl pt-2 font-semibold text-gray-600 mb-4 px-3">My Orders</h1>

{/* orders tab */}
<OrderFilters setActiveOrderStatus={setActiveOrderStatus} />

        <div className="space-y-4 px-4  pb-4">
          {filterOrders.map((order) => (
            <div
              key={order.orderId}
              className="p-4  rounded-lg shadow-sm bg-white border border-yellow-600"


            >


<section className="orderhe ">


              <span className="flex justify-between mb-2">


                <p className="text-gray-600 text-[12px]">Order ID <span className="o text-[12px] font-bold text-yellow-600">#{order.orderId}</span> </p>



                <p className="text-gray-600 border border-yellow-600 p-1 text-[10px] px-2 rounded-2xl">Arrival Date: {order.dateOfArrival}</p>
              </span>
              <span className="flex justify-between bo mb-4">
                <p className="text-gray-600 text-[10px]
                 flex border border-yellow-600  items-center p-1 px-2 rounded-2xl"> <span className='mr-1'><FaTruckFast className='text-[16px] text-yellow-600' /></span> {order.location}</p>
                <p className="text-gray-600 flex text-[12px] pt-1"><span className="b mr-1"><MdLocationPin  
                className='text-[21px] text-yellow-600'
                /></span> {order.location}</p>
              </span>

              {/* details */}
              </section>

              <section className="flex space-x-6 pt-2 ">
        <figure className="img w-1/2">
          <img
            src={order.orderImage}
            alt={order.description}
            className="w-full h-[8rem] object-cover border border-yellow-600 rounded-lg shadow-md"
          />
        </figure>
        <figcaption className="desc w-1/2">
          <div>
            <h2 className="text-[14px] text-yellow-600">{order.description}</h2>
            <p className="text-gray-700 mt-2  text-[12px]">Price: <span className="text-l">${order.price.toFixed(2)}</span></p>
            <p className="text-gray-700  text-[12px] my-1">Status: <span className="font- text-yellow-500 font-medium">{order.orderStatus}</span></p>
            <p className="text-gray-700 text-[12px]">
              Payment: {order.paymentInfo.method} (****{order.paymentInfo.cardLast4Digits})
            </p>
          </div>
        </figcaption>
      </section>
           
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Orders