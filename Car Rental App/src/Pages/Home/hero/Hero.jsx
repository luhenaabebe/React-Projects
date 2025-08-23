import React from 'react'
import Layout from "../../../Components/layout/Layout"
import HeroImg from "../../../assets/hero2.png"
import { GoArrowUpRight } from 'react-icons/go'
const Hero = () => {
  return (
    <div className='w-full md:h-screen h-auto pt-[9ch] relative flex 
    items-center justify-center z-30'>
        <Layout className=" flex items-center justify-between gap-16 z-50 ">
            {/* Hero Content*/}
            <div className="md:w-[40%] w-full md:space-y-16 space-y-8">
                <div className="space-y-5">
                    <div className="space-y-4">
                        <h6 className="text-lg  text-zinc-300 font-medium uppercase">
                            New Arrivals
                        </h6>
                        <h1 className="md:text-7xl sm:text-5xl text-4xl text-zinc-50 
                        font-bold uppercase leading-[1.3]">
                            Find your next dream <span className="text-red-600">car</span>
                        </h1>
                    </div>
                    <p className="text-sm md:text-base text-zinc-400 font-normal">
                        Enjoy the freedom of driving your dream car with G-CAR. Lorem ipsum, dolor sit
                         amet consectetur adipisicing elit. Nihil nisi minus adipisci necessitatibus 
                         dolores ullam? Dignissimos sapiente
                    </p>
                </div>
                <div className="flex text-center items-center md:gap-5 gap-3 flex-wrap">
                    <button className="bg-red-700 text-zinc-50 md:px-6 
                    px-3.55 md:py-4 py-2.5 rounded-full uppercase md:text-base 
                    text-sm medium group flex items-center justify-center 
                    md:gap-x-3 gap-x gap-x-1.5 ease-in-out duration-700">
                        Request test ride
                        <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-300'/>
                    </button>
                    <button className="border text-center border-zinc-300 text-zinc-300 md:px-6 px-3.5 md:py-4 
                    py-2 rounded-full uppercase md:text-base text-sm font-medium group flex items-center
                     justify-center md:gap-x-3 gap-x-1.5 ease-in-out duration-300">
                        learn more  
                        <GoArrowUpRight className='text-xl group-hover:rotate-45 ease-in-out duration-300'/>
                     </button>
                </div>
            </div>
            {/* Hero image*/}
            <div className="md:w-[55%] w-full h-auto">
                <img src={HeroImg} alt="G-car" className="w-full" />
            </div>
        </Layout>
        {/*right car shadow*/}
        <div className="absolute md:flex hidden w-[900px] h-[550px] rounded-full  -top-24 -right-96
        -rotate-[35deg] bg-gradient-to-r from-red-950/80 via-zinc-950 to-transparent " />
    </div>
  )
}

export default Hero