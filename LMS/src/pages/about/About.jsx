import React from 'react'
import { FaBook, FaTeamspeak } from 'react-icons/fa'
import { FaArrowRight, FaArrowRightLong, FaExplosion } from 'react-icons/fa6'

const About = () => {
  return (
    <div className='w-full lg:pr-28 md:pr-16 sm:pr-7 pr-4 flex items-center 
    justify-between gap-9 flex-wrap md:mb-0 mb-10'>
        {/*about img*/}
        <div className="md:w-[45%] w-full flex items-center justify-start">
            <img src="https://media.istockphoto.com/id/950609102/photo/girl-solving-mathematical-addition.webp?a=1&b=1&s=612x612&w=0&k=20&c=nSjMKZrfK11XyiWdcMC3UNR3wad7uEN8NVQQa4kRqco=" alt="" className="w-full h-auto object-center object-cover rounded-md" />
        </div> 
         {/*about content*/}
         <div className="md:w-[45%] w-full h-auto md:pl-0 pl-4">
            <h1 className="text-2xl font-bold text-violet-600 mb-3 mt-10">
                About Us
            </h1>
            <p className="text-base text-neutral-500 mb-4">
                We are providing the best service in country. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, quo? Aut doloremque sunt sapiente maiores quae, pariatur consequuntur laudantium dolorem temporibus quisquam minima voluptas fuga dolor labore ullam eaque, aliquam corrupti! Recusandae, voluptates!
            </p>
            {/*WHY us*/}
            <p className="text-base text-neutral-500 font-semibold mb-3">
                Why Us?
            </p>
            <div className="w-full grid md:grid-cols-4 sm:grid-cols-3 grid-cols-3 md:gap-7 sm:gap-6 mb-8">
                <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 
                rounded-md px-3 py-5">
                    <div className="md:w-16 sm:w-14 w-10 md:h-16 sm:h-14 h-10 rounded-full bg-zinc-950/10
                     flex items-center justify-center md:text-3xl sm:text-2xl text-xl">
                        <FaBook />
                    </div>
                    <p className="md:text-base text-sm text-neutral-700 font-semibold text-center">
                        Online Courses
                    </p>
                </div>
                <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 
                rounded-md px-3 py-5">
                    <div className="md:w-16 sm:w-14 w-10 md:h-16 sm:h-14 h-10 rounded-full bg-zinc-950/10
                     flex items-center justify-center md:text-3xl sm:text-2xl text-xl">
                        <FaTeamspeak />
                    </div>
                    <p className="md:text-base text-sm text-neutral-700 font-semibold text-center">
                        Expert instructors
                    </p>
                </div>
                <div className="w-full h-auto flex flex-col items-center justify-center gap-4 bg-neutral-200/60 
                rounded-md px-3 py-5">
                    <div className="md:w-16 sm:w-14 w-10 md:h-16 sm:h-14 h-10 rounded-full bg-zinc-950/10
                     flex items-center justify-center md:text-3xl sm:text-2xl text-xl">
                        <FaExplosion />
                    </div>
                    <p className="md:text-base text-sm text-neutral-700 font-semibold text-center">
                        Sufficient resorces 
                    </p>
                </div>
            </div>
            {/*button*/}
            <button className="bg-violet-600 px-4 py-2 mb-10 rounded-md border-violet-600 text-sm
           text-neutral-50 font-medium hover:bg-violet-600/5 hover:text-violet-600 ease-in-out duration-300 flex items-center gap-x-2">
                Get Started<FaArrowRightLong className='text-sm'/>
            </button>
         </div>
    </div>
  )
}

export default About