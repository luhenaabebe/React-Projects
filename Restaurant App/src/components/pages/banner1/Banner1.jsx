import React from 'react'
import { FaCreditCard, FaHeadset, FaTruck } from 'react-icons/fa'

const Banner1 = () => {
  return (
    <div className='md:h-[10ch] h-auto rounded-md px-16 py-6 md:ml-24 ml-2 mt-16 mb-16 md:w-[86%] w-[95%] 
    gap-y-3 bg-zinc-600 flex md:flex-row  md:justify-between flex-col items-center'>
        <div className="h-auto md:w-[30%] w-full text-zinc-100 gap-x-3 flex ">
            <div className="w-[12%] h-7 rounded-md bg-orange-800 p-2">
             <FaTruck/>
            </div>
            <div className="">
                <h1 className="text-base font-normal ">
                    Free Shipping upto $200
                </h1>
            </div>
            
        </div>
        <div className="h-auto md:w-[30%] w-full text-zinc-100 gap-x-3 flex ">
            <div className="w-[12%] h-7 rounded-md bg-orange-800 p-2 ">
             <FaCreditCard/>
            </div>
            <div className="">
                <h1 className="text-base font-normal ">
                    Free Shipping upto $200
                </h1>
            </div>
            
        </div>
        <div className="h-auto md:w-[30%] w-full text-zinc-100 gap-x-3 flex ">
            <div className="w-[12%] h-7 rounded-md bg-orange-800 p-2 ">
             <FaHeadset/>
            </div>
            <div className="">
                <h1 className="text-base font-normal ">
                    Free Shipping upto $200
                </h1>
            </div>
            
        </div>
    </div>
  )
}

export default Banner1