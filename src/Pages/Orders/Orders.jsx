import React from 'react'

import { orders } from './OrderList'
import { FaTruckFast } from 'react-icons/fa6'
import { MdLocationPin } from 'react-icons/md'
import OrderFilters from './OrderFilters'

const Orders = () => {
  return (
    <>

      <div className=" pt-[10rem]">
        <h1 className="text-xl pt-2 font-semibold text-gray-800 mb-4 px-3">My Orders</h1>

{/* orders tab */}
<OrderFilters />

        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.orderId}
              className="p-4 border rounded-lg shadow-sm bg-white "


            >


<section className="orderhe ">


              <span className="flex justify-between mb-2">


                <p className="text-gray-600 text-[12px]">Order ID <span className="o text-[15px] font-bold text-yellow-600">#{order.orderId}</span> </p>



                <p className="text-gray-600 border border-yellow-600 p-1 text-[12px] px-4  rounded-2xl">Arrival Date: {order.dateOfArrival}</p>
              </span>
              <span className="flex justify-between bo mb-4">
                <p className="text-gray-600 text-[12px] flex border border-yellow-600  items-center p-1 px-2 rounded-2xl"> <span className='mr-1'><FaTruckFast className='text-[16px] text-yellow-600' /></span> {order.location}</p>
                <p className="text-gray-600 flex text-[15px] pt-1"><span className="b mr-1"><MdLocationPin  
                className='text-[21px] text-yellow-600'
                /></span> {order.location}</p>
              </span>
              </section>

              <section className=" flex space-x-4 pt-3">

        

              <figure className="img w-[60%]">


              <img
                src={order.orderImage}
                alt={order.description}
                className="w-full h-[10rem] object-cover rounded-lg mb-4 md:mb-0 md:mr-4"
                />
                </figure>
              <figcaption className="desc">

         
              <div className="">
                <h2 className="">{order.description}</h2>
                <p className="text-gray-600">Price: ${order.price.toFixed(2)}</p>
                <p className="text-gray-600">Status: {order.orderStatus}</p>
                <p className="text-gray-600">
                  Payment: {order.paymentInfo.method} (****{order.paymentInfo.cardLast4Digits})
                </p>
                {/* <p className="text-gray-600">Tracking Number: {order.trackingNumber}</p> */}
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