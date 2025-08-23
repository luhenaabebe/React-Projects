import React from 'react'
import BannerImg from "../../../assets/carbanner.png"
import Layout from '../../../Components/layout/Layout'
import { GoArrowUpRight } from 'react-icons/go'
const Banner = () => {
  return (
    <Layout>
        <div className="w-full md:h-[70vh] h-[40vh] rounded-2xl relative overflow-hidden">
            <img src={BannerImg} alt="" className="w-full h-full object-cover object-center" />

            <div className="w-full h-full absolute top-0 left-0 flex items-center bg-gradient-r from-zinc-950/70 via-bg-transparent to-transparent">
                <div className="md:w-1/2 w-full py-8 md:pl-12 pl-6 md:pr-8 pr-8">
                    <h1 className="md:text-5xl text-2xl font-bold text-zinc-50 uppercase !leading-[1.3]">
                        Ready to ride <span className="text-red-600">Car</span>? <br/>
                        book now!
                    </h1>
                    <p className="text-lg text-zinc-400 font-normal mt-4 md:pr-16 pr-0">
                        Our Welcoming customer service team available to assist you. Reach out anytime for support and inquries.
                    </p>
                        <div className="flex text-center items-center md:gap-5 gap-3 flex-wrap md:mt-10 mt-6">
                            <button className="bg-red-700 text-zinc-50 md:px-6 
                            px-3.55 md:py-4 py-2.5 rounded-full uppercase md:text-base 
                            text-sm medium group flex items-center justify-center 
                            md:gap-x-3 gap-x gap-x-1.5 ease-in-out duration-700">
                                Reserve now
                                <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-300'/>
                            </button>
                            <button className="border text-center border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 
                            py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center
                            justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                               Contact Us
                                <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-300'/>
                            </button>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
  )
}

export default Banner