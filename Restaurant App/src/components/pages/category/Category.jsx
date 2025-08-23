import React from 'react'
import { FaHotdog, FaPastafarianism, FaPizzaSlice } from 'react-icons/fa'
import { FaBurger } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import img1 from '../../../assets/offer.png'
import hero3 from '../../../assets/hero3.png'
import hero5 from '../../../assets/hero5.png'
const Category = () => {
  return (
    <div className='h-auto md:w-[86%] w-full flex gap-x-5 lg:ml-24 md:ml-24 ml-4 sm:mr-3  mb-16 flex-col '>
        <div className="md:w-full w-[90%]  mb-3 flex justify-between">
            <h1 className="text-black font-bold text-xl">
                Popular Category
            </h1>
            <Link to="/" className='hover:text-orange-400'>
                View All
            </Link>

        </div>
        <div className='md:justify-between flex flex-wrap gap-x-1 gap-y-4'>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-3">
                    <FaPizzaSlice className='text-orange-500'/>
                    <span className="font-normal text-black">Pizza</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaBurger className='text-orange-500'/>
                    <span className="font-normal text-black">Chicken</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaHotdog className='text-orange-500'/>
                    <span className="font-normal text-black">Chicken</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaHotdog className='text-orange-500'/>
                    <span className="font-normal text-black">Sandwich</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaPizzaSlice className='text-orange-500'/>
                    <span className="font-normal text-black">Pizza</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaBurger className='text-orange-500'/>
                    <span className="font-normal text-black">Chicken</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaBurger className='text-orange-500'/>
                    <span className="font-normal text-black">Chicken</span>
            </div>
            <div className="md:w-[10%] w-[30%] md:h-[4ch] h-[5ch] rounded-full hover:bg-zinc-400 bg-zinc-200
            ease-in-out duration-300 flex justify-center items-center gap-x-2">
                    <FaHotdog className='text-orange-500'/>
                    <span className="font-normal text-black">Sandwich</span>
            </div>
        </div>
        <div className="w-full mt-14 h-auto flex md:justify-between md:flex-row flex-col gap-y-10 relative sm:m1-1">
            <div className="md:w-[48%] w-[93%] h-[30ch] rounded-md flex justify-between"
             style={{
                backgroundImage: `url(${img1})`, 
                backgroundSize: 'cover',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                objectFit:'cover'
                 }}
            >
                <div className='ml-5 mt-16 flex-col w-[40%] '>
                  <h1 className="font-normal text-zinc-400">
                        50% OFF
                  </h1>
                  <h1 className="font-bold text-3xl text-white ">
                        Chicken Biryani
                  </h1>
                  <button className="h-7 rounded-md w-[47%] mt-2 border-2 border-orange-400 bg-orange-400
                  text-neutral-100 items-center font-normal hover:text-orange-400 hover:bg-white ease-in-out duration-300 ">
                        Order Now
                  </button>
                </div>
                <div className="w-[53%] mt-4 mr-4">
                  <img src={hero3} alt="" className="transition-transform duration-300 hover:scale-125 hover:rotate-6 object-cover object-center" />
                </div>
            </div>
            <div className="md:w-[48%] w-[93%] h-[30ch] rounded-md flex justify-between"
             style={{
                backgroundImage: `url(${img1})`, 
                backgroundSize: 'cover',
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
                 }}
            >
                <div className='ml-5 mt-16 flex-col w-[40%] '>
                  <h1 className="font-normal text-zinc-400">
                        50% OFF
                  </h1>
                  <h1 className="font-bold text-3xl text-white ">
                        Fried Fish
                  </h1>
                  <button className="h-7 rounded-md w-[47%] mt-2 border-2 border-orange-400 bg-orange-400
                  text-neutral-100 items-center font-normal hover:text-orange-400 hover:bg-white ease-in-out duration-300 ">
                        Order Now
                  </button>
                </div>
                <div className="w-[55%] mr-4">
                  <img src={hero5} alt="" className="transition-transform duration-300 hover:scale-125 hover:rotate-6 object-cover object-center" />
                </div>
            </div>
        </div>

        
    </div>
  )
}

export default Category